(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5c572a2b"],{"09a4":function(t,a,e){"use strict";e.r(a),e("96cf");var s=e("1da1"),i={data:function(){return{coinIndex:0,coinType:[{id:1,symbol:"USDT"}],activeTab:0,tabList:[{value:2,title:"我要购买"},{value:1,title:"我要出售"}],dataListBuy:[],dataPageBuy:{total:10,limit:10,page:1},dataListSell:[],dataPageSell:{total:10,limit:10,page:1},cnyPrice:0}},created:function(){this.loadData(2)},methods:{pageChangeSell:function(t){this.dataPageSell.page=t,this.loadData(2,t)},pageChangeBuy:function(t){this.dataPageBuy.page=t,this.loadData(1,t)},tabClick:function(){this.loadData(this.tabList[this.activeTab].value)},loadData:function(t){var a=arguments,e=this;return Object(s.a)(regeneratorRuntime.mark((function s(){var i,n;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return i=1<a.length&&void 0!==a[1]?a[1]:1,s.next=3,e.util.request({url:"/v1/coin_otc/ad/lists",data:{type:t,page:i,coinId:e.coinType[e.coinIndex].id},method:"get"});case 3:if(200!=(n=s.sent).code){s.next=17;break}s.t0=e.activeTab,s.next=0===s.t0?8:1===s.t0?11:14;break;case 8:return e.dataListSell=n.data.dataList,e.dataPageSell=n.data.dataPage,s.abrupt("break",14);case 11:return e.dataListBuy=n.data.dataList,e.dataPageBuy=n.data.dataPage,s.abrupt("break",14);case 14:e.cnyPrice=n.data.cnyPrice,s.next=18;break;case 17:e.util.showToast({title:n.msg,icon:"loading",duration:3e3});case 18:case"end":return s.stop()}}),s)})))()}}},n=(e("dac3"),e("2877")),l=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("xy-header"),e("div",{staticClass:"main bg-white"},[e("div",{staticClass:"bg-white"},[e("xy-subnav",{attrs:{title:"",navList:t.tabList},on:{change:t.tabClick},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}}),e("div",{staticClass:"p-t p-b bg-white coin-list"},[e("div",{staticClass:"container flex",staticStyle:{"justify-content":"space-between"}},[e("div",[e("el-link",{staticClass:"item",attrs:{type:"primary"}},[t._v(t._s(t.coinType[t.coinIndex].symbol))])],1),e("el-button",{attrs:{size:"medium",type:"info"},on:{click:function(a){return t.util.navigateTo({url:"/otc/ad/pub"})}}},[t._v("发布广告")])],1)]),e("div",{staticStyle:{background:"rgb(244, 245, 247)",height:"8px"}}),e("div",{staticStyle:{background:"rgba(91,96,255,0.03)"}},[e("div",{staticClass:"container flex quick-buy"},[t._m(0),e("div",{staticClass:"flex right"},[e("div",{staticClass:"m-r",staticStyle:{"text-align":"right",width:"250px",color:"rgba(0,0,0,0.3)"}},[e("div",{staticClass:"ts-12",staticStyle:{"margin-bottom":"8px"}},[t._v("参考价")]),e("div",{staticClass:"ts-12"},[e("span",{staticClass:"m-r-sm",staticStyle:{color:"#FF8787"}},[t._v(t._s(t.cnyPrice.price))]),e("span",[t._v("CNY / "+t._s(t.coinType[t.coinIndex].symbol))])])]),e("el-input",{staticClass:"quick-input m-r",attrs:{placeholder:"请输入购买金额，限额 500CNY ~ 50000CNY"}},[e("div",{staticClass:"ts-12 p-r-sm",staticStyle:{"font-weight":"600",color:"#030463","line-height":"40px"},attrs:{slot:"suffix"},slot:"suffix"},[t._v("CNY")])]),e("el-button",{attrs:{type:"primary"}},[t._v("购买"+t._s(t.coinType[t.coinIndex].symbol))])],1)])]),e("div",{staticClass:"container"},[e("el-tabs",{model:{value:t.tabList[t.activeTab].title,callback:function(a){t.$set(t.tabList[t.activeTab],"title",a)},expression:"tabList[activeTab].title"}},[e("el-tab-pane",{attrs:{label:"我要购买",name:"我要购买"}},[e("el-table",{staticClass:"p-t-lg",staticStyle:{width:"100%"},attrs:{data:t.dataListSell}},[e("el-table-column",{attrs:{prop:"userInfo",label:"用户昵称 ( 交易次数 / 好评率 )",width:"280"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"flex flex-alignCenter"},[e("el-avatar",{attrs:{size:"medium",src:a.row.userInfo.avatar}}),e("span",{staticClass:"tw6 m-r-sm m-l-sm"},[t._v(t._s(a.row.userInfo.nickname))]),e("span",{staticStyle:{color:"rgba(0,0,0,0.6)"}},[t._v(" "+t._s(a.row.otcUser.tradeCount)+" "),e("span",[t._v(" | "+t._s(a.row.otcUser.goodRate)+" %")])])],1)]}}])}),e("el-table-column",{attrs:{prop:"limit",label:"单笔限額",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.minMoney))]),t._v("- "),e("span",[t._v(t._s(a.row.maxMoney))]),t._v("CNY ")]}}])}),e("el-table-column",{attrs:{prop:"amount",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.amount))]),e("span",{staticClass:"m-l-sm"},[t._v(t._s(a.row.coinName))])]}}])}),e("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"price"},[t._v(t._s(a.row.price))]),e("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),e("el-table-column",{attrs:{prop:"paytype",label:"付款方式"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("i",{directives:[{name:"show",rawName:"v-show",value:t.row.alipay,expression:"scope.row.alipay"}],staticClass:"xyicon xyicon-alipay m-r-xs",staticStyle:{color:"#4C88FE"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.row.wxpay,expression:"scope.row.wxpay"}],staticClass:"xyicon xyicon-wxpay m-r-xs",staticStyle:{color:"#00C901"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.row.bank,expression:"scope.row.bank"}],staticClass:"xyicon xyicon-card",staticStyle:{color:"#F7BA2A"}})]}}])}),e("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){return t.util.navigateTo({url:"/otc/trade/"+a.row.id})}}},[t._v("购买"+t._s(a.row.coinName))])]}}])})],1),e("el-pagination",{staticClass:"text-center m-t-md",attrs:{background:"",layout:"prev, pager, next","page-size":t.dataPageSell.limit,"current-page":t.dataPageSell.page,total:t.dataPageSell.total},on:{"current-change":t.pageChangeSell,"update:pageSize":function(a){return t.$set(t.dataPageSell,"limit",a)},"update:page-size":function(a){return t.$set(t.dataPageSell,"limit",a)},"update:currentPage":function(a){return t.$set(t.dataPageSell,"page",a)},"update:current-page":function(a){return t.$set(t.dataPageSell,"page",a)}}})],1),e("el-tab-pane",{attrs:{label:"我要出售",name:"我要出售"}},[e("el-table",{staticClass:"p-t-lg",staticStyle:{width:"100%"},attrs:{data:t.dataListBuy}},[e("el-table-column",{attrs:{prop:"userInfo",label:"用户昵称 ( 交易次数 / 好评率 )",width:"280"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"flex flex-alignCenter"},[e("el-avatar",{attrs:{size:"medium",src:a.row.userInfo.avatar}}),e("span",{staticClass:"tw6 m-r-sm m-l-sm"},[t._v(t._s(a.row.userInfo.nickname))]),e("span",{staticStyle:{color:"rgba(0,0,0,0.6)"}},[t._v(" "+t._s(a.row.otcUser.tradeCount)+" "),e("span",[t._v(" | "+t._s(a.row.otcUser.goodRate)+" %")])])],1)]}}])}),e("el-table-column",{attrs:{prop:"limit",label:"单笔限額",width:"180"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.minMoney))]),t._v("- "),e("span",[t._v(t._s(a.row.maxMoney))]),t._v("CNY ")]}}])}),e("el-table-column",{attrs:{prop:"amount",label:"数量"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.amount))]),e("span",{staticClass:"m-l-sm"},[t._v(t._s(a.row.coinName))])]}}])}),e("el-table-column",{attrs:{prop:"price",label:"价格"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"price"},[t._v(t._s(a.row.price))]),e("span",{staticClass:"price m-l-sm"},[t._v("CNY")])]}}])}),e("el-table-column",{attrs:{prop:"paytype",label:"付款方式"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("i",{directives:[{name:"show",rawName:"v-show",value:t.row.alipay,expression:"scope.row.alipay"}],staticClass:"xyicon xyicon-alipay m-r-xs",staticStyle:{color:"#4C88FE"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.row.wxpay,expression:"scope.row.wxpay"}],staticClass:"xyicon xyicon-wxpay m-r-xs",staticStyle:{color:"#00C901"}}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.row.bank,expression:"scope.row.bank"}],staticClass:"xyicon xyicon-card",staticStyle:{color:"#F7BA2A"}})]}}])}),e("el-table-column",{attrs:{prop:"action",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){return t.util.navigateTo({url:"/otc/trade/"+a.row.id})}}},[t._v("出售"+t._s(a.row.coinName))])]}}])})],1),e("el-pagination",{staticClass:"text-center m-t-md",attrs:{background:"",layout:"prev, pager, next","page-size":t.dataPageBuy.limit,"current-page":t.dataPageBuy.page,total:t.dataPageBuy.total},on:{"current-change":t.pageChangeBuy,"update:pageSize":function(a){return t.$set(t.dataPageBuy,"limit",a)},"update:page-size":function(a){return t.$set(t.dataPageBuy,"limit",a)},"update:currentPage":function(a){return t.$set(t.dataPageBuy,"page",a)},"update:current-page":function(a){return t.$set(t.dataPageBuy,"page",a)}}})],1)],1)],1)],1)]),e("xy-footer")],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",{staticClass:"title m-r tw6"},[t._v("一键买卖 极速成交")]),e("span",{staticClass:"subtitle"},[t._v("平均单笔订单在 3 分钟内成交，0 交易手续费")])])}],!1,null,"324321e6",null);a.default=l.exports},"0da8":function(t,a,e){},dac3:function(t,a,e){"use strict";var s=e("0da8");e.n(s).a}}]);