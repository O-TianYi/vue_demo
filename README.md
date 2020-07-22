### 遇到的问题
#### less的引入
（1）版本问题，版本不能过高否则报错
（2）less文件会自动生成wxss文件或者css文件的问题（小程序的后遗症）
优化：
把所有的css可控变量使用@import来引入，这样就可以为以后维护增加便利


#### elementUI组件库按需引入
参考官方文档（安装，配置.babelrc文件）
注意的是：官方文档会少一个插件安装：npm i babel-preset-es2015 -D//否则报es2015没有找到
使用：
main.js:全局引入
import { Button } from 'element-ui';
Vue.use(Button)
xxx.vue:局部引入
import { Button } from 'element-ui';




#### 路由懒加载问题
问题：使用路由懒加载的时候发现报错：Unexpected token（import）
原因：import属于异步引用组件，需要babel-loader处理
解决：安装:npm install babel-plugin-syntax-dynamic-import -D
      然后在.babelrc文件添加一个插件`"plugins": ["syntax-dynamic-import"]`


