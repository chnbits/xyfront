import{_ as e}from"./side-7998e2ef.js";import{_ as t}from"../../index.js";const l=window.Vue.resolveComponent,i=window.Vue.createVNode,a=window.Vue.createElementVNode,o=window.Vue.createTextVNode,s=window.Vue.withCtx,d=window.Vue.openBlock,n=window.Vue.createBlock,r=window.Vue.createCommentVNode,u=window.Vue.renderList,p=window.Vue.Fragment,c=window.Vue.createElementBlock,v=window.Vue.toDisplayString,m=window.Vue.pushScopeId,w=window.Vue.popScopeId,h={class:"container"},f={class:"filter-box ts-13 bg-white p-a-md"},g={class:"m-t bg-white project-list p-a-md"},x={class:"m-r hidden-xs"},y=["src"],V={class:"flex-1"},b={class:"flex space-between"},_={class:"ts-17"},j={class:"ts-13"},L={class:"text-danger price"},k={class:"flex ts-14 m-t-sm m-b-xs"},C={class:"m-r"},O={class:"m-r"},z={class:"m-r"},D={class:"text-666 ts-13 m-t-sm"},N=(e=>(m("data-v-27b80021"),e=e(),w(),e))((()=>a("span",{class:"m-r"},"发布",-1))),P={data:()=>({loading:!1,filterOptions:[{name:"requireRole",title:"角色",type:"radio",options:[{title:"全部",value:""},{title:"开发团队",value:"team"},{title:"开发工程师",value:"devloper"},{title:"产品设计师",value:"designer"},{title:"测试工程师",value:"tester"},{title:"产品/项目经理",value:"producter"}]},{name:"tag",title:"项目标签",type:"radio",options:[{title:"全部",value:""},{title:"需求明确",value:"需求明确"},{title:"全新产品",value:"全新产品"},{title:"二次开发",value:"二次开发"},{title:"工具插件",value:"工具插件"},{title:"接口开发",value:"接口开发"}]},{name:"type",title:"项目类型",type:"radio",options:[{title:"全部",value:""},{title:"Web网站",value:"pc"},{title:"手机APP",value:"mapp"},{title:"微信小程序",value:"wxapp"},{title:"微信公众号",value:"wxmp"},{title:"H5网站",value:"h5"},{title:"其它",value:"other"}]},{name:"price",title:"项目预算",type:"radio",options:[{title:"全部",value:0},{title:"0-5K",value:1},{title:"5K-1万",value:2},{title:"1万-3万",value:3},{title:"3万-5W",value:4},{title:"5W以上",value:5}]},{name:"period",title:"项目周期",type:"radio",options:[{title:"全部",value:0},{title:"小于30天",value:1},{title:"30天-60天",value:2},{title:"60天-90天",value:3},{title:"90天以上",value:4}]}],filters:{},dataList:{}}),created:function(){this.loadData()},watch:{},methods:{toggleOption(e){this.filters=e,this.loadData()},loadData(){return e=this,t=null,l=function*(){this.loading=!0;let e=yield this.$util.request({url:"/v1/zb/project/lists",data:this.filters,method:"get"});200==e.code?this.dataList=e.data.dataList:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1},new Promise(((i,a)=>{var o=e=>{try{d(l.next(e))}catch(t){a(t)}},s=e=>{try{d(l.throw(e))}catch(t){a(t)}},d=e=>e.done?i(e.value):Promise.resolve(e.value).then(o,s);d((l=l.apply(e,t)).next())}));var e,t,l}}},q=t(Object.assign(P,{__name:"lists",setup:t=>(t,m)=>{const w=l("xy-filter-list"),P=l("el-button"),q=l("router-link"),B=l("el-empty"),I=l("el-skeleton"),S=l("el-col"),W=l("el-row");return d(),c("div",null,[a("div",h,[i(W,{gutter:20},{default:s((()=>[i(S,{xs:24,sm:24,md:24,lg:17,offset:0},{default:s((()=>[a("div",f,[i(w,{class:"p-t-sm",options:t.filterOptions,onChanged:t.toggleOption,rows:2},null,8,["options","onChanged"])]),a("div",g,[i(I,{rows:3,count:5,animated:"",loading:t.loading},{default:s((()=>[0==t.dataList.length?(d(),n(B,{key:0,description:"暂无数据"},{default:s((()=>[i(q,{to:"/zb/project/add"},{default:s((()=>[i(P,{type:"primary",size:"default"},{default:s((()=>[o("我来发布需求")])),_:1})])),_:1})])),_:1})):r("",!0),(d(!0),c(p,null,u(t.dataList,((e,t)=>(d(),c("div",{key:t,class:"project-list_item flex border-bottom_1px"},[a("div",x,[a("img",{class:"cover",src:e.cover,alt:"",width:"140",height:"80"},null,8,y)]),a("div",V,[a("div",b,[a("h3",_,[i(q,{to:"/zb/project/info/"+e.id},{default:s((()=>[o(v(e.title),1)])),_:2},1032,["to"])]),a("div",j,[a("span",L,"¥"+v(e.price),1)])]),a("ul",k,[a("li",C,"招募："+v(e.requireRoleLabel),1),a("li",O,"类型："+v(e.typeLabel),1),a("li",z,"周期："+v(e.period)+"天",1)]),a("div",D,[N,a("span",null,v(e.applyCount)+"人报名",1)])])])))),128))])),_:1},8,["loading"])])])),_:1}),i(S,{xs:24,sm:24,md:24,lg:7,offset:0},{default:s((()=>[i(e)])),_:1})])),_:1})])])}}),[["__scopeId","data-v-27b80021"]]);export{q as default};