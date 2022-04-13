## list-dir

```rust
pub mod list_dir {
        use std::fs;
        pub fn list_dir(dir: &str) -> Vec<String> {
            let files: Vec<_> = fs::read_dir("./")
                .unwrap()
                .map(|entry| {
                    entry
                        .unwrap()
                        .path()
                        .file_name()
                        .unwrap()
                        .to_owned()
                        .to_string_lossy()
                        .to_string()
                })
                .collect();
            files
        }
        pub fn run() {
            println!("{:?}", list_dir("./"));
        }
   }
```

