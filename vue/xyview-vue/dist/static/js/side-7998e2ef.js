const e=window.Vue.createTextVNode,t=window.Vue.resolveComponent,s=window.Vue.withCtx,i=window.Vue.createVNode,l=window.Vue.createElementVNode,n=window.Vue.toDisplayString,a=window.Vue.renderList,o=window.Vue.Fragment,r=window.Vue.openBlock,u=window.Vue.createElementBlock,c={class:"m-b p-a bg-white"},d={class:"m-b p-a bg-white text-center"},w={class:"m-b"},p={class:"m-b"},m={class:"m-b p-a bg-white"};window.Vue.defineComponent;const V={__name:"side",setup(V){const b=[{title:"注册并实名认证"},{title:"报名平台项目"},{title:"联系平台项目经理对接项目"},{title:"对接成功开始项目"},{title:"阶段交付并收款"}];return(V,f)=>{const v=t("el-button"),g=t("router-link"),h=t("el-avatar"),y=t("xy-title"),_=t("el-step"),k=t("el-steps");return r(),u(o,null,[l("div",c,[i(g,{to:"/zb/project/add"},{default:s((()=>[i(v,{class:"full",type:"primary",size:"large"},{default:s((()=>[e("发布项目")])),_:1})])),_:1})]),l("div",d,[i(h,{icon:"el-icon-user-solid",class:"m-b",size:"large",shape:"circle",src:V.$store.state.user.userInfo.avatar,fit:"fill"},null,8,["src"]),l("div",w,n(V.$store.state.user.userInfo.nickname),1),l("div",p,n(V.$store.state.user.userInfo.city),1)]),l("div",m,[i(y,{class:"m-b"},{default:s((()=>[e("开发者接单步骤")])),_:1}),i(k,{active:1,direction:"vertical",style:{height:"260px"},"process-status":"wait","finish-status":"wait"},{default:s((()=>[(r(),u(o,null,a(b,(e=>i(_,{key:e.key,title:e.title},null,8,["title"]))),64))])),_:1})])],64)}}};export{V as _};