[English](./README.md) | 简体中文 

---

**:blush: 基于 [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader).**

---

# vite-plugin-vue-svg-reactive-loader
vite 2.x插件，以vue组件的形式加载svg文件，并且自动为svg添加viewBox属性，使svg可以自适应缩放

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
```

### 安装
```bash
npm install vite-plugin-vue-svg-reactive-loader --save-dev
```

### 设置

#### `vite.config.js`
```js
import svgReactiveLoader from "vite-plugin-vue-svg-reactive-loader"

export default {
  plugins: [vue(), svgReactiveLoader()],
}
```

### 和TypeScript一起使用
如果你在TypeScript项目中使用此loader，你也许会收到类似警告`Type 'string' is not assignable to type 'Component'`。要解决此问题，您需要在编译器选项中添加以下类型定义：

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "types": ["vite-plugin-vue-svg-reactive-loader",, "vite/client"]
  }
}
```


