var { Builder, By, WebDriver } = require('selenium-webdriver')

// Instantiate the webdriver object
TalosDriver = new Builder()
  .forBrowser('chrome')
  .build()

// Assign properties to the webdriver
TalosDriver.rootUrl = 'http://localhost:2015'

// Define custom driver functions
TalosDriver.$ = function (css) {
  return TalosDriver.findElement(By.css(css))
}

TalosDriver.$$ = function (css) {
  return TalosDriver.findElements(By.css(css))
}

module.exports = TalosDriver
