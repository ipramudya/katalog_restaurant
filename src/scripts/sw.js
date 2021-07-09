import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  /*
    saya tidak menggunakan SW dalam menangani POST request,
    saya telah mencari informasi terkait namun saya tidak berhasil
    menangani POST request
  */
  if (event.request.method !== 'POST') {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});
