//创建服务器模块
// const http = require('http');
//创建文件读取模块
// const fs = require('fs');
//1.异步读取文件
//1.1 异步读取本地的文件
// //创建服务器
// const server = http.createServer (function (req,res) {
//     //设置响应头
//     res.writeHead(200,{'Content-Type': 'text/html;charset=UTF-8' });
//     //读取文本文件
//     fs.readFile('./1.txt',function (err,data) {
//         //如果文件读取失败,返回错误原因
//         if(err) {
//             console.log(err);
//             return;
//         }
//         //文件读取成功,显示数据
//         res.end(data.toString());
//     })
// })

//1.2异步尝试读取外部的文件
//创建服务器
// const server = http.createServer (function (req,res) {
//     //设置响应头
//     res.writeHead(200,{'Content-Type': 'text/html;charset=UTF-8' });
//     //读取文本文件
//     fs.readFile('./public/public.txt',function (err,data) {
//         //如果文件读取失败,返回错误原因
//         if(err) {
//             console.log(err);
//             return;
//         }
//         //文件读取成功,显示数据
//         res.end(data.toString());
//     })
// })
// //监听服务器端口
// server.listen(3000);
// console.log('server start at 3000');



//2.同步读取文件
// const fs = require('fs');
// const data = fs.readFileSync('./1.txt');
//
// console.log(data);
//
// console.log(data.toString())
//2.1 使用try catch 来捕获文件读取会出现的错误
 try {
    const fs = require('fs');
    const data = fs.readFileSync('./2.txt');
     console.log(data.toString());
 }catch (e) {
     console.log('读取文件出现错误')
 }