(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ishop-order-create"],{"0b2b":function(t,e,i){"use strict";var a=i("b8e7"),n=i.n(a);n.a},1884:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-radio-group",{staticClass:"xy-radio-group",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-label",{key:a,staticClass:"radio"},[i("v-uni-view",[i("v-uni-radio",{attrs:{value:e.value,checked:t.value===e.value}})],1),i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))])],1)})),1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},"2f69":function(t,e,i){"use strict";i.r(e);var a=i("5891"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},3207:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"XyRadioGroup",props:{value:{type:[String,Number],default:""},list:{type:Array,default:[]},inline:{type:Boolean,default:!0}},data:function(){return{}},created:function(){},methods:{radioChange:function(t){this.$emit("input",t.target.value)}}};e.default=a},"4b6e":function(t,e,i){var a=i("c584");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("46824e99",a,!0,{sourceMap:!1,shadowMode:!1})},5891:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"xyList",components:{},props:{value:{type:[Array,String,Number],default:function(){return[]}},selectType:{type:String,default:"checkbox"}},data:function(){return{}},created:function(){},methods:{checkboxChange:function(t){switch(this.selectType){case"checkbox":this.$emit("input",t.target.value);break;case"radio":this.$emit("input",t.target.value[0]);break}}}};e.default=a},6795:function(t,e,i){"use strict";i.r(e);var a=i("1884"),n=i("81b3");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("0b2b");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"1b5efd2b",null,!1,a["a"],o);e["default"]=r.exports},6904:function(t,e,i){"use strict";i.r(e);var a=i("969f"),n=i("2f69");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("9d29");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"09b9d1a0",null,!1,a["a"],o);e["default"]=r.exports},"81b3":function(t,e,i){"use strict";i.r(e);var a=i("3207"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},8762:function(t,e,i){"use strict";var a=i("4b6e"),n=i.n(a);n.a},9291:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.xy-radio-group[data-v-1b5efd2b]{display:-webkit-box;display:-webkit-flex;display:flex}.xy-radio-group .radio[data-v-1b5efd2b]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?200?%}.xy-radio-group .radio[data-v-1b5efd2b] .uni-radio-input{-webkit-transform:scale(.8);transform:scale(.8)}.xy-radio-group .radio .title[data-v-1b5efd2b]{line-height:1.8}',""]),t.exports=e},"946e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */',""]),t.exports=e},"969f":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-checkbox-group",{staticClass:"xy-list",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},[t._t("default")],2)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},"9d29":function(t,e,i){"use strict";var a=i("a68d"),n=i.n(a);n.a},a68d:function(t,e,i){var a=i("946e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("a80f6512",a,!0,{sourceMap:!1,shadowMode:!1})},b8e7:function(t,e,i){var a=i("9291");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f96f969a",a,!0,{sourceMap:!1,shadowMode:!1})},c2be:function(t,e,i){"use strict";i.r(e);var a=i("f2ea1"),n=i("f91c");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("8762");var o,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"366a1175",null,!1,a["a"],o);e["default"]=r.exports},c584:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-366a1175]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-366a1175]{padding:15px;background:#fff;position:relative}.address-section .order-content[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .icon-shouhuodizhi[data-v-366a1175]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-366a1175]{padding-left:5px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-366a1175]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-366a1175]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-366a1175]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-366a1175]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-366a1175]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-366a1175]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-366a1175]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-366a1175]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-366a1175]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-366a1175]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-366a1175]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-366a1175]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-366a1175]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-366a1175]{position:relative}.yt-list[data-v-366a1175]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-366a1175]{background:#fafafa}.yt-list-cell.b-b[data-v-366a1175]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-366a1175]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-366a1175]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-366a1175]{background:#3ab54a}.yt-list-cell .cell-more[data-v-366a1175]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-366a1175]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-366a1175]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-366a1175]{color:#909399}.yt-list-cell .cell-tip.active[data-v-366a1175]{color:#e23435}.yt-list-cell .cell-tip.red[data-v-366a1175]{color:#e23435}.yt-list-cell.desc-cell .cell-tit[data-v-366a1175]{max-width:%?90?%}.yt-list-cell .desc[data-v-366a1175]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.footer[data-v-366a1175]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:calc(45px + env(safe-area-inset-bottom));-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:15px;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-366a1175]{padding-left:15px}.footer .price-tip[data-v-366a1175]{color:#e23435;margin-left:4px}.footer .price[data-v-366a1175]{font-size:18px;color:#e23435}.footer .submit[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#e23435}\n/* 优惠券面板 */.mask[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-366a1175]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask .mask-content .action[data-v-366a1175]{padding:15px 15px 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mask .mask-content .action uni-button[data-v-366a1175]{height:30px}.mask .mask-content .action .ok[data-v-366a1175]{background-color:#e23435}.mask.none[data-v-366a1175]{display:none}.mask.show[data-v-366a1175]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-366a1175]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-366a1175]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-366a1175]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-366a1175]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-366a1175]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-366a1175]{font-size:%?44?%;color:#e23435}.coupon-item .price[data-v-366a1175]:before{content:"￥";font-size:%?34?%}.coupon-item .tips[data-v-366a1175]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-366a1175]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-366a1175]{left:auto;right:%?-6?%}body.?%PAGE?%[data-v-366a1175]{background:#f8f8f8}',""]),t.exports=e},f2ea1:function(t,e,i){"use strict";var a={xyRadioGroup:i("6795").default,xyList:i("6904").default,xyListItem:i("2561").default,xyImage:i("14e6").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("xy-radio-group",{staticClass:"p-t-sm p-l-sm",attrs:{list:t.deliverTypelist},model:{value:t.deliverType,callback:function(e){t.deliverType=e},expression:"deliverType"}}),i("xy-list",{directives:[{name:"show",rawName:"v-show",value:3==t.deliverType,expression:"deliverType == 3"}],attrs:{selectType:t.radio},model:{value:t.offlineId,callback:function(e){t.offlineId=e},expression:"offlineId"}},t._l(t.offlineList,(function(e,a){return i("xy-list-item",{key:a,attrs:{type:"list",selectType:"checkbox",title:e.title+"",value:e.id+"",checked:t.offlineList.indexOf(e.id)>=0,titleFs:"14px"}},[i("template",{slot:"info"},[i("v-uni-view",{staticClass:"left text-gray",staticStyle:{"margin-top":"-7px"}},[i("v-uni-view",{staticClass:"des"},[i("v-uni-text",{staticClass:"font-sm bg-gray",attrs:{type:"gray",size:"middle"}},[t._v(t._s(e.city)+" "+t._s(e.address))])],1)],1)],1)],2)})),1),i("v-uni-navigator",{directives:[{name:"show",rawName:"v-show",value:t.deliverType<=2,expression:"deliverType <= 2"}],staticClass:"address-section",attrs:{url:"/pages/user_address/address/my?source=1"}},[i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"xyicon xyicon-address"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.addressData.name))]),i("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.addressData.tel))])],1),i("v-uni-view",{staticClass:"address"},[t._v(t._s(t.addressData.city)+"\n\t\t\t\t\t"+t._s(t.addressData.address))])],1),i("v-uni-text",{staticClass:"xyicon xyicon-right"})],1),i("xy-image",{staticClass:"a-bg",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvVHce/1/deXzuJHSdOM+fhpKMllI2SkTZpV6ULYrCHQGwrf41p/LENVk3QTipSWujKoyot1aQN0FYQQxtsMCS2SVuqsfFYHxBKYQNGV9ouZdA8nDipH4mT+HFf+51rO0pN0japrw9HreLe3Pqc3/me3+f3uFdIvfVuDIAPix1C9oceicFRVQWlvRWCkL1omqb1Of9z9rXZY65rhcO6x5ove19oWkX/RAaSMLOEkg+2Zt0wEcvoWOZzYZnXeWEbzmP7XPs11//LnOiDEY9DkGRwGw5a59QUTM2As+1qiD5v0TUvvC9Bc52KpmDSnju4ic7+CIinNVQoElYtcUM8jx2L1bzwPn14DOrHZ0hzEdxOPJtW16FH45CvuBzyZU22aH7Od9LnU/E0xpMqJG6iZ309qeqYNoA1gTJ4ZdF2zY2pJNSTfYCmkb85+GnO1hIbh+DzQVndaiHYTs3ZGJpifE/DyVnzi+X7pWqen8/i+8kPYUSjEORPCd9XtUKs9Fi+KMxjVzE0n9ZNnIgkYXwK+B5LafC4JKyudcMxD2+LqblGfNcY30VxJsfhcOCJ7xr02ATkluXE96DtmrPvPxFLIUH7zY3vOc0Z39O0oGtqy1DlFIuu+Zx8P/Ffa8/hEBey4rh0uuPWS6S6CRUhyGjG0hcfOWex+c9zXSsE5HmFzseP3H294Sl847VBRGJJQHTwy9wJNKAE7otLfXi2K3hRgeB81+bar8IDEPvFMxi6cxebnMx2cjrnDmiIwUAGDTvugX9de9E1L7R9NK1jc+8gnj8dy2rOKY/JRhgV8Cr405ea0HEBOxajeaHtySPvYvD2bUgdP0lmuzkl7oLl6Wn0wX/Dd1D/xG5bNc/f+7NjY9jyzghlM5QxS/ySOGt+Wlt3WwDXBz22a86gHrqjG7Hnekhz5uciN9NVDEBxXYng87vgEoqveZ7y+XsPE99vOTyAs1SkU+bOT3NKIJHUsIb4/rsL8L0YmrMRffQ3GNn8c6L7BOnu4pW10/xR4nsK9T+5FzWda2fXcEXTfLbtYUrc7joSwguno9kilZfsLNmgtaBcxv7rmudN2i9Fc8YRlsvkr6aOvoeBHxDf//MBzVfGke9p8vVhVN2wAQ1P7rFdczYeO34Wm4+Gsr4mcqzWMqQ5IX5rex3W1pUXX/PCRlwkjpEtDyLy9B8sPxcgLWzFpy7rWlTH3eq66AbUj0fh7lyJhn27oFzVck41mTdgdnU5+3fzbczsqqVwQ14aSuCrhwZoo3UEqCLW6biZJZZZom0e0UhlSiY3rvBjd0cdfLJjTrsXYvN8e5TvPEZ2PYbw9l9CrKqAWFNB+2+W/oiTc2l9BFefC/WPdqPyuxts1/zMlIrbqVB7OZSgaSWrC2eUWHUGcLa2MVrLyho3ftvVhNYq1ye6J8XUnI3JFw8idNdOaB+GIS+vsZhf6gMvsP1OJKGFx1H9o1sQeOSBXOcfc9pQDM3Z2PGvEeykxJ0l7AGaTyux4YKVLpOvs0BO/v0UQf17LdUzwdcskuaFHRo1NIrQxq1I9ByEc2kj+ZwDZsk1z/H9I+L7us+j4fHdUFa2FF3zQtv3DyTwrTcGoVFxXOeWKZEoPeNm+E66b7zSj71r6+ERHXN21C5V85nPmo7I3scRvncfxOoyiP7y0vNdyMZ17X9xmGR+43MPwvvtm23XnPH9h68P4u8U2yuJ7wonvmu0pigValf73XhmfRCt1S5bNbd6QK/0ov+2bhjDE8T3aj58p5hujCehjsZQs+lWLNl5N0RvuS2a5z/T8cLOd8K4/72wxdaAXHq+syGT7sOM7xLxvaOe+F5lu+bqYBjDd25H4s+vQ26ugSBL1lsEC+m4C8fQvMhXZXTa/CR8N96MekrapWCdvc1t+rvn32PY3juYrc7cEjjonFuMYQm97QsBPLSq1v7pKJAPbbwHZ3ueoqCyhJIJStqto8/BdMTh8q1A8PcPo+xrXbbP97ehSXydFWpjU0CZzO8xInM+CqSdTV688OVmBBT7O6DRh/dhYOt20nqSdK+f1RIqdRMqRXgrR90Dm+Dfsdn2+QYpeH7/8CBe+mAsq7nIsevKEjivgv1dQdzYUGH7dMlXe3FmwxZMTRyFgiZkW48mF0/XMYWqm75JfH8IUmPA1tlUMnHv+8T3N3J8d3Hkey6I3re6Djvaam1v/urhswjdsQ2jf/kVJRI1xHdPrh1lltzTWUxXai5H07N74P7KettnPDQyjWtf/ohglyJfl7jz/drP+vDrzgYsLZdtP2PRnz6B/u4t9I+U9cYCH81hddoFuBG4bxNq7v9xSfh+G/H9wKkIwF5JkR38fF3VLb73dDXhpsYS8P0Vxve7MZ14E04EkX2SumDj40Lkjz2LS9x1nZVqcK1rh1L/GaiZDB1GYwGPRi9+sA4r63odGEjAoKTZS0mTwUtoS2sTPioc1jd64KJqNZXRP9EtLFrLT5KQOd6H1JtvQ/SUQ1CUC1Z/tjp5MgXn51bAfc1VpAUVb6pqi+bsqRlrOB0ITSI0kUa1IvF7JcribPbxZnt9BYIeBZm0ap1BO2yHLMOIxjH111chmDocXg9XzZFR4fD74e5cA9GtQEulbLGbfaNMvv4+BfG3hiet9wxlUeDGdDPn68uqXVgVKKezbiBN/HHYoTnrqlORkDx0BHr/ABzVVbknbZysZ3wnRVyda6HU1UIjvpt28p2C+T+GEtYeeEh3jqcdKjl2BcWY65q9UAQb+c6+k3iePnaS+P5Pq8spOJ38fJ09RVI1OFuWo6xtJXSD+J6xh++OHN8PEt8HxtNY4pbAczC+m2Rnh8V3J9Q0Fa4LeG97YQdehj4aoSL9NZiZNMTKStp6g5/x5NsW37vWQaS1WXzPHvjihzYS/lgshbeJ75WySHm7wNXXk8SbK/xutOX4ntHtYRxE0eJn6uARaGf6ie++7GPNxVkf/78AAwCn1+RYqusbZQAAAABJRU5ErkJggg=="}})],1),t._l(t.orderInfo,(function(e,a){return i("v-uni-view",{key:a},[i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("xy-image",{staticClass:"logo",attrs:{src:e.storeInfo.logo}}),i("v-uni-text",{staticClass:"name"},[t._v(t._s(e.storeInfo.title))])],1),t._l(e.skuList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"g-item"},[i("xy-image",{attrs:{src:e.itemInfo.cover}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.itemInfo.title))]),i("v-uni-text",{staticClass:"spec"},[t._v(t._s(e.spec))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),i("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(e.amount))])],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b hidden",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toggleMask(e.storeInfo.id,"show")}}},[i("v-uni-view",{staticClass:"cell-icon"},[t._v("券")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠券")]),i("v-uni-text",{staticClass:"cell-tip active"},[t._v("选择优惠券("+t._s(e.couponList.length)+")")]),i("v-uni-text",{staticClass:"cell-more xyicon xyicon-right"})],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-view",{staticClass:"cell-icon hb"},[t._v("减")]),i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商家促销")]),i("v-uni-text",{staticClass:"cell-tip disabled"},[t._v("暂无可用优惠")])],1)],1),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(e.originalMoney))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("优惠金额")]),i("v-uni-text",{staticClass:"cell-tip red"},[e.couponSum>0?i("v-uni-text",[t._v("-")]):t._e(),t._v("￥"+t._s(e.couponSum))],1)],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),i("v-uni-text",{staticClass:"cell-tip"},[0==e.deliverMoney?i("v-uni-text",[t._v("免运费")]):i("v-uni-text",[t._v(t._s(e.deliverMoney))])],1)],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:e.remark,callback:function(i){t.$set(e,"remark",i)},expression:"item.remark"}})],1)],1),i("v-uni-view",{staticClass:"footer safe-bottom"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[t._v("实付款")]),i("v-uni-text",{staticClass:"price-tip"},[t._v("￥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.orderSets.realMoney))])],1),i("v-uni-text",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1),i("v-uni-view",{staticClass:"mask",class:0===e.couponShow?"none":1===e.couponShow?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toggleMask(e.storeInfo.id)}}},[i("v-uni-view",{staticClass:"mask-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{attrs:{size:"mini",type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.couponRest(e.storeInfo.id)}}},[t._v("重置")]),i("v-uni-button",{staticClass:"ok",attrs:{size:"mini",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.couponOk(e.storeInfo.id)}}},[t._v("确定")])],1),t._l(e.couponList,(function(a,n){return i("v-uni-view",{key:n,staticClass:"coupon-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.selectCoupon(e.storeInfo.id,a.id)}}},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(a.title))]),i("v-uni-text",{staticClass:"time"},[t._v("有效期至"+t._s(t._f("formatTime")(a.expireTime)))])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(a.couponValue))]),i("v-uni-text",[t._v("满"+t._s(a.limitMoney)+"可用")])],1),i("v-uni-view",{staticClass:"circle l"}),i("v-uni-view",{staticClass:"circle r"})],1),i("v-uni-text",{staticClass:"tips"})],1)}))],2)],1)],1)}))],2)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},f91c:function(t,e,i){"use strict";i.r(e);var a=i("f9f5"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},f9f5:function(t,e,i){"use strict";(function(t){var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("c964")),s={data:function(){return{orderInfo:[],orderSets:[],addressData:{name:"",tel:"",address:"",city:"",isDefault:0},deliverTypelist:[],deliverType:0,offlineList:[],offlineId:[],tradeNo:""}},onLoad:function(e){var i=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var n,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=JSON.parse(e.data),s=n.orderInfo,!s){a.next=8;break}return a.next=5,i.util.request({url:"/v1/ishop/order/create",method:"post",data:{orderInfo:s}});case 5:o=a.sent,t.log(o),200==o.code?(i.orderInfo=o.data.orderInfo,i.orderSets=o.data.orderSets,i.deliverType=o.data.deliverType,i.deliverTypelist=o.data.deliverTypelist,i.offlineList=o.data.offlineList,o.data.defaultAddress&&o.data.defaultAddress.name&&(i.addressData=o.data.defaultAddress)):uni.showModal({title:"提示",content:o.data.msg,success:function(t){}});case 8:case"end":return a.stop()}}),a)})))()},methods:{setAddress:function(e){t.log(e),this.addressData=e},couponOk:function(t){this.toggleMask(t)},couponRest:function(t){this.orderInfo[t].couponIds=new Array,this.toggleMask(t)},toggleMask:function(e,i){var a=this,n="show"===i?10:300,s="show"===i?1:0;this.orderInfo[e].couponShow=2,t.log(i),setTimeout((function(){a.orderInfo[e].couponShow=s,0===s&&a.countMoney()}),n)},selectCoupon:function(t,e){this.orderInfo[t].couponIds.push(e)},countMoney:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/ishop/order/money",method:"post",data:{orderInfo:t.orderInfo,addressData:t.addressData,deliverType:t.deliverType}});case 2:i=e.sent,200==i.code?(t.orderInfo=i.data.orderInfo,t.orderSets=i.data.orderSets):t.util.showToast({title:i.msg,icon:"loading",duration:1e3});case 4:case"end":return e.stop()}}),e)})))()},submit:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(3!=t.deliverType||0!=t.offlineId.length){e.next=3;break}return uni.showToast({title:"请选择门店"}),e.abrupt("return");case 3:return e.next=5,t.util.request({url:"/v1/ishop/order/submit",method:"post",data:{orderInfo:t.orderInfo,addressData:t.addressData,deliverType:t.deliverType,offlineId:t.offlineId}});case 5:i=e.sent,200==i.code?(t.tradeNo=i.data.tradeNo,t.util.showToast({title:i.msg,icon:"loading",duration:1e3}),uni.redirectTo({url:"/pages/ishop/order/pay?tradeNo="+t.tradeNo})):t.util.showToast({title:i.msg,icon:"loading",duration:1e3});case 7:case"end":return e.stop()}}),e)})))()},stopPrevent:function(){}}};e.default=s}).call(this,i("5a52")["default"])}}]);