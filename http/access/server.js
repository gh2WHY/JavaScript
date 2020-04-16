// 1. 内置模块http
const http = require("http");

// 2. 利用createServer 创建服务器
let app = http.createServer()


// 3. 通过事件监听浏览器发送的请求
app.on('request', function(req, res){

    // 设置解决跨域的响应头
    res.setHeader("Access-Control-Allow-Origin","*")


    res.end(JSON.stringify({
        "id": 0,
        "username": "wuwei",
        "age": 18
    }))
})



// 3. 监听端口

app.listen(3000,function(){
    console.log("Server start at 3000 port")
})


