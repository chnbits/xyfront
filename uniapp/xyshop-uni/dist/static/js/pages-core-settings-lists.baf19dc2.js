(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-settings-lists"],{"0c84":function(t,e,n){"use strict";n.r(e);var i=n("e051"),o=n("43da");for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);var a,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"26b4604c",null,!1,i["a"],a);e["default"]=c.exports},"43da":function(t,e,n){"use strict";n.r(e);var i=n("4845"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a},4845:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("1da1")),s=i(n("5530")),a=n("26cb"),r={data:function(){return{}},computed:(0,s.default)({},(0,a.mapState)(["app","user"])),onLoad:function(){},methods:{clearRuntime:function(){this.$xyutil.showToast({title:"清除成功",icon:"success",duration:1e3})},logout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&setTimeout((0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("app/setUserList",{key:"token",value:""}),t.$store.commit("app/setUserList",{key:"userInfo",value:""}),e.next=4,t.$xyutil.request({url:"/v1/core/user/logout",method:"delete"});case 4:n=e.sent,200==n.code?(t.$xyutil.showToast({title:n.msg,icon:"success",duration:1e3}),t.$xyutil.switchTab({url:"/pages/home"})):t.$xyutil.showToast({title:n.msg,icon:"loading",duration:2e3});case 6:case"end":return e.stop()}}),e)}))),200)}})},switchChange:function(t){t.detail.value}}};e.default=r},e051:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var i={xyListItem:n("2b66").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap"},[n("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:t.app.userList[t.app.currentUser].userInfo.id,url:"/pages/user_cert/cert/my",more:"xyicon xyicon-right",title:"实名认证"}}),n("xy-list-item",{staticClass:"m-t",attrs:{type:"link",more:"xyicon xyicon-right",title:"新消息通知"}},[n("template",{slot:"more"},[n("v-uni-switch",{staticStyle:{transform:"scale(0.8)"},attrs:{checked:!0,color:"#fa436a"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})],1)],2),n("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"清除缓存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearRuntime.apply(void 0,arguments)}}}),n("xy-list-item",{attrs:{type:"link",url:"/pages/core/settings/about",more:"xyicon xyicon-right",title:"关于"+t.app.siteInfo.title}}),n("xy-list-item",{staticClass:"m-t",attrs:{type:"button",title:"退出登录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}})],1)},s=[]}}]);