(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15de99f4"],{"25a6":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"send-verify p-l-xs p-r-xs lh-1",attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])},s=[],o=r("1da1"),a=(r("96cf"),r("a9e3"),{name:"xySendVerify",props:{verifyUser:{type:Number,default:0},noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",r=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(r)):e.label="剩余"+e.timeLeft+"s"}),1e3),i={},i="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},i.verifyUser=e.verifyUser,t.next=13,e.util.request({url:e.url,data:i,method:"post"});case 13:s=t.sent,"200"==s.code?(e.util.showToast({title:s.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",s.data)):e.util.showToast({title:s.msg,icon:"loading",duration:2e3});case 15:case"end":return t.stop()}}),t)})))()}}}),n=a,l=r("2877"),u=Object(l["a"])(n,i,s,!1,null,"7a59abca",null);t["a"]=u.exports},6077:function(e,t,r){"use strict";r("92d6")},"92d6":function(e,t,r){},e07c:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"mobile"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码(6~20位数字与字母)"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{prop:"rePassword"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请再次输入密码"},model:{value:e.form.rePassword,callback:function(t){e.$set(e.form,"rePassword",t)},expression:"form.rePassword"}})],1),r("div",{staticClass:"flex flex-alignCenter"},[r("el-form-item",{staticClass:"flex-1",attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}})],1),r("XySendVerify",{staticClass:"send-verity-button",attrs:{url:"/v1/sms/verify/send",type:"手机号",account:e.form.mobile,title:"用户注册"},on:{verifysuccess:e.getVerifyToken}})],1),e.$store.state.app.siteInfo.regInvite>0?r("el-form-item",{attrs:{prop:"inviteCode"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邀请码"+e.inviteSuffix},model:{value:e.form.inviteCode,callback:function(t){e.$set(e.form,"inviteCode",t)},expression:"form.inviteCode"}})],1):e._e(),r("div",{staticClass:"agreement"},[r("el-checkbox",{model:{value:e.form.agreement,callback:function(t){e.$set(e.form,"agreement",t)},expression:"form.agreement"}},[e._v("我已阅读并同意")]),r("router-link",{attrs:{to:"/agreement/用户协议"}},[e._v("《"+e._s(e.$store.state.app.siteInfo.title)+"用户协议》")]),e._v("和 "),r("router-link",{attrs:{to:"/agreement/隐私政策"}},[e._v("《"+e._s(e.$store.state.app.siteInfo.title)+"隐私政策》")])],1)],1),r("div",{staticClass:"bottom flex space-between flex-alignCenter"},[r("div"),r("el-button",{staticClass:"full submit-btn",attrs:{disabled:!e.form.agreement,size:"",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 注册 ")]),r("div",{staticClass:"actions "},[r("router-link",{attrs:{to:"/user/login"}},[e._v("已有账号 快捷登陆 >")])],1)],1)],1)},s=[],o=r("1da1"),a=(r("96cf"),r("25a6")),n={components:{XySendVerify:a["a"]},data:function(){return{loading:!1,inviteSuffix:"",form:{mobile:"",password:"",rePassword:"",verify:"",token:"",inviteCode:"",agreement:!1},rule:{mobile:[{required:!0,message:"请填写手机号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){switch(this.$store.state.app.siteInfo.regInvite){case 1:this.inviteSuffix="（可选）";break;case 2:this.inviteSuffix="（必填）";break}this.form.inviteCode=this.$store.state.app.inviteCode},methods:{getVerifyToken:function(e){this.form.token=e.token},handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.commit("app/setData",{key:"inviteCode",value:e.form.inviteCode}),e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),t.next=6,e.util.request({url:"/v1/reg_mobile/user/register",data:e.form,method:"post"});case 6:i=t.sent,"200"==i.code?(e.util.showToast({title:i.msg,icon:"success",duration:2e3}),e.$emit("reg-success")):e.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}}},l=n,u=(r("6077"),r("2877")),c=Object(u["a"])(l,i,s,!1,null,"aa69ebd4",null);t["default"]=c.exports}}]);