(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ishop-order_return-info"],{"06bf":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("09f7").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-steps"},[n("v-uni-view",{class:["column"===t.direction?"uni-steps__column":"uni-steps__row"]},[n("v-uni-view",{class:["column"===t.direction?"uni-steps__column-text-container":"uni-steps__row-text-container"]},t._l(t.options,(function(e,i){return n("v-uni-view",{key:i,class:["column"===t.direction?"uni-steps__column-text":"uni-steps__row-text"]},[n("v-uni-text",{class:["column"===t.direction?"uni-steps__column-title":"uni-steps__row-title"],style:{color:i===t.active?t.activeColor:t.deactiveColor}},[t._v(t._s(e.title))]),n("v-uni-text",{class:["column"===t.direction?"uni-steps__column-desc":"uni-steps__row-desc"],style:{color:t.deactiveColor}},[t._v(t._s(e.desc))])],1)})),1),n("v-uni-view",{class:["column"===t.direction?"uni-steps__column-container":"uni-steps__row-container"]},t._l(t.options,(function(e,i){return n("v-uni-view",{key:i,class:["column"===t.direction?"uni-steps__column-line-item":"uni-steps__row-line-item"]},[n("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--before":"uni-steps__row-line--before"],style:{backgroundColor:i<=t.active&&0!==i?t.activeColor:0===i?"transparent":t.deactiveColor}}),i===t.active?n("v-uni-view",{class:["column"===t.direction?"uni-steps__column-check":"uni-steps__row-check"]},[n("uni-icons",{attrs:{color:t.activeColor,type:t.activeIcon,size:"14"}})],1):n("v-uni-view",{class:["column"===t.direction?"uni-steps__column-circle":"uni-steps__row-circle"],style:{backgroundColor:i<t.active?t.activeColor:t.deactiveColor}}),n("v-uni-view",{class:["column"===t.direction?"uni-steps__column-line":"uni-steps__row-line","column"===t.direction?"uni-steps__column-line--after":"uni-steps__row-line--after"],style:{backgroundColor:i<t.active&&i!==t.options.length-1?t.activeColor:i===t.options.length-1?"transparent":t.deactiveColor}})],1)})),1)],1)],1)},o=[]},"0a70":function(t,e,n){var i=n("8bd6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("6725bde2",i,!0,{sourceMap:!1,shadowMode:!1})},"0dd1":function(t,e,n){"use strict";n.r(e);var i=n("06bf"),r=n("6d3b");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("2433");var a,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"6578ddfb",null,!1,i["a"],a);e["default"]=l.exports},1041:function(t,e,n){"use strict";n.r(e);var i=n("5414"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},2433:function(t,e,n){"use strict";var i=n("7144"),r=n.n(i);r.a},5414:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("b85c"));n("96cf");var o=i(n("1da1")),a={data:function(){return{deliverModel:!1,orderSkuId:0,info:{},currentLog:{},deliverStateList:[{title:"已收到货",value:"1"},{title:"未收到货",value:"2"}],typeList:[{title:"退货退款",value:"1"},{title:"仅退款",value:"2"},{title:"仅退货",value:"3"}],reasonList:[{title:"多拍/错拍/",value:"1"}],deliverList:[]}},onLoad:function(t){this.orderSkuId=t.orderSkuId,this.loadData()},methods:{cancel:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,t.$xyutil.request({url:"/v1/ishop/order_return/cancel/"+info.id,method:"delete"});case 3:n=e.sent,uni.showModal({content:n.msg,success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),uni.hideLoading();case 6:case"end":return e.stop()}}),e)})))()},deliverPopup:function(){this.$refs.popup.open()},deliver:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,t.$xyutil.request({url:"/v1/ishop/order_return/deliver/"+info.id,method:"post",data:{deliverNo:t.info.deliverNo,deliverCompany:t.info.deliverCompany}});case 3:n=e.sent,uni.showModal({content:n.msg,success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),uni.hideLoading();case 6:case"end":return e.stop()}}),e)})))()},submit:function(){var t=arguments,e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=t.length>0&&void 0!==t[0]?t[0]:0,uni.showLoading({title:"加载中..."}),n.next=4,e.$xyutil.request({url:"/v1/ishop/order_return/reApply/"+info.id,method:"post",data:{type:e.info.type,reasonId:e.info.reasonId,money:e.info.money,isPlatform:i}});case 4:r=n.sent,uni.showModal({content:r.msg,success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),uni.hideLoading();case 7:case"end":return n.stop()}}),n)})))()},loadData:function(){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var i,a,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({title:"加载中..."}),n.next=3,e.$xyutil.request({url:"/v1/ishop/order_return/info",method:"get",data:{orderSkuId:e.orderSkuId}});case 3:if(i=n.sent,200==i.code){e.info=i.data.info,a=(0,r.default)(e.info.logList);try{for(a.s();!(s=a.n()).done;)l=s.value,l.id==e.info.logId&&(e.currentLog=l)}catch(u){a.e(u)}finally{a.f()}t.log(e.currentLog),e.reasonList=i.data.reasonList,e.deliverList=i.data.deliverList}else uni.showModal({content:i.msg,success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.navigateBack();case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});uni.hideLoading();case 6:case"end":return n.stop()}}),n)})))()}}};e.default=a}).call(this,n("5a52")["default"])},"6d3b":function(t,e,n){"use strict";n.r(e);var i=n("b79ae"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},7144:function(t,e,n){var i=n("e859");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("6cd80250",i,!0,{sourceMap:!1,shadowMode:!1})},"8bd6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.extra[data-v-600a0e9c] .xy-list-item .left{margin-right:40px}',""]),t.exports=e},b2d5:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={xyListItem:n("2b66").default,xyTag:n("9cf1").default,xyPicker:n("3362").default,uniSteps:n("0dd1").default,uniPopup:n("74a7").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",t._l(t.info.orderSkuList,(function(e,i){return n("xy-list-item",{key:i,attrs:{type:"media",title:e.title+"",value:e.id+"",image:e.cover,titleFs:"14px"}},[n("template",{slot:"info"},[n("v-uni-view",{staticClass:"left text-gray"},[n("v-uni-view",{staticClass:"des m-t-xs",staticStyle:{"margin-left":"-10px"}},[n("xy-tag",{staticClass:"font-xs bg-gray",attrs:{type:"gray",size:"middle"}},[t._v(t._s(e.spec))])],1),n("v-uni-view",{staticClass:"price text-error"},[n("v-uni-view",{staticClass:"font-md"},[t._v("¥"),n("v-uni-text",{},[t._v(t._s(e.price))]),n("v-uni-text",{staticClass:"m-l-sm text-gray font-sm"})],1)],1)],1),n("v-uni-view",{staticClass:"right p-t-xs font-sm text-gray"},[n("v-uni-text",[t._v("x"+t._s(e.amount))])],1)],1)],2)})),1),n("v-uni-view",{staticClass:"extra m-t"},[n("xy-list-item",{attrs:{type:"input",title:"获取状态",titleFs:"14px"}},[n("template",{slot:"titleRight"},[n("xy-picker",{attrs:{options:t.deliverStateList},model:{value:t.info.type,callback:function(e){t.$set(t.info,"type",e)},expression:"info.type"}})],1)],2),n("xy-list-item",{attrs:{type:"input",title:"退货方式",titleFs:"14px"}},[n("template",{slot:"titleRight"},[n("xy-picker",{attrs:{options:t.typeList},model:{value:t.info.deliverState,callback:function(e){t.$set(t.info,"deliverState",e)},expression:"info.deliverState"}})],1)],2),n("xy-list-item",{attrs:{type:"input",title:"退货原因",titleFs:"14px"}},[n("template",{slot:"titleRight"},[n("xy-picker",{attrs:{options:t.reasonList},model:{value:t.info.reasonId,callback:function(e){t.$set(t.info,"reasonId",e)},expression:"info.reasonId"}})],1)],2),n("xy-list-item",{attrs:{type:"input",title:"退货金额",titleFs:"14px"}},[n("template",{slot:"titleRight"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入退款金额"},model:{value:t.info.money,callback:function(e){t.$set(t.info,"money",e)},expression:"info.money"}})],1)],2)],1),n("uni-steps",{attrs:{direction:"column","active-color":"red",options:t.info.logList}}),0==t.currentLog.handler||3==t.currentLog.handler||4==t.currentLog.handler?n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"m-l m-r m-t",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1):1==t.currentLog.handler?n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"m-l m-r m-t",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("重新提交")]),n("v-uni-button",{staticClass:"m-l m-r m-t",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit(1)}}},[t._v("申请介入")])],1):2==t.currentLog.handler?n("v-uni-view",{staticClass:"action"},[t.info.state<2?n("v-uni-view",[n("v-uni-button",{staticClass:"m-l m-r m-t",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1):2==t.info.state?n("v-uni-view",[n("v-uni-button",{staticClass:"m-l m-r m-t",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deliverPopup.apply(void 0,arguments)}}},[t._v("发货")]),n("v-uni-button",{staticClass:"m-l m-r m-t",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")])],1):t._e()],1):t._e(),n("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[n("xy-list-item",{attrs:{type:"input",title:"快递公司",titleFs:"14px"}},[n("template",{slot:"titleRight"},[n("xy-picker",{attrs:{options:t.deliverList},model:{value:t.info.deliverCompany,callback:function(e){t.$set(t.info,"deliverCompany",e)},expression:"info.deliverCompany"}})],1)],2),n("xy-list-item",{attrs:{type:"input",title:"快递单号",titleFs:"14px"}},[n("template",{slot:"titleRight"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入快递单号"},model:{value:t.info.deliverNo,callback:function(e){t.$set(t.info,"deliverNo",e)},expression:"info.deliverNo"}})],1)],2),n("v-uni-button",{staticClass:"m-l m-r m-t",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deliver.apply(void 0,arguments)}}},[t._v("确认发货")])],1)],1)},o=[]},b79ae:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSteps",props:{direction:{type:String,default:"row"},activeColor:{type:String,default:"#2979FF"},deactiveColor:{type:String,default:"#B7BDC6"},active:{type:Number,default:0},activeIcon:{type:String,default:"checkbox-filled"},options:{type:Array,default:function(){return[]}}},data:function(){return{}}};e.default=i},bf83:function(t,e,n){"use strict";var i=n("0a70"),r=n.n(i);r.a},dc93:function(t,e,n){"use strict";n.r(e);var i=n("b2d5"),r=n("1041");for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("bf83");var a,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"600a0e9c",null,!1,i["a"],a);e["default"]=l.exports},e859:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.uni-steps[data-v-6578ddfb]{display:flex;width:100%;flex-direction:column}.uni-steps__row[data-v-6578ddfb]{display:flex;flex-direction:column}.uni-steps__column[data-v-6578ddfb]{display:flex;flex-direction:row-reverse}.uni-steps__row-text-container[data-v-6578ddfb]{display:flex;flex-direction:row;align-items:flex-end;margin-bottom:8px}.uni-steps__column-text-container[data-v-6578ddfb]{display:flex;flex-direction:column;flex:1}.uni-steps__row-text[data-v-6578ddfb]{display:inline-flex;flex:1;flex-direction:column}.uni-steps__column-text[data-v-6578ddfb]{padding:6px 0;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#ededed;display:flex;flex-direction:column}.uni-steps__row-title[data-v-6578ddfb]{font-size:14px;line-height:16px;text-align:center}.uni-steps__column-title[data-v-6578ddfb]{font-size:14px;text-align:left;line-height:18px}.uni-steps__row-desc[data-v-6578ddfb]{font-size:12px;line-height:14px;text-align:center}.uni-steps__column-desc[data-v-6578ddfb]{font-size:12px;text-align:left;line-height:18px}.uni-steps__row-container[data-v-6578ddfb]{display:flex;flex-direction:row}.uni-steps__column-container[data-v-6578ddfb]{display:inline-flex;width:30px;flex-direction:column}.uni-steps__row-line-item[data-v-6578ddfb]{display:inline-flex;flex-direction:row;flex:1;height:14px;line-height:14px;align-items:center;justify-content:center}.uni-steps__column-line-item[data-v-6578ddfb]{display:flex;flex-direction:column;flex:1;align-items:center;justify-content:center}.uni-steps__row-line[data-v-6578ddfb]{flex:1;height:1px;background-color:#b7bdc6}.uni-steps__column-line[data-v-6578ddfb]{width:1px;background-color:#b7bdc6}.uni-steps__row-line--after[data-v-6578ddfb]{-webkit-transform:translateX(1px);transform:translateX(1px)}.uni-steps__column-line--after[data-v-6578ddfb]{flex:1;-webkit-transform:translateY(1px);transform:translateY(1px)}.uni-steps__row-line--before[data-v-6578ddfb]{-webkit-transform:translateX(-1px);transform:translateX(-1px)}.uni-steps__column-line--before[data-v-6578ddfb]{height:6px;-webkit-transform:translateY(-13px);transform:translateY(-13px)}.uni-steps__row-circle[data-v-6578ddfb]{width:5px;height:5px;border-radius:50%;background-color:#b7bdc6;margin:0 3px}.uni-steps__column-circle[data-v-6578ddfb]{width:5px;height:5px;border-radius:50%;background-color:#b7bdc6;margin:4px 0 5px 0}.uni-steps__row-check[data-v-6578ddfb]{margin:0 6px}.uni-steps__column-check[data-v-6578ddfb]{height:14px;line-height:14px;margin:2px 0}',""]),t.exports=e}}]);