import{_ as e}from"../../index.js";const t=(0,window.Vue.defineComponent)({name:"XyNavtopShop",setup:()=>({})}),o=window.Vue.createTextVNode,l=window.Vue.resolveComponent,a=window.Vue.withCtx,s=window.Vue.createVNode,n=window.Vue.createElementVNode,d=window.Vue.toDisplayString,r=window.Vue.openBlock,i=window.Vue.createElementBlock;window.Vue.createCommentVNode;const u=window.Vue.Fragment,c=window.Vue.createBlock,p={class:"flex ts-12 p-r-md"},f={class:"m-r"},m={class:"m-r"},w={class:"flex ts-12"},h={key:0,class:"m-r"},x={class:"text-primary"},y={class:"m-r"},v={class:"m-r"},_={class:"m-r"},g={class:"m-r"},V={class:"m-r"},b={class:"m-r"},k=n("span",null,[n("span",{class:"ts-12"},"个人中心"),n("span",{class:"xyicon xyicon-down ts-12 pl-1"})],-1),C={class:"m-r"};const q=e(t,[["render",function(e,t,q,N,E,j){const B=l("router-link"),z=l("el-dropdown-item"),U=l("el-dropdown-menu"),D=l("el-dropdown"),P=l("xy-qrcode"),S=l("el-popover"),T=l("xy-topnav",!0);return r(),c(T,null,{left:a((()=>[n("ul",p,[n("li",f,[s(B,{to:"/apidoc"},{default:a((()=>[o("API接口文档")])),_:1})]),n("li",m,[s(B,{to:"/docs/xyshop-dev"},{default:a((()=>[o("二次开发文档")])),_:1})])])])),right:a((()=>[n("ul",w,[e.$util.getToken()?(r(),i("li",h,[s(B,{to:"/user/center"},{default:a((()=>[o(" 您好， "),n("span",x,d(e.$store.state.user.userInfo.nickname),1)])),_:1})])):(r(),i(u,{key:1},[n("li",y,[s(B,{to:"/user/login"},{default:a((()=>[o("你好，请登录")])),_:1})]),n("li",v,[s(B,{class:"text-primary",to:"/user/register"},{default:a((()=>[o("免费注册")])),_:1})])],64)),n("li",_,[s(B,{to:"/course"},{default:a((()=>[o("商家学院")])),_:1})]),n("li",g,[s(B,{to:"/forum"},{default:a((()=>[o("交流社区")])),_:1})]),n("li",V,[s(B,{to:"/about"},{default:a((()=>[o("关于我们")])),_:1})]),n("li",b,[s(D,{trigger:"hover",size:"default"},{dropdown:a((()=>[s(U,null,{default:a((()=>[s(z,null,{default:a((()=>[s(B,{to:"/ishop/order/my"},{default:a((()=>[o("我的订单")])),_:1})])),_:1}),s(z,null,{default:a((()=>[s(B,{to:"/ishop/collect/my"},{default:a((()=>[o("我的收藏")])),_:1})])),_:1}),s(z,null,{default:a((()=>[s(B,{to:"/ishop/coupon/my"},{default:a((()=>[o("我的优惠券")])),_:1})])),_:1}),s(z,null,{default:a((()=>[s(B,{to:"/ishop/history/lists"},{default:a((()=>[o("浏览历史")])),_:1})])),_:1}),s(z,null,{default:a((()=>[s(B,{to:"/user_address/address/lists"},{default:a((()=>[o("收货地址")])),_:1})])),_:1})])),_:1})])),default:a((()=>[k])),_:1})]),n("li",C,[s(S,{placement:"bottom",title:"",width:"",trigger:"hover",content:""},{reference:a((()=>[o(" 联系客服 ")])),default:a((()=>[n("div",null,[s(P,{class:"qrcode",style:{opacity:1},value:"https://work.weixin.qq.com/kfid/kfcdfd9f4eee4e40e55",logo:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/fd85d105-06b6-441f-8574-f62b650336ba.jpeg",options:{width:120,margin:3}})])])),_:1})])])])),_:1})}]]),N=window.Vue.createVNode,E=window.Vue.normalizeClass,j=window.Vue.createElementVNode,B=window.Vue.createTextVNode,z=window.Vue.resolveComponent,U=window.Vue.withCtx,D=window.Vue.openBlock,P=window.Vue.createElementBlock,S={class:"wrap"},T=j("div",null,null,-1),Y={class:"main"},G={data:()=>({}),created(){this.loadData()},methods:{loadData(){return e=this,t=null,o=function*(){},new Promise(((l,a)=>{var s=e=>{try{d(o.next(e))}catch(t){a(t)}},n=e=>{try{d(o.throw(e))}catch(t){a(t)}},d=e=>e.done?l(e.value):Promise.resolve(e.value).then(s,n);d((o=o.apply(e,t)).next())}));var e,t,o}}},I=Object.assign(G,{__name:"base",setup:e=>(e,t)=>{const o=z("el-button"),l=z("xy-qrcode"),a=z("el-popover"),s=z("el-menu-item"),n=z("el-menu"),d=z("xy-header-default"),r=z("router-view"),i=z("xy-footer");return D(),P("div",S,[N(d,null,{"top-nav":U((()=>[N(q)])),logo:U((()=>[j("div",{class:E(["tw5 ts-22","text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-500 via-red-600"])}," XYShop商城系统 ")])),"right-extra":U((()=>[N(a,{placement:"bottom",title:"",width:"",trigger:"hover",content:""},{reference:U((()=>[N(o,{type:"danger",size:"default"},{default:U((()=>[B("演示")])),_:1})])),default:U((()=>[j("div",null,[N(l,{class:"qrcode",style:{opacity:1},value:"https://xyshop.jiangruyi.com",logo:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/fd85d105-06b6-441f-8574-f62b650336ba.jpeg",options:{width:120,margin:3}})])])),_:1})])),"left-nav":U((()=>[N(n,{ellipsis:!1,router:"",class:"flex-1",mode:"horizontal"},{default:U((()=>[N(s,{class:"hover-bottom",index:"/xyshop"},{default:U((()=>[B(" 首页 ")])),_:1}),N(s,{class:"hover-bottom",index:"/xyshop/b2b2c"},{default:U((()=>[B(" 功能 ")])),_:1}),N(s,{class:"hover-bottom",index:"/xyshop/price"},{default:U((()=>[B(" 价格 ")])),_:1}),N(s,{class:"hover-bottom",index:"/xyshop/changelog"},{default:U((()=>[B(" 更新日志 ")])),_:1}),N(s,{class:"hover-bottom",index:"/xyshop/quthquery"},{default:U((()=>[B(" 正版授权 ")])),_:1})])),_:1})])),"sub-nav-container":U((()=>[T])),_:1}),j("div",Y,[N(r)]),N(i)])}});export{I as default};