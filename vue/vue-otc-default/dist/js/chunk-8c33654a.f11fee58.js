(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8c33654a","chunk-2d0bacca"],{"31c2":function(t,a,e){},"396d":function(t,a,e){"use strict";e.r(a),e("d3b7"),e("96cf");var n=e("1da1"),i={components:{"xy-title":e("6df9").a},name:"XyBuilderStack",props:{api:"",header:{type:Object,default:function(){return{cloudId:0,eid:0}}},show:!1,predata:""},data:function(){return{loading:!1,stackData:{stackList:""}}},watch:{show:function(t){this.stackData={},1==t&&this.loadData()}},beforeCreate:function(){this.$options.components.XyBuilderList=function(){return e.e("chunk-90bcbb08").then(e.bind(null,"114b"))},this.$options.components.XyBuilderForm=function(){return Promise.resolve().then(e.bind(null,"4d99"))},this.$options.components.XyBuilderInfo=function(){return e.e("chunk-f2675b64").then(e.bind(null,"5d93"))},this.$options.components.XyBuilderTab=function(){return e.e("chunk-2d0b32fa").then(e.bind(null,"26ff"))}},created:function(){this.predata?this.stackData=this.predata:this.loadData()},beforeMount:function(){},mounted:function(){},activated:function(){},deativated:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},methods:{loadData:function(){var t=arguments,a=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n,i,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(n=0<t.length&&void 0!==t[0]?t[0]:"")&&(a.api=n),a.loading=!0,a.api)return e.next=6,a.util.request({url:a.api,method:"get",header:{CloudId:null===(i=a.header)||void 0===i?void 0:i.cloudId,Eid:null===(r=a.header)||void 0===r?void 0:r.eid}});e.next=8;break;case 6:"200"==(o=e.sent).code?(a.stackData=o.data.stackData,a.loading=!1):a.util.showToast({title:o.msg,icon:"loading",duration:3e3});case 8:a.loading=!1;case 9:case"end":return e.stop()}}),e)})))()}}},r=e("2877"),o=Object(r.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"xy-builder-comp xy-builder-wrap-stack"},t._l(t.stackData.stackList,(function(a,n){return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],key:n,staticClass:"stack-list"},[e("xy-title",{directives:[{name:"show",rawName:"v-show",value:a.title,expression:"stack.title"}],staticClass:"m-b-sm"},[t._v(t._s(a.title))]),e("el-row",[e("el-col",{staticClass:"stack-item block",attrs:{xs:24,sm:24}},["tab"==a.pageData.modalType?[e("XyBuilderTab",{ref:"xy_builder_tab_"+n,refInFor:!0,attrs:{header:t.header,show:!0,predata:a.predata}})]:["list"==a.pageData.modalType?e("div",[e("XyBuilderList",{ref:"xy_builder_stack_"+n,refInFor:!0,attrs:{header:t.header,api:a.pageData.apiBlank,show:a.pageData.show,predata:a.predata}})],1):"form"==a.pageData.modalType?e("div",[e("XyBuilderForm",{ref:"xy_builder_stack_"+n,refInFor:!0,attrs:{header:t.header,api:a.pageData.apiBlank,show:a.pageData.show,predata:a.predata}})],1):"info"==a.pageData.modalType?e("div",[e("XyBuilderInfo",{ref:"xy_builder_stack_"+n,refInFor:!0,attrs:{header:t.header,api:a.pageData.apiBlank,show:a.pageData.show,predata:a.predata}})],1):t._e()]],2)],1)],1)})),0)}),[],!1,null,"55159c7d",null);a.default=o.exports},"6df9":function(t,a,e){"use strict";var n={name:"xyTitle",props:{},data:function(){return{}},created:function(){},methods:{}},i=(e("9b6b"),e("2877")),r=Object(i.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"xt-title flex"},[a("div",{staticClass:"prefix"}),this._t("default")],2)}),[],!1,null,"c55a24b8",null);a.a=r.exports},"9b6b":function(t,a,e){"use strict";var n=e("31c2");e.n(n).a}}]);