(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04d1dde9"],{1275:function(t,e,s){},a1f0:function(t,e,s){"use strict";var a=s("1275"),i=s.n(a);i.a},aecd:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("xy-header"),s("div",{staticClass:"main"},[s("div",{staticClass:"container p-t"},[s("div",{staticClass:"sub-header text-center m-t-md m-b-md"},[s("div",{staticClass:"ts-26 tw5 m-b"},[t._v("插件市场")]),s("div",{staticClass:"text-gray ts-24"},[t._v("基于"+t._s(t.$store.state.app.siteInfo.title)+"框架开发的应用和插件！")])]),s("div",{staticClass:"flex space-between ts-16"},[s("div",{}),s("div",{},[s("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.item.pageData.show=!0}}},[t._v(" 发布 ")])],1)]),s("el-row",{staticClass:"case-list flex flex-wrap",attrs:{type:"flex",gutter:15}},t._l(t.dataList,(function(e,a){return s("el-col",{key:a,staticClass:"item",attrs:{xs:24,md:8,lg:6},nativeOn:{click:function(s){return t.navTo(e)}}},[s("div",{staticClass:"image cursor-pointer"},[s("img",{attrs:{src:e.cover,alt:e.title}})]),s("div",{staticClass:"bottom bg-white"},[s("div",{staticClass:"flex space-between"},[s("div",{staticClass:"title ts-14"},[t._v(t._s(e.title))]),e.collecting?s("div",{staticClass:"ts-12 text-error"},[t._v("征集中")]):t._e()]),s("div",{staticClass:"info flex space-between"},[s("div",{staticClass:"ts-12 text-gray"},[s("i",{staticClass:"xyicon xyicon-my-o ts-12"}),t._v(" "+t._s(e.userNickname)+" ")]),"0.00"!=e.price?s("div",{staticClass:"subtitle text-error ts-13"},[t._v("￥"+t._s(e.price))]):s("div",{staticClass:"subtitle text-success ts-13"},[t._v("免费")])])])])})),1)],1)]),s("el-dialog",{staticClass:"ts-16",attrs:{title:"发布插件",visible:t.item.pageData.show,width:"70%"},on:{"update:visible":function(e){return t.$set(t.item.pageData,"show",e)}}},[s("XyBuilderForm",{attrs:{api:"/v1/ext/addon/add",show:t.item.pageData.show,pitem:t.item},on:{close:function(e){return t.closeModel(t.item,e)}}})],1),s("xy-footer")],1)},i=[],n=(s("d3b7"),s("96cf"),s("1da1")),c={components:{},data:function(){return{dataList:[],item:{pageData:{show:!1}}}},beforeCreate:function(){this.$options.components.XyBuilderForm=function(){return Promise.all([s.e("chunk-0c63b111"),s.e("chunk-690001ea")]).then(s.bind(null,"4d99"))}},created:function(){this.loadlists()},methods:{navTo:function(t){this.util.navigateTo({url:"/ext/"+t.id})},closeModel:function(t,e){this.item.pageData.show=!1,e&&this.loadlists()},loadlists:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/ext/addon/lists",data:{},method:"get"});case 2:s=e.sent,200==s.code?t.dataList=s.data.dataList:t.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}},o=c,r=(s("a1f0"),s("2877")),l=Object(r["a"])(o,a,i,!1,null,"e0934c9c",null);e["default"]=l.exports}}]);