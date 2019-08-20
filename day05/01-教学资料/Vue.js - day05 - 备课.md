# Vue学习第五天

## 反馈

## 回顾

1. 组件基本使用
   1. 结构 template
   2. data(){return{} }
   3. methods:和之前一样
   4. 除了1和2其他的都和之前的写法一样

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      .wrapper {
        border: 1px solid #666;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <counter></counter>
      <counter></counter>
    </div>
    <script src="./lib/vue.js"></script>
    <script type="text/x-template" id="counter_tpl">
      <div class="wrapper">
        <h2>点击了{{num}}次</h2>
        <button @click="add">+</button>
      <div>
    </script>
    <script>
      Vue.component('counter', {
        template: '#counter_tpl',
        data: () => {
          return {
            num: 0
          }
        },
        methods: {
          add() {
            this.num++
          }
        }
      })
      const app = new Vue({
        el: '#app',
        data: {}
      })
    </script>
  </body>
</html>
```

> 1. 回顾组件的基本使用，上代码
> 2. 除了data和template其他都和之前一样。
> 3. 我们说组件是为了做功能抽取

2. vue-router:
   1. 高级的tab
   2. 布局中
      1. tab-nav: router-link
      2. tab-content:router-view

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
      <h1>Hello App!</h1>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/music1">歌曲1</router-link>
        <router-link to="/bar">歌曲2</router-link>
        <router-link to="/run">跑步</router-link>
      </p>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>

    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script>
      // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

      // 1. 定义 (路由) 组件。
      // 可以从其他文件 import 进来
      const Foo = { template: '<div>foo</div>' }
      const Bar = { template: '<div>bar</div>' }
      const Run = { template: '<div>kakaka</div>' }

      // 2. 定义路由
      // 每个路由应该映射一个组件。 其中"component" 可以是
      // 通过 Vue.extend() 创建的组件构造器，
      // 或者，只是一个组件配置对象。
      // 我们晚点再讨论嵌套路由。
      const routes = [{ path: '/music1', component: Foo }, { path: '/bar', component: Bar },{
        path: '/run', component: Run
      }]

      // 3. 创建 router 实例，然后传 `routes` 配置
      // 你还可以传别的配置参数, 不过先这么简单着吧。
      const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
      })

      // 4. 创建和挂载根实例。
      // 记得要通过 router 配置参数注入路由，
      // 从而让整个应用都有路由功能
      const app = new Vue({
        router
      }).$mount('#app')

      // 现在，应用已经启动了！
    </script>
  </body>
</html>

```

1. 回顾路由，上代码

2. 定义组件，定义路由和组件的映射规则，创建router实例,把规则告诉router，挂载,把router传参Vue例

3. 使用router-link相当标签栏，router-view相当于标签下的内容, router-link to和路由规则要匹配

   

## Demo-高级播放器-路由整合

### 实现步骤

1. 整合路由
   1. tab切换使用的是vue-router(路由)
   2. 显示的是组件
   3. 整合 多个页面，抽取为组件，使用路由的方式维护显示和隐藏
   4. git提交
2. 整合组件
   1. 把index隔壁的那些文件，结构，样式全部都整到index.html
   2. 抽取为组件
3. 为了晚上看代码简洁，删除了除index.html之外所有文件

> 1. 演示功能，黑云音乐，会讲路由传参及过滤器
> 2. 查看模板，搜索结果，播放，mv播放及评论分别是四个页面
> 3. 我们先来结合学习过的路由知识，完成点击Tab bar切换内容的功能
> 4. 然后是不是应该把四个页面作为组件引入到index.html. 检查四个页面的结构，script template引入，样式引入。
> 5. 所有码都放在index.html中
> 6. 有没有同学有冲动想用外链的方式把模板引入呢？[template不支持引部引用](https://vuejs.org/2015/10/28/why-no-template-url/)  结尾我们再来讲用什么方案来优化它。



## 路由高亮样式

[传送门](https://router.vuejs.org/zh/api/#active-class )

1. vue-router 在我们切换`router-link`时，默认会自动的添加移除一个高亮的类名，
2. 如果需要更改通过`active-class`把这个属性设置给`router-link`即可实现使用自己的类名作为高亮类名

```html
<router-link active-class='active'>导航</router-link>
```

> 1. 大家看现在我们切换Tab的时候，无法知道当前选中的是哪个tab。，
> 2. 看HTML结构，有一个active，可以控制是否选中。另外router-link给我们添加了一个router-link-active的类。router给我们添加了当前选中的标签栏的样式，只是不是我们想要的样式。如果能自定义这个类，那就完美了。查看文档，解释
> 3. 改active-class成功



## 编程式导航

[传送门](https://router.vuejs.org/zh/guide/essentials/navigation.html)

1. 编程式导航的本质是

```
router.push('地址')
```

2. 声明式导航的本质是

```
<router-link to='/run'>去跑步</router-link>
```

3. 适用情景
   1. 声明式导航：点了就跳转，没有任何逻辑 类似于(a标签设置了href)。 可以由编程式实现
   2. 编程式导航：跳转的同时有其他逻辑需要执行

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
      <!-- tab - nav 导航 声明式导航  -->
      <router-link to="/music1">歌曲1</router-link>
      <router-link to="/bar">歌曲2</router-link>
      <router-link to="/run">边唱歌鞭炮</router-link>
      <h2>编程式导航</h2>
      <input type="button" value="点我去唱歌" @click="toSing">

      <!-- tab - content -->
      <router-view></router-view>
    </div>
  </body>
</html>
<!-- 放上面会影响页面的接在 js加载完毕之后页面是看不到的 -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
  // 1. 定义组件 简化的写法
  const Foo = { template: '<div>foo</div>' }
  const Bar = { template: '<div>bar</div>' }
  const run = { template: '<div>咔咔咔！！！！的跑！！！！</div>' }

  // 2. 定义规则
  // url和组件的对应关系
  // const routes = [
  const routers = [
    { path: '/music1', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/run', component: run }
  ]

  // 3. 把路由规则 设置给路由对象
  const router = new VueRouter({
    // routes // (缩写) 相当于 routes: routes
    routes: routers // routers: routers
  })

  // 4. 创建和挂载根实例。

  const app = new Vue({
    el: '#app',
    methods: {
      // 跳转去唱歌
      toSing(){
        // console.log('唱歌去')
        // 用路由对象跳转
        // router.push('/bar')
        router.push('/niubiliti')
      }
    },
    router // router:router
  })

  // 现在，应用已经启动了！
</script>

```

> 1. 回车的时候，是不是应该看到搜索结果呢？是。所以路由应该匹配到搜索结果，就像我们点击搜索结果Tab一样对吧。vue-router提供实现路由切换。
> 2. 查看文档。
> 3. 在之前路由例子上，增加一个按钮来切换路由。
> 4. 声明式导航点了就跳转，没有逻辑，写在HTML里面。
> 5. 编程式导航可以添加一些逻辑，写在JS里边



## 动态路由匹配

[传送门](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96)

1. 修改路由规则 `/user`=>`/user/:key`
2. `:key`是一个占位，名字可以更改
3. 切换路由是，地址`/user`=>`/user/数据`
4. 携带者数据切换了路由之后，如何获取数据
   1. data中会自动的被添加上一个`$route`内部的.params就保存了我们传递的数据
   2. ![1562403694490](../../../Vue-38%E6%9C%9F/Vue.js%20-%20day05/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562403694490.png)

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
      <h1>Hello App!</h1>
      <p>
        <router-link to="/music1">歌曲1</router-link>
        <router-link to="/bar/Joven">歌曲2</router-link>
      </p>
      <router-view></router-view>
    </div>

    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script>
      const Foo = { template: '<div>foo</div>' }
      const Bar = { template: '<div>{{$route.params.name}}</div>' }

      const routes = [{ path: '/music1', component: Foo }, { path: '/bar/:name', component: Bar }]
      const router = new VueRouter({
        routes
      })

      const app = new Vue({
        router,
        methods: {
          toSing() {
            router.push('music1')
          }
        }
      }).$mount('#app')
    </script>
  </body>
</html>
```



> 1. 黑云音乐，搜索结果是不是根据我的输入查询出来呢？如何传输入内容传到搜索结果组件呢？这里需要用动态路由匹配传参
> 2. 看文档
> 3. 来一个HTML例子
> 4. 同时用vue-dev看到有data.$route有数据。



## Demo-歌曲搜索

![1562401240897](assets/1562401240897.png)

### 实现步骤

1. 顶部的搜索框双向数据绑定v-model.trim :search
2. 点击搜索或者点击回车
   1. @click @keyup.enter :searchMusic
   2. 把搜索的内容，传递给 搜索组件
      1. 动态路由匹配
      2. router.push('/result/${this.search}')
   3. 同时让搜索组件显示出来
      1. 编程式导航
      2. 修改路由规则 `/result`=>`/result/:search`

### 注意点

1. 路由切换时需要携带数据，用的是`动态路由匹配`
2. 代码的方式跳转，用的是`编程式导航`

> 1. 首先我们获取用户的输入
> 2. 回车或者点击搜索的事件里，编程式导航，实现切换路由到搜索结果
> 3. 动态路由匹配，把用户输入的搜索关键词传递到搜索结果组件中



## 生命周期钩子 -created

1. beforeCreate:
   1. Vue实例被创建，但是传入的参数还没有设置上去
2. created
   1. Vue实例被创建，传入的参数已经设置给这个Vue实例了
   2. 如果要操纵数据最起码在这个里面
3. beforeMount
   1. 开始解析结构，把数据和解构关联起来，刚刚开始，页面上看不到
4. mounted
   1. 数据和页面已经关联起来，这一步dom元素已经可以获取到

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
    <div id="app"></div>
  </body>
</html>
<script src="./lib/vue.js"></script>

<script>
  const app = new Vue({
    el: '#app',
    data: {
      secret: '我有一个小秘密，就不告诉你！'
    },
    beforeCreate() {
      console.log('beforeCreate')
      console.log(this.secret)
    },
    created() {
      console.log('created')
      console.log(this.secret)
    }
  })
</script>
```

> 1. 搜索结果组件里，获取到搜索关键词后，是不是要根据搜索关键词，调接口搜歌呢？
> 2. 那应该在什么时机去调接口搜歌呢？查看Dom结构，切换路由，每一次组件DOM都被移走了。是不是应该在组件dom渲染之前调接口搜歌呢。
> 3. 我们已经学过updated和mounted生命周期钩子函数。看图。created更适合。
> 4. 新建HTML，beforeCreate和created，前者无法获取data里面的值。



## Demo-高级播放器-结果搜索

### 实现步骤

1. 当 result 组件创建出来之后（出现）之后，
   1. 使用生命周期钩子（自动执行）created
   2. 尽可能早一些执行的，让用户早一些看到数据
2. 获取传递过来的关键字 `this.$route.params.键`
3. 通过关键字调用接口， axios
4. 数据获取到之后，渲染到页面上
   1. then
   2. v-for :musicList

> 1. 那么在搜索结果组件的里面写created看搜索的时候，是不是都在调用。打印，可以的。
> 2. created里面调接口，查询
> 3. 渲染搜索结果



## 过滤器基本使用

[过滤器](https://cn.vuejs.org/v2/guide/filters.html)

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 v-bind 表达式** (后者从 2.1.0+ 开始支持)。

1. 定义的方式
   
   1. vue中fileters:{}
   
2. 一个过滤器一个方法

3. 使用的使用`{{ 数据 | 过滤器 }}`

4. 过滤器需要接收一个参数，参数就是处理的数据

5. 内部处理完毕之后

6. return 出来页面会显示 返回出来的那个值

7. 不会修改原始值

   

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
      <h2>公历生日:{{formatDate1}}</h2>
      <h2>农历生日:{{formatDate2}}</h2>
      <h2>过滤器的方式</h2>
      <h2>公历生日:{{date1|formatDate}}</h2>
      <h2>农历生日:{{date2|formatDate}}</h2>
    </div>
    <script src="./lib/vue.js"></script>
    <script src="./lib/moment.js"></script>
    <script>
      const app = new Vue({
        el: "#app",
        data: {
          date1:'2019-8-13',
          date2:'2019-7-13'
        },
        computed: {
          formatDate1(){
            return moment(this.date1).format('YYYY.MM.DD')

          },
          formatDate2(){
            return moment(this.date2).format('YYYY.MM.DD')
          }
        },
        filters:{
          formatDate(date){
            return moment(date).format('YYYY.MM.DD')
          }
        }
      });
      </script>
  </body>
</html>
```

>1. 搜索结果展示歌手，如果有多个歌手，歌手这间用/连接。这里需要用到过滤器。
>2. 场景引入，如果我对农历出生日期和公历出日期按同样格式输出？怎么做？
>3. 两个计算属性，计算逻辑是一致的？有没有更好的解决方案呢？我们能不 能把共同的计算逻辑提取出来呢
>4. 参考文档，定义过滤器，解决日期的显示
>5. 过滤器只能作在{{}}和v-bind里面
>6. 解释过滤器的使用{{数据|过滤器}} 过滤器方法接受一个参数，就是它所作用的数据，在方法里面可以拿到这个数据，处理后，return，return的数据就是最终显示的数据
>7. 有几个属性需要处理展示就用计算属性，每一个数据需要做同样的处理才展示用过滤器



## Demo-过滤器处理result中搜索的结果

![1562407610048](assets/1562407610048.png)

### 实现步骤

1. 处理歌手名
   1. 为了防止多人演唱只显示第一个的问题
   2. 添加过滤器 处理歌手 
      1. filters:{ formatSinger(arr) }
      2. {{ item.artists  | formatSinger }}
   3. 过滤器内部逻辑
      1. 循环数组，拼接名字 用 '/'
      2. 移除最后的那个`/`
      3. return
2. 处理时间
   1. 添加过滤器 处理 时间
      1. filters:{ formatTime(time) }
      2. {{item.duration |formatTime }}
   2. 处理逻辑
      1. 毫秒->秒
      2. 算出分 60的整数倍 除
      3. 剩余的部分作为秒 取余

### 注意点

1. 时间从毫秒转为 时分秒，
   1. 先除  再取余
2. 过滤器的特点是，不修改数据的情况下 更改数据的显示效果
3. 过滤器的使用 `|` 
   1. 这个| 也叫 `管道符`

> 1. 过滤器实现处理歌手名展示
> 2. 过滤器实现 处理时间展示



## Demo-点击mv 播放MV

### 实现步骤

1. result组件中 生成mv按钮时，绑定点击事件 携带mvid 跳转到mv路由那
   1. router.push('/mv/mv的id')
   2. 路由规则`/mv`->`/mv/:mvid`
2. mv组件中 
   1. 获取mvid
   2. axios接口调用
   3. 数据回来之后，渲染到页面上
      1. 歌名：songName
      2. 歌手名:singerName
      3. mv的地址:mvUrl

> 1. 搜索结果页面中，点击mv，绑定点击事件，携带mvid跳转到mv组件
> 2. mv组件中获取mvid，created方法里面请求，展示数据

### 重点

实现步骤和 搜歌 类似 跳转，携带数据



## 预习

单文件组件  xxx.vue

[脚手架](https://cli.vuejs.org/zh/guide/)

[安装](https://cli.vuejs.org/zh/guide/installation.html)

[创建项目](https://cli.vuejs.org/zh/guide/creating-a-project.html)

> 1. 在黑云音乐这个项目中，有同学可能发现了，切换Tab数据会丢失。
> 2. 四个组件全放在一个index里面，找个东东滚半天。可能大家在写的时候，就觉得这样很不方便了对吧。
> 3. 应该把它抽到出来。但其实script type="text/x-template"并不支持。
> 4. 单文件组件 组件.vue，html、js、css，包含 。但是浏览器不认识，需要结合一个工具来使用。
> 5. 课下大家预习一下vue-cli，vue官方的脚手架，也就是前端工程化，会解决以上两个问题的。
> 6. 另外大家有兴趣可以查查，vue-router试着解决Tab切换数据丢失的问题。