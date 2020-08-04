import VueRouter from 'vue-router';
import Vue from 'vue'
import Home from '../components/home';
import About from '../components/about';

//1.安装插件
Vue.use(VueRouter);

const routes = [
  {
     path: '/',
    //  component: Home, 
    redirect: '/home'
  },
  {
    path :'/home',
    component: Home,
  },
  {
    path : '/about',
    component : About,
  }
];
//创建Vue-router对象
const router = new VueRouter({
  routes,
  mode : 'history',
  // linkActiveClass : 'active',
})

//将router导出,后面传入vue实例中
export default router;