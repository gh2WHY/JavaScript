import Vue from 'vue';
import VueRouter from 'vue-router'


//导入需要懒加载的路由
const Home = () => import('../views/Home/Home.vue');
const Category = () => import('../views/Category/Category')
const shopCart = () => import('../views/Cart/Cart.vue');
const Profile = () => import('../views/Profile/Profile.vue');


//挂载
Vue.use(VueRouter);

const routes = [
  {
    path : '',
    redirect: '/home'
  },
  {
    path :'/home',
    component : Home,
  },
  {
    path: '/category',
    component: Category
  },
  {
    path :'/shopCart',
    component : shopCart
  },
  {
    path : '/profile',
    component : Profile
  }
];
const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router;