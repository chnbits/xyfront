(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_agreement-agreement-info"],{"191d":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"bg-white p-l-sm p-r-m p-b",staticStyle:{"min-height":"1000px"}},[n("v-uni-view",{staticClass:"title text-center font-lg m-b p-t-sm"},[t._v(t._s(t.info.title))]),n("v-uni-view",{staticClass:"info m-b-sm text-gray font-sm text-center p-r"},[t._v("更新时间："+t._s(t._f("formatTime")(t.info.updateTime)))]),n("v-uni-rich-text",{attrs:{nodes:t.info.content}})],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"75ac":function(t,e,n){"use strict";var r=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("c964")),a={components:{},data:function(){return{title:"",info:{content:"加载中..."}}},onLoad:function(t){this.title=t.title,this.loadData()},onPullDownRefresh:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:uni.stopPullDownRefresh(),setTimeout((function(){uni.stopPullDownRefresh()}),5e3);case 4:case"end":return e.stop()}}),e)})))()},methods:{loadData:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,t.util.request({url:"/v1/user_agreement/agreement/info",method:"get",data:{title:t.title}});case 3:n=e.sent,200==n.code&&(t.info=n.data.info),uni.hideLoading();case 6:case"end":return e.stop()}}),e)})))()}}};e.default=a},af98:function(t,e,n){"use strict";n.r(e);var r=n("191d"),i=n("c6e7");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var u,o=n("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"f78d4712",null,!1,r["a"],u);e["default"]=s.exports},c6e7:function(t,e,n){"use strict";n.r(e);var r=n("75ac"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a}}]);