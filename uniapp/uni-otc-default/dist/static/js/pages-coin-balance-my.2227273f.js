(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin-balance-my"],{"0411":function(t,a,n){var i=n("27dc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=n("4f06").default;e("1ed3109e",i,!0,{sourceMap:!1,shadowMode:!1})},"27dc":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-3bb55f7d]{background-color:#fff}uni-page-body .refcharge-withdraw .item[data-v-3bb55f7d]{width:35%;border-radius:1px;padding:5px 20px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}body.?%PAGE?%[data-v-3bb55f7d]{background-color:#fff}',""]),t.exports=a},"6c2a":function(t,a,n){"use strict";var i=n("0411"),e=n.n(i);e.a},"6cb6":function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return e})),n.d(a,"c",(function(){return s})),n.d(a,"a",(function(){return i}));var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("v-uni-view",{staticClass:"header m-l-sm p-t-md p-b p-l-sm"},[n("v-uni-view",{staticClass:"title ts-24 tw6"},[t._v("我的资产")])],1),n("v-uni-view",{staticClass:"m-l-sm p-l-sm"},[n("v-uni-text",{staticClass:"ts-13"},[t._v("总资产USDT")]),n("v-uni-view",{staticClass:"cny m-t-xs"},[n("v-uni-text",{staticClass:"ts-18"},[t._v(t._s(t.totalBalance.usdt))]),n("v-uni-text",{staticClass:"ts-12"},[t._v("≈"+t._s(t.totalBalance.cny)+"CNY")])],1)],1),n("v-uni-view",{staticClass:"m-t refcharge-withdraw flex text-white space-between m-l m-r"},[n("v-uni-view",{staticClass:"item bg-primary flex flex-alignCenter",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.util.navigateTo({url:"/pages/coin/address/recharge"})}}},[n("v-uni-text",{staticClass:"xyicon xyicon-wallet"}),n("v-uni-view",{staticClass:"m-l"},[t._v("充币")])],1),n("v-uni-view",{staticClass:"item bg-danger flex flex-alignCenter",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.util.navigateTo({url:"/pages/coin/balance/withdraw"})}}},[n("v-uni-text",{staticClass:"xyicon xyicon-wallet"}),n("v-uni-view",{staticClass:"m-l"},[t._v("提币")])],1)],1),n("v-uni-view",{staticClass:"m-t m-l-sm p-l-sm p-r-sm"},t._l(t.dataList,(function(a){return n("v-uni-view",{key:a.id,staticClass:"list-row",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.util.navigateTo({url:"/pages/coin/log/my?coinId="+a.coinId})}}},[n("v-uni-view",{staticClass:"flex space-between"},[n("v-uni-view",{staticClass:"left tw6"},[t._v(t._s(a.coinInfo.symbol))]),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{staticClass:"xyicon xyicon-right"})],1)],1),n("v-uni-view",{staticClass:"m-t-sm flex space-between"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-view",{staticClass:"ts-12 m-b-xs"},[t._v("可用")]),n("v-uni-view",{staticClass:"ts-13"},[t._v(t._s(a.balance))])],1),n("v-uni-view",{staticClass:"middle"},[n("v-uni-view",{staticClass:"ts-12 m-b-xs"},[t._v("冻结")]),n("v-uni-view",{staticClass:"ts-13"},[t._v(t._s(a.balanceFrozen))])],1),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"ts-12 m-b-xs"},[t._v("折合CNY")]),n("v-uni-view",{staticClass:"ts-13"},[t._v(t._s(a.totalCny))])],1)],1)],1)})),1)],1)},s=[]},a557:function(t,a,n){"use strict";var i=n("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("96cf");var e=i(n("1da1")),s={data:function(){return{totalBalance:{},dataList:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=this;return(0,e.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.util.request({url:"/v1/coin/balance/my",method:"get"});case 2:n=a.sent,200==n.code?(t.dataList=n.data.dataList,t.totalBalance=n.data.totalBalance):t.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()}}};a.default=s},e998:function(t,a,n){"use strict";n.r(a);var i=n("a557"),e=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(a,t,(function(){return i[t]}))}(s);a["default"]=e.a},ee3a:function(t,a,n){"use strict";n.r(a);var i=n("6cb6"),e=n("e998");for(var s in e)"default"!==s&&function(t){n.d(a,t,(function(){return e[t]}))}(s);n("6c2a");var r,c=n("f0c5"),l=Object(c["a"])(e["default"],i["b"],i["c"],!1,null,"3bb55f7d",null,!1,i["a"],r);a["default"]=l.exports}}]);