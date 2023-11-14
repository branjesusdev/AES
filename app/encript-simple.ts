import { AES, enc } from 'crypto-js';

// import { CryptAES } from './crypto';

export const KEY_AES_ENCRIPT = '32A014>35z(!0532';
export const KEY_AES_ENCRIPT_IV = '4827!rk)4202PB45';

export class EncriptSimple {
  /**
   * Encriptacion de información
   */
  encryptData(data: string) {
    const key = enc.Utf8.parse(KEY_AES_ENCRIPT); // Use Utf8-Encoder.
    const iv = enc.Utf8.parse(KEY_AES_ENCRIPT_IV);
    return AES.encrypt(data, key, { iv: iv }).toString() ?? '';
  }

  /**
   *
   *
   * Descencriptacion de información
   */
  decryptData(data: string) {
    const key = enc.Utf8.parse(KEY_AES_ENCRIPT); // Use Utf8-Encoder.
    const iv = enc.Utf8.parse(KEY_AES_ENCRIPT_IV);
    return AES.decrypt(data, key, { iv: iv }).toString(enc.Utf8) ?? '';
  }
}
