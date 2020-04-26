const express = require('express');

//引入学生路由和教师路由
const student = require('./extrouter/Student');
const teacher = require('./extrouter/Teacher');

//创建主应用程序
const app = express();

//关联主应用程序和子应用程序
app.use("/student",student );
app.use('/teacher',teacher);

app.get('/' ,(req,res) => {
    res.send(`<h1>首页</h1>`);
})

//监听端口
app.listen(3000,() => {
    console.log('server start at 3000 port');
})