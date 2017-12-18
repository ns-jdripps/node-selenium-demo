const { Builder, By } = require('selenium-webdriver');

// Instantiate the webdriver object
browser = new Builder()
  .forBrowser('chrome')
  .build()

// Assign properties to the webdriver
browser.rootUrl = 'http://localhost:2015'

// Define custom driver functions
browser.$ = function (css) {
  return browser.findElement(By.css(css))
}

browser.$$ = function (css) {
  return browser.findElements(By.css(css))
}

module.exports = browser
