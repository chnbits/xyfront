(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-core-user-profile"],{"0c59":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return i}));var i={xyListItem:r("e0ae").default},s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"wrap"},[r("xy-list-item",{staticClass:"p-t-sm p-b-sm",attrs:{type:"link",needLogin:!0,uid:e.app.userList[this.app.currentUser].userInfo.id,url:"/pages/core/user/avatar",more:"xyicon xyicon-right",title:"头像"}},[r("template",{slot:"current"},[r("v-uni-image",{staticStyle:{width:"70px",height:"70px"},attrs:{src:e.app.userList[this.app.currentUser].userInfo.avatar,mode:"scaleToFill"}})],1)],2),r("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:e.app.userList[this.app.currentUser].userInfo.id,more:"",current:e.app.userList[this.app.currentUser].userInfo.id,title:"UID"}}),r("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:e.app.userList[this.app.currentUser].userInfo.id,url:"/pages/core/user/nickname",more:"xyicon xyicon-right",current:e.app.userList[this.app.currentUser].userInfo.nickname,title:"昵称"}}),r("xy-list-item",{attrs:{type:"link",needLogin:!0,uid:e.app.userList[this.app.currentUser].userInfo.id,more:"",current:e.app.userList[this.app.currentUser].userInfo.username,title:"用户名"}}),r("xy-list-item",{staticClass:"m-t-sm",attrs:{type:"link",needLogin:!0,uid:e.app.userList[e.app.currentUser].userInfo.id,url:"/pages/user_address/address/my",more:"xyicon xyicon-right",title:"收货地址"}})],1)},n=[]},"2b45":function(e,t,r){"use strict";r.r(t);var i=r("0c59"),s=r("af65");for(var n in s)"default"!==n&&function(e){r.d(t,e,(function(){return s[e]}))}(n);var u,a=r("f0c5"),p=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"6f9be228",null,!1,i["a"],u);t["default"]=p.exports},af65:function(e,t,r){"use strict";r.r(t);var i=r("de17"),s=r.n(i);for(var n in i)"default"!==n&&function(e){r.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},de17:function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(r("5530")),n=r("2f62"),u={data:function(){return{}},computed:(0,s.default)({},(0,n.mapState)(["app","user"])),onLoad:function(){},methods:{}};t.default=u}}]);