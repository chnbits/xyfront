(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b3287714"],{"416c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-inner"},[a("el-row",{staticClass:"flex",attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,md:24,lg:18,xl:17}},[a("div",{staticClass:"app-list-wrap"},[a("div",{staticClass:"list-title"},[t._v(" 全部应用 ")]),0==t.appList.length?a("div",{staticClass:"app-empty box bg-white p-t-lg p-b-lg"},[a("el-empty",{attrs:{description:" ",image:s("8bc3"),"image-size":350}},[a("router-link",{attrs:{to:"/appdist/app/upchannel"}},[a("el-button",{staticClass:"primary-linear m-l",staticStyle:{width:"142px"},attrs:{type:"primary",size:"small"}},[t._v(" 立即上传 ")])],1)],1)],1):t._e(),t.appList.length>0?a("div",{staticClass:"list-search flex space-between items-end"},[a("div",{staticClass:"flex-1 flex"},[a("el-input",{staticClass:"search-input b-r-0",attrs:{"suffix-icon":"el-icon-search",placeholder:"搜索您的应用名..."},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("el-button",{staticClass:"search-btn",attrs:{type:"primary"},on:{click:t.loadData}},[t._v("搜索")])],1),a("div",{staticClass:"right"})]):t._e(),t.appList.length>0?a("div",{staticClass:"app-list"},t._l(t.appList,(function(e,s){return a("div",{key:s,staticClass:"app-item"},[a("div",{staticClass:"body"},[a("div",{staticClass:"top flex space-between"},[a("div",[a("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""}},[t._v(" "+t._s(e.currentVersionInfo.version)+"（build "+t._s(e.currentVersionInfo.versionCode)+"）")]),a("el-button",{attrs:{size:"mini",type:"primary",plain:"",round:""}},[t._v(t._s(e.currentVersionInfo.size)+"MB")])],1),a("div",[a("span",{staticClass:"action"},[a("span",{staticClass:"xyicon xyicon-download1"}),a("a",{attrs:{href:e.currentVersionInfo.url,target:"_blank"}},[t._v("下载")])]),a("span",{staticClass:"action"},[a("span",{staticClass:"xyicon xyicon-trash"}),a("el-popconfirm",{staticClass:"m-l-sm",attrs:{"confirm-button-text":"确定删除","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定删除这个应用吗？"},on:{confirm:function(s){return t.deleteOne(e.id)}}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v("删除")])])],1)])]),a("div",{staticClass:"content flex space-between flex-alignCenter"},[a("div",{staticClass:"logo-box flex flex-alignCenter"},[a("div",{staticClass:"m-r-md"},[a("el-avatar",{attrs:{shape:"square",size:72,src:e.logo}})],1),a("div",[a("div",{staticClass:"name"},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"platform"},[1==e.platform?a("span",[t._v("iOS")]):2==e.platform?a("span",[t._v("Android")]):t._e()])])]),a("div",{staticClass:"downinfo flex-1"},[a("div",{staticClass:"item"},[a("span",{staticClass:"m-r-lg"},[t._v(" 当前应用今日下载总次数: ")]),a("i",{},[t._v(t._s(e.todayDownCount?e.todayDownCount:0))])]),a("div",{staticClass:"item"},[a("span",{staticClass:"m-r-md"},[t._v("下载地址:")]),a("span",{staticClass:"m-r-md"},[t._v(t._s(t.util.baseHost())+"/app/"+t._s(e.key)+".html")]),a("el-popover",{attrs:{placement:"top-start",title:"扫码下载",width:"120px",trigger:"hover"}},[a("div",{staticClass:"flex flex-alignCenter flex-center",staticStyle:{width:"120px",height:"120px",background:"#05B9CF"}},[a("xy-qrcode",{staticClass:"qrcode",style:{opacity:1},attrs:{value:t.util.baseDomain()+"/down/"+e.key+".html",options:{width:100}}})],1),a("span",{staticClass:"cursor-pointer xyicon xyicon-qrcode",attrs:{slot:"reference"},slot:"reference"})])],1)]),a("div",{staticClass:"right"},[a("router-link",{attrs:{to:"/appdist/app/info/"+e.id}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("i",{staticClass:"xyicon xyicon-eye"}),t._v(" 详情 ")])],1),a("router-link",{attrs:{to:"/appdist/settings/settings/"+e.id}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("i",{staticClass:"xyicon xyicon-edit"}),t._v(" 编辑 ")])],1),a("router-link",{attrs:{to:"/appdist/app/add"}},[a("el-button",{attrs:{size:"small",type:"primary",plain:"",round:""}},[a("span",{staticClass:"xyicon xyicon"}),t._v(" 版本更新 ")])],1)],1)])]),a("div",{staticClass:"footer flex"},[a("span",{staticClass:"item flex flex-alignCenter"},[a("span",{staticClass:"label"},[t._v("创建时间:")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("formatTime")(e.createTime)))])]),a("span",{staticClass:"item flex flex-alignCenter"},[a("span",{staticClass:"label"},[t._v("更新时间:")]),a("span",{staticClass:"value"},[t._v(t._s(t._f("formatTime")(e.updateTime)))])])])])})),0):t._e()])]),a("el-col",{attrs:{xs:24,md:24,lg:6,xl:7}},[a("div",{staticClass:"box progress-box"},[a("div",{staticClass:"content"},[a("div",{staticClass:"progress"},[a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("剩余付费下载次数 "),a("el-tooltip",{staticClass:"item cursor-pointer",attrs:{effect:"dark",content:"1. 购买的付费下载点数包优先抵扣即将到期的，账单内可查询。2.这里显示的下载点数为总剩余的下载点数，支持叠加购买，不下载不抵扣。",placement:"right-start"}},[a("i",{staticClass:"xyicon xyicon-help-o"})])],1),a("el-progress",{attrs:{percentage:50}})],1),a("div",{staticClass:"item"},[a("div",{staticClass:"title"},[t._v("今日免费剩余下载次数 "),a("el-tooltip",{staticClass:"item cursor-pointer",attrs:{effect:"dark",content:"实名后每天赠送100下载点数，点数不做累计，赠送的下载点数每日0点重置。",placement:"right-start"}},[a("i",{staticClass:"xyicon xyicon-help-o"})])],1),a("el-progress",{attrs:{percentage:50}})],1),a("div",[a("span",[t._v("分发下载页广告设置")]),a("el-switch",{staticClass:"m-l-sm m-r-xs",model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),a("el-tooltip",{staticClass:"item cursor-pointer",attrs:{effect:"dark",content:"如果开启下载页面广告展示后，可享受每日赠送的免费下载点数、则下载页面有广告显示，关闭广告后，只能抵扣付费下载套餐，且下载页面无任何广告",placement:"right-start"}},[a("i",{staticClass:"xyicon xyicon-help-o"})])],1),a("div",{staticClass:"text-right"},[a("router-link",{attrs:{to:"/appdist/product/lists"}},[a("el-button",{attrs:{size:"medium",type:"primary",plain:"",round:""}},[t._v("购买下载套装")])],1)],1)])])]),a("div",{staticClass:"box kflx"},[a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[t._v(" 按点数计费扣费类型如下： ")]),a("div",{staticClass:"list"},[a("ul",[a("li",[a("span"),a("p",[t._v("1KB-300M的APP/文件，单个下载扣1下载点数。")])]),a("li",[a("span"),a("p",[t._v("300M-500m的APP/文件，单个下载扣5下载点数")])]),a("li",[a("span"),a("p",[t._v("500M-1G的APP/文件，单个下载扣10下载点数。")])]),a("li",[a("span"),a("p",[t._v("1G-2G的APP/文件，单个下载扣20点下载点数。")])]),a("li",[a("span"),a("p",[t._v("2G-2.5G的APP/文件，单个下载扣35点下载点数。")])]),a("li",[a("span"),a("p",[t._v("2.5G-3.1G的APP/文件，单个下载扣50点下载点数。")])]),a("li",[a("span"),a("p",[t._v("用户通过谁的页面点击下载就扣谁的下载点数。")])])])])])]),a("div",{staticClass:"box app-group"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v(" 分组导航 ")]),a("router-link",{attrs:{to:"/appdist/cate/add"}},[a("span",[t._v("添加分组")]),a("span",{staticClass:"xyicon xyicon-plus1 ts-20 m-l-sm"})])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"list"},t._l(t.dataListCates,(function(e,s){return a("div",{key:s,staticClass:"item flex space-between"},[a("div",[t._v(t._s(e.name))]),a("div",[t._v(t._s(e.appCount)+"个")])])})),0)])])])],1)],1)},i=[],n=s("1da1"),r=(s("96cf"),s("4da2")),l={components:{"xy-qrcode":r["a"]},data:function(){return{keyword:"",appList:[],dataListCates:[]}},created:function(){this.loadData(),this.loadCates()},watch:{},methods:{loadData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/appdist/app/my",data:{keyword:t.keyword},method:"get"});case 2:s=e.sent,200==s.code?t.appList=s.data.dataList:t.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},deleteOne:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.util.request({url:"/v1/appdist/app/delete/"+t,method:"delete"});case 2:a=s.sent,200==a.code?(e.loadData(),e.util.showToast({title:a.msg,icon:"loading",duration:2e3})):e.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return s.stop()}}),s)})))()},loadCates:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/appdist/cate/my",data:{keyword:t.keyword,page:1,limit:10},method:"get"});case 2:s=e.sent,200==s.code?t.dataListCates=s.data.dataList:t.util.showToast({title:s.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}},o=l,c=(s("886a"),s("2877")),p=Object(c["a"])(o,a,i,!1,null,"e548c3b4",null);e["default"]=p.exports},"4da2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loadedScript?s("qrcode",{attrs:{value:t.value,options:t.options}}):t._e()},i=[],n=s("1da1"),r=(s("96cf"),s("b0c0"),s("d3b7"),{name:"xyQrcode",props:{value:{type:[String],default:""},options:{type:Object,default:function(){return{width:118,margin:1}}}},data:function(){return{loadedScript:!1}},created:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadScript();case 2:Vue.component(VueQrcode.name,VueQrcode),this.loadedScript=!0;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{loadScript:function(){var t=this;return new Promise((function(e,s){t.VueScript2.load("https://cdn.jsdelivr.net/gh/fengyuanchen/vue-qrcode/dist/vue-qrcode.min.js").then((function(){e()}))}))}}}),l=r,o=s("2877"),c=Object(o["a"])(l,a,i,!1,null,"2e03b137",null);e["a"]=c.exports},"82f5":function(t,e,s){},"886a":function(t,e,s){"use strict";s("82f5")},"8bc3":function(t,e,s){t.exports=s.p+"img/app-empty.235837ae.png"}}]);