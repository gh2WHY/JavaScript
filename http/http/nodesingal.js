const http = require('http');

let a = 0;

const server = http.createServer((req,res)=> {
    a++;
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.end(a.toString());

})

//监听端口
server.listen(3000)
console.log('服务器启动成功')