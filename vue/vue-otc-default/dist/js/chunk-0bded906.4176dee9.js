(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0bded906","chunk-2d2176a6"],{"5d93":function(t,e,a){"use strict";a.r(e),a("c740"),a("4160"),a("d3b7"),a("159b"),a("96cf");var i=a("1da1"),s=a("53ca"),r={components:{"xy-title":a("6df9").a},name:"XyBuilderInfo",props:{api:"",header:{type:Object,default:function(){return{cloudId:0,eid:0}}},pitem:{type:Object,default:function(){return{}}},show:!1,predata:""},data:function(){return{ready:!1,loading:!1,infoData:{infoList:""}}},watch:{show:function(t){this.infoData={},1==t&&this.loadData()}},beforeCreate:function(){this.$options.components.XyBuilderList=function(){return a.e("chunk-0fc07ee0").then(a.bind(null,"114b"))},this.$options.components.XyBuilderStack=function(){return a.e("chunk-2d0bacca").then(a.bind(null,"396d"))}},created:function(){this.predata?this.processData(this.predata):this.loadData()},methods:{getArrayField:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!t||0==t.length)return e;"string"==typeof t[0].value&&(e+=""),"number"==typeof t[0].value&&(e=parseInt(e));var s=t.findIndex((function(t){return t.value===e}));return""==a?s:t[s]&&t[s].hasOwnProperty(a)&&t[s][a]?t[s][a]:i},processData:function(t){var e=this;t.infoList.forEach((function(t){t.data.forEach((function(t){if(t.hasOwnProperty("extra")||(t.extra={}),t.extra.hasOwnProperty("sm")||(t.extra.sm={}),t.extra.options){if("string"==typeof t.extra.options){var a=e.util.isJson(t.extra.options);!1===a?a=t.extra.options:t.extra.options=a}var i=[];for(var r in t.extra.options){var n=t.extra.options[r];!1===isNaN(r)&&(r=parseInt(r)),"object"==Object(s.a)(n)?(n.hasOwnProperty("value")||(n.value=r),i.push(n)):i.push({title:n,value:r})}t.extra.options=i}else t.extra.options=[]}))})),this.infoData=t,this.ready=!0},loadData:function(){var t=arguments,e=this;return Object(i.a)(regeneratorRuntime.mark((function a(){var i,s,r,n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!=(i=t.length>0&&void 0!==t[0]?t[0]:"")&&(e.api=i),e.ready=!1,e.loading=!0,!e.api){a.next=9;break}return a.next=7,e.util.request({url:e.api,method:"get",header:{CloudId:null===(s=e.header)||void 0===s?void 0:s.cloudId,Eid:null===(r=e.header)||void 0===r?void 0:r.eid}});case 7:"200"==(n=a.sent).code?(e.processData(n.data.infoData),e.loading=!1):e.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 9:e.loading=!1;case 10:case"end":return a.stop()}}),a)})))()}}},n=(a("80ce"),a("2877")),o=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"},{name:"viewer",rawName:"v-viewer",value:{movable:!0},expression:"{movable: true}"}],staticClass:"xy-builder-comp xy-builder-wrap-info"},[t.infoData.infoList?t._l(t.infoData.infoList,(function(e,i){return a("div",{key:i,staticClass:"item-group"},[a("xy-title",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"group.title"}],staticClass:"m-b-sm m-t"},[t._v(t._s(e.title))]),t.ready?a("el-row",t._l(e.data,(function(e,i){return a("div",{key:i},["list"==e.type?a("el-col",{staticClass:"info-item block",attrs:{xs:24,sm:24}},[a("div",[a("XyBuilderList",{ref:"xy_builder_info_"+i,refInFor:!0,attrs:{header:t.header,show:!0,api:e.pageData?e.pageData.api:"",predata:e.value?e.value:""}})],1)]):"stack"==e.type?a("el-col",{staticClass:"info-item block",attrs:{xs:24,sm:24}},[a("div",[a("XyBuilderStack",{ref:"xy_builder_stack_"+i,refInFor:!0,attrs:{header:t.header,show:!0,api:e.pageData?e.pageData.api:"",predata:e.value?e.value:""}})],1)]):"count"==e.type?a("el-col",{staticClass:"info-item block",attrs:{xs:24,sm:24}},[e.value?a("el-row",{staticStyle:{width:"100%"},attrs:{type:"flex",justify:"start",align:"top"}},t._l(e.value,(function(e,i){return a("el-col",{key:i,attrs:{xs:12,xl:e.item.xl?e.item.xl:6,xxl:4}},[a("el-row",{staticClass:"count-item",style:{backgroundColor:e.item.bgColor},attrs:{type:"flex",justify:"center",align:"top"}},[a("el-col",{staticClass:"left"},[a("i",{staticClass:"icon",class:e.item.icon}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.item.title,expression:"it.item.title"}]},[t._v(t._s(e.item.title))])]),a("el-col",{staticClass:"right",style:{backgroundColor:e.item.bgColorRight||"#fff",color:e.item.bgColorRight?"#fff":""}},[a("div",{staticClass:"value"},[a("span",[t._v(t._s(e.current.value))]),a("span",{staticClass:"suffix"},[t._v(t._s(e.current.suffix))])]),a("div",{staticClass:"title"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.content.value,expression:"it.content.value"}],staticClass:"value"},[t._v(t._s(e.content.value))]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.content.list,expression:"it.content.list"}],staticClass:"list"},t._l(e.content.list,(function(e,i){return a("div",{key:i,staticClass:"cell"},[t._v(" "+t._s(e.title)+"："+t._s(e.value)+" ")])})),0)])])],1)],1)})),1):t._e()],1):a("el-col",{staticClass:"info-item",attrs:{xs:24,sm:{span:e.extra.sm.span?e.extra.sm.span:8,offset:e.extra.sm.offset?e.extra.sm.offset:0,pull:e.extra.sm.pull?e.extra.sm.pull:0,push:e.extra.sm.push?e.extra.sm.push:0}}},[a("div",{staticClass:"title text-gray ts-13"},[t._v(" "+t._s(e.title)+"： ")]),a("div",{staticClass:"value ts-14"},["text"==e.type?[a("span",[t._v(t._s(e.value))])]:"image"==e.type?[a("img",{attrs:{src:e.value,width:e.extra.width||"40px"}})]:"label"==e.type?[a("span",{style:{color:t.getArrayField(e.extra.options,e.value,"color","")}},[t._v(" "+t._s(t.getArrayField(e.extra.options,e.value,"title",e.value))+" ")])]:"tag"==e.type?[a("el-tag",{attrs:{hit:!1,effect:t.getArrayField(e.extra.options,e.value,"effect","light"),type:t.getArrayField(e.extra.options,e.value,"type",""),color:t.getArrayField(e.extra.options,e.value,"color","")}},[t._v(" "+t._s(t.getArrayField(e.extra.options,e.value,"title",e.value))+" ")])]:"tags"==e.type?[t._l(e.value,(function(i,s){return[a("el-tag",{key:s,attrs:{hit:!1,effect:t.getArrayField(e.extra.options,i,"effect","light"),type:t.getArrayField(e.extra.options,i,"type",""),color:t.getArrayField(e.extra.options,i,"color","")}},[t._v(" "+t._s(t.getArrayField(e.extra.options,i,"title",i))+" ")])]}))]:t._e(),"time"==e.type?[a("span",[t._v(t._s(e.value))])]:t._e(),"url"==e.type?[a("a",{attrs:{href:e.value,target:"_blank"}},[t._v(t._s(e.extra.placeholder))])]:t._e()],2)])],1)})),0):t._e()],1)})):t._e()],2)}),[],!1,null,"a718f6a8",null);e.default=o.exports},"80ce":function(t,e,a){"use strict";var i=a("98d6");a.n(i).a},"98d6":function(t,e,a){},c740:function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").findIndex,r=a("44d2"),n=!0,o=a("ae40")("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){n=!1})),i({target:"Array",proto:!0,forced:n||!o},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("findIndex")}}]);