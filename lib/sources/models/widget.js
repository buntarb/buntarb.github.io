goog.provide( 'zz.mvc.models.Widget' );
goog.provide( 'zz.mvc.models.WidgetDatarow' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );



/**
* @param {!zz.models.Dataset} dataset
* @param {?Array.<string>} opt_data
* @extends {zz.models.Datarow}
* @constructor
*/
zz.mvc.models.WidgetDatarow = function( dataset, opt_data ){

    /**
     * @type {string}
     */
    this.width = undefined;

    /**
     * @type {string}
     */
    this.height = undefined;

    /**
     * @type {string}
     */
    this.data = undefined;

    /**
     * @type {string}
     */
    this.title = undefined;

    /**
     * @type {string}
     */
    this.type = undefined;



/**
* Call parent constructor.
*/
zz.models.Datarow.call( this, dataset, opt_data );
};

goog.inherits( zz.mvc.models.WidgetDatarow, zz.models.Datarow );

/**
* @param {goog.event.EventTarget=} opt_parent
* @param {Array.<Array>=} opt_data
* @extends {zz.models.Dataset}
* @constructor
*/
zz.mvc.models.Widget = function( opt_parent, opt_data ){

zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( zz.mvc.models.Widget, zz.models.Dataset );

/**
* Current dataset row type.
* @constructor
* @overwrite
* @type {zz.mvc.models.WidgetDatarow}
*/
zz.mvc.models.Widget.prototype.DatarowConstructor = zz.mvc.models.WidgetDatarow;

/**
* Return zz.mvc.models.WidgetDatarow schema object.
* @override
* @returns {Object}
*/
zz.mvc.models.Widget.prototype.getDatarowSchema = function( ){

return {
        width: {
                index: 0,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        height: {
                index: 1,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        data: {
                index: 2,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        title: {
                index: 3,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        type: {
                index: 4,
                type: zz.models.enums.FieldType.STRING,
                required: false
        }
};
};