/// <reference types="cypress" />

import { category, carusel } from "../../functioms/project1/TS1-HomePage";
import { registration } from "../../functioms/project1/TS3-SignUp";
import { shopping, productpage } from "../../functioms/project1/TS2-Product";
import { colorCarusel, inputs } from "../../utils/datas/data";
import { caruseltexts, message } from "../../utils/messages";

describe("Home page", () => {
  it("checks for carusel icons", () => {
    registration.visit();
   category.getItem().then(($elem) => {
      expect($elem).to.contain(caruseltexts.headingAuto);
      expect($elem).to.contain(caruseltexts.headingEx);
      expect($elem).to.contain(caruseltexts.heading);
    });
    carusel
      .getbtnTC()
      .should("be.visible")
      .and("contain", caruseltexts.buttonTC);
    carusel
      .getbtnTC()
      .should("have.css", "background-color", colorCarusel.butonTC);
    carusel.getbtnTC().trigger("mouseover");
    carusel
      .getbtnAPIList()
      .should("have.css", "background-color", colorCarusel.butonTC)
      .and("contain", caruseltexts.buttonAPIList);
    cy.wait(7000);
    category.getItem()
      .should("have.class", "active")
      .find("img")
      .should("be.visible")
      .and("have.attr", "src", inputs.img1);

    // cy.clock();
    // cy.get("#slider").find(".item.active").invoke("index").should("eq", 0);
    // cy.tick(4000);
    // cy.get("#slider").find(".item.active").invoke("index").should("eq", "1");
    // cy.tick(4000);
    // cy.get("#slider").find(".item.active").invoke("index").should("eq", "2");
  });
});

let numberCount, number;
describe("Home page left section", () => {
  it("Check Category & Brands section", () => {
    registration.visit();
    cy.get("ul>li").each(($el, index, $list) => {
      expect($list).to.have.length(57);
    });
   category.getTitlecategory().should("contain", "Category");
    category.getparentCat().eq(0).click();
    category.getWomanPanel().then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops");
      expect($el).to.contain("Saree");
    });
   category.getparentCat().eq(1).click();
   category.getManPanel().then(($el) => {
      expect($el).to.contain("Tshirts");
      expect($el).to.contain("Jeans");
    });
   category.getChilCat().click();
   category.getchildpanel().then(($el) => {
      expect($el).to.contain("Dress");
      expect($el).to.contain("Tops & Shirts");
    });
    cy.get(".brands_products").should("contain", "Brands");

    cy.get(".brands-name").then(($el) => {
      expect($el).to.contain("Polo");
      cy.get(".nav > :nth-child(1) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(1) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("H&M");
      cy.get(".nav > :nth-child(2) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(2) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Madame");
      cy.get(".nav > :nth-child(3) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(3) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Mast & Harbour");
      cy.get(".nav > :nth-child(4) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(4) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Babyhug");
      cy.get(".nav > :nth-child(5) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(5) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Allen Solly Junior");
      cy.get(".nav > :nth-child(6) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(6) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Kookie Kids");
      cy.get(".nav > :nth-child(7) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(7) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
      expect($el).to.contain("Biba");
      cy.get(".nav > :nth-child(8) > a > .pull-right")
        .invoke("text")
        .then(($el) => {
          numberCount = $el;
          number = parseInt(numberCount.slice(1, 2));
          cy.log(typeof number);
        });
      cy.get(".brands-name > .nav > :nth-child(8) > a").click();
      cy.get(".product-overlay").each(($el, index, $list) => {
        expect($list).to.have.length(number);
      });
    });
  });
});

describe("Home page Subscribe form", () => {
  it("allow users to subscribe to the email list", () => {
    registration.visit();
    cy.get(".single-widget").should("contain", "Subscription");
    cy.get(".single-widget").should(
      "contain",
      "Get the most recent updates from our site and be updated your self..."
    );
    cy.get("#susbscribe_email").type("test@test.com");
    cy.get("#subscribe").click();
    cy.get(".alert-success").should("exist").contains(message.successSubscribe);
  });
  // if message contains this email
  //  cy.get('.alert-success').should("exist").contain("test@test.com"")
  it("does NOT allow invalid email address", () => {
    registration.visit();
    cy.get("#susbscribe_email").type("test");
    cy.get("#subscribe").click();
    // cy.get('.alert-success').should("not exist");
  });
});

describe("Home page Feachtures items", () => {
  it("Number of oll product Items", () => {
    registration.visit();
    cy.get(".features_items > .title").contains("Features Items");
    cy.get(".product-overlay").its("length").should("eq", 34);
    shopping.getFirstCartView().click();
    cy.url("includes", "product_details/1");
  });
});
