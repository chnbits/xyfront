(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg_mobile-user-resetPassword"],{"0bd8":function(t,e,n){"use strict";var r=n("d585"),a=n.n(r);a.a},1007:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={xySendVerify:n("82f7").default,xyButton:n("331b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"safe-form"},[n("v-uni-view",{staticClass:"m-b-md title tw6 ts-20"},[t._v("重置密码")]),n("v-uni-view",{staticClass:"form"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机号")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证码")]),n("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[n("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),n("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",account:t.form.mobile,title:"重置密码"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.verifysuccess.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("新密码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{type:"password",placeholder:"请输入新密码"},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1)],1),n("xy-button",{staticClass:"m-t-md",attrs:{size:"large",full:!0,loading:t.form.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v(t._s(t.form.loading?"请求中...":"重置密码"))]),n("v-uni-view",{staticClass:"m-t-sm flex space-between"},[n("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/login"})}}},[t._v("登录")]),n("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/register"})}}},[t._v("注册账号")])],1)],1)],1)},i=[]},3196:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("v-uni-view",{staticClass:"xy-button",class:[t.full?"block":"",t.size?"xy-button-"+t.size:"xy-button",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},"331b":function(t,e,n){"use strict";n.r(e);var r=n("3196"),a=n("ad76");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("b92a");var o,u=n("f0c5"),l=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"39215740",null,!1,r["a"],o);e["default"]=l.exports},4053:function(t,e,n){"use strict";n.r(e);var r=n("b6df"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"43bf":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.wrap .logo-img[data-v-ff6b2020]{width:%?200?%;height:%?200?%;border-radius:50%}.wrap .link[data-v-ff6b2020]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.wrap .verify .xy-input[data-v-ff6b2020]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wrap .verify .send-verify[data-v-ff6b2020]{position:absolute;right:5px;top:5px}',""]),t.exports=e},"456c":function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("1da1")),i=r(n("5530")),o=n("2f62"),u={data:function(){return{form:{loading:!1,mobile:"",newPassword:"",verify:"",token:""}}},onLoad:function(t){t.account&&(this.form.mobile=t.account),this.form.inviteCode=uni.getStorageSync("inviteCode"),this.form.channel_name=uni.getStorageSync("channel_name")},computed:(0,i.default)({},(0,o.mapState)(["app","user"])),methods:{verifysuccess:function(t){this.form.token=t.token},handleSubmit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,t.form.loading=!0,setTimeout((function(){n.form.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_mobile/user/register",data:t.form,method:"put"});case 5:r=e.sent,200==r.code?(t.util.showToast({title:r.msg,icon:"success",duration:1e3}),t.util.navigateTo({url:"/pages/core/user/login"})):t.util.showToast({title:r.msg,icon:"loading",duration:2e3}),t.form.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=u},"5caf":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var n=e?"xy-button-outline ":"";return"square"!=t&&("circle"==t?n+=e?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==t?n+="xy-button-fillet-left":"circleRight"==t&&(n+="xy-button-fillet-right")),n}}};e.default=r},"6acc":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={xyButton:n("331b").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"send-verify"},[n("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},i=[]},"7d3f":function(t,e,n){var r=n("e83d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("3ed44b97",r,!0,{sourceMap:!1,shadowMode:!1})},"82f7":function(t,e,n){"use strict";n.r(e);var r=n("6acc"),a=n("4053");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o,u=n("f0c5"),l=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"599ac67d",null,!1,r["a"],o);e["default"]=l.exports},9156:function(t,e,n){"use strict";n.r(e);var r=n("1007"),a=n("d9b5");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("0bd8");var o,u=n("f0c5"),l=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"ff6b2020",null,!1,r["a"],o);e["default"]=l.exports},ad76:function(t,e,n){"use strict";n.r(e);var r=n("5caf"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},b6df:function(t,e,n){"use strict";var r=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=r(n("1da1")),i={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",n=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(n)):t.label="剩余"+t.timeLeft+"s"}),1e3),r={},r="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:r,method:"post"});case 12:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",a.data)):t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=i},b92a:function(t,e,n){"use strict";var r=n("7d3f"),a=n.n(r);a.a},d585:function(t,e,n){var r=n("43bf");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("127f23b2",r,!0,{sourceMap:!1,shadowMode:!1})},d9b5:function(t,e,n){"use strict";n.r(e);var r=n("456c"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},e83d:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-39215740]{padding:15px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-39215740]{display:block}.xy-button-large[data-v-39215740]{padding:18px 10px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-39215740]{padding:10px 10px;font-size:13px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-39215740]{padding:6px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-39215740]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-39215740]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-39215740]{border-radius:25px}.xy-white.xy-button-fillet[data-v-39215740]::after{border-radius:40px}.xy-button-outline-fillet[data-v-39215740]::after{border-radius:40px}.xy-button-fillet-left[data-v-39215740]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-39215740]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-39215740]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-39215740]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-39215740]{color:#0cbf92;background:none}.xy-primary-outline[data-v-39215740]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-39215740]{background:#0cbf92;color:#fff}.xy-info[data-v-39215740]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-39215740]{color:#5b60ff;background:none}.xy-info-outline[data-v-39215740]::after{border:1px solid #5b60ff}.xy-success[data-v-39215740]{background:#19be6b;color:#fff}.xy-success-outline[data-v-39215740]{color:#19be6b;background:none}.xy-success-outline[data-v-39215740]::after{border:1px solid #19be6b}.xy-error[data-v-39215740]{background:#dd524d;color:#fff}.xy-error-outline[data-v-39215740]{color:#dd524d;background:none}.xy-error-outline[data-v-39215740]::after{border:1px solid #dd524d}.xy-warning[data-v-39215740]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-39215740]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-39215740]::after{border:1px solid #f0ad4e}.xy-white[data-v-39215740]{background:#fff;color:#333}.xy-white-outline[data-v-39215740]{color:#fff;background:none}.xy-white-outline[data-v-39215740]::after{border:1px solid #fff}.xy-black[data-v-39215740]{background:#000;color:#fff}.xy-black-outline[data-v-39215740]{color:#333;background:none}.xy-black-outline[data-v-39215740]::after{border:1px solid #333}.xy-translucent[data-v-39215740]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-39215740]{background:#ededed}.xy-phcolor-gray[data-v-39215740]{background:#ccc}.xy-divider-gray[data-v-39215740]{background:#eaeef1}.xy-btn-gray[data-v-39215740]{background:#ededed;color:#999}.xy-hover-gray[data-v-39215740]{background:#f7f7f9}.xy-bg-gray[data-v-39215740]{background:#fafafa}.xy-light-blue[data-v-39215740]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-39215740]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-39215740]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-39215740]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-39215740]{color:#999;background:none}.xy-gray-outline[data-v-39215740]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e}}]);