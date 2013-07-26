<?php
    try{
        // Регистрация загрузчика классов
        $loader = new \Phalcon\Loader();
        $loader->registerDirs(array(
            '../../apps/menu/server/controller/',
            '../../apps/menu/server/model/'
        ))->register();

        // Создание Объекта внедрения зависимостей
        $di = new Phalcon\DI\FactoryDefault();

        // Установки шифрования
        $di->set('crypt', function() {
            $crypt = new Phalcon\Crypt();
            $crypt->setKey('123321');
            return $crypt;
        });

        // Установки кук
        $di->set('cookies', function() {
            $cookies = new Phalcon\Http\Response\Cookies();
            return $cookies;
        });

        // Регистрация представлений
        $di->set('view', function(){
            $view = new \Phalcon\Mvc\View();
            $view->setViewsDir('../../apps/menu/server/view/');
            return $view;
        });

        // Соединение с базой данных
        $di->set('mongo', function(){
            $mongo = new Mongo();
            return $mongo->selectDb("zz");
        }, true);

        // Загрузка менеджера коллеций
        $di->set('collectionManager', function(){
            return new Phalcon\Mvc\Collection\Manager();
        }, true);

        // Обработка запроса
        $application = new \Phalcon\Mvc\Application($di);

        // Вывод результата
        echo $application->handle()->getContent();

    }catch(\Phalcon\Exception $e){
        $e->getMessage();
    }
?>