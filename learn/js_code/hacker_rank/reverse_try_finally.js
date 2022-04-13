// reverse string 
function reverseString(s) {
  
    try{
      // Can be chained, but it damages readability
      var s = s.split("").reverse().join("");
      console.log(s);
    }
    catch(e){
      console.log(e.message); // Use .message, or you'll get more than expected.
      console.log(s);
    }
  
  }
let str = Number(12515);
reverseString(str);


// try{

// }
// catch{
//     // catchs erroe massage
// }
// finally{
//     // run any time
// }
