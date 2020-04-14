//获取元素
let audio = document.querySelector('.audio');
let songWrap = document.querySelector('.song-wrap')

//获取控件
let play = document.querySelector('.play');
// console.log(play);
let icon = play.querySelector('.iconfont')

//获取进度条部分控件
let current = document.querySelector('.current');
//进度条
let bar= document.querySelector('.bar');
//总时间
let total = document.querySelector('.total');
//进度条的圆点点
let sign = document.querySelector('.sign');
//进度条深色部分
let bgc = document.querySelector('.bgc');
//获取音量按钮
let voice = document.querySelector('.icon-V')
//获取音量进度条
let voiceBar = document.querySelector('.voiceBar')
//获取时间部分盒子

//按钮播放暂停
let click = true;
play.onclick = function() {
    if (click) {
        audio.play();
    }else {
        audio.pause();
    }
    click = !click;
    icon.classList.toggle('icon-zanting');
    icon.classList.toggle('icon-arrow-');

}
//绑定音频播放时间
audio.ontimeupdate = function(){
    //获取歌曲总时间
    let totalTime = init(this.duration);
    let currentTime = init(this.currentTime) ;
    // console.log(currentTime);
    // 根据播放的时间处理歌词
    // 获取时间匹配成功的歌词所在的元素
    let song = document.querySelector(`[data-time="${currentTime}"]`)
    //获取歌词以后给歌词添加类名
    if(song) {
        let top = song.offsetTop - 50;
        song.className = "active";
        // 获取上一个兄弟元素删除类名
        song.previousElementSibling && (song.previousElementSibling.className = "");

        //设置盒子滚动

        songWrap.scrollTo(0,top);


    }
    //获取当前时间
    let cT = this.currentTime;
    //获取总时间
    let tT = this.duration;
    //获取进度条部分盒子总宽度
    let tW = parseInt(window.getComputedStyle(bar,null).width);
    //计算比例
    let Pro =  cT / tT;
    // 计算进度条应该前进的距离
    let Width = tW * Pro;
    //移动一点点的位置
    sign.style.left = Width + 'px';
    //移动背景
    bgc.style.width = Width + 3 + 'px';
    current.innerHTML = currentTime;
    total.innerHTML = totalTime;
}

//初始化时间为我们想要的格式
function init(currentTime) {
    let time = parseInt(currentTime);
    // console.log(time);

    //计算当前的分钟
    let minutes = toTwo(parseInt(time /60));
    let second = toTwo(parseInt( time%60));

    //转化时间为XX:XX格式
    return `${minutes}:${second}`
    // console.log(`${minutes}:${second}`);
}

//转化时间为两位函数
function toTwo(num) {
    if(num < 10 ) {
        return  '0' + num;
    }else {
        return  '' + num;
    }
}

//处理音量部分
// voice.onclick = function () {
//     console.log(11)
//     // voiceBar.className ='#opacity';
//     voiceBar.classList.toggle('#opacity')
// }

//拖动进度条部分
let is_click = false;
let initX = 0;
let  move_x = 0;
//获取进度条部分盒子总宽度
let tW = parseInt(window.getComputedStyle(bar,null).width);
//拖动滚动条
sign.addEventListener('mousedown' ,function(ev)  {
    ev.stopPropagation();
    is_click = true;
    initX = ev.clientX;
    // console.log(initX)


})
bar.addEventListener('mousemove' ,function(ev)  {
    ev.stopPropagation();
    if(is_click) {
        console.log('鼠标移动了')
        move_x += ev.clientX - initX;
        console.log(move_x)
        sign.style.transform = `translateX(${move_x}px)`
    }
    initX = ev.clientX;
}.bind(sign))
bar.addEventListener('mouseup' ,function(ev)  {
    ev.stopPropagation();
    sign.style.transform = `translateX(${move_x}px)`
    is_click = false;
}.bind(sign))

