import{_ as h}from"../index-726dc959.js";const x={data(){return{loading:!1,form:{email:"",newPassword:"",rePassword:"",token:""},rule:{email:[{required:!0,message:"\u8BF7\u586B\u5199\u90AE\u7BB1",trigger:"blur"}],newPassword:[{required:!0,message:"\u8BF7\u586B\u5199\u65B0\u5BC6\u7801",trigger:"blur"},{type:"string",min:6,message:"\u5BC6\u7801\u81F3\u5C116\u4F4D",trigger:"blur"}],rePassword:[{required:!0,message:"\u8BF7\u91CD\u590D\u8F93\u5165\u65B0\u5BC6\u7801",trigger:"blur"},{type:"string",min:6,message:"\u5BC6\u7801\u81F3\u5C116\u4F4D",trigger:"blur"}],token:[{required:!0,message:"\u8BF7\u53D1\u9001\u9A8C\u8BC1\u7801",trigger:"blur"}]}}},created:function(){let l=this.$xyutil.getUrlQuery();this.form.email=decodeURIComponent(l.email),this.form.token=decodeURIComponent(l.token)},methods:{getVerifyToken(l){this.form.token=l.token},async handleSubmit(){this.loading=!0;let l=this;setTimeout(function(){l.loading=!1},5e3);let e=await this.$util.request({url:"/v1/reg_email/user/restPasswordByLink",data:this.form,method:"put"});e.code=="200"?(this.$util.showToast({title:e.msg,icon:"success",duration:2e3}),this.$xyutil.navigateTo("/user/login")):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1}}},s=window.Vue.resolveComponent,o=window.Vue.createVNode,i=window.Vue.createElementVNode,n=window.Vue.withCtx,y=window.Vue.createTextVNode,V=window.Vue.openBlock,b=window.Vue.createElementBlock,k={id:"wrap",class:"wrap"},P={class:"main"},v=i("div",{class:"main-banner hidden-md-and-up"},[i("h1",{class:"title m-t"}," \u8D26\u53F7\u4E2D\u5FC3 ")],-1),C={class:"container main-content"},T=["src"],q=i("div",{class:"title"}," \u90AE\u7BB1\u91CD\u7F6E\u5BC6\u7801 ",-1),B=y(" \u7ACB\u5373\u91CD\u7F6E ");function N(l,e,U,z,t,m){const c=s("xy-header"),u=s("el-col"),a=s("el-input"),d=s("el-form-item"),p=s("el-button"),_=s("xy-captcha"),f=s("el-form"),g=s("el-row"),w=s("xy-footer");return V(),b("div",k,[o(c),i("div",P,[v,i("div",C,[o(g,{type:"flex",justify:"space-between",align:"middle"},{default:n(()=>[o(u,{xs:1,sm:1,md:8,lg:10,class:"left-box hidden-sm-and-down"},{default:n(()=>[i("img",{src:l.$store.state.app.loginPic,width:"500"},null,8,T)]),_:1}),o(u,{xs:24,sm:{span:12,offset:6},md:{span:13,offset:0},lg:{span:9,offset:0},class:"login-box bg-white"},{default:n(()=>[q,o(f,{ref:"form",model:t.form,rules:t.rule},{default:n(()=>[o(d,{prop:"email"},{default:n(()=>[o(a,{size:"large",type:"text",disabled:!0,prefix:"ios-at-outline",modelValue:t.form.email,"onUpdate:modelValue":e[0]||(e[0]=r=>t.form.email=r),placeholder:"\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),o(d,{prop:"newPassword"},{default:n(()=>[o(a,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:t.form.newPassword,"onUpdate:modelValue":e[1]||(e[1]=r=>t.form.newPassword=r),placeholder:"\u8F93\u5165\u65B0\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),o(d,{prop:"rePassword"},{default:n(()=>[o(a,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:t.form.rePassword,"onUpdate:modelValue":e[2]||(e[2]=r=>t.form.rePassword=r),placeholder:"\u91CD\u590D\u8F93\u5165\u65B0\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),o(_,{onSuccess:e[4]||(e[4]=r=>m.handleSubmit("form"))},{default:n(()=>[o(p,{id:"Captcha",class:"full submit-btn",size:"large",loading:t.loading,type:"primary",onClick:e[3]||(e[3]=r=>m.handleSubmit("form"))},{default:n(()=>[B]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})])]),o(w)])}var S=h(x,[["render",N]]);export{S as default};
