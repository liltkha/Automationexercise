/// <reference types="cypress" />

import { shopping } from "../../functioms/project1/TS1-HomePage";
import { registration } from "../../functioms/project1/TS3-SignUp";
import { inputs } from "../../utils/datas/data";

describe("Add carts to the basket", () => {
  it("Verify the UI of the Cart", () => {
   registration.visit();
    cy.get(".features_items > .title").contains("Features Items");
    shopping.getFirstCartImg();
    shopping.getFirstCarth2().should("have.css", "color", inputs.buttonColor);
    shopping
      .getFirstCartTitle()
      .should("have.css", "color", inputs.addCartTitlecolor);
    shopping
      .getFirsrtCartBtn()
      .and("have.css", "background-color", inputs.addCartBtnColor);
    shopping
      .getFirstCartView()
      .contains("View Product")
      .should("have.css", "color", inputs.viewProductColor);
  });
  it("Verify Add to Cart functionality", () => {
    registration.visit();
    shopping.getFirsrtCartBtn().click();
    shopping.getModal(".modal-content").should("be.visible");
  });
  it("Verify the content of the modal", () => {
    cy.visit(Cypress.env("globalUrl"));
    shopping.getFirsrtCartBtn().click();
    shopping.getModal().should("be.visible").find(".icon-box").should("exist");
    shopping
      .getModal()
      .should("be.visible")
      .find(".modal-title")
      .should("exist");
    shopping
      .getModal()
      .should("be.visible")
      .find(".modal-body > :nth-child(2)")
      .should("exist");
    shopping
      .getModal()
      .should("be.visible")
      .find(".modal-footer > .btn")
      .should("exist");
  });

  it("Verify View Product button functionality", () => {
    registration.visit();
    shopping.getFirstCartView().click();
    cy.url("includes", "product_details/1");
  });
});

let productName, productCost, productQuantity;
describe("HomePage", () => {
  it("Verify cart adding from home page", () => {
    registration.visit();
    // cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
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
    cy.then(() => {
      cy.get(".cart_total_price").should("contain", productCost);
    });
    cy.get(".disabled").should("contain", "1");
    cy.get(".col-sm-6 > .btn").click();
    cy.get(".modal-footer > .btn").click();
    cy.get(".modal-body > :nth-child(1)").and(
      "have.text",
      "Register / Login account to proceed on checkout.".trim()
    );
  });
});

let numberCountPolo;

describe("Add items to cart from Home Page", () => {
  it("Add items in cart and try to checkout, when Logged out", () => {
    registration.visit();
    cy.get("ul>li").each(($el, index, $list) => {
      expect($list).to.have.length(57);
    });
    cy.get(".left-sidebar > h2").should("contain", "Category");
    cy.get('[data-parent="#accordian"]').eq(0).click();
    cy.get("#Women > .panel-body").then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops");
      expect($el).to.contain("Saree");
    });
    cy.get(".nav > :nth-child(1) > a > .pull-right")
      .invoke("text")
      .then(($el) => {
        cy.log($el);
        numberCountPolo = $el.replace("(", "");
        cy.log(numberCountPolo.slice(0, 1));
      });
  });
});
