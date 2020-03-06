<h1 align="center">从0开始 —— React 服务端渲染实战</h1>

## 已实现目标

- 路由同构 (react-router-dom)
- 数据同构 （redux）
- 双端数据请求 (axios)
- 异步加载 (loadable-component)

## 使用

```bash
$ git clone https://github.com/WinmezzZ/react-ssr-template
$ cd react-ssr-template
$ npm install
$ npm build
$ npm start
```

#### 如何查看是否为服务端渲染？

右键网页查看网页源码，body内不是只有一个<div id="root">标签，并且页面和数据能对应上网页，即服务端渲染成功。

ps：若要使用ts，可以结合我另一个[webpack-typescript-app](https://github.com/WinmezzZ/webpack-typescript-app)进行参考