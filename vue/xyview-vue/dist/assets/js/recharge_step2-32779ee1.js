import{a as k}from"../index-91ea30ae.js";const I={name:"recharge2",components:{},data(){var e,i,u,p,t,a,c,d;return{countryCode:(e=this.$store.state.user.userInfo.mobile)==null?void 0:e.identityGroup,mobile:(p=(u=(i=this.$store.state.user)==null?void 0:i.userInfo)==null?void 0:u.mobile)==null?void 0:p.identifier,transferInfo:(d=(c=(a=(t=this.$store.state.app)==null?void 0:t.siteInfo)==null?void 0:a.moduleConfig)==null?void 0:c.user_cert)==null?void 0:d.transfer,info:{}}},created(){var e,i,u,p,t,a,c,d;this.loadData(),(p=(u=(i=(e=this.$store.state.app)==null?void 0:e.siteInfo)==null?void 0:i.moduleConfig)==null?void 0:u.user_cert)!=null&&p.transfer?this.transferInfo=(d=(c=(a=(t=this.$store.state.app)==null?void 0:t.siteInfo)==null?void 0:a.moduleConfig)==null?void 0:c.user_cert)==null?void 0:d.transfer:this.transferInfo={account:"",realName:"",bankName:""}},methods:{goBack(){this.$confirm("<h3>\u786E\u5B9A\u4FEE\u6539\uFF1F</h3><br>\u4F01\u4E1A\u540D\u79F0\u4FEE\u6539\u6210\u529F\u540E\uFF0C\u8F6C\u8D26\u91D1\u989D\u4E5F\u5C06\u53D1\u751F\u53D8\u66F4\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7684\u94F6\u884C\u8D26\u6237\u8FDB\u884C\u6253\u6B3E",{distinguishCancelAndClose:!0,confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",dangerouslyUseHTMLString:!0}).then(()=>{this.$router.back()}).catch(e=>{})},async senSms(){await this.$util.request({url:"/v1/user_cert/cert/sendSms",data:{},method:"get"})},async loadData(){let e=await this.$util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});e.code==200?this.info=e.data.info:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})}}},r=window.Vue.createTextVNode,_=window.Vue.resolveComponent,o=window.Vue.withCtx,s=window.Vue.createVNode,l=window.Vue.toDisplayString,n=window.Vue.createElementVNode,w=window.Vue.openBlock,v=window.Vue.createElementBlock,V=window.Vue.createCommentVNode,C=window.Vue.pushScopeId,N=window.Vue.popScopeId,m=e=>(C("data-v-24d33435"),e=e(),N(),e),S={class:"box p-t"},B=r("\u4E2A\u4EBA\u8BBE\u7F6E"),E=r("\u7EC4\u7EC7\u4FE1\u606F\u586B\u5199"),D=r("\u9009\u62E9\u8BA4\u8BC1\u65B9\u5F0F"),F=r("\u5145\u503C\u8BA4\u8BC1"),T={class:"content p-b-md"},M={class:"tw6 text-black"},$={style:{}},q=r(" \u8BF7\u4F7F\u7528 "),A={class:"text-primary"},z=r(" \u7684\u4F01\u4E1A\u94F6\u884C\u8D26\u6237\u6253\u6B3E "),G={class:"text-primary"},H=m(()=>n("div",null,"\u4ED8\u6B3E\u65B9\u4FE1\u606F",-1)),L=m(()=>n("div",null,"\u6536\u6B3E\u65B9\u4FE1\u606F",-1)),U=r("\u7F51\u4E0A\u94F6\u884C / \u624B\u673A\u94F6\u884C / \u7535\u6C47 / \u652F\u7968 / \u540C\u57CE\u67DC\u53F0\u73B0\u91D1\u5B58\u6B3E"),j={key:0,class:"m-t hidden"},J=m(()=>n("div",{class:"m-t-lg text-black tw6"}," \u7ED3\u679C\u53CD\u9988 ",-1)),K=m(()=>n("div",{class:"text-primary"},[n("span",{class:"xyicon xyicon-warning text-primary"}),r(" \u8BF7\u6CE8\u610F ")],-1)),O=m(()=>n("ul",{class:"lh-2 text-primary p-l-md p-b-xs p-t-sm"},[n("li",{style:{"list-style":"disc"}},"\u8BF7\u57287\u5929\u5185\u5B8C\u6210\u6253\u6B3E\uFF0C\u7CFB\u7EDF\u5728\u6536\u5230\u94F6\u884C\u6C47\u6B3E\u540E\u5C06\u81EA\u52A8\u5145\u503C\uFF1B"),n("li",{style:{"list-style":"disc"}},"\u82E5\u6253\u6B3E\u9519\u8BEF\u6216\u5931\u8D25\uFF0C\u6B63\u5E38\u94F6\u884C\u4F1A\u505A\u81EA\u52A8\u9000\u56DE\u5904\u7406\uFF0C\u6709\u7591\u95EE\u662F\u8BF7\u8054\u94F6\u884C\uFF1B"),n("li",{style:{"list-style":"disc"}},"\u5BF9\u516C\u8F6C\u8D26\uFF08\u7EBF\u4E0B\u6C47\u6B3E\uFF09\u5230\u8D26\u65F6\u95F4\u4E00\u822C\u4E3A1\u4E2A\u5DE5\u4F5C\u65E5\u5185\uFF0C\u5177\u4F53\u5230\u8D26\u65F6\u95F4\u4EE5\u94F6\u884C\u7CFB\u7EDF\u5B9E\u9645\u4E3A\u51C6\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85")],-1));function P(e,i,u,p,t,a){const c=_("el-breadcrumb-item"),d=_("el-breadcrumb"),b=_("el-form-item"),g=_("el-form"),f=_("el-descriptions-item"),x=_("el-descriptions"),y=_("el-alert");return w(),v("div",S,[s(d,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:o(()=>[s(c,{to:{path:"/user/center"}},{default:o(()=>[B]),_:1}),s(c,null,{default:o(()=>[E]),_:1}),s(c,{class:"cursor-pointer",onClick:i[0]||(i[0]=h=>e.$router.back(-1))},{default:o(()=>[D]),_:1}),s(c,null,{default:o(()=>[F]),_:1})]),_:1}),n("div",T,[s(g,{"label-position":"left","label-width":"120px"},{default:o(()=>[s(b,{label:"\u8BA4\u8BC1\u65B9\u5F0F"},{default:o(()=>[n("h5",M,l(e.$store.state.app.siteInfo.title)+"\u5145\u503C\u8BA4\u8BC1",1),n("div",$,[q,n("span",A,l(t.info.realName),1),z,n("span",G,l(t.info.verifyMoney),1),r(" \u81F3"+l(e.$store.state.app.siteInfo.title)+"\u6536\u6B3E\u65B9\u3002 \u8BA4\u8BC1\u6210\u529F\u540E\uFF0C\u9A8C\u8BC1\u91D1\u5C06\u81EA\u52A8\u6253\u5165\u4F01\u4E1A\u7684"+l(e.$store.state.app.siteInfo.title)+"\u8D26\u6237\u4F59\u989D\u4E2D\u3002 ",1)])]),_:1}),H,s(b,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:o(()=>[r(l(t.info.realName)+" ",1),n("span",{class:"m-l text-primary",onClick:i[1]||(i[1]=(...h)=>a.goBack&&a.goBack(...h))},"\u4FEE\u6539\u540D\u79F0")]),_:1}),s(b,{label:"\u9700\u6253\u6B3E\u91D1\u989D"},{default:o(()=>[r(l(t.info.verifyMoney)+"\u5143 ",1)]),_:1})]),_:1}),L,s(y,{type:"",title:"",class:"receive-info m-t-sm ts-12",style:{background:"#EDF3F7"}},{default:o(()=>[s(x,{title:"",column:1,style:{background:"#EDF3F7"}},{default:o(()=>[s(f,{label:"\u8F6C\u8D26\u65B9\u5F0F"},{default:o(()=>[U]),_:1}),s(f,{label:"\u6536\u6B3E\u8D26\u53F7"},{default:o(()=>[r(l(t.transferInfo.account?t.transferInfo.account:""),1)]),_:1}),s(f,{label:"\u6536\u6B3E\u8D26\u6237\u540D\u79F0"},{default:o(()=>[r(l(t.transferInfo.realName?t.transferInfo.realName:""),1)]),_:1}),s(f,{label:"\u6536\u6B3E\u94F6\u884C\u540D\u79F0"},{default:o(()=>[r(l(t.transferInfo.bankName?t.transferInfo.bankName:""),1)]),_:1})]),_:1})]),_:1}),t.mobile?(w(),v("div",j,[r(" \u5C06\u6536\u6B3E\u65B9\u4FE1\u606F\u53D1\u9001\u81F3\u5B89\u5168\u624B\u673A\uFF1A"+l(t.countryCode)+" "+l(e.$util.middleAsterisk(t.mobile,3,4))+" ",1),n("span",{class:"text-primary cursor-pointer",onClick:i[2]||(i[2]=(...h)=>a.senSms&&a.senSms(...h))},"\u514D\u8D39\u53D1\u9001")])):V("",!0),J,s(y,{type:"",title:"",class:"alert2 m-t-sm ts-12",style:{background:"#E8F0FB"}},{default:o(()=>[K,O]),_:1})])])}var R=k(I,[["render",P],["__scopeId","data-v-24d33435"]]);export{R as default};