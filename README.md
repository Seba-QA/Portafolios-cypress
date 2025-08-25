# Swag Labs - Portafolio de Automatización con Cypress

Este proyecto forma parte de mi **portafolio profesional de automatización**, y está enfocado en la creación de **pruebas automatizadas end-to-end (E2E)** sobre la aplicación web [Swag Labs](https://www.saucedemo.com/) utilizando **Cypress**.  

El objetivo principal es demostrar:
- **Buenas prácticas en automatización**, incluyendo modularización y reutilización de código.
- **Cobertura integral de funcionalidades**, desde pruebas unitarias de cada módulo hasta flujos completos E2E.
- **Documentación clara y estructurada**, para que cualquier persona pueda entender el proyecto, incluso sin conocimientos avanzados en automatización.

Este repositorio se actualizará progresivamente, incorporando nuevos módulos, reportes automáticos y mejoras en la integración continua.

---

## **Instalación y Ejecución**

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Seba-QA/Portafolios-cypress.git
   cd Swag-Labs-Cypress
   ```
2. **Instalar dependencias**
   ```bash
   npm install
   ```
3. **Ejecutar Cypress en modo interactivo**
   ```bash
   npx cypress open
   ```
4. **Ejecutar todas las pruebas en modo headless**
   ```bash
   npx cypress run
   ```

## **Estructura del proyecto**

```
Swag-Labs/
│
├── cypress/
│   ├── e2e/          # Pruebas E2E organizadas por módulos
│   ├── fixtures/     # Datos de prueba y selectores en JSON
│   ├── support/      # Commands personalizados y configuraciones
│   └── reports/      # Reportes de ejecución (en futuras versiones)
│
├── docs/  # Documentación detallada de cada módulo
│
├── package.json      # Dependencias del proyecto
│
└── README.md         # Este archivo
```

## **Módulos Actuales**
- **Autenticación (Login)**: Validación de todos los escenarios relacionados al proceso de autenticación, incluyendo casos exitosos y fallidos.
  - Documentación: `documentaciones/auth.md`
  - Documentación: `documentaciones/products.md`
  
(Se irán añadiendo más módulos conforme avance el desarrollo)

## **Autor**
Técnico Universitario en Informática | QA & Automatización de Pruebas  
LinkedIn: [www.linkedin.com/in/sebastián-gonzalez-qa](https://www.linkedin.com/in/sebastián-gonzalez-qa)


