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

// ✅ Validar url
Cypress.Commands.add('shouldHaveUrl', (validationType, expectedUrl) => {
    // validationType puede ser 'include', 'eq', etc.
    const validTypes = ['include', 'eq', 'contain'];

    if (!validTypes.includes(validationType)) {
        throw new Error(`Tipo de validación inválido: "${validationType}". Debe ser uno de: ${validTypes.join(', ')}`);
    } else {
        cy.url().should(validationType, expectedUrl);
    }
});
