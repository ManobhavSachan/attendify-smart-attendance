if(!self.define){let e,a={};const t=(t,s)=>(t=new URL(t+".js",s).href,a[t]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=a,document.head.appendChild(e)}else e=t,importScripts(t),a()})).then((()=>{let e=a[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const r=e=>t(e,i),g={module:{uri:i},exports:c,require:r};a[i]=Promise.all(s.map((e=>g[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/BoardingPagetext.png",revision:"cae3ed2907b37f69044a48917b7c7f01"},{url:"/_next/static/0GtivrZjjSn2SNy_Egg9y/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/0GtivrZjjSn2SNy_Egg9y/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/190-5cff19c8091c8791.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/30-ecc346eabec416f6.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/52ab8b6c-e3eca8dd1ec8e45d.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/924-6ee1ccedd989e766.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/_not-found/page-edaeea13541649c5.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/home/page-85a8b289a3e66cce.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/layout-5a1e3a3a910be05d.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/onboarding/page-5b341333f3fbdb22.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/page-803970377c45c9c9.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/checkattendance/page-e784e2dfac5185c4.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/page-78340ad6309a0bef.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/friday/page-6d96d8431653f0f7.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/monday/page-6eb93af098178318.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/page-d26a9a739fa201f1.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/saturday/page-50c88b3f5f7e8a13.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/thursday/page-8855cfdcf67fb897.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/tuesday/page-7631cec472172957.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/update/page-39c02713e5733bdd.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/student/timetable/wednesday/page-03d22a51e5c20772.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/checkattendance/page-13de791ecf81487e.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/page-9c7a6ba80890f5af.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/registernew/page-7ffed2d3853b5b77.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/snapattendance/page-572bfbf0f680fd4d.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/friday/page-cebd0dea22d96531.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/monday/page-0eecd312c815e885.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/page-e29abf20df8385b7.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/saturday/page-28e31ad952640db9.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/thursday/page-6770d08735f3c6c5.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/tuesday/page-eaeec30b49d1b50d.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/update/page-010fb363e62954b6.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/app/teacher/timetable/wednesday/page-74472665d235dc42.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/fd9d1056-be48aeae6e94b8d1.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/main-5de9bcca37ff52ca.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/main-app-c11c53d9e0d7c88d.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-9ad53b9ecd5d819b.js",revision:"0GtivrZjjSn2SNy_Egg9y"},{url:"/_next/static/css/6e70c03610b8f49f.css",revision:"6e70c03610b8f49f"},{url:"/_next/static/css/83a0b82c375a6aa2.css",revision:"83a0b82c375a6aa2"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Background.134f55b4.png",revision:"134f55b4"},{url:"/_next/static/media/Logo.98ec7a37.png",revision:"29ff4d161a098f6b31eb32533dbaa1d4"},{url:"/_next/static/media/Teacher Screen.33f648a5.png",revision:"6307c7bd761dc01c1c667305fa5a9830"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/checkatt.a1f144b1.png",revision:"b9ac4971aae2d67a8ef1b301449d22b2"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/namelogo.9bc18944.png",revision:"36db95224ae7d2a8c936eebf821f546c"},{url:"/_next/static/media/student page.b5cece70.png",revision:"d21998d72f48abd065633350308068ed"},{url:"/android-launchericon-144-144.png",revision:"c831674af1277a03224153a01a5fc8f3"},{url:"/android-launchericon-192-192.png",revision:"f912670a190f9f7d321720833479d062"},{url:"/android-launchericon-512-512.png",revision:"64b9d12f1258c408927953939d566799"},{url:"/manifest.json",revision:"2cb6948fb76fc44e413ee6d7b75687eb"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
