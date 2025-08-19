import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';

describe('Authentication Tests', () => {
	beforeEach(function(){
        cy.visit(data.urls.login);
    })

    it('Successful login correcto credentials', ()=> {
        cy.login(data.users.standard.username, data.users.password);
        cy.shouldHaveUrl('include', '/inventory.html');
        cy.shouldBeVisible(selectors.products.title);
        cy.shouldBeVisible(selectors.products.inventoryContainer);
    });

    it('Unsuccessful login with incorrect credentials', () => {
        cy.login('invalid_user', 'invalid_password');
        cy.shouldBeVisible(selectors.login.ErrorMessage);
        cy.shouldHaveText(selectors.login.ErrorMessage, 'Epic sadface: Username and password do not match any user in this service');
        cy.shouldHaveUrl('eq', 'https://www.saucedemo.com/');
    });

    it('Unsuccessful login with empty user', () => {
        cy.writeIn(selectors.login.password, data.users.password);
        cy.clickIn(selectors.login.loginButton);
        cy.shouldBeVisible(selectors.login.ErrorMessage);
        cy.shouldHaveText(selectors.login.ErrorMessage, 'Epic sadface: Username is required');
        cy.shouldHaveUrl('eq', 'https://www.saucedemo.com/');
    });

    it('Unsuccessful login with empty password', () => {
        cy.writeIn(selectors.login.username, data.users.standard.username);
        cy.clickIn(selectors.login.loginButton);
        cy.shouldBeVisible(selectors.login.ErrorMessage);
        cy.shouldHaveText(selectors.login.ErrorMessage, 'Epic sadface: Password is required');
        cy.shouldHaveUrl('eq', 'https://www.saucedemo.com/');
    });

    it('Unsuccessful login with locked out user', () => {
        cy.login(data.users.locked.username, 'secret_sauce');
        cy.shouldBeVisible(selectors.login.ErrorMessage);  
        cy.shouldHaveText(selectors.login.ErrorMessage, 'Epic sadface: Sorry, this user has been locked out.');
        cy.shouldHaveUrl('eq', 'https://www.saucedemo.com/');
    }); 
});