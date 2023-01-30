var e=(e,l,t)=>new Promise(((o,i)=>{var r=e=>{try{s(t.next(e))}catch(l){i(l)}},a=e=>{try{s(t.throw(e))}catch(l){i(l)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,a);s((t=t.apply(e,l)).next())}));import{_ as l,v as t}from"../../index.js";const o={mixins:[t],components:{},data(){return{active:1,verifyList:[],loading:!1,formVerfyMobile:{countryCode:this.$store.state.user.userInfo.countryCode,mobile:this.$store.state.user.userInfo.mobile,verify:"",token:""},form:{countryCode:"+86",mobile:"",password:"",verify:"",token:"",email:"",emailVerify:"",emailToken:"",gauth:""},rule:{mobile:[{required:!0,message:"请填写新手机号",trigger:"blur"}],verify:[{required:!0,message:"请填写验证码",trigger:"blur"}],token:[{required:!0,message:"请发送验证码",trigger:"blur"}]}}},created:function(){this.loadData()},methods:{verifyPassword(){return e(this,null,(function*(){"200"==(yield this.doVerifyPassword()).code&&this.active++}))},getVerifyTokenVerfyMobile(e){this.formVerfyMobile.token=e.token},onVerifyCountrySelect({name:e,iso2:l,dialCode:t}){this.formVerfyMobile.countryCode="+"+t},verifyMobile(){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let l=yield this.$util.request({url:"/v1/reg_mobile/user/verify",data:this.formVerfyMobile,method:"post"});"200"==l.code?(this.$util.showToast({title:l.msg,icon:"success",duration:2e3}),this.active++):this.$util.showToast({title:l.msg,icon:"loading",duration:3e3}),this.loading=!1}))},onCountrySelect({name:e,iso2:l,dialCode:t}){this.form.countryCode="+"+t},getVerifyToken(e){this.form.token=e.token},getEmailVerifyToken(){this.form.emailToken=res.token},loadData(){return e(this,null,(function*(){let e=yield this.$util.request({url:"/v1/reg_mobile/user/change",method:"get"});"200"==e.code?this.verifyList=e.data.dataList:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})}))},handleSubmit(){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let l=yield this.$util.request({url:"/v1/reg_mobile/user/change",data:this.form,method:"put"});"200"==l.code?(this.$util.showToast({title:l.msg,icon:"success",duration:2e3}),this.active++):this.$util.showToast({title:l.msg,icon:"loading",duration:3e3}),this.loading=!1}))}}},i=window.Vue.createTextVNode,r=window.Vue.resolveComponent,a=window.Vue.withCtx,s=window.Vue.createVNode,d=window.Vue.createElementVNode,n=window.Vue.openBlock,u=window.Vue.createBlock,f=window.Vue.createCommentVNode,c=window.Vue.createElementBlock,m=window.Vue.pushScopeId,p=window.Vue.popScopeId,y=e=>(m("data-v-feb62ff0"),e=e(),p(),e),b={class:"box"},h={class:"p-t"},V={class:"content p-t"},v={class:"step-tabs"},g=y((()=>d("div",{class:"m-b-md ts-18 tw4"},"请输入您的登录密码",-1))),w={class:"m-t-lg"},k=y((()=>d("div",{class:"m-b-md ts-12 tw4",style:{color:"#2A2B2E"}},"为确认您本人操作，需要您进行手机验证码验证身份。",-1))),x={class:"flex"},_=y((()=>d("div",{class:"text-gray m-l-md"}," 手机号码不可用？请联系客服。 ",-1))),C={class:"flex"},M={class:"m-t-lg"},T={class:"flex"},z={class:"m-t-lg"},S={key:3},$=y((()=>d("div",null,[d("i",{class:"xyicon xyicon-check3 ts-30 m-r-sm",style:{color:"#4AC711"}}),d("span",{class:"ts-20 tw4",style:{color:"#2A2B2E"}},"换绑手机号成功。")],-1))),U={class:"m-t-lg"},N=y((()=>d("span",{slot:"title",class:"ts-14"},[d("i",{class:"xyicon xyicon-help-o m-r-xs text-primary"}),d("span",null,"没收到短信验证码？")],-1))),O=y((()=>d("div",{class:"lh-2 ts-12"},[i(" 1、网络通讯异常可能会造成短信丢失，请重新获取或稍后再试。"),d("br"),i(" 2、请核实手机是否已欠费停机，或者屏蔽了系统短信。"),d("br"),i(" 3、如果手机已丢失或停用， 请选择其他验证方式 。"),d("br"),i(" 4、您也可以尝试将SIM卡移动到另一部手机，然后重试。"),d("br")],-1)));const q=l(o,[["render",function(e,l,t,o,m,p){const y=r("el-breadcrumb-item"),q=r("el-breadcrumb"),E=r("el-step"),I=r("el-steps"),L=r("el-input"),P=r("el-form-item"),B=r("el-button"),A=r("el-link"),D=r("el-form"),j=r("xy-country-select"),F=r("xy-send-verify"),G=r("router-link"),H=r("el-alert");return n(),c("div",null,[d("div",b,[d("div",h,[s(q,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:a((()=>[s(y,{to:{path:"/user/center"}},{default:a((()=>[i("个人设置")])),_:1}),s(y,null,{default:a((()=>[i("修改手机号")])),_:1})])),_:1})]),d("div",V,[s(I,{active:m.active,simple:"","align-left":""},{default:a((()=>[s(E,{title:"验证登录密码",description:""}),s(E,{title:"验证旧手机号",description:""}),s(E,{title:"验证新手机号",description:""}),s(E,{title:"修改成功",description:""})])),_:1},8,["active"]),d("div",v,[1==m.active?(n(),u(D,{key:0,ref:"formVerifyPassword","label-position":"left","label-width":"0px"},{default:a((()=>[g,s(P,{prop:"password"},{default:a((()=>[s(L,{size:"default",type:"password",prefix:"ios-lock-outline",modelValue:e.password,"onUpdate:modelValue":l[0]||(l[0]=l=>e.password=l),placeholder:"请输入登录密码"},null,8,["modelValue"])])),_:1}),d("div",w,[s(B,{class:"submit-btn primary-linear m-r",size:"default",loading:m.loading,type:"primary",onClick:p.verifyPassword},{default:a((()=>[i(" 下一步 ")])),_:1},8,["loading","onClick"]),s(A,{class:"back ts-14",onClick:l[1]||(l[1]=l=>e.$router.back())},{default:a((()=>[i("取消操作")])),_:1})])])),_:1},512)):f("",!0),2==m.active?(n(),u(D,{key:1,ref:"formVerfyMobile","label-position":"left","label-width":"140px",model:m.formVerfyMobile},{default:a((()=>[k,s(P,{prop:"mobile",label:"请输入旧手机号"},{default:a((()=>[d("div",x,[s(L,{size:"default",type:"text",prefix:"ios-at-outline",disabled:"",modelValue:m.formVerfyMobile.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>m.formVerfyMobile.mobile=e),placeholder:"请输入旧手机号"},{prepend:a((()=>[s(j,{defaultCountry:"CN",enabledCountryCode:"",onOnSelect:p.onVerifyCountrySelect},null,8,["onOnSelect"])])),_:1},8,["modelValue"]),_])])),_:1}),s(P,{prop:"verify",label:"验证码"},{default:a((()=>[d("div",C,[s(L,{class:"m-r",size:"default",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:m.formVerfyMobile.verify,"onUpdate:modelValue":l[3]||(l[3]=e=>m.formVerfyMobile.verify=e),placeholder:"请输入手机验证码"},null,8,["modelValue"]),s(B,{type:"primary",size:"default"},{default:a((()=>[s(F,{onVerifysuccess:p.getVerifyTokenVerfyMobile,url:"/v1/sms/verify/send",type:"手机号",verifyUser:1,account:m.formVerfyMobile.mobile,title:"手机换绑"},null,8,["onVerifysuccess","account"])])),_:1})])])),_:1}),d("div",M,[s(B,{class:"submit-btn primary-linear m-r",size:"default",loading:m.loading,type:"primary",onClick:l[4]||(l[4]=e=>p.verifyMobile())},{default:a((()=>[i(" 下一步 ")])),_:1},8,["loading"]),s(A,{class:"back ts-14",onClick:l[5]||(l[5]=e=>m.active--)},{default:a((()=>[i("返回上一步")])),_:1})])])),_:1},8,["model"])):f("",!0),3==m.active?(n(),u(D,{key:2,ref:"form","label-position":"left","label-width":"140px",model:m.form,rules:m.rule},{default:a((()=>[s(P,{prop:"mobile",label:"请输入新手机号"},{default:a((()=>[s(L,{size:"default",type:"text",prefix:"ios-at-outline",modelValue:m.form.mobile,"onUpdate:modelValue":l[6]||(l[6]=e=>m.form.mobile=e),placeholder:"请输入新手机号"},{prepend:a((()=>[s(j,{defaultCountry:"CN",enabledCountryCode:"",onOnSelect:p.onCountrySelect},null,8,["onOnSelect"])])),_:1},8,["modelValue"])])),_:1}),s(P,{prop:"verify",label:"验证码"},{default:a((()=>[d("div",T,[s(L,{class:"m-r",size:"default",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:m.form.verify,"onUpdate:modelValue":l[7]||(l[7]=e=>m.form.verify=e),placeholder:"请输入手机验证码"},null,8,["modelValue"]),s(B,{type:"primary",size:"default"},{default:a((()=>[s(F,{onVerifysuccess:p.getVerifyToken,url:"/v1/sms/verify/send",type:"手机号",account:"form.mobile",title:"手机换绑"},null,8,["onVerifysuccess"])])),_:1})])])),_:1}),m.verifyList.indexOf("email")>=0?(n(),u(P,{key:0,prop:"emailVerify"},{default:a((()=>[s(L,{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:m.form.emailVerify,"onUpdate:modelValue":l[8]||(l[8]=e=>m.form.emailVerify=e),placeholder:"请输入邮箱验证码"},{append:a((()=>[s(F,{onVerifysuccess:p.getEmailVerifyToken,url:"/v1/email/verify/send",type:"邮箱",noNeedAccount:!0,title:"手机换绑"},null,8,["onVerifysuccess"])])),_:1},8,["modelValue"])])),_:1})):f("",!0),m.verifyList.indexOf("gauth")>=0?(n(),u(P,{key:1,prop:"gauth"},{default:a((()=>[s(L,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:m.form.gauth,"onUpdate:modelValue":l[9]||(l[9]=e=>m.form.gauth=e),placeholder:"请输入谷歌验证码"},null,8,["modelValue"])])),_:1})):f("",!0),m.verifyList.indexOf("password")>=0?(n(),u(P,{key:2,prop:"password"},{default:a((()=>[s(L,{size:"large",type:"password",prefix:"ios-lock-outline",modelValue:m.form.password,"onUpdate:modelValue":l[10]||(l[10]=e=>m.form.password=e),placeholder:"请输入登录密码"},null,8,["modelValue"])])),_:1})):f("",!0),d("div",z,[s(B,{class:"submit-btn primary-linear m-r",size:"default",loading:m.loading,type:"primary",onClick:l[11]||(l[11]=e=>p.handleSubmit("form"))},{default:a((()=>[i(" 确定 ")])),_:1},8,["loading"]),s(A,{class:"back ts-14",onClick:l[12]||(l[12]=e=>m.active--)},{default:a((()=>[i("返回上一步")])),_:1})])])),_:1},8,["model","rules"])):f("",!0),4==m.active?(n(),c("div",S,[$,d("div",U,[s(G,{to:"/user/login"},{default:a((()=>[s(B,{class:"primary-linear",size:"small",type:"primary",round:""},{default:a((()=>[i("重新登录")])),_:1})])),_:1})])])):f("",!0)])]),s(H,{class:"p-l-md p-b",type:"primary"},{default:a((()=>[N,O])),_:1})])])}],["__scopeId","data-v-feb62ff0"]]);export{q as default};