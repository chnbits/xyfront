(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_invite-invite-share"],{"1b75":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=i(n("1da1")),a=i(n("5530")),s=n("26cb"),o={data:function(){return{qrcodeUrl:"",qrcodeImg:"",dataList:[{balance:0}],info:{title:"",inviteCode:"加载中..."},painterJson:{},painterImgPath:""}},computed:(0,a.default)({},(0,s.mapState)(["app","user"])),onLoad:function(e){this.loadData(),t.log(this.qrcode)},onShow:function(){this.info.title},methods:{navTo:function(t){uni.navigateTo({url:t})},loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$xyutil.request({url:"/v1/user_invite/invite/code",method:"get"});case 2:return n=e.sent,200==n.code&&(t.info=n.data.info,t.qrcodeUrl=t.$xyutil.config.baseDomain()+"/h5/pages/core/user/reg?inviteCode="+t.info.inviteCode),e.next=6,t.$xyutil.request({url:"/v1/user_score/score/my",method:"get"});case 6:i=e.sent,200==i.code&&(t.dataList=i.data.dataList);case 8:case"end":return e.stop()}}),e)})))()},share:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t,t.$xyutil.showToast({title:"海报生成中...",icon:"loading",duration:1e4}),t.painterJson={width:"750rpx",height:"1114rpx",background:"#f88b3c",views:[{type:"image",url:t.$store.state.app.userList[t.$store.state.app.currentUser].userInfo.avatar,css:{left:"40rpx",top:"40rpx",width:"84rpx",height:"84rpx",radius:"50%",color:"#fff"}},{type:"text",text:t.$store.state.app.userList[t.$store.state.app.currentUser].userInfo.nickname,css:{color:"#fff",left:"144rpx",top:"40rpx",fontSize:"32rpx",fontWeight:"bold"}},{type:"text",text:"邀请您加入"+t.$store.state.app.siteInfo.title,css:{color:"#fff",left:"144rpx",top:"90rpx",width:"700rpx",fontSize:"24rpx"}},{type:"image",url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-dyuvtmfbcqs424986f/761ccf70-6111-11eb-8d54-21c4ca4ce5d7.png",css:{left:"22rpx",top:"166rpx",width:"710rpx",height:"920rpx",radius:"12rpx"}},{type:"text",text:"邀请码："+t.info.inviteCode,css:{color:"#fff",left:"440rpx",top:"40rpx",fontSize:"32rpx",fontWeight:"bold"}},{type:"image",url:t.qrcodeImg,css:{radius:"12rpx",left:"210rpx",top:"360rpx",width:"342rpx",height:"342rpx"}}]};case 3:case"end":return e.stop()}}),e)})))()},pinterSuccess:function(t){uni.hideToast(),this.painterImgPath=t,this.realShare()},realShare:function(){this.$refs.share.togglePopup({systemShare:!0,type:2,title:"邀请",summary:"您加入",imageUrl:this.painterImgPath,imageWidth:"600rpx",imageHeight:"881rpx",href:this.qrcode,success:function(e){t.log("success:"+JSON.stringify(e))},fail:function(e){t.log("fail:"+JSON.stringify(e))}})}}};e.default=o}).call(this,n("5a52")["default"])},"2ab4":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniGrid:n("0ef0").default,uniGridItem:n("e10b").default,xyQrcode:n("4e7b").default,xyShare:n("e006").default,xy3rdLimePainter:n("a4e2").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap pos-r"},[n("v-uni-view",{staticClass:"banner m-b"},[n("v-uni-view",{staticClass:"card"},[n("v-uni-view",{staticClass:"title"},[t._v("当前积分")]),n("v-uni-view",{staticClass:"num"},[t._v(t._s(t.dataList[0].balance))])],1)],1),n("uni-grid",{staticClass:"grid",attrs:{column:2,showBorder:!1}},[n("uni-grid-item",{nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.share.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"inner"},[n("v-uni-view",{staticClass:"xyicon xyicon-qrcode text-primary"}),n("v-uni-view",{staticClass:"title"},[t._v("分享海报")])],1)],1),n("uni-grid-item",{nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/user_invite/invite/my")}}},[n("v-uni-view",{staticClass:"inner"},[n("v-uni-view",{staticClass:"xyicon xyicon-level text-primary"}),n("v-uni-view",{staticClass:"title"},[t._v("推广人统计")])],1)],1),n("uni-grid-item",{nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/user_score/score_log/my?typeId=2")}}},[n("v-uni-view",{staticClass:"inner"},[n("v-uni-view",{staticClass:"xyicon xyicon-statistics1 text-primary"}),n("v-uni-view",{staticClass:"title"},[t._v("积分记录")])],1)],1),n("uni-grid-item",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.app.siteInfo.versionFuncsAll.indexOf("scoreshop")>=0,expression:"$store.state.app.siteInfo.versionFuncsAll.indexOf('scoreshop') >= 0"}],nativeOn:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/scoreshop/item/lists")}}},[n("v-uni-view",{staticClass:"inner"},[n("v-uni-view",{staticClass:"xyicon xyicon-store text-primary"}),n("v-uni-view",{staticClass:"title"},[t._v("积分商城")])],1)],1)],1),n("v-uni-view",{staticClass:"code"},[t._v("邀请码："+t._s(t.info.inviteCode))]),n("xy-qrcode",{attrs:{size:140,show:!1,val:t.qrcodeUrl},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrcodeImg=e}}}),n("xy-share",{ref:"share",attrs:{contentHeight:1181}}),n("xy-3rd-lime-painter",{ref:"painter",attrs:{isRenderImage:!0,board:t.painterJson,"custom-style":"position: fixed; left: 200%;"},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.pinterSuccess(e)}}})],1)},a=[]},"5e41":function(t,e,n){"use strict";var i=n("bd27"),r=n.n(i);r.a},7112:function(t,e,n){"use strict";n.r(e);var i=n("2ab4"),r=n("9fc8");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5e41");var s,o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"d7899ff4",null,!1,i["a"],s);e["default"]=c.exports},8270:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 第三方 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */.banner[data-v-d7899ff4]{background-color:#e23435;height:150px;color:#fff}.banner .card[data-v-d7899ff4]{padding:30px;text-align:center}.banner .card .num[data-v-d7899ff4]{margin-top:10px;font-size:35px}.grid[data-v-d7899ff4]{padding:10px;box-sizing:border-box}.grid .uni-grid-item:nth-child(even) .inner[data-v-d7899ff4]{margin-left:15px}.grid .inner[data-v-d7899ff4]{background-color:#fff;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:10px;border-radius:10px}.grid .inner .xyicon[data-v-d7899ff4]{font-size:30px}.grid .inner .title[data-v-d7899ff4]{padding-top:12px}.code[data-v-d7899ff4]{text-align:center;color:#333}',""]),t.exports=e},"9fc8":function(t,e,n){"use strict";n.r(e);var i=n("1b75"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},bd27:function(t,e,n){var i=n("8270");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("7cabbbea",i,!0,{sourceMap:!1,shadowMode:!1})}}]);