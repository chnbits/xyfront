(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88e05ef4"],{"160b":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"send-verify p-l-xs p-r-xs lh-1",attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])},a=[],s=i("1da1"),o=(i("96cf"),i("a9e3"),{name:"xySendVerify",props:{verifyUser:{type:Number,default:0},noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",i=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(i)):e.label="剩余"+e.timeLeft+"s"}),1e3),r={},r="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},r.verifyUser=e.verifyUser,t.next=13,e.util.request({url:e.url,data:r,method:"post"});case 13:a=t.sent,"200"==a.code?(e.util.showToast({title:a.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",a.data)):e.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 15:case"end":return t.stop()}}),t)})))()}}}),l=o,n=i("2877"),c=Object(n["a"])(l,r,a,!1,null,"582a9f33",null);t["a"]=c.exports},"29a5":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"top-box"},[i("div",{staticClass:"back cursor-pointer ts-13",on:{click:function(t){return e.$router.back()}}},[i("i",{staticClass:"xyicon xyicon-left1"}),e._v(" 返回 ")])]),i("div",{staticClass:"box"},[i("div",{staticClass:"content p-t-md"},[i("el-steps",{attrs:{active:e.active,"align-left":""}},[i("el-step",{attrs:{title:"登录密码",description:""}}),i("el-step",{attrs:{title:"验证旧邮箱",description:""}}),i("el-step",{attrs:{title:"验证新邮箱",description:""}}),i("el-step",{attrs:{title:"绑定成功",description:""}})],1),i("div",{staticClass:"step-tabs"},[1==e.active?i("el-form",{ref:"formVerifyPassword",attrs:{"label-position":"left","label-width":"0px"}},[i("div",{staticClass:"m-b-md ts-18 tw4"},[e._v("请输入您的登录密码")]),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"medium",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),i("div",{staticClass:"m-t-lg"},[i("el-button",{staticClass:"submit-btn primary-linear m-r",attrs:{size:"medium",loading:e.loading,type:"primary"},on:{click:e.verifyPassword}},[e._v(" 下一步 ")]),i("el-link",{staticClass:"back ts-14",on:{click:function(t){return e.$router.back()}}},[e._v("暂不修改")])],1)],1):e._e(),2==e.active?i("el-form",{ref:"formVerfyEmail",attrs:{"label-position":"left","label-width":"140px",model:e.formVerfyEmail}},[i("div",{staticClass:"m-b-md ts-12 tw4",staticStyle:{color:"#2A2B2E"}},[e._v("为确认您本人操作，需要您进行邮箱验证码验证身份。")]),i("el-form-item",{attrs:{prop:"mobile",label:"请输入旧邮箱"}},[i("div",{staticClass:"flex"},[i("el-input",{attrs:{size:"medium",type:"text",prefix:"ios-at-outline",disabled:"",placeholder:"请输入旧邮箱"},model:{value:e.formVerfyEmail.email,callback:function(t){e.$set(e.formVerfyEmail,"email",t)},expression:"formVerfyEmail.email"}}),i("div",{staticClass:"text-gray m-l-md"},[e._v(" 邮箱不可用？点此提交工单 ")])],1)]),i("el-form-item",{attrs:{prop:"verify",label:"验证码"}},[i("div",{staticClass:"flex"},[i("el-input",{attrs:{size:"medium",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.formVerfyEmail.verify,callback:function(t){e.$set(e.formVerfyEmail,"verify",t)},expression:"formVerfyEmail.verify"}}),i("el-button",{staticClass:"m-l-md",attrs:{type:"primary",size:"medium"}},[i("XySendVerify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",account:e.formVerfyEmail.email,title:"手机换绑"},on:{verifysuccess:e.getVerifyTokenVerfyEmail}})],1)],1)]),i("div",{staticClass:"m-t-lg"},[i("el-button",{staticClass:"submit-btn primary-linear m-r",attrs:{size:"medium",loading:e.loading,type:"primary"},on:{click:function(t){return e.verifyEmail()}}},[e._v(" 下一步 ")]),i("el-link",{staticClass:"back ts-14",on:{click:function(t){e.active--}}},[e._v("返回上一步")])],1)],1):e._e(),3==e.active?i("el-form",{ref:"form",attrs:{"label-position":"left","label-width":"140px",model:e.form,rules:e.rule}},[i("el-form-item",{attrs:{prop:"email",label:"请输入新邮箱号"}},[i("el-input",{attrs:{size:"medium",type:"text",prefix:"ios-at-outline",placeholder:"请输入新邮箱号"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),i("el-form-item",{attrs:{prop:"verify",label:"验证码"}},[i("div",{staticClass:"flex"},[i("el-input",{attrs:{size:"medium",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}}),i("el-button",{staticClass:"m-l-md",attrs:{type:"primary",size:"medium"}},[i("XySendVerify",{attrs:{url:"/v1/email/verify/send",type:"邮箱",verifyUser:1,account:e.form.mobile,title:"邮箱换绑"},on:{verifysuccess:e.getVerifyToken}})],1)],1)]),e.verifyList.indexOf("mobile")>=0?i("el-form-item",{attrs:{prop:"mobileVerify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"邮箱换绑"},on:{verifysuccess:e.getMobileVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("gauth")>=0?i("el-form-item",{attrs:{prop:"gauth"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1):e._e(),e.verifyList.indexOf("password")>=0?i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),i("div",{staticClass:"m-t-lg"},[i("el-button",{staticClass:"submit-btn primary-linear m-r",attrs:{size:"medium",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 确定 ")]),i("el-link",{staticClass:"back ts-14",on:{click:function(t){e.active--}}},[e._v("返回上一步")])],1)],1):e._e(),4==e.active?i("div",[e._m(0),i("div",{staticClass:"m-t-lg"},[i("router-link",{attrs:{to:"/user/login"}},[i("el-button",{staticClass:"primary-linear",attrs:{size:"small",type:"primary",round:""}},[e._v("重新登录")])],1)],1)]):e._e()],1)],1)]),i("div",[i("el-alert",{attrs:{type:"primary"}},[i("span",{staticClass:"ts-14",attrs:{slot:"title"},slot:"title"},[i("i",{staticClass:"xyicon xyicon-help-o m-r-xs text-primary"}),i("span",[e._v("收不到短信验证码？")])]),i("div",{staticClass:"lh-2 ts-12 p-l"},[e._v(" 1、网络通讯异常可能会造成邮箱丢失，请重新获取或稍后再试。"),i("br"),e._v(" 2、请核实邮箱邮件是否被拦截，检查垃圾箱。"),i("br"),e._v(" 3、如果邮箱已经停用， 请选择其他验证方式 。"),i("br")])])],1)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("i",{staticClass:"xyicon xyicon-check3 ts-30 m-r-sm",staticStyle:{color:"#4AC711"}}),i("span",{staticClass:"ts-20 tw4",staticStyle:{color:"#2A2B2E"}},[e._v("换绑邮箱成功。")])])}],s=i("1da1"),o=(i("96cf"),i("160b")),l=i("3a69"),n={mixins:[l["default"]],components:{XySendVerify:o["a"]},data:function(){return{active:1,verifyList:[],loading:!1,formVerfyEmail:{email:this.$store.state.user.userInfo.email.identifier,verify:"",token:""},form:{email:"",password:"",verify:"",token:"",mobile:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{email:[{required:!0,message:"请填写新邮箱",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{verifyPassword:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.doVerifyPassword();case 2:i=t.sent,"200"==i.code&&e.active++;case 4:case"end":return t.stop()}}),t)})))()},getVerifyTokenVerfyEmail:function(e){this.formVerfyEmail.token=e.token},verifyEmail:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_email/user/verify",data:e.formVerfyEmail,method:"post"});case 5:r=t.sent,"200"==r.code?(e.util.showToast({title:r.msg,icon:"success",duration:2e3}),e.active++):e.util.showToast({title:r.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},getVerifyToken:function(e){this.form.token=e.token},getMobileVerifyToken:function(e){this.form.mobileToken=e.token},loadData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/reg_email/user/change",method:"get"});case 2:i=t.sent,"200"==i.code?e.verifyList=i.data.dataList:e.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_email/user/change",data:e.form,method:"put"});case 5:r=t.sent,"200"==r.code?(e.util.showToast({title:r.msg,icon:"success",duration:2e3}),e.active++):e.util.showToast({title:r.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}},c=n,u=(i("babc"),i("2877")),m=Object(u["a"])(c,r,a,!1,null,"30e16c2e",null);t["default"]=m.exports},"9d89":function(e,t,i){},babc:function(e,t,i){"use strict";i("9d89")}}]);