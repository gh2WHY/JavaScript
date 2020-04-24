const http = require("http");
const url = require("url");
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')


// 配置静态资源目录
var serve = serveStatic('public',{ 'index': ['index.html', 'index.htm'] } )

http.createServer((req,response) => {
    let {pathname} = url.parse(req.url)

    // 返回数据
    if(pathname == '/json'){
        // 通过自己的服务器向其他服务器发送数据
        // 向3000 端口的服务发送请求
        http.get("http://localhost:3000/json", (res) => {

            let chunk = ""

            res.on("data", (data) => {
                chunk += data;
            })

            res.on("end", () => {
                // console.log(chunk)
                response.end(chunk)
            })

        })
        // response.end("aa")
        return;
    }

    // 静态资源目录
    serve(req,response,finalhandler(req, response))
}).listen(3001,()=>{
    console.log("服务器启动在3001端口")
})