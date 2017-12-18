/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const { OrganizationsDashboard } = require('./organizations-dashboard')
const { CreateOrganizationModal } = require('./create-organization-modal')
const utils = require('./utils/utils')
var browser = require('./browser')


describe('Organizations Page', function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000

  beforeAll(function() {
    return utils.localSignIn().then(() => {
      return this.organizationsPage = new OrganizationsDashboard
    })
  })

  afterAll(function(done) {
    browser.quit()
    done()
  })

  describe('Dashboard controls', function() {

    it('should have Search', function() {
      return browser.$$('#dashboard-search-input input').then(function(found) {
        return expect(!!found.length).toBe(true)
      })
    })

    it('should have Sort By dropdown', function() {
      return browser.$$('#sort-by-dropdown').then(function(found) {
        return expect(!!found.length).toBe(true)
      })
    })

    it('should have clickable Create Organization button', function() {
      browser.$$('#create-organization-button').then(function(found) {
        return expect(!!found.length).toBe(true)
      })
      return browser.$('#create-organization-button').isEnabled().then(
        function(enabled) {
          return expect(enabled).toBe(true)
      })
    })
  })

  describe('Creating a new organization', function() {

    beforeAll(function() {
      this.organizationsPage.openCreateOrgModal()
      this.createOrgModal = new CreateOrganizationModal
    })

    it('should render Create Organization modal', function() {
      return this.createOrgModal.title.getText().then(function(text){
        return expect(text).toBe('Create Organization')
      })
    })

    it('should indicate name input is required by default (blue star)', function() {
      return utils.hasClass(browser.$('#new-organization-name .input-status-indicator'), 'required').then(function(bool) {
        return expect(bool).toBe(true)
      })
    })

    it('should disable Create Organization button by default', function() {
      return browser.$('.apply-button').isEnabled().then(
        function(enabled) {
          return expect(enabled).toBe(false)
      })
    })

    it('should contain Blank Project in blueprints list', function() {
      return this.createOrgModal.containsBlueprint('Blank Project').then(
        function(result) {
          return expect(result).toBe(true)
      })
    })

    it('should indicate when name input is valid', function() {
      browser.$('#new-organization-name input').sendKeys('selenium-a')
      return utils.hasClass(browser.$('#new-organization-name .input-status-indicator'), 'complete').then(function(bool) {
        return expect(bool).toBe(true)
      })
    })

    it('should enable Create Organization button when name input is valid', function() {
      return browser.$('.apply-button').isEnabled().then(
        function(enabled) {
          return expect(enabled).toBe(true)
      })
    })

    it('should allow selecting Blank Project to be shared', function() {
      browser.$('.blueprint-selection:nth-of-type(2) label').click()
      return browser.$('.blueprint-selection:nth-of-type(2) input').isSelected().then(function(selected) {
        return expect(selected).toBe(true)
      })
    })

    it('should create organization', function() {
      this.createOrgModal.applyButton.click()
      browser.wait(function() {
        return utils.isElementPresentByLabel('.organization', 'selenium-a')
      }, 5000)
      return browser.$$('.organization').then(function(elements) {
        listOfOrgs = elements.map(el => el.getText())
        Promise.all(listOfOrgs).then(function(elements) {
          return expect(elements).toContain('selenium-a')
        })
      })
    })
  })
})
