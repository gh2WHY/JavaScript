const {EventEmitter} = require("events");
// 定义子类
class Emitter extends EventEmitter{};
// 创建实例
const emitter  = new Emitter();
//设置最大的事件绑定个数
// emitter.setMaxListeners(12);
//绑定事件
emitter.on("play",foo1);
emitter.on("play",foo2);
emitter.on("play",foo3);
emitter.on("play",foo1);



function foo1() {
    console.log('我是foo1');
}
function foo2() {
    console.log('我是foo2');
}
function foo3() {
    console.log('我是foo3');
}

//触发事件
setInterval(()=> {
    emitter.emit('play');
},1000)

//设置3s之后解绑foo2
setInterval(()=> {
    emitter.off("play",foo2);
},2000);

setInterval(()=> {
    emitter.removeAllListeners("play");
},3000);

// console.log(emitter.getMaxListeners());
// console.log(emitter.listeners('play'));
// emitter.listenerCount(emitter, 'play')
// emitter.on("play", function () {
//     console.log(arguments)   // 打印结果: [Arguments] { '0': '参数1', '1': '参数2' }
// })

// 获取绑定的事件处理函数个数
console.log(EventEmit.listenerCount(emitter, 'play'))
