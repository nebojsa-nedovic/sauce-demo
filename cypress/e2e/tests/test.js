const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-sorted"));

describe("Inventory sorting functionality", () => {
  it("Should verify default sort A to Z", () => {
    cy.visit("https://matchmaking.grip.events/christmasadventparty/app");
    cy.get('[data-test="loginButton"]').click();
    cy.get('[data-test="emailInput"]').type(
      "nebojsa.nedovic+cy2024@grip.events"
    );
    cy.get('[data-test="loginButton"]').click();
    cy.get('[data-test="passwordInput"]').type(
      "nebojsa.nedovic+cy2024@grip.events"
    );
    cy.get('[data-test="loginButton"]').click();

    cy.get(".ng-tns-c3255348071-3 > :nth-child(1) > ul ").invoke("show");
    cy.contains("Edit").click();
  });
});
