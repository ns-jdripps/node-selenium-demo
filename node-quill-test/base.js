/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
var browser = require('./browser');

// Base Page Object class. Other Page Objects should extend this class.
class BasePage {

  constructor() {
    this.error = browser.$('.error-page');
    this.errorHeader = browser.$('h1');
  }

  getUrl() {
    return browser.getLocationAbsUrl();
  }

  hasError() {
    return this.error.isPresent();
  }

  has404Error() {
    return this.errorHeader.getText()
      .then(text => _.contains(text, '404'));
  }
}

exports.BasePage = BasePage;
