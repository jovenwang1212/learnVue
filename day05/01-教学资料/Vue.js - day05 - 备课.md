# Vue学习第五天

## 反馈

1. 老师,讲的好....

   1. 讲得好的地方会继续保持的

2. 这些知识真的有点杂乱,要说什么都没讲吧,讲了一天,要说讲了什么吧,印象里就是iScroll的使用,mounted,组件,至于播放器的细节处理忘光光了

   1. 对于案例大部分同学说，当时听得懂，自己做就不会了。我会把案例的实现步骤写得更加详细，自习的时候，大家多加练习

   2. 案例的思路分析，我重新整理了一下。

   3. 全天的思路是这样的，我们先优化了一下天知道。接着实现播放器。接着用css方式解决滚动条的问题。

   4. 为了播放器滚动条做个优化，引入iScroll，参照官方文档学习

   5. iScroll结合Vue的时候，需要在mounted里面初始化

   6. iScroll的初始化要传dom，Vue建议用ref来获取dom

   7. 接着讲了新的知识点，组件

      

3. 老师,第1次歌单滚动是正常的,但是再次搜索然后滚动歌单会滚动到下面空白的地方???

   1. 手摸手来重现一下问题，再解决

4. 不是说代码来源生活??? 老师讲的语法可以举生活例子来说明
   这样知识点就会有更好的理解

   1. mounted
   2. updated
   3. ref与$refs 

   

5. 老师可以看出您的技术水平非常的丰厚,实战经历也非常的强,但是小的愚钝 需要您的帮助 问题:有时候并不知道老师讲到了哪个地方还是哪个概念!! 看法:因为老师您 在讲题的过程中几乎都是一个调调 知识点与知识点之间跳得太快
   没有间隔 必须要精力十分的集中才能跟得上,才能知道是哪个概念 哪个知识点, 但是根据
   科学研究 一节课45分钟 能保持高度集中三十分钟以上就已经是非常不错的了, 有时候真的需要您去
   提醒我们一下, 这个知识点讲完了 开始进入下一个知识点 ,即使上一个知识点没弄清楚
   也能在老师你不一样的语调当中帮助我们把灵魂出窍的自己拉回来 拉拉拉, 这样会好很多 比如:( 提高音调下面一个知识点 比较难啊, 大家注意听, 下面一个知识点只是了解, 企业用的并不多...)也可以让我们清晰的知道哪个知识点 相对重要 需要重点击破 (个人看法)

   1. 这个知识点是重点，大家注意听啊。好建议。

6. 元气满满的加油

   1. 加油

7. 知识点有点杂 , 要整理下

   1. 经常复盘的同学提升得快

8. 生命周期能在讲讲么,好懵啊,mounted没懂,钩子啥的真不清除

   1. 会讲一下

9. 又是充满忧虑的一天 ,我太难了 rm -rf/*

10. 加油

11. 有点杂,不知道怎么管理,还是得多花点时间记知识点啊

12. 讲真的很多时候其实我连需求都没搞明白,尤其是那种细节的需求搞不明白前后有什么区别,就开始分析用什么方法来解决了,怎么学啊.感觉越学越退步了,第三天和第四天真的很懵逼,勉强自己敲出来的代码悦听也能放歌了

    1. 思路分析更细致一些

13. 今天的知识点有点难,得多敲几遍才行了,还好明天是自习

    

## 回顾

### ref与$refs

Vue官方推荐获取dom的方式

ref="dom别名"标记dom，vm.$refs.dom别名就可以访问到dom了。

两个dom的ref的dom别名相同时，后者会覆盖前面的。

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



### mounted

Vue实例从被创建到销毁过程中，有8个重要的的阶段，其中data里面的数据被解析完成后，会触发mounted回调函数。在mounted回调函数里面我们可以自定义逻辑

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
      <h2 ref="txt">{{ message }}</h2>
    </div>
    <script src="./lib/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
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
          //最早需要在mounted钩子函数里面才能获取到dom
          console.log(this.$refs.txt)
        },
      })
    </script>
  </body>
</html>
```



### 组件基本使用

1. 结构 template
2. data(){return{} }
3. methods:和之前一样
4. 除了1和2其他的都和之前的写法一样
5. 需要先注册，再使用的
6. 组件有独立的功能，声明一次，其他地方可以无限次使用

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
    <div id="app1">
      <h3>第一个Vue实例</h3>
      <counter></counter>
      <counter></counter>
    </div>
    <div id="app2">
      <h3>第一个Vue实例</h3>
      <counter></counter>
    </div>
    <script src="./lib/vue.js"></script>
    <script type="text/x-template" id="tpl">
      <div>
        <h2>你当前点击了{{num}}次</h2>
        <button @click="num++">+</button>
      </div>
    </script>
    <script>
      //全局注册,所有其他Vue实例里面都可以使用
      Vue.component('counter', {
        // template: '<h2>你当前点击了3次</h2>',
        template: '#tpl',
        data() {
          return {
            num: 0
          }
        }
      })
      // 第一个Vue实例
      const app1 = new Vue({
        el: '#app1',
        data: {}
      })

      // 第二个Vue实例
      const app2 = new Vue({
        el: '#app2',
        data: {}
      })
    </script>
  </body>
</html>
```

> 1. 回顾组件的基本使用，上代码
> 2. 除了data和template其他都和之前一样。
> 3. 我们说组件是为了做功能抽取



## Vue路由基本使用 

[传送门](https://router.vuejs.org/zh/)

**我们可以用Vue路由做一个高级的Tab栏**

使用方法，大家只要**学会复制粘贴**就行。



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
      <p>
        <!-- 等同于 导航 tab nav 
          to: 代码中的路由规则相匹配
        -->
        <!-- <a href="#/foo">自己写的A</a> -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <!-- 等同于 tab-content -->
      <router-view></router-view>
    </div>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script>
      // 1. 组件简写方式
      const Foo = { template: '<div>foo</div>' }
      const Bar = { template: '<div>bar</div>' }

      // 2. 定义路由
      // url和组件的对应关系
      const routes = [{ path: '/foo', component: Foo }, { path: '/bar', component: Bar }]

      // 3. 创建 router 实例
      // 实例化 路由对象，把定义的规则 传递给他
      const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
      })

      // 4. 创建和挂载根实例。
      const app = new Vue({
        el: '#app',
        // 把路由 和Vue实例关联起来
        // 挂载到Vue实例上
        router
      })
      // .$mount('#app') 含义和el:#app一样

      // 现在，应用已经启动了！
    </script>
  </body>
</html>
```

> 1. 学生的作业引出Tab。Vue路由来做。网易云音乐看一下。
> 2. 网易云音乐引出，url地址不变，页面切换。整个页面就类似于一个大的div是吧，这个切换效果就像是div的隐藏和显示而已。切换这个大的div，我们有一个vue插件专门来做这个，这个就是Vue的路由。
> 3. vue-router.js并不包含在vue.js里面。渐进式，有些项目不用啊vue-router官方文档
> 4. 解释一下代码。
> 5. 修改url,修改组件，重新定义一个组件
>



### Vue路由高仿网易云音乐

1. 点击tab显示对应的组件
2. 这里组件就是一个图片

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
      <!-- 导航栏 -->
      <router-link to="/music">发现音乐</router-link>
      <router-link to="/me">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
      <router-link to="/download">下载客户端</router-link>
      <!-- 内容区 -->
      <router-view></router-view>
    </div>
    <script src="./lib/vue.js"></script>
    <!-- 导入vue-router.js -->
    <script src="./lib/vue-router.js"></script>
    <script>
      // 定义组件
      const Music = { template: '<img src="./images/music.png"/>' }
      const Me = { template: '<img src="./images/me.png"/>' }
      const Friend = { template: '<img src="./images/friend.png"/>' }
      const Download = { template: '<img src="./images/download.png"/>' }

      // 定义路由规则
      const routes = [
        {
          path: '/music',
          component: Music
        },
        {
          path: '/me',
          component: Me
        },
        {
          path: '/friend',
          component: Friend
        },
        {
          path: '/download',
          component: Download
        }
      ]
      // 实例化路由对象，传递规则
      const router = new VueRouter({
        routes
      })
      //实例化Vue，传递路由对象
      const app = new Vue({
        el: '#app',
        router,
        data: {}
      })
    </script>
  </body>
</html>

```



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

[传送门](https://router.vuejs.org/zh/api/#linkactiveclass)

1. vue-router 在我们切换`router-link`时，默认会自动的添加移除一个高亮的类名，
2. `linkActiveClass:"自定义全局router-link高亮样式"`

```js
const router = new VueRouter({
  routes,
  linkActiveClass:'active'
})
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

组件获取参数的一种方式

![1566830590800](Vue.js - day05 - 备课.assets/1566830590800.png)

模式 、匹配路径及获取参数如上图

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
> 5. $route和 $router



## Demo-歌曲搜索

![1562401240897](assets/1562401240897.png)

### 实现步骤

1. 输入框回车或者点搜索，显示搜索组件
   1. 回车或者点搜索 @keyup.enter/click:searchMusic
   2. 编程式导航 `router.push('/songs')`
2. 输入内容，回车或点搜索，传递关键字
   1. 获取输入内容 v-model:keywords
   2. 动态路由匹配
      1. 修改路由规则模式 `/result`=>`/result/:keywords`
      2. 修改路径 router.push('/result/${this.keywords}')
      3. vue开发工具查看传参

### 注意点

1. 路由切换时需要携带数据，用的是`动态路由匹配`
2. 代码的方式跳转，用的是`编程式导航`

> 1. 首先我们获取用户的输入
> 2. 回车或者点击搜索的事件里，编程式导航，实现切换路由到搜索结果
> 3. 动态路由匹配，把用户输入的搜索关键词传递到搜索结果组件中



## 生命周期钩子 -created

最早能在created里面获取到data的属性

```js
beforeCreate() {
          console.log(this.message)
        },
          created() {
            // 最早能在created里面获取到data的属性
            console.log(this.message)

          },
```

> 1. 大家看，哪个是最早的钩子。
> 2. 搜索结果组件里，获取到搜索关键词后，是不是要根据搜索关键词，调接口搜歌呢？
> 3. 那应该在什么时机去调接口搜歌呢？查看Dom结构，切换路由，每一次组件DOM都被移走了。是不是应该在组件创建过程中尽早地调接口搜索歌曲呢
> 4. 我们已经学过updated和mounted生命周期钩子函数。
> 5. 新建HTML，beforeCreate和created，前者无法获取data里面的值。



## Demo-高级播放器-结果搜索

### 实现步骤

1. 当 result 组件创建出来之后（出现）之后，
   1. 使用生命周期钩子created
   2. 尽可能早一些执行的，让用户早一些看到数据
2. 获取传递过来的关键字 `this.$route.params.键`
3. 通过关键字调用接口， axios.get
4. 接口 `<https://autumnfish.cn/search?keywords=海阔天空>`
5. 数据获取到之后，渲染到页面上
   1. then
   2. v-for :musicList
6. mvid为0,不展示mv
   1. v-show条件渲染

### 注意点

由切换默认会移除dom，也就是组件重新创建。

> 1. 那么在搜索结果组件的里面写created看搜索的时候，是不是都在调用。打印，可以的。
> 2. created里面调接口，查询
> 3. 渲染搜索结果



## 过滤器基本使用

[过滤器](https://cn.vuejs.org/v2/guide/filters.html)

Vue.js 允许你自定义过滤器，可被用于一些常见的**文本格式化**。过滤器可以用在两个地方：**双花括号插值和 v-bind 表达式** 。

1. 定义的方式
   
   1. vue中fileters:{}
   
2. 一个过滤器一个方法

3. 使用`{{ 数据 | 过滤器 }}`

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

1. 处理时间 毫秒数->4:30
   1. 添加过滤器 处理 时间
      1. {{item.duration |formatTime }}
      2. filters:{ formatTime(time) }
   2. 格式化时间的处理逻辑
      1. 毫秒->秒
      2. 算出分 60的整数倍 除
      3. 剩余的部分作为秒 取余

1. 显多个歌手名称
   1. 添加过滤器 处理歌手 
      2. {{ item.artists  | formatSinger }}
      2. filters:{ formatSinger(arr) }
   3. 过滤器内部逻辑
      1. 循环数组，获取歌手的数组
      2. 歌手数组.join('/')

### 注意点

1. 时间从毫秒转为 时分秒，
   1. 先除  再取余
2. 过滤器的特点是格式化文本
3. 过滤器的使用 `|` 
   1. 这个| 也叫 `管道符`

> 1. 过滤器实现处理歌手名展示
> 2. 过滤器实现 处理时间展示



## Demo-点击mv 播放MV

### 实现步骤

1. result组件中 生成mv按钮时，绑定点击事件 携带mvid 跳转到mv路由那
   1. 点击事件@click:playMV
   2. router.push('/mv/mv的id')
   3. 路由规则`/mv`->`/mv/:mvid`
2. mv组件中 
   1. 获取mvid
   2. axios接口调用 `https://autumnfish.cn/mv/detail?mvid=mvid`
   3. 数据回来之后，渲染到页面上
      1. 歌名：songName
      2. 歌手名:singerName
      3. mv的地址:mvUrl

> 1. 搜索结果页面中，点击mv，绑定点击事件，携带mvid跳转到mv组件
> 2. mv组件中获取mvid，created方法里面请求，展示数据

### 注意点

实现步骤和 搜歌 类似 跳转，携带数据

#### 遗留功能

播放歌曲和评论



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

为了让安装速度提升，设置npm包下载的镜像为taobao镜像

```html
npm config set registry https://registry.npm.taobao.org/
```

### 注意点

1. ![1562484863670](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562484863670.png)

   1. 第一次安装，安装成功了

2. ![1562484834790](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562484834790.png)

   1. 已经安装过，重新安装

3. ![1562484911994](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562484911994.png)

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

> 1. 四个组件全放在一个index里面，找个东东滚半天。可能大家在写的时候，就觉得这样很不方便了对吧。
> 2. 应该把它抽到出来。但其实script type="text/x-template"并不支持。
> 3. 单文件组件 组件.vue，html、js、css，包含 。但是浏览器不认识，需要结合一个工具来使用。
> 4. vue官方的脚手架，也就是前端工程化，会解决这个问题
> 5. 文件组件浏览器无法识别。可以类比于less文件，需要转化成css
> 6. 需要工具来把.vue转化为浏览器识别的代码。工具叫`vue-cli`
> 7. vue-cli能做的事情有很多，让我们可以专注于代码，其他杂事交给工具来解决
> 8. 瞧官网，安装。同学们先安装
> 9. 命令行安装，结尾提示added或者updated都是安装成功的意思
> 10. 如果有一堆err!,是安装失败，那么可以排查一下。都安装好了吧？如果没有，一会私聊哈
> 11. vue --version查看版本号，用来进一步确认安装成功。运行如果显示版本号的话，就说明安装成功。



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



## Vue-cli 安装

## Vue-cli 项目创建

[传送门](https://cli.vuejs.org/zh/guide/creating-a-project.html)



### 正常的流程

1. 创建之后会多一个项目文件夹，路径不要乱选
2. 项目名不要有中文，不要有大写字母，尽可能有意义

```
vue create 项目名
```

3. 弹出的对话框先选择默认的选项

![1562485415022](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562485415022.png)

4. 稍等一会，等进度条走完 提示如下画面说明成功了

![1562485530804](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562485530804.png)

5. 进入项目文件夹
   1. `cd 项目名` 直接根据提示即可 
6. 运行项目
   1. `npm run serve`
7. 稍等片刻 ，出现如下效果说明成功了

![1562485640647](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562485640647.png)



### 报错的原因

1. ![1562485820281](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562485820281.png)

   创建的命令输入错误`create`输入成了`creat`

2. ![1562485879426](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562485879426.png)

   2. 终端的权限问题；新建管理员模式的终端
   3. 当前这个文件夹，这个文件被其他软件占用：关闭所有可能影响的软件（重启）
   4. npm包管理工具的问题:
      2. 执行``npm cache clean -f`` 在重新创建项目

3. ![1562486092416](../../day06/01-%E6%95%99%E5%AD%A6%E8%B5%84%E6%96%99/assets/1562486092416.png)

   创建项目是，又到了第三方模块，文件太多了git人为没有必要管，提示你一下

   vue-cli创建项目是，已经设置了git忽略文件 就在`.gitignore`中

> 1. 那么我们就可以用vue这个命令了。输入vue命令。可以看到vue create这个命令，就是创建项目，帮我们搭好一个Vue项目的架子。
> 2. vue create 项目名，回车，中途会有弹出的对话框先选择默认的选项。直接回车，就选择了默认选项
> 3. 提示successfully说明创建项目成功了。
> 4. 提示cd 项目目录
> 5. 运行npm run serve 
> 6. 访问提示的路径
> 7. 示successfully说明项目运行成功了。
> 8. 单词拼写的错误，还有其他错误解决了
> 9. git提示，也是表示成功了。那为什么有提示了呢。查看目录，发现.git文件夹，因为创建项目已经初始化了git仓库。第三方模块又巨多。vsode这个提示的意思是要不要忽略node_modules。但项目目录下有一个.gitignore文件，里面有忽略node_modules的配置。git status演示这个配置的功能。让git管不管这个文件夹。所以这个提示可以直接X掉



## 总结

[脚手架](https://cli.vuejs.org/zh/guide/)

[安装](https://cli.vuejs.org/zh/guide/installation.html)

[创建项目](https://cli.vuejs.org/zh/guide/creating-a-project.html)

> 1. 在黑云音乐这个项目中，有同学可能发现了，切换Tab数据会丢失。
> 6. 另外大家有兴趣可以查查，vue-router试着解决Tab切换数据丢失的问题。