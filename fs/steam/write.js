const fs = require("fs");

//  创建一个写入流
var stream = fs.createWriteStream("./index1.txt");

// 写入数据
stream.write("太阳当空照");
stream.write("花儿对我笑");
stream.write("小鸟说:早早早");
stream.write("你为什么背上小书包");
stream.write("我要上学校");

stream.end();     // 已流的方式写入数据必须显示的声明结束