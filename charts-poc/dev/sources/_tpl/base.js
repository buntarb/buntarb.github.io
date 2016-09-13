// This file was automatically generated from base.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace zz.mvc.templates.
 */

goog.provide('zz.mvc.templates');

goog.require('soy');
goog.require('soydata');


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.appDataset = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('application') + '" data-set="' + soy.$$escapeHtml(opt_data.uid) + '"></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.appDataset.soyTemplateName = 'zz.mvc.templates.appDataset';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.appDatarow = function(opt_data, opt_ignored) {
  return '<div data-row="' + soy.$$escapeHtml(opt_data.uid) + '"><div class="' + goog.getCssName('layout') + '" data-type="' + soy.$$escapeHtml(opt_data.fields.layout) + '"></div></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.appDatarow.soyTemplateName = 'zz.mvc.templates.appDatarow';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.layoutDataset = function(opt_data, opt_ignored) {
  return '<div data-set="' + soy.$$escapeHtml(opt_data.uid) + '"></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.layoutDataset.soyTemplateName = 'zz.mvc.templates.layoutDataset';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.layoutDatarow = function(opt_data, opt_ignored) {
  return '<div data-row="' + soy.$$escapeHtml(opt_data.uid) + '"><h4>Application Title</h4><div class="' + goog.getCssName('view') + '" data-type="' + soy.$$escapeHtml(opt_data.fields.views) + '"></div></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.layoutDatarow.soyTemplateName = 'zz.mvc.templates.layoutDatarow';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.viewDataset = function(opt_data, opt_ignored) {
  return '<div data-set="' + soy.$$escapeHtml(opt_data.uid) + '"></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.viewDataset.soyTemplateName = 'zz.mvc.templates.viewDataset';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.viewDatarow = function(opt_data, opt_ignored) {
  return '<div data-row="' + soy.$$escapeHtml(opt_data.uid) + '"><h4>Dashboard Title:' + soy.$$escapeHtml(' ' + opt_data.datarow.title) + '</h4><div class="' + goog.getCssName('widget') + '" data-type="' + soy.$$escapeHtml(opt_data.fields.widgets) + '"></div></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.viewDatarow.soyTemplateName = 'zz.mvc.templates.viewDatarow';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.widgetDataset = function(opt_data, opt_ignored) {
  return '<div class="' + goog.getCssName('mdl-grid') + '" data-set="' + soy.$$escapeHtml(opt_data.uid) + '"></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.widgetDataset.soyTemplateName = 'zz.mvc.templates.widgetDataset';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @return {string}
 * @suppress {checkTypes|uselessCode}
 */
zz.mvc.templates.widgetDatarow = function(opt_data, opt_ignored) {
  return '<div data-row="' + soy.$$escapeHtml(opt_data.uid) + '" class="' + goog.getCssName('mdl-cell') + ' ' + goog.getCssName('mdl-cell--4-col') + ' ' + goog.getCssName('mdl-card') + ' ' + goog.getCssName('mdl-shadow--2dp') + ' ' + ((opt_data.datarow.type != 'scatter') ? goog.getCssName('highlighted-element') : '') + '"><h4>' + soy.$$escapeHtml(opt_data.datarow.title) + '</h4><div data-type="' + soy.$$escapeHtml(opt_data.fields.data) + '"></div></div>';
};
if (goog.DEBUG) {
  zz.mvc.templates.widgetDatarow.soyTemplateName = 'zz.mvc.templates.widgetDatarow';
}
