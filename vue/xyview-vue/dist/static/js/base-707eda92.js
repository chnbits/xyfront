import{_ as e}from"../../index.js";const t={data:()=>({icateList:[],entryList:[]}),created(){this.loadData()},methods:{loadData(){return e=this,t=null,o=function*(){},new Promise(((a,n)=>{var l=e=>{try{r(o.next(e))}catch(t){n(t)}},d=e=>{try{r(o.throw(e))}catch(t){n(t)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,d);r((o=o.apply(e,t)).next())}));var e,t,o}}},o=window.Vue.createTextVNode,a=window.Vue.resolveComponent,n=window.Vue.withCtx,l=window.Vue.createVNode,d=window.Vue.createElementVNode,r=window.Vue.openBlock,i=window.Vue.createElementBlock,s={class:"wrap"},c={class:"sub-nav flex justify-between"},u={class:"main p-t"};const f=e(t,[["render",function(e,t,f,m,w,p){const v=a("el-menu-item"),h=a("xy-qrcode"),b=a("el-popover"),x=a("el-menu"),y=a("xy-header-default"),V=a("router-view"),_=a("xy-footer");return r(),i("div",s,[l(y,null,{subtitle:n((()=>[o(" 众包 ")])),"sub-nav":n((()=>[d("div",c,[l(x,{ellipsis:!1,router:"",class:"flex-1",mode:"horizontal"},{default:n((()=>[l(v,{class:"hover-bottom",index:"/zb"},{default:n((()=>[o(" 项目 ")])),_:1}),l(v,{class:"hover-bottom",index:"/zb"},{default:n((()=>[l(b,{placement:"bottom",title:"",width:"",trigger:"hover",content:""},{reference:n((()=>[o(" 帮助 ")])),default:n((()=>[d("div",null,[l(h,{class:"qrcode",style:{opacity:1},value:"https://work.weixin.qq.com/kfid/kfcdfd9f4eee4e40e55",logo:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/fd85d105-06b6-441f-8574-f62b650336ba.jpeg",options:{width:120,margin:3}})])])),_:1})])),_:1}),l(v,{class:"hover-bottom",index:"/zb/project/my"},{default:n((()=>[o(" 我发布的项目 ")])),_:1}),l(v,{class:"hover-bottom",index:"/zb/apply/my"},{default:n((()=>[o(" 我报名的项目 ")])),_:1})])),_:1})])])),_:1}),d("div",u,[l(V)]),l(_)])}]]);export{f as default};