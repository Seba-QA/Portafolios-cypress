import selectors from '../fixtures/selectors.json';
import './wrapper'

Cypress.Commands.add('login', (username, password) => {
        cy.waitSeconds(2);
        cy.get(selectors.login.username)
        cy.writeIn(selectors.login.username, username);
        cy.waitSeconds(2);
        cy.get(selectors.login.password)
        cy.writeIn(selectors.login.password, password);
        cy.waitSeconds(2);
        cy.clickIn(selectors.login.loginButton);
});