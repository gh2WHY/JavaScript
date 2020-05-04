//引入数据处理部分
const math = require('../model/math');
const {save,read} = require('../model/fs');

//处理首页
exports.showIndex = (req,res) => {
    res.render('index')
}

//计算约数部分
exports.showResult = (req,res) => {
    let {num} = req.params;
    let oldTime = new Date();
    read(num,(resultArr) => {
        if(resultArr == -1) {
            resultArr = math.cacul(num);
            save(num,resultArr,(num) => {
                if(num == -1) {
                    console.log('保存失败');
                    return;
                }
                console.log('保存成功');
            })
        }
        let nowTime = new Date();
        console.log(resultArr);
        res.render('result', {
            num,
            resultArr,
            time: nowTime - oldTime,
        })
    })





}