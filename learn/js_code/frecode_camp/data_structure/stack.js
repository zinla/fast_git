// This is a stack
var letters = [];

var word = "car"

var rword = "";

// put a letter of word into stack
for(var i = 0;i < word.length;i++){
    letters.push(word[i]);
}
// pop off the stact in reverse order
for(var i = 0;i < word.length;i++){
    rword += letters.pop();
}
console.log(rword);
if(rword === word){
    console.log(word+" is a palindrome(回文)");
}
else{
    console.log(word+" is not palindrome(回文)")
}
