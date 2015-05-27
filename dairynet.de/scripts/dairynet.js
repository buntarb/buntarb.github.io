( function( ){"use strict";

	function configApp( $locationProvider, $routeProvider ){

		// Optimize url for search engines
		$locationProvider

			.hashPrefix('!');

		// Router settings
		$routeProvider

			.when( '/', {

				template: function( ){

					return '<div>Main page. {{com.test}}</div>';
				},
				resolve: {

					load: ["$q", function( $q ){

						console.log( $q );
					} ]
				}
			})
			.when('/:app/:view',{

				template: function( ){

					return '<div>Other pages. {{com.test}}</div>';
				},
				resolve: {

					load: ["$q", function( $q ){

						console.log( $q );
					} ]
				}
			})
			.otherwise({redirectTo:'/'});
	}

	function runApp( $q ){

		//
	}

	angular.module( "dairynet", ["ngRoute", "ngMockE2E"] )

		.config( [

			"$locationProvider",
			"$routeProvider",
			configApp
		] )
		.run( [
			"$q",
			runApp
		] );
} )( );