//  引入模块
const crypto = require("crypto")


// 查看hash 算法的加密方式
// console.log(crypto.getHashes())

// md5

// 创建一个加密对象
// const hash_md5 = crypto.createHash("md5")
// console.log(hash_md5)

//  加密内容
// let str = "我爱你";
// let data = '小说是以刻画人物形象为中心，通过完整的故事情节和环境描写来反映社会生活的文学体裁。“小说”出自《庄子·外物》。人物、情节、环境是小说的三要素。情节一般包括开端、发展、高潮、结局四部分，有的包括序幕、尾声。环境包括自然环境和社会环境。 小说按照篇幅及容量可分为长篇、中篇、短篇和微型...'
// hash_md5.update(data)

// 获取加密后的结果
// const password = hash_md5.digest("hex")
// console.log(password)
// <Buffer 4f 20 16 c6 b9 34 d5 5b d7 12 0e 5d 0e 62 cc e3>
// 4f2016c6b934d55bd7120e5d0e62cce3  16进制的32位字符

// const password = hash_md5.digest("base64")
// console.log(password)


// const password = hash_md5.digest("hex")
// console.log(password)
// 874fd0308d431cacfd22f2a4e2881de4


// sha256 加密方式
// const hash_sha256 = crypto.createHash("sha256");
//
// // let data = "无为你好啊"
// // hash_sha256.update(data)
// hash_sha256.update("无为")
// hash_sha256.update("你好啊")
//
// const password = hash_sha256.digest("hex")
// console.log(password)
// 223f7b98c496999ce8cd7474064a8a0e0b81418536d2e02232a985e1900212d2
// 223f7b98c496999ce8cd7474064a8a0e0b81418536d2e02232a985e1900212d2


// 加盐
// const hash_sha256 = crypto.createHash("md5");
//
// // 盐值
// let str = "wuwei123"
// hash_sha256.update("我爱你" + str)
//
// const password = hash_sha256.digest("hex")
// console.log(password)
// 4f2016c6b934d55bd7120e5d0e62cce3
// 81ffceb43da3feb851c1b9cb40dfe14d



// 定义秘钥
// let key = "rZY3x1SFW82Ud0SN"
//
//
// // Hmax 算法加密
// const hmax_md5 = crypto.createHmac("md5", key)
//
//
// let data = "我爱你";
// hmax_md5.update(data);
//
// let ps = hmax_md5.digest("hex")
// console.log(ps)
// 383d80fb4d6d4510990e59cbe5229396


// 双层加密
// const hash_sha256 = crypto.createHash("md5");
//
// let data = "783357f97264ec9667d1e94f76143c66"
// hash_sha256.update(data)
//
// const password = hash_sha256.digest("hex")
// console.log(password)