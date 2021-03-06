goog.provide( 'zz.mvc.models.View' );
goog.provide( 'zz.mvc.models.ViewDatarow' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );

goog.require( 'zz.mvc.models.Widget' );


/**
* @param {!zz.models.Dataset} dataset
* @param {?Array.<string>} opt_data
* @extends {zz.models.Datarow}
* @constructor
*/
zz.mvc.models.ViewDatarow = function( dataset, opt_data ){

    /**
     * @type {string}
     */
    this.title = undefined;

    /**
     * @type {zz.mvc.models.Widget}
     */
    this.widgets = undefined;



/**
* Call parent constructor.
*/
zz.models.Datarow.call( this, dataset, opt_data );
};

goog.inherits( zz.mvc.models.ViewDatarow, zz.models.Datarow );

/**
* @param {goog.event.EventTarget=} opt_parent
* @param {Array.<Array>=} opt_data
* @extends {zz.models.Dataset}
* @constructor
*/
zz.mvc.models.View = function( opt_parent, opt_data ){

zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( zz.mvc.models.View, zz.models.Dataset );

/**
* Current dataset row type.
* @constructor
* @overwrite
* @type {zz.mvc.models.ViewDatarow}
*/
zz.mvc.models.View.prototype.DatarowConstructor = zz.mvc.models.ViewDatarow;

/**
* Return zz.mvc.models.ViewDatarow schema object.
* @override
* @returns {Object}
*/
zz.mvc.models.View.prototype.getDatarowSchema = function( ){

return {
        title: {
                index: 0,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        widgets: {
                index: 1,
                type: zz.mvc.models.Widget,
                required: false
        }
};
};