describe("Cart icon", () => {
  beforeEach(() => {
    cy.visit("/inventory.html");
  });
  it("Verify cart updates on item addition", () => {
    // Add first item to cart
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    // Verify cart badge shows 1
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
  it("Verify cart updates on multiple item addition and removal", () => {
    // Add first item to cart
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    // This ads second item to cart by adding first item button class has chnged
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    // Verify cart badge shows 2
    cy.get(".shopping_cart_badge").should("have.text", "2");
    cy.get(".btn_secondary.btn_inventory").eq(0).click();
    // Verify cart badge shows 1
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
  it("Verify cart updates on item removal from cart page", () => {
    // Add two items to cart
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    // Verify cart badge shows 2
    cy.get(".shopping_cart_badge").should("have.text", "2");
    // Go to cart page
    cy.get(".shopping_cart_link").click();
    // Remove item from cart page
    cy.get(".btn_secondary").eq(0).click();
    // Verify cart badge shows 1
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });
  it("Verify cart icon display empty state", () => {
    // Add two items to cart
    cy.get(".btn_primary.btn_inventory").eq(0).click();
    // Remove both items from cart
    cy.get(".btn_secondary").eq(0).click();
    // Verify cart badge shows 1
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});
