const fs = require("fs");
//1.删除目录
// fs.unlink("123.txt", function (err) {
//     if (err) {
//         throw err
//     } else {
//         console.log("删除成功")
//     }
// })

//2. 新增目录
// fs.mkdir("./test",function(err){
//     if (err) {
//         throw err
//     } else {
//         console.log("删除成功")
//     }
// })

//3.读取目录下的文件列表
// fs.readdir("../read",function(err,list){
//     console.log(list)
//     // list 是读取文件夹列表
// })
// // 如果文件夹存在的话,list是 一个node文件夹下所有文件以及文件夹的数组集合
// // 如果文件夹不存在就是err

//4. 删除空文件夹
fs.rmdir("../null",function(err){
    // err  报错信息
})