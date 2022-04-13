function myLocalScope() {
    'use strict';
  
    // Only change code below this line
    var myVar ='ops';
    console.log('inside myLocalScope', myVar);
  }
myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
//  console.log('outside myLocalScope', myVar);  local变量不能在函数外面直接调用



// 局部变量和全局变量可能具有相同的名称。执行此操作时，local变量优先于global变量
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
// 局部变量和全局变量可能具有相同的名称。执行此操作时，local变量优先于global变量
var outerWear = "sweater"; 

  // Only change code above this line
  return outerWear;  //输出sweater
}

console.log(myOutfit());
//
function plusThree(num) {
    return num + 3;}
 
var answer = plusThree(5); // 8

console.log(answer);
  