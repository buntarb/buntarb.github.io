angular.module('zz', []).
  config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/app/', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
  }]);
