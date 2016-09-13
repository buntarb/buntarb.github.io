/**
 * @fileoverview Provide zz.i18n.services.DecimalFormatter.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.i18n.services.DecimalFormatter' );

goog.require( 'goog.i18n.NumberFormat' );
goog.require( 'goog.i18n.NumberFormat.Format' );

goog.require( 'zz.services.BaseService' );

/**
 * Base formatter class.
 * @constructor
 * @extend {zz.services.BaseService}
 */
zz.i18n.services.DecimalFormatter = function( ){

	this.num_ = new goog.i18n.NumberFormat( goog.i18n.NumberFormat.Format.DECIMAL );
	goog.base( this );
};
goog.inherits( zz.i18n.services.DecimalFormatter, zz.services.BaseService );
goog.addSingletonGetter( zz.i18n.services.DecimalFormatter );

/**
 * Formatting model value to view form.
 * @param {number} modelValue
 * @returns {string}
 */
zz.i18n.services.DecimalFormatter.prototype.format = function( modelValue ){

	return goog.isDefAndNotNull( modelValue ) ? this.num_.format( modelValue ) : '';
};

/**
 * Parse model value from view form.
 * @param {string} viewValue
 * @returns {number}
 */
zz.i18n.services.DecimalFormatter.prototype.parse = function( viewValue ){

	return goog.isDefAndNotNull( viewValue ) && viewValue !== '' && viewValue === viewValue ?

		this.num_.parse( viewValue ) :
		null;
};