## rust-implment-find-and-remove-cli

```toml
[package]
name = "find_remove"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
[profile.release]
opt-level = 'z'
lto = true
codegen-units = 1
panic = 'abort'

```



```rust
use std::process::Command;

pub fn find(name: &str, path: &str) -> Vec<String> {
    let result = Command::new("find")
        .arg(path)
        .arg("-name")
        .arg(name)
        .arg("-depth")
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

fn main() {
    let arguments: Vec<String> = std::env::args().collect();
    if arguments.len() > 2 && arguments[2] == "-r" {
        let find_result = find(&arguments[1], "./");
        println!("{:?}", find_result);
        for item in &find_result {
            Command::new("rm").arg("-rf").arg(item).spawn().unwrap();
        }
    } else if arguments.len() > 1 {
        if arguments[1] == "-h" {
            println!("fast_find .git ==> current dir find all .git");
            println!("fast_find .git -r ==> current dir find all .git and remove all");
        } else {
            let find_result = find(&arguments[1], "./");
            println!("{:?}", find_result);
        }
    }
}

```

