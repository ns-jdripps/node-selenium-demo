/*
 * decaffeinate suggestions:
 * DS001: Remove Babel/TypeScript constructor workaround
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const {BasePage} = require('./base');
var browser = require('./browser');

// Base dashboard object from which to build other dashboard object.
class BaseDashboard extends BasePage {

  constructor(el) {
    {
      // Hack: trick Babel/TypeScript into allowing this before super.
      if (false) { super(); }
      let thisFn = (() => { this; }).toString();
      let thisName = thisFn.slice(thisFn.indexOf('{') + 1, thisFn.indexOf(';')).trim();
      eval(`${thisName} == this;`);
    }
    if (el == null) { el = browser.$('.selenium-dashboard'); }
    this.el = el;
    this.search = browser.$('#dashboard-search-input input');
    this.sortByDropdown = browser.$('#sort-by-dropdown');
    this.viewDropdown = browser.$('#view-dropdown');
  }
}

exports.BaseDashboard = BaseDashboard;
