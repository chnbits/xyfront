import{h as t}from"./hot_list-9088a70d.js";import{_ as e}from"../../index.js";const a={name:"ForumPostLists",components:{"hot-list":t},data:()=>({loading:!1,cateId:"",dataList:[],dataPage:{page:1,limit:10,total:0}}),created:function(){this.$route.params.cateId&&(this.cateId=this.$route.params.cateId),this.loadData()},watch:{$route(t){this.$route.params.cateId&&(this.cateId=this.$route.params.cateId),this.loadData()}},methods:{loadData(){return t=this,e=null,a=function*(){this.loading=!0;let t=yield this.$util.request({url:"/v1/forum/post/lists/"+this.cateId,data:{},method:"get"});200==t.code?(this.dataList=t.data.dataList,this.dataPage=t.data.dataPage):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3}),this.loading=!1},new Promise(((s,o)=>{var i=t=>{try{d(a.next(t))}catch(e){o(e)}},l=t=>{try{d(a.throw(t))}catch(e){o(e)}},d=t=>t.done?s(t.value):Promise.resolve(t.value).then(i,l);d((a=a.apply(t,e)).next())}));var t,e,a}}},s=window.Vue.createElementVNode,o=window.Vue.createTextVNode,i=window.Vue.resolveComponent,l=window.Vue.normalizeClass,d=window.Vue.withCtx,n=window.Vue.createVNode,r=window.Vue.renderList,c=window.Vue.Fragment,u=window.Vue.openBlock,m=window.Vue.createElementBlock,w=window.Vue.toDisplayString,h=window.Vue.createCommentVNode,p=window.Vue.pushScopeId,g=window.Vue.popScopeId,f=t=>(p("data-v-542e4c08"),t=t(),g(),t),x={class:"container"},v=f((()=>s("span",{class:"ts-16"},"最新",-1))),b={class:"case-list",style:{"min-height":"300px"}},V={class:"m-r text-center bg-indo"},y={class:"ts-14 m-b-xs"},I=f((()=>s("div",{class:"text-gray ts-12"},"回复",-1))),_={class:"m-r text-center text-gray"},k={class:"ts-18 m-b-xs"},$=f((()=>s("div",{class:"ts-12"},"浏览",-1))),C={class:"bg-white flex-1"},L={class:"info flex space-between text-gray ts-12"},P={class:"subtitle text-gray ts-12"};const D=e(a,[["render",function(t,e,a,p,g,f){const D=i("router-link"),N=i("el-button"),F=i("el-alert"),S=i("el-skeleton"),T=i("el-card"),j=i("el-col"),B=i("hot-list"),E=i("el-row");return u(),m("div",x,[n(E,{class:"flex flex-wrap",type:"flex",gutter:20},{default:d((()=>[n(j,{xs:24,lg:17,class:"m-b-sm"},{default:d((()=>[n(T,{class:"box-card",shadow:"never"},{header:d((()=>[v,n(N,{style:{float:"right",padding:"3px 0"},link:""},{default:d((()=>[n(D,{to:"/forum/post/add",class:l("tw5 ts-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500 via-blue-600")},{default:d((()=>[o(" 发布帖子 ")])),_:1})])),_:1})])),default:d((()=>[s("div",b,[n(S,{rows:3,count:5,animated:"",loading:g.loading},{default:d((()=>[g.loading?h("",!0):(u(!0),m(c,{key:0},r(g.dataList,((e,a)=>(u(),m("div",{class:"item flex flex-alignCenter border-bottom_1px",key:a},[s("div",V,[n(F,{class:"p-a-xs",closable:!1,type:"info"},{default:d((()=>[s("div",y,w(e.commentCount),1),I])),_:2},1024)]),s("div",_,[s("div",k,w(e.viewCount),1),$]),s("div",C,[n(D,{class:"title",to:"/forum/"+e.id},{default:d((()=>[o(w(e.title),1)])),_:2},1032,["to"]),s("div",L,[s("div",null,w(e.userInfo.nickname),1),s("div",null,"发布于"+w(t.$util.timeFormat(e.postTime)),1)]),s("div",P,w(e.subtitle),1)])])))),128))])),_:1},8,["loading"])])])),_:1})])),_:1}),n(j,{xs:24,lg:7,class:"m-b"},{default:d((()=>[n(B,{cateId:g.cateId},null,8,["cateId"])])),_:1})])),_:1})])}],["__scopeId","data-v-542e4c08"]]);export{D as default};