# react-mobx-webpack

#### 脚手架介绍

react mobx webpack 脚手架

mobx: 5.9.4

mobx-react: 5.4.4

react: 16.13.1

webpack: 4.29.6

babel: 7.4.0

#### 使用说明

1. npm install
2. npm start

#### future

管道语法暂时未加  ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal"}]

#### less命名规范

1. 使用小写英文字母加'-'的命名规范，不要用1，2，3，4或者拼音首字母等模糊的命名方式。

2. 不要写修改全局标签的样式

3. 不要全局修改antd的样式

.[模块名称]-[二级模块名称]-[三级模块名称]

eg:

```less
.home-swiper {
  .home-swiper-item {}
}
```

#### 文件夹命名规范

使用小写英文字母加'-'的命名规范，不要用1，2，3，4或者拼音首字母等模糊的命名方式。

#### JS文件命名规范

react模块使用驼峰的命名规范，不要用1，2，3，4或者拼音首字母等模糊的命名方式。

#### 其他要求

一个模块代码最好不超过200行代码，项目中合理使用hooks，尽可能拆分子模块和公共模块，共用模块放到`components`文件夹.

#### 插件css class命名规范

1. pe-xxx (plugin-editor-xxx)

2. pl-xxx (plugin-layer-xxx)
