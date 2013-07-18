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
                script: 'apps/admin-lang/client/scripts/module.js',
                template: 'apps/admin-lang/client/templates/module.html'
            }];
        $loadOnDemandProvider.config(modules);
    }]);