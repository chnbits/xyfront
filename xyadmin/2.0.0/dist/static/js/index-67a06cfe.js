import{_ as e}from"./_plugin-vue_export-helper-1b428a4d.js";const t={name:"BreadcrumbComp",mixins:[{name:"Breadcrumb",data:()=>({interval:null,timer:0,breadcrumb:{level:[],last:{title:""}}}),beforeMount:function(){let e=[];e.push(this.$store.state.menu.menuList.menuList[this.$route.meta.menuIndex]),this.breadcrumb.level=[],this.breadcrumb.last=e[0];do{e=this.$store.state.menu.menuList.menuList.filter((t=>t.pathSuffix?t.path==e[0].pmenu&&t.pathSuffix==e[0].pathSuffix:t.path==e[0].pmenu)),e[0]&&this.breadcrumb.level.unshift(e[0])}while(e[0].pmenu&&e[0].menuType>=0);let t=this.breadcrumb.level[0];t.hasOwnProperty("pathSuffix")||(t.pathSuffix=""),t.hasOwnProperty("apiParams")||(t.apiParams=""),this.$store.commit("menu/setData",{key:"defaultOpeneds",value:[t.routePath]}),this.$store.commit("menu/setData",{key:"breadcrumb",value:this.breadcrumb})},created:function(){},methods:{refresh(){this.$emit("refresh-page")}},watch:{$route(){let e=this.breadcrumb.last;if(this.$route.fullPath===(null==e?void 0:e.routePath)){let e=this.breadcrumb.level[0];e.hasOwnProperty("pathSuffix")||(e.pathSuffix=""),e.hasOwnProperty("apiParams")||(e.apiParams=""),this.$store.commit("menu/setData",{key:"defaultOpeneds",value:[e.routePath]}),this.$store.commit("menu/setData",{key:"breadcrumb",value:this.breadcrumb})}}}}],data:()=>({}),created:function(){},methods:{},watch:{$route(){}}},a=window.Vue.createElementVNode,r=window.Vue.createTextVNode,u=window.Vue.resolveComponent,i=window.Vue.withCtx,n=window.Vue.createVNode,s=window.Vue.renderList,l=window.Vue.Fragment,o=window.Vue.openBlock,d=window.Vue.createElementBlock,m=window.Vue.toDisplayString,c=window.Vue.createBlock;window.Vue.createCommentVNode;const h=window.Vue.pushScopeId,p=window.Vue.popScopeId,f=e=>(h("data-v-286becea"),e=e(),p(),e),b={class:"main-breadcrumb flex space-between flex-alignCenter"},w=f((()=>a("span",{class:"xyicon xyicon-address ts-12"},null,-1))),x=r(" 首页 "),v=f((()=>a("i",{class:"xyicon xyicon-refresh"},null,-1)));const y=e(t,[["render",function(e,t,h,p,f,y){const V=u("el-breadcrumb-item"),P=u("el-breadcrumb"),k=u("el-button"),S=u("el-button-group");return o(),d("div",b,[n(P,{separator:"/",class:"flex-1"},{default:i((()=>[n(V,{to:"/home"},{default:i((()=>[w,x])),_:1}),(o(!0),d(l,null,s(e.breadcrumb.level,((e,t)=>(o(),d(l,{key:t},[e.menuType>0?(o(),c(V,{key:0,to:(e.pathSuffix?e.pathSuffix:"")+"/pages"+e.path+e.apiParams},{default:i((()=>[r(m(e.title),1)])),_:2},1032,["to"])):(o(),c(V,{key:1},{default:i((()=>[r(m(e.title),1)])),_:2},1024))],64)))),128)),n(V,null,{default:i((()=>[r(m(e.breadcrumb.last.title),1)])),_:1})])),_:1}),a("div",null,[n(S,null,{default:i((()=>[n(k,{onClick:e.refresh,circle:"",size:"small"},{default:i((()=>[v])),_:1},8,["onClick"])])),_:1})])])}],["__scopeId","data-v-286becea"]]);export{y as default};
