var fs = require('fs');

function read(file) {
 // read binary data
 var bitmap = fs.readFileSync(file);
 // convert binary data to base64 encoded string
    return new Buffer.from(bitmap).toString().split("<A HREF=");
}

let arr = read("./url_data.txt");
// console.log(arr);
let new_arr = [];
arr.map((e) => {
    new_arr.push(`{\"url\":\ ${e.split(" ADD_DATE=")[0]}}`);
})
let data = "[{\"url\":\"https://www.instagram.com/\"}]".split("]");
console.log(new_arr);
// let json = JSON.parse(read("./kiwi_homepage.json"));

fs.writeFileSync("shiming.json", JSON.stringify(new_arr));

// console.log(JSON.stringify(json.storedItems));
