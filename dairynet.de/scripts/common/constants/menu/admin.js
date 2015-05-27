( function( ){"use strict";

	var menu = [

		{"name": "Settings", "uri": "#!/"},
		{"name": "Users", "uri": "#!/"},
		{"name": "Support", "uri": "#!/"},
		{"name": "Synchronize", "uri": "#!/admin/sync"}
	];
	angular.module( "dairynet" ).constant( "menuAdminConst", menu );

} )( );