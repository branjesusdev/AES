'use client';

import { RefObject, useRef, useState } from 'react';

import { EncriptSimple } from '../encript-simple';

export default function AesSimple() {
  const [encrypt, setEncrypt] = useState('');
  const crypt: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const [decrypt, setDecrypt] = useState('');
  const decryptIn: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleDeCrypt = () => {
    const cryptAES = new EncriptSimple();
    const cadena = decryptIn?.current.value ?? '';
    const result = cryptAES.decryptData(cadena);
    setDecrypt(result);
  };

  const handleCrypt = () => {
    const cryptAES = new EncriptSimple();
    const cadena = crypt?.current.value ?? '';

    if (cadena.length == 0) return;

    const result = cryptAES.encryptData(cadena);
    setEncrypt(result);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl text-yellow-300">AES Simple</h1>

      <a
        href="/"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        AES 256
      </a>

      <div className="flex flex-col gap-5 border p-5 rounded-2xl min-w-[20rem] border-yellow-300">
        <div className="">
          <input
            ref={decryptIn}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="/WeEur85p7Uh8GK+xAMQeQ=="
          />
          <button
            onClick={handleDeCrypt}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            descifrar
          </button>

          <div className="p-5 bg-white/50 rounded-xl">{decrypt}</div>
        </div>
      </div>

      <div className="flex flex-col gap-5 border p-5 rounded-2xl min-w-[20rem] border-yellow-300">
        <div className="">
          <input
            ref={crypt}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Hola"
          />
          <button
            onClick={handleCrypt}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 my-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            cifrar
          </button>

          <div className="p-5 bg-white/50 rounded-xl">{encrypt}</div>
        </div>
      </div>
    </main>
  );
}
