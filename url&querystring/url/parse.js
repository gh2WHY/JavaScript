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

// Url {
//     protocol: null,
//         slashes: null,
//         auth: null,
//         host: null,
//         port: null,
//         hostname: null,
//         hash: null,
//         search: null,
//         query: null,
//         pathname: '/favicon.ico',
//         path: '/favicon.ico',
//         href: '/favicon.ico'
// }


//添加第二个参数后的打印结果
/*
*   port: null,
      hostname: null,
      hash: null,
      search: '?id=123&name=wuwei',
      query: [Object: null prototype] { id: '123', name: 'wuwei' },
      pathname: '/wuwei/index.html',
      path: '/wuwei/index.html?id=123&name=wuwei',
      href: '/wuwei/index.html?id=123&name=wuwei'
    }
    Url {
      protocol: null,
      slashes: null,
      auth: null,
      host: null,
      port: null,
      hostname: null,
      hash: null,
      search: null,
      query: [Object: null prototype] {},
      pathname: '/favicon.ico',
      path: '/favicon.ico',
      href: '/favicon.ico'
    }

* */