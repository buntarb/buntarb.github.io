angular.module('zz', ['loadOnDemand', 'ngResource', 'ui.bootstrap', 'zz.gui.navbar'])
	/*.factory('zzMenu', function($resource){
		return $resource(
			'/apps/menu/server/items.json',
			{

			},
			{
				query: {
					method: 'GET'
				},
				isArray: true
			});
	})*/
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
    /*.controller('NavbarCtrl', ['$scope', 'zzMenu', function($scope, zzMenu){
        $scope.menuItems = zzMenu.query();
        $scope.getItems = function(){
            return $scope.menuItems;
        }
    }])*/
	.controller('NavbarCtrl', ['$scope', function($scope){
		/*$scope.menuItems = zzMenu.query();
		$scope.getItems = function(){
			return $scope.menuItems;
		}*/
	}]);