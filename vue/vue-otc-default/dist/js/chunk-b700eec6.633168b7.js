(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b700eec6"],{"73bd":function(t,s,e){},c547:function(t,s,e){"use strict";var i=e("73bd");e.n(i).a},eea6:function(t,s,e){"use strict";e.r(s);var i={data:function(){return{type:1,amount:"",money:"",coinTypeIndex:0,coinType:[{id:1,symbol:"USDT",priceCny:{price:0}}],downqr:""}},created:function(){var t,s;this.downqr=null===(t=this.$store.state.app.siteInfo.moduleConfig)||void 0===t||null===(s=t.appdown)||void 0===s?void 0:s.downqr},methods:{goTrade:function(){this.util.switchTab({url:"/coin_otc/ad/lists?amount="+this.amount+"&totalPrice="+this.money+"&type="+this.type+"&coinId="+this.coinType[this.coinTypeIndex].id})}}},a=(e("c547"),e("2877")),l=Object(a.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"wrap",attrs:{id:"wrap"}},[e("xy-header",{attrs:{transparent:!0}}),e("div",{staticClass:"main"},[e("el-carousel",{staticClass:"main-slider",attrs:{height:"720px",interval:5e3,arrow:"always"}},[e("el-carousel-item",[e("div",{staticClass:"item-box"},[e("img",{staticStyle:{width:"100vw"},attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/bg.png",alt:"bg"}}),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v("一键买卖 极速成交")]),e("p",{staticClass:"subtitle"},[t._v("即刻享受极速安全的交易体验，平均单笔订单在 3 分钟内成交")]),e("p",{staticClass:"actions flex",staticStyle:{"margin-top":"100px","font-size":"18px"}},[e("el-select",{staticStyle:{width:"160px","margin-right":"7px"},attrs:{placeholder:"请选择"},model:{value:t.type,callback:function(s){t.type=s},expression:"type"}},[e("el-option",{attrs:{label:"购买",value:1}}),e("el-option",{attrs:{label:"卖出",value:2}})],1),e("el-select",{staticStyle:{width:"160px","margin-right":"7px"},attrs:{placeholder:"请选择"},model:{value:t.coinTypeIndex,callback:function(s){t.coinTypeIndex=s},expression:"coinTypeIndex"}},[e("el-option",{attrs:{label:"USDT",value:0}})],1),e("el-input",{staticStyle:{"margin-right":"7px"},attrs:{placeholder:"限额 500~50000"},model:{value:t.money,callback:function(s){t.money=s},expression:"money"}},[e("i",{staticClass:"el-input__icon",attrs:{slot:"prefix"},slot:"prefix"},[t._v("¥")])]),e("el-button",{attrs:{type:"primary",size:"medium",icon:""},on:{click:t.goTrade}},[t._v(t._s(1==t.type?"购买":"出售")+t._s(t.coinType[this.coinTypeIndex].symbol))])],1),e("p",{staticClass:"links",staticStyle:{"margin-top":"15px"}})])])])],1),e("div",{staticClass:"main-slider-bottom container"},[e("el-row",{attrs:{gutter:80,type:"flex",justify:"center",align:"middle"}},[e("el-col",{attrs:{xs:24,md:8}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/b1.png",alt:"bg"}})]),e("el-col",{attrs:{xs:24,md:8}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/b2.png",alt:"bg"}})]),e("el-col",{attrs:{xs:24,md:8}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/b3.png",alt:"bg"}})])],1)],1),e("div",{staticClass:"bg-white session1"},[e("div",{staticClass:"container"},[e("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("el-col",{staticClass:"left",attrs:{sm:24,md:8}},[e("div",[e("div",{staticClass:"title"},[t._v("如何购买数字货币？")]),e("div",{staticClass:"description"},[t._v(" "+t._s(t.$store.state.app.siteInfo.title)+"上线BTC、ETH、 USDT等多种加密数字货币资产支持多个币种的实时交易及多种支付方式的收付款 ")]),e("el-button",{staticClass:"actions",attrs:{type:"primary"}},[t._v("查看详情")])],1)]),e("el-col",{staticClass:"right",attrs:{sm:24,md:12}},[e("img",{staticClass:"cover1",attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/0.png"}})])],1)],1)]),e("div",{staticClass:"session2"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v("为什么选择我们？")]),e("el-row",{staticClass:"list",attrs:{type:"flex",justify:"center",align:"middle"}},[e("el-col",{attrs:{xs:24,md:18}},[e("el-row",{staticClass:"item",attrs:{type:"flex",justify:"center",align:"middle"}},[e("el-col",{attrs:{md:8}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/1.png"}})]),e("el-col",{attrs:{md:16}},[e("div",[e("div",{staticClass:"title"},[t._v("安全性高")]),e("div",{staticClass:"description"},[t._v(" 采用最先进的微服务系统结构和多重签名技术确保安全；商家均严格遵循 KYC & AML 程序并使用公平的信用评级系统，保证每一笔交易能够安全顺利得进行； ")])])])],1),e("el-row",{staticClass:"item",attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("el-col",{attrs:{md:13}},[e("div",[e("div",{staticClass:"title text-right"},[t._v("专业团队")]),e("div",{staticClass:"description text-right"},[t._v(" 团队成员具有丰富的区块链、证券交易所、投资银行、经纪公司以及法律行业从业经验，共同致力于打造一个全球性、高效率、高安全的数字资产场外交易平台； ")])])]),e("el-col",{attrs:{md:4}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/2.png"}})])],1),e("el-row",{staticClass:"item",attrs:{type:"flex",justify:"center",align:"middle"}},[e("el-col",{attrs:{md:8}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/3.png"}})]),e("el-col",{attrs:{md:16}},[e("div",[e("div",{staticClass:"title"},[t._v("便捷兑换")]),e("div",{staticClass:"description"},[t._v(" 支持多端访问，并支持更多币种的实时兑换，平台平均交易完成时间仅为5分钟 ")])])])],1)],1)],1)],1)]),e("div",{staticClass:"session3 bg-white"},[e("div",{staticClass:"container"},[e("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("el-col",{attrs:{span:14}},[e("div",[e("div",{staticClass:"title"},[t._v(t._s(t.$store.state.app.siteInfo.title)+" App 随时随地交换您的数字资产")]),e("div",{staticClass:"text-center"},[e("img",{staticClass:"qr",attrs:{src:t.downqr,alt:"APP"}})]),e("div",{staticClass:"text-center qr-text"},[t._v("扫码下载APP")])])]),e("el-col",{attrs:{span:5}},[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/starideas/xyfront/vue/otc-default/img/4.png"}})])],1)],1)])],1),e("xy-footer")],1)}),[],!1,null,"01d4e82f",null);s.default=l.exports}}]);