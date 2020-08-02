//引入module模块
const {add,a} = require('./module');
import Vue from 'vue'

console.log(add(2,3));
console.log(a);


//引入依赖的css文件
require('../css/index.css');

//引入依赖的less文件
require('../css/special.less');
document.writeln('<h2>你好啊,webpack!</h2>');


//引入app组件
// import App from '../vue/app'
import App from '../vue/app.vue'


new Vue({
  el : "#app",
  template : `<App/>`,
  data :{
      message : "你好,世界"
    },
  components : {
    App
  }
})