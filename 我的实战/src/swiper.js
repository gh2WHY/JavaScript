// swiper 构造函数 
/*swiper传入两个参数
    class_name 类名
    options 配置对象

    dom三项:
        root 根节点
        wapper 滑块容器
        slides 所有滑块
    私有对象 options 
 */
function Swiper(class_name,options) {
    this.dom = {};

    //option 配置对象处理
    this.privateDate = {};

    handleOption.call(this,options)
    SelectDom.call(this,class_name);
    init.call(this)

}

// 处理root 把所有和swiper有关的元素全部放进一个对象,方便管理
function SelectDom(class_name) { 
    // 获取根节点
    this.dom.root = document.querySelector(class_name);
    // 获取滑块容器
    this.dom.wrapper = this.dom.root.querySelector('.swiper-wrapper')
    //获取所有的滑块
    this.dom.slides = this.dom.wrapper.querySelectorAll('.swiper-slide')
    // console.log(this.dom)
}

// handleOption函数  用来处理配置对象
function handleOption(options) {
    var {direction} = options
    //用户可能传了 可能没传 所以我们要重新赋值 horizontal[水平方向滑动]
    direction = direction ? direction : 'horizontal';
    //把参数传入到privateDate[私有数据里]
    Object.assign( this.privateDate, {
        direction: direction
    } )
}

/*
    初始化轮播图函数
        1.需要知道现在滑到了第几张 
          轮播图容器的宽度和高度 -> 给滑块和滑块容器设置宽度和高度
*/
function init () {
    var width = this.dom.root.offsetWidth,
        height = this.dom.root.offsetHeight;
    //把这些值放入option 配置对象中
    Object.assign(this.privateDate,{
        index:0,
        width:width,
        height:height
    });

    //解构对象,得到dom中的wrapper和slides
    var {wrapper, slides} = this.dom;
    //给滑块容器设置宽度
    wrapper.style.width = `${width * slides.length}px`;
    wrapper.style.height = `${height}px`;
    //给每个滑块设置宽高
    [].forEach.call(slides,function(slide_item) {
        slide_item.style.width = `${width}px`;
        slide_item.style.height = `${height}px`;
    });
    drag.call(this, wrapper)
}

//拖拽函数
/*
    drap拖拽 给某个元素绑定拖拽事件
    参数: 
        ele -> 给谁绑定
    逻辑：
        1.鼠标按下需要获取一个坐标
        2.鼠标滑动的时候，保留下滑动的距离
        3.在滑动的时候判断是否应该显示下一个卡片?
            如何去判断: 1.要根据用户传进来的方向去进行一个判断
*/
function drag(ele) {
    var width = this.dom.root.offsetWidth,
        height = this.dom.root.offsetHeight;
    var mouse_position = {x:0,y:0};
    var move_x = 0,
        move_y = 0;
    //是否按下了鼠标
    var is_click = false;
    //添加时间监听
    ele.addEventListener('mousedown',function(e) {
        e.stopPropagation();
        // console.log('鼠标按下了');
        //更当前鼠标的坐标
        mouse_position = {x:e.clientX,y:e.clientY};
        // console.log(mouse_position)
        is_click = true;
    }.bind(this));

    //鼠标移动
    ele.addEventListener('mousemove',function(e) {
        e.stopPropagation();
        // console.log('鼠标移动了');
        if(!is_click) return;
        move_x += e.clientX - mouse_position.x;
        move_y += e.clientY - mouse_position.y;
        // console.log(move_x,move_y)
       if(this.privateDate.direction === 'horizontal'){
        if(Math.abs(move_x) > (this.privateDate.width / 2) ){
            //如果移动距离大于一半,则切换轮播图
            // ele.style.transform = `translate(${width}px,${height}px)`;
        }else{
            //否则,弹回原位置
        }
       }else {

       }

    }.bind(this));

    //鼠标抬起 
    ele.addEventListener('mouseup',function(e) {
        e.stopPropagation();
        // console.log('鼠标抬起了');
        is_click = false;
    }.bind(this));
}

