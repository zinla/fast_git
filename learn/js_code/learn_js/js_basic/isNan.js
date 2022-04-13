// 返回结果为 Boolean 类型
// 任何不能被转换为数值的参数，都会让这个函数返回 true
console.log(isNaN('123')); // 返回结果：false。

console.log(isNaN('abc')); // 返回结果：true。因为 Number('abc') 的返回结果是 NaN

console.log(isNaN(null)); // 返回结果：false

console.log(isNaN(undefined)); // 返回结果：true

console.log(isNaN(NaN)); // 返回结果：true

// Boolean + 数字
console.log(true+1); //true=>1
console.log(false+1);  //false=>0


