import{S as e}from"./searchbar-03392ed1.js";import{_ as t}from"../../index.js";const o={components:{Searchbar:e},data:()=>({keyword:0,itemList:[]}),created:function(){this.keyword=this.$route.query.keyword,this.loadItems()},watch:{$route(e,t){this.keyword=this.$route.query.keyword,this.loadItems()}},methods:{loadItems(){return e=this,t=null,o=function*(){let e=yield this.$util.request({url:"/v1/course/item/lists",data:{keyword:this.keyword},method:"get"});200==e.code?this.itemList=e.data.dataList:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})},new Promise(((i,s)=>{var a=e=>{try{r(o.next(e))}catch(t){s(t)}},d=e=>{try{r(o.throw(e))}catch(t){s(t)}},r=e=>e.done?i(e.value):Promise.resolve(e.value).then(a,d);r((o=o.apply(e,t)).next())}));var e,t,o}}},i=window.Vue.resolveComponent,s=window.Vue.createVNode,a=window.Vue.createElementVNode,d=window.Vue.renderList,r=window.Vue.Fragment,l=window.Vue.openBlock,c=window.Vue.createElementBlock,n=window.Vue.toDisplayString,u=window.Vue.withCtx,m=window.Vue.createTextVNode,w=window.Vue.createBlock,h=window.Vue.createCommentVNode,p=window.Vue.pushScopeId,v=window.Vue.popScopeId,y=e=>(p("data-v-96f8b3bc"),e=e(),v(),e),f={class:"wrap"},V={class:"main"},b={class:"main-banner"},k=y((()=>a("h1",{class:"title"},"课程搜索",-1))),x={class:"info m-t-md p-l p-r"},g={class:"container"},_=y((()=>a("div",{class:"tw5 m-b ts-24 m-t"}," 搜索结果 ",-1))),I={class:"cate-item"},L={class:"cate-item"},S=["src"],$={class:"bottom hidden"},F={class:"p-a"},C={class:"ts-20 m-b"},N={class:"m-b-md ts-16",style:{color:"#51656F"}},q={class:"flex space-between items-end"},B={class:"ts-14",style:{color:"#51656F"}};const T=t(o,[["render",function(e,t,o,p,v,y){const T=i("xy-header"),j=i("Searchbar"),E=i("router-link"),P=i("el-button"),z=i("el-col"),D=i("el-row"),A=i("el-empty"),G=i("xy-footer");return l(),c("div",f,[s(T),a("div",V,[a("div",b,[k,a("p",x,[s(j)])]),a("div",g,[_,s(D,{gutter:30,class:"cate-list flex-wrap"},{default:u((()=>[(l(!0),c(r,null,d(v.itemList,((t,o)=>(l(),w(z,{xs:24,sm:12,md:8,lg:6,key:o},{default:u((()=>[a("div",I,[s(E,{to:"/course/item/info/"+t.id},{default:u((()=>[a("div",L,[a("img",{class:"cover",src:t.cover,alt:""},null,8,S),a("div",$,n(t.title),1)])])),_:2},1032,["to"]),a("div",F,[a("h4",C,[s(E,{style:{color:"#51656F"},to:"/course/item/info/"+t.id},{default:u((()=>[m(n(t.title),1)])),_:2},1032,["to"])]),a("div",N,n(e.$util.timeFormat(t.createTime)),1),a("div",q,[s(E,{to:"/course/item/info/"+t.id},{default:u((()=>[s(P,{type:"primary",size:"default"},{default:u((()=>[m("立即学习")])),_:1})])),_:2},1032,["to"]),a("div",B," 观看次数"+n(t.viewCount),1)])])])])),_:2},1024)))),128))])),_:1}),0==v.itemList.length?(l(),w(A,{key:0,description:"暂无结果"})):h("",!0)])]),s(G)])}],["__scopeId","data-v-96f8b3bc"]]);export{T as default};
