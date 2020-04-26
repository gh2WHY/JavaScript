const express = require('express');

const app = express();

//方式一
//除非是最后一次处理,否则请不要执行res.send()等发送指令
// 除非是最后一次处理,否则请不要忘记next形参 与next() 指令
// app.get("/", (req,res,next) => {
//     console.log("handle 1")
//     next()
// },(req,res,next) => {
//     console.log("handle 2")
//     next()
// },(req,res) => {
//     res.send("Hello wrold")
// })


//方式二
let handle1 = (req,res,next) =>{
    console.log("handle 1")
    next()
}
let handle2 = (req,res,next) =>{
    console.log("handle 2")
    next()
}
let handle3 = (req,res,next) =>{
   res.send('hello world')
}
app.get('/',[handle1,handle2,handle3])
//监听端口
app.listen(3000,()=>{
    console.log('server start at 3000 port');
})