import{_ as D}from"../index-726dc959.js";const I={name:"chooseCertType",data(){return{loading:!1,qrDialog:!1,allowTypes:[3],info:{},apiType:0,url:"",timer:null,options:{type:"file",drag:!0,driver:this.$store.state.app.uploadDriver,signUrl:"",icon:"",placeholder:"",action:"",format:"mp4",maxSize:1024*50},certVideo:[],verifyData:""}},created(){this.loadData()},watch:{apiType(t){switch(clearInterval(this.timer),t){case 1:this.getFaceidQr();break;case 2:this.getFaceidQr();break;case 3:this.getFaceidQr();break;case 4:this.$message("\u8BF7\u6309\u8981\u6C42\u5F55\u5236\u89C6\u9891\u5E76\u4E0A\u4F20");break}}},beforeUnmount(){clearInterval(this.timer)},methods:{async next(){switch(this.apiType){case 1:this.$util.showToast({title:"\u8BF7\u626B\u7801\u5B8C\u6210\u8BA4\u8BC1",icon:"loading",duration:3e3});break;case 2:this.$util.showToast({title:"\u8BF7\u626B\u7801\u5B8C\u6210\u8BA4\u8BC1",icon:"loading",duration:3e3});break;case 3:this.getFaceidQr();break;case 4:this.getFaceidQr();break}},setApiType(t){this.url="",clearInterval(this.timer),this.apiType=t},async getFaceidQr(){this.loading=!0;let t=await this.$util.request({url:"/v1/user_cert/faceid/create/"+this.info.id,data:{apiType:this.apiType,certVideo:this.certVideo},method:"get"});this.loading=!1,t.code==200?this.apiType==3||this.apiType==4?this.$router.push("/user_cert/cert/index"):(this.url=t.data.url,this.qrDialog=!0,this.timer=setInterval(this.getState,2e3)):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3})},async getState(){let t=await this.$util.request({url:"/v1/user_cert/faceid/info/"+this.info.id,data:{},method:"get"});t.code==200?t.data.info.level==3&&t.data.info.reviewState==1&&(window.location.href="/user_cert/cert/index"):console.log(t)},async loadData(){this.loading=!0;let t=await this.$util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});this.loading=!1,t.code==200?this.info=t.data.info:this.$util.showToast({title:t.msg,icon:"loading",duration:3e3})}}},l=window.Vue.createTextVNode,c=window.Vue.resolveComponent,o=window.Vue.withCtx,n=window.Vue.createVNode,e=window.Vue.createElementVNode,_=window.Vue.toDisplayString,y=window.Vue.normalizeClass,d=window.Vue.openBlock,m=window.Vue.createElementBlock,h=window.Vue.createCommentVNode,f=window.Vue.createBlock,N=window.Vue.resolveDirective,q=window.Vue.withDirectives,S=window.Vue.pushScopeId,z=window.Vue.popScopeId,r=t=>(S("data-v-10e0ba50"),t=t(),z(),t),A={class:"bg-white p-t p-b"},E=l("\u4E2A\u4EBA\u8BBE\u7F6E"),F=l("\u4E2A\u4EBA\u4FE1\u606F\u586B\u5199"),B=l("\u9009\u62E9\u8BA4\u8BC1\u65B9\u5F0F"),Q={class:"content p-a-md m-t-lg"},U=r(()=>e("h3",{class:"m-b-md ts-22 text-center"},"\u9009\u62E9\u8BA4\u8BC1\u65B9\u5F0F",-1)),j={class:"m-b-lg text-666 text-left flex space-center"},G={class:"lh-1-6 ts-14",style:{"max-width":"500px"}},H={class:"type-list p-t-lg p-b-lg"},J=r(()=>e("div",{class:"flex-1"},[e("h4",{class:"m-b"},[l("\u5FAE\u4FE1\u626B\u7801"),e("span",null,"(\u5373\u65F6\u5B8C\u6210)")]),e("div",{class:"text-666 ts-13 lh-1-6"},[e("p",null,"\u8BF7\u4F7F\u7528\u672C\u4EBA\u5FAE\u4FE1\u626B\u7801"),e("p",null,"\u9700\u8981\u5DF2\u7ECF\u7ED1\u5B9A\u94F6\u884C\u5361\u7684\u5FAE\u4FE1\u8D26\u53F7\u626B\u7801"),e("p",null,"\u5B8C\u6210\u6388\u6743\u64CD\u4F5C\u540E\uFF0C\u5B9E\u540D\u5C06\u7ACB\u5373\u6210\u529F\u3002")])],-1)),K=l("\u7ACB\u5373\u8BA4\u8BC1"),L=r(()=>e("div",{class:"flex-1"},[e("h4",{class:"m-b"},[l("\u652F\u4ED8\u5B9D\u626B\u7801"),e("span",null,"(\u5373\u65F6\u5B8C\u6210)")]),e("div",{class:"text-666 ts-13 lh-1-6"},[e("p",null,"\u8BF7\u4F7F\u7528\u672C\u4EBA\u652F\u4ED8\u5B9D\u626B\u7801"),e("p",null,"\u9700\u8981\u5DF2\u7ECF\u7ED1\u5B9A\u94F6\u884C\u5361\u7684\u652F\u4ED8\u5B9D\u8D26\u53F7\u626B\u7801"),e("p",null,"\u5B8C\u6210\u6388\u6743\u64CD\u4F5C\u540E\uFF0C\u5B9E\u540D\u5C06\u7ACB\u5373\u6210\u529F\u3002")])],-1)),M=l("\u7ACB\u5373\u8BA4\u8BC1"),O=r(()=>e("div",{class:"flex-1"},[e("h4",{class:"m-b"},[l("\u4EBA\u5DE5\u5BA1\u6838"),e("span",null,"(\u7EA63\u4E2A\u5DE5\u4F5C\u65E5\u5185\u5B8C\u6210)")]),e("div",{class:"text-666 ts-13 lh-1-6"},[e("p",null,"\u4EBA\u5DE5\u5BA1\u6838\u5BA2\u670D\u53EF\u80FD\u4F1A\u901A\u8FC7\u7ED1\u5B9A\u7684\u624B\u673A\u53F7\u6216\u8005\u90AE\u7BB1\u8054\u7CFB\u60A8"),e("p",null,"\u8BF7\u6CE8\u610F\u4F55\u65F6\u5BA2\u670D\u8EAB\u4EFD\uFF0C\u786E\u4FDD\u4E0D\u8981\u4FE1\u606F\u6CC4\u9732\u3002")])],-1)),P=l("\u4E0B\u4E00\u6B65"),R={class:"flex-1"},W=r(()=>e("h4",{class:"m-b"},[l("\u4EBA\u5DE5\u89C6\u9891\u5BA1\u6838"),e("span",null,"(\u7EA63\u4E2A\u5DE5\u4F5C\u65E5\u5185\u5B8C\u6210)")],-1)),X={class:"text-666 ts-13 lh-1-6"},Y=r(()=>e("p",null,"\u901A\u8BF7\u624B\u6301\u672C\u4EBA\u8EAB\u4EFD\u8BC1\u5F55\u4E00\u6BB5\u89C6\u9891\uFF0C\u8FDB\u884C\u4E0A\u4F20\u63D0\u4EA4\u4EBA\u5DE5\u5BA1\u6838\u3002",-1)),Z=r(()=>e("p",null,"\u4EBA\u5DE5\u89C6\u9891\u5BA1\u6838\u9700\u8981\u89C6\u9891\u6E05\u6670\u53EF\u89C1\uFF0C\u65E0\u4EFB\u4F55\u906E\u6321\u9762\u90E8\u3002",-1)),$=l("\u8BF7\u70B9\u51FB\u8FD9\u91CC\u67E5\u770B\u6717\u8BFB\u5185\u5BB9 "),ee=r(()=>e("i",{class:"xyicon xyicon-help-o ts-14 cursor-pointer"},null,-1)),te=l("\u7ACB\u5373\u8BA4\u8BC1"),se=r(()=>e("i",{class:"xyicon xyicon-plus",style:{"font-size":"48px",color:"#E1E1E1","margin-top":"18px","margin-bottom":"20px"}},null,-1)),ie=r(()=>e("span",{class:"ts-12",style:{color:"7A7D83"}},"\u4E0A\u4F20\u8BA4\u8BC1\u89C6\u9891",-1)),oe={class:"m-t"},le=l(" \u4E0B\u4E00\u6B65 "),ne={slot:"footer"},ae=l("\u5173\u95ED");function re(t,i,ce,de,s,p){const v=c("el-breadcrumb-item"),w=c("el-breadcrumb"),u=c("el-button"),g=c("el-popover"),b=c("xy-upload"),x=c("el-col"),k=c("el-row"),T=c("xy-qrcode"),V=c("el-dialog"),C=N("loading");return d(),m("div",A,[n(w,{"separator-class":"el-icon-arrow-right",class:"p-l m-b"},{default:o(()=>[n(v,{to:{path:"/user/center"}},{default:o(()=>[E]),_:1}),n(v,{class:"cursor-pointer",onClick:i[0]||(i[0]=a=>t.$router.back(-1))},{default:o(()=>[F]),_:1}),n(v,null,{default:o(()=>[B]),_:1})]),_:1}),e("div",Q,[U,e("div",j,[e("p",G," \u5373\u5C06\u5B9E\u540D\u8EAB\u4EFD(\u59D3\u540D\uFF1A"+_(s.info.realName)+" \u8EAB\u4EFD\u8BC1\u53F7\uFF1A"+_(s.info.certNo)+") ",1)]),q((d(),f(k,{type:"flex",justify:"center",align:"middle"},{default:o(()=>[n(x,{xs:22,sm:18,md:14,lg:18,class:"login-box bg-white"},{default:o(()=>[e("div",H,[s.allowTypes.includes(1)?(d(),m("div",{key:0,class:y(["flex space-between m-b-md",s.apiType==1?"active":""])},[J,n(u,{type:"primary",size:"default",plain:"",onClick:i[1]||(i[1]=a=>p.setApiType(1)),class:"cursor-pointer"},{default:o(()=>[K]),_:1})],2)):h("",!0),s.allowTypes.includes(2)?(d(),m("div",{key:1,class:y(["flex space-between m-b-md",s.apiType==2?"active":""])},[L,n(u,{type:"primary",size:"default",plain:"",onClick:i[2]||(i[2]=a=>p.setApiType(2)),class:"cursor-pointer"},{default:o(()=>[M]),_:1})],2)):h("",!0),s.allowTypes.includes(3)?(d(),m("div",{key:2,class:y(["flex space-between m-b-md",s.apiType==3?"active":""])},[O,n(u,{type:"primary",size:"default",plain:"",onClick:i[3]||(i[3]=a=>p.setApiType(3)),class:"cursor-pointer"},{default:o(()=>[P]),_:1})],2)):h("",!0),s.allowTypes.includes(4)&&s.info.apiFailCount>=4?(d(),m("div",{key:3,class:y(["flex space-between m-b-md",s.apiType==4?"active":""]),onClick:i[6]||(i[6]=a=>p.setApiType(4))},[e("div",R,[W,e("div",X,[Y,Z,e("p",null,[$,n(g,{placement:"top-start",title:"\u6717\u8BFB\u5185\u5BB9",width:"260",trigger:"hover"},{reference:o(()=>[ee]),default:o(()=>[e("div",null," \u6211\u662F"+_(s.info.realName)+",\u8EAB\u4EFD\u8BC1\u53F7\u662F"+_(s.info.certNo)+",\u7279\u6B64\u8BC1\u660E\uFF0C \u6211\u6240\u7533\u8BF7\u7684"+_(t.$store.state.app.siteInfo.title)+"\u5B98\u7F51\u8D26\u53F7\u4EBA\u5DE5\u89C6\u9891\u5BA1\u6838\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u5747\u4E3A\u6211\u771F\u5B9E\u5F00\u8BBE\uFF0C\u6211\u6240\u63D0\u4EA4\u7684\u4FE1\u606F\u8D44\u6599\u3001 \u89C6\u9891\u5747\u4E3A\u6211\u672C\u4EBA\u81EA\u613F\u771F\u5B9E\u63D0\u4EA4\uFF0C\u6211\u4E2A\u4EBA\u4E1A\u52A1\u4E2D\u6240\u4F7F\u7528\u7684\u76F8\u5173\u4EA7\u54C1\u5747\u7B26\u5408\u6CD5\u5F8B\u6CD5\u5F8B\u4EE5\u53CA"+_(t.$store.state.app.siteInfo.title)+"\u7684\u76F8\u5173\u89C4\u5B9A\u3002 ",1)]),_:1})])])]),e("div",null,[s.apiType!=4?(d(),f(u,{key:0,type:"primary",size:"default",plain:"",onClick:i[4]||(i[4]=a=>p.setApiType(4)),class:"cursor-pointer"},{default:o(()=>[te]),_:1})):(d(),f(b,{key:1,style:{width:"auto !important"},options:s.options,header:{},modelValue:s.certVideo,"onUpdate:modelValue":i[5]||(i[5]=a=>s.certVideo=a)},{drag:o(()=>[se,ie]),_:1},8,["options","modelValue"]))])],2)):h("",!0)]),e("div",oe,[s.apiType==4?(d(),f(u,{key:0,class:"full submit-btn m-b-lg",size:"large",loading:s.loading,type:"primary",onClick:i[7]||(i[7]=a=>p.next())},{default:o(()=>[le]),_:1},8,["loading"])):h("",!0)])]),_:1})]),_:1})),[[C,s.loading]])]),n(V,{title:"\u626B\u7801\u8BA4\u8BC1",visible:s.qrDialog,"onUpdate:visible":i[9]||(i[9]=a=>s.qrDialog=a),width:"600px"},{default:o(()=>[n(T,{class:"qrcode",style:{opacity:1},value:s.url,options:{width:260}},null,8,["value"]),e("span",ne,[n(u,{type:"primary",onClick:i[8]||(i[8]=a=>{s.qrDialog=!1})},{default:o(()=>[ae]),_:1})])]),_:1},8,["visible"])])}var ue=D(I,[["render",re],["__scopeId","data-v-10e0ba50"]]);export{ue as default};
