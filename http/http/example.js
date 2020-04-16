//引入通信模块
const http  = require('http');
//创建服务器
const server = http.createServer();
//绑定事件
server.on('request',function (request,response) {
    //request : 请求对象,包含了客户的所有信息,包括请求头,请求主体等
    //response : 响应对象,包含了服务器发送给客户的所有信息,响应头,响应主体等
    response.setHeader("Content-Type", "text/html;charset=utf-8")
    response.end('<h1>彭昱畅</h1>')
})
server.on("request", (req,res) => {
    console.log(req.method) // 打印请求方式
    console.log(req.url)
    console.log(req.headers)
})
//监听服务器
server.listen(3000,function() {
    console.log('服务器启动成功');
})