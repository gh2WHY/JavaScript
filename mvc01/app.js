const express = require('express');

const app = express();
//配置模板引擎
app.set('views engine','ejs');

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/:num',(req,res) => {
    let {num} = req.params;
    let resultArr = [];
    for(let i = 0; i < num ; i++) {
        if(num % i == 0) {
            resultArr.push(i);
        }
    }
    console.log(resultArr);
    res.render('result',{
        num,
        resultArr,
    })
})
app.listen(3000,()=>{
    console.log('server start at 3000 port');
})