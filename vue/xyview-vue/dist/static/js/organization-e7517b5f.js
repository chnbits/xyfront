var e=Object.defineProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(l,t,o)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[t]=o,a=(e,a)=>{for(var r in a||(a={}))t.call(a,r)&&i(e,r,a[r]);if(l)for(var r of l(a))o.call(a,r)&&i(e,r,a[r]);return e},r=(e,l,t)=>new Promise(((o,i)=>{var a=e=>{try{s(t.next(e))}catch(l){i(l)}},r=e=>{try{s(t.throw(e))}catch(l){i(l)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,r);s((t=t.apply(e,l)).next())}));import{_ as s}from"../../index.js";const n={name:"productcer",components:{},data(){var e,l,t;return{loading:!1,regionInit:{showInput:!1,labelField:"name",valueField:"name",deep:1,maxLevel:3,nodeKey:"id",lazy:!0,action:"/v1/region/region/lists"},certTypeList:[{title:"营业执照",value:5},{title:"组织机构证书",value:6},{title:"其它证照",value:9}],sizeLimit:2,options:{type:"image",drag:!0,driver:this.$store.state.app.uploadDriver,signUrl:"",icon:"",placeholder:"",action:"",format:"jpg,png",maxSize:1024*this.sizeLimit,hasUploadModule:!0},change:(null==(l=null==(e=this.$route)?void 0:e.query)?void 0:l.change)?this.$route.query.change:"",countryCode:null==(t=this.$store.state.user.userInfo.mobile)?void 0:t.identityGroup,mobile:this.$store.state.user.userInfo.mobile,email:this.$store.state.user.userInfo.email,mobileVerify:{countryCode:"+86",mobile:"",verify:"",token:""},emailVerify:{email:"",verify:"",token:""},form:{country:"86",certCate:2,certType:5,realName:"",certNo:"",certPhoto:"",city:[],address:""},mobileHelpUpload:!1,mobileHelpUploadId:"",mobileHelpUploadUrl:"",mobileHelpUploadTimer:null}},created(){this.mobile&&(this.mobileVerify.countryCode=this.countryCode,this.mobileVerify.mobile=this.mobile),this.email&&(this.emailVerify.email=this.email),this.loadData();var e=new Date;this.mobileHelpUploadId=e.getTime(),this.mobileHelpUploadUrl=this.$util.baseDomain()+"/user_cert/cert/mobileUpload?cate=2&id="+this.mobileHelpUploadId},watch:{"form.certPhoto":{handler(e){this.getOcrInfo("FRONT",e)},deep:!0,immediate:!1}},methods:{getOcrInfo(e,l){return r(this,null,(function*(){if(!l)return;let t={};switch(this.form.certCate){case 1:t.side=e,t.url=l;break;case 2:t.url=l}let o=yield this.$util.request({url:"/v1/user_cert/cert/getOcrInfo",data:a({certCate:this.form.certCate},t),method:"post"});200==o.code&&(this.form.realName=o.data.realName,this.form.certNo=o.data.certNo)}))},onCountrySelect({name:e,iso2:l,dialCode:t}){this.mobileVerify.countryCode="+"+t},getMobileVerifyToken(e){this.mobileVerify.token=e.token},getEmailVerifyToken(e){this.emailVerify.token=e.token},mobileUpload(){this.mobileHelpUpload=!0,this.mobileHelpUploadTimer=setInterval(this.syncMobileUploadStatue,3e3)},syncMobileUploadStatue(){return r(this,null,(function*(){let e=yield this.$util.request({url:"/v1/core/index/cache",data:{id:this.mobileHelpUploadId},method:"get"});200==e.code&&e.data.info&&(this.form.certPhoto=e.data.info.certPhotoOrg)}))},loadData(){return r(this,null,(function*(){if(this.change)return;this.loading=!0;let e=yield this.$util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});200==e.code?e.data.info&&e.data.info.certCate==this.form.certCate&&(this.form=e.data.info):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1}))},cofirm(){this.$confirm('确定使用该信息（<span style="color: var(--primary-color)">'+this.form.realName+"  "+this.form.certNo+'</span>）进行实名？请确保您具有该组织机构<span style="color: var(--primary-color)">银行账户财务权限</span>，否则下一步可能无法进行验证',"确定要使用该信息进行认证码？",{distinguishCancelAndClose:!0,confirmButtonText:"我很确定",cancelButtonText:"返回修改",dangerouslyUseHTMLString:!0}).then((()=>{this.handleSubmit()})).catch((e=>{}))},handleSubmit(){return r(this,null,(function*(){var e,l;this.form.change=this.change,!this.email&&this.$xyutil.hasExt("reg_email")&&(this.form.emailVerify=this.emailVerify),!this.mobile&&this.$xyutil.hasExt("reg_mobile")&&(this.form.mobileVerify=this.mobileVerify),this.loading=!0;let t=this;setTimeout((function(){t.loading=!1}),5e3);let o=yield this.$util.request({url:(null==(e=this.form)?void 0:e.id)&&!this.change?"/v1/user_cert/cert/edit":"/v1/user_cert/cert/add",data:this.form,method:(null==(l=this.form)?void 0:l.id)&&!this.change?"put":"post"});"200"==o.code?(this.$util.showToast({title:o.msg,icon:"success",duration:2e3}),window.location.href="/user_cert/faceid/organization"):this.$util.showToast({title:o.msg,icon:"loading",duration:3e3}),this.loading=!1}))}}},d=window.Vue.createTextVNode,u=window.Vue.resolveComponent,c=window.Vue.withCtx,m=window.Vue.createVNode,p=window.Vue.createElementVNode,f=window.Vue.toDisplayString,h=window.Vue.openBlock,y=window.Vue.createBlock,b=window.Vue.createCommentVNode,g=window.Vue.Fragment,V=window.Vue.createElementBlock,v=window.Vue.pushScopeId,x=window.Vue.popScopeId,w=e=>(v("data-v-4137814f"),e=e(),x(),e),_={class:"bg-white p-t p-b"},k={class:"content p-a-md m-t-lg"},U=w((()=>p("h3",{class:"m-b-md ts-22 text-center"},"请填写组织信息",-1))),C=w((()=>p("div",{class:"m-b-lg text-666 text-left flex space-center"},[p("p",{class:"lh-1-6 ts-14",style:{"max-width":"500px"}},[d(" 适用企业、政府、事业单位、学校、组织等，账号归属于企业。企业认证后，产生消费时，支持开具"),p("span",null,"普票和专票")])],-1))),T=w((()=>p("i",{class:"xyicon xyicon-help-o ts-14 cursor-pointer"},null,-1))),$={class:"p-t p-b p-l p-r flex space-between flex-alignCenter"},N={class:"ts-14"},I=w((()=>p("p",null,null,-1))),z={class:"flex justify-between w-full"},S=w((()=>p("i",{class:"xyicon xyicon-help-o ts-14 cursor-pointer"},null,-1))),q={class:"flex flex-alignCenter flex-center",style:{width:"120px",height:"120px",background:"#05B9CF"}},P=w((()=>p("span",null,null,-1))),O=w((()=>p("i",{class:"xyicon xyicon-plus",style:{"font-size":"48px",color:"#E1E1E1","margin-top":"18px","margin-bottom":"20px"}},null,-1))),E=w((()=>p("span",null,"上传营业执照/组织机构照片",-1))),H={class:"tips lh-1-6 m-t-xs"},j={class:"text-error ts-12"},B=w((()=>p("i",{class:"xyicon xyicon-help-o ts-14 cursor-pointer"},null,-1))),L={class:"flex"},M={class:"flex"},D={class:"m-t-lg flex space-between"},F={class:"m-r"},G={class:"help p-l-lg p-r-lg p-t-md"},A={class:"lh-1-6 ts-14"},J=w((()=>p("li",null,"1. 因组织没有手机号，手机号码的实名信息应当为企业实际授权的员工； ",-1))),K=w((()=>p("li",null,"3. 需要对证件现场拍照，且保证文字和图片、人像团等拍摄清晰可见",-1)));const R=s(n,[["render",function(e,l,t,o,i,a){const r=u("el-breadcrumb-item"),s=u("el-breadcrumb"),n=u("el-tooltip"),v=u("xy-choose"),x=u("el-form-item"),w=u("xy-qrcode"),R=u("el-popover"),Q=u("xy-upload"),W=u("el-input"),X=u("xy-cascader"),Y=u("xy-country-select"),Z=u("router-link"),ee=u("xy-send-verify"),le=u("el-button"),te=u("el-form"),oe=u("el-col"),ie=u("el-row");return h(),V("div",_,[m(s,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:c((()=>[m(r,{to:{path:"/user/center"}},{default:c((()=>[d("个人设置")])),_:1}),m(r,null,{default:c((()=>[d("组织实名认证")])),_:1})])),_:1}),p("div",k,[U,C,m(ie,{type:"flex",justify:"center",align:"middle"},{default:c((()=>[m(oe,{xs:22,sm:12,md:10,lg:10,class:"login-box bg-white"},{default:c((()=>[m(te,{ref:"form",model:i.form,"label-position":"top"},{default:c((()=>[m(x,{prop:"certType",label:"",required:""},{label:c((()=>[d(" 证件类型 "),m(n,{class:"item",effect:"dark",content:"非营业执照指的是组织机构证等非营业执照类型的组织证照。",placement:"top","popper-class":"bottomStartTooltop"},{default:c((()=>[T])),_:1})])),default:c((()=>[m(v,{options:i.certTypeList,modelValue:i.form.certType,"onUpdate:modelValue":l[0]||(l[0]=e=>i.form.certType=e)},{default:c((e=>[p("div",$,[p("div",null,[p("h5",N,f(e.title),1),I])])])),_:1},8,["options","modelValue"])])),_:1}),m(x,{prop:"certPhoto",label:"",required:""},{default:c((()=>[p("div",z,[p("span",null,[d(" 证件照片 "),m(n,{class:"item",effect:"dark",content:"证件照片一般为营业执照、组织机构证等等",placement:"top","popper-class":"bottomStartTooltop"},{default:c((()=>[S])),_:1})]),m(R,{placement:"top-start",title:"手机辅助上传",width:"120px",trigger:"click"},{reference:c((()=>[p("span",{onClick:l[1]||(l[1]=(...e)=>a.mobileUpload&&a.mobileUpload(...e)),class:"cursor-pointer ts-14 m-l-lg hidden"},"手机辅助上传")])),default:c((()=>[p("div",q,[m(w,{class:"qrcode",style:{opacity:1},value:i.mobileHelpUploadUrl,options:{width:120}},null,8,["value"])])])),_:1})]),p("div",null,[m(Q,{options:i.options,header:{},modelValue:i.form.certPhoto,"onUpdate:modelValue":l[2]||(l[2]=e=>i.form.certPhoto=e)},{drag:c((()=>[P,O,E])),_:1},8,["options","modelValue"])]),p("div",H,[p("p",null,[p("span",j,"(上传营业执照后，系统可能会发送证照给第三方接口用于自动识别填写企业名称和机构代码) 可以添加水印，如：仅限"+f(e.$store.state.app.siteInfo.title)+"实名认证使用，注意不要遮挡文字和图案。 ",1)])])])),_:1}),m(x,{prop:"realName",label:"组织名称",required:""},{default:c((()=>[m(W,{size:"large",type:"text",prefix:"ios-lock-outline",modelValue:i.form.realName,"onUpdate:modelValue":l[3]||(l[3]=e=>i.form.realName=e),placeholder:"请输入证件上的真实名称"},null,8,["modelValue"])])),_:1}),m(x,{prop:"certNo",label:"",required:""},{label:c((()=>[d(" 证照代码 "),m(n,{class:"item",effect:"dark",content:"证照代码指的是营业执照的统一信用代码或者组织机构代码等证照上的唯一代码。",placement:"top","popper-class":"bottomStartTooltop"},{default:c((()=>[B])),_:1})])),default:c((()=>[m(W,{size:"large",type:"text",modelValue:i.form.certNo,"onUpdate:modelValue":l[4]||(l[4]=e=>i.form.certNo=e),placeholder:"请输入证件上的统一社会信用代码或组织机构代码"},null,8,["modelValue"])])),_:1}),m(x,{prop:"city",label:"联系地址",required:""},{default:c((()=>[m(X,{init:i.regionInit,modelValue:i.form.city,"onUpdate:modelValue":l[5]||(l[5]=e=>i.form.city=e)},null,8,["init","modelValue"])])),_:1}),m(x,{prop:"address",label:"",required:""},{default:c((()=>[m(W,{size:"large",type:"text",modelValue:i.form.address,"onUpdate:modelValue":l[6]||(l[6]=e=>i.form.address=e),placeholder:"请输入详细的联系地址"},null,8,["modelValue"])])),_:1}),e.$util.hasExt("reg_mobile")?(h(),V(g,{key:0},[m(x,{prop:"mobile",label:"手机号验证",required:""},{default:c((()=>[m(W,{size:"large",type:"text",prefix:"ios-person-outline",disabled:!!this.mobile,modelValue:i.mobileVerify.mobile,"onUpdate:modelValue":l[7]||(l[7]=e=>i.mobileVerify.mobile=e),placeholder:"请输入您的手机号码"},{prepend:c((()=>[m(Y,{defaultCountry:"CN",enabledCountryCode:"",onOnSelect:a.onCountrySelect},null,8,["onOnSelect"])])),_:1},8,["disabled","modelValue"]),p("div",null,[this.mobile?(h(),y(Z,{key:0,to:"/reg_mobile/user/change",class:"ts-12"},{default:c((()=>[d("修改手机号")])),_:1})):b("",!0)])])),_:1}),this.mobile?b("",!0):(h(),y(x,{key:0,prop:"verify"},{default:c((()=>[p("div",null,[p("div",L,[m(W,{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:i.mobileVerify.verify,"onUpdate:modelValue":l[8]||(l[8]=e=>i.mobileVerify.verify=e),placeholder:"请输入手机验证码"},null,8,["modelValue"]),m(le,{type:"primary",size:"large",class:"m-l-md"},{default:c((()=>[m(ee,{onVerifysuccess:a.getMobileVerifyToken,url:"/v1/sms/verify/send",type:"手机号",account:"mobileVerify.mobile",title:"手机绑定"},null,8,["onVerifysuccess"])])),_:1})])])])),_:1}))],64)):b("",!0),e.$util.hasExt("reg_email")?(h(),V(g,{key:1},[m(x,{prop:"email",label:"邮箱验证",required:""},{default:c((()=>[m(W,{size:"large",type:"text",prefix:"ios-person-outline",disabled:!!this.email,modelValue:i.emailVerify.email,"onUpdate:modelValue":l[9]||(l[9]=e=>i.emailVerify.email=e),placeholder:"请输入您的邮箱账号"},null,8,["disabled","modelValue"]),p("div",null,[this.email?(h(),y(Z,{key:0,to:"/reg_email/user/change",class:"ts-12"},{default:c((()=>[d("修改邮箱")])),_:1})):b("",!0)])])),_:1}),this.email?b("",!0):(h(),y(x,{key:0,prop:"verify"},{default:c((()=>[p("div",null,[p("div",M,[m(W,{size:"large",autocomplete:"off",type:"text",prefix:"ios-lock-outline",modelValue:i.mobileVerify.verify,"onUpdate:modelValue":l[10]||(l[10]=e=>i.mobileVerify.verify=e),placeholder:"请输入邮箱验证码"},null,8,["modelValue"]),m(le,{type:"primary",size:"large",class:"m-l-md"},{default:c((()=>[m(ee,{onVerifysuccess:a.getEmailVerifyToken,url:"/v1/email/verify/send",type:"邮箱",account:"emailVerify.mobile",title:"邮箱绑定"},null,8,["onVerifysuccess"])])),_:1})])])])),_:1}))],64)):b("",!0),p("div",D,[p("div",F,[m(le,{class:"full",size:"large",onClick:l[11]||(l[11]=l=>e.$router.back(-1))},{default:c((()=>[d("上一步")])),_:1})]),m(le,{class:"full submit-btn m-b-lg",size:"large",loading:i.loading,type:"primary",onClick:l[12]||(l[12]=e=>a.cofirm())},{default:c((()=>[d(" 下一步 ")])),_:1},8,["loading"])])])),_:1},8,["model"])])),_:1})])),_:1}),p("div",G,[p("ul",A,[J,p("li",null,"2. 上传单张照片大小不超过"+f(i.sizeLimit)+"MB，支持PNG、JPG格式；",1),K,p("li",null,"4. 支持对照片添加加水印，如添加水印文字：仅限"+f(e.$store.state.app.siteInfo.title)+"实名认证使用，注意不要遮挡文字和图案。",1)])])])])}],["__scopeId","data-v-4137814f"]]);export{R as default};