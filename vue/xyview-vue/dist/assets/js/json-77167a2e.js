import{a as w}from"../index-91ea30ae.js";const f=window.Vue.defineComponent,V=f({setup(){return{}},data(){return{jsonData:""}}}),t=window.Vue.resolveComponent,e=window.Vue.createVNode,d=window.Vue.createElementVNode,o=window.Vue.withCtx,a=window.Vue.createTextVNode,y=window.Vue.openBlock,h=window.Vue.createElementBlock,v={class:"container"},j={class:"m-t"},x=a("\u7C98\u8D34"),C=a("\u89E3\u538B"),N=a("\u538B\u7F29"),b=a("\u590D\u5236");function z(n,l,D,k,B,E){const _=t("el-input"),r=t("json-viewer"),c=t("el-col"),s=t("el-button"),u=t("xy-copy"),i=t("el-row"),p=t("el-card");return y(),h("div",v,[e(p,{shadow:"never",class:"p-a"},{default:o(()=>[e(i,{gutter:20},{default:o(()=>[e(c,{span:18,offset:0},{default:o(()=>[d("div",null,[e(_,{type:"textarea",rows:1,modelValue:n.jsonData,"onUpdate:modelValue":l[0]||(l[0]=m=>n.jsonData=m),placeholder:"\u8BF7\u8F93\u5165json\u6570\u636E",maxlength:-1,"show-word-limit":!1,autosize:{minRows:15,maxRows:1e4}},null,8,["modelValue"])]),d("div",j,[e(r,{value:n.jsonData,copyable:"",boxed:"",sort:""},null,8,["value"])])]),_:1}),e(c,{span:6,offset:0},{default:o(()=>[e(s,{class:"m-b w-full",type:"primary",size:"default"},{default:o(()=>[x]),_:1}),e(s,{type:"primary",size:"default"},{default:o(()=>[C]),_:1}),e(s,{type:"primary",size:"default"},{default:o(()=>[N]),_:1}),e(u,{content:n.jsonData},{default:o(()=>[e(s,{type:"primary",size:"default"},{default:o(()=>[b]),_:1})]),_:1},8,["content"])]),_:1})]),_:1})]),_:1})])}var g=w(V,[["render",z]]);export{g as default};