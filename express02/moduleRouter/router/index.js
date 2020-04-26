const express = require('express');
//引入学生应用和教师应用
const student = require('./student');
const teacher = require('./teacher');

//创建路由
const router = express.Router();

router.get('/',(req,res) =>{
    res.send(`<h1>首页</h1>`)
})

//关联主应用和子应用
router.use('/student',student);
router.use('/teacher',teacher);
//导出学生应用
module.exports = router;