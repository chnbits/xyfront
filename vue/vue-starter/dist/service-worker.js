if(!self.define){let e,s={};const t=(t,r)=>(t=new URL(t+".js",r).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const c=e=>t(e,n),o={module:{uri:n},exports:u,require:c};s[n]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(i(...e),u)))}}define(["./workbox-29b31176"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-starter"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/app.ff4217c2.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/manifest.a6cf656c.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/vendor.51959010.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/index.html",revision:"e6305b1a41c49f523155e4524b2beb8e"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/app.21cd2f66.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/manifest.55a40b4f.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/vendor.a51e9038.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/logo.png",revision:"eb0e6ac50f334d95e0e524dd0a81dd4b"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/manifest.json",revision:"18856f89300cb9d5fe9740e2f0bb81cb"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
