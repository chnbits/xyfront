import{_ as e}from"../../index.js";const t={data:()=>({icateList:[],entryList:[]}),created(){this.loadData()},methods:{loadData(){return e=this,t=null,o=function*(){},new Promise(((n,a)=>{var r=e=>{try{l(o.next(e))}catch(t){a(t)}},i=e=>{try{l(o.throw(e))}catch(t){a(t)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,i);l((o=o.apply(e,t)).next())}));var e,t,o}}},o=window.Vue.createTextVNode,n=window.Vue.resolveComponent,a=window.Vue.createVNode,r=window.Vue.withCtx,i=window.Vue.createElementVNode,l=window.Vue.openBlock,d=window.Vue.createElementBlock,s={class:"wrap"},u={class:"main p-t"};const c=e(t,[["render",function(e,t,c,w,m,h){const v=n("el-menu"),V=n("xy-header-default"),p=n("router-view"),x=n("xy-footer");return l(),d("div",s,[a(V,null,{subtitle:r((()=>[o(" 社区 ")])),"left-nav1":r((()=>[a(v,{ellipsis:!1,router:"",class:"main-menu flex-1",mode:"horizontal"})])),_:1}),i("div",u,[a(p)]),a(x)])}]]);export{c as default};
