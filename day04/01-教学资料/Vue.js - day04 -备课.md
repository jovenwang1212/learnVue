# Vue学习第4天

## 反馈



## 回顾



## Demo-播放器

### 实现步骤

##### 1. 有mv的歌曲就展示mv超链接，点mv超链接在新窗口打开mv

1. 在搜索结果里，判断每一首歌mvid是否为0，不为0的话，展示mv超链接

2. 点击mv链接 @click:playMV

3. 获取mv的地址
   1. axios.get
   2. 接口 https://autumnfish.cn/mv/url?id=5436712

4. 在新窗口中打开mvUrl window.open(mvUrl)

5. ##### 点击播放，杆放下，碟片和封面旋转; 点击暂停，杆抬起，碟片和封面停止旋转

   1. 杆放下，碟片和封面旋转，所在的元素上添加playing类名
   2. 杆抬起，碟片和封面停止旋转，所在的元素上移除playing类名
   3. 设置一个是否在播放的状态的变量isPlaying，能过v-bind来控制playing类名 v-bind:class="{playing:isPlaying}"
   4. audio 暂停时 onpause事件 isPlaying=false
   5. audio播放时 onplay事件　isPlaying=true

   

6. ##### 列表动画

   1. 包裹列表，Vue才会添加动画  transition-group name="类名的首单词" tag="ul"
   2. li v-for 需要给key
   3. 在Vue添加的类名里，自定义样式。用官方例子的样式，copy粘贴然后修改
   4. 让列表元素依次显示，设置transition-delay
   5. 为了让每次搜索结果都有动画，需要清空搜索结果数组
   6. 不需要元素离开的动画 



### 注意点

1. 图片的显示可能会因为网络的问题显示不出来，最好用默认图片占位
2. a link是有默认事件的，所以点击事件应该加上@click.prevent阻止默认事件
3. audio里面的pause事件和play事件，可以通知我们当前是播放状态还是暂停状态。
4. 动画钩子函数leave,是元素消息失的动画过程中的钩子函数，leave回调里面，直接调用done()，就让动画结束



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

4. 实例化IScroll

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
    let dom = document.getElementById('wrapper')
    myScroll = new IScroll(dom);
  </script>
</body>

</html>
```

> 1. 接下一我们再来看iscroll结合Vue怎么使用
> 2. 实例化iScroll，不生效。为什么呢。断点可以看到实例化时，滚动内容还没有解析。
> 3. 我们iScroll需要知道滚动内容的确切高度，所以得让滚动内容解析完后，再实例化iScroll。解决方案把iScroll实例化放在后边。
> 4. 新增内容，无法滚动。需要refresh。



## ref与$refs属性

[ref属性传送门](https://cn.vuejs.org/v2/api/#ref)

[$refs属性传送门](https://cn.vuejs.org/v2/api/#vm-refs)

Vue官方推荐获取dom的方式

使用

1. 标记dom ref="dom别名" 
2. 获取到dom vm.$refs.dom别名

如果两个标签的ref值是一样的，后者会覆盖前面的。



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <h2 ref='txt'>这是一个寂寞的天</h2>
      <ul ref="list">
        <li>啦啦啦</li>
        <li>biu biu</li>
      </ul>
      <h2 ref="txt">下着有些伤心的雨</h2>
      <button @click="print">打印</button>
    </div>
    <script src="./lib/vue.js"></script>
    <script>
      const app = new Vue({
        el: "#app",
        data: {},
        methods: {
          print(){
            // 相同ref的两个元素，后面会覆盖前面的
            console.log(this.$refs.txt)
            console.log(this.$refs.list)
          }
        },
      });
      </script>
  </body>
</html>
```

> 1. 在前面这个例子里面，IScroll实例化传了一个dom，用的getElementById这种方式。我们说在Vue的世界里，我们基本不用操作Dom, 但是在这种Vue与第三方插件结合的时候，是需要操作DOM的场景之一。即便是需要操作DOM，Vue也不推荐用js api，Vue提供了一种更便捷高效的方式让我们操作DOM
> 2. 举例ref和$refs的使用
> 3. 打印this.$refs
> 4. 获取DOM
> 5. 同时也演示一下两个ref值相同时，覆盖的效果。

## Vue生命周期钩子 - mounted

最早能在这里获取到DOM

只会执行一次。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
</head>

<body>
  <div id="app">
    <h2 ref="txt">{{message}}</h2>
  </div>
  <script src="./lib/vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        message: '这是一个寂寞的天'
      },
      beforeCreate() {
        console.log(this.$refs.txt)
      },
      created() {
        console.log(this.$refs.txt)
      },
      beforeMount() {
        console.log(this.$refs.txt)
      },
      mounted() {
        // 最早能在这里获取到dom
        console.log(this.$refs.txt)
      }
    });
  </script>
</body>

</html>
```



> 1. 为了保证iScroll实例时滚动内容已经渲染完成，我们把iscroll的实例化放在底部，如果内容足够多，其实并不能保证的。滚动内容的的渲染是由Vue来做的。而Vue从创建到销毁过程中经历8个重要的节点，在节点时会以回调函数的形式通知我们。那么大家觉得滚动内容渲染完，Vue会不会通知我们呢
> 2. 我们看Vue生命周期图示,从上到下正好是Vue实例从创建到销毁的过程, 我们先看前面四个，依次是beforeCreate,created,beforeMount,mounted，翻译成中文的意思是创建前，创建后，挂载前，挂载后，前面两个好理解，挂载是什么鬼呢？可以理解为DOM解析前和DOM解析后。
> 3. 举例，依次打印this.$refs.txt 最早能在mounted钩子函数里面获取到dom
> 4. 断点
> 5. 这里胡子语法解析完成就会触发mounted，那么大家觉得mounted会触发几次？一次，只会触发一次。



## iScroll结合Vue优化

1. iScroll的实例化放在mounted钩子函数里面，保证dom解析完全
2. ref和$refs获取DOM
3. 增加数据后，在nextTick里面iscroll refresh
4. 无须在DOM里面使用变量，最好直接添加为Vue实例的属性

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
    <div id="wrapper" ref="wrapper">
      <ul>
        <li v-for="item in arr">{{item}}</li>
      </ul>
    </div>
  </div>
  <script src="./lib/vue.js"></script>
  <script src="./lib/iscroll.js"></script>
  <script>
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
        ],
        // myScroll: null
      },
      methods: {
        add() {
          this.arr.push('台风前的宁静')
          this.$nextTick(() => {
            this.myScroll.refresh()
          })
        }
      },
      mounted() {
        this.myScroll = new IScroll(this.$refs.wrapper);
      },
    });
  </script>
</body>

</html>

const app = {
  message: '这是一个寂寞的天'
}

app.username = 'joven'
console.log(app.message, app.username)
```



> 1. 回到我们iscroll结合Vue这个例子里面，vfor这块解析完成后，滚动内容的高度才是确定的，对吗？什么时候vfor这块解析完成，Vue告诉我们的了吗？mounted，那么我们就需要在mounted里面初始化iScroll
> 2. vue推荐的操作DOM的方式, ref属性标记dom，给一个别名wrapper，然后获取DOM，就this.$refs.wrapper
> 3. add一条数据，DOM能立马更新吗？不能的话，那么refresh应该放在哪里呢。nextTick里面
> 4. 然后myScroll这个变量声明在全局，有什么优化方案吗？声明在data里面，然后方法里面使用就this.。可以。
> 5. 还有其他方式吗？不声明，直接用可以吗？为什么呢？对象添加一个属性再使用，举例复习。
> 6. 这种无须在DOM结构里面使用的变量，最好不要定义在data里面，直接添加Vue实例的属性。因为data里面的数据，Vue会认为数据需要在页面上渲染，于是会监测它的变化，需要耗性能。



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























