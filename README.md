English | [简体中文](./README.zh-CN.md) 

---

**:blush: based on [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader).**

---

# vite-plugin-vue-svg-reactive-loader
Vite 2.x plugin, loads SVG files as Vue components, and automatically adds the [`viewBox`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) attribute to the svg, so that the svg can be adaptively zoomed.

<a href="https://www.npmjs.com/package/vite-plugin-vue-svg-reactive-loader" target="_blank"><img src="https://img.shields.io/npm/v/vite-plugin-vue-svg-reactive-loader?style=flat-square" alt="Version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-vue-svg-reactive-loader" target="_blank"><img src="https://img.shields.io/npm/dw/vite-plugin-vue-svg-reactive-loader?style=flat-square" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vite-plugin-vue-svg-reactive-loader" target="_blank"><img src="https://img.shields.io/npm/l/vite-plugin-vue-svg-reactive-loader?style=flat-square" alt="License"></a>

```html
<template>
  <MyIcon class="my-icon"/>
</template>

<script setup>
import MyIcon from './my-icon.svg'
</script>

<style scoped>
.my-icon {
    height: 14px;
    width: 14px;
    fill: aqua;
}
</style>
```

### Install
```bash
npm install vite-plugin-vue-svg-reactive-loader --save-dev
```

### Setup

#### `vite.config.js`
```js
import svgReactiveLoader from "vite-plugin-vue-svg-reactive-loader"

export default {
  plugins: [vue(), svgReactiveLoader()],
}
```

### Use with TypeScript
If you use the loader in a Typescript project, you might get warnings like `Type 'string' is not assignable to type 'Component'`.
To fix this you'll need to add the following type definitions to your compiler options:

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "types": ["vite-plugin-vue-svg-reactive-loader",, "vite/client"]
  }
}
```


