(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0daed28a"],{"1a82":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAADEUlEQVQ4T5WUX4iUVRjGf8/5ZsZJd9XK7b8RbIggmdFFGLKzQ1bO7urCQlkQLtRFtZBQdFEhskSSN9VdJhUVKJJerG3mppPODhsmVBheqAuBBEVLSe207dbsznfe+D7XcRhmd+29Opxz3t95zvO+54iaWH+Q665v4SEHTyAexLgBYxJx3sQ5K7N/SYnvDj1OWJvXaKwrk13DrDfPTkEbYnH9ZgMTXEIcCY2dQ1l+ng8egzsKbHLwMXCziYMyRgyeE6yZTb7gjT0SOcEmYGTa0Xs8w8W54MoVuCOAPLDaxB+BIzvYxtnOIk/L82GcKHqOtDOQK3KfM47JaPFweAqeHM7yb0Mrugq8gtiF4cwoAVvHU5xaPs0uiRdirniJCfbSTMaMTyG2asqg54ssXzUEdxY4I1g3u2jAOGIcuB0jFc2bMSXHafPcJTFqjsM+ZFQVSkcf4Ye5FP8JLJ+vEAYzGAMm3jRjWQIyHu6VuFHwW+g5GzYzcOwo5+nHx7fsPMmPEq1zgSOo4K3Q80EQ0GfGM8BSRc5fvWbUMb9E+ybgvcj3CPyZxJZG4KjFgMFKmecTi/hIxsMmLkpxLdbFdYFJjFE57gbSBrvHmnhD3UW2hcb7V/ysO6BksEGOrXh2GPzkQzp8hbFEim8kVpmxZ1JsXyJeFfRjlBWwXRvzLEsnOYCRq1ctOJ3+nczkCr51Ym3UjvK86B2/OmM/0IJxvOLYEcDLGI/NWnQi9il3glYXxKo3CJI13u1LevorjmLcJZejYlARpKv7jBnpah4wVi3Alq9pDivsltFXo3wYz1OIU4g7F/ofatYvVcHtBRJNcECw0otPZNxmRuvYUnpv+YsRiQf+B7hYBW8usMIbbcEE+cFuJjCUGyI11EF580n6zPHOHAWuP6/sffzPXI7795L8/llmGqlqL5Bugn1AN5CYR3kZ4+2/xetV8ELXfPRLbk0uohfiBxL1bH38Y/Da4pt499Aapq8ZPEtRV56VPsHa6IEEotVCSiYcYqODns+zXIif9EJKr3W9I889liIxlOFMlPMfXFocgsLP1fgAAAAASUVORK5CYII="},"525e":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{"append-to-body":"",title:"安全验证",visible:e.dialogVisible,width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.eclose}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[e.verifyList.indexOf("email")>=0?r("el-form-item",{attrs:{label:"邮箱验证码",prop:"emailVerify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.emailVerify,callback:function(t){e.$set(e.form,"emailVerify",t)},expression:"form.emailVerify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("mobile")>=0?r("el-form-item",{attrs:{label:"手机验证码",prop:"mobileVerify"}},[r("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}},[r("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getMobileVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("gauth")>=0?r("el-form-item",{attrs:{label:"谷歌验证码",prop:"gauth"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1):e._e(),e.verifyList.indexOf("paypwd")>=0?r("el-form-item",{attrs:{label:"支付密码",prop:"paypwd"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位支付密码"},model:{value:e.form.paypwd,callback:function(t){e.$set(e.form,"paypwd",t)},expression:"form.paypwd"}})],1):e._e(),e.verifyList.indexOf("password")>=0?r("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[r("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),r("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 确认 ")])],1)],1)},s=[],a=r("1da1"),n=(r("96cf"),r("ef01")),o={name:"xySafetyVerify",components:{XySendVerify:n["a"]},props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(e){this.form.emailToken=e.token},getMobileVerifyToken:function(e){this.form.mobileToken=e.token},open:function(e){this.verifyList=e,this.getRule(),this.dialogVisible=!0},eclose:function(){this.$emit("cancel")},close:function(){this.dialogVisible=!1},handleSubmit:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,r=e,setTimeout((function(){r.loading=!1}),5e3),e.$emit("input",e.form),e.$emit("verify-request"),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},getRule:function(){for(var e in this.verifyList)switch(this.verifyList[e]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;default:break}}}},l=o,c=r("2877"),u=Object(c["a"])(l,i,s,!1,null,"28ece3dc",null);t["a"]=u.exports},"7c46":function(e,t,r){},8211:function(e,t,r){},"8cbc":function(e,t,r){"use strict";r("8211")},"9a4d":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"qr-box",on:{click:e.loadData}},[r("div",[e.qrurl?r("xy-qrcode",{staticClass:"qrcode",style:{opacity:e.timeout?.3:1},attrs:{value:e.qrurl,options:{width:258}}}):e._e(),e.timeout?r("span",{staticClass:"xyicon xyicon-history"}):e._e()],1),r("div",[e._v("使用微信扫一扫")])])},s=[],a=r("1da1"),n=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loadedScript?r("qrcode",{attrs:{value:e.value,options:e.options}}):e._e()}),o=[],l=(r("b0c0"),r("d3b7"),{name:"xyQrcode",props:{value:{type:[String],default:""},options:{type:Object,default:function(){return{width:118}}}},data:function(){return{loadedScript:!1}},created:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadScript();case 2:Vue.component(VueQrcode.name,VueQrcode),this.loadedScript=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadScript:function(){var e=this;return new Promise((function(t,r){e.VueScript2.load("https://cdn.jsdelivr.net/gh/fengyuanchen/vue-qrcode/dist/vue-qrcode.min.js").then((function(){t()}))}))}}}),c=l,u=r("2877"),f=Object(u["a"])(c,n,o,!1,null,"0450eb19",null),d=f.exports,m={components:{"xy-qrcode":d},props:{qrloginShow:!1},data:function(){return{seed:"",qrurl:"",timer:null,timeout:!1}},created:function(){this.loadData()},watch:{qrloginShow:function(e){e?this.qrurl&&(this.timer=setInterval(this.getLogin,2e3)):clearInterval(this.timer)}},beforeDestroy:function(){clearInterval(this.timer)},methods:{loadData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/qrlogin/qrlogin/getSeed",data:{},method:"get"});case 2:r=t.sent,200==r.code?(e.seed=r.data.seed,e.qrurl=r.data.qrurl,e.timeout=!1,clearInterval(e.timer),e.timer=setInterval(e.getLogin,2e3)):e.util.showToast({title:r.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},getLogin:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/qrlogin/qrlogin/getLogin?seed="+e.seed,method:"get"});case 2:r=t.sent,200==r.code&&(r.data.timeout?(e.timeout=!0,clearInterval(e.timer)):(clearInterval(e.timer),e.$store.commit("user/setToken",r.data.token),e.$store.commit("user/setUserInfo",r.data.userInfo),e.util.showToast({title:r.msg,icon:"success",duration:2e3}),e.util.switchTab({url:"/"})));case 4:case"end":return t.stop()}}),t)})))()}}},p=m,g=(r("b7f1"),Object(u["a"])(p,i,s,!1,null,"dba2ea4a",null));t["a"]=g.exports},aa94:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAB4UlEQVQ4T53UP2gUQRQG8O+b3UMUzj+VjaKFgmIZQUEtbMzt3amgEGyEWORO8V9hbBIQtQko2CjqrYWmVZBAyF6w0EMtbASbNAe2isEiipx3sDOfrJ5rcgm65xRTvPfmx8xjZogVRulBfEwyZwHsEpQD2CQ02cqZR41TbPcuYW8gCO1NABcJ5HpyVlTDd96J6So/L84tQYLQXiNwZaXd/YnphdpeUL/Azu9YihyqdXb49N8BWPV3BHBOx2dP+0+XIcWavQHi8r+AX3nORBVTXo6E7jmgg9kQfG99MGsbVxn/JJNpoKbcRro5ANszIpDMtnqV71Nk8H581DOcygokdRLu1Kve+RQphBo2cA/7QojJ+og3nCJBGM8SHOwLAeYJcyCqsMlCGB8hOMVuf/qBID6JqmaIxdC9AbSnr8XdYgFta80WFkNruzHzPxBk9yaIIE6DOtwfoscAh2TdfpbCOHRrvFG2lBxrZxZIQvOrb3bnYzfR/mhG07dTrumco7udBQFwKap4t5Zc+8I9baXnXhHYlBHpkGbfzAjfLronCiAXsed3EfCFQNL49QB6Gz8WVbyJFCndXdgAP39dYBnSOpALkl56rjPeNqu/+XAVQ5wEsBnCJxCvY9sae3YmP58gPwATJrL340N3VgAAAABJRU5ErkJggg=="},b7f1:function(e,t,r){"use strict";r("7c46")},cbba:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrap",attrs:{id:"wrap"}},[i("xy-header"),i("div",{staticClass:"main"},[i("div",{staticClass:"container",staticStyle:{"padding-top":"5%","padding-bottom":"100px"}},[i("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[i("el-col",{staticClass:"left-box",attrs:{xs:1,sm:1,md:14,lg:14}},[i("img",{attrs:{src:r("e894"),width:"630"}})]),i("el-col",{staticClass:"login-box bg-white",attrs:{xs:22,sm:12,md:10,lg:10}},[i("div",{staticClass:"title text-left"},[e._v(" "+e._s(e.$store.state.app.siteInfo.title)+"账号登录 ")]),i("el-form",{ref:"formLogin",attrs:{model:e.formLogin,rules:e.ruleLogin}},[i("div",{staticClass:"actions flex m-b-sm"},[i("div"),i("div",[i("router-link",{attrs:{to:"/user/register"}},[e._v("免费注册>")])],1)]),i("el-form-item",{attrs:{prop:"account"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-person-outline",placeholder:"请输入您的邮箱地址或手机号码"},model:{value:e.formLogin.account,callback:function(t){e.$set(e.formLogin,"account",t)},expression:"formLogin.account"}})],1),i("el-form-item",{attrs:{prop:"password"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}})],1),i("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.formLogin.loading,type:"primary"},on:{click:function(t){return e.handleSubmit()}}},[e._v(" 登录 ")]),i("div",{staticClass:"actions flex m-t"},[i("div",[i("router-link",{attrs:{to:"/user/loginMobile"}},[e._v(" 使用手机号验证码登录 > ")])],1),i("div",[e._v(" 记住密码 ")])])],1),i("div",{staticClass:"bottom flex space-between flex-alignCenter"},[i("div",{staticClass:"other-login"},[e._v(" 其他登录方式 "),i("span",{staticClass:"m-l-md m-r-md"},[e._v("|")]),i("span",[i("span",{staticClass:"item",on:{click:function(t){e.qrloginShow=!0}}},[i("a",[i("img",{attrs:{src:r("1a82")}})])]),i("span",{staticClass:"item"},[i("a",[i("img",{attrs:{src:r("aa94")}})])])])]),i("div",[i("router-link",{attrs:{to:"/user/resetPassword"}},[e._v(" 忘记密码？ ")])],1)]),i("div",{staticClass:"qrlogin-left"},[i("span",{staticClass:"xyicon xyicon-privacy"}),e._v(" 扫码登录更安全 ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.qrloginShow,expression:"!qrloginShow"}],staticClass:"qrlogin",on:{click:function(t){e.qrloginShow=!0}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.qrloginShow,expression:"qrloginShow"}],staticClass:"qrlogin-modal"},[i("div",{staticClass:"flex space-between m-b"},[i("div",{staticClass:"ts-18"},[e._v(" 登录 ")]),i("div",[i("span",{staticClass:"cursor-pointer text-gray",on:{click:function(t){e.qrloginShow=!1}}},[e._v("账号密码登录")])])]),i("qrlogin",{staticClass:"text-center",attrs:{qrloginShow:e.qrloginShow}})],1)],1)],1)],1)]),i("xy-footer"),i("xy-safety-verify",{ref:"sv",on:{"verify-request":e.handleSubmit},model:{value:e.verifyData,callback:function(t){e.verifyData=t},expression:"verifyData"}})],1)},s=[],a=r("1da1"),n=(r("96cf"),r("9a4d")),o=r("525e"),l={components:{qrlogin:n["a"],"xy-safety-verify":o["a"]},data:function(){return{isDemo:!1,qrloginShow:!1,verifyData:"",formLogin:{rememberLogin:!1,loading:!1,account:"",password:""},ruleLogin:{account:[{required:!0,message:"请填写账号",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}]}}},created:function(){1==this.isDemo&&(this.formLogin.account="jry",this.formLogin.password="Windows9")},methods:{handleSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.formLogin,this.verifyData&&(t._verify=this.verifyData),this.formLogin.loading=!0,r=this,setTimeout((function(){r.formLogin.loading=!1}),5e3),e.next=7,this.util.request({url:"/v1/core/user/login",data:t,method:"post"});case 7:if(i=e.sent,200!=i.code){e.next=17;break}this.$store.commit("user/setToken",i.data.token),this.$store.commit("user/setUserInfo",i.data.userInfo),this.$refs.sv.close(),this.util.showToast({title:i.msg,icon:"success",duration:2e3}),this.verifyData="",this.util.switchTab({url:"/my"}),e.next=23;break;case 17:if(401003!=i.code){e.next=22;break}return this.$refs.sv.open(i.data.verifyList),e.abrupt("return");case 22:this.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 23:this.formLogin.loading=!1;case 24:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},c=l,u=(r("8cbc"),r("2877")),f=Object(u["a"])(c,i,s,!1,null,"2cde41e6",null);t["default"]=f.exports},e894:function(e,t,r){e.exports=r.p+"img/login-left.21328042.png"},ef01:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"send-verify p-l-xs p-r-xs"},[r("el-button",{attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])],1)},s=[],a=r("1da1"),n=(r("96cf"),r("a9e3"),{name:"xySendVerify",props:{noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",r=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(r)):e.label="剩余"+e.timeLeft+"s"}),1e3),i={},i="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},t.next=12,e.util.request({url:e.url,data:i,method:"post"});case 12:s=t.sent,"200"==s.code?(e.util.showToast({title:s.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",s.data)):e.util.showToast({title:s.msg,icon:"loading",duration:2e3});case 14:case"end":return t.stop()}}),t)})))()}}}),o=n,l=r("2877"),c=Object(l["a"])(o,i,s,!1,null,"67467404",null);t["a"]=c.exports}}]);