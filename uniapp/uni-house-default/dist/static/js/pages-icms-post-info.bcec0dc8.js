(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-icms-post-info"],{1554:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"xy-post"},[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"titleBadge"},[t._t("titleBadge",[t._v(t._s(t.titleBadge))])],2)],1),n("v-uni-view",{staticClass:"info"},[t._t("info",[n("v-uni-view",{staticClass:"left"},[t.author?n("v-uni-text",{staticClass:"author m-r-sm"},[t._v(t._s(t.author))]):t._e(),t.postTime?n("v-uni-text",{staticClass:"time"},[t._v(t._s(t._f("formatTime")(t.postTime)))]):t._e()],1),n("v-uni-view",{staticClass:"right"},[t.viewCount?n("v-uni-text",[t._v("阅读 "+t._s(t.viewCount))]):t._e()],1)])],2),n("v-uni-view",{staticClass:"content"},[n("jyf-parser",{ref:"article",attrs:{html:t.content}})],1),t.tip?n("v-uni-view",{staticClass:"tip m-t"},[t._v(t._s(t.tip))]):t._e(),n("v-uni-view",{staticClass:"comment-box"},[n("v-uni-view",{staticClass:"comment"}),n("v-uni-view",{staticClass:"action"})],1)],1)},a=[]},"1c99":function(t,e,n){"use strict";n.r(e);var i=n("dcd3"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"258d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},2840:function(t,e,n){"use strict";n.r(e);var i=n("258d"),r=n("1c99");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5082");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"a3cd6254",null,!1,i["a"],o);e["default"]=c.exports},"2a66":function(t,e,n){var i=n("ec3f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("5fff7cca",i,!0,{sourceMap:!1,shadowMode:!1})},"3dd4":function(t,e,n){"use strict";n.r(e);var i=n("ae930"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"4cbe":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={xyPost:n("5f63").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"article"},[n("xy-post",{attrs:{title:t.info.title,content:t.info.content,viewCount:t.info.viewCount,author:"admin",postTime:t.info.post_time}})],1)},a=[]},5082:function(t,e,n){"use strict";var i=n("2a66"),r=n.n(i);r.a},5387:function(t,e,n){"use strict";n.r(e);var i=n("9592"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"5f63":function(t,e,n){"use strict";n.r(e);var i=n("1554"),r=n("3dd4");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("9372");var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"4f7eefc7",null,!1,i["a"],o);e["default"]=c.exports},"70b1":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-post[data-v-4f7eefc7]{padding:18px 14px 51px 14px;background:#fff}.xy-post .header[data-v-4f7eefc7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-post .header .title[data-v-4f7eefc7]{font-size:22px;font-weight:500;text-align:justify}.xy-post .info[data-v-4f7eefc7]{padding-top:15px;padding-bottom:15px;font-size:13px;color:#999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-post .info .left .author[data-v-4f7eefc7]{color:#2d8cf0}.xy-post .content[data-v-4f7eefc7]{font-size:16px;padding-bottom:18px;line-height:28px;text-align:justify;word-break:break-all;word-wrap:break-word}.xy-post .content img[data-v-4f7eefc7]{width:100%!important}.xy-post .tip[data-v-4f7eefc7]{color:red}',""]),t.exports=e},9372:function(t,e,n){"use strict";var i=n("ddff"),r=n.n(i);r.a},9592:function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("ac1f"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),a=(n("2f62"),{data:function(){return{id:0,info:{extra:{from_title:""}}}},onLoad:function(e){var n=this;return(0,r.default)(regeneratorRuntime.mark((function i(){var r,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:r=n,n.id=e.id,a=n.getOpenerEventChannel(),a.on("acceptDataFromOpenerPage",(function(e){t("log","----------",e.data," at pages/icms/post/info.vue:34"),r.info=e.data}));case 4:case"end":return i.stop()}}),i)})))()},onShow:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.info.title||t.loadData();case 1:case"end":return e.stop()}}),e)})))()},computed:{},onShareAppMessage:function(e){return"button"===e.from&&t("log",e.target," at pages/icms/post/info.vue:47"),{title:this.info.title,path:"/pages/icms/post/info?id="+this.id}},methods:{loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/icms/post/info/"+t.id,method:"get"});case 2:n=e.sent,200==n.code&&(n.data.info.content=n.data.info.content.replace(/\<img/gi,'<img style="max-width:100%;height:auto" '),t.info=n.data.info);case 4:case"end":return e.stop()}}),e)})))()}}});e.default=a}).call(this,n("0de9")["log"])},a173:function(t,e,n){n("ac1f"),n("1276");var i={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),n=t.split(","),i=n.length;i--;)e[n[i]]=!0;return e}t.exports=i},ae930:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("2840")),a={components:{jyfParser:r.default},name:"XyPost",props:{title:{type:String,default:""},titleBadge:{type:String,default:""},content:{type:String,default:""},postTime:{type:Number,default:0},viewCount:{type:Number,default:0},author:{type:String,default:""},tip:{type:String,default:""}},data:function(){return{}},computed:{},methods:{}};e.default=a},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var i=r(n("06c5"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,i.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},d77b:function(t,e,n){"use strict";n.r(e);var i=n("4cbe"),r=n("5387");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o,s=n("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"13a26d56",null,!1,i["a"],o);e["default"]=c.exports},dcd3:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("caad"),n("c975"),n("acd8"),n("e25e"),n("ac1f"),n("2532"),n("466d"),n("5319"),n("841c"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=i(n("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,c=(o.platform,n("a173")),u={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,i=e.split("://")[0],r=i.length;n=e[r];r++){if("/"==n&&"/"!=e[r-1]&&"/"!=e[r+1])break;i+=Math.random()>.5?n.toUpperCase():n}return i+=e.substr(r),this[t]=i}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var n=this;if(t){var i=document.createElement("div");e?this.rtf?this.rtf.appendChild(i):this.rtf=i:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=i),i.innerHTML=this._handleHtml(t,e);for(var r,o=this.rtf.getElementsByTagName("style"),u=0;r=o[u++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var l=this,f=this.rtf.getElementsByTagName("title");f.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:f[0].innerText});var d=function(t){var e=t.getAttribute("src");n.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(n.domain.includes("://")?n.domain.split("://")[0]:"")+":"+e:t.src=n.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=n.domain+"/"+e))};this.imgList.length=0;for(var p,h=this.rtf.getElementsByTagName("img"),v=0,m=0;p=h[v];v++)parseInt(p.style.width||p.getAttribute("width"))>s&&(p.style.height="auto"),d(p),p.hasAttribute("ignore")||"A"==p.parentElement.nodeName||(p.i=m++,l.imgList.push(p.getAttribute("original-src")||p.src||p.getAttribute("data-src")),p.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},l.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:l.imgList})}),p.onerror=function(){c.errorImg&&(l.imgList[this.i]=this.src=c.errorImg),l.$emit("error",{source:"img",target:this})},l.lazyLoad&&this._observer&&p.src&&0!=p.i&&(p.setAttribute("data-src",p.src),p.removeAttribute("src"),this._observer.observe(p));var g,b=this.rtf.getElementsByTagName("a"),y=(0,a.default)(b);try{for(y.s();!(g=y.n()).done;){var x=g.value;x.onclick=function(t){t.stopPropagation();var e=!0,n=this.getAttribute("href");if(l.$emit("linkpress",{href:n,ignore:function(){return e=!1}}),e&&n)if("#"==n[0])l.useAnchor&&l.navigateTo({id:n.substr(1)});else{if(0==n.indexOf("http")||0==n.indexOf("//"))return!0;uni.navigateTo({url:n})}return!1}}}catch(M){y.e(M)}finally{y.f()}var w=this.rtf.getElementsByTagName("video");l.videoContexts=w;for(var _,C=0;_=w[C++];)d(_),_.style.maxWidth="100%",_.onerror=function(){l.$emit("error",{source:"video",target:this})},_.onplay=function(){if(l.autopause)for(var t,e=0;t=l.videoContexts[e++];)t!=this&&t.pause()};var k,T,A=this.rtf.getElementsByTagName("audio"),S=(0,a.default)(A);try{for(S.s();!(k=S.n()).done;){var B=k.value;d(B),B.onerror=function(){l.$emit("error",{source:"audio",target:this})}}}catch(M){S.e(M)}finally{S.f()}if(this.autoscroll){var j,O=this.rtf.getElementsByTagName("table"),I=(0,a.default)(O);try{for(I.s();!(j=I.n()).done;){var E=j.value,L=document.createElement("div");L.style.overflow="scroll",E.parentNode.replaceChild(L,E),L.appendChild(E)}}catch(M){I.e(M)}finally{I.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){n.rect=n.rtf.getBoundingClientRect(),n.rect.height==T&&(n.$emit("ready",n.rect),clearInterval(n._timer)),T=n.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var n=" ",i=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(n,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(n,".").concat(t.id):"")).boundingClientRect();this._in?i.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():i.selectViewport().scrollOffset(),i.exec((function(n){if(!n[0])return t.fail&&t.fail("Label not found");var i=n[1].scrollTop+n[0].top-(n[2]?n[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=i:uni.pageScrollTo({scrollTop:i,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var n="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var i in c.userAgentStyles)n+="".concat(i,"{").concat(c.userAgentStyles[i],"}");for(i in this.tagStyle)n+="".concat(i,"{").concat(this.tagStyle[i],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=u},ddff:function(t,e,n){var i=n("70b1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("7da84c59",i,!0,{sourceMap:!1,shadowMode:!1})},ec3f:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-a3cd6254{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-a3cd6254{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e}}]);