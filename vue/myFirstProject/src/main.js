import Vue from 'vue'
import App from './App'
//导入router
import router from './router/index'

Vue.config.productionTip = false

// const cpn = Vue.component('cpn',{
//   template : `<div>
//     我是子组件
//   </div>`
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render : function(createElement) {
  //   return createElement('h2',{class : 'box'},['hello world',
  //     createElement('button',['按钮'])
  //   ]);
  router,
  render : (h) => h(App),
    // return createElement(cpn)
  
})
