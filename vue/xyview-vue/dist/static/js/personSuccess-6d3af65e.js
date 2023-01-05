var e=(e,t,i)=>new Promise(((a,n)=>{var s=e=>{try{o(i.next(e))}catch(t){n(t)}},l=e=>{try{o(i.throw(e))}catch(t){n(t)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,l);o((i=i.apply(e,t)).next())}));import{_ as t}from"../../index.js";const i={data(){var e;return{loading:!1,change:1,info:{},mobile:null==(e=this.$store.state.user.userInfo)?void 0:e.mobile}},created:function(){this.loadData()},watch:{},methods:{pullback(){return e(this,null,(function*(){this.$confirm("确定要撤回实名认证申请吗？",{distinguishCancelAndClose:!0,confirmButtonText:"确定撤销",cancelButtonText:"取消操作",dangerouslyUseHTMLString:!0}).then((()=>{this.doPullback()})).catch((e=>{}))}))},doPullback(){return e(this,null,(function*(){this.loading=!0;let e=yield this.$util.request({url:"/v1/user_cert/cert/pullback",data:{id:this.info.id},method:"put"});200==e.code?(this.info=e.data.info,this.loadData(),this.$util.showToast({title:e.msg,icon:"success",duration:2e3})):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1}))},loadData(){return e(this,null,(function*(){this.loading=!0;let e=yield this.$util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});if(200==e.code){if(this.info=e.data.info,this.info&&2===this.info.certCate)this.$router.push({path:"/user_cert/cert/organizationSuccess"})}else this.$util.showToast({title:e.msg,icon:"loading",duration:3e3});this.loading=!1}))}}},a=window.Vue.createTextVNode,n=window.Vue.resolveComponent,s=window.Vue.withCtx,l=window.Vue.createVNode,o=window.Vue.toDisplayString,r=window.Vue.openBlock,c=window.Vue.createElementBlock,d=window.Vue.createCommentVNode,u=window.Vue.createElementVNode,p=window.Vue.createBlock,f=window.Vue.resolveDirective,w=window.Vue.withDirectives,h=window.Vue.pushScopeId,m=window.Vue.popScopeId,y=e=>(h("data-v-5a5cc3fe"),e=e(),m(),e),g={class:"box p-t"},x={class:"content space-between"},v={key:0},b={key:1},k={key:2},_={key:3},V={key:4},S={class:"m-b-md"},$={key:0,class:"ts-16",style:{"margin-bottom":"17px"}},C=[y((()=>u("span",null,[u("i",{class:"xyicon xyicon-warning text-warning m-r-xs"}),a(" 认证超时，您认证失败超过3次，请您使用 "),u("span",{class:"text-primary"},"人工视频审核")],-1)))],T={key:1,class:"ts-16",style:{"margin-bottom":"17px"}},D=y((()=>u("i",{class:"xyicon xyicon-warning text-warning m-r-xs"},null,-1))),N=y((()=>u("div",{class:"ts-16",style:{"margin-bottom":"17px"}},[u("span",null,[u("i",{class:"xyicon xyicon-warning text-warning m-r-xs"}),a(" 如对结果疑问或者异议，您可以联系客服。 ")])],-1))),B={class:"text-right"},I={key:0,class:"box"},P=y((()=>u("div",{class:"bg-white p-t tw5 p-b-sm p-l"}," 变更认证 ",-1))),z={class:"content p-b-md"},A=y((()=>u("div",{class:"content flex flex-alignCenter ts-14"},[u("span",{class:"xyicon xyicon-help ts-16 text-primary m-r-sm"}),a(" 如果个人实名认证后需要变更为组织类型，可以点击以下选项。 ")],-1))),q={class:"p-t-lg p-b-lg"},E={class:"flex space-between m-b"},F=y((()=>u("div",{class:"flex-1"},[u("h4",{class:"m-b"},"组织实名认证"),u("p",{class:"text-666 ts-13"},"一般为企业/政府/团体/事业单位/组织，使用营业执照、组织机构代码证等证件认证。")],-1)));const L=t(i,[["render",function(e,t,i,h,m,y){const L=n("el-breadcrumb-item"),R=n("el-breadcrumb"),j=n("el-descriptions-item"),H=n("el-descriptions"),M=n("el-col"),U=n("el-alert"),G=n("el-button"),J=n("el-row"),K=n("router-link"),O=f("loading");return r(),c("div",null,[u("div",g,[l(R,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:s((()=>[l(L,{to:{path:"/user/center"}},{default:s((()=>[a("个人设置")])),_:1}),l(L,null,{default:s((()=>[a("实名认证")])),_:1})])),_:1}),w((r(),c("div",x,[l(J,{gutter:20},{default:s((()=>[l(M,{xs:24,sm:24,md:14,lg:16,offset:0},{default:s((()=>[l(H,{title:"",column:2},{default:s((()=>[l(j,{label:"审核方式"},{default:s((()=>[a(o(m.info.apiTypeLabel),1)])),_:1}),l(j,{label:"真实姓名"},{default:s((()=>[a(o(e.$util.middleAsterisk(m.info.realName,1,0)),1)])),_:1}),l(j,{label:"身份证号"},{default:s((()=>[a(o(e.$util.middleAsterisk(m.info.certNo,3,1)),1)])),_:1}),l(j,{label:"当前状态"},{default:s((()=>[1==m.info.reviewState?(r(),c("span",v,"已通过审核")):0==m.info.reviewState?(r(),c("span",b,"待审核")):-1==m.info.reviewState?(r(),c("span",k,"认证失败")):-2==m.info.reviewState?(r(),c("span",_,"撤回认证")):-3==m.info.reviewState?(r(),c("span",V,"待提交")):d("",!0)])),_:1}),l(j,{label:"认证时间"},{default:s((()=>[a(o(e.$util.timeFormat(m.info.updateTime)),1)])),_:1})])),_:1})])),_:1}),l(M,{xs:24,sm:24,md:10,lg:8,offset:0},{default:s((()=>[u("div",S,[-1==m.info.reviewState?(r(),p(U,{key:0,class:"lh-1-6 ts-14",type:"warning",closable:!1},{default:s((()=>[m.info.apiFailCount>=3?(r(),c("div",$,C)):d("",!0),m.info.failReason?(r(),c("div",T,[u("span",null,[D,a(" "+o(m.info.failReason),1)])])):d("",!0),N])),_:1})):d("",!0)]),u("div",B,[-3==m.info.reviewState?(r(),p(G,{key:0,type:"primary",style:{width:"142px","border-radius":"4px"},onClick:t[0]||(t[0]=t=>e.$router.push("/user_cert/cert/person"))},{default:s((()=>[a("继续认证")])),_:1})):d("",!0),-1==m.info.reviewState||-2==m.info.reviewState?(r(),p(G,{key:1,type:"warning",style:{width:"142px","border-radius":"4px"},onClick:t[1]||(t[1]=t=>e.$router.push("/user_cert/cert/person"))},{default:s((()=>[a("重新认证")])),_:1})):d("",!0),0==m.info.reviewState?(r(),p(G,{key:2,type:"danger",style:{width:"142px","border-radius":"4px"},onClick:y.pullback},{default:s((()=>[a("撤回申请")])),_:1},8,["onClick"])):d("",!0),1==m.info.reviewState?(r(),p(G,{key:3,type:"warning",style:{width:"142px","border-radius":"4px"},onClick:t[2]||(t[2]=t=>e.$router.push("/user_cert/cert/index?change=1"))},{default:s((()=>[a("重新认证")])),_:1})):d("",!0)])])),_:1})])),_:1})])),[[O,m.loading]])]),m.info.id?(r(),c("div",I,[P,u("div",z,[A,u("div",q,[u("div",E,[F,l(K,{to:{path:"/user_cert/cert/organization?change="+m.change},tag:"a"},{default:s((()=>[l(G,{type:"primary",size:"default",plain:"",class:"cursor-pointer"},{default:s((()=>[a("立即变更")])),_:1})])),_:1},8,["to"])])])])])):d("",!0)])}],["__scopeId","data-v-5a5cc3fe"]]);export{L as default};
