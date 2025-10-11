const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-sorted"));

describe("Inventory sorting functionality", () => {
  beforeEach(() => {
    cy.visit("/inventory.html");
  });
  it("Should verify default sort A to Z", () => {
    // Get by value, as index position might change
    cy.get("select").should("have.value", "az");
    cy.get(".inventory_item_name").then(($els) => {
      const names = [...$els].map((el) => el.innerText.trim());
      expect(names).to.be.sorted();
    });
  });
  it("Change default sort option to Z to A", () => {
    // Get by value, as index position might change
    cy.get("select").select("za");
    cy.get("select").should("have.value", "za");
    cy.get(".inventory_item_name").then(($els) => {
      const names = [...$els].map((el) => el.innerText.trim());
      expect(names).to.be.sorted({ descending: true });
    });
  });
  it("Change default sort option to Low to High", () => {
    // Get by value, as index position might change
    cy.get("select").select("lohi");
    cy.get("select").should("have.value", "lohi");
    cy.get(".inventory_item_price").then(($els) => {
      const prices = [...$els].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      expect(prices).to.be.ascending;
    });
  });
  it("Change default sort option to High to Low", () => {
    // Get by value, as index position might change
    cy.get("select").select("hilo");
    cy.get("select").should("have.value", "hilo");
    cy.get(".inventory_item_price").then(($els) => {
      const prices = [...$els].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      expect(prices).to.be.descending;
    });
  });
});
