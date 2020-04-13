//获取元素
let audio = document.querySelector('.audio');
let songWrap = document.querySelector('.song-wrap')

//获取控件
let play = document.querySelector('.play');
// console.log(play);
let icon = play.querySelector('.iconfont')
console.log(icon)
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
    let currentTime = init(this.currentTime) ;
    console.log(currentTime);
    // 根据播放的时间处理歌词
    // 获取时间匹配成功的歌词所在的元素
    let song = document.querySelector(`[data-time="${currentTime}"]`)
    //获取歌词以后给歌词添加类名
    if(song) {
        let top = song.offsetTop - 50;
        console.log(top);
        song.className = "active";
        // 获取上一个兄弟元素删除类名
        song.previousElementSibling && (song.previousElementSibling.className = "");

        //设置盒子滚动

        songWrap.scrollTo(0,top);
    }
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