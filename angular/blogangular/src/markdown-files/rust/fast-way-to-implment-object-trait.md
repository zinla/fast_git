## fast-way-to-implment-object-trait

```sh
[package]
name = "rust_codewar"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html
[[bin]]
name = "codewar"
path = "src/main.rs"

[dependencies]
thin_trait_object = "1.1.2"

[workspace]

[profile.release]
opt-level = 'z'
lto = true
codegen-units = 1
panic = 'abort'


[features]

```

code

```rust
 /**
     * trait_object
     */
    pub mod trait_object {
        use std::fmt;
        use std::fmt::Write;

        pub fn run() {
            fn dyn_obj_vec() {
                //trait slug
                use dyn_clone::DynClone;

                pub trait Dyn_Vec: fmt::Display + fmt::Debug + DynClone {
                    fn slugify(&self) -> String;
                    fn tostring(&self) -> String;
                    fn prinln(&self);
                }

                impl Dyn_Vec for String {
                    fn slugify(&self) -> String {
                        format!("{}", self.replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                impl Dyn_Vec for &str {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }

                //int
                impl Dyn_Vec for i8 {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                impl Dyn_Vec for i16 {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                impl Dyn_Vec for i32 {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                impl Dyn_Vec for i64 {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                impl Dyn_Vec for i128 {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                //float
                impl Dyn_Vec for f32 {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                impl Dyn_Vec for f64 {
                    fn slugify(&self) -> String {
                        format!("{}", self.to_string().replace(" ", "_"))
                    }
                    fn tostring(&self) -> String {
                        format!("{}", self)
                    }
                    fn prinln(&self) {
                        println!("{}", self);
                    }
                }
                //the same type of vec slice impl trait
                //slice item  is a thing has implmented trait slug
                fn same(h: &[impl Dyn_Vec]) {
                    //is short cut of same1()
                    for s in h {
                        println!("{}", s.tostring());
                    }
                }
                //slice item  is a thing has implmented trait slug and need to be the same type
                fn same1<H: Dyn_Vec>(h: &[H]) {
                    for s in h {
                        s.prinln();
                    }
                }
                same(&["a", "b", "c"]);
                same1(&[format!("s0"), format!("s1"), format!("s2")]);

                //diffrent type of vec slice impl trait
                //slice item  is a thing has implmented trait slug canbe diffrent type
                //vec contain diffrent type
                pub fn new_Dyn_Vec() -> Vec<Box<dyn Dyn_Vec>> {
                    vec![Box::new("default") as Box<dyn Dyn_Vec>]
                }
                let mut Dyn_Vec: Vec<Box<dyn Dyn_Vec>> = new_Dyn_Vec();
                Dyn_Vec.push(Box::new("151515"));
                Dyn_Vec.push(Box::new(15));
                Dyn_Vec.push(Box::new(String::from("string")));
                Dyn_Vec.push(Box::new(1.02));
                //println dyn obj
                fn println_Dyn_Vec(h: &[Box<dyn Dyn_Vec>]) {
                    for s in h {
                        println!("{}", s.tostring());
                    }
                }

                println_Dyn_Vec(&Dyn_Vec);

                println!("{:?}", Dyn_Vec);
                //impl Clone for trait object
                dyn_clone::clone_trait_object!(Dyn_Vec);
                #[derive(Clone)]
                struct Each_Dyn_Vec(Box<dyn Dyn_Vec>);
                let first = Dyn_Vec[0].clone();
                println!("{}", first);

                // fast way to implment object trait
                use thin_trait_object::*;
                #[thin_trait_object]
                trait Addable {
                    fn add(&self, other: &str) -> String;
                }
                impl Addable for String {
                    fn add(&self, other: &str) -> String {
                        format!("{}{}", self, other)
                    }
                }
                impl Addable for &str {
                    fn add(&self, other: &str) -> String {
                        format!("{}{}", self, other)
                    }
                }
                impl Addable for Vec<i32> {
                    fn add(&self, other: &str) -> String {
                        let mut v = self.clone();
                        let re = match other.parse::<i32>() {
                            Ok(r) => {
                                v.push(r);
                                v
                            }
                            Err(r) => v,
                        };
                        format!("{:?}", re)
                    }
                }
                impl Addable for Vec<String> {
                    fn add(&self, other: &str) -> String {
                        let mut v = self.clone();
                        v.push(other.to_string());
                        format!("{:?}", v)
                    }
                }
                //move occurs because value has type `String`, which does not implement the `Copy` trait
                //when this error ust yhe trait
                #[thin_trait_object]
                trait Cloneable {
                    fn clone_by_index(&self, index: usize) -> String;
                }
                impl Cloneable for Vec<String> {
                    fn clone_by_index(&self, index: usize) -> String {
                        let s = self.to_owned();
                        format!("{}", &s[index])
                    }
                }

                let s1 = BoxedAddable::new("String".to_string()).add("add");
                let s2 = BoxedAddable::new("&str").add("add");
                let s3 = "ok".add("add");
                let s4 = vec![15, 2].add("15151"); //[15, 2, 15151]
                let s5 = vec![format!("ok")].add("add str"); //[15, 2, 15151]
                let s6 = vec![format!("ok")].clone_by_index(0);
                println!("{}", s1);
                println!("{}", s2);
                println!("{}", s3);
                println!("{}", s4);
                println!("{}", s5);
                println!("{}", s6);
            }
            dyn_obj_vec();
        }
    }
```

