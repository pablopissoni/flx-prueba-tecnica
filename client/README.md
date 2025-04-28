## Instalación

1. **Instalar dependencias**:
   Instala las dependencias en ambos directorios:

```bash
npm install
```

```
'flx-prueba-tecnica\api'
          y
'flx-prueba-tecnica\client'
```

2. **Inicia**
   <br>
   Inicia el servidor en '\api'

```
npm run server
```

y luego en '\client'

```
npm run dev
```

# Nota

Dentro del archivo src/context/UsersContext.jsx, se simula una demora artificial de 2 segundos en las peticiones de datos utilizando el siguiente código:

```bash
await new Promise((resolve) => setTimeout(resolve, 2000));
```

Este retraso permite probar comportamientos de carga en la interfaz de usuario durante el desarrollo

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
