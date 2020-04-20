// 1. 引入fs模块
const fs = require("fs");


// 2. 流式读取
// 2.1 创建一个可读流
let stream = fs.createReadStream("./index2.txt")

// console.log(stream)
let data = "";
// 2.2 绑定接受数据的事件
stream.on("data", function(buf){
    // console.log(2);
    // console.log(buf.toString());
    data += buf;
})


// 2.3 当数据读取完毕以后会触发end事件
stream.on("end", function(){
    console.log("数据读取完毕");
})