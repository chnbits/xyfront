import{_ as e,X as t}from"../index-d1e7aad9.js";import{B as r}from"./index-96aeed59.js";const a={name:"XyBuilderColRoute",components:{XyBuilderCol:t,BreadcurmbComp:r},data:()=>({api:""}),beforeMount:function(){this.loadData()},created:function(){},methods:{loadData(){if("dycol"==this.$route.meta.dytype){let t=this.$route.meta.api;if(Object.keys(this.$route.params).length>0)for(var e in this.$route.params)t=t+"/"+this.$route.params[e];if(Object.keys(this.$route.query).length>0){let r="?";for(var e in this.$route.query)r=r+e+"="+this.$route.query[e]+"&";t+=r}this.api=t}},refreshData(){this.$refs.xy_builder.loadData()}},watch:{$route(){}}},o=window.Vue.resolveComponent,i=window.Vue.createVNode,s=window.Vue.openBlock,u=window.Vue.createElementBlock,d={class:"xy-builder-route"};var n=e(a,[["render",function(e,t,r,a,n,l){const h=o("BreadcurmbComp"),p=o("XyBuilderCol");return s(),u("div",d,[i(h,{onRefreshPage:l.refreshData},null,8,["onRefreshPage"]),i(p,{api:n.api,ref:"xy_builder",header:e.$route.meta.header,showDev:e.$store.state.app.showDev},null,8,["api","header","showDev"])])}]]);export{n as default};
