import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('Cart page navigation', () => {
        beforeEach(function() {
            cy.visit(data.urls.login);  
            cy.login(data.users.standard.username, data.users.password);
            cy.addToCart();
            cy.waitSeconds(2);
            cy.clickIn(selectors.cart.link);
            cy.shouldHaveUrl('include', '/cart.html');
        })
        it('continue shopping from cart)', () => {
            const expectedCart = [];
            cy.get(selectors.cart.cartItem).first().within(() => {
                cy.get(selectors.products.itemName).invoke('text').then((firstItemName) => {
                    expectedCart.push(firstItemName.trim());
                    cy.log(`Producto esperado en el carrito: ${firstItemName} ✅`);
                });
            });

            cy.then(() => {
                cy.log(`Contenido acumulado de expectedCart: ${JSON.stringify(expectedCart)}`);
                console.log("Contenido acumulado en consola:", expectedCart);
            });

            cy.clickIn(selectors.cart.continueShopping). then(() => {
                cy.waitSeconds(1);
                cy.shouldHaveUrl('include', '/inventory.html');
                cy.log('Navegación a la página de productos correcta ✅');
            });

            cy.addToCart().then((newName) => {
                expectedCart.push(newName);
                cy.log(`Producto esperado en el carrito: ${newName} ✅`);
            });
            
            cy.scrollTo(0,0);
            cy.clickIn(selectors.cart.link). then(() => {
                cy.shouldHaveUrl('include', '/cart.html');
                cy.log('Navegación a la página de productos correcta ✅');
            });

            cy.then(() => {
                cy.log(`Contenido acumulado de expectedCart: ${JSON.stringify(expectedCart)}`);
                console.log("Contenido acumulado en consola:", expectedCart);
            });

            cy.get(selectors.cart.cartItem).then(($items) => {
                const actualCart = [];
                Cypress.$($items).each((_, item) => {
                    const name = Cypress.$(item).find(selectors.products.itemName).text().trim();
                    actualCart.push(name);
                });
                expectedCart.forEach((product) => {
                    expect(actualCart).to.include(product, 'El producto "${product}" está en el carrito ✅')
                });

                expect(actualCart.length).to.equal(expectedCart.length, 'La cantidad de productos en el carrito es correcta ✅');
            });
        });
        it('go to checkout from cart', () => {
            const expectedCart = [];
            cy.get(selectors.cart.cartItem).first().within(() => {
                cy.get(selectors.products.itemName).invoke('text').then((firstItemName) => {
                    expectedCart.push(firstItemName.trim());
                    cy.log(`Producto esperado en el carrito: ${firstItemName} ✅`);
                });
            });
            cy.then(() => {
                cy.log(`Contenido acumulado de expectedCart: ${JSON.stringify(expectedCart)}`);
                console.log("Contenido acumulado en consola:", expectedCart);
            });
            cy.clickIn(selectors.cart.checkout). then(() => {
                cy.shouldHaveUrl('include', '/checkout-step-one.html');
                cy.log('Navegación a la página de checkout correcta ✅');
            });
            cy.writeIn(selectors.checkoutOverview.formName, data.personalData.firstName);
            cy.writeIn(selectors.checkoutOverview.formLastName, data.personalData.lastName);
            cy.writeIn(selectors.checkoutOverview.formZip, data.personalData.zip);
            cy.clickIn(selectors.checkoutOverview.continue). then(() => {
                cy.shouldHaveUrl('include', '/checkout-step-two.html');
                cy.log('Navegación a la página de checkout step two correcta ✅');
            });
        });
    });  
}