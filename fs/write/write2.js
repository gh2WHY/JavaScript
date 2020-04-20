//引入fS模块
const fs = require('fs');
let data = '虽不能至,心向往之';
fs.appendFile('./write1.txt',data,function (err) {
    if(err) {
        console.log('数据写入失败');
    }else{
        console.log('数据写入成功');
    }
})
// 2.2  同步步写入
// 同步步写入的方式,数据是通过返回值赋值给变量
// 同步写入函数返回undefined. 所以一般异步同步写入数据不需要返回值
let data = "我就是一个普通的字符串"
fs.appendFileSync("index2.txt",data)