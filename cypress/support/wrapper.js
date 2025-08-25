// ✅ Recibe segundos en vez de milisegundos
Cypress.Commands.add('waitSeconds', (segundos) => {
  cy.wait(segundos * 1000);
});

// ✅ Un click más legible
Cypress.Commands.add('clickIn', (selector) => {
  cy.get(selector).click();
});

// ✅ Un type con opción extra de limpiar antes
Cypress.Commands.add('writeIn', (selector, texto, limpiar = true) => {
  if (limpiar) cy.get(selector).clear();
  cy.get(selector).type(texto);
});

// ✅ Validar visibilidad de un elemento
Cypress.Commands.add('shouldBeVisible', (selector) => {
  cy.get(selector).should('be.visible');
});

// ✅ Valida el texto de un elemento
Cypress.Commands.add('shouldHaveText', (selector, expectedText) => {
  cy.get(selector).should('have.text', expectedText);
});
// Variante que espera a que exista el elemento antes de validar visibilidad
Cypress.Commands.add('shouldBeVisibleAndHaveText', (selector) => {
  return cy.get(selector, { timeout: 15000 }).should(($el) => {
    expect($el).to.exist;
    expect($el.text().trim()).to.not.equal('');
  }).and('be.visible');
});

// ✅ Validar url
Cypress.Commands.add('shouldHaveUrl', (validationType, expectedUrl) => {
    const validTypes = ['include', 'eq', 'contain'];

    if (!validTypes.includes(validationType)) {
        throw new Error(`Tipo de validación inválido: "${validationType}". Debe ser uno de: ${validTypes.join(', ')}`);
    } else {
        cy.url().should(validationType, expectedUrl);
    }
});

// ✅ Retorna la cantidad de items en un selector
Cypress.Commands.add('getCount', (listSelector, itemSelector) => {
  return cy.get(listSelector).find(itemSelector).its('length');
});
