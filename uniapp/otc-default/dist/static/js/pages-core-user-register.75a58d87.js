(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-register","pages-reg_email-user-register","pages-reg_mobile-user-register"],{"0c5f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-3027acd8]{background-color:#fff}uni-page-body .top-tabs[data-v-3027acd8]{margin-left:-10px}body.?%PAGE?%[data-v-3027acd8]{background-color:#fff}',""]),t.exports=e},2228:function(t,e,n){"use strict";(function(t){n("a9e3"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{value:[Number,String],list:{type:[Array,Object],default:function(){return[]}},showActive:{type:Boolean,default:!0},full:{type:Boolean,default:!0},itemColor:String,lineColor:String,lineAnimated:{type:Boolean,default:!0}},data:function(){return{currentIndex:0,lineStyle:{},scrollLeft:0,tabsScrollLeft:0,duration:.3}},computed:{showTitleSlot:function(){return this.$scopedSlots.title}},watch:{list:function(){this.setTabList()},value:function(){this.setTabList()}},mounted:function(){this.currentIndex=this.value,this.setTabList(),this.lineAnimated||(this.duration=0),t.log(this.$scopedSlots)},methods:{select:function(t,e){this.currentIndex=e,this.$emit("input",e),this.$emit("tab-click",e)},setTabList:function(){var t=this;this.$nextTick((function(){t.list.length>0&&(t.setLine(),t.scrollIntoView())}))},setLine:function(){var t=this,e=0,n=0;this.getElementData("#tab_item",(function(i){var a=i[t.currentIndex];e=a.width/2,n=a.width/2-i[0].left+a.left,t.lineStyle={width:"".concat(e,"px"),transform:"translateX(".concat(n,"px) translateX(-50%)"),transitionDuration:"".concat(t.duration,"s")}}))},scrollIntoView:function(){var t=this,e=0;this.getElementData("#tab_list",(function(n){var i=n[0];t.getElementData("#tab_item",(function(n){var a=n[t.currentIndex];e=a.width/2-i.left+a.left-i.width/2-t.scrollLeft,t.tabsScrollLeft=t.scrollLeft+e}))}))},getElementData:function(t,e){uni.createSelectorQuery().in(this).selectAll(t).boundingClientRect().exec((function(t){e(t[0])}))},scroll:function(t){this.scrollLeft=t.detail.scrollLeft}}};e.default=i}).call(this,n("5a52")["default"])},"231c":function(t,e,n){"use strict";n.r(e);var i=n("532f"),a=n("5db1");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3ceb3f08",null,!1,i["a"],s);e["default"]=l.exports},"35d4":function(t,e,n){"use strict";var i=n("ee27");n("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("a6e0")),r=i(n("231c")),s={components:{RegEmail:a.default,RegMobile:r.default},data:function(){return{regTab:"email",activeTab:0,tabList:[]}},created:function(){this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0&&this.tabList.push({value:"email",title:"邮箱注册"}),this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0&&this.tabList.push({value:"mobile",title:"手机号注册"}),this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_username")>=0&&this.tabList.push({value:"username",title:"用户名注册"}),this.regTab=this.tabList[0].value},methods:{tabClick:function(){this.regTab=this.tabList[this.activeTab].value}}};e.default=s},"3b70":function(t,e,n){"use strict";n.r(e);var i=n("c14c"),a=n("b3b2");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("e7bf");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"3027acd8",null,!1,i["a"],s);e["default"]=l.exports},"532f":function(t,e,n){"use strict";var i={xySendVerify:n("b2d4").default,xyCheckbox:n("fc5b").default,xyButton:n("d59a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"form"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机号")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证码")]),n("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[n("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),n("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",account:t.form.mobile,title:"用户注册"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.verifysuccess.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("密码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邀请码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"邀请码"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode",e)},expression:"form.inviteCode"}})],1)],1),n("v-uni-view",{staticClass:"agreement flex ts-12 flex-alignCenter"},[n("xy-checkbox",{attrs:{size:"medium"},model:{value:t.form.agreement,callback:function(e){t.$set(t.form,"agreement",e)},expression:"form.agreement"}},[t._v("我已阅读并同意")]),n("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=用户协议"}},[t._v("《用户协议》")]),t._v("和"),n("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=隐私政策"}},[t._v("《隐私政策》")])],1),n("v-uni-view",{staticClass:"m-t-xs"},[n("xy-button",{attrs:{type:"primary",full:!0,size:"large",loading:t.form.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.form.loading?"注册中...":"立即注册"))])],1),n("v-uni-view",{staticClass:"m-t-sm flex space-between"},[n("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/user/user/resetPassword"})}}},[t._v("忘记密码?")]),n("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/login"})}}},[t._v("立即登录")])],1)],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"5db1":function(t,e,n){"use strict";n.r(e);var i=n("9ecb"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"60e8":function(t,e,n){"use strict";n.r(e);var i=n("686b"),a=n("6e00");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("8bde");var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"348e01d4",null,!1,i["a"],s);e["default"]=l.exports},"686b":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list.length>0?n("v-uni-view",{staticClass:"xy-tabs"},[n("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":t.tabsScrollLeft},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"tab",attrs:{id:"tab_list"}},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,class:["tab-item",{"flex-1":t.full},{"tab-item-active":(t.showActive||0==i)&&t.currentIndex===i}],style:{color:t.currentIndex===i?""+t.itemColor:""},attrs:{id:"tab_item"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.select(e,i)}}},[n("v-uni-view",{staticClass:"title tw6 ts-16"},[t._t("title",[t._v(t._s(e.title))],{title:e.title})],2)],1)})),1),n("v-uni-view",{staticClass:"tab-line",style:{background:t.lineColor,width:t.lineStyle.width,transform:t.lineStyle.transform,transitionDuration:t.lineStyle.transitionDuration}})],1)],1):t._e()},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},"6e00":function(t,e,n){"use strict";n.r(e);var i=n("2228"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"7fe5":function(t,e,n){var i=n("f6ed");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("46499e4a",i,!0,{sourceMap:!1,shadowMode:!1})},"8bde":function(t,e,n){"use strict";var i=n("7fe5"),a=n.n(i);a.a},"9ecb":function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r=i(n("f3f3")),s={data:function(){return{form:{loading:!1,mobile:"",password:"",verify:"",token:"",inviteCode:"",channel_name:""}}},onLoad:function(){this.form.inviteCode=uni.getStorageSync("inviteCode"),this.form.channel_name=uni.getStorageSync("channel_name")},computed:(0,r.default)({},mapState(["app","user"])),methods:{verifysuccess:function(t){this.form.token=t.token},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,t.form.loading=!0,setTimeout((function(){n.form.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_mobile/user/register",data:t.form,method:"post"});case 5:i=e.sent,200==i.code?(t.util.showToast({title:i.msg,icon:"success",duration:1e3}),t.util.navigateTo({url:"/pages/core/user/login"})):t.util.showToast({title:i.msg,icon:"loading",duration:2e3}),t.form.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=s},a6e0:function(t,e,n){"use strict";n.r(e);var i=n("c971"),a=n("c3a1");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var s,o=n("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=l.exports},b3b2:function(t,e,n){"use strict";n.r(e);var i=n("35d4"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},b958:function(t,e,n){var i=n("0c5f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2b6e54c1",i,!0,{sourceMap:!1,shadowMode:!1})},c14c:function(t,e,n){"use strict";var i={xyTabs:n("60e8").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"body"},[n("v-uni-view",{staticClass:"safe-form"},[n("xy-tabs",{staticClass:"top-tabs p-b-md",attrs:{full:!1,list:t.tabList,showActive:!0},on:{"tab-click":function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}}),"email"==t.regTab?n("v-uni-view",{staticClass:"tab-content"},[t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?n("RegEmail"):t._e()],1):t._e(),"mobile"==t.regTab?n("v-uni-view",{staticClass:"tab-content"},[t.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?n("RegMobile"):t._e()],1):t._e()],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},c3a1:function(t,e,n){"use strict";n.r(e);var i=n("e5f2"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c971:function(t,e,n){"use strict";var i={xySendVerify:n("b2d4").default,xyCheckbox:n("fc5b").default,xyButton:n("d59a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"form"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{maxlength:"20",placeholder:"请输入邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱验证码")]),n("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[n("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),n("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",account:t.form.email,title:"用户注册"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.verifysuccess.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("密码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邀请码")]),n("v-uni-view",{staticClass:"content border-bottom_1px"},[n("v-uni-input",{attrs:{placeholder:"邀请码"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode",e)},expression:"form.inviteCode"}})],1)],1),n("v-uni-view",{staticClass:"agreement flex ts-12 flex-alignCenter"},[n("xy-checkbox",{attrs:{size:"medium"},model:{value:t.form.agreement,callback:function(e){t.$set(t.form,"agreement",e)},expression:"form.agreement"}},[t._v("我已阅读并同意")]),n("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=用户协议"}},[t._v("《用户协议》")]),t._v("和"),n("v-uni-navigator",{attrs:{url:"/pages/user_agreement/agreement/info?title=隐私政策"}},[t._v("《隐私政策》")])],1),n("v-uni-view",{staticClass:"m-t-xs"},[n("xy-button",{attrs:{type:"primary",full:!0,size:"large",loading:t.form.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(t.form.loading?"注册中...":"立即注册"))])],1),n("v-uni-view",{staticClass:"m-t-sm flex space-between"},[n("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/user/user/resetPassword"})}}},[t._v("忘记密码?")]),n("v-uni-view",{staticClass:"text-gray ts-12",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/core/user/login"})}}},[t._v("立即登录")])],1)],1)],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},e5f2:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("c964")),r=i(n("f3f3")),s={data:function(){return{form:{loading:!1,email:"",password:"",verify:"",token:"",inviteCode:"",channel_name:"",agreement:!1}}},onLoad:function(){this.form.inviteCode=uni.getStorageSync("inviteCode"),this.form.channel_name=uni.getStorageSync("channel_name")},computed:(0,r.default)({},mapState(["app","user"])),methods:{verifysuccess:function(t){this.form.token=t.token},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,t.form.loading=!0,setTimeout((function(){n.form.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_email/user/register",data:t.form,method:"post"});case 5:i=e.sent,200==i.code?(t.util.showToast({title:i.msg,icon:"success",duration:1e3}),t.util.navigateTo({url:"/pages/core/user/login"})):t.util.showToast({title:i.msg,icon:"loading",duration:2e3}),t.form.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}};e.default=s},e7bf:function(t,e,n){"use strict";var i=n("b958"),a=n.n(i);a.a},f6ed:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-tabs[data-v-348e01d4]{position:relative;background:#fff}.xy-tabs[data-v-348e01d4] uni-scroll-view::-webkit-scrollbar,\r\n.xy-tabs[data-v-348e01d4] .uni-scroll-view::-webkit-scrollbar{display:none}.xy-tabs .tab[data-v-348e01d4]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:16px;padding-bottom:0;white-space:nowrap}.xy-tabs .tab-item[data-v-348e01d4]{text-align:center;line-height:38px;color:#333}.xy-tabs .tab-item--active[data-v-348e01d4]{color:#0cbf92}.xy-tabs .tab-item .title[data-v-348e01d4]{margin:0 10px}.xy-tabs .tab-line[data-v-348e01d4]{display:block;height:2px;position:absolute;bottom:0;left:0;z-index:1;border-radius:1px;position:relative;background:#0cbf92}',""]),t.exports=e}}]);