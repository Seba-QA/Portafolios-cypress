import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('Validate Checkout Form', () => {
        beforeEach(() => {
            cy.visit(data.urls.login);
            cy.login(data.users.standard.username, data.users.password);
            cy.shouldHaveUrl('include', '/inventory.html');
            cy.waitSeconds(1);
            cy.addToCart();
            cy.waitSeconds(1);
            cy.clickIn(selectors.cart.link);
            cy.shouldHaveUrl('include', '/cart.html');
            cy.clickIn(selectors.cart.checkout);
            cy.shouldHaveUrl('include', '/checkout-step-one.html');
        });
        it.only('enter buyer information and continue', () => {
            cy.clickIn(selectors.checkoutOverview.continue);
            cy.waitSeconds(1);
            if (cy.shouldBeVisible(selectors.checkoutOverview.errorMsg)) {
                cy.fillOutCheckoutForm(data.buyer.firstName, data.buyer.lastName, data.buyer.zip);
                cy.clickIn(selectors.checkoutOverview.continue);
                cy.shouldHaveUrl('include', '/checkout-step-two.html');
            }else {
                cy.log('No se mostró ningún mensaje de error al intentar continuar sin completar el formulario.');
            }
        });
        it('validate error messages when fields are empty', () => {
            cy.clickIn(selectors.checkoutOverview.continue);
            cy.shouldHaveText(selectors.checkoutOverview.errorMsg, 'Error: First Name is required').then(() => {
                cy.log('El mensaje de error "Error: First Name is required" se mostró correctamente al intentar continuar sin completar el campo Nombre.');
                cy.writeIn(selectors.checkoutOverview.formName, data.buyer.firstName);
                cy.clickIn(selectors.checkoutOverview.continue);
                cy.shouldHaveText(selectors.checkoutOverview.errorMsg, 'Error: Last Name is required').then(() => {
                    cy.log('El mensaje de error "Error: Last Name is required" se mostró correctamente al intentar continuar sin completar el campo Apellido.');
                    cy.writeIn(selectors.checkoutOverview.formLastName, data.buyer.lastName);
                    cy.clickIn(selectors.checkoutOverview.continue);
                    cy.shouldHaveText(selectors.checkoutOverview.errorMsg, 'Error: Postal Code is required').then(() => {
                        cy.log('El mensaje de error "Error: Postal Code is required" se mostró correctamente al intentar continuar sin completar el campo Código Postal.');
                        cy.writeIn(selectors.checkoutOverview.formZip, data.buyer.zip);
                        cy.clickIn(selectors.checkoutOverview.continue);
                        cy.shouldHaveUrl('include', '/checkout-step-two.html');
                    });
                });
            });
        });
    });
}