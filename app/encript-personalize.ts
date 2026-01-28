import { AES, enc } from 'crypto-js';

export class EncriptPersonalize {
  /**
   * Encriptacion de información
   */
  encryptData(data: string, key: string) {
    return AES.encrypt(data, key).toString() ?? '';
  }

  /**
   *
   *
   * Descencriptacion de información
   */
  decryptData(data: string, key: string) {
    return AES.decrypt(data, key).toString(enc.Utf8) ?? '';
  }
}
