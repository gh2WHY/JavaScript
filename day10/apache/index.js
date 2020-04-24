const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")

// 定义一个对象,根据后缀名等到文件的类型
 const MIME = {
    ".html":"text/html;charset=utf8",
     ".css": "text/css",
     ".jpg": "image/jpeg",
     ".jpeg": "image/jpeg",
     ".gif": "image/jif",
     ".png": "image/png",
     ".js": "application/x-javascript",
 }


http.createServer((req,res) => {
    // 阻止图标的请求
    if(req.url == '/favicon.ico'){
        return;
    }

    // 获取路径
    // let pathname = url.parse(req.url).pathname
    let {pathname} = url.parse(req.url)
    // console.log(pathname)

    // 通过path 模块的 extname 方法获取后缀名
    let extname  = path.extname(pathname);
    // let {ext} = path.parse(pathname);
    // console.log(extname)

    // 如果没有后缀名那么说明用户输入的url是访问文件夹
    if(!extname){

        // 判断路径是不是已 / 结尾,如果不是 那么久重定向路由
        if(pathname.substr(-1) != '/'){
            res.writeHead(302, {"Location": pathname + "/"})
        }
        pathname = path.join(pathname,"index.html")
    }
    // console.log(pathname)

    // 路径的处理
    // pathname = './myweb' + pathname;
    pathname = path.join("./myweb", pathname)
    // console.log(pathname)

    // 读取文件内容
    fs.readFile(pathname, (err, data) => {
        console.log(err)
        if(err){
            // console.log("文件读取错误")
            res.setHeader("Content-Type","text/html;charset=utf8")
            res.end('文件读取错误')
            return;
        }
        console.log(data);
        // 处理响应头
        if(MIME.hasOwnProperty(extname)){
            res.setHeader("Content-Type",MIME[extname])
        }
        res.end(data)
    })



}).listen(3000, () => {
    console.log("Server start at 3000 port")
})
