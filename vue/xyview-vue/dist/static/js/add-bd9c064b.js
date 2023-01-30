import{_ as e}from"../../index.js";const l={data:()=>({loading:!1,regionInit:{showInput:!1,labelField:"name",valueField:"name",deep:1,maxLevel:3,nodeKey:"id",lazy:!0,action:"/v1/region/region/lists"},form:{gender:0,name:"",tel:"",city:"",address:"",isDefault:1}}),created:function(){},methods:{handleSubmit(){return e=this,l=null,o=function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let l=yield this.$util.request({url:"/v1/user_address/address/add",data:this.form,method:"post"});"200"==l.code?(this.$util.showToast({title:l.msg,icon:"success",duration:2e3}),this.$router.back()):this.$util.showToast({title:l.msg,icon:"loading",duration:3e3}),this.loading=!1},new Promise(((a,t)=>{var d=e=>{try{n(o.next(e))}catch(l){t(l)}},i=e=>{try{n(o.throw(e))}catch(l){t(l)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(d,i);n((o=o.apply(e,l)).next())}));var e,l,o}}},o=window.Vue.resolveComponent,a=window.Vue.createVNode,t=window.Vue.createElementVNode,d=window.Vue.withCtx,i=window.Vue.createTextVNode,n=window.Vue.resolveDirective,u=window.Vue.openBlock,r=window.Vue.createElementBlock,s=window.Vue.withDirectives;window.Vue.pushScopeId,window.Vue.popScopeId;const m={class:"bg-white"},c={class:"p-a m-b"},f={class:"box"},p={class:"content p-t-md"},V={class:"content"},h={class:"m-l-md p-b-md"};const w=e(l,[["render",function(e,l,w,v,b,g){const _=o("el-page-header"),y=o("el-option"),x=o("el-select"),k=o("el-form-item"),I=o("el-input"),U=o("xy-cascader"),D=o("el-form"),$=o("el-divider"),C=o("el-button"),S=n("loading");return u(),r("div",m,[t("div",c,[a(_,{onBack:l[0]||(l[0]=l=>e.$router.back(-1)),content:"添加地址"})]),t("div",f,[s((u(),r("div",p,[a(D,{model:b.form,size:"large","label-width":"140px","label-position":"left"},{default:d((()=>[a(k,{label:"性别"},{default:d((()=>[a(x,{modelValue:b.form.gender,"onUpdate:modelValue":l[1]||(l[1]=e=>b.form.gender=e),placeholder:"性别",class:"full"},{default:d((()=>[a(y,{label:"默认",value:0}),a(y,{label:"先生",value:1}),a(y,{label:"女士",value:-1})])),_:1},8,["modelValue"])])),_:1}),a(k,{label:"收货人名称"},{default:d((()=>[a(I,{modelValue:b.form.name,"onUpdate:modelValue":l[2]||(l[2]=e=>b.form.name=e),placeholder:"收货人名称"},null,8,["modelValue"])])),_:1}),a(k,{label:"联系电话"},{default:d((()=>[a(I,{modelValue:b.form.tel,"onUpdate:modelValue":l[3]||(l[3]=e=>b.form.tel=e),placeholder:"联系电话"},null,8,["modelValue"])])),_:1}),a(k,{label:"收货城市"},{default:d((()=>[a(U,{init:b.regionInit,modelValue:b.form.city,"onUpdate:modelValue":l[4]||(l[4]=e=>b.form.city=e)},null,8,["init","modelValue"])])),_:1}),a(k,{label:"详细地址"},{default:d((()=>[a(I,{modelValue:b.form.address,"onUpdate:modelValue":l[5]||(l[5]=e=>b.form.address=e),placeholder:"详细地址"},null,8,["modelValue"])])),_:1}),a(k,{label:"设为默认"},{default:d((()=>[a(x,{modelValue:b.form.isDefault,"onUpdate:modelValue":l[6]||(l[6]=e=>b.form.isDefault=e),placeholder:"设为默认",class:"full"},{default:d((()=>[a(y,{label:"是",value:1}),a(y,{label:"否",value:0})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model"]),a($),t("div",V,[t("div",h,[a(C,{type:"primary",onClick:g.handleSubmit},{default:d((()=>[i("提交")])),_:1},8,["onClick"])])])])),[[S,b.loading]])])])}],["__scopeId","data-v-f5a38d21"]]);export{w as default};