import { Injectable } from '@angular/core';

// import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptoService {
  // encrypt(data: string) {
  //   var hash = CryptoJS.AES.encrypt(
  //     JSON.stringify(data),
  //     'secret key 123'
  //   ).toString();
  //   return hash;
  // }
  // decrypt(data: any) {
  //   var bytes = CryptoJS.AES.decrypt(data, 'secret key 123');
  //   var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //   return decryptedData;
  // }

  constructor() {}
}
