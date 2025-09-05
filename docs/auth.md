# Documentación de Pruebas: Autenticación (auth)

Esta carpeta contiene los archivos de pruebas automatizadas para la autenticación en la aplicación Swag Labs, utilizando Cypress.

## Escenarios de Prueba

### 1. Inicio de sesión exitoso
**Propósito:**  
Verificar que un usuario con credenciales válidas puede iniciar sesión correctamente.

**Pasos:**
1. Ingresar usuario y contraseña válidos.
2. Validar que la URL cambie a la página de inventario.
3. Verificar que los elementos principales de la página de productos sean visibles.

---

### 2. Inicio de sesión fallido con credenciales incorrectas
**Propósito:**  
Verificar que el sistema muestre un mensaje de error cuando se ingresan credenciales inválidas.

**Pasos:**
1. Ingresar usuario y contraseña incorrectos.
2. Validar que se muestre el mensaje de error correspondiente.
3. Confirmar que la URL permanezca en la página de login.

---

### 3. Inicio de sesión fallido con usuario vacío
**Propósito:**  
Verificar que el sistema no permita iniciar sesión si el campo de usuario está vacío.

**Pasos:**
1. Ingresar solo la contraseña.
2. Intentar iniciar sesión.
3. Validar que se muestre el mensaje de error indicando que el usuario es requerido.

---

### 4. Inicio de sesión fallido con contraseña vacía
**Propósito:**  
Verificar que el sistema no permita iniciar sesión si el campo de contraseña está vacío.

**Pasos:**
1. Ingresar solo el usuario.
2. Intentar iniciar sesión.
3. Validar que se muestre el mensaje de error indicando que la contraseña es requerida.

---

### 5. Inicio de sesión fallido con usuario bloqueado
**Propósito:**  
Verificar que el sistema muestre el mensaje adecuado cuando se intenta iniciar sesión con un usuario bloqueado.

**Pasos:**
1. Ingresar las credenciales de un usuario bloqueado.
2. Validar que se muestre el mensaje de error correspondiente.

---

### 6. Logout exitoso
**Propósito:**  
Verificar que un usuario autenticado puede cerrar sesión correctamente.

**Pasos:**
1. Iniciar sesión con credenciales válidas.
2. Abrir el menú lateral (burger menu).
3. Hacer clic en la opción de logout.
4. Validar que la URL vuelva a la página de login.
5. Verificar que el botón de login sea visible.

---