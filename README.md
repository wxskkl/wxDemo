# wxDemo

**微信原生小程序 + ts + sass**

## 目录结构

```
  |-- package.json', // 软件包信息
  |-- project.config.json',  // 项目配置文件
  |-- tsconfig.json',  // ts配置文件
  |-- miniprogram',
    |-- app.json',   // 全局配置文件
    |-- app.scss',   // 全局样式
    |-- app.ts',   //  程序入口
    |-- sitemap.json', // 页面匹配规则
    |-- components', // 公共组件
    |-- icon', // 静态tabbar图标
    |-- pages',  // 页面入口
    |-- utils',  // 公共方法
    |-- views',  // 业务页面
```

## 项目初始化

- npm i -registry=https://registry.npm.taobao.org
- 在微信开发者工具里构建 npm

## vant 组件库的使用
**[官方文档](https://vant-contrib.gitee.io/vant-weapp/#/home)**
```json
"usingComponents": {
  "van-button": "@vant/weapp/button/index",
  "van-calendar": "@vant/weapp/calendar/index"
}
```
## [dayjs官方文档](https://dayjs.fenxianglu.cn/) 
