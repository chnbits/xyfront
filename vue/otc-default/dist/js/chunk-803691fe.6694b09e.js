(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-803691fe"],{"1c64":function(t,e,n){"use strict";n.r(e);var a=n("ca4c"),s=n("f3c6"),i={components:{IaHead:a.a,IaFoot:s.a},props:{data:{default:!0}},watch:{$route:function(){}},data:function(){return{}},created:function(){},methods:{}},o=n("2877"),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("IaHead"),t._m(0),n("IaFoot")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"main-banner"},[n("h1",{staticClass:"title"},[t._v("标题")]),n("p",{staticClass:"info"},[t._v("\n                简介\n            ")])]),n("div",{staticClass:"container"})])}],!1,null,"2f6eaf3c",null);e.default=r.exports},4265:function(t,e,n){"use strict";var a=n("58ec");n.n(a).a},"4d95":function(t,e,n){"use strict";var a=n("6a2a");n.n(a).a},"58ec":function(t,e,n){},"6a2a":function(t,e,n){},ca4c:function(t,e,n){"use strict";n("96cf");var a,s=n("1da1"),i={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,this.$store.state.app.mainNav.length},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(a=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},o=(n("4d95"),n("2877")),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[n("div",{staticClass:"fix-top"}),n("div",{staticClass:"main-nav"},[n("div",{class:{container:t.hasContainer}},[n("div",{staticClass:"main-nav-inner flex"},[n("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?n("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():n("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),n("span",{staticClass:"slogn"}),n("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),n("div",{staticClass:"nav-right flex",class:t.menuview},[n("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/otc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return n("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(n){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),n("div",{staticClass:"flex"},[t.util.getStorageSync("token")?n("el-menu",{attrs:{mode:"horizontal"}},[n("el-submenu",{attrs:{index:"99"}},[n("template",{slot:"title"},[n("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),n("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),n("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/coin/my")}}},[t._v("我的资产")]),n("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/order/my")}}},[t._v("我的订单")]),n("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/ad/my")}}},[t._v("广告管理")]),n("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[n("el-menu",{attrs:{mode:"horizontal"}},[n("el-menu-item",[n("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),n("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"75ed756f",null);e.a=r.exports},f3c6:function(t,e,n){"use strict";var a={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(n("4265"),n("2877")),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[n("div",{staticClass:"line1"},[t._v("官方邮箱 "),n("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.email[0]:""))])]),n("div",[t._v("官方微信"),n("span",{staticClass:"value"},[t._v(t._s(t.$store.state.app.siteInfo.iconfig?t.$store.state.app.siteInfo.iconfig.wxid:""))])])]),n("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[n("div",{staticClass:"nav-list"},[n("router-link",{attrs:{to:"/agreement/隐私条款"}},[t._v("\n                        隐私条款\n                    ")]),n("router-link",{attrs:{to:"/post/help"}},[t._v("\n                        常见问题\n                    ")]),n("router-link",{attrs:{to:"/post/standard"}},[t._v("\n                        费率标准\n                    ")]),n("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        关于我们\n                    ")]),n("router-link",{attrs:{to:"/post/about"}},[t._v("\n                        申请商家\n                    ")])],1)])],1),n("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?n("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"4c9f66d1",null);e.a=i.exports}}]);