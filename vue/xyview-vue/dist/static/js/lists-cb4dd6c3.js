var t=(t,e,l)=>new Promise(((s,i)=>{var a=t=>{try{n(l.next(t))}catch(e){i(e)}},o=t=>{try{n(l.throw(t))}catch(e){i(e)}},n=t=>t.done?s(t.value):Promise.resolve(t.value).then(a,o);n((l=l.apply(t,e)).next())}));import{_ as e}from"../../index.js";const l={data:()=>({loading:!1,dataList:[]}),created:function(){return t(this,null,(function*(){this.loadData()}))},watch:{},methods:{loadData(){return t(this,null,(function*(){this.loading=!0;let t=yield this.$xyutil.request({url:"/v1/ishop_store/store/lists",method:"get"});200==t.code&&(this.dataList=t.data.dataList)}))}}},s=window.Vue.createElementVNode,i=window.Vue.renderList,a=window.Vue.Fragment,o=window.Vue.openBlock,n=window.Vue.createElementBlock;window.Vue.createCommentVNode;const r=window.Vue.toDisplayString,d=window.Vue.createTextVNode,c=window.Vue.resolveComponent,u=window.Vue.withCtx,w=window.Vue.createVNode,g=s("div",{class:"main-banner m-b-0"},[s("h1",{class:"title m-t"}," 店铺街 ")],-1),m={class:"bg-white"},h={class:"max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8"},p={class:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},v={class:"w-full min-h-90 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-90 lg:aspect-none"},x=["src","alt"],f=["alt"],y={class:"mt-4 flex justify-between"},V={class:"text-sm text-gray-700"},b=s("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),j={class:"mt-1 text-sm text-gray-500"},k={class:"hidden text-sm font-medium text-gray-900"};const L=e(l,[["render",function(t,e,l,L,N,_){const C=c("router-link");return o(),n("div",null,[g,s("div",m,[s("div",h,[s("div",p,[(o(!0),n(a,null,i(N.dataList,(t=>(o(),n("div",{key:t.id,class:"group relative"},[s("div",v,[t.cover?(o(),n("img",{key:0,src:t.cover,alt:t.title,lass:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,x)):(o(),n("img",{key:1,src:"https://cdn.jiangruyi.com/vue/xyview-vue/dist/static/jpg/bg-907b767a.jpg",alt:t.title,lass:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,f))]),s("div",y,[s("div",null,[s("h3",V,[w(C,{to:"/ishop_store/store/info/"+t.id},{default:u((()=>[b,d(" "+r(t.title),1)])),_:2},1032,["to"])]),s("p",j,r(t.description),1)]),s("p",k,r(t.city),1)])])))),128))])])])])}]]);export{L as default};
