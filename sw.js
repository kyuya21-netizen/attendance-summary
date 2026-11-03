// 설치 가능 조건을 맞추기 위한 최소 서비스 워커. 캐시는 쓰지 않고 항상 네트워크에서 받아요.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>new Response('인터넷에 연결되어 있지 않아요.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})))});
