# vue-vant-mobile

* 本项目皆在于帮助大家快速开发移动端项目
* 这是移动端通用的模板项目，欢迎各位使用
* 🥰觉得好用可以**点亮小星星**支持一下哦，大家的支持是我最大的动力

### 项目技术栈

|                            项目                             |  版本   |                            说明                            |
| :---------------------------------------------------------: | :-----: | :--------------------------------------------------------: |
|               [vite](https://cn.vitejs.dev/)                | ^4.0.0  |      是一种新型前端构建工具，能够显著提升前端开发体验      |
|            [typescript](https://www.tslang.cn/)             | ^4.9.3  | TypeScript是Javascript类型的超集，它可以编译成纯JavaScript |
|                [vue](https://cn.vuejs.org/)                 | ^3.2.45 |                   渐进式 JavaScript 框架                   |
|           [vue-router](https://router.vuejs.org/)           | ^4.1.6  |                 Vue Router 是Vue的官方路由                 |
|             [pinia](https://pinia.web3doc.top/)             | ^2.0.28 |     Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态     |
|     [vant](https://vant-contrib.gitee.io/vant/#/zh-CN/)     | ^4.0.7  |            Vant 是一个轻量、可靠的移动端组件库             |
|        [axios](http://axios-js.com/zh-cn/index.html)        | ^1.2.2  |                  易用、简洁且高效的http库                  |
|     [nprogress](https://github.com/rstacruz/nprogress)      | ^0.2.0  |                    应用程序的细长进度条                    |
|               [postcss](https://postcss.org/)               |    /    |                使用JavaScript转换CSS的工具                 |
| [initialize.css](https://github.com/lwl9710/initialize.css) |    /    |                   用于初始化页面默认样式                   |

### 项目特色

1. 🔥开箱即用
2. 🔥良好的架构设计
3. 🔥友好的开发体验
4. 🔥精简，尽量不加入多余的代码
5. 🔥采用当前主流技术**Vue3 + Typescript**的解决方案

### 目录介绍

```html
├── public 静态资源
├── src
│   ├── apis 接口目录
│   ├── assets 资源目录
│   ├── components 这个目录下的组件会被自动注册为全局组件无需手动注册
│   ├── config 项目配置目录
│   ├── layouts 布局目录
│   ├── libs 项目依赖目录
│   ├── pages 页面目录
│   ├── router 路由目录
│   ├── store 状态目录
│   ├── utils 工具目录
│   │   ├── request.ts axios二次封装
│   ├── App 项目视图
│   ├── main.ts 项目入口文件
├── types 类型声明
│   │   ├── global.d.ts 全局声明文件
├── postcss.plugins.ts postcss插件配置文件
├── env 通用环境变量
├── env.development 开发环境变量
├── env.production 生产环境变量
```

### 使用说明

1. 元素尺寸控制

   * 项目基于750px的设计稿进行预配置，可通过postcss.plugins.ts文件修改
* **css单位直接使用px**，pxtorem插件会自动转换项目的px单位
   * **如果不希望px单位被转换可以使用大写字母"PX"作为单位**
   
2. vue文件介绍

   ```text
   使用setup语法时无需手动引入vue、vue-router 组合式API(使用unplugin-auto-import插件实现)
   ```

3. 开发跨域解决方案

   * 修改env.development的**VITE_PROXY_TARGET**变量为真实的请求地址即可

4. 路由配置

   * meta属性说明

     ```TEXT
     title 页面标题
     isTabbarPage 是否为tabbar页面,开启后会在页面显示tabbar
     pageColor 页面背景颜色
     ```


### 命令行介绍

* npm

  ```shell
  npm install 安装依赖
  npm run dev 启动开发调试
  npm run build 编译项目
  ```

* pnpm

  ```shell
  pnpm install 安装依赖
  pnpm dev 启动开发调试
  pnpm build 编译项目
  ```

  