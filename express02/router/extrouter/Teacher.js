const express = require('express')

// 创建教室应用
const teacher = express();


// student路由
teacher.get("/",(req,res) => {
    res.send("teacher 应用的首页")
})
teacher.get("/getTeacher",(req,res) => {
    res.send("teacher 应用的获取教师信息")
})

//导出学生应用
module.exports = teacher