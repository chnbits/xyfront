(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c9b0b"],{"59e6":function(t,n,e){"use strict";e.r(n),e("96cf");var a=e("1da1"),i={data:function(){return{id:0,info:{}}},mounted:function(){},watch:{id:function(t){alert(t),this.loadData()}},methods:{loadData:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.util.request({url:"/v1/icms/post/info/"+t.id,data:{},method:"get"});case 2:200==(e=n.sent).code?t.info=e.data.info:t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return n.stop()}}),n)})))()}}},o=e("2877"),r=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main"},[e("div",{staticClass:"container"},[e("div",{domProps:{innerHTML:t._s(t.info.content)}})])]),e("xy-footer")],1)}),[],!1,null,"7b8e2550",null);n.default=r.exports}}]);