(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-settings-about"],{"0136":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"xyListItem",props:{value:{type:[String,Number],default:""},selectType:{type:String,default:""},checked:{type:Boolean,default:!1},uid:{type:Number,default:0},needLogin:{type:Boolean,default:!1},url:{type:String,default:""},loginUrl:{type:String,default:"/pages/core/user/login"},type:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},image:{type:String,default:""},imageSharp:{type:String,default:""},title:{type:String,default:""},titleFs:{type:String,default:"14px"},contentStyle:{type:String,default:""},info:{type:String,default:""},current:{type:String,default:""},more:{type:String,default:""},titleRight:{type:String,default:""},infoRight:{type:String,default:""}},data:function(){return{}},created:function(){},methods:{handleClick:function(){this.url?this.needLogin&&!this.uid?uni.navigateTo({url:this.loginUrl}):uni.navigateTo({url:this.url}):this.$emit("click")}}};e.default=i},"18ef":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),r=i(n("5530")),s=n("2f62"),o={data:function(){return{}},computed:(0,r.default)({},(0,s.mapState)(["app","user"])),onLoad:function(){},methods:{checkUpdate:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,t.util.request({url:"/v1/cloud/index/appUpdate",data:{version:t.$store.state.app.version,name:""}});case 3:i=e.sent,200==i.code?n.util.showToast({title:i.msg,icon:"success",duration:1e3}):n.util.showToast({title:i.msg,icon:"success",duration:3e3});case 5:case"end":return e.stop()}}),e)})))()}}};e.default=o},"29ec":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-41107a1f]{width:100%;height:100%}",""]),t.exports=e},"424c":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={xyListItem:n("be1c").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"logo"},[n("v-uni-image",{attrs:{src:t.app.siteInfo.logo,mode:"aspectFit"}})],1),n("v-uni-view",{staticClass:"name ts-20 tw5 p-t-md"},[t._v(t._s(t.app.siteInfo.title))]),n("v-uni-view",{staticClass:"version ts-14 m-t-xs"},[t._v("Version "+t._s(t.app.version))]),n("v-uni-view",{staticClass:"link-list m-t-lg m-l-lg m-r-lg"},[n("xy-list-item",{attrs:{type:"list",more:"xyicon xyicon-right",title:"用户协议",url:"/pages/user_agreement/agreement/info?title=用户协议",titleFs:"15px"}}),n("xy-list-item",{attrs:{type:"list",more:"xyicon xyicon-right",title:"隐私条款",url:"/pages/user_agreement/agreement/info?title=隐私条款",titleFs:"15px"}}),n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"版本更新"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkUpdate.apply(void 0,arguments)}}},[n("template",{slot:"current"},[n("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.app.version))])],1)],2)],1),n("v-uni-view",{staticClass:"text-center m-t-lg text-gray ts-12"},[n("a",{staticClass:"decoration-none text-gray",attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[t._v(t._s(t.app.siteInfo.icp))]),n("v-uni-view",[t._v(t._s(t.app.siteInfo.copyright))])],1)],1)},r=[]},"6dfa":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={xyImage:n("a067").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-label",{staticClass:"xy-list-item b-b",class:"t-"+t.type,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},["checkbox"==t.selectType?n("v-uni-view",{staticClass:"check"},[n("v-uni-checkbox",{attrs:{value:t.value+"",checked:t.checked}})],1):t._e(),t.icon||t.image?n("v-uni-view",{staticClass:"left"},[t._t("image",[n("v-uni-view",[n("v-uni-text",{staticClass:"icon text-gray",class:t.icon,style:{color:t.iconColor}})],1),t.image?n("v-uni-view",[n("xy-image",{staticClass:"image",class:t.imageSharp,attrs:{src:t.image,mode:"scaleToFill"}})],1):t._e(),t._t("tag",[n("v-uni-view",{staticClass:"tag"})])])],2):t._e(),n("v-uni-view",{staticClass:"content",style:t.contentStyle},[n("v-uni-view",{staticClass:"title"},[t._t("title",[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{style:{"font-size":t.titleFs}},[t._v(t._s(t.title))])],1),n("v-uni-view",{staticClass:"right"},[t._t("titleRight",[n("v-uni-text",[t._v(t._s(t.titleRight))])])],2)])],2),n("v-uni-view",{staticClass:"info"},[t._t("info",[t.info?n("v-uni-view",{staticClass:"left p-t-xs"},[n("v-uni-text",[t._v(t._s(t.info))])],1):t._e(),t.infoRight?n("v-uni-view",{staticClass:"right p-t-xs"},[t._t("infoRight",[n("v-uni-text",[t._v(t._s(t.infoRight))])])],2):t._e()])],2)],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"current"},[t._t("current",[n("v-uni-text",[t._v(t._s(t.current))])])],2),t.more?n("v-uni-view",{staticClass:"more"},[t._t("more",[n("v-uni-text",{class:t.more})])],2):t._e()],1)],1)},r=[]},"702a":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.load.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}})},r=[]},"719b":function(t,e,n){"use strict";(function(t){n("ac1f"),n("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,e){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(e){var n=this;if(e.match(/(http:|https:)/)){var i=this.util.imageCache(e,(function(t){n.native=t,n.complete&&n.complete(t)}));t("log",e+"->"+i," at node_modules/xyui/flex-ui/src/xy-image/xy-image.vue:72"),this.native=i}else this.native=e},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};e.default=i}).call(this,n("0de9")["log"])},"76be":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-list-item[data-v-19242fe6]{position:relative;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;min-height:50px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px}.xy-list-item .check[data-v-19242fe6] uni-checkbox .uni-checkbox-input{color:#e23435!important;border-radius:20px!important}.xy-list-item .check[data-v-19242fe6] uni-checkbox .uni-checkbox-input:hover, .xy-list-item .check[data-v-19242fe6] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{border-color:#e23435}.xy-list-item .check-noborder[data-v-19242fe6] uni-checkbox .uni-checkbox-input{border:0!important}.xy-list-item .left[data-v-19242fe6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;line-height:1;padding-right:5px}.xy-list-item .left .icon[data-v-19242fe6]{font-size:18px;margin-right:5px}.xy-list-item .left .image[data-v-19242fe6]{width:100px;height:72px}.xy-list-item .left .image.round[data-v-19242fe6]{width:72px;height:72px;border-radius:50%}.xy-list-item .content[data-v-19242fe6]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-align-self:center;align-self:center}.xy-list-item .content .title[data-v-19242fe6]{padding:8px 0;font-size:15px;color:#262b3a;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .title .right[data-v-19242fe6]{font-size:12px;-webkit-transform:scale(.9);transform:scale(.9);color:#909399}.xy-list-item .content .info[data-v-19242fe6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .info .left[data-v-19242fe6]{font-size:14px;color:#909399}.xy-list-item .content .info .right[data-v-19242fe6]{font-size:12px;color:#909399}.xy-list-item .right[data-v-19242fe6]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.xy-list-item .right .current[data-v-19242fe6]{font-size:12px;color:#909399}.xy-list-item .right .more[data-v-19242fe6]{margin-right:-5px;font-size:18px;color:#909399}.xy-list-item.t-link .content .title .left uni-text[data-v-19242fe6]{font-size:15px!important;font-weight:400!important;color:#303133!important}.xy-list-item.t-media[data-v-19242fe6]{padding:8px}.xy-list-item.t-media .content .title[data-v-19242fe6]{padding:0}.xy-list-item.t-button .content[data-v-19242fe6]{width:auto}.xy-list-item.t-button .content .info[data-v-19242fe6]{display:none}.xy-list-item.t-input .content .title .left[data-v-19242fe6]{min-width:40px}.xy-list-item.t-input .content .title .right[data-v-19242fe6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:15px;-webkit-transform:scale(1);transform:scale(1);white-space:nowrap;text-overflow:ellipsis;display:block;width:100px}',""]),t.exports=e},"7f58":function(t,e,n){var i=n("86fe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("49a03230",i,!0,{sourceMap:!1,shadowMode:!1})},"86fe":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-4f1b6731]{background:#fff}uni-page-body .container[data-v-4f1b6731]{text-align:center}uni-page-body .container .logo uni-image[data-v-4f1b6731]{height:80px}body.?%PAGE?%[data-v-4f1b6731]{background:#fff}',""]),t.exports=e},"87c6":function(t,e,n){var i=n("29ec");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("116e2206",i,!0,{sourceMap:!1,shadowMode:!1})},"8a69":function(t,e,n){"use strict";n.r(e);var i=n("424c"),a=n("d5d0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("dfcc");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"4f1b6731",null,!1,i["a"],s);e["default"]=l.exports},a067:function(t,e,n){"use strict";n.r(e);var i=n("702a"),a=n("c549");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("e1db");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"41107a1f",null,!1,i["a"],s);e["default"]=l.exports},a12a:function(t,e,n){"use strict";var i=n("b847"),a=n.n(i);a.a},b847:function(t,e,n){var i=n("76be");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6fc0daba",i,!0,{sourceMap:!1,shadowMode:!1})},be1c:function(t,e,n){"use strict";n.r(e);var i=n("6dfa"),a=n("e125");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a12a");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"19242fe6",null,!1,i["a"],s);e["default"]=l.exports},c549:function(t,e,n){"use strict";n.r(e);var i=n("719b"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d5d0:function(t,e,n){"use strict";n.r(e);var i=n("18ef"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},dfcc:function(t,e,n){"use strict";var i=n("7f58"),a=n.n(i);a.a},e125:function(t,e,n){"use strict";n.r(e);var i=n("0136"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},e1db:function(t,e,n){"use strict";var i=n("87c6"),a=n.n(i);a.a}}]);