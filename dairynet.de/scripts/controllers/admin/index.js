( function( ){"use strict";

	function adminIndexCtrl( $scope, constantMenuAdmin ){

		$scope['items'] = constantMenuAdmin;

	}
	angular.module( "dairynet" )

		.controller( 'adminIndexCtrl', [

			"$scope",
			"menuAdminConst",
			adminIndexCtrl
		] );

} )( );