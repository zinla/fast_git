let to_boolean = (str) =>{
    console.log(Boolean(str));

}
//false
to_boolean(NaN);
to_boolean(0);
to_boolean(null);
to_boolean(undefined);

//true

to_boolean('0');
to_boolean(11);
to_boolean([1,13]); //引用数据类型
to_boolean([]); //引用数据类型
to_boolean({}); //引用数据类型

//隐式转换为 Boolean 类型
console.log(1 == true); // 打印结果：true
console.log(0 == true); // 打印结果：false


// 显式转换为 Boolean 类型

console.log(!!3);
console.log(Boolean(12));