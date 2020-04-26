const express = require('express');
//引入模块
const router = require('./router/index')


//创建主应用
const app = express();

//通过中间件建立主应用和子模块之间的关系
app.use(router);

//监听端口
app.listen(3000,()=> {
    console.log('server start at 3000 port');
})