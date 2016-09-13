goog.provide( 'zz.mvc.models.Application' );
goog.provide( 'zz.mvc.models.ApplicationDatarow' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );

goog.require( 'zz.mvc.models.Layout' );


/**
* @param {!zz.models.Dataset} dataset
* @param {?Array.<string>} opt_data
* @extends {zz.models.Datarow}
* @constructor
*/
zz.mvc.models.ApplicationDatarow = function( dataset, opt_data ){

    /**
     * @type {string}
     */
    this.title = undefined;

    /**
     * @type {string}
     */
    this.version = undefined;

    /**
     * @type {string}
     */
    this.authors = undefined;

    /**
     * @type {string}
     */
    this.copyright = undefined;

    /**
     * @type {zz.mvc.models.Layout}
     */
    this.layout = undefined;



/**
* Call parent constructor.
*/
zz.models.Datarow.call( this, dataset, opt_data );
};

goog.inherits( zz.mvc.models.ApplicationDatarow, zz.models.Datarow );

/**
* @param {goog.event.EventTarget=} opt_parent
* @param {Array.<Array>=} opt_data
* @extends {zz.models.Dataset}
* @constructor
*/
zz.mvc.models.Application = function( opt_parent, opt_data ){

zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( zz.mvc.models.Application, zz.models.Dataset );

/**
* Current dataset row type.
* @constructor
* @overwrite
* @type {zz.mvc.models.ApplicationDatarow}
*/
zz.mvc.models.Application.prototype.DatarowConstructor = zz.mvc.models.ApplicationDatarow;

/**
* Return zz.mvc.models.ApplicationDatarow schema object.
* @override
* @returns {Object}
*/
zz.mvc.models.Application.prototype.getDatarowSchema = function( ){

return {
        title: {
                index: 0,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        version: {
                index: 1,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        authors: {
                index: 2,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        copyright: {
                index: 3,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        layout: {
                index: 4,
                type: zz.mvc.models.Layout,
                required: false
        }
};
};