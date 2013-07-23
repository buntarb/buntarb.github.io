angular.module('zz', ['loadOnDemand', 'ngResource', 'ui.bootstrap', 'zz.gui.navbar'])
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
    }]);