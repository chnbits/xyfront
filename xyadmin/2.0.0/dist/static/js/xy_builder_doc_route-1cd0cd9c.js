import{X as e}from"./xy-builder-doc-de211183.js";import r from"./index-67a06cfe.js";import{_ as t}from"./_plugin-vue_export-helper-1b428a4d.js";const o={name:"XyBuilderDocRoute",components:{XyBuilderDoc:e,BreadcurmbComp:r},data:()=>({api:""}),created:function(){},beforeMount:function(){this.loadData()},methods:{loadData(){if("dydoc"==this.$route.meta.dytype){let r=this.$route.meta.api;if(Object.keys(this.$route.params).length>0)for(var e in this.$route.params)r=r+"/"+this.$route.params[e];if(Object.keys(this.$route.query).length>0){let t="?";for(var e in this.$route.query)t=t+e+"="+this.$route.query[e]+"&";r+=t}this.api=r}},refreshData(){this.$refs.xy_builder.loadData()}},watch:{$route(){}}},a=window.Vue.resolveComponent,i=window.Vue.createVNode,u=window.Vue.openBlock,s=window.Vue.createElementBlock,n={class:"xy-builder-route"};const d=t(o,[["render",function(e,r,t,o,d,l){const c=a("BreadcurmbComp"),h=a("XyBuilderDoc");return u(),s("div",n,[i(c,{onRefreshPage:l.refreshData},null,8,["onRefreshPage"]),i(h,{api:d.api,ref:"xy_builder",header:e.$route.meta.header},null,8,["api","header"])])}]]);export{d as default};
