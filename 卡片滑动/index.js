
//图片下边的文字
var description = `Hello i'm a shy girl,if you like me,please take the initiative to purse me!`
//response是后端返回回来的数据
// var response = [
//     {
//         imgUrl: 'http://img0.imgtn.bdimg.com/it/u=3337934351,1458373775&fm=26&gp=0.jpg',
//         text: description
//     },
//     {
//         imgUrl: 'http://img1.imgtn.bdimg.com/it/u=1754521251,3273302936&fm=26&gp=0.jpg',
//         text: description
//     },
//     {
//         imgUrl: 'http://img5.imgtn.bdimg.com/it/u=3995075170,2723592017&fm=26&gp=0.jpg',
//         text: description
//     },
//     {
//         imgUrl: 'http://img2.imgtn.bdimg.com/it/u=3832968735,844358055&fm=26&gp=0.jpg',
//         text: description
//     },
//     {
//         imgUrl: 'http://img3.imgtn.bdimg.com/it/u=384202585,3493081268&fm=26&gp=0.jpg',
//         text: description
//     },
//     {
//         imgUrl: 'http://b-ssl.duitang.com/uploads/item/201806/21/20180621124022_lfrjg.thumb.700_0.jpg',
//         text: description
//     }
// ];
var response = [
        {
            imgUrl: 'images/1.jpg',
            text: description
        },
        {
            imgUrl: 'images/2.jpg',
            text: description
        },
        {
            imgUrl: 'images/3.jpg',
            text: description
        },
        {
            imgUrl: 'images/4.jpg',
            text: description
        },
        {
            imgUrl: 'images/5.jpg',
            text: description
        },
        {
            imgUrl: 'images/6.jpg',
            text: description
        }
    ];

//分配前三张数组和后面的等待数组
var arr_render = [],
    arr_wait = [];

//定义分配函数
function allocation(arr) {
    arr.forEach(function (item, index, ayyay) {
        if (index < 3) {
            arr_render.push(item);
        } else {
            arr_wait.push(item);
        }
    });
}
allocation(response);

//定义渲染函数
function render(data) {
    var fragment = document.createDocumentFragment();
    data.forEach(function (item, index, array) {
        var card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('style', 'width:18rem');
        card.innerHTML = `
            <img src=${item.imgUrl} class="card-img-top">
            <div class="card-body">
                <p class="card-text">${item.text}</p>
            </div>
        `;
        //添加事件监听
        var init_position = {x:0, y:0};
        var move_x = 0,
            move_y = 0;
        // console.log(finger_position,move_x,move_y)
        //手指按上
        card.addEventListener('touchstart', function (e) {
            e.stopPropagation();
            init_position = { x: e.touches[0].clientX, y: e.touches[0].clientY }
            // console.log(init_position)
        });
        //手指移动
        card.addEventListener('touchmove', function (e) {
            e.stopPropagation();
            move_x += e.touches[0].clientX - init_position.x;
            move_y += e.touches[0].clientY - init_position.y;
            move(this,move_x,move_y)
            // this.style.transform = `translate(${move_x}px,${move_y}px)`
            init_position = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        });
        //手指离开
        card.addEventListener('touchend', function (e) {
            e.stopPropagation();
            var limit_move = window.innerWidth / 2
            console.log(limit_move)
            if(Math.abs(move_x) > limit_move) {
                //删除这个盒子
                this.parentElement.removeChild(this)
                //arr=[1,2,3,4,5] 删除最后一个 然后将第二个的第一项添加进来 删除第二个的第一项
                //arr_render = [1,2,3] [2,3,4] [3,4,5] 将已近删除的添加到第二个的末尾
                //arr_wait = [4,5] [5,1] [1,2]
                var result = arr_render.shift();  //删除render的第一项
                arr_render.push(arr_wait[0]);  //将wait数组的第一项添加到render的最后一项
                arr_wait.shift();  //删除wait的第一项
                arr_wait.push(result); //将render数组删除的一项添加到wait数组
                console.log(1)
                console.log(arr_render.arr_wait)
                document.body.innerHTML = ``;
                render(arr_render);
            }else{
                //让盒子回归原位
                recover(this)
            }

        });

        //元素移动函数
        function move(ele,x,y) {
            ele.style.transform = `translate(${x}px,${y}px)`;
        }

        //元素回到原位置函数
        function recover(ele) {
            move_x = 0;
            move_y = 0;
            //给元素添加trsansition类名
            ele.classList.toggle('transition');
            //调用元素移动函数
            move(ele,move_x,move_y)
            //如果不添加定时器,则元素回到原位置是transition 类名会一直在
            setTimeout(function(){
                ele.classList.toggle('transition');
            },400);
        }
        fragment.append(card)
    });
    document.body.append(fragment)
}

render(arr_render);