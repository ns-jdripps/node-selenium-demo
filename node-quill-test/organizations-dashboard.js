/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const modals = require('./create-organization-modal');
var browser = require('./browser');

// Dashboard for organizations (#/quill/organizations/list)
class OrganizationsDashboard {

  constructor() {
    browser.sleep(3000)
    this.el = browser.$('#organizations-dashboard');
    this.createOrganizationButton = browser.$('#create-organization-button');
    this.organizations = browser.$$('.organization');
    this.search = browser.$('#dashboard-search-input input');
    this.sortByDropdown = browser.$('#sort-by-dropdown');
  }

  get() {
    utils.goHome();
    return wait.forElementLoad(this.el, 'Organizations page');
  }

  openCreateOrgModal() {
    this.createOrganizationButton.click('Create org button');
    return new modals.CreateOrganizationModal;
  }

  createOrganization(name, blueprints) {
    const modal = this.openCreateOrgModal();
    wait.forElementLoad(modal.el);
    modal.createOrganization(name, blueprints);
    return wait.forCssWithTextToBeVisible('.organization', name);
  }

  getOrganizationNames() {
    return this.organizations.map(el => el.getText());
  }
}

exports.OrganizationsDashboard = OrganizationsDashboard;
