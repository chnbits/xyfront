(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-570bba33"],{"160b":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"send-verify p-l-xs p-r-xs lh-1",attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])},a=[],s=r("1da1"),n=(r("96cf"),r("a9e3"),{name:"xySendVerify",props:{verifyUser:{type:Number,default:0},noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",r=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(r)):e.label="剩余"+e.timeLeft+"s"}),1e3),i={},i="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},i.verifyUser=e.verifyUser,t.next=13,e.util.request({url:e.url,data:i,method:"post"});case 13:a=t.sent,"200"==a.code?(e.util.showToast({title:a.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",a.data)):e.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 15:case"end":return t.stop()}}),t)})))()}}}),o=n,l=r("2877"),u=Object(l["a"])(o,i,a,!1,null,"582a9f33",null);t["a"]=u.exports},d551:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap",attrs:{id:"wrap"}},[r("xy-header"),r("div",{staticClass:"main"},[r("div",{staticClass:"container",staticStyle:{"padding-top":"100px","padding-bottom":"80px"}},[r("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[r("el-col",{staticClass:"left-box",attrs:{xs:1,sm:1,md:14,lg:14}},[r("img",{attrs:{src:e.$store.state.app.loginPic,width:"600"}})]),r("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[r("div",{staticClass:"title"},[e._v(" 邮箱重置密码 ")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"email"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-lock-outline",placeholder:"验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",account:e.form.email,title:"重置密码"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1),r("el-form-item",{attrs:{prop:"newPassword"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"新密码"},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})],1),r("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 立即重置 ")])],1)],1)],1)],1)]),r("xy-footer")],1)},a=[],s=r("1da1"),n=(r("96cf"),r("160b")),o={components:{XySendVerify:n["a"]},data:function(){return{loading:!1,form:{email:"",newPassword:"",verify:"",token:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],newPassword:[{required:!0,message:"请填写新密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.$route.query.account&&(this.form.email=this.$route.query.account)},methods:{getVerifyToken:function(e){this.form.token=e},handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_email/user/restPassword",data:e.form,method:"post"});case 5:i=t.sent,"200"==i.code?(e.util.showToast({title:i.msg,icon:"success",duration:2e3}),e.util.navigateTo("/")):e.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}},l=o,u=r("2877"),c=Object(u["a"])(l,i,a,!1,null,"48a7e6e9",null);t["default"]=c.exports}}]);