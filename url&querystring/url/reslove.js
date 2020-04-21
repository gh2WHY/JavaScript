//引入http模块
const http = require('http');
//引入url模块
const url = require('url');


//创建一个服务器
http.createServer((req,res)=>{
    //将req.url转为对象
    // let urlJSON = url.parse(req.url) ;
    //parse可以接受两个参数,第二个参数设置为true,会将queryString部分转化为对象
    //会更加方便我们存入数据库
    let urlJSON = url.parse(req.url,true) ;
    console.log(urlJSON);
    res.end('');
}).listen(3000);
console.log('server start at 3000');
