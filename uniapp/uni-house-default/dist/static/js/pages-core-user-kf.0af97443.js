(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-kf"],{"260c":function(n,t,e){"use strict";e.r(t);var a=e("eecb"),o=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=o.a},"2afd":function(n,t,e){"use strict";e.r(t);var a=e("e7ed"),o=e("260c");for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e("4c55");var i,u=e("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"049b5fb7",null,!1,a["a"],i);t["default"]=c.exports},4424:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-df842a86]{\n}",""]),n.exports=t},"4c55":function(n,t,e){"use strict";var a=e("912d"),o=e.n(a);o.a},51354:function(n,t,e){"use strict";e.r(t);var a=e("dcf8"),o=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=o.a},"7a9b":function(n,t,e){var a=e("4424");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=e("4f06").default;o("fb865364",a,!0,{sourceMap:!1,shadowMode:!1})},"912d":function(n,t,e){var a=e("fe78");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=e("4f06").default;o("c9b76fe8",a,!0,{sourceMap:!1,shadowMode:!1})},"930a":function(n,t,e){"use strict";e.r(t);var a=e("a99d"),o=e("51354");for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);e("e5cc");var i,u=e("f0c5"),c=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"df842a86",null,!1,a["a"],i);t["default"]=c.exports},a99d:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-image",{staticClass:"xy-image",attrs:{src:n.native,mode:n.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:n.webp},on:{load:function(t){arguments[0]=t=n.$handleEvent(t),n.load.apply(void 0,arguments)},error:function(t){arguments[0]=t=n.$handleEvent(t),n.error.apply(void 0,arguments)}}})},r=[]},dcf8:function(n,t,e){"use strict";(function(n){e("ac1f"),e("466d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(n,t){n&&this.convert(n)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(t){var e=this;if(t.match(/(http:|https:)/)){var a=this.util.imageCache(t,(function(n){e.native=n,e.complete&&e.complete(n)}));n("log",t+"->"+a," at node_modules/xyui/flex-ui/src/xy-image/xy-image.vue:72"),this.native=a}else this.native=t},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};t.default=a}).call(this,e("0de9")["log"])},e5cc:function(n,t,e){"use strict";var a=e("7a9b"),o=e.n(a);o.a},e7ed:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var a={xyImage:e("930a").default},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("xy-image",{staticClass:"kf",attrs:{src:n.$store.state.app.siteInfo.wxkf}})],1)},r=[]},eecb:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}}};t.default=a},fe78:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,".container[data-v-049b5fb7]{text-align:center;padding-top:50px}.kf[data-v-049b5fb7]{width:300px;height:400px}",""]),n.exports=t}}]);