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

        // Регистрация представлений
        $di->set('view', function(){
            $view = new \Phalcon\Mvc\View();
            $view->setViewsDir('../../apps/menu/server/view/');
            return $view;
        });

        // Соединение с базой данных
        $di->set('mongo', function(){
            $mongo = new Mongo("mongodb:///tmp/mongodb-27017.sock,localhost:27017");
            return $mongo->selectDb("test");
        }, true);

        // Обработка запроса
        $application = new \Phalcon\Mvc\Application($di);

        // Вывод результата
        echo $application->handle()->getContent();

    }catch(Exception $e){
        echo "PhalconException: ", $e->getMessage();
    }
?>