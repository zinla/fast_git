function factorial(num){
    if (num <= 1){
    return 1;
    } 

    else {
    return num * arguments.callee(num-1);  //arguments.callee(num-1) 是保险写法保证不会出错
    }
    // arguments.callee(num-1)  等价与 factorial(num-1)
}
for (var i =1; i < 20;i++){
    console.log(factorial(i));
}
