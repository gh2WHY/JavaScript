// 引入模块
const express = require('express')
// 导入子应用
// const student = require("./routes/student")
// const article = require("./routes/article")


// 创建引用(主程序信用)
const app = express()


// 主应用路由
app.get("/",(req,res) => {
    res.send("首页")
})

app.get('/article',(req,res) => {
    res.send('文章首页')
})


app.get('/article/del',(req,res) => {
    res.send('删除文章')
})


app.get('/article/add',(req,res) => {
    res.send('增加文章')
})
// 监听端口
app.listen(3000 ,() => {
    console.log("Server start at 3000 port")
})