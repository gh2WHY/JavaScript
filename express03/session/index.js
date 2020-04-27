const express = require('express');
const session = require('express-session');
const app = express();

// 配置session
app.use(session({
    secret: 'haha123',
    cookie: {
        maxAge:2*60*1000,
        path:'/'
    },
    resave: true,   // 即时session 没有被修改, 也保存session值, 默认为true
    saveUninitialized:false,
}))

app.get('/',(req,res) => {
    // 设置session
    req.session.user = {name:'wuwie',age:18}
    res.send("首页")
})
app.listen(8080,() => {
    console.log('server start at 8080 port');
})