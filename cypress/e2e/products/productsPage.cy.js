import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';

{
    describe('Products Page Tests', () => {
        beforeEach(function() {
            cy.visit(data.urls.login);  
            cy.login(data.users.standard.username, data.users.password);
        })  
        it('View peoduct list', () => {
            cy.shouldBeVisible(selectors.products.inventoryContainer);
            cy.get(selectors.products.inventoryItem).each(($item, index) => {
                cy.wrap($item).within(() => {
                    cy.shouldBeVisible(selectors.products.itemImg);
                    cy.shouldBeVisible(selectors.products.itemName);
                    cy.shouldBeVisible(selectors.products.itemPrice);
                    cy.shouldBeVisible(selectors.products.itemButton);   
                });
                cy.log(`Producto ${index + 1} validado correctamente ✅`);
            });
        });
        it('filter and sort products', () => {
            cy.get('.product_sort_container').should('be.visible')
            // Validar que la lista de productos esté ordenada descendentemente (Z-A)
            cy.get('.product_sort_container').select('za');
            cy.validateOrder(selectors.products.inventoryItem, 'desc', 'text');
            // Validar que la lista de productos esté ordenada por defecto (A-Z)
            cy.get('.product_sort_container').select('az');
            cy.validateOrder(selectors.products.inventoryItem, 'asc', 'text');
            // Validar que la lista de productos esté ordenada por precio menor a mayor
            cy.get('.product_sort_container').select('lohi');
            cy.validateOrder(selectors.products.inventoryItem, 'asc', 'number');
            // Validar que la lista de productos esté ordenada por precio mayor a menor
            cy.get('.product_sort_container').select('hilo');
            cy.validateOrder(selectors.products.inventoryItem, 'desc', 'number');
        });
    })
}