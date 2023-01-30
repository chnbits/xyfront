var e=(e,t,o)=>new Promise(((l,s)=>{var i=e=>{try{r(o.next(e))}catch(t){s(t)}},a=e=>{try{r(o.throw(e))}catch(t){s(t)}},r=e=>e.done?l(e.value):Promise.resolve(e.value).then(i,a);r((o=o.apply(e,t)).next())}));import{_ as t}from"../../index.js";const o={data:()=>({show:"choose",form:{type:"",code:"",redirect:"",bindType:"",account:"",password:"",verify:"",token:""},rule:{account:[{required:!0,message:"请填写账号",trigger:"blur"}]}}),created:function(){let e=this.$xyutil.getUrlQuery();this.form.type=this.$route.params.type,this.form.code=e.code,this.form.redirect=window.location.protocol+"//"+window.location.host+"/third_login/user/callback/"+this.form.type,this.handleCallback()},methods:{getVerifyToken(e){this.form.token=e},handleCallback(){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let t=yield this.$util.request({url:"/v1/third_login/user/callback",data:this.form,method:"post"});"200"==t.code?(this.$store.commit("user/setToken",t.data.token),this.$store.commit("user/setUserInfo",t.data.userInfo),this.$util.showToast({title:t.msg,icon:"success",duration:2e3}),this.$xyutil.navigateTo("/")):this.show="choose",this.loading=!1}))},handleRegister(){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let t=yield this.$util.request({url:"/v1/third_login/user/register",data:this.form,method:"post"});"200"==t.code?(this.$store.commit("user/setToken",t.data.token),this.$store.commit("user/setUserInfo",t.data.userInfo),this.$util.showToast({title:t.msg,icon:"success",duration:2e3}),this.$xyutil.navigateTo("/my")):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3}),this.loading=!1}))},handleBind(t){return e(this,null,(function*(){this.form.bindType=t,this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let o=yield this.$util.request({url:"/v1/third_login/user/bind",data:this.form,method:"post"});"200"==o.code?(this.$store.commit("user/setToken",o.data.token),this.$store.commit("user/setUserInfo",o.data.userInfo),this.$util.showToast({title:o.msg,icon:"success",duration:2e3}),this.$xyutil.navigateTo("/my")):this.$util.showToast({title:o.msg,icon:"loading",duration:3e3}),this.loading=!1}))}}},l=window.Vue.resolveComponent,s=window.Vue.createVNode,i=window.Vue.createElementVNode,a=window.Vue.withCtx,r=window.Vue.toDisplayString,n=window.Vue.createTextVNode,d=window.Vue.resolveDirective,u=window.Vue.openBlock,c=window.Vue.createElementBlock,m=window.Vue.withDirectives,f=window.Vue.createBlock,h=window.Vue.createCommentVNode,p=window.Vue.pushScopeId,w=window.Vue.popScopeId,g=e=>(p("data-v-6c2cf8f3"),e=e(),w(),e),y={id:"wrap",class:"wrap"},x={class:"main"},v={class:"container",style:{"padding-top":"100px","padding-bottom":"80px"}},V=["src"],b={class:"success-box text-center"},k=g((()=>i("h4",{class:"title"}," 用户登录 ",-1))),_=g((()=>i("div",{class:"bottom flex space-between flex-alignCenter"},null,-1))),$=g((()=>i("div",{class:"title"}," 用户绑定并登录 ",-1))),T={class:"subtitle"},C={class:"flex flex-alignCenter"},I={class:"actions flex m-t"},z=g((()=>i("div",{class:"title"}," 用户绑定并登录 ",-1))),U={class:"actions flex m-t"};const B=t(o,[["render",function(e,t,o,p,w,g){const B=l("xy-header"),P=l("el-col"),q=l("el-button"),N=l("router-link"),D=l("el-input"),S=l("el-form-item"),j=l("xy-send-verify"),E=l("el-form"),R=l("el-row"),Q=l("xy-footer"),A=d("loading");return u(),c("div",y,[s(B),i("div",x,[i("div",v,[s(R,{type:"flex",justify:"space-between",align:"middle"},{default:a((()=>[s(P,{xs:1,sm:1,md:14,lg:14,class:"left-box"},{default:a((()=>[i("img",{src:e.$store.state.app.loginPic,width:"500"},null,8,V)])),_:1}),"choose"==w.show?(u(),f(P,{key:0,xs:22,sm:12,md:10,lg:10,class:"login-box bg-white"},{default:a((()=>[m((u(),c("div",b,[k,i("p",null," 您的"+r(w.form.type)+"未绑定"+r(e.$store.state.app.siteInfo.title)+"账户，请绑定后完成登录 ",1),s(q,{class:"full cert",size:"large",type:"primary",onClick:t[0]||(t[0]=e=>{w.show="mobileVerify"})},{default:a((()=>[n(" 绑定已有账户 ")])),_:1}),s(q,{class:"full skip",size:"large",onClick:t[1]||(t[1]=e=>g.handleRegister())},{default:a((()=>[n(" 创建新账户 ")])),_:1})])),[[A,e.loading]]),_])),_:1})):h("",!0),"mobileVerify"==w.show?(u(),f(P,{key:1,xs:22,sm:12,md:10,lg:10,class:"login-box bg-white"},{default:a((()=>[$,i("div",T,[n(" 还没有注册吗？ "),s(N,{to:"/user/register"},{default:a((()=>[n(" 请点击这里 ")])),_:1})]),s(E,{ref:"form",model:w.form,rules:w.rule},{default:a((()=>[s(S,{prop:"account"},{default:a((()=>[s(D,{size:"large",type:"text",prefix:"ios-person-outline",modelValue:w.form.account,"onUpdate:modelValue":t[2]||(t[2]=e=>w.form.account=e),placeholder:"请输入您的手机号码"},null,8,["modelValue"])])),_:1}),i("div",C,[s(S,{prop:"verify",class:"flex-1"},{default:a((()=>[s(D,{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:w.form.verify,"onUpdate:modelValue":t[3]||(t[3]=e=>w.form.verify=e),placeholder:"请输入验证码"},null,8,["modelValue"])])),_:1}),s(j,{class:"send-verity-button",slot1:"append",onVerifysuccess:g.getVerifyToken,url:"/v1/sms/verify/send",type:"手机号",account:w.form.account,title:"用户登录"},null,8,["onVerifysuccess","account"])]),s(q,{class:"full submit-btn",size:"large",loading:w.form.loading,type:"primary",onClick:t[4]||(t[4]=e=>g.handleBind("mobildVerify"))},{default:a((()=>[n(" 绑定 ")])),_:1},8,["loading"]),i("div",I,[i("div",{onClick:t[5]||(t[5]=e=>w.show="password")}," 使用账号密码绑定 "),i("div",null,[s(N,{to:"/user/resetPassword"},{default:a((()=>[n(" 忘记密码？ ")])),_:1})])])])),_:1},8,["model","rules"]),i("div",{class:"bottom flex space-between flex-alignCenter",onClick:t[6]||(t[6]=e=>{w.show="choose"})})])),_:1})):h("",!0),"password"==w.show?(u(),f(P,{key:2,xs:22,sm:12,md:10,lg:10,class:"login-box bg-white"},{default:a((()=>[z,s(E,{ref:"form",model:w.form,rules:w.rule},{default:a((()=>[s(S,{prop:"account"},{default:a((()=>[s(D,{size:"large",type:"text",prefix:"ios-person-outline",modelValue:w.form.account,"onUpdate:modelValue":t[7]||(t[7]=e=>w.form.account=e),placeholder:"请输入您的邮箱地址或手机号码"},null,8,["modelValue"])])),_:1}),s(S,{prop:"password"},{default:a((()=>[s(D,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:w.form.password,"onUpdate:modelValue":t[8]||(t[8]=e=>w.form.password=e),placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),s(q,{class:"full submit-btn",size:"large",loading:w.form.loading,type:"primary",onClick:t[9]||(t[9]=e=>g.handleBind("password"))},{default:a((()=>[n(" 绑定 ")])),_:1},8,["loading"]),i("div",U,[i("div",{onClick:t[10]||(t[10]=e=>w.show="mobileVerify")}," 使用手机验证码绑定 "),i("div",null,[s(N,{to:"/reg_mobile/user/resetPassword"},{default:a((()=>[n(" 忘记密码？ ")])),_:1})])])])),_:1},8,["model","rules"]),i("div",{class:"bottom flex space-between flex-alignCenter",onClick:t[11]||(t[11]=e=>{w.show="choose"})})])),_:1})):h("",!0)])),_:1})])]),s(Q)])}],["__scopeId","data-v-6c2cf8f3"]]);export{B as default};