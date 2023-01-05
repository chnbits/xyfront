import{q as e}from"./qrlogin-6fbaf9e7.js";import{_ as o}from"../../index.js";const l={components:{qrlogin:e},data(){var e,o,l;return{isDemo:!1,qrloginShow:!1,qrloginType:null==(l=null==(o=null==(e=this.$store.state.app.siteInfo)?void 0:e.moduleConfig)?void 0:o.qrlogin)?void 0:l.type,verifyData:"",form:{rememberLogin:!1,loading:!1,countryCode:"+86",moblie:"",verify:"",token:""},ruleLogin:{mobile:[{required:!0,message:"请填写账号",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"},{type:"string",min:6,message:"验证码为6位",trigger:"blur"}]}}},created:function(){},methods:{qrsuccess(){this.$xyutil.switchTab({url:"/"})},onCountrySelect({name:e,iso2:o,dialCode:l}){this.form.countryCode="+"+l},getVerifyToken(e){this.form.token=e.token},handleSubmit:function(){return e=this,o=null,l=function*(){let e=this.form;this.verifyData&&(e._verify=this.verifyData),this.form.loading=!0;let o=this;setTimeout((function(){o.form.loading=!1}),5e3);let l=yield this.$util.request({url:"/v1/reg_mobile/user/login",data:e,method:"post"});if(200==l.code)this.$store.commit("user/setToken",l.data.token),this.$store.commit("user/setUserInfo",l.data.userInfo),this.$refs.sv.close(),this.$util.showToast({title:l.msg,icon:"success",duration:2e3}),this.verifyData="",this.$xyutil.switchTab({url:"/my"});else{if(401003==l.code)return void this.$refs.sv.open(l.data.verifyList);this.$util.showToast({title:l.msg,icon:"loading",duration:3e3})}this.form.loading=!1},new Promise(((t,i)=>{var n=e=>{try{r(l.next(e))}catch(o){i(o)}},s=e=>{try{r(l.throw(e))}catch(o){i(o)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,s);r((l=l.apply(e,o)).next())}));var e,o,l}}},t=window.Vue.resolveComponent,i=window.Vue.createVNode,n=window.Vue.createElementVNode,s=window.Vue.withCtx,r=window.Vue.createTextVNode,a=window.Vue.withKeys,d=window.Vue.vShow,u=window.Vue.withDirectives,c=window.Vue.openBlock,m=window.Vue.createElementBlock,f=window.Vue.pushScopeId,p=window.Vue.popScopeId,y=e=>(f("data-v-c3c1cd73"),e=e(),p(),e),g={id:"wrap",class:"wrap"},v={class:"main"},h=y((()=>n("div",{class:"main-banner hidden-md-and-up"},[n("h1",{class:"title m-t"}," 账号中心 ")],-1))),w={class:"container main-content"},x=["src"],b=y((()=>n("div",{class:"title text-left"}," 手机验证码登录 ",-1))),V={class:"actions flex m-b-sm"},q=y((()=>n("div",null,null,-1))),S={class:"flex flex-alignCenter"},C={class:"actions flex m-t"},k={class:"bottom flex space-between flex-alignCenter"},_={class:"other-login"},T=y((()=>n("span",{class:"m-l-md m-r-md"},"|",-1))),$=[y((()=>n("a",null,[n("i",{class:"xyicon xyicon-wexin"})],-1)))],D=y((()=>n("span",{class:"item"},[n("a",null,[n("i",{class:"xyicon xyicon-qq"})])],-1))),I=y((()=>n("div",{class:"qrlogin-left"},[n("span",{class:"xyicon xyicon-privacy"}),r(" 扫码登录更安全 ")],-1))),L={class:"qrlogin-modal"},U={class:"flex space-between m-b"},N=y((()=>n("div",{class:"ts-18"}," 登录 ",-1)));const P=o(l,[["render",function(e,o,l,f,p,y){const P=t("xy-header"),j=t("el-col"),z=t("router-link"),K=t("xy-country-select"),B=t("el-input"),E=t("el-form-item"),O=t("xy-send-verify"),R=t("el-button"),A=t("el-checkbox"),F=t("el-form"),G=t("qrlogin"),H=t("el-row"),J=t("xy-footer"),M=t("xy-safety-verify");return c(),m("div",g,[i(P),n("div",v,[h,n("div",w,[i(H,{type:"flex",justify:"space-between",align:"middle"},{default:s((()=>[i(j,{xs:1,sm:1,md:8,lg:10,class:"left-box hidden-sm-and-down"},{default:s((()=>[n("img",{src:e.$store.state.app.loginPic,width:"500"},null,8,x)])),_:1}),i(j,{xs:24,sm:{span:12,offset:6},md:{span:13,offset:0},lg:{span:9,offset:0},class:"login-box bg-white"},{default:s((()=>[b,i(F,{ref:"form",model:p.form,rules:p.ruleLogin},{default:s((()=>[n("div",V,[q,n("div",null,[i(z,{to:"/user/register"},{default:s((()=>[r("免费注册>")])),_:1})])]),i(E,{prop:"mobile"},{default:s((()=>[i(B,{size:"large",type:"text",prefix:"ios-person-outline",modelValue:p.form.mobile,"onUpdate:modelValue":o[0]||(o[0]=e=>p.form.mobile=e),placeholder:"请输入您的手机号码"},{prepend:s((()=>[i(K,{defaultCountry:"CN",enabledCountryCode:"",onOnSelect:y.onCountrySelect},null,8,["onOnSelect"])])),_:1},8,["modelValue"])])),_:1}),n("div",S,[i(E,{prop:"verify",class:"flex-1"},{default:s((()=>[i(B,{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:p.form.verify,"onUpdate:modelValue":o[1]||(o[1]=e=>p.form.verify=e),placeholder:"请输入验证码",onKeyup:a(y.handleSubmit,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),i(O,{class:"send-verity-button",onVerifysuccess:y.getVerifyToken,url:"/v1/sms/verify/send",type:"手机号",account:p.form.mobile,title:"用户登录"},null,8,["onVerifysuccess","account"])]),i(R,{class:"full submit-btn",size:"large",loading:p.form.loading,type:"primary",onClick:y.handleSubmit},{default:s((()=>[r(" 登录 ")])),_:1},8,["loading","onClick"]),n("div",C,[n("div",null,[i(z,{to:"/user/login"},{default:s((()=>[r(" 使用邮箱地址或手机号登录 > ")])),_:1})]),n("div",null,[i(A,{modelValue:p.form.rememberLogin,"onUpdate:modelValue":o[2]||(o[2]=e=>p.form.rememberLogin=e)},{default:s((()=>[r("记住密码")])),_:1},8,["modelValue"])])])])),_:1},8,["model","rules"]),n("div",k,[n("div",_,[r(" 其他登录方式 "),T,n("span",null,[n("span",{class:"item",onClick:o[3]||(o[3]=e=>{p.qrloginShow=!0})},$),D])]),n("div",null,[i(z,{to:"/user/resetPassword"},{default:s((()=>[r(" 忘记密码？ ")])),_:1})])]),I,u(n("div",{class:"qrlogin",onClick:o[4]||(o[4]=e=>{p.qrloginShow=!0})},null,512),[[d,!p.qrloginShow]]),u(n("div",L,[n("div",U,[N,n("div",null,[n("span",{onClick:o[5]||(o[5]=e=>{p.qrloginShow=!1}),class:"cursor-pointer text-gray"},"账号密码登录")])]),i(G,{class:"text-center",qrloginShow:p.qrloginShow,type:p.qrloginType,onSuccess:y.qrsuccess},null,8,["qrloginShow","type","onSuccess"])],512),[[d,p.qrloginShow]])])),_:1})])),_:1})])]),i(J),i(M,{modelValue:p.verifyData,"onUpdate:modelValue":o[6]||(o[6]=e=>p.verifyData=e),onVerifyRequest:y.handleSubmit,ref:"sv"},null,8,["modelValue","onVerifyRequest"])])}],["__scopeId","data-v-c3c1cd73"]]);export{P as default};
