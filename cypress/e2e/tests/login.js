describe("Login page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Successful login", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.url().should("eq", "https://www.saucedemo.com/v1/inventory.html");
  });

  it("Invalid password login", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("wrong_password");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Try to login without username", () => {
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Try to login without password", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Password is required"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Try to login without both login fields", () => {
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Locked out user login", () => {
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
});
