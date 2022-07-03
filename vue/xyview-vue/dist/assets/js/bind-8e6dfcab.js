import{q as v}from"./qrlogin-e9e53e99.js";import{_ as b}from"../index-726dc959.js";const q={props:{redirectBase:"",isPage:!1},components:{qrlogin:v},data(){var t,e,l,m,i,o;return{manage:!0,loading:!1,loginTypes:((l=(e=(t=this.$store.state.app.siteInfo)==null?void 0:t.moduleConfig)==null?void 0:e.third_login)==null?void 0:l.loginTypes)||[],myBindList:[],bindDialog:!1,bindWhich:"",verifyState:!1,qrloginShow:!1,qrloginType:(o=(i=(m=this.$store.state.app.siteInfo)==null?void 0:m.moduleConfig)==null?void 0:i.qrlogin)==null?void 0:o.type,password:"",form:{bindType:"login",type:"",code:"",redirect:""}}},created:function(){if(this.$util.hasExt("third_login")){this.loadData();let t=this.$util.getUrlQuery();if(t.code){if(this.form.type=this.$route.params.type,!this.form.type){alert("type\u83B7\u53D6\u4E0D\u5230\u503C");return}this.form.code=t.code,this.handleBind()}}},computed:{},methods:{hasBind(t){return this.myBindList.find(l=>l.identityType==t)},hasBindIndex(t){return this.myBindList.findIndex(l=>l.identityType==t)},async doVerifyPassword(){this.loading=!0;let t=this;setTimeout(function(){t.loading=!1},5e3);let e=await this.$util.request({url:"/v1/reg_username/user/verifyPassword",data:{password:this.password},method:"post"});return e.code=="200"?(this.$util.showToast({title:e.msg,icon:"success",duration:2e3}),this.verifyState=!0,this.bindWhich=="wxmp"?this.qrloginShow=!0:this.getAuthUrl(this.bindWhich)):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1,e},showDialog(t){this.verifyState=!1,this.bindDialog=!0,this.bindWhich=t},qrsuccess(){window.location.reload()},getAuthUrl(t){window.location.href=this.$util.baseDomain()+"/third_login/user/authorization.html?type="+t+"&redirect="+this.getRedirectUrl(t)},getRedirectUrl(t){return this.redirectBase?this.redirectBase=t:window.location.protocol+"//"+window.location.host+"/user/profile/"+t},async handleBind(){this.form.redirect=this.getRedirectUrl(this.form.type),this.loading=!0;let t=this;setTimeout(function(){t.loading=!1},5e3);let e=await this.$util.request({url:"/v1/third_login/user/bind",data:this.form,method:"post"});e.code=="200"?(this.$store.commit("user/setUserInfo",e.data.userInfo),this.$util.showToast({title:e.msg,icon:"success",duration:2e3}),this.isPage?this.$router.push({name:"/my"}):this.$emit("success")):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1},async unBind(t){this.loading=!0;let e=this;setTimeout(function(){e.loading=!1},5e3);let l=await this.$util.request({url:"/v1/third_login/user/unbind",data:{id:this.myBindList[t].id},method:"delete"});l.code=="200"?(this.$util.showToast({title:l.msg,icon:"success",duration:2e3}),this.myBindList=this.myBindList.splice(t,1)):this.$util.showToast({title:l.msg,icon:"loading",duration:3e3}),this.loading=!1},async loadData(){this.loading=!0;let t=this;setTimeout(function(){t.loading=!1},5e3);let e=await this.$util.request({url:"/v1/third_login/user/my",method:"get"});e.code=="200"?(this.myBindList=e.data.dataList,this.loginTypes=e.data.loginTypes):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3}),this.loading=!1}}},s=window.Vue.openBlock,n=window.Vue.createElementBlock,r=window.Vue.createCommentVNode,d=window.Vue.createElementVNode,u=window.Vue.createTextVNode,_=window.Vue.resolveComponent,c=window.Vue.withCtx,g=window.Vue.createBlock,f=window.Vue.createVNode,k=window.Vue.Fragment,B=window.Vue.pushScopeId,T=window.Vue.popScopeId,p=t=>(B("data-v-f8b2ad8a"),t=t(),T(),t),V={class:"bg-white p-a flex space-between"},C={key:0},S={key:0,style:{color:"rgb(18, 150, 219)"},class:"xyicon xyicon-qq ts-30 m-r"},I={key:1,style:{color:"rgb(100, 174, 67)"},class:"xyicon xyicon-weixin ts-30"},z={key:1,class:"flex-1"},D={key:0,class:"flex space-between flex-alignCenter m-b"},L=p(()=>d("i",{class:"xyicon xyicon-qq ts-30 m-r",style:{color:"rgb(18, 150, 219)"}},null,-1)),U=p(()=>d("div",{style:{width:"80px"}},"QQ",-1)),E={key:0,class:"flex-1 text-gray"},N={key:1,class:"flex-1 text-gray"},P=u("\u89E3\u7ED1"),W=u("\u7ED1\u5B9A"),O={key:1,class:"flex space-between flex-alignCenter m-b"},F=p(()=>d("i",{class:"xyicon xyicon-weixin ts-30 m-r",style:{color:"rgb(100, 174, 67)"}},null,-1)),Q=p(()=>d("div",{style:{width:"80px"}},"\u5FAE\u4FE1",-1)),R={key:0,class:"flex-1 text-gray"},A={key:1,class:"flex-1 text-gray"},$=u("\u89E3\u7ED1"),j=u("\u7ED1\u5B9A"),G={class:"actions"},H=u("\u7BA1\u7406"),J={class:"m-b-md"},K=p(()=>d("h4",null,"\u7ED1\u5B9A\u7B2C\u4E09\u65B9\u8D26\u53F7\u524D\u8BF7\u8F93\u5165\u60A8\u7684\u8D26\u53F7\u5BC6\u7801\u4EE5\u5B8C\u6210\u9A8C\u8BC1\uFF1A",-1)),M={class:"flex space-between flex-alignCenter"},X={key:0,class:"ts-12 text-primary"},Y={key:1,slot:"footer",class:"dialog-footer"},Z=u("\u53D6\u6D88"),ee=u("\u7ED1\u5B9A");function te(t,e,l,m,i,o){const h=_("el-button"),y=_("el-input"),w=_("qrlogin"),x=_("el-dialog");return s(),n("div",null,[d("div",V,[i.manage==!1?(s(),n("div",C,[i.loginTypes.indexOf("qq")>=0?(s(),n("i",S)):r("",!0),i.loginTypes.indexOf("wxmp")>=0?(s(),n("i",I)):r("",!0)])):(s(),n("div",z,[i.loginTypes.indexOf("qq")>=0?(s(),n("div",D,[L,U,o.hasBind("qq")?(s(),n("div",E,"\u5DF2\u7ED1\u5B9A")):(s(),n("div",N,"\u672A\u7ED1\u5B9A")),d("div",null,[o.hasBind("qq")?(s(),g(h,{key:0,size:"default",type:"",onClick:e[0]||(e[0]=a=>o.unBind(o.hasBindIndex("qq")))},{default:c(()=>[P]),_:1})):(s(),g(h,{key:1,size:"default",type:"primary",class:"primary-linear",onClick:e[1]||(e[1]=a=>o.showDialog("qq"))},{default:c(()=>[W]),_:1}))])])):r("",!0),i.loginTypes.indexOf("wxmp")>=0?(s(),n("div",O,[F,Q,o.hasBind("wxmp")?(s(),n("div",R,"\u5DF2\u7ED1\u5B9A")):(s(),n("div",A,"\u672A\u7ED1\u5B9A")),d("div",null,[o.hasBind("wxmp")?(s(),g(h,{key:0,size:"default",type:"",onClick:e[2]||(e[2]=a=>o.unBind(o.hasBindIndex("wxmp")))},{default:c(()=>[$]),_:1})):(s(),g(h,{key:1,size:"default",type:"primary",class:"primary-linear",onClick:e[3]||(e[3]=a=>o.showDialog("wxmp"))},{default:c(()=>[j]),_:1}))])])):r("",!0)])),d("div",G,[i.manage?r("",!0):(s(),g(h,{key:0,size:"default",type:"primary",onClick:e[4]||(e[4]=a=>i.manage=!i.manage)},{default:c(()=>[H]),_:1}))])]),f(x,{title:"\u7ED1\u5B9A",visible:i.bindDialog,"onUpdate:visible":e[8]||(e[8]=a=>i.bindDialog=a),width:"440px"},{default:c(()=>[d("div",J,[K,d("div",M,[f(y,{modelValue:i.password,"onUpdate:modelValue":e[5]||(e[5]=a=>i.password=a),size:"small",style:{width:"234px","box-sizing":"border-box"},placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684"+t.$store.state.app.siteInfo.title+"\u8D26\u6237\u5BC6\u7801"},null,8,["modelValue","placeholder"]),i.verifyState?(s(),n("div",X,"\u9A8C\u8BC1\u6210\u529F")):r("",!0)])]),i.bindWhich=="wxmp"?(s(),n(k,{key:0},[i.qrloginShow?(s(),g(w,{key:0,class:"text-center",qrloginShow:i.qrloginShow,tip:"\u8BF7\u4F7F\u7528\u5FAE\u4FE1\u626B\u63CF\u4E8C\u7EF4\u7801\u5B8C\u6210\u7ED1\u5B9A",width:168,bgColor:"#05B9CF",type:"wxmp",cate:1,onSuccess:o.qrsuccess},null,8,["qrloginShow","onSuccess"])):r("",!0)],64)):r("",!0),i.verifyState?r("",!0):(s(),n("span",Y,[f(h,{size:"small",onClick:e[6]||(e[6]=a=>i.bindDialog=!1)},{default:c(()=>[Z]),_:1}),f(h,{size:"small",type:"primary",onClick:e[7]||(e[7]=a=>o.doVerifyPassword())},{default:c(()=>[ee]),_:1})]))]),_:1},8,["visible"])])}var oe=b(q,[["render",te],["__scopeId","data-v-f8b2ad8a"]]);export{oe as default};
