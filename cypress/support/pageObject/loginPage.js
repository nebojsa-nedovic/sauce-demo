import ProductPage from "../../support/pageObject/loginPage";

class LoginPage {
  goTo(url) {
    cy.visit(url);
  }
  login(username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get("#login-button").click();
    return new ProductPage();
  }
}
export default LoginPage;
