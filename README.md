# Swag Labs - Portafolio de Automatización con Cypress

![CI](https://github.com/Seba-QA/Portafolios-cypress/actions/workflows/page.yml/badge.svg)
[![Report](https://img.shields.io/badge/Report-Mochawesome-blue)](https://seba-qa.github.io/Portafolios-cypress/)

Este proyecto forma parte de mi **portafolio profesional de automatización**, y está enfocado en la creación de **pruebas automatizadas end-to-end (E2E)** sobre la aplicación web [Swag Labs](https://www.saucedemo.com/) utilizando **Cypress**.  

El objetivo principal es demostrar:
- **Buenas prácticas en automatización**, incluyendo modularización y reutilización de código.
- **Cobertura integral de funcionalidades**, desde pruebas unitarias de cada módulo hasta flujos completos E2E.
- **Documentación clara y estructurada**, para que cualquier persona pueda entender el proyecto, incluso sin conocimientos avanzados en automatización.
- **Integración continua (CI)** con GitHub Actions y generación automática de reportes.

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

---

## **Scripts adicionales**
   **limpia reportes anteriores**
   ```bash
   npm run clean:reports
   ```
   **ejecuta todas las pruebas, genera reportes y los unifica**
   ```bash
   npm run report:full
   ```
   **combina todos los JSON de Mochawesome en un solo archivo**
   ```bash
   combina todos los JSON de Mochawesome en un solo archivo
   ```
   **genera el reporte HTML a partir del JSON unificado.**
   ```bash
   npm run report:generate
   ```

---

## **Estructura del proyecto**

```
Swag-Labs/
│
├── cypress/
│   ├── e2e/          # Pruebas E2E organizadas por módulos
│   ├── fixtures/     # Datos de prueba y selectores en JSON
│   ├── support/      # Commands personalizados y configuraciones
│   └── reports/      # Reportes de ejecución (Junit / Mochawesome)
│
├── docs/  # Documentación detallada de cada módulo
│
├── .github/workflows # Configuración de GitHub Actions (CI/CD)
│
├── package.json      # Dependencias del proyecto
│
└── README.md         # Este archivo
```

## **Módulos Actuales**
  - `documentaciones/auth.md`
  - `documentaciones/products.md`
  - `documentaciones/cart.md`
  - `documentaciones/checkout.md`
  
---

## 📝 Reportes

El proyecto genera automáticamente reportes en dos formatos:  

- **JUnit (XML)** → útil para integración con herramientas de CI/CD.  
- **Mochawesome (JSON + HTML unificado)** → reportes visuales detallados con gráficos y resultados de pruebas.  

**Los reportes se encuentran en la carpeta:**
```
cypress/reports/
│
├── junit/
│
└── mochawesome/
    ├── index.html 
    └── videos/    
```
**🔗 [Ver último reporte Mochawesome](https://seba-qa.github.io/Portafolios-cypress/)**

Ejemplo de ejecución:
- Se ejecuta `npm run report:full`.
- Se limpia la carpeta de reportes anteriores.
- Se ejecutan todas las pruebas.
- Se genera carpeta junit con sus .xml por test
- Se genera carpeta mochawesome con su index.html y carpeta videos

---

## **⚙️ Integración Continua (CI/CD)**
   **Este repositorio incluye un pipeline en GitHub Actions que:**
   1. Ejecuta todas las pruebas automáticamente en cada push.
   2. Genera los reportes (JUnit + Mochawesome).
   3. Publica el reporte Mochawesome como página en GitHub Pages.

---

## **Autor**
Técnico Universitario en Informática | QA & Automatización de Pruebas  
LinkedIn: [www.linkedin.com/in/sebastián-gonzalez-qa](https://www.linkedin.com/in/sebastián-gonzalez-qa)


