function Queue() {
  this.items = []
  //下面定义队列的常用方法
  Queue.prototype.enqueue = function(el) {
    this.items.push(el);
  }
  Queue.prototype.dequeue = function() {
    return this.items.shift();
  }
  Queue.prototype.font = function() {
    return this.items[0]
  }
  Queue.prototype.isEmpty = function() {
    return this.items.length === 0
  }
  Queue.prototype.size = function() {
    return this.items.length;
  }
  Queue.prototype.toString = function() {
    let  res = '';
    for(let i = 0 ; i < this.items.length ; i++) {
      res += this.items[i] + ''
    }
    return res;
  }
}

