(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-ad-add"],{"090d":function(t,e,i){"use strict";var n=i("51e1"),a=i.n(n);a.a},"0e76":function(t,e,i){"use strict";i.r(e);var n=i("2337"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"11f8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-tabs[data-v-1985326a]{position:relative}.xy-tabs[data-v-1985326a] uni-scroll-view::-webkit-scrollbar,\r\n.xy-tabs[data-v-1985326a] .uni-scroll-view::-webkit-scrollbar{display:none}.xy-tabs .tab[data-v-1985326a]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:16px;padding-bottom:0;white-space:nowrap}.xy-tabs .tab-item[data-v-1985326a]{text-align:center;line-height:38px;color:#333}.xy-tabs .tab-item--active[data-v-1985326a]{color:#0cbf92}.xy-tabs .tab-item .title[data-v-1985326a]{margin:0 10px}.xy-tabs .tab-item:first-child .title[data-v-1985326a]{margin-left:0}.xy-tabs .tab-item:last-child .title[data-v-1985326a]{margin-right:0}.xy-tabs.card .tab-item[data-v-1985326a]{background:#e5e5eb}.xy-tabs.card .tab-item-active[data-v-1985326a]{background-color:#fff}.xy-tabs .tab-line[data-v-1985326a]{display:block;height:2px;position:absolute;bottom:0;left:0;z-index:1;border-radius:1px;position:relative;background:#0cbf92}',""]),t.exports=e},"16a7":function(t,e,i){"use strict";i.r(e);var n=i("2e2e"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},2337:function(t,e,i){"use strict";(function(t){i("a9e3"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{value:[Number,String],list:{type:[Array,Object],default:function(){return[]}},type:{type:String,default:""},showActive:{type:Boolean,default:!0},full:{type:Boolean,default:!0},itemColor:String,lineColor:String,lineAnimated:{type:Boolean,default:!0}},data:function(){return{currentIndex:0,lineStyle:{},scrollLeft:0,tabsScrollLeft:0,duration:.3}},computed:{showTitleSlot:function(){return this.$scopedSlots.title}},watch:{list:function(){this.setTabList()},value:function(){this.setTabList()}},mounted:function(){this.currentIndex=this.value,this.setTabList(),this.lineAnimated||(this.duration=0),t("log",this.$scopedSlots," at node_modules/xyui/flex-ui/src/xy-tabs/xy-tabs.vue:80")},methods:{select:function(t,e){this.currentIndex=e,this.$emit("input",e),this.$emit("tab-click",e)},setTabList:function(){var t=this;this.$nextTick((function(){t.list.length>0&&(t.setLine(),t.scrollIntoView())}))},setLine:function(){var t=this,e=0,i=0;this.getElementData("#tab_item",(function(n){var a=n[t.currentIndex];e=a.width/2,i=a.width/2-n[0].left+a.left,t.lineStyle={width:"".concat(e,"px"),transform:"translateX(".concat(i,"px) translateX(-50%)"),transitionDuration:"".concat(t.duration,"s")}}))},scrollIntoView:function(){var t=this,e=0;this.getElementData("#tab_list",(function(i){var n=i[0];t.getElementData("#tab_item",(function(i){var a=i[t.currentIndex];e=a.width/2-n.left+a.left-n.width/2-t.scrollLeft,t.tabsScrollLeft=t.scrollLeft+e}))}))},getElementData:function(t,e){uni.createSelectorQuery().in(this).selectAll(t).boundingClientRect().exec((function(t){e(t[0])}))},scroll:function(t){this.scrollLeft=t.detail.scrollLeft}}};e.default=n}).call(this,i("0de9")["log"])},"247e":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={xyTabs:i("81ff").default,xyPicker:i("caa1").default,xyButton:i("331b").default,xySafetyVerify:i("b5c7").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"xy-wrap-dark-header"},[i("v-uni-view",{staticClass:"header text-white p-l p-r"},[i("v-uni-view",{staticClass:"title tw6 ts-24"},[i("xy-tabs",{staticClass:"top-tabs p-a-0",attrs:{full:!1,list:t.navList,showActive:!0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}})],1),i("v-uni-view",{staticClass:"subtitle m-t-sm"})],1),0==t.tab?i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"bg-white m-l m-r br-4 p-l p-r p-t p-b"},[i("v-uni-view",{staticClass:"text-gray ts-13 m-b-xs"},[t._v("币种/货币类型")]),i("v-uni-view",{staticClass:"ts-14 tw6"},[t._v(t._s(t.coinType[t.coinIndex].symbol)+"/CNY")])],1),i("v-uni-view",{staticClass:"safe-form bg-white m-l m-r m-t br-4"},[i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs flex space-between"},[i("v-uni-view",{staticClass:"left"},[t._v("价格")]),i("v-uni-view",{staticClass:"right ts-12"},[t._v("参考 ￥"+t._s(t.coinType[t.coinIndex].priceCny.price))])],1),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"请输入交易价格"},model:{value:t.form[2].price,callback:function(e){t.$set(t.form[2],"price",e)},expression:"form[2].price"}})],1)],1),i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs flex space-between"},[i("v-uni-view",{staticClass:"left"},[t._v("出售数量")]),i("v-uni-view",{staticClass:"right ts-12"},[t._v("可用 "+t._s(t.coinBalance.balance))])],1),i("v-uni-view",{staticClass:"content border-bottom_1px flex space-between"},[i("v-uni-input",{attrs:{placeholder:"请输入出售数量"},model:{value:t.form[2].amount,callback:function(e){t.$set(t.form[2],"amount",e)},expression:"form[2].amount"}}),i("v-uni-view",{staticClass:"right text-gray"},[t._v("USDT |"),i("v-uni-text",{staticClass:"m-l-xs",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setAllLeftAmount.apply(void 0,arguments)}}},[t._v("全部")])],1)],1)],1),i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("单笔限额")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex space-between"},[i("v-uni-input",{attrs:{placeholder:"最低限额"},model:{value:t.form[2].minMoney,callback:function(e){t.$set(t.form[2],"minMoney",e)},expression:"form[2].minMoney"}}),i("v-uni-view",{staticClass:"m-l-xs m-r-xs"},[t._v("-")]),i("v-uni-input",{attrs:{placeholder:"最高限额"},model:{value:t.form[2].maxMoney,callback:function(e){t.$set(t.form[2],"maxMoney",e)},expression:"form[2].maxMoney"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"bg-white m-l m-r m-t br-4 p-a"},[i("v-uni-view",{staticClass:"item"},[t.alipaylist.length>0?i("v-uni-view",{staticClass:"content flex space-between m-b-sm"},[i("v-uni-text",{staticClass:"right text-gray ts-13"},[t._v("支付宝")]),i("xy-picker",{attrs:{options:t.alipaylist,valueName:"id",labelName:"name"},model:{value:t.form[2].alipay,callback:function(e){t.$set(t.form[2],"alipay",e)},expression:"form[2].alipay"}})],1):t._e(),t.wxpaylist.length>0?i("v-uni-view",{staticClass:"content flex space-between m-b-sm"},[i("v-uni-text",{staticClass:"right text-gray ts-13"},[t._v("微信支付")]),i("xy-picker",{attrs:{options:t.wxpaylist,valueName:"id",labelName:"name"},model:{value:t.form[2].wxpay,callback:function(e){t.$set(t.form[2],"wxpay",e)},expression:"form[2].wxpay"}})],1):t._e(),t.banklist.length>0?i("v-uni-view",{staticClass:"content flex space-between"},[i("v-uni-text",{staticClass:"right text-gray ts-13"},[t._v("银行卡")]),i("xy-picker",{attrs:{options:t.banklist,valueName:"id",labelName:"name"},model:{value:t.form[2].bank,callback:function(e){t.$set(t.form[2],"bank",e)},expression:"form[2].bank"}})],1):t._e()],1)],1),i("v-uni-view",{staticClass:"safe-form bg-white m-l m-r m-t br-4"},[i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("营业时间")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex space-between"},[i("xy-picker",{attrs:{mode:"time"},model:{value:t.form[2].startTime,callback:function(e){t.$set(t.form[2],"startTime",e)},expression:"form[2].startTime"}}),i("v-uni-view",{staticClass:"m-l-xs m-r-xs"},[t._v("-")]),i("xy-picker",{attrs:{mode:"time"},model:{value:t.form[2].stopTime,callback:function(e){t.$set(t.form[2],"stopTime",e)},expression:"form[2].stopTime"}})],1)],1),i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("留言")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-textarea",{staticStyle:{height:"45px"},attrs:{"auto-height":!1,placeholder:"此留言下单前后均可见，请说明有关此广告交易的相关信息，以便对方与您快速交易"},model:{value:t.form[2].memo,callback:function(e){t.$set(t.form[2],"memo",e)},expression:"form[2].memo"}})],1)],1)],1)],1),i("xy-button",{staticClass:"m-l m-r m-t",attrs:{type:"primary",full:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pub(2)}}},[t._v("确认发布")])],1):t._e(),1==t.tab?i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"bg-white m-l m-r br-4 p-l p-r p-t p-b"},[i("v-uni-view",{staticClass:"text-gray ts-13 m-b-xs"},[t._v("币种/货币类型")]),i("v-uni-view",{staticClass:"ts-14 tw6"},[t._v("USDT/CNY")])],1),i("v-uni-view",{staticClass:"safe-form bg-white m-l m-r m-t br-4"},[i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs flex space-between"},[i("v-uni-view",{staticClass:"left"},[t._v("价格")]),i("v-uni-view",{staticClass:"right ts-12"},[t._v("参考 ￥"+t._s(t.coinType[t.coinIndex].priceCny.price))])],1),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"请输入交易价格"},model:{value:t.form[2].price,callback:function(e){t.$set(t.form[2],"price",e)},expression:"form[2].price"}})],1)],1),i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs flex space-between"},[t._v("购买数量")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex space-between"},[i("v-uni-input",{attrs:{placeholder:"请输入购买数量"},model:{value:t.form[1].amount,callback:function(e){t.$set(t.form[1],"amount",e)},expression:"form[1].amount"}}),i("v-uni-view",{staticClass:"right text-gray"},[t._v("USDT")])],1)],1),i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("单笔限额")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex space-between"},[i("v-uni-input",{attrs:{placeholder:"最低限额"},model:{value:t.form[1].minMoney,callback:function(e){t.$set(t.form[1],"minMoney",e)},expression:"form[1].minMoney"}}),i("v-uni-view",{staticClass:"m-l-xs m-r-xs"},[t._v("-")]),i("v-uni-input",{attrs:{placeholder:"最高限额"},model:{value:t.form[1].maxMoney,callback:function(e){t.$set(t.form[1],"maxMoney",e)},expression:"form[1].maxMoney"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"bg-white m-l m-r m-t br-4 p-a"},[i("v-uni-view",{staticClass:"item"},[t.alipaylist.length>0?i("v-uni-view",{staticClass:"content flex space-between m-b-xs"},[i("v-uni-text",{staticClass:"right text-gray ts-13"},[t._v("支付宝")]),i("xy-picker",{attrs:{options:t.alipaylist,valueName:"id",labelName:"name"},model:{value:t.form[1].alipay,callback:function(e){t.$set(t.form[1],"alipay",e)},expression:"form[1].alipay"}})],1):t._e(),t.wxpaylist.length>0?i("v-uni-view",{staticClass:"content flex space-between m-b-xs"},[i("v-uni-text",{staticClass:"right text-gray ts-13"},[t._v("微信支付")]),i("xy-picker",{attrs:{options:t.wxpaylist,valueName:"id",labelName:"name"},model:{value:t.form[1].wxpay,callback:function(e){t.$set(t.form[1],"wxpay",e)},expression:"form[1].wxpay"}})],1):t._e(),t.banklist.length>0?i("v-uni-view",{staticClass:"content flex space-between"},[i("v-uni-text",{staticClass:"right text-gray ts-13"},[t._v("银行卡")]),i("xy-picker",{attrs:{options:t.banklist,valueName:"id",labelName:"name"},model:{value:t.form[1].bank,callback:function(e){t.$set(t.form[1],"bank",e)},expression:"form[1].bank"}})],1):t._e()],1)],1),i("v-uni-view",{staticClass:"safe-form bg-white m-l m-r m-t br-4"},[i("v-uni-view",{staticClass:"form"},[i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("营业时间")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex space-between"},[i("xy-picker",{attrs:{mode:"time"},model:{value:t.form[1].startTime,callback:function(e){t.$set(t.form[1],"startTime",e)},expression:"form[1].startTime"}}),i("v-uni-view",{staticClass:"m-l-xs m-r-xs"},[t._v("-")]),i("xy-picker",{attrs:{mode:"time"},model:{value:t.form[1].stopTime,callback:function(e){t.$set(t.form[1],"stopTime",e)},expression:"form[1].stopTime"}})],1)],1),i("v-uni-view",{staticClass:"item m-b"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("留言")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-textarea",{staticStyle:{height:"45px"},attrs:{"auto-height":!1,placeholder:"此留言下单前后均可见，请说明有关此广告交易的相关信息，以便对方与您快速交易"},model:{value:t.form[1].memo,callback:function(e){t.$set(t.form[1],"memo",e)},expression:"form[1].memo"}})],1)],1)],1)],1),i("xy-button",{staticClass:"m-l m-r m-t",attrs:{type:"info",full:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pub(1)}}},[t._v("确认发布")])],1):t._e(),i("v-uni-view",{staticClass:"m-l m-r m-t ts-12 lh-1-6 p-b-md text-gray"},[i("v-uni-text",{staticClass:"ts-16 tc-b"},[t._v("温馨提示：")]),i("br"),t._v("1、发布广告是免费的；"),i("br"),t._v("2、如需在列表中显示广告，请确保你的钱包有剩余可用资产（不包含已发布广告、提现等系统冻结资产）；"),i("br"),t._v("3、广告成交后，"+t._s(t.$store.state.app.siteInfo.title)+"会收取0.6%的广告服务费用"),i("br"),t._v("4、收款方式需要在“个人设置”中提前设置；"),i("br"),t._v("5、交易中请注意判断和防范有欺诈风险的付款方式；"),i("br"),t._v("6、"+t._s(t.$store.state.app.siteInfo.title)+"无法为你预防线下私自交易产生的风险。"),i("br")],1),i("xy-safety-verify",{ref:"sv",on:{"verify-request":function(e){arguments[0]=e=t.$handleEvent(e),t.pub.apply(void 0,arguments)}},model:{value:t.verifyData,callback:function(e){t.verifyData=e},expression:"verifyData"}})],1)],1)},r=[]},"267f":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("3ff3").default,xySendVerify:i("82f7").default,xyButton:i("331b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[i("v-uni-view",{staticClass:"bg-white"},[i("v-uni-view",{staticClass:"m-b text-center title tw6 ts-16"},[t._v("安全验证")]),i("v-uni-view",{staticClass:"form"},[t.verifyList.indexOf("email")>=0?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("邮箱验证")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[i("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入邮箱验证码"},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}}),i("xy-send-verify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("mobile")>=0?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("手机验证")]),i("v-uni-view",{staticClass:"content border-bottom_1px flex",staticStyle:{"padding-bottom":"3px"}},[i("v-uni-input",{staticClass:"flex-1",attrs:{placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}}),i("xy-send-verify",{attrs:{url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:function(e){arguments[0]=e=t.$handleEvent(e),t.getMobileVerifyToken.apply(void 0,arguments)}}})],1)],1):t._e(),t.verifyList.indexOf("gauth")>=0?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("谷歌验证")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1)],1):t._e(),t.verifyList.indexOf("paypwd")>=0?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("支付密码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"请输入6-18位支付密码"},model:{value:t.form.paypwd,callback:function(e){t.$set(t.form,"paypwd",e)},expression:"form.paypwd"}})],1)],1):t._e(),t.verifyList.indexOf("password")>=0?i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"title m-b-xs"},[t._v("登录密码")]),i("v-uni-view",{staticClass:"content border-bottom_1px"},[i("v-uni-input",{attrs:{placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1):t._e(),i("xy-button",{staticClass:"m-t",attrs:{full:!0,type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},r=[]},"2e2e":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r={name:"xySafetyVerify",props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(t){this.form.emailToken=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},open:function(e){t("log","verifyList",e," at node_modules/xyui/flex-ui/src/xy-safety-verify/xy-safety-verify.vue:104"),this.verifyList=e,this.getRule(),this.$refs.popup.open(),t("log",this.rule," at node_modules/xyui/flex-ui/src/xy-safety-verify/xy-safety-verify.vue:108")},eclose:function(){this.$emit("cancel")},close:function(){this.$refs.popup.close()},handleSubmit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),t.$emit("input",t.form),t.$emit("verify-request"),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},getRule:function(){for(var t in this.verifyList)switch(this.verifyList[t]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;default:break}}}};e.default=r}).call(this,i("0de9")["log"])},"346b":function(t,e,i){var n=i("6903");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("246e9c3e",n,!0,{sourceMap:!1,shadowMode:!1})},"369f":function(t,e,i){"use strict";var n=i("346b"),a=i.n(n);a.a},"3fc1":function(t,e,i){"use strict";i.r(e);var n=i("e9be"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},4053:function(t,e,i){"use strict";i.r(e);var n=i("b6df"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},4596:function(t,e,i){var n=i("81d8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4e0e5d1c",n,!0,{sourceMap:!1,shadowMode:!1})},4980:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-picker .label[data-v-1f85eb2c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.select[data-v-1f85eb2c]{width:100%;height:30px}',""]),t.exports=e},"51e1":function(t,e,i){var n=i("4980");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("14c94750",n,!0,{sourceMap:!1,shadowMode:!1})},"59dc":function(t,e,i){"use strict";i.r(e);var n=i("247e"),a=i("8b88");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("7522");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"c81292e4",null,!1,n["a"],s);e["default"]=l.exports},"60c6":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r=n(i("b85c")),s={data:function(){return{verifyData:"",coinIndex:0,coinType:[{id:1,symbol:"USDT",priceCny:{price:0}}],tab:0,paytype:[],form:{1:{type:1,coinId:1,currency:"CNY",price:"",amount:0,minMoney:10,maxMoney:"",alipay:"",wxpay:"",bank:"",startTime:"00:00",stopTime:"23:59",memo:""},2:{type:2,coinId:1,currency:"CNY",price:"",amount:0,minMoney:10,maxMoney:"",alipay:"",wxpay:"",bank:"",startTime:"00:00",stopTime:"23:59",memo:""}},navList:[{value:"sell",title:"出售广告"},{value:"buy",title:"购买广告"}],coinBalance:{}}},created:function(){this.loadPaytype(),this.loadBalance(),this.loadPrice()},computed:{alipaylist:function(){var t,e=[],i=(0,r.default)(this.paytype);try{for(i.s();!(t=i.n()).done;){var n=t.value;1==n.paytype&&e.push(n)}}catch(a){i.e(a)}finally{i.f()}return e},wxpaylist:function(){var e=[];t("log"," at pages/coin_otc/ad/add.vue:311");var i,n=(0,r.default)(this.paytype);try{for(n.s();!(i=n.n()).done;){var a=i.value;2==a.paytype&&e.push(a)}}catch(s){n.e(s)}finally{n.f()}return e},banklist:function(){var e=[];t("log"," at pages/coin_otc/ad/add.vue:321");var i,n=(0,r.default)(this.paytype);try{for(n.s();!(i=n.n()).done;){var a=i.value;3==a.paytype&&e.push(a)}}catch(s){n.e(s)}finally{n.f()}return e}},methods:{setAllLeftAmount:function(){this.form[2].amount=this.coinBalance.balance},pub:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.form[t],e.verifyData&&(n._verify=e.verifyData),i.next=4,e.util.request({url:"/v1/coin_otc/ad/add",data:n,method:"post"});case 4:if(a=i.sent,200!=a.code){i.next=9;break}e.util.navigateTo({url:"/otc/ad/my"}),i.next=15;break;case 9:if(401003!=a.code){i.next=14;break}return e.$refs.sv.open(a.data.verifyList),i.abrupt("return");case 14:e.util.showToast({title:a.msg,duration:3e3});case 15:case"end":return i.stop()}}),i)})))()},loadBalance:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/coin/balance/info/1",method:"get"});case 2:i=e.sent,200==i.code?t.coinBalance=i.data.info:t.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},loadPaytype:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/coin_otc/paytype/my",method:"get"});case 2:i=e.sent,200==i.code?t.paytype=i.data.dataList:t.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},loadPrice:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/coin_price/price/info",data:{exchange:"all",pairName:t.coinType[t.coinIndex].symbol+"/CNY"},method:"get"});case 2:i=e.sent,200==i.code?t.coinType[t.coinIndex].priceCny=i.data.info:t.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=s}).call(this,i("0de9")["log"])},6903:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.bg-white[data-v-17f425d3]{min-height:200px;padding:20px;padding-bottom:calc(20px + env(safe-area-inset-bottom))}.bg-white .item[data-v-17f425d3]{margin-bottom:10px}',""]),t.exports=e},"6acc":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={xyButton:i("331b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"send-verify"},[i("xy-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendVerify.apply(void 0,arguments)}}},[t._v(t._s(t.label))])],1)},r=[]},7522:function(t,e,i){"use strict";var n=i("4596"),a=i.n(n);a.a},"81d8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */[data-v-c81292e4] .tab-item .title{color:#fff}',""]),t.exports=e},"81ff":function(t,e,i){"use strict";i.r(e);var n=i("eb93"),a=i("0e76");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("d35e");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1985326a",null,!1,n["a"],s);e["default"]=l.exports},"82f7":function(t,e,i){"use strict";i.r(e);var n=i("6acc"),a=i("4053");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"599ac67d",null,!1,n["a"],s);e["default"]=l.exports},"8b88":function(t,e,i){"use strict";i.r(e);var n=i("60c6"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"8be9":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-picker",{staticClass:"xy-picker",attrs:{"range-key":t.labelName,mode:t.mode,value:t.index,range:t.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"label flex flex-alignCenter"},["selector"==t.mode?[t.options[this.index]?t._t("left",[i("v-uni-view",[t._v(t._s(t.options[this.index][this.labelName]))])],{item:t.options[this.index],labelName:t.labelName}):t._e()]:t._e(),"time"==t.mode?[t._t("left",[i("v-uni-view",{},[t._v(t._s(t.value))])])]:t._e(),t._t("right",[i("v-uni-view",{staticClass:"xyicon xyicon-down m-l-xs"})])],2)],1)},r=[]},b5c7:function(t,e,i){"use strict";i.r(e);var n=i("267f"),a=i("16a7");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("369f");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"17f425d3",null,!1,n["a"],s);e["default"]=l.exports},b6df:function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),r={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",i=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(i)):t.label="剩余"+t.timeLeft+"s"}),1e3),n={},n="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},e.next=12,t.util.request({url:t.url,data:n,method:"post"});case 12:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",a.data)):t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=r},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n=a(i("06c5"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){l=!0,s=t},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(l)throw s}}}}},caa1:function(t,e,i){"use strict";i.r(e);var n=i("8be9"),a=i("3fc1");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("090d");var s,o=i("f0c5"),l=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1f85eb2c",null,!1,n["a"],s);e["default"]=l.exports},d35e:function(t,e,i){"use strict";var n=i("f12a"),a=i.n(n);a.a},e9be:function(t,e,i){"use strict";(function(t){i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"XyPicker",props:{mode:{type:String,default:"selector"},value:{type:[Number,String],default:""},options:{type:Array,default:function(){return[]}},labelName:{type:String,default:"title"},valueName:{type:String,default:"value"}},data:function(){return{index:""}},created:function(){switch(this.mode){case"selector":var e={};e[this.labelName]="请选择",e[this.valueName]="",this.options.unshift(e),t("log",this.options," at node_modules/xyui/flex-ui/src/xy-picker/xy-picker.vue:75");for(var i=0;i<this.options.length;i++)this.options[i][this.valueName]==this.value&&(this.index=i);break;case"time":break}},methods:{bindPickerChange:function(t){switch(this.mode){case"selector":this.index=t.detail.value,this.$emit("input",this.options[this.index][this.valueName]);break;case"time":this.value=t.detail.value,this.$emit("input",t.detail.value);break}}}};e.default=n}).call(this,i("0de9")["log"])},eb93:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.list.length>0?i("v-uni-view",{staticClass:"xy-tabs",class:t.type},[i("v-uni-scroll-view",{attrs:{"scroll-x":"true","scroll-with-animation":!0,"scroll-left":t.tabsScrollLeft},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tab",attrs:{id:"tab_list"}},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,class:["tab-item",{"flex-1":t.full},{"tab-item-active":(t.showActive||0==n)&&t.currentIndex===n}],style:{color:t.currentIndex===n?""+t.itemColor:""},attrs:{id:"tab_item"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.select(e,n)}}},[i("v-uni-view",{staticClass:"title tw6 ts-16"},[t._t("title",[t._v(t._s(e.title))],{title:e.title})],2)],1)})),1),i("v-uni-view",{staticClass:"tab-line",style:{background:t.lineColor,width:t.lineStyle.width,transform:t.lineStyle.transform,transitionDuration:t.lineStyle.transitionDuration}})],1)],1):t._e()},r=[]},f12a:function(t,e,i){var n=i("11f8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("09211d8f",n,!0,{sourceMap:!1,shadowMode:!1})}}]);