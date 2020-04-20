//引入fs模块
const fs = require('fs');

//异步写入
// let data = "红红火火恍恍惚惚";
// fs.writeFile('./write1.txt',data,function (err) {
//     // console.log(arguments);
//     // 回调函数只接受一个参数,写入成功返回null, 写入失败返回对象
//     if(err) {
//         console.log('数据写入失败');
//     }else {
//         console.log('数据写入成功');
//     }
// })
//同步写入文件
let data = '普普通通娉娉袅袅';
try {
    fs.writeFileSync('./write2.txt',dat);
    console.log('文件写入成功');
}catch (e) {
    console.log('文件写入失败');
}
//  fs.writeFileSync('./write2.txt',data);
// console.log('文件写入成功');

