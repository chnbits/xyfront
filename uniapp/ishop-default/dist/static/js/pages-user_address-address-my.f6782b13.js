(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_address-address-my"],{"533a":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-e3db203e]{padding-bottom:%?120?%}.content[data-v-e3db203e]{position:relative}.list[data-v-e3db203e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-e3db203e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-e3db203e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-e3db203e]{font-size:%?24?%;color:#e23435;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;line-height:1}.address-box .address[data-v-e3db203e]{font-size:%?30?%;color:#303133}.u-box[data-v-e3db203e]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-e3db203e]{margin-right:%?30?%}.icon-bianji[data-v-e3db203e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-e3db203e]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#e23435;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}',""]),e.exports=t},"72d6":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content b-t"},[e._l(e.addressList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"list b-b",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.checkAddress(t)}}},[n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"address-box"},[t.isDefault?n("v-uni-text",{staticClass:"tag"},[e._v("默认")]):e._e(),n("v-uni-text",{staticClass:"name m-r-xs"},[e._v(e._s(t.name))]),1==t.gender?n("v-uni-text",[e._v("先生")]):e._e(),2==t.gender?n("v-uni-text",[e._v("女士")]):e._e(),n("v-uni-text",{staticClass:"m-l-xs"},[e._v(e._s(t.tel))])],1),n("v-uni-view",{staticClass:"u-box"},[n("v-uni-text",{staticClass:"city"},[e._v(e._s(t.city))]),n("v-uni-text",{staticClass:"address"},[e._v(e._s(t.address))])],1)],1),n("v-uni-text",{staticClass:"xyicon xyicon-edit",on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.addAddress("edit",t)}}})],1)})),n("v-uni-text",{staticStyle:{display:"block",padding:"16upx 30upx 10upx","lihe-height":"1.6",color:"#fa436a","font-size":"24upx"}},[e._v("提示：您可以在这里管理您的收货地址")]),n("v-uni-button",{staticClass:"add-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增地址")])],2)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},"7a5f":function(e,t,n){"use strict";n.r(t);var i=n("72d6"),a=n("cb3e");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("d607");var r,d=n("f0c5"),o=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"e3db203e",null,!1,i["a"],r);t["default"]=o.exports},cb3e:function(e,t,n){"use strict";n.r(t);var i=n("dc84"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},d607:function(e,t,n){"use strict";var i=n("df33"),a=n.n(i);a.a},dc84:function(e,t,n){"use strict";(function(e){var i=n("ee27");n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("c964")),s={data:function(){return{source:0,addressList:[]}},onLoad:function(t){e.log(t.source),this.source=t.source},onShow:function(){this.loadData()},onPullDownRefresh:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadData();case 2:uni.stopPullDownRefresh(),setTimeout((function(){uni.stopPullDownRefresh()}),5e3);case 4:case"end":return t.stop()}}),t)})))()},methods:{loadData:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"加载中"}),t.next=3,e.util.request({url:"/v1/user_address/address/my",method:"get"});case 3:n=t.sent,200==n.code?e.addressList=n.data.dataList:uni.showToast({title:res.msg}),uni.hideLoading();case 6:case"end":return t.stop()}}),t)})))()},checkAddress:function(e){if(1==this.source){var t=getCurrentPages(),n=t[t.length-2];n.$vm.setAddress(e),setTimeout((function(){uni.navigateBack()}),800)}},addAddress:function(e,t){uni.navigateTo({url:"/pages/user_address/address/manage?type=".concat(e,"&data=").concat(JSON.stringify(t))})},refreshList:function(e,t){this.loadData()}}};t.default=s}).call(this,n("5a52")["default"])},df33:function(e,t,n){var i=n("533a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("40dd8cba",i,!0,{sourceMap:!1,shadowMode:!1})}}]);