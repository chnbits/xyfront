(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b8bd394"],{"2b66":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xy-builder-comp xy-builder-wrap-col"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"col-box"},[n("el-row",{attrs:{gutter:25}},[n("el-col",{staticClass:"left m-b-md",attrs:{xs:24,sm:24,md:6,lg:4}},[n("el-tree",{attrs:{data:e.colData.dataList,"node-key":"id","default-expand-all":"","highlight-current":"",draggable:"","expand-on-click-node":!0},on:{"node-contextmenu":e.handleContextmenu,"node-drop":e.handleDrop},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,i=t.data;return n("div",{staticClass:"custom-tree-node flex flex-1 flex-alignCenter"},[n("div",{staticClass:"flex-1 ts-14 tw5 flex flex-alignCenter",on:{click:function(t){return e.editPre(a,i)}}},[e._v(" "+e._s(i.title)+" ")]),n("div",{staticClass:"actions ts-13",staticStyle:{display:"none"}},[n("el-link",{staticClass:"m-r-xs",attrs:{type:"text"},on:{click:function(){return e.append(a,i)}}},[e._v(" 添加子项 ")]),n("el-link",{attrs:{type:"danger"},on:{click:function(){return e.remove(a,i)}}},[e._v(" 删除 ")])],1)])}}])}),n("el-button",{staticClass:"full",attrs:{type:"text"},on:{click:function(){return e.append()}}},[e._v(" 添加 ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}],staticClass:"menu",attrs:{id:"contextmenu"}},[n("div",{staticClass:"contextmenu__item",on:{click:function(){return e.append(e.cnode,e.cdata)}}},[e._v("添加子项")]),n("div",{staticClass:"contextmenu__item",on:{click:function(){return e.remove(e.cnode,e.cdata)}}},[e._v("删除")])])],1),n("el-col",{staticClass:"right",attrs:{xs:24,sm:24,md:18,lg:20}},[n("XyBuilderForm",{ref:"rightForm",attrs:{api:e.currentEditApi,show:!0,header:e.header},on:{close:function(t){return e.closeModel(t)}}})],1)],1)],1)])},i=[],r=n("5530"),o=n("b85c"),c=n("1da1"),s=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("b0c0"),n("c740"),n("a434"),n("4328")),u=n.n(s),d=n("6bd4"),l={components:{"xy-title":d["a"]},name:"XyBuilderCol",props:{api:"",header:{type:Object,default:function(){return{cloudId:0,eid:0}}},pitem:{type:Object,default:function(){return{}}},show:!1,predata:""},data:function(){return{id:0,ready:!1,loading:!1,menuVisible:!1,cnode:null,cdata:null,colData:{dataList:[]},currentEditApi:""}},watch:{show:function(e){this.stackData={},1==e&&this.loadData()}},beforeCreate:function(){this.$options.components.XyBuilderList=function(){return Promise.resolve().then(n.bind(null,"eb13"))},this.$options.components.XyBuilderForm=function(){return Promise.resolve().then(n.bind(null,"866e"))},this.$options.components.XyBuilderInfo=function(){return n.e("chunk-8937d4e6").then(n.bind(null,"961e"))},this.$options.components.XyBuilderTab=function(){return n.e("chunk-2d2217f5").then(n.bind(null,"cb33"))}},created:function(){this.predata?this.readyProcess(this.predata):this.loadData()},methods:{closeModel:function(){},handleContextmenu:function(e,t,n,a){this.cnode=n,this.cdata=t,this.menuVisible=!1,this.menuVisible=!0,event.preventDefault();var i=document.querySelector(".menu");this.styleMenu(i)},foo:function(){this.menuVisible=!1,document.removeEventListener("click",this.foo)},styleMenu:function(e){event.clientX>1800?e.style.left=event.clientX-100+"px":e.style.left=event.clientX-200+"px",document.addEventListener("click",this.foo),event.clientY>700?e.style.top=event.clientY-300+"px":e.style.top=event.clientY-150+"px"},handleDrop:function(e,t,n,a){var i=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,o,c,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i.colData.rightButtonList.forEach((function(e){"edit"==e.name&&(r=e)})),o="",c=0,a.t0=n,a.next="inner"===a.t0?8:"before"===a.t0?10:"after"===a.t0?13:16;break;case 8:return o=t.data.uniqeId,a.abrupt("break",16);case 10:return o=t.data.puniqeId,c=t.data.sortnum-1,a.abrupt("break",16);case 13:return o=t.data.puniqeId,c=t.data.sortnum+1,a.abrupt("break",16);case 16:return a.next=18,i.util.request({url:r.pageData.api+"/"+e.data.id,method:"put",data:{puniqeId:o,sortnum:c},header:{CloudId:i.header.cloudId,Eid:i.header.eid}});case 18:s=a.sent,"200"==s.code?i.util.showToast({title:s.msg,icon:"success",duration:1e3}):i.util.showToast({title:s.msg,icon:"error",duration:3e3});case 20:case"end":return a.stop()}}),a)})))()},editPre:function(e,t){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.$refs.rightForm.getCount()>1?n.$confirm("您有修改内容未保存，确认离开当前页面吗？","提示",{confirmButtonText:"确认离开",cancelButtonText:"留在页面",confirmButtonClass:"el-button--danger",closeOnClickModal:!1,type:"error"}).then(Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.edit(e,t);case 1:case"end":return a.stop()}}),a)})))).catch((function(){})):n.edit(e,t);case 1:case"end":return a.stop()}}),a)})))()},edit:function(e,t){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.$refs.rightForm.getCount(),n.cnode=null,n.cdata=null,n.menuVisible=!1,a=n,n.colData.rightButtonList.forEach((function(e){if("edit"==e.name){var n=e,i="",r=new Object;if(n.pageData.apiSuffix){var c,s=n.pageData.apiSuffix,d=Object(o["a"])(s);try{for(d.s();!(c=d.n()).done;){var l=c.value;i=i+"/"+t[l]}}catch(v){d.e(v)}finally{d.f()}}else i="/"+t.id;if(n.pageData.querySuffix){var p,f=n.pageData.querySuffix,h=Object(o["a"])(f);try{for(h.s();!(p=h.n()).done;){var m=p.value;1==m[2]?r[m[0]]=m[1]:r[m[0]]=t[m[1]]}}catch(v){h.e(v)}finally{h.f()}}if(""!=u.a.stringify(r)?a.currentEditApi=n.pageData.api+i+"?"+u.a.stringify(r):a.currentEditApi=n.pageData.api+i,!a.currentEditApi)return!1}}));case 6:case"end":return e.stop()}}),e)})))()},append:function(e,t){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t||(t={},t.bookId=n.id,t.puniqeId="",t.title="根节点"),i="",n.colData.rightButtonList.forEach((function(e){"addChild"==e.name&&(i=e.pageData.api)})),i){a.next=6;break}return a.abrupt("return",!1);case 6:n.$prompt("请输入标题","创建“"+t.title+"”的子项",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){var a=Object(c["a"])(regeneratorRuntime.mark((function a(r){var o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=r.value,a.next=3,n.util.request({url:i,method:"post",data:{bookId:t.bookId,puniqeId:t.uniqeId,title:o},header:{CloudId:n.header.cloudId,Eid:n.header.eid}});case 3:c=a.sent,"200"==c.code?(n.util.showToast({title:c.msg,icon:"success",duration:1e3}),t.children||n.$set(t,"children",[]),e?t.children.push(c.data.info):colData.dataList.push(c.data.info)):n.util.showToast({title:c.msg,icon:"error",duration:3e3});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(){n.$message({type:"info",message:"取消输入"})}));case 7:case"end":return a.stop()}}),a)})))()},remove:function(e,t){var n=this,a=this,i="";if(this.colData.rightButtonList.forEach((function(e){"delete"==e.name&&(i=e)})),!i.pageData.api)return!1;var r="",s=new Object;if(i.pageData.apiSuffix){var d,l=i.pageData.apiSuffix,p=Object(o["a"])(l);try{for(p.s();!(d=p.n()).done;){var f=d.value;r=r+"/"+t[f]}}catch(b){p.e(b)}finally{p.f()}}else r="/"+t.id;if(i.pageData.querySuffix){var h,m=i.pageData.querySuffix,v=Object(o["a"])(m);try{for(v.s();!(h=v.n()).done;){var g=h.value;1==g[2]?s[g[0]]=g[1]:s[g[0]]=t[g[1]]}}catch(b){v.e(b)}finally{v.f()}}this.$confirm(i.pageData.content,i.pageData.title,{confirmButtonText:i.pageData.okText,cancelButtonText:i.pageData.cancelText,dangerouslyUseHTMLString:!0,closeOnClickModal:!1,type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function o(){var c,d,l,p,f,h;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return c=i.pageData.api+r,""!=u.a.stringify(s)&&(c=c+"?"+u.a.stringify(s)),o.next=4,a.util.request({url:c,method:i.pageData.formMethod,header:a.header});case 4:d=o.sent,"200"==d.code?(l=e.parent,p=l.data.children||l.data,f=p.findIndex((function(e){return e.id===t.id})),p.splice(f,1),a.util.showToast({title:d.msg,icon:"success",duration:1e3}),n.$store.state.app.uiAudio&&(h=new Audio,h.src="https://cdn.jsdelivr.net/gh/starideas/xyfront/audio/delete.mp3",h.play())):a.util.showToast({title:d.msg,icon:"loading",duration:3e3});case 6:case"end":return o.stop()}}),o)})))).catch((function(){if(n.$store.state.app.uiAudio){var e=new Audio;e.src=Object({NODE_ENV:"production",VUE_APP_BASE_DOMAIN:"https://jiangruyi.com",VUE_APP_I18N_FALLBACK_LOCALE:"zh",VUE_APP_I18N_LOCALE:"zh",VUE_APP_IS_DEMO:"false",BASE_URL:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/vue-app-deliver/dist/"}).VUE_APP_AUDIO_CLOSE,e.play()}}))},readyProcess:function(e){var t=this.util.builderutil.readyList({listData:e},this.$store.state.app.apiInfo);this.colData=Object(r["a"])({},t.listData),this.ready=!0},loadData:function(){var e=arguments,t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,i,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]?e[0]:"",""!=a&&(t.api=a),t.loading=!0,!t.api){n.next=8;break}return n.next=6,t.util.request({url:t.api,method:"get",header:{CloudId:null===(i=t.header)||void 0===i?void 0:i.cloudId,Eid:null===(r=t.header)||void 0===r?void 0:r.eid}});case 6:o=n.sent,"200"==o.code?(t.readyProcess(o.data.listData),t.id=o.data.id,t.loading=!1):t.util.showToast({title:o.msg,icon:"loading",duration:3e3});case 8:t.loading=!1;case 9:case"end":return n.stop()}}),n)})))()}}},p=l,f=(n("cab4"),n("2877")),h=Object(f["a"])(p,a,i,!1,null,"3677dcec",null);t["default"]=h.exports},"6caa":function(e,t,n){},cab4:function(e,t,n){"use strict";n("6caa")}}]);