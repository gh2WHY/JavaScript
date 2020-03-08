/*
    Swiper构造函数
    参数:
        class_name -> 轮播图容器的类名
        options -> 配置对象
        1.选中dom结构，把所有的跟swiper有关的元素都放入到一个对象里边,方便管理
            root -> 根节点
            wrapper -> 滑块容器
            slides -> 所有的滑块
        2.处理第二个参数 -> options配置对象
        3.初始化 -> 现在已经选中了所有想选中的标签，也配置了参数对象,
            初始化 就是用已有的这些参数去控制轮播图
*/
//root[根] 根节点
function Swiper(class_name, options) {
    //this指向实例化的对象
    this.dom = {}
    //处理第二个参数 -> 配置对象options
    this.privateDate = {}

    //handleOption -> 处理配置
    handleOption.call(this, options)
    //call(this)是实例化对象
    selectDom.call( this, class_name )

    //init[初始化]函数，用来初始化轮播图[让轮播图可以动]
    init.call(this)

};

function selectDom(class_name) {
    // console.log(this)
    //获取根节点[轮播图容器]
    this.dom.root = document.querySelector(class_name)
    //获取滑块容器
    this.dom.wrapper = this.dom.root.querySelector('.swiper-wrapper')
    //获取滑块集合slides[滑块] 元素.children -> 获取他的所有子元素
    this.dom.slides = this.dom.wrapper.children
    // console.log(this.dom)
}

/*
    handleOption函数         direction[方向]
        用来配置轮播图的
    参数： 
        options -> 用户传过来的配置对象
*/
function handleOption(options) {
    // console.log('42行', this, options )
    //direction 轮播图的方向
    var {direction} = options
    //用户可能传了 可能没传 所以我们要重新赋值 horizontal[水平方向滑动]
    direction = direction ? direction : 'horizontal';
    //把参数传入到privateDate[私有数据里]
    Object.assign( this.privateDate, {
        direction: direction
    } )
    // console.log(this.privateDate)
}


/*
    初始化轮播图函数
        1.需要知道现在滑到了第几张 
          轮播图容器的宽度和高度 -> 给滑块和滑块容器设置宽度和高度
*/
function init() {
    var width = this.dom.root.offsetWidth,
        height = this.dom.root.offsetHeight;
    Object.assign(this.privateDate, {
        index: 0,
        width: width,
        height: height
    })
    // console.log(this.privateDate)
    var {wrapper, slides} = this.dom;
    //设置滑块容器的宽度
    wrapper.style.width = `${width * slides.length}px`;
    wrapper.style.height = `${height}px`;
    //给每个滑块设置宽和高 slide_item每一个滑块
    [].forEach.call(slides, function (slide_item) {
        //函数里的this默认指向window 
        slide_item.style.width = `${width}px`;
        slide_item.style.height = `${height}px`;
    })
    //给wrapper绑定拖拽
    drag.call(this, wrapper)
}

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
    //mouse_position 鼠标的坐标
    var mouse_position = {x: 0, y: 0},
    //水平方向拖动的距离
        move_x = 0,
    //竖直方向拖动的距离
        move_y = 0,
    //记录是否按下了鼠标
        is_click = false; 
    //鼠标按下
    ele.addEventListener('mousedown', function (e) {
        e.stopPropagation();
        //鼠标点下，更新坐标
        is_click = true;
        mouse_position = {x: e.clientX, y: e.clientY};
    }.bind(this))
    //鼠标滑动
    ele.addEventListener('mousemove', function (e) {
        e.stopPropagation();
        if( !is_click ) return
        move_x = e.clientX - mouse_position.x;
        move_y = e.clientY - mouse_position.y;
        //如果轮播图是水平方向我们就只需要判断move_x，并且给滑块容器设置的平移为水平方向的平移
        if( this.privateDate.direction === 'horizontal' ){
            if( Math.abs(move_x) > (this.privateDate.width / 2) ){
                console.log( '你滑动距距离已经超过了宽度的一半' )
                //给index++ 然后用index*宽度 求出移动的距离 -> 对滑块容器进行移动
            }else{

            }
        }else{//如果是竖直方向的滑动
            if( Math.abs(move_y) > (this.privateDate.height / 2) ){
                console.log( '你滑动距距离已经超过了高度的一半' )
            }
        }
        console.log(move_x, move_y);
    }.bind(this));
    //鼠标抬起
    ele.addEventListener('mouseup', function (e) {
        e.stopPropagation();
        is_click = false;
    }.bind(this));
}