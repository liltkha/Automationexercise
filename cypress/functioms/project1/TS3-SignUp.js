class SignUp {
  visit(endpoint) {
    cy.visit(Cypress.env("globalUrl") + endpoint);
  }

  getUsername() {
    return cy.get('[data-qa="signup-name"]');
  }

  getEmail() {
    return cy.get('[data-qa="signup-email"]');
  }

  submit() {
    return cy.get('[data-qa="signup-button"]');
  }

  generateRandomName(length, email = "") {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return `test${result}${email}`;
  }

  getGender() {
    return cy.get("#id_gender1");
  }
  // getName(){
  //   return cy.get('[data-qa="name"]');

  // }
  // getEmail(){
  //   return cy.get('[data-qa="email"]');
  // }
  getPassword() {
    return cy.get('[data-qa="password"]');
  }
  getDayofBirth() {
    return cy.get('[data-qa="days"]');
  }
  getDateofMonth() {
    return cy.get('[data-qa="months"]');
  }
  getDateofYear() {
    return cy.get('[data-qa="years"]');
  }
  getourNewsLetter() {
    return cy.get("#newsletter");
  }
  getOptin() {
    return cy.get("#optin");
  }
  getFirst_name() {
    return cy.get('[data-qa="first_name"]');
  }
  getLast_name() {
    return cy.get('[data-qa="last_name"]');
  }
  getCompany() {
    return cy.get('[data-qa="company"]');
  }
  getAddress() {
    return cy.get('[data-qa="address"]');
  }
  getCountry() {
    return cy.get('[data-qa="country"]');
  }
  getState() {
    return cy.get('[data-qa="state"]');
  }
  getCity() {
    return cy.get('[data-qa="city"]');
  }
  getZipcode() {
    return cy.get('[data-qa="zipcode"]');
  }
  getMobile_number() {
    return cy.get('[data-qa="mobile_number"]');
  }
  getCreateAccount() {
    return cy.get('[data-qa="create-account"]');
  }
}

export const registration = new SignUp();
