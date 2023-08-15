# commerce_program
## 项目介绍

### 业务介绍

微信小程序端：该项目包含了从首页浏览商品，到商品详情，微信登录，加入购物车，提交订单，微信支付，订单管理等功能。

![img](https://cdn.nlark.com/yuque/0/2023/png/27267535/1692069416557-669f01b4-c127-4a2c-9efc-9e7cd391d9a3.png)

### 项目架构

- 前端框架：[uni-app](https://uniapp.dcloud.net.cn/) (Vue3 + TS)
- 状态管理：[pinia](https://pinia.vuejs.org/zh/)
- 组件库：[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

项目模块结构如下：

项目目录结构如下：

```plain
├── .husky                     # Git Hooks
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── components             # 全局组件
│   ├── composables            # 组合式函数
│   ├── pages                  # 主包页面
│       ├── index               # 首页
│       ├── category            # 分类页
│       ├── cart                # 购物车
│       ├── my                  # 我的
│       ├── goods               # 商品详情
│       └── hot                 # 热门推荐
│       └── login               # 登录页
│   ├── pagesMember            # 分包页面(用户模块)
│       ├── address             # 地址管理
│       ├── address-form        # 地址表单
│       ├── profile             # 用户信息
│       └── settings            # 用户设置
│   ├── pagesOrder             # 分包页面(订单模块)
│       ├── create              # 创建订单
│       ├── detail              # 订单详情
│       ├── list                # 订单列表
│       └── payment             # 支付结果
│   ├── services               # 所有请求
│   ├── static                 # 存放应用引用的本地静态资源的目录
│       ├── images              # 普通图片
│       └── tabs                # tabBar 图片
│   ├── stores                 # 全局 pinia store
│       ├── modules             # 模块
│       └── index.ts            # store 入口
│   ├── styles                 # 全局样式
│       └── fonts.scss          # 字体图标
│   ├── types                  # 类型声明文件
│   ├── utils                  # 全局方法
│   ├── App.vue                # 入口页面
│   ├── main.ts                # Vue初始化入口文件
│   ├── pages.json             # 配置页面路由等页面类信息
│   ├── manifest.json          # 配置appid等打包信息
│   └── uni.scss               # uni-app 内置的常用样式变量
├── .eslintrc.cjs              # eslint 配置
├── .prettierrc.json           # prettier 配置
├── .gitignore                 # git 忽略文件
├── index.html                 # H5 端首页
├── package.json               # package.json 依赖
├── tsconfig.json              # typescript 配置
└── vite.config.ts             # vue-cli 配置
```

### 项目截图

| [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_1.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_1.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_2.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_2.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_3.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_3.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_4.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_4.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_5.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_5.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_6.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_6.jpg) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_7.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_7.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_8.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_8.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_9.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_9.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_10.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_10.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_11.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_11.jpg) | [![img](https://github.com/Megasu/uniapp-shop-vue3-ts/raw/master/README/images/screenshot_12.jpg)](https://github.com/Megasu/uniapp-shop-vue3-ts/blob/master/README/images/screenshot_12.jpg) |

### 项目构建

- pnpm install 
- pnpm dev:mp-weixin

## 项目亮点

1. 页面布局可**适配**不同机型。
2. 用**骨架屏**替代传统loading提示框，提高用户体验感。
3. 项目采用**页面分包+预加载**方案，降低首屏加载等待时间。
4. 根据环境区分登录方案，方便开发操作。
5. 使用**sku组件**提高用户购物时的交互体验。
6. 代码使用条件编译语法，如有必要可编译为其他端应用。
