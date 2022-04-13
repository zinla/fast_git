## Rust implement AEC encryption and decryption

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
