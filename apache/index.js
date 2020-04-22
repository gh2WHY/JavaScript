//引入http模块
const http = require('http');
//引入fs模块
const fs = require('fs');
//引入url模块
const url = require('url');
//引入path模块
const path = require('path');


//定义一个对象,根据后缀名等到文件的类型
const MIME = {
    ".html":"text/html;charset=utf8",
    ".css": "text/css",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/jif",
    ".png": "image/png",
    ".js": "application/x-javascript",
}
//创建服务器
http.createServer((req,res)=>{
    //阻止图标的请求
    if(req.url == '/favicon.ico') {
        return;
    }
    //获取请求的路径
    let pathname = url.parse(req.url).pathname;
    // console.log(pathname)

    // 通过path 模块的 extname 方法获取后缀名
    let extname = path.extname(pathname);
    // console.log(extname)

    //如果没有后缀名则说明用户访问的是文件夹
    if(!extname) {
        // 判断路径是不是已 / 结尾,如果不是 那么久重定向路由
        if(pathname.substr(-1) != '/') {
            res.writeHead(302, {"Location": pathname + "/"});
        }
        pathname = path.join(pathname,"index.html");
    }

    // 路径的处理
    // pathname = './myweb' + pathname;
    pathname = path.join("./myweb", pathname)
    console.log(pathname)
    //读取文件内容
    fs.readFile(pathname, (err,data) => {
        console.log(err)
        if(err) {
            console.log('文件读取失败')
            // res.setHeader("Content-Type","text/html;charset=utf8")
            // res.end('文件读取错误');
            return;
        }
        if(MIME.hasOwnProperty(extname)){
            res.setHeader("Content-Type",MIME[extname])
        }
        res.end(data)
    })
    // res.end('123')
}).listen(3000, () =>{
    console.log('server start at 3000 port');
});
