# Rust life cycle

First, each reference has a life cycle, that is, the reference maintains a valid scope

The scope of a reference starts from the declared place and continues until the last use

> ```rust
> let a=String::from("a");
> let b=&a;//The birth of b is not followed by the use of b, so b dies
> ```

During the borrower's life, the owner must be alive, or a dangling reference will be generated. Fortunately, we don't need to pay attention to it. We give it to the compiler to prompt. The compiler checks it through the life cycle
Most of the time, the life cycle is implicit and can be inferred, but in some cases, it is impossible to infer, which needs to be pointed out by the programmer himself

> ```rust
> fn longest(x: &String, y: &String) -> &String {//This function will report an error. We will talk about the specific reasons later
> 	if x.len() > y.len() {//It can be understood as randomly returning x or y, because both cases will occur at runtime
> 		x
> 	} else { 
> 		y 
> 	}
> }
> fn main() {
> 	let a=String::from("a");
> 	let c;
> 	{
> 		let b=String::from("b");
> 		c = longest(&a,&b);//We don't know whether it will return a or b, which leads to the uncertainty of the life cycle. At this time, c is unsafe. You dare not use c outside the braces
> 	}
> }
> ```

Here is the modified

> ```rust
> fn longest<'a>(x: &'a String, y: &'a String) -> &'a String {//Unify the life cycle and analyze according to the minimum life cycle
> 	if x.len() > y.len() {
> 		x
> 	} else {
> 		y
> 	}
> }
> fn main() {
> 	let a=String::from("a");
> 	let c;
> 	{
> 		let b=String::from("b");
> 		c = longest(&a,&b);
> 		println!("{}",c);//security
> 	}//b died here
> 	// println!("{}",c);// This line will report an error because the minimum life cycle is b
> }
> ```

Note: life cycle declarations are similar to variable type declarations and do not change the real life cycle of an object. When your life cycle does not match the actual situation, the compiler will report an error.

The life cycle of the parameters of a function or method is called the input life cycle, and the life cycle of the return value is called the output life cycle
Implicit life cycle, the official introduced three rules

1. Each referenced parameter has its own lifecycle parameter
2. If there is only one input lifecycle parameter, it is assigned to all output lifecycle parameters
3. If the method has multiple input lifecycle parameters and one of the parameters is & self or & mut self, then all output lifecycle parameters are given the lifecycle of self

You should be aware that there is an implicit life cycle, but the editor can't analyze it and requires us to explicitly declare it

> ```rust
> fn f(x:&i32){}
> fn f<'a>(&'a i32){}
> 
> fn f2(x:&String)->&String{}
> fn f2<'a>(x:&'a String)->&'a String{}
> //Why the return value must be 'a', because if it is the owner inside the function, the borrower returned is a dangling reference, because the owner dies when exiting the function
> //Therefore, when the parameters have only one life cycle, the return value must also be that life cycle
> 
> fn f3(x:&i32,y:&i32,...){}
> fn f3<'a,'b,...>(x:&'a i32,y:&'b i32,...){}
> //No matter how many parameters are, there is no need to explicitly declare them. Let's be lazy
> 
> fn f4<'a,'b>(x:&'a String,y:&'b String) -> &'a String {
> 	// &String:: from ("") / / an error is reported. The life cycle is not 'a'
> 	// &y 	// Error reporting, the reason is the same as above
> 	&x
> }
> ```

With regard to Article 3, I would like to make a special explanation

> ```rust
> impl ABC {//If ABC is an object for processing, it should not return the life cycle of & self
> 	fn f1(&self,a:&String)->&String{//The return lifecycle is & self
> 		a //Error reporting because of different life cycles
> 	}
> 	fn f2<'a>(&self,a:&'a String)->&'a String{//But you can
> 		a
> 	}
> }
> ```

Life cycle syntax is used to associate multiple parameters of a function with the life cycle of its return value. Once they form a relationship, Rust has enough information to allow memory safe operations and prevent dangling pointers or memory security violations

# Structure definition

> ```rust
> struct ABC<'a>{
> 	A:&'a i32
> }
> impl<'a> ABC<'a> {
> 	fn f1(x:&'a i32){}
> 	fn f2(&self,x:&'a i32){}
> }
> struct ABCD<'a>{//equally
> 	A:&'a i32,
> 	B:&'a i32
> }
> struct ABCDE<'a,'b>{//dissimilarity
> 	A:&'a i32,
> 	B:&'b i32
> }
> ```

# Static life cycle

'static its life cycle can survive the whole program

However, before specifying the reference as' static ', consider whether the reference is really valid throughout the life cycle of the program. You may want to consider whether you want it to last so long, even if it's possible. In most cases, the problem in the code is to try to create a dangling reference or the available life cycle does not match. Please solve these problems instead of specifying a 'static life cycle

In the vernacular, whether it can really survive the whole program period depends not on 'static', but on whether the reference can really survive. As mentioned earlier, the life cycle declaration is similar to the variable type declaration and will not change the real life cycle of the object, so 'static' is just telling the compiler

All string literals (& STR) have a 'static life cycle

Life cycle declaration is a life cycle Convention and restriction between input and return values or structure members