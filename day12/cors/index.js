const http = require("http");
const url = require("url");

http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html;charset=utf8")
    // res.setHeader("Access-Control-Allow-Origin","*")

    // 获取pathname
    let {pathname} = url.parse(req.url)

    // 返回数据
    if(pathname == '/json'){
        console.log(1)
        res.end(JSON.stringify({
            "name":"wuwei",
            "age": 18,
            "sex": "男"
        }))
        return;
    }


    res.end("首页")

}).listen(3000,() => {
    console.log("服务器启动在3000端口")
})