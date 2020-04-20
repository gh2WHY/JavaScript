
//引入fs模块
const fs = require('fs');
//创建读取流和写入流
let s1 = fs.createReadStream('./index1.txt');
let s2 = fs.createReadStream('./index2.txt');

//读入完成后,写入完成
s1.on('data',function (d) {
    s2.write(d);
})
//引入fs模块
s1.on('end',function () {
    s2.end();
    console.log("复制完成")
})