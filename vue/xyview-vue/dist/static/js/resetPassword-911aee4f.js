import{_ as e}from"../../index.js";const o={data:()=>({isDemo:!1,formLogin:{loading:!1,account:""},ruleLogin:{account:[{required:!0,message:"请填写账号",trigger:"blur"}]}}),created:function(){},methods:{handleSubmit:function(){return e=this,o=null,t=function*(){this.formLogin.loading=!0;let e=this;setTimeout((function(){e.formLogin.loading=!1}),5e3);let o=yield this.$util.request({url:"/v1/user/user/checkAccount",data:this.formLogin,method:"get"});200==o.code?this.$xyutil.navigateTo({path:o.data.url,query:{account:this.formLogin.account}}):this.$util.showToast({title:o.msg,icon:"loading",duration:3e3}),this.formLogin.loading=!1},new Promise(((n,i)=>{var l=e=>{try{r(t.next(e))}catch(o){i(o)}},a=e=>{try{r(t.throw(e))}catch(o){i(o)}},r=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,a);r((t=t.apply(e,o)).next())}));var e,o,t}}},t=window.Vue.resolveComponent,n=window.Vue.createVNode,i=window.Vue.createElementVNode,l=window.Vue.withCtx,a=window.Vue.createTextVNode,r=window.Vue.openBlock,s=window.Vue.createElementBlock,d={id:"wrap",class:"wrap"},u={class:"main"},c={class:"container main-content"},m=["src"],f=i("div",{class:"title"}," 重置登录密码 ",-1),g=i("div",{class:"tip text-center"}," 为了您的资金安全，修改安全设置后，24小时内不允许交易、提现和资金划转 ",-1);const p=e(o,[["render",function(e,o,p,h,w,x){const L=t("xy-header"),v=t("el-col"),y=t("el-input"),V=t("el-form-item"),b=t("el-button"),_=t("el-form"),k=t("el-row"),T=t("xy-footer");return r(),s("div",d,[n(L),i("div",u,[i("div",c,[n(k,{type:"flex",justify:"space-between",align:"middle"},{default:l((()=>[n(v,{xs:1,sm:1,md:8,lg:10,class:"left-box hidden-sm-and-down"},{default:l((()=>[i("img",{src:e.$store.state.app.loginPic,width:"500"},null,8,m)])),_:1}),n(v,{xs:24,sm:{span:12,offset:6},md:{span:13,offset:0},lg:{span:9,offset:0},class:"login-box bg-white"},{default:l((()=>[f,g,n(_,{ref:"formLogin",model:w.formLogin,rules:w.ruleLogin},{default:l((()=>[n(V,{prop:"account"},{default:l((()=>[n(y,{size:"large",type:"text",prefix:"ios-person-outline",modelValue:w.formLogin.account,"onUpdate:modelValue":o[0]||(o[0]=e=>w.formLogin.account=e),placeholder:"请输入邮箱或手机号"},null,8,["modelValue"])])),_:1}),n(b,{class:"full submit-btn",size:"large",loading:w.formLogin.loading,type:"primary",onClick:o[1]||(o[1]=e=>x.handleSubmit("formLogin"))},{default:l((()=>[a(" 确定 ")])),_:1},8,["loading"])])),_:1},8,["model","rules"])])),_:1})])),_:1})])]),n(T)])}]]);export{p as default};
