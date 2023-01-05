var e=(e,l,t)=>new Promise(((i,o)=>{var a=e=>{try{r(t.next(e))}catch(l){o(l)}},s=e=>{try{r(t.throw(e))}catch(l){o(l)}},r=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,s);r((t=t.apply(e,l)).next())}));import{_ as l,v as t}from"../../index.js";const i={mixins:[t],data:()=>({active:1,verifyList:[],loading:!1,form:{email:"",password:"",verify:"",token:"",mobile:"",mobileVerify:"",mobileToken:"",gauth:""},rule:{email:[{required:!0,message:"请填写邮箱",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}),created:function(){this.loadData()},methods:{verifyPassword(){return e(this,null,(function*(){"200"==(yield this.doVerifyPassword()).code&&this.active++}))},getVerifyToken(e){this.form.token=e.token},getMobileVerifyToken(e){this.form.mobileToken=e.token},loadData(){return e(this,null,(function*(){let e=yield this.$util.request({url:"/v1/reg_email/user/bind",method:"get"});"200"==e.code?this.verifyList=e.data.dataList:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})}))},handleSubmit(){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let l=yield this.$util.request({url:"/v1/reg_email/user/bind",data:this.form,method:"post"});"200"==l.code?(this.$util.showToast({title:l.msg,icon:"success",duration:2e3}),this.active++):this.$util.showToast({title:l.msg,icon:"loading",duration:3e3}),this.loading=!1}))}}},o=window.Vue.createTextVNode,a=window.Vue.resolveComponent,s=window.Vue.withCtx,r=window.Vue.createVNode,d=window.Vue.createElementVNode,n=window.Vue.openBlock,u=window.Vue.createBlock,c=window.Vue.createCommentVNode,m=window.Vue.createElementBlock,f=window.Vue.pushScopeId,p=window.Vue.popScopeId,y=e=>(f("data-v-725d9ef7"),e=e(),p(),e),h={class:"box"},v={class:"p-t"},w={class:"content p-t-md"},V={class:"step-tabs"},g=y((()=>d("div",{class:"m-b-md ts-18 tw4"},"请输入您的登录密码",-1))),b={class:"m-t-lg"},k={class:"flex"},x={class:"m-t-lg"},_={key:2},T=y((()=>d("div",null,[d("i",{class:"xyicon xyicon-check3 ts-30 m-r-sm",style:{color:"#4AC711"}}),d("span",{class:"ts-20 tw4",style:{color:"#2A2B2E"}},"绑定邮箱成功。")],-1))),z={class:"m-t-lg"},C=y((()=>d("span",{slot:"title",class:"ts-14"},[d("i",{class:"xyicon xyicon-help-o m-r-xs text-primary"}),d("span",null,"没收到邮箱验证码？")],-1))),L=y((()=>d("div",{class:"lh-2 ts-12 p-l-xs"},[o(" 1、邮箱地址是否填写正确？填写正确的邮箱地址，才能收到验证码邮件。"),d("br"),o(" 2、请核实邮箱邮件是否被拦截，检查邮箱垃圾箱。"),d("br"),o(" 3、如果邮箱已经停用， 请选择其他验证方式 。"),d("br")],-1)));const P=l(i,[["render",function(e,l,t,i,f,p){const y=a("el-breadcrumb-item"),P=a("el-breadcrumb"),U=a("el-step"),$=a("el-steps"),q=a("el-input"),N=a("el-form-item"),B=a("el-button"),S=a("el-link"),A=a("el-form"),E=a("xy-send-verify"),I=a("router-link"),O=a("el-alert");return n(),m("div",null,[d("div",h,[d("div",v,[r(P,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:s((()=>[r(y,{to:{path:"/user/center"}},{default:s((()=>[o("个人设置")])),_:1}),r(y,null,{default:s((()=>[o("绑定邮箱")])),_:1})])),_:1})]),d("div",w,[r($,{active:f.active,simple:"","align-left":""},{default:s((()=>[r(U,{title:"验证登录密码",description:""}),r(U,{title:"验证新邮箱",description:""}),r(U,{title:"绑定成功",description:""})])),_:1},8,["active"]),d("div",V,[1==f.active?(n(),u(A,{key:0,ref:"formVerifyPassword","label-position":"left","label-width":"0px"},{default:s((()=>[g,r(N,{prop:"password"},{default:s((()=>[r(q,{size:"default",type:"password",prefix:"ios-lock-outline",modelValue:e.password,"onUpdate:modelValue":l[0]||(l[0]=l=>e.password=l),placeholder:"请输入登录密码"},null,8,["modelValue"])])),_:1}),d("div",b,[r(B,{class:"submit-btn primary-linear m-r",size:"default",loading:f.loading,type:"primary",onClick:p.verifyPassword},{default:s((()=>[o(" 下一步 ")])),_:1},8,["loading","onClick"]),r(S,{class:"back ts-14",onClick:l[1]||(l[1]=l=>e.$router.back())},{default:s((()=>[o("取消操作")])),_:1})])])),_:1},512)):c("",!0),2==f.active?(n(),u(A,{key:1,ref:"form","label-position":"left","label-width":"140px",model:f.form,rules:f.rule},{default:s((()=>[r(N,{prop:"email",label:"请输入邮箱"},{default:s((()=>[r(q,{size:"default",type:"text",prefix:"ios-at-outline",modelValue:f.form.email,"onUpdate:modelValue":l[2]||(l[2]=e=>f.form.email=e),placeholder:"请输入邮箱"},null,8,["modelValue"])])),_:1}),r(N,{prop:"verify",label:"验证码"},{default:s((()=>[d("div",k,[r(q,{class:"m-r",size:"default",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:f.form.verify,"onUpdate:modelValue":l[3]||(l[3]=e=>f.form.verify=e),placeholder:"请输入邮箱验证码"},null,8,["modelValue"]),r(B,{type:"primary",size:"default"},{default:s((()=>[r(E,{onVerifysuccess:p.getVerifyToken,url:"/v1/email/verify/send",type:"邮箱",account:f.form.email,title:"邮箱绑定"},null,8,["onVerifysuccess","account"])])),_:1})])])),_:1}),f.verifyList.indexOf("mobile")>=0?(n(),u(N,{key:0,prop:"mobileVerify"},{default:s((()=>[r(q,{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:f.form.mobileVerify,"onUpdate:modelValue":l[4]||(l[4]=e=>f.form.mobileVerify=e),placeholder:"请输入手机验证码"},{append:s((()=>[r(E,{onVerifysuccess:p.getMobileVerifyToken,url:"/v1/sms/verify/send",type:"手机号",noNeedAccount:!0,title:"邮箱绑定"},null,8,["onVerifysuccess"])])),_:1},8,["modelValue"])])),_:1})):c("",!0),f.verifyList.indexOf("gauth")>=0?(n(),u(N,{key:1,prop:"gauth"},{default:s((()=>[r(q,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:f.form.gauth,"onUpdate:modelValue":l[5]||(l[5]=e=>f.form.gauth=e),placeholder:"请输入谷歌验证码"},null,8,["modelValue"])])),_:1})):c("",!0),f.verifyList.indexOf("password")>=0?(n(),u(N,{key:2,prop:"password"},{default:s((()=>[r(q,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:f.form.password,"onUpdate:modelValue":l[6]||(l[6]=e=>f.form.password=e),placeholder:"请输入登录密码"},null,8,["modelValue"])])),_:1})):c("",!0),d("div",x,[r(B,{class:"submit-btn primary-linear m-r",size:"default",loading:f.loading,type:"primary",onClick:l[7]||(l[7]=e=>p.handleSubmit("form"))},{default:s((()=>[o(" 确定 ")])),_:1},8,["loading"]),r(S,{class:"back ts-14",onClick:l[8]||(l[8]=e=>f.active--)},{default:s((()=>[o("返回上一步")])),_:1})])])),_:1},8,["model","rules"])):c("",!0),3==f.active?(n(),m("div",_,[T,d("div",z,[r(I,{to:"/user/login"},{default:s((()=>[r(B,{class:"primary-linear",size:"small",type:"primary",round:""},{default:s((()=>[o("重新登录")])),_:1})])),_:1})])])):c("",!0)])]),r(O,{class:"p-l-md p-b",type:"primary"},{default:s((()=>[C,L])),_:1})])])}],["__scopeId","data-v-725d9ef7"]]);export{P as default};
