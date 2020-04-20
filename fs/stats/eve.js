const fs = require('fs');
fs.stat('index.txt',function (err,state) {
    // console.log(arguments)
    // console.log(state)
    //判断是不是文件
    console.log(state.isFile());
})
//
// Stats {
//     dev: 2691606309,
//         mode: 33206,
//         nlink: 1,
//         uid: 0,
//         gid: 0,
//         rdev: 0,
//         blksize: 4096,
//         ino: 5066549581201378,
//         //文件大小,字节数
//         size: 13,
//         blocks: 0,
//         atimeMs: 1587351338733.8674,
//         mtimeMs: 1587351338733.8674,
//         ctimeMs: 1587351338733.8674,
//         birthtimeMs: 1587351318740.8376,
//         // 上一次文件访问时间
//         atime: 2020-04-20T02:55:38.734Z,
//         // 文件内容修改时间
//         mtime: 2020-04-20T02:55:38.734Z,
//         // 文件状态改变时间
//         ctime: 2020-04-20T02:55:38.734Z,
//         //// 第一次创建时间
//         birthtime: 2020-04-20T02:55:18.741Z
//     }

