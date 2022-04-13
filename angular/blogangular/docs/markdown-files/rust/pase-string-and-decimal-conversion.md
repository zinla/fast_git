## pase-string-and-decimal-conversion

```rust
/**
 * pase string or decimal conversion
 */
#[allow(dead_code)]
#[allow(unused_variables)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod pase_string_and_decimal_conversion {
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

