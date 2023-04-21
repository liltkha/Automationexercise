/// <reference types="cypress" />

import { productpage } from "../../functioms/project1/TS2-Product";
import { registration } from "../../functioms/project1/TS3-SignUp";
import { inputs } from "../../utils/datas/data";

describe("Product page", () => {
  it("Verify search field by category", () => {
    registration.visit("products");
      // Select the category dropdown and choose the desired category
    productpage.getsale_Image();

    productpage.getSearch().type('polo');
    
    
    productpage.getSearchbtn().click();
  });
});



//   it('Should search for a field by category', () => {
//     // Select the category dropdown and choose the desired category
//     cy.get('#category-dropdown').select('Category A')

//     // Enter search term in the search field
//     cy.get('#search-field').type('Search term')

//     // Submit the search form
//     cy.get('#search-form').submit()

//     // Assert that the search results are displayed
//     cy.get('#search-results').should('be.visible')
//   })
// })