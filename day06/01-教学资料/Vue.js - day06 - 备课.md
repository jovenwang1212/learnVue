# Vue.js - day06

## 反馈

## 回顾

1. 图标

   1. ![1562481909469](assets/1562481909469.png)
   2. 编辑器配色
   3. ![1562481934458](assets/1562481934458.png)
   4. vscode配置同步插件
   5. ![1562481981976](assets/1562481981976.png)
2. 过滤器

   1. filters:{ formatTime(形参){ 处理数据； 返回处理之后的数据  } }
   2. 不修改数据的情况下，修改数据的显示效果
   3. ![1562482651984](assets/1562482651984.png)

```html
<div id="app">
  <h2>{{time}}</h2>
  <h2>{{time|formatTime}}</h2>
  <h2>{{time2|formatTime}}</h2>

</div>
<script src="./lib/vue.js"></script>
<script>
  const app = new Vue({
    el: "#app",
    data: {
      // time:234243
      time:192000,
      time2:24324432,
    },
    // 过滤器
    filters:{
      formatTime(time){
        console.log(time)
        //时间处理

        // 毫秒->秒 192
        const totalSec = Math.floor(time/1000)
        // 秒->分 192/60=3
        const min = Math.floor(totalSec/60)
        // 秒 % 获取除不尽的部分 192/60 为3分 12秒
        const sec = totalSec%60

        // return '天长地9'
        return `${min}:${sec}`
      }
    }
  });
</script>
```

> 1. 过滤器的使用
> 2. 作用就是把返回值显示在所在的位置

1. vue实例属性

   ```js
    // 组件
    Vue.component('fly', {
       template: '<div>2</div>',
       data() {
         return {}
       },
       methods: {
         sayHi() {}
       },
       computed: {},
       filters: {},
       created() {},
       mounted() {},
       updated() {}
     })
     // 对象的
     const app = new Vue({
       // 选择器
       el: '#app',
       // 数据
       data: {
         info: '',
         arr: [],
         obj: {}
       },
       // 方法
       methods: {
         sayHi() {
           alert('你好')
         }
       },
       // 计算属性
       computed: {
         // 计算属性一般会使用data中的数据
         // data中的数据改变时，重新执行
         infoLength() {
           // 获取info的长度
           return this.info.length
         }
       },
       // 过滤器
       filters: {
         // 格式化对象
         formatObj(obj) {
           // 处理对象数据
   
           // 返回处理完毕的数据
           return '数据'
         }
       },
       // 生命周期钩子(函数)
       // vue实例创建完毕，传入的数据设置给了这个vue实例
       created() {},
       // vue实例和dom关联起来，执行一次 最早获取dom写在这里
       mounted() {},
       // 数据改变，同步到了页面上
       // 页面更新完毕之后要添加逻辑，就可以写在这里
       updated() {}
     })
   
   ```

   > 1. 回忆Vue实例里面可以放哪些属性 el、data、methods、 computed、filters、created、mounted、updated。并简要解释每个属性的作用。
   > 2. 组件里面也可以写这些方法，回顾
   > 3. 谈格式化的作用


## 单文件组件

1. 用一个文件能够包含组件的所有内容
   1. 样式
   2. 结构
   3. 逻辑
2. `.vue`
3. 设置三个结构
   1. 输入 `<vue>`就能够自动生成
4. 复杂一点的项目都会使用单文件组件来开发，更加利于编码，利于后期维护，一个文件包含了所有的内容

```vue
<template>
  <!-- 模板 结构 -->
</template>

<script>
// 逻辑
export default {
  // 组件的属性
  methods: {
    
  },
  data(){}
  // 。。。
}
</script>

<style>
/* 样式 */

</style>

```

> 1. 单文件 是一个文件; 组件我们是知道的。 用一个文件能够包含组件的所有内容
> 2. 组件里面包含js、html、css
> 3. 昨天一个文件包含所有内容，修改的话，滚来滚去。不利用维护，也不利于分工，git提交冲突
> 4. 单文件组件是以.vue结尾的。新建一个。脚手架`<vue>`
> 5. 解释一下，脚手架生成的代码包含 html、js、css. 
> 6. 一个.vue文件可以包含组件所需要的内容，利于维护。

## Vue-cli 安装

### 基本概念

1. `脚手架`

2. 把.vue翻译成浏览器可以识别的内容

3. 自动刷新浏览器

4. 自动压缩代码

5. 自动的把js翻译为低版本的js

6. 作为代理服务器

7. ....

   

### 安装

[官网](https://cli.vuejs.org/zh/)

[安装](https://cli.vuejs.org/zh/guide/installation.html)

在小黑窗中输入`npm install -g @vue/cli`, 在任意的路径都可以

### 注意点

1. ![1562484863670](assets/1562484863670.png)
   
   1. 第一次安装，安装成功了
2. ![1562484834790](assets/1562484834790.png)
   
   1. 已经安装过，重新安装
3. ![1562484911994](assets/1562484911994.png)
   1. 类似于这样的一堆`err!`安装失败了
   
   2. 解决方案:
      
      1. ```
         npm config set registry http://registry.npmjs.org 
         ```
      
      2. 更换网络环境，可能网络不稳定
      
      3. 更换安装的工具
         1. `cnpm` ：`cnpm install -g @vue/cli`
      
      4. 清除npm缓存之后，重新安装
         1. `npm cache clean -f`
         2. 重新执行安装的命令
4. 命令查看是否成功
   
   1. `vue --version`

> 1. 文件组件浏览器无法识别。可以类比于less文件，需要转化成css
> 2. 需要工具来把.vue转化为浏览器识别的代码。工具叫`vue-cli`
> 3. vue-cli能做的事情有很多，让我们可以专注于代码，其他杂事交给工具来解决
> 4. 瞧官网，安装。同学们先安装
> 5. 命令行安装，结尾提示added或者updated都是安装成功的意思
> 6. 如果有一堆err!,是安装失败，那么可以排查一下。都安装好了吧？如果没有，一会私聊哈
> 7. vue --version查看版本号，运行如果显示版本号的话，就说明安装成功。

## Vue-cli 项目创建

[传送门](https://cli.vuejs.org/zh/guide/creating-a-project.html)



### 正常的流程

1. 创建之后会多一个项目文件夹，路径不要乱选
2. 项目名不要有中文，不要有大写字母，尽可能有意义

```
vue create 项目名
```

3. 弹出的对话框先选择默认的选项

![1562485415022](assets/1562485415022.png)

4. 稍等一会，等进度条走完 提示如下画面说明成功了

![1562485530804](assets/1562485530804.png)

5. 进入项目文件夹
   1. `cd 项目名` 直接根据提示即可 
6. 运行项目
   1. `npm run serve`
7. 稍等片刻 ，出现如下效果说明成功了

![1562485640647](assets/1562485640647.png)



### 报错的原因

1. ![1562485820281](assets/1562485820281.png)

   创建的命令输入错误`create`输入成了`creat`

2. ![1562485879426](assets/1562485879426.png)

   2. 终端的权限问题；新建管理员模式的终端
   3. 当前这个文件夹，这个文件被其他软件占用：关闭所有可能影响的软件（重启）
   4. npm包管理工具的问题:
      2. 执行``npm cache clean -f`` 在重新创建项目

3. ![1562486092416](assets/1562486092416.png)

   创建项目是，又到了第三方模块，文件太多了git人为没有必要管，提示你一下

   vue-cli创建项目是，已经设置了git忽略文件 就在`.gitignore`中

> 1. 那么我们就可以用vue这个命令了。输入vue命令。可以看到vue create这个命令，就是创建项目
> 2. vue create 项目名，回车，中途会有弹出的对话框先选择默认的选项。直接回车，就选择了默认选项
> 3. 提示successfully说明创建项目成功了。
> 4. 提示cd 项目目录
> 5. 运行npm run serve 
> 6. 访问提示的路径
> 7. 示successfully说明项目运行成功了。
> 8. 单词拼写的错误，还有其他错误解决了
> 9. git提示，也是表示成功了。那为什么有提示了呢。查看目录，发现.git文件夹，因为创建项目已经初始化了git仓库。第三方模块又巨多。vsode这个提示的意思是要不要忽略node_modules。但项目目录下有一个.gitignore文件，里面有忽略node_modules的配置。git status演示这个配置的功能。让git管不管这个文件夹。所以这个提示可以直接X掉



### 实在无法创建项目的解决方案（重要）

1. vue-cli创建项目的本质是：

   1. 创建文件夹
   2. 下载第三方模块
   3. 创建项目的基本结构
   4. 设置各个文件之间的关系
   5. 创建git仓库

2. 找一个可以创建项目的人，创建一个项目

   1. 删除`node_modules`

   2. 发给你

   3. 你使用`npm i `安装项目中用到的第三方模块

   4. `npm run serve`

> 1. 实现无法创建项目的解决方案，vue-cli创建项目的本质是，也就是说刚才我们等很久，就是因为vue-cli做了这些事情
> 2. 你可以找同桌创建项目成功的同桌，删除掉node_modules, 然后发给你。接受后就是一个node项目，安装，运行。



## Vue-cli项目结构

![1562486768385](assets/1562486768385.png)

>1. 解释
>2. 换掉favicon.ico的图标  比特虫生成ico



## Vue-cli项目编码位置

1. 组件的逻辑直接写在`xx.vue`

2. 静态资源放到`assets`文件夹下面，直接使用对应路径即可引入

3. css``assets``也是这个文件夹，如何引入

   1. `style标签中引入`

   ```css
     /* 使用css支持的语法导入 */
     /* @import url('./assets/base.css'); */
   ```

   2. `main.js`中引入

   ```js
   // 导入 样式
   import './assets/base.css'
   ```

> 1. 查看项目文件，我们大部分代码都会写在单文件组件里面
> 2. App.vue 清空。<vue>生成
> 3. 显示文字，input框但是包层不包裹，报错。如果有错误的话，错误可能会直接显示在页面上
> 4. 点击事件，双向数据绑定（**export default没解释**）。组件的data是个function返回对吧。

## Vue-cli src代码结构

1. main.js中
   1. 创建了最外层的Vue实例
   2. 把App.vue这个组件，当做Vue实例内部的最顶级组件并渲染出来
   3. 和public/index.html 中的那个id为`app`的div关联起来
2. App.vue 最顶级的那个组件，仅次于`Vue实例`
3. `assets`静态资源文件夹
4. `components`组件文件夹，除了`App.vue`之外的组件，都写到这个文件夹中即可

> 1. src是代码目录，详细看一下main.js
> 2. import导包，相当于require,import是ES6中新语法
> 3. import App是导入组件
> 4. 导入样式
> 5. Vue.config.productionTip 是否打印启动生产信息，默认是打印的
> 6. new Vue创建Vue实例
> 7. render把App这个组件，渲染到Vue实例中。用Vue开发工具查看
> 8. 我们之前的代码都是写在html中，到目前为止，没有看到html, product/index.html
> 9. index.html就是模板，作用就是把App实例放进去。一般不改它。
> 10. index.html里面的id=app和main.js里面是对应的。
> 11. assets是静态资源文件夹，存放图片和样式
> 12. components是存放组件，除了app.vue之外的组件都写到这个文件夹中。
> 13. Vue开发者工具，查看结构，解释页面是怎么出来的。html结构也看一下。



## 全局组件的注册

1. `main.js`中
2. `import 组件 from '地址'`
3. `Vue.component('名字',组件)`即可完成组件
4. 任意的地方使用
   1. 用名字作为标签
5. 希望一次注册，全部使用 全局

> 1. 写一个组件
> 2. 直接怼在main.js里面导入注册组件
> 3. 在App.vue里面使用。用Vue开发工具查看

## 局部组件的注册

1. 在需要用到这个组件的地方 导入 `import 组件 from '地址'`
2. 导入之后，设置给`components`这个属性，即可在当前这个导入的组件中使用 该组件
3. 根据使用的位置，决定局部或者是全局注册
   1. 只在某些地方用，用局部

> 1. 来一个组件
> 2. 怎么使用呢。在另一个组件中导入，局部注册，当标签一样使用。
> 3. 在全局里面使用，报错。说明在全局里访问不了。



## 组件的name属性

1. 直接在组件的内部写`name:值`即可
2. 不能用中文
3. 写了之后，chrome的vue插件中可以看到这个名字，更加利于检索，利于编码

> 1. Vue查看开发者工具，组件很多的时候，难找。
> 2. 组件给name就变了。如果不设置name的话，就是文件名。



## Vue-cli项目的路由整合

### 准备工作

1. 创建项目`vue create 项目名`
2. 进入项目文件夹`cd 项目名`
3. 运行项目`npm run serve`
4. 稍等片刻，通过提示的地址 在浏览器中 打开
5. 删除多余的组件`components/`内部的文件
6. 删除`app.vue`中的内容

### 整合路由

1. 下包 `npm i vue-router`
2. 导包 `import VueRouter from 'vue-router'` const VueRouter = require('vue-router‘)
3. 用包
   1. 创建路由规则
      1. 创建一个组件`xxx.vue`
      2. routes=[ {path:"/xx",component:组件} ]
   2. 创建路由对象
      1. router
   3. 设置给Vue实例
      1. new Vue({ router })

#### 编码位置

1. 导入 注册路由 `main.js`
2. routerlink router-view `app.vue`
3. 添加组件`components/`
4. 静态资源`assets`

### 注意

1. 如果页面不够美观 可以找到对应的组件调整结构
2. 如果路由对应的组件不够美观，找到对应的组件调整结构

> 1. 整合vue-router来一个切换tab的样果
> 2. 安装vue-router,导包，use。
> 3. 使用路由的四个步骤
> 4. 静态资源`assets`，图片引入
> 5. 写点样式



### Vue-cli项目整合player

1. 除了`node_modules`
2. 重新npm i下包 重新运行

### 实现 步骤

1. vue-router整合 `main.js`
   1. 下包 `npm i vue-router`
   2. 导包 `import VueRouter from'vue-router'`
   3. 用包 
      1. Vue.use(VueRouter )[出处](https://router.vuejs.org/zh/installation.html)
      2. 路由规则
         1. 创建对应的组件xxx.vue
      3. 创建路由对象 传入规则
      4. 路由对象设置给Vue实例
2. 设置导航栏和内容
   1. `App.vue`
3. 组件的位置
   1. `components/` xxx.vue



#### 整合导航区域

1. player中的index.html 结构拷贝到app.vue的结构中
2. 用到的`index.css`和`iconfont.css`拷贝到`assets`中，在`app.vue`导入



### 注意点

1. vue-cli开发项目文件的数量 多一些
2. `main.js`
   1. 路由
   2. 这个文件中可以访问到Vue实例
3. `app.vue`
   1. 页面中顶级的组件（最顶级的盒子）
4. `components/`
   1. 组件们`xxx.vue`
5. `assets/`
   1. 静态资源



> 1. copy一个vue create生的项目, 安装，清空部分文件，运行
> 2. 标签栏整合，copy html，样式引入
> 3. 安装vue-router, 导包，用包。路由使用的四个步骤
> 4. 结果页，copy html，样式导入。
> 5. main.js中导入result组件，更新路由规则。
> 6. App.vue里面更新router-link,加bar-item样式，添加router-view
> 7. player，video,comment的整合。图片路径问题，出错，修改路径。

## 总结

1. 单文件组件的组成

   1. 结构
   2. 逻辑
   3. 样式
2. vue-cli(脚手架)

   1. 把很多开发中需要用到的功能整合到了一起
   2. 让vue的开发人员直接专注于逻辑代码即可
   3. webpack配置出来的
3. 创建项目

   1. `vue created 项目名`

      1. 不能中文，不能大写
   2. 项目创建不好用别人创建好的，自己npm i
4. 运行项目
   1. 小黑窗进入项目文件夹
   2. `npm run serve`
5. vue-cli创建的项目
   1. 下包怎么下`npm i 模块名`
   2. 如何导包`import 名字 from '模块名'`
6. 整合路由
   1. 组件新建一个文件
   2. 路由的设置`main.js`
   3. App.vue router-link router-view
7. 项目运行
   1. `npm run serve`
   2. 根据小黑窗中提示的路径 ，在浏览器中打开即可

## 预习

1. 黑马买买买
   1. 静态资源写好了
   2. 接口也是现成
2. 抽取的逻辑
   1. es6的模块化语法
3. axios的一些高级设置
   1. 基地址
   2. 挂载到原型上