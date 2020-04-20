const fs = require("fs");
fs.rename("./index.txt", '123.txt', err => {
    if(err) throw err
    console.log("done!")
})