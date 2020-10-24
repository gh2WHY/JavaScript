function countDigitOne(n) {
  var count = 0;
  for(var i = 1; i <= n ; ++i) {
    var tmp = i;
    var count2 = 0;
    var flag = false;
    if(tmp % 10 == 1) {
      ++count;
      flag = true;
      tmp = tmp / 10;
      if(tmp > 0 && tmp % 10 == 1) {
        --count;
        tmp = tmp / 10;
      }else {
        flag = false;
      }
    }else {
      tmp = tmp / 10;
      flag = false;
    }
    while(tmp > 0) {
      if(tmp % 10 == 1) {
        if(flag) {
          ++count2;
        }
        flag = true;
        ++count;
      } else {
        flag = false;
      }
      tmp /= 10;
    }
    count -= count2
  }
  return count;
}