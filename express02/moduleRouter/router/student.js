const express = require('express');

//创建学生应用
const student = express();

student.get('/',(req,res) =>{
    res.send(`<h1>学生页面首页</h1>`)
})

student.get('/add',(req,res) =>{
    res.send(`<h1>添加学生页面</h1>`)
})

student.get('/del',(req,res) =>{
    res.send(`<h1>删除学生页面</h1>`)
})

//导出学生应用
module.exports = student;