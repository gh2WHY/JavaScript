//引入通信模块
const http = require('http');

let server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html;charset=utf-8")
    // res.setHeader('Content-Type','text/html ; charset =utf-8');
    res.end('<h1>彭昱畅</h1>')
})
server.listen(3000);
