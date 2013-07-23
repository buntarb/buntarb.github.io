angular.module('zz.gui.navbar', ['ui.bootstrap.transition'])
    .directive('navbar', ['$transition', function($transition){
        /**
         * Функция изменения высоты элемента с auto на фиксированное значение. Данная подмена необходима
         * для изменения высоты элемента средствами CSS.
         * @param scope
         * @param element
         * @param height
         */
        var fixUpHeight = function(scope, element, height){
            // Объект DOM-элемента, содержащего пункты меню.
            var menu = angular.element(element.children()[0].childNodes[1].childNodes[5]);
            // Убираем CSS-класс collapse для предотвращения изменения элемента при изменении высоты на значение auto.
            menu.removeClass('collapse');
            // Изменяем значение свойства height.
            menu.css({height: height});
            // Считываем значение ширины элемента, для оповещения браузера об изменении высоты элемента (хак).
            var x = element[0].offsetWidth;
            // Возвращаем класс collapse.
            menu.addClass('collapse');
        };
        return{
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: '../libs/client/template/navbar/navbar.html',
            scope: {
                brandTitle: '@',
                brandLink: '@',
				config: '@'
            },
			controller: ['$scope', '$location', function($scope, $location){
				$scope.items = $scope.$eval($scope.config);
				$scope.selectedItem = '/#!'+$location.path();
			}],
            link: function(scope, element, attrs){
				/**
                 * Объект DOM-элемента кнопки разворачивания/сворачивания меню для мобильных устройств.
                 * @type {*}
                 */
                var button = angular.element(element.children()[0].childNodes[1].childNodes[1]);
                /**
                 * Объект DOM-элемента, содержащего пункты меню.
                 * @type {*}
                 */
                var menu = angular.element(element.children()[0].childNodes[1].childNodes[5]);
                /**
                 * DOM-элемент, содержащий пункты меню.
                 * @type {*}
                 */
                var menuDom = element[0].childNodes[1].childNodes[1].childNodes[5];
                /**
                 * Флаг закрытого меню.
                 * @type {Boolean}
                 */
                var isClosed = true;
                /**
                 * Флаг игнорирования анимации.
                 * @type {Boolean}
                 */
                var initialAnimationSkip = true;
                /**
                 * Переменная для хранения объекта текущей анимации.
                 * @type {*}
                 */
                var currentTransition;
                /**
                 * Функция преобразования элемента.
                 * @param change - элемент для преобразования.
                 */
                var doTransition = function(change){
                    // В случаях, когда запущено преобразование во время выполнения предыдущего преобразования,
                    // предыдущее преобразование отменяется.
                    if(currentTransition){
                        currentTransition.cancel();
                    }
                    // Получение объекта преобразования.
                    currentTransition = $transition(menu,change);
                    // (?) Определение колбека и ерорбека для объекта currentTransition. Фактически его обнуление
                    // после того, как он отработает (?)
                    currentTransition.then(
                        function(){currentTransition = undefined;},
                        function(){currentTransition = undefined;}
                    );
                    return currentTransition;
                };
                /**
                 * Функция разворачивания меню.
                 */
                function Open(){
                    if(initialAnimationSkip){
                        initialAnimationSkip = false;
                        if(!isClosed){
                            fixUpHeight(scope, element, 'auto');
                        }
                    }else{
                        doTransition({height: menuDom.scrollHeight+'px'})
                            .then(function(){
                                if(!isClosed){
                                    fixUpHeight(scope, element, 'auto');
                                }
                            });
                    }
                    isClosed = false;
                }
                /**
                 * Функция сворачивания меню.
                 */
                function Close(){
                    isClosed = true;
                    if(initialAnimationSkip){
                        initialAnimationSkip = false;
                        fixUpHeight(scope, element, 0);
                    }else{
                        fixUpHeight(scope, element, menuDom.scrollHeight+'px');
                        doTransition({'height':'0'});
                    }
                }
                /**
                 * Функция разворачивания/сворачивания меню.
                 */
				scope.toggleMenu = function(){
					if(isClosed){
                        Open();
                    }else{
                        Close();
                    }
				}
                /**
                 * Функция реакции при выборе пункта меню.
                 */
				scope.selectItem = function(link){
					scope.selectedItem = link;
					if(!isClosed){
						Close();
					}
				};
                /**
                 * Функция отслеживания активного пункта меню.
                 */
				scope.isActiveItem = function(link){
					if(scope.selectedItem === link){
						return true;
					}else{
						return false;
					}
				}
                /**
                 * Инициализация наблюдателя за изменением высоты меню.
                 */
                scope.$watch(function(){return menuDom.scrollHeight;}, function(value){
                    if(value !== 0){
                        if(!isClosed){
                            if(initialAnimationSkip){
                                fixUpHeight(scope, element, menuDom.scrollHeight+'px');
                            }else{
                                fixUpHeight(scope, element, 'auto');
                            }
                        }
                    }
                });
                /**
                 * Стартовая иниализация элемента.
                 */
                Close();
            }
        }
    }]);
//    .directive('directiveName', function factory(injectables) {
//        var directiveDefinitionObject = {
//            /**
//             * Приоритет при параллельном компилировании нескольких дирректив.
//             * */
//            priority: 0,
//            /**
//             *  terminal (bool) - если true, то дирректива будет скомпилированна последней из
//             *  списка с одинаковым приоритетом.
//             */
//            terminal: false,
//            /**
//             * html-шаблон, используемый диррективой для замены текущего элемента. При этом заменяются все элементы
//             * (аттрибуты, классы и пр.) текущего элемента.
//             */
//            template: '<div></div>',
//            /**
//             * Путь к файлу с html-шаблоном, используемым диррективой.
//             */
//            templateUrl: 'directive.html',
//            /**
//             * Флаг замены (удаления) элемента, в котором была обозначена дирректива.
//             */
//            replace: false,
//            /**
//             * Флаг вставки шаблона (template или templateUrl) внутрь элемента, в котором была обозначена дирректива.
//             */
//            transclude: false,
//            /**
//             * Строка, определяющая специфику определения диррективы в документе. Состоит из комбинации
//             * букв:
//             * E - <my-directive></my-directive>;
//             * A - <div my-directive="exp"></div>
//             * C - <div class="my-directive: exp;"></div>
//             * M - <!-- directive: my-directive exp -->
//             */
//            restrict: 'A',
//            /**
//             * Если установлено:
//             * true - для диррективы будет создана новая область видимости;
//             * {} (object hash) - будет создана новая "изолированная" область видимости. Отличие от
//             * обычной области видимости в том, что она не наследуется от родительской области. В зависимости
//             * от значения присвоенного элементу области видимости, его поведение будет отличаться:
//             scope:{
//                 // В таком случае данные берутся из атрибута элемента родительской области, т.е. атрибута
//                    в котором была объявлена дирректива (начальный DOM до замены или добавления шаблона). При этом,
//                    при изменении значения аттрибута в атрибуте диррективы, оно изменется и в изолированной
//                    области видимости. Если имя атрибута не совпадает со значением var1, то можно указывать
//                    полное имя атрибута в виде @dirAttr. //
//             var1: '@',
//             // Обозначение для связывания с функцией. Эта функция также определяется в родительской области.
//             Название функции соответствует атрибуту диррективы (<dir x-fun="var1=!var1"></dir>). В шаблоне
//             это может выглядеть так <div ng-click="xFun()"></div>. При таком подходе нет необходимости
//             описывать функцию для диррективы в изолированной области видимости. Ее можно добавить
//             непосредственно в атрибуте диррективы. Это значительно расширяет возможности повторного
//             использования кода. //
//             xFun: '&', // ;
//             // В данном случае создается двунаправленная связь между изолированной и родительской областями
//             видимости. Иными словами, при изменении значения атрибута на верхнем уровне, значение
//             переменной в изолированной области видимости также будет изменено. И наоборот, при изменении
//             переменной внутри изолированной области, изменится атрибут диррективы.
//             var2: '='  // установка видимости для связывания в текущей диррективе;
//             }
//             */
//            scope: false,
//            /**
//             * controller - функция-конструктор контроллера. Контроллер инициализируется до начала фазы
//             * pre-linking и он доступен для других дирректив если они запрашивают его по имени (смотреть
//             * аттрибут require). Это позволяет диррективам коммуницировать между собой, и наследовать
//             * поведение.
//             * Контроллер внедряется со следующими параметрами:
//             * $scope - область видимости ассоциированная с элементом;
//             * $element - текущий элемент;
//             * $attrs - объект с аттрибутами текущего элемента;
//             * $transclude - (?) запуск функции связывания предварительно связанных данных (?)
//             *
//             */
//            controller: ["$scope", "$element", "$attrs", "$transclude", "otherInjectables",
//                function($scope, $element, $attrs, $transclude, otherInjectables) {
//
//                }],
//            /**
//             * Запрос на другой контроллер в виде строки с его именем. Если перед именем стоит символ:
//             * ? - то при отсутствии такого контроллера не будет выпущено исключение, что позволяет сделать
//             * зависимость опциональной;
//             * ^ - то поиск контроллера будет производится в родительском элементе.
//             * require: 'zzCtrl' / require: '?zzCtrl'
//             */
//            require: "",
//            /**
//             * Функция компиляции необходимая для преобразования шаблонов DOM. Используется редко
//             * в таких диррективах как ngView или ngRepeat.
//             * @param tElement - элемент шаблона — элемент, в котором была объявлена директива​​.
//             * Можно с уверенностью преобразовать в шаблон только этот элемент и дочерние элементы.
//             * @param tAttrs - tAttrs - унифицированный список атрибутов, объявленных в этом элементе,
//             * распределяется между всеми директивами функций компиляции.
//             * @param transclude - включающая функция линковки: function(scope, cloneLinkingFn).
//             * @return {Object}
//             */
//            compile: function compile(tElement, tAttrs, transclude) {
//                return {
//                    /**
//                     * Функция предварительной линковки. Вызывается до того, как дочерний элемент будет связан.
//                     * Не безопасна для выполнения изменений DOM модели, так как функция связывания компилятора
//                     * не сможет найти правильные элементы для связывания.
//                     * @param scope
//                     * @param iElement
//                     * @param iAttrs
//                     * @param controller
//                     */
//                    pre: function preLink(scope, iElement, iAttrs, controller) {
//
//                    },
//                    /**
//                     * Функция завершающей линковки. Вызывается после того, как дочерний элемент был связан.
//                     * В функции пост связывания можно безопасно производить изменения DOM модели.
//                     * @param scope
//                     * @param iElement
//                     * @param iAttrs
//                     * @param controller
//                     */
//                    post: function postLink(scope, iElement, iAttrs, controller) {
//
//                    }
//                }
//            },
//            /**
//             * Функция связывания данных. Отвечает за регистрацию подписчиков и обновление DOM. Вызывается
//             * после клонирования шаблона. Здесь должна располагаться основная часть логики диррективы.
//             * @param scope - область, используемая директивой для регистрации наблюдателей.
//             * @param iElement - элемент, на котором определена директива. Безопасно манипулировать дочерними
//             * элементами только в функции postLink, так как потомки уже были связаны между собой.
//             * @param iAttrs - нормализованный список атрибутов данного элемента, доступный для всех функций
//             * связывания директив.
//             * @param controller - экземпляр контроллера в случае, если хотя бы одна директива элемента определяет
//             * контроллер. Контроллер доступен для всех директив, что позволяет использовать его в качестве канала
//             * связи между ними.
//             */
//            link: function postLink(scope, iElement, iAttrs, controller) {
//
//            }
//        };
//        return directiveDefinitionObject;
//    });