const express = require('express');
const path = require('path');
const app = express();

// app.get('/',function (req,res) {
//     //普通字符串
//     // res.send('首页');
//     //JSON数据
//     // res.send({"name":"why",'age':18});
//     //普通文本
//     // res.send(`<h2>普通文本</h2>`);
//     // res.status(201).send('我就是一串字符串');
// })

//sendFile()方法
// app.get('/',(req,res)=> {
//     // res.sendFile(`${__dirname}/public/index2.html`,function (err) {
//     //     // console.log(arguments);
//     //     if(err) {
//     //         res.send('抱歉哦亲!你访问的页面不存在')
//     //     }
//     //     res.send()
//     // })
//     res.sendFile(path.join(__dirname,'./public/index.html'),function (err) {
//         if(err) {
//             res.send('抱歉哦亲!你访问的页面不存在')
//         }
//         res.send()
//     })
// })

//json()方法
// app.get('/',(req,res) =>{
//     // res.json('{"name":"why","age":18}');
//     // 可以是真正的JSON数据
//     // res.json(JSON.stringify({name:"aa"}))
//
//     // 如果是对象会自动被转为JSON数据
//     res.json({name:"小明",age: 8})
// });

//响应json数据
// app.get('/',(req,res) =>{
//     res.sendFile(`${__dirname}/public/index.json`,(err) => {
//         if(err) {
//             res.send('你访问的页面不存在');
//             return;
//         }
//         res.send();
//     })
// })

// //重定向
// app.get('/user',(req,res) => {
//     if(req.query.token == 'why') {
//         res.sendFile(`${__dirname}/public/user.html`)
//     }else{
//         res.redirect('/login');
//     }
// })
//
// app.get('/login',(req,res) => {
//     res.sendFile(`${__dirname}/public/login.html`)
// })

//下载
// //下载当前目录下的test.zip文件
// app.get('/data',(req,res) => {
//     res.download('./test.zip');
// })
// app.get("/jsonp",(req,res,next) => {
// //     // console.log(1)
// //     res.jsonp({name:'why'})
// // })

//url参数
// 例如: http://localhost:3000/user?name=why
// app.get("/user", (req,res) => {
//     console.log(req.query);  // {name: why}
//     res.send(req.query)
// })

//post请求的参数
//首先引入第三方的包
// const bodyparser = require('body-parser');
//
// // 拦截所有请求
// // 配置body-parser模块
// // extended: false ,方法内部使用querystring内置模块处理请求参数格式
// // extended: true  方法内部使用第三方qs模块处理请求参数
// app.use(bodyparser.urlencoded({extended: false}))
// app.use(bodyparser.json())
//
// // 还有exprss 框架提供的处理post的内置中间件
// app.use(express.urlencoded())
// app.use(express.json())
//
//
// // 接受请求
// app.post('/add', (req,res) => {
//     // 请求参数
//     console.log(req.body)
//     res.end()
// })


//路由参数

// app.get('/users/:id',(req,res) =>{
// //     console.log(req.params)
// //     console.log(req.params.id)
// //     res.end()
// // })

//{ id: 'why' }
// why

app.get('/users/:username/:age/:sex',(req,res) =>{
    console.log(req.params);
    console.log(req.params.username);
    console.log(req.params.age);
    console.log(req.params.sex);
    res.send(`姓名:${req.params.username}   
    年龄:${req.params.age}
    性别:${req.params.sex}`)
})

// { username: 'why', age: '18', sex: '女' }
// why
// 18
// 女
app.listen(3000,()=>{
    console.log('server start at 3000 port');
})