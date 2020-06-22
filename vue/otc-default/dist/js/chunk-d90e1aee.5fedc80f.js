(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d90e1aee"],{"0f69":function(t,e,a){"use strict";a.r(e),a("96cf");var n,i,s=a("1da1"),r=a("5c03"),o=a("ca4c"),l=a("f3c6"),c=a("c276"),u={components:{IaHead:o.a,IaFoot:l.a,XySendVerify:r.a},data:function(){return{verityList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{paypwd:[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{getVerifyToken:function(t){this.form.emailToken=t.token},getMobileVerifyToken:function(){this.form.mobileToken=res.token},loadData:(i=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.request({url:"/v1/paypwd/pwd/change",method:"get"});case 2:"200"==(e=t.sent).code?this.verityList=e.data.dataList:this.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),handleSubmit:(n=Object(s.a)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this,setTimeout((function(){e.loading=!1}),5e3),t.next=5,c.a.request({url:"/v1/paypwd/pwd/change",data:this.form,method:"post"});case 5:"200"==(a=t.sent).code?(this.util.showToast({title:a.msg,icon:"success",duration:2e3}),this.util.navigateBack()):this.util.showToast({title:a.msg,icon:"loading",duration:3e3}),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},f=a("2877"),d=Object(f.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap",attrs:{id:"wrap"}},[a("IaHead"),a("div",{staticClass:"main"},[a("div",{staticClass:"container",staticStyle:{"padding-top":"8%"}},[a("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[a("div",{staticClass:"title"},[t._v("\n                        重置资金密码\n                    ")]),a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[a("el-form-item",{attrs:{prop:"paypwd"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位支付密码"},model:{value:t.form.paypwd,callback:function(e){t.$set(t.form,"paypwd",e)},expression:"form.paypwd"}})],1),0<=t.verityList.indexOf("email")?a("el-form-item",{attrs:{prop:"emailVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"重置资金密码"},on:{verifysuccess:t.getVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verityList.indexOf("mobile")?a("el-form-item",{attrs:{prop:"mobileVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"重置资金密码"},on:{verifysuccess:t.getMobileVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verityList.indexOf("gauth")?a("el-form-item",{attrs:{prop:"gauth"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1):t._e(),0<=t.verityList.indexOf("password")?a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),a("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("\n                            绑定\n                        ")])],1)],1)],1)],1)]),a("IaFoot")],1)}),[],!1,null,"3d2cc3ae",null);e.default=d.exports},"5c03":function(t,e,a){"use strict";a("96cf");var n,i=a("1da1"),s=(a("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(n=Object(i.a)(regeneratorRuntime.mark((function t(){var e,a,n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<this.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(this.account||this.noNeedAccount){t.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",e=setInterval((function(){i.timeLeft--,i.timeLeft<=0?(i.label="发送验证码",i.timeLeft=0,clearInterval(e)):i.label="剩余"+i.timeLeft+"s"}),1e3),a={},a="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},t.next=12,this.util.request({url:this.url,data:a,method:"post"});case 12:"200"==(n=t.sent).code?(this.util.showToast({title:n.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",n.data)):this.util.showToast({title:n.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}}),r=a("2877"),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-verify p-l-xs p-r-xs"},[a("el-button",{attrs:{type:"text"},on:{click:t.sendVerify}},[t._v(t._s(t.label))])],1)}),[],!1,null,"0372c606",null);e.a=o.exports},"7b54":function(t,e,a){"use strict";var n=a("ef24");a.n(n).a},aa77:function(t,e,a){function n(t,e,a){var n={},s=r((function(){return!!o[t]()||"​"!="​"[t]()})),l=n[t]=s?e(f):o[t];a&&(n[a]=l),i(i.P+i.F*s,"String",n)}var i=a("5ca1"),s=a("be13"),r=a("79e5"),o=a("fdef"),l="["+o+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),f=n.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=n},c5f6:function(t,e,a){"use strict";function n(t){var e=l(t,!1);if("string"==typeof e&&2<e.length){var a,n,i,s=(e=w?e.trim():p(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var r,o=e.slice(2),c=0,u=o.length;c<u;c++)if((r=o.charCodeAt(c))<48||i<r)return NaN;return parseInt(o,n)}}return+e}var i=a("7726"),s=a("69a8"),r=a("2d95"),o=a("5dbc"),l=a("6a99"),c=a("79e5"),u=a("9093").f,f=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,m="Number",h=i[m],v=h,g=h.prototype,y=r(a("2aeb")(g))==m,w="trim"in String.prototype;if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof h&&(y?c((function(){g.valueOf.call(a)})):r(a)!=m)?o(new v(n(e)),a,h):n(e)};for(var b,x=a("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;x.length>_;_++)s(v,b=x[_])&&!s(h,b)&&d(h,b,f(v,b));(h.prototype=g).constructor=h,a("2aba")(i,m,h)}},ca4c:function(t,e,a){"use strict";a("96cf");var n,i=a("1da1"),s={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(n=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(a("e494"),a("2877")),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[a("div",{staticClass:"fix-top"}),a("div",{staticClass:"main-nav"},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"main-nav-inner flex"},[a("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():a("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),a("span",{staticClass:"slogn"}),a("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),a("div",{staticClass:"nav-right flex",class:t.menuview},[a("el-menu",{staticClass:"main-menu",attrs:{"default-index":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/iotc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(a){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),a("div",{staticClass:"flex"},[t.util.getStorageSync("token")?a("el-menu",{attrs:{mode:"horizontal"}},[a("el-submenu",{attrs:{index:"99"}},[a("template",{slot:"title"},[a("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),a("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[a("el-menu",{attrs:{mode:"horizontal"}},[a("el-menu-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),a("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"3f7a28a0",null);e.a=o.exports},e494:function(t,e,a){"use strict";var n=a("f39d");a.n(n).a},ef24:function(t,e,a){},f39d:function(t,e,a){},f3c6:function(t,e,a){"use strict";var n={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},i=(a("7b54"),a("2877")),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[a("div",{staticClass:"line1"},[t._v("官方邮箱 "),a("span",{staticClass:"value"},[t._v("xxx@gmail.com")])]),a("div",[t._v("官方微信"),a("span",{staticClass:"value"},[t._v("OTCATM")])])]),a("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("div",{staticClass:"nav-list"},[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("隐私政策")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("常见问题")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("费率标准")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("关于我们")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("申请商家")])])])],1),a("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"16b6d238",null);e.a=s.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);