const express = require('express');

const app = express();

//方式一
app.get('/',(req,res) =>{
    res.send(`<h1>首页</h1>`)
})

//方式二
let handle = (req,res) => {
    res.send(`<h1>学生页面</h1>`)
}
app.get ('/student',handle);
//监听端口
app.listen(3000,()=>{
    console.log('server start at 3000 port');
})