(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-adf69cd8"],{"0080":function(t,e,i){},"017e":function(t,e,i){},"78e4":function(t,e,i){"use strict";i("c975"),i("a434"),i("b0c0"),i("d3b7"),i("96cf");var a=i("1da1"),s={name:"Upload",props:{item:{},header:{type:Object,default:function(){return{cloudId:0,eid:0,token:""}}},value:{type:[Array,String],default:function(){return[]}},uploadType:{type:String,default:"image"},img:{type:Object,default:function(){return{value:"",title:""}}}},data:function(){return{uploadName:"file",headerData:{},fileList:[],limit:1,listType:"",dialogImageUrl:"",dialogVisible:!1}},created:function(){switch(this.uploadType){case"image":this.listType="picture",""==this.value?this.fileList=[]:this.fileList=[{name:this.item.name,url:this.value}];break;case"images":this.listType="picture-card","string"==typeof this.value?this.fileList=[]:this.fileList=this.value}this.headerData={Authorization:this.header.token?this.header.token:this.util.getToken()},this.item.extra.limit?this.limit=this.item.extra.limit:"images"==this.uploadType&&(this.limit=30)},beforeMount:function(){},methods:{handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleExceed:function(){this.$message.warning("最多上传"+this.limit+"个文件")},handleSuccess:function(t,e,i){"upload_oss"==this.item.extra.driver||"oss"==this.item.extra.driver?e.url=this.item.extra.data.host+"/"+this.item.extra.data.key:200==t.code?e.url=t.data.url:this.$message({message:t.msg,type:"warning"}),this.fileList=i,1==this.limit?this.$emit("input",i[0].url):this.$emit("input",i)},handleRemove:function(t){this.fileList.splice(this.fileList.indexOf(t),1),1==this.limit?this.$emit("input",""):this.$emit("input",this.fileList),this.fileList},handleBeforeUpload:function(t){var e=this,i=this.item.extra.maxSize?this.item.extra.maxSize:512;return t.size/1024>i?(this.$message({message:"上传文件大小不能超过 "+i+"KB!",type:"warning"}),!1):"upload_oss"==e.item.extra.driver||"oss"==e.item.extra.driver?new Promise(function(){var i=Object(a.a)(regeneratorRuntime.mark((function i(a,s){var r;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.util.request({url:e.item.extra.signUrl||"/v1/upload_oss/index/sign",method:"get",header:{CloudId:e.header.cloudId,Eid:e.header.eid}});case 2:200==(r=i.sent).code?(e.item.extra.action=r.data.params.host,r.data.params.key=r.data.params.key+t.name,e.item.extra.data=r.data.params,a()):e.$message({message:r.msg,type:"warning"});case 4:case"end":return i.stop()}}),i)})));return function(t,e){return i.apply(this,arguments)}}()):void 0}},watch:{}},r=(i("d96d"),i("2877")),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-box",class:t.fileList.length>=t.limit?"hidden-up-btn":""},[i("el-upload",{directives:[{name:"show",rawName:"v-show",value:""==t.value||"images"==t.uploadType,expression:"value == '' || uploadType == 'images'"}],ref:"upload_"+t.item.name,class:"upload-"+t.uploadType,attrs:{drag:!0,"show-file-list":!0,"list-type":t.listType,headers:t.headerData,limit:t.limit,"file-list":t.fileList,"on-preview":t.handlePictureCardPreview,"on-success":t.handleSuccess,"on-exceed":t.handleExceed,"on-remove":t.handleRemove,"before-upload":t.handleBeforeUpload,data:t.item.extra.data,name:t.uploadName,type:"drag",action:t.item.extra.action}},[t.fileList.length>=t.limit&&1==t.limit&&"image"==t.uploadType?[i("img",{attrs:{src:t.fileList[0].url}})]:["image"==t.uploadType?[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])]),i("div",{staticClass:"font-sm text-gray lh-1-2"},[t._v(" "+t._s(t.item.extra.tip?t.item.extra.tip:"只能上传jpg/png文件，且不超过"+t.item.extra.maxSize+"KB")+" ")])]:"images"==t.uploadType?[i("i",{staticClass:"el-icon-plus"})]:t._e()],i("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl}})])],2),t.img.title&&""!==t.img.title?i("div",{staticStyle:{"text-align":"center"}},[t._v(" "+t._s(t.img.title)+" ")]):t._e()],1)}),[],!1,null,"b9c01f12",null);e.a=l.exports},"98b4":function(t,e,i){"use strict";var a=i("017e");i.n(a).a},a434:function(t,e,i){"use strict";var a=i("23e7"),s=i("23cb"),r=i("a691"),l=i("50c4"),o=i("7b0b"),n=i("65f0"),c=i("8418"),d=i("1dde"),u=i("ae40"),m=d("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min;a({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var i,a,d,u,m,f,h=o(this),g=l(h.length),x=s(t,g),b=arguments.length;if(0===b?i=a=0:a=1===b?(i=0,g-x):(i=b-2,v(p(r(e),0),g-x)),9007199254740991<g+i-a)throw TypeError("Maximum allowed length exceeded");for(d=n(h,a),u=0;u<a;u++)(m=x+u)in h&&c(d,u,h[m]);if(i<(d.length=a)){for(u=x;u<g-a;u++)f=u+i,(m=u+a)in h?h[f]=h[m]:delete h[f];for(u=g;g-a+i<u;u--)delete h[u-1]}else if(a<i)for(u=g-a;x<u;u--)f=u+i-1,(m=u+a-1)in h?h[f]=h[m]:delete h[f];for(u=0;u<i;u++)h[u+x]=arguments[u+2];return h.length=g-a+i,d}})},b69d:function(t,e,i){"use strict";i.r(e),i("96cf");var a=i("1da1"),s={components:{},props:{certData:{type:Object,default:{}}},data:function(){return{loading:!1,form:{country:86,certCate:1,certType:1,certNo:"",realName:""},rule:{certNo:[{required:!0,message:"请填写证件号码",trigger:"blur"}],realName:[{required:!0,message:"请填写真实姓名",trigger:"blur"}]}}},created:function(){this.certData.certNo&&(this.form.certNo=this.certData.certNo,this.form.realName=this.certData.realName)},methods:{handleSubmit:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/user_cert/level/level1",data:t.form,method:t.certData.certNo?"put":"post"});case 5:"200"==(a=e.sent).code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.$emit("success")):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}},r=i("2877"),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[i("el-form-item",{attrs:{prop:"country",label:"国籍"}},[i("el-select",{staticClass:"full",attrs:{value:"86",placeholder:"请选择"}},[i("el-option",{attrs:{label:"中国",value:"86"}})],1)],1),i("el-form-item",{attrs:{prop:"certNo",label:"身份证号码"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请填写身份证号码"},model:{value:t.form.certNo,callback:function(e){t.$set(t.form,"certNo",e)},expression:"form.certNo"}})],1),i("el-form-item",{attrs:{prop:"realName",label:"姓名"}},[i("el-input",{attrs:{size:"large",type:"text",prefix:"ios-at-outline",placeholder:"请填写真实姓名"},model:{value:t.form.realName,callback:function(e){t.$set(t.form,"realName",e)},expression:"form.realName"}})],1),i("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v(" 提交 ")])],1)}),[],!1,null,"3f9ed252",null).exports,o=i("78e4"),n={components:{"xy-upload-image":o.a},props:{certData:{type:Object,default:{}}},data:function(){return{loading:!1,form:{certPhoto:"",certPhotoInverse:"",certPhotoHand:""},item:{extra:{limit:1,maxSize:500,driver:"upload_oss",background:"#ffffff"}},rule:(i=[{required:!0,message:"请上传手持证件照片",trigger:"blur"}],(e="certPhotoInverse")in(t={certPhoto:[{required:!0,message:"请上传证件正面照片",trigger:"blur"}],certPhotoInverse:[{required:!0,message:"请上传证件反面照片",trigger:"blur"}]})?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t)};var t,e,i},created:function(){this.certData.certPhoto&&(this.form.certPhoto=this.certData.certPhoto,this.form.certPhotoInverse=this.certData.certPhotoInverse,this.form.certPhotoHand=this.certData.certPhotoHand)},methods:{handleSubmit:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.certPhoto||t.util.showToast({title:"请上传证件正面照片",icon:"loading",duration:3e3}),t.form.certPhotoInverse||t.util.showToast({title:"请上传证件反面照片",icon:"loading",duration:3e3}),t.form.certPhotoInverse||t.util.showToast({title:"请上传手持证件照片",icon:"loading",duration:3e3}),t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),e.next=8,t.util.request({url:"/v1/user_cert/level/level2",data:t.form,method:t.certData.certPhoto?"put":"post"});case 8:"200"==(a=e.sent).code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.$emit("success")):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 11:case"end":return e.stop()}}),e)})))()}}},c=(i("c4e7"),Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[i("div",{staticClass:"text-left tw5 ts-18 m-b"},[t._v("本人身份证正面照片")]),i("div",{staticClass:"flex space-between flex-alignCenter m-b"},[i("div",[i("xy-upload-image",{attrs:{item:t.item},model:{value:t.form.certPhoto,callback:function(e){t.$set(t.form,"certPhoto",e)},expression:"form.certPhoto"}})],1),i("div",{staticClass:"text-left ts-14",staticStyle:{width:"450px"}},[t._v(" * 证件需在有效期内；"),i("br"),t._v(" * 照片文字清晰可见；"),i("br"),t._v(" * 图片格式支持jpg、png格式。 ")])]),i("div",{staticClass:"text-left tw5 ts-18 m-b"},[t._v("本人身份证背面照片")]),i("div",{staticClass:"flex space-between flex-alignCenter m-b"},[i("div",[i("xy-upload-image",{staticStyle:{width:"15px"},attrs:{item:t.item},model:{value:t.form.certPhotoInverse,callback:function(e){t.$set(t.form,"certPhotoInverse",e)},expression:"form.certPhotoInverse"}})],1),i("div",{staticClass:"text-left ts-14",staticStyle:{width:"450px"}},[t._v(" * 证件需在有效期内；"),i("br"),t._v(" * 照片文字清晰可见；"),i("br"),t._v(" * 图片格式支持jpg、png格式。 ")])]),i("div",{staticClass:"text-left tw5 ts-18 m-b"},[t._v("手持本人身份证正面照和个人签字")]),i("div",{staticClass:"flex space-between flex-alignCenter m-b"},[i("div",[i("xy-upload-image",{staticStyle:{width:"15px"},attrs:{item:t.item},model:{value:t.form.certPhotoHand,callback:function(e){t.$set(t.form,"certPhotoHand",e)},expression:"form.certPhotoHand"}})],1),i("div",{staticClass:"text-left ts-14",staticStyle:{width:"450px"}},[t._v(" * 请您上传一张手持“本人证件正面”和“个人签字”的照片，个人签字的内容需要包含“OTC”和当前日期，请确保照片的内容清晰可见。"),i("br"),t._v(" * 人像清晰 * 证件号码清晰 * 手写文字清晰 * 手写文字包含当前信息 ")])]),i("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v(" 提交 ")])],1)}),[],!1,null,"45f939f2",null).exports),d={components:{"xy-upload-image":o.a},props:{certData:{type:Object,default:{}}},data:function(){return{loading:!1,form:{certVideo:""},item:{extra:{limit:1,maxSize:500,driver:"upload_oss",background:"#ffffff"}}}},created:function(){this.certData.certVideo&&(this.form.certVideo=this.certData.certVideo)},methods:{handleSubmit:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.form.certVideo||t.util.showToast({title:"请上传认证视频",icon:"loading",duration:3e3}),t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),e.next=6,t.util.request({url:"/v1/user_cert/level/level3",data:t.form,method:t.certData.certVideo?"put":"post"});case 6:"200"==(a=e.sent).code?(t.util.showToast({title:a.msg,icon:"success",duration:2e3}),t.$emit("success")):t.util.showToast({title:a.msg,icon:"loading",duration:3e3}),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()}}},u=(i("ef6f"),{components:{level1:l,level2:c,level3:Object(r.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[i("div",{staticClass:"text-left tw5 ts-18 m-b"},[t._v("手持本人身份证正面照和个人签字及朗读拍摄视频")]),i("div",{staticClass:"flex space-between flex-alignCenter m-b"},[i("div",[i("xy-upload-image",{attrs:{item:t.item},model:{value:t.form.certPhoto,callback:function(e){t.$set(t.form,"certPhoto",e)},expression:"form.certPhoto"}})],1),i("div",{staticClass:"text-left ts-14",staticStyle:{width:"450px"}},[t._v(" * 请您左手持身份证右手持白纸（内容写OTC及日期）录制视频，视频长度10-40秒大小20M以内，期间请朗读出如下文字："),i("br"),t._v(" * 本人身份真实有效，对在本平台上的所有转账、交易都承担所有责任，坚决维护平台秩序，遵守国家法律法规。 ")])]),i("el-button",{staticClass:"full submit-btn",attrs:{size:"large",loading:t.loading,type:"primary"},on:{click:function(e){return t.handleSubmit("form")}}},[t._v(" 提交 ")])],1)}),[],!1,null,"44b7316a",null).exports},data:function(){return{level2Show:!1,level3Show:!1,info:{reviewState:1,level:0}}},created:function(){this.loadData()},methods:{loadData:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.util.request({url:"/v1/user_cert/cert/my",data:{},method:"get"});case 2:200==(i=e.sent).code?t.info=i.data.info:t.util.showToast({title:i.msg,icon:"loading",duration:3e3});case 4:case"end":return e.stop()}}),e)})))()}}}),m=(i("98b4"),Object(r.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("xy-header"),i("div",{staticClass:"main"},[i("xy-subnav",{scopedSlots:t._u([{key:"left",fn:function(){return[i("div",{staticClass:"left",staticStyle:{height:"80px"}},[i("span",{staticClass:"ts-14 text-gray"},[t._v("个人设置")]),i("span",{staticClass:"ts-14"},[t._v(">")]),i("span",{staticClass:"ts-14"},[t._v("身份认证")])])]},proxy:!0},{key:"right",fn:function(){return[i("div",{staticClass:"right"},[i("el-steps",{staticClass:"kyc-step",attrs:{active:t.info.level}},[i("el-step",{attrs:{status:"finish",title:"KYC1",description:"累计限额 5,000 CNY"}}),i("el-step",{attrs:{status:t.info.level<2?"wait":"finish",title:"KYC2",description:"累计限额 100万 CNY"}}),i("el-step",{attrs:{status:3!=t.info.level?"wait":"finish",title:"KYC3",description:"累计限额 100万 CNY 以上"}})],1)],1)]},proxy:!0}])}),i("div",{staticClass:"container p-t"},[i("el-card",{staticClass:"cert-box",attrs:{shadow:"never"}},[i("div",[i("div",{staticClass:"title"},[t._v("身份认证")]),i("div",[i("span",{staticClass:"text-error m-r-xs"},[t._v("*")]),i("span",{staticClass:"description"},[t._v("为了您的资金安全，需验证您的身份才可进行交易；认证信息一经验证不能修改，请务必如实填写;")])]),i("div",[i("span",{staticClass:"text-error m-r-xs"},[t._v("*")]),i("span",{staticClass:"description"},[t._v("请确保使用的是真实身份，平台会加密存储您的身份信息并自动审核，即便是平台工作人员也无法查看，请放心填写。")])])]),i("el-divider"),i("div",{staticClass:"cert-content flex space-center full text-center"},[0==t.info.reviewState?[i("div",[i("div",{staticClass:"text-center"},[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc-wait.png"}})]),i("div",{staticClass:"m-t-md m-b tw6 ts-20 text-center"},[t._v(" 审核中... ")]),i("div",[i("span",[t._v("认证的结果尽快反馈，请及时查看")])])])]:1==t.info.reviewState?[0==t.info.level?i("div",[i("level1",{staticStyle:{width:"400px"},on:{success:t.loadData}})],1):t._e(),1==t.info.level?i("div",[t.level2Show?i("level2",{staticStyle:{width:"750px"}}):i("div",[i("div",{staticClass:"text-center"},[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc.png"}})]),i("div",{staticClass:"m-t-md m-b-lg tw6 ts-20 text-center"},[t._v(" 恭喜您完成KYC 1 认证 ")]),i("div",[i("el-button",{staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:function(e){t.level2Show=!0}}},[t._v("进行KYC 2 认证")])],1)])],1):t._e(),2==t.info.level?i("div",[t.level3Show?i("level3",{staticStyle:{width:"750px"}}):i("div",[i("div",{staticClass:"text-center"},[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc.png"}})]),i("div",{staticClass:"m-t-md m-b-lg tw6 ts-20 text-center"},[t._v(" 恭喜您完成KYC 2 认证 ")]),i("div",[i("el-button",{staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:function(e){t.level3Show=!0}}},[t._v("进行KYC 3 认证")])],1)])],1):t._e()]:-1==t.info.reviewState?[i("div",[i("div",{staticClass:"text-center"},[i("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/ijry/sbase/image/kyc-error.png"}})]),i("div",{staticClass:"m-t-md m-b tw6 ts-20 text-center"},[t._v(" 身份认证审核未通过 ")]),i("div",[0==t.info.level?i("div",[t.level1Show?i("level1",{staticStyle:{width:"750px"},attrs:{certData:t.info}}):i("div",[t._v(" 请您填写真实姓名和正确的证件号码 "),i("div",[i("el-button",{staticClass:"m-t",staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:function(e){t.level1Show=!0}}},[t._v("修改资料")])],1)])],1):t._e(),1==t.info.level?i("div",[t.level2Show?i("level2",{staticStyle:{width:"750px"},attrs:{certData:t.info}}):i("div",[t._v(" 请您上传一张身份证正面照和个人签字的照片，个人签字的内容和当前日期，请确保照片和个人签字的内容清晰可见 "),i("div",[i("el-button",{staticClass:"m-t",staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:function(e){t.level2Show=!0}}},[t._v("修改资料")])],1)])],1):t._e(),2==t.info.level?i("div",[t._v(" 请下载APP进行KYC3认证 ")]):t._e()])])]:t._e()],2)],1)],1)],1),i("xy-footer")],1)}),[],!1,null,"4d21b207",null));e.default=m.exports},c4e7:function(t,e,i){"use strict";var a=i("d54d");i.n(a).a},c697:function(t,e,i){},d54d:function(t,e,i){},d96d:function(t,e,i){"use strict";var a=i("0080");i.n(a).a},ef6f:function(t,e,i){"use strict";var a=i("c697");i.n(a).a}}]);