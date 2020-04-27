const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();

//挂载第三方中间件
app.use(cookieparser());

app.get('/',(req,res)=>{
    //设置cookie
    res.cookie('name',"why",{
        maxAge:2*60*1000,
        httpOnly:true
    });

    //获取cookie
    //通过请求头来获取cookie信息
    console.log(req.headers.cookie);

    //通过cookieparser获取cookie信息
    console.log(req.cookies);
    res.send('首页');
})

app.listen(3000,()=>{
    console.log('server start at 3000');
})