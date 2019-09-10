# Vue学习第五天

## 反馈



## 回顾



## 锚链接与hash

锚链接是超链接的一种，快速定位到页面某个位置

1. 可以改变url的hash来定位到页面的某个位置，这个位置的id和hash一致
2. window.onhashchange监听hash的改变
3. location.hash获取hash



## SPA与MPA

1. SPA(Single-Page Application) 单页应用

   一个外壳和多个页面片段组件

   1. 切换页面并不会打开新的页面, URL只是改变了hash
   2. 首屏加载会慢，切换页面比较快
   3. 适合用于后台管理

   

2. MPA(Multi-Page Applicatoin) 多页应用

   多个完整的页面组件

   1. 切换页面会打开新的页面，URL改变，loading

   2. 首屏加载快，切换页面慢

      

## hash实现SPA

改变hash, 显示对应的div



## Vue路由基本使用 

[传送门](https://router.vuejs.org/zh/)

Vue路由就是用来做单页面应用的，不同的hash显示对应的组件

Vue路由的使用只要求会copy改就行。



### Vue路由高仿网易云音乐





## Demo-高级播放器-路由整合

### 实现步骤




## 路由高亮样式

[传送门](https://router.vuejs.org/zh/api/#linkactiveclass)





## 编程式导航

[传送门](https://router.vuejs.org/zh/guide/essentials/navigation.html)



## 动态路由匹配

[传送门](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96)



## Demo-歌曲搜索

![1562401240897](assets/1562401240897.png)

### 实现步骤

### 注意点



## 生命周期钩子 -created



## Demo-高级播放器-结果搜索

### 实现步骤

### 注意点



## 过滤器基本使用

[过滤器](https://cn.vuejs.org/v2/guide/filters.html)



## Demo-过滤器处理result中搜索的结果

![1562407610048](assets/1562407610048.png)

### 实现步骤


### 注意点



## Vue-cli 安装

### 基本概念



### 安装

[官网](https://cli.vuejs.org/zh/)

[安装](https://cli.vuejs.org/zh/guide/installation.html)

在小黑窗中输入`npm install -g @vue/cli`, 在任意的路径都可以

为了让安装速度提升，设置npm包下载的镜像为taobao镜像

```html
npm config set registry https://registry.npm.taobao.org/
```

### 注意点



## 单文件组件



## Vue-cli 安装

## Vue-cli 项目创建

[传送门](https://cli.vuejs.org/zh/guide/creating-a-project.html)

## 总结
