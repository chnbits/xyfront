(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-116e8915","chunk-2d2176a6"],{"147d":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.loadedScript?i("qrcode",{attrs:{value:e.value,options:e.options}}):e._e()},n=[],a=i("1da1"),s=(i("96cf"),i("b0c0"),i("d3b7"),{name:"xyQrcode",props:{value:{type:[String],default:""},options:{type:Object,default:function(){return{width:118,margin:1}}}},data:function(){return{loadedScript:!1}},created:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadScript();case 2:Vue.component(VueQrcode.name,VueQrcode),this.loadedScript=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{loadScript:function(){var e=this;return new Promise((function(t,i){e.VueScript2.load("https://cdn.jsdelivr.net/gh/fengyuanchen/vue-qrcode/dist/vue-qrcode.min.js").then((function(){t()}))}))}}}),o=s,l=i("2877"),c=Object(l["a"])(o,r,n,!1,null,"b935c9c2",null);t["a"]=c.exports},"160b":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"send-verify p-l-xs p-r-xs lh-1",attrs:{type:"text"},on:{click:e.sendVerify}},[e._v(e._s(e.label))])},n=[],a=i("1da1"),s=(i("96cf"),i("a9e3"),{name:"xySendVerify",props:{verifyUser:{type:Number,default:0},noNeedAccount:{type:Boolean,default:!1},account:{type:String,default:""},title:{type:String,default:""},url:{type:String,default:"/v1/sms/verify/send"},type:{type:String,default:"手机号"},time:{type:Number,default:30}},data:function(){return{label:"发送验证码",timeLeft:0}},created:function(){},methods:{sendVerify:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.timeLeft>0)){t.next=2;break}return t.abrupt("return");case 2:if(e.account||e.noNeedAccount){t.next=5;break}return e.util.showToast({title:"请输入"+e.type,icon:"loading",duration:1e3}),t.abrupt("return",!1);case 5:return e.timeLeft=e.time,e.label="剩余"+e.timeLeft+"s",i=setInterval((function(){e.timeLeft--,e.timeLeft<=0?(e.label="发送验证码",e.timeLeft=0,clearInterval(i)):e.label="剩余"+e.timeLeft+"s"}),1e3),r={},r="手机号"==e.type?{mobile:e.account,title:e.title}:{email:e.account,title:e.title},r.verifyUser=e.verifyUser,t.next=13,e.util.request({url:e.url,data:r,method:"post"});case 13:n=t.sent,"200"==n.code?(e.util.showToast({title:n.msg,icon:"success",duration:1e3}),e.$emit("verifysuccess",n.data)):e.util.showToast({title:n.msg,icon:"loading",duration:2e3});case 15:case"end":return t.stop()}}),t)})))()}}}),o=s,l=i("2877"),c=Object(l["a"])(o,r,n,!1,null,"582a9f33",null);t["a"]=c.exports},"5bac":function(e,t,i){},6806:function(e,t,i){},"7db0":function(e,t,i){"use strict";var r=i("23e7"),n=i("b727").find,a=i("44d2"),s="find",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a(s)},"9a4d":function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"qr-box",on:{click:e.loadData}},[e.qrurl?i("div",["wxapp"==e.type?i("xy-qrcode",{staticClass:"qrcode",style:{opacity:e.timeout?.3:1},attrs:{value:e.qrurl,options:{width:e.width}}}):"wxmp"==e.type?i("img",{attrs:{width:e.width,src:e.qrurl}}):e._e(),e.timeout?i("span",{staticClass:"xyicon xyicon-history"}):e._e()],1):i("div",{staticClass:"no-qr",style:{width:this.width+"px",height:this.width+"px",background:this.bgColor}}),i("div",{staticClass:"tip m-t text-666"},[e._v(e._s(e.tip))])])},n=[],a=i("1da1"),s=(i("96cf"),i("a9e3"),i("147d")),o={components:{"xy-qrcode":s["a"]},props:{qrloginShow:!1,type:"",tip:{type:String,default:"使用微信扫一扫"},width:{type:Number,default:200},bgColor:{type:String,default:"#eee"}},data:function(){return{seed:"",qrurl:"",timer:null,timeout:!1}},mounted:function(){this.qrloginShow&&this.loadData()},watch:{qrloginShow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e){i.next=6;break}return i.next=3,t.loadData();case 3:t.qrurl&&(t.timer=setInterval(t.getLogin,2e3)),i.next=7;break;case 6:clearInterval(t.timer);case 7:case"end":return i.stop()}}),i)})))()}},beforeDestroy:function(){clearInterval(this.timer)},methods:{loadData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/qrlogin/qrlogin/getSeed",data:{type:e.type},method:"get"});case 2:i=t.sent,200==i.code?(e.seed=i.data.seed,e.qrurl=i.data.qrurl,e.timeout=!1,clearInterval(e.timer),e.timer=setInterval(e.getLogin,2e3)):e.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()},getLogin:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/qrlogin/qrlogin/getLogin?seed="+e.seed,method:"get"});case 2:i=t.sent,200==i.code&&(i.data.timeout?(e.timeout=!0,clearInterval(e.timer)):(clearInterval(e.timer),i.data.userInfo?(i.data.token&&e.$store.commit("user/setToken",i.data.token),e.$store.commit("user/setUserInfo",i.data.userInfo),e.util.showToast({title:i.msg,icon:"success",duration:2e3}),e.$emit("success")):e.$router.push({path:"/qrlogin/login",query:{seed:e.seed,type:e.type}})));case 4:case"end":return t.stop()}}),t)})))()}}},l=o,c=(i("cfa0"),i("2877")),u=Object(c["a"])(l,r,n,!1,null,"77a2a83d",null);t["a"]=u.exports},a434:function(e,t,i){"use strict";var r=i("23e7"),n=i("23cb"),a=i("a691"),s=i("50c4"),o=i("7b0b"),l=i("65f0"),c=i("8418"),u=i("1dde"),d=u("splice"),f=Math.max,p=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var i,r,u,d,h,y,v=o(this),b=s(v.length),w=n(e,b),x=arguments.length;if(0===x?i=r=0:1===x?(i=0,r=b-w):(i=x-2,r=p(f(a(t),0),b-w)),b+i-r>m)throw TypeError(g);for(u=l(v,r),d=0;d<r;d++)h=w+d,h in v&&c(u,d,v[h]);if(u.length=r,i<r){for(d=w;d<b-r;d++)h=d+r,y=d+i,h in v?v[y]=v[h]:delete v[y];for(d=b;d>b-r+i;d--)delete v[d-1]}else if(i>r)for(d=b-r;d>w;d--)h=d+r-1,y=d+i-1,h in v?v[y]=v[h]:delete v[y];for(d=0;d<i;d++)v[d+w]=arguments[d+2];return v.length=b-r+i,u}})},bc88:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"flex space-between"},[0==e.manage?i("div",[e.loginTypes.indexOf("qq")>=0?i("i",{staticClass:"xyicon xyicon-qq ts-30 m-r",staticStyle:{color:"rgb(18, 150, 219)"}}):e._e(),e.loginTypes.indexOf("wxmp")>=0?i("i",{staticClass:"xyicon xyicon-weixin ts-30",staticStyle:{color:"rgb(100, 174, 67)"}}):e._e()]):i("div",{staticClass:"flex-1"},[e.loginTypes.indexOf("qq")>=0?i("div",{staticClass:"flex space-between flex-alignCenter m-b"},[i("i",{staticClass:"xyicon xyicon-qq ts-30 m-r",staticStyle:{color:"rgb(18, 150, 219)"}}),i("div",{staticStyle:{width:"80px"}},[e._v("QQ")]),e.hasBind("qq")?i("div",{staticClass:"flex-1 text-gray"},[e._v("已绑定")]):i("div",{staticClass:"flex-1 text-gray"},[e._v("未绑定")]),i("div",[e.hasBind("qq")?i("el-button",{attrs:{size:"medium",type:""},on:{click:function(t){e.unBind(e.hasBindIndex("qq"))}}},[e._v("解绑")]):i("el-button",{staticClass:"primary-linear",attrs:{size:"medium",type:"primary"},on:{click:function(t){return e.showDialog("qq")}}},[e._v("绑定")])],1)]):e._e(),e.loginTypes.indexOf("wxmp")>=0?i("div",{staticClass:"flex space-between flex-alignCenter m-b"},[i("i",{staticClass:"xyicon xyicon-weixin ts-30 m-r",staticStyle:{color:"rgb(100, 174, 67)"}}),i("div",{staticStyle:{width:"80px"}},[e._v("微信")]),e.hasBind("wxmp")?i("div",{staticClass:"flex-1 text-gray"},[e._v("已绑定")]):i("div",{staticClass:"flex-1 text-gray"},[e._v("未绑定")]),i("div",[e.hasBind("wxmp")?i("el-button",{attrs:{size:"medium",type:""},on:{click:function(t){e.unBind(e.hasBindIndex("wxmp"))}}},[e._v("解绑")]):i("el-button",{staticClass:"primary-linear",attrs:{size:"medium",type:"primary"},on:{click:function(t){return e.showDialog("wx")}}},[e._v("绑定")])],1)]):e._e()]),i("div",{staticClass:"actions"},[e.manage?e._e():i("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){e.manage=!e.manage}}},[e._v("管理")])],1)]),i("el-dialog",{attrs:{title:"绑定",visible:e.bindDialog,width:"440px"},on:{"update:visible":function(t){e.bindDialog=t}}},[i("div",{staticClass:"m-b-md"},[i("h4",[e._v("绑定第三方账号前请输入您的账号密码以完成验证：")]),i("div",{staticClass:"flex space-between flex-alignCenter"},[i("el-input",{staticStyle:{width:"234px","box-sizing":"border-box"},attrs:{size:"mini",placeholder:"请输入您的"+e.$store.state.app.siteInfo.title+"账户密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e.verifyState?i("div",{staticClass:"ts-12 text-primary"},[e._v("验证成功")]):e._e()],1)]),"wx"==e.bindWhich?[e.qrloginShow?i("qrlogin",{staticClass:"text-center",attrs:{qrloginShow:e.qrloginShow,tip:"请使用微信扫描二维码完成绑定",width:168,bgColor:"#05B9CF",type:"wxmp"},on:{success:e.qrsuccess}}):e._e()]:e._e(),e.verifyState?e._e():i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"mini"},on:{click:function(t){e.bindDialog=!1}}},[e._v("取消")]),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.doVerifyPassword()}}},[e._v("绑定")])],1)],2)],1)},n=[],a=i("1da1"),s=(i("96cf"),i("7db0"),i("c740"),i("a434"),i("9a4d")),o=i("c43b"),l={props:{redirectBase:"",isPage:!1},components:{qrlogin:s["a"],"xy-safety-verify":o["a"]},data:function(){return{manage:!1,loading:!1,loginTypes:["qq","weixin"],myBindList:[],bindDialog:!1,bindWhich:"",verifyState:!1,qrloginShow:!1,password:"",form:{bindType:"login",type:"",code:"",redirect:""}}},created:function(){if($store.state.app.siteInfo.versionFuncsAll.indexOf("third_login")>=0){this.loadData();var e=this.util.getUrlQuery();if(e["code"]){if(this.form.type=this.$route.params.type,!this.form.type)return void alert("type获取不到值");this.form.code=e["code"],this.handleBind()}}},computed:{},methods:{hasBind:function(e){var t=this.myBindList.find((function(t){return t.bindType==e}));return t},hasBindIndex:function(e){var t=this.myBindList.findIndex((function(t){return t.bindType==e}));return t},doVerifyPassword:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/reg_username/user/verifyPassword",data:{password:e.password},method:"post"});case 5:return r=t.sent,"200"==r.code?(e.util.showToast({title:r.msg,icon:"success",duration:2e3}),e.verifyState=!0,"wx"==e.bindWhich?e.qrloginShow=!0:e.getAuthUrl(e.bindWhich)):e.util.showToast({title:r.msg,icon:"loading",duration:3e3}),e.loading=!1,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))()},showDialog:function(e){this.bindDialog=!0,this.bindWhich=e},qrsuccess:function(){this.qrloginShow=!1},getAuthUrl:function(e){window.location.href=this.util.baseDomain()+"/third_login/user/authorization.html?type="+e+"&redirect="+this.getRedirectUrl(e)},getRedirectUrl:function(e){return this.redirectBase?this.redirectBase=e:window.location.protocol+"//"+window.location.host+this.$route.path+"/"+e},handleBind:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.form.redirect=e.getRedirectUrl(e.form.type),e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),t.next=6,e.util.request({url:"/v1/third_login/user/bind",data:e.form,method:"post"});case 6:r=t.sent,"200"==r.code?(e.$store.commit("user/setUserInfo",r.data.userInfo),e.util.showToast({title:r.msg,icon:"success",duration:2e3}),e.isPage?e.$router.push({name:"/my"}):e.$emit("success")):e.util.showToast({title:r.msg,icon:"loading",duration:3e3}),e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},unBind:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var r,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.loading=!0,r=t,setTimeout((function(){r.loading=!1}),5e3),i.next=5,t.util.request({url:"/v1/third_login/user/unbind",data:{id:t.myBindList[e].id},method:"delete"});case 5:n=i.sent,"200"==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:2e3}),t.myBindList=t.myBindList.splice(e,1)):t.util.showToast({title:n.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return i.stop()}}),i)})))()},loadData:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/third_login/user/my",method:"get"});case 5:r=t.sent,"200"==r.code?(e.myBindList=r.data.loginTypes,e.loginTypes=r.data.loginTypes):e.util.showToast({title:r.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}}},c=l,u=(i("f60d"),i("2877")),d=Object(u["a"])(c,r,n,!1,null,"4b32ce17",null);t["default"]=d.exports},c43b:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{"append-to-body":"",title:"安全验证",visible:e.dialogVisible,width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.eclose}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rule}},[e.verifyList.indexOf("email")>=0?i("el-form-item",{attrs:{label:"邮箱验证码",prop:"emailVerify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入邮箱验证码"},model:{value:e.form.emailVerify,callback:function(t){e.$set(e.form,"emailVerify",t)},expression:"form.emailVerify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("mobile")>=0?i("el-form-item",{attrs:{label:"手机验证码",prop:"mobileVerify"}},[i("el-input",{attrs:{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",placeholder:"请输入手机验证码"},model:{value:e.form.mobileVerify,callback:function(t){e.$set(e.form,"mobileVerify",t)},expression:"form.mobileVerify"}},[i("XySendVerify",{attrs:{slot:"append",url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"安全验证"},on:{verifysuccess:e.getMobileVerifyToken},slot:"append"})],1)],1):e._e(),e.verifyList.indexOf("gauth")>=0?i("el-form-item",{attrs:{label:"谷歌验证码",prop:"gauth"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入谷歌验证码"},model:{value:e.form.gauth,callback:function(t){e.$set(e.form,"gauth",t)},expression:"form.gauth"}})],1):e._e(),e.verifyList.indexOf("paypwd")>=0?i("el-form-item",{attrs:{label:"支付密码",prop:"paypwd"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入6-18位支付密码"},model:{value:e.form.paypwd,callback:function(t){e.$set(e.form,"paypwd",t)},expression:"form.paypwd"}})],1):e._e(),e.verifyList.indexOf("password")>=0?i("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[i("el-input",{attrs:{size:"large",type:"password",prefix:"ios-lock-outline",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),i("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:function(t){return e.handleSubmit("form")}}},[e._v(" 确认 ")])],1)],1)},n=[],a=i("1da1"),s=(i("96cf"),i("160b")),o={name:"xySafetyVerify",components:{XySendVerify:s["a"]},props:{value:{type:[String,Object],default:""}},data:function(){return{dialogVisible:!1,verifyList:[],loading:!1,form:{paypwd:"",password:"",emailVerify:"",emailToken:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{}}},created:function(){},methods:{getVerifyToken:function(e){this.form.emailToken=e.token},getMobileVerifyToken:function(e){this.form.mobileToken=e.token},open:function(e){this.verifyList=e,this.getRule(),this.dialogVisible=!0},eclose:function(){this.$emit("cancel")},close:function(){this.dialogVisible=!1},handleSubmit:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),e.$emit("input",e.form),e.$emit("verify-request"),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},getRule:function(){for(var e in this.verifyList)switch(this.verifyList[e]){case"email":this.rule.email=[{required:!0,message:"请填写邮箱验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"mobile":this.rule.mobile=[{required:!0,message:"请填写手机验证码",trigger:"blur"},{type:"string",min:6,message:"至少6位",trigger:"blur"}];break;case"gauth":this.rule.gauth=[{required:!0,message:"请填写谷歌验证码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"paypwd":this.rule.paypwd=[{required:!0,message:"请填写支付密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;case"password":this.rule.password=[{required:!0,message:"请填写登录密码",trigger:"blur"},{type:"string",min:6,message:"密码至少6位",trigger:"blur"}];break;default:break}}}},l=o,c=i("2877"),u=Object(c["a"])(l,r,n,!1,null,"6974692a",null);t["a"]=u.exports},c740:function(e,t,i){"use strict";var r=i("23e7"),n=i("b727").findIndex,a=i("44d2"),s="findIndex",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a(s)},cfa0:function(e,t,i){"use strict";i("5bac")},f60d:function(e,t,i){"use strict";i("6806")}}]);