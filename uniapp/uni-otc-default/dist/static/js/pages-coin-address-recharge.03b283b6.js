(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coin-address-recharge"],{"08eb":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */\r\n/* tag start*/.xy-tag[data-v-50df5cb2]{padding:8px 13px;font-size:14px;border-radius:3px;text-align:center;display:inline-block;vertical-align:middle;line-height:14px}.xy-tag-medium[data-v-50df5cb2]{padding:4px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:14px}.xy-tag-small[data-v-50df5cb2]{padding:3px 4px;font-size:12px;border-radius:3px;\r\n  /* display: inline-block;\r\n  vertical-align: middle; */line-height:12px}.xy-tag-outline[data-v-50df5cb2]{position:relative;background:none;color:#0cbf92;font-weight:400}.xy-tag-outline[data-v-50df5cb2]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:4px;border:1px solid #0cbf92}.xy-tag-fillet[data-v-50df5cb2]{border-radius:25px}.xy-white.xy-tag-fillet[data-v-50df5cb2]::after{border-radius:40px}.xy-tag-outline-fillet[data-v-50df5cb2]::after{border-radius:40px}.xy-tag-fillet-left[data-v-50df5cb2]{border-radius:25px 0 0 25px}.xy-tag-fillet-right[data-v-50df5cb2]{border-radius:0 25px 25px 0}.xy-tag-fillet-left.xy-tag-outline[data-v-50df5cb2]::after{border-radius:50px 0 0 50px}.xy-tag-fillet-right.xy-tag-outline[data-v-50df5cb2]::after{border-radius:0 50px 50px 0}\r\n/* tag end*/\r\n/* color start*/.xy-primary[data-v-50df5cb2]{background:#0cbf92;color:#fff}.xy-primary-outline[data-v-50df5cb2]{color:#0cbf92;background:none}.xy-primary-outline[data-v-50df5cb2]::after{border:1px solid #0cbf92}.xy-light-primary[data-v-50df5cb2]{background:#0cbf92;color:#fff}.xy-dark-primary[data-v-50df5cb2]{background:#0cbf92;color:#fff}.xy-info[data-v-50df5cb2]{background:#5b60ff;color:#fff}.xy-info-outline[data-v-50df5cb2]{color:#5b60ff;background:none}.xy-info-outline[data-v-50df5cb2]::after{border:1px solid #5b60ff}.xy-success[data-v-50df5cb2]{background:#19be6b;color:#fff}.xy-success-outline[data-v-50df5cb2]{color:#19be6b;background:none}.xy-success-outline[data-v-50df5cb2]::after{border:1px solid #19be6b}.xy-error[data-v-50df5cb2]{background:#dd524d;color:#fff}.xy-error-outline[data-v-50df5cb2]{color:#dd524d;background:none}.xy-error-outline[data-v-50df5cb2]::after{border:1px solid #dd524d}.xy-warning[data-v-50df5cb2]{background:#f0ad4e;color:#fff}.xy-warning-outline[data-v-50df5cb2]{color:#f0ad4e;background:none}.xy-warning-outline[data-v-50df5cb2]::after{border:1px solid #f0ad4e}.xy-white[data-v-50df5cb2]{background:#fff;color:#333}.xy-white-outline[data-v-50df5cb2]{color:#fff;background:none}.xy-white-outline[data-v-50df5cb2]::after{border:1px solid #fff}.xy-black[data-v-50df5cb2]{background:#000;color:#fff}.xy-black-outline[data-v-50df5cb2]{color:#333;background:none}.xy-black-outline[data-v-50df5cb2]::after{border:1px solid #333}.xy-translucent[data-v-50df5cb2]{background:rgba(0,0,0,.4);color:#fff}.xy-gray[data-v-50df5cb2]{background:#ededed}.xy-phcolor-gray[data-v-50df5cb2]{background:#ccc}.xy-divider-gray[data-v-50df5cb2]{background:#eaeef1}.xy-btn-gray[data-v-50df5cb2]{background:#ededed;color:#999}.xy-hover-gray[data-v-50df5cb2]{background:#f7f7f9}.xy-bg-gray[data-v-50df5cb2]{background:#fafafa}.xy-light-blue[data-v-50df5cb2]{background:#ecf6fd;color:#4dabeb}.xy-light-brownish[data-v-50df5cb2]{background:#fcebef;color:#8a5966}.xy-light-orange[data-v-50df5cb2]{background:#fef5eb;color:#faa851}.xy-light-green[data-v-50df5cb2]{background:#e8f6e8;color:#44cf85}.xy-gray-outline[data-v-50df5cb2]{color:#999;background:none}.xy-gray-outline[data-v-50df5cb2]::after{border:1px solid #ccc}\r\n/* color end*/',""]),t.exports=e},"090d":function(t,e,n){"use strict";var a=n("51e1"),r=n.n(a);r.a},1934:function(t,e,n){"use strict";n.r(e);var a=n("6ef0"),r=n("9273");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("9dec");var o,c=n("f0c5"),d=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"50df5cb2",null,!1,a["a"],o);e["default"]=d.exports},3343:function(t,e,n){"use strict";n.r(e);var a=n("64f6"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"37f6":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */uni-page-body[data-v-2d017bb1]{background-color:#fff}.bg-default[data-v-2d017bb1]{color:#999998;background-color:#f6f6f4}body.?%PAGE?%[data-v-2d017bb1]{background-color:#fff}',""]),t.exports=e},"3fc1":function(t,e,n){"use strict";n.r(e);var a=n("e9be"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},4980:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.xy-picker .label[data-v-1f85eb2c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.select[data-v-1f85eb2c]{width:100%;height:30px}',""]),t.exports=e},"4e64":function(t,e,n){"use strict";var a=n("57a1"),r=n.n(a);r.a},"51e1":function(t,e,n){var a=n("4980");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("14c94750",a,!0,{sourceMap:!1,shadowMode:!1})},"57a1":function(t,e,n){var a=n("37f6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("54e92d1a",a,!0,{sourceMap:!1,shadowMode:!1})},"64f6":function(t,e,n){"use strict";n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"xy-copy",props:{content:{type:String,default:""}},methods:{handleClick:function(){var t=this.content;t="string"===typeof t?t:t.toString(),document.queryCommandSupported("copy")||uni.showToast({title:"浏览器不支持",icon:"none",duration:3e3});var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length);var n=document.execCommand("copy");n?uni.showToast({title:"复制成功",icon:"none"}):uni.showToast({title:"复制失败，请检查h5中调用该方法的方式，是不是用户点击的方式调用的，如果不是请改为用户点击的方式触发该方法，因为h5中安全性，不能js直接调用！",icon:"none",duration:3e3}),e.remove()}}};e.default=a},"6ef0":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("v-uni-view",{staticClass:"xy-tag",class:[t.size?"xy-tag-"+t.size:"xy-tag",t.getClassName(t.shape,t.plain),t.getTypeClass(t.type,t.plain)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},i=[]},"7f1f":function(t,e,n){"use strict";n.r(e);var a=n("fca3"),r=n("fdeb");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("4e64");var o,c=n("f0c5"),d=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"2d017bb1",null,!1,a["a"],o);e["default"]=d.exports},8950:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},i=[]},"8be9":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-picker",{staticClass:"xy-picker",attrs:{"range-key":t.labelName,mode:t.mode,value:t.index,range:t.options},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"label flex flex-alignCenter"},["selector"==t.mode?[t.options[this.index]?t._t("left",[n("v-uni-view",[t._v(t._s(t.options[this.index][this.labelName]))])],{item:t.options[this.index],labelName:t.labelName}):t._e()]:t._e(),"time"==t.mode?[t._t("left",[n("v-uni-view",{},[t._v(t._s(t.value))])])]:t._e(),t._t("right",[n("v-uni-view",{staticClass:"xyicon xyicon-down m-l-xs"})])],2)],1)},i=[]},9273:function(t,e,n){"use strict";n.r(e);var a=n("daf4"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"9dec":function(t,e,n){"use strict";var a=n("d140"),r=n.n(a);r.a},b1ee:function(t,e,n){"use strict";n.r(e);var a=n("8950"),r=n("3343");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,c=n("f0c5"),d=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"179a4cde",null,!1,a["a"],o);e["default"]=d.exports},bf1f:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i={data:function(){return{coinId:1,coinInfo:{},rechargeInfo:[{walletAddress:""}],selectChainIndex:0,coinList:[{value:1,title:"USDT"}]}},onLoad:function(t){t.coinId&&(this.coinId=t.coinId),this.rechage()},methods:{rechage:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/coin/address/recharge/"+t.coinId,method:"get"});case 2:n=e.sent,200==n.code?(t.rechargeInfo=n.data.dataList,t.coinInfo=n.data.coinInfo):t.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=i},caa1:function(t,e,n){"use strict";n.r(e);var a=n("8be9"),r=n("3fc1");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("090d");var o,c=n("f0c5"),d=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"1f85eb2c",null,!1,a["a"],o);e["default"]=d.exports},d140:function(t,e,n){var a=n("08eb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("47d1832d",a,!0,{sourceMap:!1,shadowMode:!1})},daf4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"xy-tag",props:{type:{type:String,default:"primary"},size:{type:String,default:""},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},visible:{type:Boolean,default:!0}},methods:{handleClick:function(){this.$emit("click")},getTypeClass:function(t,e){return e?"xy-"+t+"-outline":"xy-"+t},getClassName:function(t,e){var n=e?"xy-tag-outline ":"";return"square"!=t&&("circle"==t?n+=e?"xy-tag-outline-fillet":"xy-tag-fillet":"circleLeft"==t?n+="xy-tag-fillet-left":"circleRight"==t&&(n+="xy-tag-fillet-right")),n}}};e.default=a},e9be:function(t,e,n){"use strict";(function(t){n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"XyPicker",props:{mode:{type:String,default:"selector"},value:{type:[Number,String],default:""},options:{type:Array,default:function(){return[]}},labelName:{type:String,default:"title"},valueName:{type:String,default:"value"}},data:function(){return{index:""}},created:function(){switch(this.mode){case"selector":var e={};e[this.labelName]="请选择",e[this.valueName]="",this.options.unshift(e),t("log",this.options," at node_modules/xyui/flex-ui/src/xy-picker/xy-picker.vue:75");for(var n=0;n<this.options.length;n++)this.options[n][this.valueName]==this.value&&(this.index=n);break;case"time":break}},methods:{bindPickerChange:function(t){switch(this.mode){case"selector":this.index=t.detail.value,this.$emit("input",this.options[this.index][this.valueName]);break;case"time":this.value=t.detail.value,this.$emit("input",t.detail.value);break}}}};e.default=a}).call(this,n("0de9")["log"])},fca3:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={xyPicker:n("caa1").default,xyTag:n("1934").default,xyCopy:n("b1ee").default,xyQrcode:n("0b06").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"p-l p-r"},[n("v-uni-view",{staticClass:"header p-t-md p-b flex space-between"},[n("v-uni-view",{staticClass:"title ts-24 tw6"},[t._v("充币")]),n("v-uni-view",{staticClass:"right"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.util.navigateTo({url:"/pages/coin/log/my?coinId="+t.coinId+"&title=充值"})}}},[t._v("记录")])],1)],1),n("v-uni-view",{staticClass:"bg-default",staticStyle:{padding:"10px"}},[n("xy-picker",{staticStyle:{width:"100%","font-size":"16px"},attrs:{options:t.coinList},scopedSlots:t._u([{key:"left",fn:function(e){return[n("v-uni-text",{staticClass:"ts-15 text-primary tw5"},[t._v(t._s(e.item[e.labelName]))])]}}]),model:{value:t.coinId,callback:function(e){t.coinId=e},expression:"coinId"}},[n("template",{slot:"right"},[n("v-uni-text",{staticClass:"ts-14"},[t._v("选择币种")])],1)],2)],1),n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"m-b-sm title ts-16 tw6"},[t._v("链名称")]),n("v-uni-view",{staticClass:"chain-list"},t._l(t.rechargeInfo,(function(e,a){return n("xy-tag",{key:a,staticClass:"br-4",attrs:{type:a==t.selectChainIndex?"primary":"gray",plain:!0,size:"large"}},[t._v(t._s(e.pcoinProtocol))])})),1)],1),n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"m-b-sm title ts-16 tw6"},[t._v("冲充币地址")]),n("v-uni-view",{staticClass:"flex space-between flex-alignCenter"},[n("v-uni-input",{staticClass:"xy-input bg-default b-0 p-l-xs p-r-xs m-r-xs flex-1",attrs:{disabled:!0,type:"text",value:t.rechargeInfo[t.selectChainIndex].walletAddress}}),n("xy-copy",{attrs:{content:t.rechargeInfo[t.selectChainIndex].walletAddress}},[n("xy-tag",{attrs:{type:"primary"}},[t._v("复制")])],1)],1)],1),n("v-uni-view",{staticClass:"m-t bg-default p-t p-b text-center"},[n("xy-qrcode",{attrs:{size:"160",val:t.rechargeInfo[t.selectChainIndex].walletAddress}})],1),n("v-uni-view",{staticClass:"m-t"},[n("v-uni-view",{staticClass:"m-b-sm title ts-16 tw6"},[t._v("注意事项")]),n("v-uni-view",{staticClass:"lh-1-6 text-gray"},[t._v("·禁止向上述"+t._s(t.coinInfo.symbol)+"地址充值除"),n("v-uni-text",{staticClass:"text-primary tw6"},[t._v(t._s(t.coinInfo.symbol)+" "+t._s(t.rechargeInfo[t.selectChainIndex].pcoinProtocol))]),t._v("之外的资产，任何充入"+t._s(t.coinInfo.symbol)+" "+t._s(t.rechargeInfo[t.selectChainIndex].pcoinProtocol)+"\n                地址的非"+t._s(t.coinInfo.symbol)+" "+t._s(t.rechargeInfo[t.selectChainIndex].pcoinProtocol)+"资产将不可找回。"),n("br"),t._v("·最小充值数量："),n("v-uni-text",{staticClass:"text-primary tw6"},[t._v(t._s(t.coinInfo.minRecharge)+t._s(t.coinInfo.symbol))]),t._v("，\n                小于最小数量的充币将不会上账，且无法退回。"),n("br"),t._v("·使用"+t._s(t.coinInfo.symbol)+"地址充值需要一定数量网络确认才能到账。"),n("br"),t._v("·充值完成后,您可以进入充值记录页面跟踪进度"),n("br")],1)],1)],1)},i=[]},fdeb:function(t,e,n){"use strict";n.r(e);var a=n("bf1f"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a}}]);