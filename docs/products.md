# Documentación de Pruebas: Carpeta products

Esta carpeta contiene los archivos de pruebas automatizadas para la gestión de productos y el carrito en la aplicación Swag Labs, utilizando Cypress.

## Archivos principales

- **productsPage.cy.js**  
  Pruebas relacionadas con la visualización, filtrado y ordenamiento de productos.

- **productsDetails.cy.js**  
  Pruebas para validar el acceso y la información mostrada en la página de detalles de un producto.

---

## Escenarios de Prueba

### 1. Visualización de la lista de productos (productsPage.cy.js)
**Propósito:**  
Verificar que la lista de productos se muestre correctamente y que cada producto tenga sus elementos principales visibles.

**Pasos:**
1. Acceder a la página de productos tras iniciar sesión.
2. Validar que cada producto muestre imagen, nombre, precio y botón de acción.

---

### 2. Filtrado y ordenamiento de productos (productsPage.cy.js)
**Propósito:**  
Asegurar que los filtros y el ordenamiento de productos funcionen correctamente.

**Pasos:**
1. Ordenar productos por nombre (A-Z y Z-A).
2. Ordenar productos por precio (menor a mayor y mayor a menor).
3. Validar que el orden mostrado corresponde al seleccionado.

---

### 3. Acceso a detalles de un producto aleatorio (productsDetails.cy.js)
**Propósito:**  
Verificar que al seleccionar un producto aleatorio, la página de detalles muestre la información correcta.

**Pasos:**
1. Seleccionar un producto aleatorio de la lista.
2. Obtener su nombre antes de hacer clic.
3. Acceder a la página de detalles y comparar el nombre mostrado con el guardado.
4. Validar que la imagen, precio, descripción y botón de acción estén visibles.

---

## Notas adicionales
- Todas las pruebas inician sesión antes de ejecutarse.
- Los selectores y datos se obtienen de archivos JSON externos para facilitar el mantenimiento.
- Se utilizan comandos personalizados de Cypress para mejorar la legibilidad y reutilización del código.
