(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f223cea"],{"19fc":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loadedScript?i("Captcha",{attrs:{id:"Captcha",scene:t.capthaOptions.scene,type:t.capthaOptions.type,parm:t.capthaOptions.options,url:t.capthaOptions.url},on:{callback:t.callback},nativeOn:{click:function(e){return t.doClick.apply(null,arguments)}}},[t._t("default",(function(){return[i("input",{attrs:{id:"Captcha",type:"button",value:"点击验证"}})]}))],2):t._e()},r=[],s=i("1da1"),n=(i("d3b7"),i("96cf"),{name:"XyCaptha",props:{scene:{type:String,default:"common"},type:{type:String,default:""},url:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{loadedScript:!1,capthaOptions:{scene:"common",type:"",url:"",options:{}}}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadScript();case 2:Vue.component("Captcha",window["vue-social-captcha"].default),t.loadedScript=!0;case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){this.type?this.capthaOptions=Object.assign(this.capthaOptions,this.$props):this.capthaOptions=Object.assign(this.capthaOptions,this.util.getCapthaOptions())},methods:{callback:function(t,e){switch(t){case 1:this.$emit("success",e);break;case 0:return this.util.showToast({title:"验证失败",icon:"loading",duration:1e3}),!1;default:break}},doClick:function(){this.capthaOptions.type||this.$emit("success")},loadScript:function(){var t=this;return new Promise((function(e,i){t.VueScript2.load("https://cdn.jsdelivr.net/gh/QQOQ/vue-social-captcha/dist/vue-social-captcha.umd.js").then((function(){e()}))}))}}}),o=n,l=i("2877"),c=Object(l["a"])(o,a,r,!1,null,"72745184",null);e["a"]=c.exports},"29a5":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top-box"},[i("el-button",{staticClass:"m-r",attrs:{type:"primary",size:"small"}},[t._v("更换绑定的邮箱")])],1),i("div",{staticClass:"box"},[i("div",{staticClass:"content p-t-md"},[i("el-steps",{attrs:{active:t.active,"align-left":""}},[i("el-step",{attrs:{title:"登录密码",description:""}}),i("el-step",{attrs:{title:"验证旧邮箱",description:""}}),i("el-step",{attrs:{title:"验证新邮箱",description:""}}),i("el-step",{attrs:{title:"绑定成功",description:""}})],1),i("div",{staticClass:"step-tabs"},[1==t.active?i("el-form",{ref:"formVerifyPassword",attrs:{"label-position":"left","label-width":"0px"}},[i("div",{staticClass:"m-b-md ts-16 tw4"},[t._v("请输入您的登录密码")]),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"medium",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("div",{staticClass:"m-t-lg"},[i("el-button",{staticClass:"submit-btn primary-linear m-r",attrs:{size:"medium",loading:t.loading,type:"primary"},on:{click:t.verifyPassword}},[t._v(" 下一步 ")]),i("el-link",{staticClass:"back ts-14",on:{click:function(e){return t.$router.back()}}},[t._v("暂不修改")])],1)],1):t._e(),2==t.active?i("el-form",{ref:"formVerfyEmail",attrs:{"label-position":"left","label-width":"140px",model:t.formVerfyEmail}},[i("div",{staticClass:"m-b-md ts-12 tw4",staticStyle:{color:"#2A2B2E"}},[t._v("为确认您本人操作，需要您进行邮箱验证码验证身份。")]),i("el-form-item",{attrs:{prop:"email",label:"请输入旧邮箱"}},[i("div",{staticClass:"flex"},[i("el-input",{attrs:{size:"medium",type:"text",prefix:"ios-at-outline",disabled:"",placeholder:"请输入旧邮箱"},model:{value:t.formVerfyEmail.email,callback:function(e){t.$set(t.formVerfyEmail,"email",e)},expression:"formVerfyEmail.email"}}),i("div",{staticClass:"text-gray m-l-md"},[t._v(" 邮箱不可用？点此提交工单 ")])],1)]),i("el-form-item",{attrs:{prop:"verify",label:"验证码"}},[i("div",{staticClass:"flex"},[i("el-input",{attrs:{size:"medium",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:t.formVerfyEmail.verify,callback:function(e){t.$set(t.formVerfyEmail,"verify",e)},expression:"formVerfyEmail.verify"}}),i("el-button",{staticClass:"m-l-md",attrs:{type:"primary",size:"medium"}},[i("XySendVerify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",verifyUser:1,account:t.formVerfyEmail.email,title:"手机换绑"},on:{verifysuccess:t.getVerifyTokenVerfyEmail}})],1)],1)]),i("div",{staticClass:"m-t-lg"},[i("el-button",{staticClass:"submit-btn primary-linear m-r",attrs:{size:"medium",loading:t.loading,type:"primary"},on:{click:function(e){return t.verifyEmail()}}},[t._v(" 下一步 ")]),i("el-link",{staticClass:"back ts-14",on:{click:function(e){t.active--}}},[t._v("返回上一步")])],1)],1):t._e(),3==t.active?i("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"140px",model:t.form,rules:t.rule}},[i("el-form-item",{attrs:{prop:"email",label:"请输入新邮箱号"}},[i("el-input",{attrs:{size:"medium",type:"text",prefix:"ios-at-outline",placeholder:"请输入新邮箱号"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),i("el-form-item",{attrs:{prop:"verify",label:"验证码"}},[i("div",{staticClass:"flex"},[i("el-input",{attrs:{size:"medium",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:t.form.verify,callback:function(e){t.$set(t.form,"verify",e)},expression:"form.verify"}}),i("el-button",{staticClass:"m-l-md",attrs:{type:"primary",size:"medium"}},[i("XySendVerify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",account:t.form.mobile,title:"邮箱换绑"},on:{verifysuccess:t.getVerifyToken}})],1)],1)]),t.verifyList.indexOf("mobile")>=0?i("el-form-item",{attrs:{prop:"mobileVerify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:t.form.mobileVerify,callback:function(e){t.$set(t.form,"mobileVerify",e)},expression:"form.mobileVerify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"邮箱换绑"},on:{verifysuccess:t.getMobileVerifyToken},slot:"append"})],1)],1):t._e(),t.verifyList.indexOf("gauth")>=0?i("el-form-item",{attrs:{prop:"gauth"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:t.form.gauth,callback:function(e){t.$set(t.form,"gauth",e)},expression:"form.gauth"}})],1):t._e(),t.verifyList.indexOf("password")>=0?i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1):t._e(),i("div",{staticClass:"m-t-lg"},[i("el-button",{staticClass:"submit-btn primary-linear m-r",attrs:{size:"medium",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v(" 确定 ")]),i("el-link",{staticClass:"back ts-14",on:{click:function(e){t.active--}}},[t._v("返回上一步")])],1)],1):t._e(),4==t.active?i("div",[t._m(0),i("div",{staticClass:"m-t-lg"},[i("router-link",{attrs:{to:"/user/login"}},[i("el-button",{staticClass:"primary-linear",attrs:{size:"small",type:"primary",round:""}},[t._v("重新登录")])],1)],1)]):t._e()],1)],1)]),i("div",[i("el-alert",{attrs:{type:"primary"}},[i("span",{staticClass:"ts-14",attrs:{slot:"title"},slot:"title"},[i("i",{staticClass:"xyicon xyicon-help-o m-r-xs text-primary"}),i("span",[t._v("收不到短信验证码？")])]),i("div",{staticClass:"lh-2 ts-12 p-l"},[t._v(" 1、网络通讯异常可能会造成短信丢失，请重新获取或稍后再试。"),i("br"),t._v(" 2、请核实手机是否已欠费停机，或者屏蔽了系统短信。"),i("br"),t._v(" 3、如果手机已丢失或停用， 请选择其他验证方式 。"),i("br"),t._v(" 4、您也可以尝试将SIM卡移动到另一部手机，然后重试。"),i("br")])])],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("i",{staticClass:"xyicon xyicon-check3 ts-30 m-r-sm",staticStyle:{color:"#4AC711"}}),i("span",{staticClass:"ts-20 tw4",staticStyle:{color:"#2A2B2E"}},[t._v("换绑邮箱成功。")])])}],s=i("1da1"),n=(i("96cf"),i("ef01")),o=i("3a69"),l={mixins:[o["default"]],components:{XySendVerify:n["a"]},data:function(){return{active:1,verifyList:[],loading:!1,formVerfyEmail:{email:this.$store.state.user.userInfo.email.identifier,verify:"",token:""},form:{email:"",password:"",verify:"",token:"",mobile:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{email:[{required:!0,message:"请填写新邮箱",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{verifyPassword:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.doVerifyPassword();case 2:i=e.sent,"200"==i.code&&t.active++;case 4:case"end":return e.stop()}}),e)})))()},getVerifyTokenVerfyEmail:function(t){this.formVerfyEmail.token=t.token},verifyEmail:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_email/user/verify",data:t.formVerfyEmail,method:"post"});case 5:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.active++):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},getVerifyToken:function(t){this.form.token=t.token},getMobileVerifyToken:function(t){this.form.mobileToken=t.token},loadData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/reg_email/user/change",method:"get"});case 2:i=e.sent,"200"==i.code?t.verifyList=i.data.dataList:t.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/reg_email/user/change",data:t.form,method:"put"});case 5:a=e.sent,"200"==a.code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.active++):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}},c=l,u=(i("8bc8"),i("2877")),m=Object(u["a"])(c,a,r,!1,null,"04b9f58f",null);e["default"]=m.exports},3491:function(t,e,i){},"8bc8":function(t,e,i){"use strict";i("3491")},ef01:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("xy-captha",{on:{success:t.captchaSuccess}},[i("span",{staticClass:"send-verify p-l-xs p-r-xs lh-1",attrs:{id:"Captcha",type:"text"}},[t._v(t._s(t.label))])])],1)},r=[],s=i("1da1"),n=(i("96cf"),i("a9e3"),i("19fc")),o={components:{XyCaptha:n["a"]},name:"xySendVerify",props:{verifyUser:{type:Number,default:0},noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30},capthaOptions:Object},data:function(){return{label:"发送验证码",timeLeft:0,capthaOptionsData:{}}},created:function(){},methods:{captchaSuccess:function(){this.sendVerify()},sendVerify:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.timeLeft>0)){e.next=2;break}return e.abrupt("return");case 2:if(t.account||t.noNeedAccount){e.next=5;break}return t.util.showToast({title:"请输入"+t.type,icon:"loading",duration:1e3}),e.abrupt("return",!1);case 5:return t.timeLeft=t.time,t.label="剩余"+t.timeLeft+"s",i=setInterval((function(){t.timeLeft--,t.timeLeft<=0?(t.label="发送验证码",t.timeLeft=0,clearInterval(i)):t.label="剩余"+t.timeLeft+"s"}),1e3),a={},a="手机号"==t.type?{mobile:t.account,title:t.title}:{email:t.account,title:t.title},a.verifyUser=t.verifyUser,e.next=13,t.util.request({url:t.url,data:a,method:"post"});case 13:r=e.sent,"200"==r.code?(t.util.showToast({title:r.msg,icon:"success",duration:1e3}),t.$emit("verifysuccess",r.data)):t.util.showToast({title:r.msg,icon:"loading",duration:2e3});case 15:case"end":return e.stop()}}),e)})))()}}},l=o,c=i("2877"),u=Object(c["a"])(l,a,r,!1,null,"4d058f76",null);e["a"]=u.exports}}]);