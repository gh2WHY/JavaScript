import VueRouter from 'vue-router';
import Vue from 'vue'
// import Home from '../components/home';
// import About from '../components/about';
// import User from '../components/user.vue'

//路由的懒加载
const Home = () => import('../components/home.vue');
const About = () => import('../components/about.vue');
const User = () => import('../components/user.vue');
const Profile = () => import('../components/profile.vue');

const News = () => import('../components/new.vue');
const Message = () => import('../components/message.vue');
//1.安装插件
Vue.use(VueRouter);

const routes = [{
    path: '/',
    //  component: Home, 
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta : {
      title:'首页'
    },
    children: [
      // {
      //   path : '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message,
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta : {
      title:'关于'
    },
  },
  {
    path: '/user/:id',
    component: User,
    meta : {
      title:'用户'
    },
  },
  {
    path : '/profile',
    component : Profile,
    meta : {
      title:'我的'
    },
  }
];
//创建Vue-router对象
const router = new VueRouter({
  routes,
  mode: 'history',
  // linkActiveClass : 'active',
})

router.beforeEach((to, from, next) => {
 document.title = to.meta.title;
 next();
})

//将router导出,后面传入vue实例中
export default router;
