(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-667dc5b8"],{5327:function(t,s,e){},aecd:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main"},[e("div",{staticClass:"container p-t"},[e("div",{staticClass:"sub-header text-center m-t-md m-b-md"},[e("div",{staticClass:"ts-26 tw5 m-b"},[t._v("插件市场")]),e("div",{staticClass:"text-gray"},[t._v("基于"+t._s(t.$store.state.app.siteInfo.title)+"框架开发的应用和插件！")])]),e("el-row",{staticClass:"case-list flex flex-wrap",attrs:{type:"flex",gutter:15}},t._l(t.dataList,(function(s,a){return e("el-col",{key:a,staticClass:"item",attrs:{xs:24,md:8,lg:6}},[e("div",[e("img",{attrs:{src:s.cover,alt:s.title}})]),e("div",{staticClass:"bottom bg-white"},[e("div",{staticClass:"flex space-between"},[e("div",{staticClass:"title ts-14"},[t._v(t._s(s.title))]),e("div",{staticClass:"ts-12 text-error"},[t._v("征集中")])]),e("div",{staticClass:"info flex space-between"},[e("div",{staticClass:"ts-12 text-gray"},[e("i",{staticClass:"xyicon xyicon-my-o ts-12"}),t._v(" "+t._s(s.userNickname)+" ")]),"0.00"!=s.price?e("div",{staticClass:"subtitle text-error ts-13"},[t._v("￥"+t._s(s.price))]):e("div",{staticClass:"subtitle text-success ts-13"},[t._v("免费")])])])])})),1)],1)]),e("xy-footer")],1)},i=[],c=(e("96cf"),e("1da1")),r={components:{},data:function(){return{dataList:[]}},created:function(){this.loadlists()},methods:{loadlists:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){var e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.util.request({url:"/v1/ext/addon/lists",data:{},method:"get"});case 2:e=s.sent,200==e.code?t.dataList=e.data.dataList:t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return s.stop()}}),s)})))()}}},n=r,l=(e("c6f6"),e("2877")),o=Object(l["a"])(n,a,i,!1,null,"1ed019cc",null);s["default"]=o.exports},c6f6:function(t,s,e){"use strict";var a=e("5327"),i=e.n(a);i.a}}]);