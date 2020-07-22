// 基础路由
// 主要写地址----导入页面和对应的地址

//使用路由懒加载方式加速加载性能

import Home from '../pages/home'


const RouterMap=[

    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        component: ()=>import('../pages/home'),
        name: 'Home',
        meta:{}
    },
    // {
    //     path:'/login',
    //     component: ()=>import('../pages/login'),
    //     name: 'Login',
    //     meta:{}
    // },
    // {
    //     path:'/register',
    //     component: ()=>import('../pages/register'),
    //     name: 'Register',//方便query使用
    //     meta:{}
    // }


]

export default RouterMap;//默认暴露