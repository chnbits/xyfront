!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("echarts")):"function"==typeof define&&define.amd?define(["exports","echarts"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).dataTool={},e.echarts)}(this,(function(e,t){"use strict";u(["Function","RegExp","Date","Error","CanvasGradient","CanvasPattern","Image","Canvas"],(function(e,t){return e["[object "+t+"]"]=!0,e}),{}),u(["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64"],(function(e,t){return e["[object "+t+"Array]"]=!0,e}),{});var r=Array.prototype,n=r.slice,a=r.map,o=function(){}.constructor,i=o?o.prototype:null;function l(e,t,r){if(!e)return[];if(!t)return function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return n.apply(e,t)}(e);if(e.map&&e.map===a)return e.map(t,r);for(var o=[],i=0,l=e.length;i<l;i++)o.push(t.call(r,e[i],i,e));return o}function u(e,t,r,n){if(e&&t){for(var a=0,o=e.length;a<o;a++)r=t.call(n,r,e[a],a,e);return r}}i&&"function"==typeof i.bind&&i.call.bind(i.bind);function s(e,t){return e?l(d(e,"node"),(function(e){var r={id:c(e,"id"),name:c(e,"label"),itemStyle:{normal:{}}},n=p(e,"viz:size"),a=p(e,"viz:position"),o=p(e,"viz:color"),i=p(e,"attvalues");if(n&&(r.symbolSize=parseFloat(c(n,"value"))),a&&(r.x=parseFloat(c(a,"x")),r.y=parseFloat(c(a,"y"))),o&&(r.itemStyle.normal.color="rgb("+[0|c(o,"r"),0|c(o,"g"),0|c(o,"b")].join(",")+")"),i){var l=d(i,"attvalue");r.attributes={};for(var u=0;u<l.length;u++){var s=l[u],f=c(s,"for"),v=c(s,"value"),g=t[f];if(g){switch(g.type){case"integer":case"long":v=parseInt(v,10);break;case"float":case"double":v=parseFloat(v);break;case"boolean":v="true"===v.toLowerCase()}r.attributes[f]=v}}}return r})):[]}function f(e){return e?l(d(e,"edge"),(function(e){var t={id:c(e,"id"),name:c(e,"label"),source:c(e,"source"),target:c(e,"target"),lineStyle:{normal:{}}},r=t.lineStyle.normal,n=p(e,"viz:thickness"),a=p(e,"viz:color");return n&&(r.width=parseFloat(n.getAttribute("value"))),a&&(r.color="rgb("+[0|c(a,"r"),0|c(a,"g"),0|c(a,"b")].join(",")+")"),t})):[]}function c(e,t){return e.getAttribute(t)}function p(e,t){for(var r=e.firstChild;r;){if(1===r.nodeType&&r.nodeName.toLowerCase()===t.toLowerCase())return r;r=r.nextSibling}return null}function d(e,t){for(var r=e.firstChild,n=[];r;)r.nodeName.toLowerCase()===t.toLowerCase()&&n.push(r),r=r.nextSibling;return n}var v=Object.freeze({__proto__:null,parse:function(e){var t;if(!(t="string"==typeof e?(new DOMParser).parseFromString(e,"text/xml"):e)||t.getElementsByTagName("parsererror").length)return null;var r=p(t,"gexf");if(!r)return null;for(var n,a=p(r,"graph"),o=(n=p(a,"attributes"))?l(d(n,"attribute"),(function(e){return{id:c(e,"id"),title:c(e,"title"),type:c(e,"type")}})):[],i={},u=0;u<o.length;u++)i[o[u].id]=o[u];return{nodes:s(p(a,"nodes"),i),links:f(p(a,"edges"))}}});function g(e,t){var r=(e.length-1)*t+1,n=Math.floor(r),a=+e[n-1],o=r-n;return o?a+o*(e[n]-a):a}function b(e,t){for(var r,n=[],a=[],o=[],i=(t=t||{}).boundIQR,l="none"===i||0===i,u=0;u<e.length;u++){o.push(u+"");var s=((r=e[u].slice()).sort((function(e,t){return e-t})),r),f=g(s,.25),c=g(s,.5),p=g(s,.75),d=s[0],v=s[s.length-1],b=(null==i?1.5:i)*(p-f),h=l?d:Math.max(d,f-b),m=l?v:Math.min(v,p+b);n.push([h,f,c,p,m]);for(var y=0;y<s.length;y++){var x=s[y];if(x<h||x>m){var C=[u,x];"vertical"===t.layout&&C.reverse(),a.push(C)}}}return{boxData:n,outliers:a,axisData:o}}var h="1.0.0";t.dataTool&&(t.dataTool.version=h,t.dataTool.gexf=v,t.dataTool.prepareBoxplotData=b),e.gexf=v,e.prepareBoxplotData=b,e.version=h,Object.defineProperty(e,"__esModule",{value:!0})}));