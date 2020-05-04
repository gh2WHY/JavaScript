const fs = require('fs');
exports.save = function (num,resultArr,callback) {
    fs.writeFile(`./data/${num}.json`,JSON.stringify(resultArr),(err) => {
        if(err) {
            callback(-1);
            return;
        }
        callback(1);
    })
}

//读取文件
exports.read = function (num,callback) {
    fs.readFile(`./data/${num}.json`,(err,data) => {
        if(err){
            callback(-1);
            return;
        }
        //读取成功,返回文件
        callback(JSON.parse(data));
    })

}