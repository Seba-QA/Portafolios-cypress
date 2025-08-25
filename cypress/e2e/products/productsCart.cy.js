import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('Products Cart Page', () => {
        beforeEach(function() {
            cy.visit(data.urls.login);  
            cy.login(data.users.standard.username, data.users.password);
        })  
        it.only('Add products to cart', () => {
            cy.get(selectors.products.inventoryItem).each(($item, index) => {
                cy.wrap($item).within(() => {
                    cy.shouldBeVisible(selectors.products.itemButton);
                    cy.get(selectors.products.itemButton).click();
                });
                cy.log(`Producto ${index + 1} agregado al carrito correctamente ✅`);
            });
            cy.get(selectors.products.inventoryItem).its('length').then((total) => {
                cy.get(selectors.cart.badge).should('have.text', `${total}`);
                cy.get(selectors.cart.badge).should('be.visible');
            });
        });
        it('remove products from cart', () => {
            cy.addToCart();
            cy.get(selectors.cart.link).click();
            cy.get(selectors.cart.badge).then(($badge) => {
                const itemCount = parseInt($badge.text());
                if (itemCount > 0) {
                    cy.get(selectors.cart.removeButton).each(($btn) => {
                        cy.wrap($btn).click();
                    });
                    cy.get(selectors.cart.badge).should('not.exist');
                    cy.log('Todos los productos han sido eliminados del carrito correctamente ✅');
                } else {
                    cy.log('El carrito ya está vacío.');
                }
            });
        });
    });
}