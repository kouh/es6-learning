"use strict";

console.log('default parameter');
var f = function (x, y = 10){
  console.log(x * y);
};

f(2,3);
f(5);



