(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user-safeSet"],{"1a5c":function(t,e,a){var n=a("7642");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("6a041512",n,!0,{sourceMap:!1,shadowMode:!1})},"1dcf":function(t,e,a){"use strict";a.r(e);var n=a("ddb8"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},2066:function(t,e,a){"use strict";var n={xyListItem:a("85a5").default,xySwitch:a("4db4").default,xySafetyVerify:a("e5d1").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"p-l-sm"},[a("v-uni-view",{staticClass:"header p-l-xs p-t-md p-b"},[a("v-uni-view",{staticClass:"title ts-24 tw6"},[t._v("安全设置")])],1),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"手机绑定"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["mobile"]?t._e():a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/reg_mobile/user/bind"})}}},[t._v("绑定")]),t.safeSet["mobile"]?a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/reg_mobile/user/change"})}}},[t._v("换绑")]):t._e()],1)],1):t._e(),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"邮箱绑定"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["mobile"]?t._e():a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/reg_email/user/bind"})}}},[t._v("绑定")]),t.safeSet["mobile"]?a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/reg_email/user/change"})}}},[t._v("换绑")]):t._e()],1)],1):t._e(),a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"登录密码"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["password"]&&t.safeSet["password"]["isset"]?a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"./resetPassword"})}}},[t._v("修改")]):t._e(),t.safeSet["password"]&&!t.safeSet["password"]["isset"]?a("v-uni-text",[t._v("设置")]):t._e()],1)],1),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("paypwd")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"资金密码"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["paypwd"]&&t.safeSet["paypwd"]["isset"]?a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/paypwd/pwd/change"})}}},[t._v("修改")]):t._e(),t.safeSet["paypwd"]&&!t.safeSet["paypwd"]["isset"]?a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/paypwd/pwd/set"})}}},[t._v("设置")]):t._e()],1)],1):t._e(),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0?a("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"谷歌验证"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["gauth"]?t._e():a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/gauth/user/bind"})}}},[t._v("绑定")]),t.safeSet["gauth"]?a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/gauth/user/change"})}}},[t._v("换绑")]):t._e()],1)],1):t._e(),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0||t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0||t.$store.state.app.siteInfo.versionFuncsAll.indexOf("email")>=0?a("xy-list-item",{attrs:{type:"link",more:"",title:"二次验证"}},[a("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[a("xy-switch",{attrs:{size:"medium",trueValue:1,falseValue:0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handle2fa.apply(void 0,arguments)}},model:{value:t.mfa,callback:function(e){t.mfa=e},expression:"mfa"}})],1)],1):t._e(),a("xy-safety-verify",{ref:"sv",on:{"verify-request":function(e){arguments[0]=e=t.$handleEvent(e),t.handle2fa.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.verifyData,callback:function(e){t.verifyData=e},expression:"verifyData"}})],1)},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},4237:function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("c964")),i={data:function(){return{safeSet:{},verifyData:"",mfa:0}},onLoad:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadSafeSet();case 2:case"end":return e.stop()}}),e)})))()},methods:{close:function(){this.mfa=this.safeSet["2fa"]},handle2fa:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={action:0},0==this.mfa&&(a.action=1),this.verifyData&&(a._verify=this.verifyData),t.next=5,this.util.request({url:"/v1/user/user/loginVerifySet",data:a,method:"put"});case 5:if(n=t.sent,200!=n.code){t.next=13;break}this.$refs.sv.close(),this.util.showToast({title:n.msg,icon:"success",duration:2e3}),this.loadSafeSet(),this.verifyData="",t.next=19;break;case 13:if(this.mfa=this.safeSet["2fa"],401003!=n.code){t.next=17;break}return this.$refs.sv.open(n.data.verifyList),t.abrupt("return");case 17:return this.util.showToast({title:n.msg,icon:"loading",duration:3e3}),t.abrupt("return",!1);case 19:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadSafeSet:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user/user/safeSet",method:"get"});case 2:a=e.sent,200==a.code?(t.safeSet=a.data.dataList,t.mfa=t.safeSet["2fa"]):t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=i},7642:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-4600fcd2]{background-color:#fff}body.?%PAGE?%[data-v-4600fcd2]{background-color:#fff}',""]),t.exports=e},9065:function(t,e,a){"use strict";var n=a("1a5c"),r=a.n(n);r.a},ac0b:function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},c45f:function(t,e,a){"use strict";a.r(e);var n=a("2066"),r=a("f63f");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("9065");var o,s=a("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4600fcd2",null,!1,n["a"],o);e["default"]=l.exports},d59a:function(t,e,a){"use strict";a.r(e);var n=a("ac0b"),r=a("1dcf");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("e585");var o,s=a("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7a3a14f0",null,!1,n["a"],o);e["default"]=l.exports},ddb8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var a=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?a+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?a+="xy-button-fillet-left":"circleRight"==t&&(a+="xy-button-fillet-right")),a}}};e.default=n},e2db:function(t,e,a){var n=a("e738");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("0d032940",n,!0,{sourceMap:!1,shadowMode:!1})},e585:function(t,e,a){"use strict";var n=a("e2db"),r=a.n(n);r.a},e738:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-7a3a14f0]{padding:12px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-7a3a14f0]{display:block}.xy-button-large[data-v-7a3a14f0]{padding:14px 8px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-7a3a14f0]{padding:8px 8px;font-size:13px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-7a3a14f0]{padding:4px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-7a3a14f0]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-7a3a14f0]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-7a3a14f0]{border-radius:25px}.xy-white.xy-button-fillet[data-v-7a3a14f0]::after{border-radius:40px}.xy-button-outline-fillet[data-v-7a3a14f0]::after{border-radius:40px}.xy-button-fillet-left[data-v-7a3a14f0]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-7a3a14f0]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-7a3a14f0]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-7a3a14f0]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-7a3a14f0]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-7a3a14f0]{color:#0cbf92;background:none}.xy-primary-outline[data-v-7a3a14f0]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-7a3a14f0]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-7a3a14f0]{background:#0cbf92;color:#fff}.xy-info[data-v-7a3a14f0]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-7a3a14f0]{color:#5b60ff;background:none}.xy-info-outline[data-v-7a3a14f0]::after{border:1px solid #5b60ff}.xy-success[data-v-7a3a14f0]{background:#19be6b;color:#fff}.xy-success-outline[data-v-7a3a14f0]{color:#19be6b;background:none}.xy-success-outline[data-v-7a3a14f0]::after{border:1px solid #19be6b}.xy-error[data-v-7a3a14f0]{background:#dd524d;color:#fff}.xy-error-outline[data-v-7a3a14f0]{color:#dd524d;background:none}.xy-error-outline[data-v-7a3a14f0]::after{border:1px solid #dd524d}.xy-warning[data-v-7a3a14f0]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-7a3a14f0]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-7a3a14f0]::after{border:1px solid #f0ad4e}.xy-white[data-v-7a3a14f0]{background:#fff;color:#333}.xy-white-outline[data-v-7a3a14f0]{color:#fff;background:none}.xy-white-outline[data-v-7a3a14f0]::after{border:1px solid #fff}.xy-black[data-v-7a3a14f0]{background:#000;color:#fff}.xy-black-outline[data-v-7a3a14f0]{color:#333;background:none}.xy-black-outline[data-v-7a3a14f0]::after{border:1px solid #333}.xy-translucent[data-v-7a3a14f0]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-7a3a14f0]{background:#ededed}.xy-phcolor-gray[data-v-7a3a14f0]{background:#ccc}.xy-divider-gray[data-v-7a3a14f0]{background:#eaeef1}.xy-btn-gray[data-v-7a3a14f0]{background:#ededed;color:#999}.xy-hover-gray[data-v-7a3a14f0]{background:#f7f7f9}.xy-bg-gray[data-v-7a3a14f0]{background:#fafafa}.xy-light-blue[data-v-7a3a14f0]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-7a3a14f0]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-7a3a14f0]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-7a3a14f0]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-7a3a14f0]{color:#999;background:none}.xy-gray-outline[data-v-7a3a14f0]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},f63f:function(t,e,a){"use strict";a.r(e);var n=a("4237"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a}}]);