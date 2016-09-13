/**
 * @fileoverview Provide zz.i18n.services.DefaultFormatter.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.i18n.services.DefaultFormatter' );

goog.require( 'zz.services.BaseService' );

/**
 * Base formatter class.
 * @constructor
 * @extend {zz.services.BaseService}
 */
zz.i18n.services.DefaultFormatter = function( ){

	goog.base( this );
};
goog.inherits( zz.i18n.services.DefaultFormatter, zz.services.BaseService );
goog.addSingletonGetter( zz.i18n.services.DefaultFormatter );

/**
 * Formatting model value to view form.
 * @param {*} modelValue
 * @returns {*}
 */
zz.i18n.services.DefaultFormatter.prototype.format = function( modelValue ){

	return modelValue;
};

/**
 * Parse model value from view form.
 * @param {*} viewValue
 * @returns {*}
 */
zz.i18n.services.DefaultFormatter.prototype.parse = function( viewValue ){

	return viewValue;
};