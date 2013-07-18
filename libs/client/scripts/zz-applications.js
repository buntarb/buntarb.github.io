angular.module('zz', []).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when(
        '/apps/admin-lang', {
          templateUrl: '/apps/admin-lang/client/templates/module.html',
          resolve: resolveController('apps/admin-lang/client/scripts/module.js')
        }).
      otherwise({redirectTo: '/index.htm'});
  }]);
