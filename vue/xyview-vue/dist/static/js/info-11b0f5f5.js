var e=(e,t,l)=>new Promise(((i,a)=>{var o=e=>{try{d(l.next(e))}catch(t){a(t)}},s=e=>{try{d(l.throw(e))}catch(t){a(t)}},d=e=>e.done?i(e.value):Promise.resolve(e.value).then(o,s);d((l=l.apply(e,t)).next())}));import{_ as t}from"./side-7998e2ef.js";import{_ as l}from"../../index.js";const i=window.Vue.createTextVNode,a=window.Vue.resolveComponent,o=window.Vue.withCtx,s=window.Vue.createVNode,d=window.Vue.toDisplayString,n=window.Vue.createElementVNode,r=window.Vue.openBlock,u=window.Vue.createElementBlock,p=window.Vue.pushScopeId,m=window.Vue.popScopeId,c=e=>(p("data-v-9922d080"),e=e(),m(),e),f={class:"container"},h={class:"bg-white project-list p-a-md"},w={class:"project-list_item flex border-bottom_1px"},g={class:"flex-1"},y={class:"flex space-between m-b"},b={class:"ts-20"},_={class:"ts-13"},V=c((()=>n("span",{class:"text-999"},"可议价",-1))),x={class:"text-danger price"},v={class:"flex ts-14 m-t-sm m-b-xs"},j={class:"m-r"},k={class:"m-r"},A={class:"m-r"},L={class:"text-666 ts-13 m-t-sm flex justify-between"},$=c((()=>n("span",{class:"m-r"},"发布",-1))),z={class:"m-t-md m-b-lg",style:{"min-height":"240px"}},C=["innerHTML"],T=c((()=>n("ul",{class:"lh-2"},[n("li",null," 为维护双方的权益，对接项目需要双方都通过实名认证； "),n("li",null," 此处展示的仅为需求方的初步需求或者项目简介，详情的项目需求应当双方通过合同确定； "),n("li",null," 项目报名仅为表示接单方的一个接单意向，并不代表合作，具体是否成功合作以需求方意向为准； ")],-1))),D={data:()=>({id:0,item:{},showApply:!1,form:{content:"",price:"",period:""},loading:!1,applyLoading:!1}),created:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route(){this.id=this.$route.params.id,this.loadData()}},methods:{loadData(){return e(this,null,(function*(){this.loading=!0;let e=yield this.$util.request({url:"/v1/zb/project/info/"+this.id,method:"get"});200==e.code?this.item=e.data.info:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1}))},submitApply(){return e(this,null,(function*(){if(this.applyLoading)return;this.applyLoading=!0;let e=yield this.$util.request({url:"/v1/zb/apply/apply/"+this.id,data:this.form,method:"post"});200==e.code?(this.$util.showToast({title:e.msg,icon:"success",duration:2e3}),this.showApply=!1):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.applyLoading=!1}))}}},U=l(Object.assign(D,{__name:"info",setup:e=>(e,l)=>{const p=a("el-breadcrumb-item"),m=a("el-breadcrumb"),c=a("router-link"),D=a("el-button"),U=a("el-alert"),q=a("el-input"),I=a("el-form-item"),N=a("el-form"),S=a("el-dialog"),B=a("el-skeleton"),E=a("el-col"),H=a("el-row");return r(),u("div",null,[n("div",f,[s(m,{class:"m-b","separator-class":"el-icon-arrow-right"},{default:o((()=>[s(p,{to:{path:"/zb"}},{default:o((()=>[i("首页")])),_:1}),s(p,{to:{path:"/zb"}},{default:o((()=>[i(" 项目列表 ")])),_:1}),s(p,null,{default:o((()=>[i("项目详情")])),_:1})])),_:1}),s(H,{gutter:20},{default:o((()=>[s(E,{xs:24,sm:24,md:24,lg:17,offset:0},{default:o((()=>[n("div",h,[s(B,{rows:3,count:1,animated:"",loading:e.loading},{default:o((()=>[n("div",w,[n("div",g,[n("div",y,[n("h3",b,[s(c,{to:"/zb/project/info"+e.item.id},{default:o((()=>[i(d(e.item.title),1)])),_:1},8,["to"])]),n("div",_,[V,n("span",x,"¥"+d(e.item.price),1)])]),n("ul",v,[n("li",j,"招募："+d(e.item.requireRoleLabel),1),n("li",k,"类型："+d(e.item.typeLabel),1),n("li",A,"周期："+d(e.item.period)+"天",1)]),n("div",L,[n("div",null,[$,n("span",null,d(e.item.applyCount)+"人报名",1)]),n("div",null,[s(D,{type:"primary",size:"default",onClick:l[0]||(l[0]=t=>{e.showApply=!0})},{default:o((()=>[i(" 报名 ")])),_:1}),s(S,{title:"报名项目",modelValue:e.showApply,"onUpdate:modelValue":l[5]||(l[5]=t=>e.showApply=t),width:"600px"},{footer:o((()=>[n("span",null,[s(D,{onClick:l[4]||(l[4]=t=>e.showApply=!1)},{default:o((()=>[i("取消")])),_:1}),s(D,{type:"primary",onClick:e.submitApply},{default:o((()=>[i("确认报名")])),_:1},8,["onClick"])])])),default:o((()=>[s(U,{class:"m-b",type:"warning",effect:"light",closable:!1},{default:o((()=>[i(" 为保证服务质量，每天限报名5个项目，请选择确实合适的项目报名。 ")])),_:1}),s(N,{model:e.form,"label-position":"top",inline:!1,size:"normal"},{default:o((()=>[s(I,{label:"报名理由"},{default:o((()=>[s(q,{type:"textarea",modelValue:e.form.content,"onUpdate:modelValue":l[1]||(l[1]=t=>e.form.content=t),rows:5},null,8,["modelValue"])])),_:1}),s(I,{label:"价格"},{default:o((()=>[s(q,{type:"text",modelValue:e.form.price,"onUpdate:modelValue":l[2]||(l[2]=t=>e.form.price=t)},null,8,["modelValue"])])),_:1}),s(I,{label:"工期"},{default:o((()=>[s(q,{type:"textarea",modelValue:e.form.period,"onUpdate:modelValue":l[3]||(l[3]=t=>e.form.period=t)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])])])])])),_:1},8,["loading"]),n("div",z,[s(B,{rows:5,count:1,animated:"",loading:e.loading},{default:o((()=>[n("div",{innerHTML:e.item.content},null,8,C)])),_:1},8,["loading"])]),s(U,{class:"m-b-lg",title:"",type:"warning",effect:"light",closable:!1},{default:o((()=>[T])),_:1})])])),_:1}),s(E,{xs:24,sm:24,md:24,lg:7,offset:0},{default:o((()=>[s(t)])),_:1})])),_:1})])])}}),[["__scopeId","data-v-9922d080"]]);export{U as default};
