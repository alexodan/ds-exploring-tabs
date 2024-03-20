# Exploring Design Systems

This repo explores different design systems using one component: Tabs

The idea is to get familiar with a few implementations and their APIs

- Understand the philosophy of design systems
- Weight the different approaches on how to build UI components

To get started I'll be using

## Carbon (IBM): https://carbondesignsystem.com/components/tabs/usage

### Comments

Right off the bat, you need to install SASS and import CSS styles to get the Carbon styles applied in your components like so:

```css
@use '@carbon/react';
/* or an specific component */
@use '@carbon/react/';
```

### Resources

https://medium.com/carbondesign/moving-forward-on-deprecating-carbon-components-and-carbon-components-react-4f2f0c3d8448

## Material UI: https://mui.com/material-ui/react-tabs/

### Resources

## Radix UI: https://www.radix-ui.com/primitives/docs/components/tabs

**Something interesting:**

Using module.css in the Radix component leaks the styles affecting other components outside the file, I wonder if it has to do with this https://github.com/vitejs/vite/discussions/11844 or I'm doing something wrong here.

## Built with React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
