import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('purchase summary validation', () => {
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
            cy.clickIn(selectors.checkoutOverview.continue);
        });
        it('validate purchase summary details', () => {
            let calculatedSum = 0;

            cy.get(selectors.checkoutOverview.cartItem).each(($item) => {
                cy.wrap($item).find(selectors.checkoutOverview.itemPrice).invoke('text').then((priceText) => {
                    const price = parseFloat(priceText.replace('$', '').trim());
                    calculatedSum += price;
                });
            }).then(() => {

                cy.get(selectors.checkoutOverview.subtotal).invoke('text').then((subtotalText) => {
                    const subtotal = parseFloat(subtotalText.replace('Item total: $', '').trim());
                    expect(subtotal).to.eq(calculatedSum);
                });


                cy.get(selectors.checkoutOverview.tax).invoke('text').then((taxText) => {
                    const tax = parseFloat(taxText.replace('Tax: $', '').trim());

                    cy.get(selectors.checkoutOverview.total).invoke('text').then((totalText) => {
                        const total = parseFloat(totalText.replace('Total: $', '').trim());
                        expect(total).to.eq(calculatedSum + tax);
                    });
                });
            });
        });
        it.only('finalize purchase and validate completion', () => {
            cy.clickIn(selectors.checkoutOverview.finish). then(() => {
                cy.shouldHaveUrl('include', '/checkout-complete.html');
                cy.log('Navegación a la página de checkout complete correcta ✅');
                cy.shouldHaveText(selectors.checkoutOverview.msgComplete, 'Thank you for your order!');
                cy.shouldHaveText(selectors.checkoutOverview.msgText, 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
                cy.clickIn(selectors.checkoutOverview.backHome). then(() => {
                    cy.shouldHaveUrl('include', '/inventory.html');
                    cy.log('Navegación a la página de productos correcta ✅');
                });
            });
        });
    });
}