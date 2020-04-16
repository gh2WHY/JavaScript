// 1. 内置模块http
const http = require("http");

// 2. 利用createServer 创建服务器
let app = http.createServer()


// 3. 通过事件监听浏览器发送的请求
app.on('request', function(req, res){
    // 请求方式
    // console.log(req.method)
    // 请求的地址
    // console.log(req.url)
    // 请求头
    // console.log(req.headers)

    // 路由表
    if(req.url == '/index.html'){
        res.setHeader("Content-Type","text/html;charset=utf8")
        res.write(`
            <html>
                <head>
                    <link  rel="stylesheet" href="/index.css" />
                </head>
                <body>
                    <h1>我是无为</h1>
                </body>
            
            </html>
        `)
    }

    if(req.url == '/index.css'){
        res.setHeader("Content-Type","text/css;charset=utf8")
        res.write(`
            h1{
                color:red;
                border:2px solid pink;
            }
        `)
    }

    // 请求头

    res.end()
})



// 3. 监听端口

app.listen(3000,function(){
    console.log("Server start at 3000 port")
})


