const express = require('express');
const controller = require('./controller/controller');
const app = express();
//配置模板引擎
app.set('views engine','ejs');

app.get('/',controller.showIndex);

app.get('/:num',controller.showResult);
app.listen(3000,()=>{
    console.log('server start at 3000 port');
})