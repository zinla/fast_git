function alphabetPosition(text){
    var arr = [];
    const regA = /[A-Z]/gi;
    const found = text.match(regA);
    for(var i =0;i<found.length;i++){
        arr.push(found[i].charCodeAt());
    }
    text=arr;
    return text;
}
let match = alphabetPosition("AAAbbCC15151515")
console.log(match)


