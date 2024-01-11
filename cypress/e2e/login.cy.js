const LOGINPAGE = require('../pageObjects/loginPage.cy.js')
import user from '../fixtures/userCredentials.json'
const errorMessage = 'Epic sadface: Sorry, this user has been locked out.';
const sizes = ['iphone-6', 'macbook-13']
describe('Login flow', () => {
  sizes.forEach((size)=>{
  it('Valid credentials login', () => {
    cy.viewport(size)
    cy.visit('https://www.saucedemo.com/v1/');
    cy.fixture('userCredentials').as('usersJson')
    LOGINPAGE.insertUserName(user.users.valid);
    LOGINPAGE.insertPassword(user.password);
    LOGINPAGE.clickLoginButton();
  })
  it('Invalid credentials login', () => {
    cy.viewport(size)
    cy.visit('https://www.saucedemo.com/v1/');
    LOGINPAGE.insertUserName(user.users.invalid);
    LOGINPAGE.insertPassword(user.password);
    LOGINPAGE.clickLoginButton();
    LOGINPAGE.errorMessageOnInvalidCredentials().should('include', errorMessage)
  })
  it('Problem user login', () => {
    cy.viewport(size)
    cy.visit('https://www.saucedemo.com/v1/');
    LOGINPAGE.insertUserName(user.users.problem);
    LOGINPAGE.insertPassword(user.password);
    LOGINPAGE.clickLoginButton();
  })
  it('Performance glitch login', () => {
    cy.viewport(size)
    cy.visit('https://www.saucedemo.com/v1/');
    LOGINPAGE.insertUserName(user.users.performance);
    LOGINPAGE.insertPassword(user.password);
    LOGINPAGE.clickLoginButton();
  })
  })
})