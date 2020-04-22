// // 引入express框架
// const express = require('express');
// //创建网站服务器
// const app = express();
//
// ////1.中间件的基本使用
// // //路由清单
// // app.get('/',function (req,res) {
// //     //返回数据时使用send方法
// //     res.send('首页')
// // })
// //
// // app.get('/student' ,function (req,res) {
// //     res.send('学生页面');
// // })
// //
// // app.get('/teacher',function (req,res) {
// //     res.send('教师页面');
// // })
//
//
// ////2.1 为函数的调用
// //
// // app.use('/',function (req,res,next) {
// //     console.log(111);
// //     console.log(222);
// //     // next();
// // })
// // app.use('/',function (req,res,next) {
// //     console.log(333);
// //     console.log(444);
// // })
//
// // //2.2 下一个中间件的执行
// //
// // app.use('/',function (req,res,next) {
// //     console.log(111);
// //     console.log(222);
// //     next();
// //     console.log(555);
// // })
// // app.use('/',function (req,res,next) {
// //     console.log(333);
// //     next();
// //     console.log(444);
// // })
// // app.use('/',function (req,res,next) {
// //     console.log(666);
// //     next();
// //     console.log(777);
// // })
//
// //内置中间件
// // express.json()
// app.use(express.json())
// app.post("/json", (req,res,next) => {
//     // console.log(req)
//
//     // 获取post 请求的数据
//     console.log(req.body)
//     res.send({name:"wuwei",age:18})
// })
//
//
// // 监听端口
// app.listen(3000);
// console.log("Server start at 3000 port")
//
// // 打印结果
// // 111
// // 222
// // 333
// // 666
// // 777
// // 444
// // 555

const express = require("express")
const bodyparser = require("body-parser")
const fs = require('fs')
const app = express()

// // 处理post请求表单传参方式的数据
// app.use(express.urlencoded())
// // 处理post 请求json 传参方式的数据
// app.use( express.json())
//
// app.use(function(req,res,next){
//     console.log(req.body)
//     res.send("首页")
// })

// app.use(bodyparser.urlencoded())
// app.use(bodyparser.json())
// app.post("/json", (req,res,next) => {
//     // console.log(req)
//
//     // 获取post 请求的数据
//     console.log(req.body)
//     res.send({name:"wuwei",age:18})
// })


//错误处理中间价
// app.get('/' ,function (req,res,next) {
//     // 手动抛出错误
//     throw new Error('服务器出现错误');
// })
// app.use(function(err, req,res,next){
//     res.status(500).send(err.message)
// })

// //异步
// app.get('/',function (req,res,next) {
//     fs.readFile('./index.html','utf8',(err,data) => {
//         if(err) {
//             next(err)
//         }else {
//             res.send(data);
//         }
//     })
// })
// app.use(function(err, req,res,next){
//     res.status(500).send(err.message)
// })

//错误中间件的应用
//1.路由保护
// app.use(function(req,res,next){
//     // 判断用没有登录, 登录就走后面,没登录,就提示用户登录
//     if(req.){
//         next()
//         return;
//     }
//     res.send("你还没有登录,请登录")
// })

// app.get('/',function (req,res,next) {
//     console.log(req.query)
//     if(req.query.token == 'why') {
//         res.send('登录成功 当前目录为根目录')
//     }else {
//         res.send('未登录,请先登录');
//     }
// })
//
// app.get('/student',function (req,res,next) {
//     console.log(req.query)
//     if(req.query.token == 'why') {
//         res.send('登录成功 当前目录为学生目录')
//     }else {
//         res.send('未登录,请先登录');
//     }
// })
//使用中间件
//

//网站维护公告
// app.use((req,res,next) => {
//     let hour = new Date().getHours();
//     if(22 <= hour && hour <= 24) {
//         res.send('网站正在维护中.....')
//     }
//     next();
// })

//自定义404页面
app.use(function(req,res,next){
    res.status(404).send("404, 你访问的页面不存在")
})
app.listen(3000, function(){
    console.log("Server start at 3000 port")
})
