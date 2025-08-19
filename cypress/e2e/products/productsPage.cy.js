import selectors from '../../fixtures/selectors.json';
import commands from '../../support/commands';
import data from '../../fixtures/data.json';

{

    describe('Products Page Tests', () => {
        beforeEach(function() {
            cy.visit(data.urls.login);  
        })  
        it('View peoduct list', () => {
            cy.login(data.users.standard.username, data.users.password);
            cy.shouldBeVisible(selectors.products.inventoryContainer);
            cy.getCount(selectors.products.inventoryList, selectors.products.inventoryItem)
            .then((count) => {
                expect(count).to.be.greaterThan(0);
                let index = 1;
                for (let i = 0; i < count; i++) {
                    cy.log(`Accediendo al Item ${i + 1}`);
                }
            });
        });
    })
}