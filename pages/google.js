driver = require('../talosdriver.js')
until = require('selenium-webdriver').until

class Google {

  constructor() {
    this.searchInput = '#lst-ib'
    this.searchButton = '[value="Google Search"]'
    this.searchResults = 'h3.r'
  }

  getpage() {
    return driver.get('https://www.google.com/')
  }

  search(phrase) {
    driver.$(this.searchInput).sendKeys(phrase)
    driver.$(this.searchButton).click()
    return driver.$$(this.searchResults)
  }
}


module.exports = Google
