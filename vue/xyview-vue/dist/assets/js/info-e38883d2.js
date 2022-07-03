import{_ as k}from"./side-509a3e09.js";import{_ as $}from"../index-726dc959.js";const d=window.Vue.createTextVNode,n=window.Vue.resolveComponent,l=window.Vue.withCtx,t=window.Vue.createVNode,r=window.Vue.toDisplayString,e=window.Vue.createElementVNode,j=window.Vue.isRef,A=window.Vue.openBlock,C=window.Vue.createElementBlock,L=window.Vue.pushScopeId,x=window.Vue.popScopeId,u=s=>(L("data-v-03e03c92"),s=s(),x(),s),z={class:"container"},S=d("\u9996\u9875"),T=d(" \u9879\u76EE\u5217\u8868 "),I=d("\u9879\u76EE\u8BE6\u60C5"),N={class:"bg-white project-list p-a-md"},D={class:"project-list_item flex border-bottom_1px"},B={class:"flex-1"},E={class:"flex space-between m-b"},U={class:"ts-20"},q={class:"ts-13"},R=u(()=>e("span",{class:"text-999"},"\u53EF\u8BAE\u4EF7",-1)),H={class:"text-danger price"},M={class:"flex ts-14 m-t-sm m-b-xs"},O={class:"m-r"},F={class:"m-r"},G={class:"m-r"},J={class:"text-666 ts-13 m-t-sm flex justify-between"},K=u(()=>e("span",{class:"m-r"},"\u53D1\u5E03",-1)),P=d(" \u62A5\u540D "),Q=d(" \u4E3A\u4FDD\u8BC1\u670D\u52A1\u8D28\u91CF\uFF0C\u6BCF\u5929\u9650\u62A5\u540D5\u4E2A\u9879\u76EE\uFF0C\u8BF7\u9009\u62E9\u786E\u5B9E\u5408\u9002\u7684\u9879\u76EE\u62A5\u540D\u3002 "),W=d("\u53D6\u6D88"),X=d("\u786E\u8BA4\u62A5\u540D"),Y={class:"m-t-md m-b-lg",style:{"min-height":"240px"}},Z=["innerHTML"],ee=u(()=>e("ul",{class:"lh-2"},[e("li",null," \u4E3A\u7EF4\u62A4\u53CC\u65B9\u7684\u6743\u76CA\uFF0C\u5BF9\u63A5\u9879\u76EE\u9700\u8981\u53CC\u65B9\u90FD\u901A\u8FC7\u5B9E\u540D\u8BA4\u8BC1\uFF1B "),e("li",null," \u6B64\u5904\u5C55\u793A\u7684\u4EC5\u4E3A\u9700\u6C42\u65B9\u7684\u521D\u6B65\u9700\u6C42\u6216\u8005\u9879\u76EE\u7B80\u4ECB\uFF0C\u8BE6\u60C5\u7684\u9879\u76EE\u9700\u6C42\u5E94\u5F53\u53CC\u65B9\u901A\u8FC7\u5408\u540C\u786E\u5B9A\uFF1B "),e("li",null," \u9879\u76EE\u62A5\u540D\u4EC5\u4E3A\u8868\u793A\u63A5\u5355\u65B9\u7684\u4E00\u4E2A\u63A5\u5355\u610F\u5411\uFF0C\u5E76\u4E0D\u4EE3\u8868\u5408\u4F5C\uFF0C\u5177\u4F53\u662F\u5426\u6210\u529F\u5408\u4F5C\u4EE5\u9700\u6C42\u65B9\u610F\u5411\u4E3A\u51C6\uFF1B ")],-1)),te={data(){return{id:0,item:{},showApply:!1,form:{content:"",price:"",period:""},loading:!1,applyLoading:!1}},created:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route(){this.id=this.$route.params.id,this.loadData()}},methods:{async loadData(){this.loading=!0;let s=await this.$util.request({url:"/v1/zb/project/info/"+this.id,method:"get"});s.code==200?this.item=s.data.info:this.$util.showToast({title:s.msg,icon:"loading",duration:3e3}),this.loading=!1},async submitApply(){if(this.applyLoading)return;this.applyLoading=!0;let s=await this.$util.request({url:"/v1/zb/apply/apply/"+this.id,data:this.form,method:"post"});s.code==200?(this.$util.showToast({title:s.msg,icon:"success",duration:2e3}),this.showApply=!1):this.$util.showToast({title:s.msg,icon:"loading",duration:3e3}),this.applyLoading=!1}}},oe=Object.assign(te,{__name:"info",setup(s){return(o,i)=>{const p=n("el-breadcrumb-item"),g=n("el-breadcrumb"),b=n("router-link"),_=n("el-button"),f=n("el-alert"),c=n("el-input"),m=n("el-form-item"),y=n("el-form"),v=n("el-dialog"),h=n("el-skeleton"),w=n("el-col"),V=n("el-row");return A(),C("div",null,[e("div",z,[t(g,{class:"m-b","separator-class":"el-icon-arrow-right"},{default:l(()=>[t(p,{to:{path:"/zb"}},{default:l(()=>[S]),_:1}),t(p,{to:{path:"/zb"}},{default:l(()=>[T]),_:1}),t(p,null,{default:l(()=>[I]),_:1})]),_:1}),t(V,{gutter:20},{default:l(()=>[t(w,{xs:24,sm:24,md:24,lg:17,offset:0},{default:l(()=>[e("div",N,[t(h,{rows:3,count:1,animated:"",loading:o.loading},{default:l(()=>[e("div",D,[e("div",B,[e("div",E,[e("h3",U,[t(b,{to:"/zb/project/info"+o.item.id},{default:l(()=>[d(r(o.item.title),1)]),_:1},8,["to"])]),e("div",q,[R,e("span",H,"\xA5"+r(o.item.price),1)])]),e("ul",M,[e("li",O,"\u62DB\u52DF\uFF1A"+r(o.item.requireRoleLabel),1),e("li",F,"\u7C7B\u578B\uFF1A"+r(o.item.typeLabel),1),e("li",G,"\u5468\u671F\uFF1A"+r(o.item.period)+"\u5929",1)]),e("div",J,[e("div",null,[K,e("span",null,r(o.item.applyCount)+"\u4EBA\u62A5\u540D",1)]),e("div",null,[t(_,{type:"primary",size:"default",onClick:i[0]||(i[0]=a=>{o.showApply=!0})},{default:l(()=>[P]),_:1}),t(v,{title:"\u62A5\u540D\u9879\u76EE",modelValue:o.showApply,"onUpdate:modelValue":i[5]||(i[5]=a=>j(showApply)?showApply.value=a:null),width:"600px"},{footer:l(()=>[e("span",null,[t(_,{onClick:i[4]||(i[4]=a=>o.showApply=!1)},{default:l(()=>[W]),_:1}),t(_,{type:"primary",onClick:o.submitApply},{default:l(()=>[X]),_:1},8,["onClick"])])]),default:l(()=>[t(f,{class:"m-b",type:"warning",effect:"light",closable:!1},{default:l(()=>[Q]),_:1}),t(y,{model:o.form,ref_key:"form",ref:form,"label-position":"top",inline:!1,size:"normal"},{default:l(()=>[t(m,{label:"\u62A5\u540D\u7406\u7531"},{default:l(()=>[t(c,{type:"textarea",modelValue:o.form.content,"onUpdate:modelValue":i[1]||(i[1]=a=>o.form.content=a),rows:5},null,8,["modelValue"])]),_:1}),t(m,{label:"\u4EF7\u683C"},{default:l(()=>[t(c,{type:"text",modelValue:o.form.price,"onUpdate:modelValue":i[2]||(i[2]=a=>o.form.price=a)},null,8,["modelValue"])]),_:1}),t(m,{label:"\u5DE5\u671F"},{default:l(()=>[t(c,{type:"textarea",modelValue:o.form.period,"onUpdate:modelValue":i[3]||(i[3]=a=>o.form.period=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])])])])]),_:1},8,["loading"]),e("div",Y,[t(h,{rows:5,count:1,animated:"",loading:o.loading},{default:l(()=>[e("div",{innerHTML:o.item.content},null,8,Z)]),_:1},8,["loading"])]),t(f,{class:"m-b-lg",title:"",type:"warning",effect:"light",closable:!1},{default:l(()=>[ee]),_:1})])]),_:1}),t(w,{xs:24,sm:24,md:24,lg:7,offset:0},{default:l(()=>[t(k)]),_:1})]),_:1})])])}}});var ie=$(oe,[["__scopeId","data-v-03e03c92"]]);export{ie as default};
