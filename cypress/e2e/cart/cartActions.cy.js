import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('Cart Page actions', () => {
        beforeEach(function() {
            cy.visit(data.urls.login);  
            cy.login(data.users.standard.username, data.users.password);
        })  
        it('Add products to cart', () => {
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
            cy.shouldBeVisible(selectors.cart.removeButton);
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
        it('view the products in the cart', () => {
            const addedProducts = [];

            // 1. Seleccionamos los productos disponibles
            cy.get(selectors.products.inventoryItem).then(($items) => {
                const total = $items.length;
                const randomCount = Math.floor(Math.random() * total) + 1;

                // 2. Elegimos productos aleatorios
                const selectedItems = Cypress._.sampleSize($items.toArray(), randomCount);

                selectedItems.forEach((item) => {
                    const productName = Cypress.$(item).find(selectors.products.itemName).text().trim();
                    addedProducts.push(productName);

                    // 3. Agregar cada producto al carrito
                    cy.wrap(item).within(() => {
                        cy.get(selectors.products.itemButton).click();
                    });
                });
            })
            // 4. Guardamos el array dentro del flujo de Cypress
            .then(() => {
                cy.wrap(addedProducts).as('addedProducts');
            });

            // 5. Ahora vamos al carrito
            cy.get(selectors.cart.link).click();
            cy.shouldBeVisible(selectors.cart.cartList);

            // 6. Recuperamos el alias cuando Cypress ya lo tiene cargado
            cy.get('@addedProducts').then((addedProducts) => {
                // Validar cantidad
                cy.get(selectors.cart.cartItem).should('have.length', addedProducts.length);

                // Validar que los productos estén en el carrito
                cy.get(selectors.cart.cartItem).each(($item) => {
                    const nameInCart = Cypress.$($item).find(selectors.products.itemName).text().trim();
                    expect(addedProducts).to.include(nameInCart);
                    cy.log(`Producto en el carrito: ${nameInCart} ✅`);
                });
            });
        });
    });
}