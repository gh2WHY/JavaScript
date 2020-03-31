//拖入图片的盒子
let rigBox = document.querySelector('.right');
//最终容纳图片的盒子
let reBox = document.querySelector('.render');
//获取总共插入几张图片
let number = document.querySelector('.number');
//获取图片总的大小
let total = document.querySelector('.size');
let num = new Array();
console.log(num)
//给rigBox添加事件
rigBox.ondragover = function (ev) {
    //阻止事件冒泡
    ev.stopPropagation();
    //阻止默认事件
    ev.preventDefault();
    return false;
}

//给rigBox添加ondrop事件
rigBox.ondrop = function (ev) {
    //阻止事件冒泡
    ev.stopPropagation();
    //阻止默认事件
    ev.preventDefault();
    //获取文件信息
    let file = ev.dataTransfer.files[0];
    addpic(file);
    num.push(file)
    let size = 0;
    num.forEach(function(item) {
        size += item.size
    })
    number.innerHTML = num.length;
    total.innerHTML = (size / 1024 /1024).toFixed(2);
}

//封装加入图片函数
function addpic(file) {
    //创建读取文件的对象
    let oFiles = new FileReader();
    //获取文件的路径
    oFiles.readAsDataURL(file);
    //触发onload事件
    oFiles.onload = function () {
        let src = this.result;
        //创建图片标签
        let img = new Image();
        //设置渲染图片的URL地址
        img.src = src;
        //将图片作为contianer的子元素渲染到页面中
        reBox.appendChild(img);
    }
}