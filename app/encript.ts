import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

export class CryptAES {
  private readonly ALGORITHM = 'aes-256-cbc';

  public encryptData256(data: string) {
    const _key =
      '5169266562614c594f52624658684a56714833535e4a33386b41725967785449';
    const _iv = '+MbQeShVrf' + this.dateFormat();

    const encryptionKey = Buffer.from(_key, 'hex').toString('base64');
    const key = Buffer.from(encryptionKey, 'base64');
    const encryptionIv = Buffer.from(_iv, 'utf8').toString('base64');
    const iv = Buffer.from(encryptionIv, 'base64');

    const cipher = createCipheriv(this.ALGORITHM, key, iv);
    const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    return encrypted.toString('base64');
  }

  public decryptData256(data: string): string {
    const _key =
      '5169266562614c594f52624658684a56714833535e4a33386b41725967785449';
    const _iv = '+MbQeShVrf' + this.dateFormat();

    const encryptionKey = Buffer.from(_key, 'hex').toString('base64');
    const key = Buffer.from(encryptionKey, 'base64');
    const encryptionIv = Buffer.from(_iv, 'utf8').toString('base64');
    const iv = Buffer.from(encryptionIv, 'base64');

    const decipher = createDecipheriv(this.ALGORITHM, key, iv);
    let str = decipher.update(data, 'base64', 'utf8');
    str += decipher.final('utf8');
    return str;
  }

  private dateFormat() {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate().toString().padStart(2, '0');
    const formatDate = `${year + day}`;

    return formatDate;
  }
}
