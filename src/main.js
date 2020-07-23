// webpack打包入口文件
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false



//elementUI全局按需引入----即很多组件都需要用到就全局引入把，省去每个组件引入的麻烦
import 'element-ui/lib/theme-chalk/index.css';
import { Button,Row,Col,Card,Icon,Carousel,CarouselItem,Image,Tabs,TabPane } from 'element-ui';
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Tabs)
Vue.use(TabPane)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
