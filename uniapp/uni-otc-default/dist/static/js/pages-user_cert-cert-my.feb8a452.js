(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_cert-cert-my"],{"2b94":function(t,e,n){"use strict";(function(t){n("ac1f"),n("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,e){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(e){var n=this;if(e.match(/(http:|https:)/)){var a=this.util.imageCache(e,(function(t){n.native=t,n.complete&&n.complete(t)}));t("log",e+"->"+a," at node_modules/xyui/flex-ui/src/xy-image/xy-image.vue:72"),this.native=a}else this.native=e},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};e.default=a}).call(this,n("0de9")["log"])},"31e3":function(t,e,n){"use strict";n.r(e);var a=n("3a31"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"3a31":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r={props:{certData:{type:Object,default:{}}},data:function(){return{loading:!1,form:{country:86,certCate:1,certType:1,realName:"",certNo:""},rule:{certNo:[{required:!0,message:"请填写证件号码",trigger:"blur"}],realName:[{required:!0,message:"请填写真实姓名",trigger:"blur"}]}}},created:function(){this.certData.certNo&&(this.form.certNo=this.certData.certNo,this.form.realName=this.certData.realName)},methods:{handleSubmit:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,setTimeout((function(){n.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/user_cert/level/level1",data:t.form,method:t.certData.certNo?"put":"post"});case 5:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.$emit("success")):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=r},"475f":function(t,e,n){"use strict";n.r(e);var a=n("2b94"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},4804:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={xyUploadImage:n("dab7").default,xyButton:n("331b").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"safe-form p-l-0 p-r-0"},[n("v-uni-view",{staticClass:"item flex flex-alignCenter"},[n("v-uni-view",{},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手持本人身份证正面照和个人签字及朗读拍摄视频")]),n("v-uni-view",{staticClass:"content"},[n("xy-upload-image",{attrs:{limit:"1",driver:t.item.extra.driver,action:t.item.extra.action,header:{Authorization:t.util.getToken()},icon:t.item.extra.icon?t.item.extra.icon:"xyicon xyicon-plus",label:t.item.extra.label?t.item.extra.label:""},model:{value:t.form.certPhoto,callback:function(e){t.$set(t.form,"certPhoto",e)},expression:"form.certPhoto"}})],1)],1),n("v-uni-view",{staticClass:"text-gray ts-12"},[t._v("* 请您左手持身份证右手持白纸（内容写OTC及日期）录制视频，视频长度10-40秒大小20M以内，期间请朗读出如下文字："),n("br"),t._v("* 本人身份真实有效，对在本平台上的所有转账、交易都承担所有责任，坚决维护平台秩序，遵守国家法律法规。")])],1),n("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)},r=[]},"4ad1":function(t,e,n){var a=n("9130");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("20f97b8c",a,!0,{sourceMap:!1,shadowMode:!1})},"5d2b":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r=a(n("c7f8")),o=a(n("01e1")),s=a(n("d953")),c={components:{level1:r.default,level2:o.default,level3:s.default},data:function(){return{level2Show:!1,level3Show:!1,info:{reviewState:-2,level:-1}}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});case 2:n=e.sent,200==n.code?t.info=n.data.info:t.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=c},"63d0":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={xyImage:n("6b3b").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"p-l p-r"},[n("v-uni-view",{staticClass:"m-b-md title tw6 ts-20"},[t._v("实名认证")]),n("v-uni-view",{staticClass:"text-error m-b"},[n("v-uni-view",{},[t._v("为了您的资金安全，需验证您的身份才可进行交易；认证信息一经验证不能修改，请务必如实填写")])],1),t.info.level>0?n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"text-center"},[0==t.info.reviewState?[n("xy-image",{staticStyle:{width:"180px",height:"130px"},attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc-wait.png"}})]:1==t.info.reviewState?[n("xy-image",{staticStyle:{width:"180px",height:"130px"},attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc.png"}})]:-1==t.info.reviewState?[n("xy-image",{staticStyle:{width:"180px",height:"130px"},attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc-error.png"}})]:t._e()],2),n("v-uni-view",{staticClass:"tw5 ts-16 m-b-xs"},[t._v("实名等级")]),n("v-uni-view",{staticClass:"state text-info tw5 m-b ts-14 flex"},[t._v("KYC"+t._s(t.info.level)),t.info.level<3?n("v-uni-view",{staticClass:"text-primary m-l-sm"},[1==t.info.level?[t.level2Show?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.level2Show=!1}}},[t._v("取消")]):n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.level2Show=!0}}},[t._v("提升")])]:t._e(),2==t.info.level?[t.level3Show?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.level3Show=!1}}},[t._v("取消")]):n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.level3Show=!0}}})]:t._e()],2):t._e()],1),t.level2Show?n("level2"):t._e(),t.level3Show?n("level3"):t._e(),t.level2Show||t.level3Show?t._e():n("v-uni-view",[n("v-uni-view",{staticClass:"flex flex-alignCenter space-between m-b"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"tw5 ts-16 m-b-xs"},[t._v("我的身份")]),n("v-uni-view",{staticClass:"title ts-14 text-gray"},[t._v(t._s(t.info.realName)+"("+t._s(t.info.certNo)+")")])],1),n("v-uni-view",{staticClass:"right"},[0==t.info.reviewState?[n("v-uni-view",{staticClass:"text-warning"},[t._v("审核中")])]:1==t.info.reviewState?[n("v-uni-view",{staticClass:"text-primary tw6"},[t._v("已通过")])]:-1==t.info.reviewState?[n("v-uni-view",{staticClass:"text-error"},[t._v("审核未通过")])]:t._e()],2)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"tw5 ts-16 m-b-xs"},[t._v("等级额度")]),n("v-uni-view",{staticClass:"text-gray"},[n("v-uni-view",{},[t._v("单日额度: 2000")]),n("v-uni-view",{},[t._v("累计总额度: 50000")])],1)],1)],1)],1):t._e(),0==t.info.level?n("v-uni-view",{staticClass:"kyc1"},[n("level1",{on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.loadData.apply(void 0,arguments)}}})],1):t._e()],1)},r=[]},"6b3b":function(t,e,n){"use strict";n.r(e);var a=n("71c8"),i=n("475f");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("a5b4");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"df842a86",null,!1,a["a"],o);e["default"]=c.exports},"71c8":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.load.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)}}})},r=[]},"746a":function(t,e,n){"use strict";n.r(e);var a=n("5d2b"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},7579:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),r={props:{certData:{type:Object,default:function(){return{}}}},data:function(){return{loading:!1,form:{certVideo:""},item:{extra:{limit:1,maxSize:500,driver:this.$store.state.app.uploadDriver,background:"#ffffff"}}}},created:function(){this.certData.certVideo&&(this.form.certVideo=this.certData.certVideo)},methods:{handleSubmit:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form.certVideo||t.util.showToast({title:"请上传认证视频",icon:"loading",duration:3e3}),t.loading=!0,n=t,setTimeout((function(){n.loading=!1}),5e3),e.next=6,t.util.request({url:"/v1/user_cert/level/level3",data:t.form,method:t.certData.certVideo?"put":"post"});case 6:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.$emit("success")):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()}}};e.default=r},"88d0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-8bf132ee]{background-color:#fff}body.?%PAGE?%[data-v-8bf132ee]{background-color:#fff}',""]),t.exports=e},9130:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-df842a86]{\n}",""]),t.exports=e},9579:function(t,e,n){"use strict";n.r(e);var a=n("63d0"),i=n("746a");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("e3bc");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"8bf132ee",null,!1,a["a"],o);e["default"]=c.exports},a5b4:function(t,e,n){"use strict";var a=n("4ad1"),i=n.n(a);i.a},b4d4:function(t,e,n){"use strict";n.r(e);var a=n("7579"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c6cf:function(t,e,n){var a=n("88d0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("e8547656",a,!0,{sourceMap:!1,shadowMode:!1})},c7f8:function(t,e,n){"use strict";n.r(e);var a=n("d4fc"),i=n("31e3");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2a58108f",null,!1,a["a"],o);e["default"]=c.exports},d4fc:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={xyButton:n("331b").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"safe-form p-l-0 p-r-0"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("姓名")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入真实姓名"},model:{value:t.form.realName,callback:function(e){t.$set(t.form,"realName",e)},expression:"form.realName"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("证件号码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"请输入身份证件号码"},model:{value:t.form.certNo,callback:function(e){t.$set(t.form,"certNo",e)},expression:"form.certNo"}})],1)],1),n("xy-button",{staticClass:"m-t-lg",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1)},r=[]},d953:function(t,e,n){"use strict";n.r(e);var a=n("4804"),i=n("b4d4");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"ba2b3c62",null,!1,a["a"],o);e["default"]=c.exports},e3bc:function(t,e,n){"use strict";var a=n("c6cf"),i=n.n(a);i.a}}]);