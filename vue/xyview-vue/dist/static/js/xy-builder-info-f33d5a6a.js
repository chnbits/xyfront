import{_ as e,b as t}from"../../index.js";import{b as a}from"./button-3b836efa.js";import"./index-e8ee17d1.js";const l=window.Vue.defineAsyncComponent,i={mixins:[a],name:"XyBuilderInfo",props:{api:"",header:{type:Object,default:()=>({cloudId:0,eid:0})},pitem:{type:Object,default:()=>({})},show:!1,predata:""},data:()=>({ready:!1,loading:!1,infoData:{infoList:""},currentItem:{pageData:{pageType:"modal",modalTye:"",apiBlank:"",show:!1,title:"",predata:""}}}),watch:{show(e){this.infoData={},1==e&&this.loadData()}},components:{XyBuilderList:l((()=>new Promise(((e,a)=>{t((()=>import("./xy-builder-list-04dd1086.js")),["static/js/xy-builder-list-04dd1086.js","index.js","static/css/index-fdd28e6e.css","static/js/index-e8ee17d1.js","static/js/button-3b836efa.js","static/css/xy-builder-list-350580b8.css"]).then((t=>{e(t)}))})))),XyBuilderStack:l((()=>new Promise(((e,a)=>{t((()=>import("./xy-builder-stack-965f4ee8.js")),["static/js/xy-builder-stack-965f4ee8.js","index.js","static/css/index-fdd28e6e.css"]).then((t=>{e(t)}))})))),XyBuilderForm:l((()=>new Promise(((e,a)=>{t((()=>import("./xy-builder-form-5305ae0b.js")),["static/js/xy-builder-form-5305ae0b.js","index.js","static/css/index-fdd28e6e.css","static/js/index-e8ee17d1.js","static/css/xy-builder-form-99c53591.css"]).then((t=>{e(t)}))}))))},created(){this.predata?this.processData(this.predata):this.loadData()},methods:{getArrayField(e,t,a="",l=""){if(!e||0==e.length)return t;"string"==typeof e[0].value&&(t+=""),"number"==typeof e[0].value&&(t=parseInt(t));var i=e.findIndex((function(e){return e.value===t}));return""==a?i:e[i]&&e[i].hasOwnProperty(a)&&e[i][a]?e[i][a]:l},processData(e){e.infoList.forEach((e=>{e.data.forEach((e=>{if(e.hasOwnProperty("extra")||(e.extra={}),e.extra.hasOwnProperty("sm")||(e.extra.sm={}),e.extra.options){if("string"==typeof e.extra.options){let t=this.$xyutil.isJson(e.extra.options);!1===t?t=e.extra.options:e.extra.options=t}let t=[];for(let a in e.extra.options){let l=e.extra.options[a];!1===isNaN(a)&&(a=parseInt(a)),"object"==typeof l?(l.hasOwnProperty("value")||(l.value=a),t.push(l)):t.push({title:l,value:a})}e.extra.options=t}else e.extra.options=[]}))})),this.infoData=e,this.ready=!0},loadData(e=""){return t=this,a=null,l=function*(){var t,a;if(""!=e&&(this.api=e),this.ready=!1,this.loading=!0,this.api){let e=yield this.$xyutil.request({url:this.api,method:"get",header:{CloudId:null==(t=this.header)?void 0:t.cloudId,Eid:null==(a=this.header)?void 0:a.eid}});"200"==e.code?(this.processData(e.data.infoData),this.loading=!1):this.$xyutil.showToast({title:e.msg,icon:"loading",duration:3e3})}this.loading=!1},new Promise(((e,i)=>{var r=e=>{try{s(l.next(e))}catch(t){i(t)}},o=e=>{try{s(l.throw(e))}catch(t){i(t)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,o);s((l=l.apply(t,a)).next())}));var t,a,l}}},r=window.Vue.renderList,o=window.Vue.Fragment,s=window.Vue.openBlock,n=window.Vue.createElementBlock,d=window.Vue.toDisplayString,p=window.Vue.createTextVNode,u=window.Vue.resolveComponent,c=window.Vue.vShow,m=window.Vue.withCtx,y=window.Vue.createVNode,f=window.Vue.withDirectives,h=window.Vue.createElementVNode,w=window.Vue.createBlock,g=window.Vue.createCommentVNode,v=window.Vue.normalizeClass,x=window.Vue.normalizeStyle,k=window.Vue.resolveDirective;window.Vue.pushScopeId,window.Vue.popScopeId;const _={class:"xy-builder-comp xy-builder-wrap-info"},D={class:"value"},b={class:"suffix"},I={class:"title"},V={class:"list"},T={class:"title text-gray ts-13"},A={class:"value ts-14"},F={key:0},L=["src","width"],B={class:"dialog-pool"},C=["innerHTML"],P={key:3},j=["innerHTML"],E={key:4},O={key:6},S=["href"];const X=e(i,[["render",function(e,t,a,l,i,X){const N=u("xy-title"),R=u("XyBuilderList"),H=u("el-col"),M=u("XyBuilderForm"),$=u("XyBuilderStack"),z=u("el-row"),q=u("el-link"),J=u("el-table-column"),U=u("el-table"),G=u("el-dialog"),K=u("el-tag"),Q=k("loading"),W=k("viewer");return f((s(),n("div",_,[i.infoData.infoList?(s(!0),n(o,{key:0},r(i.infoData.infoList,((l,u)=>(s(),n("div",{class:"item-group",key:u},[f(y(N,{class:"m-b-sm m-t"},{default:m((()=>[p(d(l.title),1)])),_:2},1536),[[c,l.title]]),i.ready?(s(),w(z,{key:0},{default:m((()=>[(s(!0),n(o,null,r(l.data,((l,u)=>(s(),n(o,{key:u},["list"==l.type?(s(),w(H,{key:0,xs:24,sm:24,class:"info-item block"},{default:m((()=>[h("div",null,[y(R,{ref_for:!0,ref:"xy_builder_info_"+u,header:a.header,show:!0,api:l.pageData?l.pageData.api:"",predata:l.value?l.value:""},null,8,["header","api","predata"])])])),_:2},1024)):"form"==l.type?(s(),w(H,{key:1,xs:24,sm:24,class:"info-item block"},{default:m((()=>[h("div",null,[y(M,{ref_for:!0,ref:"xy_builder_form_"+u,header:a.header,show:!0,api:l.pageData?l.pageData.api:"",predata:l.value?l.value:""},null,8,["header","api","predata"])])])),_:2},1024)):"stack"==l.type?(s(),w(H,{key:2,xs:24,sm:24,class:"info-item block"},{default:m((()=>[h("div",null,[y($,{ref_for:!0,ref:"xy_builder_stack_"+u,header:a.header,show:!0,api:l.pageData?l.pageData.api:"",predata:l.value?l.value:""},null,8,["header","api","predata"])])])),_:2},1024)):"count"==l.type?(s(),w(H,{key:3,xs:24,sm:24,class:"info-item block"},{default:m((()=>[l.value?(s(),w(z,{key:0,type:"flex",justify:"start",align:"top",style:{width:"100%"}},{default:m((()=>[(s(!0),n(o,null,r(l.value,((e,t)=>(s(),w(H,{key:t,xs:12,xl:e.item.xl?e.item.xl:6,xxl:4},{default:m((()=>[y(z,{class:"count-item",type:"flex",justify:"center",align:"top",style:x({backgroundColor:e.item.bgColor})},{default:m((()=>[y(H,{class:"left"},{default:m((()=>[h("i",{class:v(["icon",e.item.icon])},null,2),f(h("div",null,d(e.item.title),513),[[c,e.item.title]])])),_:2},1024),y(H,{class:"right",style:x({backgroundColor:e.item.bgColorRight||"#fff",color:e.item.bgColorRight?"#fff":""})},{default:m((()=>[h("div",D,[h("span",null,d(e.current.value),1),h("span",b,d(e.current.suffix),1)]),h("div",I,[f(h("div",{class:"value"},d(e.content.value),513),[[c,e.content.value]]),f(h("div",V,[(s(!0),n(o,null,r(e.content.list,((e,t)=>(s(),n("div",{class:"cell",key:t},d(e.title)+"："+d(e.value),1)))),128))],512),[[c,e.content.list]])])])),_:2},1032,["style"])])),_:2},1032,["style"])])),_:2},1032,["xl"])))),128))])),_:2},1024)):g("",!0)])),_:2},1024)):(s(),w(H,{key:4,xs:24,sm:{span:l.extra.sm.span?l.extra.sm.span:8,offset:l.extra.sm.offset?l.extra.sm.offset:0,pull:l.extra.sm.pull?l.extra.sm.pull:0,push:l.extra.sm.push?l.extra.sm.push:0},class:"info-item"},{default:m((()=>[h("div",T,d(l.title)+"： ",1),h("div",A,["text"==l.type?(s(),n("span",F,d(l.value),1)):"image"==l.type?(s(),n("img",{key:1,src:l.value,width:l.extra.width||"40px"},null,8,L)):"label"==l.type?(s(),n("span",{key:2,style:x({color:X.getArrayField(l.extra.options,l.value,"color","")})},d(X.getArrayField(l.extra.options,l.value,"title",l.value)),5)):g("",!0),"link"==l.type?(s(),n(o,{key:3},[y(q,{type:"primary",onClick:t=>e.goPage(l)},{default:m((()=>[p(d(l.value),1)])),_:2},1032,["onClick"]),h("div",B,[y(G,{"vv-el-drag-dialog":"","close-on-click-modal":!1,"append-to-body":!0,modelValue:i.currentItem.pageData.show,"onUpdate:modelValue":t[0]||(t[0]=e=>i.currentItem.pageData.show=e),width:i.currentItem.pageData.width||"900",title:i.currentItem.pageData.title},{default:m((()=>[i.currentItem.pageData.show?(s(),n(o,{key:0},["list"==i.currentItem.pageData.modalType?(s(),w(R,{key:0,ref_for:!0,ref:"dialog-pool-list",header:a.header,api:i.currentItem.pageData.apiBlank,show:i.currentItem.pageData.show,pitem:i.currentItem},null,8,["header","api","show","pitem"])):"form"==i.currentItem.pageData.modalType?(s(),w(M,{key:1,ref_for:!0,ref:"dialog-pool-form",header:a.header,api:i.currentItem.pageData.apiBlank,show:i.currentItem.pageData.show,pitem:i.currentItem,showDev:e.showDev},null,8,["header","api","show","pitem","showDev"])):"html"==i.currentItem.pageData.modalType?(s(),n("div",{key:2,innerHTML:i.currentItem.pageData.predata},null,8,C)):"htmls"==i.currentItem.pageData.modalType?(s(),n("div",P,[(s(!0),n(o,null,r(i.currentItem.pageData.predata,((e,t)=>(s(),n("div",{key:t,innerHTML:e},null,8,j)))),128))])):"table"==i.currentItem.pageData.modalType?(s(),n("div",E,[y(U,{data:i.currentItem.pageData.predata.data,border:"",stripe:""},{default:m((()=>[(s(!0),n(o,null,r(i.currentItem.pageData.predata.columns,(e=>(s(),w(J,{prop:e.name,key:e.name,label:e.title,width:e.width},null,8,["prop","label","width"])))),128))])),_:1},8,["data"])])):g("",!0)],64)):g("",!0)])),_:1},8,["modelValue","width","title"])])],64)):"tag"==l.type?(s(),w(K,{key:4,hit:!1,effect:X.getArrayField(l.extra.options,l.value,"effect","light"),type:X.getArrayField(l.extra.options,l.value,"type",""),color:X.getArrayField(l.extra.options,l.value,"color","")},{default:m((()=>[p(d(X.getArrayField(l.extra.options,l.value,"title",l.value)),1)])),_:2},1032,["effect","type","color"])):"tags"==l.type?(s(!0),n(o,{key:5},r(l.value,((e,t)=>(s(),w(K,{key:t,hit:!1,effect:X.getArrayField(l.extra.options,e,"effect","light"),type:X.getArrayField(l.extra.options,e,"type",""),color:X.getArrayField(l.extra.options,e,"color","")},{default:m((()=>[p(d(X.getArrayField(l.extra.options,e,"title",e)),1)])),_:2},1032,["effect","type","color"])))),128)):g("",!0),"time"==l.type?(s(),n("span",O,d(e.$xyutil.timeFormat(l.value)),1)):g("",!0),"url"==l.type?(s(),n("a",{key:7,href:l.value,target:"_blank"},d(l.extra.placeholder),9,S)):g("",!0)])])),_:2},1032,["sm"]))],64)))),128))])),_:2},1024)):g("",!0)])))),128)):g("",!0)])),[[Q,i.loading],[W,{movable:!0}]])}],["__scopeId","data-v-8bc41966"]]);export{X as default};
