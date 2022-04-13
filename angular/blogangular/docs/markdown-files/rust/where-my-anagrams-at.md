## where-my-anagrams-at

```rust
/**
 * Where my anagrams at?
 * https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/rust
 * What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

元素种类相同,出现次数相同=>true
元素种类不相同,出现次数不相同=>false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.

 */
#[allow(dead_code)]
#[allow(unused_variables)]
#[allow(unused)]
#[allow(non_snake_case)]
pub mod where_my_anagrams_at {
    fn anagrams(word: &str, words: &[String]) -> Vec<String> {
        // your code here
        fn is_same(word1: &str, word2: &str) -> bool {
            fn ordered_count(sip: &str) -> Vec<(char, i32)> {
                use std::collections::BTreeMap;
                let sip = sip.to_owned();
                let set_sip = sip.clone();
                let mut arr_sip: Vec<char> = set_sip.chars().collect();
                arr_sip.sort();
                arr_sip.reverse();
                let mut bmap = BTreeMap::new();
                for x in arr_sip {
                    bmap.insert(x, count_x_in_str(&sip, x));
                }
                fn count_x_in_str(sip: &str, target: char) -> i32 {
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
            if ordered_count(word1).eq(&ordered_count(word2)) {
                return true;
            } else {
                return false;
            }
        }
        let mut re: Vec<String> = vec![];
        for item in words.iter() {
            if is_same(word, item) {
                re.push(item.to_owned());
            }
        }
        re
    }
    //other solution
    fn anagrams1(word: &str, words: &[String]) -> Vec<String> {
        use itertools::Itertools;
        let cs = word.chars().sorted().collect_vec();
        words
            .iter()
            .filter(|s| s.chars().sorted().collect_vec() == cs)
            .cloned()
            // .map(|s|s.to_owned()) //the same to cloned()
            .collect()
    }
    pub fn run() {}

    #[cfg(test)]
    mod tests {
        use super::*;
        #[test]
        fn sample_tests() {
            do_test("abba", &["aabb", "abcd", "bbaa", "dada"], &["aabb", "bbaa"]);

            do_test(
                "racer",
                &["crazer", "carer", "racar", "caers", "racer"],
                &["carer", "racer"],
            );
        }

        fn do_test(word: &str, words: &[&str], exp: &[&str]) {
            let words: Vec<String> = words.iter().map(|w| w.to_string()).collect();
            let expected: Vec<String> = exp.iter().map(|w| w.to_string()).collect();
            let got = anagrams(word, &words);
            assert_eq!(
                got, expected,
                "Failed with word: \"{}\"\nwords: {:#?}",
                word, words
            );
        }
    }
}
```

