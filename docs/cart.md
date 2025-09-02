# Documentación de Pruebas: Carpeta cart

Esta carpeta contiene los archivos de pruebas automatizadas para la gestión y navegación del carrito de compras en la aplicación Swag Labs, utilizando Cypress.

## Archivos principales

- **cartNavigation.cy.js**  
  Pruebas relacionadas con la navegación desde el carrito, continuar comprando y el proceso de checkout.

- **cartActions.cy.js**  
  Pruebas enfocadas en las acciones básicas del carrito: agregar productos, eliminar productos y visualizar los productos en el carrito.

---

## Escenarios de Prueba

### 1. Agregar productos al carrito (cartActions.cy.js)
**Propósito:**  
Verificar que los productos puedan ser agregados al carrito y que el contador del carrito refleje la cantidad correcta.

**Pasos:**
1. Recorrer la lista de productos y agregar cada uno al carrito.
2. Validar que el badge del carrito muestre el número total de productos agregados y que sea visible.

---

### 2. Eliminar productos del carrito (cartActions.cy.js)
**Propósito:**  
Verificar que los productos puedan ser eliminados del carrito y que el carrito quede vacío.

**Pasos:**
1. Agregar un producto aleatorio al carrito.
2. Acceder al carrito.
3. Si hay productos, eliminarlos todos y validar que el badge desaparezca.
4. Si el carrito está vacío, registrar un mensaje en el log.

---

### 3. Visualizar los productos en el carrito (cartActions.cy.js)
**Propósito:**  
Validar que los productos agregados al carrito sean los mismos que se muestran en la página del carrito.

**Pasos:**
1. Agregar una cantidad aleatoria de productos al carrito y guardar sus nombres.
2. Acceder al carrito.
3. Validar que la cantidad de productos en el carrito sea la esperada.
4. Comparar los nombres de los productos en el carrito con los nombres guardados.

---

### 4. Continuar comprando desde el carrito (cartNavigation.cy.js)
**Propósito:**  
Verificar que el usuario puede regresar a la página de productos desde el carrito y agregar un nuevo producto, validando que el carrito se actualiza correctamente.

**Pasos:**
1. Iniciar sesión y agregar un producto al carrito.
2. Acceder al carrito y guardar el nombre del producto agregado.
3. Usar el botón "Continue Shopping" para volver a la página de productos.
4. Agregar otro producto al carrito y guardar su nombre.
5. Regresar al carrito y validar que ambos productos estén presentes.
6. Verificar que la cantidad de productos en el carrito sea la esperada.

---

### 5. Ir al checkout desde el carrito (cartNavigation.cy.js)
**Propósito:**  
Validar el flujo completo de compra desde el carrito hasta la confirmación del pedido.

**Pasos:**
1. Iniciar sesión y agregar un producto al carrito.
2. Acceder al carrito y guardar el nombre del producto agregado.
3. Hacer clic en "Checkout" y verificar la navegación a la página de datos personales.
4. Ingresar los datos personales requeridos y continuar al resumen de compra.
5. Validar que los productos en el resumen coincidan con los agregados al carrito.
6. Calcular y validar el subtotal, el impuesto y el total de la compra.
7. Finalizar la compra y verificar la página de confirmación.
8. Regresar a la página de productos.

---

## Notas adicionales
- Todas las pruebas inician sesión antes de ejecutarse.
- Se utilizan comandos personalizados para acciones comunes como login, agregar productos y navegación.
- Los datos de productos y usuarios se obtienen de archivos JSON externos para facilitar el mantenimiento.
- Se valida la visibilidad y el contenido de los elementos clave en cada paso del flujo.
