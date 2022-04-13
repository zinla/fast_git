//var a = [3.14]; //第0个元素为0

// const { func, function } = require("joi");

//var a = new Array(3.14); // RangeError: invalid array length
//create array by new
let arr = new Array();
console.log(arr);
//[ <3 empty items> ]
let arr0 = new Array(3);
console.log(arr0);
//[1,23,5]
let arr2 = new Array(1,23,5);
console.log(arr2);


//字面量创建(elements can be any type)
let arr1 = [136,'Alen',{k:1},[2],true];
console.log(arr1);

//elements can be key:value map
let arr3 = [
    {1:"alen",last_name:"andry"},
    {2:"mali",last_name:"andry"},
    {3:"google",last_name:"andry"}

];
console.log(arr3);
console.log(arr3.length);
console.log("-------------------------");
console.log(arr3[1].last_name);
console.log(arr3.join('-'));//elements between add '-'
console.log(arr3.map(x => x));


//check if array
let arr4 = [12,5];
let arr5 ={1:'x'};
console.log(Array.isArray(arr4));
console.log(Array.isArray(arr5));


//Array.from() string 迭代成[ '1', '3', '5' ]

let str = "135";
console.log(Array.from(str));//[ '1', '3', '5' ]

//Array.from() object 迭代成[ 1, 3, 5 ]

let obj ={
    0:1,
    1:3,
    2:5,
    length:3,    //length 必须写
};
console.log(Array.from(obj));


//item()
let operator = {
    add:function(n){
        return n+2;
    },
    operator:function add(n) {
        return this.add(n);
    }
};
console.log(Array.from([5,5],operator.operator,operator));

//length
let arr6 = [2,3,6,45,60];
console.log(arr6.length);

//sort
let arr7 = [
    {name:'alen',score:90},
    {name:'andry',score:80},
    {name:'mali',score:100},

]
let by_score = (a,b) =>{
    return b.score-a.score;
};
console.log(arr7.sort(by_score));  //根据成绩达到小排序

//reverse
let arr8 = [1,true,"alen"];
console.log(arr8.reverse());  //[ 'alen', true, 1 ]

//push
let arr9 = [10,15,65,{1:'alen'}];
arr9.push({0:'mali'}); //添加到元素后面
console.log(arr9);
//unshift
arr9.unshift({1:'andry'});//添加到前面
console.log(arr9);
//pop
arr9.pop(); //删除最后一个元素,原数组会改变,并返回删除的元素
console.log(arr9);
console.log(arr9.pop());
//shift
arr9.shift(); //删除地一个元素
console.log(arr9);
//splice 任意位置删除
let arr10 = [1,2,5,6,4,6,45,6];
arr10.splice(1,2,3); //(start_index,delete_count,add_new_element(optional))
console.log(arr10); //在删除开始的位置添加 3

//fill
let arr11 = [1,2,3,5,4,64,2];
arr11.fill('alen',3,5);//index 3开始到 index 小于5  （value,start,end）
console.log(arr11);
//copyWith
let arr12 = [5,2,6,4,6,3,89];
arr12.copyWithin(1,2,6);
console.log(arr12);

//forEach
let arr13 = [1,"slen",1,65,65,6];
arr13.forEach(function (item,index,array) {
    console.log(item,index,array);
})

//map
let arr14 = [5,6,4,6,1,5];
let get_item = function (item) {
    return item*2;
};
console.log('use map'+arr14.map(get_item));

//reduce
let arr15 = [2,6,9,4,65,12];
let sum = function (result,item,index,array) {
    return result + item;
}
 console.log(arr15.reduce(sum,0));  //从左到右
 //reduceRight

console.log(arr15.reduceRight(sum,0));  //从右到左


//indexof() => element index
//lastindexof()  =>//从右到左的element index

//includes  =>是否包含元素   return true or false

//find =>return 满足函数的第一个元素的值
console.log('--------------------');
let arr16 = [21,10,5,45,3,51,90,111];
let even =function(item,index,array){
    return item>21;
};
console.log(arr16.find(even)); //return 满足条件的第一个元素
console.log('fliter:'+arr16.filter(even)); //return 满足条件的所有元素 生成新数组
console.log(arr16.every(even)); //所有元素是否满足条件  return true or false
console.log(arr16.some(even));//有些元素是否满足条件 return true or false





let args= Array.from(arguments)
// console.log(args);

// let arr1 = [1,5,3,9,4];
// console.log(Array.from(arr1)[0]);  //迭代器 =>1
// console.log(Array.from(arr1));  //迭代器 =>[1,5,3,9,4]
// console.log(Array.from(arr1),a => a*10);  //迭代器

//复制数组
let arr17 = ['1','5']//仅使用与一维数组
let copyarr = [].concat(arr17)
console.log(copyarr);

//去掉重复的方法
let arr18 = ['1','1','0','77']
let new_arr18 = new Set(arr18); //类似数组的集合 没有重复的元素
console.log(Array.from(new_arr18));
