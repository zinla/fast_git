        // function foo(x) {
        //     return x + x;
        // }
        // var r = foo(1); // 调用foo函数
        // console.log(r);


//产生斐波那契数列的函数
        // function fib(n) {
        //     var
        //         t,
        //         a = 0,
        //         b = 1,
        //         arr = [0, 1];
        //     while (arr.length < n) {
        //         [a, b] = [b, a + b];
        //         arr.push(b);
        //     }
        //     return arr;
        // }
        // // 测试:
        // console.log(fib(5)); // [0, 1, 1, 2, 3]
        // console.log(fib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//产生斐波那契数列的函数


        // function* fib(max) {
        //     var
        //         t,
        //         a = 0,
        //         b = 1,
        //         n = 0;
        //     while (n < max) {
        //         yield a;
        //         [a, b] = [b, a + b];
        //         n ++;
        //     }
        //     return;
        // }
        // var f = fib(5);
        // f.next(); // {value: 0, done: false}
        // f.next(); // {value: 1, done: false}
        // f.next(); // {value: 1, done: false}
        // f.next(); // {value: 2, done: false}
        // f.next(); // {value: 3, done: false}
        // f.next(); // {value: undefined, done: true}  

// 产生斐波那契数列的函数
        var fib = {
            a: 0,
            b: 1,
            n: 0,
            max: 5,
            next: function () {
                var
                    r = this.a,
                    t = this.a + this.b;
                this.a = this.b;
                this.b = t;
                if (this.n < this.max) {
                    this.n ++;
                    return r;
                } else {
                    return undefined;
                }
            }
        };
        console.log(fib(5));