class Carusel {
  visit(endpoint) {
   return  cy.visit(Cypress.env("globalUrl") + endpoint);
  }
  getbtnTC() {
    return cy.get(".active > :nth-child(1) > .test_cases_list > .btn");
  }
  getbtnAPIList() {
    return cy.get(".active > :nth-child(1) > .apis_list > .btn");
  }
}

export const carusel = new Carusel();

class Category {
  visit(endpoint) {
   return  cy.visit(Cypress.env("globalUrl") + endpoint);
  }
  getItem( ) {
    return  cy.get(".item");
  }
  getTitlecategory() {
    return cy.get(".left-sidebar > h2");
  }
  getparentCat() {
    return cy.get('[data-parent="#accordian"]');
  }
  getWomanPanel() {
    return cy.get("#Women > .panel-body");
  }
  getManPanel() {
    return cy.get("#Men > .panel-body");
  }
  getChilCat() {
    return cy.get(":nth-child(3) > .panel-heading > .panel-title > a");
  }
  getchildpanel() {
    return cy.get("#Kids > .panel-body");
  }
}

export const category = new Category();
