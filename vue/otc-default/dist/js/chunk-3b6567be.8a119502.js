(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3b6567be"],{"5c03":function(t,e,n){"use strict";n("96cf");var a,i=n("1da1"),s=(n("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var e,n,a,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<this.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(this.account||this.noNeedAccount){t.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",e=setInterval((function(){i.timeLeft--,i.timeLeft<=0?(i.label="发送验证码",i.timeLeft=0,clearInterval(e)):i.label="剩余"+i.timeLeft+"s"}),1e3),n={},n="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},t.next=12,this.util.request({url:this.url,data:n,method:"post"});case 12:"200"==(a=t.sent).code?(this.util.showToast({title:a.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",a.data)):this.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}}),r=n("2877"),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"send-verify p-l-xs p-r-xs"},[n("el-button",{attrs:{type:"text"},on:{click:t.sendVerify}},[t._v(t._s(t.label))])],1)}),[],!1,null,"0372c606",null);e.a=o.exports},"7b54":function(t,e,n){"use strict";var a=n("ef24");n.n(a).a},aa77:function(t,e,n){function a(t,e,n){var a={},s=r((function(){return!!o[t]()||"​"!="​"[t]()})),l=a[t]=s?e(f):o[t];n&&(a[n]=l),i(i.P+i.F*s,"String",a)}var i=n("5ca1"),s=n("be13"),r=n("79e5"),o=n("fdef"),l="["+o+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),f=a.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=a},c5f6:function(t,e,n){"use strict";function a(t){var e=l(t,!1);if("string"==typeof e&&2<e.length){var n,a,i,s=(e=b?e.trim():m(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var r,o=e.slice(2),c=0,u=o.length;c<u;c++)if((r=o.charCodeAt(c))<48||i<r)return NaN;return parseInt(o,a)}}return+e}var i=n("7726"),s=n("69a8"),r=n("2d95"),o=n("5dbc"),l=n("6a99"),c=n("79e5"),u=n("9093").f,f=n("11e9").f,d=n("86cc").f,m=n("aa77").trim,p="Number",h=i[p],v=h,g=h.prototype,y=r(n("2aeb")(g))==p,b="trim"in String.prototype;if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(y?c((function(){g.valueOf.call(n)})):r(n)!=p)?o(new v(a(e)),n,h):a(e)};for(var x,w=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;w.length>_;_++)s(v,x=w[_])&&!s(h,x)&&d(h,x,f(v,x));(h.prototype=g).constructor=h,n("2aba")(i,p,h)}},ca4c:function(t,e,n){"use strict";n("96cf");var a,i=n("1da1"),s={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,0==this.$store.state.app.mainNav.length&&this.loadData()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(a=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(n("e494"),n("2877")),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[n("div",{staticClass:"fix-top"}),n("div",{staticClass:"main-nav"},[n("div",{class:{container:t.hasContainer}},[n("div",{staticClass:"main-nav-inner flex"},[n("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?n("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():n("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),n("span",{staticClass:"slogn"}),n("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),n("div",{staticClass:"nav-right flex",class:t.menuview},[n("el-menu",{staticClass:"main-menu",attrs:{"default-index":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/iotc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return n("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(n){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),n("div",{staticClass:"flex"},[t.util.getStorageSync("token")?n("el-menu",{attrs:{mode:"horizontal"}},[n("el-submenu",{attrs:{index:"99"}},[n("template",{slot:"title"},[n("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),n("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),n("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[n("el-menu",{attrs:{mode:"horizontal"}},[n("el-menu-item",[n("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),n("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"3f7a28a0",null);e.a=o.exports},e314:function(t,e,n){"use strict";n.r(e),n("96cf");var a,i,s=n("1da1"),r=n("5c03"),o=n("ca4c"),l=n("f3c6"),c=n("c276"),u={components:{IaHead:o.a,IaFoot:l.a,XySendVerify:r.a},data:function(){return{verityList:[],loading:!1,form:{email:"",password:"",verify:"",token:"",mobile:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{getVerifyToken:function(t){this.form.token=t.token},getMobileVerifyToken:function(){this.form.mobileToken=res.token},loadData:(i=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.request({url:"/v1/reg_email/user/bind",method:"get"});case 2:"200"==(e=t.sent).code?this.verityList=e.data.dataList:this.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),handleSubmit:(a=Object(s.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this,setTimeout((function(){e.loading=!1}),5e3),t.next=5,c.a.request({url:"/v1/reg_email/user/bind",data:this.form,method:"post"});case 5:"200"==(n=t.sent).code?(this.util.showToast({title:n.msg,icon:"success",duration:2e3}),this.util.navigateBack()):this.util.showToast({title:n.msg,icon:"loading",duration:3e3}),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})}},f=n("2877"),d=Object(f.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",attrs:{id:"wrap"}},[n("IaHead"),n("div",{staticClass:"main"},[n("div",{staticClass:"container",staticStyle:{"padding-top":"8%"}},[n("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[n("div",{staticClass:"title"},[t._v("\n                        邮箱绑定\n                    ")]),n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[n("el-form-item",{attrs:{prop:"email"}},[n("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入邮箱号"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),n("el-form-item",{attrs:{prop:"verify"}},[n("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}},[n("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",account:t.form.email,title:"邮箱绑定"},on:{verifysuccess:t.getVerifyToken},slot:"append"})],1)],1),0<=t.verityList.indexOf("mobile")?n("el-form-item",{attrs:{prop:"mobileVerify"}},[n("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}},[n("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"邮箱绑定"},on:{verifysuccess:t.getMobileVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verityList.indexOf("gauth")?n("el-form-item",{attrs:{prop:"gauth"}},[n("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1):t._e(),0<=t.verityList.indexOf("password")?n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),n("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("\n                            绑定\n                        ")])],1)],1)],1)],1)]),n("IaFoot")],1)}),[],!1,null,"51405463",null);e.default=d.exports},e494:function(t,e,n){"use strict";var a=n("f39d");n.n(a).a},ef24:function(t,e,n){},f39d:function(t,e,n){},f3c6:function(t,e,n){"use strict";var a={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},i=(n("7b54"),n("2877")),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[n("div",{staticClass:"line1"},[t._v("官方邮箱 "),n("span",{staticClass:"value"},[t._v("xxx@gmail.com")])]),n("div",[t._v("官方微信"),n("span",{staticClass:"value"},[t._v("OTCATM")])])]),n("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[n("div",{staticClass:"nav-list"},[n("a",{attrs:{target:"_blank",href:"#"}},[t._v("隐私政策")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("常见问题")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("费率标准")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("关于我们")]),n("a",{attrs:{target:"_blank",href:"#"}},[t._v("申请商家")])])])],1),n("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[n("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?n("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"16b6d238",null);e.a=s.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);