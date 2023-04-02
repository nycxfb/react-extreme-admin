
<h1 align="center"><img width="27" height="27"  src="http://150.158.155.240/resource/logo.png"> React-Extreme-Admin (持续更新中)</h1>
<p align="center">
 <img src="https://img.shields.io/badge/React-18.2.0-brightgreen.svg"/>
 <img src="https://img.shields.io/badge/ahooks-3.7.5-informational.svg"/>
 <img src="https://img.shields.io/badge/Redux-4.2.0-blueviolet.svg"/>
 <img src="https://img.shields.io/badge/Webpack-5.75.0-green.svg"/>
 <img src="https://img.shields.io/badge/antd-5.1.5-blue.svg"/>
    <br/>
        <img src="https://img.shields.io/badge/Author-nycxfb-orange.svg"/>
</p>

<p align="center">
<a target="_blank" href="http://150.158.155.240/react">在线预览</a>  
</p>


### 简介

react-extreme-admin 是一款通用的中后台管理系统模板,集成了国际化方案。
目前先行版基于 `react`,由于兼顾前端、后端、服务器及页面内容设计，精力有限, 还在不断地开发完善中。后续会推出`vue`版本,
项目技术方案:`react(hooks)` + `ahooks` + `redux` + `ant-design` + `webpack5` + `typescript`;
该系统可用于学习参考交流。



### 关于技术方案的选择

本套后台管理系统并未采用脚手架,目前市场上比较主流的脚手架有 `facebook` 的  `create-react-app.js`
以及 `阿里`出品的 `umi.js`,这两种方案都能够较快的上手，并且都省去了打包编译的配置,但都属于二次封装。如果想进一步去配置相关构建选项,
还需要借助相关插件,还是比较麻烦的一件事情,所以作者采用从零搭建,以更加深度的方式去搭建一款后台管理系统。




### 后台接口

后端接口方案采用 `koa` + `mysql` + `sequelize`+ `redis`

### 获取项目代码
```bash
git clone https://github.com/nycxfb/react-extreme-admin.git
```

### 项目概览
#### 登录页

<img src="http://150.158.155.240/resource/login.png">

#### 首页

<img src="http://150.158.155.240/resource/shouye.png">

### 启动部署

#### 环境准备
- Node
  
  版本：16.13.0

- 开发工具
```text
  Webstorm
```
- 依赖安装工具
  
```text
  yarn & npm
```

#### 项目启动

```bash
yarn install & npm install
```

```bash
npm run start
```

#### 项目打包
```bash
npm run build:production
```















