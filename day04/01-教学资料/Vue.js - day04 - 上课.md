# Vue学习第4天

## 反馈



## 回顾



## Demo-播放器

### 实现步骤

##### 1. 有mv的歌曲就展示mv超链接，点mv超链接在新窗口打开mv

1. 在搜索结果里，判断每一首歌mvid是否为0，不为0的话，展示mv超链接
2. 获取mv的地址
   1. axios.get
   2. 接口 https://autumnfish.cn/mv/url?id=5436712
3. 在新窗口中打开mvUrl
   1. window.open(mvUrl)

4. ##### 点击播放，杆放下，碟片和封面旋转; 点击暂停，杆抬起，碟片和封面停止旋转

   1. 杆放下，碟片和封面旋转，所在的元素上添加playing类名
   2. 杆抬起，碟片和封面停止旋转，所在的元素上移除playing类名
   3. 设置一个是否在播放的状态的变量isPlaying，能过v-bind来控制playing类名 v-bind:class="{playing:isPlaying}"
   4. audio 暂停时 onpause事件 isPlaying=false
   5. audio播放时 onplay事件　isPlaying=true

   

3. ##### 列表动画

   1. 包裹列表，Vue才会添加动画  transition-group name="类名的首单词" tag="ul"
   2. li v-for 需要给key
   3. 在Vue添加的类名里，自定义样式。用官方例子的样式，copy粘贴然后修改
   4. 让列表元素依次显示，设置transition-delay
   5. 为了让每次搜索结果都有动画，需要清空搜索结果数组
6. 清除元素消失的动画
   1. 动画钩子函数leave,是元素消息失的动画过程中的钩子函数
   2. leave回调里面，直接调用done()，就让动画结束



### 注意点

1. 图片的显示可能会因为网络的问题显示不出来，最好用默认图片占位
2. a link是有默认事件的，所以点击事件应该加上@click.prevent阻止默认事件
3. audio里面的pause事件和play事件，可以通知我们当前是播放状态还是暂停状态。



## iScroll

[传送门](https://github.com/cubiq/iscroll)

[中文文档传送门](http://caibaojian.com/iscroll-5/)

比较好用的滚动插件

使用方法

1. 三层嵌套的结构,最外层的标签的高度应该要比里面内容要小

   ```html
   <div id="wrapper">
         <ul>
           <li>是兄弟，就是一起来玩贪玩蓝月</li>
   `````
   
2. 导包，引入iscroll.js

4. new IScroll('选择器')

   ```js
   //构造函数传选择器
   var myScroll = new IScroll('#wrapper');
   
   //构造函数传dom
   var wrapper = document.getElementById('wrapper');
   var myScroll = new IScroll(wrapper);
   ```

   

#### 注意点

refresh方法告诉iscroll内容的高度发生了变化。

否则新添加的元素，无法滚动。

```js
 myScroll.refresh();
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>iscroll的基本使用</title>
    <style>
      #wrapper {
        width: 400px;
        height: 200px;
        border: 1px solid green;
        /* overflow: hidden; */
      }
    </style>
  </head>
  <body>
    <button onclick="add()">添加</button>
    <div id="wrapper">
      <ul>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
        <li>是兄弟，就是一起来玩贪玩蓝月</li>
      </ul>
    </div>

    <script src="./lib/iscroll.js"></script>
    <script>
      // 添加li
      function add() {
        let liDom = document.createElement('li')
        liDom.textContent = '是兄弟，就是一起来玩贪玩蓝月'
        document.querySelector('#wrapper ul').appendChild(liDom)
        myScroll.refresh();
      }
      var myScroll = new IScroll('#wrapper')
    </script>
  </body>
</html>

```

> 1. 我们悦听播放器搜歌结果列表目前还不能滚动，评论列表也不能滚动。这里我们学习一个比较流行滚动插件, iScroll
> 2. 看文档，了解基本的用法。
> 3. 举例重现我的无法滚动的场景，然后加入iscroll.js，并不生效，引出iscroll的具体用法。
> 4. 增加内容，无法滚动。因为iscroll需要知道内容的确切高度，如果内容发生变化了，需要告诉iscroll。refresh方法。



## iScroll结合Vue使用

实例化iScroll时，需要保证滚动内容已经渲染完成

滚动内容高度有变化时，需要调用refresh通知iscroll

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <style>
    #wrapper {
      width: 400px;
      height: 200px;
      border: 1px solid green;
    }
  </style>
</head>

<body>
  <div id="app">
    <button @click="add">添加</button>
    <div id="wrapper">
      <ul>
        <li v-for="item in arr">{{item}}</li>
      </ul>
    </div>
  </div>
  <script src="./lib/vue.js"></script>
  <script src="./lib/iscroll.js"></script>
  <script>
    var myScroll = null
    const app = new Vue({
      el: "#app",
      data: {
        arr: [
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静',
          '台风前的宁静'
        ]
      },
      methods: {
        add() {
          this.arr.push('台风前的宁静')
          myScroll.refresh()
        }
      },
    });
    myScroll = new IScroll('#wrapper');
  </script>
</body>

</html>
```

> 1. 接下一我们再来看iscroll结合Vue怎么使用
> 2. 实例化iScroll，不生效。为什么呢。断点可以看到实例化时，滚动内容还没有解析。
> 3. 我们iScroll需要知道滚动内容的确切高度，所以得让滚动内容解析完后，再实例化iScroll。解决方案把iScroll实例化放在后边。
> 4. 新增内容，无法滚动。需要refresh。



## Vue生命周期钩子 - mounted

mounted是Vue初始化完成，页面的胡子语法被解析完成。

应用场景：想尽早执行，并且获取dom的话，就在这个钩子里面执行。

只会执行一次。

> 1. 为了保证iScroll实例时滚动内容已经渲染完成，我们把iscroll的实例化放在底部，如果内容足够多，其实并不能保证的。滚动内容的的渲染是由Vue来做的。而Vue从创建到销毁过程中经历8个重要的节点，在节点时会以回调函数的形式通知我们。那么大家觉得滚动内容渲染完，Vue会不会通知我们呢
> 2. 



## $refs属性

[ref属性传送门](https://cn.vuejs.org/v2/api/#ref)

[$refs属性传送门](https://cn.vuejs.org/v2/api/#vm-refs)

ref 是Vue给html标签新增的属性

vm.$refs是一个对象，包含所有ref所在的dom元素

```html
<div ref="wrapper">
  
</div>
<script>
	vm.$refs.wrapper
</script>
```

Vue推荐获取dom的方式



## Demo-播放器结合iscroll

1. 引入iscroll
2. 三层嵌套结构
3. 高度也满足
4. new IScroll
5. 重新计算内容的高度refresh



## Vue组件基本使用

[传送门](https://cn.vuejs.org/v2/guide/components.html)

组件是包括html、js、css，是一个独立的功能模块。一次抽取，到处使用。

组件的注册

1. `Vue.component("组件名",{template})`

2. 在页面中直接把组件名当标签名使用即可

3. template属性是组件Dom结构

   1. template:'html 字符串' 不推荐
   2. template:'id选择器' 

   ```html
   <script type="text/x-template" id="tpl">
   </script>
   <script>
   	template:'#tpl'
   </script>
   ```

### 方法和数据绑定



1. 组件里面的方法和数据绑定和实例化Vue是一样
2. 组件里面template属性是组件的dom结构
3. 组件里面data，必须是一个function























