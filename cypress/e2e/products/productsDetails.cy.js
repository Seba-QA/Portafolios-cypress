import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';
{
    describe('Products Details Page', () => {
        beforeEach(function() {
            cy.visit(data.urls.login);  
            cy.login(data.users.standard.username, data.users.password);
        })  
        it('acces the details of a random product', () => {
            cy.get(selectors.products.inventoryItem).its('length').then((len) => {
                const idx = Cypress._.random(0, len - 1);
                cy.get(selectors.products.inventoryItem).eq(idx).find(selectors.products.itemName).invoke('text').then((selectedProductName) => {
                    cy.get(selectors.products.inventoryItem).eq(idx).find(selectors.products.itemName).click();
                    cy.location('pathname', { timeout: 15000 }).should('include', 'inventory-item.html');
                    cy.get(selectors.productDetails.itemName).should('be.visible').and('have.text', selectedProductName.trim());
                    cy.shouldBeVisible(selectors.productDetails.itemImg);
                    cy.shouldBeVisible(selectors.productDetails.itemPrice);
                    cy.shouldBeVisible(selectors.productDetails.itemDesc);
                    cy.shouldBeVisible(selectors.productDetails.itemButton);
                });
            });
        });
    });
}