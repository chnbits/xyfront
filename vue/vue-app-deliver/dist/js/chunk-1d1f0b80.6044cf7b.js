(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d1f0b80"],{1146:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap",attrs:{id:"wrap"}},[a("xy-header"),a("div",{staticClass:"main"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"user-info m-b flex flex-wrap",attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-col",{attrs:{xs:12,sm:4}},[a("div",{staticClass:"avatar-box flex flex-alignCenter"},[a("div",[a("img",{staticClass:"avatar",attrs:{src:e.$store.state.user.userInfo.avatar,alt:"avatar"}})]),a("div",[a("div",{staticClass:"nickname"},[e._v(e._s(e.$store.state.user.userInfo.nickname))]),a("div",{staticClass:"uid"},[e._v("UID: "+e._s(e.$store.state.user.userInfo.id))])])])]),a("el-col",{staticClass:"count-list flex",attrs:{xs:12,sm:5}},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[e._v("粉丝")]),a("div",{staticClass:"value"},[e._v("0")])]),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[e._v("关注")]),a("div",{staticClass:"value"},[e._v("0")])])])],1),a("userSafeSet"),a("userLoginHoistory")],1)]),a("xy-footer")],1)},i=[],r=a("1da1"),n=(a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"center-box safe-box m-b"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title"},[e._v("安全设置")])]),a("div",{staticClass:"content clearfix"},[a("div",{staticClass:"count-list"},[e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?a("div",{staticClass:"item clear"},[a("div",{staticClass:"fl"},[a("span",{staticClass:"title"},[e._v("手机绑定")]),a("span",{staticClass:"tip"},[e._v("短信验证用于登录和修改安全验证")])]),a("div",{staticClass:"fr"},[e.safeSet["mobile"]?e._e():a("el-button",{attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/reg_mobile/user/bind"})}}},[e._v("绑定")]),e.safeSet["mobile"]?a("el-button",{staticClass:"ghost",attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/reg_mobile/user/change"})}}},[e._v("换绑")]):e._e()],1)]):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?a("div",{staticClass:"item clear"},[a("div",{staticClass:"fl"},[a("span",{staticClass:"title"},[e._v("邮箱绑定")]),a("span",{staticClass:"tip"},[e._v("为了您的账户安全，请绑定邮箱")])]),a("div",{staticClass:"fr"},[e.safeSet["email"]?e._e():a("el-button",{attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/reg_email/user/bind"})}}},[e._v("绑定")]),e.safeSet["email"]?a("el-button",{staticClass:"ghost",attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/reg_email/user/change"})}}},[e._v("换绑")]):e._e()],1)]):e._e(),a("div",{staticClass:"item clear"},[a("div",{staticClass:"fl"},[a("span",{staticClass:"title"},[e._v("登录密码")]),a("span",{staticClass:"tip"},[e._v("登录时使用，是您的第一道安全防线")])]),a("div",{staticClass:"fr"},[e.safeSet["password"]&&e.safeSet["password"]["isset"]?a("el-button",{staticClass:"ghost",attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/user/resetPassword"})}}},[e._v("修改")]):e._e(),e.safeSet["password"]&&!e.safeSet["password"]["isset"]?a("el-button",{attrs:{type:"primary",size:"medium",plain:""}},[e._v("设置")]):e._e()],1)]),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("paypwd")>=0?a("div",{staticClass:"item clear"},[a("div",{staticClass:"fl"},[a("span",{staticClass:"title"},[e._v("资金密码")]),a("span",{staticClass:"tip"},[e._v("交易时使用，开启手机验证或者谷歌验证后方可进行设置")])]),a("div",{staticClass:"fr"},[e.safeSet["paypwd"]&&e.safeSet["paypwd"]["isset"]?a("el-button",{staticClass:"ghost",attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/paypwd/change"})}}},[e._v("修改")]):e._e(),e.safeSet["paypwd"]&&!e.safeSet["paypwd"]["isset"]?a("el-button",{attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/paypwd/set"})}}},[e._v("设置")]):e._e()],1)]):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0?a("div",{staticClass:"item clear"},[a("div",{staticClass:"fl"},[a("span",{staticClass:"title"},[e._v("谷歌验证")]),a("span",{staticClass:"tip"},[e._v("为了您的账户安全，请绑定谷歌验证器")])]),a("div",{staticClass:"fr"},[e.safeSet["gauth"]?e._e():a("el-button",{attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/gauth/user/bind"})}}},[e._v("绑定")]),e.safeSet["gauth"]?a("el-button",{staticClass:"ghost",attrs:{type:"primary",size:"medium",plain:""},on:{click:function(t){return e.util.navigateTo({url:"/gauth/user/change"})}}},[e._v("换绑")]):e._e()],1)]):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("gauth")>=0||e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0||e.$store.state.app.siteInfo.versionFuncsAll.indexOf("email")>=0?a("div",{staticClass:"item clear"},[a("div",{staticClass:"fl"},[a("span",{staticClass:"title"},[e._v("二次验证")]),a("span",{staticClass:"tip"},[e._v("开启后，每次登录均需要通过短信或谷歌验证")])]),a("div",{staticClass:"fr"},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:e.handle2fa},model:{value:e.mfa,callback:function(t){e.mfa=t},expression:"mfa"}})],1)]):e._e()])]),a("XySafetyVerify",{ref:"sv",on:{"verify-request":e.handle2fa,cancel:e.close},model:{value:e.verifyData,callback:function(t){e.verifyData=t},expression:"verifyData"}})],1)}),l=[],o=a("3317"),u={components:{XySafetyVerify:o["a"]},data:function(){return{safeSet:{},verifyData:"",mfa:0}},created:function(){this.loadSafeSet(),this.mfa=this.safeSet["2fa"]},methods:{close:function(){this.mfa=this.safeSet["2fa"]},handle2fa:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={action:t},this.verifyData&&(a._verify=this.verifyData),e.next=4,this.util.request({url:"/v1/user/user/loginVerifySet",data:a,method:"put"});case 4:if(s=e.sent,200!=s.code){e.next=11;break}this.$refs.sv.close(),this.util.showToast({title:s.msg,icon:"success",duration:2e3}),this.verifyData="",e.next=16;break;case 11:if(401003!=s.code){e.next=14;break}return this.$refs.sv.open(s.data.verifyList),e.abrupt("return");case 14:this.mfa=this.safeSet["2fa"],this.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 16:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),loadSafeSet:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/user/user/safeSet",method:"get"});case 2:a=t.sent,200==a.code?e.safeSet=a.data.dataList:e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()}}},c=u,f=(a("3e6e"),a("2877")),p=Object(f["a"])(c,n,l,!1,null,"3202510c",null),d=p.exports,m={components:{userSafeSet:d},data:function(){return{}},created:function(){},methods:{loadData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/core/user/center",data:{},method:"get"});case 2:a=t.sent,200==a.code||e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()}}},v=m,g=(a("71b5"),Object(f["a"])(v,s,i,!1,null,"0b89735c",null));t["default"]=g.exports},"25a6":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"send-verify p-l-xs p-r-xs lh-1",attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])},i=[],r=a("1da1"),n=(a("96cf"),a("a9e3"),{name:"xySendVerify",props:{verifyUser:{type:Number,default:0},noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",a=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(a)):e.label="剩余"+e.timeLeft+"s"}),1e3),s={},s="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},s.verifyUser=e.verifyUser,t.next=13,e.util.request({url:e.url,data:s,method:"post"});case 13:i=t.sent,"200"==i.code?(e.util.showToast({title:i.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",i.data)):e.util.showToast({title:i.msg,icon:"loading",duration:2e3});case 15:case"end":return t.stop()}}),t)})))()}}}),l=n,o=a("2877"),u=Object(o["a"])(l,s,i,!1,null,"7a59abca",null);t["a"]=u.exports},3110:function(e,t,a){},3317:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"append-to-body":"",title:"安全验证",visible:e.dialogVisible,width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.eclose}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[e.verifyList.indexOf("email")>=0?a("el-form-item",{attrs:{label:"邮箱验证码",prop:"emailVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.emailVerify,callback:function(t){e.$set(e.form,"emailVerify",t)},expression:"form.emailVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("mobile")>=0?a("el-form-item",{attrs:{label:"手机验证码",prop:"mobileVerify"}},[a("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}},[a("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getMobileVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("gauth")>=0?a("el-form-item",{attrs:{label:"谷歌验证码",prop:"gauth"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1):e._e(),e.verifyList.indexOf("paypwd")>=0?a("el-form-item",{attrs:{label:"支付密码",prop:"paypwd"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位支付密码"},model:{value:e.form.paypwd,callback:function(t){e.$set(e.form,"paypwd",t)},expression:"form.paypwd"}})],1):e._e(),e.verifyList.indexOf("password")>=0?a("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[a("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),a("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 确认 ")])],1)],1)},i=[],r=a("1da1"),n=(a("96cf"),a("25a6")),l={name:"xySafetyVerify",components:{XySendVerify:n["a"]},props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(e){this.form.emailToken=e.token},getMobileVerifyToken:function(e){this.form.mobileToken=e.token},open:function(e){this.verifyList=e,this.getRule(),this.dialogVisible=!0},eclose:function(){this.$emit("cancel")},close:function(){this.dialogVisible=!1},handleSubmit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,a=e,setTimeout((function(){a.loading=!1}),5e3),e.$emit("input",e.form),e.$emit("verify-request"),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},getRule:function(){for(var e in this.verifyList)switch(this.verifyList[e]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;default:break}}}},o=l,u=a("2877"),c=Object(u["a"])(o,s,i,!1,null,"28ece3dc",null);t["a"]=c.exports},"3e6e":function(e,t,a){"use strict";a("8975")},"71b5":function(e,t,a){"use strict";a("3110")},8975:function(e,t,a){}}]);