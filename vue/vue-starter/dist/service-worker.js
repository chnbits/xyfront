if(!self.define){let e,s={};const t=(t,r)=>(t=new URL(t+".js",r).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let u={};const c=e=>t(e,n),d={module:{uri:n},exports:u,require:c};s[n]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(i(...e),u)))}}define(["./workbox-29b31176"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-starter"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/app.4eeb2178.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/manifest.d8ab6a89.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/css/vendor.d6610a33.css",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/index.html",revision:"b68a944cde6dcd2d94d8a36171324c8f"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/app.dccaaa49.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/manifest.a2f49dac.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/js/vendor.3a5db7d5.js",revision:null},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/logo.png",revision:"eb0e6ac50f334d95e0e524dd0a81dd4b"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/manifest.json",revision:"18856f89300cb9d5fe9740e2f0bb81cb"},{url:"https://cdn.jiangruyi.com/vue/vue-starter/dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
