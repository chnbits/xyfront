import{_ as A}from"../../index.js";const t=(0,window.Vue.defineComponent)({setup:()=>({}),data:()=>({current:0,dataList:[{name:"常用",children:[{name:"源码",children:[{name:"GitHub",url:"https://www.github.com/"},{name:"码云",url:"https://gitee.com/"},{name:"Coding",icon:"https://help-assets.codehub.cn/enterprise/guanwang/favicon.ico",url:"https://coding.net/"},{name:"腾讯工蜂",url:"https://git.code.tencent.com/"}]},{name:"社区",children:[{name:"开源中国",url:"https://oschina.net/"},{name:"掘金",url:"https://juejin.cn/"},{name:"CSDN",url:"https://csdn.net/"},{name:"V2EX",url:"https://v2ex.com/"}]},{name:"后端框架",children:[{name:"UiAdmin",url:"https://uiadmin.net/"},{name:"ThinkPHP6",icon:"https://www.kancloud.cn/favicon.ico",url:"https://www.kancloud.cn/manual/thinkphp6_0/1037481/"},{name:"ThinkPHP3.2",icon:"https://www.kancloud.cn/favicon.ico",url:"https://www.kancloud.cn/manual/thinkphp/1678"},{name:"Laravel9",icon:"https://cdn.learnku.com//uploads/communities/WtC3cPLHzMbKRSZnagU9.png!/both/44x44",url:"https://learnku.com/docs/laravel/9.x/releases/12197#e408ae"},{name:"Workerman",icon:"/favicon.ico",url:"https://www.workerman.net/doc"},{name:"Hpyerf",icon:"//hyperf.wiki/2.0/favicon.ico",url:"https://hyperf.wiki/2.1/#/"},{name:"SpringBoot",icon:"https://start.spring.io/images/icon-48x48.png",url:"https://start.spring.io/"},{name:".NET6",icon:"https://docs.microsoft.com/favicon.ico",url:"https://docs.microsoft.com/zh-cn/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio-code"}]},{name:"前端框架",children:[{name:"Vue3",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://v3.cn.vuejs.org/"},{name:"Vue2",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://cn.vuejs.org/"},{name:"uni-app",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788",url:"https://uniapp.dcloud.io/"},{name:"微信小程序",icon:"https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",url:"https://developers.weixin.qq.com/miniprogram/dev/framework/"},{name:"Flutter",icon:"https://docs.flutter.dev/assets/images/shared/brand/flutter/icon/64.png",url:"https://docs.flutter.dev/get-started/install"},{name:"react",icon:"https://react.docschina.org/favicon.ico",url:"https://react.docschina.org/docs/getting-started.html"},{name:"Electron",icon:"https://www.electronjs.org/assets/img/favicon.ico",url:"https://www.electronjs.org/docs/latest"}]},{name:"插件/库",children:[{name:"TailwindCss",icon:"https://tailwindcss.com/favicons/favicon-32x32.png?v=3",url:"https://tailwindcss.com/docs/installation"},{name:"ElementPlus",icon:"https://element-plus.gitee.io/images/element-plus-logo-small.svg",url:"https://element-plus.gitee.io/zh-CN/guide/design.html"},{name:"ElementUI",icon:"https://element.eleme.cn/favicon.ico",url:"https://element.eleme.cn/#/zh-CN"},{name:"vue-amap",icon:"https://v3.cn.vuejs.org/logo.png",url:"https://vue-amap.guyixi.cn/zh-cn/introduction/init.html#%E5%AE%8C%E6%95%B4%E5%AF%BC%E5%85%A5"},{name:"limeui",icon:"https://limeui.qcoon.cn/favicon.ico",url:"https://limeui.qcoon.cn/#/overview"},{name:"swiper",url:"https://www.swiper.com.cn/"},{name:"echarts",icon:"https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png?_v_=20200710_1",url:"https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts"},{name:"swiper",url:"https://www.swiper.com.cn/"},{name:"tinymce",icon:"https://www.tiny.cloud/favicon-32x32.png",url:"http://tinymce.ax-z.cn/"},{name:"photo-sphere-viewer",icon:"https://photo-sphere-viewer.js.org/favicon.png",url:"https://photo-sphere-viewer.js.org/guide/config.html#advanced-options"},{name:"MybatisPlus",icon:"https://baomidou.com/img/favicon.ico",url:"https://baomidou.com/"},{name:"hutool",icon:"https://www.hutool.cn/favicon.ico",url:"https://www.hutool.cn/docs/index.html#/"}]},{name:"UI相关",children:[{name:"iconfont",icon:"//img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico",url:"https://www.iconfont.cn/"},{name:"蓝湖",icon:"//lhcdn.lanhuapp.com/web/static/favicon.ico?v=2",url:"https://lanhuapp.com/web/#/item"},{name:"MasterGo",icon:"https://static.mastergo.com/static/favicon/favicon-32x32-new.png",url:"https://mastergo.com/files/home"},{name:"在线PS",url:"https://ps.gaoding.com/"},{name:"流程图",url:"https://www.processon.com/"},{name:"图怪兽",url:"https://818ps.com/"},{name:"花瓣",url:"https://huaban.com/"},{name:"渐变色",icon:"http://static.maxdpi.com/themes/maxdpi/public/assets/images/favicon.png?v=1.0.2",url:"http://www.maxdpi.com/gradients.html"},{name:"字由",url:"https://www.hellofont.cn/"}]},{name:"工具",children:[{name:"阿里云盘",icon:"https://gw.alicdn.com/imgextra/i3/O1CN01aj9rdD1GS0E8io11t_!!6000000000620-73-tps-16-16.ico",url:"https://www.aliyundrive.com/drive/"},{name:"百度网盘",icon:"https://nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico",url:"https://pan.baidu.com/"},{name:"腾讯文档",icon:"https://docs.idqqimg.com/tim/docs/desktop/favicon.ico",url:"https://docs.qq.com/"},{name:"网络剪切板",icon:"https://ykjtb.com/favicon.ico",url:"https://ykjtb.com/c"},{name:"微信文件助手",icon:"https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",url:"https://filehelper.weixin.qq.com/"},{name:"PDF转换",icon:"http://app.xunjiepdf.com//favicon.ico",url:"http://app.xunjiepdf.com/pdf2word"},{name:"原版操作系统",url:"https://next.itellyou.cn/"},{name:"U盘启动",icon:"https://www.ventoy.net/favicon.ico",url:"https://www.ventoy.net/cn/download.html"},{name:"MAC软件下载",icon:"https://img.xclient.info/icon/favicon.ico",url:"https://xclient.info/"}]},{name:"工具",children:[{name:"在线工具",url:"https://tool.lu/"},{name:"freessl",icon:"https://freessl.cn/../static/favicon.ico",url:"https://freessl.cn/"},{name:"JAVA代码生成",icon:"https://www.java.com/favicon.ico",url:"http://java.bejson.com/generator/"},{name:"JAVA反向工程网",icon:"https://www.java.com/favicon.ico",url:"http://javare.cn/"}]},{name:"云服务",children:[{name:"uni-cloud",url:"https://unicloud.dcloud.net.cn/"},{name:"阿里云",url:"https://aliyun.com/"},{name:"腾讯云",url:"https://cloud.tencent.com/"},{name:"AWS中国",url:"https://www.amazonaws.cn/"},{name:"七牛云",url:"https://www.qiniu.com/"},{name:"UCloud",url:"https://www.ucloud.cn/"},{name:"青云",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/7932cd8a-f0dc-4ec7-b156-330b3219165b.ico",url:"https://www.qingcloud.com/"},{name:"linode",url:"https://www.linode.com/"},{name:"vultr",icon:"https://www.vultr.com/favicon/favicon-32x32.png?v=1",url:"https://www.vultr.com/"},{name:"hostus",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/af5fe367-bc2d-4932-bb37-e9f56db976b7.png",url:"https://hostus.us/"},{name:"sugarhosts",icon:"https://www.sugarhosts.com/favicon.ico",url:"https://www.sugarhosts.com/zh-cn/"},{name:"digitalocean",icon:"https://www.digitalocean.com/_next/static/media/favicon.594d6067.ico",url:"https://www.digitalocean.com/?refcode=581c348bae32"},{name:"mailgun",icon:"data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AWh08xZmc/IUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0dP8LZ23xjWZr8etma/D/Zmvw/2Zs8epma/GRZnPyFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABma/UyZ2vw3WZs8epnbfGBaGvyTGdu8k9nbfCIZ2vx6WZs8epobfUxAAAAAAAAAAAAAAAAAAAAAAAAAAB0dP8LZ2vw3Wdr8LxtbfMVanHxJGds8Ghma/FwanHxJGxs9RpnbPCuaG3xNgAAAAAAAAAAAAAAAAAAAAAAAAAAZ23xj2dr8eltbfMVZmvyZGZs8flmbPHtZmzx7WZr8fpnbfJNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgID/AmZs8e1mbPF/Z27xJWZs8flna/GD////AYCA/wJmbPKHZ2zx+Gds8ctmbPHmZmvyXwAAAAAAAAAAAAAAAGZw9Rlma/D/Z27xSmZr8WtmbPHq////AWZr8IxnbfCIgID/Amdr8O5mbPDNZ2zwnmZs8fl0dP8LAAAAAAAAAABmcPUZZmvw/2ls8UlobfFsZ2vx6f///wFnbfGPZ2zwi4CA/wJmbPHtZ2zwaGdt8k1ma/D/bW3zFQAAAAAAAAAAgID/AmZs8e1na/F+a2vyJmZr8fpmbPF/////Af///wFna/GDZmzx+WZt8CNmbPGCZmvx6////wEAAAAAAAAAAAAAAABma/GRZmzx6Gtr8hNobfBnZmvx+mZs8epmbPHqZmzx+WZr8mRtbfMVZmzx6mdt8Y0AAAAAAAAAAAAAAAAAAAAAaoD/DGdr8N9nbPG6a2vyE2tr8iZobfFsZmvxa2du8SVtbfMVZ2vwvGZs8dx0dP8LAAAAAAAAAAAAAAAAAAAAAAAAAABnbPA0Z2vw32Zs8ehna/F+aWzxSWdu8UpmbPF/Zmzx6mdr8N1obfUxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGqA/wxma/GRZmzx7WZr8P9ma/D/Z2zx7Gdt8Y90dP8LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICA/wJmcPUZZnD1GYCA/wIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAPx/AADwDwAA4AcAAMAHAADAHwAAgAMAAIABAACAAQAAgAEAAMADAADAAwAA4AcAAPAPAAD8PwAA//8AAA==",url:"https://www.mailgun.com/"}]},{name:"众包接单",children:[{name:"码市",url:"https://codemart.com/"},{name:"开源众包",icon:"https://zb.oschina.net/static/images/favicon.ico",url:"https://zb.oschina.net/projects/list.html"},{name:"upwork",url:"https://www.upwork.com/"},{name:"解放号",url:"http://www.jfh.com/"},{name:"智城",icon:"http://m.taskcity.com/assets/taskcity-e9b9211ba34efd28e0ca304ccebc91e8efe7f00625881de82382ec3cd6f2af5c.ico",url:"http://m.taskcity.com/projects"}]},{name:"站长工具",children:[{name:"谷歌广告",icon:"https://www.google.cn/favicon.ico",url:"https://www.google.com/adsense/"},{name:"谷歌统计",icon:"https://www.google.cn/favicon.ico",url:"https://analytics.google.com/"},{name:"百度搜索资源平台",icon:"https://ziyuan.baidu.com/favicon.ico",url:"https://ziyuan.baidu.com/site/index#/"},{name:"百度统计",url:"https://tongji.baidu.com/"},{name:"百度联盟广告",icon:"https://ziyuan.baidu.com/favicon.ico",url:"https://union.baidu.com/"}]},{name:"源码",children:[{name:"cloudreve网盘",url:"https://cloudreve.org/"}]},{name:"人工智能",children:[{name:"tensorflow",icon:"https://www.gstatic.cn/devrel-devsite/prod/v4f31343fb66c313963fb827fd8707d06297a75be3454a20b6b9fa7235969aeb8/tensorflow/images/favicon.png",url:"https://tensorflow.google.cn/install"}]},{name:"摸鱼",tip:"温馨提示：适当摸鱼有利于身心健康，提高工作效率，过度摸鱼可能会造成工作受到影响，本站不承担任何责任，但会表示人道主义同情。",children:[{name:"二次元老婆生成器",url:"https://make.girls.moe/"},{name:"营销号文章生成器",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/3df893d5-6d05-4a4b-88a7-f96a4bdbf8f7.png",url:"https://api.tzih.top/yxh/"},{name:"一秒成为黑客",icon:"https://pranx.com/favicon.ico",url:"https://pranx.com/hacker/"},{name:"摸万物",url:"https://benisland.neocities.org/petpet/"},{name:"这张照片不存在",icon:"https://thispersondoesnotexist.com/favicon.png",url:"https://thispersondoesnotexist.com/"},{name:"斗图生成器",icon:"https://www.diydoutu.com/image/ico.png",url:"https://www.diydoutu.com/diy/gif"},{name:"诺基亚图片生成器",icon:"https://zzkia.noddl.me:8020/favicon.png",url:"https://zzkia.noddl.me:8020/"},{name:"在线钢琴",icon:"https://www.autopiano.cn/favicon.ico",url:"https://www.autopiano.cn/"},{name:"在线小游戏",icon:"https://a.poki.com/icons/fav-512.png",url:"https://poki.com/"},{name:"小霸王其乐无穷",icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f12e1180-fce8-465f-a4cd-9f2da88ca0e6/3df893d5-6d05-4a4b-88a7-f96a4bdbf8f7.png",url:"https://www.yikm.net/"},{name:"模拟空间站",url:"https://iss-sim.spacex.com/"},{name:"CPU世界",url:"https://www.cpu-world.com/"}]}]}]}),methods:{}}),n=window.Vue.renderList,e=window.Vue.Fragment,o=window.Vue.openBlock,c=window.Vue.createElementBlock,a=window.Vue.toDisplayString,i=window.Vue.createElementVNode,s=window.Vue.createCommentVNode,m=window.Vue.resolveComponent,p=window.Vue.withCtx,l=window.Vue.createBlock,r=window.Vue.createVNode;window.Vue.pushScopeId,window.Vue.popScopeId;const h={class:"container"},u={class:"ts-13 m-b-sm text-gray-500"},d={key:0,class:"m-t-sm m-b-sm ts-12 text-gray-500"},w={class:"nav-list flex flex-wrap items-center"},f=["href"],g=["src"],v={class:"m-l-xs"};const b=A(t,[["render",function(A,t,b,x,Z,y){const k=m("el-tab-pane"),P=m("el-tabs"),z=m("el-card");return o(),c("div",h,[r(z,{shadow:"never","body-style":{padding:"20px"}},{default:p((()=>[r(P,{class:"p-t p-b",modelValue:A.current,"onUpdate:modelValue":t[0]||(t[0]=t=>A.current=t),type:"border","tab-position":"top"},{default:p((()=>[(o(!0),c(e,null,n(A.dataList,((A,t)=>(o(),l(k,{key:t,label:A.name,name:t},{default:p((()=>[(o(!0),c(e,null,n(A.children,((A,t)=>(o(),c("div",{class:"nac-tab p-l-md p-b",key:t},[i("h3",u,a(A.name),1),A.tip?(o(),c("div",d,a(A.tip),1)):s("",!0),i("div",w,[(o(!0),c(e,null,n(A.children,((A,t)=>(o(),c("a",{class:"rou opacity-75 hover:opacity-100 hover:bg-gray-100 p-t-xs p-b-xs flex items-center p-l-sm p-r-sm cursor-pointer ts-14 text-gray-800 hover:text-gray-900 flex",target:"_blank",href:A.url,key:t},[i("div",null,[i("img",{class:"",width:"17",src:A.icon?A.icon:A.url+"favicon.ico"},null,8,g)]),i("span",v,a(A.name),1)],8,f)))),128))])])))),128))])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1})])}],["__scopeId","data-v-9ff3edaf"]]);export{b as default};
