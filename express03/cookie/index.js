const express = require('express');
const fs = require('fs');
const cookieparser = require('cookie-parser');

const app = express();

// 静态资源目录
app.use(express.static("public"));

// 配置post请求的参数获取
app.use(express.urlencoded());
app.use(express.json());

//挂载第三方中间件
app.use(cookieparser());

//自定义中间件,判断有没有权限访问其他页面
app.use((req,res,next) =>{
    //如果访问注册页面或登录页面,则不能被中间件拦截,不用进行权限的判断,直接执行
    if(req.path == '/register' || req.path == "/register/") {
        next();
        return;
    }
    if(req.path == '/login' || req.path == "/login/") {
        next();
        return;
    }
    //通过第三方模块获取cookie信息
    let cookieuser = req.cookies;
    let {username} = cookieuser;
    fs.readFile(`./users/${username}.json`,(err,data) => {
        if(err) {
            res.send(`<h1>你没有权限访问,请检查登录信息</h1>`);
            return;
        }
        //获取当前文件中的数据
        let user = JSON.parse(data.toString());
        console.log(user)
        if(cookieuser.username == user.username && cookieuser.password == user.password) {
            next();
        }else {
            res.send(`<h1>你没有权限访问,请检查登录信息</h1>`);
        }
    })
})
//根目录
app.get('/',(req,res) =>{
    res.send(`<h1>首页</h1>`);
})
//学生目录
app.get('/student',(req,res) =>{
    res.send(`<h1>学生页面</h1>`);
})

//登录页面
app.post('/login',(req,res) =>{
    let loginuser = req.body;
    let {username} = loginuser;
    //读取数据库的里文件对比
    fs.readFile(`./users/${username}.json`,(err,data) => {
        if(err) {
            res.send(`<h1>用户名或密码输入错误,请重新输入!</h1>`);
            return;
        }
        //拿出JSON文件中的值
        let user = JSON.parse(data.toString());
        //如果匹配成功就设置相对应的cookie
        if(loginuser.username == user.username && loginuser.password == user.password ){
            res.cookie('username',user.username,{
                maxAge:3*60*1000,
                httpOnly:true,
            });
            res.cookie('password',user.password,{
                maxAge:3*60*1000,
                httpOnly:true,
            });
            res.send(`<h1>登录成功</h1>`);
        }else {
            res.send(`<h1>用户名或密码输入错误,请重新输入!</h1>`);
        }
    })
})
//注册页面
app.post("/register",(req,res) =>{
    console.log(req.body);
   let {username} = req.body;
   fs.writeFile(`./users/${username}.json`,JSON.stringify(req.body),(err) =>{
       if(err) {
           res.send(`<h1>注册失败</h1>`);
           return;
       }
       res.send(`<h1>注册成功</h1>`);
   })
})
//监听端口
app.listen(3001,()=>{
    console.log('server start at 3001');
})