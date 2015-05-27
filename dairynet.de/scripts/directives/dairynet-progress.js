( function( ){"use strict";

	function dairynetProgress( ){

		return {

			templateUrl: 'templates/directives/dairynet-progress.html',
			scope: true,
			link: function( scope, elem, attr ){


				scope.$watch( function( ){

					return attr['dairynetProgress'];

				}, function( val ){

					scope.width = ( val * 100 ) + '%';
				} )
			}
		}
	}
	angular.module( "dairynet" ).directive( "dairynetProgress", [dairynetProgress] );

} )( );