import e from"./logo-07177aff.js";import{_ as t}from"./_plugin-vue_export-helper-1b428a4d.js";const s="https://cdn.jiangruyi.com/xyadmin/2.0.0/dist/static/png/color-940b266d.png",n={components:{logoBox:e},props:{showToggles:{}},data:()=>({leftTabWidth:70,currentHoverTab:-1}),created:function(){this.$store.state.menu.menuList.menuTree[this.$store.state.menu.currentSite]||this.$store.commit("menu/setData",{key:"currentSite",value:0})},computed:{rotateIcon:function(){return["menu-icon",this.$store.state.menu.menuCollapse?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.$store.state.menu.menuCollapse?"collapsed-menu":""]},currentActive(){var e;if(null==(e=this.$store.state.menu.breadcrumb)?void 0:e.level){if(this.$route.fullPath==this.$store.state.menu.breadcrumb.last.routePath)return this.$route.fullPath;{let e=this.$store.state.menu.breadcrumb.level[this.$store.state.menu.breadcrumb.level.length-1];if(null==e?void 0:e.routePath)return e.routePath}}}},methods:{hideMenuRight(){this.$store.commit("menu/setData",{key:"showLeftLayout",value:!1})},settingsModal(){this.showToggles.showSettings=!0},selectMenu(e){if(this.showToggles.isMenuDisplay=!1,this.$store.state.app.uiAudio){let e=new Audio;e.src="https://cdn.jsdelivr.net/gh/starideas/xyfront/audio/open2.mp3",e.play()}},tabLeave(){this.currentHoverTab=this.$store.state.menu.currentTab},tabOver(e){this.currentHoverTab=e,this.$store.commit("menu/setData",{key:"showLeftLayout",value:!0}),this.$store.commit("menu/setData",{key:"currentTab",value:e})},tabClick(e){if(this.$store.commit("menu/setData",{key:"currentTab",value:e}),this.$store.state.app.uiAudio){let e=new Audio;e.src="./audio/tab.wav",e.play()}}},watch:{"$store.state.menu.currentTab":function(e){e>=0?this.$store.commit("menu/setData",{key:"menuCollapse",value:!1}):this.$store.commit("menu/setData",{key:"menuCollapse",value:!0})}}},a=window.Vue.resolveComponent,i=window.Vue.createVNode,l=window.Vue.createElementVNode,o=window.Vue.withCtx,u=window.Vue.normalizeClass,r=window.Vue.Transition,c=window.Vue.renderList,d=window.Vue.Fragment,m=window.Vue.openBlock,h=window.Vue.createElementBlock,p=window.Vue.toDisplayString,v=window.Vue.vShow,y=window.Vue.withDirectives,f=window.Vue.withModifiers,w=window.Vue.createTextVNode,b=window.Vue.createBlock,g=window.Vue.createCommentVNode,x=window.Vue.normalizeStyle,k=window.Vue.pushScopeId,$=window.Vue.popScopeId,T=e=>(k("data-v-a49b6a70"),e=e(),$(),e),V={class:"flex flex-column",style:{height:"100vh"}},_={class:"left-menu flex flex-1"},C=["collapsed-width"],S={class:"tab-logo"},L={class:"tab-list",style:{flex:"1"}},M={class:"left-menu-collapse"},I=T((()=>l("i",{class:"left-icon xyicon xyicon-home"},null,-1))),D=T((()=>l("div",{class:"title"}," 概览",-1))),j=["onMouseover","onClick"],A={href:"javascript:void(0);"},H={class:"title",style:{"margin-left":"2px"}},P={class:"bottom"},B=[T((()=>l("img",{height:"16",class:"m-r-xs",src:s},null,-1))),T((()=>l("div",{class:"title ts-14"},"设置",-1)))],N={class:"tab-item flex items-center justify-center font-sm",style:{height:"28px"}},O=T((()=>l("i",{class:"xyicon xyicon-search cursor-pointer"},null,-1))),z=["default-active"],R={class:"menu-list"},E=["type"];const W=t(n,[["render",function(e,t,s,n,k,$){const T=a("el-avatar"),W=a("router-link"),F=a("el-divider"),q=a("el-menu-item"),G=a("el-sub-menu"),J=a("el-tag"),K=a("el-menu-item-group"),Q=a("el-menu");return m(),h("div",V,[l("div",_,[l("div",{class:u(s.showToggles.isMenuDisplay?"left-tab left-tab-layout-display":"left-tab"),style:{overflow:"auto",textAlign:"center",background:"#f7f8fa"},ref:"left-tab","hide-trigger":"",collapsible:!0,"default-collapsed":!0,"collapsed-width":k.leftTabWidth,value:!0},[l("div",S,[i(T,{src:e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].logo||"https://cdn.jiangruyi.com/xyadmin/2.0.0/dist/logo.png"},null,8,["src"])]),l("div",L,[l("div",M,[i(r,null,{default:o((()=>[l("div",{class:u(["tab-item",-1==e.$store.state.menu.currentTab?"active":""]),onMouseleave:t[0]||(t[0]=(...e)=>$.tabLeave&&$.tabLeave(...e)),onMouseover:t[1]||(t[1]=e=>$.tabOver(-1)),onClick:t[2]||(t[2]=e=>$.tabClick(-1))},[i(W,{to:"/home"},{default:o((()=>[I,D])),_:1})],34)])),_:1}),(m(!0),h(d,null,c(e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].children,((s,n)=>y((m(),h("div",{class:u(["tab-item",n==e.$store.state.menu.currentTab?"active":""]),onMouseleave:t[3]||(t[3]=(...e)=>$.tabLeave&&$.tabLeave(...e)),onMouseover:e=>$.tabOver(n),onClick:e=>$.tabClick(n),key:"dp_"+s.path},[l("a",A,[l("i",{class:u(["left-icon xyicon",s.icon||"xyicon-folder"])},null,2),l("span",H,p(s.title),1)])],42,j)),[[v,s.children&&1!=s.isHide&&-1==s.menuType]]))),128))])]),l("div",P,[l("div",{class:"tab-item flex items-center justify-center",onClick:t[4]||(t[4]=(...e)=>$.settingsModal&&$.settingsModal(...e))},B),l("div",N,[O,i(F,{direction:"vertical"}),l("i",{class:"xyicon xyicon-help-o cursor-pointer",onClickCapture:t[5]||(t[5]=f((e=>s.showToggles.aboutAdmin=!0),["stop"]))},null,32)])])],10,C),e.$store.state.menu.menuCollapse||1!=e.$store.state.menu.showLeftLayout?g("",!0):(m(),h("div",{key:0,class:u(s.showToggles.isMenuDisplay?"left-layout left-tab-layout-display":"left-layout"),ref:"left-layout",collapse:!0,onSelect:t[6]||(t[6]=(...e)=>$.selectMenu&&$.selectMenu(...e)),router:!0,"default-active":$.currentActive},[l("div",R,[i(Q,{"open-names":[0,1,2,3,4,5,6,7,8,9,10,11,12],accordion:!1,"active-name":e.$store.state.menu.activeMenuItem,mode:"vertical",theme:"light",width:"auto",class:u(["left-menu",$.menuitemClasses]),router:!0},{default:o((()=>{var t,s;return[(m(!0),h(d,null,c(null==(t=e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite])?void 0:t.children,((t,s)=>{var n,a,i,u,r;return m(),h(d,{key:s},[e.$store.state.menu.currentTab==s?(m(!0),h(d,{key:0},c(null==(r=null==(u=null==(i=null==(a=null==(n=e.$store.state.menu.menuList)?void 0:n.menuTree)?void 0:a[e.$store.state.menu.currentSite])?void 0:i.children)?void 0:u[e.$store.state.menu.currentTab])?void 0:r.children,((t,s)=>(m(),h("div",{class:"el-menu-inner",key:"menu_"+s},[1==t.status&&1!=t.isHide?(m(),h(d,{key:0},[0==t.menuType?(m(),b(K,{key:0,title:t.title,style:x({background1:e.$store.state.menu.mainNavBgColor}),name:"siteIndextabIndex-"+s},{title:o((()=>[l("i",{class:"left-icon hidden",type:t.icon?t.icon:"md-folder"},null,8,E),w(" "+p(t.title),1)])),default:o((()=>[t.children?(m(!0),h(d,{key:0},c(t.children,((t,n)=>(m(),h(d,{key:t.path},[1==t.status&&1!=t.isHide&&"0"==t.menuType?(m(),b(G,{key:0,name:"siteIndextabIndex-"+s+"-"+n},{title:o((()=>[w(p(t.title),1)])),default:o((()=>[(m(!0),h(d,null,c(t.children,((e,t)=>(m(),h(d,{key:e.path+(e.pathSuffix?e.pathSuffix:"")+e.apiParams},[1==e.status&&1!=e.isHide&&1==e.menuType?(m(),b(q,{key:0,index:e.index,name:"siteIndextabIndex-"+s+"-"+n+"-"+t},{default:o((()=>[w(p(e.title),1)])),_:2},1032,["index","name"])):g("",!0)],64)))),128))])),_:2},1032,["name"])):(m(),h(d,{key:1},[1==t.status&&1!=t.isHide&&1==t.menuType?(m(),b(q,{key:0,index:t.index,name:"siteIndextabIndex-"+s+"-"+n},{default:o((()=>[w(p(t.title)+" ",1),!0===e.$store.state.app.showDev?(m(),h(d,{key:0},[t.devState&&"dev"==t.devState?(m(),b(J,{key:0,style:{margin:"0 0 0 -10px",display:"inline-block",transform:"scale(0.6)",padding:"0 4px"},color:"warning"},{default:o((()=>[w("开发中")])),_:1})):t.devState&&"prod"==t.devState?(m(),b(J,{key:1,style:{margin:"0 0 0 -10px",display:"inline-block",transform:"scale(0.6)",padding:"0 4px"},color:"success"},{default:o((()=>[w("已完成")])),_:1})):g("",!0)],64)):g("",!0)])),_:2},1032,["index","name"])):g("",!0)],64))],64)))),128)):g("",!0)])),_:2},1032,["title","style","name"])):1==t.menuType?(m(),b(q,{key:1,name:"siteIndextabIndex-"+s,to:t.index},{default:o((()=>[w(p(t.title),1)])),_:2},1032,["name","to"])):g("",!0)],64)):g("",!0)])))),128)):g("",!0)],64)})),128)),(null==(s=e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite])?void 0:s.children)?g("",!0):(m(),b(q,{key:0,name:"loading-error",to:"/core/layout/help"},{default:o((()=>[w(" 菜单加载中... ")])),_:1}))]})),_:1},8,["active-name","class"])])],42,z)),l("div",{onClick:t[7]||(t[7]=(...e)=>$.hideMenuRight&&$.hideMenuRight(...e)),class:u(e.$store.state.menu.showLeftLayout?"base-mask-left-layout":"")},null,2)])])}],["__scopeId","data-v-a49b6a70"]]),F=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{s as _,W as l,F as t};