import{_ as c}from"../index-726dc959.js";var r="https://cdn.jiangruyi.com/vue/xyview-vue/dist/assets/jpg/bg-907b767a.jpg";const d={data(){return{loading:!1,dataList:[]}},created:async function(){this.loadData()},watch:{},methods:{async loadData(){this.loading=!0;let i=await this.$xyutil.request({url:"/v1/ishop_store/store/lists",method:"get"});i.code==200&&(this.dataList=i.data.dataList)}}},t=window.Vue.createElementVNode,_=window.Vue.renderList,u=window.Vue.Fragment,s=window.Vue.openBlock,o=window.Vue.createElementBlock;window.Vue.createCommentVNode;const l=window.Vue.toDisplayString,h=window.Vue.createTextVNode,m=window.Vue.resolveComponent,w=window.Vue.withCtx,g=window.Vue.createVNode,p=t("div",{class:"main-banner m-b-0"},[t("h1",{class:"title m-t"}," \u5E97\u94FA\u8857 ")],-1),x={class:"bg-white"},f={class:"max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8"},v={class:"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},y={class:"w-full min-h-90 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-90 lg:aspect-none"},V=["src","alt"],b=["alt"],k={class:"mt-4 flex justify-between"},j={class:"text-sm text-gray-700"},N=t("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),L={class:"mt-1 text-sm text-gray-500"},C={class:"hidden text-sm font-medium text-gray-900"};function B(i,D,E,$,n,F){const a=m("router-link");return s(),o("div",null,[p,t("div",x,[t("div",f,[t("div",v,[(s(!0),o(u,null,_(n.dataList,e=>(s(),o("div",{key:e.id,class:"group relative"},[t("div",y,[e.cover?(s(),o("img",{key:0,src:e.cover,alt:e.title,lass:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,V)):(s(),o("img",{key:1,src:r,alt:e.title,lass:"w-full h-full object-center object-cover lg:w-full lg:h-full"},null,8,b))]),t("div",k,[t("div",null,[t("h3",j,[g(a,{to:"/ishop_store/store/info/"+e.id},{default:w(()=>[N,h(" "+l(e.title),1)]),_:2},1032,["to"])]),t("p",L,l(e.description),1)]),t("p",C,l(e.city),1)])]))),128))])])])])}var T=c(d,[["render",B]]);export{T as default};
