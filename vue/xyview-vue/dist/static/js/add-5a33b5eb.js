import e from"./xy-builder-form-2e2d7a83.js";import"../../index.js";import"./index-e1b4e256.js";const t=window.Vue.resolveComponent,a=window.Vue.createVNode,o=window.Vue.createTextVNode,d=window.Vue.withCtx,r=window.Vue.createElementVNode,i=window.Vue.openBlock,n=window.Vue.createElementBlock,l={class:"wrap"},s={class:"main p-t"},c={class:"container"},u={class:"bg-white p-a"},w={__name:"add",setup:w=>(w,m)=>{const p=t("xy-header"),x=t("el-breadcrumb-item"),V=t("el-breadcrumb"),b=t("xy-footer");return i(),n("div",l,[a(p),r("div",s,[r("div",c,[a(V,{class:"m-b","separator-class":"el-icon-arrow-right"},{default:d((()=>[a(x,{to:{path:"/ext"}},{default:d((()=>[o("首页")])),_:1}),a(x,{to:{path:"/ext"}},{default:d((()=>[o(" 扩展列表 ")])),_:1}),a(x,null,{default:d((()=>[o("发布扩展")])),_:1})])),_:1}),r("div",u,[a(e,{api:"/v1/ext/addon/add"})])])]),a(b)])}};export{w as default};