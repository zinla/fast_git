var aes256 = require("aes256");

var key = "dnrops";
var plaintext = "Alen";
var buffer = Buffer.from(plaintext);

var cipher = aes256.createCipher(key);

var encryptedPlainText = cipher.encrypt(plaintext);
console.log(encryptedPlainText);
var decryptedPlainText = cipher.decrypt(encryptedPlainText);
console.log(decryptedPlainText);

// plaintext === decryptedPlainText

var encryptedBuffer = cipher.encrypt(buffer);
// console.log(encryptedBuffer);
var decryptedBuffer = cipher.decrypt(encryptedBuffer);
plaintext = decryptedBuffer.toString("utf8");
// console.log(plaintext);
