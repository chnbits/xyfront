(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-544d27ef"],{"190b":function(t,e,a){},8546:function(t,e,a){"use strict";a("190b")},b6ef:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top"},[a("button",{staticClass:"addOrder",attrs:{type:"button"},on:{click:function(e){return t.$router.push({path:"/worksheet/worksheet/add"})}}},[a("span",{staticClass:"iconfont iconbianji"}),t._v(" 提交工单 ")]),t._m(0),a("button",{staticClass:"toSearch",attrs:{type:"button"}},[t._v("查找")])]),a("div",{staticClass:"orderList"},[a("el-table",{staticClass:"orderTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":{color:"#181818",fontSize:"14px",backgroundColor:"#F5F9FA"}}},[a("el-table-column",{attrs:{prop:"id",label:"工单编号"}}),a("el-table-column",{attrs:{prop:"description",label:"问题内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.description)+" ")]}}])}),a("el-table-column",{attrs:{prop:"cateTitle",label:"问题类别"}}),a("el-table-column",{attrs:{prop:"createTime",label:"提交时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatTime")(e.row.createTime))+" ")]}}])}),a("el-table-column",{attrs:{prop:"state"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.state?a("span",[t._v("待客服回复")]):2==e.row.state?a("span",[t._v("待您回复")]):0==e.row.state?a("span",[t._v("已关闭")]):t._e()]}}])},[a("template",{slot:"header"},[a("span",{staticClass:"iconfont iconshaixuan"}),a("span",[t._v("状态(全部)")]),a("span",{staticClass:"iconfont iconsanjiaoxiabiaozhengfangxing"})])],2),a("el-table-column",{attrs:{prop:"name",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return a("ul",{staticClass:"operateBtn"},[a("li",{on:{click:function(e){return t.$router.push({path:"/worksheet/worksheet/info"})}}},[a("span",{staticClass:"iconfont iconchakan"}),a("button",[t._v("查看")])]),a("li",{on:{click:function(a){return t.close(e.row.rowIndex)}}},[a("span",{staticClass:"iconfont iconzantingtingzhi"}),a("button",[t._v("关闭")])]),a("li",{on:{click:function(a){return t.deleteOne(e.row.rowIndex)}}},[a("span",{staticClass:"iconfont iconshanchu"}),a("button",[t._v("删除")])])])}}])})],1)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"text"}}),a("span",{staticClass:"iconfont iconsousuo"})])}],s=a("1da1"),r=(a("96cf"),{name:"WorkSheet",props:[],components:{},data:function(){return{loading:!1,tableData:[],dataPage:{total:0,page:1,limit:10}}},created:function(){this.loadlists()},methods:{close:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.util.request({url:"/v1/worksheet/worksheet/close/"+e.tableData[t].id,method:"put"});case 2:n=a.sent,200==n.code?(e.tableData[t].state=0,e.util.showToast({title:n.msg,icon:"loading",duration:2e3})):e.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()},deleteOne:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.getSelectedIds(),a.next=3,e.util.request({url:"/v1/worksheet/worksheet/delete/"+e.tableData[t].id,method:"delete"});case 3:n=a.sent,200==n.code?(e.loadlists(),e.util.showToast({title:n.msg,icon:"loading",duration:2e3})):e.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 5:case"end":return a.stop()}}),a)})))()},loadlists:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.util.request({url:"/v1/worksheet/worksheet/my",data:{page:t.dataPage.page,limit:t.dataPage.limit},method:"get"});case 3:a=e.sent,200==a.code?(t.tableData=a.data.dataList,t.dataPage=a.data.dataPage):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()}}}),i=r,l=(a("8546"),a("2877")),c=Object(l["a"])(i,n,o,!1,null,"9a2eb622",null);e["default"]=c.exports}}]);