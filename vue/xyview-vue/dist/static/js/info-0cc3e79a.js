import{_ as t}from"../../index.js";const e={data:()=>({id:0,loading:!1,info:{}}),mounted:function(){this.name=this.$route.params.name,this.loadData()},watch:{$route(t,e){this.name=this.$route.params.name,this.loadData()}},methods:{loadData(){return t=this,e=null,i=function*(){var t,e,i,n,o,a,l,d;this.loading=!0;let s=yield this.$util.request({url:"/v1/user_agreement/agreement/info",data:{name:this.name},method:"get"});200==s.code?(this.info=s.data.info,this.$xyutil.config.title(this.info.title,(null==(n=null==(i=null==(e=null==(t=null==this?void 0:this.$store)?void 0:t.state)?void 0:e.app)?void 0:i.siteInfo)?void 0:n.title)+"_"+(null==(d=null==(l=null==(a=null==(o=null==this?void 0:this.$store)?void 0:o.state)?void 0:a.app)?void 0:l.siteInfo)?void 0:d.subTitle))):this.$util.showToast({title:s.msg,icon:"loading",duration:3e3}),this.loading=!1},new Promise(((n,o)=>{var a=t=>{try{d(i.next(t))}catch(e){o(e)}},l=t=>{try{d(i.throw(t))}catch(e){o(e)}},d=t=>t.done?n(t.value):Promise.resolve(t.value).then(a,l);d((i=i.apply(t,e)).next())}));var t,e,i}}},i=window.Vue.resolveComponent,n=window.Vue.createVNode,o=window.Vue.toDisplayString,a=window.Vue.createTextVNode,l=window.Vue.resolveDirective,d=window.Vue.openBlock,s=window.Vue.createElementBlock,r=window.Vue.withDirectives,u=window.Vue.createCommentVNode,m=window.Vue.createElementVNode,h=window.Vue.withCtx,c={class:"wrap"},w={class:"main"},v={class:"main-banner"},f={class:"title m-t"},p={key:0,class:"info m-t-md p-l p-r ts-14"},g={class:"container m-t lh-1-8 bg-white p-a-md"},V={class:"title text-center m-t m-b ts-32 hidden"},x=["innerHTML"];const y=t(e,[["render",function(t,e,y,$,D,T){const b=i("xy-header"),k=i("el-skeleton"),N=i("xy-footer"),_=l("loading");return d(),s("div",c,[n(b),m("div",w,[m("div",v,[r((d(),s("h1",f,[a(o(D.info.title),1)])),[[_,D.loading]]),D.loading?u("",!0):(d(),s("p",p," 更新时间："+o(t.$util.timeFormat(D.info.updateTime)),1))]),m("div",g,[m("h1",V,o(D.info.title),1),n(k,{loading:D.loading,rows:12,animated:""},{default:h((()=>[m("div",{innerHTML:D.info.content},null,8,x)])),_:1},8,["loading"])])]),n(N)])}]]);export{y as default};
