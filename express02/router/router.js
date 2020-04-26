const express = require('express');

const app = express();

//一.路由匹配规则
//1. 字符串
//1.1 固定路径匹配
// app.get('/index',(req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//1.2 通配符匹配,匹配所有路径
// app.get('/*',(req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//匹配以index开头的所有路径
/*
	/index  可以匹配成功
	/index123  可以匹配成功
	/index/a/b 可以匹配成功
*/
// app.get('/index*',(req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//匹配以/index/ 开头的路径
// app.get('/index/*',(req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//1.3  ? 前面的字符或组出现0~1 次
/*
	/abce      可以匹配成功
	/ace       可以匹配成功
*/
// app.get('/ab?ce',(req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//1.4 + 前面的字符或组出现1~多 次
 /*
 	/abce      可以匹配成功
 	/abbbce    可以匹配成功
 	/ace    	  不能匹配成功
 */

// app.get('/ab+ce',(req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//1.5  * 表示任意个数的任意字符
/*
	/abc      可以匹配成功
	/ab123c    可以匹配成功
*/
// app.get("/ab*c", (req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//1.6 ()里的内容为一组
/*
	/abcd      可以匹配成功
	/ad    		可以匹配成功
	/abd    	  不能匹配成功
	/acd    	  不能匹配成功
*/
// app.get("/a(bc)?d", (req,res) => {
//     res.send(`<h2>首页</h2>`);
// })

//2.正则匹配规则
//1. 包含index的路径
/*
	/index  可以匹配
	/aindexb 可以匹配成功
	/a/index/b  可以匹配成功
*/
app.get(/index/, (req,res) => {})

// 2. 以.html后缀名结尾的路径
/*
	/index.html  可以匹配
	/index/a.html 可以匹配成功
*/
app.get(/.*\.html$/, (req,res) => {})
//监听端口
app.listen(3000,()=>{
    console.log('server start at 3000 port');
})