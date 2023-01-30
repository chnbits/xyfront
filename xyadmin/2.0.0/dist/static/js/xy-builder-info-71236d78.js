import{_ as e}from"./preload-helper-17f83b6a.js";import{b as t}from"./button-b62f2969.js";import{_ as a}from"./_plugin-vue_export-helper-1b428a4d.js";const l=window.Vue.defineAsyncComponent,i={mixins:[t],name:"XyBuilderInfo",props:{api:"",header:{type:Object,default:()=>({cloudId:0,eid:0})},pitem:{type:Object,default:()=>({})},show:!1,predata:""},data:()=>({ready:!1,loading:!1,infoData:{infoList:""},currentItem:{pageData:{pageType:"modal",modalTye:"",apiBlank:"",show:!1,title:"",predata:""}}}),watch:{show(e){this.infoData={},1==e&&this.loadData()}},components:{XyBuilderList:l((()=>new Promise(((t,a)=>{e((()=>import("./xy-builder-list-c3d8fb25.js").then((e=>e._))),["static/js/xy-builder-list-c3d8fb25.js","static/js/preload-helper-17f83b6a.js","static/js/index-d75135cf.js","static/js/_commonjsHelpers-fb96ccea.js","static/js/button-b62f2969.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/js/util-73084cee.js","static/css/xy-builder-list-020a066e.css"]).then((e=>{t(e)}))})))),XyBuilderStack:l((()=>new Promise(((t,a)=>{e((()=>import("./xy-builder-stack-202ff70f.js").then((e=>e._))),["static/js/xy-builder-stack-202ff70f.js","static/js/preload-helper-17f83b6a.js","static/js/_plugin-vue_export-helper-1b428a4d.js"]).then((e=>{t(e)}))})))),XyBuilderForm:l((()=>new Promise(((t,a)=>{e((()=>import("./xy-builder-form-88a8ffd4.js").then((e=>e.a))),["static/js/xy-builder-form-88a8ffd4.js","static/js/preload-helper-17f83b6a.js","static/js/util-73084cee.js","static/js/index-d75135cf.js","static/js/_commonjsHelpers-fb96ccea.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/css/xy-builder-form-fb0ad44f.css"]).then((e=>{t(e)}))}))))},created(){this.predata?this.processData(this.predata):this.loadData()},methods:{getArrayField(e,t,a="",l=""){if(!e||0==e.length)return t;"string"==typeof e[0].value&&(t+=""),"number"==typeof e[0].value&&(t=parseInt(t));var i=e.findIndex((function(e){return e.value===t}));return""==a?i:e[i]&&e[i].hasOwnProperty(a)&&e[i][a]?e[i][a]:l},processData(e){e.infoList.forEach((e=>{e.data.forEach((e=>{if(e.hasOwnProperty("extra")||(e.extra={}),e.extra.hasOwnProperty("sm")||(e.extra.sm={}),e.extra.options){if("string"==typeof e.extra.options){let t=this.$xyutil.isJson(e.extra.options);!1===t?t=e.extra.options:e.extra.options=t}let t=[];for(let a in e.extra.options){let l=e.extra.options[a];!1===isNaN(a)&&(a=parseInt(a)),"object"==typeof l?(l.hasOwnProperty("value")||(l.value=a),t.push(l)):t.push({title:l,value:a})}e.extra.options=t}else e.extra.options=[]}))})),this.infoData=e,this.ready=!0},async loadData(e=""){var t,a;if(""!=e&&(this.api=e),this.ready=!1,this.loading=!0,this.api){let e=await this.$xyutil.request({url:this.api,method:"get",header:{CloudId:null==(t=this.header)?void 0:t.cloudId,Eid:null==(a=this.header)?void 0:a.eid}});"200"==e.code?(this.processData(e.data.infoData),this.loading=!1):this.$xyutil.showToast({title:e.msg,icon:"loading",duration:3e3})}this.loading=!1}}},o=window.Vue.renderList,r=window.Vue.Fragment,s=window.Vue.openBlock,n=window.Vue.createElementBlock,d=window.Vue.toDisplayString,p=window.Vue.createTextVNode,u=window.Vue.resolveComponent,c=window.Vue.vShow,y=window.Vue.withCtx,m=window.Vue.createVNode,f=window.Vue.withDirectives,h=window.Vue.resolveDynamicComponent,w=window.Vue.createBlock,g=window.Vue.createElementVNode,x=window.Vue.createCommentVNode,v=window.Vue.normalizeClass,_=window.Vue.normalizeStyle,k=window.Vue.resolveDirective;window.Vue.pushScopeId,window.Vue.popScopeId;const D={class:"xy-builder-comp xy-builder-wrap-info"},b={class:"value"},I={class:"suffix"},V={class:"title"},T={class:"list"},A={class:"title text-gray ts-13"},C={class:"value ts-14"},j={key:0},F=["src","width"],L={class:"dialog-pool"},P=["innerHTML"],B={key:2},E=["innerHTML"],O={key:3},S={key:6},X=["href"];const N=a(i,[["render",function(e,t,a,l,i,N){const M=u("xy-title"),R=u("el-col"),H=u("el-row"),$=u("el-link"),z=u("el-table-column"),U=u("el-table"),q=u("el-dialog"),J=u("el-tag"),G=k("loading"),K=k("viewer");return f((s(),n("div",D,[i.infoData.infoList?(s(!0),n(r,{key:0},o(i.infoData.infoList,((l,u)=>(s(),n("div",{class:"item-group",key:u},[f(m(M,{class:"m-t m-b"},{default:y((()=>[p(d(l.title),1)])),_:2},1536),[[c,l.title]]),i.ready?(s(),w(H,{key:0},{default:y((()=>[(s(!0),n(r,null,o(l.data,((l,u)=>(s(),n(r,{key:u},[["list","form","stack"].includes(l.type)?(s(),w(R,{key:0,xs:24,sm:24,class:"info-item block"},{default:y((()=>[g("div",null,[(s(),w(h("XyBuilder"+l.type.charAt(0).toUpperCase()+l.type.slice(1)),{ref_for:!0,ref:"xy_builder_info_"+u,header:a.header,show:!0,api:l.pageData?l.pageData.api:"",predata:l.value?l.value:""},null,8,["header","api","predata"]))])])),_:2},1024)):"count"==l.type?(s(),w(R,{key:1,xs:24,sm:24,class:"info-item block"},{default:y((()=>[l.value?(s(),w(H,{key:0,type:"flex",justify:"start",align:"top",style:{width:"100%"}},{default:y((()=>[(s(!0),n(r,null,o(l.value,((e,t)=>(s(),w(R,{key:t,xs:12,xl:e.item.xl?e.item.xl:6,xxl:4},{default:y((()=>[m(H,{class:"count-item",type:"flex",justify:"center",align:"top",style:_({backgroundColor:e.item.bgColor})},{default:y((()=>[m(R,{class:"left"},{default:y((()=>[g("i",{class:v(["icon",e.item.icon])},null,2),f(g("div",null,d(e.item.title),513),[[c,e.item.title]])])),_:2},1024),m(R,{class:"right",style:_({backgroundColor:e.item.bgColorRight||"#fff",color:e.item.bgColorRight?"#fff":""})},{default:y((()=>[g("div",b,[g("span",null,d(e.current.value),1),g("span",I,d(e.current.suffix),1)]),g("div",V,[f(g("div",{class:"value"},d(e.content.value),513),[[c,e.content.value]]),f(g("div",T,[(s(!0),n(r,null,o(e.content.list,((e,t)=>(s(),n("div",{class:"cell",key:t},d(e.title)+"："+d(e.value),1)))),128))],512),[[c,e.content.list]])])])),_:2},1032,["style"])])),_:2},1032,["style"])])),_:2},1032,["xl"])))),128))])),_:2},1024)):x("",!0)])),_:2},1024)):(s(),w(R,{key:2,xs:24,sm:{span:l.extra.sm.span?l.extra.sm.span:8,offset:l.extra.sm.offset?l.extra.sm.offset:0,pull:l.extra.sm.pull?l.extra.sm.pull:0,push:l.extra.sm.push?l.extra.sm.push:0},class:"info-item"},{default:y((()=>[g("div",A,d(l.title)+"： ",1),g("div",C,["text"==l.type?(s(),n("span",j,d(l.value),1)):"image"==l.type?(s(),n("img",{key:1,src:l.value,width:l.extra.width||"40px"},null,8,F)):"label"==l.type?(s(),n("span",{key:2,style:_({color:N.getArrayField(l.extra.options,l.value,"color","")})},d(N.getArrayField(l.extra.options,l.value,"title",l.value)),5)):x("",!0),"link"==l.type?(s(),n(r,{key:3},[m($,{type:"primary",onClick:t=>e.goPage(l)},{default:y((()=>[p(d(l.value),1)])),_:2},1032,["onClick"]),g("div",L,[m(q,{"vv-el-drag-dialog":"","close-on-click-modal":!1,"append-to-body":!0,modelValue:i.currentItem.pageData.show,"onUpdate:modelValue":t[0]||(t[0]=e=>i.currentItem.pageData.show=e),width:i.currentItem.pageData.width||"900",title:i.currentItem.pageData.title},{default:y((()=>[i.currentItem.pageData.show?(s(),n(r,{key:0},[["list","form"].includes(i.currentItem.pageData.modalType)?(s(),w(h("XyBuilder"+i.currentItem.pageData.modalType.charAt(0).toUpperCase()+i.currentItem.pageData.modalType.slice(1)),{key:0,ref_for:!0,ref:"dialog-pool-list",header:a.header,api:i.currentItem.pageData.apiBlank,show:i.currentItem.pageData.show,pitem:i.currentItem},null,8,["header","api","show","pitem"])):"html"==i.currentItem.pageData.modalType?(s(),n("div",{key:1,innerHTML:i.currentItem.pageData.predata},null,8,P)):"htmls"==i.currentItem.pageData.modalType?(s(),n("div",B,[(s(!0),n(r,null,o(i.currentItem.pageData.predata,((e,t)=>(s(),n("div",{key:t,innerHTML:e},null,8,E)))),128))])):"table"==i.currentItem.pageData.modalType?(s(),n("div",O,[m(U,{data:i.currentItem.pageData.predata.data,border:"",stripe:""},{default:y((()=>[(s(!0),n(r,null,o(i.currentItem.pageData.predata.columns,(e=>(s(),w(z,{prop:e.name,key:e.name,label:e.title,width:e.width},null,8,["prop","label","width"])))),128))])),_:1},8,["data"])])):x("",!0)],64)):x("",!0)])),_:1},8,["modelValue","width","title"])])],64)):"tag"==l.type?(s(),w(J,{key:4,hit:!1,effect:N.getArrayField(l.extra.options,l.value,"effect","light"),type:N.getArrayField(l.extra.options,l.value,"type",""),color:N.getArrayField(l.extra.options,l.value,"color","")},{default:y((()=>[p(d(N.getArrayField(l.extra.options,l.value,"title",l.value)),1)])),_:2},1032,["effect","type","color"])):"tags"==l.type?(s(!0),n(r,{key:5},o(l.value,((e,t)=>(s(),w(J,{key:t,hit:!1,effect:N.getArrayField(l.extra.options,e,"effect","light"),type:N.getArrayField(l.extra.options,e,"type",""),color:N.getArrayField(l.extra.options,e,"color","")},{default:y((()=>[p(d(N.getArrayField(l.extra.options,e,"title",e)),1)])),_:2},1032,["effect","type","color"])))),128)):x("",!0),"time"==l.type?(s(),n("span",S,d(e.$xyutil.timeFormat(l.value)),1)):x("",!0),"url"==l.type?(s(),n("a",{key:7,href:l.value,target:"_blank"},d(l.extra.placeholder),9,X)):x("",!0)])])),_:2},1032,["sm"]))],64)))),128))])),_:2},1024)):x("",!0)])))),128)):x("",!0)])),[[G,i.loading],[K,{movable:!0}]])}],["__scopeId","data-v-6ef9ab55"]]),M=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{N as X,M as _};
