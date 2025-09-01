import selectors from '../fixtures/selectors.json';
import './wrapper'

Cypress.Commands.add('login', (username, password) => {
        cy.waitSeconds(1);
        cy.get(selectors.login.username)
        cy.writeIn(selectors.login.username, username);
        cy.waitSeconds(1);
        cy.get(selectors.login.password)
        cy.writeIn(selectors.login.password, password);
        cy.waitSeconds(1);
        cy.clickIn(selectors.login.loginButton);
});

/**
 * Valida que una lista esté ordenada correctamente
 * @param {'asc'|'desc'} direction - Dirección de orden (ascendente/descendente)(a-z, menor-mayor / z-a, mayor-menor)
 * @param {'text'|'number'} type - Tipo de dato a evaluar (text: nombre de producto, number: precio)
 */
Cypress.Commands.add('validateOrder', (selector, direction, type) => {
  cy.get(selector).then(($els) => {
    let values = [...$els].map(el => {
      if (type === 'number') {
        return parseFloat(el.innerText.replace('$', ''));
      }
      return el.innerText.trim();
    });

    let sorted = [...values].sort((a, b) => {
      return type === 'number'
        ? a - b
        : a.localeCompare(b);
    });

    if (direction === 'desc') {
      sorted.reverse();
    }

    expect(values).to.deep.equal(sorted);
  });
});


Cypress.Commands.add('addToCart', () => {
  cy.get(selectors.products.inventoryItem).then(($items) => {
    // Filtrar solo los productos que aún no están en el carrito
    const available = [];
    Cypress.$($items).each((i, item) => {
      const btn = Cypress.$(item).find(selectors.products.itemButton);
      if (btn.text().trim().toLowerCase() === 'add to cart') {
        available.push(item);
      }
    });

    if (available.length === 0) {
      cy.log('Todos los productos ya están en el carrito.');
      return;
    }
    const randomIndex = Math.floor(Math.random() * available.length);
    const selectedItem = available[randomIndex];
    const name = Cypress.$(selectedItem).find(selectors.products.itemName).text().trim();
    cy.wrap(available[randomIndex]).within(() => {
      cy.get(selectors.products.itemButton).click();
    });

    return cy.wrap(name)
  });
});

Cypress.Commands.add('logOrder', (selector, subSelector = null) => {
    cy.get(selector).then(($items) => {
        const values = [];

        $items.each((index, item) => {
            if (subSelector) {
                values.push(Cypress.$(item).find(subSelector).text().trim());
            } else {
                values.push(Cypress.$(item).text().trim());
            }
        });

        cy.log(`Orden actual (${values.length} ítems): ${values.join(' | ')}`);
    });
});

