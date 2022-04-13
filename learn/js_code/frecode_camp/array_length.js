var a = ["dog", "cat", "hen"];
console.log(a.length);
a[10] = "fox";
console.log(a.length); // 101 数组的长度是比数组最大索引值多一的数

console.log(typeof(a[90])); // undefined

