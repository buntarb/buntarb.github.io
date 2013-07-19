angular.module('zz', ['loadOnDemand', 'ui.bootstrap'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/apps/admin-lang', {template: '<div load-on-demand="\'admin-lang\'"></div>'})
            .otherwise({redirectTo: '/'});
    }])
    .config(['$loadOnDemandProvider', function($loadOnDemandProvider){
        var modules = [{
                name: 'admin-lang',
                script: 'apps/admin-lang/client/script/module.js',
                template: 'apps/admin-lang/client/template/module.html'
            }];
        $loadOnDemandProvider.config(modules);
    }])
    .controller('NavbarCtrl', ['$scope', function($scope){
        $scope.CurrentPhoneMenuState = false;
        $scope.CurrentPhoneMenuClass = "nav-collapse collapse";
        $scope.CurrentPhoneMenuHeight = "0px";
        $scope.TogglePhoneMenuClass = function(){
            $scope.CurrentPhoneMenuState = !$scope.CurrentPhoneMenuState;
            $scope.CurrentPhoneMenuClass = ($scope.CurrentPhoneMenuState) ? "nav-collapse in collapse" : "nav-collapse collapse";
            $scope.CurrentPhoneMenuHeight = ($scope.CurrentPhoneMenuState) ? "auto" : "0px";
        }
    }]);
    
