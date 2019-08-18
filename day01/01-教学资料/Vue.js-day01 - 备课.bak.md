# Vue学习第一天



## 课程安排

1. 总共的课程27天

2. 三个阶段  Vue基础 、PC端项目和移动端项目

3. 基础课程7天

   

> 首先呢，我们来看一下课程安排。从这一期开始Vue的课程天数增加了不少，从原来的17天增加到现在的27天。为什么呢？因为据前几期的学生就业情况的反馈来看，大部分学生出工作就是写Vue.js的。所以呢，需要增加Vue课程天数，其实主要是增加两个企业级的实战项目，到时候大家把这两个项目吃透，找到工作应该是妥妥的。
>
> 而27天的课程又分为三个阶段，从Vue基础到pc端的项目和移动端的项目。后面这两个项目都是企业级的实战项目。更详细的介绍留给一下一阶段的老师说吧。
>
> Vue基础的课程呢？总共7天课程。会讲到Vue的语法，指令，还有一些小型的项目来把前面的知识点给串起来。



## Vue.js介绍 

1. [官方文档](https://cn.vuejs.org/)

2. Vue是一个js框架，对比jquery, **不需要操作DOM，精力集中在数据上**。

3. 大家就业后更有可能就是写Vue.js

   

>首先来了解一下我们要学的这个vue.js到底是个啥东东呢？好，来它的官网看看，是怎么介绍它自己的。
>
>这里我已经贴了一个官方文档地址。今天呢，还是是带着大家找一下官方文档。打开浏览器，大家用的都是百度搜索引擎对吧，好，我输入`vue` 回车，看到这个搜索结果。哪一个是vue的官网呢？对的，这个网址是cn打头的，就是。cn就是代表中文。好，点过去，这个就是Vue的中文官方网站。
>
>建议大家像我这样把Vue官方网站收藏。因为接下来的学习和以后的工作大家会经常需要参考官方文档。另外提一下，Vue.js的作者是一个中国人，这份官方文档中文版，整个文档翻译质量比较高，还有文档本身很详细，你值得拥有！
>
>好，页面中央这个图片，就是Vue的logo，大V. 旁边两行字，是对Vue.js的介绍. '渐进式JavaScript框架'，我们先忽略掉渐进式，那就是说Vue.js是一个JavaScript框架喽，js框架，想一下，我们学过哪些js框架呢？jQuery, zepto、swiper.js等等，对吗？回顾一下，我们怎么使用jquery.js，导入jquery.js，然后页面上我们就有一个好用的$符号可以使用了对吧? 一个典型的场景：查找按钮，给按钮注册事件，事件处理里面, 发送ajax请求，然后ajax的success里面拿到数据，查到相关的元素，更改元素的数据。是吗？Vue.js也是一样的，引入vue.js后，vue.js也会给我们一些很好用的功能。更重要的是，相比较于jquery, 有了vue.js, 我们基本上不用操作DOM，让我们精力集中在数据上。注意我说的，基本上不用操作DOM，是基本上。关于这一点，随着我们Vue的学习，会理解得更加深入。
>
>接着我们来看一下，Vue在行业内的地位。这里是vue.js在github上的仓库，我们点进去看一下。其中这里有一个star数，点赞数嘛，是多少呢？14万，14万多吗？哈哈，有些同学说不多，那好，我们看一下github所有代码仓库的排名。去到github首页，输入命令`stars:>1`, 搜索结果会按照仓库star数从多到少排名。我们可以看到vue.js排名是第三的。前面两个分别是代码训练营，和996，但是这两个都不是技术类框架，排除这两个过后，可以看到vue.js排名是第一的。第二名是bootstrap，做响应式布局，这个大家学过的。第三名是react.js, 这个也是我们后面要学习的框架，原理上和vue.js大同小异，在国外比较流行，在国内vue.js更流行。就学生就业情况来看，大部分学生在国内上班，用vue.js的更多一些。所以大家毕业后，很有可能就是写Vue.js的。



## Vue.js的HelloWorld

[传送门](https://cn.vuejs.org/v2/guide/#%E8%B5%B7%E6%AD%A5)

1. Vue.js的学习会参考Vue官方文档，以项目驱动学习。
2. vue读音,两种都要了解
   1. /vju:/
   2. /uju:/
3. 渐进式: vue能做小的项目也能做大的项目

> 那么vue.js怎么用呢？在文档的这里有一个起步，这个就是入门教程。接下来呢，我们就参考这份文档，把vue.js运行起来。
>
> 我们点开它。左侧这里是教程的菜单，从安装，介绍到动画组件，这些知识点是层层递进的。
>
> 我说一下我是怎么学习vue.js。分期乐会员的前端架构是我搭的，基于Vue，但是在此之前我都没接触过Vue，我是在入职前参考这份文档，从前到尾看一了一遍，重点的代码敲了，然后实际工作中遇到问题，再回头看看这份文档。妥妥的。
>
> 会不会有同学在想，我咬咬牙把文档全看完，vue.js是不是就学会了？并不会，知识点如果脱了应用场景，没有重点地学习，意义不大。毕竟这份文档里面八百年不用的知识点也是一抓一大把的。所以呢，那么接下来Vue的学习，会以文档的知识点为主线，并不会覆盖文档各个方面，重要的地方或实际工作中用得多的会重点练习。以项目驱动，在实际的应用场景里面会重点补一下知识点和复习已经学过知识点。
>
> 好，我们先读一下，文档的介绍部分。Vue.js是什么，Vue (读音 /vjuː/，类似于 **view**)。然后有些同学看到这个读音依然不知道怎么读，然并卵。这里copy view到字典里面，看一下，音标是不是一样的，一样的对吧。好，那听一下，怎么读的。vju:对吧。然而在国内，蛮多人读uju:。至于为什么会这样读呢，大概是把英文文标里面的v读成了拼音里面的v啦，比如very much读成uery much。所以呢，这两种读音大家都了解一起，万一以后出去面试或者工作，对方读uju:，你要知道这是什么学过框架Vue。
>
> 这里读音的问题，然后再往后看，是一套用于构建用户界面的**渐进式框架**，构造用户界面，前端就是用来做用户界面的。渐进式框架，这里解释一下渐进式，就是渐渐的意思。是说Vue.js可以做一些小的项目，也可以做大的项目。在我们学习Vue的基础的时候，会用Vue.js做小的案例，后面两个阶段会用vue.js做大的项目。所以渐进式的意思，就是vue.js可以做小的项目，也可以做大的项目。
>
> 再向下看，起步里面，官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识... 这里的意思是学习Vue.js的知识储备。HTML,CSSS,javascript基础，大家满足了吗？当然，我们现在已经学到h5, CSS3, JAVASCRIPT学到了es5,es6,es7了吧。
>
> 然后看到安装，前面这个需要VPN才能打开，放弃。看到后边，或者通过如下方式引入vue.js.这块我们熟悉吧。导入包呗。来，打开我们今天的代码，新建一个空白页面，然后把引入vue.js放进去，放到哪里呢？body标签结束之前对吧。或者生产版本引入这段js，有什么不同呢，我们也copy过来，方便作个对比。上边这个是相当于是jquery.js，下边这个jquery.min.js, 从体积上来看，生产版本体积小，更适合发到线上。开发版本更适合开发使用，代码出错时会提供更多的错误信息提示。当前我们在开发，那么使用哪个版本呢？对，开发版本。
>
> 再向下看文档，声明式渲染。Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统。有说到模板语法，这个先留个印象。这里有一段html和js，我们把它们copy到代码里边，html放哪里呢？js放哪里呢？引入在前，使用在后。对吧。
>
> 好，我们来再一下代码，有一个id属性为app的div包裹着字符串，这个字符串有些特别，双大括号，对吧。是不是有些熟悉呢？我和我们学过的js模板引擎很像对吧。先留有印象。然后就是引入vue.js。再往下，new Vue里面传了一下对象，对象有两个属性，一个是el，一个是data.  大家可以猜想一下，运行结果是什么？好，我们运行起来看看， Hello Vue.js 。下一节我们再来解释为什么页面上会显示Hello vue.js



### Vue基本使用解析

1. 引入vue.js

2. dom结构，这个Vue管理的容器

3. 实例化Vue
   1. el:'id选择器' 关联Vue管理的容器
   2. data是一个对象，里面的属性 ，在Vue管理的容器中用{{}}渲染

>1. 解释一下代码是什么意思
>2. dom结构，vue.js引入的作用。Vue构造函数是vue.js引入的
>3. el:'#app'猜想选择器关联到dom结构，改一下id验证猜想。el的作用。
>4. id选择器、class、tag选择器，推荐用id选择器
>5. 画图结合模板语法的猜想data数据通过{{}}渲染，修改数据，验证猜想
>6. 总结

```html
<div id="container" class="app">
  {{ message }}
  {{ info }}
  <!--<h2>{{const PI=3.141592653}}</h2>-->
</div>

<!-- 开发环境版本，包含了有帮助的命令行警告 jquery.js 提供错误信息提示-->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>
  new Vue({
    // el: "#container",
    //  el:'.app',
    el: 'div',
    data: {
      message: 'Hello World!',
      info: '今天天气如何'
    }
  })
</script>
```

> 这里new Vue，咦这个Vue从哪来的呢，以前我们没有看到过这个变量吧。画图，可以到我们引入的vue.js和Vue这两个单词是很像的吧。我们猜想是vue.js引入Vue这个构造函数，那么为了印证我们的猜想，注释掉vue.js的引入。保存刷新，页面情况不妙，打开控制台，看到Vue没有被声明。所以呢，Vue是由vue.js引入的。
>
> 构造函数里面传了一个对象，对象属性el的值为一个字符串#app,#app，这里是什么意思，写法很像我们学过的C3 id选择器对吧。如果是id选择器的话，这里应该是找一个id属性为app的dom，画图，向 上看，这里。是这样吗？那我改一下dom里面的属性，改为id=container, 保存运行。报错了吧。所以这里#app是要和上边dom关联的，我们改成#container,保存刷新，可以了吧。
>
> 

### js表达式

[传送门](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BD%BF%E7%94%A8-JavaScript-%E8%A1%A8%E8%BE%BE%E5%BC%8F)

js表达式：js语句，返回一个值



>1. 回顾使用Vue使用三个步骤
>2. 渲染message
>3. {{num+1}} {{isRed?'red':''}} {{const PI=3.141592653}}  运算和三元运算是可以的，但是const不行
>4. 给出定义 **js表达式：js语句，返回一个值**
>5. 那么{{1+1}} 可以吗？ {{if}}能吗？
>6. {{}} 胡子语法（画图），插值语法。文档里面胡子语法和插值语法混着用，看文档的时候要理解
>
>

```html
<div id="app">
  <h2>{{msg}}</h2>
  <h2>{{ num + 100 }}</h2>
  <h2>{{ isRed ? 'red' : '' }}</h2>
  <!-- <h2>{{const PI = 3.141592653}}</h2> -->
  <h2>{{1+1}}</h2>
</div>
<script src="./lib/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      msg:'还是吃得太饱',
      num: 100,
      isRed: true
    }
  })
</script>
```



## Vue指令

[传送门](https://cn.vuejs.org/v2/guide/syntax.html#%E6%8C%87%E4%BB%A4)

指令 (Directives) 是带有 `v-` 前缀的特殊特性。

**vue提供给HTML标签新增的属性**。

用法和HTML属性一样。 `v-text="值"`

```html
<img src="./img/boy.png" title="鼠标悬停文案" v-text="值">
```

>1. 文档对指令的定义
>2. 翻译成我的理解 vue提供给HTML标签的新增属性
>3. HTML img的属性引出指令的语法 v-text="js表达式"
>5. 那么接下来，花一天多的时候介绍一系列指令



## v-text指令（textContent）

[传送门](https://cn.vuejs.org/v2/api/#v-text)

1. v-text把值作为**文本插入**到所在的标签之间

2. Vue内部是textContent实现的

3. 会覆盖掉标签之间的文本

4. 简写{{}}，简写用得更多

5. 不能解析html

   ```html
   <!-- dom结构 -->
   <div id="container">
     <h2>{{message}}</h2>
     <h2 v-text="message"></h2>
     <h2 v-text="message">标签之间的文本</h2>
     <h2>之前的文本{{message}}之后的文本</h2>
     {{alink}}
   </div>
   <!-- vue引入 -->
   <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
   <!-- 实例化vue -->
   <script>
     /*
         v-text:把值作为文本插入到它所在的标签之间 textContext，会覆盖掉标签之间的文案
         简写就是{{}}，推荐使用{{}}
         v-text不能解析html
       */
     new Vue({
       el:'#container',
       data:{
         message:'李晨又又分手了',
         alink:'<a href="http://www.baidu.com">百度</a>'
       }
     })
   </script>
   ```


>1. 复习Vue使用的三个步骤，{{}}渲染数据
>2. v-text=""的值同样为js表达式，试试message.结果一样，为什么呢。{{}}是v-text简写，工作中我全用{{}}
>3. v-text的作用，底层实现textContent
>4. 对于所有指令，都推荐简写。如果原始写法更简单，为什么要弄个一个简写呢。
>5. {{}}简写有v-text没有的特性, 不会覆盖
>6. 不能解析html
>
>

## v-html指令(innerHTML)

[传送门](https://cn.vuejs.org/v2/api/#v-html)

1. v-html是把值作为html插入到所在的标签之间，内部实现是innerHTML。会覆盖标签之间的html

2. 没有简写

   ```html
   <div id="app">
     <h2>{{alink}}</h2>
     <h2 v-html="alink"></h2>
   </div>
   <script src="./lib/vue.js"></script>
   <script>
     /*
         v-html把值作为html插入到它所在的标签之间。底层实现 innerHTML
         没有简写
         */
     new Vue({
       el: "#app",
       data: {
         alink:'<a href="http://www.baidu.com">百度</a>'
       }
     });
   </script>
   ```

>1. 换一个能解析html的指令
>2. vue-tpl生成vue模板。不需要再回顾使用Vue的三个步骤，建议同学们多敲。自定义代码片段明天再给。
>3. vue.js的引入放在本地。浏览器运行的时候，读取的是本地文件，vue.js在本地，加载速度快。
>4. {{html str}}不能解析，换v-html  引出v-html定义，底层实现
>5. 会覆盖标签之间的文本
>6. 没有简写，用得不是很频繁



## v-on指令

[基本使用](https://cn.vuejs.org/v2/guide/events.html)

1. v-on:事件名="事件处理方法"
2. 事件处理方法声明在methods对象里边，methods和el、data并列
3. 简写@事件名="事件处理方法" 当然推荐用简写
4. 事件名和原生的事件名一致，可以是dblclick,click,mouseover,keyup,keyenter.... 
5. 事件处理方法的默认参数是event对象
6. 方法传参和原来HTML注册事件方法没什么分别

>1. 来个让页面有交互的指令，v-on指令，看一下官方文档
>2. 注册事件，回顾原来HTML注册事件的方法
>3. 引出v-on注册指令。方法声明在methods里面。方法声明methods对象里面。
>4. 简写
>5. 事件名和原生的事件名一致，演示dblclick

```html
<div id="app">
  <input type="button" value="点我呀" v-on:click="sayHello" />
  <input type="button" value="简写" @click="sayHello" />
  <input type="button" value="双击" @dblclick="sayHello" />
</div>
<script src="./lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {},
    methods: {
      sayHello() {
        alert('hello')
      }
    }
  })
</script>
```



## 事件参数

1. 默认事件参数是event对象
2. 方法传参和原来HTML注册事件方法没什么分别

> 1. 回顾事件注册
> 2. 方法里面可以接受一个事件对象，Vue帮我们传过来.有些情况下会用到的。
> 3. 传参和原来HTML注册事件没什么分别
> 4. 事件处理方法的调用给括号的情况下，无法接受到Vue传过来的event对象
> 5. methods是一个对象，里面方法声明有三种，推荐ES6的方法。

```html
<div id="app">
  <input type="button" value="点我呀" @click="sayHello" />
  <input type="button" value="逼格" @click="bigger(99)" />
  <input type="button" value="带括号调用" @click="sayHello()">
</div>
<script src="./lib/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {},
    methods: {
      // sayHello:function(){
      //   alert('hello')
      // },
      // 方法的简洁写法
      sayHello:()=>{
        alert('hello')
      },
      // sayHello(event) {
      //   // alert('hello')
      //   console.log(event)
      // },
      bigger(num){
        alert(99*56)
      }
    }
  })
</script>
```



### 事件修饰符

[传送门](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6)

使用方法： v-on:事件名.修饰符 = "事件处理方法"

>1. 看文档了解到.stop替代 event.stopPropagation()
>2. 举例@keyup.enter替代event.keyCode===13逻辑
>3. 修饰符的语法
>4. 各个修饰符的作用

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
<input v-on:keyup.enter="submit">
```

```html
<div id="app">
  <input type="text" value="李晨又分手了" @keyup.enter="sayHello">
</div>
<script src="./lib/vue.js"></script>
<script>
  new Vue({
    el:'#app',
    data:{

    },
    methods: {
      sayHello(event){
        //enter键被点击了
        // if(event.keyCode===13){
        //   alert('hello')
        // }
        alert('hello')
        // console.log(event)
        // alert('ok')
      }
    },
  })
</script>
```



## vue方法中的this

[传送门](https://cn.vuejs.org/v2/api/#methods)

方法中的 `this` 自动绑定为 Vue 实例。

1. 方法里面的this就是Vue实例
2. 方法里面的this可以访问到data的属性和methods的方法. 用法this.
3. Vue里面属性值改变，对应视图将会"响应"

> 1. vue方法中可以写this，this灵活，功能又强大
> 2. 方法中的this是什么呢？举例打印app及this，二者相等，
> 3. this.data.message没有，打印this. 直接就有message.data和methods里面的属性直接设置到vue实例
> 4. 且this可访问到data及methods的属性，不需要this.data.
> 5. this.msg打印，this.msg赋值，页面动态改变，引出属性值改变，对应视图会响应。
> 6. 方法声明箭头函数里面的this是window, 建议用es6对象里方法的简洁写法

```html
<div id="app">
  <h2>{{msg}}</h2>
  <input type="button" value="点我呀" @click="sayHello">
</div>

<script src="./lib/vue.js"></script>
<script>
  /*
      app是Vue的实例
      Vue的实例可以访问到data的属性，methods的方法
      方法里面的this是Vue实例
      */
  const app = new Vue({
    el: "#app",
    data: {
      msg:'这是一个寂寞的天。。',
      person:{
        name:'Joven',
        sex:'male'
      }
    },
    methods: {
      sayHello(){
        // console.log(this===app)
        this.msg='中分还带波浪。。。'
        // alert('ok')
      },
      print(){
        console.log('print print ...')
      }
    },
  });
  console.log(app)
</script>

```



### 表达式的作用域

[传送门](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BD%BF%E7%94%A8-JavaScript-%E8%A1%A8%E8%BE%BE%E5%BC%8F)

表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析

1. data和methods里面的属性在表达式里面可以直接使用，不要加this

   

> 1. copy上一节课的例子，提到sayHello里面就一句话，能否写在行内。原来HTML注册事件也要以写行内。copy,点行内没有效果。
> 2. 看文档js表达式里面的作用域是Vue实例。data和methods里面的属性在表达式里面可以直接使用，不要加this
> 3. 行内放console.log没效果。能理解吗？需要写在方法里面。

```html
<div id="app">
  <h2>{{msg}}</h2>
  <input type="button" value="点我呀" @click="sayHello">
  <input type="button" value="行内" @click="msg='中分还带波浪。。。'">
  <input type="button" value="打印" @click="print">
</div>

<script src="./lib/vue.js"></script>
<script>
  const app = new Vue({
    el: "#app",
    data: {
      msg:'这是一个寂寞的天。。'
    },
    methods: {
      sayHello(){
        this.msg='中分还带波浪。。。'
      },
      print(){
        console.log('结婚证')
      }
    },
  });
</script>

```



## v-bind指令

[传送门](https://cn.vuejs.org/v2/api/#v-bind)

动态地绑定一个或多个特性

绑定属性，让我们可以动态改变属性的值

v-bind指令动态绑定HTML标签的属性

1. v-bind指令的使用 v-bind:属性名="js表达式"
2. v-bind: src=“imgUrl”， src属性绑定到imgUrl, 改变imgUrl，会动态改变src的值
3. v-bind：可以简写为  :属性名＝"js表达式"　当然推荐简写
4. ｖ-bind:class 动态改变样式
   1. 三元运算切换样式
   2. 对象语法 {类名：是否添加样式}
5. v-bind:style="js对象" 对象的key如果是中划线边连接，建议用字符串或者驼峰 `"background-color"` `backgroundColor`

>1. 看文档v-bind的定义，翻译成自己的理解：绑定属性，让我们可以动态改变属性的值
>
>2. 显示图片的需求，定义变量, {{}}显示URL的改变，猜想 src="{{}}"这种语法，其实行不通, 引入v-bind
>
>3. 查看运行后的html呢。 
>
>4. 解释v-bind:src="imgUrl"的作用，当imgUrl变了，用了v-bind的地方也会重新解析。
>
>   
>
>  5. 第二小节讲v-bind:class 用得更多，先讲解v-bind:class 绑定样式。 查看HTML结构生成的样式。
>
>  6. v-bind:class 三元运算 点击切换样式
>
>  7. v-bind:class 对象的语法 {类名:true}和 {类名:false} 演示一下，然后完成和三元运算同样的效果。
>
>  8. v-bind: class class是追加的
>
>9. 忘记加v-bind:并不会报错，但是样式不生效
>
>   
>
>10. style原始写法，让背景变红色; v-bind:style。传的是一个obj。在js里面写对象的语法。
>
>11. 实现点击切换的红色背景的效果。

```html
<div id="app">
  
  <img v-bind:src="imgUrl" alt="" @click="changeImg" />
  <!-- 简写-->
  <img :src="imgUrl" alt="" />
</div>
<script src="./lib/vue.js"></script>
<script>
  new Vue({
    el: "#app",
    data: {
      imgUrl: "./img/boy.png"
    },
    methods: {
      changeImg() {
        this.imgUrl = "./img/girl.png";
      }
    }
  });
</script>
```

```html
<div id="app">
  <div :class="bgRed"></div>
  <div :class="isRed?'red':''" @click="isRed=!isRed"></div>
  <div :class="{'green':isGreen}" @click="isGreen=!isGreen"></div>
</div>
<script src="./lib/vue.js"></script>
<script>
  /*
      v-bind：简写 :属性名="js表达式"
      */
  new Vue({
    el: "#app",
    data: {
      bgRed:'red',
      isRed:true,
      isGreen:true
    }
  });
</script>
```

```html
<div id="app">
  <div style="background-color: red"></div>
  <div :style="{'background-color':isRed?'red':'#fff','margin':'20px'}" @click="isRed=!isRed"></div>
</div>
<script src="./lib/vue.js"></script>
<script>
  // var obj ={'background-color':isRed?'red':'#fff','margin':'20px'}
  new Vue({
    el: "#app",
    data: {
      isRed:true
    }
  });
</script>
```



## Demo-计数器

![1561883758980](assets/1561883758980.png)

### 实现步骤

1. 数字的显示
2. +-功能实现
3. 数字的范围是0=10，边界问题处理

> 1. 打开页面，查看页面上的行为
> 2. 检查HTML，disabled类名和disabled属性
> 3. 大的思路
> 4. 一边分析怎么实现一边实现功能

### 注意点

1. v-bind:class={'className':true/false} true时候，添加className样式; 否则移除className样式

```js
  /*
  1.数字的显示
    1.声明 data.num
    2.显示 {{num}}
  2.+-功能实现
    1.+ @click:add num++
    2.- @click:sub num--
  3.数字范围是0-10，边界问题的处理
    1.数字为0的时候
      1. 添加disabled属性
      2.-按钮添加'disabled'样式 v-bind:class="{'disabled':num==0}"
    2.数字为10的时候
      1. 添加disabled属性
      2. +按钮添加'disabled' 样式 v-bind:class="{'disabled':num==10}"
  */
```



## Demo-图片切换

![1561884296580](assets/1561884296580.png)

### 实现步骤

1. 图片展示
2. 上一张和下一张功能
3. 图片循环展示

> 1. 画图分析有四张图片分析  图片数组及下标 ：src


### 注意点

1. v-bind:src="imgList[index]"

2. 数组的边界的问题

   1. 下一页： 数组元素最后一项->第一项

   2. 上一页： 第一项->数组最后一项

```js
  /*
  1.图片的展示
    1.imgList:[img1,img2,img3,img4] 下标0,1,2,3
    2.index 
    3.imgList[index]  v-bind:src="imgList[index]"
  2. 上一张和下一张的功能
    1. 上一张 @click:pre index--
    2. 下一张 @click:next index++
	3.数组边界的问题处理
    1.点下一张的时候，如果当前显示最后一张，下一张是第一张
    2.点上一张的时候，如果当前显示第一张，下一张是最后一张
  
  */
```





 

## 表单输入绑定 v-model

[传送门](https://cn.vuejs.org/v2/guide/forms.html)

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。

1. v-model只能用在表单标签上, input, textarea, select

3. 双向数据绑定：

   1. 表单用户输入改变引起data.message改变
   2. data.message改变引起表单用户输入值的改变

3. v-model是用来获取用户输入的

![1564040570792](Vue.js-day01.assets/1564040570792.png)

```html
<div id="app">
      <h2>{{message}}</h2>
      <input type="text" v-model="message">
      <button @click="changeData">改变data</button>
    </div>
    <script src="./lib/vue.js"></script>

    <script>
      new Vue({
        el: "#app",
        data: {
          message:'中分还带波'
        },
        methods: {
          changeData(){
            this.message ='李晨又又分手了'
          }
        },
      });
    </script>
```

>1. 查看文档
>2. v-model只能用在表单元素
>4. 举例说明联动效果
>5. 改变数据输入值改变，双向数据绑定。画图并打字解释
>5. v-model获取用户输入



## v-for指令

[传送门](https://cn.vuejs.org/v2/guide/list.html)

用 `v-for` 指令基于一个数组来渲染一个列表

1. v-for用来遍历数组并生成多个标签

2. v-for作用在需要重复的元素上

3. 语法 v-for="元素别名 in 数组" 或者 v-for="(元素别名,下标别名) in 数组"

4. 在v-for作用的标签之间就可以用使用元素别名和下标别名

5. in是固定的，不能变

   ```html
   <div id="app">
     <ul>
       <li v-for="(movie,index) in movieList">
         {{movie}} --{{index}}
    </li>
     </ul>
   </div>
   <script src="./lib/vue.js"></script>
   <script>
     new Vue({
       el: "#app",
       data: {
         // 电影列表
         movieList:[
           '战狼1',
           '战狼2',
           '战狼3'
         ]
       }
     });
   </script>
   ```


>1. 看文档，详细说明官方的例子。v-for用来遍历，v-for作用在需要重复的元素上
>2. 举例说明，检查页面生成的li元素
>3. 元素别名可以换，in不能改
>



## Demo-记事本

![1561886193732](../../../Vue-38%E6%9C%9F/day01/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1561886193732.png)

### 实现步骤

1. 展示任务列表
2. 添加任务
3. 删除任务

### 注意点

1. v-for=“（元素别名,下标别名） in 数组”

2. v-model修饰符

   **修饰符**：

   - [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy) - 取代 `input` 监听 `change` 事件
   - [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number) - 输入字符串转为有效的数字
   - [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim) - 输入首尾空格过滤

3. array.splice(从哪个下标开始删除，删除元素的个数)

```js
  /*
  1.展示任务列表
    1. todoList:['睡觉觉','吃饭饭','打豆豆']
    2. v-for="元素别名 in 数组" li就可以使用元素别名
  2. 添加任务
    1.v-model:inputVal
    2.@keyup.enter="addTodo"
    3.todoList.push(inputVal)
  3.删除任务
    1. @dblclick:delTodo(index)
    2. index来自v-for
    3.delTodo todoList.splice(从哪个下标开始删除,删除多少项)
  */
```

> 没啥好说的，就是要讲得细



## v-if,v-else-if,v-else指令

[传送门](https://cn.vuejs.org/v2/guide/conditional.html)

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

1. v-if=“js表达式”和v-else-if=“js表达式"，如果表达式值为true，才会渲染该元素

2. v-else 以上的条件不满足时，添加所在有元素

   ```html
   <div id="app">
     <h2>老弟，你今年{{ age }}岁</h2>
     <input type="text" v-model="age" />
     <h2 v-if="age<18">偷偷摸摸去网吧！</h2>
     <h2 v-else-if="age<25">光明正大去网吧</h2>
     <h2 v-else>你到了晚婚的年龄了</h2>
   </div>
   <script src="./lib/vue.js"></script>
   <script>
     const app = new Vue({
       el: "#app",
       data: {
         age:18
       }
     });
   </script>
   ```

> 1. 看官方文档，把文档的例子敲一下。
> 2. 然后举例年龄
> 3. 提一下else-if的用法



## v-show指令

[传送门](https://cn.vuejs.org/v2/guide/conditional.html#v-show)

`v-show` 只是简单地切换元素的 CSS 属性 `display`。

1. v-show隐藏元素通过改变元素css属性display:none

2. v-if 隐藏元素直接移除dom

3. 对于频繁切换隐藏和显示的元素，就用v-show

   ```html
   <div id="app">
     <button @click="isShow=!isShow">切换显示</button>
     <h2>使用v-if</h2>
     <h2 v-if="isShow">中分还带波浪，是不是很萌呢</h2>
     <h2>使用v-show</h2>
     <h2 v-show="isShow">中分还带波浪，是不是很萌呢</h2>
   </div>
   <script src="./lib/vue.js"></script>
   <script>
     new Vue({
       el:'#app',
       data:{
         isShow:true
       }
     })
   </script>
   ```

> 1. 查看官方文档，简要说明v-show的功能和使用
> 2. 举例对比v-if和v-show
> 3. 对于频繁切换就用v-show



## 总结



## 插件推荐

**Vetur** 让vscode提高对vue的支持，比如高亮，比如图标...

**Vue 2 Snippets** vue关键语法的提示



## 用户代码片段

