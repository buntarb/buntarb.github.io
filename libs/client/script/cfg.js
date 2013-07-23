angular.module('zz', ['loadOnDemand', 'ngResource', 'ui.bootstrap', 'zz.gui.navbar'])
	.factory('zzMenu', function($resource){
		return $resource(
			'/apps/menu/server/items.json',
			{
				//param: 'items',
				//format: 'json',
				//json_callback: 'JSON_CALLBACK'
			},
			{
				query: {
					method: 'GET'
				},
				isArray: true
			});
	})
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
	.controller('NavbarCtrl', ['$scope', 'zzMenu', function($scope, zzMenu){
		$scope.menuItems = zzMenu.query();
		$scope.getItems = function(){
			console.log($scope.menuItems);
			return $scope.menuItems;
		}
	}]);
    
