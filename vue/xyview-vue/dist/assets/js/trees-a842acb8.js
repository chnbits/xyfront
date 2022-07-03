import{c as L}from"./lists-155236f6.js";import{_ as D}from"../index-726dc959.js";window.Vue.defineAsyncComponent;const g=window.Vue.nextTick,E={components:{"comment-lists":L},data(){return{id:0,info:{},dataList:[],current:{},loading:!1,showReplyForm:!0,query:{},navShow:!1,defaultExpandedKeys:[]}},created:async function(){this.id=this.$route.params.id,this.query=this.$util.getUrlQuery(),await this.loadData(),this.query.id?(this.current=this.$util.treeSearch(this.dataList,this.query.id),console.log(this.current)):this.current=this.dataList[0],await g()},watch:{$route(o,n){this.id=this.$route.params.id,this.loadData()},"current.content"(o){}},methods:{async open(o,n){this.current=n,this.navShow=!1;let u=location.href;u=location.href.split("?");const m=u[0]+`?id=${n.id}`;window.history.replaceState("","",m);let e=document.getElementById("right");e.scrollTop=0,await g()},async loadData(){this.loading=!0;let o=await this.$util.request({url:"/v1/doc/chapter/trees/"+this.id,data:{},method:"get"});o.code==200?(this.info=o.data.info,this.dataList=o.data.dataList,this.defaultExpandedKeys=o.data.info.defaultExpandedKeys):this.$util.showToast({title:o.msg,icon:"loading",duration:3e3}),this.loading=!1}}},p=window.Vue.toDisplayString,T=window.Vue.normalizeClass,d=window.Vue.createElementVNode,l=window.Vue.resolveComponent,s=window.Vue.withCtx,a=window.Vue.createVNode,v=window.Vue.createTextVNode,N=window.Vue.renderList,B=window.Vue.Fragment,r=window.Vue.openBlock,c=window.Vue.createElementBlock,q=window.Vue.createCommentVNode,R=window.Vue.resolveDirective,z=window.Vue.withDirectives,K=window.Vue.pushScopeId,U=window.Vue.popScopeId,P=o=>(K("data-v-139e61a3"),o=o(),U(),o),X={class:"wrap"},A=P(()=>d("div",{class:"p-r-lg hidden-xs"},[d("a",{href:"https://www.aliyun.com/minisite/goods?userCode=gi8nxxhq",target:"_blank"},[d("img",{class:"opacity-85",src:"https://img.alicdn.com/tfs/TB1otdTyAT2gK0jSZFkXXcIQFXa-2880-120.png"})])],-1)),Q={class:"main p"},j={class:"container1","element-loading-text":"\u62FC\u547D\u52A0\u8F7D\u4E2D"},M=v(" \u6253\u5F00\u76EE\u5F55 "),O={class:"custom-tree-node flex flex-1 flex-alignCenter"},Z=["onClick"],G={class:"custom-tree-node flex flex-1 flex-alignCenter"},H=["onClick"],J={class:"m-t"},W={key:0,class:"m-t-md"};function Y(o,n,u,m,e,h){const x=l("xy-header-default"),y=l("el-link"),_=l("el-tree"),k=l("el-drawer"),f=l("el-col"),V=l("xy-mavon-editor"),b=l("el-button"),C=l("comment-lists"),S=l("el-row"),F=l("el-card"),I=R("loading");return r(),c("div",X,[a(x,{hasContainerProp:!1},{logo:s(()=>{var t;return[d("div",{class:T(["tw5 ts-22 text-gray-600","text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 via-blue-600"])},p(((t=e.info)==null?void 0:t.title)||e.id+"\u6587\u6863"),1)]}),"left-nav":s(()=>[A]),_:1}),d("div",Q,[z((r(),c("div",j,[a(F,{shadow:"none",style:{"min-height":"400px"}},{default:s(()=>[a(y,{type:"primary",onClick:n[0]||(n[0]=t=>e.navShow=!0),class:"hidden-lg-and-up m-b"},{default:s(()=>[M]),_:1}),a(k,{title:"\u6587\u6863\u76EE\u5F55",modelValue:e.navShow,"onUpdate:modelValue":n[1]||(n[1]=t=>e.navShow=t),size:"250px",direction:"ltr"},{default:s(()=>[a(_,{class:"m-b-md",data:e.dataList,"node-key":"id","default-expand-all":!1,"highlight-current":"","expand-on-click-node":!0},{default:s(({node:t,data:i})=>[d("div",O,[d("div",{class:"flex-1 ts-14 tw5 flex flex-alignCenter",style:{height:"100%"},onClick:w=>h.open(t,i)},p(i==null?void 0:i.title),9,Z)])]),_:1},8,["data"])]),_:1},8,["modelValue"]),a(S,{class:"flex flex-wrap",type:"flex",gutter:25},{default:s(()=>[a(f,{xs:0,sm:24,md:5,lg:5,xl:4,class:"left hidden-md-and-down"},{default:s(()=>[a(_,{class:"m-b-md p-t-sm",data:e.dataList,"node-key":"id","default-expand-all":!1,"default-expanded-keys":e.defaultExpandedKeys,"highlight-current":"","expand-on-click-node":!0},{default:s(({node:t,data:i})=>[d("div",G,[d("div",{class:"flex-1 ts-14 tw5 flex flex-alignCenter",style:{height:"100%"},onClick:w=>h.open(t,i)},p(i==null?void 0:i.title),9,H)])]),_:1},8,["data","default-expanded-keys"])]),_:1}),a(f,{xs:24,sm:24,md:24,lg:{span:17,offset:1},xl:{span:14,offset:3},class:"right",id:"right"},{default:s(()=>[a(V,{class:"p-t-sm",defaultOpen:"preview",codeStyle:"solarized-dark",previewBackground:"#fff",navigation:!1,editable:!1,subfield:!1,border:!1,toolbarsFlag:!1,modelValue:e.current.content,"onUpdate:modelValue":n[2]||(n[2]=t=>e.current.content=t)},null,8,["modelValue"]),d("div",J,[(r(!0),c(B,null,N(e.current.children,(t,i)=>(r(),c("div",{key:i},[a(b,{type:"text",class:"ts-16 tw5",onClick:w=>h.open("",t)},{default:s(()=>[v(p(t.title),1)]),_:2},1032,["onClick"])]))),128))]),e.current.id?(r(),c("div",W,[a(C,{title:"\u8BC4\u8BBA",urlPrefix:"/docs/"+this.id,showReplyForm:e.showReplyForm,"onUpdate:showReplyForm":n[3]||(n[3]=t=>e.showReplyForm=t),dataId:e.current.id,dataModel:"doc_chapter"},null,8,["urlPrefix","showReplyForm","dataId"])])):q("",!0)]),_:1})]),_:1})]),_:1})])),[[I,e.loading]])])])}var te=D(E,[["render",Y],["__scopeId","data-v-139e61a3"]]);export{te as default};
