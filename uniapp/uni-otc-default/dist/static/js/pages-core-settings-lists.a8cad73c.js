(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-settings-lists"],{"77cd":function(t,e,i){"use strict";i.r(e);var n=i("d4ed"),r=i("ace3");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);var o,a=i("f0c5"),u=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,"1b9415ec",null,!1,n["a"],o);e["default"]=u.exports},a743:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("1da1")),s=n(i("5530")),o=i("2f62"),a={data:function(){return{}},computed:(0,s.default)({},(0,o.mapState)(["app","user"])),onLoad:function(){},methods:{clearRuntime:function(){this.util.showToast({title:"清除成功",icon:"success",duration:1e3})},logout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&setTimeout((0,r.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("app/setUserList",{key:"token",value:""}),t.$store.commit("app/setUserList",{key:"userInfo",value:""}),e.next=4,t.util.request({url:"/v1/core/user/logout",method:"delete"});case 4:i=e.sent,200==i.code?(t.util.showToast({title:i.msg,icon:"success",duration:1e3}),t.util.switchTab({url:"/pages/home"})):t.util.showToast({title:i.msg,icon:"loading",duration:2e3});case 6:case"end":return e.stop()}}),e)}))),200)}})},switchChange:function(t){t.detail.value}}};e.default=a},ace3:function(t,e,i){"use strict";i.r(e);var n=i("a743"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=r.a},d4ed:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={xyListItem:i("1cc5").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:t.app.userList[t.app.currentUser].userInfo.id,url:"/pages/user/user/safeSet",more:"xyicon xyicon-right",title:"账号与安全"}}),i("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:t.app.userList[t.app.currentUser].userInfo.id,url:"/pages/user_cert/cert/my",more:"xyicon xyicon-right",title:"实名认证"}}),i("xy-list-item",{staticClass:"m-t",attrs:{type:"link",more:"xyicon xyicon-right",title:"新消息通知"}},[i("template",{slot:"more"},[i("v-uni-switch",{staticStyle:{transform:"scale(0.8)"},attrs:{checked:!0,color:"#fa436a"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchChange.apply(void 0,arguments)}}})],1)],2),i("xy-list-item",{attrs:{type:"link",more:"xyicon xyicon-right",title:"清除缓存"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearRuntime.apply(void 0,arguments)}}}),i("xy-list-item",{attrs:{type:"link",url:"/pages/core/settings/about",more:"xyicon xyicon-right",title:"关于"+t.app.siteInfo.title}}),i("xy-list-item",{staticClass:"m-t",attrs:{type:"button",title:"退出登录"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout.apply(void 0,arguments)}}})],1)},s=[]}}]);