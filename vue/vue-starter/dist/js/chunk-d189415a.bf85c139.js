(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d189415a","chunk-2d2245ad"],{"147d":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loadedScript?r("qrcode",{attrs:{value:e.value,options:e.options}}):e._e()},o=[],s=r("1da1"),a=(r("96cf"),r("b0c0"),r("d3b7"),{name:"xyQrcode",props:{value:{type:[String],default:""},options:{type:Object,default:function(){return{width:118,margin:1}}}},data:function(){return{loadedScript:!1}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadScript();case 2:Vue.component(VueQrcode.name,VueQrcode),this.loadedScript=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadScript:function(){var e=this;return new Promise((function(t,r){e.VueScript2.load("https://cdn.jsdelivr.net/gh/fengyuanchen/vue-qrcode/dist/vue-qrcode.min.js").then((function(){t()}))}))}}}),n=a,l=r("2877"),c=Object(l["a"])(n,i,o,!1,null,"b935c9c2",null);t["a"]=c.exports},"5bac":function(e,t,r){},"620a":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("xy-header"),r("div",{staticClass:"main"},[r("div",{staticClass:"container",staticStyle:{"padding-top":"80px","padding-bottom":"80px"}},[r("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("el-col",{staticClass:"left-box",attrs:{xs:1,sm:1,md:14,lg:14}},[r("img",{attrs:{src:e.$store.state.app.loginPic,width:"600"}})]),r("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[r("div",{staticClass:"title m-b-md"},[e._v(" 欢迎注册"+e._s(e.$store.state.app.siteInfo.title)+" ")]),r("el-tabs",{attrs:{stretch:""},on:{"tab-click":e.handleClick},model:{value:e.regTab,callback:function(t){e.regTab=t},expression:"regTab"}},[e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?r("el-tab-pane",{staticClass:"p-t",attrs:{label:"邮箱注册",name:"email"}},[e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?r("RegEmail",{on:{"reg-success":e.regSuccess}}):e._e()],1):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?r("el-tab-pane",{staticClass:"p-t",attrs:{label:"手机注册",name:"mobile"}},[e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?r("RegMobile",{on:{"reg-success":e.regSuccess}}):e._e()],1):e._e()],1),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.qrloginShow,expression:"!qrloginShow"}],staticClass:"qrlogin",on:{click:function(t){e.qrloginShow=!0}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.qrloginShow,expression:"qrloginShow"}],staticClass:"qrlogin-modal"},[r("div",{staticClass:"flex space-between m-b"},[r("div",{staticClass:"ts-18"},[e._v(" 登录 ")]),r("div",[r("span",{staticClass:"cursor-pointer text-gray",on:{click:function(t){e.qrloginShow=!1}}},[e._v("账号密码登录")])])]),r("qrlogin",{staticClass:"text-center",attrs:{qrloginShow:e.qrloginShow,type:e.wxapp}})],1)],1)],1)],1)]),r("xy-footer")],1)},o=[],s=r("9a4d"),a=r("b31e"),n=r("e07c"),l={components:{qrlogin:s["a"],RegEmail:a["default"],RegMobile:n["default"]},data:function(){return{regTab:"email",qrloginShow:!1}},created:function(){this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?this.regTab="email":this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?this.regTab="mobile":this.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_username")>=0&&(this.regTab="username")},methods:{regSuccess:function(){this.util.navigateTo("/")}}},c=l,u=r("2877"),d=Object(u["a"])(c,i,o,!1,null,"eebd62e2",null);t["default"]=d.exports},"9a4d":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"qr-box",on:{click:e.loadData}},[e.qrurl?r("div",["wxapp"==e.type?r("xy-qrcode",{staticClass:"qrcode",style:{opacity:e.timeout?.3:1},attrs:{value:e.qrurl,options:{width:e.width}}}):"wxmp"==e.type?r("img",{attrs:{width:e.width,src:e.qrurl}}):e._e(),e.timeout?r("span",{staticClass:"xyicon xyicon-history"}):e._e()],1):r("div",{staticClass:"no-qr",style:{width:this.width+"px",height:this.width+"px",background:this.bgColor}}),r("div",{staticClass:"tip m-t text-666"},[e._v(e._s(e.tip))])])},o=[],s=r("1da1"),a=(r("96cf"),r("a9e3"),r("147d")),n={components:{"xy-qrcode":a["a"]},props:{qrloginShow:!1,type:"",tip:{type:String,default:"使用微信扫一扫"},width:{type:Number,default:200},bgColor:{type:String,default:"#eee"}},data:function(){return{seed:"",qrurl:"",timer:null,timeout:!1}},mounted:function(){this.qrloginShow&&this.loadData()},watch:{qrloginShow:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e){r.next=6;break}return r.next=3,t.loadData();case 3:t.qrurl&&(t.timer=setInterval(t.getLogin,2e3)),r.next=7;break;case 6:clearInterval(t.timer);case 7:case"end":return r.stop()}}),r)})))()}},beforeDestroy:function(){clearInterval(this.timer)},methods:{loadData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/qrlogin/qrlogin/getSeed",data:{type:e.type},method:"get"});case 2:r=t.sent,200==r.code?(e.seed=r.data.seed,e.qrurl=r.data.qrurl,e.timeout=!1,clearInterval(e.timer),e.timer=setInterval(e.getLogin,2e3)):e.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},getLogin:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/qrlogin/qrlogin/getLogin?seed="+e.seed,method:"get"});case 2:r=t.sent,200==r.code&&(r.data.timeout?(e.timeout=!0,clearInterval(e.timer)):(clearInterval(e.timer),r.data.userInfo?(r.data.token&&e.$store.commit("user/setToken",r.data.token),e.$store.commit("user/setUserInfo",r.data.userInfo),e.util.showToast({title:r.msg,icon:"success",duration:2e3}),e.$emit("success")):e.$router.push({path:"/qrlogin/login",query:{seed:e.seed,type:e.type}})));case 4:case"end":return t.stop()}}),t)})))()}}},l=n,c=(r("cfa0"),r("2877")),u=Object(c["a"])(l,i,o,!1,null,"77a2a83d",null);t["a"]=u.exports},b31e:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"email"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",account:e.form.email,title:"用户注册"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e.$store.state.app.siteInfo.regInvite>0?r("el-form-item",{attrs:{prop:"inviteCode"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邀请码"+e.inviteSuffix},model:{value:e.form.inviteCode,callback:function(t){e.$set(e.form,"inviteCode",t)},expression:"form.inviteCode"}})],1):e._e(),r("div",{staticClass:"agreement"},[r("el-checkbox",{model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),r("router-link",{attrs:{to:"/agreement/用户协议"}},[e._v("《"+e._s(e.$store.state.app.siteInfo.title)+"用户协议》")]),e._v("和 "),r("router-link",{attrs:{to:"/agreement/隐私政策"}},[e._v("《"+e._s(e.$store.state.app.siteInfo.title)+"隐私政策》")])],1),r("el-button",{staticClass:"full submit-btn",attrs:{disabled:!e.form.agreement,size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 注册 ")]),r("div",{staticClass:"actions flex"},[r("div"),r("div",[e._v(" 已有账号？ "),r("router-link",{attrs:{to:"/user/login"}},[e._v("登录")])],1)])],1)},o=[],s=r("1da1"),a=(r("96cf"),r("160b")),n={components:{XySendVerify:a["a"]},data:function(){return{loading:!1,inviteSuffix:"",form:{email:"",password:"",rePassword:"",verify:"",token:"",inviteCode:"",agreement:!1},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){switch(this.$store.state.app.siteInfo.regInvite){case 1:this.inviteSuffix="（可选）";break;case 2:this.inviteSuffix="（必填）";break}this.form.inviteCode=this.$store.state.app.inviteCode},methods:{getVerifyToken:function(e){this.form.token=e.token},handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("app/setData",{key:"inviteCode",value:e.form.inviteCode}),e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),t.next=6,e.util.request({url:"/v1/reg_email/user/register",data:e.form,method:"post"});case 6:i=t.sent,"200"==i.code?(e.util.showToast({title:i.msg,icon:"success",duration:2e3}),e.$emit("reg-success")):e.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}}},l=n,c=r("2877"),u=Object(c["a"])(l,i,o,!1,null,"2487cd1f",null);t["default"]=u.exports},cfa0:function(e,t,r){"use strict";r("5bac")},e07c:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"mobile"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}},[r("template",{slot:"prepend"},[r("vue-country-code",{attrs:{defaultCountry:"China",enabledCountryCode:""},on:{onSelect:e.onCountrySelect}})],1)],2)],1),r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",account:e.form.mobile,title:"用户注册"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e.$store.state.app.siteInfo.regInvite>0?r("el-form-item",{attrs:{prop:"inviteCode"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邀请码"+e.inviteSuffix},model:{value:e.form.inviteCode,callback:function(t){e.$set(e.form,"inviteCode",t)},expression:"form.inviteCode"}})],1):e._e(),r("div",{staticClass:"agreement"},[r("el-checkbox",{model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),r("router-link",{attrs:{to:"/agreement/用户协议"}},[e._v("《"+e._s(e.$store.state.app.siteInfo.title)+"用户协议》")]),e._v("和 "),r("router-link",{attrs:{to:"/agreement/隐私政策"}},[e._v("《"+e._s(e.$store.state.app.siteInfo.title)+"隐私政策》")])],1),r("el-button",{staticClass:"full submit-btn",attrs:{disabled:!e.form.agreement,size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 注册 ")]),r("div",{staticClass:"actions flex"},[r("div"),r("div",[e._v(" 已有账号？ "),r("router-link",{attrs:{to:"/user/login"}},[e._v("登录")])],1)])],1)},o=[],s=r("1da1"),a=(r("96cf"),r("b0c0"),r("160b")),n=r("4167"),l=r.n(n),c={components:{XySendVerify:a["a"],VueCountryCode:l.a},data:function(){return{loading:!1,inviteSuffix:"",form:{countryCode:"+86",mobile:"",password:"",rePassword:"",verify:"",token:"",inviteCode:"",agreement:!1},rule:{mobile:[{required:!0,message:"请填写手机号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){switch(this.$store.state.app.siteInfo.regInvite){case 1:this.inviteSuffix="（可选）";break;case 2:this.inviteSuffix="（必填）";break}this.form.inviteCode=this.$store.state.app.inviteCode},methods:{onCountrySelect:function(e){e.name,e.iso2;var t=e.dialCode;this.form.countryCode="+"+t},getVerifyToken:function(e){this.form.token=e.token},handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("app/setData",{key:"inviteCode",value:e.form.inviteCode}),e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),t.next=6,e.util.request({url:"/v1/reg_mobile/user/register",data:e.form,method:"post"});case 6:i=t.sent,"200"==i.code?(e.util.showToast({title:i.msg,icon:"success",duration:2e3}),e.$emit("reg-success")):e.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}}},u=c,d=r("2877"),m=Object(d["a"])(u,i,o,!1,null,"da028be6",null);t["default"]=m.exports}}]);