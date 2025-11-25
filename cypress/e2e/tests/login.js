import LoginPage from "../../support/pageObject/loginPage";

describe("Login page", () => {
  beforeEach(function () {
    this.loginPage = new LoginPage();
    this.loginPage.goTo("/");
  });
  it.only("Successful login", function () {
    this.loginPage.login("standard_user", "secret_sauce");
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
  });

  it("Invalid password login", function () {
    this.loginPage.login("standard_user", "wrong_password");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Try to login without username", function () {
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Try to login without password", function () {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Password is required"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Try to login without both login fields", function () {
    cy.get("#login-button").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username is required"
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
  it("Locked out user login", function () {
    this.loginPage.login("locked_out_user", "secret_sauce");
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
});
