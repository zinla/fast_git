import StringCrypto from "string-crypto";

const stringToProtect = "ALEN ANDRY";

const password = "dnrops";

const { encryptString, decryptString } = new StringCrypto();

const options = {
  salt: "2f0ijf2039j23r09j2fg45o9ng98um4o",
  iterations: 10,
  digest: "sha512-256" as const, // one of: 'blake2b512' | 'blake2s256' | 'md4' | 'md5' | 'md5-sha1' | 'mdc2' | 'ripemd160' | 'sha1' | 'sha224' | 'sha256' | 'sha3-224' | 'sha3-256' | 'sha3-384' | 'sha3-512' | 'sha384' | 'sha512' | 'sha512-224' | 'sha512-256' | 'sm3' | 'whirlpool';
};

const { encryptString: saferEncrypt, decryptString: saferDecrypt } =
  new StringCrypto(options);

let encryptedString = encryptString(stringToProtect, password);

console.log("Encrypted String:", encryptedString);

console.log("Decrypted String:", decryptString(encryptedString, password));
