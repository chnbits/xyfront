(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user_invite-invite-share"],{"0df6":function(t,e,i){"use strict";var n=i("e081"),r=i.n(n);r.a},"11ba":function(t,e,i){"use strict";(function(t){i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"XyShare",data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{},data:{},nativeShare:!1}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1},shareList:{type:Array,default:function(){return[{provider:"weixin",scene:"WXSceneSession",icon:"weixin",color:"#76AC52",title:"微信好友"},{provider:"weixin",scene:"WXSenceTimeline",icon:"wxpyq",color:"#E65F59",title:"朋友圈"},{provider:"qq",scene:"",icon:"qq",color:"#4295D5",title:"QQ好友"},{provider:"qq",scene:"",icon:"qqzone",color:"#F1B845",title:"QQ空间"},{provider:"local",icon:"photo",color:"#4295D5",title:"保存相册"},{provider:"copy",icon:"link",color:"#58A55C",title:"复制链接"},{provider:"system",icon:"more-o",color:"#5569E7",title:"更多"}]}}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{sendWithSystem:function(){var t="";switch(this.data.type){case 0:t="web";break;case 1:t="text";break;case 2:t="image";break}plus.share.sendWithSystem({type:t,title:this.data.title,content:this.data.summary,href:this.data.href,thumbs:[this.data.imageUrl],pictures:[this.data.imageUrl]},this.data.success,this.data.fail)},togglePopup:function(e){var i=this;if(e&&(this.data=e,t.log("shareData",this.data)),1!=this.timer){if(this.timer=1,setTimeout((function(){i.timer=0}),500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout((function(){i.show=!1,i.hasTabbar&&uni.showTabBar()}),200);this.show=!0,this.nativeShare=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout((function(){i.backgroundColor=i.config.backgroundColor,i.transform="translateY(0px)"}),10)}}):setTimeout((function(){i.backgroundColor=i.config.backgroundColor,i.transform="translateY(0px)"}),10)}},stopPrevent:function(){},shareToFriend:function(e){switch(e.provider){case"local":t.log("保存图片到相册"),uni.saveImageToPhotosAlbum({filePath:this.data.imageUrl,success:function(){uni.showToast({title:"保存成功",icon:"success",duration:1e3})}});break;case"copy":break;case"system":return this.sendWithSystem(),!0;default:break}}}};e.default=n}).call(this,i("5a52")["default"])},"1cd8":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[1!=t.data.type?i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{style:{width:t.data.imageWidth,height:t.data.imageHeight},attrs:{src:t.data.imageUrl,mode:"scaleToFill"}})],1):t._e(),t.nativeShare?i("v-uni-view",{staticClass:"mask-content safe-bottom",style:[{height:"auto",transform:t.transform}],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"view-content"},[i("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),i("v-uni-view",{staticClass:"share-list"},[1!=t.data.type?i("v-uni-view",{staticClass:"summary"},[t._v("长按上方图片保存到相册")]):i("v-uni-view",{staticClass:"summary"},[t._v("点击复制文案")])],1)],1),i("v-uni-view",{staticClass:"bottom b-t",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePopup.apply(void 0,arguments)}}},[t._v("取消")])],1):t._e()],1):t._e()},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"1f3d":function(t,e,i){"use strict";i.r(e);var n=i("a634"),r=i("defe");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("0df6");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"4bec5b6a",null,!1,n["a"],o);e["default"]=c.exports},"232a":function(t,e,i){"use strict";i("4160"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=n},"251b":function(t,e,i){"use strict";var n={xyQrcode:i("e806").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"xy-poster"},[i("xy-qrcode",{ref:"qrcode",staticClass:"hidden",attrs:{val:t.qrcodeVal,size:200,unit:"px",background:"#ffffff",foreground:"#000000",iconSize:40,lv:3,onval:!0,loadMake:!0},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}}),i("v-uni-canvas",{staticClass:"posters-layer",style:{width:t.width+"px",height:t.height+"px"},attrs:{"canvas-id":"canvasdrawer"}})],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"278d":function(t,e,i){"use strict";i.r(e);var n=i("1cd8"),r=i("f4af");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("a1bb");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"16dc0a66",null,!1,n["a"],o);e["default"]=c.exports},"46c0":function(t,e,i){"use strict";i.r(e);var n=i("c214"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},4700:function(t,e,i){"use strict";var n=i("d457"),r=i.n(n);r.a},"487f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".posters-layer[data-v-597d890c]{position:fixed;top:%?-5000?%;left:%?-5000?%}",""]),t.exports=e},"4c02":function(t,e,i){var n=i("487f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("5ba62e2a",n,!0,{sourceMap:!1,shadowMode:!1})},"5b9b":function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid-wrap"},[i("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":t.showBorder},style:{"border-left-color":t.borderColor},attrs:{id:t.elId}},[t._t("default")],2)],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},"7daf":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.uni-grid-wrap[data-v-3627e284]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.uni-grid[data-v-3627e284]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-3627e284]{position:relative;z-index:1;border-left:1px #c8c7cc solid}',""]),t.exports=e},8432:function(t,e,i){"use strict";i("4160"),i("a434"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=n},8944:function(t,e,i){"use strict";var n=i("f6eb"),r=i.n(n);r.a},"8a79":function(t,e,i){"use strict";i.r(e);var n=i("251b"),r=i("f508");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("b407");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"597d890c",null,!1,n["a"],o);e["default"]=c.exports},"9b59":function(t,e,i){var n=i("b048");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("7fcb1afb",n,!0,{sourceMap:!1,shadowMode:!1})},"9c32":function(t,e,i){"use strict";var n={uniGrid:i("c6d2").default,uniGridItem:i("1f3d").default,xyShare:i("278d").default,xyPoster:i("8a79").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"banner m-b"},[i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"title"},[t._v("当前积分")]),i("v-uni-view",{staticClass:"num"},[t._v(t._s(t.dataList[0].balance))])],1)],1),i("uni-grid",{staticClass:"grid",attrs:{column:2,showBorder:!1}},[i("uni-grid-item",{nativeOn:{click:function(e){return t.share(e)}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-qrcode text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("分享海报")])],1)],1),i("uni-grid-item",{nativeOn:{click:function(e){return t.navTo("/pages/user_invite/invite/my")}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-level text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("推广人统计")])],1)],1),i("uni-grid-item",{nativeOn:{click:function(e){return t.navTo("/pages/user_score/score_log/my?typeId=2")}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-statistics1 text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("积分记录")])],1)],1),i("uni-grid-item",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.app.siteInfo.versionFuncsAll.indexOf("scoreshop")>=0,expression:"$store.state.app.siteInfo.versionFuncsAll.indexOf('scoreshop') >= 0"}],nativeOn:{click:function(e){return t.navTo("/pages/scoreshop/item/lists")}}},[i("v-uni-view",{staticClass:"inner"},[i("v-uni-view",{staticClass:"xyicon xyicon-store text-primary"}),i("v-uni-view",{staticClass:"title"},[t._v("积分商城")])],1)],1)],1),i("v-uni-view",{staticClass:"code"},[t._v("邀请码："+t._s(t.info.inviteCode))]),i("xy-share",{ref:"share",attrs:{contentHeight:1181}}),i("xy-poster",{ref:"poster",attrs:{postersData:t.postersData},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.onSuccessCreatePosters.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.onPostersError.apply(void 0,arguments)}}})],1)},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},a1bb:function(t,e,i){"use strict";var n=i("9b59"),r=i.n(n);r.a},a57d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.uni-grid-item[data-v-4bec5b6a]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-grid-item__box[data-v-4bec5b6a]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-grid-item--border[data-v-4bec5b6a]{position:relative;z-index:0;border-bottom:1px #c8c7cc solid;border-right:1px #c8c7cc solid}.uni-grid-item--border-top[data-v-4bec5b6a]{position:relative;height:100%;border-top:1px #c8c7cc solid;z-index:0}.uni-highlight[data-v-4bec5b6a]:active{background-color:#f1f1f1}',""]),t.exports=e},a634:function(t,e,i){"use strict";var n,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},a=[];i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},ac58:function(t,e,i){"use strict";i.r(e);var n=i("232a"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},b048:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.mask[data-v-16dc0a66]{position:fixed;left:0;top:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:998;-webkit-transition:.3s;transition:.3s}.mask .image[data-v-16dc0a66]{position:absolute;top:20px;box-shadow:0 0 10px rgba(0,0,0,.1)}.mask .bottom[data-v-16dc0a66]{position:absolute;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;background:#fff;z-index:9;font-size:%?30?%;color:#303133}.mask-content[data-v-16dc0a66]{width:100%;height:auto;-webkit-transition:.3s;transition:.3s;background:#fff}.mask-content.has-bottom[data-v-16dc0a66]{padding-bottom:%?90?%}.mask-content .view-content[data-v-16dc0a66]{height:100%}.share-header[data-v-16dc0a66]{height:%?50?%;font-size:%?30?%;color:font-color-dark;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:%?10?%}.share-header[data-v-16dc0a66]:before, .share-header[data-v-16dc0a66]:after{content:"";width:%?240?%;heighg:0;border-top:1px solid #e4e7ed;-webkit-transform:scaleY(.5);transform:scaleY(.5);margin-right:%?30?%}.share-header[data-v-16dc0a66]:after{margin-left:%?30?%;margin-right:0}.share-list[data-v-16dc0a66]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:60px;-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left}.share-list .summary[data-v-16dc0a66]{width:100%;padding:0 30px;text-align:center}.share-list .summary uni-textarea[data-v-16dc0a66]{padding:5px;min-height:60px;border:1px solid #f1f1f1;margin-bottom:10px}.share-list .share-item[data-v-16dc0a66]{min-width:25%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?150?%;background:none;line-height:1;margin:0}.share-list .share-item .icon[data-v-16dc0a66]{font-size:%?70?%;width:%?70?%;height:%?70?%;margin-bottom:%?26?%}.share-list .share-item .title[data-v-16dc0a66]{font-size:%?28?%;color:#606266}',""]),t.exports=e},b06c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 第三方 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 背景颜色 */\r\n/* 图片加载中颜色 */.banner[data-v-7a4aea04]{background-color:#0cbf92;height:150px;color:#fff}.banner .card[data-v-7a4aea04]{padding:30px;text-align:center}.banner .card .num[data-v-7a4aea04]{margin-top:10px;font-size:35px}.grid[data-v-7a4aea04]{padding:10px;box-sizing:border-box}.grid .uni-grid-item:nth-child(even) .inner[data-v-7a4aea04]{margin-left:15px}.grid .inner[data-v-7a4aea04]{background-color:#fff;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:10px;border-radius:10px}.grid .inner .xyicon[data-v-7a4aea04]{font-size:30px}.grid .inner .title[data-v-7a4aea04]{padding-top:12px}.code[data-v-7a4aea04]{text-align:center;color:#333}',""]),t.exports=e},b407:function(t,e,i){"use strict";var n=i("4c02"),r=i.n(n);r.a},ba2a:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("cb29"),i("d3b7"),i("4d63"),i("ac1f"),i("25f0"),i("466d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("f3f3"));i("96cf");var a=n(i("c964")),o={data:function(){return{width:100,height:100,paintingData:{views:[]},index:0,imageList:[],tempFileList:[],isPainting:!1,ctx:null,cache:{},qrcodeVal:"",qrcodeUrl:""}},props:{postersData:{type:Object,default:function(){return{views:[]}}}},watch:{},mounted:function(){uni.removeStorageSync("CACHE_KEYS"),this.cache=uni.getStorageSync("CACHE_KEYS")||{},this.ctx=uni.createCanvasContext("canvasdrawer",this),this.createPosters(this.postersData)},methods:{qrR:function(t){this.qrcodeUrl=t},createPosters:function(t){if(t||(t=this.postersData),t.width&&t.height&&(t.views=t.views||[],uni.removeStorageSync("CACHE_KEYS"),this.paintingData=t,this.ctx&&this.ctx.clearActions(),!this.isPainting&&t.width&&t.height)){this.isPainting=!0;try{this.readyPigment()}catch(e){this.$emit("error")}}},readyPigment:function(){var t=this,e=this.paintingData,i=e.width,n=e.height,r=e.views,a=e.background,o=e.radius,s=void 0===o?0:o;this.width=i,this.height=n;var c=setInterval((function(){t.ctx&&(clearInterval(c),t.ctx.clearActions(),t.ctx.closePath(),t.ctx.beginPath(),t.drawRect({background:a,top:0,left:0,radius:s,width:i,height:n}),t.getImageList(r),t.downLoadImages(0))}),100)},getImageList:function(t){for(var e=[],i=0;i<t.length;i++)"image"===t[i].type&&e.push(t[i].url);this.imageList=e},downLoadImages:function(e){var i=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=i.imageList,a=i.tempFileList,!(e<r.length)){n.next=10;break}return t.log(r[e]),n.next=6,i.getImageInfo(r[e]);case 6:o=n.sent,o.url?(a.push(o),i.downLoadImages(e+1)):t.log(o),n.next=11;break;case 10:i.startPainting();case 11:case"end":return n.stop()}}),n)})))()},tailorImageDraw:function(t,e){},startPainting:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var n,a,o,s,c,d,l,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:for(t.log("开始画图"),n=e.tempFileList,a=e.paintingData.views,o=0,s=0;o<a.length;o++)"image"===a[o].type?(c=n[s],d=a[o],l={},d.tailor&&(d=e.tailorImageDraw(d,c)),l=(0,r.default)({},d,{url:c.localPath}),e.drawImage(l),s++):"text"===a[o].type?(e.ctx.measureText,e.drawText(a[o])):"rect"===a[o].type?e.drawRect(a[o]):"round"===a[o].type?e.drawRound(a[o]):"qrcode"===a[o].type&&(e.qrcodeVal=a[o].value,u=(0,r.default)({},a[o],{url:e.qrcodeUrl}),e.drawImage(u));e.ctx.draw(!0,(function(){uni.setStorageSync("CACHE_KEYS",e.cache),e.saveImageToLocal()}));case 4:case"end":return i.stop()}}),i)})))()},_drawRadiusRect:function(t){var e=t.top,i=void 0===e?0:e,n=t.left,r=void 0===n?0:n,a=t.width,o=void 0===a?0:a,s=t.height,c=void 0===s?0:s,d=t.radius,l=void 0===d?0:d,u=r,f=i,h=o,p=c,v=l;this.ctx.beginPath(),this.ctx.moveTo(u+v,f),this.ctx.lineTo(u+h-v,f),this.ctx.arc(u+h-v,f+v,v,2*Math.PI*.75,2*Math.PI*1),this.ctx.lineTo(u+h,f+p-v),this.ctx.arc(u+h-v,f+p-v,v,0,2*Math.PI*.25),this.ctx.lineTo(u+v,f+p),this.ctx.arc(u+v,f+p-v,v,2*Math.PI*.25,2*Math.PI*.5),this.ctx.lineTo(u,f+v),this.ctx.arc(u+v,f+v,v,2*Math.PI*.5,2*Math.PI*.75)},drawImage:function(t){t.type,t.background;var e=t.top,i=void 0===e?0:e,n=t.left,r=void 0===n?0:n,a=t.width,o=void 0===a?0:a,s=t.height,c=void 0===s?0:s,d=t.radius,l=void 0===d?0:d,u=t.url,f=void 0===u?"":u,h=t.sx,p=void 0===h?0:h,v=t.sy,g=void 0===v?0:v,b=t.ex,x=void 0===b?0:b,m=t.ey,w=void 0===m?0:m;this.ctx.save(),l&&(this.ctx.beginPath(),this._drawRadiusRect(t),this.ctx.fill(),this.ctx.clip()),"tailor"in t?this.ctx.drawImage(f,p,g,x,w,r,i,o,c):this.ctx.drawImage(f,r,i,o,c),this.ctx.restore()},drawText:function(t){var e=this,i=t.MaxLineNumber,n=void 0===i?2:i,a=t.breakWord,o=void 0!==a&&a,s=t.color,c=void 0===s?"black":s,d=t.content,l=void 0===d?"":d,u=t.fontSize,f=void 0===u?16:u,h=t.top,p=void 0===h?0:h,v=t.left,g=void 0===v?0:v,b=t.lineHeight,x=void 0===b?20:b,m=t.textAlign,w=void 0===m?"left":m,y=t.width,k=t.bolder,C=void 0!==k&&k,_=t.textDecoration,T=void 0===_?"none":_;C&&(p-=.3);var P=function(){e.ctx.closePath(),e.ctx.beginPath(),e.ctx.setTextBaseline("top"),e.ctx.setFillStyle(c),e.ctx.setFontSize(f),e.ctx.setTextAlign(w)};if(P(),o){for(var I="",S=p,q=1,M=0,E=0;E<l.length;E++)if(I+=[l[E]],M+=l[E].match(/[^\x00-\xff]/gi)?2:1,(this.ctx.measureText&&this.ctx.measureText(I).width||M*uni.rpx2px(f))>y){if(q===n&&E!==l.length){I=I.substring(0,I.length-1)+"...",this.ctx.fillText(I,g,S),this.drawTextLine(g,S,T,c,f,I),I="";break}this.ctx.fillText(I,g,S),this.drawTextLine(g,S,T,c,f,I),I="",S+=x,q++}this.ctx.fillText(I,g,S),this.drawTextLine(g,S,T,c,f,I)}else this.ctx.fillText(l,g,p),this.drawTextLine(g,p,T,c,f,l);C&&this.drawText((0,r.default)({},t,{left:g-.3,top:p,bolder:!1,textDecoration:"none"}))},drawTextLine:function(t,e,i,n,r,a){"underline"===i?this.drawRect({background:n,top:e+1.2*r,left:t-1,width:this.ctx.measureText(a).width+2,height:1}):"line-through"===i&&this.drawRect({background:n,top:e+.6*r,left:t-1,width:this.ctx.measureText(a).width+2,height:1})},drawRect:function(t){var e=t.background,i=t.top,n=void 0===i?0:i,r=t.left,a=void 0===r?0:r,o=t.width,s=void 0===o?0:o,c=t.height,d=void 0===c?0:c;this.ctx.save(),this.ctx.setFillStyle(e),t.radius?(this._drawRadiusRect(t),this.ctx.fill()):(this.ctx.setFillStyle(e),this.ctx.fillRect(a,n,s,d)),this.ctx.restore()},getImageInfo:function(e){var i=this;return new Promise((function(n,r){if(i.cache[e])n(i.cache[e]);else{var a=new RegExp(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/);if(a.test(e))uni.getImageInfo({src:e,fail:function(t){r(new Error("getImageInfo fail"))},complete:function(i){if(t.log(i),"getImageInfo:ok"===i.errMsg){var r={url:e,originWidth:i.width,originHeight:i.height,localPath:i.path};n(r)}else n(new Error("getImageInfo fail"))}});else{var o={url:e,originWidth:0,originHeight:0,localPath:e};n(o)}}}))},saveImageToLocal:function(){var t=this,e=this.width,i=this.height;uni.canvasToTempFilePath({x:0,y:0,width:e,height:i,canvasId:"canvasdrawer",success:function(n){"canvasToTempFilePath:ok"===n.errMsg&&(t.isPainting=!1,t.imageList=[],t.tempFileList=[],t.$emit("success",{width:e,height:i,path:n.tempFilePath}))}},this)}}};e.default=o}).call(this,i("5a52")["default"])},c214:function(t,e,i){"use strict";(function(t){var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var r=n(i("c964")),a=n(i("f3f3")),o=i("2f62"),s={components:{},data:function(){return{dataList:[{balance:0}],info:{title:"",inviteCode:"加载中..."},qrcode:this.util.baseDomain(),postersData:{},posterImg:{path:""}}},computed:(0,a.default)({},(0,o.mapState)(["app","user"])),onLoad:function(e){this.loadData(),t("log",this.qrcode," at pages/user_invite/invite/share.vue:136")},onShow:function(){this.info.title},methods:{qrR:function(e){t("log",e," at pages/user_invite/invite/share.vue:146")},navTo:function(t){uni.navigateTo({url:t})},loadData:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user_score/score/my",method:"get"});case 2:return i=e.sent,200==i.code&&(t.dataList=i.data.dataList),e.next=6,t.util.request({url:"/v1/user_invite/invite/code",method:"get"});case 6:n=e.sent,200==n.code&&(t.info=n.data.info,t.qrcode=t.util.baseDomain()+"?inviteCode="+t.info.inviteCode);case 8:case"end":return e.stop()}}),e)})))()},share:function(){this.util.showToast({title:"海报生成中...",icon:"loading",duration:1e4}),this.initPostersConfig(),this.$refs.poster.createPosters(this.postersData)},realShare:function(){this.$refs.share.togglePopup({systemShare:!0,type:2,title:this.info.title,summary:this.info.title,imageUrl:this.posterImg.path,imageWidth:"600rpx",imageHeight:"881rpx",href:this.qrcode,success:function(e){t("log","success:"+JSON.stringify(e)," at pages/user_invite/invite/share.vue:191")},fail:function(e){t("log","fail:"+JSON.stringify(e)," at pages/user_invite/invite/share.vue:194")}})},initPostersConfig:function(){var t={clear:!0,width:750,height:1181,background:"#ffffff",views:[{type:"image",width:750,height:1181,top:0,left:0,url:"/static/share.png"},{type:"text",width:400,height:50,left:20,top:680,fontSize:30,lineHeight:40,bolder:!0,breakWord:!0,content:"        ",MaxLineNumber:2},{type:"text",width:400,height:50,left:20,top:690,fontSize:24,lineHeight:40,bolder:!0,breakWord:!0,content:"",color:"#ffffff",MaxLineNumber:2},{type:"text",width:400,left:320,top:1050,fontSize:28,bolder:!0,breakWord:!0,content:this.info.inviteCode,color:"#ffffff",MaxLineNumber:1},{type:"image",width:140,height:140,top:1020,left:470,url:this.$store.state.app.siteInfo.qrcodeApi+this.qrcode},{type:"image",width:90,height:90,top:1050,left:70,radius:50,url:this.util.imageCache(this.user.userInfo.avatar)}]};this.postersData=t},onSuccessCreatePosters:function(e){t("log",e," at pages/user_invite/invite/share.vue:275"),uni.hideToast(),this.posterImg=e,this.realShare()},onPostersError:function(e){t("log",e," at pages/user_invite/invite/share.vue:281")}}};e.default=s}).call(this,i("0de9")["log"])},c6d2:function(t,e,i){"use strict";i.r(e);var n=i("5b9b"),r=i("ac58");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("8944");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"3627e284",null,!1,n["a"],o);e["default"]=c.exports},cd13:function(t,e,i){"use strict";i.r(e);var n=i("9c32"),r=i("46c0");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("4700");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7a4aea04",null,!1,n["a"],o);e["default"]=c.exports},d457:function(t,e,i){var n=i("b06c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("77b9cc3e",n,!0,{sourceMap:!1,shadowMode:!1})},defe:function(t,e,i){"use strict";i.r(e);var n=i("8432"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},e081:function(t,e,i){var n=i("a57d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("71a3a832",n,!0,{sourceMap:!1,shadowMode:!1})},f4af:function(t,e,i){"use strict";i.r(e);var n=i("11ba"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},f508:function(t,e,i){"use strict";i.r(e);var n=i("ba2a"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},f6eb:function(t,e,i){var n=i("7daf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("0cba020f",n,!0,{sourceMap:!1,shadowMode:!1})}}]);