# Documentación de Pruebas: Carpeta checkout

Esta carpeta contiene los archivos de pruebas automatizadas para el flujo de checkout en la aplicación Swag Labs, utilizando Cypress.

## Archivos principales

- **checkoutStart.cy.js**  
  Pruebas relacionadas con el inicio del proceso de checkout y la validación de los datos requeridos.

- **checkoutOverview.cy.js**  
  Pruebas para validar el resumen de la compra antes de finalizar el pedido, incluyendo la validación de productos, totales y navegación.

- **checkoutFinish.cy.js**  
  Pruebas para validar la finalización del proceso de compra y las opciones de cancelar en diferentes etapas del checkout.

---

## Escenarios de Prueba

### 1. Inicio del checkout (checkoutStart.cy.js)
**Propósito:**  
Verificar que el usuario puede iniciar el proceso de checkout correctamente y que los campos requeridos son validados.

**Pasos:**
1. Iniciar sesión y agregar productos al carrito.
2. Acceder al carrito y hacer clic en "Checkout".
3. Validar la navegación a la página de información del comprador.
4. Probar el envío del formulario con campos vacíos y validar los mensajes de error.
5. Completar el formulario correctamente y continuar al resumen de compra.

---

### 2. Resumen del checkout (checkoutOverview.cy.js)
**Propósito:**  
Validar que el resumen de la compra muestre los productos correctos, los totales sean precisos y la navegación funcione correctamente.

**Pasos:**
1. Completar el flujo hasta llegar al resumen del checkout.
2. Validar que los productos listados coincidan con los agregados al carrito.
3. Verificar los valores de subtotal, impuestos y total.
4. Probar la navegación hacia atrás y hacia adelante en el flujo de checkout.

---

### 3. Finalización y cancelación del checkout (checkoutFinish.cy.js)
**Propósito:**  
Verificar que el usuario pueda cancelar el proceso de checkout en diferentes etapas y que la navegación sea la esperada.

**Pasos:**
1. Completar el flujo hasta la página de información del comprador.
2. **Cancelar desde la página de información:**
   - Hacer clic en "Cancel" y validar que regresa al carrito.
3. **Cancelar desde el resumen del checkout:**
   - Continuar al resumen, hacer clic en "Cancel" y validar que regresa al inventario.
4. **Finalizar el checkout:**
   - Completar el proceso y validar la página de confirmación.

---

