const express = require('express')

// 创建学生应用
const student = express();


// student路由
student.get("/",(req,res) => {
    res.send("student 应用的首页")
})
student.get("/getStudent",(req,res) => {
    res.send("student 应用的获取学员信息")
})

//导出学生应用
module.exports = student