(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7320d63c"],{"22ce":function(t,e,a){"use strict";a("3889")},3889:function(t,e,a){},"4f43":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-wrap"},[a("el-container",[a("el-header",[a("xy-header",{attrs:{transparent:!1}})],1),a("el-container",{staticStyle:{height:"calc( 100vh - 68px )",border:"1px solid #eee"}},[a("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"auto"}},[a("el-menu",{attrs:{collapse:t.isCollapse,"default-active":t.defaultActive,router:"","default-openeds":["0","1","2"]}},[a("el-submenu",{attrs:{index:"0"}},[a("template",{slot:"title"},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("用户")])]),a("el-menu-item",{class:"/user/center"==t.$route.path?"active":"",attrs:{index:"/user/center"}},[a("i",{staticClass:"el-icon-user"}),t._v("个人中心"),a("i",{staticClass:"active-img"})])],2)],1)],1),a("el-main",[a("router-view")],1)],1)],1)],1)},n=[],s=a("1da1"),r=(a("96cf"),{data:function(){return{isCollapse:!1,defaultActive:"",keyword:""}},created:function(){this.util.isLogin(!1,!0)},watch:{defaultActive:function(t){}},methods:{toggleNav:function(){this.isCollapse=!this.isCollapse},loadData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/api",data:{},method:"get"});case 2:a=e.sent,200==a.code||t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}}),l=r,c=(a("22ce"),a("2877")),o=Object(c["a"])(l,i,n,!1,null,null,null);e["default"]=o.exports}}]);