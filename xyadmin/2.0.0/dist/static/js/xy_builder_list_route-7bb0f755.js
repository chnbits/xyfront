import{X as e}from"./xy-builder-list-73749354.js";import t from"./index-67a06cfe.js";import{_ as r}from"./_plugin-vue_export-helper-1b428a4d.js";import"./preload-helper-17f83b6a.js";import"./index-653e326b.js";import"./_commonjsHelpers-fb96ccea.js";import"./button-ad752abb.js";import"./util-f372957a.js";const o={name:"XyBuilderListRoute",components:{XyBuilderList:e,BreadcurmbComp:t},data:()=>({api:""}),beforeMount:function(){this.loadData()},created:function(){},methods:{loadData(){if("dylist"==this.$route.meta.dytype){let t=this.$route.meta.api;if(Object.keys(this.$route.params).length>0)for(var e in this.$route.params)t=t+"/"+this.$route.params[e];if(Object.keys(this.$route.query).length>0){let r="?";for(var e in this.$route.query)r=r+e+"="+this.$route.query[e]+"&";t+=r}this.api=t}},refreshData(){this.$refs.xy_builder.loadData()}},watch:{$route(){}}},i=window.Vue.resolveComponent,a=window.Vue.createVNode,s=window.Vue.openBlock,u=window.Vue.createElementBlock,n={class:"xy-builder-route"};const l=r(o,[["render",function(e,t,r,o,l,p){const d=i("BreadcurmbComp"),h=i("XyBuilderList");return s(),u("div",n,[a(d,{onRefreshPage:p.refreshData},null,8,["onRefreshPage"]),a(h,{api:l.api,ref:"xy_builder",header:e.$route.meta.header,showDev:e.$store.state.app.showDev},null,8,["api","header","showDev"])])}]]);export{l as default};
