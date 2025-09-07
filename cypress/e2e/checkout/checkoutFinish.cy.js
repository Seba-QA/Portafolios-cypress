import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('Cancel checkout', () => {
        beforeEach(() => {
            cy.visit(data.urls.login);
            cy.login(data.users.standard.username, data.users.password);
            cy.waitSeconds(1);
            cy.addToCart();
            cy.waitSeconds(1);
            cy.clickIn(selectors.cart.link);
            cy.waitSeconds(1);
            cy.clickIn(selectors.cart.checkout);
            cy.waitSeconds(1);
            cy.fillOutCheckoutForm(data.buyer.firstName, data.buyer.lastName, data.buyer.zip);
        });
        it('cancel from checkout information', () => {
            cy.clickIn(selectors.checkoutOverview.cancel). then(() => {
                cy.shouldHaveUrl('include', '/cart.html');
                cy.log('Navegación a la página de carrito correcta ✅');
            });
        });
        it('cancel from checkout overview', () => {
            cy.clickIn(selectors.checkoutOverview.continue);
            cy.clickIn(selectors.checkoutOverview.cancel). then(() => {
                cy.shouldHaveUrl('include', '/inventory.html');
                cy.log('Navegación a la página de inventario correcta ✅');
            });
        });
    });
}