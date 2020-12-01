# 目录说明
* api ajax相关
* assets 公共信息
* components 非路由组件
* config 配置信息
* pages 路由组件
* utils 工具类
* config-overrides.js 配置antd的信息
## 脚手架中antd的配置信息
* 需要yarn add babel-plugin-import react-app-rewired customize-cra
* 更改scripts脚本 react-scripts -> react-app-rewired
* fixBabelImports 针对antd实现按需打包：根据import来打包(使用babel-plugin-import)
* 需要yarn add less less-loader
* addLessLoader 使用less-loader对源码中的less的变量进行重写指定
