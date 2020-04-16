// 1. 内置模块http
const http = require("http");



// 2. 利用createServer 创建服务器
let app = http.createServer()


// 3. 通过事件监听浏览器发送的请求
app.on('request', function(req, res){


    // 请求头
    res.setHeader("Content-Type","text/html;charset=utf8")


    // 路由表
    if(req.url == '/'){
        res.write("首页")
    }else if(req.url== '/student'){
        res.write("学生页面")
    }else if(req.url== '/news'){
        res.write("新闻页面")
    }

    res.end()
})



// 3. 监听端口

    app.listen(3001,function(){
        console.log("Server start at 3001 port")
    })



