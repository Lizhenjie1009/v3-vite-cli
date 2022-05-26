# Vue 3 + TypeScript + Vite

## eslint 配置

```
  1. npx eslint --init // 初始化eslint，生成.eslintrc.js文件。
  
  2. parser: 'vue-eslint-parser', // 配置vue解析器

  3. // 配置规则继承
    extends: [
      'plugin:vue/vue3-recommended',  // vue3匹配规则插件
      'plugin:@typescript-eslint/recommended', // ts匹配规则插件
    ]

  4. // package.json配置scripts执行命令
    "lint": "eslint . --ext .js,.ts,.vue" // 默认只执行js
```

## prettier 配置

```
  1. // 初始化prettier
    cnpm i prettier eslint-config-prettier eslint-plugin-prettier -D

  2. // eslintrc.js -> plugins 添加 `prettier`
    plugins: ['vue-eslint-parser', 'prettier']

  3. // eslintrc.js -> extends 添加 `prettier`, `plugin:prettier/recommended`
    extends: [
      'plugin:vue/vue3-recommended',  // vue3匹配规则插件
      'plugin:@typescript-eslint/recommended', // ts匹配规则插件
      'prettier',
      'plugin:prettier/recommended'
    ]

  4. // 配置.prettierrc.js文件

  5. // package.json配置scripts执行命令
    "prettier": "prettier --write ."
```

## 目录配置


## Git Flow -> GitHub Flow 
  1. branch 命名
    > feature：开头代表功能开发
    > hotfix：开头代表代码bug修复
  2. commit信息，**必须详细**。











## vue3

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
