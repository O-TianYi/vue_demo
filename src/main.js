// webpack打包入口文件
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false



//elementUI全局按需引入----即很多组件都需要用到就全局引入把，省去每个组件引入的麻烦
import { Button } from 'element-ui';
Vue.use(Button)




new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
