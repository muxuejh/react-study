### 配置路径别名 @

CRA 把 webpack 配置包装到了黑盒里无法直接修改，需借助插件 craco

1. 安装 craco

```shell
npm i -D @craco/craco
```

2. 根目录下新建 craco.config.js

```js
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
```

3. package.json 修改 scripts

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
}
```

4. 路径提示
   vscode 联想配置 根目录下新建 jsconfig.json 文件，加入配置之后 vscode 会自动联想路径

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### json-server 模拟接口

1. 安装 json-server

```shell
npm i -D json-server
```

2. 准备一个 json 文件

3. 添加启动命令
   package.json

```shell
  "server": "json-server ./server/db.json --port 3001"
```

4. 启动服务

```shell
  npm run server
```

运行之后就可通过本地访问模拟接口了

运行报错安装版本 0.17.4
