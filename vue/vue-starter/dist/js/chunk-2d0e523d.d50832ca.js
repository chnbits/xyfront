(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e523d"],{"92e3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("xy-header"),n("div",{staticClass:"main"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title text-center"},[t._v(t._s(t.info.title))]),n("div",{domProps:{innerHTML:t._s(t.info.content)}})])]),n("xy-footer")],1)},i=[],r=n("1da1"),s=(n("96cf"),{data:function(){return{id:0,info:{}}},mounted:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route:function(t,e){this.id=this.$route.params.id,this.loadData()}},methods:{loadData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user_agreement/agreement/info",data:{title:t.id},method:"get"});case 2:n=e.sent,200==n.code?t.info=n.data.info:t.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}}),o=s,c=n("2877"),u=Object(c["a"])(o,a,i,!1,null,"15e8765e",null);e["default"]=u.exports}}]);