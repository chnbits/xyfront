(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-nickname"],{"1c8a":function(t,e,n){"use strict";var i={xyImage:n("43ba").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-label",{staticClass:"xy-list-item b-b",class:"t-"+t.type,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},["checkbox"==t.selectType?n("v-uni-view",{staticClass:"check"},[n("v-uni-checkbox",{attrs:{value:t.value,checked:t.checked}})],1):t._e(),t.icon||t.image?n("v-uni-view",{staticClass:"left"},[t._t("image",[n("v-uni-view",[n("v-uni-text",{staticClass:"icon text-gray",class:t.icon,style:{color:t.iconColor}})],1),t.image?n("v-uni-view",[n("xy-image",{staticClass:"image",class:t.imageSharp,attrs:{src:t.image,mode:"scaleToFill"}})],1):t._e(),t._t("tag",[n("v-uni-view",{staticClass:"tag"})])])],2):t._e(),n("v-uni-view",{staticClass:"content",style:t.contentStyle},[n("v-uni-view",{staticClass:"title"},[t._t("title",[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{style:{"font-size":t.titleFs}},[t._v(t._s(t.title))])],1),n("v-uni-view",{staticClass:"right"},[t._t("titleRight",[n("v-uni-text",[t._v(t._s(t.titleRight))])])],2)])],2),n("v-uni-view",{staticClass:"info"},[t._t("info",[t.info?n("v-uni-view",{staticClass:"left p-t-xs"},[n("v-uni-text",[t._v(t._s(t.info))])],1):t._e(),t.infoRight?n("v-uni-view",{staticClass:"right p-t-xs"},[t._t("infoRight",[n("v-uni-text",[t._v(t._s(t.infoRight))])])],2):t._e()])],2)],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"current"},[t._t("current",[n("v-uni-text",[t._v(t._s(t.current))])])],2),t.more?n("v-uni-view",{staticClass:"more"},[t._t("more",[n("v-uni-text",{class:t.more})])],2):t._e()],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"26a2":function(t,e,n){"use strict";var i=n("ed4c"),a=n.n(i);a.a},"302a":function(t,e,n){"use strict";n.r(e);var i=n("821f"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"32b8":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"xyListItem",props:{value:{type:[String,Number],default:""},selectType:{type:String,default:""},checked:{type:Boolean,default:!1},uid:{type:Number,default:0},needLogin:{type:Boolean,default:!1},url:{type:String,default:""},loginUrl:{type:String,default:"/pages/core/user/login"},type:{type:String,default:""},icon:{type:String,default:""},iconColor:{type:String,default:""},image:{type:String,default:""},imageSharp:{type:String,default:""},title:{type:String,default:""},titleFs:{type:String,default:"14px"},contentStyle:{type:String,default:""},info:{type:String,default:""},current:{type:String,default:""},more:{type:String,default:""},titleRight:{type:String,default:""},infoRight:{type:String,default:""}},data:function(){return{}},created:function(){},methods:{handleClick:function(){this.url?this.needLogin&&!this.uid?uni.navigateTo({url:this.loginUrl}):uni.navigateTo({url:this.url}):this.$emit("click")}}};e.default=i},"43ba":function(t,e,n){"use strict";n.r(e);var i=n("8c33"),a=n("a32b");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("26a2");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"623a2f9e",null,!1,i["a"],o);e["default"]=c.exports},"4a5f":function(t,e,n){"use strict";var i=n("608f"),a=n.n(i);a.a},"4c68":function(t,e,n){"use strict";(function(t){n("ac1f"),n("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,e){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(e){var n=this;if(e.match(/(http:|https:)/)){var i=this.util.imageCache(e,(function(t){n.native=t,n.complete&&n.complete(t)}));t.log(e+"->"+i),this.native=i}else this.native=e},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};e.default=i}).call(this,n("5a52")["default"])},5080:function(t,e,n){"use strict";n.r(e);var i=n("c7d0"),a=n("302a");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"0f598fa2",null,!1,i["a"],o);e["default"]=c.exports},5729:function(t,e,n){"use strict";n.r(e);var i=n("32b8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"608f":function(t,e,n){var i=n("7ac5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("51ccd8e8",i,!0,{sourceMap:!1,shadowMode:!1})},"7ac5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-list-item[data-v-5728d68e]{position:relative;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;min-height:50px;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px}.xy-list-item .check[data-v-5728d68e] uni-checkbox .uni-checkbox-input{color:#0cbf92!important;border-radius:20px!important}.xy-list-item .check[data-v-5728d68e] uni-checkbox .uni-checkbox-input:hover, .xy-list-item .check[data-v-5728d68e] uni-checkbox .uni-checkbox-input.uni-checkbox-input-checked{border-color:#0cbf92}.xy-list-item .check-noborder[data-v-5728d68e] uni-checkbox .uni-checkbox-input{border:0!important}.xy-list-item .left[data-v-5728d68e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;line-height:1;padding-right:5px}.xy-list-item .left .icon[data-v-5728d68e]{font-size:18px;margin-right:5px}.xy-list-item .left .image[data-v-5728d68e]{width:100px;height:72px}.xy-list-item .left .image.round[data-v-5728d68e]{width:72px;height:72px;border-radius:50%}.xy-list-item .content[data-v-5728d68e]{height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-align-self:center;align-self:center}.xy-list-item .content .title[data-v-5728d68e]{padding:8px 0;font-size:15px;color:#262b3a;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .title .right[data-v-5728d68e]{font-size:12px;-webkit-transform:scale(.9);transform:scale(.9);color:#909399}.xy-list-item .content .info[data-v-5728d68e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.xy-list-item .content .info .left[data-v-5728d68e]{font-size:14px;color:#909399}.xy-list-item .content .info .right[data-v-5728d68e]{font-size:12px;color:#909399}.xy-list-item .right[data-v-5728d68e]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%}.xy-list-item .right .current[data-v-5728d68e]{font-size:12px;color:#909399}.xy-list-item .right .more[data-v-5728d68e]{margin-right:-5px;font-size:18px;color:#909399}.xy-list-item.t-link .content .title .left uni-text[data-v-5728d68e]{font-size:15px!important;font-weight:400!important;color:#303133!important}.xy-list-item.t-media[data-v-5728d68e]{padding:8px}.xy-list-item.t-media .content .title[data-v-5728d68e]{padding:0}.xy-list-item.t-button .content[data-v-5728d68e]{width:auto}.xy-list-item.t-button .content .info[data-v-5728d68e]{display:none}.xy-list-item.t-input .content .title .left[data-v-5728d68e]{min-width:40px}.xy-list-item.t-input .content .title .right[data-v-5728d68e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:15px;-webkit-transform:scale(1);transform:scale(1);white-space:nowrap;text-overflow:ellipsis;display:block;width:100px}',""]),t.exports=e},"821f":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r=i(n("f3f3")),o=n("2f62"),s={computed:(0,r.default)({},(0,o.mapState)(["app","user"])),data:function(){return{nickname:""}},onLoad:function(t){this.nickname=this.user.userInfo.nickname},methods:{syncData:function(t){this.nickname=t.detail.value},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/core/user/nickname",data:{nickname:t.nickname},method:"put"});case 2:n=e.sent,200==n.code?(i=t.user.userInfo,i.nickname=t.nickname,t.$store.commit("user/setUserInfo",i),t.util.showToast({title:n.msg,icon:"success",duration:1e3}),uni.navigateBack()):t.util.showToast({title:n.msg,icon:"loading",duration:2e3});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=s},"85a5":function(t,e,n){"use strict";n.r(e);var i=n("1c8a"),a=n("5729");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("4a5f");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5728d68e",null,!1,i["a"],o);e["default"]=c.exports},"8c33":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.load.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}})},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},a32b:function(t,e,n){"use strict";n.r(e);var i=n("4c68"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},a3b1:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-623a2f9e]{width:100%;height:100%}",""]),t.exports=e},c7d0:function(t,e,n){"use strict";var i={xyListItem:n("85a5").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("xy-list-item",{attrs:{type:"input",more:"xyicon xyicon-right",title:"昵称"}},[n("template",{slot:"title"},[n("v-uni-input",{staticStyle:{color:"#666"},attrs:{type:"text",placeholder:t.user.userInfo.nickname,value:t.nickname},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.syncData.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.syncData.apply(void 0,arguments)}}})],1)],2),n("v-uni-view",{staticClass:"m-t p-l-sm p-r-sm"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},ed4c:function(t,e,n){var i=n("a3b1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6d3e1050",i,!0,{sourceMap:!1,shadowMode:!1})}}]);