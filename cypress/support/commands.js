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
