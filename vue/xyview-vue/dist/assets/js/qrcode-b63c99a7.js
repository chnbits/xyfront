import{a as V}from"../index-91ea30ae.js";const b=window.Vue.defineComponent,y=b({setup(){return{}},data(){return{current:"text",qrData:"",logo:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/fd85d105-06b6-441f-8574-f62b650336ba.jpeg"}},method:{tabClick(){}}}),n=window.Vue.resolveComponent,o=window.Vue.createVNode,d=window.Vue.createElementVNode,t=window.Vue.withCtx,q=window.Vue.createTextVNode,s=window.Vue.openBlock,v=window.Vue.createBlock,C=window.Vue.createCommentVNode,k=window.Vue.createElementBlock,D={class:"container"},g=q("\u590D\u5236");function N(e,l,h,x,B,U){const r=n("el-input"),u=n("el-tab-pane"),p=n("el-tabs"),c=n("el-col"),m=n("el-button"),i=n("xy-copy"),_=n("xy-qrcode"),f=n("el-row"),w=n("el-card");return s(),k("div",D,[o(w,{shadow:"never",class:"p-a"},{default:t(()=>[o(f,{gutter:20},{default:t(()=>[o(c,{span:16,offset:0},{default:t(()=>[d("div",null,[o(p,{modelValue:e.current,"onUpdate:modelValue":l[3]||(l[3]=a=>e.current=a),type:"card","tab-position":"top",onTabClick:e.tabClick},{default:t(()=>[o(u,{label:"\u6587\u672C",name:"text"},{default:t(()=>[d("div",null,[o(r,{type:"textarea",rows:1,modelValue:e.qrData,"onUpdate:modelValue":l[0]||(l[0]=a=>e.qrData=a),placeholder:"\u8BF7\u8F93\u5165\u9700\u8981\u7F16\u7801\u6570\u636E",maxlength:-1,"show-word-limit":!1,autosize:{minRows:14,maxRows:100}},null,8,["modelValue"])])]),_:1}),o(u,{label:"\u7F51\u5740",name:"url"},{default:t(()=>[d("div",null,[o(r,{type:"text",modelValue:e.qrData,"onUpdate:modelValue":l[1]||(l[1]=a=>e.qrData=a),placeholder:"\u8BF7\u8F93\u5165\u7F51\u5740"},null,8,["modelValue"])])]),_:1}),o(u,{label:"\u7535\u8BDD",name:"tel"},{default:t(()=>[d("div",null,[o(r,{type:"text",modelValue:e.qrData,"onUpdate:modelValue":l[2]||(l[2]=a=>e.qrData=a),placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD"},null,8,["modelValue"])])]),_:1})]),_:1},8,["modelValue","onTabClick"])])]),_:1}),o(c,{span:8,offset:0,class:"text-center"},{default:t(()=>[d("div",null,[o(i,{content:e.qrData},{default:t(()=>[o(m,{type:"primary",size:"default"},{default:t(()=>[g]),_:1})]),_:1},8,["content"])]),e.qrData?(s(),v(_,{key:0,class:"qrcode",style:{opacity:1},value:e.qrData,logo:e.logo,options:{width:300,margin:3}},null,8,["value","logo"])):C("",!0)]),_:1})]),_:1})]),_:1})])}var T=V(y,[["render",N]]);export{T as default};