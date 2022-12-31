import{_ as e}from"./_plugin-vue_export-helper-1b428a4d.js";const t={name:"XyBuilderDoc",props:{api:"",cloudId:0,eid:0,show:!1,predata:""},components:{},data:()=>({loading:!1,docData:{docList:""},current:{doc:[]},columns:[{title:"是否必须",key:"require"},{title:"参数名",key:"name"},{title:"参数标题",key:"title"},{title:"说明",key:"description"},{title:"示例",key:"example"}]}),watch:{show(e){this.docData={},1==e&&this.loadData()}},beforeCreate:function(){},created(){this.cloudId||this.$route.query.cloudId&&(this.cloudId=this.$route.query.cloudId),this.eid||this.$route.query.eid&&(this.eid=this.$route.query.eid),this.predata?this.docData=this.predata:this.loadData()},beforeMount(){},mounted(){},activated(){},deativated(){},beforeUpdate(){},updated(){},beforeDestroy(){},destroyed(){},methods:{renderContent(e,{root:t,node:a,data:d}){let i="",o="";return"dev"==d.devState?(i="magenta",o="开发中"):"prod"==d.devState&&(i="green",o="已完成"),e("span",{class:{"ivu-tree-title":!0},style:{display:"inline-block",width:"100%"}},[e("span",{on:{click:()=>{this.showDoc([d])}}},[e("span",d.title),e("Tag",{props:{color:i},style:{margin:0,display:"inline-block",transform:"scale(0.6)",padding:"0 4px"}},[e("span",o)])])])},showDoc(e){this.current=e[0]},async loadChildren(e,t){let a=await this.$xyutil.request({url:this.api+"?menuLayer="+e.menuLayer+"&pmenu="+e.path,method:"get",header:{CloudId:this.cloudId,Eid:this.eid}});200==a.code&&t(a.data.dataList)},async loadData(e=""){if(""!=e&&(this.api=e),this.loading=!0,this.api){let e=await this.$xyutil.request({url:this.api,method:"get",header:{CloudId:this.cloudId,Eid:this.eid}});200==e.code&&(this.docData.docList=e.data.dataList)}this.loading=!1}}},a=window.Vue.resolveComponent,d=window.Vue.createVNode,i=window.Vue.withCtx,o=window.Vue.renderList,l=window.Vue.Fragment,n=window.Vue.openBlock,s=window.Vue.createElementBlock,r=window.Vue.createElementVNode,c=window.Vue.toDisplayString,u=window.Vue.createTextVNode,p=window.Vue.createBlock,h=window.Vue.createCommentVNode,y={class:"xy_builder-doc-wrap"},m={class:"content"},w={class:"line"},g=r("div",{class:"title"}," 接口说明 ",-1),v={class:"content"},f={class:"line"},k={class:"title"},V=u(" 接口地址 "),b=u("开发中"),x=u("已完成"),_={class:"content"},D={class:"line"},C=r("div",{class:"title"}," 请求参数 ",-1),S={class:"content"},I={class:"line"},L=r("div",{class:"title"}," 返回结果 ",-1),q=r("div",{class:"content"},null,-1),T=r("div",null,"Loading",-1);const $=e(t,[["render",function(e,t,u,$,j,B){const E=a("Tree"),N=a("Col"),O=a("Divider"),z=a("Tag"),M=a("Table"),X=a("Row"),F=a("Icon"),P=a("Spin");return n(),s("div",y,[r("div",m,[0==j.loading?(n(),p(X,{key:0,type:"flex",justify:"center",align:"top"},{default:i((()=>[d(N,{xs:24,sm:8,md:6,lg:4,style:{"border-right":"1px solide #eee"}},{default:i((()=>[d(E,{class:"list",data:j.docData.docList,render:B.renderContent,"load-data":B.loadChildren,onOnSelectChange:B.showDoc},null,8,["data","render","load-data","onOnSelectChange"])])),_:1}),d(N,{xs:24,sm:16,md:18,lg:20},{default:i((()=>[(n(!0),s(l,null,o(j.current.doc,((e,t)=>(n(),s("div",{key:t},[r("div",w,[g,d(O),r("div",v,c(e.tabValues.description),1)]),r("div",f,[r("div",k,[V,j.current.devState&&"dev"==j.current.devState?(n(),p(z,{key:0,style:{margin:"0",display:"inline-block",transform:"scale(0.6)",padding:"0 4px"},color:"magenta"},{default:i((()=>[b])),_:1})):j.current.devState&&"prod"==j.current.devState?(n(),p(z,{key:1,style:{margin:"0",display:"inline-block",transform:"scale(0.6)",padding:"0 4px"},color:"green"},{default:i((()=>[x])),_:1})):h("",!0)]),d(O),r("div",_,c(t)+" "+c(j.current.api),1)]),r("div",D,[C,d(O),r("div",S,[d(M,{border:"",columns:j.columns,data:e.tabValues.params},null,8,["columns","data"])])]),r("div",I,[L,d(O),q])])))),128))])),_:1})])),_:1})):(n(),p(X,{key:1,style:{"margin-top":"30px"}},{default:i((()=>[d(N,{class:"spin-col",span:"24"},{default:i((()=>[d(P,{fix:""},{default:i((()=>[d(F,{type:"ios-loading",size:"22",class:"spin-icon-load"}),T])),_:1})])),_:1})])),_:1}))])])}]]),j=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{$ as X,j as _};
