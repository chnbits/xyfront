(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg_mobile-user-resetPassword"],{"0d93":function(t,e,a){"use strict";var n=a("790e"),r=a.n(n);r.a},"1dcf":function(t,e,a){"use strict";a.r(e);var n=a("ddb8"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"39c0":function(t,e,a){"use strict";var n=a("73bb"),r=a.n(n);r.a},"3ab1":function(t,e,a){"use strict";var n={xySendVerify:a("b2d4").default,xyButton:a("d59a").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"safe-form"},[a("v-uni-view",{staticClass:"m-b-md title tw6 ts-20"},[t._v("重置密码")]),a("v-uni-view",{staticClass:"form"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机号")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证码")]),a("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[a("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),a("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",account:t.form.mobile,title:"重置密码"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.verifysuccess.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[t._v("新密码")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{type:"password",placeholder:"请输入新密码"},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1)],1),a("xy-button",{staticClass:"m-t-md",attrs:{size:"large",full:!0,loading:t.form.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v(t._s(t.form.loading?"请求中...":"重置密码"))]),a("v-uni-view",{staticClass:"m-t-sm flex space-between"},[a("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/login"})}}},[t._v("登录")]),a("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/register"})}}},[t._v("注册账号")])],1)],1)],1)},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},"3c9f":function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("c964")),i=n(a("f3f3")),o=a("2f62"),u={data:function(){return{form:{loading:!1,mobile:"",newPassword:"",verify:"",token:""}}},onLoad:function(t){t.account&&(this.form.mobile=t.account),this.form.inviteCode=uni.getStorageSync("inviteCode"),this.form.channel_name=uni.getStorageSync("channel_name")},computed:(0,i.default)({},(0,o.mapState)(["app","user"])),methods:{verifysuccess:function(t){this.form.token=t.token},handleSubmit:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,t.form.loading=!0,setTimeout((function(){a.form.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_mobile/user/register",data:t.form,method:"put"});case 5:n=e.sent,200==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:1e3}),t.util.navigateTo({url:"/pages/core/user/login"})):t.util.showToast({title:n.msg,icon:"loading",duration:2e3}),t.form.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=u},"73bb":function(t,e,a){var n=a("d938");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("4f8e1260",n,!0,{sourceMap:!1,shadowMode:!1})},"790e":function(t,e,a){var n=a("d529");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("5f6e6d2b",n,!0,{sourceMap:!1,shadowMode:!1})},"92d8":function(t,e,a){"use strict";var n=a("ee27");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var r=n(a("c964")),i={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",a=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(a)):t.label="剩余"+t.timeLeft+"s"}),1e3),n={},n="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:n,method:"post"});case 12:r=e.sent,"200"==r.code?(t.util.showToast({title:r.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",r.data)):t.util.showToast({title:r.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=i},a239:function(t,e,a){"use strict";a.r(e);var n=a("3ab1"),r=a("c8bb");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("0d93");var o,u=a("f0c5"),f=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"ff6b2020",null,!1,n["a"],o);e["default"]=f.exports},b2d4:function(t,e,a){"use strict";a.r(e);var n=a("fead"),r=a("f0de");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var o,u=a("f0c5"),f=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"724e350f",null,!1,n["a"],o);e["default"]=f.exports},c8bb:function(t,e,a){"use strict";a.r(e);var n=a("3c9f"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},d057:function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visible?a("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},d529:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.wrap .logo-img[data-v-ff6b2020]{width:%?200?%;height:%?200?%;border-radius:50%}.wrap .link[data-v-ff6b2020]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wrap .verify .xy-input[data-v-ff6b2020]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wrap .verify .send-verify[data-v-ff6b2020]{position:absolute;right:5px;top:5px}',""]),t.exports=e},d59a:function(t,e,a){"use strict";a.r(e);var n=a("d057"),r=a("1dcf");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("39c0");var o,u=a("f0c5"),f=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"9a92a3f8",null,!1,n["a"],o);e["default"]=f.exports},d938:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-9a92a3f8]{padding:10px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-9a92a3f8]{display:block}.xy-button-large[data-v-9a92a3f8]{padding:12px 8px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-9a92a3f8]{padding:6px 8px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-9a92a3f8]{padding:3px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-9a92a3f8]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-9a92a3f8]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-9a92a3f8]{border-radius:25px}.xy-white.xy-button-fillet[data-v-9a92a3f8]::after{border-radius:40px}.xy-button-outline-fillet[data-v-9a92a3f8]::after{border-radius:40px}.xy-button-fillet-left[data-v-9a92a3f8]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-9a92a3f8]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-9a92a3f8]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-9a92a3f8]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-9a92a3f8]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-9a92a3f8]{color:#0cbf92;background:none}.xy-primary-outline[data-v-9a92a3f8]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-9a92a3f8]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-9a92a3f8]{background:#0cbf92;color:#fff}.xy-info[data-v-9a92a3f8]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-9a92a3f8]{color:#5b60ff;background:none}.xy-info-outline[data-v-9a92a3f8]::after{border:1px solid #5b60ff}.xy-success[data-v-9a92a3f8]{background:#19be6b;color:#fff}.xy-success-outline[data-v-9a92a3f8]{color:#19be6b;background:none}.xy-success-outline[data-v-9a92a3f8]::after{border:1px solid #19be6b}.xy-error[data-v-9a92a3f8]{background:#dd524d;color:#fff}.xy-error-outline[data-v-9a92a3f8]{color:#dd524d;background:none}.xy-error-outline[data-v-9a92a3f8]::after{border:1px solid #dd524d}.xy-warning[data-v-9a92a3f8]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-9a92a3f8]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-9a92a3f8]::after{border:1px solid #f0ad4e}.xy-white[data-v-9a92a3f8]{background:#fff;color:#333}.xy-white-outline[data-v-9a92a3f8]{color:#fff;background:none}.xy-white-outline[data-v-9a92a3f8]::after{border:1px solid #fff}.xy-black[data-v-9a92a3f8]{background:#000;color:#fff}.xy-black-outline[data-v-9a92a3f8]{color:#333;background:none}.xy-black-outline[data-v-9a92a3f8]::after{border:1px solid #333}.xy-translucent[data-v-9a92a3f8]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-9a92a3f8]{background:#ededed}.xy-phcolor-gray[data-v-9a92a3f8]{background:#ccc}.xy-divider-gray[data-v-9a92a3f8]{background:#eaeef1}.xy-btn-gray[data-v-9a92a3f8]{background:#ededed;color:#999}.xy-hover-gray[data-v-9a92a3f8]{background:#f7f7f9}.xy-bg-gray[data-v-9a92a3f8]{background:#fafafa}.xy-light-blue[data-v-9a92a3f8]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-9a92a3f8]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-9a92a3f8]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-9a92a3f8]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-9a92a3f8]{color:#999;background:none}.xy-gray-outline[data-v-9a92a3f8]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},ddb8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var a=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?a+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?a+="xy-button-fillet-left":"circleRight"==t&&(a+="xy-button-fillet-right")),a}}};e.default=n},f0de:function(t,e,a){"use strict";a.r(e);var n=a("92d8"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},fead:function(t,e,a){"use strict";var n={xyButton:a("d59a").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"send-verify"},[a("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))}}]);