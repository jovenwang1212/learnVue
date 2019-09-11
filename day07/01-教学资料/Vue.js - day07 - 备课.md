# Vue学习第七天

## 反馈

## 回顾



## player-轮播图

### 00 -整合轮播图组件

1. 创建轮播图组件 02.slider.vue
2. main.js中导入组件
   1. path:"/slider"
   2. component:slider

#### 注意

1. 添加了路由规则之后，可以用router-link,或者router.push来修改地址，跟通用的方法是，**直接修改url**

> 1. 看到页面，这里有个轮播图。我们先来加一个轮播图组件，然后再看怎么实现它
> 2. main.js导入组件，结合路由，默认路径显示轮播图组件

### 01 - 饿了么ui 介绍

[传送门](https://element.eleme.cn/#/zh-CN)

1. 饿了吗前端团队开发的pc端的基于vue的组件库
2. 内部封装了很多现成的组件，直接就可以使用比如轮播图，tab栏，省市联动，开关，table
3. 因为在vue开发时用的很多，所以和几个其他的库合并到一起被称之为 **vue全家桶**
   1. vue
   2. axios
   3. vue-router
   4. 饿了么ui
   5. vuex

> 1. 轮播图，怎么实现呢？我们以前用过jquery和原生的轮播图对吧。实际工作中，我们一般不会自己写轮播图，使用第三方的轮播图。基于Vue也有一个很流行的UI框架，包含轮播图。-- 饿了么ui。
> 2. 搜索饿了么ui，内部封装了很多组件。我当时在公司里写组件，也会参考饿了么ui的源码
> 3. vue和基于vue的库，统为vue全家桶，包括

### 02 - 轮播图组件使用 

 	1. 下包 npm i element-ui -S
	   	1. 展示轮播图
	          	1. slider组件初始化尽早初始化
                	2. created请求接口初始化
                	3. axios.get调用接口https://autumnfish.cn/banner 
                	4. 要用axios
	                 	1. 安装axios
                       	2. 引入
                       	3. 使用
                	5. 渲染页面上
                	6. 可能还需要调整轮播图的样式

> 1. 那么element-ui怎么使用呢？看文档
> 2. 安装，引入和使用
> 3. 找到使用走马灯，看走马灯效果。文档的示例由简入繁，我们先看基本使用。展示源码。
> 4. 在项目里面安装，引入，copy代码，开始轮播了。
> 5. 你怎么知道云听音乐每天要播什么呢？每天看的轮播内容不一样，当然是接口数据
> 6. 查文档，调接口，和网易云音乐对比
> 7. 组件初始化就要获取数据，哪个钩子可以做到呢？created
> 8. 安装axios，引入，使用
> 9. 调整样式，自定义一个class.修改样式

#### 注意点

1. 饿了么ui的轮播图模板默认提供的是h3标签，需要自行替换为别的标签
2. 默认有一个高度 150px，可能需要根据需求调整
4. 组件一出现就要调用接口，一般放到哪个钩子
   1. created:这里可以访问data

### 03 - 路由重定向

1. [传送门](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html)
2. `{ path: '地址1', redirect: '跳转到的地址2' }`
3. main.js中增加一个重定向规则即可
4. 能够实现，匹配到地址1之后，立即跳转到地址2

#### 注意点

重定向的地址 如果没有对应组件，页面会显示空白

> 1. 想让用户一进来就，展示slider,路由的重定向
> 2. 文档
> 3. 实现 定规则里面增加一条，匹配到/，就跳转到slider



## player-歌曲搜索

### 01 - 搜索路由

1. 写组件 03.results.vue
2. 注册路由规则
   1. path:'/search'
   2. component:search

#### 注意

路由规则测试直接url输入地址即可，对于动态路由匹配，地址`/results/内容`

> 1. 输入内容，是不是得搜歌呢。是不是要展示歌曲搜索这个组件呢
> 2. 新建一个歌曲搜索按钮，路由规则，换地址，可以切换到搜索组件。稍调整样式。

### 02 - 搜索路由切换

1. 01.search.vue
2. 点击搜索
3. 按下回车时
4. 携带输入的内容 修改路由地址
5. `router.push('/results/搜索关键字')`
6. vue-router源码中的关键部分
7. 把$router设置给Vue的原型，所有的Vue实例就都可以使用这个属性了
8. 组件中编程式导航，this.$router.push('地址')

```js
  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });
```

> 1. 点击搜索，显示搜索组件，并携带输入的关键字
> 2. router.push切换路由会报错。改成this.$router能解决问题，为什么呢
> 3. 看源码 $router设置给Vue的原型，那么Vue实例里面就可以访问到$router
> 4. 所有的组件都是Vue实例，所以this.$router就可以访问到。



### 03 - 饿了么ui 弹框

1. [传送门](https://element.eleme.cn/#/zh-CN/component/message)
2. 使用方式`  this.$message('这是一条消息提示'); `
3. 需要弹框的时候，调用上述的代码，即可弹出一个普通的消息提示框
4. 如果要弹出一些比较高级的框

```js
this.$message({
  message: '恭喜你，这是一条成功消息',
  type: 'success'
});
  this.$message({
  message: '警告哦，这是一条警告消息',
  type: 'warning'
});
  this.$message.error('错了哦，这是一条错误消息');
```

> 1. 先来一个优化一个用户体验，用户输入的关键字为空，提示。我们原来调用alert，很丑。实际工作中，从来不会用alert，一般调第三方框的弹框提示，或者按公司内部的标准去设置弹框。
>
> 2. 看文档，演示基本例子。有哪些使用方法

### 04 - 搜索结果非空判断

1. 01.search.vue
2. 点击搜索，或者是按下回车
3. 判断搜索关键字是否为空
4. 不为空跳转
5. 为空，提示用户
6. 使用饿了么的弹框，只需要在需要的使用调用方法即可
7. ![1562663475563](assets/1562663475563.png)

#### 注意点

1. $message之所以可以使用是因为设置给vue的原型
2. 在![1562663523452](assets/1562663523452.png)直接搜索`$message`即可找到

> 1. 接着，我们在搜索关键字为空的时候，提示用户。
> 2. this.$message哪来的呢。我们看element-ui源码
> 3. element-ui把一些常用的组件设置给了Vue.prototype



### 05 - 渲染搜索结果

1. 通过路由获取数据
2. axios调用接口 created  <https://autumnfish.cn/search?keywords=
3. 数据获取到之后
4. 渲染到页面上

#### 注意

1. created 很多时候都可以用来获取初始的数据 

> 1. 拿数据，渲染到页面上
> 2. 找到接口
> 3. 实现逻辑和之前一样。包括过滤器

### 06 - 过滤器歌手处理

filters:formatSinger(singers)\{ return}

### 07 - 过滤器时间处理

filters:formatTIme(time){ return}

 定义和用法类似，但是内部的逻辑需要根据需求来调整



## 侦听器

[传送门](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8)

data里面的属性有改变，就会触发一下方法

```js
watch:{
  属性名(){
    console.log('变化了')
  }
}
```



>看文档，解析它的用法，watch里面包一个方法，方法名为监听的属性名
>
>双向数据绑定，watch侦听到message的变化。
>
>watch一个没有定义在data里面的属性，无法侦听到变化



### 09 - 重复搜索功能实现

1. 当search改变时重新调用接口
2. created中已经实现了接口调用
3. 抽取为函数，在2个地方调用即可

#### 注意

1. created组件如果不被销毁，只会触发一次
2. 如果有需求在特定数据改变时重新执行逻辑，可以使用 侦听器`watch`
3. watch和updated相比触发的频率 低

> 1. 抽取方法，在侦听器监测到keyword变化时，再请求



## player - 播放歌曲

### 01 - 点击去播放器

1. 在03.results.vue的歌曲列表的 左侧播放按钮上绑定 点击事件
2. 点击事件中获取歌曲的id
3. 触发之后，使用编程式导航跳转去播放器 放歌，携带id
4. 动态路由匹配 main.js
   1. 创建04.player.vue组件
   2. path:'/player/:id'
   3. component:player

> 1. 点击要播放歌曲
> 2. 思路分析
> 3. 实现逻辑同上



### 02-axios抽取 基地址设置

1.  main.js中 把axios设置给
   1. `Vue.prototype.$axios=axios`
2. 所有的组件都可以使用了
3. 基础地址一样，没有必要每次都写，可以直接抽取出来
4. `axios.defaults.baseURL = '设置的基地址';`
5. main.js中

#### 注意

1. $的目的是和自己的属性区分，这是一个大伙都遵守的约定 
2. 设置了之后，所有的组件内部都可以通过`this.$axios`访问axios
3. axios设置了基地址之后，请求有2种情况
   1. 请求的地址是完整的,`https://autumnfish.cn/song/search?id=123`
      1. 不会去拼接基地址
   2. 请求的地址只有一部分：`/song/url?id=123`
      1. axios就会自动补全基地址部分
4. 绝大多数的项目中，后台接口部署在一台服务器上，基地址是一样的，设置一次即可
   1. 对于不同基地址的接口，直接给完整地址

> 1. 现在的代码每个组件里面，都导入一次axios，能不能让设置为全局变量，让其他组件能共享呢？ 设置到Vue的原型
> 2. Vue.prototype.axios = axios,先在player中访问一下
> 3. axios.get的url前面部分都一样，能不能省去呢。查看文档
> 4. 设置axios.default.baseURL 基地址
> 5. 找到播放歌曲的歌词

### 03 - 歌曲信息显示

### 04 - 歌曲url获取

### 05 - 歌词显示

处理歌词用的正则`/\[\d{2}\:\d{2}\.\d{2,3}\]/, `

上面的 3 4 5步骤类似

created中 调用 歌曲url接口，歌曲封面接口，及 歌词接口即可

> 1. 创建组件，定路由规则，注册事件切换路由。
> 2. 组件内部created方法里面请求数据，渲染数据



## player - 歌曲评论

### 01 - 歌曲评论路由设置

1. main.js 路由规则
   1. 05.comment.vue
   2. path:/comment/:id
   3. component:comment

### 02-点击携带歌曲id去评论组件

1. 在 04.player.vue组件中
2. 为歌名 绑定点击或者双击事件(dblclick)
3. 编程式导航`this.$router.push('/comment/${id}')`

#### 注意点

1. 根据需求找到设置的文件即可

### 03 - 获取评论信息

1. created获取评论信息 /comment/hot?id=186016&type=0 
2. then方法中
3. data中加数据
4. 页面中写vue指令 渲染

### 04 - 格式化评论时间

1. 下载moment.js  

   1. npm i moment

2. 05.comment.vue中添加一个过滤器

   1. filters:{  formatTime(time){ 处理并返回 } }

3. {{ 数据 |过滤器}}

4. 时间的处理，第一时间想到moment这个库

   

> 1. 创建组件，定路由规则，注册事件切换路由。
> 2. 组件内部created方法里面请求数据，渲染数据
> 3. 格式化评论时间结合moment.js, install,定义过滤器



## player - mv播放

### 01 - mv路由设置 

1. main.js
   1. 新建06.mv.vue
   2. path:"/mv/:mvid"
   3. component:mv

### 02-点击携带mvid去mv组件

1. 04.results.vue中 为mv的图标绑定点击事件 传入id
   1. this.$router.push('/mv/${id}')

### 03 - 获取mv信息 

1. created中调用接口 获取数据  /mv/detail?mvid=5436712 

### 04 - 播放最高清的mv

1. then中获取清晰度最高的mv进行播放

#### 注意点

1. 对象的属性获取可以用点语法也可以中括号的语法

   

> 1. 创建组件，定路由规则，注册事件切换路由。
> 2. 组件内部created方法里面请求数据，渲染数据



## 总结















