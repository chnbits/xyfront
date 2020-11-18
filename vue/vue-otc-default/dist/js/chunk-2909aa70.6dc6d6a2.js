(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2909aa70"],{"160b":function(e,t,i){"use strict";i("a9e3"),i("96cf");var r=i("1da1"),s={name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0<e.timeLeft)return t.abrupt("return");t.next=2;break;case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",i=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(i)):e.label="剩余"+e.timeLeft+"s"}),1e3),r={},r="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},t.next=12,e.util.request({url:e.url,data:r,method:"post"});case 12:"200"==(r=t.sent).code?(e.util.showToast({title:r.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",r.data)):e.util.showToast({title:r.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t)})))()}}};i=i("2877"),s=Object(i.a)(s,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"send-verify p-l-xs p-r-xs"},[t("el-button",{attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])],1)}),[],!1,null,"683cebec",null);t.a=s.exports},"7ed1":function(e,t,i){},c43b:function(e,t,i){"use strict";i("96cf");var r=i("1da1"),s={name:"xySafetyVerify",components:{XySendVerify:i("160b").a},props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(e){this.form.emailToken=e.token},getMobileVerifyToken:function(e){this.form.mobileToken=e.token},open:function(e){this.verifyList=e,this.getRule(),this.dialogVisible=!0},eclose:function(){this.$emit("cancel")},close:function(){this.dialogVisible=!1},handleSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),e.$emit("input",e.form),e.$emit("verify-request"),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},getRule:function(){for(var e in this.verifyList)switch(this.verifyList[e]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}}};i=i("2877"),s=Object(i.a)(s,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("el-dialog",{attrs:{"append-to-body":"",title:"安全验证",visible:e.dialogVisible,width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.eclose}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[0<=e.verifyList.indexOf("email")?t("el-form-item",{attrs:{label:"邮箱验证码",prop:"emailVerify"}},[t("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.emailVerify,callback:function(t){e.$set(e.form,"emailVerify",t)},expression:"form.emailVerify"}},[t("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1):e._e(),0<=e.verifyList.indexOf("mobile")?t("el-form-item",{attrs:{label:"手机验证码",prop:"mobileVerify"}},[t("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}},[t("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getMobileVerifyToken},slot:"append"})],1)],1):e._e(),0<=e.verifyList.indexOf("gauth")?t("el-form-item",{attrs:{label:"谷歌验证码",prop:"gauth"}},[t("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1):e._e(),0<=e.verifyList.indexOf("paypwd")?t("el-form-item",{attrs:{label:"支付密码",prop:"paypwd"}},[t("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位支付密码"},model:{value:e.form.paypwd,callback:function(t){e.$set(e.form,"paypwd",t)},expression:"form.paypwd"}})],1):e._e(),0<=e.verifyList.indexOf("password")?t("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[t("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),t("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 确认 ")])],1)],1)}),[],!1,null,"6974692a",null);t.a=s.exports},cbba:function(e,t,i){"use strict";i.r(t),i("96cf");var r,s=i("1da1");s={components:{"xy-safety-verify":i("c43b").a},data:function(){return{isDemo:!1,verifyData:"",formLogin:{loading:!1,account:"",password:""},ruleLogin:{account:[{required:!0,message:"请填写账号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}},created:function(){1==this.isDemo&&(this.formLogin.account="jry",this.formLogin.password="Windows9")},methods:{handleSubmit:(r=Object(s.a)(regeneratorRuntime.mark((function e(){var t,i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.formLogin,this.verifyData&&(t._verify=this.verifyData),this.formLogin.loading=!0,i=this,setTimeout((function(){i.formLogin.loading=!1}),5e3),e.next=7,this.util.request({url:"/v1/core/user/login",data:t,method:"post"});case 7:if(200!=(r=e.sent).code){e.next=17;break}this.$store.commit("user/setToken",r.data.token),this.$store.commit("user/setUserInfo",r.data.userInfo),this.$refs.sv.close(),this.util.showToast({title:r.msg,icon:"success",duration:2e3}),this.verifyData="",this.util.switchTab({url:"/"}),e.next=23;break;case 17:if(401003==r.code)return this.$refs.sv.open(r.data.verifyList),e.abrupt("return");e.next=22;break;case 22:this.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 23:this.formLogin.loading=!1;case 24:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})}},i("f9f2"),i=i("2877"),s=Object(i.a)(s,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"wrap",attrs:{id:"wrap"}},[t("xy-header"),t("div",{staticClass:"main"},[t("div",{staticClass:"container",staticStyle:{"padding-top":"13%"}},[t("el-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[t("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[t("div",{staticClass:"title"},[e._v(" 登录 ")]),t("el-form",{ref:"formLogin",attrs:{model:e.formLogin,rules:e.ruleLogin}},[t("el-form-item",{attrs:{prop:"account"}},[t("el-input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"请输入用户名、邮箱或手机号"},model:{value:e.formLogin.account,callback:function(t){e.$set(e.formLogin,"account",t)},expression:"formLogin.account"}})],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}})],1),t("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.formLogin.loading,type:"primary"},on:{click:function(t){return e.handleSubmit()}}},[e._v(" 登录 ")]),t("div",{staticClass:"actions flex"},[t("div",[t("router-link",{attrs:{to:"/user/resetPassword"}},[e._v("忘记密码")])],1),t("div",[e._v(" 还没有账号？ "),t("router-link",{attrs:{to:"/user/register"}},[e._v("注册")])],1)])],1)],1)],1)],1)]),t("xy-footer"),t("xy-safety-verify",{ref:"sv",on:{"verify-request":e.handleSubmit},model:{value:e.verifyData,callback:function(t){e.verifyData=t},expression:"verifyData"}})],1)}),[],!1,null,"04d4b7dd",null);t.default=s.exports},f9f2:function(e,t,i){"use strict";i("7ed1")}}]);