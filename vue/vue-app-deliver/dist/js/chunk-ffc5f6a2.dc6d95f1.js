(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ffc5f6a2"],{"329c":function(t,e,a){"use strict";a("a45f")},"43d9":function(t,e,a){},"45f0":function(t,e,a){"use strict";a("43d9")},"49c4":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("el-tab-pane",{attrs:{label:"应用概述",name:"info"}}),a("el-tab-pane",{attrs:{label:"版本管理",name:"version"}}),a("el-tab-pane",{attrs:{label:"渠道",name:"channel"}}),a("el-tab-pane",{attrs:{label:"统计",name:"statistics"}}),a("el-tab-pane",{attrs:{label:"应用合并",name:"merge"}}),a("el-tab-pane",{attrs:{label:"反馈",name:"feedback"}}),a("el-tab-pane",{attrs:{label:"成员管理",name:"member"}}),a("el-tab-pane",{attrs:{label:"证书信息",name:"certinfo"}}),a("el-tab-pane",{attrs:{label:"编辑应用",name:"edit"}}),a("el-tab-pane",{attrs:{label:"设置",name:"settings"}})],1)},i=[],r=(a("a9e3"),a("b0c0"),{props:{id:{type:[Number,String],default:0},value:{type:String,default:"info"}},data:function(){return{}},created:function(){},watch:{},methods:{tabClick:function(t,e){switch(t.name){case"info":this.$router.push({path:"/appdist/app/info/"+this.id});break;case"version":this.$router.push({path:"/appdist/version/lists/"+this.id});break;case"channel":this.$router.push({path:"/appdist/channel/my/"+this.id});break;case"statistics":this.$router.push({path:"/appdist/statistics/"+this.id});break;case"merge":this.$router.push({path:"/appdist/app/merge/"+this.id});break;case"feedback":this.$router.push({path:"/appdist/feedback/lists/"+this.id});break;case"member":this.$router.push({path:"/appdist/member/lists/"+this.id});break;case"homepage":this.$router.push({path:"/appdist/app/homepage/"+this.id});break;case"certinfo":this.$router.push({path:"/appdist/app/certinfo/"+this.id});break;case"edit":this.$router.push({path:"/appdist/settings/edit/"+this.id});break;case"settings":this.$router.push({path:"/appdist/settings/index/"+this.id});break;default:break}}}}),n=r,l=a("2877"),o=Object(l["a"])(n,s,i,!1,null,"ccdc4f84",null);e["a"]=o.exports},"70fa":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA1CAYAAAAK0RhzAAABlElEQVRoge2a627DIAyFTUJoM2nv/5b7VWldLnRxNbTAkqg4IMDjU9OmEkIcMPYpjXgsAEOa1AOIhVx/GWcNwzQvl4aUC9m1DXSyhYtsQAhB6sMSNi3CvsY5yODOgBOMl4AOLl1L6sMS9jlMz0+csU3E8wXmfacJ7DURG3fmdt3cjAPFBRG25r1XpA5DYISd2Q7/I3nkQohoyVLY7h73gG0oVmGlwVbYqeRhLJjWaX00FnFMOGv7RRaGgm73McjAzoITfFUS3tSvHHIoolHOicHxuGRhuf2M08542CaPKqw02ApLZoK3jC6m7VAkE4Z1xxX3cbsH659tKFZhpVGFlQZbYdHSPabyq/Lr/uh0Ck+pzXnjK0StY76nTUftJ8/izTYUq7DSiLbH0NAeeT9MFNUrErBWrG0EzPphzfbWzJaANWIlaX+y5Yi1Yv1PQfWtGTnyJ3n0nm4hV8rbPC+SbHkw3GOGfDJhPoaWAttQrMJKoworDbIw6jNOsXCNBVmYOdNoiI/dhQQnWTpGXdQnTAuDrbBvjQl6o23WKWYAAAAASUVORK5CYII="},a434:function(t,e,a){"use strict";var s=a("23e7"),i=a("23cb"),r=a("a691"),n=a("50c4"),l=a("7b0b"),o=a("65f0"),c=a("8418"),d=a("1dde"),m=d("splice"),u=Math.max,p=Math.min,f=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var a,s,d,m,h,v,g=l(this),k=n(g.length),w=i(t,k),y=arguments.length;if(0===y?a=s=0:1===y?(a=0,s=k-w):(a=y-2,s=p(u(r(e),0),k-w)),k+a-s>f)throw TypeError(b);for(d=o(g,s),m=0;m<s;m++)h=w+m,h in g&&c(d,m,g[h]);if(d.length=s,a<s){for(m=w;m<k-s;m++)h=m+s,v=m+a,h in g?g[v]=g[h]:delete g[v];for(m=k;m>k-s+a;m--)delete g[m-1]}else if(a>s)for(m=k-s;m>w;m--)h=m+s-1,v=m+a-1,h in g?g[v]=g[h]:delete g[v];for(m=0;m<a;m++)g[m+w]=arguments[m+2];return g.length=k-s+a,d}})},a45f:function(t,e,a){},b35b:function(t,e,a){},c1d5:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"top-box"},[s("info-tab",{attrs:{id:t.appId,value:"member"}})],1),s("div",{staticClass:"box"},[s("div",{staticClass:"content",staticStyle:{"padding-bottom":"10px","padding-top":"26px"}},[s("el-button",{staticClass:"primary-linear",attrs:{type:"primary",size:"mini"},on:{click:function(e){t.addtest=!0}}},[t._v("添加测试成员")]),s("el-button",{staticClass:"primary-linear",attrs:{type:"primary",size:"mini"},on:{click:function(e){t.adddev=!0}}},[t._v("添加开发成员")])],1),s("div",{staticClass:"content"},[s("el-table",{ref:"mytable",attrs:{data:t.dataListCates,"tooltip-effect":"dark","row-class-name":t.tableRowClassName}},[s("template",{slot:"empty"},[s("div",{staticClass:"lh-1 p-t-lg p-b-lg"},[s("img",{staticClass:"m-b-sm",attrs:{src:a("70fa"),width:"66",alt:"empty"}}),s("div",{staticClass:"ts-16"},[s("span",[t._v("暂无成员")])])])]),s("el-table-column",{attrs:{type:"selection",width:"100px",align:"left"}}),s("el-table-column",{attrs:{align:"left",prop:"name",label:"成员"}}),s("el-table-column",{attrs:{align:"center",prop:"email",label:"邮箱"}}),s("el-table-column",{attrs:{align:"center",prop:"mobile",label:"手机"}}),s("el-table-column",{attrs:{align:"center",prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.state?s("span",{staticStyle:{color:"#E72222"}},[t._v("等待接受")]):1==e.row.state?s("span",{staticStyle:{color:"#E72222"}},[t._v("已接受")]):-1==e.row.state?s("span",{staticStyle:{color:"#E72222"}},[t._v("已拒绝")]):t._e()]}}])}),s("el-table-column",{attrs:{align:"center",prop:"role",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.role?s("span",[t._v("测试人员")]):2==e.row.role?s("span",[t._v("开发人员")]):t._e()]}}])}),s("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return s("ul",{staticClass:"flex space-center"},[s("li",{staticClass:"m-r",on:{click:function(a){return t.deleteOne(e.row.id)}}},[s("span",{staticClass:"xyicon xyicon-trash"})]),s("li",{on:{click:function(a){return t.refreshInfo(e.row.id)}}},[s("span",{staticClass:"xyicon xyicon-refresh"})])])}}])})],2),s("div",{staticClass:"m-t-md flex flex-end"},[s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.deleteBatch}},[t._v("删除选中成员")])],1)],1)]),s("el-dialog",{attrs:{title:"添加开发人员",visible:t.adddev,width:"800px"},on:{"update:visible":function(e){t.adddev=e}}},[s("add-dev",{attrs:{appId:t.appId}}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1),s("el-dialog",{attrs:{title:"添加测试人员",visible:t.addtest,width:"800px"},on:{"update:visible":function(e){t.addtest=e}}},[s("add-test",{attrs:{appId:t.appId}}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)],1)},i=[],r=a("1da1"),n=(a("96cf"),a("49c4")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",[a("el-form",{attrs:{model:t.form}},[a("div",{staticClass:"title m-b-sm"},[a("span",{staticStyle:{color:"#FF0000"}},[t._v("*")]),t._v(" 用户邮箱 ")]),t._l(t.form.members,(function(e,s){return a("el-form-item",{key:s,attrs:{label:""}},[a("el-input",{attrs:{placeholder:"请输入用户邮箱",size:"medium"},model:{value:t.form.members[s].email,callback:function(e){t.$set(t.form.members[s],"email",e)},expression:"form.members[key].email"}},[a("template",{slot:"append"},[a("i",{staticClass:"cursor-pointer",on:{click:function(e){return t.delOne(s)}}},[t._v("X")])])],2)],1)})),a("div",[a("span",{staticClass:"text-primary ts-12 cursor-pointer",on:{click:t.addOne}},[t._v("继续添加")])]),a("div",{staticClass:"flex flex-end"},[a("el-button",{staticClass:"primary-linear",staticStyle:{"border-radius":"5px"},attrs:{type:"primary",size:"small"},on:{click:t.handleSubmit}},[t._v("添加成员")])],1)],2)],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-tip"},[a("div",[t._v(" 开发者可以管理应用，包括编辑应用设置、查看应用概述、查看统计数据、用户反馈数据、更新应用版本，但不能删除应用。 在应用有版本更新等事件发生时，APP所属者以及被添加的开发者可以收到相关通知。 ")]),a("div",{staticClass:"m-t"},[t._v(" 注意：被添加开发者、测试者的邮箱必须在乐帆云已经注册实名；被添加成员的邮箱会收到邀请邮件，当其点击链接同意后会向其开放权限并发送应用的通知。 ")])])}],c=(a("a9e3"),a("159b"),a("a434"),{name:"AddDev",props:{appId:{type:Number,default:0}},data:function(){return{loading:!1,form:{role:2,members:[{email:""}]}}},created:function(){this.form.appId=this.appId},watch:{},methods:{handleSubmit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form.members.forEach((function(e){e.email||t.util.showToast({title:"请填写邮箱",icon:"loading",duration:3e3})})),t.loading=!0,a=t,setTimeout((function(){a.loading=!1}),5e3),e.next=6,t.util.request({url:"/v1/appdist/cate/addBatch",data:t.form,method:"post"});case 6:s=e.sent,"200"==s.code?t.util.showToast({title:s.msg,icon:"success",duration:2e3}):t.util.showToast({title:s.msg,icon:"loading",duration:3e3}),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},addOne:function(){this.form.members.push({email:""})},delOne:function(t){this.form.members.length<=1||this.form.members.splice(t,1)}}}),d=c,m=(a("45f0"),a("2877")),u=Object(m["a"])(d,l,o,!1,null,"11ab0d8a",null),p=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",[a("el-form",{attrs:{model:t.form}},[t._l(t.form.members,(function(e,s){return[a("div",{key:s,staticClass:"m-b"},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"请输入姓名（必填）",size:"medium"},model:{value:t.form.members[s].name,callback:function(e){t.$set(t.form.members[s],"name",e)},expression:"form.members[key].name"}})],1),a("el-form-item",{attrs:{label:"邮箱地址"}},[a("el-input",{attrs:{placeholder:"请输入邮箱地址（选填，邮箱地址和手机号不能同时为空）",size:"medium"},model:{value:t.form.members[s].email,callback:function(e){t.$set(t.form.members[s],"email",e)},expression:"form.members[key].email"}})],1),a("el-form-item",{attrs:{label:" 手机号码"}},[a("el-input",{attrs:{placeholder:"请输入手机号码（选填，邮箱地址和手机号不能同时为空）",size:"medium"},model:{value:t.form.members[s].mobile,callback:function(e){t.$set(t.form.members[s],"mobile",e)},expression:"form.members[key].mobile"}})],1)],1)]})),a("div",[a("span",{staticClass:"text-primary ts-12 cursor-pointer",on:{click:t.addOne}},[t._v("继续添加")])]),a("div",{staticClass:"flex flex-end"},[a("el-button",{staticClass:"primary-linear",staticStyle:{"border-radius":"5px"},attrs:{type:"primary",size:"small"},on:{click:t.handleSubmit}},[t._v("添加成员")])],1)],2)],1)])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-tip"},[a("div",[t._v(" 测试者在应用有版本更新等事件发生时，测试用户可以通过邮件和手机短信收到相关通知。但是测试用户不能进行应用管理操作，只可查看不可更改。 ")]),a("div",{staticClass:"m-t"},[t._v(" 注意：被添加开发者、测试者的邮箱必须在乐帆云已经注册实名；被添加成员的邮箱会收到邀请邮件，当其点击链接同意后会向其开放权限并发送应用的通知。 ")])])}],h=(a("b0c0"),{name:"AddDev",props:{appId:{type:Number,default:0}},data:function(){return{loading:!1,form:{role:1,members:[{name:"",email:"",mobile:""}]}}},created:function(){this.form.appId=this.appId},watch:{},methods:{handleSubmit:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.form.members.forEach((function(e){e.name||t.util.showToast({title:"请填写姓名",icon:"loading",duration:3e3})})),t.loading=!0,a=t,setTimeout((function(){a.loading=!1}),5e3),e.next=6,t.util.request({url:"/v1/appdist/cate/addBatch",data:t.form,method:"post"});case 6:s=e.sent,"200"==s.code?t.util.showToast({title:s.msg,icon:"success",duration:2e3}):t.util.showToast({title:s.msg,icon:"loading",duration:3e3}),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},addOne:function(){this.form.members.push({name:"",email:"",mobile:""})},delOne:function(t){this.form.members.length<=1||this.form.members.splice(t,1)}}}),v=h,g=(a("f2ca"),Object(m["a"])(v,f,b,!1,null,"20ec3a7f",null)),k=g.exports,w={components:{InfoTab:n["a"],AddDev:p,AddTest:k},data:function(){return{appId:0,loading:!1,keyword:"",adddev:!1,addtest:!1,dataListCates:[],dataPageCates:{total:0,page:1,limit:10}}},created:function(){this.appId=this.$route.params.appId,this.loadlists()},watch:{$route:function(){this.appId=this.$route.params.appId,this.loadlists()}},methods:{loadlists:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.util.request({url:"/v1/appdist/member/lists/"+t.appId,data:{keyword:t.keyword,page:t.dataPageCates.page,limit:t.dataPageCates.limit},method:"get"});case 3:a=e.sent,200==a.code?(t.dataListCates=a.data.dataList,t.dataPageCates=a.data.dataPage):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},deleteBatch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/appdist/member/delete",data:{id:ids},method:"delete"});case 2:a=e.sent,200==a.code?(t.loadlists(),t.util.showToast({title:a.msg,icon:"loading",duration:2e3})):t.util.showToast({title:a.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}},y=w,x=(a("329c"),Object(m["a"])(y,s,i,!1,null,"9d30f24c",null));e["default"]=x.exports},f2ca:function(t,e,a){"use strict";a("b35b")}}]);