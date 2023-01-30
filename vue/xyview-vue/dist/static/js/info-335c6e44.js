var e=(e,t,i)=>new Promise(((o,a)=>{var l=e=>{try{d(i.next(e))}catch(t){a(t)}},s=e=>{try{d(i.throw(e))}catch(t){a(t)}},d=e=>e.done?o(e.value):Promise.resolve(e.value).then(l,s);d((i=i.apply(e,t)).next())}));import t from"./xy-builder-form-2e2d7a83.js";import{c as i}from"./lists-63b7875b.js";import{_ as o}from"../../index.js";import"./index-e1b4e256.js";const a={components:{xyBuilderForm:t,commentLists:i},data:()=>({id:0,info:{title:"",content:""},item:{pageData:{show:!1}},loading:!1,showReplyForm:!1,tradeNo:"",form:{payType:"wxpay"}}),mounted:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route(e,t){this.id=this.$route.params.id,this.loadData()}},methods:{down(){return e(this,null,(function*(){var e,t,i;this.loading=!0;let o=yield this.$util.request({url:"/v1/ext/addon/download/"+this.id,data:{},method:"post"});if(200==o.code)if(null==(e=o.data)?void 0:e.url)this.loading=!1,window.open(null==(t=o.data)?void 0:t.url);else if(null==(i=o.data)?void 0:i.needBuy){let e=yield this.$util.request({url:"/v1/order/order/submit",data:{oneOrder:1,orderInfo:[{spuId:this.id,skuId:0,amount:1,extra:{}}],extra:{module:"ext",service:"Order",payType:this.form.payType,payPlatform:"pc"}},method:"post"});if(200!=e.code)return this.loading=!1,void alert(e.msg);this.tradeNo=e.data.tradeNo,this.orderSets=e.data.orderSets,e.data.paySuccess?(this.$util.showToast({title:"支付成功",icon:"success",duration:2e3}),this.$router.push({path:"/ext/order/my"})):e.data.isRedirect?window.open(e.data.payString,"_blank"):window.open("/pay/order/qrpay?realMoney="+this.info.price+"&payType="+this.form.payType+"&tradeNo="+this.tradeNo+"&payString="+e.data.payString,"_blank")}else this.loading=!1,alert("出错");else this.loading=!1,alert(o.msg)}))},closeModel(e,t){this.item.pageData.show=!1,t&&this.loadData()},actionClick(t,i,o){return e(this,null,(function*(){let e=yield this.$util.request({url:"/v1/action/action/set",data:{dataId:t,dataModel:i,actionType:o},method:"post"});200==e.code?this.$util.showToast({title:e.msg,icon:"success",duration:2e3}):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})}))},loadData(){return e(this,null,(function*(){this.loading=!0;let e=yield this.$util.request({url:"/v1/ext/addon/info/"+this.id,data:{},method:"get"});200==e.code?this.info=e.data.info:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1}))}}},l=window.Vue.resolveComponent,s=window.Vue.createVNode,d=window.Vue.createTextVNode,n=window.Vue.withCtx,r=window.Vue.createElementVNode,u=window.Vue.normalizeStyle,c=window.Vue.toDisplayString,m=window.Vue.openBlock,p=window.Vue.createElementBlock,h=window.Vue.createCommentVNode,w=window.Vue.renderList,f=window.Vue.Fragment,y=window.Vue.resolveDirective,v=window.Vue.withDirectives,x=window.Vue.pushScopeId,g=window.Vue.popScopeId,b=e=>(x("data-v-b3410463"),e=e(),g(),e),V={class:"wrap"},k={class:"main p-t"},_={class:"container","element-loading-text":"拼命加载中"},T=["innerHTML"],$={class:"flex space-between flex-alignCenter m-t-sm m-b-sm"},C={class:"title ts-28"},D={class:"ts-16"},S=b((()=>r("i",{class:"xyicon xyicon-zan ts-14"},null,-1))),F=b((()=>r("i",{class:"xyicon xyicon-heart ts-14"},null,-1))),I={class:"m-t m-b-sm ts-14"},N={class:"m-t m-b-sm"},M={key:0,class:"subtitle text-error ts-14"},R={key:1,class:"subtitle text-success ts-14"},z={class:"m-b"},j={key:0,class:"text-error ts-13"},q={slot:"header",class:"flex space-between ts-16"},B=b((()=>r("div",null,[r("span",{class:"tw6 ts-18"},"介绍")],-1))),L={class:"m-t-md m-b"},P={class:"m-t-sm"};const O=o(a,[["render",function(e,t,i,o,a,x){const g=l("xy-header"),b=l("el-breadcrumb-item"),O=l("el-breadcrumb"),U=l("el-col"),E=l("el-button"),H=l("el-row"),A=l("xy-title"),G=l("xy-mavon-editor"),J=l("el-card"),K=l("comment-lists"),Q=l("xy-builder-form"),W=l("el-dialog"),X=l("xy-footer"),Y=y("loading");return m(),p("div",V,[s(g),r("div",k,[v((m(),p("div",_,[s(O,{class:"m-b","separator-class":"el-icon-arrow-right"},{default:n((()=>[s(b,{to:{path:"/ext"}},{default:n((()=>[d("首页")])),_:1}),s(b,{to:{path:"/ext"}},{default:n((()=>[d(" 扩展列表 ")])),_:1}),s(b,null,{default:n((()=>[d("扩展详情")])),_:1})])),_:1}),s(H,{class:"flex flex-wrap m-b-sm",type:"flex",gutter:25},{default:n((()=>[s(U,{xs:24,md:8,lg:6},{default:n((()=>[r("div",{class:"image cursor-pointer m-r",style:u({background:a.info.bgColor})},[r("div",{class:"icon",innerHTML:a.info.iconSvg},null,8,T)],4)])),_:1}),s(U,{xs:24,md:16,lg:18},{default:n((()=>[r("div",$,[r("h1",C,c(a.info.title),1),r("div",D,[s(E,{type:"default",size:"default",plain:"",onClick:t[0]||(t[0]=e=>x.actionClick(a.id,"ext_addon",1))},{default:n((()=>[S,d(" 点赞 ")])),_:1}),s(E,{type:"default",size:"default",plain:"",onClick:t[1]||(t[1]=e=>x.actionClick(a.id,"ext_addon",2))},{default:n((()=>[F,d(" 收藏 ")])),_:1})])]),r("div",I,"更新日期："+c(e.$util.timeFormat(a.info.updateTime)),1),r("div",N,["0.00"!=a.info.price?(m(),p("div",M,"￥"+c(a.info.price),1)):(m(),p("div",R,"免费"))]),r("div",z,[s(E,{type:"primary",size:"default",onClick:x.down},{default:n((()=>[d(" 下载 ")])),_:1},8,["onClick"])]),a.info.collecting?(m(),p("div",j," 本插件征集开发者中，获得通过的开发者将拥有插件优先展示的权力，详情请加交流群。 ")):h("",!0)])),_:1})])),_:1}),s(J,{shadow:"none",style:{"min-height":"400px"}},{default:n((()=>[r("div",q,[B,r("div",null,[a.info.uid==e.$store.state.user.userInfo.id?(m(),p("span",{key:0,class:"cursor-pointer ts-14",onClick:t[2]||(t[2]=e=>{a.item.pageData.show=!0})},"修改")):h("",!0)])]),r("div",L,[s(A,{class:"m-b"},{default:n((()=>[d("版本列表")])),_:1}),r("ul",null,[(m(!0),p(f,null,w(a.info.versionList,((t,i)=>(m(),p("li",{key:i},c(t.version)+" - "+c(e.$util.timeFormat(t.updateTime)),1)))),128))])]),s(G,{defaultOpen:"preview",codeStyle:"solarized-dark",previewBackground:"#fff",navigation:!1,editable:!1,subfield:!1,border:!1,ishljs:!1,toolbarsFlag:!1,modelValue:a.info.content,"onUpdate:modelValue":t[3]||(t[3]=e=>a.info.content=e)},null,8,["modelValue"])])),_:1}),r("div",P,[s(K,{title:"回复",urlPrefix:"/ext",showReplyForm:a.showReplyForm,"onUpdate:showReplyForm":t[4]||(t[4]=e=>a.showReplyForm=e),dataId:a.id,dataModel:"ext_addon"},null,8,["showReplyForm","dataId"])])])),[[Y,a.loading]])]),s(W,{class:"ts-16",title:"修改插件",modelValue:a.item.pageData.show,"onUpdate:modelValue":t[6]||(t[6]=e=>a.item.pageData.show=e),width:"70%"},{default:n((()=>[s(Q,{api:"/v1/ext/addon/edit/"+this.id,show:a.item.pageData.show,pitem:a.item,onClose:t[5]||(t[5]=e=>x.closeModel(a.item,e))},null,8,["api","show","pitem"])])),_:1},8,["modelValue"]),s(X)])}],["__scopeId","data-v-b3410463"]]);export{O as default};