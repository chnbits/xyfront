(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd2d9022"],{"0700":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card",staticStyle:{"min-height":"300px"},attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix ts-18",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("热门")])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"case-list",staticStyle:{"min-height":"300px"},attrs:{"element-loading-text":"拼命加载中"}},t._l(t.dataListHot,(function(e,i){return a("div",{key:i,staticClass:"item p-b-xs border-bottom_1px"},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"title ts-14",on:{click:function(a){return t.util.navigateTo({url:"/ask/"+e.id})}}},[t._v(t._s(e.title))]),a("div",{staticClass:"info flex space-between text-gray ts-12"},[a("div",[t._v(t._s(e.userInfo.nickname))]),a("div",[t._v(t._s(e.viewCount)+"次浏览")])]),a("div",{staticClass:"subtitle text-gray ts-12"},[t._v(t._s(e.subtitle))])])])})),0)])],1)},s=[],n=(a("96cf"),a("1da1")),o={name:"hotAsk",data:function(){return{loading:!1,dataListNew:[],dataListHot:[]}},props:{cateId:0},created:function(){this.loadHot()},watch:{cateId:function(t){this.loadHot()}},methods:{loadHot:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.cateId){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.next=5,t.util.request({url:"/v1/icms/post/lists/"+t.cateId,data:{siteRec:"hot"},method:"get"});case 5:a=e.sent,200==a.code?t.dataListHot=a.data.dataList:t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}},r=o,c=(a("e852"),a("2877")),l=Object(c["a"])(r,i,s,!1,null,"aeed71c0",null);e["a"]=l.exports},c208:function(t,e,a){},d966:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("xy-header"),a("div",{staticClass:"main p-t"},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"flex flex-wrap",attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{xs:24,lg:17}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix tw6 ts-18",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.info.title))])]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"ts-16",staticStyle:{"min-height":"200px"},attrs:{"element-loading-text":"拼命加载中"}},[a("div",{domProps:{innerHTML:t._s(t.info.content)}})]),a("div",{staticClass:"actions m-t flex flex-alignCenter"},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){return t.actionClick(t.id,"icms_post",5)}}},[t._v(" "+t._s(t.info.actionStates[5]?"已关注":"关注问题")+" ")]),a("el-button",{staticClass:"m-r-md",attrs:{type:"primary",size:"medium",plain:""},on:{click:function(e){t.showReplyForm=!0}}},[t._v("我来回答")]),a("div",{on:{click:function(e){return t.actionClick(t.id,"icms_post",2)}}},[a("i",{staticClass:"xyicon xyicon-heart ts-14",staticStyle:{"margin-right":"3px"}}),a("el-link",[t._v(" "+t._s(t.info.actionStates[2]?"已":"")+"收藏 ")])],1)],1)]),a("div",{staticClass:"m-t-sm"},[a("comment-lists",{attrs:{title:"回复",urlPrefix:"/ask",showReplyForm:t.showReplyForm,dataId:t.id,dataModel:"icms_post"},on:{"update:showReplyForm":function(e){t.showReplyForm=e},"update:show-reply-form":function(e){t.showReplyForm=e}}})],1)],1),a("el-col",{attrs:{xs:24,lg:7}},[a("hot-ask",{attrs:{cateId:t.info.cateId}})],1)],1)],1)]),a("xy-footer")],1)},s=[],n=(a("96cf"),a("1da1")),o=a("0700"),r=a("7e25"),c={components:{"comment-lists":r["a"],"hot-ask":o["a"]},data:function(){return{id:0,info:{title:"",content:"",actionStates:{}},showReplyForm:!1,loading:!1,dataListHot:[]}},mounted:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route:function(t,e){this.id=this.$route.params.id,this.loadData()}},methods:{actionClick:function(t,e,a){var i=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,i.util.request({url:"/v1/action/action/set",data:{dataId:t,dataModel:e,actionType:a},method:"post"});case 2:n=s.sent,200==n.code?(i.$set(i.info.actionStates,a,n.data.currentValue),i.util.showToast({title:n.msg,icon:"success",duration:2e3})):i.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return s.stop()}}),s)})))()},loadData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.util.request({url:"/v1/icms/post/info/"+t.id,data:{},method:"get"});case 3:a=e.sent,200==a.code?t.info=a.data.info:t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}}},l=c,d=a("2877"),u=Object(d["a"])(l,i,s,!1,null,"68397ee8",null);e["default"]=u.exports},e852:function(t,e,a){"use strict";var i=a("c208"),s=a.n(i);s.a}}]);