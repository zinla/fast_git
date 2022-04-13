//JSON（JavaScript Object Notation）
var dog = {
    name: "Fido",
    dob:new Date(),
    legs:[1,2,3,4]
};
var jsonstr = JSON.stringify(dog);
console.log(jsonstr);
// jsonstr的值为
// {"name":"Fido","dob":"2010-04-11T22:36:22.436Z","legs":[1,2,3,4]}