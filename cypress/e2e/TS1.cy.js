/// <reference types="cypress" />
describe("my project", () => {
  it.only("Signup", () => {
    cy.visit("https://automationexercise.com/login");
    const email = `test_${Math.random()}@gmail.com`;
    cy.get(".signup-form > h2").then(($elem) => {
      expect($elem).to.contain("New User Signup!");
    });
    cy.get('[data-qa="signup-name"]').type("test");
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.location("pathname").should("equal", "/signup");
    cy.get(".login-form").then(($elem) => {
      expect($elem).to.contain("Enter Account Information");
    });
    cy.get(".clearfix").then(($elem) => {
      expect($elem).to.contain("Title");
    });
    cy.get("#id_gender1").check();
    cy.get('[data-qa="name"]').should("have.value", "test");
    cy.get('[data-qa="name"]').type(email);
    cy.get('[data-qa="password"]').type(123);
    cy.get('[data-qa="days"]').select(1);
    cy.get('[data-qa="months"]').select("January");
    cy.get('[data-qa="years"]').select("2021");
    cy.get("#newsletter").check();
    cy.get("#optin").check();

    cy.get('[data-qa="first_name"]').type("Address Informationn");

    cy.get('[data-qa="first_name"]').type("myName");
    cy.get('[data-qa="last_name"]').type("myLastName");
    cy.get('[data-qa="company"]').type("myCompany");
    cy.get('[data-qa="address"]').type("myAddress");
    cy.get('[data-qa="country"]').select("Canada");
    cy.get('[data-qa="state"]').type("Canada");
    cy.get('[data-qa="city"]').type("Ottawa");
    cy.get('[data-qa="zipcode"]').type(231);
    cy.get('[data-qa="mobile_number"]').type(1234567);
    cy.get('[data-qa="create-account"]').click();
  });
});


describe("my project", () => {
  it("Login", () => {
    cy.visit("https://automationexercise.com/login");
    cy.get(".login-form").then(($elem) => {
      expect($elem).to.contain("Login to your account");
    });
    cy.get('[data-qa="login-email"]').type("test");
    cy.get('[data-qa="login-password"]').type("test");
    cy.get('[data-qa="login-button"]').should("contain", "Login");
    cy.get('[data-qa="login-button"]').click();
  });
});
