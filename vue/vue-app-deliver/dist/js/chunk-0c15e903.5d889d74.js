(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c15e903"],{"49c4":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-tab-pane",{attrs:{label:"应用概述",name:"info"}}),a("el-tab-pane",{attrs:{label:"版本管理",name:"version"}}),a("el-tab-pane",{attrs:{label:"渠道",name:"channel"}}),a("el-tab-pane",{attrs:{label:"统计",name:"statistics"}}),a("el-tab-pane",{attrs:{label:"应用合并",name:"merge"}}),a("el-tab-pane",{attrs:{label:"反馈",name:"feedback"}}),a("el-tab-pane",{attrs:{label:"成员管理",name:"member"}}),a("el-tab-pane",{attrs:{label:"证书信息",name:"certinfo"}}),a("el-tab-pane",{attrs:{label:"编辑应用",name:"edit"}}),a("el-tab-pane",{attrs:{label:"设置",name:"settings"}})],1)},i=[],r=(a("a9e3"),a("b0c0"),{props:{id:{type:[Number,String],default:0},value:{type:String,default:"info"}},data:function(){return{}},created:function(){},watch:{},methods:{tabClick:function(t,e){switch(t.name){case"info":this.$router.push({path:"/appdist/app/info/"+this.id});break;case"version":this.$router.push({path:"/appdist/version/lists/"+this.id});break;case"channel":this.$router.push({path:"/appdist/channel/my/"+this.id});break;case"statistics":this.$router.push({path:"/appdist/statistics/"+this.id});break;case"merge":this.$router.push({path:"/appdist/app/merge/"+this.id});break;case"feedback":this.$router.push({path:"/appdist/feedback/lists/"+this.id});break;case"member":this.$router.push({path:"/appdist/member/lists/"+this.id});break;case"homepage":this.$router.push({path:"/appdist/app/homepage/"+this.id});break;case"certinfo":this.$router.push({path:"/appdist/app/certinfo/"+this.id});break;case"edit":this.$router.push({path:"/appdist/settings/edit/"+this.id});break;case"settings":this.$router.push({path:"/appdist/settings/index/"+this.id});break;default:break}}}}),n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,"ccdc4f84",null);e["a"]=l.exports},a434:function(t,e,a){"use strict";var s=a("23e7"),i=a("23cb"),r=a("a691"),n=a("50c4"),o=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),p=d("splice"),u=Math.max,f=Math.min,m=9007199254740991,h="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!p},{splice:function(t,e){var a,s,d,p,b,v,y=o(this),g=n(y.length),k=i(t,g),_=arguments.length;if(0===_?a=s=0:1===_?(a=0,s=g-k):(a=_-2,s=f(u(r(e),0),g-k)),g+a-s>m)throw TypeError(h);for(d=l(y,s),p=0;p<s;p++)b=k+p,b in y&&c(d,p,y[b]);if(d.length=s,a<s){for(p=k;p<g-s;p++)b=p+s,v=p+a,b in y?y[v]=y[b]:delete y[v];for(p=g;p>g-s+a;p--)delete y[p-1]}else if(a>s)for(p=g-s;p>k;p--)b=p+s-1,v=p+a-1,b in y?y[v]=y[b]:delete y[v];for(p=0;p<a;p++)y[p+k]=arguments[p+2];return y.length=g-s+a,d}})},b3d4:function(t,e,a){},d724:function(t,e,a){"use strict";a("b3d4")},fb40:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top-box"},[a("info-tab",{attrs:{id:t.id,value:"channel"}})],1),a("div",{staticClass:"box bg-white"},[a("div",{staticClass:"title p-l"},[a("i",{staticClass:"cursor-pointer xyicon xyicon-left1 ts-22 m-r",on:{click:function(e){return t.$router.back(-1)}}}),t._v(" 添加渠道 ")]),a("div",{staticClass:"content"},[a("el-form",{staticClass:"m-l-md",attrs:{model:t.form,"label-width":"140px","label-position":"left"}},[a("el-form-item",{attrs:{label:""},scopedSlots:t._u([{key:"label",fn:function(){return[a("span",{staticClass:"reddot"},[t._v("*")]),a("span",[t._v("渠道名称")])]},proxy:!0}])},[a("el-input",{attrs:{placeholder:"渠道名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:""},scopedSlots:t._u([{key:"label",fn:function(){return[a("span",{staticClass:"reddot"},[t._v("*")]),a("span",[t._v("渠道地址后缀")])]},proxy:!0}])},[a("el-input",{attrs:{placeholder:"请输入页面地址后缀"},model:{value:t.form.key,callback:function(e){t.$set(t.form,"key",e)},expression:"form.key"}},[a("span",{staticStyle:{background:"#EDF3F7",color:"#484848"},attrs:{slot:"prepend"},slot:"prepend"},[t._v(" "+t._s(t.util.baseDomain())+"/ ")])])],1),a("el-form-item",{attrs:{label:""},scopedSlots:t._u([{key:"label",fn:function(){return[a("span",{staticClass:"reddot"},[t._v("*")]),a("span",[t._v("版本是否同步")]),a("el-popover",{attrs:{placement:"top",title:"什么是版本同步",width:"400",trigger:"click","popper-class":"black-popover",content:"版本开启自动同步后，应用上传新版本后渠道下载版本自动更新。如不同步，则需指定渠道下载版本。通过API接口可直接将新版本上传到指定渠道。"}},[a("i",{staticClass:"xyicon xyicon-help-o text-primary cursor-pointer m-l-xs",attrs:{slot:"reference"},slot:"reference"})])]},proxy:!0}])},[a("el-radio",{attrs:{label:1},model:{value:t.form.isSync,callback:function(e){t.$set(t.form,"isSync",e)},expression:"form.isSync"}},[t._v("是")]),a("el-radio",{attrs:{label:2},model:{value:t.form.isSync,callback:function(e){t.$set(t.form,"isSync",e)},expression:"form.isSync"}},[t._v("否")])],1),a("el-row",{attrs:{gutter:30}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"m-b"},[a("span",{staticClass:"reddot"},[t._v("*")]),t._v("选择渠道版本")]),a("el-table",{ref:"table1",staticClass:"version-list",attrs:{data:t.versionListNotSelected,"cell-style":{padding:"20px 0"}}},[a("el-table-column",{attrs:{align:"center",label:"名称",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+"  "+t._s(e.row.version)+"  ("+t._s(e.row.versionCode)+") ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"类型",prop:"platform"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.platform?a("span",{staticClass:"platform platform-ios"},[a("i",{staticClass:"xyicon xyicon-apple"}),t._v(" iOS ")]):t._e(),2==e.row.platform?a("span",{staticClass:"platform platform-android"},[a("i",{staticClass:"xyicon xyicon-android"}),t._v(" Android ")]):t._e()]}}])}),a("el-table-column",{attrs:{align:"center",prop:"updateTime",label:"更新时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatTime")(e.row.updateTime))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"cursor-pointer xyicon xyicon-plus bg-primary text-white ts-13",staticStyle:{"border-radius":"50%",padding:"2px"},on:{click:function(a){return t.add(e.row.id)}}})]}}])})],1)],1),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"m-b"},[t._v("渠道应用列表：")]),a("el-table",{ref:"table2",staticClass:"version-list",attrs:{data:t.versionListSelected,"cell-style":{padding:"20px 0"}}},[a("el-table-column",{attrs:{align:"center",label:"名称",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+"  "+t._s(e.row.version)+"  ("+t._s(e.row.versionCode)+") ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"类型",prop:"platform"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.platform?a("span",{staticClass:"platform platform-ios"},[a("i",{staticClass:"xyicon xyicon-apple"}),t._v(" iOS ")]):t._e(),2==e.row.platform?a("span",{staticClass:"platform platform-android"},[a("i",{staticClass:"xyicon xyicon-android"}),t._v(" Android ")]):t._e()]}}])}),a("el-table-column",{attrs:{align:"center",prop:"updateTime",label:"更新时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatTime")(e.row.updateTime))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"cursor-pointer text-white",staticStyle:{background:"#2C2C2C",width:"18px",height:"18px","border-radius":"50%"},on:{click:function(a){return t.del(e.row.id)}}},[a("i",{staticClass:"xyicon xyicon-minus ts-13"})])]}}])})],1)],1)],1)],1)],1),a("div",{staticClass:"content"},[a("div",{staticClass:"m-l-md p-b-md"},[a("el-button",{staticClass:"primary-linear",staticStyle:{width:"116px"},attrs:{type:"primary",size:"meduim",round:""},on:{click:t.handleSubmit}},[t._v(" 保存渠道 ")])],1)])])])},i=[],r=a("1da1"),n=(a("96cf"),a("159b"),a("caad"),a("2532"),a("a434"),a("49c4")),o={components:{InfoTab:n["a"]},data:function(){return{id:0,loading:!1,form:{name:"",key:"",isSync:1,versionIds:[]},versionList:[],versionListNotSelected:[]}},created:function(){this.id=this.$route.params.id,this.loadData()},computed:{versionListSelected:function(){var t=this,e=[],a=[];return this.versionList.forEach((function(s){t.form.versionIds.includes(s.id)?e.push(s):a.push(s)})),this.versionListNotSelected=a,e}},watch:{$route:function(){this.id=this.$route.params.id,this.loadData()}},methods:{add:function(t){this.form.versionIds.push(t)},del:function(t){this.form.versionIds.splice(this.form.versionIds.indexOf(t),1)},loadData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/appdist/channel/edit/"+t.id,data:{},method:"get"});case 2:a=e.sent,200==a.code?(t.form=a.data.info,t.loadVersion()):t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()},handleSubmit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,a=t,setTimeout((function(){a.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/appdist/channel/edit/"+t.id,data:t.form,method:"put"});case 5:s=e.sent,"200"==s.code?(t.util.showToast({title:s.msg,icon:"success",duration:2e3}),t.$router.back()):t.util.showToast({title:s.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},loadVersion:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/appdist/version/lists/"+t.form.appId,data:{},method:"get"});case 2:a=e.sent,200==a.code?t.versionList=a.data.dataList:t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}},l=o,c=(a("d724"),a("2877")),d=Object(c["a"])(l,s,i,!1,null,"46cf3c8a",null);e["default"]=d.exports}}]);