( function( ){"use strict";

	function adminSyncCtrl( $scope, $filter, $http, $interval, adminSyncData ){

		var interval;
		$scope.mode = 1;
		$scope.items = $filter( 'orderBy' )( adminSyncData['data'], 'syncDate', true );
		$scope.lastSyncDate = ( new Date( $scope.items[0]['syncDate'] ) ).toLocaleString( );
		$scope.groupData = [];
		$scope.progress = 0;
		$scope.sync = function( ){

			interval = $interval( function( ){

				$scope.progress = $scope.progress + 0.01;
				if( $scope.progress >= 1 ){


					$interval.cancel( interval );
					$scope.progress = 0;
				}

			}, 10 );
			$http.get( 'rest/sync', {cache: false} )

				.success( function( response ){

					adminSyncData['data'] = response;
					parse( );
					// We can cancel progress interval here.
				} );
		};
		$scope.select = function( date ){

			$scope['selectedDate'] = date;
		};
		$scope.list = function( ){

			var res;
			angular.forEach( $scope['groupData'], function( val ){

				if( val['date'] === $scope['selectedDate'] ) res = val['items'];
			} );
			return res;
		};
		function parse( ){

			var currDate = undefined;
			var state = "Ok";
			var conflicts = 0;
			var synced = 0;
			var items = [];
			$scope.groupData = [];
			angular.forEach( $scope.items, function( val ){

				if( angular.isUndefined( currDate ) ){

					currDate = val['syncDate'];
				}
				if( currDate === val['syncDate'] ){

					items.push( val );
					if( val['status'] === 'ERROR' ) state = "Failed";
					if( val['status'] === 'CONFLICT' ) conflicts++;
					synced++;

				}else{

					$scope.groupData.push( {

						"date": currDate,
						"viewDate": ( new Date( currDate ) ).toLocaleString( ),
						"state": state,
						"conflict": conflicts,
						"synced": synced,
						"items": items
					} );
					items = [val];
					currDate = val['syncDate'];
					state = val['status'] === 'ERROR' ? "Failed" : "Ok";
					conflicts = val['status'] === 'Conflict' ? 1 : 0;
					synced = 1;
				}
			} );
			$scope.groupData.push( {

				"date": currDate,
				"viewDate": ( new Date( currDate ) ).toLocaleString( ),
				"state": state,
				"conflict": conflicts,
				"synced": synced,
				"items": items
			} );
		}
		parse( );
	}
	angular.module( "dairynet" )

		.controller( 'adminSyncCtrl', [

			"$scope",
			"$filter",
			"$http",
			"$interval",
			"adminSyncData",
			adminSyncCtrl
		] );

} )( );