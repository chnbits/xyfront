(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a54c929e"],{"160b":function(e,t,r){"use strict";r("a9e3"),r("96cf");var i=r("1da1"),a={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var r,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<e.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",r=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(r)):e.label="剩余"+e.timeLeft+"s"}),1e3),i={},i="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},t.next=12,e.util.request({url:e.url,data:i,method:"post"});case 12:"200"==(a=t.sent).code?(e.util.showToast({title:a.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",a.data)):e.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t)})))()}}},o=r("2877"),n=Object(o.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"send-verify p-l-xs p-r-xs"},[r("el-button",{attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])],1)}),[],!1,null,"683cebec",null);t.a=n.exports},"30d6":function(e,t,r){"use strict";r.r(t),r("96cf");var i=r("1da1"),a={components:{XySendVerify:r("160b").a},data:function(){return{verifyList:[],loading:!1,form:{mobile:"",password:"",verify:"",token:"",email:"",emailVerify:"",emailToken:"",gauth:""},rule:{mobile:[{required:!0,message:"请填写新手机号",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{getVerifyToken:function(e){this.form.token=e.token},getEmailVerifyToken:function(){this.form.emailToken=res.token},loadData:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/reg_mobile/user/change",method:"get"});case 2:"200"==(r=t.sent).code?e.verifyList=r.data.dataList:e.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},handleSubmit:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_mobile/user/change",data:e.form,method:"put"});case 5:"200"==(i=t.sent).code?(e.util.showToast({title:i.msg,icon:"success",duration:2e3}),e.util.navigateBack()):e.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}},o=r("2877"),n=Object(o.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap",attrs:{id:"wrap"}},[r("xy-header"),r("div",{staticClass:"main"},[r("div",{staticClass:"container",staticStyle:{"padding-top":"8%"}},[r("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[r("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[r("div",{staticClass:"title"},[e._v(" 更换绑定的手机号 ")]),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[r("el-form-item",{attrs:{prop:"mobile"}},[r("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请输入新手机号"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),r("el-form-item",{attrs:{prop:"verify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",account:e.form.mobile,title:"手机换绑"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1),0<=e.verifyList.indexOf("email")?r("el-form-item",{attrs:{prop:"emailVerify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.emailVerify,callback:function(t){e.$set(e.form,"emailVerify",t)},expression:"form.emailVerify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"手机换绑"},on:{verifysuccess:e.getEmailVerifyToken},slot:"append"})],1)],1):e._e(),0<=e.verifyList.indexOf("gauth")?r("el-form-item",{attrs:{prop:"gauth"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1):e._e(),0<=e.verifyList.indexOf("password")?r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),r("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 绑定 ")])],1)],1)],1)],1)]),r("xy-footer")],1)}),[],!1,null,"a83cc360",null);t.default=n.exports}}]);