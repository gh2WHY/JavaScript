const express = require('express');
const fs = require('fs');

const app = express();

// 配置post请求参数获取的中间
app.use(express.urlencoded())
app.use(express.json())

//获取学员信息
app.get('/students',(req,res) =>{
    let {id} = req.query;
    res.sendFile(`${__dirname}/students/${id}.json`);
})

//增加学员信息
app.post('/students',(req,res)=>{
    let {id} = req.body;
    fs.writeFile(`./students/${id}.json`,JSON.stringify(req.body),(err) => {
        if(err) {
            res.send('增加学员信息失败');
            return;
        }
        res.send('增加学员信息成功');
    })
})

//修改学员信息
app.put('/students',(req,res) =>{
    let {id} = req.query;
    fs.writeFile(`./students/${id}.json`,JSON.stringify(req.body),(err) => {
        if(err) {
            res.send('修改学员信息失败');
            return;
        }
        res.send('修改学员信息成功');
    })
})

//删除学员信息
app.delete('/students',(req,res) =>{
    let {id} = req.query;
    fs.unlink(`./students/${id}.json`,(err) => {
        if(err) {
            res.send('删除学员信息失败');
            return;
        }
        res.send('删除学员信息成功');
    })
})
//监听端口
app.listen(3000)
console.log('server start at 3000 port');
