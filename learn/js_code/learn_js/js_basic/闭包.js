function fn1() {
    let a = 20*10;
    function fn2() {
        console.log(a);
    }
    return fn2;
}
fn1();  //直接执行不会return值
const foo = fn1(); 


// 执行 fn1() 之后，会得到一个返回值。foo 代表的就是 fn2 函数


foo();