import{a as h}from"../index-91ea30ae.js";const y={data(){return{loading:!1,form:{email:"",newPassword:"",verify:"",token:""},rule:{email:[{required:!0,message:"\u8BF7\u586B\u5199\u90AE\u7BB1",trigger:"blur"}],newPassword:[{required:!0,message:"\u8BF7\u586B\u5199\u65B0\u5BC6\u7801",trigger:"blur"},{type:"string",min:6,message:"\u5BC6\u7801\u81F3\u5C116\u4F4D",trigger:"blur"}],verify:[{required:!0,message:"\u8BF7\u586B\u5199\u9A8C\u8BC1\u7801",trigger:"blur"}],token:[{required:!0,message:"\u8BF7\u53D1\u9001\u9A8C\u8BC1\u7801",trigger:"blur"}]}}},created:function(){this.$route.query.account&&(this.form.email=this.$route.query.account)},methods:{getVerifyToken(i){this.form.token=i.token},async handleSubmit(){this.loading=!0;let i=this;setTimeout(function(){i.loading=!1},5e3);let o=await this.$util.request({url:"/v1/reg_email/user/restPassword",data:this.form,method:"put"});o.code=="200"?(this.$util.showToast({title:o.msg,icon:"success",duration:2e3}),this.$xyutil.switchTab({url:"/user/login"})):this.$util.showToast({title:o.msg,icon:"loading",duration:3e3}),this.loading=!1}}},s=window.Vue.resolveComponent,e=window.Vue.createVNode,r=window.Vue.createElementVNode,l=window.Vue.withCtx,V=window.Vue.createTextVNode,x=window.Vue.openBlock,v=window.Vue.createElementBlock,b={id:"wrap",class:"wrap"},k={class:"main"},P=r("div",{class:"main-banner hidden-md-and-up"},[r("h1",{class:"title m-t"}," \u8D26\u53F7\u4E2D\u5FC3 ")],-1),T={class:"container main-content"},q=["src"],N=r("div",{class:"title m-b-lg"}," \u90AE\u7BB1\u91CD\u7F6E\u5BC6\u7801 ",-1),C=V(" \u7ACB\u5373\u91CD\u7F6E ");function z(i,o,B,E,t,u){const c=s("xy-header"),m=s("el-col"),a=s("el-input"),d=s("el-form-item"),f=s("xy-send-verify"),_=s("el-button"),p=s("el-form"),g=s("el-row"),w=s("xy-footer");return x(),v("div",b,[e(c),r("div",k,[P,r("div",T,[e(g,{type:"flex",justify:"space-between",align:"middle"},{default:l(()=>[e(m,{xs:1,sm:1,md:8,lg:10,class:"left-box hidden-sm-and-down"},{default:l(()=>[r("img",{src:i.$store.state.app.loginPic,width:"500"},null,8,q)]),_:1}),e(m,{xs:24,sm:{span:12,offset:6},md:{span:13,offset:0},lg:{span:9,offset:0},class:"login-box bg-white"},{default:l(()=>[N,e(p,{ref:"form",model:t.form,rules:t.rule},{default:l(()=>[e(d,{prop:"email"},{default:l(()=>[e(a,{size:"large",type:"text",prefix:"ios-at-outline",modelValue:t.form.email,"onUpdate:modelValue":o[0]||(o[0]=n=>t.form.email=n),placeholder:"\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),e(d,{prop:"verify"},{default:l(()=>[e(a,{size:"large",type:"text",prefix:"ios-lock-outline",modelValue:t.form.verify,"onUpdate:modelValue":o[1]||(o[1]=n=>t.form.verify=n),placeholder:"\u9A8C\u8BC1\u7801"},{default:l(()=>[e(f,{slot:"append",onVerifysuccess:u.getVerifyToken,url:"/v1/email/verify/send",type:"\u90AE\u7BB1",account:t.form.email,title:"\u91CD\u7F6E\u5BC6\u7801"},null,8,["onVerifysuccess","account"])]),_:1},8,["modelValue"])]),_:1}),e(d,{prop:"newPassword"},{default:l(()=>[e(a,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:t.form.newPassword,"onUpdate:modelValue":o[2]||(o[2]=n=>t.form.newPassword=n),placeholder:"\u65B0\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e(_,{class:"full submit-btn",size:"large",loading:t.loading,type:"primary",onClick:o[3]||(o[3]=n=>u.handleSubmit("form"))},{default:l(()=>[C]),_:1},8,["loading"])]),_:1},8,["model","rules"])]),_:1})]),_:1})])]),e(w)])}var S=h(y,[["render",z]]);export{S as default};