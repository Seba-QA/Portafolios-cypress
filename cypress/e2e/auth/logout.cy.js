import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('Logout', () => {
        beforeEach(() => {
            cy.visit(data.urls.login);
            cy.login(data.users.standard.username, data.users.password);
        });
        it('Logout successfully', () => {
            cy.get(selectors.logout.burgerMenu).click();
            cy.get(selectors.logout.logoutLink).click();
            cy.url().should('include', '/');
            cy.get(selectors.login.loginButton).should('be.visible');
        });
    });
}