(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-scoreshop-item-info"],{"156a":function(t,n,e){var a=e("7ded");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("2a1c0ff5",a,!0,{sourceMap:!1,shadowMode:!1})},2150:function(t,n,e){var a=e("fe5b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("39d3dd20",a,!0,{sourceMap:!1,shadowMode:!1})},3379:function(t,n,e){"use strict";(function(t){e("ac1f"),e("466d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"XyImage",props:{src:{type:String,default:""},mode:{type:String,default:""},"lazy-load":{type:Boolean,default:!1},"fade-show":{type:Boolean,default:!0},webp:{type:Boolean,default:!1},"show-menu-by-longpress":{type:Boolean,default:!1},placeholder:{type:String,default:""},complete:{type:Function,default:null}},watch:{src:function(t,n){t&&this.convert(t)}},data:function(){return{native:this.placeholder}},created:function(){this.convert(this.src)},methods:{convert:function(n){var e=this;if(n.match(/(http:|https:)/)){var a=this.$xyutil.imageCache(n,(function(t){e.native=t,e.complete&&e.complete(t)}));t.log(n+"->"+a),this.native=a}else this.native=n},load:function(){this.$emit("load")},error:function(){this.$emit("error")}}};n.default=a}).call(this,e("5a52")["default"])},"3f59":function(t,n,e){"use strict";e.r(n);var a=e("fc1c"),i=e("7870");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("7269");var r,o=e("f0c5"),d=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"2f466521",null,!1,a["a"],r);n["default"]=d.exports},"6df1":function(t,n,e){"use strict";(function(t){var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var i=a(e("1da1")),s={data:function(){return{id:0,info:{},addressData:{name:"",tel:"",address:"",city:"",isDefault:0}}},onLoad:function(t){this.id=t.id,this.loadData()},methods:{setAddress:function(n){t.log(n),this.addressData=n},submit:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({tilte:"加载中..."}),n.next=3,t.$xyutil.request({url:"/v1/scoreshop/order/submit",method:"post",data:{itemId:t.id,amount:1,addressData:t.addressData}});case 3:e=n.sent,200==e.code?uni.navigateTo({url:"../order/my"}):t.$xyutil.showToast({title:e.msg,icon:"loading",duration:2e3}),uni.hideLoading();case 6:case"end":return n.stop()}}),n)})))()},loadData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return uni.showLoading({tilte:"加载中..."}),n.next=3,t.$xyutil.request({url:"/v1/scoreshop/item/info/"+t.id,method:"get"});case 3:e=n.sent,200==e.code?(t.info=e.data.info,e.data.defaultAddress&&e.data.defaultAddress.name&&(t.addressData=e.data.defaultAddress)):t.$xyutil.showToast({title:e.msg,icon:"loading",duration:2e3}),uni.hideLoading();case 6:case"end":return n.stop()}}),n)})))()}}};n.default=s}).call(this,e("5a52")["default"])},7269:function(t,n,e){"use strict";var a=e("2150"),i=e.n(a);i.a},7870:function(t,n,e){"use strict";e.r(n);var a=e("6df1"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},"7ded":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*修复小程序中图片宽高错误*/.xy-image[data-v-5a47599c]{\n}",""]),t.exports=n},c259:function(t,n,e){"use strict";e.r(n);var a=e("dc2e"),i=e("e40c");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("e856");var r,o=e("f0c5"),d=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"5a47599c",null,!1,a["a"],r);n["default"]=d.exports},dc2e:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-image",{staticClass:"xy-image",attrs:{src:t.native,mode:t.mode,"lazy-load":this.$props["lazy-load"],"fade-show":this.$props["fade-show"],"show-menu-by-longpress":this.$props["show-menu-by-longpress"],webp:t.webp},on:{load:function(n){arguments[0]=n=t.$handleEvent(n),t.load.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.error.apply(void 0,arguments)}}})},s=[]},e40c:function(t,n,e){"use strict";e.r(n);var a=e("3379"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},e856:function(t,n,e){"use strict";var a=e("156a"),i=e.n(a);i.a},fc1c:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var a={xyImage:e("c259").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("xy-image",{staticClass:"cover",staticStyle:{margin:"0 auto",width:"100%","background-color":"#f1f1f1"},attrs:{src:t.info.cover,mode:"aspectFit"}}),e("v-uni-view",{staticClass:"item bg-white p-t p-l p-r p-b"},[e("v-uni-view",{staticClass:"title-box flex"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.info.title))]),e("v-uni-view",{staticClass:"price text-primary"},[t._v(t._s(t.info.price)+"积分")])],1),e("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.info.description))])],1),e("v-uni-navigator",{staticClass:"address-section",attrs:{url:"/pages/user_address/address/my?source=1"}},[e("v-uni-view",{staticClass:"order-content"},[e("v-uni-text",{staticClass:"xyicon xyicon-address"}),e("v-uni-view",{staticClass:"cen"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-text",{staticClass:"name"},[t._v(t._s(t.addressData.name))]),e("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.addressData.tel))])],1),e("v-uni-view",{staticClass:"address"},[t._v(t._s(t.addressData.city)+"\n\t\t\t\t\t"+t._s(t.addressData.address))])],1),e("v-uni-text",{staticClass:"xyicon xyicon-right"})],1),e("v-uni-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"}})],1),e("v-uni-view",{staticClass:"btn m-t m-l m-r"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}}},[t._v("我要兑换")])],1),e("v-uni-view",{staticClass:"ps text-gray p-a"},[e("v-uni-view",[t._v("1.兑换提交后不可取消，扣除积分不可恢复。")]),e("v-uni-view",[t._v("2.兑换收货地址不可修改，请确认信息准确。")]),e("v-uni-view",[t._v("3.兑换库存如售完请耐心等待。")]),e("v-uni-view",[t._v("4.兑换活动最终解释权归"+t._s(t.$store.state.app.siteInfo.title)+"所有。")])],1)],1)},s=[]},fe5b:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.item .title-box[data-v-2f466521]{justify-content:space-between}.item .desc[data-v-2f466521]{margin-top:10px;font-size:14px;color:#777}.ps[data-v-2f466521]{line-height:22px;font-size:13px}.address-section[data-v-2f466521]{padding:15px;background:#fff;position:relative}.address-section .order-content[data-v-2f466521]{display:flex;align-items:center}.address-section .icon-shouhuodizhi[data-v-2f466521]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-2f466521]{padding-left:5px;display:flex;flex-direction:column;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-2f466521]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-2f466521]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-2f466521]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-2f466521]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}',""]),t.exports=n}}]);