# Vue学习第七天

## 反馈

## 回顾



## player-歌曲搜索

### 01 - 搜索路由

1. 在components新建一个SongList.vue

2. 把results.html的htmlcopy到SongList.vue

3. 在main.js里面引入SongList.vue

4. 增加对应的路由规则

   ```js
   {
     path: '/search',
       component: SongList
   }
   ```

   

5. 改变hash看是否能访问到SongList.vue



### 02 - 搜索路由切换

 1. 输入关键字，回车/点击搜索按钮，显示搜索结果列表组件

    1. 获取用户输入的关键字 v-model:keywords

    2. 事件 @keyup.enter/@click:toSongList

    3. js的方式去改变hash为/search。编程式导航

       ```js
       this.$router.push('/search')
       ```

    ### 注意点

    1. 为什么子组件里面可以能过this.$router拿到路由的实例
       1. import from 'node_modules文件夹名'，实际上引入的是文件夹下package.json里面main属性指向的js
       2. 子组件方法中的this访问$router时，其实就是拿到路由实例
       3. Vue实例上访问属性，如果找不到的话，会去prototype上去找

```js
  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });
```

### 03 - 搜索路由传参

动态路由匹配

1. 参数传到hash里面 

   ```js
   this.$router.push('/search/keywords')
   ```

2. 修改路由规则

   ```js
   path: '/search' ==> '/search/:keywords'
   ```

3. 在Vue开发工具里面查看搜索结果列表组件的数据$route

#### 注意点

1. this.$router是路由实例与this.$route这是路由数据



### 04 - 饿了么ui 为空消息提示

[传送门](https://element.eleme.cn/#/zh-CN/component/message)

使用方法

```js
this.$message('这是一条消息提示');
```

注意点：

1. 为什么Vue实例可以访问到$message

   ```js
     Vue.prototype.$loading = packages_loading.service;
     Vue.prototype.$msgbox = message_box;
     Vue.prototype.$alert = message_box.alert;
     Vue.prototype.$confirm = message_box.confirm;
     Vue.prototype.$prompt = message_box.prompt;
     Vue.prototype.$notify = notification;
     Vue.prototype.$message = packages_message;
   ```

#### 注意点

### 05 - 渲染搜索结果

尽早发请求，获取数据，渲染搜索结果

1. created里面发请求
2. axios.get()  https://autumnfish.cn/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA
3. 关键词在路由数据里面
4. songs结合v-for遍历数组，渲染列表
5. mv图标的展示 mvid不为0时

#### 注意

### 06 - 过滤器歌手处理



### 07 - 过滤器时间处理

​	自定义过滤器

	1. 使用 {{数据|formatTime}}
 	2. 定义过滤器
      	1. 组件的filters属性里面声明一个formatTime的方法
      	2. formatTime方法接受一个time，time就是过滤作用的数据
      	3. 数据处理 毫秒->04:03
           	1. 总秒数 = 毫秒/1000
           	2. 分= Math.floor(总秒数/60)
           	3. 秒= Math.floor(总秒%60)
      	4. return数据处理结果，是最终渲染结果



## 侦听器

[传送门](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8)

 侦听器就是用来监听data属性的变化

使用方法

1. watch和el、data是平级的属性
2. 在watch里面，要监听的属性是一个方法，方法名为属性名
3. 如果要监听的属性是不符合变量规则，比如有-或者.的话，加引号
4. watch相比于updated，updated是所有的data属性改变都会触发，watch可以自定义一些属性改变时触发

```js
watch: {
  // message: function () {

  // }
  message() {
    console.log('改变了')
  },
    'user.name'() {
      console.log('改变了')
    }
}
```



### 09 - 再次搜索功能实现

1. 当keywords变化时，重复请求数据
2. created里面已经实现搜索结果
3. 在methods声明一个搜索结果的接口，在两个地方调用

#### 注意

1. 组件并没有被销毁，那么created只会执行一次
2. 当data属性变化时，执行一些逻辑，可以使用watch



## player - 播放歌曲

### 01 - 点击去播放器



### 02-axios抽取 基地址设置



#### 注意

### 03 - 歌曲信息显示



### 04 - 歌曲url获取



### 05 - 歌词显示



## player - 歌曲评论



### 01 - 歌曲评论路由设置



### 02-点击携带歌曲id去评论组件



#### 注意点

### 03 - 获取评论信息



### 04 - 格式化评论时间



## player - mv播放



### 01 - mv路由设置 



### 02-点击携带mvid去mv组件



### 03 - 获取mv信息 



### 04 - 播放最高清的mv



## 总结















