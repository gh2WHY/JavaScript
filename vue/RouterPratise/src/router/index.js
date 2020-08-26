// 1. 导入路由并使用
import Vue from 'vue' // 导入vuerouter 
import VueRouter from 'vue-router';  

import Home from '../components/home.vue';
import About from '../components/about.vue'
// 使用功能VueRouter插件
Vue.use(VueRouter)  

//  2. 创建路由实例,并配置路由映射
//  2.1 创建路径与组件的映射关系
let routes = [    
  {
    path : '',
    redirect: '/home'
  },    
  {
    path : '/home',
    component : Home,
  },
  {
    path : '/about',
    component : About,
  }
] 

//  2.2 创建路由实例
var router = new VueRouter({     // 配置路由     
    routes,
    mode : 'history',
}) 

// 3. 导出路由实例
export default router
