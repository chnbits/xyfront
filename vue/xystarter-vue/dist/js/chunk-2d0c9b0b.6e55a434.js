(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0c9b0b"],{"59e6":function(t,e,a){"use strict";a.r(e),a("96cf");var n=a("1da1"),i={data:function(){return{id:0,info:{}}},mounted:function(){this.id=this.$route.params.id,this.loadData()},watch:{$route:function(){this.id=this.$route.params.id,this.loadData()}},methods:{loadData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/icms/post/info/"+t.id,data:{},method:"get"});case 2:200==(a=e.sent).code?t.info=a.data.info:t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}},s=a("2877"),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("xy-header"),a("div",{staticClass:"main p-t"},[a("div",{staticClass:"container"},[a("el-card",{attrs:{shadow:"none"}},[a("h1",{staticClass:"title text-center"},[t._v(t._s(t.info.title))]),a("div",{domProps:{innerHTML:t._s(t.info.content)}})])],1)]),a("xy-footer")],1)}),[],!1,null,"69aa95ae",null);e.default=o.exports}}]);