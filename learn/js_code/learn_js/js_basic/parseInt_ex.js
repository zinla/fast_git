let int = (num) =>{
    let s = 10;  //s为进制数
    var x = parseInt(num,s);
    console.log(x);
}
let float = (num) =>{
    let s = 3;  //s为进制数
    var x = parseFloat(num,s);
    console.log(x);
}


int(11);
int(15.2);  //s=10时取出整数部分
float("20.1 alebksb"); //取出flot部分