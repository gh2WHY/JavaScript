const {EventEmitter} = require("events");
// 定义子类
class emitter extends EventEmitter{};
// 创建实例
const myEmitter = new emitter();
// 只处理一次，避免无限循环。
myEmitter.once('newListener', (event, listener) => {
    if (event === 'event') {
        // 在前面插入一个新的监听器。
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});
myEmitter.on('event', () => {
    console.log('A');
});
myEmitter.emit('event');
// 打印:
//   B
//   A