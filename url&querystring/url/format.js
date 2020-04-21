//引入http模块
const http = require('http');
//引入url模块
const url = require('url');

const {format} = require('url');
//创建一个服务器
http.createServer((req,res)=>{

    let urlJSON = url.parse(req.url) ;
    // console.log(urlJSON);
    let str = url.format(urlJSON )
    console.log(str)
    res.end('');


}).listen(3000);
console.log('server start at 3000');

