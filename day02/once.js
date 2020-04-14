const {EventEmitter} = require("events")
// 定义子类
class Emitter extends EventEmitter{}
// 创建实例
const emitter  = new Emitter()
// 绑定事件
emitter.once('play',function() {
    console.log("我是play方法>_<")
})
//执行事件
emitter.emit('play');

//多次执行事件
emitter.emit('play');
emitter.emit('play');

