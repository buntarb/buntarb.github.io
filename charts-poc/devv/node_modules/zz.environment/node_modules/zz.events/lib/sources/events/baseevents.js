/**
 * @fileoverview Provide zz.events.BaseEvent class.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.events.BaseEvent' );
goog.require( 'goog.events.Event' );

/**
 * Imazzine Developer Lib base event class.
 * @param {string} type
 * @extends {goog.events.Event}
 * @constructor
 */
zz.events.BaseEvent = function( type ){

	goog.base( this, type );
};
goog.inherits( zz.events.BaseEvent, goog.events.Event );