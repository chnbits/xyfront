(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c6c04dd"],{"416c":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-inner"},[a("el-row",{staticClass:"flex",attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,md:24,lg:18,xl:17}},[a("div",{staticClass:"app-list-wrap"},[a("div",{staticClass:"list-title"},[t._v(" 全部应用 ")]),a("div",{staticClass:"list-search flex space-between items-end"},[a("div",{staticClass:"flex-1 flex"},[a("el-input",{staticClass:"search-input b-r-0",attrs:{"suffix-icon":"el-icon-search",placeholder:"搜索您的应用名..."},model:{value:t.keyword,callback:function(s){t.keyword=s},expression:"keyword"}}),a("el-button",{staticClass:"search-btn",attrs:{type:"primary"}},[t._v("搜索")])],1),a("div",{staticClass:"right"})]),a("div",{staticClass:"app-list"},t._l(t.appList,(function(s,i){return a("div",{key:i,staticClass:"app-item"},[a("div",{staticClass:"body"},[a("div",{staticClass:"top flex space-between"},[a("div",[a("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""}},[t._v(" "+t._s(s.version)+"（build "+t._s(s.build)+"）")]),a("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""}},[t._v(t._s(s.size))])],1),a("div",[a("span",{staticClass:"action"},[a("span",{staticClass:"xyicon xyicon-down1"}),t._v(" 下载 ")]),a("span",{staticClass:"action"},[a("span",{staticClass:"xyicon xyicon-trash"}),t._v(" 删除 ")])])]),a("div",{staticClass:"content flex space-between flex-alignCenter"},[a("div",{staticClass:"logo-box flex flex-alignCenter"},[a("div",{staticClass:"m-r-md"},[a("el-avatar",{attrs:{shape:"square",size:72,src:t.$store.state.user.userInfo.avatar}})],1),a("div",[a("div",{staticClass:"name"},[t._v(" "+t._s(s.title)+" ")]),a("div",{staticClass:"platform"},[t._v(" "+t._s(s.platform)+" ")])])]),a("div",{staticClass:"downinfo flex-1"},[a("div",{staticClass:"item"},[a("span",{staticClass:"m-r-lg"},[t._v(" 当前应用今日下载总次数: ")]),a("i",{},[t._v(t._s(s.todayDownCount))])]),a("div",{staticClass:"item"},[a("span",{staticClass:"m-r-md"},[t._v("下载地址:")]),a("span",{staticClass:"m-r-md"},[t._v("lefany.com/down/"+t._s(s.name))]),a("el-popover",{attrs:{placement:"top-start",title:"扫码下载",width:"120px",trigger:"hover"}},[a("div",{staticClass:"flex flex-alignCenter flex-center",staticStyle:{width:"120px",height:"120px",background:"#05B9CF"}},[a("img",{attrs:{width:"100",height:"100",src:""}})]),a("span",{staticClass:"cursor-pointer xyicon xyicon-qrcode",attrs:{slot:"reference"},slot:"reference"})])],1)]),a("div",{staticClass:"right"},[a("router-link",{attrs:{to:""}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("i",{staticClass:"xyicon xyicon-eye"}),t._v(" 详情 ")])],1),a("router-link",{attrs:{to:""}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("i",{staticClass:"xyicon xyicon-edit"}),t._v(" 编辑 ")])],1),a("router-link",{attrs:{to:""}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("span",{staticClass:"xyicon xyicon"}),t._v(" 版本更新 ")])],1)],1)])]),a("div",{staticClass:"footer flex"},[a("span",{staticClass:"item flex flex-alignCenter"},[a("span",{staticClass:"label"},[t._v("创建时间:")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("formatTime")(s.createTime)))])]),a("span",{staticClass:"item flex flex-alignCenter"},[a("span",{staticClass:"label"},[t._v("更新时间:")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("formatTime")(s.updateTime)))])])])])})),0)])]),a("el-col",{attrs:{xs:24,md:24,lg:6,xl:7}},[a("div",{staticClass:"box progress-box"},[a("div",{staticClass:"content"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("剩余付费下载次数 "),a("el-tooltip",{staticClass:"item cursor-pointer",attrs:{effect:"dark",content:"1. 购买的付费下载点数包优先抵扣即将到期的，账单内可查询。2.这里显示的下载点数为总剩余的下载点数，支持叠加购买，不下载不抵扣。",placement:"right-start"}},[a("i",{staticClass:"xyicon xyicon-help-o"})])],1),a("el-progress",{attrs:{percentage:50}})],1),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("今日免费剩余下载次数 "),a("el-tooltip",{staticClass:"item cursor-pointer",attrs:{effect:"dark",content:"实名后每天赠送100下载点数，点数不做累计，赠送的下载点数每日0点重置。",placement:"right-start"}},[a("i",{staticClass:"xyicon xyicon-help-o"})])],1),a("el-progress",{attrs:{percentage:50}})],1),a("div",[a("span",[t._v("分发下载页广告设置")]),a("el-switch",{staticClass:"m-l-sm m-r-xs",model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),a("el-tooltip",{staticClass:"item cursor-pointer",attrs:{effect:"dark",content:"如果开启下载页面广告展示后，可享受每日赠送的免费下载点数、则下载页面有广告显示，关闭广告后，只能抵扣付费下载套餐，且下载页面无任何广告",placement:"right-start"}},[a("i",{staticClass:"xyicon xyicon-help-o"})])],1),a("div",{staticClass:"text-right"},[a("router-link",{attrs:{to:"/"}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:"",round:""}},[t._v("购买下载套装")])],1)],1)])])]),a("div",{staticClass:"box kflx"},[a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v(" 按点数计费扣费类型如下： ")]),a("div",{staticClass:"list"},[a("ul",[a("li",[a("span"),a("p",[t._v("1KB-300M的APP/文件，单个下载扣1下载点数。")])]),a("li",[a("span"),a("p",[t._v("300M-500m的APP/文件，单个下载扣5下载点数")])]),a("li",[a("span"),a("p",[t._v("500M-1G的APP/文件，单个下载扣10下载点数。")])]),a("li",[a("span"),a("p",[t._v("1G-2G的APP/文件，单个下载扣20点下载点数。")])]),a("li",[a("span"),a("p",[t._v("2G-2.5G的APP/文件，单个下载扣35点下载点数。")])]),a("li",[a("span"),a("p",[t._v("2.5G-3.1G的APP/文件，单个下载扣50点下载点数。")])]),a("li",[a("span"),a("p",[t._v("用户通过谁的页面点击下载就扣谁的下载点数。")])])])])])]),a("div",{staticClass:"box app-group"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v(" 分组导航 ")]),a("div",[a("span",[t._v("添加分组")]),a("span",{staticClass:"xyicon xyicon-plus1 ts-20 m-l-sm"})])]),a("div",{staticClass:"content"},[a("div",{staticClass:"list"},[a("div",{staticClass:"item flex space-between"},[a("div",[t._v("1号分组")]),a("div",[t._v("1个")])]),a("div",{staticClass:"item flex space-between"},[a("div",[t._v("2号分组")]),a("div",[t._v("2个")])])])])])])],1)],1)},e=[],l=a("1da1"),n=(a("96cf"),{data:function(){return{keyword:"",appList:[{id:"1",name:"q87asd",logo:"",title:"测试APP",version:"1.0.2",build:"2",size:"25.6MB",platform:"Android",todayDownCount:20,createTime:1585098316,updateTime:1585098316},{id:"1",name:"q87asd",logo:"",title:"测试APP",version:"1.0.2",build:"2",size:"25.6MB",platform:"Android",todayDownCount:20,createTime:1585098316,updateTime:1585098316},{id:"1",name:"q87asd",logo:"",title:"测试APP",version:"1.0.2",build:"2",size:"25.6MB",platform:"Android",todayDownCount:20,createTime:1585098316,updateTime:1585098316},{id:"1",name:"q87asd",logo:"",title:"测试APP",version:"1.0.2",build:"2",size:"25.6MB",platform:"Android",todayDownCount:20,createTime:1585098316,updateTime:1585098316},{id:"1",name:"q87asd",logo:"",title:"测试APP",version:"1.0.2",build:"2",size:"25.6MB",platform:"Android",todayDownCount:20,createTime:1585098316,updateTime:1585098316}]}},created:function(){},watch:{},methods:{loadData:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.util.request({url:"/v1/api",data:{},method:"get"});case 2:a=s.sent,200==a.code||t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return s.stop()}}),s)})))()}}}),r=n,o=(a("9ea5"),a("2877")),c=Object(o["a"])(r,i,e,!1,null,"54155fa0",null);s["default"]=c.exports},"9ea5":function(t,s,a){"use strict";a("e2f7")},e2f7:function(t,s,a){}}]);