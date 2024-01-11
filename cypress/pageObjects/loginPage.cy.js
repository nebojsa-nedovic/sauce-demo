class loginPage {
  get userNameField() {
    return cy.get('[data-test="username"]');
  }
  get passwordField() {
    return cy.get('[data-test="password"]');
  }
  get loginButton() {
    return cy.get('#login-button');
  }
  get invalidCredentialsError(){return cy.get('[data-test="error"]')}

  insertUserName(userName) {
    this.userNameField.type(userName);
  }
  insertPassword(password) {
    this.passwordField.type(password);
  }
  clickLoginButton() {
    this.loginButton.click();
  }
  errorMessageOnInvalidCredentials() {
    return this.invalidCredentialsError.invoke('text');
  }
}
module.exports = new loginPage();
