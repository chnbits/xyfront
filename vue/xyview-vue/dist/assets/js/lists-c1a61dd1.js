import{_ as y}from"../index-726dc959.js";const x={data(){return{loading:!1,icateId:0,keyword:"",id:"",icateList:[],dataList:[],dataPage:{page:1,limit:20,total:0}}},created:async function(){this.$route.query.icateId&&(this.icateId=this.$route.query.icateId),this.$route.query.keyword&&(this.keyword=this.$route.query.keyword),this.loadData()},watch:{$route(a,o){this.$route.query.icateId&&(this.icateId=this.$route.query.icateId),this.$route.query.keyword&&(this.keyword=this.$route.query.keyword),this.loadData()}},methods:{async loadData(){this.loading=!0;let a=await this.$xyutil.request({url:"/v1/ishop/item/lists",data:{icateId:this.icateId,keyword:this.keyword},method:"get"});a.code==200&&(this.icateList=a.data.icateList,this.dataList=a.data.dataList,this.dataPage=a.data.dataPage),this.loading=!1},handleSizeChange(a){this.dataPage.limit=a,this.loadData()},handleCurrentChange(a){this.dataPage.page=a,this.loadData()}}},n=window.Vue.resolveComponent,s=window.Vue.createVNode,e=window.Vue.createElementVNode,l=window.Vue.openBlock,f=window.Vue.createBlock,u=window.Vue.createCommentVNode,v=window.Vue.renderList,k=window.Vue.Fragment,r=window.Vue.createElementBlock,c=window.Vue.toDisplayString,V=window.Vue.createTextVNode,g=window.Vue.withCtx,C={class:"bg-white container m-t"},L={class:"max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8"},z={style:{width:"240px",margin:"0 15px"}},P={style:{padding:"14px"}},b={style:{display:"flex","align-items":"center","justify-items":"space-between"}},q={class:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},I={class:"w-full min-h-90 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-90 lg:aspect-none"},N=["src","alt"],D={class:"mt-4 flex justify-between"},B={class:"item-title text-sm text-gray-700"},S=e("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),j={class:"mt-1 text-sm text-gray-500"},E={class:"text-sm font-medium text-gray-900"},$={key:1,class:"flex flex-start"};function F(a,o,T,U,i,h){const d=n("el-skeleton-item"),_=n("el-empty"),m=n("router-link"),p=n("el-pagination"),w=n("el-skeleton");return l(),r("div",null,[e("div",C,[e("div",L,[s(w,{class:"flex",loading:i.loading,animated:"",count:4},{template:g(()=>[e("div",z,[s(d,{variant:"image",style:{width:"240px",height:"240px"}}),e("div",P,[s(d,{variant:"p",style:{width:"50%"}}),e("div",b,[s(d,{variant:"text",style:{"margin-right":"16px"}}),s(d,{variant:"text",style:{width:"30%"}})])])])]),default:g(()=>[i.dataList.length==0?(l(),f(_,{key:0,description:"\u6682\u65E0\u6570\u636E"})):u("",!0),e("div",q,[(l(!0),r(k,null,v(i.dataList,t=>(l(),r("div",{key:t.id,class:"group relative"},[e("div",I,[e("img",{src:t.cover,alt:t.title,lass:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,N)]),e("div",D,[e("div",null,[e("h3",B,[s(m,{to:"/ishop/item/info/"+t.id},{default:g(()=>[S,V(" "+c(t.title),1)]),_:2},1032,["to"])]),e("p",j,"\u6700\u8FD1\u8D2D\u4E70"+c(t.buyCount),1)]),e("p",E,c(t.price),1)])]))),128))]),i.dataList.length!=0?(l(),r("div",$,[s(p,{class:"m-t-md",size:"default",onSizeChange:h.handleSizeChange,onCurrentChange:h.handleCurrentChange,"current-page":i.dataPage.page,"onUpdate:current-page":o[0]||(o[0]=t=>i.dataPage.page=t),background:"","page-sizes":[10,20,30,50],"page-size":i.dataPage.limit,"onUpdate:page-size":o[1]||(o[1]=t=>i.dataPage.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:i.dataPage.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])):u("",!0)]),_:1},8,["loading"])])])])}var G=y(x,[["render",F]]);export{G as default};
