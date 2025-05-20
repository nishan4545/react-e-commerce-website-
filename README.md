# @vitejs/plugin-react [![npm](https://img.shields.io/npm/v/@vitejs/plugin-react.svg)](https://npmjs.com/package/@vitejs/plugin-react)

The default Vite plugin for React projects.

- enable [Fast Refresh](https://www.npmjs.com/package/react-refresh) in development (requires react >= 16.9)
- use the [automatic JSX runtime](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- use custom Babel plugins/presets
- small installation size

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
