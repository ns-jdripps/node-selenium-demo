const _ = require('lodash')
const { By } = require('selenium-webdriver')

localSignIn = function () {
  // Sign in to quill
  browser.get('localhost:2015')
  browser.$('[name=username]').sendKeys('admin@narrativescience.com')
  browser.$('[name=password]').sendKeys('drinkyourovaltine')
  return browser.$('button').click()
}

hasClass = function (elem, className) {
    return elem.getAttribute('class').then(classes => classes.split(' ').indexOf(className) !== -1)
}

isElementPresentByLabel = function(elemSelector, label) {
  // Find the elements
  return browser.$$(elemSelector).then(function(elements) {
    // Fill a list with promises that will resolve to text value for each
    // element
    textValues = elements.map(function(value) {
      return value.getText()
    })
    // Wait for each promise to resolve
    return Promise.all(textValues).then(function(resolvedStuff) {
      // Check if the label is in any of the text values in the list
      for (var i = resolvedStuff.length - 1; i >= 0; i--) {
        if (resolvedStuff[i].indexOf(label) >= 0) {
          // Found the label, so stop loop and return true
          return true
        }
      }
      // Got through list without finding label
      return false
    })
  })
}


module.exports = {
    localSignIn: localSignIn,
    hasClass: hasClass,
    isElementPresentByLabel: isElementPresentByLabel
}
