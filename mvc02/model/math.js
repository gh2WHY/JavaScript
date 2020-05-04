exports.cacul = function (num) {
    let resultArr = [];
    for(let i = 0; i <= num ; i++) {
        if(num % i == 0) {
            resultArr.push(i);
        }
    }
    return resultArr;
}