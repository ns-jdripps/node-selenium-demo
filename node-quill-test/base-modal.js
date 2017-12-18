/*
 * decaffeinate suggestions:
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
var browser = require('./browser');
// Base modal object from which to build other modal objects.
class BaseModal {

  constructor(el) {
    if (el == null) { el = browser.$('.selenium-modal'); }
    this.el = el;
    // this.closeButton = browser.$('.close-button');
    this.title = browser.$('.modal-title');
    // this.deleteButton = browser.$('.delete-button');
    this.applyButton = browser.$('.apply-button');
    // this.cancelButton = browser.$('.cancel-button');
  }
}

exports.BaseModal = BaseModal;
