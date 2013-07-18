angular.module('zz', []).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when(
        '/apps/admin-lang', {
          templateUrl: '/apps/admin-lang/client/admin-lang-module.html', 
          controller: AdminLangModuleCtrl
        }).
      otherwise({redirectTo: '/phones'});
  }]);
