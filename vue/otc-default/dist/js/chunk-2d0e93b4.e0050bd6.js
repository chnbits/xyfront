(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e93b4"],{"8d3e":function(t,e,a){"use strict";a.r(e),a("96cf");var o=a("1da1"),s={data:function(){return{tab:"ing",dataList:[],dataList2:[]}},created:function(){this.loadData()},methods:{handleClick:function(){switch(this.tab){case"ing":this.loadData("0,1,2,-2");break;case"done":this.loadData("-1,3")}},loadData:function(){var t=arguments,e=this;return Object(o.a)(regeneratorRuntime.mark((function a(){var o,s;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=0<t.length&&void 0!==t[0]?t[0]:"0,1,2,-2",a.next=3,e.util.request({url:"/v1/coin_otc/order/my",data:{state:o},method:"get"});case 3:200==(s=a.sent).code?"0,1,2,-2"==o?e.dataList=s.data.dataList:"-1,3"==o&&(e.dataList2=s.data.dataList):e.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 5:case"end":return a.stop()}}),a)})))()}}},l=a("2877"),n=Object(l.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("xy-header"),a("div",{staticClass:"main"},[a("xy-subnav",{attrs:{title:"我的订单"}}),a("div",{staticClass:"container p-t"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("el-tab-pane",{attrs:{label:"进行中",name:"ing"}},[a("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:t.dataList}},[a("el-table-column",{attrs:{prop:"id",label:"编号/时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.id))]),a("div",{staticClass:"font-sm"},[t._v(t._s(t._f("formatTime")(e.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.type,expression:"scope.row.type == 1"}],staticStyle:{color:"#09C69D"}},[t._v("购买")]),a("span",{directives:[{name:"show",rawName:"v-show",value:2==e.row.type,expression:"scope.row.type == 2"}],staticStyle:{color:"#FF4C4C"}},[t._v("出售")])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.coinInfo.symbol))])]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"price"},[t._v(t._s(e.row.price))]),a("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),a("el-table-column",{attrs:{prop:"amount",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.amount))])]}}])}),a("el-table-column",{attrs:{prop:"totalPrice",label:"总额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.totalPrice)+" CNY")])]}}])}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"#F8A059"}},[t._v(t._s(e.row.stateFormat.title))])]}}])}),a("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.adId?a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){return t.util.navigateTo({url:"/otc/order/"+e.row.id})}}},[t._v("查看")]):t._e()]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"已完成",name:"done"}},[a("el-table",{staticClass:"m-t-xs",staticStyle:{width:"100%"},attrs:{data:t.dataList2}},[a("el-table-column",{attrs:{prop:"id",label:"编号/时间",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(t._s(e.row.id))]),a("div",{staticClass:"font-sm"},[t._v(t._s(t._f("formatTime")(e.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"类型",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{directives:[{name:"show",rawName:"v-show",value:1==e.row.type,expression:"scope.row.type == 1"}],staticStyle:{color:"#09C69D"}},[t._v("购买")]),a("span",{directives:[{name:"show",rawName:"v-show",value:2==e.row.type,expression:"scope.row.type == 2"}],staticStyle:{color:"#FF4C4C"}},[t._v("出售")])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"币种",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.coinInfo.symbol))])]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"price"},[t._v(t._s(e.row.price))]),a("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),a("el-table-column",{attrs:{prop:"amount",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.amount))])]}}])}),a("el-table-column",{attrs:{prop:"totalPrice",label:"总额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.totalPrice)+" CNY")])]}}])}),a("el-table-column",{attrs:{prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"color:rgba(0,0,0,0.3)"}},[t._v(t._s(e.row.stateFormat.title))])]}}])}),a("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.adId?a("el-button",{attrs:{size:"small",type:"info"},on:{click:function(a){return t.util.navigateTo({url:"/otc/order/"+e.row.id})}}},[t._v("查看")]):t._e()]}}])})],1)],1)],1)],1)],1),a("xy-footer")],1)}),[],!1,null,"aa7cd670",null);e.default=n.exports}}]);