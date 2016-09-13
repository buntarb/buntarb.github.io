/**
 * @fileoverview Provide zz.i18n.services.SoyMessages.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.i18n.services.SoyMessages' );

goog.require( 'soy' );
goog.require( 'goog.dom' );
goog.require( 'goog.array' );

goog.require( 'zz.services.BaseService' );

/**
 * Base class for all views messages services.
 * @constructor
 * @extend {zz.services.BaseService}
 */
zz.i18n.services.SoyMessages = function( tpl ){

	this.msg_ = {};
	this.msgElement_ = soy.renderAsElement( tpl );
	this.extractMessages_( );

	goog.base( this );
};
goog.inherits( zz.i18n.services.SoyMessages, zz.services.BaseService );

/**
 * @private
 */
zz.i18n.services.SoyMessages.prototype.extractMessages_ = function( ){

	if( this.msgElement_.children.length ){

		goog.array.forEach(

			goog.dom.getElementsByTagNameAndClass( goog.dom.TagName.SPAN, undefined, this.msgElement_ ),
			function( span ){

				this.msg_[ span.id ] = goog.dom.getTextContent( span );

			}, this );
	}else{

		this.msg_[ this.msgElement_.id ] = goog.dom.getTextContent( this.msgElement_ );
	}
	this.msgElement_ = undefined;
	delete this.msgElement_;
};

/**
 * @param {string} id
 * @returns {string}
 */
zz.i18n.services.SoyMessages.prototype.getMessage = function( id ){

	return this.msg_[ id ];
};