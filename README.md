## 

# 在 react 中使用 mobx

## 前期准备

使用  react-app-rewired  修改 create-react-app 的配置， 使其支持装饰器语法


* 安装依赖

```powershell
yarn add react-app-rewired
yarn add --dev customize-cra
yarn add @babel/plugin-proposal-decorators
```

* config-overrides.js

```javascript
const {
  override, 
  addDecoratorsLegacy, 
  disableEsLint
} = require('custommize-cra');
module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint()
);
```

* package.json

```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test",
  "eject": "react-app-rewired eject"
}
```

* 处理 vscode 报错

![图片](https://uploader.shimo.im/f/qj6lkjTKp2uF8MyY.png!thumbnail)

```javascript
"javascript.implicitProjectConfig.experimentalDecorators": true
```