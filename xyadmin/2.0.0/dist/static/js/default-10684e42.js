import{_ as t}from"./_plugin-vue_export-helper-1b428a4d.js";const e={data:()=>({tagsleft:"31"}),methods:{isActive(t){return t.fullPath==this.$route.fullPath},addViewTags(){if(this.$route.fullPath){const t=this.$route;this.$store.commit("tagsview/addVisitedViews",{baseUrl:this.$store.state.app.baseUrl+this.$store.state.menu.currentSite,data:t})}},delSelectTag(t){this.$store.dispatch("tagsview/delVisitedViews",{baseUrl:this.$store.state.app.baseUrl+this.$store.state.menu.currentSite,data:t}).then((e=>{if(this.isActive(t)){let t="";for(var s in this.$store.state.tagsview.visitedviews[this.$store.state.app.baseUrl+this.$store.state.menu.currentSite])t=s;let e=this.$store.state.tagsview.visitedviews[this.$store.state.app.baseUrl+this.$store.state.menu.currentSite][t];e?this.$router.push(e.fullPath):this.$router.push("/")}this.$forceUpdate()}))},handleScroll(t){let e=Number(this.tagsleft)+Number(t),s=document.body.clientWidth;s>768&&(s-=200);let i=document.getElementById("tagwrapper"),a=s-i.offsetLeft-i.offsetWidth;e>=31?this.tagsleft=31:(t>0||a<30)&&(this.tagsleft=e)},closeAll(){this.$store.commit("tagsview/setVisitedViews",{baseUrl:this.$store.state.app.baseUrl+this.$store.state.menu.currentSite,data:{}}),this.$router.push("/home")},closeOthers(){let t={};t[this.$route.fullPath]={fullPath:this.$route.fullPath,path:this.$route.path,title:this.$route.meta.title},this.$store.commit("tagsview/setVisitedViews",{baseUrl:this.$store.state.app.baseUrl+this.$store.state.menu.currentSite,data:t})}},watch:{$route(){this.$store.state.tagsview.showNavtab&&"/home"!==this.$route.fullPath&&(this.addViewTags(),this.$store.commit("tagsview/setCurrentRoute",{baseUrl:this.$store.state.app.baseUrl+this.$store.state.menu.currentSite,data:this.$route.fullPath}))}}},s=window.Vue.createElementVNode,i=window.Vue.resolveComponent,a=window.Vue.withCtx,o=window.Vue.createVNode,l=window.Vue.createTextVNode,r=window.Vue.normalizeClass,n=window.Vue.renderList,u=window.Vue.Fragment,c=window.Vue.openBlock,d=window.Vue.createElementBlock,h=window.Vue.toDisplayString,w=window.Vue.withModifiers,p=window.Vue.createCommentVNode,m=window.Vue.createBlock,v=window.Vue.normalizeStyle,f=window.Vue.vShow,$=window.Vue.withDirectives,g=window.Vue.pushScopeId,V=window.Vue.popScopeId,b=t=>(g("data-v-19822196"),t=t(),V(),t),y={class:"tag-nav-wrapper"},x={class:"btn-con left-btn"},S=b((()=>s("i",{class:"xyicon xyicon-left ts-16 text-666"},null,-1))),k={class:"btn-con right-btn"},U=b((()=>s("i",{class:"xyicon xyicon-right ts-16 text-666"},null,-1))),_={class:"close-con"},C=b((()=>s("i",{class:"xyicon xyicon-close ts-13 text-666"},null,-1))),P={style:{"white-space":"nowrap",overflow:"visible",transition:"left .3s ease"}},N=b((()=>s("span",{class:"dot"},null,-1))),A=b((()=>s("span",{class:"title"},"首页",-1))),T=b((()=>s("span",{class:"dot"},null,-1))),B={class:"title"},I=["onClick"];const z=t(e,[["render",function(t,e,g,V,b,z){const E=i("el-button"),D=i("el-dropdown-item"),L=i("el-dropdown-menu"),O=i("el-dropdown"),W=i("router-link");return $((c(),d("div",y,[s("div",x,[o(E,{type:"text",onClick:e[0]||(e[0]=t=>z.handleScroll(120))},{default:a((()=>[S])),_:1})]),s("div",k,[o(E,{type:"text",onClick:e[1]||(e[1]=t=>z.handleScroll(-120))},{default:a((()=>[U])),_:1})]),s("div",_,[o(O,{transfer:"",style:{"margin-top":"0px"}},{default:a((()=>[o(E,{size:"small",type:"text",style:{height:"100%"}},{default:a((()=>[C])),_:1}),o(L,{slot:"dropdown"},{default:a((()=>[o(D,{onClick:z.closeAll,name:"close-all"},{default:a((()=>[l("关闭所有")])),_:1},8,["onClick"]),o(D,{onClick:z.closeOthers,name:"close-others"},{default:a((()=>[l("关闭其他")])),_:1},8,["onClick"])])),_:1})])),_:1})]),s("div",{class:"tags-view-wrapper",id:"tagwrapper",ref:"tagwrapper",style:v({left:b.tagsleft+"px"})},[s("div",P,[o(W,{class:r(["tags-view-item","/home"==t.$route.fullPath?"active":""]),to:"/home"},{default:a((()=>[N,A])),_:1},8,["class"]),t.$store.state.tagsview.visitedviews[t.$store.state.app.baseUrl+t.$store.state.menu.currentSite]?(c(!0),d(u,{key:0},n(t.$store.state.tagsview.visitedviews[t.$store.state.app.baseUrl+t.$store.state.menu.currentSite],(t=>(c(),m(W,{class:r(["tags-view-item",z.isActive(t)?"active":""]),to:t.path,key:t.path},{default:a((()=>[T,s("span",B,h(t.title),1),"/home"!=t.fullPath?(c(),d("i",{key:0,class:"close-tag xyicon xyicon-close ts-11",onClick:w((e=>z.delSelectTag(t)),["prevent","stop"])},null,8,I)):p("",!0)])),_:2},1032,["to","class"])))),128)):p("",!0)])],4)],512)),[[f,1==t.$store.state.tagsview.showNavtab]])}],["__scopeId","data-v-19822196"]]);export{z as default};