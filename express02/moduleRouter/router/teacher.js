const express = require('express');

//创建学生应用
const teacher = express();

teacher.get('/',(req,res) =>{
    res.send(`<h1>教师页面首页</h1>`)
})

teacher.get('/add',(req,res) =>{
    res.send(`<h1>添加教师页面</h1>`)
})

teacher.get('/del',(req,res) =>{
    res.send(`<h1>删除教师页面</h1>`)
})

//导出教师应用
module.exports = teacher;