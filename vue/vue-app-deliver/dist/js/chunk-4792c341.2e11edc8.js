(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4792c341"],{"379b":function(e,t,r){},"8ced":function(e,t,r){"use strict";r("379b")},b0fc:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap",attrs:{id:"wrap"}},[r("xy-header"),r("div",{staticClass:"main"},[r("div",{staticClass:"container",staticStyle:{"padding-top":"100px","padding-bottom":"80px"}},[r("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("el-col",{staticClass:"left-box",attrs:{xs:1,sm:1,md:14,lg:14}},[r("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/a5530bd3-6d32-483a-a8be-394e6016043f.png",width:"630"}})]),r("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[r("div",{staticClass:"title"},[e._v(" 忘记密码 ")]),r("el-tabs",{attrs:{stretch:""},on:{"tab-click":e.handleClick},model:{value:e.regTab,callback:function(t){e.regTab=t},expression:"regTab"}},[e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_mobile")>=0?r("el-tab-pane",{staticClass:"p-t",attrs:{label:"手机号码",name:"mobile"}}):e._e(),e.$store.state.app.siteInfo.versionFuncsAll.indexOf("reg_email")>=0?r("el-tab-pane",{staticClass:"p-t",attrs:{label:"邮箱找回",name:"email"}}):e._e()],1),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"mobile"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}},[r("template",{slot:"prepend"},[r("vue-country-code",{attrs:{defaultCountry:"China",enabledCountryCode:""},on:{onSelect:e.onCountrySelect}})],1)],2)],1),r("div",{staticClass:"flex flex-alignCenter"},[r("el-form-item",{staticClass:"flex-1",attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}})],1),r("XySendVerify",{staticClass:"send-verity-button",attrs:{url:"/v1/sms/verify/send",type:"手机号",account:e.form.mobile,title:"重置密码"},on:{verifysuccess:e.getVerifyToken}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"新密码"},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})],1),r("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 立即重置 ")])],1)],1)],1)],1)]),r("xy-footer")],1)},a=[],o=r("1da1"),i=(r("96cf"),r("b0c0"),r("ef01")),n=r("4167"),l=r.n(n),c={components:{XySendVerify:i["a"],VueCountryCode:l.a},data:function(){return{regTab:"mobile",loading:!1,form:{countryCode:"+86",mobile:"",newPassword:"",verify:"",token:""},rule:{mobile:[{required:!0,message:"请填写手机号",trigger:"blur"}],newPassword:[{required:!0,message:"请填写新密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.$route.query.account&&(this.form.mobile=this.$route.query.account)},methods:{handleClick:function(){switch(this.regTab){case"mobile":this.util.navigateTo("/reg_mobile/user/resetPassword");break;case"email":this.util.navigateTo("/reg_email/user/resetPasswordSend");break}},onCountrySelect:function(e){e.name,e.iso2;var t=e.dialCode;this.form.countryCode="+"+t},getVerifyToken:function(e){this.form.token=e},handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_mobile/user/restPassword",data:e.form,method:"post"});case 5:s=t.sent,"200"==s.code?(e.util.showToast({title:s.msg,icon:"success",duration:2e3}),e.util.navigateTo("/")):e.util.showToast({title:s.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}},u=c,d=(r("8ced"),r("2877")),m=Object(d["a"])(u,s,a,!1,null,"13f12618",null);t["default"]=m.exports}}]);