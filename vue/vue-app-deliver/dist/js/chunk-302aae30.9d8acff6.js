(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-302aae30"],{"0639":function(e,t,i){"use strict";i("80c2")},"4ab0":function(e,t,i){"use strict";i("76c5")},5115:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-box",class:e.fileList.length>=e.limitNo?"hidden-up-btn":""},[i("el-upload",{ref:"upload_"+e.item.name,class:"upload-"+e.uploadType,attrs:{drag:e.drag,"show-file-list":!0,"list-type":e.listType,headers:e.headerData,limit:e.limitNo,multiple:1!=e.limitNo,"file-list":e.fileList,"on-preview":e.handlePictureCardPreview,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,"on-remove":e.handleRemove,"before-upload":e.handleBeforeUpload,data:e.item.extra.upload?e.item.extra.upload.data:{},name:e.uploadName,action:e.item.extra.action?e.item.extra.action:"","http-request":e.uploadSectionFile}},[e.fileList.length>=e.limitNo&&1==e.limitNo&&"image"==e.uploadType?[i("img",{attrs:{src:e.fileList[0]["url"]}})]:[e.drag?["image"==e.uploadType?[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),i("em",[e._v("点击上传")])]),i("div",{staticClass:"font-sm text-gray lh-1-2"},[e._v(" "+e._s(e.item.extra.tip?e.item.extra.tip:"只能上传"+e.item.extra.format+"文件，且不超过"+e.item.extra.maxSize+"KB")+" ")])]:"images"==e.uploadType?[i("i",{staticClass:"el-icon-plus"})]:e._e()]:[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])]],i("el-dialog",{attrs:{"append-to-body":!0,visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},["image"==e.mediaType?[i("img",{attrs:{width:"100%",src:e.dialogImageUrl}})]:"audio"==e.mediaType?[i("audio",{attrs:{src:e.dialogImageUrl,controls:"controls"}},[e._v(" 您的浏览器不支持 audio 标签。 ")])]:"video"==e.mediaType?[i("video",{attrs:{src:e.dialogImageUrl,controls:"controls",width:"700"}},[e._v(" 您的浏览器不支持 video 标签。 ")])]:e._e()],2)],2),e.img.title&&""!==e.img.title?i("div",{staticStyle:{"text-align":"center"}},[e._v(" "+e._s(e.img.title)+" ")]):e._e()],1)},r=[],s=i("1da1"),l=(i("96cf"),i("a9e3"),i("b0c0"),i("caad"),i("a434"),i("d3b7"),{name:"XyUpload",props:{item:{},header:{type:Object,default:function(){return{cloudId:0,eid:0,token:""}}},value:{type:[Array,String],default:function(){return[]}},drag:{type:Boolean,default:!1},uploadType:{type:String,default:"image"},limit:{type:Number,default:0},img:{type:Object,default:function(){return{value:"",title:""}}}},data:function(){return{uploadName:"file",headerData:{},fileList:[],limitNo:1,listType:"text",dialogImageUrl:"",dialogVisible:!1,mediaType:"image"}},created:function(){switch(this.uploadType){case"image":this.listType="picture",""==this.value?this.fileList=[]:this.fileList=[{name:this.item.name,url:this.value}];break;case"images":this.listType="picture-card","string"==typeof this.value?this.fileList=[]:this.fileList=this.value;break;default:this.listType="text","string"==typeof this.value?this.fileList=[]:this.fileList=this.value;break}this.headerData={Authorization:this.header.token?this.header.token:this.util.getToken()},this.limit?this.limitNo=this.limit:this.item.extra.limit?this.limitNo=this.item.extra.limit:"image"!=this.uploadType&&(this.limitNo=30)},beforeMount:function(){},methods:{getFileType:function(e){var t=e.lastIndexOf(".");return-1!=t?e.substring(t+1,e.length).toLowerCase():""},handlePictureCardPreview:function(e){var t=this.getFileType(e.url).toLowerCase();["jpg","png","bmp","ico","jpeg"].includes(t)?this.mediaType="image":["mp3","wav","ogg","ico","jpeg"].includes(t)?this.mediaType="audio":["mp4","ogg"].includes(t)&&(this.mediaType="video"),this.dialogImageUrl=e.url,this.dialogVisible=!0},handleExceed:function(e,t){this.$message.warning("最多上传"+this.limitNo+"个文件")},handleSuccess:function(e,t,i){var a;200==e.code?(null!==(a=e.data)&&void 0!==a&&a.path&&(t.path=e.data.path),t.url=e.data.url):this.$message({message:e.msg,type:"warning"});if(this.fileList=i,"image"==this.uploadType)this.$emit("input",i[0].url);else{for(var r=[],s=0;s<i.length;s++){var l=i[s];r.push({name:l.name,path:null===l||void 0===l?void 0:l.path,url:l.url,size:l.size})}this.$emit("input",r)}},handleRemove:function(e,t){this.item.extra.disabled?this.$message({message:"只读模式",type:"warning"}):(this.fileList.splice(this.fileList.indexOf(e),1),"image"==this.uploadType?this.$emit("input",""):this.$emit("input",this.fileList),this.fileList)},uploadSectionFile:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var a,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.file,r=t,i.next=4,r.util.uploadFile({driver:r.item.extra.driver||"default",signUrl:r.item.extra.signUrl||"",url:r.item.extra.action||"",header:r.header,file:a,splitePiece:!!r.item.extra.splitePiece&&r.item.extra.splitePiece,mergeUrl:r.item.extra.mergeUrl?r.item.extra.mergeUrl:""});case 4:return i.abrupt("return",i.sent);case 5:case"end":return i.stop()}}),i)})))()},handleBeforeUpload:function(e){var t=this,i=this.item.extra.maxSize?this.item.extra.maxSize:512;return new Promise(function(){var a=Object(s["a"])(regeneratorRuntime.mark((function a(r,s){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.size/1024>i&&(t.$message({message:"上传文件大小不能超过 "+i+"KB!",type:"warning"}),s()),r();case 2:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}())}},watch:{}}),o=l,n=(i("4ab0"),i("2877")),d=Object(n["a"])(o,a,r,!1,null,"e05a03f2",null);t["a"]=d.exports},"68eb":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"box"},[i("h4",{staticClass:"addTitle"},[e._v("创建工单")]),i("form",{staticClass:"addOrderForm",attrs:{action:""}},[i("div",[e._m(0),i("div",{staticClass:"right"},[i("div",[i("el-radio",{attrs:{label:1},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},[e._v("一般")]),i("el-radio",{attrs:{label:2},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},[e._v("重要")])],1),i("p",{staticClass:"firstP"},[e._v("选择优先级为一般：业务咨询或普通业务受影响，需要协助")])])]),i("div",[e._m(1),i("div",{staticClass:"right"},[i("div",[i("el-select",{staticClass:"typeSelect",attrs:{placeholder:"请选择"},model:{value:e.form.cate,callback:function(t){e.$set(e.form,"cate",t)},expression:"form.cate"}},e._l(e.cateList,(function(e,t){return i("el-option",{key:t,attrs:{label:e,value:t}})})),1)],1)])]),i("div",[e._m(2),i("div",{staticClass:"right "},[i("div",[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"}],attrs:{placeholder:"若提交密码或AccessKeys等信息，请通过'机密信息'方式添加，并在问题处理完毕后及时修改。"},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}})])])]),i("div",[e._m(3),i("div",{staticClass:"right"},[i("div",[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.secretInfo,expression:"form.secretInfo"}],attrs:{placeholder:"请在此填写账户、密码等机密信息，提交后机密信息将做加密处理。"},domProps:{value:e.form.secretInfo},on:{input:function(t){t.target.composing||e.$set(e.form,"secretInfo",t.target.value)}}})])])]),i("div",[e._m(4),i("div",{staticClass:"right"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.tel,expression:"form.tel"}],attrs:{type:"text"},domProps:{value:e.form.tel},on:{input:function(t){t.target.composing||e.$set(e.form,"tel",t.target.value)}}})]),i("p",[e._v("默认为您的绑定手机号，紧急情况时乐帆云工程师会与您联系，请您填写正确的手机号。")])])]),i("div",[e._m(5),i("div",{staticClass:"right"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.tel2,expression:"form.tel2"}],attrs:{type:"text"},domProps:{value:e.form.tel2},on:{input:function(t){t.target.composing||e.$set(e.form,"tel2",t.target.value)}}})]),i("p",[e._v("默认为您的绑定手机号，紧急情况时乐帆云工程师会与您联系，请您填写正确的手机号。")])])]),i("div",[e._m(6),i("div",{staticClass:"right"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"text",placeholder:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})])])]),i("div",[e._m(7),i("div",{staticClass:"right"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email2,expression:"form.email2"}],attrs:{type:"text",placeholder:""},domProps:{value:e.form.email2},on:{input:function(t){t.target.composing||e.$set(e.form,"email2",t.target.value)}}})])])]),i("div",[e._m(8),i("div",{staticClass:"right"},[i("XyUpload",{attrs:{uploadType:"files",drag:!1,item:e.item,header:{}},model:{value:e.form.files,callback:function(t){e.$set(e.form,"files",t)},expression:"form.files"}})],1)]),i("el-button",{staticClass:"m-b-md",attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("提交")])],1)])])},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left"},[i("span",[e._v("*")]),i("label",{staticStyle:{"margin-left":"5px"},attrs:{for:""}},[e._v("优先级:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left middleSpan"},[i("span",[e._v("*")]),i("label",{attrs:{for:""}},[e._v("选择类别:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left middleSpan"},[i("span",[e._v("*")]),i("label",{attrs:{for:""}},[e._v("问题描述:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left"},[i("label",{attrs:{for:""}},[e._v("机密信息:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left middleSpan"},[i("span",[e._v("*")]),i("label",{attrs:{for:""}},[e._v("手机号:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left"},[i("label",{attrs:{for:""}},[e._v("接收短信提醒:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left"},[i("label",{attrs:{for:""}},[e._v("邮箱:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left"},[i("label",{attrs:{for:""}},[e._v("抄送邮箱:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left"},[i("label",{attrs:{for:""}},[e._v("上传附件:")])])}],s=i("1da1"),l=(i("96cf"),i("5115")),o={name:"WorkSheetAdd",props:[],components:{XyUpload:l["a"]},data:function(){var e;return{loading:!1,item:{name:"files",extra:{driver:this.$store.state.app.uploadDriver,signUrl:"",action:"",tip:"",format:"jpg,png,bmp",maxSize:2048}},form:{level:1,cate:"",description:"",tel:null===(e=this.$store.state.user.userInfo.mobile)||void 0===e?void 0:e.identifier,tel2:"",email:"",email2:"",files:[]},cateList:{}}},created:function(){this.loadlists()},methods:{handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,i=e,setTimeout((function(){i.loading=!1}),5e3),t.next=5,e.util.request({url:"/v1/worksheet/worksheet/add",data:e.form,method:"post"});case 5:a=t.sent,"200"==a.code?(e.util.showToast({title:a.msg,icon:"success",duration:2e3}),e.$router.back()):e.util.showToast({title:a.msg,icon:"loading",duration:3e3}),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},loadlists:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.util.request({url:"/v1/worksheet/worksheet/add",method:"get"});case 3:i=t.sent,200==i.code?e.cateList=i.data.cateList:e.util.showToast({title:i.msg,icon:"loading",duration:3e3}),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()}}},n=o,d=(i("0639"),i("2877")),c=Object(d["a"])(n,a,r,!1,null,"cdc611e6",null);t["default"]=c.exports},"76c5":function(e,t,i){},"80c2":function(e,t,i){},a434:function(e,t,i){"use strict";var a=i("23e7"),r=i("23cb"),s=i("a691"),l=i("50c4"),o=i("7b0b"),n=i("65f0"),d=i("8418"),c=i("1dde"),m=c("splice"),u=Math.max,p=Math.min,f=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var i,a,c,m,h,g,_=o(this),x=l(_.length),b=r(e,x),y=arguments.length;if(0===y?i=a=0:1===y?(i=0,a=x-b):(i=y-2,a=p(u(s(t),0),x-b)),x+i-a>f)throw TypeError(v);for(c=n(_,a),m=0;m<a;m++)h=b+m,h in _&&d(c,m,_[h]);if(c.length=a,i<a){for(m=b;m<x-a;m++)h=m+a,g=m+i,h in _?_[g]=_[h]:delete _[g];for(m=x;m>x-a+i;m--)delete _[m-1]}else if(i>a)for(m=x-a;m>b;m--)h=m+a-1,g=m+i-1,h in _?_[g]=_[h]:delete _[g];for(m=0;m<i;m++)_[m+b]=arguments[m+2];return _.length=x-a+i,c}})}}]);