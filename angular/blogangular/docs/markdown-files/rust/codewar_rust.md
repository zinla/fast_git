# Use Rust implement codewar Kata solutions

## Kata 1 (vec 删除重复的元素,返回 Unique Vec)

```rust
use std::collections::BTreeSet;
fn unique_in_order(vec: Vec<i32>) -> Vec<i32> {
            let mut bset = BTreeSet::new();
            for i in vec {
                bset.insert(i);
            }
            let mut re_vec = Vec::new();
            for item in &bset {
                re_vec.push(*item);
            }
            re_vec
}

fn unique_in_order<T>(sequence: T) -> Vec<T::Item>
    where
        T: std::iter::IntoIterator,
        T::Item: std::cmp::PartialEq + std::fmt::Debug,
    {
        let mut v: Vec<_> = sequence.into_iter().collect();
        v.dedup();
        v
    }
```

## Kata 2 (寻找 k 大元素，删除重复)

```rust
/**
 * Kata1
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型     * @return int整型
 */
struct Kata1 {}
impl Kata1 {
    fn new() -> Self {
        Kata1 {}
    }
    #[allow(non_snake_case)]
    #[allow(dead_code)]
    #[allow(unused_variables)]
    pub fn findKth(&self, a: Vec<i32>, n: i32, K: i32) -> i32 {
        // write code here
        use std::collections::BTreeSet;
        fn unique_in_order(vec: Vec<i32>) -> Vec<i32> {
            let mut bset = BTreeSet::new();
            for i in vec {
                bset.insert(i);
            }
            let mut re_vec = Vec::new();
            for item in &bset {
                re_vec.push(*item);
            }
            re_vec
        }
        let mut a_ = a.clone();
        a_ = unique_in_order(a_.clone());
        a_.sort();
        // dbg!(&a_);
        // println!("{:?}", unique_in_order(a_.clone()));
        return a_[a_.len() - K as usize];
    }
}
fn main{
    println!("{}",Kata1::findKth(&Kata1::new(),vec![1,5,14,65,2,5],6,3)); //return 5
}
```

## Kata 3 (三个数的最大乘积)

```rust
struct Solution{}
impl Solution {
    fn new() -> Self {
        Solution{}
    }
    /**
    * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
    * 最大乘积
        * @param A int整型一维数组
        * @return long长整型
    */
    pub fn solve(&self, A: Vec<i32>) -> i64 {
   let mut vec = A;
    vec.sort();
    fn contain_minus(vec: Vec<i32>) -> bool {
        let mut re = false;
        for i in vec {
            if i < 0 {
                re = true;
            }
        }
        re
    }
    if contain_minus(vec.clone()) {
        if vec[0] as i64 * vec[1] as i64 > vec[vec.len() - 2] as i64 * vec[vec.len() - 3] as i64 {
            return vec[vec.len() - 1] as i64 * vec[0] as i64 * vec[1] as i64;
        }
    }
    return vec[vec.len() - 1] as i64 * vec[vec.len() - 2] as i64 * vec[vec.len() - 3] as i64; }
}
```

## Kata 4 (排序算法的实现 Sort Algorithm in Rust)

```rust
fn bubble_sort<T>(slice: &mut [T])
where
    T: Ord,
{
    let mut swapped = true;
    while swapped {
        swapped = false;
        for i in 1..slice.len() {
            if slice[i - 1] > slice[i] {
                slice.swap(i - 1, i);
                swapped = true;
            }
        }
    }
}

fn isertion_sort<T>(slice: &mut [T])
where
    T: Ord,
{
    for unsorted in 1..slice.len() {
        let i = match slice[..unsorted].binary_search(&slice[unsorted]) {
            Ok(i) => i,
            Err(err) => err,
        };
        slice[i..=unsorted].rotate_right(1);
    }
}

fn main() {
    let mut vec1 = vec![1, 2, 30, 40, 5, 6, 7];
    bubble_sort(&mut vec1);
    assert_eq!(vec1, vec![1, 2, 5, 6, 7, 30, 40]);
    println!("buble_sort {:?}", vec1);

    let mut vec2 = vec![10, 2, 30, 40, 5, 6, 7];
    isertion_sort(&mut vec2);
    assert_eq!(vec2, vec![2, 5, 6, 7, 10, 30, 40]);
    println!("isertion_sort {:?}", vec2);
}
```

## Kata 5 (最小移动次数，每次操作 n-1 各元素加 1，最终值相等)

```rust
#[allow(dead_code)]
/**
 * 输入：nums = [1,2,3]
输出：3
解释：
只需要3次操作（注意每次操作会增加两个元素的值）：
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
*/
struct Solution {}
impl Solution {
    pub fn min_moves(nums: Vec<i128>) -> i128 {
        nums.iter().sum::<i128>() - nums.iter().min().unwrap() * nums.len() as i128
    }
}
fn main() {
    println!(
        "{}",
        Solution::min_moves(vec![11515115151, 100000000, 20000000000000000000000000])
    );
    println!("{}", Solution::min_moves(vec![1, 2, 3]));
}
```

## Kata 6 (Vec 中所有类型转化为 String)

```rust
macro_rules! vec_strs {
    (
        $($element:expr),*
    ) => {
        {
            let mut v = Vec::new();
            $(
                v.push(format!("{}", $element));
            )*
            v
        }
    };
}
fn main() {
    let s = vec_strs![1, "a", true, 3.14159f32];
    println!("{:?}", s); //["1", "a", "true", "3.14159"]
    assert_eq!(s, &["1", "a", "true", "3.14159"]);
}
```

## Kata 7 ( kmp 算法)

```rust
/**
描述
给你一个文本串 T ，一个非空模板串 S ，问 S 在 T 中出现了多少次
数据范围：1 \le len(S) \le 500000, 1 \le len(T) \le 10000001≤len(S)≤500000,1≤len(T)≤1000000
要求：空间复杂度 O(len(S))O(len(S))，时间复杂度 O(len(S)+len(T))O(len(S)+len(T))
示例1
输入：
"ababab","abababab"
复制
返回值：
2
* */
```

## Kata 8 (数字的幂 i64.pow(2 as u32))

```rust
#![allow(unused_imports)]
#![allow(unused_macros)]
#![allow(dead_code)]
#![allow(unused_variables)]
use proconio::{input, marker::*};
use std::cmp::*;
use std::collections::*;

//solution for problem A
pub mod a {
    pub fn run() {
        proconio::input! {
            a: i32, b: i32
        }
        println!("{}", 32i64.pow((a - b) as u32))
    }
}
```

## Kata 9 (判断输入的两个字符串中的 chars 是否相同，是->Yes，否->No)

```rust
#![allow(unused_imports)]
#![allow(unused_macros)]
#![allow(dead_code)]
#![allow(unused_variables)]
use proconio::{input, marker::*};
use std::cmp::*;
use std::collections::*;
//solution for problem B
pub mod b {
    pub fn run() {
        use proconio::{input, marker::*};
        input! {
            mut s: Chars,
            t: Chars,
        }
        if s.iter().zip(t.iter()).all(|(a, b)| a == b) {
            println!("Yes");
        } else {
            let mut f = false;
            for i in 0..s.len() - 1 {
                s.swap(i, i + 1);
                f |= s.iter().zip(t.iter()).all(|(a, b)| a == b);
                s.swap(i, i + 1);
            }
            if f {
                println!("Yes");
            } else {
                println!("No");
            }
        }
    }
}
```

## Kata 10 (Select Mul,把 String 分为二，parse 以后相乘，放到数组里 返回最大的 item)

```rust
/**
 * Sample Input 1
123
Sample Output 1
63
As described in Problem Statement, there are six ways to separate it:
12 and 3,
21 and 3,
13 and 2,
31 and 2,
23 and 1,
32 and 1.
The products of these pairs, in this order, are 36, 63, 26, 62, 23, 32, with 63 being the maximum.
 */
//solution for problem C
pub mod c {
    pub fn run() {
        use proconio::{input, marker::*};
        use std::collections::BTreeMap;
        input! {
            mut s: Chars,
        }
        //reverse
        fn reverse(phrase: String) -> String {
            let mut i = phrase.len();
            let mut reversed = String::new();

            while i > 0 {
                reversed.push(phrase.chars().nth(i - 1).unwrap());
                i -= 1;
            }
            reversed
        }
        let s = s.iter_mut().map(|x| x.to_string()).collect::<Vec<_>>();
        //generate bmap
        fn generate_bmap(s: Vec<String>) {
            let s_string = s.join("").to_string();
            let mut bmap: BTreeMap<String, String> = BTreeMap::new();
            for i in 1..s_string.len() {
                let mut s_string = s.clone().join("").to_string();
                let s_string_l = s_string.split_off(i);
                bmap.insert(s_string, s_string_l);
            }
            for i in 1..s_string.len() {
                let mut s_string = reverse(s.clone().join("").to_string());
                let s_string_l = s_string.split_off(i);
                bmap.insert(s_string, s_string_l);
            }
            let mut first_last_string = s.clone()[s.len() - 1].to_string();
            first_last_string.push_str(&s.clone()[0].to_owned());

            let mut middle_string = String::new();
            for i in 1..s.len() - 1 {
                middle_string.push_str(&s.clone()[i]);
            }
            bmap.insert(first_last_string, middle_string);

            let mut vec = vec![];
            for (v, k) in &bmap {
                vec.push(
                    v.to_owned().parse::<i128>().unwrap() * k.to_owned().parse::<i128>().unwrap(),
                );
            }
            vec.sort();
            println!("{:?}", vec[vec.len() - 1]);
            // println!("{:?}", bmap);
            // println!("{:?}", vec);
        }

        generate_bmap(s.clone());
    }
}
```

## Kata 11 (Online games)

```rust
//https://atcoder.jp/contests/abc221/tasks/abc221_d

mod d {
    pub fn run() {
        proconio::input! {
            n: usize,
            ab: [(u32, u32); n],
        }
        let mut m = std::collections::BTreeMap::new();
        for (a, b) in ab {
            *m.entry(a).or_insert(0) += 1;
            *m.entry(a + b).or_insert(0) -= 1;
        }
        // println!("{:?}", m);
        let mut d = vec![0; n + 1]; //if n=5,[0, 0, 0, 0, 0, 0]
                                    // println!("{:?}", &d);
        let mut p = 0;
        let mut k = 0;
        for (i, j) in m {
            d[k as usize] += i - p;
            p = i;
            k += j;
        }
        d.remove(0);
        println!(
            "{:?}",
            d.iter_mut()
                .map(|x| x.to_string())
                .collect::<Vec<_>>()
                .join(" ")
        );
    }
}
```

## Kata 12 (快速开平方根倒数算法)

```rust
#[allow(unused_macros)]
macro_rules! input {
    () => {{
        let mut string = String::new();
        std::io::stdin().read_line(&mut string).unwrap();
        string = string.to_string().trim().to_owned();
        string
    }};
}
fn main() {
    let data: f64 = input!().parse::<f64>().unwrap();
    println!("{}", fast_sqrt64(data) * fast_sqrt64(data));
    println!("{}", 1.0 / f64::sqrt(16.0 * 16.0));
}

use std::mem;

/**
 * used to compute the 1/sqrt(x*x)
 */
fn fast_sqrt64(number: f64) -> f64 {
    const MAGIC_U64: u64 = 0x5fe6ec85e7de30da;
    const THREEHALFS: f64 = 1.5;
    let x2: f64 = number * 0.5;
    let i: u64 = MAGIC_U64 - (unsafe { mem::transmute::<f64, u64>(number) } >> 1); // convert f64 to u64
    let y: f64 = unsafe { mem::transmute::<u64, f64>(i) }; // convert u64 to f64
    y * (THREEHALFS - (x2 * y * y))
}
```

## Kata 13 (生成和判断素数，prime number)

```rust
/** 生成素数*/
pub fn find_primes(n: usize) -> Vec<usize> {
    let mut result = Vec::new();
    let mut is_prime = vec![true; n + 1];
    for i in 2..=n {
        if is_prime[i] {
            result.push(i);
        }
        ((i * 2)..=n).into_iter().step_by(i).for_each(|x| {
            is_prime[x] = false;
        });
    }
    result
}
/**判断是否素数 */
pub fn is_prime(n: u64) -> bool {
        n == 2 || n % 2 > 0 && (3..=(n as f64).sqrt() as u64).step_by(2).all(|i| n % i > 0)
}
```

## Kata 14 (vec add each)

```rust
/**
 * Vec add each trait
 */
trait InIterator<Type:Copy>{
    fn each<Function:Fn(Type) -> Type>(&mut self,f:Function);
}
/**
 * each trait to Vec
 */
impl<Type:Copy> InIterator<Type> for Vec<Type>{
    fn each<Function:Fn(Type) -> Type>(&mut self,f:Function){
        let mut i = 0;
        while i < self.len(){
            self[i] = f(self[i]);
            i+= 1;
        }
    }
}

fn main(){
    let mut v:Vec<i128>= vec![1,50,65,100];
    v.each(|x| x*9999999999999999999999999999999999);
    eprintln!("{:?}",v);
}
```

## Kata 15 (生成菱形 \*图)

```rust
/**
 * Examples
A size 3 diamond:

 *
***
 *
 生成菱形 *图
 */
mod diamond {
    pub fn print(n: i32) -> Option<String> {
    if n < 0 || n % 2 == 0 {
        return None;
    }

    let n = n as usize;
    let diamond = (1..=n)
        .chain((1..n).rev())
        .step_by(2)
        .map(|i| format!("{}{}\n", " ".repeat((n - i) / 2), "*".repeat(i)))
        .collect();

    Some(diamond)
    }
}
fn main(){
    eprintln!("{}",diamond::print(3).unwrap());
}
```

## Kata 16 (找出 m 到 n 之间的 prime number 存到 vec)

```rust
/**
输入g,m,n
找出m到n之间的prime number 存到vec
vec中找出 任意两个数的差 ==g
输出这两个数Some(a,b)
*/
mod steps_in_primes{
    use std::convert::TryInto;
    pub fn step(g: i32, m: u64, n: u64) -> Option<(u64, u64)> {
    // your code
    // let mut vec:Vec<> = find_primes(n as usize);
    let mut vec:Vec<i128> = vec![];
    for i in m..=n{
        if is_prime(i as i128){
            vec.push(i as i128);
        }
    }
    // eprintln!("{:?}",vec);
    let mut re:Vec<i128> = vec![];
    for i in 0..vec.len()-1 {
        for j in i+1..vec.len()-1 {
            if vec[j] -vec[i] == g.try_into().unwrap(){
                re.push(vec[i].try_into().unwrap());
                re.push(vec[j].try_into().unwrap());
            }
        }
    }
    // eprintln!("{:?}",re);
    if re.len()<1{
        return None;
    }
    Some((re[0].try_into().unwrap(),re[1].try_into().unwrap()))
    }
    pub fn is_prime(n: i128) -> bool {
        n == 2 || n % 2 > 0 && (3..=(n as f64).sqrt() as u64).step_by(2).all(|i| n % i as i128 > 0)
    }
}

/**
输入g,m,n
找出m到n之间的prime number 存到vec
vec中找出 任意两个数的差 ==g
输出这两个数Some(a,b)
*/
mod steps_in_primes1{
    pub fn is_prime(p: u64) -> bool {
      p >= 2 &&
      (2..)
      .take_while(|q| q * q <= p)
      .all(|q| p % q != 0)
    }
    pub fn step(g: i32, m: u64, n: u64) -> Option<(u64, u64)> {
      (m..n)
      .map(|p| (p, p + g as u64))
      .filter(|&(p0, p1)| is_prime(p0) && is_prime(p1))
      .nth(0)
        }
}
```

## Kata 17 （分数相加 ，得到不可简化的分数）

```rust
/**
 * 分数相加 ，得到不可简化的分数
 * in:vec![(1, 2), (1, 3), (1, 4)]
 * 1/2 + 1/3 +1/4 = 6/12+4/12+3/12
 * out:Some((13, 12))
 *
*/
mod irreducible_sum_of_rationals{
    pub fn gcd(a: i64, b: i64) -> i64 {
        if b == 0 {
            a
        } else {
            gcd(b, a % b)
        }
    }

    pub fn sum_fracts(l: Vec<(i64, i64)>) -> Option<(i64, i64)> {
        if l.len() == 0 {
            None
        } else {
            let res = l.iter().fold((0, 1), |acc, item| {
                // dbg!(&acc,&item);
                let n = acc.0 * item.1 + acc.1 * item.0;
                // dbg!(n);
                let d = acc.1 * item.1;
                // dbg!(d);
                let g = gcd(n, d);
                // dbg!(g);
                (n / g, d / g)
            });
            // eprintln!("{}/{}",res.0,res.1); //13/12
            Some(res)
        }
    }

}
```

## Kata 18 (最大公约数)

```rust
//最大公约数
   pub fn gcd(a: i64, b: i64) -> i64 {
        if b == 0 {
            a
        } else {
            gcd(b, a % b)
        }
    }
```

## Kata 19 (最小公倍数)

```rust
//公式法求最小公倍数
pub fn lcm(a: i32,b: i32) -> i32 {
    a*b/gcd(a,b)
}
```

## Kata 20(前 n 个 prime number 的乘积)

```rust
/**
 * in:n :usize
 * out：前n个prime number的乘积
 */

mod primorial_of_a_number{
    pub fn num_primorial(n: usize) -> u64 {
        let mut vec = vec![];
        for i in 2..100{
            if is_prime(i as u64){
                vec.push(i);
            }
        }
        let mut count =0;
        let mut mul =1;
        for i in 0..vec.len(){
            mul*=vec[i];
            count += 1;
            if count==n{
                break;
            }
        }
        mul
    }
    pub fn is_prime(p: u64) -> bool {
      p >= 2 &&
      (2..)
      .take_while(|q| q * q <= p)
      .all(|q| p % q != 0)
    }
}
```

## Kata 21 (丢番图方程 , Diophantine Equation\*)

```rust
/**
 * 丢番图方程
 * Diophantine Equation
 * x2 - 4 * y2 = n
 https://www.codewars.com/kata/554f76dca89983cc400000bb/train/rust
 */
mod diophantine_equation{
    pub fn solequa(n: u64) -> Vec<(u64, u64)> {
    let mut result = vec![];
    if n % 4 == 2 { return result; } // early bailout
    let rn = (n as f64).sqrt() as u64;
    for a in 1u64..rn+1 {
        let b = n/a;
        if b*a != n || (b-a) % 4 != 0 { continue; }
        let y = (b-a) / 4;
        let x = a + 2*y;
        result.push((x,y));
    }
    result
    }
}
fn main(){
    eprintln!("{:?}",diophantine_equation::solequa(5)); //[(3, 1)]
    eprintln!("{:?}",diophantine_equation::solequa(20)); //[(6, 2)]
}
```

## Kata 22 (convet_char_vec_string_vec)

```rust
fn convet_char_vec_string_vec(vec:Vec<char>)->Vec<String> {
                    let mut v = vec![];
                    for i in vec.iter() {
                        if !i.is_ascii_whitespace(){
                        let mut s = "".to_string();
                        s.push(*i);
                        s.push_str(" ");
                        v.push(s);
                        }
                    }
                    v
}
```

## Kata 23 (assert type in rust)

```rust
pub mod rust_type_assert{
    pub fn run() {
        use std::any::Any;
        pub fn is_string(s: &dyn Any)->&str {
            if s.is::<String>() {
                return "It's a string!";
            } else {
            return "Not a string...";
            }
        }
        assert_eq!(is_string(&"aa"),"Not a string...");
        assert_eq!(is_string(&"aa".to_string()),"It's a string!");

        pub fn is_i64(s: &dyn Any)->&str {
            if s.is::<i64>() {
                return "It's a i64!";
            } else {
            return "Not a i64...";
            }
        }
        assert_eq!(is_i64(&12),"Not a i64...");
        assert_eq!(is_i64(&(12 as i64)),"It's a i64!");

    }
}
```

## Kata 24 (Casting binary float to integer 进制转换)

```rust
/**
 * 10.0 (f32) == 01000001001000000000000000000000 (binary)
 * convert_to_i32(10.0) returns 1092616192 (i32)
 */
pub mod casting_binary_float_to_integer{
    // return binary representation as i32
    use std::cell::RefCell;
    pub fn convert_to_i32(f: f32) -> i32 {
        let ff:RefCell<f32> = RefCell::new(f);
        // eprintln!("2进制：{:b}", 10);
        // eprintln!("{:?}",  ff.clone().borrow_mut().to_bits() as i32);
        // println!("8进制：{:o}", 10);
        // println!("16进制：{:x}", 10);
         ff.clone().borrow_mut().to_bits() as i32
    }
    #[cfg(test)]
    mod tests {
        use super::*;
        #[test]
        fn provided_tests() {
            assert_eq!(convert_to_i32(10.0), 1092616192);
            assert_eq!(convert_to_i32(f32::INFINITY), 0x7f800000);
            assert_eq!(convert_to_i32(1.40129846432e-44), 10);
        }
    }

}
```

## Kata 25 (Cow in Rust)

```rust
//Cow
    pub mod cow_demo{
        use std::borrow::Cow;
        pub fn run(){
            fn abs_all(input: &mut Cow<[i32]>) {
                for i in 0..input.len() {
                    let v = input[i];
                    if v < 0 {
                        input.to_mut()[i] = -v;
                    }
                }
            }
            let slice = [0, -31, 2];
            let mut input = Cow::from(&slice[..]);
            abs_all(&mut input);
            input.to_mut().push(-120);
            println!("to_mut {:?}", input);

            //use from
            let s = Cow::from("alen ");
            println!("from {:?}", s.clone()+"andry");
            println!("from {:?}", s.clone().to_string());

            //use to_owned
            use std::borrow::Borrow;
            let b = Cow::from("ops b!");
            let cow_borrow = Cow::to_owned(&b);
            println!("cow_borrow: {:?}", cow_borrow.clone());

            //use from_iter
            use std::iter::FromIterator;
            let iter = Vec::from_iter([0,5,15].iter());
            let iter1 = Vec::from_iter((0..15).into_iter());
            let iter_cow = Cow::from_iter(iter);
            let iter_cow1 = Cow::from_iter(iter1.clone());
            println!("from_iter {:?}", iter_cow);
            println!("from_iter {:?}", iter_cow1);

            let find_7 = iter1.iter().find(|&&x| x == 7).unwrap();
            println!("iter1 include 7 : {:?}", *find_7==7);
        }}
```

## Kata 26 (Cell in Rust)

```rust
//Cell
    pub mod cell_demo{
        use std::cell::Cell;
        use std::cell::RefCell;
        struct Point{x:usize, y:usize,sum:Cell<Option<usize>>}

        impl Point {
            pub fn sum(&self) -> usize {
                match self.sum.get() {
                    Some(sum) => {
                        println!("{}",sum);
                        sum
                    },
                    None => {
                        let new_sum = self.x+self.y;
                        self.sum.set(Some(new_sum));
                        println!("sum set: {:?}",new_sum);
                        new_sum
                    }
                }
            }
        }
        pub fn run() {
            let p = Point{x:8,y:16,sum:Cell::new(None)};
            println!("{}",p.sum());
            println!("{}",p.sum());
        }
    }
```

## Kata 27 (RefCell in Rust)

```rust
 //RefCell
    pub mod refcell_demo{
        use std::cell::RefCell;
        struct Point{x:usize, y:usize,sum:RefCell<Option<usize>>}
        impl Point {
            pub fn sum(&self) -> usize {
                match self.sum.take() {
                    Some(sum) => {
                        println!("{}",sum);
                        sum
                    },
                    None => {
                        let new_sum = self.x+self.y;
                        self.sum.replace(Some(new_sum));
                        println!("sum set: {:?}",new_sum);
                        new_sum
                    }
                }
            }
        }
        pub fn run() {
            let p = Point{x:8,y:16,sum:RefCell::new(None)};
            println!("{}",p.sum());
            println!("{}",p.sum());
            use std::cell::RefCell;

            let c1 = RefCell::new(5);
            let ptr = c1.as_ptr();
            println!("{:?}",ptr);

            let mut c2 = RefCell::new(5);
            *c2.get_mut() += 1;
            assert_eq!(c2, RefCell::new(6));
            println!("{:?}",c2);
            println!("before take:{:?}",c2.take());
            println!("after take:{:?}",c2.take());
            println!("after take:{:?}",c2.take());
            println!("after take:{:?}",c2.take());
            let mut cc = *c2.borrow_mut();
            cc+=0;
            println!("{:?}",cc);
        }
    }
```

## Kata 28 (impl Drop trait in Rust)

```rust
pub mod drop_demo{
        struct Person{
            name: String,
        }
        impl Drop for Person{
            fn drop(&mut self) {
                println!("drop:{}",self.name);
            }
        }
        pub fn run(){
            let _alen = Person{name: "Alen".into()};
            let _andry = Person{name: "Andry".into()};
            eprintln!("{},{}",_alen.name,_andry.name);
        }
    }
```

## Kata 29 (每 n 个位组合存到 HashSet 中,已存的值重复的话 return false)

```rust
/**
 * https://www.codewars.com/kata/60aee6ae617c26004717d257/solutions
 */
#[allow(dead_code)]
#[allow(unused_variables)]
pub mod de_bruijn_sequences{
    use std::collections::HashSet;
    pub fn de_bruijn_sequence(sequence: &str, n: usize) -> bool {
        let mut vec_sequence: Vec<u8> = sequence.bytes().collect();
        vec_sequence.extend(vec_sequence[..n - 1].to_vec());
        eprintln!("{:?}",vec_sequence);

        let mut seen: HashSet<Vec<u8>> = HashSet::new();
        for i in 0..sequence.len() {
            if !seen.insert(vec_sequence[i..(i + n)].to_vec()) {
                return false;
            }
        }
        //每n个位组合存到HashSet中,已存的值重复的话return false
        eprintln!("{:?}",seen);
        true
    }
    #[cfg(test)]
    mod tests {
    use super::*;
    #[test]
    fn sample_tests() {
        assert_eq!(de_bruijn_sequence("0011", 2), true);//01，00，11，10
        assert_eq!(de_bruijn_sequence("abcd", 2), true);
        assert_eq!(de_bruijn_sequence("0101", 2), false);
        assert_eq!(de_bruijn_sequence("11231", 2), false);
        assert_eq!(de_bruijn_sequence("aabca", 3), true);
        assert_eq!(de_bruijn_sequence("00000111011010111110011000101001", 5), true);
        assert_eq!(de_bruijn_sequence("11111000001110110011010001001010", 5), true);
        assert_eq!(de_bruijn_sequence("0011123302031321", 2), false);
        }
    }

}
```

## Kata 30 (很大数的乘积和很大数的幂)

```rust
/**
 * power function for large numbers,multiply large numbers
 * 很大数的乘积和很大数的幂
 */
#[allow(dead_code)]
#[allow(unused_variables)]
#[allow(unused_mut)]
pub mod power_function_for_large_numbers{
    pub fn power(a:String, b:String) -> String {
        let mut s = a.clone();
        for i in 0..b.parse::<i32>().unwrap()-1 {
            // println!("{}",s);
            s=mul(s.clone(),a.clone());
        }
        fn mul(a:String,aa:String)-> String {
            multiply_large_numbers(a.clone(),aa.clone())
        }
        s
    }
    pub fn multiply_large_numbers(num1:String, num2:String)->String{
        let len1 = num1.len();
        let len2 = num2.len();
        let num1_str:Vec<i32> = num1.split("")
                .filter(|s| !s.is_empty())
                .collect::<Vec<_>>().iter().map(|s| s.parse::<i32>().unwrap()).collect();
        let num2_str:Vec<i32> = num2.split("")
                .filter(|s| !s.is_empty())
                .collect::<Vec<_>>().iter().map(|s| s.parse::<i32>().unwrap()).collect();

        if len1 == 0 || len2 == 0 {
            return "0".into();
        }
        let mut  result:Vec<i32> = "0".repeat(len1+len2).split("")
                .filter(|s| !s.is_empty())
                .collect::<Vec<_>>().iter()
                .map(|s| s.parse::<i32>().unwrap()).collect();
        let mut i_n1 = 0;
        let mut i_n2 = 0;
        for i in 0..len1{
            let ii = len1-i-1;
            let mut carry = 0;
            let mut n1 = num1_str[ii];
            let mut i_n2 = 0;
            for j in 0..len2{
                let jj = len2-j-1;
                let mut n2 = num2_str[jj];
                let mut summ = n1 * n2 + result[i_n1 + i_n2] + carry;
                let carry = summ;
                let sum_i_n = i_n1+i_n2;
                result[sum_i_n] = summ % 10;
                i_n2 += 1;
            }
             if carry > 0{
                result[i_n1 + i_n2] += carry
             }
            i_n1 += 1;
        }
        let mut i:i32 = result.len() as i32 - 1;
        while i>=0 && result[i as usize] == 0{
            i -= 1
        }
        if i == -1{
            return "0".into()
        }
        let mut s:String = "".into();
        while i >= 0{
            s.push_str(&result[i as usize].to_string());
            i -= 1;
        }
        return s
    }

    #[cfg(test)]
    mod tests {
        use super::*;
        #[test]
        fn test_power() {
            assert_eq!(power(String::from("10"),String::from("7")),"10000000");
        }
    }
}
```

## Kata 31 (Merge Two Vec and Return median number)

```rust
pub mod mearge_two_vec_return_median{
    use std::convert::TryInto;
    pub fn mearge_vec<T:Clone+Ord>(a:Vec<T>,b:Vec<T>) -> T
    where
    T: std::ops::Add<Output = T>+Ord+Clone+Copy+std::ops::Div<Output = T>+std::convert::Into<T>+From<i32>,
    {
        let mut a = a.clone();
        for item in b.iter() {
            a.push(*item);
        }
        a.sort();
        let l = a.len();
        if l%2 !=0 {
        let mid = a.len()/2;
        let mid_num = a[mid];
        return mid_num;
        }else{
        let mid = a.len()/2;
        let mid_num = a[mid]+a[mid-1];
        return mid_num.into() /2.into();
        }
    }
}
```

## Kata 32 (String add split_to_vec tarit)

```rust
pub mod string_add_trait{
    trait SplitToVec{
        fn split_to_vec(self,word:String)->Vec<String>;
    }
    impl SplitToVec for String{
        fn split_to_vec(self,word:String)->Vec<String>{
            let v = self.split(&word).filter(|s|!s.is_empty()).collect::<Vec<&str>>();
            v.iter().map(|s| s.to_string()).collect::<Vec<_>>()
        }
    }
    pub fn run_string(){
        let s = String::from("name: alen andry");
        let v = s.split_to_vec(" ".into()); //["name:", "alen", "andry"]
        println!("{:?}", v);
    }
}
```

## Kata 33 (字符串中字符的出现次数统计)

```rust
// code war problems url :https://www.codewars.com/kata/57a6633153ba33189e000074/train/rust
// Example:
// ordered_count("abracadabra") == vec![('a', 5), ('b', 2), ('r', 2), ('c', 1), ('d', 1)]
#[allow(dead_code)]
#[allow(unused_variables)]
#[allow(unused_mut)]
use std::collections::BTreeMap;
fn ordered_count(sip: &str) -> Vec<(char, i32)> {
    let sip = sip.to_owned();
    let set_sip = sip.clone();
    let mut arr_sip: Vec<char> = set_sip.chars().collect();
    arr_sip.sort();
    arr_sip.reverse();
    // println!("{:?}", arr_sip);
    let mut bmap = BTreeMap::new();
    for x in arr_sip {
        bmap.insert(x, count_x_in_sip(&sip, x));
    }
    // println!("{:?}", bmap);
    fn count_x_in_sip(sip: &str, target: char) -> i32 {
        let mut c: i32 = 0;
        for x in sip.chars() {
            if target == x {
                c += 1;
            }
        }
        return c;
    }
    // bmap to tuple vec
    fn convert_bmap_to_vec(bmap: BTreeMap<char, i32>) -> Vec<(char, i32)> {
        let mut vec = vec![];
        for (v, k) in &bmap {
            vec.push((v.to_owned(), k.to_owned()));
        }
        return vec;
    }
    return convert_bmap_to_vec(bmap);
}
```

## Kata 34 (find most common element 找出出现次数最多的元素)

```rust
fn main() {
    /*{"a": 2, "b": 3, "m": 1, "s": 3}
    common item val :"b"
    common item index :1
    common item val :"s"
    common item index :3
    */
    let str = "aabbbssms";
    fn find_most_common(str: &str) -> [(&str, i32); 1] {
        let mut bmap = BTreeMap::new();
        let str_vec = str.split("").filter(|s| !s.is_empty()).collect::<Vec<_>>();
        for i in 0..str_vec.len() {
            if !bmap.contains_key(str_vec[i]) {
                bmap.insert(str_vec[i], 1);
            } else {
                let mut count = bmap
                    .get(str_vec[i])
                    .unwrap()
                    .to_string()
                    .parse::<i32>()
                    .unwrap();
                count += 1;
                bmap.insert(str_vec[i], count);
            }
        }
        fn find_max<I>(iter: I) -> Option<I::Item>
        where
            I: Iterator,
            I::Item: Ord,
        {
            iter.reduce(|a, b| if a >= b { a } else { b })
        }
        println!("{:?}", bmap);
        // println!("{:?}", bmap.keys());
        // println!("{:?}", bmap.values());
        for (index, item) in bmap.values().enumerate() {
            if item == find_max(bmap.values()).unwrap() {
                let vec: Vec<&str> = bmap.keys().cloned().collect();
                println!("common item val :{:?}", vec[index]);
                println!("common item index :{:?}", index);
            }
        }
        // println!("{:?}", find_max(bmap.values()).unwrap());
        return [("", find_max(bmap.values()).unwrap().to_owned())];
    }
    find_most_common(str);
}
```

## Kata 35 (Sort float Vec 从小到大 排序)

```rust
fn main() {
    //sort 从小到大 排序
    let mut vec = vec![100.1, 1.15, 5.5, 1.123, 2.0];
    vec.sort_by(|a, b| a.partial_cmp(b).unwrap());
    println!("{:?}", vec);
    assert_eq!(vec, vec![1.123, 1.15, 2.0, 5.5, 100.1]);
}
```

## Kata 36 (slice String, use input!() read string)

```rust
#[allow(unused_variables)]
        fn slice_string(in_string: String, start: i32, end: i32) -> String {
            let mut s = Vec::new();
            let in_string_vec = in_string
                .split("")
                .filter(|s| !s.is_empty())
                .collect::<Vec<_>>();
            if start < 0 && end > in_string_vec.len() as i32 {
                return "out of range".to_owned();
            } else {
                for i in start..end {
                    s.push(in_string_vec[i as usize]);
                }
            }
            return s.join("").to_string();
        }
```

## 自己定义的 input!() (快速 IO 输入值)

```rust
#[allow(unused_macros)]
macro_rules! input {
    () => {{
        let mut string = String::new();
        std::io::stdin().read_line(&mut string).unwrap();
        string
    }};
}
fn main() {
    let s = input!();
    println!("{:?}", s); //"alen andry\n"
    assert_eq!("alen andry\n".to_string(), s);
}
```

## Kata 37 (输出 String 的全排序)

```rust
  // input '123' 输出string的全排序
  // ["1", "12", "123", "2", "23", "3"]
pub mod c {
    pub fn run() {
        use proconio::{input, marker::*};
        input! {
            mut s: Chars,
        }
        let s = s.iter_mut().map(|x| x.to_string()).collect::<Vec<_>>();
        // println!("{:?}", s);
        #[allow(unused_variables)]
        fn slice_string(in_string: String, start: i32, end: i32) -> String {
            let mut s = Vec::new();
            let in_string_vec = in_string
                .split("")
                .filter(|s| !s.is_empty())
                .collect::<Vec<_>>();
            if start < 0 && end > in_string_vec.len() as i32 {
                return "out of range".to_owned();
            } else {
                for i in start..end {
                    s.push(in_string_vec[i as usize]);
                }
            }
            return s.join("").to_string();
        }
        // let some_string = slice_string(s_string, 0, 3);
        // println!("{:?}", some_string);
        let s_string = s.join("").to_string();
        let mut out_vec = Vec::new();
        for i in 0..s.len() + 1 {
            for j in i + 1..s.len() + 1 {
                out_vec.push(slice_string(s_string.clone(), i as i32, j as i32));
            }
        }
        println!("{:?}", out_vec);
        // input '123' 输出string的全排序
        // ["1", "12", "123", "2", "23", "3"]
    }
}

fn main() {
    c::run();
}
```

## Kata 38 (各位相加到小于 9 时输出合)

```rust
/*
各位相加到小于9 时输出
imput 15 ->6
imput 19 ->1
imput 238 ->4
*/

pub mod c {
    pub fn run() {
        use proconio::{input, marker::*};
        input! {
            mut s: Chars,
        }
        let s = s
            .iter_mut()
            .map(|x| x.to_string().parse::<i32>().unwrap())
            .collect::<Vec<_>>();
        // println!("{:?}", s);
        fn count(arr: Vec<i32>) -> i32 {
            let mut sum = 0;
            for i in 0..arr.len() {
                sum += arr[i];
            }
            if sum <= 9 {
                println!("{:?}", sum);
            } else {
                let arr = sum
                    .to_string()
                    .chars()
                    .map(|x| x.to_string().parse::<i32>().unwrap())
                    .collect::<Vec<_>>();
                // println!("{:?}", arr);
                count(arr);
            }
            return 0;
        }
        count(s);
    }
}


fn main() {
    c::run();
}
```

## Kata 39 (选择排序 slection_sort)

```rust
#[allow(dead_code)]
// code war problems url :https://www.codewars.com/kata/5861d28f124b35723e00005e/train/rust
pub fn slection_sort(arr: &Vec<i32>) -> Vec<i32> {
    // write code here
    let length = arr.len();
    let mut arr = arr.to_owned();
    let mut minindex;
    let mut temp;
    for i in 0..length - 1 {
        minindex = i;
        for j in i + 1..length {
            if arr[j] < arr[minindex] {
                minindex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minindex];
        arr[minindex] = temp;
    }
    return arr;
}
```

## Kata 40 (vec 中删除重复的部分)

```rust
#[allow(dead_code)]
#[allow(unused_variables)]
#[allow(unused_mut)]

pub fn run() {
    fn unique_in_order<T>(sequence: T) -> Vec<T::Item>
    where
        T: std::iter::IntoIterator,
        T::Item: std::cmp::PartialEq + std::fmt::Debug,
    {
        let mut v: Vec<_> = sequence.into_iter().collect();
        v.dedup();
        v
    }
    let data = vec!["A", "A", "B", "b", "b", "b"];
    let data2 = "AAAABBBCCDAABBB".chars();
    println!("{:?}", unique_in_order(data));   //["A", "B", "b"]
    println!("{:?}", unique_in_order(data2));  //['A', 'B', 'C', 'D', 'A', 'B']
}
```

## Kata 41 (Rust implement fib function )

```rust
pub fn run() {
    //produce fib
    fn product_fib(prod: u64) {
        // your code
        let mut p: i64 = prod as i64;
        fn fib(n: u64) -> u64 {
            match n {
                0 => 1,
                1 => 1,
                _ => fib(n - 1) + fib(n - 2),
            }
        }
        let mut list: Vec<u64> = Vec::new();
        while p > -1 {
            list.push(fib(p as u64));
            p -= 1;
        }
        println!("{:?}", list);
    }
    product_fib(8); //produce 8 number
}
```

## Kata 42 (Lettcode two_sum problem solution in rust)

```rust
use std::collections::HashMap;

pub fn run(){
        fn two_sum(nums: Vec<i32>,taget:i32)-> Vec<i32>{
            let mut h_map = HashMap::new();
            for i in 0..nums.len(){
                if let Some(&j) = h_map.get(&(taget-nums[i])){
                    return vec![j as i32,i as i32];
                }
                else{
                    h_map.insert(nums[i],i);
                }
            }
            vec![]
        }
        let result = two_sum(vec![1,2,0,2],2);
        println!("{:?}",result);

}
```

## Kata 43 (Use mutex  多线程共享一个值)

```rust
pub mod mutex {
    pub fn run() {
        use std::sync::Mutex;
        let l: &'static _ = Box::leak(Box::new(Mutex::new(0.0)));
        let handlers = (0..999)
            .map(|_| {
                std::thread::spawn(move || {
                    for _ in 0..9999 {
                        *l.lock().unwrap() += 0.0001;
                    }
                })
            })
            .collect::<Vec<_>>();
        for handler in handlers {
            handler.join().unwrap();
        }
        assert_eq!(*l.lock().unwrap(), 999.0 * 9999.0);
    }
}
```

## Kata 44 (implment default for type)

```rust
pub mod implment_default {
    struct Grounded;
    impl Default for Grounded {
        fn default() -> Self {Grounded}
    }
    struct Launched;
    // and so on
    struct Rocket<Stage = Grounded> {
        stage: std::marker::PhantomData<Stage>,
    }
    impl Default for Rocket<Grounded> 
    where
        Grounded:Default,
    {
        fn default() -> Self {
            Rocket{stage:std::marker::PhantomData}
        }
    }
    impl Rocket<Grounded> {
        pub fn launch(self) -> Rocket<Launched> {
            Rocket{stage:std::marker::PhantomData}
        }
    }
    impl Rocket<Launched> {
        pub fn accelerate(&mut self) {}
        pub fn decelerate(&mut self) {}
    }
    struct Color;
    struct Kilograms;

    impl<Stage> Rocket<Stage> {
        pub fn color(&self) -> Color {Color}
        pub fn weight(&self) -> Kilograms {Kilograms}
    }
}

```

## Kata 45 (Use Cow)

```rust
#[allow(unused)]
pub mod use_cow {
    use std::borrow::Cow;
    use std::sync::Arc;
    fn test(ref a: String) {
        eprintln!("{:?}", a);
    }
    fn test1(v: &mut Vec<&str>) {
        v.push("z");
        v.push("x");
        v.push("y");
        for item in v.splitn(3, |s| *s == "x") {
            println!("split:  {:?}", item);
        }
        v.reverse();
        eprintln!("{:?}", v);
    }

    pub fn run() {
        let s = String::from("ok");
        test(Cow::from(&s).clone().to_string());
        eprintln!("{:?}", s);

        let mut v = vec!["a", "b"];
        test1(&mut Cow::from(&v).clone().to_vec());
        v.sort();
        eprintln!("{:?}", v.join(&" "));
        eprintln!("{:?}", v);
    }
}
```

## Kata 46 (二维Vec  sort_by_row)

```rust
pub fn sort_by_row(arr: Vec<Vec<f64>>,row:usize) -> Vec<Vec<f64>> {
        // write code here
        let length = arr[row].len();
        let mut arr = arr.to_owned();
        let mut minindex;
        for i in 0..length - 1 {
            minindex = i;
            for j in i + 1..length {
                if arr[row][j] > arr[row][minindex] {
                    minindex = j;
                }
            }
            for k in 0..row+1{
                arr[k].swap(minindex,i);
            }
        }
        return arr;
    }
```

## Kata 47 (*Implement clonal selection algorithm*)

```rust
pub mod clonal_selection_algorithm {
    use rand::{thread_rng, Rng};
    pub fn y(a: f64, b: f64) -> f64 {
        let aa = -30.0 * f64::powf(b, 4.0);
        let bb = 64.0 * f64::powf(b, 3.0);
        let cc = 43.8 * f64::powf(b, 2.0);
        let dd = 10.8 * f64::powf(b, 1.0);
        let ee = (aa + bb + cc + dd) * 1000.0 * f64::sin(5.0 * std::f64::consts::PI * a);
        let ff = 1.0 + 0.1 * f64::powf(a, 2.0);
        f64::abs(ee / ff)
    }
    pub fn cloning_number(beta: f64, population_number: f64, i: f64) -> f64 {
        f64::floor((beta * population_number) / i)
    }
    pub fn generate_three_random(population_number: i32) -> Vec<Vec<f64>> {

        fn generate() -> f64 {
            let mut rng = thread_rng();
            let m: f64 = rng.gen_range(0.0..1.0);
            m
        }
        let mut temp: Vec<f64> = Vec::new();
        let mut temp2: Vec<f64> = Vec::new();
        let mut temp_fitness: Vec<f64> = Vec::new();
        for i in 0..population_number as usize {
            temp.push(generate());
            temp2.push(generate());
            temp_fitness.push(y(temp[i], temp2[i]));
        }
        vec![temp, temp2, temp_fitness]
    }
    pub fn sort_by_row(arr: Vec<Vec<f64>>,row:usize) -> Vec<Vec<f64>> {
        // write code here
        let length = arr[row].len();
        let mut arr = arr.to_owned();
        let mut minindex;
        for i in 0..length - 1 {
            minindex = i;
            for j in i + 1..length {
                if arr[row][j] > arr[row][minindex] {
                    minindex = j;
                }
            }
            for k in 0..row+1{
                arr[k].swap(minindex,i);
            }
        }
        return arr;
    }
    pub fn mutaition(clon: Vec<&Vec<f64>>, theta: f64) -> Vec<Vec<f64>> {
        fn generate() -> f64 {
            let mut rng = thread_rng();
            let m: f64 = rng.gen_range(0.0..1.0);
            m
        }
        let mut mutation = vec![];
        let clon = clon;
        let mut clon1: Vec<Vec<f64>> = vec![];

        let len_clon = clon.len();
        for _ in 0..len_clon {
            let mut vec = vec![];
            for _ in 0..clon[0].len() {
                vec.push(generate());
            }
            mutation.push(vec.clone());
            clon1.push(vec.clone());
        }
        for i in 0..mutation.len() {
            for j in 0..mutation[0].len() {
                    clon1[i][j] = clon[i][j];
            }
        }
        for i in 0..mutation.len() {
            for j in 0..mutation[0].len() {
                if mutation[i][j] < theta {
                    clon1[i][j] = generate();
                }
            }
        }
        let mut yy = vec![];
        for j in 0..clon1[0].len() {
            yy.push(y(clon1.clone()[0][j],clon1.clone()[1][j]));    
        }
        clon1.push(yy);
        clon1
    }
    
    #[allow(unused)]
    pub fn run() {
        let mut iteration_number: i32 = 2;
        let mut population_number: i32 = 4;
        let mut n: usize = 10;
        let mut beta: f64 = 5.0;
        let mut theta: f64 = 0.2;
        let population = generate_three_random(population_number);
        let mut selected_population: Vec<f64> = vec![];
        let new_population = sort_by_row(population.clone(),2);
        let selected_population = vec![&new_population[0], &new_population[1]];
        // println!("population {:#?}", population.clone());
        // println!("new_population {:#?}", new_population.clone());
        // println!("selected_population {:#?}", selected_population.clone());
        let clone: Vec<&Vec<f64>> = selected_population.clone();
        let new_clone = new_population.clone();
        let last_population = new_clone.clone();
        // println!("clone:{:#?}", &clone);
        // println!("new_clone:{:#?}", &new_clone);
        // println!("new_clone:{:#?}", &last_population);
        let mutationed = mutaition(clone.clone(), theta);
        println!("mutationed:{:#?}", &mutationed);
        let mut sorted_mutation = sort_by_row(mutationed.clone(),2).to_owned();
        println!("sorted_mutation:{:#?}", &sorted_mutation);
    }
}

```

## Kata 48 (*Implement coin_change problem* 还钱问题)

```rust
pub mod coin_change{
    pub fn solution(coins:Vec<i32>,amount:i32)->i32{
        let mut max = amount+1; 
        let mut dp = (0..max).map(|_|{amount+1}).collect::<Vec<_>>();
        dp[0]=0;
        for i in 1..=amount as usize{
            for j in 0..coins.len(){
                if coins[j] as usize <= i{
                    dp[i]=std::cmp::min(dp[i], dp[i-coins[j] as usize]+1);
                }
            }
        }
        let mut re:i32;
        if dp[amount as usize]>amount{
            re = -1;
        }else{
            re = dp[amount as usize];
        }
        println!("{:?}", &dp);
        println!("{:?}", &re);
        re
    }
    pub fn run(){
        solution(vec![2], 3);//-1
        solution(vec![1,2,5], 11); //3
    }
}
```


## Kata 49 (use Atomic implement mutex)

```rust
pub mod implement_mutex {
    #[allow(dead_code)]
    #[allow(unused)]
    use std::cell::UnsafeCell;
    use std::sync::atomic::{AtomicBool, Ordering};
    const LOCKED: bool = true;
    const UNLOCKED: bool = false;
    pub struct Mutex<T> {
        locked: AtomicBool,
        v: UnsafeCell<T>,
    }

    impl<T> Mutex<T> {
        fn new(t: T) -> Self {
            Self {
                locked: AtomicBool::new(UNLOCKED),
                v: UnsafeCell::new(t),
            }
        }
        fn with_lock<R>(&self, f: impl FnOnce(&mut T) -> R) -> R {
            while self
                .locked
                .compare_exchange(UNLOCKED, LOCKED, Ordering::Acquire, Ordering::Acquire)
                .is_err()
            {
                while self.locked.load(Ordering::Relaxed) == LOCKED {
                    std::thread::yield_now();
                }
                std::thread::yield_now();
            }
            // self.locked.store(LOCKED,Ordering::Relaxed);
            let ret = f(unsafe { &mut *self.v.get() });
            self.locked.store(UNLOCKED, Ordering::Release);
            ret
        }
    }
    unsafe impl<T> Sync for Mutex<T> where T: Send {}
    unsafe impl<T> Send for Mutex<T> where T: Send {}
    pub fn thread_handlers() {
        let l: &'static _ = Box::leak(Box::new(Mutex::new(0)));

        let handlers = (0..999)
            .map(|_| {
                std::thread::spawn(move || {
                    for _ in 0..999 {
                        l.with_lock(|v| {
                            *v += 1;
                        });
                    }
                })
            })
            .collect::<Vec<_>>();

        for handler in handlers {
            handler.join().unwrap();
        }
        assert_eq!(l.with_lock(|v| *v), 999 * 999);
    }
    pub fn atomic_demo() {
        use std::sync::atomic::AtomicUsize;
        let x: &'static _ = Box::leak(Box::new(AtomicBool::new(false)));
        let y: &'static _ = Box::leak(Box::new(AtomicBool::new(false)));
        let z: &'static _ = Box::leak(Box::new(AtomicUsize::new(0)));

        let _tx = std::thread::spawn(move || {
            x.store(true, Ordering::SeqCst);
        });
        let _ty = std::thread::spawn(move || {
            y.store(true, Ordering::SeqCst);
        });
        let t1 = std::thread::spawn(move || {
            while !x.load(Ordering::Acquire) {
                if y.load(Ordering::Acquire) {
                    z.fetch_add(1, Ordering::Release);
                }
            }
        });

        let t2 = std::thread::spawn(move || {
            while !y.load(Ordering::Acquire) {
                if x.load(Ordering::Acquire) {
                    z.fetch_add(1, Ordering::Release);
                }
            }
        });

        t1.join().unwrap();
        t2.join().unwrap();

        let z = z.load(Ordering::SeqCst);
        eprintln!("{:?}", z);
    }

    pub fn run() {
        // thread_handlers();
        atomic_demo();
    }
}

```

## Kata 50 (cmd_download_files)

```rust

#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod cmd_download_files {
    use std::io::{self, Write};
    use std::process::Command;
    use std::sync::Mutex;
    pub fn download_all() {
        let pdfs: Vec<Vec<&str>> = vec![vec![
"https://projecteuclid.org/download/pdf_1/euclid.ss/1028905930",
  "https://otr.cypherpunks.ca/otr-wpes.pdf", "https://fahrplan.events.ccc.de/congress/2009/Fahrplan/attachments/1435_JTAG.pdf",
  "https://philpapers.org/archive/RAATOR-2.pdf",
  "https://www.usenix.org/system/files/sec20-sugawara.pdf",
]
];
        use std::thread::JoinHandle;
        fn download<'a>(url: &'static str) {
            std::fs::create_dir_all("./pdfs");
            if url.contains(".pdf") {
                Command::new("duma")
                    .current_dir("./pdfs")
                    .arg("-c")
                    .arg("-n")
                    .arg("1000")
                    .arg("-T")
                    .arg("10")
                    .arg(url)
                    .spawn()
                    .expect("command failed to start");
            }
        }

        let l: &'static _ = Box::leak(Box::new(Mutex::new(pdfs.clone())));

        for item in pdfs.iter() {
            for item1 in item.iter() {
                download(item1);
            }
        }
        println!("{}", "download started");
    }
    pub fn make_zip() {
        fn zip(zip_name: &str, name: &str) {
            Command::new("zip")
                .current_dir("./")
                .arg("-r")
                .arg(zip_name)
                .arg(name)
                .spawn()
                .expect("sh command failed to start");
            println!("ok");
        }
        zip("pdfs.zip", "./pdfs");
        // std::process::exit(1);
    }

    pub fn run() {
        download_all();
        make_zip();
    }
}

```

## Kata 51 (RGB To Hex Conversion)

```rust
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod rgb_to_hex {

    pub fn rgb(r: i32, g: i32, b: i32) -> String {
        fn to_x(i: i32) -> String {
            let mut result = String::new();
            if i < 0 {
                result = String::from("00")
            } else if i > 255 {
                result = String::from("FF")
            } else {
                if format!("{:x}", i).len() <= 1 {
                    let mut re = String::from("0");
                    re.push_str(&format!("{:x}", i).to_uppercase());
                    result = re;
                } else {
                    result = format!("{:x}", i).to_uppercase();
                }
            }
            result
        }
        format!("{}{}{}", to_x(r), to_x(g), to_x(b))
    }
    //another solution
    fn rgb_1(r: i32, g: i32, b: i32) -> String {
        format!(
            "{:02X}{:02X}{:02X}",
            r.clamp(0, 255),
            g.clamp(0, 255),
            b.clamp(0, 255)
        )
    }

    pub fn run() {
        assert_eq!(rgb(255, 255, 255), "FFFFFF".to_string());
        assert_eq!(rgb(0, 0, 0), "000000".to_string());
        assert_eq!(rgb(-20, 275, 125), "00FF7D".to_string());
        assert_eq!(300.clamp(0, 255), 255);
    }
}
```

## Kata 52 (The Look and Say sequence)

```rust
/***
 * The Look and Say sequence
 * https://www.codewars.com/kata/5263c5d011f4233c9d000561/train/rust
*/
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod look_and_say_sequence {
    use itertools::{iterate, Itertools};

    fn get_lines(n: usize) -> String {
        iterate("1".to_owned(), |s| {
            format!(
                "{}",
                s.chars()
                    .dedup_with_count()
                    .format_with("", |(k, x), f| f(&format_args!("{}{}", k, x)))
            )
        })
        .take(n)
        .join(",")
    }
    fn dedup_with_counts() {
        //根基前后相同的元素进行count
        use itertools::Itertools;

        let data = vec!['a', 'a', 'b', 'c', 'c', 'b', 'b'];
        itertools::assert_equal(
            data.into_iter().dedup_with_count(),
            vec![(2, 'a'), (1, 'b'), (2, 'c'), (2, 'b')],
        );
    }
    pub fn run() {
        println!("{:?}", get_lines(5));
        println!("{:?}", get_lines(8));
    }
    #[cfg(test)]
    mod tests {
        use super::*;
        #[test]
        fn basic() {
            assert_eq!(get_lines(2), "1,11");
            assert_eq!(get_lines(3), "1,11,21");
            assert_eq!(get_lines(5), "1,11,21,1211,111221");
        }
    }
}

```

## Kata 53 (Molecule to atoms 已知化学式 返回每个化学元素的数量)

```rust
/**
 * Molecule to atoms 已知化学式 返回每个化学元素的数量
 * https://www.codewars.com/kata/52f831fa9d332c6591000511/train/rust
 * For example:
parse_molecule("H2O");           // water
// Ok([("H", 2), ("O", 1)])

parse_molecule("Mg(OH)2");       // magnesium hydroxide
// Ok([("Mg", 1), ("O", 2), ("H", 2)]

parse_molecule("K4[ON(SO3)2]2"); // Fremy's salt
// Ok([("K", 4), ("O", 14),("N", 2),("S", 4)])

parse_molecule("pie")
// Err(ParseError)
 */
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod molecule_to_atoms {
    use std::collections::HashMap;
    use thiserror::Error;

    pub type Atom = (String, usize);
    pub type Molecule = Vec<Atom>;

    #[derive(Error, Debug)]
    pub enum ParseError {
        #[error("Not a valid molecule")]
        InvalidName,
        #[error("Mismatched parenthesis")]
        ParensMismatch,
    }

    fn atom(s: &mut &[u8]) -> Atom {
        let mut i = 1;
        // dbg!(s.clone()[i] as char);
        while i < s.len() && s[i].is_ascii_lowercase() {
            //if second letter is lowercase i+=1
            i += 1;
        }
        //from 0..i if the atom name
        let name = std::str::from_utf8(&s[..i]).unwrap().to_string();
        // dbg!(&name);
        let end = i;

        while i < s.len() && s[i].is_ascii_digit() {
            i += 1;
        }
        let count = if i - end > 0 {
            let count = std::str::from_utf8(&s[end..i]).unwrap().parse().unwrap();
            count
        } else {
            1
        };
        *s = &s[i..];
        (name, count)
    }

    fn parse_subsequence(s: &mut &[u8], output: &mut Molecule) -> Result<(), ParseError> {
        let opening = s[0];
        *s = &s[1..];
        let seq_begin = output.len();
        parse_sequence(s, output)?;
        let seq_end = output.len();

        let mut i = 1;
        while i < s.len() && s[i].is_ascii_digit() {
            i += 1;
        }
        let count = if i > 1 {
            let count = std::str::from_utf8(&s[1..i]).unwrap().parse().unwrap();
            // dbg!(&count);
            count
        } else {
            1
        };

        if i > s.len() {
            return Err(ParseError::ParensMismatch);
        }
        if opening == b'(' && s[0] != b')' {
            return Err(ParseError::ParensMismatch);
        }
        if opening == b'[' && s[0] != b']' {
            return Err(ParseError::ParensMismatch);
        }
        if opening == b'{' && s[0] != b'}' {
            return Err(ParseError::ParensMismatch);
        }
        *s = &s[i..];
        for i in seq_begin..seq_end {
            output[i].1 *= count;
        }
        Ok(())
    }

    fn parse_sequence(s: &mut &[u8], output: &mut Molecule) -> Result<(), ParseError> {
        loop {
            if s.is_empty() {
                break;
            }

            let peek = s[0];
            dbg!(peek.clone() as char);
            if peek.is_ascii_uppercase() {
                let atom = atom(s);
                output.push(atom)
            } else if peek.is_ascii_lowercase() {
                return Err(ParseError::InvalidName);
            } else if matches!(peek, b'(' | b'[' | b'{') {
                parse_subsequence(s, output)?
            } else {
                break;
            }
        }
        Ok(())
    }

    pub fn parse_molecule(s: &str) -> Result<Molecule, ParseError> {
        let mut s = s.as_bytes();
        // dbg!(&s);
        let mut molecules = vec![];
        parse_sequence(&mut s, &mut molecules)?;

        let mut molecule_map = HashMap::new();
        for (name, count) in molecules {
            *molecule_map.entry(name).or_insert(0) += count;
        }
        dbg!(&molecule_map);
        Ok(molecule_map.into_iter().collect())
    }
    pub fn run() {
        parse_molecule("H2O");
        parse_molecule("Ca(OH)2");
        parse_molecule("CaO");
    }
    #[cfg(test)]
    mod tests {
        use super::{parse_molecule, Molecule};
        macro_rules! assert_parse {
            ($formula:expr, $expected:expr, $name:ident) => {
                #[test]
                fn $name() {
                    super::assert_parse($formula, &$expected, "");
                }
            };
        }
        mod molecules {
            assert_parse!("H", [("H", 1)], hydrogen);
            assert_parse!("O2", [("O", 2)], oxygen);
            assert_parse!("H2O", [("H", 2), ("O", 1)], water);
            assert_parse!(
                "Mg(OH)2",
                [("Mg", 1), ("O", 2), ("H", 2)],
                magnesium_hydroxide
            );
            assert_parse!(
                "K4[ON(SO3)2]2",
                [("K", 4), ("O", 14), ("N", 2), ("S", 4)],
                fremys_salt
            );
        }

        #[test]
        fn errors() {
            assert_fail("pie", "Not a valid molecule");
            assert_fail("Mg(OH", "Mismatched parenthesis");
            assert_fail("Mg(OH}2", "Mismatched parenthesis");
        }

        fn assert_fail(formula: &str, msg: &str) {
            let result = parse_molecule(formula);
            assert!(
                result.is_err(),
                "expected {} {:?} to fail, got {:?}",
                msg,
                formula,
                result.unwrap()
            );
        }

        fn assert_parse(formula: &str, expected: &[(&str, usize)], _mst: &str) {
            let mut expected = expected
                .into_iter()
                .map(|&(name, usize)| (name.to_owned(), usize))
                .collect::<Molecule>();
            let result = parse_molecule(formula);
            assert!(
                result.is_ok(),
                "expected {:?} to pass, got {:?}",
                formula,
                result
            );
            let mut actual = result.unwrap();
            actual.sort();
            expected.sort();
            assert_eq!(actual, expected);
        }
    }
}

```

## Kata 54 (encode and decode base64) 

```rust

/**
 * encode and decode base64
*/
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod base64 {
    use std::os::unix::prelude::OsStrExt;
    use openssl::base64;
    pub fn encode(src: &str) -> String {
        base64::encode_block(src.as_bytes())
    }
    pub fn decode(s: &str) -> String {
        let decode_result = base64::decode_block(s);
        String::from_utf8(decode_result.unwrap()).clone().unwrap()
    }
    pub fn run() {
        let encode_result = encode("base64");
        println!("{:?}", encode_result); //"YmFzZTY0"
        let decode_result = decode(&encode_result);
        println!("{:?}", decode_result); //"base64"
    }
}

```

## Kata 55 (Count of positives / sum of negatives)

```rust

/**
 *Count of positives / sum of negatives
 *https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/rust?collection=shi-yong-de-you-yi-si-de-ti
 */
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod count_positives_sum_negative {
    pub fn count_positives_sum_negatives(input: Vec<i32>) -> Vec<i32> {
        let mut count = 0;
        let mut sum = 0;
        for item in input.iter() {
            if item > &0 {
                count += 1;
            } else {
                sum += item;
            }
        }
        if count > 0 {
            vec![count, sum]
        } else {
            vec![]
        }
    }
    #[test]
    fn returns_expected() {
        let test_data1 = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
        let expected1 = vec![10, -65];
        assert_eq!(count_positives_sum_negatives(test_data1), expected1);
    }
}

```

## Kata 56 (encode and decode to AES 加密解密)

```rust
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod to_aes {
    pub fn run() {
        use libaes::Cipher;
        let arguments: Vec<String> = std::env::args().collect();
        // println!("{:?}", arguments);
        if arguments[1] == "--text_encode" || arguments[1] == "-TE" {
            let my_key = b"dnropsdnropsdnro"; // key is 16 bytes, i.e. 128-bit
            let plaintext = arguments[2].as_bytes();
            let iv = b"dnropsdnropsdnro";

            // Create a new 128-bit cipher
            let cipher = Cipher::new_128(my_key);

            // Encryption
            let encrypted = cipher.cbc_encrypt(iv, plaintext);
            fn vec_to_string(v: Vec<u8>) -> String {
                let mut re = String::new();
                for item in v.iter() {
                    re.push(*item as char);
                }
                re
            }
            println!("{:?}", vec_to_string(encrypted.to_vec()));

            // Decryption
            let decrypted = cipher.cbc_decrypt(iv, &encrypted[..]);
        } else if arguments[1] == "--text_decode" || arguments[1] == "-TD" {
            let my_key = b"dnropsdnropsdnro"; // key is 16 bytes, i.e. 128-bit
            let plaintext = arguments[2].as_bytes();
            let iv = b"dnropsdnropsdnro";

            // Create a new 128-bit cipher
            let cipher = Cipher::new_128(my_key);

            // Encryption
            let encrypted = cipher.cbc_encrypt(iv, plaintext);
            fn vec_to_string(v: Vec<u8>) -> String {
                let mut re = String::new();
                for item in v.iter() {
                    re.push(*item as char);
                }
                re
            }
            // Decryption
            let decrypted = cipher.cbc_decrypt(iv, &arguments[2].as_bytes()[..]);
            println!("{:?}", String::from_utf8(decrypted.to_vec())); //Ok("Alen_Andry")
        } else if arguments[1] == "--binary_encode" || arguments[1] == "-BE" {
            use std::fs::File;
            use std::io::prelude::*;
            use std::io::BufReader;
            let my_key = b"dnropsdnropsdnro"; // key is 16 bytes, i.e. 128-bit
            let mut file = File::open(&arguments[2]).unwrap();
            // let mut buf_reader = BufReader::new(file);
            let mut file_copy = file.try_clone().unwrap();
            let mut contents = vec![];
            file_copy.read_to_end(&mut contents);
            // let plaintext = arguments[2].as_bytes();
            let plaintext = contents.clone();
            let iv = b"dnropsdnropsdnro";

            // Create a new 128-bit cipher
            let cipher = Cipher::new_128(my_key);

            // Encryptions
            let encrypted = cipher.cbc_encrypt(iv, &plaintext);
            fn vec_to_string(v: Vec<u8>) -> String {
                let mut re = String::new();
                for item in v.iter() {
                    re.push(*item as char);
                }
                re
            }
            let mut f = File::create(&arguments[3]).unwrap();
            f.write_all(&encrypted);
            // Decryption
            let decrypted = cipher.cbc_decrypt(iv, &encrypted[..]);
        } else if arguments[1] == "--binary_decode" || arguments[1] == "-BD" {
            use std::fs::File;
            use std::io::prelude::*;
            use std::io::BufReader;
            let my_key = b"dnropsdnropsdnro"; // key is 16 bytes, i.e. 128-bit
            let mut file = File::open(&arguments[2]).unwrap();
            // let mut buf_reader = BufReader::new(file);
            let mut file_copy = file.try_clone().unwrap();
            let mut contents = vec![];
            file_copy.read_to_end(&mut contents);
            // let plaintext = arguments[2].as_bytes();
            let plaintext = contents.clone();
            let iv = b"dnropsdnropsdnro";

            // Create a new 128-bit cipher
            let cipher = Cipher::new_128(my_key);

            // Encryptions
            let encrypted = cipher.cbc_encrypt(iv, &plaintext);
            fn vec_to_string(v: Vec<u8>) -> String {
                let mut re = String::new();
                for item in v.iter() {
                    re.push(*item as char);
                }
                re
            }
            // Decryption
            let decrypted = cipher.cbc_decrypt(iv, &encrypted[..]);
            let mut f1 = File::create(&arguments[3]).unwrap();
            f1.write_all(&decrypted);
        }
    }
}

```

## Kata 57 (输出vec的所有不同顺序的子集)

```rust
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod premutaitions {
    pub fn run() {
        use itertools::Itertools;
        use std::borrow::Borrow;
        use std::cell::{RefCell, RefMut};
        //输出vec的所有不同顺序的子集
        let mut vec = Box::new(RefCell::new(vec![1, 2, 3]));
        let vec_len = vec.as_mut().get_mut().len();
        let mut re = vec![];
        for i in 1..vec_len + 1 {
            let vec_mut: &mut Vec<i64> = vec.as_mut().get_mut();
            let mut new_vec = vec_mut.to_owned();
            let all_permumations = new_vec.into_iter().permutations(i).collect::<Vec<_>>();
            re.push(all_permumations);
        }
        println!("{:?}", re);
        //[[[1], [2], [3]], [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]]
    }
}

```

## Kata 58 (itertools 常用的function)

```rust
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod use_itertools {
    use itertools::*;
    use std::cell::{RefCell, RefMut};
    use std::collections::HashMap;
    pub fn run() {
        {
            //chain_vec 连接vec
            let chain_vec = chain(&[1, 2, 3], &[4, 6]).map(|x| *x).collect::<Vec<i32>>();
            eprintln!("{:?}", chain_vec);
            //enumerate
            for (index, item) in enumerate(&chain_vec) {
                eprintln!("index:{}item:{}", index, item);
            }
        }

        {
            // find max  min
            let max_f32 = fold(&[1., 2., 3.], 0., |a, &b| f32::max(a, b));
            let min_f32 = fold(&[1., 2., 3.], 0., |a, &b| f32::min(a, b));
            eprintln!("{:?}", max_f32);
            eprintln!("{:?}", min_f32);
        }
        {
            //每一个位置后插入 另一个vec的元素
            let it1 = vec![1, 2, 3]
                .into_iter()
                .interleave(vec![10, 20, 30])
                .map(|x| x)
                .collect::<Vec<i32>>();
            eprintln!("{:?}", it1); //[1, 10, 2, 20, 3, 30]
        }
        {
            //每两个一起 存到vec![(1, 2), (1, 3), (1, 4)]
            let pit = vec![1, 2, 3, 4, 5, 6]
                .into_iter()
                .batching(|it| match it.next() {
                    None => None,
                    Some(x) => match it.next() {
                        None => None,
                        Some(y) => Some((x, y)),
                    },
                })
                .map(|x| x)
                .collect::<Vec<(i32, i32)>>();
            eprintln!("{:?}", pit); //[(0, 1), (2, 3), (4, 5), (6, 7)]
        }
        {
            //根据条件 分类vec
            let data1 = vec![1, 3, -2, -2, 1, 0, 1, 2];
            let mut data_grouped = Vec::new();
            for (key, group) in &data1.into_iter().group_by(|elt| *elt >= 0) {
                data_grouped.push((key, group.collect::<Vec<_>>()));
            }
            eprintln!("{:?}", data_grouped); //[(true, [1, 3]), (false, [-2, -2]), (true, [1, 0, 1, 2])]
        }
        {
            //每2个一起 存到vec 分别sum
            let data2 = vec![2, 3, 5, 6, -2, 0];
            let mut chunk_data = vec![];
            for chunk in &data2.into_iter().chunks(2) {
                let mut ch = Box::new(RefCell::new(chunk));
                chunk_data.push((
                    ch.as_mut().get_mut().map(|x| x).collect::<Vec<_>>(),
                    ch.as_mut().get_mut().sum::<i32>(),
                ));
            }
            eprintln!("{:?}", chunk_data); //[([2, 3], 0), ([5, 6], 0), ([-2, 0], 0)]
        }
        {
            //每3个一起 存到tuple_vec
            let it1 = vec![1, 2, 3, 4].into_iter().tuple_windows::<(_, _, _)>();
            itertools::assert_equal(it1, vec![(1, 2, 3), (2, 3, 4)]);
            let it2 = (1..7).tuples::<(_, _, _)>();
            itertools::assert_equal(it2, vec![(1, 2, 3), (4, 5, 6)]);
        }
        {
            // 输出从小到大 第五个元素
            let numbers = vec![1, 5, 3, 0, 1, 2];
            let five_smallest = numbers.into_iter().k_smallest(5);
            eprintln!("{:?}", five_smallest);
        }
        {
            //Vec<(i32, i32)> to HashMap<i32, Vec<i32>>
            let data1 = vec![(0, 10), (2, 12), (3, 13), (0, 20), (3, 33), (2, 42)];
            let lookup1 = data1.into_iter().into_group_map();
            eprintln!("{:?}", lookup1);
        }
        {
            // Vec<(i32, i32)> to HashMap<i32, Vec<i32>> 根据第一个元素分类
            let data2 = vec![(0, 10), (2, 12), (3, 13), (0, 20), (3, 33), (2, 42)];
            let lookup2: HashMap<u32, Vec<(u32, u32)>> =
                data2.clone().into_iter().into_group_map_by(|a| a.0);
            eprintln!("{:?}", lookup2);
        }
        {
            //return 最大元素的位置
            let a = [-3_i32, 0, 1, 5, -10];
            assert_eq!(a.iter().position_max_by(|x, y| x.cmp(y)), Some(3));
        }
        {
            //return 最小元素位置
            let a = [-3, 0, 1, 5, -10];
            assert_eq!(a.iter().position_min(), Some(4));
        }
        {
            //输出vec的所有子集
            let sets = vec![1, 2].into_iter().powerset().collect::<Vec<_>>();
            eprintln!("{:?}", sets); //[[], [1], [2], [1, 2]]
        }
        {
            //找元素为位置
            let data = vec![1, 2, 3, 3, 4, 6, 7, 9];
            let positions = data
                .iter()
                .positions(|v| v % 2 == 0)
                .map(|x| x)
                .collect::<Vec<_>>();
            eprintln!("{:?}", positions);
        }
        {
            //drop some item 前后删除
            let init_front = vec![0, 3, 6, 9]
                .into_iter()
                .dropping(1)
                .map(|x| x)
                .collect::<Vec<_>>();
            eprintln!("{:?}", init_front); //[3, 6, 9]
            let init_back = vec![0, 3, 6, 9]
                .into_iter()
                .dropping_back(1)
                .map(|x| x)
                .collect::<Vec<_>>();
            eprintln!("{:?}", init_back); //[0, 3, 6]
        }
        {
            //求和 0-10
            let sum1 = (0..11).fold(0, |acc, y| acc + y);
            let sum2 = vec![1, 15, 10].into_iter().fold(0, |acc, y| acc + y);
            eprintln!("{:?},{:?}", sum1, sum2);
        }
        {
            //更新vec内部元素
            let input = vec![vec![1], vec![3, 2, 1]];
            let it = input
                .into_iter()
                .update(|mut v| v.push(0))
                .map(|x| x)
                .collect::<Vec<_>>();
            eprintln!("{:?}", it); // vec![vec![1, 0], vec![3, 2, 1, 0]]

            let vec = vec![1, 5, 6, 8];
            let new_vec = vec
                .into_iter()
                .update(|mut v| {
                    let mut vv = *v;
                    vv = vv * 10;
                    *v = vv;
                })
                .map(|x| x)
                .collect::<Vec<_>>();
            eprintln!("{:?}", new_vec); //[10, 50, 60, 80]
        }
        {
            //删除重复元素
            let data1 = vec![10, 20, 30, 20, 40, 10, 50];
            assert_equal(data1.into_iter().unique(), vec![10, 20, 30, 40, 50]);

            let data2 = vec!["a", "bb", "aa", "c", "ccc"];
            assert_equal(
                data2.into_iter().unique_by(|s| s.len()),
                vec!["a", "bb", "ccc"],
            );
        }
    }
}

```

## Kata 59 (snail sort 矩阵蛇形遍历 .iter() reverse)

```rust

/**
 * snail sort 矩阵蛇形遍历 .iter() reverse
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/rust
 */
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod snail_sort {
    pub fn get_matrix_edge(matrix: &[Vec<i32>]) -> Vec<i32> {
        // enjoy
        let mut re: Vec<i32> = vec![];
        let mut left = vec![];

        for (row_index, item_vec) in matrix.iter().enumerate() {
            if row_index == 0 {
                for (culmn_index, item_num) in item_vec.iter().enumerate() {
                    re.push(*item_num);
                }
            }
            if row_index != 0 {
                for (culmn_index, item_num) in item_vec.iter().enumerate() {
                    if culmn_index == item_vec.len() - 1 {
                        re.push(*item_num);
                    }
                }
            }
            if row_index == matrix.len() - 1 {
                let mut bottom = vec![];
                for (culmn_index, item_num) in item_vec.iter().enumerate() {
                    if culmn_index != item_vec.len() - 1 {
                        bottom.push(*item_num);
                    }
                }
                bottom.reverse();
                for bb in &bottom {
                    re.push(*bb);
                }
            }
            for (culmn_index, item_num) in item_vec.iter().enumerate() {
                if culmn_index == 0 {
                    left.push(*item_num);
                }
            }
        }

        left.reverse();
        if left.len() > 2 {
            left.remove(0);
            let len = left.len();
            left.remove(len - 1);
            for ll in &left {
                re.push(*ll);
            }
        }

        re
    }
    pub fn split_matrix(matrix: &[Vec<i32>], start_index: (usize, usize)) -> Vec<Vec<i32>> {
        let mut re = Vec::new();
        let mut end_index: (usize, usize) = (0, 0);
        if matrix.len() > 2 {
            end_index = (matrix.len() - 2, matrix.len() - 2);
            for (row_index, item_vec) in matrix.iter().enumerate() {
                let mut new_row = vec![];
                for (culmn_index, item_num) in item_vec.iter().enumerate() {
                    if culmn_index >= start_index.1
                        && culmn_index <= end_index.1
                        && row_index >= start_index.0
                        && row_index <= end_index.0
                    {
                        new_row.push(*item_num);
                    }
                }
                if new_row.len() > 0 {
                    re.push(new_row);
                }
            }
        }
        re
    }
    pub fn snail(matrix: &[Vec<i32>]) -> Vec<i32> {
        let mut re = Vec::new();
        re = get_matrix_edge(matrix);
        let mut new_matrix = split_matrix(matrix, (1, 1));
        let re1 = get_matrix_edge(&new_matrix);
        for item in re1.iter() {
            re.push(*item);
        }
        while new_matrix.len() >= 1 {
            new_matrix = split_matrix(&new_matrix, (1, 1));
            let re1 = get_matrix_edge(&new_matrix);
            for item in re1.iter() {
                re.push(*item);
            }
        }
        re
    }
    //other solution
    fn snail1(matrix: &[Vec<i32>]) -> Vec<i32> {
        let mut ret = Vec::new();
        if matrix.len() == 0 {
            return ret;
        }
        let mut width = matrix[0].len();
        let mut height = matrix.len();
        let mut cycle = 0;
        while width > 0 && height > 0 {
            for x in cycle..width {
                ret.push(matrix[cycle][x]);
            }
            for y in cycle + 1..height {
                ret.push(matrix[y][width - 1]);
            }
            for x in (cycle..width - 1).rev() {
                ret.push(matrix[height - 1][x]);
            }
            for y in (cycle + 1..height - 1).rev() {
                ret.push(matrix[y][cycle]);
            }
            cycle += 1;
            width -= 1;
            height -= 1;
        }
        ret
    }

    pub fn run() {
        let square1 = &[vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]];
        let square2 = &[
            vec![1, 2, 3, 4],
            vec![5, 6, 7, 8],
            vec![9, 10, 11, 12],
            vec![13, 14, 15, 16],
        ];
        let square3 = &[
            vec![543, 4, 207, 610, 748, 71, 813],
            vec![100, 61, 987, 541, 429, 798, 277],
            vec![63, 766, 838, 430, 271, 884, 274],
            vec![640, 765, 403, 676, 56, 233, 522],
            vec![335, 516, 590, 908, 150, 588, 221],
            vec![401, 522, 813, 89, 696, 173, 887],
            vec![844, 266, 636, 500, 493, 531, 334],
        ];
        println!("{:?}", snail1(square1));
        println!("{:?}", snail(square2));
        println!("{:?}", snail(square3));
    }
    #[cfg(test)]
    mod tests {
        use super::*;

        #[test]
        fn sample_test1() {
            let square = &[vec![1, 2, 3], vec![4, 5, 6], vec![7, 8, 9]];
            let expected = vec![1, 2, 3, 6, 9, 8, 7, 4, 5];
            assert_eq!(snail(square), expected);
        }

        #[test]
        fn sample_test2() {
            let square = &[vec![1, 2, 3], vec![8, 9, 4], vec![7, 6, 5]];
            let expected = vec![1, 2, 3, 4, 5, 6, 7, 8, 9];
            assert_eq!(snail(square), expected);
        }

        #[test]
        fn sample_test3() {
            let square: &[Vec<i32>; 1] = &[Vec::new()];
            let expected = Vec::new();
            assert_eq!(snail(square), expected, "Failed with empty input");
        }

        #[test]
        fn sample_test4() {
            let square = &[vec![1]];
            let expected = vec![1];
            assert_eq!(snail(square), expected);
        }
    }
}

```

## Kata 60 (Use scrcpy connect phone) 

```rust
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod connect_phone {
    use std::process::Command;
    pub fn detect_phone() -> Vec<String> {
        let result = Command::new("adb")
            .arg("devices")
            .output()
            .expect("command failed to start");
        let str_result_to_vec = std::str::from_utf8(&result.stdout)
            .unwrap()
            .split("\n")
            .filter(|s| !s.is_empty())
            .collect::<Vec<_>>()
            .iter()
            .map(|s| s.to_string())
            .collect();
        str_result_to_vec
    }
    pub fn get_phone_ip() -> String {
        let result = Command::new("adb")
            .arg("shell")
            .arg("ip")
            .arg("a")
            .output()
            .expect("command failed to start");
        let str_result_to_vec: Vec<String> = std::str::from_utf8(&result.stdout)
            .unwrap()
            .split("\n")
            .filter(|s| !s.is_empty())
            .collect::<Vec<_>>()
            .iter()
            .map(|s| s.to_string())
            .collect();
        let mut re = String::from("phone is not connected or more than one device ");
        for item in str_result_to_vec {
            if item.contains("192.") {
                re = item.trim().to_string().split("/").collect::<Vec<_>>()[0]
                    .to_string()
                    .split(" ")
                    .collect::<Vec<_>>()[1]
                    .to_string();
            }
        }
        re.to_string()
    }
    pub fn start_tcpip(port: &str) -> String {
        let result = Command::new("adb")
            .arg("tcpip")
            .arg("5555")
            .output()
            .expect("command failed to start");
        let str_result_to_vec: Vec<String> = std::str::from_utf8(&result.stdout)
            .unwrap()
            .split("\n")
            .filter(|s| !s.is_empty())
            .collect::<Vec<_>>()
            .iter()
            .map(|s| s.to_string())
            .collect();
        let mut re = format!("can't start tcpip at {}", &port);
        for item in str_result_to_vec {
            if item.contains(&port) {
                re = item;
            }
        }
        re
    }
    pub fn connect_phone(ip_address: &str, port: &str) -> String {
        let address = format!("{}:{}", ip_address, port);
        let result = Command::new("adb")
            .arg("connect")
            .arg(&address)
            .output()
            .expect("command failed to start");
        let str_result_to_vec: Vec<String> = std::str::from_utf8(&result.stdout)
            .unwrap()
            .split("\n")
            .filter(|s| !s.is_empty())
            .collect::<Vec<_>>()
            .iter()
            .map(|s| s.to_string())
            .collect();
        let mut re = format!("can't connect to :: {}", &address);
        for item in str_result_to_vec {
            if item.contains("connected") && !item.contains("failed") && !item.contains("can't") {
                re = item;
                re.push_str(" :: ready to run scrcpy");
            }
        }
        re
    }
    pub fn run_srcpy() -> String {
        use std::thread;
        use std::time::{Duration, Instant};
        thread::sleep(Duration::from_secs(3));
        let result = Command::new("scrcpy")
            .spawn()
            .expect("can't connect open scrcpy");
        let mut re = format!("opening scrcpy");
        re
    }

    pub fn run() {
        let port = "5555";
        let ip_address = get_phone_ip();
        println!("{:?}", detect_phone());
        println!("{:?}", get_phone_ip());
        println!("{:?}", start_tcpip(&port));
        println!("{:?}", connect_phone(&ip_address, &port));
        println!("{:?}", run_srcpy());
    }
}
```

## Kata 61 (Closest and Smallest)

```rust
/**
 * Closest and Smallest
 * https://www.codewars.com/kata/5868b2de442e3fb2bb000119/train/rust
*/
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod closest_and_smallest {
    pub fn closest(s: &str) -> String {
        let mut s_vec: Vec<i32> = s
            .split(" ")
            .filter(|s| !s.is_empty())
            .collect::<Vec<_>>()
            .iter()
            .map(|s| s.parse::<i32>().unwrap())
            .collect();
        let mut s_weights: Vec<i32> = s
            .split(" ")
            .filter(|s| !s.is_empty())
            .collect::<Vec<_>>()
            .iter()
            .map(|s| {
                s.split("")
                    .filter(|s| !s.is_empty())
                    .collect::<Vec<_>>()
                    .iter()
                    .map(|s| s.parse::<i32>().unwrap())
                    .collect::<Vec<i32>>()
                    .iter()
                    .sum()
            })
            .collect();
        let mut collect_weights = Vec::new();
        for i in 0..s_weights.len() {
            collect_weights.push((s_weights[i], s_vec[i]));
        }
        let mut new_collect_weights = collect_weights.clone();
        new_collect_weights.sort_by(|a, b| a.0.partial_cmp(&b.0).unwrap());
        fn find_closest(vec: &mut Vec<(i32, i32)>) -> (usize, usize, i32) {
            let mut adjacen_weights: Vec<(usize, usize, i32)> = vec![];
            for i in 0..vec.len() - 1 {
                adjacen_weights.push((i, i + 1, vec[i + 1].0 - vec[i].0));
            }
            adjacen_weights.sort_by(|a, b| a.2.partial_cmp(&b.2).unwrap());
            adjacen_weights[0]
        }
        let closest_index = find_closest(&mut new_collect_weights);
        let mut re = Vec::new();
        re.push(new_collect_weights[closest_index.0]);
        re.push(new_collect_weights[closest_index.1]);
        fn find_index(collect_weights: &mut Vec<(i32, i32)>, target: i32) -> usize {
            let mut re = 0;
            for i in 0..collect_weights.len() {
                if collect_weights[i].1 == target {
                    re = i;
                    break;
                }
            }
            re
        }
        let mut indexs = vec![];
        indexs.push(find_index(&mut collect_weights, re[0].1));
        collect_weights.reverse();
        indexs.push(collect_weights.len() - 1 - find_index(&mut collect_weights, re[1].1));
        let mut vec = vec![];
        vec.push(vec![re[0].0, indexs[0] as i32, re[0].1]);
        vec.push(vec![re[1].0, indexs[1] as i32, re[1].1]);
        let mut result = String::from("[");
        for item in vec.iter() {
            result.push_str("(");
            for item1 in item.iter() {
                result.push_str(&format!("{:?},", item1));
            }
            result.push_str(")");
        }
        result.push_str(&format!("]"));
        let re = result.replace(",)", ")");
        return re;
    }
    //other solution
    fn closest1(s: &str) -> String {
        use itertools::Itertools;
        fn weight(s: &str) -> u32 {
            s.chars().map(|c| c.to_digit(10).unwrap()).sum()
        }
        let (_, a, b) = s
            .trim()
            .split_whitespace()
            .enumerate()
            .map(|(i, x)| (weight(x) as i64, i, x))
            .sorted()
            .tuple_windows()
            .map(|(a, b)| ((a.0 - b.0).abs(), a, b))
            .min()
            .unwrap();
        format!("[({},{},{})({},{},{})]", a.0, a.1, a.2, b.0, b.1, b.2)
    }
    pub fn run() {
        let s = "643181 268 211507 849 144916 396 568036 222 79436 641 506082 948 385502 626 631751 560 488490 210 538675 520 271288 641 137916 265 723201";
        let re = closest(s);
        println!("{:?}", re);
        let r = "[(0,6,0)(0,7,0)]";
        assert_eq!(re, r.to_string());
    }
    #[cfg(test)]
    mod tests {
        use super::*;
        fn testing(s: &str, exp: String) -> () {
            let ans = closest(s);
            assert_eq!(ans, exp, "Testing: {}", s);
        }
        #[test]
        fn basic_tests() {
            let mut s = "456899 50 11992 176 272293 163 389128 96 290193 85 52"; // [(13, 9, "85"), (14, 3, "176")]
            testing(s, "[(13,9,85)(14,3,176)]".to_string());
            s = "239382 162 254765 182 485944 134 468751 62 49780 108 54"; // "[[8, 5, 134], [8, 7, 62]]";
            testing(s, "[(8,5,134)(8,7,62)]".to_string());
            s = "241259 154 155206 194 180502 147 300751 200 406683 37 57";
            let r = "[(10,1,154)(10,9,37)]";
            testing(s, r.to_string());
        }
    }
}
```

## Kata 62 (解数独  n\*n的矩阵中每一行和列不能有重复的数字)

```rust
#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod sudoku_solver {
    struct Solution;
    impl Solution {
        pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
            let mut empty_position = vec![];
            for i in 0..9 {
                for j in 0..9 {
                    if board[i][j] == '.' {
                        empty_position.push((i, j));
                        board[i][j] = '0';
                    }
                }
            }
            let position_len = empty_position.len();

            let mut loop_index = 0;
            while loop_index < position_len {
                let (x, y) = empty_position[loop_index];

                if board[x][y] < '9' {
                    board[x][y] = std::char::from_u32((board[x][y] as u32) + 1).unwrap();
                } else {
                    board[x][y] = '0';
                    loop_index -= 1;
                    continue;
                }
                if Solution::invalid(board, x, y) {
                    continue;
                }
                loop_index += 1;
            }
        }
        pub fn invalid(board: &Vec<Vec<char>>, x: usize, y: usize) -> bool {
            use std::collections::HashSet;
            let mut contain_table = HashSet::new();

            // validate line
            for i in 0..9 {
                let x1 = board[x][i];
                if x1 != '0' {
                    if contain_table.contains(&x1) {
                        return true;
                    }
                    contain_table.insert(x1);
                }
            }
            contain_table.clear();

            // validate column

            for i in 0..9 {
                let x2 = board[i][y];
                if x2 != '0' {
                    if contain_table.contains(&x2) {
                        return true;
                    }
                    contain_table.insert(x2);
                }
            }

            contain_table.clear();
            // validate box

            let i1 = x / 3;
            let i2 = y / 3;
            for i in 0..3 {
                for j in 0..3 {
                    let x3 = board[i1 * 3 + i][i2 * 3 + j];
                    if x3 != '0' {
                        if contain_table.contains(&x3) {
                            return true;
                        }
                        contain_table.insert(x3);
                    }
                }
            }
            contain_table.clear();
            false
        }
    }
    #[cfg(test)]
    mod test {
        use super::*;

        #[test]
        fn test() {
            let mut sudoku = vec![
                vec!['5', '3', '.', '.', '7', '.', '.', '.', '.'],
                vec!['6', '.', '.', '1', '9', '5', '.', '.', '.'],
                vec!['.', '9', '8', '.', '.', '.', '.', '6', '.'],
                vec!['8', '.', '.', '.', '6', '.', '.', '.', '3'],
                vec!['4', '.', '.', '8', '.', '3', '.', '.', '1'],
                vec!['7', '.', '.', '.', '2', '.', '.', '.', '6'],
                vec!['.', '6', '.', '.', '.', '.', '2', '8', '.'],
                vec!['.', '.', '.', '4', '1', '9', '.', '.', '5'],
                vec!['.', '.', '.', '.', '8', '.', '.', '7', '9'],
            ];
            Solution::solve_sudoku(&mut sudoku);

            let mut expected_solution = vec![
                vec!['5', '3', '4', '6', '7', '8', '9', '1', '2'],
                vec!['6', '7', '2', '1', '9', '5', '3', '4', '8'],
                vec!['1', '9', '8', '3', '4', '2', '5', '6', '7'],
                vec!['8', '5', '9', '7', '6', '1', '4', '2', '3'],
                vec!['4', '2', '6', '8', '5', '3', '7', '9', '1'],
                vec!['7', '1', '3', '9', '2', '4', '8', '5', '6'],
                vec!['9', '6', '1', '5', '3', '7', '2', '8', '4'],
                vec!['2', '8', '7', '4', '1', '9', '6', '3', '5'],
                vec!['3', '4', '5', '2', '8', '6', '1', '7', '9'],
            ];
            assert_eq!(expected_solution, sudoku);
        }

        #[test]
        fn test_invalid_method() {
            let mut expected_solution = vec![
                vec!['5', '3', '4', '6', '7', '8', '9', '1', '2'],
                vec!['6', '7', '2', '1', '9', '5', '3', '4', '8'],
                vec!['1', '9', '8', '3', '4', '2', '5', '6', '7'],
                vec!['8', '5', '9', '7', '6', '1', '4', '2', '3'],
                vec!['4', '2', '6', '8', '5', '3', '7', '9', '1'],
                vec!['7', '1', '3', '9', '2', '4', '8', '5', '6'],
                vec!['9', '6', '1', '5', '3', '7', '2', '8', '4'],
                vec!['2', '8', '7', '4', '1', '9', '6', '3', '5'],
                vec!['3', '4', '5', '2', '8', '6', '1', '7', '9'],
            ];
            for i in 0..9 {
                for j in 0..9 {
                    assert_eq!(false, Solution::invalid(&expected_solution, i, j));
                }
            }
        }
    }
}

```

## Kata 63 (Read from terminal macro,input!())

```rust
#[allow(unused_macros)]
macro_rules! input {
    () => {{
        let mut string = String::new();
        std::io::stdin().read_line(&mut string).unwrap();
        string = string.to_string().trim().to_owned();
        string
    }};
}
```

## Kata 64(parse string 进制转换)

```rust
/**
 * pase string or decimal conversion
 */
#[allow(dead_code)]
#[allow(unused_variables)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod pase_string_decimal_conversion {
    pub fn run() {
        //Vec<String> to i64
        let mut vec = vec![];
        for i in 0..5 {
            vec.push(format!("{}", i));
        }
        let vec_to_i64: i64 = vec.into_iter().collect::<String>().parse().unwrap();
        assert_eq!(vec_to_i64, 1234);

        // String to i64
        let s = format!("444");
        let s_i64 = s.parse::<i64>().unwrap();
        assert_eq!(s_i64, 444);

        //split_i64 to Vec<i64>
        let split_i64 = format!("{}", 1234)
            .chars()
            .map(|x| i64::from(x.to_digit(10).unwrap()))
            .rev()
            .collect::<Vec<i64>>();

        assert_eq!(split_i64, vec![4, 3, 2, 1]);

        //char to i64
        let c: char = '5';
        let c_to_i64 = i64::from(c.to_digit(10).unwrap());
        assert_eq!(c_to_i64, 5);

        //&str to Vec<i64>
        let s1: &str = "564";
        let c_to_i64 = s1
            .chars()
            .map(|x| i64::from(x.to_digit(10).unwrap()))
            .collect::<Vec<i64>>();
        assert_eq!(c_to_i64, vec![5, 6, 4]);

        //decimal conversion
        /**- ``, which uses the `Display` trait
        - `?`, which uses the `Debug` trait
        - `e`, which uses the `LowerExp` trait
        - `E`, which uses the `UpperExp` trait
        - `o`, which uses the `Octal` trait
        - `p`, which uses the `Pointer` trait
        - `b`, which uses the `Binary` trait
        - `x`, which uses the `LowerHex` trait
        - `X`, which uses the `UpperHex` trait
        */
        //十进制转化为其他进制
        //十进制to二进制
        let num = 454;
        let biynary_num = format!("{:b}", num);
        assert_eq!(biynary_num, format!("111000110"));

        //十进制to八进制
        let octonary_num = format!("{:o}", num);
        assert_eq!(octonary_num, format!("706"));

        //十进制to十六进制
        let hexadecimal_num = format!("{:x}", num);
        assert_eq!(hexadecimal_num, format!("1c6"));

        //二进制转化为其他进制
        //二进制to十进制
        let num1 = "100";
        fn binary_to_decimal(num: &str) -> String {
            let mut sum = 0;
            let mut vec = num
                .chars()
                .map(|x| i64::from(x.to_digit(10).unwrap()))
                .collect::<Vec<i64>>();
            for (index, item) in vec.iter().rev().enumerate() {
                sum += i64::pow(2, index as u32) * item;
            }
            format!("{}", sum)
        }
        //二进制转十进制结果
        let num_to_decimal = binary_to_decimal(num1);
        assert_eq!(num_to_decimal, format!("4"));

        //二进制to八进制,先把二进制转十进制再转八进制
        let octonary_num = format!("{:o}", binary_to_decimal("1111").parse::<i64>().unwrap());
        assert_eq!(octonary_num, format!("17"));

        //二进制to十六进制,先把二进制转十进制再转十六进制
        let hexadecimal_num = format!("{:x}", binary_to_decimal("1111").parse::<i64>().unwrap());
        assert_eq!(hexadecimal_num, format!("f"));

        //八进制转化为其他进制
        //八进制to十进制
        fn octonary_to_decimal(num: &str) -> String {
            let mut sum = 0;
            let mut vec = num
                .chars()
                .map(|x| i64::from(x.to_digit(10).unwrap()))
                .collect::<Vec<i64>>();
            for (index, item) in vec.iter().rev().enumerate() {
                sum += i64::pow(8, index as u32) * item;
            }
            format!("{}", sum)
        }
        //八进制转十进制结果
        let num_to_decimal = octonary_to_decimal("1111");
        assert_eq!(num_to_decimal, format!("585"));

        //八进制to二进制,先把八进制转十进制再转八进制
        let octonary_num = format!("{:b}", octonary_to_decimal("1111").parse::<i64>().unwrap());
        assert_eq!(octonary_num, format!("1001001001"));

        //八进制to十六进制,先把八进制转十进制再转十六进制
        let hexadecimal_num = format!("{:x}", octonary_to_decimal("1111").parse::<i64>().unwrap());
        assert_eq!(hexadecimal_num, format!("249"));

        //十六进制转化为其他进制
        //十六进制to十进制
        fn hexadecimal_to_decimal(num: &str) -> String {
            let mut sum = 0;
            let mut vec = num
                .chars()
                .map(|x| i64::from(x.to_digit(10).unwrap()))
                .collect::<Vec<i64>>();
            for (index, item) in vec.iter().rev().enumerate() {
                sum += i64::pow(16, index as u32) * item;
            }
            format!("{}", sum)
        }
        //十六进制转十进制结果
        let num_to_decimal = hexadecimal_to_decimal("1111");
        assert_eq!(num_to_decimal, format!("4369"));

        //十六进制to二进制,先把十六进制转十进制再转八进制
        let octonary_num = format!(
            "{:b}",
            hexadecimal_to_decimal("1111").parse::<i64>().unwrap()
        );
        assert_eq!(octonary_num, format!("1000100010001"));

        //十六进制to八进制,先把十六进制转十进制再转十六进制
        let hexadecimal_num = format!(
            "{:o}",
            hexadecimal_to_decimal("1111").parse::<i64>().unwrap()
        );
        assert_eq!(hexadecimal_num, format!("10421"));
    }
}
```

## Kata 65 (闭包)

```rust
fn main() {
    //两个闭包共同分享一个值
    use std::sync::Mutex;
    let l = Box::leak(Box::new(Mutex::new(0.0)));
    let add = || {
        *l.lock().unwrap() += 1.0;
    };
    let min = || {
        *l.lock().unwrap() -= 1.0;
    };
    for _ in 0..10 {
        add();
        min();
    }
    println!("{:?}", *l.lock().unwrap()); //0.0
}
```

