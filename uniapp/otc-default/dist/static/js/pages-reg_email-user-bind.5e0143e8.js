(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reg_email-user-bind"],{"04b7":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-f3ea75ac]{background-color:#fff}body.?%PAGE?%[data-v-f3ea75ac]{background-color:#fff}',""]),e.exports=t},"06fe":function(e,t,a){"use strict";a.r(t);var n=a("da35"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},1041:function(e,t,a){"use strict";a.r(t);var n=a("72ea"),r=a("06fe");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("2361");var o,u=a("f0c5"),l=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"f3ea75ac",null,!1,n["a"],o);t["default"]=l.exports},"1dcf":function(e,t,a){"use strict";a.r(t);var n=a("ddb8"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},2361:function(e,t,a){"use strict";var n=a("84d0"),r=a.n(n);r.a},"47aa":function(e,t,a){"use strict";var n=a("f645"),r=a.n(n);r.a},"72ea":function(e,t,a){"use strict";var n={xySendVerify:a("b2d4").default,xyButton:a("d59a").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"safe-form"},[a("v-uni-view",{staticClass:"m-b-md title tw6 ts-20"},[e._v("邮箱绑定")]),a("v-uni-view",{staticClass:"form"},[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[e._v("邮箱")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[e._v("邮箱验证码")]),a("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[a("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}}),a("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",accound:e.form.email,title:"邮箱绑定"},on:{verifysuccess:function(t){arguments[0]=t=e.$handleEvent(t),e.getEmailVerifyToken.apply(void 0,arguments)}}})],1)],1),e.verifyList.indexOf("mobile")>=0?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[e._v("手机验证")]),a("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[a("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}}),a("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"邮箱绑定"},on:{verifysuccess:function(t){arguments[0]=t=e.$handleEvent(t),e.getMobileVerifyToken.apply(void 0,arguments)}}})],1)],1):e._e(),e.verifyList.indexOf("gauth")>=0?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[e._v("谷歌验证")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1)],1):e._e(),e.verifyList.indexOf("password")>=0?a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title m-b-xs"},[e._v("登录密码")]),a("v-uni-view",{staticClass:"content border-bottom_1px"},[a("v-uni-input",{attrs:{placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1):e._e(),a("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleSubmit.apply(void 0,arguments)}}},[e._v("确认")])],1)],1)},i=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))},"84d0":function(e,t,a){var n=a("04b7");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("402de600",n,!0,{sourceMap:!1,shadowMode:!1})},"92d8":function(e,t,a){"use strict";var n=a("ee27");a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=n(a("c964")),i={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",a=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(a)):e.label="剩余"+e.timeLeft+"s"}),1e3),n={},n="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},t.next=12,e.util.request({url:e.url,data:n,method:"post"});case 12:r=t.sent,"200"==r.code?(e.util.showToast({title:r.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",r.data)):e.util.showToast({title:r.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t)})))()}}};t.default=i},"977d":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-button[data-v-49babef4]{padding:12px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-button.block[data-v-49babef4]{display:block}.xy-button-large[data-v-49babef4]{padding:14px 8px;font-size:14px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-medium[data-v-49babef4]{padding:8px 8px;font-size:13px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-button-small[data-v-49babef4]{padding:4px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-button-outline[data-v-49babef4]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-button-outline[data-v-49babef4]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:2px solid #0cbf92}.xy-button-fillet[data-v-49babef4]{border-radius:25px}.xy-white.xy-button-fillet[data-v-49babef4]::after{border-radius:40px}.xy-button-outline-fillet[data-v-49babef4]::after{border-radius:40px}.xy-button-fillet-left[data-v-49babef4]{border-radius:25px 0 0 25px}.xy-button-fillet-right[data-v-49babef4]{border-radius:0 25px 25px 0}.xy-button-fillet-left.xy-button-outline[data-v-49babef4]::after{border-radius:50px 0 0 50px}.xy-button-fillet-right.xy-button-outline[data-v-49babef4]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-49babef4]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-49babef4]{color:#0cbf92;background:none}.xy-light-primary[data-v-49babef4]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-49babef4]{background:#0cbf92;color:#fff}.xy-info[data-v-49babef4]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-49babef4]{color:#5b60ff;background:none}.xy-success[data-v-49babef4]{background:#19be6b;color:#fff}.xy-success-outline[data-v-49babef4]{color:#19be6b;background:none}.xy-error[data-v-49babef4]{background:#dd524d;color:#fff}.xy-error-outline[data-v-49babef4]{color:#dd524d;background:none}.xy-warning[data-v-49babef4]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-49babef4]{color:#f0ad4e;background:none}.xy-white[data-v-49babef4]{background:#fff;color:#333}.xy-white-outline[data-v-49babef4]{color:#fff;background:none}.xy-black[data-v-49babef4]{background:#000;color:#fff}.xy-black-outline[data-v-49babef4]{color:#333;background:none}.xy-translucent[data-v-49babef4]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-49babef4]{background:#ededed}.xy-phcolor-gray[data-v-49babef4]{background:#ccc}.xy-divider-gray[data-v-49babef4]{background:#eaeef1}.xy-btn-gray[data-v-49babef4]{background:#ededed;color:#999}.xy-hover-gray[data-v-49babef4]{background:#f7f7f9}.xy-bg-gray[data-v-49babef4]{background:#fafafa}.xy-light-blue[data-v-49babef4]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-49babef4]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-49babef4]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-49babef4]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-49babef4]{color:#999;background:none}\r\n/* color end*/',""]),e.exports=t},aedc:function(e,t,a){"use strict";var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visible?a("v-uni-view",{staticClass:"xy-button",class:[e.full?"block":"",e.size?"xy-button-"+e.size:"xy-button",e.getClassName(e.shape,e.plain),e.getTypeClass(e.type,e.plain)],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleClick.apply(void 0,arguments)}}},[e._t("default")],2):e._e()},i=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))},b2d4:function(e,t,a){"use strict";a.r(t);var n=a("fead"),r=a("f0de");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);var o,u=a("f0c5"),l=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"724e350f",null,!1,n["a"],o);t["default"]=l.exports},d59a:function(e,t,a){"use strict";a.r(t);var n=a("aedc"),r=a("1dcf");for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("47aa");var o,u=a("f0c5"),l=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"49babef4",null,!1,n["a"],o);t["default"]=l.exports},da35:function(e,t,a){"use strict";var n=a("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var r=n(a("c964")),i={data:function(){return{verifyList:[],loading:!1,form:{email:"",password:"",verify:"",token:"",mobile:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{getMobileVerifyToken:function(e){this.form.mobileToken=e.token},getEmailVerifyToken:function(){this.form.token=res.token},loadData:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/reg_email/user/bind",method:"get"});case 2:a=t.sent,"200"==a.code?e.verifyList=a.data.dataList:e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},handleSubmit:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,a=e,setTimeout((function(){a.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_email/user/bind",data:e.form,method:"post"});case 5:n=t.sent,"200"==n.code?(e.util.showToast({title:n.msg,icon:"success",duration:2e3}),e.util.navigateBack()):e.util.showToast({title:n.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}};t.default=i},ddb8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"xy-button",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},full:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(e,t){return t?"xy-"+e+"-outline":"xy-"+e},getClassName:function(e,t){var a=t?"xy-button-outline ":"";return"square"!=e&&("circle"==e?a+=t?"xy-button-outline-fillet":"xy-button-fillet":"circleLeft"==e?a+="xy-button-fillet-left":"circleRight"==e&&(a+="xy-button-fillet-right")),a}}};t.default=n},f0de:function(e,t,a){"use strict";a.r(t);var n=a("92d8"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},f645:function(e,t,a){var n=a("977d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("058b76a0",n,!0,{sourceMap:!1,shadowMode:!1})},fead:function(e,t,a){"use strict";var n={xyButton:a("d59a").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"send-verify"},[a("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendVerify.apply(void 0,arguments)}}},[e._v(e._s(e.label))])],1)},i=[];a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))}}]);