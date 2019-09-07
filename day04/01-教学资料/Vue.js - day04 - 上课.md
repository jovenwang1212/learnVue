# Vue学习第4天

## 反馈



## 回顾



## Demo-播放器

### 实现步骤

1. mv播放

   1. 歌曲有mv的话，就展示mv链接，点击mv链接在新窗口打开mv播放
      1. 歌曲的mvid不为0，就展示mv链接
      2. 点击链接 @click:playMV
      3. 获取mvurl
         1. axios.get
         2. 接口 <https://autumnfish.cn/mv/url?id=5566297>
      4. 新窗口打开mvUrl window.open()

2. 播放状态

   1. 点击播放，杆放下，碟片和封面旋转; 点击暂停，杆上去，碟片和封面停止旋转
      1. 杆放下，碟片和封面旋转，就是img上添加playing类名
      2. 杆上去，碟片和封面停止旋转,就是img上移走playing类名
      3. img标签动态添加和移除playing类名 v-bind:class="{playing:isPlaying}"
      4. isPlaying是audio
         1. onplay时 isPlaying=true
         2. onpause时 isPlaying=false

3. 搜索列表动画

   1. transition-group包裹vfor所在的标签
      1. name="类名的首个单词"
      2. tag="ul" 最终transition-group会解析成ul
   2. vfor所在的标签必须有key
   3. 样式copy官方的，改改
   4. 依次延迟的动画效果 transition-delay要结合:style
   5. 清空数组，让动画再次生效
   6. 不需要元素离开的动画

   

### 注意点

1. 点击播放和暂停决定了播放状态，所以audio可以通知我们播放状态。

2. Vue动画钩子函数leave是元素离开动画中，默认会接受一下done方法，如果在leave里面直接done()，那么元素就没有离开的动画，



## iScroll

[传送门](https://github.com/cubiq/iscroll)

[中文文档传送门](http://caibaojian.com/iscroll-5/)

iScroll是一个比较好用的滚动插件

使用方法

1. 导包 引入iscroll.js

2. 三层嵌套结构，最外层的高度必须比内容高度小

3. 实例化IScroll

   ```js
   //构造函数里面传的是选择器
   var myScroll = new IScroll('#wrapper');
   
   //构造函数里面传的是dom
   var wrapper = document.getElementById('wrapper');
   var myScroll = new IScroll(wrapper);
   ```



#### 注意点

​	iScroll必须知道内容的高度才能滚动。所以如果内容增加了，得用refresh通知不iScroll重新计算内容高度

```js
myScroll.refresh()
```



## iScroll结合Vue使用

1. iScroll实例时，保证内容已经渲染好了。
2. 内容有改变时，调用refresh



## ref与$refs属性

[ref属性传送门](https://cn.vuejs.org/v2/api/#ref)

[$refs属性传送门](https://cn.vuejs.org/v2/api/#vm-refs)

ref与$refs是Vue推荐的获取Dom的方式

1. ref标记dom  ref="dom别名"
2. $refs包含所有ref标记的dom `vm.$refs.dom别名`可以取到ref所在的dom
3. 如果两个标签的ref值是一样的，那么后者会覆盖前者



## Vue生命周期钩子 - mounted

mounted钩子函数，**初始化阶段最早在这里获取到dom**

mounted只会执行一次。

应用场景：一般在Vue和第三方插件结合时，第三方插件的初始化需要dom，初始化就放在mounted里面。



## iScroll结合Vue优化

1. 在mounted里面实例化IScroll，最早能在mounted获取到dom
2. ref与$refs操作dom
3. 数组新增后，在nextTick里面iscroll refresh
4. 页面渲染无关的属性，最好添加为Vue实例的属性，不要放在data



## Demo-播放器结合iscroll

1.  引入iscroll
2. 三层嵌套结构
3. 实例化IScroll
   1. ref与$refs获取dom
   2. 在mounted里面实例化
4. 数据长度有变化时，需要refresh
   1. nextTick里面去refresh



## Vue组件基本使用

[传送门](https://cn.vuejs.org/v2/guide/components.html)

组件就是一个独立的功能模块，包括html，js,css。 

一次注册，到处使用。

组件的使用

1. 注册组件 `Vue.component(组件名,{template})`

   1. template是组件的dom结构

      1. dom结构必须有根元素包裹

      2. template:'html字符串' 不推荐

      3. template:'#模板id' 推荐的方式

         1. <script type="text/x-template" id="模板id">

2. 组件名在Vue的dom中当标签使用。可以使用N次。

   

### 组件方法和数据绑定

1. 方法和数据绑定同Vue实例化一样
2. 不同的地方
   1. template是组件的dom结构
   2. data必须是一个函数，声明的属性要作为函数的返回值



## 组件的data必须是一个函数

[传送门](https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0)

因此每个实例可以维护一份被返回对象的独立的拷贝

函数返回对象相当于重新创建一个对象

> 1. 很简单，不写成函数就会报错的！
> 2. 看文档，解释。如果data不是一个函数的话，组件的数据是共享的，我们需要这个效果吗？大多数时候，我们使用组件数据是要独立的。
> 3. 由于组件不写成函数，上面这个效果只能意淫了。
> 4.  我们只需要理解为什么函数返回对象这种方式，可以做到数据不共享？

```js
let data1 = {
  a: 1,
  b: 2
}

let com1 = data1
let com2 = data1
console.log(com1 === com2)

function data2() {
  return {
    a: 1,
    b: 2
  }
}

let com3 = data2()
let com4 = data2()
// 函数返回对象相当于重新创建了一个对象 com3并不是同一对象了
console.log(com3 === com4) //false
com3.a = 666
// 改变com3,并不会影响com4
console.log(com3, com4)
```



















