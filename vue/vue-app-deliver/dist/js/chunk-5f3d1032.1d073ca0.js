(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f3d1032"],{"262c":function(t,e,a){},"49c4":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-tab-pane",{attrs:{label:"应用概述",name:"info"}}),a("el-tab-pane",{attrs:{label:"版本管理",name:"version"}}),a("el-tab-pane",{attrs:{label:"渠道",name:"channel"}}),a("el-tab-pane",{attrs:{label:"统计",name:"statistics"}}),a("el-tab-pane",{attrs:{label:"应用合并",name:"merge"}}),a("el-tab-pane",{attrs:{label:"反馈",name:"feedback"}}),a("el-tab-pane",{attrs:{label:"成员管理",name:"member"}}),a("el-tab-pane",{attrs:{label:"证书信息",name:"certinfo"}}),a("el-tab-pane",{attrs:{label:"编辑应用",name:"edit"}}),a("el-tab-pane",{attrs:{label:"设置",name:"settings"}})],1)},i=[],n=(a("a9e3"),a("b0c0"),{props:{id:{type:[Number,String],default:0},value:{type:String,default:"info"}},data:function(){return{}},created:function(){},watch:{},methods:{tabClick:function(t,e){switch(t.name){case"info":this.$router.push({path:"/appdist/app/info/"+this.id});break;case"version":this.$router.push({path:"/appdist/version/lists/"+this.id});break;case"channel":this.$router.push({path:"/appdist/channel/my/"+this.id});break;case"statistics":this.$router.push({path:"/appdist/statistics/"+this.id});break;case"merge":this.$router.push({path:"/appdist/app/merge/"+this.id});break;case"feedback":this.$router.push({path:"/appdist/feedback/lists/"+this.id});break;case"member":this.$router.push({path:"/appdist/member/lists/"+this.id});break;case"homepage":this.$router.push({path:"/appdist/app/homepage/"+this.id});break;case"certinfo":this.$router.push({path:"/appdist/app/certinfo/"+this.id});break;case"edit":this.$router.push({path:"/appdist/settings/edit/"+this.id});break;case"settings":this.$router.push({path:"/appdist/settings/index/"+this.id});break;default:break}}}}),l=n,r=a("2877"),o=Object(r["a"])(l,s,i,!1,null,"ccdc4f84",null);e["a"]=o.exports},"6c1a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"top-box"},[s("info-tab",{attrs:{id:t.appId,value:"feedback"}})],1),s("div",{staticClass:"box"},[s("div",{staticClass:"content"},[s("div",{staticClass:"flex space-between"},[s("router-link",{attrs:{to:"/appdist/feedback/add/"+t.appId}},[s("el-button",{staticClass:"primary-linear",attrs:{type:"primary",size:"small"}},[t._v("添加反馈")]),s("el-button",{attrs:{type:"default",size:"small"}},[s("i",{staticClass:"xyicon xyicon-exit ts-14"}),t._v(" 同步到Tracup ")])],1),s("div",[s("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"",size:"mini"},on:{change:t.loadData},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},[s("el-option",{attrs:{label:"全部状态",value:""}}),s("el-option",{attrs:{label:"待处理",value:0}}),s("el-option",{attrs:{label:"已处理",value:1}}),s("el-option",{attrs:{label:"已关闭",value:-1}})],1)],1)],1),s("div",{staticClass:"m-t ts-14",staticStyle:{color:"#5C5C5C"}},[t._v(" 您未开启接受用户反馈信息，点击"),s("router-link",{attrs:{to:""}},[t._v("这里设置")])],1)]),s("div",{staticClass:"content"},[s("el-table",{ref:"mytable",attrs:{data:t.dataListCates,"tooltip-effect":"dark","row-class-name":t.tableRowClassName}},[s("template",{slot:"empty"},[s("div",{staticClass:"lh-1 p-t-lg p-b-lg"},[s("img",{staticClass:"m-b-sm",attrs:{src:a("b8fe"),width:"66",alt:"empty"}}),s("div",{staticClass:"ts-16"},[s("span",[t._v("目前还没有反馈，请点击")]),s("router-link",{attrs:{to:"/appdist/feedback/add/"+t.appId}},[t._v("这里添加")])],1)])]),s("el-table-column",{attrs:{type:"selection",width:"100px",align:"left"}}),s("el-table-column",{attrs:{align:"center",prop:"description",label:"描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"cursor-pointer",on:{click:function(a){return t.$router.push({path:"/appdist/feedback/info/"+e.row.id})}}},[t._v(" "+t._s(t._f("ellipsis")(e.row.description,40))+" ")])]}}])}),s("el-table-column",{attrs:{align:"left",prop:"contact",label:"用户"}}),s("el-table-column",{attrs:{align:"center",prop:"createTime",label:"提交时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatTime")(e.row.createTime))+" ")]}}])}),s("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.state?s("span",[t._v("待处理")]):1==e.row.state?s("span",[t._v("已处理")]):-1==e.row.state?s("span",[t._v("已关闭")]):t._e()]}}])})],2),s("div",{staticClass:"pagination m-t"},[s("el-pagination",{attrs:{"current-page":t.dataPageCates.page,background:"","page-sizes":[10,20,30,40],"page-size":t.dataPageCates.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.dataPageCates.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])])},i=[],n=a("1da1"),l=(a("96cf"),a("49c4")),r={components:{InfoTab:l["a"]},data:function(){return{appId:0,loading:!1,state:"",dataListCates:[],dataPageCates:{total:0,page:1,limit:10}}},created:function(){this.appId=this.$route.params.appId,this.loadData()},watch:{$route:function(){this.appId=this.$route.params.appId,this.loadData()}},methods:{loadData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.util.request({url:"/v1/appdist/feedback/lists/"+t.appId,data:{cate:1,state:t.state,keyword:t.keyword,page:t.dataPageCates.page,limit:t.dataPageCates.limit},method:"get"});case 3:a=e.sent,200==a.code?(t.dataListCates=a.data.dataList,t.dataPageCates=a.data.dataPage):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},deleteOne:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.util.request({url:"/v1/appdist/feedback/delete",data:{id:t},method:"delete"});case 2:s=a.sent,200==s.code?(e.loadlists(),e.util.showToast({title:s.msg,icon:"loading",duration:2e3})):e.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 4:case"end":return a.stop()}}),a)})))()},tableRowClassName:function(t){t.row,t.rowIndex},handleSizeChange:function(t){this.dataPage.limit=t,this.loadlists()},handleCurrentChange:function(t){this.dataPage.page=t,this.loadlists()}}},o=r,p=(a("71ef"),a("2877")),d=Object(p["a"])(o,s,i,!1,null,"0fd063aa",null);e["default"]=d.exports},"71ef":function(t,e,a){"use strict";a("262c")},b8fe:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABBCAYAAACKAhl4AAADtUlEQVR4nO2cWUsrMRSAT2vdt7qiuIvbmw8+iv8fH0V9EhdEEVEEUevuvfcLRI7tdFoTbdO5+UDU6SyZb04yJ4vm/vxDIoZ8swsQElGGIspQRBmKKENRsD/wUrm5uZGLiwt5e3trZpl+nVwuJ5OTkzI2NmZ+thT0Tnd3d3JyciLPz88NL2Ajyefz0t3dbWRovsjAkjZlt2WFWilVoXyDvXm+9/f3S1dX1++UrIFwLx8fHybyn56equ5XIUOfYH5+XiYmJjIRHY+Pj3J4eCjn5+dV96kqA9ra2kzdKhRSdwseqgdftR5q6quV0MoKVkgaMc9QRBmKKEMRZSiiDEWUofBKIEIbMfRNDp1l0LO9v7/3uvhPQ3LY19fnfrzLQUQE6e3u7q7zhX8ayjQwMCDr6+vOEeIcGa+vr3J9fV1XZtcIEOA7DuMsw3b368n5GwV9KR+cZXR0dMjs7GwwMiiHT3sBTjK4ecY51tbWvC7+0xAZPg/GOTK4cE9Pj/OFQyQmXYooQxFlKKIMhXMDahOtEBIuS9JUx3dwlsGw+/b2dlAyhoeHZWNjo7HpOALe399NRy0kGSSCPnh14UPIPDW+D8Y5A21vb5fR0dGgIqNYLHod7xwZvb29srm5GZSMpjWgek42K8Q8QxFlKKIMRZShiDIUUYYiylCkymBSJit5BCv8ao2eV026yCxvb2+ls7PTnKg800TUyMhIVVns//DwEMSsG2VkYRsTX2mkZqBnZ2dyeXmZeMP0ELe2thI/YzKH41hTWiqVgphOYElWrfWtFTL0oA02q52AZZFJx7L/6empHB8fmycR0rqwb60DZYyCr7TQBz6n6thtdmaNKDg4ODARZSU2OyI0uixJ5foig5GilZWVRCGEPk/85eWl4iSIYORrb29Prq6uzPH2gkwGsyyZLn8oUN6hoaGK7Z8yKPjg4KApfFI4Ee60A+Uy2I4AZuRpLG214Hzj4+Nm1o1xhpAiBIjs8jLVXDsOyEGClsRrigigSuzs7BgJ9nPeNFNTU7K6uvo5/xmajCTqGs9IuhG27e/vy9HRkfndth2sKF5YWJDFxUVTNVpBgsV5QJi/TWF9hoWwo4rR5kxPT7eUBIvzSJduG6gyNL60D4yLtqII8B4dJ0Plr3qWl5dN+9CqIsBrDJSbn5ubM+1DFvoxzlMFVAskzMzMtLwEy7dl0D6QRNFQpnXUWpG6ZZBT0D6QSC0tLZl5kyyJgFy9/xiAThuvUqKCHmvWREDdMv4H4rCfIspQ/AWmeHosofGowAAAAABJRU5ErkJggg=="}}]);