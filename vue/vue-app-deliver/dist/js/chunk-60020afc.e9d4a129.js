(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60020afc"],{"13c5":function(e,t,a){},5897:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"top-box1"}),a("div",{staticClass:"box bg-white"},[a("div",{staticClass:"content"},[a("el-tabs",{attrs:{value:"renew"},on:{"tab-click":e.handleClick}},[a("el-tab-pane",{attrs:{label:"我的订单",name:"my"}}),a("el-tab-pane",{attrs:{label:"续费管理",name:"renew"}})],1),a("el-form",{staticClass:"filters",attrs:{model:e.filters,size:"small",inline:!0,"label-suffix":":"}},[a("el-form-item",{attrs:{label:"产品"}},[a("el-select",{attrs:{placeholder:""},model:{value:e.filters.productType,callback:function(t){e.$set(e.filters,"productType",t)},expression:"filters.productType"}},[a("el-option",{attrs:{label:"所有产品",value:""}}),a("el-option",{attrs:{label:"APP封装",value:"app"}}),a("el-option",{attrs:{label:"webclip封装",value:"webclip"}}),a("el-option",{attrs:{label:"iOS企业签名",value:"entsign"}}),a("el-option",{attrs:{label:"分发存储空间",value:"storge"}})],1)],1),a("el-form-item",{attrs:{label:""}},[a("el-select",{attrs:{placeholder:""},model:{value:e.filters.productType2,callback:function(t){e.$set(e.filters,"productType2",t)},expression:"filters.productType2"}},[a("el-option",{attrs:{label:"所有产品细类",value:""}})],1)],1),a("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:e.loadData}},[e._v("搜索")])],1),a("el-table",{ref:"renewTable",attrs:{data:e.dataList,"highlight-current-row":"","header-cell-style":{background:"#EDEDED",color:"#000000",paddingTop:"9px",paddingBottom:"9px"}}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"产品明细",prop:"title",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+"-"+e._s(t.row.versionName)+"(1"+e._s(t.row.expireUnit)+") "),a("span",{staticClass:"m-l-xs"},[e._v("x "+e._s(t.row.amount)+" 个")])]}}])}),a("el-table-column",{attrs:{label:"App名称",prop:"appName"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" -- ")]}}])}),a("el-table-column",{attrs:{label:"倒计时",prop:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.left)+" 天 ")]}}])}),a("el-table-column",{attrs:{label:"付费方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" 按月 ")]}}])}),a("el-table-column",{attrs:{label:"开始/结束时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e._f("formatTime")(t.row.startTime)))]),a("div",[e._v(e._s(e._f("formatTime")(t.row.endTime)))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"/pay/order/renew?ids="+t.row.productId}},[e._v("续费")])]}}])})],1),a("div",{staticClass:"m-t-lg p-t-lg"},[a("el-checkbox",{staticClass:"m-r-sm",attrs:{label:"选中"},model:{value:e.checkedAll,callback:function(t){e.checkedAll=t},expression:"checkedAll"}}),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.renewBatch}},[e._v("批量续费")])],1)],1)]),a("div",{staticClass:"pagination flex flex-end m-t m-b"},[a("el-pagination",{attrs:{"current-page":e.dataPage.page,background:"","page-sizes":[10,20,30,40],"page-size":e.dataPage.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.dataPage.total},on:{"size-change":e.handleSizeChange,"current-change":e.loadData,"update:currentPage":function(t){return e.$set(e.dataPage,"page",t)},"update:current-page":function(t){return e.$set(e.dataPage,"page",t)},"update:pageSize":function(t){return e.$set(e.dataPage,"limit",t)},"update:page-size":function(t){return e.$set(e.dataPage,"limit",t)}}})],1)])},r=[],n=a("1da1"),s=(a("96cf"),a("b0c0"),a("159b"),{data:function(){return{loading:!1,filters:{productType:"",productDetail:""},checkedAll:!1,dataList:[],dataPage:{total:0,page:1,limit:10}}},created:function(){this.loadData()},watch:{checkedAll:function(e){e?this.$refs.renewTable.toggleAllSelection():this.$refs.renewTable.clearSelection()}},methods:{handleClick:function(e){this.$router.push({path:"/appdist/order/"+e.name})},renewBatch:function(){var e=this.$refs.renewTable.selection;if(0!=e.length){var t="";e.forEach((function(e){t=t+","+e.productId})),this.$router.push({path:"/pay/order/renew?id="+t})}else this.util.showToast({title:"请选择订单",icon:"loading",duration:3e3})},handleSizeChange:function(){this.dataPage.page=1,this.loadData()},loadData:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.util.request({url:"/v1/appdist/package/lists",data:{useModel:1,page:e.dataPage.page,limit:e.dataPage.limit},method:"get"});case 2:a=t.sent,200==a.code?(e.dataList=a.data.dataList,e.dataPage=a.data.dataPage):e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return t.stop()}}),t)})))()}}}),i=s,o=(a("6000"),a("2877")),c=Object(o["a"])(i,l,r,!1,null,"3c753aa0",null);t["default"]=c.exports},6e3:function(e,t,a){"use strict";a("13c5")}}]);