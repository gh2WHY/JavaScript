const {add} = require('./aa')

console.log(add(2,3));


//导入es6的东西
import {name,obj} from './es6';

console.log(name);
console.log(obj);


//引入依赖的css文件
require('../css/index.css');

//引入依赖的less文件
require('../css/special.less');
document.writeln('<h2>你好啊,李银河!</h2>')


//引入vue模块
import Vue from 'vue'

new Vue({
  el : '#app',
  data : {
    message : "你好,世界"
  }
})