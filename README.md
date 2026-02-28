# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Application layout

This donation application has been reorganized into three **main pages** corresponding to the three user roles:

1. **Guest** – public landing page where visitors can log in, register, or browse donations.
2. **User** – authenticated user dashboard where donors can create/manage donations, view their claims, make payments, etc.
3. **Admin** – administration console for reviewing donations/claims and viewing reports.

All other features that were previously separate screens are now implemented as **modal dialogs** that appear on top of the current main page. The modal components live under `src/components/modals` and are triggered from the appropriate main page. This keeps navigation simple and ensures a consistent container for each role.

### Running the app

Use the usual Vite commands:

```bash
npm install
npm run dev
```

The home view renders a navigation bar allowing you to switch between guest, user, and admin modes for development/testing. In a real deployment the role would be determined by authentication.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
