import{a as t}from"./_commonjsHelpers-fb96ccea.js";var e,r="undefined"!=typeof Symbol&&Symbol,o=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0},n="Function.prototype.bind called on incompatible ",i=Array.prototype.slice,a=Object.prototype.toString,p="[object Function]",l=function(t){var e=this;if("function"!=typeof e||a.call(e)!==p)throw new TypeError(n+e);for(var r,o=i.call(arguments,1),l=function(){if(this instanceof r){var n=e.apply(this,o.concat(i.call(arguments)));return Object(n)===n?n:this}return e.apply(t,o.concat(i.call(arguments)))},c=Math.max(0,e.length-o.length),f=[],u=0;u<c;u++)f.push("$"+u);if(r=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(l),e.prototype){var y=function(){};y.prototype=e.prototype,r.prototype=new y,y.prototype=null}return r},c=Function.prototype.bind||l,f=c.call(Function.call,Object.prototype.hasOwnProperty),u=SyntaxError,y=Function,s=TypeError,d=function(t){try{return y('"use strict"; return ('+t+").constructor;")()}catch(e){}},g=Object.getOwnPropertyDescriptor;if(g)try{g({},"")}catch(Re){g=null}var b=function(){throw new s},m=g?function(){try{return b}catch(t){try{return g(arguments,"callee").get}catch(e){return b}}}():b,h="function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&o(),v=Object.getPrototypeOf||function(t){return t.__proto__},S={},j="undefined"==typeof Uint8Array?e:v(Uint8Array),A={"%AggregateError%":"undefined"==typeof AggregateError?e:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?e:ArrayBuffer,"%ArrayIteratorPrototype%":h?v([][Symbol.iterator]()):e,"%AsyncFromSyncIteratorPrototype%":e,"%AsyncFunction%":S,"%AsyncGenerator%":S,"%AsyncGeneratorFunction%":S,"%AsyncIteratorPrototype%":S,"%Atomics%":"undefined"==typeof Atomics?e:Atomics,"%BigInt%":"undefined"==typeof BigInt?e:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?e:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?e:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?e:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?e:FinalizationRegistry,"%Function%":y,"%GeneratorFunction%":S,"%Int8Array%":"undefined"==typeof Int8Array?e:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?e:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?e:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":h?v(v([][Symbol.iterator]())):e,"%JSON%":"object"==typeof JSON?JSON:e,"%Map%":"undefined"==typeof Map?e:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&h?v((new Map)[Symbol.iterator]()):e,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?e:Promise,"%Proxy%":"undefined"==typeof Proxy?e:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?e:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?e:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&h?v((new Set)[Symbol.iterator]()):e,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?e:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":h?v(""[Symbol.iterator]()):e,"%Symbol%":h?Symbol:e,"%SyntaxError%":u,"%ThrowTypeError%":m,"%TypedArray%":j,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?e:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?e:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?e:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?e:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?e:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?e:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?e:WeakSet},O=function t(e){var r;if("%AsyncFunction%"===e)r=d("async function () {}");else if("%GeneratorFunction%"===e)r=d("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=d("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&(r=v(n.prototype))}return A[e]=r,r},P={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},w=c,E=f,x=w.call(Function.call,Array.prototype.concat),F=w.call(Function.apply,Array.prototype.splice),k=w.call(Function.call,String.prototype.replace),R=w.call(Function.call,String.prototype.slice),I=w.call(Function.call,RegExp.prototype.exec),N=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,M=/\\(\\)?/g,D=function(t){var e=R(t,0,1),r=R(t,-1);if("%"===e&&"%"!==r)throw new u("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new u("invalid intrinsic syntax, expected opening `%`");var o=[];return k(t,N,(function(t,e,r,n){o[o.length]=r?k(n,M,"$1"):e||t})),o},U=function(t,e){var r,o=t;if(E(P,o)&&(o="%"+(r=P[o])[0]+"%"),E(A,o)){var n=A[o];if(n===S&&(n=O(o)),void 0===n&&!e)throw new s("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:n}}throw new u("intrinsic "+t+" does not exist!")},_=function(t,e){if("string"!=typeof t||0===t.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new s('"allowMissing" argument must be a boolean');if(null===I(/^%?[^%]*%?$/g,t))throw new u("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=D(t),o=r.length>0?r[0]:"",n=U("%"+o+"%",e),i=n.name,a=n.value,p=!1,l=n.alias;l&&(o=l[0],F(r,x([0,1],l)));for(var c=1,f=!0;c<r.length;c+=1){var y=r[c],d=R(y,0,1),b=R(y,-1);if(('"'===d||"'"===d||"`"===d||'"'===b||"'"===b||"`"===b)&&d!==b)throw new u("property names with quotes must have matching quotes");if("constructor"!==y&&f||(p=!0),E(A,i="%"+(o+="."+y)+"%"))a=A[i];else if(null!=a){if(!(y in a)){if(!e)throw new s("base intrinsic for "+t+" exists, but the property is not available.");return}if(g&&c+1>=r.length){var m=g(a,y);a=(f=!!m)&&"get"in m&&!("originalValue"in m.get)?m.get:a[y]}else f=E(a,y),a=a[y];f&&!p&&(A[i]=a)}}return a},W={};!function(t){var e=c,r=_,o=r("%Function.prototype.apply%"),n=r("%Function.prototype.call%"),i=r("%Reflect.apply%",!0)||e.call(n,o),a=r("%Object.getOwnPropertyDescriptor%",!0),p=r("%Object.defineProperty%",!0),l=r("%Math.max%");if(p)try{p({},"a",{value:1})}catch(Re){p=null}t.exports=function(t){var r=i(e,n,arguments);if(a&&p){var o=a(r,"length");o.configurable&&p(r,"length",{value:1+l(0,t.length-(arguments.length-1))})}return r};var f=function(){return i(e,o,arguments)};p?p(t.exports,"apply",{value:f}):t.exports.apply=f}({get exports(){return W},set exports(t){W=t}});var T=_,C=W,B=C(T("String.prototype.indexOf"));const L=t(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));var G="function"==typeof Map&&Map.prototype,$=Object.getOwnPropertyDescriptor&&G?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,H=G&&$&&"function"==typeof $.get?$.get:null,z=G&&Map.prototype.forEach,V="function"==typeof Set&&Set.prototype,q=Object.getOwnPropertyDescriptor&&V?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Q=V&&q&&"function"==typeof q.get?q.get:null,J=V&&Set.prototype.forEach,K="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,X="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,Y="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,Z=Boolean.prototype.valueOf,tt=Object.prototype.toString,et=Function.prototype.toString,rt=String.prototype.match,ot=String.prototype.slice,nt=String.prototype.replace,it=String.prototype.toUpperCase,at=String.prototype.toLowerCase,pt=RegExp.prototype.test,lt=Array.prototype.concat,ct=Array.prototype.join,ft=Array.prototype.slice,ut=Math.floor,yt="function"==typeof BigInt?BigInt.prototype.valueOf:null,st=Object.getOwnPropertySymbols,dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,gt="function"==typeof Symbol&&"object"==typeof Symbol.iterator,bt="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===gt||"symbol")?Symbol.toStringTag:null,mt=Object.prototype.propertyIsEnumerable,ht=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function vt(t,e){if(t===1/0||t===-1/0||t!=t||t&&t>-1e3&&t<1e3||pt.call(/e/,e))return e;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof t){var o=t<0?-ut(-t):ut(t);if(o!==t){var n=String(o),i=ot.call(e,n.length+1);return nt.call(n,r,"$&_")+"."+nt.call(nt.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return nt.call(e,r,"$&_")}var St=L,jt=St.custom,At=xt(jt)?jt:null;function Ot(t,e,r){var o="double"===(r.quoteStyle||e)?'"':"'";return o+t+o}function Pt(t){return nt.call(String(t),/"/g,"&quot;")}function wt(t){return!("[object Array]"!==Rt(t)||bt&&"object"==typeof t&&bt in t)}function Et(t){return!("[object RegExp]"!==Rt(t)||bt&&"object"==typeof t&&bt in t)}function xt(t){if(gt)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!dt)return!1;try{return dt.call(t),!0}catch(Re){}return!1}var Ft=Object.prototype.hasOwnProperty||function(t){return t in this};function kt(t,e){return Ft.call(t,e)}function Rt(t){return tt.call(t)}function It(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,o=t.length;r<o;r++)if(t[r]===e)return r;return-1}function Nt(t,e){if(t.length>e.maxStringLength){var r=t.length-e.maxStringLength,o="... "+r+" more character"+(r>1?"s":"");return Nt(ot.call(t,0,e.maxStringLength),e)+o}return Ot(nt.call(nt.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,Mt),"single",e)}function Mt(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+it.call(e.toString(16))}function Dt(t){return"Object("+t+")"}function Ut(t){return t+" { ? }"}function _t(t,e,r,o){return t+" ("+e+") {"+(o?Wt(r,o):ct.call(r,", "))+"}"}function Wt(t,e){if(0===t.length)return"";var r="\n"+e.prev+e.base;return r+ct.call(t,","+r)+"\n"+e.prev}function Tt(t,e){var r=wt(t),o=[];if(r){o.length=t.length;for(var n=0;n<t.length;n++)o[n]=kt(t,n)?e(t[n],t):""}var i,a="function"==typeof st?st(t):[];if(gt){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=a[p]}for(var l in t)kt(t,l)&&(r&&String(Number(l))===l&&l<t.length||gt&&i["$"+l]instanceof Symbol||(pt.call(/[^\w$]/,l)?o.push(e(l,t)+": "+e(t[l],t)):o.push(l+": "+e(t[l],t))));if("function"==typeof st)for(var c=0;c<a.length;c++)mt.call(t,a[c])&&o.push("["+e(a[c])+"]: "+e(t[a[c]],t));return o}var Ct=_,Bt=function(t,e){var r=T(t,!!e);return"function"==typeof r&&B(t,".prototype.")>-1?C(r):r},Lt=function t(e,r,o,n){var i=r||{};if(kt(i,"quoteStyle")&&"single"!==i.quoteStyle&&"double"!==i.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(kt(i,"maxStringLength")&&("number"==typeof i.maxStringLength?i.maxStringLength<0&&i.maxStringLength!==1/0:null!==i.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var a=!kt(i,"customInspect")||i.customInspect;if("boolean"!=typeof a&&"symbol"!==a)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(kt(i,"indent")&&null!==i.indent&&"\t"!==i.indent&&!(parseInt(i.indent,10)===i.indent&&i.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(kt(i,"numericSeparator")&&"boolean"!=typeof i.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var p=i.numericSeparator;if(void 0===e)return"undefined";if(null===e)return"null";if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e)return Nt(e,i);if("number"==typeof e){if(0===e)return 1/0/e>0?"0":"-0";var l=String(e);return p?vt(e,l):l}if("bigint"==typeof e){var c=String(e)+"n";return p?vt(e,c):c}var f=void 0===i.depth?5:i.depth;if(void 0===o&&(o=0),o>=f&&f>0&&"object"==typeof e)return wt(e)?"[Array]":"[Object]";var u=function(t,e){var r;if("\t"===t.indent)r="\t";else{if(!("number"==typeof t.indent&&t.indent>0))return null;r=ct.call(Array(t.indent+1)," ")}return{base:r,prev:ct.call(Array(e+1),r)}}(i,o);if(void 0===n)n=[];else if(It(n,e)>=0)return"[Circular]";function y(e,r,a){if(r&&(n=ft.call(n)).push(r),a){var p={depth:i.depth};return kt(i,"quoteStyle")&&(p.quoteStyle=i.quoteStyle),t(e,p,o+1,n)}return t(e,i,o+1,n)}if("function"==typeof e&&!Et(e)){var s=function(t){if(t.name)return t.name;var e=rt.call(et.call(t),/^function\s*([\w$]+)/);if(e)return e[1];return null}(e),d=Tt(e,y);return"[Function"+(s?": "+s:" (anonymous)")+"]"+(d.length>0?" { "+ct.call(d,", ")+" }":"")}if(xt(e)){var g=gt?nt.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):dt.call(e);return"object"!=typeof e||gt?g:Dt(g)}if(function(t){if(!t||"object"!=typeof t)return!1;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)return!0;return"string"==typeof t.nodeName&&"function"==typeof t.getAttribute}(e)){for(var b="<"+at.call(String(e.nodeName)),m=e.attributes||[],h=0;h<m.length;h++)b+=" "+m[h].name+"="+Ot(Pt(m[h].value),"double",i);return b+=">",e.childNodes&&e.childNodes.length&&(b+="..."),b+="</"+at.call(String(e.nodeName))+">"}if(wt(e)){if(0===e.length)return"[]";var v=Tt(e,y);return u&&!function(t){for(var e=0;e<t.length;e++)if(It(t[e],"\n")>=0)return!1;return!0}(v)?"["+Wt(v,u)+"]":"[ "+ct.call(v,", ")+" ]"}if(function(t){return!("[object Error]"!==Rt(t)||bt&&"object"==typeof t&&bt in t)}(e)){var S=Tt(e,y);return"cause"in Error.prototype||!("cause"in e)||mt.call(e,"cause")?0===S.length?"["+String(e)+"]":"{ ["+String(e)+"] "+ct.call(S,", ")+" }":"{ ["+String(e)+"] "+ct.call(lt.call("[cause]: "+y(e.cause),S),", ")+" }"}if("object"==typeof e&&a){if(At&&"function"==typeof e[At]&&St)return St(e,{depth:f-o});if("symbol"!==a&&"function"==typeof e.inspect)return e.inspect()}if(function(t){if(!H||!t||"object"!=typeof t)return!1;try{H.call(t);try{Q.call(t)}catch(b){return!0}return t instanceof Map}catch(Re){}return!1}(e)){var j=[];return z.call(e,(function(t,r){j.push(y(r,e,!0)+" => "+y(t,e))})),_t("Map",H.call(e),j,u)}if(function(t){if(!Q||!t||"object"!=typeof t)return!1;try{Q.call(t);try{H.call(t)}catch(e){return!0}return t instanceof Set}catch(Re){}return!1}(e)){var A=[];return J.call(e,(function(t){A.push(y(t,e))})),_t("Set",Q.call(e),A,u)}if(function(t){if(!K||!t||"object"!=typeof t)return!1;try{K.call(t,K);try{X.call(t,X)}catch(b){return!0}return t instanceof WeakMap}catch(Re){}return!1}(e))return Ut("WeakMap");if(function(t){if(!X||!t||"object"!=typeof t)return!1;try{X.call(t,X);try{K.call(t,K)}catch(b){return!0}return t instanceof WeakSet}catch(Re){}return!1}(e))return Ut("WeakSet");if(function(t){if(!Y||!t||"object"!=typeof t)return!1;try{return Y.call(t),!0}catch(Re){}return!1}(e))return Ut("WeakRef");if(function(t){return!("[object Number]"!==Rt(t)||bt&&"object"==typeof t&&bt in t)}(e))return Dt(y(Number(e)));if(function(t){if(!t||"object"!=typeof t||!yt)return!1;try{return yt.call(t),!0}catch(Re){}return!1}(e))return Dt(y(yt.call(e)));if(function(t){return!("[object Boolean]"!==Rt(t)||bt&&"object"==typeof t&&bt in t)}(e))return Dt(Z.call(e));if(function(t){return!("[object String]"!==Rt(t)||bt&&"object"==typeof t&&bt in t)}(e))return Dt(y(String(e)));if(!function(t){return!("[object Date]"!==Rt(t)||bt&&"object"==typeof t&&bt in t)}(e)&&!Et(e)){var O=Tt(e,y),P=ht?ht(e)===Object.prototype:e instanceof Object||e.constructor===Object,w=e instanceof Object?"":"null prototype",E=!P&&bt&&Object(e)===e&&bt in e?ot.call(Rt(e),8,-1):w?"Object":"",x=(P||"function"!=typeof e.constructor?"":e.constructor.name?e.constructor.name+" ":"")+(E||w?"["+ct.call(lt.call([],E||[],w||[]),": ")+"] ":"");return 0===O.length?x+"{}":u?x+"{"+Wt(O,u)+"}":x+"{ "+ct.call(O,", ")+" }"}return String(e)},Gt=Ct("%TypeError%"),$t=Ct("%WeakMap%",!0),Ht=Ct("%Map%",!0),zt=Bt("WeakMap.prototype.get",!0),Vt=Bt("WeakMap.prototype.set",!0),qt=Bt("WeakMap.prototype.has",!0),Qt=Bt("Map.prototype.get",!0),Jt=Bt("Map.prototype.set",!0),Kt=Bt("Map.prototype.has",!0),Xt=function(t,e){for(var r,o=t;null!==(r=o.next);o=r)if(r.key===e)return o.next=r.next,r.next=t.next,t.next=r,r},Yt=String.prototype.replace,Zt=/%20/g,te="RFC3986",ee={default:te,formatters:{RFC1738:function(t){return Yt.call(t,Zt,"+")},RFC3986:function(t){return String(t)}},RFC1738:"RFC1738",RFC3986:te},re=ee,oe=Object.prototype.hasOwnProperty,ne=Array.isArray,ie=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),ae=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},o=0;o<t.length;++o)void 0!==t[o]&&(r[o]=t[o]);return r},pe={arrayToObject:ae,assign:function(t,e){return Object.keys(e).reduce((function(t,r){return t[r]=e[r],t}),t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],o=0;o<e.length;++o)for(var n=e[o],i=n.obj[n.prop],a=Object.keys(i),p=0;p<a.length;++p){var l=a[p],c=i[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(e.push({obj:i,prop:l}),r.push(c))}return function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(ne(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);e.obj[e.prop]=o}}}(e),t},decode:function(t,e,r){var o=t.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(Re){return o}},encode:function(t,e,r,o,n){if(0===t.length)return t;var i=t;if("symbol"==typeof t?i=Symbol.prototype.toString.call(t):"string"!=typeof t&&(i=String(t)),"iso-8859-1"===r)return escape(i).replace(/%u[0-9a-f]{4}/gi,(function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"}));for(var a="",p=0;p<i.length;++p){var l=i.charCodeAt(p);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||n===re.RFC1738&&(40===l||41===l)?a+=i.charAt(p):l<128?a+=ie[l]:l<2048?a+=ie[192|l>>6]+ie[128|63&l]:l<55296||l>=57344?a+=ie[224|l>>12]+ie[128|l>>6&63]+ie[128|63&l]:(p+=1,l=65536+((1023&l)<<10|1023&i.charCodeAt(p)),a+=ie[240|l>>18]+ie[128|l>>12&63]+ie[128|l>>6&63]+ie[128|63&l])}return a},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,e){if(ne(t)){for(var r=[],o=0;o<t.length;o+=1)r.push(e(t[o]));return r}return e(t)},merge:function t(e,r,o){if(!r)return e;if("object"!=typeof r){if(ne(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(o&&(o.plainObjects||o.allowPrototypes)||!oe.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var n=e;return ne(e)&&!ne(r)&&(n=ae(e,o)),ne(e)&&ne(r)?(r.forEach((function(r,n){if(oe.call(e,n)){var i=e[n];i&&"object"==typeof i&&r&&"object"==typeof r?e[n]=t(i,r,o):e.push(r)}else e[n]=r})),e):Object.keys(r).reduce((function(e,n){var i=r[n];return oe.call(e,n)?e[n]=t(e[n],i,o):e[n]=i,e}),n)}},le=function(){var t,e,r,o={assert:function(t){if(!o.has(t))throw new Gt("Side channel does not contain "+Lt(t))},get:function(o){if($t&&o&&("object"==typeof o||"function"==typeof o)){if(t)return zt(t,o)}else if(Ht){if(e)return Qt(e,o)}else if(r)return function(t,e){var r=Xt(t,e);return r&&r.value}(r,o)},has:function(o){if($t&&o&&("object"==typeof o||"function"==typeof o)){if(t)return qt(t,o)}else if(Ht){if(e)return Kt(e,o)}else if(r)return function(t,e){return!!Xt(t,e)}(r,o);return!1},set:function(o,n){$t&&o&&("object"==typeof o||"function"==typeof o)?(t||(t=new $t),Vt(t,o,n)):Ht?(e||(e=new Ht),Jt(e,o,n)):(r||(r={key:{},next:null}),function(t,e,r){var o=Xt(t,e);o?o.value=r:t.next={key:e,next:t.next,value:r}}(r,o,n))}};return o},ce=pe,fe=ee,ue=Object.prototype.hasOwnProperty,ye={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},se=Array.isArray,de=String.prototype.split,ge=Array.prototype.push,be=function(t,e){ge.apply(t,se(e)?e:[e])},me=Date.prototype.toISOString,he=fe.default,ve={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:ce.encode,encodeValuesOnly:!1,format:he,formatter:fe.formatters[he],indices:!1,serializeDate:function(t){return me.call(t)},skipNulls:!1,strictNullHandling:!1},Se={},je=function t(e,r,o,n,i,a,p,l,c,f,u,y,s,d,g){for(var b,m=e,h=g,v=0,S=!1;void 0!==(h=h.get(Se))&&!S;){var j=h.get(e);if(v+=1,void 0!==j){if(j===v)throw new RangeError("Cyclic object value");S=!0}void 0===h.get(Se)&&(v=0)}if("function"==typeof p?m=p(r,m):m instanceof Date?m=f(m):"comma"===o&&se(m)&&(m=ce.maybeMap(m,(function(t){return t instanceof Date?f(t):t}))),null===m){if(n)return a&&!s?a(r,ve.encoder,d,"key",u):r;m=""}if("string"==typeof(b=m)||"number"==typeof b||"boolean"==typeof b||"symbol"==typeof b||"bigint"==typeof b||ce.isBuffer(m)){if(a){var A=s?r:a(r,ve.encoder,d,"key",u);if("comma"===o&&s){for(var O=de.call(String(m),","),P="",w=0;w<O.length;++w)P+=(0===w?"":",")+y(a(O[w],ve.encoder,d,"value",u));return[y(A)+"="+P]}return[y(A)+"="+y(a(m,ve.encoder,d,"value",u))]}return[y(r)+"="+y(String(m))]}var E,x=[];if(void 0===m)return x;if("comma"===o&&se(m))E=[{value:m.length>0?m.join(",")||null:void 0}];else if(se(p))E=p;else{var F=Object.keys(m);E=l?F.sort(l):F}for(var k=0;k<E.length;++k){var R=E[k],I="object"==typeof R&&void 0!==R.value?R.value:m[R];if(!i||null!==I){var N=se(m)?"function"==typeof o?o(r,R):r:r+(c?"."+R:"["+R+"]");g.set(e,v);var M=le();M.set(Se,g),be(x,t(I,N,o,n,i,a,p,l,c,f,u,y,s,d,M))}}return x},Ae=pe,Oe=Object.prototype.hasOwnProperty,Pe=Array.isArray,we={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:Ae.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Ee=function(t){return t.replace(/&#(\d+);/g,(function(t,e){return String.fromCharCode(parseInt(e,10))}))},xe=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},Fe=function(t,e,r,o){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(n),p=a?n.slice(0,a.index):n,l=[];if(p){if(!r.plainObjects&&Oe.call(Object.prototype,p)&&!r.allowPrototypes)return;l.push(p)}for(var c=0;r.depth>0&&null!==(a=i.exec(n))&&c<r.depth;){if(c+=1,!r.plainObjects&&Oe.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+n.slice(a.index)+"]"),function(t,e,r,o){for(var n=o?e:xe(e,r),i=t.length-1;i>=0;--i){var a,p=t[i];if("[]"===p&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var l="["===p.charAt(0)&&"]"===p.charAt(p.length-1)?p.slice(1,-1):p,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&p!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[])[c]=n:"__proto__"!==l&&(a[l]=n):a={0:n}}n=a}return n}(l,e,r,o)}},ke={formats:ee,parse:function(t,e){var r=function(t){if(!t)return we;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?we.charset:t.charset;return{allowDots:void 0===t.allowDots?we.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:we.allowPrototypes,allowSparse:"boolean"==typeof t.allowSparse?t.allowSparse:we.allowSparse,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:we.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:we.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:we.comma,decoder:"function"==typeof t.decoder?t.decoder:we.decoder,delimiter:"string"==typeof t.delimiter||Ae.isRegExp(t.delimiter)?t.delimiter:we.delimiter,depth:"number"==typeof t.depth||!1===t.depth?+t.depth:we.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:we.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:we.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:we.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:we.strictNullHandling}}(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof t?function(t,e){var r,o={},n=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,i=e.parameterLimit===1/0?void 0:e.parameterLimit,a=n.split(e.delimiter,i),p=-1,l=e.charset;if(e.charsetSentinel)for(r=0;r<a.length;++r)0===a[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===a[r]?l="utf-8":"utf8=%26%2310003%3B"===a[r]&&(l="iso-8859-1"),p=r,r=a.length);for(r=0;r<a.length;++r)if(r!==p){var c,f,u=a[r],y=u.indexOf("]="),s=-1===y?u.indexOf("="):y+1;-1===s?(c=e.decoder(u,we.decoder,l,"key"),f=e.strictNullHandling?null:""):(c=e.decoder(u.slice(0,s),we.decoder,l,"key"),f=Ae.maybeMap(xe(u.slice(s+1),e),(function(t){return e.decoder(t,we.decoder,l,"value")}))),f&&e.interpretNumericEntities&&"iso-8859-1"===l&&(f=Ee(f)),u.indexOf("[]=")>-1&&(f=Pe(f)?[f]:f),Oe.call(o,c)?o[c]=Ae.combine(o[c],f):o[c]=f}return o}(t,r):t,n=r.plainObjects?Object.create(null):{},i=Object.keys(o),a=0;a<i.length;++a){var p=i[a],l=Fe(p,o[p],r,"string"==typeof t);n=Ae.merge(n,l,r)}return!0===r.allowSparse?n:Ae.compact(n)},stringify:function(t,e){var r,o=t,n=function(t){if(!t)return ve;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||ve.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=fe.default;if(void 0!==t.format){if(!ue.call(fe.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var o=fe.formatters[r],n=ve.filter;return("function"==typeof t.filter||se(t.filter))&&(n=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:ve.addQueryPrefix,allowDots:void 0===t.allowDots?ve.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:ve.charsetSentinel,delimiter:void 0===t.delimiter?ve.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:ve.encode,encoder:"function"==typeof t.encoder?t.encoder:ve.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:ve.encodeValuesOnly,filter:n,format:r,formatter:o,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:ve.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:ve.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:ve.strictNullHandling}}(e);"function"==typeof n.filter?o=(0,n.filter)("",o):se(n.filter)&&(r=n.filter);var i,a=[];if("object"!=typeof o||null===o)return"";i=e&&e.arrayFormat in ye?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var p=ye[i];r||(r=Object.keys(o)),n.sort&&r.sort(n.sort);for(var l=le(),c=0;c<r.length;++c){var f=r[c];n.skipNulls&&null===o[f]||be(a,je(o[f],f,p,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,l))}var u=a.join(n.delimiter),y=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?y+="utf8=%26%2310003%3B&":y+="utf8=%E2%9C%93&"),u.length>0?y+u:""}};export{ke as l};
