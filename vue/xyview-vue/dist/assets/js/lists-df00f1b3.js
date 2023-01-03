import{_ as h}from"./side-509a3e09.js";import{a as w}from"../index-91ea30ae.js";const i=window.Vue.resolveComponent,s=window.Vue.createVNode,t=window.Vue.createElementVNode,f=window.Vue.renderList,g=window.Vue.Fragment,d=window.Vue.openBlock,c=window.Vue.createElementBlock,l=window.Vue.toDisplayString,x=window.Vue.createTextVNode,a=window.Vue.withCtx,V=window.Vue.pushScopeId,y=window.Vue.popScopeId,b=e=>(V("data-v-85ed70a8"),e=e(),y(),e),k={class:"container"},j={class:"filter-box ts-13 bg-white p-a-md"},L={class:"m-t bg-white project-list p-a-md"},C={class:"m-r"},S=["src"],I={class:"flex-1"},N={class:"flex space-between"},D={class:"ts-17"},O={class:"ts-13"},B={class:"text-danger price"},E={class:"flex ts-14 m-t-sm m-b-xs"},q={class:"m-r"},T={class:"m-r"},W={class:"m-r"},$={class:"text-666 ts-13 m-t-sm"},z=b(()=>t("span",{class:"m-r"},"\u53D1\u5E03",-1)),F={data(){return{loading:!1,filterOptions:[{name:"requireRole",title:"\u89D2\u8272",type:"radio",options:[{title:"\u5168\u90E8",value:""},{title:"\u5F00\u53D1\u56E2\u961F",value:"team"},{title:"\u5F00\u53D1\u5DE5\u7A0B\u5E08",value:"devloper"},{title:"\u4EA7\u54C1\u8BBE\u8BA1\u5E08",value:"designer"},{title:"\u6D4B\u8BD5\u5DE5\u7A0B\u5E08",value:"tester"},{title:"\u4EA7\u54C1/\u9879\u76EE\u7ECF\u7406",value:"producter"}]},{name:"tag",title:"\u9879\u76EE\u6807\u7B7E",type:"radio",options:[{title:"\u5168\u90E8",value:""},{title:"\u9700\u6C42\u660E\u786E",value:"\u9700\u6C42\u660E\u786E"},{title:"\u5168\u65B0\u4EA7\u54C1",value:"\u5168\u65B0\u4EA7\u54C1"},{title:"\u4E8C\u6B21\u5F00\u53D1",value:"\u4E8C\u6B21\u5F00\u53D1"},{title:"\u5DE5\u5177\u63D2\u4EF6",value:"\u5DE5\u5177\u63D2\u4EF6"},{title:"\u63A5\u53E3\u5F00\u53D1",value:"\u63A5\u53E3\u5F00\u53D1"}]},{name:"type",title:"\u9879\u76EE\u7C7B\u578B",type:"radio",options:[{title:"\u5168\u90E8",value:""},{title:"Web\u7F51\u7AD9",value:"pc"},{title:"\u624B\u673AAPP",value:"mapp"},{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",value:"wxapp"},{title:"\u5FAE\u4FE1\u516C\u4F17\u53F7",value:"wxmp"},{title:"H5\u7F51\u7AD9",value:"h5"},{title:"\u5176\u5B83",value:"other"}]},{name:"price",title:"\u9879\u76EE\u9884\u7B97",type:"radio",options:[{title:"\u5168\u90E8",value:0},{title:"0-5K",value:1},{title:"5K-1\u4E07",value:2},{title:"1\u4E07-3\u4E07",value:3},{title:"3\u4E07-5W",value:4},{title:"5W\u4EE5\u4E0A",value:5}]},{name:"period",title:"\u9879\u76EE\u5468\u671F",type:"radio",options:[{title:"\u5168\u90E8",value:0},{title:"\u5C0F\u4E8E30\u5929",value:1},{title:"30\u5929-60\u5929",value:2},{title:"60\u5929-90\u5929",value:3},{title:"90\u5929\u4EE5\u4E0A",value:4}]}],filters:{},dataList:{}}},created:function(){this.loadData()},watch:{},methods:{toggleOption(e){this.filters=e,this.loadData()},async loadData(){this.loading=!0;let e=await this.$util.request({url:"/v1/zb/project/lists",data:this.filters,method:"get"});e.code==200?this.dataList=e.data.dataList:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1}}},K=Object.assign(F,{__name:"lists",setup(e){return(n,P)=>{const _=i("xy-filter-list"),p=i("router-link"),u=i("el-skeleton"),r=i("el-col"),v=i("el-row");return d(),c("div",null,[t("div",k,[s(v,{gutter:20},{default:a(()=>[s(r,{xs:24,sm:24,md:24,lg:17,offset:0},{default:a(()=>[t("div",j,[s(_,{class:"p-t-sm",options:n.filterOptions,onChanged:n.toggleOption,rows:2},null,8,["options","onChanged"])]),t("div",L,[s(u,{rows:3,count:5,animated:"",loading:n.loading},{default:a(()=>[(d(!0),c(g,null,f(n.dataList,(o,m)=>(d(),c("div",{key:m,class:"project-list_item flex border-bottom_1px"},[t("div",C,[t("img",{class:"cover",src:o.cover,alt:"",width:"140",height:"80"},null,8,S)]),t("div",I,[t("div",N,[t("h3",D,[s(p,{to:"/zb/project/info/"+o.id},{default:a(()=>[x(l(o.title),1)]),_:2},1032,["to"])]),t("div",O,[t("span",B,"\xA5"+l(o.price),1)])]),t("ul",E,[t("li",q,"\u62DB\u52DF\uFF1A"+l(o.requireRoleLabel),1),t("li",T,"\u7C7B\u578B\uFF1A"+l(o.typeLabel),1),t("li",W,"\u5468\u671F\uFF1A"+l(o.period)+"\u5929",1)]),t("div",$,[z,t("span",null,l(o.applyCount)+"\u4EBA\u62A5\u540D",1)])])]))),128))]),_:1},8,["loading"])])]),_:1}),s(r,{xs:24,sm:24,md:24,lg:7,offset:0},{default:a(()=>[s(h)]),_:1})]),_:1})])])}}});var H=w(K,[["__scopeId","data-v-85ed70a8"]]);export{H as default};