(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chat-recent-lists"],{"4bad":function(t,e,a){"use strict";(function(t){var i=a("ee27");a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("c964")),c={data:function(){return{hasOnLoad:!1,chatList:{}}},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onShow:function(){this.hasOnLoad&&this.loadData()},onLoad:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.hasOnLoad=!0,i=e,getApp().globalData.callback=function(e){t.log("收到服务器内容",e);var a=JSON.parse(e.data);if(200==a.code&&a.data.recentData){var n=a.data.recentData.roomId;i.chatList[n]?i.chatList[n]=a.data.recentData:i.chatList=Object.assign({roomId:a.data.recentData},i.chatList)}},e.loadData();case 4:case"end":return a.stop()}}),a)})))()},methods:{loadData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/chat/recent/lists",method:"get"});case 2:a=e.sent,200==a.code?t.chatList=a.data.dataList:t.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 4:case"end":return e.stop()}}),e)})))()},sendSocketMessage:function(t){return new Promise((function(e,a){getApp().sendSocketMessage(t)}))},toChat:function(t){uni.navigateTo({url:"/pages/chat/room/msg?roomId="+t.roomId+"&roomTitle="+t.roomTitle})}}};e.default=c}).call(this,a("5a52")["default"])},"670c":function(t,e,a){"use strict";var i=a("b64e"),n=a.n(i);n.a},7560:function(t,e,a){"use strict";a.r(e);var i=a("4bad"),n=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);e["default"]=n.a},"7896a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */uni-page-body[data-v-0916ccde]{background-color:#fff}.chat-list[data-v-0916ccde]{width:94%;padding:0 3%}.chat-list .chat[data-v-0916ccde]{width:100%;height:%?100?%;padding:%?20?% 0;border-bottom:solid %?1?% #eaeaea}.chat-list .chat .row[data-v-0916ccde]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.chat-list .chat .row .left[data-v-0916ccde]{-webkit-flex-shrink:0;flex-shrink:0;width:%?100?%;height:%?100?%;over-flow:hidden}.chat-list .chat .row .left .logo-avatar[data-v-0916ccde]{width:%?94?%;height:%?94?%;background-color:#eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;padding:%?6?%}.chat-list .chat .row .left .logo-avatar uni-image[data-v-0916ccde]{width:%?29?%;height:%?29?%;border-radius:%?0?%}.chat-list .chat .row .left uni-image[data-v-0916ccde]{width:%?100?%;height:%?100?%;border-radius:%?20?%}.chat-list .chat .row .right[data-v-0916ccde]{-webkit-flex-shrink:1;flex-shrink:1;width:98%;padding-left:2%}.chat-list .chat .row .right .top[data-v-0916ccde]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.chat-list .chat .row .right .top .usernam[data-v-0916ccde]{font-size:%?26?%}.chat-list .chat .row .right .top .time[data-v-0916ccde]{font-size:%?22?%;color:#bebebe}.chat-list .chat .row .right .bottom[data-v-0916ccde]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.chat-list .chat .row .right .bottom .msg[data-v-0916ccde]{font-size:%?25?%;color:#777}.chat-list .chat .row .right .bottom .tis[data-v-0916ccde]{width:%?35?%;height:%?35?%;font-size:%?22?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#eb4d3d;color:#fff;border-radius:100%}body.?%PAGE?%[data-v-0916ccde]{background-color:#fff}',""]),t.exports=e},b64e:function(t,e,a){var i=a("7896a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1fe65f94",i,!0,{sourceMap:!1,shadowMode:!1})},e2ac:function(t,e,a){"use strict";a.r(e);var i=a("f512"),n=a("7560");for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);a("670c");var s,o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"0916ccde",null,!1,i["a"],s);e["default"]=r.exports},f512:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"chat-list"},t._l(t.chatList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"chat"},[a("v-uni-view",{staticClass:"row",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toChat(e)}}},[a("v-uni-view",{staticClass:"left"},[1==e.roomInfo.roomType?a("v-uni-view",{staticClass:"logo-avatar"},t._l(e.logoAvatar,(function(t,e){return a("v-uni-image",{key:e,attrs:{src:t,mode:"aspectFill"}})})),1):a("v-uni-image",{attrs:{src:e.roomLogo?e.roomLogo:"/static/missing-face.png"}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"username"},[t._v(t._s(e.roomTitle))]),a("v-uni-view",{staticClass:"time"},[t._v(t._s(t._f("formatTime")(e.createTime,"MM-dd hh:mm")))])],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{staticClass:"msg"},[t._v(t._s(e.lastMsg))]),e.unread>0?a("v-uni-view",{staticClass:"tis"},[t._v(t._s(e.unread))]):t._e()],1)],1)],1)],1)})),1)],1)},c=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return i}))}}]);