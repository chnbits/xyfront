(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user-safeSet"],{"041c":function(t,e,n){"use strict";var i={xyListItem:n("85a5").default,xySwitch:n("4db4").default,xySafetyVerify:n("e5d1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"p-l-sm"},[n("v-uni-view",{staticClass:"header p-l-xs p-t-md p-b"},[n("v-uni-view",{staticClass:"title ts-24 tw6"},[t._v("安全设置")])],1),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"手机绑定"}},[n("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["mobile"]?t._e():n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/reg_mobile/user/bind"})}}},[t._v("绑定")]),t.safeSet["mobile"]?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/reg_mobile/user/change"})}}},[t._v("换绑")]):t._e()],1)],1):t._e(),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"邮箱绑定"}},[n("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["mobile"]?t._e():n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/reg_email/user/bind"})}}},[t._v("绑定")]),t.safeSet["mobile"]?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/reg_email/user/change"})}}},[t._v("换绑")]):t._e()],1)],1):t._e(),n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"登录密码"}},[n("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["password"]&&t.safeSet["password"]["isset"]?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/user/resetPassword"})}}},[t._v("修改")]):t._e(),t.safeSet["password"]&&!t.safeSet["password"]["isset"]?n("v-uni-text",[t._v("设置")]):t._e()],1)],1),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("paypwd")>=0?n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"资金密码"}},[n("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["paypwd"]&&t.safeSet["paypwd"]["isset"]?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/paypwd/change"})}}},[t._v("修改")]):t._e(),t.safeSet["paypwd"]&&!t.safeSet["paypwd"]["isset"]?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/paypwd/set"})}}},[t._v("设置")]):t._e()],1)],1):t._e(),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0?n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"谷歌验证"}},[n("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[t.safeSet["gauth"]?t._e():n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/gauth/user/bind"})}}},[t._v("绑定")]),t.safeSet["gauth"]?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/gauth/user/change"})}}},[t._v("换绑")]):t._e()],1)],1):t._e(),t.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0||t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0||t.$store.state.app.siteInfo.versionFuncsAll.indexOf("email")>=0?n("xy-list-item",{attrs:{type:"link",more:"",title:"二次验证"}},[n("v-uni-view",{staticClass:"ts-14",attrs:{slot:"current"},slot:"current"},[n("xy-switch",{attrs:{size:"medium",trueValue:1,falseValue:0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handle2fa.apply(void 0,arguments)}},model:{value:t.mfa,callback:function(e){t.mfa=e},expression:"mfa"}})],1)],1):t._e(),n("xy-safety-verify",{ref:"sv",on:{"verify-request":function(e){arguments[0]=e=t.$handleEvent(e),t.handle2fa.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.verifyData,callback:function(e){t.verifyData=e},expression:"verifyData"}})],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"1ab5":function(t,e,n){"use strict";var i=n("83ed"),a=n.n(i);a.a},"1ce1":function(t,e,n){var i=n("28a7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3560c770",i,!0,{sourceMap:!1,shadowMode:!1})},"1dcf":function(t,e,n){"use strict";n.r(e);var i=n("ddb8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"1dfb":function(t,e,n){"use strict";var i=n("4243"),a=n.n(i);a.a},"28a7":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.uni-popup[data-v-15360823]{position:fixed;z-index:99}.uni-popup__mask[data-v-15360823]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-15360823]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-15360823]{opacity:1}.uni-bottom-mask[data-v-15360823]{opacity:1}.uni-center-mask[data-v-15360823]{opacity:1}.uni-popup__wrapper[data-v-15360823]{display:block;position:absolute}.top[data-v-15360823]{top:var(--window-top)}.bottom[data-v-15360823]{bottom:0}.uni-popup__wrapper-box[data-v-15360823]{display:block;position:relative;\r\n  /* iphonex 等安全区设置，底部安全区适配 */padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.content-ani[data-v-15360823]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-15360823]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-15360823]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-15360823]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),t.exports=e},3624:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3f0a")),r={top:"top",bottom:"bottom",center:"center",message:"top",dialog:"center",share:"bottom"},o={data:function(){return{config:r}},mixins:[a.default]};e.default=o},"3f0a":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,r=i(n("fc11")),o=(a={created:function(){"message"===this.type&&(this.maskShow=!1,this.children=null)}},(0,r.default)(a,"created",(function(){"message"===this.type&&(this.maskShow=!1,this.childrenMsg=null)})),(0,r.default)(a,"methods",{customOpen:function(){this.childrenMsg&&this.childrenMsg.open()},customClose:function(){this.childrenMsg&&this.childrenMsg.close()}}),a);e.default=o},4237:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r={data:function(){return{safeSet:{},verifyData:"",mfa:0}},onLoad:function(){this.loadSafeSet(),this.mfa=this.safeSet["2fa"]},methods:{close:function(){this.mfa=this.safeSet["2fa"]},handle2fa:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={action:e},this.verifyData&&(n._verify=this.verifyData),t.next=4,this.util.request({url:"/v1/user/user/loginVerifySet",data:n,method:"put"});case 4:if(i=t.sent,200!=i.code){t.next=11;break}this.$refs.sv.close(),this.util.showToast({title:i.msg,icon:"success",duration:2e3}),this.verifyData="",t.next=17;break;case 11:if(this.mfa=this.safeSet["2fa"],401003!=i.code){t.next=15;break}return this.$refs.sv.open(i.data.verifyList),t.abrupt("return");case 15:return this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadSafeSet:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user/user/safeSet",method:"get"});case 2:n=e.sent,200==n.code?t.safeSet=n.data.dataList:t.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=r},4243:function(t,e,n){var i=n("ea14");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("25ead4ca",i,!0,{sourceMap:!1,shadowMode:!1})},"46ac":function(t,e,n){"use strict";var i=n("6140"),a=n.n(i);a.a},"5cd3":function(t,e,n){"use strict";var i=n("ee27");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2608")),r=i(n("3624")),o={name:"UniPopup",components:{uniTransition:a.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[r.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(e){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){e()}))}),50)})).then((function(e){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var e=this;this.showTrans=!1,this.$nextTick((function(){e.$emit("change",{show:!1,type:e.type}),clearTimeout(e.timer),e.customOpen&&e.customClose(),e.timer=setTimeout((function(){e.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};e.default=o},6140:function(t,e,n){var i=n("f2ba");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8f2440fe",i,!0,{sourceMap:!1,shadowMode:!1})},"6b39":function(t,e,n){"use strict";var i=n("1ce1"),a=n.n(i);a.a},"7b63":function(t,e,n){"use strict";var i={uniTransition:n("2608").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",class:[t.popupstyle],on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t.maskShow?n("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}}):t._e(),n("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"83ed":function(t,e,n){var i=n("d2bd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7937c9cc",i,!0,{sourceMap:!1,shadowMode:!1})},"89e3":function(t,e,n){"use strict";n.r(e);var i=n("5cd3"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"92d8":function(t,e,n){"use strict";var i=n("ee27");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",n=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(n)):t.label="剩余"+t.timeLeft+"s"}),1e3),i={},i="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:i,method:"post"});case 12:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",a.data)):t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=r},b2d4:function(t,e,n){"use strict";n.r(e);var i=n("fead"),a=n("f0de");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"724e350f",null,!1,i["a"],o);e["default"]=u.exports},ba1b:function(t,e,n){"use strict";n.r(e);var i=n("7b63"),a=n("89e3");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("6b39");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"15360823",null,!1,i["a"],o);e["default"]=u.exports},be64:function(t,e,n){"use strict";var i={uniPopup:n("ba1b").default,xySendVerify:n("b2d4").default,xyButton:n("d59a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"bg-white"},[n("v-uni-view",{staticClass:"m-b text-center title tw6 ts-16"},[t._v("安全验证")]),n("v-uni-view",{staticClass:"form"},[t.verifyList.indexOf("email")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱验证")]),n("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[n("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}}),n("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("mobile")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证")]),n("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[n("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}}),n("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getMobileVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("gauth")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("谷歌验证")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1)],1):t._e(),t.verifyList.indexOf("paypwd")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("支付密码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入6-18位支付密码"},model:{value:t.form.paypwd,callback:function(e){t.$set(t.form,"paypwd",e)},expression:"form.paypwd"}})],1)],1):t._e(),t.verifyList.indexOf("password")>=0?n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("登录密码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1):t._e(),n("xy-button",{staticClass:"m-t",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},c45f:function(t,e,n){"use strict";n.r(e);var i=n("041c"),a=n("f63f");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1dfb");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3a1e1df6",null,!1,i["a"],o);e["default"]=u.exports},cc33:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},d2bd:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-d1397076]{padding:8px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-d1397076]{display:block}.xy-button-medium[data-v-d1397076]{padding:4px 8px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-d1397076]{padding:3px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-d1397076]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-d1397076]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-d1397076]{border-radius:25px}.xy-white.xy-button-fillet[data-v-d1397076]::after{border-radius:40px}.xy-button-outline-fillet[data-v-d1397076]::after{border-radius:40px}.xy-button-fillet-left[data-v-d1397076]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-d1397076]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-d1397076]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-d1397076]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-d1397076]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-d1397076]{color:#0cbf92;background:none}.xy-primary-outline[data-v-d1397076]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-d1397076]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-d1397076]{background:#0cbf92;color:#fff}.xy-info[data-v-d1397076]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-d1397076]{color:#5b60ff;background:none}.xy-info-outline[data-v-d1397076]::after{border:1px solid #5b60ff}.xy-success[data-v-d1397076]{background:#19be6b;color:#fff}.xy-success-outline[data-v-d1397076]{color:#19be6b;background:none}.xy-success-outline[data-v-d1397076]::after{border:1px solid #19be6b}.xy-error[data-v-d1397076]{background:#dd524d;color:#fff}.xy-error-outline[data-v-d1397076]{color:#dd524d;background:none}.xy-error-outline[data-v-d1397076]::after{border:1px solid #dd524d}.xy-warning[data-v-d1397076]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-d1397076]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-d1397076]::after{border:1px solid #f0ad4e}.xy-white[data-v-d1397076]{background:#fff;color:#333}.xy-white-outline[data-v-d1397076]{color:#fff;background:none}.xy-white-outline[data-v-d1397076]::after{border:1px solid #fff}.xy-black[data-v-d1397076]{background:#000;color:#fff}.xy-black-outline[data-v-d1397076]{color:#333;background:none}.xy-black-outline[data-v-d1397076]::after{border:1px solid #333}.xy-translucent[data-v-d1397076]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-d1397076]{background:#ededed}.xy-phcolor-gray[data-v-d1397076]{background:#ccc}.xy-divider-gray[data-v-d1397076]{background:#eaeef1}.xy-btn-gray[data-v-d1397076]{background:#ededed;color:#999}.xy-hover-gray[data-v-d1397076]{background:#f7f7f9}.xy-bg-gray[data-v-d1397076]{background:#fafafa}.xy-light-blue[data-v-d1397076]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-d1397076]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-d1397076]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-d1397076]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-d1397076]{color:#999;background:none}.xy-gray-outline[data-v-d1397076]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},d59a:function(t,e,n){"use strict";n.r(e);var i=n("cc33"),a=n("1dcf");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1ab5");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"d1397076",null,!1,i["a"],o);e["default"]=u.exports},d8701:function(t,e,n){"use strict";(function(t){var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r={name:"xySafetyVerify",props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(t){this.form.emailToken=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},open:function(e){t.log("verifyList",e),this.verifyList=e,this.getRule(),this.$refs.popup.open(),t.log(this.rule)},eclose:function(){this.$emit("cancel")},close:function(){this.$refs.popup.close()},handleSubmit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,n=t,setTimeout((function(){n.loading=!1}),5e3),t.$emit("input",t.form),t.$emit("verify-request"),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},getRule:function(){for(var t in this.verifyList)switch(this.verifyList[t]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;default:break}}}};e.default=r}).call(this,n("5a52")["default"])},dc25:function(t,e,n){"use strict";n.r(e);var i=n("d8701"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},ddb8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var n=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?n+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?n+="xy-button-fillet-left":"circleRight"==t&&(n+="xy-button-fillet-right")),n}}};e.default=i},e5d1:function(t,e,n){"use strict";n.r(e);var i=n("be64"),a=n("dc25");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("46ac");var o,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"55b32b36",null,!1,i["a"],o);e["default"]=u.exports},ea14:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-3a1e1df6]{background-color:#fff}body.?%PAGE?%[data-v-3a1e1df6]{background-color:#fff}',""]),t.exports=e},f0de:function(t,e,n){"use strict";n.r(e);var i=n("92d8"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},f2ba:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.bg-white[data-v-55b32b36]{min-height:200px;padding:20px;padding-bottom:calc(20px + env(safe-area-inset-bottom))}.bg-white .item[data-v-55b32b36]{margin-bottom:10px}',""]),t.exports=e},f63f:function(t,e,n){"use strict";n.r(e);var i=n("4237"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},fead:function(t,e,n){"use strict";var i={xyButton:n("d59a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"send-verify"},[n("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))}}]);