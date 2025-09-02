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
        it.only('go to checkout from cart', () => {
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
            cy.writeIn(selectors.cart.formName, data.personalData.firstName);
            cy.writeIn(selectors.cart.formLastName, data.personalData.lastName);
            cy.writeIn(selectors.cart.formZip, data.personalData.zip);
            cy.clickIn(selectors.cart.continue). then(() => {
                cy.shouldHaveUrl('include', '/checkout-step-two.html');
                cy.log('Navegación a la página de checkout step two correcta ✅');
            });
            cy.get(selectors.checkoutOverview.inventoryItem).then(($items) => {
                const actualCart = [];
                Cypress.$($items).each((_, item) => {
                    const name = Cypress.$(item).find(selectors.checkoutOverview.itemName).text().trim();
                    actualCart.push(name);
                });
                expectedCart.forEach((product) => {
                    expect(actualCart).to.include(product, 'El producto "${product}" está en el carrito ✅')
                });

                expect(actualCart.length).to.equal(expectedCart.length, 'La cantidad de productos en el carrito es correcta ✅');
            });

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