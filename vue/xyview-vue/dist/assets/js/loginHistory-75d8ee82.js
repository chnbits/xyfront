import{_ as d}from"../index-726dc959.js";const _={components:{},data(){return{loginHistory:[]}},created:function(){this.loadLoginHistory()},methods:{async loadLoginHistory(){let e=await this.$util.request({url:"/v1/user/user/loginHistory",method:"get"});e.code==200?this.loginHistory=e.data.dataList:this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})}}},o=window.Vue.createElementVNode,p=window.Vue.toDisplayString,i=window.Vue.resolveComponent,s=window.Vue.withCtx,t=window.Vue.createVNode,u=window.Vue.openBlock,w=window.Vue.createBlock,h=window.Vue.pushScopeId,m=window.Vue.popScopeId,g=e=>(h("data-v-6539c0b5"),e=e(),m(),e),b=g(()=>o("div",{slot:"header",class:"clearfix"},[o("span",{class:"title"},"\u6700\u8FD1\u767B\u5F55\u8BB0\u5F55")],-1)),f={class:"content clearfix"};function y(e,v,x,V,c,H){const n=i("el-table-column"),a=i("el-table"),l=i("el-card");return u(),w(l,{class:"center-box safe-box m-b",shadow:"never"},{default:s(()=>[b,o("div",f,[t(a,{data:c.loginHistory,stripe:"",style:{width:"100%"}},{default:s(()=>[t(n,{prop:"loginTime",label:"\u65F6\u95F4","min-width":"180"},{default:s(r=>[o("span",null,p(e.$util.timeFormat(r.row.loginTime)),1)]),_:1}),t(n,{prop:"clientIp",label:"IP\u5730\u5740","min-width":"180"}),t(n,{prop:"city",label:"\u5730\u70B9"})]),_:1},8,["data"])])]),_:1})}var S=d(_,[["render",y],["__scopeId","data-v-6539c0b5"]]);export{S as default};
