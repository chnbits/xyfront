var t=(t,e,i)=>new Promise(((o,s)=>{var r=t=>{try{n(i.next(t))}catch(e){s(e)}},a=t=>{try{n(i.throw(t))}catch(e){s(e)}},n=t=>t.done?o(t.value):Promise.resolve(t.value).then(r,a);n((i=i.apply(t,e)).next())}));import{_ as e}from"../../index.js";const i={props:{qrloginShow:!1,type:"",cate:{type:Number,default:0},tip:{type:String,default:"使用微信扫一扫"},width:{type:Number,default:200},bgColor:{type:String,default:"#eee"}},data:()=>({seed:"",qrurl:"",timer:null,timeout:!1}),mounted:function(){this.qrloginShow&&this.loadData()},watch:{qrloginShow(t){t?(clearInterval(this.timer),this.loadData()):clearInterval(this.timer)}},beforeUnmount(){clearInterval(this.timer)},methods:{loadData(){return t(this,null,(function*(){let t=yield this.$util.request({url:"/v1/qrlogin/qrlogin/getSeed",data:{type:this.type,cate:this.cate},method:"get"});200==t.code?(this.seed=t.data.seed,this.qrurl=t.data.qrurl,this.timeout=!1,clearInterval(this.timer),this.timer=setInterval(this.getLogin,3e3)):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3})}))},getLogin(){return t(this,null,(function*(){let t=yield this.$util.request({url:"/v1/qrlogin/qrlogin/getLogin?seed="+this.seed,method:"get"});200==t.code&&(t.data.timeout?(this.timeout=!0,clearInterval(this.timer)):(clearInterval(this.timer),1==this.cate?(this.$util.showToast({title:t.msg,icon:"success",duration:2e3}),this.$emit("success")):t.data.userInfo?(t.data.token&&this.$store.commit("user/setToken",t.data.token),this.$store.commit("user/setUserInfo",t.data.userInfo),this.$util.showToast({title:t.msg,icon:"success",duration:2e3}),this.$emit("success")):this.$router.push({path:"/qrlogin/login",query:{seed:this.seed,type:this.type}})))}))}}},o=window.Vue.resolveComponent,s=window.Vue.normalizeStyle,r=window.Vue.createVNode,a=window.Vue.openBlock,n=window.Vue.createElementBlock,l=window.Vue.createCommentVNode,d=window.Vue.toDisplayString,u=window.Vue.createElementVNode;window.Vue.pushScopeId,window.Vue.popScopeId;const h={key:0},c={key:0,class:"xyicon xyicon-history"},m={class:"tip m-t-md text-666"};const p=e(i,[["render",function(t,e,i,p,w,g){const y=o("xy-qrcode");return a(),n("div",{class:"qr-box",onClick:e[0]||(e[0]=(...t)=>g.loadData&&g.loadData(...t))},[w.qrurl?(a(),n("div",h,[r(y,{class:"qrcode",style:s({opacity:w.timeout?.3:1}),value:w.qrurl,options:{width:i.width}},null,8,["style","value","options"]),w.timeout?(a(),n("span",c)):l("",!0)])):(a(),n("div",{key:1,class:"no-qr",style:s({width:this.width+"px",height:this.width+"px",background:this.bgColor})},null,4)),u("div",m,d(i.tip),1)])}],["__scopeId","data-v-63fe5aad"]]);export{p as q};
