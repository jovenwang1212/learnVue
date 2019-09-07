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



#### 注意点



## iScroll结合Vue使用



## ref与$refs属性

[ref属性传送门](https://cn.vuejs.org/v2/api/#ref)

[$refs属性传送门](https://cn.vuejs.org/v2/api/#vm-refs)



## Vue生命周期钩子 - mounted





## iScroll结合Vue优化





## Demo-播放器结合iscroll



## Vue组件基本使用

[传送门](https://cn.vuejs.org/v2/guide/components.html)

### 方法和数据绑定























