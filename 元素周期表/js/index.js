window.onload = function () {
    //初始化所有li的值
    (function () {
        let len = 5 * 5 * 5;
        let oUl = document.getElementById('list').children[0];
        let alis = oUl.children;


        //做所有初始化的工作
        (function () {
            //通过for循环动态的创建li标签
            for (let x = 0, i = 0; x < 5; x++) {
                for (let y = 0; y < 5; y++) {
                    for (let z = 0; z < 5; z++, i++) {
                        //创建li
                        let oLi = document.createElement('li');

                        //通过自定义属性给li绑定下标
                        oLi.index = i;

                        //根据索引记录下标的位置
                        oLi.x = x;
                        oLi.y = y;
                        oLi.z = z;


                        //获取数据
                        let data = flyData[i % 3];

                        oLi.innerHTML = `
                        <b class="cover"></b>
                        <p class="title">${data.type}</p>
                        <p class="author">${data.author}</p>
                        <p class="time">${data.time}</p>
                        `

                        //确定随机的li的位置
                        let tx = Math.random() * 6000 - 3000;
                        let ty = Math.random() * 6000 - 3000;
                        let tz = Math.random() * 6000 - 3000;

                        oLi.style.transform = `translate3d(${tx}px,${ty}px,${tz}px)`

                        //将li元素渲染到页面
                        oUl.appendChild(oLi);
                    }
                }
            }

            //Grid()
            setTimeout(Grid, 0)
        })();


        // 5*5*5排列
        function Grid() {
            //确定每个li之间水平垂直以及Z轴之间的间隔
            let disX = 350,
                disY = 350,
                disZ = 800;
            //循环每一个li,确定li的位置
            for (let i = 1; i <= len; i++) {

                let oLi = alis[i];

                //通过坐标计算li的便宜量
                let x = (oLi.x - 2) * disX;
                let y = (oLi.y - 2) * disY;
                let z = (oLi.z - 2) * disZ;


                oLi.style.transform = `translate3d(${x}px, ${y}px , ${z}px)`;
            }
        }


        // //拖拽,缩放
        // (function () {
        //     let roX = 0,
        //         roY = 0,
        //         trZ = -2000;

        //     //通过事件禁止文字选中
        //     document.onselectstart = function () {
        //         return false;
        //     }

        //     //鼠标按下事件
        //     document.onmousedown = function (ev) {
        //         ev = ev || window.event;
        //         console.log(1);

        //         let lastX = ev.clientX;
        //         let lastY = ev.clientY;
        //         let x_ = 0; //存储移动的差值
        //         let y_ = 0;

        //         //处理鼠标移动
        //         document.onmousemove = function (ev) {
        //             ev = ev || window.event;
        //             console.log(2);

        //             x_ = ev.clientX - lastX;
        //             y_ = ev.clientY - lastY;

        //             //根据移动的距离确定旋转的度数
        //             roX += x_ * 0.1;
        //             roY -= y_ * 0.1;
        //             oUl.style.transform = ` translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;

        //             //重新给lastX lastY 赋值
        //             lastX = ev.clientX;
        //             lastY = ev.clientY;
        //         }

        //         //处理鼠标松开
        //         documents.onmouseup = function (ev) {
        //             //清除鼠标移动事件
        //             this.onmousemove = null;
        //             console.log(3);

        //             //计算缓冲
        //             function m() {
        //                 //通过缓冲系数来处理缓冲
        //                 x_ *= 0.9;
        //                 y_ *= 0.9;

        //                 //通过移动的距离来缺东旋转度数
        //                 roX += x_ * 0.1;
        //                 roY -= y_ * 0.1;

        //                 oUl.style.transform = ` translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;
        //                 if (Math.abs(x_) < 0.1 && Math.abs(y_) < 0.1) return

        //                 requestAnimationFrame(m)

        //             }
        //             requestAnimationFrame(m)
        //         }
        //     }


        // 拖拽,缩放
        (function () {
            // 信号量保存初始值
            let roX = 0,
                roY = 0,
                trZ = -2000;

            // 通过事件禁止文字被选中
            document.onselectstart = function () {
                return false
            }

            // 鼠标按下
            document.onmousedown = function (ev) {
                ev = ev || window.event;

                let lastX = ev.clientX,
                    lastY = ev.clientY,
                    x_ = 0,
                    y_ = 0; // 存储移动的插值


                // 鼠标移动 
                this.onmousemove = function (ev) {
                    ev = ev || window.event;

                    // ifMove = true;  // 鼠标移动了

                    x_ = ev.clientX - lastX;
                    y_ = ev.clientY - lastY;


                    // 根据位移确定旋转度数
                    roY += x_ * 0.1;
                    roX -= y_ * 0.1;

                    oUl.style.transform = ` translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;

                    // 重新赋值
                    lastX = ev.clientX;
                    lastY = ev.clientY;
                }


                // 鼠标松开
                this.onmouseup = function (ev) {
                    // 清除鼠标移动事件
                    this.onmousemove = null

                    // 计算缓冲
                    function m() {

                        // 通过缓冲系数处理缓冲距离
                        x_ *= 0.9;
                        y_ *= 0.9;

                        // 根据位移确定旋转度数
                        roY += x_ * 0.1;
                        roX -= y_ * 0.1;

                        oUl.style.transform = ` translateZ(${trZ}px) rotateX(${roX}deg) rotateY(${roY}deg)`;

                        // 如果条件满足,清楚清除定时器
                        if (Math.abs(x_) < 0.1 && Math.abs(y_) < 0.1) return

                        requestAnimationFrame(m)
                    }
                    requestAnimationFrame(m)
                }
            }
        })()
    })()
}