const http = require('http');
const server = http.createServer();

//创建请求处理函数
//第一种方式 通过回调函数的方式
// let app = http.createServer((require,response)=>{
//     require.write('hello world');
// })
// console.log(app);

//通过createServer的方式创建服务对象
let app = http.createServer();
// console.log(app)
app.on('reqeust',function(req,res) {
    console.log(123)
})

// 监听端口
function listen(){
    app.listen(3000,function(){
        console.log("Server start at 3000 port")
    })
}
listen()

app.on('listening' ,function () {
    console.log(11)
})