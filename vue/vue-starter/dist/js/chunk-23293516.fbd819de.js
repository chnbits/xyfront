(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23293516"],{"1dc0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outerBox"},[i("div",{staticClass:"backOperation"},[i("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.back(-1)}}},[t._v(" 返回上一级 "),i("span",{staticStyle:{display:"inline-block","margin-left":"5px"}},[t._v(">>")])]),i("span"),i("p",[t._v("消息 > 消息详情")])]),i("div",{staticClass:"box text-center bg-white"},[t._m(0),i("div",{staticClass:"inner p-t-sm"},[i("div",{staticClass:"ts-30 tw5 m-b-lg"},[t._v(" "+t._s(t.info.title)+" ")]),i("div",{staticClass:"content pos-r"},[t._v(" "+t._s(t.info.content)+" "),t._m(1)])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content text-left ts-14 lh-1 text-primary "},[i("div",{staticClass:"bg-primary inline-block m-t m-l-sm",staticStyle:{"margin-bottom":"-2px",width:"14px",height:"14px"}}),t._v(" 公告 ")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pos-a",staticStyle:{left:"10px",top:"0"}},[i("i",{staticClass:"xyicon xyicon-notify1  ts-22 text-primary"})])}],s=i("1da1"),r=(i("96cf"),{name:"MsgDetail",components:{},data:function(){return{loading:!1,id:0,info:{}}},created:function(){this.id=this.$route.query.id,this.loadData()},methods:{loadData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.util.request({url:"/v1/msg/msg/info/"+t.id,method:"get"});case 3:i=e.sent,200==i.code?t.info=i.data.info:t.util.showToast({title:i.msg,icon:"loading",duration:3e3}),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}}}),c=r,o=(i("6594"),i("2877")),l=Object(o["a"])(c,n,a,!1,null,"3d0aa7ba",null);e["default"]=l.exports},6594:function(t,e,i){"use strict";i("e171")},e171:function(t,e,i){}}]);