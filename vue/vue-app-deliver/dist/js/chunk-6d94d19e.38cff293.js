(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d94d19e"],{"25a6":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"send-verify p-l-xs p-r-xs lh-1",attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])},a=[],i=s("1da1"),o=(s("96cf"),s("a9e3"),{name:"xySendVerify",props:{verifyUser:{type:Number,default:0},noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",s=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(s)):e.label="剩余"+e.timeLeft+"s"}),1e3),r={},r="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},r.verifyUser=e.verifyUser,t.next=13,e.util.request({url:e.url,data:r,method:"post"});case 13:a=t.sent,"200"==a.code?(e.util.showToast({title:a.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",a.data)):e.util.showToast({title:a.msg,icon:"loading",duration:2e3});case 15:case"end":return t.stop()}}),t)})))()}}}),n=o,l=s("2877"),c=Object(l["a"])(n,r,a,!1,null,"7a59abca",null);t["a"]=c.exports},3716:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrap",attrs:{id:"wrap"}},[s("xy-header"),s("div",{staticClass:"main"},[s("div",{staticClass:"container",staticStyle:{"padding-top":"100px","padding-bottom":"80px"}},[s("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[s("el-col",{staticClass:"left-box",attrs:{xs:1,sm:1,md:14,lg:14}},[s("img",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/a5530bd3-6d32-483a-a8be-394e6016043f.png",width:"630"}})]),"choose"==e.show?s("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[s("div",{staticClass:"success-box text-center"},[s("h4",{staticClass:"title"},[e._v(" 用户登录 ")]),s("p",[e._v(" 您的微信未绑定"+e._s(e.$store.state.app.siteInfo.title)+"账户，请绑定后完成登录 ")]),s("el-button",{staticClass:"full cert",attrs:{size:"large",type:"primary"},on:{click:function(t){e.show="mobileVerify"}}},[e._v(" 绑定已有账户 ")]),s("el-button",{staticClass:"full skip",attrs:{size:"large"},on:{click:function(t){return e.handleRegister()}}},[e._v(" 创建新账户 ")])],1),s("div",{staticClass:"bottom flex space-between flex-alignCenter"})]):e._e(),"mobileVerify"==e.show?s("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[s("div",{staticClass:"title"},[e._v(" 用户绑定并登录 ")]),s("div",{staticClass:"subtitle"},[e._v(" 还没有注册吗？ "),s("router-link",{attrs:{to:"/user/register"}},[e._v(" 请点击这里 ")])],1),s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[s("el-form-item",{attrs:{prop:"account"}},[s("el-input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"请输入您的手机号码"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),s("div",{staticClass:"flex flex-alignCenter"},[s("el-form-item",{staticClass:"flex-1",attrs:{prop:"verify"}},[s("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入验证码"},model:{value:e.form.verify,callback:function(t){e.$set(e.form,"verify",t)},expression:"form.verify"}})],1),s("XySendVerify",{staticClass:"send-verity-button",attrs:{slot1:"append",url:"/v1/sms/verify/send",type:"手机号",account:e.form.account,title:"用户登录"},on:{verifysuccess:e.getVerifyToken}})],1),s("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.form.loading,type:"primary"},on:{click:function(t){return e.handleBind("mobildVerify")}}},[e._v(" 绑定 ")]),s("div",{staticClass:"actions flex m-t"},[s("div",{on:{click:function(t){e.show="password"}}},[e._v(" 使用账号密码绑定 ")]),s("div",[s("router-link",{attrs:{to:"/reg_mobile/user/resetPassword"}},[e._v(" 忘记密码？ ")])],1)])],1),s("div",{staticClass:"bottom flex space-between flex-alignCenter",on:{click:function(t){e.show="choose"}}})],1):e._e(),"password"==e.show?s("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[s("div",{staticClass:"title"},[e._v(" 用户绑定并登录 ")]),s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[s("el-form-item",{attrs:{prop:"account"}},[s("el-input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"请输入您的邮箱地址或手机号码"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),s("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.form.loading,type:"primary"},on:{click:function(t){return e.handleBind("password")}}},[e._v(" 绑定 ")]),s("div",{staticClass:"actions flex m-t"},[s("div",{on:{click:function(t){e.show="mobileVerify"}}},[e._v(" 使用手机验证码绑定 ")]),s("div",[s("router-link",{attrs:{to:"/reg_mobile/user/resetPassword"}},[e._v(" 忘记密码？ ")])],1)])],1),s("div",{staticClass:"bottom flex space-between flex-alignCenter",on:{click:function(t){e.show="choose"}}})],1):e._e()],1)],1)]),s("xy-footer")],1)},a=[],i=s("1da1"),o=(s("96cf"),s("25a6")),n={components:{XySendVerify:o["a"]},data:function(){return{show:"choose",type:"",form:{loading:!1,seed:"",bindType:"",account:"",password:"",verify:"",token:""},rule:{account:[{required:!0,message:"请填写账号",trigger:"blur"}]}}},created:function(){this.type=this.$route.query.type,this.form.seed=this.$route.query.seed},methods:{getVerifyToken:function(e){this.form.token=e},handleRegister:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,s=e,setTimeout((function(){s.loading=!1}),5e3),r="",t.t0=e.type,t.next="wxmp"===t.t0?7:"wxapp"===t.t0?9:11;break;case 7:return r="/v1/wxmp/user/register",t.abrupt("break",13);case 9:return r="/v1/wxapp/user/register",t.abrupt("break",13);case 11:return t.abrupt("return");case 13:return t.next=15,e.util.request({url:r,data:e.form,method:"post"});case 15:a=t.sent,"200"==a.code?(e.$store.commit("user/setToken",a.data.token),e.$store.commit("user/setUserInfo",a.data.userInfo),e.util.showToast({title:a.msg,icon:"success",duration:2e3}),e.util.navigateTo("/")):e.util.showToast({title:a.msg,icon:"loading",duration:3e3}),e.loading=!1;case 18:case"end":return t.stop()}}),t)})))()},handleBind:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r,a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:t.form.bindType=e,t.loading=!0,r=t,setTimeout((function(){r.loading=!1}),5e3),"",s.t0=t.type,s.next="wxmp"===s.t0?8:"wxapp"===s.t0?10:12;break;case 8:return"/v1/wxmp/user/bind",s.abrupt("break",14);case 10:return"/v1/wxapp/user/bind",s.abrupt("break",14);case 12:return s.abrupt("return");case 14:return s.next=16,t.util.request({url:"/v1/third_login/user/bind",data:t.form,method:"post"});case 16:a=s.sent,"200"==a.code?(t.$store.commit("user/setToken",a.data.token),t.$store.commit("user/setUserInfo",a.data.userInfo),t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.util.navigateTo("/")):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 19:case"end":return s.stop()}}),s)})))()}}},l=n,c=(s("692f"),s("2877")),u=Object(c["a"])(l,r,a,!1,null,"29445961",null);t["default"]=u.exports},"692f":function(e,t,s){"use strict";s("9cae")},"9cae":function(e,t,s){}}]);