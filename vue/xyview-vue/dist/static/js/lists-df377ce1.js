var t=(t,e,a)=>new Promise(((i,l)=>{var n=t=>{try{s(a.next(t))}catch(e){l(e)}},o=t=>{try{s(a.throw(t))}catch(e){l(e)}},s=t=>t.done?i(t.value):Promise.resolve(t.value).then(n,o);s((a=a.apply(t,e)).next())}));import{_ as e}from"../../index.js";const a={data:()=>({loading:!1,tabs:[{value:0,title:"全部"},{value:2,title:"系统消息"},{value:3,title:"公告消息"}],dataList:[],dataPage:{total:0,page:0,limit:10}}),created:function(){this.loadData()},watch:{},methods:{loadData(){return t(this,null,(function*(){this.loading=!0;let t=yield this.$util.request({url:"/v1/msg/msg/my",data:{page:this.dataPage.page,limit:this.dataPage.limit},method:"get"});200==t.code?(this.dataList=t.data.dataList,this.dataPage=t.data.dataPage):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3}),this.loading=!1}))},handleSizeChange(t){this.dataPage.limit=t,this.loadData()},handleCurrentChange(t){this.dataPage.page=t,this.loadData()},getSelectedIds(){const t=this.$refs.mytable.selection;if(0==t.length)return this.$util.showToast({title:"请选择消息",icon:"loading",duration:3e3}),!1;let e="";return t.forEach((t=>{e=e+","+t.id})),e},readBatch(){return t(this,null,(function*(){this.$confirm("此操作将删除选中消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>t(this,null,(function*(){let t=this.getSelectedIds();if(!t)return!1;let e=yield this.$util.request({url:"/v1/msg/msg/readBatch",data:{ids:t},method:"put"});200==e.code?(this.loadData(),this.$util.showToast({title:e.msg,icon:"loading",duration:2e3})):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})})))).catch((()=>{}))}))},deleteBatch(){return t(this,null,(function*(){this.$confirm("此操作将删除选中消息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>t(this,null,(function*(){let t=this.getSelectedIds();if(!t)return!1;let e=yield this.$util.request({url:"/v1/msg/msg/deleteBatch",data:{ids:t},method:"delete"});200==e.code?(this.loadData(),this.$util.showToast({title:e.msg,icon:"loading",duration:2e3})):this.$util.showToast({title:e.msg,icon:"loading",duration:3e3})})))).catch((()=>{}))}))},readAll(){return t(this,null,(function*(){this.$confirm("此操作将所有消息标记为已读, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>t(this,null,(function*(){let t=yield this.$util.request({url:"/v1/msg/msg/readAll",method:"put"});200==t.code?(this.loadData(),this.$util.showToast({title:t.msg,icon:"loading",duration:2e3})):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3})})))).catch((()=>{}))}))},deleteAll(){return t(this,null,(function*(){this.$confirm("此操作将删除所有消息记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>t(this,null,(function*(){let t=yield this.$util.request({url:"/v1/msg/msg/deleteAll",method:"delete"});200==t.code?(this.loadData(),this.$util.showToast({title:t.msg,icon:"loading",duration:2e3})):this.$util.showToast({title:t.msg,icon:"loading",duration:3e3})})))).catch((()=>{}))}))}}},i=window.Vue.createTextVNode,l=window.Vue.resolveComponent,n=window.Vue.withCtx,o=window.Vue.createVNode,s=window.Vue.createElementVNode,d=window.Vue.openBlock,u=window.Vue.createElementBlock,r=window.Vue.createCommentVNode,c=window.Vue.toDisplayString,h=window.Vue.pushScopeId,g=window.Vue.popScopeId,m={class:"msg-msg-lists bg-white p-t p-l"},p={class:"action-list m-b"},w={class:"content-tabl p-b"},f=(t=>(h("data-v-b85384e1"),t=t(),g(),t))((()=>s("div",{class:"lh-1 p-t-lg p-b-lg"},[s("div",{class:"ts-16 m-t-sm",style:{color:"#A5A5A5"}},[s("span",null,"暂无消息")])],-1))),y={key:0},b={key:1},x={key:0,class:"newRed"},C=["onClick"],v={class:"flex flex-start"};const $=e(a,[["render",function(t,e,a,h,g,$){const T=l("el-button"),k=l("el-skeleton"),B=l("el-table-column"),V=l("el-table"),z=l("el-pagination");return d(),u("div",m,[s("div",p,[o(T,{class:"m-b-sm",text:"",bg:"",type:"default",size:"default",onClick:$.readBatch},{default:n((()=>[i("批量已读")])),_:1},8,["onClick"]),o(T,{class:"m-b-sm",text:"",bg:"",type:"default",size:"default",onClick:$.deleteBatch},{default:n((()=>[i("批量删除")])),_:1},8,["onClick"]),o(T,{class:"m-b-sm",text:"",bg:"",type:"danger",size:"default",onClick:$.readAll},{default:n((()=>[i("全部已读")])),_:1},8,["onClick"]),o(T,{class:"m-b-sm",text:"",bg:"",type:"danger",size:"default",onClick:$.deleteAll},{default:n((()=>[i("全部删除")])),_:1},8,["onClick"])]),s("div",w,[o(V,{ref:"mytable",data:g.dataList,"tooltip-effect":"dark"},{empty:n((()=>[o(k,{class:"text-left",loading:g.loading,rows:4,animated:""},{default:n((()=>[f])),_:1},8,["loading"])])),default:n((()=>[o(B,{type:"selection",width:"55"}),o(B,{prop:"cate",width:"100px",label:"类别","show-overflow-tooltip":""},{default:n((t=>[2==t.row.cate?(d(),u("span",y,"系统消息")):r("",!0),3==t.row.cate?(d(),u("span",b,"公告消息")):r("",!0)])),_:1}),o(B,{label:"标题",minWidth:"250px"},{default:n((e=>[0==e.row.isRead?(d(),u("span",x,"·")):r("",!0),s("span",{class:"cursor-pointer",onClick:a=>t.$router.push({path:"/msg/msg/info/"+e.row.id})},c(e.row.title),9,C)])),_:1}),o(B,{prop:"createTime",label:"发送时间",width:"200px"},{default:n((e=>[i(c(t.$util.timeFormat(e.row.createTime)),1)])),_:1})])),_:1},8,["data"]),s("div",v,[o(z,{class:"m-t-md",size:"default",onSizeChange:$.handleSizeChange,onCurrentChange:$.handleCurrentChange,"current-page":g.dataPage.page,"onUpdate:current-page":e[0]||(e[0]=t=>g.dataPage.page=t),background:"","page-sizes":[10,20,30,50],"page-size":g.dataPage.limit,"onUpdate:page-size":e[1]||(e[1]=t=>g.dataPage.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:g.dataPage.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])])])])}],["__scopeId","data-v-b85384e1"]]);export{$ as default};