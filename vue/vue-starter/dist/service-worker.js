if(!self.define){let e,s={};const t=(t,r)=>(t=new URL(t+".js",r).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const c=e=>t(e,n),o={module:{uri:n},exports:u,require:c};s[n]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(i(...e),u)))}}define(["./workbox-29b31176"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-starter"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/app.b4b45f95.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/manifest.2ebc94a8.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/vendor.d6610a33.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/index.html",revision:"e46e2c13f1c70573ce97d1495964ed1e"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/app.0510c3ea.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/manifest.654d4540.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/vendor.a51e9038.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/logo.png",revision:"eb0e6ac50f334d95e0e524dd0a81dd4b"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/manifest.json",revision:"18856f89300cb9d5fe9740e2f0bb81cb"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
