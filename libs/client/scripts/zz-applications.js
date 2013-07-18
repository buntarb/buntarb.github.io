angular.module('zz', []).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when(
        '/apps/admin-lang', {
          templateUrl: '/apps/admin-lang/client/module.html'/*, 
          controller: AdminLangModuleCtrl*/
        }).
      otherwise({redirectTo: '/index.htm'});
  }]);
