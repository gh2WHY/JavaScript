const fs = require('fs');

//  引入压缩模块
const zlib  = require("zlib")

// 1. 创建读取流和写入流
let readstream = fs.createReadStream("./index.txt")
let writestream = fs.createWriteStream("./wuwei.txt.zip")


// 2. 不通过管道流的方式处理数据读写
// 读取数据
let data = ""
readstream.on("data", (buf) => {
    data += buf;
})


// 数据读取完毕以后触发事件
readstream.on("end",am.write( () => {

    // 在数据读取完毕以后将数据写入另一个文件中
    // 将数据写入文件
    writestredata);
    // 数据写入完毕
    writestream.end();

    // 数据写入完毕以后触发的事件
    writestream.on("finish", () => {
        console.log("数据写入完毕")
    })
})


// 3. 通过管道流处理的方式
// readstream.pipe(writestream)



// 4.可以链式管道流
readstream.pipe(zlib.createGzip()).pipe(writestream)

