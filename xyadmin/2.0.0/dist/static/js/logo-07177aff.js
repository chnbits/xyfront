import e from"./siteList-f75de3b7.js";import{_ as t}from"./_plugin-vue_export-helper-1b428a4d.js";const o={components:{siteList:e},name:"logoBox",props:{},data:()=>({manNavBgColor:""}),methods:{},watch:{},mounted:function(){let e=document.querySelector(".theme-box");e&&(this.manNavBgColor=getComputedStyle(e).getPropertyValue("--main-nav-bg-color").trim())}},s=window.Vue.openBlock,n=window.Vue.createElementBlock,r=window.Vue.createCommentVNode,u=window.Vue.createElementVNode,a=window.Vue.toDisplayString,i=window.Vue.resolveComponent,l=window.Vue.withCtx,m=window.Vue.createBlock,c=window.Vue.createVNode,d=window.Vue.normalizeStyle,g=window.Vue.Fragment,$=window.Vue.normalizeClass,v=window.Vue.createTextVNode,w=window.Vue.vShow,p=window.Vue.withDirectives,y=window.Vue.pushScopeId,h=window.Vue.popScopeId,T=e=>(y("data-v-389d212f"),e=e(),h(),e),f={key:0,class:"logo-box menu-collapse"},k={class:"logo"},S=["src"],V={key:1,class:"logo-img",src:"https://cdn.jiangruyi.com/xyadmin/2.0.0/dist/logo.png"},L={key:0,class:"logo"},F=["src"],C={key:1,class:"logo"},x=["src"],b={key:2,class:"title"},B={key:2,class:"el-icon-arrow-down el-icon--right ts-14",style:{width:"auto","margin-right":"0px"}},N={key:0,slot:"reference"},_={key:0,class:"logo-box"},D={class:"logo"},j=["src"],I={key:1,class:"logo-box"},z={class:"flex hidden"},E=T((()=>u("span",{class:"kuohao"},"(",-1))),q=T((()=>u("span",{class:"kuohao"},")",-1)));const P=t(o,[["render",function(e,t,o,y,h,T){const P=i("el-badge"),A=i("siteList"),G=i("Divider"),H=i("el-popover");return s(),n("div",null,["default"==e.$store.state.menu.adminTheme?(s(),n(g,{key:0},[e.$store.state.menu.menuList.menuTree?(s(),n("div",{key:0,class:"logo-layout",style:d({background:"var(--main-nav-logo-bg-color)",padding:e.$store.state.menu.menuCollapse?"0":"0 10px"})},[c(A,null,{default:l((()=>{var t,o;return[e.$store.state.menu.menuCollapse?(s(),n("div",f,[u("div",k,[e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logo?(s(),n("img",{key:0,class:"logo-img",style:{"border-radius":"50%"},src:e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logo},null,8,S)):(s(),n("img",V))])])):(s(),m(P,{key:1,class:"logo-box",hidden:!(null==(t=e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite])?void 0:t.logoBadge),value:null==(o=e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite])?void 0:o.logoBadge},{default:l((()=>[e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logoTitle&&"#ffffff"==h.manNavBgColor?(s(),n("div",L,[u("img",{class:"logo-img",src:e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logoTitle},null,8,F)])):e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logoTitleDark&&"#ffffff"!=h.manNavBgColor?(s(),n("div",C,[u("img",{class:"logo-img",src:e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logoTitleDark},null,8,x)])):(s(),n("div",b,a(e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].title),1))])),_:1},8,["hidden","value"])),e.$store.state.menu.menuList.menuTree.length>1&&!e.$store.state.menu.menuCollapse?(s(),n("i",B)):r("",!0)]})),_:1})],4)):r("",!0)],64)):"tab"==e.$store.state.menu.adminTheme?(s(),n("div",{key:1,class:"logo-layout",style:d({background:e.$store.state.menu.mainNavBgColor})},[c(H,{placement:"right",width:"400",trigger:"click"},{default:l((()=>[c(A),e.$store.state.menu.menuList.menuTree?(s(),n("div",N,[e.$store.state.menu.menuCollapse?(s(),n("div",_,[u("div",D,[u("img",{class:"logo-img",style:{"border-radius":"50%"},src:e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logo},null,8,j)])])):(s(),n("div",I,[u("div",{class:$(["title","#FFFFFF"==e.$store.state.menu.mainNavBgColor?"light":""])},a(e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].title),3),p(u("div",z,[c(G,{class:"divider",type:"vertical"}),u("div",{class:$(["title-current","#FFFFFF"==e.$store.state.menu.mainNavBgColor?"light":""])},a(e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].subtitle||"管理后台"),3),u("div",{class:$(["title-current-short","#FFFFFF"==e.$store.state.menu.mainNavBgColor?"light":""])},[p(u("span",null,[E,v(" "+a(e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].extTitle)+" ",1),q],512),[[w,e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].extTitle]])],2)],512),[[w,e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite]]])]))])):r("",!0)])),_:1})],4)):r("",!0)])}],["__scopeId","data-v-389d212f"]]);export{P as default};
