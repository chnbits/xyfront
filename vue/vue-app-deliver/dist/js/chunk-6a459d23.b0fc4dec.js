(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a459d23"],{"4da2":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loadedScript?a("qrcode",{attrs:{value:t.value,options:t.options}}):t._e()},i=[],n=a("1da1"),r=(a("96cf"),a("b0c0"),a("d3b7"),{name:"xyQrcode",props:{value:{type:[String],default:""},options:{type:Object,default:function(){return{width:118,margin:1}}}},data:function(){return{loadedScript:!1}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadScript();case 2:Vue.component(VueQrcode.name,VueQrcode),this.loadedScript=!0;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{loadScript:function(){var t=this;return new Promise((function(e,a){t.VueScript2.load("https://cdn.jsdelivr.net/gh/fengyuanchen/vue-qrcode/dist/vue-qrcode.min.js").then((function(){e()}))}))}}}),l=r,c=a("2877"),o=Object(c["a"])(l,s,i,!1,null,"2e03b137",null);e["a"]=o.exports},"6e7f":function(t,e,a){"use strict";a("bbb0")},bbb0:function(t,e,a){},f53b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-inner"},[a("el-row",{staticClass:"flex",attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,md:24,lg:16,xl:17}},[a("div",{staticClass:"app-list-wrap"},[a("div",{staticClass:"list-title"},[t._v(" 全部应用 ")]),a("div",{staticClass:"list-search flex space-between items-end"},[a("div",{staticClass:"flex-1 flex"},[a("el-input",{staticClass:"search-input b-r-0",attrs:{"suffix-icon":"el-icon-search",placeholder:"搜索您的应用名..."},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.loadData}},[t._v("搜索")])],1),a("div",{staticClass:"right"})]),a("div",{staticClass:"app-list"},t._l(t.appList,(function(e,s){return a("div",{key:s,staticClass:"app-item"},[a("div",{staticClass:"body"},[a("div",{staticClass:"top flex space-between"},[a("div",[a("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""}},[t._v(" "+t._s(e.version)+" ")])],1),a("div",[a("span",{staticClass:"action"},[a("span",{staticClass:"xyicon xyicon-trash"}),a("el-popconfirm",{staticClass:"m-l-sm",attrs:{"confirm-button-text":"确定删除","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定删除这个webclip吗？"},on:{confirm:function(a){return t.deleteOne(e.id)}}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("删除")])])],1)])]),a("div",{staticClass:"content flex space-between flex-alignCenter"},[a("div",{staticClass:"logo-box flex flex-alignCenter"},[a("div",{staticClass:"m-r-md"},[a("el-avatar",{attrs:{shape:"square",size:72,src:t.$store.state.user.userInfo.avatar}})],1),a("div",[a("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"platform"},[t._v(" iOS ")])])]),a("div",{staticClass:"downinfo flex-1"},[a("div",{staticClass:"item"},[a("span",{staticClass:"m-r-lg"},[t._v(" 当前应用今日下载总次数: ")]),a("i",{},[t._v(t._s(e.todayDownCount?e.todayDownCount:0))])]),a("div",{staticClass:"item"},[a("span",{staticClass:"m-r-md"},[t._v("下载地址:")]),a("span",{staticClass:"m-r-md"},[t._v("lefany.com/webclip/"+t._s(e.key))]),a("el-popover",{attrs:{placement:"top-start",title:"扫码下载",width:"120px",trigger:"hover"}},[a("div",{staticClass:"flex flex-alignCenter flex-center",staticStyle:{width:"120px",height:"120px",background:"#05B9CF"}},[a("xy-qrcode",{staticClass:"qrcode",style:{opacity:1},attrs:{value:t.util.baseDomain()+"/webclip/"+e.key,options:{width:100}}})],1),a("span",{staticClass:"cursor-pointer xyicon xyicon-qrcode",attrs:{slot:"reference"},slot:"reference"})])],1)]),a("div",{staticClass:"right"},[a("router-link",{attrs:{to:"/appdist/webclip/info/"+e.id}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("i",{staticClass:"xyicon xyicon-eye"}),t._v(" 详情 ")])],1),a("router-link",{attrs:{to:"/appdist/webclip/edit/"+e.id}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("i",{staticClass:"xyicon xyicon-edit"}),t._v(" 编辑 ")])],1)],1)])]),a("div",{staticClass:"footer flex"},[a("span",{staticClass:"item flex flex-alignCenter"},[a("span",{staticClass:"label"},[t._v("创建时间:")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("formatTime")(e.createTime)))])]),a("span",{staticClass:"item flex flex-alignCenter"},[a("span",{staticClass:"label"},[t._v("更新时间:")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("formatTime")(e.updateTime)))])])])])})),0)])]),a("el-col",{attrs:{xs:24,md:24,lg:9,xl:7}})],1)],1)},i=[],n=a("1da1"),r=(a("96cf"),a("4da2")),l={components:{"xy-qrcode":r["a"]},data:function(){return{keyword:"",appList:[]}},created:function(){this.loadData()},watch:{},methods:{loadData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/appdist/webclip/my",data:{keyword:t.keyword},method:"get"});case 2:a=e.sent,200==a.code?t.appList=a.data.dataList:t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},deleteOne:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.util.request({url:"/v1/appdist/webclip/delete/"+t,method:"delete"});case 2:s=a.sent,200==s.code?(e.loadlists(val),e.util.showToast({title:s.msg,icon:"loading",duration:2e3})):e.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()}}},c=l,o=(a("6e7f"),a("2877")),d=Object(o["a"])(c,s,i,!1,null,"5f180e53",null);e["default"]=d.exports}}]);