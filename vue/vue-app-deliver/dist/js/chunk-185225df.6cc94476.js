(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-185225df"],{"028e":function(t,a,e){},"874e":function(t,a,e){"use strict";e("028e")},"889b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"top-box"},[e("el-button",{attrs:{type:"primary",size:"small"}},[t._v("资源包总览")]),e("router-link",{attrs:{to:"/appdist/package/log"}},[e("el-button",{staticStyle:{"margin-left":"22px"},attrs:{type:"primary",size:"small",plain:""}},[t._v("使用明细")])],1)],1),e("div",{staticClass:"box"},[e("div",{staticClass:"content content1"},[e("el-row",{attrs:{type:"flex"}},[e("el-col",{staticClass:"border_right-1px",attrs:{md:12}},[e("h3",{staticClass:"title1"},[t._v("资源包总览:")]),e("el-form",{staticClass:"form1",attrs:{size:"medium",model:t.form1,"label-suffix":":","label-width":"120px","label-position":"left"}},[e("el-form-item",{attrs:{label:"生效日期"}},[e("el-date-picker",{attrs:{type:"month","value-format":"yyyy-MM",placeholder:"请选择生效日期"},model:{value:t.form1.startDate,callback:function(a){t.$set(t.form1,"startDate",a)},expression:"form1.startDate"}})],1),e("el-form-item",{attrs:{label:"资源包名称"}},[e("el-input",{attrs:{"suffix-icon":"el-icon-search",placeholder:""},model:{value:t.form1.key,callback:function(a){t.$set(t.form1,"key",a)},expression:"form1.key"}}),e("el-button",{staticClass:"m-l",staticStyle:{width:"100px"},attrs:{type:"primary primary-linear"},on:{click:t.loadData}},[t._v("搜索")])],1)],1)],1),e("el-col",{attrs:{md:12}},[e("h3",{staticClass:"title2"},[t._v("资源包统计:")]),e("div",{staticClass:"flex spance-between"},[e("div",{staticClass:"ts-12",staticStyle:{color:"#7A7D83","margin-top":"19px"}},[e("span",{staticStyle:{"margin-right":"16px"}},[t._v("历史总计")]),e("i",{staticClass:"xyicon xyicon-help-o"})]),e("div",{staticClass:"flex-1"},[e("v-chart",{staticClass:"chart2",staticStyle:{height:"200px"},attrs:{option:t.chartOption}})],1)]),e("div",{staticClass:"flex flex-end count-list2"},[e("ul",{staticClass:"flex"},[e("li",[e("span",{staticClass:"title"},[t._v("总计：")]),e("span",{staticClass:"value text-warning"},[t._v(" "+t._s(t.statisticsList.useModel1+t.statisticsList.useModel2)+" ")])]),e("li",[e("span",{staticClass:"title"},[t._v("包年包月：")]),e("span",{staticClass:"value text-warning"},[t._v(" "+t._s(t.statisticsList.useModel1)+" ")])]),e("li",[e("span",{staticClass:"title"},[t._v("按量付费：")]),e("span",{staticClass:"value text-warning"},[t._v(" "+t._s(t.statisticsList.useModel2)+" ")])])])])])],1)],1)]),e("el-tabs",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("el-tab-pane",{attrs:{label:"包年包月",name:"1"}},[e("div",{staticClass:"box bg-white"},[e("el-table",{attrs:{data:t.dataList1}},[e("el-table-column",{attrs:{align:"center",label:"产品明细",width:"300"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.name)+"-"+t._s(a.row.versionName)+"(1"+t._s(a.row.expireUnit)+") "),e("span",{staticClass:"m-l-xs"},[t._v("x "+t._s(a.row.amount)+" 个")])]}}])}),e("el-table-column",{attrs:{label:"资源包ID",prop:"key"}}),e("el-table-column",{attrs:{label:"状态",prop:"stateLabel"}}),e("el-table-column",{attrs:{label:"付费方式",prop:"payTypeLabel"}}),e("el-table-column",{attrs:{label:"总量剩余量"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.leftDays)+" 天 ")]}}])}),e("el-table-column",{attrs:{label:"有效时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(t._f("formatTime")(a.row.startTime)))]),e("div",[t._v(t._s(t._f("formatTime")(a.row.endTime)))])]}}])}),e("el-table-column",{attrs:{label:"抵扣类型"}},[[t._v(" 包年包月 ")]],2),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:"/pay/order/renew?ids="+a.row.productId}},[t._v("续费")]),a.row.canBindApp&&!a.row.appId?[e("span",{staticClass:"text-primary cursor-pointer m-l-sm",on:{click:function(e){return t.bindApp(a.row)}}},[t._v("绑定应用")])]:t._e()]}}])})],1),e("el-dialog",{attrs:{title:"绑定APP",visible:t.bindAppDialog,width:"700px"},on:{"update:visible":function(a){t.bindAppDialog=a}}},[e("div",{staticClass:"choose-title m-t"},[t._v(" "+t._s(t.$store.state.app.siteInfo.title)+"应用 ")]),e("el-alert",{staticClass:"m-t",attrs:{type:"primary",title:"包年包月类型的APP可以与资源包绑定"}},[t._v(" 包年包月类型的资源包绑定APP后将作为被绑定APP的专属资源包，比如webclip资源包、企业签名资源包都可以绑定一个APP，绑定后不可以解绑。 ")]),e("div",{staticClass:"choose-list"},[t._l(t.bindAppList,(function(a,s){return[a.id!=t.id?e("div",{key:s,staticClass:"choose-item",on:{click:function(e){t.chooseAppId=a.id}}},[e("img",{staticClass:"logo",attrs:{src:a.logo,alt:a.name,width:"64"}}),e("div",{staticClass:"m-t ts-14",staticStyle:{color:"#252525"}},[t._v(t._s(a.name))]),t.chooseAppId==a.id?e("div",{staticClass:"active"},[e("i",{staticClass:"xyicon xyicon-check"})]):t._e()]):t._e()]}))],2),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"mini"},on:{click:function(a){t.bindAppDialog=!1}}},[t._v("关闭")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.bindSubmit()}}},[t._v("确定绑定")])],1)],1)],1),e("div",{staticClass:"pagination flex flex-end m-t-xs m-b"},[e("el-pagination",{attrs:{"current-page":t.dataPage1.page,background:"","page-sizes":[10,20,30,40],"page-size":t.dataPage1.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.dataPage1.total},on:{"size-change":t.handleSizeChange1,"current-change":t.loadData,"update:currentPage":function(a){return t.$set(t.dataPage1,"page",a)},"update:current-page":function(a){return t.$set(t.dataPage1,"page",a)},"update:pageSize":function(a){return t.$set(t.dataPage1,"limit",a)},"update:page-size":function(a){return t.$set(t.dataPage1,"limit",a)}}})],1)]),e("el-tab-pane",{attrs:{label:"按量付费",name:"2"}},[e("div",{staticClass:"box bg-white"},[e("el-table",{attrs:{data:t.dataList2}},[e("el-table-column",{attrs:{align:"center",label:"产品明细",width:"300"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.name)+"-"+t._s(a.row.versionName)+"("+t._s(a.row.specAmount)+"下载点) "),e("span",{staticClass:"m-l-xs"},[t._v("x "+t._s(a.row.amount)+" 个")])]}}])}),e("el-table-column",{attrs:{label:"资源包ID",prop:"key"}}),e("el-table-column",{attrs:{label:"状态",prop:"stateLabel"}}),e("el-table-column",{attrs:{label:"付费方式",prop:"payTypeLabel"}}),e("el-table-column",{attrs:{label:"总量"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.amount*a.row.specAmount)+" 点 ")]}}])}),e("el-table-column",{attrs:{label:"剩余量"},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(" "+t._s(a.row.left)+" 点 ")]}}])}),e("el-table-column",{attrs:{label:"有效时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(t._f("formatTime")(a.row.startTime)))]),e("div",[t._v(t._s(t._f("formatTime")(a.row.endTime)))])]}}])}),e("el-table-column",{attrs:{label:"抵扣类型"}},[[t._v(" 按量抵扣 ")]],2),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("router-link",{attrs:{to:"/appdist/package/log?key="+a.row.key}},[t._v("明细")])]}}])})],1)],1),e("div",{staticClass:"pagination flex flex-end m-t-xs m-b"},[e("el-pagination",{attrs:{"current-page":t.dataPage2.page,background:"","page-sizes":[10,20,30,40],"page-size":t.dataPage2.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.dataPage2.total},on:{"size-change":t.handleSizeChange2,"current-change":t.loadData,"update:currentPage":function(a){return t.$set(t.dataPage2,"page",a)},"update:current-page":function(a){return t.$set(t.dataPage2,"page",a)},"update:pageSize":function(a){return t.$set(t.dataPage2,"limit",a)},"update:page-size":function(a){return t.$set(t.dataPage2,"limit",a)}}})],1)])],1)],1)},i=[],n=e("5530"),l=e("1da1"),r=(e("96cf"),{data:function(){return{loading:!1,form1:{startDate:"",key:""},tab:"1",statisticsList:{},chartOption:{tooltip:{trigger:"item"},legend:{show:!1},series:[{type:"pie",radius:["80%","60%"],itemStyle:{borderRadius:0,borderColor:"#fff",borderWidth:3},label:{formatter:"{name|{b}}\n{time|{c} 单}",rich:{time:{fontSize:10,color:"#999"}}},labelLine:{length:75,length2:50,maxSurfaceAngle:10},data:[]}]},dataList1:[],dataPage1:{total:0,page:1,limit:10},bindAppList:[],chooseAppId:0,bindAppDialog:!1,bindPackageId:0,dataList2:[],dataPage2:{total:0,page:1,limit:10}}},created:function(){this.loadStatistics(),this.loadData(1)},watch:{tab:function(t){this.loadData(parseInt(t))}},methods:{bindApp:function(t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.bindPackageId=t.id,a.bindAppDialog=!0,e.next=4,a.util.request({url:"/v1/appdist/package/bindApp",data:{packageId:a.bindPackageId},method:"get"});case 4:s=e.sent,200==s.code&&(a.bindAppList=s.data.dataList);case 6:case"end":return e.stop()}}),e)})))()},bindSubmit:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.util.request({url:"/v1/appdist/package/bindApp",data:{packageId:t.bindPackageId,appId:t.chooseAppId},method:"put"});case 2:e=a.sent,200==e.code?t.util.showToast({title:e.msg,icon:"success",duration:2e3}):t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()},handleSizeChange1:function(){this.dataPage1.page=1,this.loadData(1)},handleSizeChange2:function(){this.dataPage2.page=1,this.loadData(2)},loadStatistics:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.util.request({url:"/v1/appdist/package/statistics",data:{},method:"get"});case 2:e=a.sent,200==e.code?(t.statisticsList=e.data.dataList,t.chartOption.series[0].data=[{value:t.statisticsList["exipreCount"],name:"已过期"},{value:t.statisticsList["unexipreCount"],name:"未过期"}]):t.util.showToast({title:e.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()},loadData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var e,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e={},s=parseInt(t.tab),a.t0=s,a.next=1===a.t0?5:1===a.t0?8:11;break;case 5:return e.page=t.dataPage1.page,e.limit=t.dataPage1.limit,a.abrupt("break",11);case 8:return e.page=t.dataPage2.page,e.limit=t.dataPage2.limit,a.abrupt("break",11);case 11:return a.next=13,t.util.request({url:"/v1/appdist/package/lists",data:Object(n["a"])(Object(n["a"])({useModel:s},t.form1),e),method:"get"});case 13:if(i=a.sent,200!=i.code){a.next=27;break}a.t1=s,a.next=1===a.t1?18:2===a.t1?21:24;break;case 18:return t.dataList1=i.data.dataList,t.dataPage1=i.data.dataPage,a.abrupt("break",25);case 21:return t.dataList2=i.data.dataList,t.dataPage2=i.data.dataPage,a.abrupt("break",25);case 24:return a.abrupt("break",25);case 25:a.next=28;break;case 27:t.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 28:case"end":return a.stop()}}),a)})))()}}}),o=r,c=(e("874e"),e("2877")),u=Object(c["a"])(o,s,i,!1,null,"55981b98",null);a["default"]=u.exports}}]);