var e=(e,t,l)=>new Promise(((a,s)=>{var o=e=>{try{i(l.next(e))}catch(t){s(t)}},n=e=>{try{i(l.throw(e))}catch(t){s(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,n);i((l=l.apply(e,t)).next())}));import{_ as t}from"../../index.js";const l={name:"recharge2",components:{},data(){var e,t,l,a,s,o,n,i;return{countryCode:null==(e=this.$store.state.user.userInfo.mobile)?void 0:e.identityGroup,mobile:null==(a=null==(l=null==(t=this.$store.state.user)?void 0:t.userInfo)?void 0:l.mobile)?void 0:a.identifier,transferInfo:null==(i=null==(n=null==(o=null==(s=this.$store.state.app)?void 0:s.siteInfo)?void 0:o.moduleConfig)?void 0:n.user_cert)?void 0:i.transfer,info:{}}},created(){var e,t,l,a,s,o,n,i;this.loadData(),(null==(a=null==(l=null==(t=null==(e=this.$store.state.app)?void 0:e.siteInfo)?void 0:t.moduleConfig)?void 0:l.user_cert)?void 0:a.transfer)?this.transferInfo=null==(i=null==(n=null==(o=null==(s=this.$store.state.app)?void 0:s.siteInfo)?void 0:o.moduleConfig)?void 0:n.user_cert)?void 0:i.transfer:this.transferInfo={account:"",realName:"",bankName:""}},methods:{goBack(){this.$confirm("<h3>确定修改？</h3><br>企业名称修改成功后，转账金额也将发生变更，请使用新的银行账户进行打款",{distinguishCancelAndClose:!0,confirmButtonText:"确认",cancelButtonText:"取消",dangerouslyUseHTMLString:!0}).then((()=>{this.$router.back()})).catch((e=>{}))},senSms(){return e(this,null,(function*(){yield this.$util.request({url:"/v1/user_cert/cert/sendSms",data:{},method:"get"})}))},loadData(){return e(this,null,(function*(){let e=yield this.$util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});200==e.code?this.info=e.data.info:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})}))}}},a=window.Vue.createTextVNode,s=window.Vue.resolveComponent,o=window.Vue.withCtx,n=window.Vue.createVNode,i=window.Vue.toDisplayString,r=window.Vue.createElementVNode,d=window.Vue.openBlock,u=window.Vue.createElementBlock,c=window.Vue.createCommentVNode,f=window.Vue.pushScopeId,m=window.Vue.popScopeId,p=e=>(f("data-v-c7e520f9"),e=e(),m(),e),v={class:"box p-t"},h={class:"content p-b-md"},y={class:"tw6 text-black"},b={style:{}},w={class:"text-primary"},_={class:"text-primary"},x=p((()=>r("div",null,"付款方信息",-1))),g=p((()=>r("div",null,"收款方信息",-1))),k={key:0,class:"m-t hidden"},I=p((()=>r("div",{class:"m-t-lg text-black tw6"}," 结果反馈 ",-1))),V=p((()=>r("div",{class:"text-primary"},[r("span",{class:"xyicon xyicon-warning text-primary"}),a(" 请注意 ")],-1))),$=p((()=>r("ul",{class:"lh-2 text-primary p-l-md p-b-xs p-t-sm"},[r("li",{style:{"list-style":"disc"}},"请在7天内完成打款，系统在收到银行汇款后将自动充值；"),r("li",{style:{"list-style":"disc"}},"若打款错误或失败，正常银行会做自动退回处理，有疑问是请联银行；"),r("li",{style:{"list-style":"disc"}},"对公转账（线下汇款）到账时间一般为1个工作日内，具体到账时间以银行系统实际为准，请耐心等待")],-1)));const C=t(l,[["render",function(e,t,l,f,m,p){const C=s("el-breadcrumb-item"),N=s("el-breadcrumb"),B=s("el-form-item"),S=s("el-form"),F=s("el-descriptions-item"),D=s("el-descriptions"),E=s("el-alert");return d(),u("div",v,[n(N,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:o((()=>[n(C,{to:{path:"/user/center"}},{default:o((()=>[a("个人设置")])),_:1}),n(C,null,{default:o((()=>[a("组织信息填写")])),_:1}),n(C,{class:"cursor-pointer",onClick:t[0]||(t[0]=t=>e.$router.back(-1))},{default:o((()=>[a("选择认证方式")])),_:1}),n(C,null,{default:o((()=>[a("充值认证")])),_:1})])),_:1}),r("div",h,[n(S,{"label-position":"left","label-width":"120px"},{default:o((()=>[n(B,{label:"认证方式"},{default:o((()=>[r("h5",y,i(e.$store.state.app.siteInfo.title)+"充值认证",1),r("div",b,[a(" 请使用 "),r("span",w,i(m.info.realName),1),a(" 的企业银行账户打款 "),r("span",_,i(m.info.verifyMoney),1),a(" 至"+i(e.$store.state.app.siteInfo.title)+"收款方。 认证成功后，验证金将自动打入企业的"+i(e.$store.state.app.siteInfo.title)+"账户余额中。 ",1)])])),_:1}),x,n(B,{label:"付款账户"},{default:o((()=>[a(i(m.info.realName)+" ",1),r("span",{class:"m-l text-primary",onClick:t[1]||(t[1]=(...e)=>p.goBack&&p.goBack(...e))},"修改名称")])),_:1}),n(B,{label:"需打款金额"},{default:o((()=>[a(i(m.info.verifyMoney)+"元 ",1)])),_:1})])),_:1}),g,n(E,{type:"",title:"",class:"receive-info m-t-sm ts-12",style:{background:"#EDF3F7"}},{default:o((()=>[n(D,{title:"",column:1,style:{background:"#EDF3F7"}},{default:o((()=>[n(F,{label:"转账方式"},{default:o((()=>[a("网上银行 / 手机银行 / 电汇 / 支票 / 同城柜台现金存款")])),_:1}),n(F,{label:"收款账号"},{default:o((()=>[a(i(m.transferInfo.account?m.transferInfo.account:""),1)])),_:1}),n(F,{label:"收款账户名称"},{default:o((()=>[a(i(m.transferInfo.realName?m.transferInfo.realName:""),1)])),_:1}),n(F,{label:"收款银行名称"},{default:o((()=>[a(i(m.transferInfo.bankName?m.transferInfo.bankName:""),1)])),_:1})])),_:1})])),_:1}),m.mobile?(d(),u("div",k,[a(" 将收款方信息发送至安全手机："+i(m.countryCode)+" "+i(e.$util.middleAsterisk(m.mobile,3,4))+" ",1),r("span",{class:"text-primary cursor-pointer",onClick:t[2]||(t[2]=(...e)=>p.senSms&&p.senSms(...e))},"免费发送")])):c("",!0),I,n(E,{type:"",title:"",class:"alert2 m-t-sm ts-12",style:{background:"#E8F0FB"}},{default:o((()=>[V,$])),_:1})])])}],["__scopeId","data-v-c7e520f9"]]);export{C as default};
