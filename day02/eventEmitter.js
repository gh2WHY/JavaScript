const {EventEmitter} = require("events")
// 定义子类
class Emitter extends EventEmitter{}
// 创建实例
const emitter  = new Emitter()
// 绑定事件
emitter.addListener("con", function() {
    console.log("我是addListener方法")
})
emitter.on("con", function() {
    console.log("我是addListener方法")
})

// 触发事件
emitter.emit('con')

// 事件可以连续触发
emitter.emit('con')
emitter.emit('con')
emitter.emit('con')