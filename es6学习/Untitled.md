## 面向对象变成介绍

**面向过程编程：**

分析出解决问题所需要的步骤，然后把这些步骤一步一步实现，使用的时候再一各一个的调用就可以了

**面向对象编程**

把事务分解成为一个一个对象，然后由对象之间分工合作。

面向对象的特点： 封装，继承，多态。



## let的特点：

1. 变量不能重复声明
2. 块级作用域
3. 不存在变量提升
4. 不影响作用域连

## const的特点：

1. 常量声明的时候一定要赋初始值

2. 一般常量用大写

3. 常量的值不能修改

4. 块级作用域

5. 对于数组和对象的元素修改，不算做对常量的修改，不会报错

   ```js const ARR = ['1','2','3']```  ARR.push('4')这种操作不会报错

   

##  数组的解构
```js
const F4 = ['xiao','cui','yi','san']
let ['xiao','cui','yi','san'] = F4
```

## 对象的解构
```js
cosnt zhao = {
	name : 'why',
	age : 12,
	sayName: functio() {
		console.log('ewe')
	}
}

let {name,age,sayName} = zhao
```

## **模板字符串**
特点:
1. 内容中可以直接出现换行符
2. 变量拼接

## **es6简化对象写法**
```js
let name = 'why',
let sayName = function() {
	consoloe.log('我的名字是张三')
}

let obj= {
	name,
	sayName
}
```

## **箭头函数声明及特点**
使用=>来声明函数
```js
let fn = function() {
	//函数体
}
let fn = (形参a,形参b)=> {
	//函数体
}

调用函数的方法是相同的.
let result = fn(1,2)
```
特点:
1. this是静态的,this始终指向函数声明时所在作用域下的this的值
```js
function getName() {
	console.log(this.name);
}

let getName2 = () => {
	console.log(this.name);
}

//设置windows对象的name属性
wimdows.name = 'why'
const School = {
	name : 'gh'
}
//直接调用
getName(); //why
getName2();//why

//使用call方法调用
getName.call(school); //gh
getName2.call(school); //why
```
2. 不能作为构造函数实例化对象
```js
let Person = (name,age)=> {
	this.name = name;
	this.age = age;
}
//报错
let why = new Person('why',18)
```
3. 在箭头函数里不能使用arguments对象
4. 箭头函数简写
	- 省略小括号，当形参有且只有一个
	- 省略花括号，当代码提中只有一条语句的时候 return 也必须省略  
	

**箭头函数实践**
箭头函数this本身是静态的，
箭头函数适合顶多场景：适合与this无关的回调，数组方法的回调
箭头函数不适合与this有关的回调设置（DOM元素的实践回调,对象的方法）

**es6允许给形参赋初始值**
1. 形参赋初始值,具有默认值的参数,一般位置要靠后
```js
function(a,b,c=6) {
	return a+b+c
}
```
 2. 与结构赋值结合
  ```js
  	function connect(options) {
  	//每次写options很麻烦
  		let host = options.host
  	}
  	function connect({host,username,password,port}) {
  	//每次写options很麻烦
  		let host = options.host
  	}
  	connect({
  		host : 'loacalhost',
  		usrname : 'root',
  		password : "123",
  		port : 8000,
  	})
  ```

## es6引入reset参数
```js
function date() {
//结果是对象
	console.log(arguments);
}
date('杨幂','赵丽颖','李沁')

//es6
function date(...args) {
//结果是数组(可以使用数组的api)
	console.log(args);
}
date('杨幂','赵丽颖','李沁')
```
注意事项 :reset参数必须放在参数的最后

## es6扩展运算符 ...
... 能够将数组转化为逗号分隔的参数序列
```js
//声明一个数组 ...
const tfboys = ['王源','王俊凯','易烊千玺'];
//一个

//声明一个函数
function xxx() {
	console.log(arguments);
}

xxx(...tfboys) //三个实参
```
reset放在函数形参的位置
扩展运算符放在了调用函数的实参中

1. 扩展运算符的使用
```js
//数组的和并
	const kuaizi = ['王太利','肖扬'];
	const feng = ['曾毅','玲花'];
	const result = [...kuaizi,...feng];
	//结果 : 王太利,肖扬,曾毅,玲花
	
//数组的克隆
const san = ['E','G','M'];
const si = [...san]

//将伪数组转为真数组
const divs = document.querSelector('div');
//变成真正的数组
cosnt divArr = [...divs];
```

## es6中的symbol
es6引入的一种新的原始数据类型,表示独一无二的值,它是js的第七种数据类型,是一种类似于字符串的数据类型.
symbol的特点:
1. symbol的值是唯一的,用来解决命名冲突问题
2. 不能与其他数据进行运算
3. 定义的属性不能使用for...in进行遍历,但是可以使用

```js
let s = Symbol();
console.log(s,typeof s)    //smybol()   'symbol'


let s2 = Symbol ('why');
let s3 = Symbol('why');
console.log(s2 === s3)  fasle

let s4 = Symbol.for('why')
let s5 = Symbol.for('why')
console.log(s2 === s3)   //true
```
js数据类型 : USONB 
you are so niubility
u undefined
s string Symbol
n null number
b boolean

### symbol的使用场景
给对象添加属性或方法
```js
let game = {
	
}

let method = {
up : Symbol(),
down : Symbol()
}
gama.[methods.up] = function() {
	console.log('11')
}

gama.[methods.down] = function() {
	console.log('22')
}


let game = {
	name : '狼人杀',
	[Symbol(say)]() {
		console.log('say');
	}
}
```

## 迭代器
iterator 是一种借口,为不同的数据结构提供统一的访问机制,任何数据结构只要不输iterator 接口,就可以完成遍历操作.
原生具备接口的数据(可用for of 遍历)
1. Array
2. Arguments
3. set
4. Map
5. String
6. TypedArray
7. NodeList

```js
//声明一个数组
const xiyuo = ['唐僧','猪八戒','沙僧','孙悟空'];

for(let key of xiyou) {
	console.log(key) //'唐僧','猪八戒','沙僧','孙悟空'
}
for(let key in xiyou) {
	console.log(key) //0 1 2 3
}

//for of 循环键值 for in 循环键名

```
**迭代的原理:**
1. 创建一个指针对象,指向当前数据结构的其实位置
2. 第一次调用对象的next方法.指针在佛那个指向数据结构的第一个数据成员
3. 接卸来不断调用next方法,指针一直向后移动,
4. 每调用next方法,返回一个vaule和done属性对象
```js
let iterator = xiyou[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//当done为true的时候结束循环
```
### 迭代器的运用
需要自定义遍历数据的术后就要用到迭代器
```js
const obj = {
	name : '二班',
	stus : [
		'gh',
		'why',
		'fyz',
		'czh'
	],
	//for of遍历obj这个对象,每次返回的结果是stus数组的一个成员
[Symbol.iterator]() {
//索引变量
let index = 0;
let _this = this
	return {
		next : function() {
			if(index < this.stus.length) {
				let result = {value : '_this.this.stus[index]',done : false}
				//下标自增
				index++;
				return result;
			}
		}
	};
}
}
```

## 生成器(generate)
生成器本身是一个函数,es6提供的异步编程方案
异步编程  纯回调函数
```js
//声明 有星号
function * gen() {
	console.log('geneator');
	yield '两只老虎胡';
	yield '哈哈哈哈'
} 
let iterator = gen();
iterator.next();
//调用next方法才能执行

//yield语句,可以用作手动断点
可以算作函数代码的分割符
调用一次next执行第一段代码
再次调用next执行第二段代码
以此类推...

//使用for of 遍历
for(let key of gen()) {
	console.log(key) //每一次返回yield后面内容
}
```
### 生成器的函数参数
### 生成器函数的实例1
一秒钟以后输出111,2s以后输出222,3s后输出333
程序运行供需6s
```js
//出现回调地狱
setTimeout(() =>{
	console.log(111);
	setTimeout(() =>{
        console.log(222);
        setTimeout(() =>{
        	console.log(333);
		},3000)
	},3000)
},1000)

//通过生成器函数完成功能
function one() {
	setTimeout(()=>{
		console.log(111);
		iterator.next();
	},1000)
}
function two() {
	setTimeout(()=>{
		console.log(222);
		iterator.next();
	},2000)
}
function three() {
	setTimeout(()=>{
		console.log(333);
		iterator.next();
	},3000)
}

function * gen() {
	yeild one();
	yeild two();
	yeild three();
}

let iterator = gen()
iterator.next();
```

### 生成器函数的实例2
获取用户数据,订单数据,商品数据
```js
//使用定时器模拟异步行为
function getusers() {
    setTimeout(()=> {
        let data = '用户数据'
        //调用next方法,并且将数据传入
        iterator.next(data);
    })
}

function getOrder() {
    setTimeout(()=> {
        let data = '订单数据';
        iterator.next(data);
    })
}
function getGoods() {
    setTimeout(()=> {
        let data = '商品数据';
        iterator.next(data);
    })
}

function * grn() {
	let user = yeild getusers();
	console.log(user);
	let order = yeild getOrder();
	console.log(order);
	let goods = yeild getGoods)();
	console.log(goods);
}
//没办法操作数
let iterator = gen();
iterator.next();
```

## Promise
面试常问的点
解决之前回调地狱的问题,promise是一个构造函数,用来封装异步操作并可以获取器成功或失败的结果
```js
const p = new Promise((resolve,reject) => {
	//封装一个异步的操作
	setTimeout(() => {
		//得到一些数据
		let data = '用户数据';
		//调用resolve,对象的状态变为成功,就可调用then方法
		resolve(data);
		
		//调用reject
		reject('数据读取失败')
	},1000)
})
p.then((vaule) =>{
	console.log(value)
}),(error) {
	console.log(error)
}
```
### promise封装ajax请求
```js
//原生
1.创建对象
const xhr = newXMLHttpRequest();
2.初始化
xhr.open("GET",'https://api.apiopen.top/get');
3. 发送
 xhr.send()
4. xhr.onreadysatechange = function() {
	if(xhr.readyState === 4) {
		if(xhr.status >= 200 && xhr.request <= 300) {
			console.log(xhr.response)
		}else {
			console.log(xhr.status)
		}
	}
}
```

```js
	const p = new Promise((resolve,reject) => {
            const xhr = newXMLHttpRequest();
        2.初始化
        xhr.open("GET",'https://api.apiopen.top/get');
        3. 发送
         xhr.send()
        4. xhr.onreadysatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.request <= 300) {
                //成功
                resolve(xhr.response)
                }else {
                  reject('xhr.status')
                }
            }
        }
	})
	
	p.then((res) => {
		console.log(vaule)
	}),(err) => {
		console.log(err)
	}
```

### promise.prototype.then返回结果的状态
```js
const p = new Promise((resolve,reject) => {
	setTimeout(() =>{
		reslove('1111')
	},1000)
})

const result = p.then(res => {
	console.log(res);
}),err => {
	console.log(err);
}

console.log(result)
```
then方法的返回结果是Promise对象,对象的状态由回调函数的执行结果决定(result)
1. 如果回调函数中返回的结果是非 Promise 类型的属性,状态为成功,返回值为promise对象的成功值
2. 是一个Promise对象,内部的返回的状态就是then方值
3. 抛出错误,状态失败,返回是就是抛出的那个错误

**then方法可以链式调用**
then方法的回调函数中依旧可以嵌套异步任务

### promise实践(读取多个文件内容)
```js


```

## promise的catch
```js
const p = new PRomise((resolve.reject)=> {
	setTimeout(() => {
		reject('出错了')
	},1000)
})
//捕获错误 小飞老师promise
p.catch((err) {
	console.warn(err);
})
```
## es6集合介绍和api
### set
它类似于数组,但成员的值都是唯一的.
```js
let s = new Set();
let s2 = new Set(['大事','小事','坏事','小事'])
//自动去重
console.log(s2) ;  //(['大事','小事','坏事',]
```
元素个数 : s2.size
添加元素 : s2.add('喜事');
删除元素 : s2.delete('坏事');
检测元素 : s2.has('大事') //返回布尔值
清空集合 : s2.clear()
可以使用for of 遍历数组

### 常见案例
```js
let arr = [1,2,3,4,5,2,1]
//1. 数组去重
let result = [...new Set(arr)]

//2. 交集
let arr2 = [1,2,3,4];
//先对数组进行去重
let result = [...new Set(arr)].filter(item => {
	let s2 = new Set(arr2); //s2变成集合
	if(s2.has(item)) {
		return true;
	}else {
		retunr false;
	}
});

//并集
let union = [...new Set([...arr,...arr2])];

//差集
let diff = [...new Set(arr)].filter(item => !new Set(arr2).has(item))
```

## es6的map与api介绍
map数据节后,类似与对象,也是键值对的集合,但是建的范围不局限于字符串
```js
let m = new map();
//添加元素
m.set('name','why');
m.set('change',function() {
	consoloe.log('1111')
})

let key = {scholl,'ATGUIGU'};
m.set(key,['背景','上海,'深圳']);

//长度
m.size

//删除
m.deltte('name');

//获取
m.get(key);

//清空
m.clear()

//使用for of 循环
for(let key of m) {
	console.log(key)
}
```

## class类
```js
//es5语法
function Phone(brand,price) {
	this.brand = brand;
	this.price = price;
}
Phone.prototype.call = function () {
	console.log('我可以打电话')
}
let phone1 = new Phone('小米',999)
```
```js
//es6语法
class Phone{
	construct(brand,price) {
		this.brand = brand;
		this.price = price;
	}
	//方法必须使用该语法,不能使用es5的形式
	call() {
		console.log('我能打电话')
	}
}

let oneplus = new Phone('华为meta',2100);
```
### class中的静态成员
```js
//构造函数本身也是一个对象
function Phone() {

}
//属于函数对象,不属于实例对象
Phone.name = 'shouji';
Phone.change = function() {
	console.log('改变世界')
}
let phone = new Phone('小米',999);
//报错
console.log(nokia.name);
nokia.change();
```
```js
class Phone{
	static name = '手机',
	static change() {
		console.log('改变世界')
	}
}
let phone = new Phone();
console.log(phone.name);  //报错
console.lof(Phone.name); //手机

static声明的属性属于类而不属于实例
```

### es5使用构造函数实现继承
```js
function Phone(brand,price) {
	this.brand = brand;
	this.price = price;
}
Phone.prototype.call = function () {
	console.log('我可以打电话')
}

function smartphone(brand,phone,color,size) {
	//调用父级中的初始化代码
	Phone.call(this,brand,price);
	this.color = color;
	this.size = size;
}

//实现继承还需要设置原型
smartPhone.prototype = new Phone;
smartPhone.prototype.construct = smartPhone;

//声明子类的方法
smart.prototype.photo = function() {
	console.log('我可以拍照');
}

let chuizi = new smartPhone('锤子',1999,black,5.5)
```
### es6class类继承
```js
class Phone{
	construct(brand,price) {
		this.brand = brand;
		this.price = price;
	}
	//方法必须使用该语法,不能使用es5的形式
	call() {
		console.log('我能打电话')
	}
}

//声明子类
class smartPhone extends Phone{
	//子类的构造方法
	construct(brand,price,color,size) {
		//使用super关键字实现对父类方法的调用
		super(brand,price);
		this.color = color;
		this.size = size;
	}
	
	photo() {
		console.log('拍照')
	}
	
	const xiao = new Phone('小米',1999,'heise',5,5)
}
```
### es6子类对父类方法的重写
```js
class Phone{
	construct(brand,price) {
		this.brand = brand;
		this.price = price;
	}
	//方法必须使用该语法,不能使用es5的形式
	call() {
		console.log('我能打电话')
	}
}

//声明子类
class smartPhone extends Phone{
	//子类的构造方法
	construct(brand,price,color,size) {
		//使用super关键字实现对父类方法的调用
		super(brand,price);
		this.color = color;
		this.size = size;
	}
	
	photo() {
		console.log('拍照')
	}
	call() {
		console.log('我能打视频')
	}
	}
	const xiao = new Phone('小米',1999,'heise',5,5)

```
## es6中对象方法扩展
object.is 判断两个值是否完全相等
```js
console.log(Object.is(120,121))   //fasle;
console.log(Object.is(NaN,NaN))   //true
console.log(NaN===NaN)            //fasle
```
Object.assign对象的和并
```js
const obj1 = {
	name : 'why',
	age : 18,
}
cosnt obj2 = {
	sex : '女'
}
```
Object.setPrototypeOf Object.getPrototypeOf 

## es6的模块化
AMD CMD commenJS es6
优势 : 
1. 防止命名冲突
2. 代码复用
3. 高维护性

### es6模块化的语法
两个主要命令 export import
export 用于规定模块的对外接口
import 输入其他模块提供的功能

1. 安装工具  babel-cli babel-preaet-env browserify(webpack)
2. npm 安装上面的工具
3. npmx babel src/js(原文件目录) -d dist.js(目标文件) --preset=babel-preset-env

# es7新特性
## Array.prototype.includes
```js
let arr = ['西游记','红楼梦','水浒传','三国演义']
console.log(arr.inculde('西游记'));  //true
```
## **
求幂 Math.pow()

# es8新特性
## async和await
async和await两种语法结合可以让一步代码想同步代码一样

### async函数
1. async函数的返回值为promise对象
2. promise对象的结果有async函数执行的返回值决定
```js
//async函数,返回解雇是promise
	async function foo() {
	//返回字符串
		return 'up'
		//只要返回的结果不是一个promise类型的对象
		//则这个函数的返回结果都是一个成功的promise对象
		return //默认返回undefined
		//抛出错误
		//返回的结果是一个失败的promise
		throw new Error('出错了')
		//返回的结果如何是一个promise对象
		return new Promise((resolve,reject) => {
		resolve('成功的数据')
		})
	}
	const res = foo();
	console.log(res);  //值是一个promise
```

### await表达式
1. await 必须写在async函数中
2. await右侧的表达式一般为promise对象
3. await返回的是promise成功的值
4. await的promise失败了.就会抛出异常,需要用try..catch捕获处理
```js
cosnt p = new Promise((resolve,rejiect) => {
	//resolve('成功的值')
    reject('出错了')
})

asynv function main() {
	try {
        let res = await p;
	console.log(res);
    }catch(err) {
        console.log(err);
    }
}

main()
```
### 二者结合实践放ajax
```js
//发送ajax.返回promise
function sendAjax(url) {
	const p = new Promise((resolve,reject) => {
		//1.创建对象
	const xhr = new XMLHttpREquest;
	xhr.open('GET',url);
	xhr.send();
	
	xhr.onreadstatechange = function() {
		if(xhr.readysate === 0) {
			if(xhr.status >= 200 && shr.status <300) {
				//成功,掉resovle
				resolve('陈宫了')
			}esle {
				reject('失败')
			}
		}
	}
	})
}

//测试
sendAJax('fdfd')
```


# 网络学习
http和https



ddsfdsfdxv









