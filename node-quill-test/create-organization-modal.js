/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const {BaseModal} = require('./base-modal')
const utils = require('./utils/utils')
var browser = require('./browser')

// Modal to create an organization.
class CreateOrganizationModal extends BaseModal {

  constructor() {
    super(browser.$('#create-organization-modal'))
    this.nameInput = browser.$('#new-organization-name input')
    this.blueprints = browser.$$('.blueprint-selection')
    this.statusIndicator = browser.$('#new-organization-name .input-status-indicator')
  }

  containsBlueprint(blueprintName) {
    return utils.isElementPresentByLabel('.blueprint-selection', blueprintName)
  }

  createOrganization(name, blueprints=null) {
    this.nameInput.sendKeys(name)
    if (blueprints != null) {
      this.selectBlueprints(blueprints)
    }
    return this.applyButton.click()
  }

}


exports.CreateOrganizationModal = CreateOrganizationModal
