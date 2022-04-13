const encoder = new TextEncoder();

const txt = encoder.encode("bchdbhcbdhbchdbchdbh");

//write file methed in deno
Deno.writeFile("text_file.txt", txt);
