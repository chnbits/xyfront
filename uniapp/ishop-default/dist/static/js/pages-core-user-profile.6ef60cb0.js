(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-profile"],{"0169":function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("f3f3")),l=a("2f62"),s={data:function(){return{}},computed:(0,i.default)({},(0,l.mapState)(["app","user"])),onLoad:function(){},methods:{navTo:function(t){uni.navigateTo({url:t})}}};e.default=s},"2a05":function(t,e,a){var n=a("6e23");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("13880493",n,!0,{sourceMap:!1,shadowMode:!1})},3068:function(t,e,a){"use strict";var n=a("2a05"),i=a.n(n);i.a},"38d4":function(t,e,a){"use strict";a.r(e);var n=a("a406"),i=a("861e");for(var l in i)"default"!==l&&function(t){a.d(e,t,(function(){return i[t]}))}(l);a("3068");var s,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"d9edadf2",null,!1,n["a"],s);e["default"]=r.exports},"6e23":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-d9edadf2]{background:#f8f8f8}.list-cell[data-v-d9edadf2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% 15px;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-d9edadf2]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-d9edadf2]{color:#e23435;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-d9edadf2]{background:#fafafa}.list-cell.b-b[data-v-d9edadf2]:after{left:%?30?%}.list-cell.m-t[data-v-d9edadf2]{margin-top:8px}.list-cell .cell-more[data-v-d9edadf2]{-webkit-align-self:center;align-self:center;font-size:16px;color:#909399;margin-left:5px}.list-cell .cell-tit[data-v-d9edadf2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:15px;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-d9edadf2]{font-size:%?28?%;color:#909399}.list-cell .cell-tip uni-image[data-v-d9edadf2]{max-width:%?120?%;max-height:%?120?%}.list-cell uni-switch[data-v-d9edadf2]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-d9edadf2]{background:#f8f8f8}',""]),t.exports=e},"861e":function(t,e,a){"use strict";a.r(e);var n=a("0169"),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,(function(){return n[t]}))}(l);e["default"]=i.a},a406:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/core/user/avatar")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("头像")]),a("v-uni-text",{staticClass:"cell-tip"},[a("v-uni-image",{attrs:{src:t.user.userInfo.avatar,mode:"scaleToFill"}})],1),a("v-uni-text",{staticClass:"cell-more xyicon xyicon-right"})],1),a("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("UID")]),a("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.user.userInfo.id))])],1),a("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/core/user/nickname")}}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("昵称")]),a("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.user.userInfo.nickname))]),a("v-uni-text",{staticClass:"cell-more xyicon xyicon-right"})],1),a("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50}},[a("v-uni-text",{staticClass:"cell-tit"},[t._v("用户名")]),a("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.user.userInfo.username))])],1)],1)},l=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return n}))}}]);