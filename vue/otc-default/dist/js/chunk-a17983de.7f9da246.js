(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a17983de"],{"0096":function(t,e,a){"use strict";var i=a("683c");a.n(i).a},"48b8":function(t,e,a){"use strict";var i=a("d5db");a.n(i).a},"5c03":function(t,e,a){"use strict";a("96cf");var i,s=a("1da1"),n=(a("c5f6"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:(i=Object(s.a)(regeneratorRuntime.mark((function t(){var e,a,i,s=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<this.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(this.account||this.noNeedAccount){t.next=5;break}return this.util.showToast({title:"请输入"+this.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return this.timeLeft=this.time,this.label="剩余"+this.timeLeft+"s",e=setInterval((function(){s.timeLeft--,s.timeLeft<=0?(s.label="发送验证码",s.timeLeft=0,clearInterval(e)):s.label="剩余"+s.timeLeft+"s"}),1e3),a={},a="手机号"==this.type?{mobile:this.account,title:this.title}:{email:this.account,title:this.title},t.next=12,this.util.request({url:this.url,data:a,method:"post"});case 12:"200"==(i=t.sent).code?(this.util.showToast({title:i.msg,icon:"success",duration:1e3}),this.$emit("verifysuccess",i.data)):this.util.showToast({title:i.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})}}),r=a("2877"),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-verify p-l-xs p-r-xs"},[a("el-button",{attrs:{type:"text"},on:{click:t.sendVerify}},[t._v(t._s(t.label))])],1)}),[],!1,null,"0372c606",null);e.a=o.exports},"5e45":function(t,e,a){"use strict";a.r(e),a("96cf");var i=a("1da1"),s=(a("7f7f"),a("5c03")),n=a("ca4c"),r=a("f3c6"),o=a("c276");Vue.component(VueQrcode.name,VueQrcode);var c,l,u={components:{IaHead:n.a,IaFoot:r.a,XySendVerify:s.a},data:function(){return{verityList:[],loading:!1,gauthSecret:"加载中...",gauthQrcode:"",form:{verify:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:""},rule:{verify:[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"验证码为6位",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{copySuccess:function(){alert("拷贝成功")},getVerifyToken:function(t){this.form.emailToken=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},loadData:(l=Object(i.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.request({url:"/v1/gauth/user/bind",method:"get"});case 2:"200"==(e=t.sent).code?(this.verityList=e.data.dataList,this.gauthSecret=e.data.gauthSecret,this.gauthQrcode=e.data.gauthQrcode):this.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),handleSubmit:(c=Object(i.a)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,e=this,setTimeout((function(){e.loading=!1}),5e3),t.next=5,o.a.request({url:"/v1/gauth/user/bind",data:this.form,method:"post"});case 5:"200"==(a=t.sent).code?(this.util.showToast({title:a.msg,icon:"success",duration:2e3}),this.util.navigateBack()):this.util.showToast({title:a.msg,icon:"loading",duration:3e3}),this.loading=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})}},f=(a("48b8"),a("2877")),d=Object(f.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap",attrs:{id:"wrap"}},[a("IaHead"),a("div",{staticClass:"main"},[a("div",{staticClass:"container p-t"},[a("el-breadcrumb",{staticClass:"m-b-lg",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/user/center"}}},[t._v("个人设置")]),a("el-breadcrumb-item",[t._v("绑定谷歌验证码")])],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{xs:22,sm:20,md:16,lg:14}},[a("div",{staticClass:"top-tip"},[t._v("谷歌验证器是一款动态口令工具，工作原理类似短信动态验证。绑定后每30s生成一个动态验证码，验证码可用于登录、提现、修改安全设置等操作的安全验证。")]),a("div",{staticStyle:{height:"500px"}},[a("el-steps",{attrs:{direction:"vertical",space1:"60",active:0}},[a("el-step",{attrs:{status:"process",title:"下载谷歌验证"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("div",{staticClass:"des"},[t._v("iOS用户登录App Store搜索“Authenticator”下载安卓用户登录应用商店或使用手机浏览器搜索“谷歌验证器”下载")]),a("div",{staticStyle:{"margin-bottom":"60px"}},[a("img",{staticStyle:{"margin-right":"60px"},attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/image/appstore.png",alt:"appstore"}}),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/image/googleplay.png",alt:"googleplay"}})])])]),a("el-step",{attrs:{status:"process",title:"在谷歌验证器中添加密钥并备份"}},[a("div",{attrs:{slot:"description"},slot:"description"},[a("div",{staticClass:"des"},[t._v("打开谷歌验证器，扫描下方二维码或手动输入下述密钥添加验证令牌。")]),a("div",{staticClass:"gauth flex"},[a("div",{staticClass:"qr"},[a("qrcode",{attrs:{value:t.gauthQrcode,options:{width:118}}})],1),a("div",[a("div",{staticClass:"key"},[t._v("Key："+t._s(t.gauthSecret))]),a("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.gauthSecret,expression:"gauthSecret",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"copy"},[a("i",{staticClass:"el-icon-copy-document"}),t._v("\n                                                复制秘钥\n                                            ")])])])])]),a("el-step",{attrs:{status:"process",title:"输入谷歌验证器中6位验证码",description:""}})],1)],1),a("el-row",{staticClass:"m-t",staticStyle:{"margin-left":"30px"},attrs:{type:"flex",justify:"start",align:"middle"}},[a("el-col",{staticClass:"login-box bg-white1 p-a-0",attrs:{xs:22,sm:22,md:18,lg:18}},[a("div",{staticClass:"m-b"},[t._v("\n                                谷歌验证码\n                            ")]),a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[a("el-form-item",{attrs:{prop:"verify"}},[a("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}})],1),0<=t.verityList.indexOf("email")?a("el-form-item",{attrs:{prop:"emailVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:t.form.emailVerify,callback:function(e){t.$set(t.form,"emailVerify",e)},expression:"form.emailVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"绑定谷歌验证"},on:{verifysuccess:t.getVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verityList.indexOf("mobile")?a("el-form-item",{attrs:{prop:"mobileVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"绑定谷歌验证"},on:{verifysuccess:t.getMobileVerifyToken},slot:"append"})],1)],1):t._e(),0<=t.verityList.indexOf("password")?a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),a("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v("\n                                    绑定\n                                ")])],1)],1)],1)],1)],1)],1)]),a("IaFoot")],1)}),[],!1,null,"1a3b3c00",null);e.default=d.exports},"683c":function(t,e,a){},"7f7f":function(t,e,a){var i=a("86cc").f,s=Function.prototype,n=/^\s*function ([^ (]*)/;"name"in s||a("9e1e")&&i(s,"name",{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},aa77:function(t,e,a){function i(t,e,a){var i={},n=r((function(){return!!o[t]()||"​"!="​"[t]()})),c=i[t]=n?e(f):o[t];a&&(i[a]=c),s(s.P+s.F*n,"String",i)}var s=a("5ca1"),n=a("be13"),r=a("79e5"),o=a("fdef"),c="["+o+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=i.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=i},b8fc:function(t,e,a){"use strict";var i=a("ba21");a.n(i).a},ba21:function(t,e,a){},c5f6:function(t,e,a){"use strict";function i(t){var e=c(t,!1);if("string"==typeof e&&2<e.length){var a,i,s,n=(e=b?e.trim():p(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+e}for(var r,o=e.slice(2),l=0,u=o.length;l<u;l++)if((r=o.charCodeAt(l))<48||s<r)return NaN;return parseInt(o,i)}}return+e}var s=a("7726"),n=a("69a8"),r=a("2d95"),o=a("5dbc"),c=a("6a99"),l=a("79e5"),u=a("9093").f,f=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,m="Number",v=s[m],h=v,g=v.prototype,y=r(a("2aeb")(g))==m,b="trim"in String.prototype;if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof v&&(y?l((function(){g.valueOf.call(a)})):r(a)!=m)?o(new h(i(e)),a,v):i(e)};for(var x,w=a("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;w.length>_;_++)n(h,x=w[_])&&!n(v,x)&&d(v,x,f(h,x));(v.prototype=g).constructor=v,a("2aba")(s,m,v)}},ca4c:function(t,e,a){"use strict";a("96cf");var i,s=a("1da1"),n={name:"IaHead",props:{hasContainerProp:{default:!1},offsetTop:{default:500},transparent:{default:!1}},data:function(){return{hasContainer:!0,menuview:"hidden-sm-and-down",iconview:["el-icon-s-unfold","hidden-md-and-up"],active:"home",keyword:"",transparentCurrent:!1}},created:function(){this.hasContainer=this.hasContainerProp,this.transparentCurrent=this.transparent,this.$store.state.app.mainNav.length},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.transparent&&(t>=this.offsetTop?this.transparentCurrent=!1:this.transparentCurrent=!0)},navTo:function(t){this.$router.push(t)},mainMenuSelect:function(t){this.active=t},chanView:function(){""!=this.menuview?(this.iconview[0]="el-icon-s-fold",this.menuview=""):(this.iconview[0]="el-icon-s-unfold",this.menuview="hidden-sm-and-down")},loadData:(i=Object(s.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.request({url:"/v1/icms/cate/lists",method:"get"});case 2:200==(e=t.sent).code?this.$store.commit("app/setMainNav",e.data.dataList):this.$Message.error(e.msg);case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),logout:function(){this.$store.dispatch("user/setToken",""),this.$store.dispatch("user/setUserInfo",""),axios.delete("/v1/core/user/logout").then((function(t){var e=t.data;"200"==e.code?window.location.reload():alert(e.msg)})).catch((function(t){}))}},watch:{}},r=(a("0096"),a("2877")),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-nav-fixed main-nav-dark",class:t.transparentCurrent?"main-nav-transparent":"",attrs:{id:"main-nav-wrap"}},[a("div",{staticClass:"fix-top"}),a("div",{staticClass:"main-nav"},[a("div",{class:{container:t.hasContainer}},[a("div",{staticClass:"main-nav-inner flex"},[a("div",{staticClass:"layout-logo",on:{click:function(e){return t.navTo("/")}}},[t.$store.state.app.siteInfo.logoTitle?a("img",{staticClass:"logo",attrs:{src:t.$store.state.app.siteInfo.logoTitle}}):t._e(),t.$store.state.app.siteInfo.logoTitle?t._e():a("span",{staticClass:"title"},[t._v("\n                        "+t._s(t.$store.state.app.siteInfo.title)+"\n                    ")]),a("span",{staticClass:"slogn"}),a("i",{class:t.iconview,staticStyle:{color:"#333","font-size":"22px",cursor:"pointer"},on:{click:t.chanView}})]),a("div",{staticClass:"nav-right flex",class:t.menuview},[a("el-menu",{staticClass:"main-menu",attrs:{"default-active":t.active,mode:"horizontal"},on:{select:t.mainMenuSelect}},[a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/")}}},[t._v("\n                            一键买卖\n                        ")]),a("el-menu-item",{attrs:{index:"home"},on:{click:function(e){return t.navTo("/otc/market")}}},[t._v("\n                            交易市场\n                        ")]),t._l(t.$store.state.app.mainNav,(function(e){return a("el-menu-item",{key:e.id,attrs:{index:e.name},on:{click:function(a){return t.navTo("/"+e.name)}}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])}))],2),a("div",{staticClass:"flex"},[t.util.getStorageSync("token")?a("el-menu",{attrs:{mode:"horizontal"}},[a("el-submenu",{attrs:{index:"99"}},[a("template",{slot:"title"},[a("el-avatar",{staticClass:"m-r-xs",attrs:{size:30,src:t.$store.state.user.userInfo.avatar}}),t._v("\n                                    "+t._s(t.$store.state.user.userInfo.nickname)+"\n                                ")],1),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/user/center")}}},[t._v("个人中心")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/coin/my")}}},[t._v("我的资产")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/order/my")}}},[t._v("我的订单")]),a("el-menu-item",{attrs:{index:"99-1"},on:{click:function(e){return t.navTo("/otc/ad/my")}}},[t._v("广告管理")]),a("el-menu-item",{attrs:{index:"99-99"},nativeOn:{click:function(e){return t.logout(e)}}},[t._v("注销登录")])],2)],1):[a("el-menu",{attrs:{mode:"horizontal"}},[a("el-menu-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/login")}}},[t._v("登录")]),a("el-button",{staticClass:"register-btn",attrs:{type:"text",size:"small"},on:{click:function(e){return t.navTo("/user/register")}}},[t._v("注册")])],1)],1)]],2)],1)])])])])}),[],!1,null,"4502067e",null);e.a=o.exports},d5db:function(t,e,a){},f3c6:function(t,e,a){"use strict";var i={name:"IaFoot",data:function(){return{}},created:function(){},mounted:function(){},computed:{},methods:{},watch:{}},s=(a("b8fc"),a("2877")),n=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"foot-info",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{staticClass:"contact-main",attrs:{xs:24,sm:14,md:14}},[a("div",{staticClass:"line1"},[t._v("官方邮箱 "),a("span",{staticClass:"value"},[t._v("xxx@gmail.com")])]),a("div",[t._v("官方微信"),a("span",{staticClass:"value"},[t._v("OTCATM")])])]),a("el-col",{staticClass:"right",attrs:{xs:24,sm:10,md:10}},[a("div",{staticClass:"nav-list"},[a("a",{attrs:{target:"_blank",href:"#"}},[t._v("隐私政策")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("常见问题")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("费率标准")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("关于我们")]),a("a",{attrs:{target:"_blank",href:"#"}},[t._v("申请商家")])])])],1),a("el-row",{staticClass:"footer-bottom",attrs:{type:"flex",justify:"center",align:"middle"}},[a("div",[t._v("\n                "+t._s(t.$store.state.app.siteInfo.copyright)+"\n                 "),t.$store.state.app.siteInfo.icp?a("a",{attrs:{target:"_blank",href:"http://www.beian.miit.gov.c"}},[t._v(t._s(t.$store.state.app.siteInfo.icp))]):t._e()])])],1)])}),[],!1,null,"7e23cc94",null);e.a=n.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);