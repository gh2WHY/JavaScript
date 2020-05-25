window.requestAnimationFrame = window.requestAnimationFrame || function (fn) {
    return setTimeout(fn, 1000 / 60);
}
window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;

let honor = ["菜徐坤", "坠机侠", "飞机小能手", "飞机大师", "鹰击长空"],
    oBox = document.querySelector(".game-area"),
    oScore = document.querySelector(".score"),
    oHardSele = document.querySelector(".hardSele"),
    oMap = document.querySelector(".game-map"),
    oBiuAll = document.querySelector(".biuall"),
    allBiu = oBiuAll.children,
    oEnd = document.querySelector(".game-end"),
    oRestart = document.querySelector(".restart"),
    oHardSeleOpt = oHardSele.querySelectorAll("button"),
    oFinalScore = document.querySelector(".finail-score span"),
    oAchievement = document.querySelector(".achievement span");
/********** 
    初始化难度选择：hardSele
***********/
function hardSele() {
    for (let i = 0, len = oHardSeleOpt.length; i < len; i++) {
        oHardSeleOpt[i].addEventListener("touchstart", function (ev) {

            console.log(1)
            ev = ev || window.event;
            startGame(i, {
                x: ev.changedTouches[0].clientX,
                y: ev.changedTouches[0].clientY
            });//i就是游戏难度  i：0~3
        })
    }
}

/********** 
    背景运动模块：MapBg
***********/
function MapBg(level) {
    oMap.style.backgroundImage = `url('../images/bg_'${level + 1}.jpg)`;
    ~~function move() {
        oMap.bgPos = oMap.bgPos || 0;
        oMap.bgPos++;
        oMap.style.backgroundPositionY = `${oMap.bgPos}px`;
        oMap.bgTimer = requestAnimationFrame(move);
    }();
}

/********** 
    重新开始模块：restart
***********/
oRestart.addEventListener("touchstart", function (ev) {
    ev = ev || window.event;
    cancelAnimationFrame(oMap.bgTimer);//停止背景运动
    oEnd.style.display = "none";//关闭结束界面
    oHardSele.style.display = "block";//打开难度选择界面
    oScore.innerText = "0";//清空显示分数
    oScore.score = 0;//初始化游戏分数
    oBiuAll.innerHTML = "";//清空游戏区所有内容
});

/********** 
      隐藏清理模块：clearMap
***********/
function clearMap() {
    oHardSele.style.display = "none";
    oScore.style.display = "block";
}

/********** 
     开始游戏模块：startGame
***********/
function startGame(level, pos) {
    clearMap();//启动隐藏清理模块
    MapBg(level);//启动 背景运动模块
    oScore.score = 0;//初始化游戏分数
    plane();
    enemy();
}


/********** 
     创建己方游戏模块：plane
***********/
function plane(level, pos) {
    let oPlaneImg = new Image();
    oPlaneImg.src = "../images/plane_0.png";//设置己方飞机的图片地址
    oPlaneImg.width = 70;
    oPlaneImg.height = 70;
    oPlaneImg.className = "plane";
    let x = pos.x - oPlaneImg.width / 2;//飞机的初始X位置
    let y = pos.y - oPlaneImg.height / 2;//飞机的初始y位置
    setTrans(oPlaneImg, x, y);//己方飞机的初始位置设置
    let xMin = 0,//限制己方飞机的基本移动空间
        xMax = oMap.clientWidth - oPlaneImg.width,
        yMin = 0,
        yMax = oMap.clientHeight - oPlaneImg.height;
    oMap.appendChild(oPlaneImg);
    oMap.addEventListener("touchmove", function (ev = window.event) {
        let left = ev.changedTouches[0].clientX - oPlaneImg.width / 2,
            top = ev.changedTouches[0].clientY - oPlaneImg.height / 2;
        left = Math.min(xMax, left);//不能超出最大限制
        left = Math.max(xMin, left);//不能小于最小值
        top = Math.min(yMax, top);//不能超出最大限制
        top = Math.max(yMin, top);//不能小于最小值
        setTrans(oPlaneImg, left, top);
    })
    file(oPlaneImg, level);//调用子弹函数，初始化开火数据
    return oPlaneImg;
}

/********** 
     创建我军子弹:fire
***********/
function fire(obj, level) {
    oBox.biuInterval = setInterval(function () {
        if (oScore.score >= 50) {
            creatBiu(true, -1);//创建子弹，位置发生偏移
            creatBiu(true, 1);
        } else {
            creatBiu();//创建普通子弹
        }
    }, [100, 200, 300, 15][level]);

    function creatBiu(toggle, dis) {
        let oBiu = new Image();
        oBiu.src = "../images/fire.png";
        oBiu.width = 30;
        oBiu.height = 30;
        oBiu.className = "biu";
        let left = setTrans(obj).translateX + obj.width / 2 - oBiu.width / 2;
        let top = setTrans(obj).translateY - 60;//子弹垂直位置的设置
        if (toggle) {
            left += oBiu.width * dis;
        }
        setTrans(oBiu, left, top);
        oBiuAll.appendChild(oBiu);

        function move() {
            if (oBiu.parentNode) {
                let top = setTrans(oBiu).translateY - 20;//20是子弹速度
                if (top < -oBiu.height) {
                    oBiuAll.removeChild(oBiu);
                } else {
                    setTrans(oBiu, undefined, top);
                    requestAnimationFrame(move);
                }
            }
        }
        setTimeout(function () {
            requestAnimationFrame(move)
        }, 50)
    }
}

/********** 
     创建敌军:enemy
***********/
function enemy(obj, level) {
    let w = oMap.clientWidth;//游戏地图的空间总宽度
    let h = oMap.clientHeight;//游戏地图的空间总高度
    let speed = [5, 6, 7, 8][level];//敌军的下落速度
    var count = 1;//计数器 每隔30s生成一个打飞机
    oBox.enemyInterval = setInterval(function () {
        count++;
        let index = count % 30 ? 1 : 0;
        let oEnemy = new Image();
        oEnemy.index = index;//根据索引类型确认兵种
        oEnemy.HP = [20, 1][oEnemy.index];//根据兵种类型设置不同的血量
        oEnemy.speed = speed * (Math.random() * 0.6 + 0.7);
        oEnemy.src = `../images/enemy_${["big", "small"][oEnemy.index]}.png`;//设置敌军飞机的图片素材
        oEnemy.className = "enemy";//设置敌军飞机的类名
        oEnemy.width = [104, 54][oEnemy.index];//敌军飞机的尺寸设置
        oEnemy.height = [80, 40][oEnemy.index];
        setTrans(oEnemy, Math.random() * (w - oEnemy.width), -oEnemy.height);//设置敌军飞机的初始位置
        oMap.appendChild(oEnemy);

        function move() {
            if (oEnemy.parentNode) {//当敌军已经加入战场
                let top = setTrans(oEnemy).translateY + oEnemy.speed;
                if (top >= h) {
                    oScore.score--;
                    oScore.innerText = oScore.score;
                    oMap.removeChild(oEnemy);
                } else {
                    setTrans(oEnemy, undefined, top);
                    //子弹碰撞检测
                    for (let i = 0, len = allBiu.length; i < allBiu.length; i++) {
                        let objBiu = allBiu[i];//遍历子弹
                        if (coll(oEnemy, objBiu)) {
                            oBiuAll.removeChild(objBiu);//碰撞成功的子弹从网页中删除
                            oEnemy.HP--;//敌军被一课子弹打中，就减少1HP
                            if (!oEnemy.HP) {//敌军HP已经在0或者以下
                                oMap.removeChild(oEnemy);//被击中的敌军移除网页
                                oScore.score += oEnemy.index ? 2 : 20;//小飞机2分，打飞机20分
                                boom(setTrans(oEnemy).translateX, setTrans(oEnemy).translateY,
                                    oEnemy.width, oEnemy.height, oEnemy.index
                                );//爆炸 爆炸位置  爆炸素材
                                return;
                            }
                        }
                    }
                    if (obj.parentNode && coll(oEnemy, obj)) {
                        boom(setTrans(oEnemy).translateX, setTrans(oEnemy).translateY, oEnemy.width, oEnemy.height, oEnemy.index)
                        boom(setTrans(obj).translateX, setTrans(obj).translateY, obj.width, obj.height, 1)
                        oMap.removeChild(oEnemy);//移除敌军
                        oMap.removeChild(obj);//移除我军
                        oEnemy = null;
                        GameOver();//结束游戏
                    }
                    requestAnimationFrame(arguments.callee);
                }
            }
        }
        requestAnimationFrame(move);
    }, [300, 250, 200, 100][level])
}

/********** 
     碰撞检测模块：coll
     obj1    敌军飞机
     obj2    我军飞机
***********/
function coll(obj1, obj2) {
    let t1 = setTrans(obj1).translateY,//敌军飞机的顶部位置
        b1 = t1 + obj1.height;//敌军飞机的底部位置
        l1 = setTrans(obj1).translateX,//敌军飞机的左部位置
        r1 = l1 + obj1.width,//敌军飞机的右部位置
        t2 = setTrans(obj2).translateY,//我军飞机的顶部位置
        b2 = t2 + obj2.height,//我军飞机的底部位置
        l2 = setTrans(obj2).translateX,//我军飞机的左部位置
        r2 = l2 + obj2.width;//我军飞机的右部位置
    return !(t2 > b1 || l2 > r1 || t1 > b2 || l1 > r2);
}


/********** 
    爆炸模块：boom
    l   敌军飞机的水平偏移量
    t   敌军飞机的垂直偏移量
    w   敌军飞机的宽度
    h   敌军飞机的高度
    i   敌军飞机的类型
***********/
function boom(l, t, w, h, i) {//爆炸参数
    let oBoom = new Image();
    oBoom, src = `../images/boom_${["big", "small"][i]}.png`;//根据敌军飞机的不同设置不同的爆炸图片
    oBoom.className = `boom${["", "2"][i]}`;
    oBoom.width = w;//爆炸尺寸与敌军尺寸保持一致
    oBoom.height = h;
    let left = l;
    let top = l;
    setTrans(oBoom, left, top);
    oMap.appendChild(oBoom);
    setTimeout(function () {
        oMap.removeChild(oBoom);
    }, 1000)
}


/********** 
     游戏结束模块：GameOver
***********/
function GameOver() {
    clearInterval(oBox.biuInterval);//清除子弹生产的定时器
    clearInterval(oBox.enemyInterval);//清除敌军生的定时器
    restart();//重新开始游戏
}

/********** 
     重新开始模块：restart；
***********/
function restart(){
    oScore.style.display = "none";
    let s = oScore.score;//得到最终的分数
    let finalHonor = honor[Math.floor(s/300)>4?4:Math.floor(s/300)];
    oEnd.style.display = "block";//开启结束界面
    oFinalScore.innerText = s;//设置最终分数
    oAchievement.innerText = finalHonor;
}

/********** 
     创建位置数据处理模块：setTrans
***********/
function setTrans(obj, x, y) {
    if (!obj.transform) {
        obj.transform = {};
    }
if (arguments.length == 1) {
    return obj.transform;
} else {
    let str = "";
    if (x) {
        obj.transform.translateX = x;
    }
    if (y) {
        obj.transform.translateY = y;
    }
    for (let key in obj.transform) {
        str += `${key}(${obj.transform[key]}px)`;
    }
    obj.style.transform = str;
}
}