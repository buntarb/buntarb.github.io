angular.module('admin-lang', [])
    .controller('Caption', ['$scope', function($scope){
        $scope.ButtonCapt = 'Button Caption';
    }])
    .controller('Date', ['$scope', function($scope){
        $scope.toggleCollapse = function(){
            $scope.isCollapsed = !$scope.isCollapsed;
        }
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.toggleWeeks = function () {
            $scope.showWeeks = ! $scope.showWeeks;
        };
        $scope.clear = function () {
            $scope.dt = null;
        };
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };
        $scope.toggleMin = function() {
            $scope.minDate = ( $scope.minDate ) ? null : new Date();
        };
        $scope.isCollapsed = true;
        $scope.today();
        $scope.showWeeks = false;
        $scope.minDate = new Date('2010, 01, 01');
    }])