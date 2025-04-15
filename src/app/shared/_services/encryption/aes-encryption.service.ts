import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AesEncryptionService {

  private CiKey: any;
  private initialVector: any;
  private cipherData = {
    "writer": "Ym9vb29vb29vb29tISEhIQ==",
    "helper": "c3NzaGhoaGhoaGhoISEhIQ=="
  };

  constructor() {
    this.CiKey = atob(this.cipherData.writer);
    this.initialVector = atob(this.cipherData.helper);
  }

  encryptUsingAES256(text: string) {
    const _key = CryptoJS.enc.Utf8.parse(this.CiKey);
    const _iv = CryptoJS.enc.Utf8.parse(this.initialVector);
    const encrypted = CryptoJS.AES.encrypt(text, _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    //console.log(encrypted);
    return encrypted;
  }

  decryptUsingAES256(text: string) {
    const _key = CryptoJS.enc.Utf8.parse(this.CiKey);
    const _iv = CryptoJS.enc.Utf8.parse(this.initialVector);
    const decrypted = CryptoJS.AES.decrypt(text, _key, {
      keySize: 16,
      iv: _iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);

    return decrypted;
  }
}
