import e from"./logo-b779c837.js";import{_ as t}from"./_plugin-vue_export-helper-1b428a4d.js";const a="https://cdn.jiangruyi.com/xyadmin/2.0.0/dist/static/png/color-940b266d.png",s={components:{logoBox:e},props:{showToggles:{}},data:()=>({leftTabWidth:70,currentHoverTab:-1}),created:function(){this.$store.state.menu.menuList.menuTree[this.$store.state.menu.currentSite]||this.$store.commit("menu/setData",{key:"currentSite",value:0})},computed:{rotateIcon:function(){return["menu-icon",this.$store.state.menu.menuCollapse?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.$store.state.menu.menuCollapse?"collapsed-menu":""]}},methods:{hideMenuRight(){this.$store.commit("menu/setData",{key:"showLeftLayout",value:!1})},settingsModal(){this.showToggles.showSettings=!0},selectMenuItem(e){if(this.$store.state.app.uiAudio){let e=new Audio;e.src="https://cdn.jsdelivr.net/gh/starideas/xyfront/audio/open2.mp3",e.play()}this.$store.commit("menu/setData",{key:"activeMenuItem",value:e}),this.showToggles.isMenuDisplay=!1},tabLeave(){this.currentHoverTab=this.$store.state.menu.currentTab},tabOver(e){this.currentHoverTab=e,this.$store.commit("menu/setData",{key:"showLeftLayout",value:!0}),this.$store.commit("menu/setData",{key:"currentTab",value:e})},tabClick(e){if(this.$store.commit("menu/setData",{key:"currentTab",value:e}),this.$store.state.app.uiAudio){let e=new Audio;e.src="./audio/tab.wav",e.play()}}},watch:{"$store.state.menu.currentTab":function(e){e>=0?this.$store.commit("menu/setData",{key:"menuCollapse",value:!1}):this.$store.commit("menu/setData",{key:"menuCollapse",value:!0})}}},o=window.Vue.resolveComponent,n=window.Vue.normalizeClass,l=window.Vue.createVNode,i=window.Vue.createElementVNode,u=window.Vue.withCtx,r=window.Vue.renderList,d=window.Vue.Fragment,m=window.Vue.openBlock,c=window.Vue.createElementBlock,p=window.Vue.toDisplayString,h=window.Vue.createBlock,y=window.Vue.vShow,f=window.Vue.withDirectives,v=window.Vue.createTextVNode,w=window.Vue.createCommentVNode,b=window.Vue.normalizeStyle,g=window.Vue.pushScopeId,k=window.Vue.popScopeId,x=e=>(g("data-v-1e89b4fe"),e=e(),k(),e),$={class:"flex flex-column",style:{height:"100vh"}},T={class:"left-menu flex flex-1"},_={class:"tab-list",style:{flex:"1"}},S={class:"left-menu-collapse"},M=x((()=>i("div",{class:"title"}," 概览",-1))),V=["onMouseover","onClick"],C={class:"title",style:{"margin-left":"2px"}},I={class:"bottom"},L=x((()=>i("img",{height:"20",src:a},null,-1))),D=x((()=>i("div",{class:"title"},"设置",-1))),H={class:"tab-item font-sm",style:{height:"28px"}},B={class:"menu-list"},O=["hover-style"],j={slot:"title"};const A=t(s,[["render",function(e,t,a,s,g,k){const x=o("logoBox"),A=o("Icon"),N=o("router-link"),z=o("Dropdown"),R=o("Sider"),E=o("MenuItem"),P=o("Submenu"),W=o("Tag"),F=o("MenuGroup"),G=o("Menu");return m(),c("div",$,[l(x,{class:n(["logo-box",a.showToggles.isMenuDisplay?"left-tab-layout-display":""])},null,8,["class"]),i("div",T,[l(R,{class:n(a.showToggles.isMenuDisplay?"left-tab left-tab-layout-display":"left-tab"),style:{overflow:"auto",textAlign:"center",background:"#f7f8fa"},ref:"left-tab","hide-trigger":"",collapsible:!0,"default-collapsed":!0,"collapsed-width":g.leftTabWidth,value:!0},{default:u((()=>[i("div",_,[i("template",null,[i("div",S,[i("div",{class:n(["tab-item",-1==e.$store.state.menu.currentTab?"active":""]),onMouseleave:t[0]||(t[0]=(...e)=>k.tabLeave&&k.tabLeave(...e)),onMouseover:t[1]||(t[1]=e=>k.tabOver(-1)),onClick:t[2]||(t[2]=e=>k.tabClick(-1))},[l(N,{to:"/home"},{default:u((()=>[l(A,{style:{"vertical-align":"-.1em"},class:"left-icon",type:"md-speedometer"}),M])),_:1})],34),(m(!0),c(d,null,r(e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].children,((a,s)=>f((m(),c("div",{class:n(["tab-item",s==e.$store.state.menu.currentTab?"active":""]),onMouseleave:t[3]||(t[3]=(...e)=>k.tabLeave&&k.tabLeave(...e)),onMouseover:e=>k.tabOver(s),onClick:e=>k.tabClick(s),key:"dp_"+a.path},[(m(),h(z,{key:a.path},{default:u((()=>[i("i",{class:n(["xyicon",a.icon||"xyicon-folder"])},null,2),i("span",C,p(a.title),1)])),_:2},1024))],42,V)),[[y,a.children&&1!=a.isHide&&-1==a.menuType]]))),128))])])]),i("div",I,[i("div",{class:"tab-item",onClick:t[4]||(t[4]=(...e)=>k.settingsModal&&k.settingsModal(...e))},[l(N,{to:""},{default:u((()=>[L,D])),_:1})]),i("div",H,[l(N,{to:"",style:{"border-right":"1px solid rgba(255, 255, 255, .2)"}},{default:u((()=>[l(A,{type:"md-search",size:"16"})])),_:1}),l(N,{to:""},{default:u((()=>[l(A,{type:"md-help-circle",size:"16"})])),_:1})])])])),_:1},8,["class","collapsed-width"]),e.$store.state.menu.menuCollapse||1!=e.$store.state.menu.showLeftLayout?w("",!0):(m(),h(R,{key:0,class:n(a.showToggles.isMenuDisplay?"left-layout left-tab-layout-display":"left-layout"),style:{overflow:"auto",textAlign:"center"},ref:"left-layout","hide-trigger":!0,collapsible:!0,"default-collapsed":!1,"collapsed-width":150},{default:u((()=>[i("div",B,[l(G,{"open-names":[0,1,2,3,4,5,6,7,8,9,10,11,12],accordion:!1,"active-name":e.$store.state.menu.activeMenuItem,mode:"vertical",theme:"light",width:"auto",class:n(["left-menu",k.menuitemClasses]),onOnSelect:k.selectMenuItem},{default:u((()=>[e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite]&&e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].children&&e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].children[e.$store.state.menu.currentTab]?(m(!0),c(d,{key:0},r(e.$store.state.menu.menuList.menuTree[e.$store.state.menu.currentSite].children[e.$store.state.menu.currentTab].children,((t,a)=>(m(),c(d,{key:"menu_"+a},[1==t.status&&1!=t.isHide?(m(),c(d,{key:0},[0==t.menuType?(m(),h(F,{key:0,title:t.title,style:b({background1:e.$store.state.menu.mainNavBgColor}),name:"siteIndextabIndex-"+a},{default:u((()=>[i("template",{slot:"title","hover-style":{background:e.$store.state.menu.mainNavBgColor}},[l(A,{class:"left-icon hidden",type:t.icon?t.icon:"md-folder"},null,8,["type"]),v(" "+p(t.title),1)],8,O),t.children?(m(!0),c(d,{key:0},r(t.children,((t,s)=>(m(),c(d,{key:t.path},[1==t.status&&1!=t.isHide&&"0"==t.menuType?(m(),h(P,{key:0,name:"siteIndextabIndex-"+a+"-"+s},{default:u((()=>[i("template",j,[v(p(t.title),1)]),(m(!0),c(d,null,r(t.children,((e,t)=>(m(),c(d,{key:e.path+(e.pathSuffix?e.pathSuffix:"")+e.apiParams},[1==e.status&&1!=e.isHide&&1==e.menuType?(m(),h(E,{key:0,to:e.index,name:"siteIndextabIndex-"+a+"-"+s+"-"+t},{default:u((()=>[v(p(e.title),1)])),_:2},1032,["to","name"])):w("",!0)],64)))),128))])),_:2},1032,["name"])):(m(),c(d,{key:1},[1==t.status&&1!=t.isHide&&1==t.menuType?(m(),h(E,{key:0,to:t.index,name:"siteIndextabIndex-"+a+"-"+s},{default:u((()=>[v(p(t.title)+" ",1),!0===e.$store.state.app.showDev?(m(),c(d,{key:0},[t.devState&&"dev"==t.devState?(m(),h(W,{key:0,style:{margin:"0 0 0 -10px",display:"inline-block",transform:"scale(0.6)",padding:"0 4px"},color:"magenta"},{default:u((()=>[v("开发中")])),_:1})):t.devState&&"prod"==t.devState?(m(),h(W,{key:1,style:{margin:"0 0 0 -10px",display:"inline-block",transform:"scale(0.6)",padding:"0 4px"},color:"green"},{default:u((()=>[v("已完成")])),_:1})):w("",!0)],64)):w("",!0)])),_:2},1032,["to","name"])):w("",!0)],64))],64)))),128)):w("",!0)])),_:2},1032,["title","style","name"])):1==t.menuType?(m(),h(E,{key:1,name:"siteIndextabIndex-"+a,to:t.index},{default:u((()=>[v(p(t.title),1)])),_:2},1032,["name","to"])):w("",!0)],64)):w("",!0)],64)))),128)):(m(),h(E,{key:1,name:"loading-error",to:"/core/layout/help"},{default:u((()=>[v(" 菜单加载中... ")])),_:1}))])),_:1},8,["active-name","class","onOnSelect"])])])),_:1},8,["class"])),i("div",{onClick:t[5]||(t[5]=(...e)=>k.hideMenuRight&&k.hideMenuRight(...e)),class:n(e.$store.state.menu.showLeftLayout?"base-mask-left-layout":"")},null,2)])])}],["__scopeId","data-v-1e89b4fe"]]),N=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{a as _,A as l,N as t};