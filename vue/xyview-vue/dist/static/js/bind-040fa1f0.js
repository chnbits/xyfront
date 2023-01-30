var e=(e,i,t)=>new Promise(((s,o)=>{var l=e=>{try{d(t.next(e))}catch(i){o(i)}},n=e=>{try{d(t.throw(e))}catch(i){o(i)}},d=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,n);d((t=t.apply(e,i)).next())}));import{q as i}from"./qrlogin-b4eb9fbc.js";import{_ as t}from"../../index.js";const s={props:{redirectBase:"",isPage:!1},components:{qrlogin:i},emits:["success"],data(){var e,i,t,s,o,l;return{manage:!0,loading:!1,loginTypes:(null==(t=null==(i=null==(e=this.$store.state.app.siteInfo)?void 0:e.moduleConfig)?void 0:i.third_login)?void 0:t.loginTypes)||[],myBindList:[],bindDialog:!1,bindWhich:"",verifyState:!1,qrloginShow:!1,qrloginType:null==(l=null==(o=null==(s=this.$store.state.app.siteInfo)?void 0:s.moduleConfig)?void 0:o.qrlogin)?void 0:l.type,password:"",form:{bindType:"login",type:"",code:"",redirect:""}}},created:function(){if(this.$util.hasExt("third_login")){this.loadData();let e=this.$util.getUrlQuery();if(e.code){if(this.form.type=this.$route.params.type,!this.form.type)return void alert("type获取不到值");this.form.code=e.code,this.handleBind()}}},computed:{},methods:{hasBind(e){return this.myBindList.find((i=>i.identityType==e))},hasBindIndex(e){return this.myBindList.findIndex((i=>i.identityType==e))},doVerifyPassword(){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let i=yield this.$util.request({url:"/v1/reg_username/user/verifyPassword",data:{password:this.password},method:"post"});return"200"==i.code?(this.$util.showToast({title:i.msg,icon:"success",duration:2e3}),this.verifyState=!0,"wxmp"==this.bindWhich?this.qrloginShow=!0:this.getAuthUrl(this.bindWhich)):this.$util.showToast({title:i.msg,icon:"loading",duration:3e3}),this.loading=!1,i}))},showDialog(e){this.verifyState=!1,this.bindDialog=!0,this.bindWhich=e},qrsuccess(){window.location.reload()},getAuthUrl(e){window.location.href=this.$util.baseDomain()+"/third_login/user/authorization.html?type="+e+"&redirect="+this.getRedirectUrl(e)},getRedirectUrl(e){return this.redirectBase?this.redirectBase=e:window.location.protocol+"//"+window.location.host+"/user/profile/"+e},handleBind(){return e(this,null,(function*(){this.form.redirect=this.getRedirectUrl(this.form.type),this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let i=yield this.$util.request({url:"/v1/third_login/user/bind",data:this.form,method:"post"});"200"==i.code?(this.$store.commit("user/setUserInfo",i.data.userInfo),this.$util.showToast({title:i.msg,icon:"success",duration:2e3}),this.isPage?this.$router.push({name:"/my"}):this.$emit("success")):this.$util.showToast({title:i.msg,icon:"loading",duration:3e3}),this.loading=!1}))},unBind(i){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let t=yield this.$util.request({url:"/v1/third_login/user/unbind",data:{id:this.myBindList[i].id},method:"delete"});"200"==t.code?(this.$util.showToast({title:t.msg,icon:"success",duration:2e3}),this.myBindList=this.myBindList.splice(i,1)):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3}),this.loading=!1}))},loadData(){return e(this,null,(function*(){this.loading=!0;let e=this;setTimeout((function(){e.loading=!1}),5e3);let i=yield this.$util.request({url:"/v1/third_login/user/my",method:"get"});"200"==i.code?(this.myBindList=i.data.dataList,this.loginTypes=i.data.loginTypes):this.$util.showToast({title:i.msg,icon:"loading",duration:3e3}),this.loading=!1}))}}},o=window.Vue.openBlock,l=window.Vue.createElementBlock,n=window.Vue.createCommentVNode,d=window.Vue.createElementVNode,a=window.Vue.createTextVNode,r=window.Vue.resolveComponent,u=window.Vue.withCtx,c=window.Vue.createBlock,h=window.Vue.createVNode,y=window.Vue.Fragment,m=window.Vue.createSlots,p=window.Vue.pushScopeId,g=window.Vue.popScopeId,w=e=>(p("data-v-88751e3c"),e=e(),g(),e),f={class:"bg-white p-a flex space-between"},x={key:0},v={key:0,style:{color:"rgb(18, 150, 219)"},class:"xyicon xyicon-qq ts-30 m-r"},b={key:1,style:{color:"rgb(100, 174, 67)"},class:"xyicon xyicon-weixin ts-30"},q={key:1,class:"flex-1"},k={key:0,class:"flex space-between flex-alignCenter m-b"},B=w((()=>d("i",{class:"xyicon xyicon-qq ts-30 m-r",style:{color:"rgb(18, 150, 219)"}},null,-1))),V=w((()=>d("div",{style:{width:"80px"}},"QQ",-1))),T={key:0,class:"flex-1 text-gray"},$={key:1,class:"flex-1 text-gray"},_={key:1,class:"flex space-between flex-alignCenter m-b"},C=w((()=>d("i",{class:"xyicon xyicon-weixin ts-30 m-r",style:{color:"rgb(100, 174, 67)"}},null,-1))),S=w((()=>d("div",{style:{width:"80px"}},"微信",-1))),I={key:0,class:"flex-1 text-gray"},D={key:1,class:"flex-1 text-gray"},z={class:"actions"},U={class:"m-b-md"},L=w((()=>d("h4",null,"请输入您的登录密码以完成身份验证：",-1))),P={class:"flex space-between flex-alignCenter m-t"},W={key:0,class:"ts-12 text-primary"};const N=t(s,[["render",function(e,i,t,s,p,g){const w=r("el-button"),N=r("el-input"),O=r("qrlogin"),E=r("el-dialog");return o(),l("div",null,[d("div",f,[0==p.manage?(o(),l("div",x,[p.loginTypes.indexOf("qq")>=0?(o(),l("i",v)):n("",!0),p.loginTypes.indexOf("wxmp")>=0?(o(),l("i",b)):n("",!0)])):(o(),l("div",q,[p.loginTypes.indexOf("qq")>=0?(o(),l("div",k,[B,V,g.hasBind("qq")?(o(),l("div",T,"已绑定")):(o(),l("div",$,"未绑定")),d("div",null,[g.hasBind("qq")?(o(),c(w,{key:0,size:"default",type:"",onClick:i[0]||(i[0]=e=>g.unBind(g.hasBindIndex("qq")))},{default:u((()=>[a("解绑")])),_:1})):(o(),c(w,{key:1,size:"default",type:"primary",class:"primary-linear",onClick:i[1]||(i[1]=e=>g.showDialog("qq"))},{default:u((()=>[a("绑定")])),_:1}))])])):n("",!0),p.loginTypes.indexOf("wxmp")>=0?(o(),l("div",_,[C,S,g.hasBind("wxmp")?(o(),l("div",I,"已绑定")):(o(),l("div",D,"未绑定")),d("div",null,[g.hasBind("wxmp")?(o(),c(w,{key:0,size:"default",type:"",onClick:i[2]||(i[2]=e=>g.unBind(g.hasBindIndex("wxmp")))},{default:u((()=>[a("解绑")])),_:1})):(o(),c(w,{key:1,size:"default",type:"primary",class:"primary-linear",onClick:i[3]||(i[3]=e=>g.showDialog("wxmp"))},{default:u((()=>[a("绑定")])),_:1}))])])):n("",!0)])),d("div",z,[p.manage?n("",!0):(o(),c(w,{key:0,size:"default",type:"primary",onClick:i[4]||(i[4]=e=>p.manage=!p.manage)},{default:u((()=>[a("管理")])),_:1}))])]),h(E,{title:"绑定"+p.bindWhich,modelValue:p.bindDialog,"onUpdate:modelValue":i[8]||(i[8]=e=>p.bindDialog=e),width:"440px"},m({default:u((()=>[d("div",U,[L,d("div",P,[h(N,{modelValue:p.password,"onUpdate:modelValue":i[5]||(i[5]=e=>p.password=e),size:"small",style:{width:"234px","box-sizing":"border-box"},placeholder:"请输入您的"+e.$store.state.app.siteInfo.title+"账户密码"},null,8,["modelValue","placeholder"]),p.verifyState?(o(),l("div",W,"验证成功")):n("",!0)])]),"wxmp"==p.bindWhich?(o(),l(y,{key:0},[p.qrloginShow?(o(),c(O,{key:0,class:"text-center",qrloginShow:p.qrloginShow,tip:"请使用微信扫描二维码完成绑定",width:168,bgColor:"#05B9CF",type:"wxmp",cate:1,onSuccess:g.qrsuccess},null,8,["qrloginShow","onSuccess"])):n("",!0)],64)):n("",!0)])),_:2},[p.verifyState?void 0:{name:"footer",fn:u((()=>[h(w,{size:"default",onClick:i[6]||(i[6]=e=>p.bindDialog=!1)},{default:u((()=>[a("取消")])),_:1}),h(w,{size:"default",type:"primary",onClick:i[7]||(i[7]=e=>g.doVerifyPassword())},{default:u((()=>[a("绑定")])),_:1})])),key:"0"}]),1032,["title","modelValue"])])}],["__scopeId","data-v-88751e3c"]]);export{N as default};