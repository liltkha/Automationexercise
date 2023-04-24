import { category, carusel } from "../../functioms/project1/TS1-HomePage";
import { registration } from "../../functioms/project1/TS3-SignUp";
import { shopping, productpage } from "../../functioms/project1/TS2-Product";
import { colorCarusel, inputs } from "../../utils/datas/data";
import { caruseltexts, message } from "../../utils/messages";

let productName, productCost, productQuantity;
describe("checkout from HomePage for registered user", () => {
  it("verify checkout till the end", () => {
    registration.visit("login");
    cy.get('[data-qa="login-email"]').type("test2@test.co");
    cy.get('[data-qa="login-password"]').type(123);
    cy.get('[data-qa="login-button"]').click();

    cy.get(".overlay-content>h2")
      .eq(0)
      .invoke("text")
      .then(($val) => {
        productCost = $val;
      });
    cy.get(".overlay-content>p")
      .eq(0)
      .invoke("text")
      .then(($text) => {
        productName = $text;
      });
    cy.get(".add-to-cart").eq(0).click();
    cy.get("u").click();
    cy.get(".product_image").should("be.exist");

    // cy.then(() => {
    //   cy.get(".cart_total_price").should("contain", productCost);
    // });
    cy.get(".col-sm-6 > .btn").click();
    cy.url().should("include", "checkout");
    cy.get(":nth-child(7) > .btn").click();
    cy.url().should("include", "payment");
    cy.get(".heading").contains("Payment");
    cy.get('[data-qa="name-on-card"]').type("Test test");
    cy.get('[data-qa="card-number"]').type(1111111111111111);
    cy.get('[data-qa="cvc"]').type(111);
    cy.get('[data-qa="expiry-month"]').type("11");
    cy.get('[data-qa="expiry-year"]').type("2o30");
    cy.get('[data-qa="pay-button"]').click();
  });
});
