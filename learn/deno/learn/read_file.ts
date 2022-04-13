// Deno.open use to open file
const file = Deno.open("text_file.txt");
const txt: string = await Deno.readTextFile("text_file.txt");
console.log(txt.length);
console.log(txt.replace("h", "H"));

// await is a promise
Deno.copy(file, Deno.stdout);
file.close();
