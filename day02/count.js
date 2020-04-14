const {EventEmitter} = require("events");
// 定义子类
class Emitter extends EventEmitter{};
// 创建实例
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(EventEmitter.listenerCount(myEmitter, 'event'));
// Prints: 2