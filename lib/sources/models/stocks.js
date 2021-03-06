goog.provide( 'zz.mvc.models.Stocks' );
goog.provide( 'zz.mvc.models.StocksDatarow' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );



/**
* @param {!zz.models.Dataset} dataset
* @param {?Array.<string>} opt_data
* @extends {zz.models.Datarow}
* @constructor
*/
zz.mvc.models.StocksDatarow = function( dataset, opt_data ){

    /**
     * @type {string}
     */
    this.date = undefined;

    /**
     * @type {string}
     */
    this.price = undefined;

    /**
     * @type {string}
     */
    this.symbol = undefined;



/**
* Call parent constructor.
*/
zz.models.Datarow.call( this, dataset, opt_data );
};

goog.inherits( zz.mvc.models.StocksDatarow, zz.models.Datarow );

/**
* @param {goog.event.EventTarget=} opt_parent
* @param {Array.<Array>=} opt_data
* @extends {zz.models.Dataset}
* @constructor
*/
zz.mvc.models.Stocks = function( opt_parent, opt_data ){

zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( zz.mvc.models.Stocks, zz.models.Dataset );

/**
* Current dataset row type.
* @constructor
* @overwrite
* @type {zz.mvc.models.StocksDatarow}
*/
zz.mvc.models.Stocks.prototype.DatarowConstructor = zz.mvc.models.StocksDatarow;

/**
* Return zz.mvc.models.StocksDatarow schema object.
* @override
* @returns {Object}
*/
zz.mvc.models.Stocks.prototype.getDatarowSchema = function( ){

return {
        date: {
                index: 0,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        price: {
                index: 1,
                type: zz.models.enums.FieldType.STRING,
                required: false
        },
        symbol: {
                index: 2,
                type: zz.models.enums.FieldType.STRING,
                required: false
        }
};
};