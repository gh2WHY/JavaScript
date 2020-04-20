const fs = require("fs");
// 创建读取流和写入流
let s1 = fs.createReadStream("./index1.txt");
let s2 = fs.createWriteStream("./index2.txt");

s1.pipe(s2);