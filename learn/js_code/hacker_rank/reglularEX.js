// return the first and the last elemment is not the same 
// if the two elements are the same return the element else return null

// mathed 1
function regexVar(s) {

    let re =  /^([aeiou]).*\1$/;
    // 1- ^ asserts position at start of the string
    // 2- 1st Capturing Group ([aeiou])
    // 3- .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy)
    // 4- \1 matches the same text as most recently matched by the 1st capturing group
    // 5- $ asserts position at the end of the string
    
    return s.match(re);
}
str="ablnba";
console.log(regexVar(str));


// mathod 2

function regexVar(str) {
    //  ^ => first item matches:
    // () => stores matching value captured within
    // [aeiou] => matches any of the characters in the brackets
    // . => matches any character:
    // + => for 1 or more occurrances (this ensures str length > 3)
    // \1 => matches to previously stored match. 
        // \2 looks for matched item stored 2 instances ago 
        // \3 looks for matched item stored 3 ago, etc
    
    //  $ ensures that matched item is at end of the sequence
    
        let re = /^([aeiou]).+\1$/;
        return re;
    }