class ProductPage {
  getsale_Image() {
    return cy.get("#sale_image");
  }
  getSearch() {
    return cy.get("#search_product");
  }
  getSearchbtn() {
    return cy.get("#submit_search");
  }
}

export const productpage = new ProductPage();
