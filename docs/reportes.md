# Documentación de Reportes

Esta carpeta contiene la configuración y resultados de los reportes generados automáticamente al ejecutar las pruebas con Cypress. Se utilizan dos tipos de reportes principales: **JUnit** y **Mochawesome**.

---

## 1. Reportes JUnit (XML)

**Propósito:**  
Generar reportes en formato XML compatibles con herramientas de integración continua (CI/CD) y dashboards externos.

**Características:**
- Cada archivo `.xml` corresponde a un spec ejecutado.
- Estructura pensada para ser consumida por Jenkins, GitLab CI/CD, Azure DevOps, etc.

**Ubicación:**
```
cypress/reports/junit/
```

---

## 2. Reportes Mochawesome (JSON + HTML)

**Propósito:**  
Proveer un reporte visual detallado de las ejecuciones de pruebas, con gráficos, capturas y videos.  

**Características:**
- Consolidación de todos los specs en un único **HTML unificado**.
- Incluye capturas automáticas en caso de fallo.
- Genera grabaciones de cada ejecución.

**Ubicación:**
```
cypress/reports/mochawesome/
│
├── index.html   # Reporte consolidado (abrir en navegador)
└── videos/      # Grabaciones de ejecución
```

---

## 3. Ejecución de Reportes

### a) Limpiar reportes anteriores
```bash
npm run clean:reports
```

### b) Ejecutar todas las pruebas y generar reportes
```bash
npm run report:full
```

### c) Reporte generado
- **JUnit:** en `cypress/reports/junit/*.xml`
- **Mochawesome:** en `cypress/reports/mochawesome/index.html`

---

## 4. Reportes en GitHub Pages

**Propósito:**  
Hacer accesible el reporte Mochawesome de manera pública tras cada ejecución en GitHub Actions.  

**Proceso:**
1. GitHub Actions ejecuta las pruebas automáticamente en cada push.
2. Se generan los reportes (JUnit + Mochawesome).
3. El reporte Mochawesome consolidado se publica en **GitHub Pages**.

**Acceso directo:**  
🔗 [Ver último reporte Mochawesome](https://seba-qa.github.io/Portafolios-cypress/)
