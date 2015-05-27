( function( ){"use strict";

	// We can move this function to common controller if we have it.
	function resolver( $q, $http, $route, $rootScope, adminSyncData ){

		var d = $q.defer();
		if( angular.isUndefined( $route.current.params['app'] ) ){

			$rootScope['pageTitle'] = 'Dashboard';
			d.resolve( );

		}else if( $route.current.params['app'] === 'admin' ){

			if( $route.current.params['view'] === 'index' ){

				$rootScope['pageTitle'] = 'Admin Area';
				d.resolve( );

			}else if( $route.current.params['view'] === 'sync' ){

				$rootScope['pageTitle'] = 'Sync Admin Area';

				// Update incoming data before view resolved.
				$http.get( 'rest/sync', {cache: false} )

					.success( function( response ){

						adminSyncData['data'] = response;
						d.resolve( );

					} );
			}
		}
		return d.promise;
	}
	function configApp( $locationProvider, $routeProvider ){

		// Optimize url for search engines
		$locationProvider

			.hashPrefix('!');

		// Router settings
		$routeProvider

			.when( '/', {

				templateUrl: 'templates/index.html',
				resolve: {

					load: ["$q", "$http", "$route", "$rootScope", "adminSyncData", resolver]
				}
			} )
			.when( '/:app/:view', {

				templateUrl: function( $route ){

					return 'templates/app/' + $route['app'] + '/'+ $route['view'] +'.html';
				},
				resolve: {

					load: ["$q", "$http", "$route", "$rootScope", "adminSyncData", resolver]
				}
			} )
			.otherwise( {

				redirectTo: '/'
			} );
	}
	function runApp( $httpBackend, mockSyncConst ){

		$httpBackend.whenGET( /templates/ ).passThrough( );

		// Add sync REST methods
		$httpBackend.whenGET( 'rest/sync' ).respond( function( ){

			return [200, mockSyncConst, {}];
		} );
		$httpBackend.whenPOST( 'rest/sync' ).respond( function( ){

			return [501, {}, {}];
		} );
		$httpBackend.whenPUT( 'rest/sync' ).respond( function( ){

			return [501, {}, {}];
		} );
		$httpBackend.whenDELETE( 'rest/sync' ).respond( function( ){

			return [501, {}, {}];
		} );

	}
	angular.module( "dairynet", ["ngRoute", "ngMockE2E", "angular.filter"] )

		.config( [

			"$locationProvider",
			"$routeProvider",
			configApp
		] )
		.run( [

			"$httpBackend",
			"mockSyncConst",
			runApp
		] );
} )( );