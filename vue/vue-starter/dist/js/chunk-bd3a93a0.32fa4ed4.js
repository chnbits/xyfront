(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd3a93a0"],{3895:function(t,e,s){"use strict";var a=s("3e6f"),i=s.n(a);i.a},"3e6f":function(t,e,s){},b16a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("xy-header"),s("div",{staticClass:"main"},[s("div",{staticClass:"banner"},[s("div",{staticClass:"container"},[t._m(0),s("el-card",{staticClass:"invite-box m-t-lg p-a-md",attrs:{shadow:"never"}},[s("div",{staticClass:"tw6 ts-22"},[t._v("立刻邀请")]),s("div",{staticClass:"text-gray ts-14 m-t-xs"},[t._v("通过分享您的专属链接邀请您的朋友。您的专属邀请码可用于截屏分享和面对面分享。")]),s("div",{staticClass:"text-gray ts-14 m-t-md"},[t._v("专属邀请码")]),s("div",{staticClass:"tw6 ts-22 m-t-xs"},[s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.info.inviteCode,expression:"info.inviteCode",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"copy"},[t._v(" "+t._s(t.info.inviteCode)+" "),s("i",{staticClass:"el-icon-copy-document ts-16"})])]),s("div",{staticClass:"tw6 ts-22 m-t-md m-b-xs"},[t._v("专属邀请链接")]),s("div",{staticClass:"text-gray ts-14"},[s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.qrcodeUrl,expression:"qrcodeUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"copy"},[t._v(" "+t._s(t.qrcodeUrl)+" "),s("i",{staticClass:"el-icon-copy-document ts-14"})])]),s("div",{staticClass:"m-t-lg"},[s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.inviteWords+t.qrcodeUrl,expression:"inviteWords + qrcodeUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copySuccess,expression:"copySuccess",arg:"success"}],staticClass:"copy"},[s("el-button",{staticClass:"invite-btn full",attrs:{tyoe:"primary"}},[t._v("立即邀请")])],1)])]),s("el-card",{staticClass:"invite-box m-t-lg p-a-md",attrs:{shadow:"never"}},t._l(t.invitedList,(function(e,a){return s("div",{key:a},[t._v(" 手机号："+t._s(e.mobile?e.mobile:"***********")+" ")])})),0)],1)])]),s("xy-footer")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-t-lg"},[s("div",{staticClass:"title ts-30 tw6"},[t._v("邀请好友")]),s("p",{staticClass:"info"},[t._v(" 邀请系统升级，邀请好友共享最高平台惊喜和福利，和好友一起加入吧。 ")])])}],c=(s("96cf"),s("1da1")),r={components:{},data:function(){return{qrcodeUrl:"",inviteWords:"注册有惊喜，大礼送不停，快来一起加入吧，",info:{title:"",inviteCode:"----"},dataList:[],invitedList:[]}},created:function(){this.loadData()},watch:{},methods:{copySuccess:function(){alert("拷贝成功")},loadData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user_invite/invite/code",method:"get"});case 2:return s=e.sent,200==s.code&&(t.info=s.data.info,t.qrcodeUrl=t.util.baseDomain()+"/user/register?inviteCode="+t.info.inviteCode),e.next=6,t.util.request({url:"/v1/user_invite/invite/my",method:"get"});case 6:a=e.sent,200==a.code&&(t.invitedList=a.data.dataList);case 8:case"end":return e.stop()}}),e)})))()}}},n=r,o=(s("3895"),s("2877")),d=Object(o["a"])(n,a,i,!1,null,"7aa8c140",null);e["default"]=d.exports}}]);