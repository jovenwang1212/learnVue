# Vue学习第6天

## 反馈



## 回顾



### 实在无法创建项目的解决方案（重要）

1. vue create干了啥

   1. 创建一个项目文件夹

   2. 并且创建了很多文件

   3. git初始化了项目，添加了.git文件

      ...

2. 直接copy别人已经生成好的vuecli项目

   1. 删除vuecli项目里面的node_moudules文件夹

   2. 获取到vuecli项目后，需要安装第三方npm包。**在项目目录下安装**

      ```
      npm install
      ```

   3. 安装完了，项目目录下执行`npm run serve`
   4. 运行成功，打开url，显示页面正确就OK



## Vue-cli项目结构

![1568171612124](Vue.js - day06 - 上课.assets/1568171612124.png)





## Vue-cli src代码结构

1. main.js是页面入口文件,public/index.html是它的dom结构
   1. el选择器和public/index.html里面id属性是关联的
   2. 创建了根实例
   3. 在根实例里面实例化了App.vue组件
2. App.vue是主组件，页面内容都是由它渲染的
3. `components` 组件都写在这里，除了App.vue
4. `assets`静态资源，存放图片,css,字体文件

### 注意点：

1. vue-cli的项目，js库都是通过npm install来安装的



## Vue-cli项目编码位置

1. 组件都应该写在xx.vue
2. 静态资源的引入直接找到路径来引入
3. css也是放在`assets`里面，引入方法
   1. css语法 @import url('路径')
   2. main.js引入 import '路径'



## 组件的全局与局部注册

1. 全局注册。一次注册，到处使用

   ```js
   Vue.component(组件名,{组件属性})
   ```

2. 局部注册。哪个组件注册，就只能在那个组件里面使用

   ```js
   new Vue({
     componnents:{
       组件名:{组件属性}
     }
   })
   ```

注意点：

1. 一个html里面可以有多个Vue实例



## Vue-cli项目的组件注册

1. 在main.js全局注册组件
   1. 引入组件 import 组件对象 from '地址'
   2. Vue.component(名字，组件对象)
   3. 在任意组件里面，可以把组件名当标签进行使用
2. 在需要用到这个组件的地方引入
   1.  import 组件对象 from '地址'
   2. 把组件对象设置给components属性
   3. 在组件里面可以把组件名当标签进行使用
3. 全局的组件就全局注册，loading,dialog; 哪个组件需要就引入; 大部分时候都是局部注册



## 组件的name属性

1. Vue建议每个组件都给一个name属性
2. Vue开发工具的组件名默认为组件的name属性



## Vue-cli项目的路由整合(练习)

### 准备工作

1. 创建一个新的vue-cli工程
2. 或者复制一份干净的vuecli工程，需要在工程目录下npm install 
3. npm run serve运行起项目，同时也是检验我们的代码是否OK



### 整合路由



#### 编码位置

### 注意



### Vue-cli路由项目整合player

### 实现 步骤



### 注意点



## player-项目创建





## player-界面分析

![1562655721263](../../day07/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562655721263.png)



## player-搜索区域整合



## player-搜索区域抽取为组件





## player-路由整合

### 注意



## 总结

