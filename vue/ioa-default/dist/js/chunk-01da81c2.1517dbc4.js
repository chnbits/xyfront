(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-01da81c2"],{"1c64":function(t,e,a){"use strict";a.r(e);var n=a("ca4c"),s=a("f3c6"),i={components:{IaHead:n.a,IaFoot:s.a},props:{data:{default:!0}},watch:{$route:function(){}},data:function(){return{}},created:function(){},methods:{}},r=a("0c7c"),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("IaHead"),t._m(0),a("IaFoot")],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"main-banner"},[a("h1",{staticClass:"title"},[t._v("标题")]),a("p",{staticClass:"info"},[t._v(" 简介 ")])]),a("div",{staticClass:"container"})])}],!1,null,"2f6eaf3c",null);e.default=o.exports},8195:function(t,e,a){},9236:function(t,e,a){},"9bc4":function(t,e,a){"use strict";var n=a("9236");a.n(n).a},ca4c:function(t,e,a){"use strict";a("96cf");var n=a("c964"),s={name:"ia_head",props:{hasContainerProp:{default:!0}},data:function(){return{domain:window.location.protocol+"//"+window.location.host,hasContainer:!0,theme:"light",active:"home",mainNavDrawer:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.$store.state.app.mainNav.length},mounted:function(){},computed:{},methods:{swicthActive:function(t){this.active=t},loadData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(a=e.sent).code?t.$store.commit("app/setMainNav",a.data.dataList):t.$Message.error(a.msg);case 4:case"end":return e.stop()}}),e)})))()},logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){"200"==(t=t.data).code?window.location.reload():alert(t.msg)})).catch((function(t){}))}},watch:{}},i=(a("cf9c"),a("0c7c")),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Affix",[a("Menu",{staticClass:"main-nav",attrs:{mode:"horizontal",theme:t.theme,"active-name":t.active}},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"layout flex"},[a("div",{staticClass:"menu flex"},[a("div",{staticClass:"layout-logo m-r-xs"},[a("div",[a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}})]),t.$store.state.app.siteInfo.logoTitle?t._e():a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.$store.state.app.siteInfo.title))])]),a("div",{staticClass:"slogn"})]),a("div",{staticClass:"nav-list m-l"},[a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v(" 首页 ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v(" "+t._s(e.title)+" ")])}))],2),a("Icon",{staticClass:"menu-toggle",attrs:{type:t.mainNavDrawer?"md-close":"md-menu",size:"26"},on:{click:function(e){t.mainNavDrawer=!t.mainNavDrawer}}})],1),a("div",{staticClass:"login"},[t.util.getStorageSync("token")?[a("Submenu",{attrs:{name:"99"}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:"ios-person"}}),t._v(" "+t._s(t.$store.state.user.userInfo.nickname)+" ")],1),a("MenuItem",{attrs:{name:"99-1",to:"/user/center"}},[t._v("个人中心")]),a("MenuItem",{attrs:{name:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2),a("Button",{attrs:{type:"primary",ghost:"",target:"_blank",to:t.domain+"/index/xyadmin/"}},[t._v("控制台")])]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"success",ghost:"",to:"/user/register"}},[t._v("注册")])]],2)])]),a("Drawer",{staticClass:"main-nav-drawer",attrs:{width:220,placement:"left",closabl:!0,draggable:!0,scrollable:!0,title:t.$store.state.app.siteInfo.title,closable:!1},model:{value:t.mainNavDrawer,callback:function(e){t.mainNavDrawer=e},expression:"mainNavDrawer"}},[a("div",{staticStyle:{"text-align":"center"},attrs:{slot:"header"},slot:"header"},[t.util.getStorageSync("token")?[a("Avatar",{attrs:{src:t.$store.state.user.userInfo.avatar,icon:"ios-person",size:"large"}})]:[a("Button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary",ghost:"",to:"/user/login"}},[t._v("登录")]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"success",ghost:"",to:"/user/register"}},[t._v("注册")])]],2),a("Menu",{attrs:{theme:t.theme}},[a("Button",{attrs:{type:"primary",ghost:"",target:"_blank",to:t.domain+"/index/xyadmin/"}},[t._v("控制台")]),a("MenuItem",{attrs:{to:"/",name:"home"},nativeOn:{click:function(e){return t.swicthActive("home")}}},[t._v(" 首页 ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("MenuItem",{key:e.id,attrs:{to:"/"+e.name,name:e.name},nativeOn:{click:function(a){return t.swicthActive(e.name)}}},[t._v(" "+t._s(e.title)+" ")])}))],2)],1)],1)],1)}),[],!1,null,"5e4388e3",null);e.a=r.exports},cf9c:function(t,e,a){"use strict";var n=a("8195");a.n(n).a},f3c6:function(t,e,a){"use strict";var n={name:"ia_foot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(a("9bc4"),a("0c7c")),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("Row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("i-col",{attrs:{xs:24,sm:14,md:14}},[t._v(" "+t._s(t.$store.state.app.siteInfo.copyright)+" ")]),a("i-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))])])],1)],1)])}),[],!1,null,"44d925be",null);e.a=i.exports}}]);