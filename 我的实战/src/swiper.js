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
function Swiper(class_name, options) {
    this.dom = {};

    //option 配置对象处理
    this.privateDate = {};

    handleOption.call(this, options)
    SelectDom.call(this, class_name);
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
    //获取向左的箭头
    this.dom.prev = this.dom.root.querySelector('.prev');
    this.dom.next = this.dom.root.querySelector('.next');
}

// handleOption函数  用来处理配置对象
function handleOption(options) {
    var { direction } = options
    //用户可能传了 可能没传 所以我们要重新赋值 horizontal[水平方向滑动]
    direction = direction ? direction : 'horizontal';
    //把参数传入到privateDate[私有数据里]
    Object.assign(this.privateDate, {
        direction: direction
    })
}

/*
    初始化轮播图函数
        1.需要知道现在滑到了第几张 
          轮播图容器的宽度和高度 -> 给滑块和滑块容器设置宽度和高度
*/
function init() {
    var width = this.dom.root.offsetWidth,
        height = this.dom.root.offsetHeight;
    //把这些值放入option 配置对象中
    Object.assign(this.privateDate, {
        index: 0,
        width: width,
        height: height,
    });

    //解构对象,得到dom中的wrapper和slides
    var { wrapper, slides } = this.dom;
    //给滑块容器设置宽度
    wrapper.style.width = `${width * slides.length}px`;
    wrapper.style.height = `${height}px`;
    //给每个滑块设置宽高
    [].forEach.call(slides, function (slide_item) {
        slide_item.style.width = `${width}px`;
        slide_item.style.height = `${height}px`;
    });
    drag.call(this, wrapper)

    //为两个按钮绑定事件监听
    this.dom.prev ? this.dom.prev.addEventListener('click', go_or_back.bind(this)) : '';
    this.dom.next ? this.dom.next.addEventListener('click', go_or_back.bind(this)) : '';
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
    var mouse_position = { x: 0, y: 0 };
    // var move_x = 0,
    //     move_y = 0;
    //为了后面的计算需要,将move_x 和move_y 放入option中
    Object.assign(this.privateDate, {
        move_x: 0,
        move_y: 0,
    })
    //是否按下了鼠标
    var is_click = false,
        //如果next_or_not 为true 表示可以滑动到下一张
        next_or_not = false;
    //添加时间监听
    ele.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        // console.log('鼠标按下了');
        //更当前鼠标的坐标
        mouse_position = { x: e.clientX, y: e.clientY };
        // console.log(mouse_position)
        is_click = true;
    }.bind(this));

    //鼠标移动
    document.addEventListener('mousemove', function (e) {
        e.stopPropagation();
        // console.log('鼠标移动了');
        if (!is_click) return;
        this.privateDate.move_x += e.clientX - mouse_position.x;
        this.privateDate.move_y += e.clientY - mouse_position.y;
        // console.log(move_x,move_y)
        if (this.privateDate.direction === 'horizontal') {
            if (Math.abs(this.privateDate.move_x) > (this.privateDate.width * 0.3)) {
                //如果移动距离大于一半,则切换轮播图
                next_or_not = true;
                // ele.style.transform = `translate(${-width}px)`;
                move_wrapper.call(this, this.dom.wrapper);
            } else {
                //否则,弹回原位置
                next_or_not = false;
            }
            //限制移动时露出的空白区域的大小(不明白的点)
            this.privateDate.move_x = Math.min(Math.max(this.privateDate.move_x, (this.dom.slides.length - 1) * -this.privateDate.width + -this.privateDate.width * 0.15), this.privateDate.width * 0.15)
            //鼠标移动的时候滑块跟着鼠标一起走,调用wrapper函数移动
            move_wrapper.call(this, ele, 'horizontal', this.privateDate.move_x);
        } else { //竖直方向上的移动
            // move_wrapper.call(this, ele, 'horizontal', this.privateDate.move_y);
        }
        //移动结束后重新对mouse_position重新赋值
        mouse_position = { x: e.clientX, y: e.clientY };
    }.bind(this));

    //鼠标抬起 
    document.addEventListener('mouseup', function (e) {
        e.stopPropagation();
        // console.log('鼠标抬起了');
        if (!is_click) return;
        //如果next_or_not 为真,则表示可以切换到下一张
        if (next_or_not) {
            //这个判断条件还不明白
            if (this.privateDate.move_x > this.privateDate.index * (-this.privateDate.width)) {
                this.privateDate.index--
                move_dis.call(this, ele);
            } else {
                this.privateDate.index++;
                move_dis.call(this, ele);
            }
        } else {//如果next_or_not为假,则表示不可以切换
            this.privateDate.move_x = this.privateDate.index * -this.privateDate.width
            // console.log( this.privateDate.move_x )
            move_wrapper.call(this, ele, 'horizontal', this.privateDate.move_x)
        }
        is_click = false;
    }.bind(this));
}

//移动wrapper函数
function move_wrapper(ele, direc, dis) {
    if (direc == 'horizontal') {
        ele.style.transform = `translateX(${dis}px)`;
    } else {
        ele.style.transform = `translateY(${dis}px)`;
    }
}

//计算移动距离的函数
function move_dis(ele) {
    //解构width 和height
    var { width, direction } = this.privateDate;
    if (direction == 'horizontal') {//计算在水平方向上应该移动的距离
        //计算index当前的位置
        this.privateDate.index = Math.max(Math.min(this.privateDate.index, this.dom.slides.length - 1), 0)
        //计算当前应该移动的距离move_x
        this.privateDate.move_x = this.privateDate.index * (-width);
        move_wrapper(ele, direction, this.privateDate.move_x);
    } else {//计算在竖直方向上移动的距离
        //计算当前应该移动的距离move_y
        this.privateDate.move_y = this.privateDate.index * (-height);
        move_wrapper(ele, direction, this.privateDate.move_y);
    }
}


function move_in(ele){
    var {previous_btn, next_btn} = this.dom;
    ele.addEventListener('mouseenter', function (e) {
        e.stopPropagation();
    }.bind(this))
    ele.addEventListener('mouseleave', function (e) {
        e.stopPropagation();
    }.bind(this))
}function move_in(ele){
    var {previous_btn, next_btn} = this.dom;
    ele.addEventListener('mouseenter', function (e) {
        e.stopPropagation();
    }.bind(this))
    ele.addEventListener('mouseleave', function (e) {
        e.stopPropagation();
    }.bind(this))
}


//写点击按钮之后的前进或后退函数
function go_or_back(e) {
    e.stopPropagation();
    if( e.target.className.includes('next') ){
        this.privateDate.index = Math.min(  ++this.privateDate.index , this.dom.slides.length - 1 );
        if( this.privateDate.direction === 'horizontal' ){
            this.privateDate.move_x = this.privateDate.index * -this.privateDate.width ;
            move_wrapper(this.dom.wrapper, this.privateDate.direction, this.privateDate.move_x)
        }else{
            this.privateDate.move_y = this.privateDate.index * -this.privateDate.height ;
            move_wrapper(this.dom.wrapper, this.privateDate.direction, this.privateDate.move_y)
        }
    }else{
        this.privateDate.index = Math.max(  --this.privateDate.index , 0 );
        if( this.privateDate.direction === 'horizontal' ){
            this.privateDate.move_x = this.privateDate.index * -this.privateDate.width ;
            move_wrapper(this.dom.wrapper, this.privateDate.direction, this.privateDate.move_x)
        }else{
            this.privateDate.move_y = this.privateDate.index * -this.privateDate.height ;
            move_wrapper(this.dom.wrapper, this.privateDate.direction, this.privateDate.move_y)
        }
    }
}

