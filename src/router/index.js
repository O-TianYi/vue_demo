import Vue from 'vue'
import Router from 'vue-router'

//基础路由
import RouterMap from './router.config'


Vue.use(Router)

export default new Router({
  // mode: 'history', // 如果你是 history模式 需要配置vue.config.js publicPath
  routes: RouterMap
})
