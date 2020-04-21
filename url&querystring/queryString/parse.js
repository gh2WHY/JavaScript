const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require('querystring')

// 创建一个服务器
http.createServer((req, res) => {
    // 将req.url转为对象
    var urlJson = url.parse(req.url)
    // 获取文件的路径
    var pathname = urlJson.pathname;
    // 获取文件的扩展名
    var extname = path.extname(pathname);
    // 获取查询字符串
    var qs = urlJson.query;
    // 将查询字符串转为对象,和url.parse()方法加true非常类似
    var queryjson = querystring.parse(qs)

    console.log(pathname);
    console.log(extname);
    console.log(qs);
    console.log(queryjson);
    res.end('');

}).listen(3000);
console.log("Server Start at 3000 port")


//http://127.0.0.1:3000/wuwei/index.html?id=123&name=wuwei#456
//打印结果
// /wuwei/index.html
//     .html
// id=123&name=wuwei
//     [Object: null prototype] { id: '123', name: 'wuwei' }
