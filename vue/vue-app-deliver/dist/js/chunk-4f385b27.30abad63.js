(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f385b27"],{"4b27":function(t,e,i){"use strict";i("df3c")},ad97:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top-box title"},[i("i",{staticClass:"xyicon xyicon-left1 ts-22 m-r",on:{click:function(e){return t.$router.back(-1)}}}),t._v(" 添加应用分组 ")]),i("div",{staticClass:"box bg-white"},[i("div",{staticClass:"content"},[i("el-form",{staticClass:"m-l-md",attrs:{model:t.form,"label-width":"140px","label-position":"left"}},[i("div",{staticStyle:{color:"#E80000",width:"120px","margin-bottom":"40px"}},[t._v(" *以下均为必填项 ")]),i("el-form-item",{attrs:{label:"分组名称"}},[i("el-input",{attrs:{placeholder:"分组名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"分组描述"}},[i("el-input",{attrs:{placeholder:"分组描述"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1),i("el-divider"),i("div",{staticClass:"content"},[i("div",{staticClass:"m-l-md p-b-md"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(" 提交 ")])],1)])],1)])},a=[],o=i("1da1"),r=(i("96cf"),{data:function(){return{loading:!1,form:{name:"",description:""}}},created:function(){},watch:{},methods:{handleSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,i=t,setTimeout((function(){i.loading=!1}),5e3),e.next=5,t.util.request({url:"/v1/appdist/cate/add",data:t.form,method:"post"});case 5:n=e.sent,"200"==n.code?(t.util.showToast({title:n.msg,icon:"success",duration:2e3}),t.$router.back()):t.util.showToast({title:n.msg,icon:"loading",duration:3e3}),t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()}}}),s=r,c=(i("4b27"),i("2877")),l=Object(c["a"])(s,n,a,!1,null,"5defcc9e",null);e["default"]=l.exports},df3c:function(t,e,i){}}]);