(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin_otc-ad-order"],{"20c5":function(t,e,n){"use strict";n.r(e);var i=n("e356"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"2cca":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-65589196]{background-color:#060845;color:hsla(0,0%,100%,.75)}uni-page-body .info-box[data-v-65589196]{padding:16px;background-color:hsla(0,0%,100%,.12);color:hsla(0,0%,100%,.6)}uni-page-body .info-box .list-row[data-v-65589196]{margin-bottom:8px}body.?%PAGE?%[data-v-65589196]{background-color:#060845}',""]),t.exports=e},6786:function(t,e,n){var i=n("2cca");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("70068449",i,!0,{sourceMap:!1,shadowMode:!1})},"72a0":function(t,e,n){"use strict";var i=n("6786"),a=n.n(i);a.a},"8f3f":function(t,e,n){"use strict";n.r(e);var i=n("cfeb"),a=n("20c5");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("72a0");var o,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"65589196",null,!1,i["a"],o);e["default"]=r.exports},cfeb:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={xyTabs:n("7dac").default,xyCopy:n("7dfa").default,xyButton:n("a75b").default,uniPopup:n("1055").default,xyBuilderForm:n("0355").default,xySafetyVerify:n("7ffb").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"p-l-sm p-r-sm p-b-lg"},[[n("v-uni-view",{staticClass:"header p-t flex space-between"},[n("v-uni-view",{staticClass:"title ts-16 tw6"},[t._v(t._s(t.info.stateFormat.title))]),n("v-uni-view",{staticClass:"right ts-12"},[0==t.info.state||1==t.info.state?n("countdown-timer",{attrs:{autoStart:!0,time:1e3*t.info.leftTime},on:{finish:function(e){arguments[0]=e=t.$handleEvent(e),t.endCd.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.day,a=e.hour,s=e.minute,o=e.second;return[n("v-uni-view",[t._v(t._s(i)+'"'+t._s(a)+'"'+t._s(s)+'"'+t._s(o))])]}}],null,!1,4292201072)}):t._e(),3==t.info.state?n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popupComment.open.apply(void 0,arguments)}}},[t._v("评价")]):t._e()],1)],1),1==t.info.state||2==t.info.state?n("v-uni-view",{staticClass:"m-t"},[2==t.info.type?n("v-uni-view",{staticClass:"bg-info p-a text-center br-2 text-white"},[n("v-uni-view",{staticClass:"ts-18 tw6"},[t._v(t._s(t.info.totalPrice)+" CNY")]),n("v-uni-view",{staticClass:"ts-12"},[t._v("请向以下账户付款")])],1):t._e(),1==t.info.type?n("v-uni-view",{staticClass:"bg-info p-a text-center br-2 text-white"},[n("v-uni-view",{staticClass:"ts-18 tw6"},[t._v(t._s(t.info.totalPrice)+" CNY")]),1==t.info.state?n("v-uni-view",{staticClass:"ts-12"},[t._v("等待用户向您支付，请及时查收并确认。")]):t._e(),2==t.info.state?n("v-uni-view",{staticClass:"ts-12"},[t._v("用户已确认向您打款，请立即查收并核对")]):t._e()],1):t._e(),2==t.info.type?n("v-uni-view",{staticClass:"info-box",staticStyle:{"background-color":"#fff",color:"#333"}},[n("xy-tabs",{attrs:{list:t.tabList,showActive:!0},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),t.info.alipay&&1==t.tabList[this.tabIndex].value?n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("收款人")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.alipay.name}},[n("v-uni-text",[t._v(t._s(t.info.alipay.name))])],1)],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("支付宝收款码")]),n("v-uni-view",{staticClass:"text-info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.previewImage({urls:[t.info.wxpay.qr]})}}},[t._v("查看收款码")])],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("备注内容")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.code}},[n("v-uni-text",[t._v(t._s(t.info.code)+" (请务必填写)")])],1)],1)],1)],1):t._e(),t.info.wxpay&&2==t.tabList[this.tabIndex].value?n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("收款人")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.wxpay.name}},[n("v-uni-text",[t._v(t._s(t.info.wxpay.name))])],1)],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("支付宝收款码")]),n("v-uni-view",{staticClass:"text-info",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.previewImage({urls:[t.info.wxpay.qr]})}}},[t._v("查看收款码")])],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("备注内容")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.code}},[n("v-uni-text",[t._v(t._s(t.info.code)+" (请务必填写)")])],1)],1)],1)],1):t._e(),t.info.bank&&3==t.tabList[this.tabIndex].value?n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("收款人")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.bank.name}},[n("v-uni-text",[t._v(t._s(t.info.bank.name))])],1)],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("开户行")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.bank.bank}},[n("v-uni-text",[t._v(t._s(t.info.bank.bank))])],1)],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("银行卡账号")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.bank.account}},[n("v-uni-text",[t._v(t._s(t.info.bank.account))])],1)],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("备注内容")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.code}},[n("v-uni-text",[t._v(t._s(t.info.code)+" (请务必填写)")])],1)],1)],1)],1):t._e()],1):t._e()],1):t._e(),n("v-uni-view",{staticClass:"info-box ts-12 m-t bg-white br-2",staticStyle:{"background-color":"#fff",color:"#333"}},[n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("交易类型")]),n("v-uni-view",{},[2==t.info.type?n("v-uni-text",[t._v("买入")]):t._e(),1==t.info.type?n("v-uni-text",[t._v("卖出")]):t._e()],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("交易金额")]),n("v-uni-view",{},[t._v(t._s(t.info.totalPrice)),n("v-uni-text",{staticClass:"font-sm"},[t._v("CNY")])],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("数量")]),n("v-uni-view",{},[t._v(t._s(t.info.amount))])],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("单价")]),n("v-uni-view",{},[t._v(t._s(t.info.price))])],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("对方真实姓名")]),n("v-uni-view",{},[t._v(t._s(t.info.otcUser.kycInfo.realName))])],1)],1),n("v-uni-view",{staticClass:"info-box ts-12 m-t br-2"},[n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("订单编号")]),n("v-uni-view",{},[n("xy-copy",{attrs:{content:t.info.id}},[n("v-uni-text",[t._v(t._s(t.info.id))])],1)],1)],1),n("v-uni-view",{staticClass:"list-row flex space-between"},[n("v-uni-view",{},[t._v("下单时间")]),n("v-uni-view",{},[t._v(t._s(t._f("formatTime")(t.info.createTime)))])],1)],1)],1!=t.info.type||0!=t.info.state&&1!=t.info.state&&2!=t.info.state?t._e():n("v-uni-view",{staticClass:"fixed-bottom",staticStyle:{"background-color":"#060845"}},[n("v-uni-view",{staticClass:"p-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.call.apply(void 0,arguments)}}},[t._v("联系")]),2==t.info.state?[n("v-uni-view",{staticClass:"p-r"},[n("xy-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popupAppeal.open.apply(void 0,arguments)}}},[t._v("申诉")])],1),n("v-uni-view",{staticClass:"p-r"},[n("xy-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.received.apply(void 0,arguments)}}},[t._v("确认收款")])],1)]:t._e(),1==t.info.state?void 0:t._e(),0==t.info.state?[n("v-uni-view",{staticClass:"p-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消订单")]),n("v-uni-view",{staticClass:"p-r"},[n("xy-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.accept.apply(void 0,arguments)}}},[t._v("接单")])],1)]:t._e()],2),2!=t.info.type||0!=t.info.state&&1!=t.info.state&&2!=t.info.state?t._e():n("v-uni-view",{staticClass:"fixed-bottom",staticStyle:{"background-color":"#060845"}},[n("v-uni-view",{staticClass:"p-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.call.apply(void 0,arguments)}}},[t._v("联系")]),2==t.info.state?[n("v-uni-view",{staticClass:"p-r"},[n("xy-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popupAppeal.open.apply(void 0,arguments)}}},[t._v("申诉")])],1)]:t._e(),1==t.info.state?[n("v-uni-view",{staticClass:"p-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消订单")]),n("v-uni-view",{staticClass:"p-r"},[n("xy-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.paid.apply(void 0,arguments)}}},[t._v("确认付款")])],1)]:t._e(),0==t.info.state?[n("v-uni-view",{staticClass:"p-l",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消订单")]),n("v-uni-view",{staticClass:"p-r"},[n("xy-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.accept.apply(void 0,arguments)}}},[t._v("接单")])],1)]:t._e()],2),n("uni-popup",{ref:"popupAppeal",attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"p-a bg-white"},[n("xy-builder-form",{staticStyle:{margin:"0 2px"},attrs:{api:"/v1/coin_otc/order/appeal/"+t.info.id},on:{afterSubmit:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popupAppeal.close.apply(void 0,arguments)}}})],1)],1),n("uni-popup",{ref:"popupComment",attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"p-a bg-white"},[n("xy-builder-form",{staticStyle:{margin:"0 2px"},attrs:{api:"/v1/coin_otc/order/comment/"+t.info.id},on:{afterSubmit:function(e){arguments[0]=e=t.$handleEvent(e),t.$refs.popupComment.close.apply(void 0,arguments)}}})],1)],1),n("xy-safety-verify",{ref:"sv",on:{"verify-request":function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit.apply(void 0,arguments)}},model:{value:t.verifyData,callback:function(e){t.verifyData=e},expression:"verifyData"}})],2)},s=[]},e356:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),s=i(n("8069")),o={components:{"countdown-timer":s.default},data:function(){return{id:6,tabIndex:0,info:{adInfo:{userInfo:{avatar:""},otcUser:{tradeCount:0,kycInfo:{realName:"----"}}},stateFormat:{title:"",color:""},coinInfo:{symbol:""}},verifyData:"",commentVisible:!1,appealVisible:!1,tabList:[]}},onLoad:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.id&&(e.id=t.id),n.next=3,e.loadData(e.id);case 3:e.info.alipay&&e.tabList.push({value:1,title:"支付宝"}),e.info.wxpay&&e.tabList.push({value:2,title:"微信"}),e.info.bank&&e.tabList.push({value:3,title:"银行卡"});case 6:case"end":return n.stop()}}),n)})))()},methods:{call:function(){uni.makePhoneCall({phoneNumber:this.info.userInfo.mobile.identifier})},endCd:function(){this.loadData(this.id)},handleSubmit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.verifyData&&(data._verify=t.verifyData),t.$refs.sv.close(),t.verifyData="";case 3:case"end":return e.stop()}}),e)})))()},cancel:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.showModal({title:"警告",content:"确认要取消吗，操作无法恢复，如果您误操作，您需要自己承担损失。",success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return e.next=3,this.util.request({url:"/v1/coin_otc/ad/cancelOrder/"+id,data:{},method:"PUT"});case 3:i=e.sent,200==i.code?(this.util.showToast({title:i.msg,icon:"success",duration:1e3}),this.info.state=-1):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.next=8;break;case 7:n.cancel&&t("log","用户点击取消"," at pages/coin_otc/ad/order.vue:402");case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()});case 1:case"end":return e.stop()}}),e)})))()},accept:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.showModal({title:"警告",content:"点击“确定”后视您确认接单；若您拒绝配合用户处理订单，导致判定您败诉，资金损失由您承担。",success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return e.next=3,this.util.request({url:"/v1/coin_otc/ad/accept/"+id,data:{},method:"PUT"});case 3:i=e.sent,200==i.code?(this.util.showToast({title:i.msg,icon:"success",duration:1e3}),this.info.state=1):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.next=8;break;case 7:n.cancel&&t("log","用户点击取消"," at pages/coin_otc/ad/order.vue:434");case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()});case 1:case"end":return e.stop()}}),e)})))()},paid:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.showModal({title:"警告",content:"点击“确定”后视您承诺已成功汇款；若用户没有收到款项提出申诉，则48小时内客服就会自动介入处理；若您在48小时内没有配合处理，则判定您败诉，资金损失由您承担。",success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return e.next=3,this.util.request({url:"/v1/coin_otc/ad/paid/"+id,data:{},method:"PUT"});case 3:i=e.sent,200==i.code?(this.util.showToast({title:i.msg,icon:"success",duration:1e3}),this.info.state=2):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.next=8;break;case 7:n.cancel&&t("log","用户点击取消"," at pages/coin_otc/ad/order.vue:466");case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()});case 1:case"end":return e.stop()}}),e)})))()},received:function(){return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.showModal({title:"警告",content:"点击“确定”后视您承诺已成功收到汇款；若用户没有收到币提出申诉，则48小时内客服就会自动介入处理；若您在48小时内没有配合处理，则判定您败诉，资金损失由您承担。",success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return e.next=3,this.util.request({url:"/v1/coin_otc/ad/received/"+id,data:{},method:"PUT"});case 3:i=e.sent,200==i.code?(this.util.showToast({title:i.msg,icon:"success",duration:1e3}),this.info.state=3):this.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.next=8;break;case 7:n.cancel&&t("log","用户点击取消"," at pages/coin_otc/ad/order.vue:498");case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()});case 1:case"end":return e.stop()}}),e)})))()},loadData:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.util.request({url:"/v1/coin_otc/ad/order/"+t,data:{},method:"get"});case 2:i=n.sent,200==i.code?e.info=i.data.info:e.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return n.stop()}}),n)})))()}}};e.default=o}).call(this,n("0de9")["log"])}}]);