if(!self.define){let e,s={};const t=(t,r)=>(t=new URL(t+".js",r).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const o=e=>t(e,n),c={module:{uri:n},exports:u,require:o};s[n]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(i(...e),u)))}}define(["./workbox-29b31176"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-starter"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/app.b4b45f95.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/manifest.ed751e69.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/vendor.51959010.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/index.html",revision:"db27f5bf73a28b34d69f832f8669d8e6"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/app.58d7a42b.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/manifest.16fb51ed.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/vendor.a51e9038.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/logo.png",revision:"eb0e6ac50f334d95e0e524dd0a81dd4b"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/manifest.json",revision:"18856f89300cb9d5fe9740e2f0bb81cb"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
