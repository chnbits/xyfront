(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aa6f42c"],{"9c4b":function(t,a,e){},a747:function(t,a,e){"use strict";e("9c4b")},bafe:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"top-box"},[t._v(" 储存详情 ")]),t._m(0),t._m(1),e("el-table",{ref:"logTable",attrs:{data:t.storgeLog,"highlight-current-row":""}},[e("el-table-column",{attrs:{align:"center",prop:"createTime",label:"上传时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(t._f("formatTime")(a.row.createTime))+" ")]}}])}),e("el-table-column",{attrs:{prop:"uid",label:"操作者ID",align:"center"}}),e("el-table-column",{attrs:{prop:"size",label:"上传文件大小",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.size)+" MB ")]}}])}),e("el-table-column",{attrs:{prop:"size",label:"抵扣空间量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.size)+" MB ")]}}])}),e("el-table-column",{attrs:{prop:"ip",label:"上传IP",align:"center"}}),e("el-table-column",{attrs:{prop:"size",label:"剩余总空间量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.storgeLeftSum)+" GB ")]}}])})],1),e("div",{staticClass:"flex flex-end"},[e("div",{staticClass:"pagination m-t m-b m-r"},[e("el-pagination",{attrs:{"current-page":t.dataPage.page,background:"","page-sizes":[10,20,30,40],"page-size":t.dataPage.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.dataPage.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("div",{staticClass:"content count-list flex flex-wrap"},[e("div",{staticClass:"count-item border"},[e("div",{staticClass:"label"},[t._v(" 当前免费空间总量剩余 "),e("i",{staticClass:"xyicon xyicon-warning text-primary ts-14"})]),e("div",{staticClass:"value"},[t._v(" 7G/10G ")])]),e("div",{staticClass:"count-item border"},[e("div",{staticClass:"label"},[t._v(" 收费空间包总量剩余 ")]),e("div",{staticClass:"value"},[t._v(" 7G/10G ")])]),e("div",{staticClass:"count-item"},[e("div",{staticClass:"label"},[t._v(" 储存总量 ")]),e("div",{staticClass:"value"},[t._v(" 14G ")])]),e("div",{staticClass:"count-item border"},[e("div",{staticClass:"label"},[t._v(" iOS应用储存数 ")]),e("div",{staticClass:"value"},[t._v(" 8个 ")])]),e("div",{staticClass:"count-item"},[e("div",{staticClass:"label"},[t._v(" Android应用储存数 ")]),e("div",{staticClass:"value"},[t._v(" 10个 ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title flex space-between flex-alignCenter m-t-sm m-b-sm ts-16"},[e("div",{staticClass:"text-left lh-1"},[t._v(" 储存日志 ")]),e("div",{staticClass:"text-primary"},[e("i",{staticClass:"xyicon xyicon-download1 m-r-xs"}),t._v(" 导出 ")])])}],l=e("1da1"),n=(e("96cf"),{data:function(){return{loading:!1,storgeLog:[],dataPage:{total:0,page:1,limit:10}}},created:function(){},watch:{},methods:{loadData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.util.request({url:"/v1/appdist/storge/log",data:{},method:"get"});case 2:e=a.sent,200==e.code?(t.storgeLog=e.data.dataList,t.dataPage=e.data.dataPage):t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()},tableRowClassName:function(t){t.row,t.rowIndex},handleSizeChange:function(t){this.dataPage.limit=t,this.loadData()},handleCurrentChange:function(t){this.dataPage.page=t,this.loadData()}}}),r=n,c=(e("a747"),e("2877")),o=Object(c["a"])(r,s,i,!1,null,"0721ceba",null);a["default"]=o.exports}}]);