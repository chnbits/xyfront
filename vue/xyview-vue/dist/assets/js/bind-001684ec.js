import{_ as z,v as N}from"../index-726dc959.js";const B={mixins:[N],data(){return{active:1,verifyList:[],loading:!1,form:{email:"",password:"",verify:"",token:"",mobile:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{email:[{required:!0,message:"\u8BF7\u586B\u5199\u90AE\u7BB1",trigger:"blur"}],verify:[{required:!0,message:"\u8BF7\u586B\u5199\u9A8C\u8BC1\u7801",trigger:"blur"}],token:[{required:!0,message:"\u8BF7\u53D1\u9001\u9A8C\u8BC1\u7801",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{async verifyPassword(){(await this.doVerifyPassword()).code=="200"&&this.active++},getVerifyToken(i){this.form.token=i.token},getMobileVerifyToken(i){this.form.mobileToken=i.token},async loadData(){let i=await this.$util.request({url:"/v1/reg_email/user/bind",method:"get"});i.code=="200"?this.verifyList=i.data.dataList:this.$util.showToast({title:i.msg,icon:"loading",duration:3e3})},async handleSubmit(){this.loading=!0;let i=this;setTimeout(function(){i.loading=!1},5e3);let o=await this.$util.request({url:"/v1/reg_email/user/bind",data:this.form,method:"post"});o.code=="200"?(this.$util.showToast({title:o.msg,icon:"success",duration:2e3}),this.active++):this.$util.showToast({title:o.msg,icon:"loading",duration:3e3}),this.loading=!1}}},a=window.Vue.createTextVNode,r=window.Vue.resolveComponent,l=window.Vue.withCtx,e=window.Vue.createVNode,s=window.Vue.createElementVNode,d=window.Vue.openBlock,m=window.Vue.createBlock,p=window.Vue.createCommentVNode,V=window.Vue.createElementBlock,S=window.Vue.pushScopeId,I=window.Vue.popScopeId,b=i=>(S("data-v-0183e1b8"),i=i(),I(),i),L={class:"box"},U={class:"p-t"},q=a("\u4E2A\u4EBA\u8BBE\u7F6E"),E=a("\u7ED1\u5B9A\u90AE\u7BB1"),P={class:"content p-t-md"},A={class:"step-tabs"},O=b(()=>s("div",{class:"m-b-md ts-18 tw4"},"\u8BF7\u8F93\u5165\u60A8\u7684\u767B\u5F55\u5BC6\u7801",-1)),D={class:"m-t-lg"},M=a(" \u4E0B\u4E00\u6B65 "),j=a("\u53D6\u6D88\u64CD\u4F5C"),F={class:"flex"},G={class:"m-t-lg"},H=a(" \u786E\u5B9A "),J=a("\u8FD4\u56DE\u4E0A\u4E00\u6B65"),K={key:2},Q=b(()=>s("div",null,[s("i",{class:"xyicon xyicon-check3 ts-30 m-r-sm",style:{color:"#4AC711"}}),s("span",{class:"ts-20 tw4",style:{color:"#2A2B2E"}},"\u7ED1\u5B9A\u90AE\u7BB1\u6210\u529F\u3002")],-1)),R={class:"m-t-lg"},W=a("\u91CD\u65B0\u767B\u5F55"),X=b(()=>s("span",{slot:"title",class:"ts-14"},[s("i",{class:"xyicon xyicon-help-o m-r-xs text-primary"}),s("span",null,"\u6CA1\u6536\u5230\u90AE\u7BB1\u9A8C\u8BC1\u7801\uFF1F")],-1)),Y=b(()=>s("div",{class:"lh-2 ts-12 p-l-xs"},[a(" 1\u3001\u90AE\u7BB1\u5730\u5740\u662F\u5426\u586B\u5199\u6B63\u786E\uFF1F\u586B\u5199\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740\uFF0C\u624D\u80FD\u6536\u5230\u9A8C\u8BC1\u7801\u90AE\u4EF6\u3002"),s("br"),a(" 2\u3001\u8BF7\u6838\u5B9E\u90AE\u7BB1\u90AE\u4EF6\u662F\u5426\u88AB\u62E6\u622A\uFF0C\u68C0\u67E5\u90AE\u7BB1\u5783\u573E\u7BB1\u3002"),s("br"),a(" 3\u3001\u5982\u679C\u90AE\u7BB1\u5DF2\u7ECF\u505C\u7528\uFF0C \u8BF7\u9009\u62E9\u5176\u4ED6\u9A8C\u8BC1\u65B9\u5F0F \u3002"),s("br")],-1));function Z(i,o,$,ee,t,f){const v=r("el-breadcrumb-item"),x=r("el-breadcrumb"),y=r("el-step"),k=r("el-steps"),c=r("el-input"),u=r("el-form-item"),_=r("el-button"),h=r("el-link"),w=r("el-form"),g=r("xy-send-verify"),C=r("router-link"),T=r("el-alert");return d(),V("div",null,[s("div",L,[s("div",U,[e(x,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:l(()=>[e(v,{to:{path:"/user/center"}},{default:l(()=>[q]),_:1}),e(v,null,{default:l(()=>[E]),_:1})]),_:1})]),s("div",P,[e(k,{active:t.active,simple:"","align-left":""},{default:l(()=>[e(y,{title:"\u9A8C\u8BC1\u767B\u5F55\u5BC6\u7801",description:""}),e(y,{title:"\u9A8C\u8BC1\u65B0\u90AE\u7BB1",description:""}),e(y,{title:"\u7ED1\u5B9A\u6210\u529F",description:""})]),_:1},8,["active"]),s("div",A,[t.active==1?(d(),m(w,{key:0,ref:"formVerifyPassword","label-position":"left","label-width":"0px"},{default:l(()=>[O,e(u,{prop:"password"},{default:l(()=>[e(c,{size:"default",type:"password",prefix:"ios-lock-outline",modelValue:i.password,"onUpdate:modelValue":o[0]||(o[0]=n=>i.password=n),placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),s("div",D,[e(_,{class:"submit-btn primary-linear m-r",size:"default",loading:t.loading,type:"primary",onClick:f.verifyPassword},{default:l(()=>[M]),_:1},8,["loading","onClick"]),e(h,{class:"back ts-14",onClick:o[1]||(o[1]=n=>i.$router.back())},{default:l(()=>[j]),_:1})])]),_:1},512)):p("",!0),t.active==2?(d(),m(w,{key:1,ref:"form","label-position":"left","label-width":"140px",model:t.form,rules:t.rule},{default:l(()=>[e(u,{prop:"email",label:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{default:l(()=>[e(c,{size:"default",type:"text",prefix:"ios-at-outline",modelValue:t.form.email,"onUpdate:modelValue":o[2]||(o[2]=n=>t.form.email=n),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},null,8,["modelValue"])]),_:1}),e(u,{prop:"verify",label:"\u9A8C\u8BC1\u7801"},{default:l(()=>[s("div",F,[e(c,{class:"m-r",size:"default",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:t.form.verify,"onUpdate:modelValue":o[3]||(o[3]=n=>t.form.verify=n),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),e(_,{type:"primary",size:"default"},{default:l(()=>[e(g,{onVerifysuccess:f.getVerifyToken,url:"/v1/email/verify/send",type:"\u90AE\u7BB1",account:t.form.email,title:"\u624B\u673A\u7ED1\u5B9A"},null,8,["onVerifysuccess","account"])]),_:1})])]),_:1}),t.verifyList.indexOf("mobile")>=0?(d(),m(u,{key:0,prop:"mobileVerify"},{default:l(()=>[e(c,{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:t.form.mobileVerify,"onUpdate:modelValue":o[4]||(o[4]=n=>t.form.mobileVerify=n),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u9A8C\u8BC1\u7801"},{default:l(()=>[e(g,{slot:"append",onVerifysuccess:f.getMobileVerifyToken,url:"/v1/sms/verify/send",type:"\u624B\u673A\u53F7",noNeedAccount:!0,title:"\u90AE\u7BB1\u7ED1\u5B9A"},null,8,["onVerifysuccess"])]),_:1},8,["modelValue"])]),_:1})):p("",!0),t.verifyList.indexOf("gauth")>=0?(d(),m(u,{key:1,prop:"gauth"},{default:l(()=>[e(c,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:t.form.gauth,"onUpdate:modelValue":o[5]||(o[5]=n=>t.form.gauth=n),placeholder:"\u8BF7\u8F93\u5165\u8C37\u6B4C\u9A8C\u8BC1\u7801"},null,8,["modelValue"])]),_:1})):p("",!0),t.verifyList.indexOf("password")>=0?(d(),m(u,{key:2,prop:"password"},{default:l(()=>[e(c,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:t.form.password,"onUpdate:modelValue":o[6]||(o[6]=n=>t.form.password=n),placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801"},null,8,["modelValue"])]),_:1})):p("",!0),s("div",G,[e(_,{class:"submit-btn primary-linear m-r",size:"default",loading:t.loading,type:"primary",onClick:o[7]||(o[7]=n=>f.handleSubmit("form"))},{default:l(()=>[H]),_:1},8,["loading"]),e(h,{class:"back ts-14",onClick:o[8]||(o[8]=n=>t.active--)},{default:l(()=>[J]),_:1})])]),_:1},8,["model","rules"])):p("",!0),t.active==3?(d(),V("div",K,[Q,s("div",R,[e(C,{to:"/user/login"},{default:l(()=>[e(_,{class:"primary-linear",size:"small",type:"primary",round:""},{default:l(()=>[W]),_:1})]),_:1})])])):p("",!0)])]),e(T,{class:"p-l-md p-b",type:"primary"},{default:l(()=>[X,Y]),_:1})])])}var oe=z(B,[["render",Z],["__scopeId","data-v-0183e1b8"]]);export{oe as default};
