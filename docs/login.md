# 📂 Módulo: Autenticación (Login)

## 🎯 Objetivo del Módulo

Validar todos los escenarios relacionados al proceso de autenticación en
**Swag Labs**, incluyendo casos exitosos y fallidos.

------------------------------------------------------------------------

## 🗂️ Estructura del Test

El archivo principal de este módulo es:\
- `cypress/e2e/login.cy.js`

Este archivo hace uso de:\
- **`fixtures/selectors.json`** → contiene los selectores de los
elementos de la UI (inputs, botones, mensajes de error, etc.).\
- **`support/commands.js`** → define comandos personalizados
reutilizables, como:\
- `cy.login(username, password)`\
- `cy.shouldHaveUrl(type, url)`\
- `cy.shouldBeVisible(selector)`\
- `cy.shouldHaveText(selector, text)`\
- `cy.writeIn(selector, value)`\
- `cy.clickIn(selector)`

------------------------------------------------------------------------

## ✅ Casos de Prueba Cubiertos

1.  **Login exitoso con credenciales correctas**
    -   Usuario: `standard_user`\
    -   Password: `secret_sauce`\
    -   Validación: Redirección al inventario y visibilidad de
        productos.
2.  **Login fallido con credenciales incorrectas**
    -   Usuario: `invalid_user`\
    -   Password: `invalid_password`\
    -   Validación: Mensaje de error
        `"Epic sadface: Username and password do not match any user in this service"`.
3.  **Login fallido con campo usuario vacío**
    -   Solo se ingresa contraseña.\
    -   Validación: Mensaje de error
        `"Epic sadface: Username is required"`.
4.  **Login fallido con campo contraseña vacío**
    -   Solo se ingresa usuario.\
    -   Validación: Mensaje de error
        `"Epic sadface: Password is required"`.
5.  **Login fallido con usuario bloqueado**
    -   Usuario: `locked_out_user`\
    -   Password: `secret_sauce`\
    -   Validación: Mensaje de error
        `"Epic sadface: Sorry, this user has been locked out."`.

------------------------------------------------------------------------

## 🔄 Reutilización y buenas prácticas

-   Todos los tests usan `cy.login()` para centralizar el flujo de
    autenticación.\
-   Los **selectores** están desacoplados en `selectors.json` para
    facilitar el mantenimiento.\
-   Los **asserts comunes** (`shouldHaveUrl`, `shouldBeVisible`, etc.)
    están abstraídos en `commands.js` para mejorar la legibilidad.

------------------------------------------------------------------------

## 📊 Valor del Módulo

Este módulo garantiza que el **punto de acceso principal** de la
aplicación (login) está correctamente validado en distintos escenarios,
reduciendo riesgos de acceso no autorizado y asegurando la experiencia
del usuario final.
