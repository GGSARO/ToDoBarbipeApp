
self.addEventListener('install', () => {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('activate', () => {
    console.log('Service Worker activado');
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Interceptando fetch:', event.request.url);
  });
  