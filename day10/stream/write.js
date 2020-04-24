// 1. 引入fs模块
const fs = require("fs");


// 2. 流式读取
// 2.1 创建一个写入流
let stream = fs.createWriteStream("./index2.txt")

// 2.2  写入数据
stream.write('aaa');


// 2.3 数据写完调用end 事件
stream.end()

// 2.4 当数据写完之后会触发finish事件
stream.on("finish", function(){
    // console.log(arguments);
    console.log("数据写入完毕")
})

// 2.5 当写入失败以后触发error事件
stream.on("error", function(err){
    console.log(arguments);
})
