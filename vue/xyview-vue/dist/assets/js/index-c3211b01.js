import{a as k}from"../index-91ea30ae.js";const L={data(){return{loading:!1,sliderList:[],adA1List:[{cover:"",url:""}],seckillList:[],seckillCurrentHour:"-1",seckillLeftSeconds:60,groupList:[],hotList:[],recList:[],goodsList:[]}},created:async function(){if(this.loadData(),this.$store.state.app.siteInfo.versionFuncsAll.indexOf("ishop_seckill")>=0){var s=new Date;let o=s.getHours();if(o!=this.seckillCurrentHour){this.seckillCurrentHour=o,this.seckillLeftSeconds=3600-s.getMinutes()*60-s.getSeconds()-1;let l=await this.$xyutil.request({url:"/v1/ishop_seckill/seckill/lists",method:"get"});l.code==200&&(this.seckillList=l.data.dataList)}}},watch:{},methods:{async loadData(){this.loading=!0;let s=await this.$xyutil.request({url:"/v1/ishop/slider/lists",method:"get"});s.code==200&&(this.sliderList=s.data.dataList);let o=await this.$xyutil.request({url:"/v1/ishop/item/lists",method:"get",data:{limit:4,iadTag:"home_hot"}});o.code==200&&(this.hotList=o.data.dataList);let l=await this.$xyutil.request({url:"/v1/ishop/item/lists",method:"get",data:{limit:4,iadTag:"home_rec"}});l.code==200&&(this.recList=l.data.dataList),this.loading=!1}}},c=window.Vue.resolveComponent,d=window.Vue.createVNode,g=window.Vue.renderList,r=window.Vue.Fragment,i=window.Vue.openBlock,a=window.Vue.createElementBlock,t=window.Vue.createElementVNode,_=window.Vue.withCtx,b=window.Vue.createBlock,n=window.Vue.toDisplayString,m=window.Vue.createTextVNode,V=window.Vue.pushScopeId,S=window.Vue.popScopeId,h=s=>(V("data-v-e0b6a1da"),s=s(),S(),s),C={class:"main"},I={class:"bg1 flex1 pos-a1"},j=["src"],B={class:"bg-white"},H={class:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"},N=h(()=>t("h2",{class:"text-2xl font-extrabold tracking-tight text-gray-900"},"\u4E3A\u60A8\u63A8\u8350",-1)),$={class:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},q={class:"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-70 lg:aspect-none"},E=["src","alt"],T={class:"mt-4 flex justify-between"},D={class:"item-title text-sm text-gray-700"},F=h(()=>t("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1)),A={class:"mt-1 text-sm text-gray-500"},M={class:"text-sm font-medium text-gray-900"},O={class:"bg-white"},X={class:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"},z=h(()=>t("h2",{class:"text-2xl font-extrabold tracking-tight text-gray-900"},"\u70ED\u95E8\u5546\u54C1",-1)),G={class:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},J={class:"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-70 lg:aspect-none"},K=["src","alt"],P={class:"mt-4 flex justify-between"},Q={class:"item-title text-sm text-gray-700"},R=h(()=>t("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1)),U={class:"mt-1 text-sm text-gray-500"},W={class:"text-sm font-medium text-gray-900"};function Y(s,o,l,Z,u,tt){const x=c("xy-header"),w=c("el-carousel-item"),f=c("el-carousel"),p=c("router-link"),v=c("xy-footer");return i(),a(r,null,[d(x),t("div",C,[d(f,{interval:3e3,height:"500px","initial-index":0},{default:_(()=>[(i(!0),a(r,null,g(u.sliderList,(e,y)=>(i(),b(w,{key:y,style:{width:"100%"}},{default:_(()=>[t("div",I,[t("img",{class:"bgImg",src:e.cover,style:{width:"100%",height:"500px"}},null,8,j)])]),_:2},1024))),128))]),_:1}),t("div",B,[t("div",H,[N,t("div",$,[(i(!0),a(r,null,g(u.recList,e=>(i(),a("div",{key:e.id,class:"group relative"},[t("div",q,[t("img",{src:e.cover,alt:e.title,lass:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,E)]),t("div",T,[t("div",null,[t("h3",D,[d(p,{to:"/ishop/item/info/"+e.id},{default:_(()=>[F,m(" "+n(e.title),1)]),_:2},1032,["to"])]),t("p",A,"\u6700\u8FD1\u8D2D\u4E70"+n(e.buyCount),1)]),t("p",M,n(e.price),1)])]))),128))])])]),t("div",O,[t("div",X,[z,t("div",G,[(i(!0),a(r,null,g(u.hotList,e=>(i(),a("div",{key:e.id,class:"group relative"},[t("div",J,[t("img",{src:e.cover,alt:e.title,lass:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,K)]),t("div",P,[t("div",null,[t("h3",Q,[d(p,{to:"/ishop/item/info/"+e.id},{default:_(()=>[R,m(" "+n(e.title),1)]),_:2},1032,["to"])]),t("p",U,"\u6700\u8FD1\u8D2D\u4E70"+n(e.buyCount),1)]),t("p",W,n(e.price),1)])]))),128))])])])]),d(v)],64)}var st=k(L,[["render",Y],["__scopeId","data-v-e0b6a1da"]]);export{st as default};