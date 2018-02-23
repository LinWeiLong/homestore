# homestore

this is a project use for my home.

## 目录介绍
```
server // 服务端项目
|   config
|   lib
|   routers
|   index.js
|   packages.json
web // VUE 前端项目
|   build
|   config
|   src
|   static
|   index.html
|   package.json
wxApp // 小程序端
|
readme.md
```

## 开发

服务端
```
cd server

supervisor --inspect index
```

vue端
```
cd web

sudo npm run dev
```