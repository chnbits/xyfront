(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define("xyui", ["Vue"], factory);
	else if(typeof exports === 'object')
		exports["xyui"] = factory(require("Vue"));
	else
		root["xyui"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__2740__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6462:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*!
 * vue-link2 v1.0.1 
 * (c) 2017 Willy
 * Released under the MIT License.
 */


__webpack_require__(1539);

__webpack_require__(8674);

__webpack_require__(2526);

__webpack_require__(1817);

__webpack_require__(2165);

__webpack_require__(6992);

__webpack_require__(8783);

__webpack_require__(3948);

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var loadjs = _interopDefault(__webpack_require__(5671));

var Link2 = {
  installed: false,
  loaded: {},
  version: '1.0.1',
  install: function install(Vue, options) {
    if (options === void 0) options = {};

    if (Link2.installed) {
      return;
    }

    Link2.installed = true;
  },
  load: function load(href, opts) {
    if (opts === void 0) opts = {
      parent: document.head
    };
    return Link2.loaded[href] ? Promise.resolve(href) : new Promise(function (resolve, reject) {
      loadjs([href], {
        success: function success() {
          var l = document.createElement('link');
          l.href = href;
          l.crossOrigin = opts.crossorigin;
          opts.parent.appendChild(l);
          Link2.loaded[href] = 1;
          resolve(href);
        },
        error: function error() {
          reject(new Error(href));
        }
      });
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Link2);
}

module.exports = Link2;

/***/ }),

/***/ 1199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5666);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1539);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9653);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9600);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5306);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2222);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4723);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3123);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4747);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7042);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4603);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6977);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2526);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1817);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2165);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6992);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8783);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2740);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(232);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }























/**
 * +----------------------------------------------------------------------
 * | xyui [ 全端渐进式UI框架 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2018-2020 http://jiangruyi.com All rights reserved.
 * +----------------------------------------------------------------------
 * | Author: jry <598821125@qq.com>
 * +----------------------------------------------------------------------
 * | 版权申明：此源码不是一个自由软件，是jry推出的私有源码，严禁在未经许可的情况下
 * | 拷贝、复制、传播、使用此源码的任意代码，如有违反，请立即删除，否则您将面临承担相应
 * | 法律责任的风险。如果需要取得官方授权，请联系官方QQ598821125。
 */
 // import CryptoJS from 'crypto-js';

var loadjs = __webpack_require__(5671);


var xyutil = {};
xyutil.config = _config_js__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z;
var vuevm = xyutil.config.vue;

xyutil.setConfig = function (myconfig) {
  xyutil.config = Object.assign(xyutil.config, myconfig);
  vuevm = xyutil.config.vue;
}; // optional-chaining


xyutil.chain = __webpack_require__(8593);

xyutil.guid = function () {
  return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
};

xyutil.format2Text = function (data) {
  var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  switch (_typeof(data)) {
    case 'object':
      if (data && data.constructor === Array) {
        return data.join(',');
      }

      break;

    default:
      return data;
      break;
  }
};

xyutil.middleAsterisk = function (str) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

  if (null != str && str != undefined) {
    var pat = eval('/' + '(.{' + a + '}).*(.{' + b + '})' + '/');
    return str.replace(pat, '$1' + new Array(str.length - a - b).join('*') + '$2');
  } else {
    return "";
  }
}; // 判断登录
// 可以用于在跳转某个页面前检测需要登录的话弹出登录页面


xyutil.isLogin = function () {
  var showModal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var redirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!xyutil.config.getToken()) {
    if (redirect) {
      xyutil.navigateTo({
        url: '/user/login'
      });
    }

    if (showModal) {
      xyutil.showModalLogin();
    }

    return false;
  }

  return true;
}; // 现在不支持自定义全局弹窗的内容，不得不先跳转到一个新页面实现。


xyutil.showModalLogin = function () {
  xyutil.showModal({
    title: '提示',
    content: '您尚未登录，点击确定跳转登录页面？',
    success: function success(res) {
      if (res.confirm) {
        xyutil.navigateTo({
          url: '/user/login'
        });
      } else if (res.cancel) {}
    }
  });
};

xyutil.treeSearch = function (tree, id) {
  var stark = [];
  stark = stark.concat(tree);

  while (stark.length) {
    var temp = stark.shift();

    if (temp.id == id) {
      return temp;
    } else {
      if (temp.children) {
        stark = stark.concat(temp.children);
      }
    }
  }
}, xyutil.isJson = function (str) {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str);

      if (_typeof(obj) == 'object' && obj) {
        return obj;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
}; // 是否移动端

xyutil.isMobile = function () {
  if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
    return true;
  } else {
    return false;
  }
};

xyutil.isSafari = function () {
  var ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('applewebkit') > -1 && ua.indexOf('mobile') > -1 && ua.indexOf('safari') > -1 && ua.indexOf('linux') === -1 && ua.indexOf('android') === -1 && ua.indexOf('chrome') === -1 && ua.indexOf('ios') === -1 && ua.indexOf('browser') === -1) {
    return true;
  } else {
    return false;
  }
}, xyutil.isIos = function () {
  var ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('ios') > -1) {
    return true;
  }

  return false;
}, xyutil.isAndroid = function () {
  var ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('android') > -1) {
    return true;
  }

  return false;
}, // 判断环境
xyutil.runEnv = function () {
  var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var ua = window.navigator.userAgent.toLowerCase(); // 是否在微信环境下

  if (ua.match(/MicroMessenger/i) == 'micromessenger' && ua.match(/wxwork/i) != 'wxwork') {
    return 'weixin-h5';
  } // 是否在企业微信环境下


  if (ua.match(/wxwork/i) == 'wxwork') {
    return 'wework-h5';
  } // 是否在微博下


  if (ua.match(/WeiBo/i) == "weibo") {
    return 'weibo';
  } // 是否在QQ客户端


  var isIosQQ = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && /\sQQ/i.test(navigator.userAgent);
  var isAndroidQQ = /(Android)/i.test(navigator.userAgent) && /MQQBrowser/i.test(navigator.userAgent) && /\sQQ/i.test(navigator.userAgent.split('MQQBrowser'));

  if (isIosQQ || isAndroidQQ) {
    return 'qq';
  } else {
    if (ua.match(/MQQbrowser/i) == "mqqbrowser") {
      return 'mqqbrowser';
    }
  }

  return '';
}; // 关闭窗口

xyutil.close = function () {
  if (typeof WeixinJSBridge != "undefined") {
    //这个可以关闭安卓系统的手机
    document.addEventListener('WeixinJSBridgeReady', function () {
      WeixinJSBridge.call('closeWindow');
    }, false);
    WeixinJSBridge.call('closeWindow');
  } else {
    if (navigator.userAgent.indexOf("MSIE") > 0) {
      if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
        window.opener = null;
        window.close();
      } else {
        window.open('', '_top');
        window.top.close();
      }
    } else if (navigator.userAgent.indexOf("Firefox") > 0) {
      window.location.href = 'about:blank '; //window.history.go(-2);  
    } else {
      window.opener = null;
      window.open('', '_self', '');
      window.close();
    }
  }
}; // 截取url中的数据


xyutil.getUrlQuery = function (tempStr) {
  /**
  * tempStr 格式是http://域名/路由?key=value&key=value...
  */
  if (!tempStr) {
    tempStr = window.location.href;
  }
  /**
  * tempArr 是一个字符串数组 格式是["key=value", "key=value", ...]
  */


  var tempArr = tempStr.split('?')[1] ? tempStr.split('?')[1].split('&') : [];
  /**
  * returnArr 是要返回出去的数据对象 格式是 { key: value, key: value, ... }
  */

  var returnArr = {};
  tempArr.forEach(function (element) {
    returnArr[element.split('=')[0]] = element.split('=')[1];
  });
  return returnArr;
}; // 获取文件md5


xyutil.md5sum = function (file) {
  return new Promise(function (resolve) {
    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
        chunkSize = 2097152,
        // Read in chunks of 2MB
    chunks = Math.ceil(file.size / chunkSize),
        currentChunk = 0,
        spark = new SparkMD5.ArrayBuffer(),
        fileReader = new FileReader();

    fileReader.onload = function (e) {
      console.log('read chunk nr', currentChunk + 1, 'of', chunks);
      spark.append(e.target.result); // Append array buffer

      currentChunk++;

      if (currentChunk < chunks) {
        loadNext();
      } else {
        console.log('finished md5');
        resolve(spark.end());
      }
    };

    fileReader.onerror = function () {
      console.warn('oops, something went wrong.');
    };

    function loadNext() {
      var start = currentChunk * chunkSize,
          end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
  });
}; // 获取文件sha1


xyutil.sha1sum = function (file) {
  return new Promise(function (resolve) {
    var reader = new FileReader();
    xyutil.loadJS(xyutil.config.jsBaseUrl + '/libs/crypto-js/crypto-js.js').then(function (ret) {
      reader.onload = function () {
        var wordArray = CryptoJS.lib.WordArray.create(this.result);
        resolve(CryptoJS.SHA1(wordArray).toString());
      };

      reader.readAsArrayBuffer(file);
    });
  });
}; // 文件上传回调接口


xyutil.uploadFileCallback = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, ret, header) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params.url = ret.data.url;

            if (!(!params.md5 || !params.sha1 || !params.url)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.next = 5;
            return xyutil.request({
              url: '/v1/upload/upload/callback',
              method: 'post',
              data: params,
              header: header
            });

          case 5:
            res = _context.sent;

            if (res.code == 200) {}

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

xyutil.loadJS = function (url) {
  return new Promise(function (resolve, reject) {
    // 先判断有没有
    var exsit = document.querySelector("script[src='" + url + "']");

    if (!exsit) {
      var script = document.createElement('script');
      script.type = 'text/javascript'; //IE

      if (script.readyState) {
        script.onreadystatechange = function () {
          if (script.readyState == 'loaded' || script.readyState == 'complete') {
            script.onreadystatechange = null;
            resolve(true);
          }
        };
      } else {
        //其他浏览器
        script.onload = function () {
          resolve(true);
        };
      }

      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      resolve(true);
    }
  });
};

xyutil.empty = function (str, text) {
  if (str) {
    return str;
  } else {
    return text;
  }
}; // 文字超过省略


xyutil.ellipsis = function (value, length) {
  if (!value) return '';

  if (value.length > length) {
    return value.slice(0, length) + '...';
  }

  return value;
}; // 货币格式化


xyutil.toThousands = function (num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}; // 时间格式化


xyutil.timeFormat = function (time, fmt) {
  if (!time) {
    return '';
  }

  if (!fmt) {
    fmt = 'yyyy-MM-dd HH:mm';
  }

  var date = '';

  if (_typeof(time) == 'object') {
    date = time;
  } else if (typeof time == 'number') {
    date = new Date(time * 1000);
  } else {
    return time;
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : xyutil.padLeftZero(str));
    }
  }

  return fmt;
};

xyutil.padLeftZero = function (str) {
  return ('00' + str).substr(str.length);
}; // 浮点数减法


xyutil.sub = function (arg1, arg2) {
  var r1, r2, m, n;

  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return Math.abs(((arg1 * m - arg2 * m) / m).toFixed(n));
}; // 浮点数加法


xyutil.add = function (arg1, arg2) {
  var r1, r2, m;

  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }

  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}; //浮点除法


xyutil.div = function (a, b) {
  var c,
      d,
      e = 0,
      f = 0;

  try {
    e = a.toString().split(".")[1].length;
  } catch (g) {}

  try {
    f = b.toString().split(".")[1].length;
  } catch (g) {}

  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), xyutil.mul(c / d, Math.pow(10, f - e));
}; //浮点乘法


xyutil.mul = function (a, b) {
  var c = 0,
      d = a.toString(),
      e = b.toString();

  try {
    c += d.split(".")[1].length;
  } catch (f) {}

  try {
    c += e.split(".")[1].length;
  } catch (f) {}

  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}; // localStorage


xyutil.setStorageSync = function (key, value) {
  return localStorage.setItem(key, value);
};

xyutil.getStorageSync = function (key) {
  return localStorage.getItem(key);
};

xyutil.removeStorageSync = function (key) {
  return localStorage.removeItem(key);
};

xyutil.clearStorageSync = function () {
  return localStorage.clear();
};

xyutil.navigateTo = function (config) {
  if (typeof config == 'string') {
    if (config) {
      config = config;
    }

    if (config && config.substr(0, 4) == "http") {
      window.open(config);
    } else {
      if (window.uni) {
        vuevm.$Router.push(config);
      } else {
        vuevm.$router.push(config);
      }
    }
  } else {
    if (config.url) {
      config.path = config.url;
    }

    if (config.path && config.path.substr(0, 4) == "http") {
      window.open(config.path);
    } else {
      if (window.uni) {
        vuevm.$Router.push(config);
      } else {
        vuevm.$router.push(config);
      }
    }
  }
};

xyutil.redirectTo = function (_ref2) {
  var url = _ref2.url;
  vuevm.$router.push(url);
};

xyutil.reLaunch = function () {
  var url = window.location.href.split("#");
  location.href = url[0];
};

xyutil.switchTab = function (_ref3) {
  var url = _ref3.url;
  vuevm.$router.push(url);
};

xyutil.navigateBack = function (_ref4) {
  var delta = _ref4.delta;
  vuevm.$router.go(-1);
}; // 弹窗提醒


xyutil.showToast = function (_ref5) {
  var title = _ref5.title,
      _ref5$icon = _ref5.icon,
      icon = _ref5$icon === void 0 ? 'loading' : _ref5$icon,
      _ref5$duration = _ref5.duration,
      duration = _ref5$duration === void 0 ? 3000 : _ref5$duration;

  // element
  if (vuevm.$message) {
    if (icon == 'loading') {
      icon = 'warning';
    }

    vuevm.$message({
      message: title,
      type: icon
    });
    return;
  }
}; // 模态弹窗


xyutil.showModal = function (_ref6) {
  var title = _ref6.title,
      _ref6$content = _ref6.content,
      content = _ref6$content === void 0 ? '' : _ref6$content,
      _ref6$success = _ref6.success,
      success = _ref6$success === void 0 ? function () {} : _ref6$success,
      _ref6$fail = _ref6.fail,
      fail = _ref6$fail === void 0 ? function () {} : _ref6$fail,
      _ref6$complete = _ref6.complete,
      complete = _ref6$complete === void 0 ? function () {} : _ref6$complete;
  vuevm.$confirm(content, title, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(function () {
    var res = {};
    res.confirm = true;
    success(res);
  }).catch(function () {
    var res = {};
    res.cancel = true;
    success(res);
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (xyutil);

/***/ }),

/***/ 232:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var current_script_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8344);
/* harmony import */ var current_script_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(current_script_polyfill__WEBPACK_IMPORTED_MODULE_0__);
var _document, _document$currentScri;


var absSrc = (_document = document) === null || _document === void 0 ? void 0 : (_document$currentScri = _document.currentScript) === null || _document$currentScri === void 0 ? void 0 : _document$currentScri.src;

if (!absSrc) {
  absSrc = 'https://cdn.jiangruyi.com/';
}

var config = {
  vue: new Object(),
  // baseDomain
  baseDomain: function baseDomain() {
    return window.location.protocol + "//" + window.location.host;
  },
  // baseUrl
  baseUrl: function baseUrl() {
    return '';
  },
  jsBaseUrl: absSrc.substring(0, absSrc.lastIndexOf("/") + 1),
  cdnDomain: 'https://cdn.jsdelivr.net'
};

config.baseUrl = function () {
  return config.baseDomain() + '/api/';
};

/* harmony default export */ __webpack_exports__["Z"] = (config);

/***/ }),

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 9483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isConstructor = __webpack_require__(4411);
var tryToString = __webpack_require__(6330);

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ 6077:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ 1223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var definePropertyModule = __webpack_require__(3070);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 1530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(8710).charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ 5787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isPrototypeOf = __webpack_require__(7976);

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ 8533:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(2092).forEach);
var arrayMethodIsStrict = __webpack_require__(9341);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ 8457:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var bind = __webpack_require__(9974);
var call = __webpack_require__(6916);
var toObject = __webpack_require__(7908);
var callWithSafeIterationClosing = __webpack_require__(3411);
var isArrayIteratorMethod = __webpack_require__(7659);
var isConstructor = __webpack_require__(4411);
var lengthOfArrayLike = __webpack_require__(6244);
var createProperty = __webpack_require__(6135);
var getIterator = __webpack_require__(8554);
var getIteratorMethod = __webpack_require__(1246);

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 2092:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(9974);
var uncurryThis = __webpack_require__(1702);
var IndexedObject = __webpack_require__(8361);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var arraySpeciesCreate = __webpack_require__(5417);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ 1194:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var V8_VERSION = __webpack_require__(7392);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ 9341:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7293);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ 1589:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);
var createProperty = __webpack_require__(6135);

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ 206:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis([].slice);


/***/ }),

/***/ 4362:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySlice = __webpack_require__(1589);

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ 7475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isArray = __webpack_require__(3157);
var isConstructor = __webpack_require__(4411);
var isObject = __webpack_require__(111);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 5417:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(7475);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ 3411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var iteratorClose = __webpack_require__(9212);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ 7072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var isCallable = __webpack_require__(614);
var classofRaw = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 4964:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ 8544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ 4994:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(3383).IteratorPrototype);
var create = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(9114);
var setToStringTag = __webpack_require__(8003);
var Iterators = __webpack_require__(7497);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 6135:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(4948);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ 654:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var call = __webpack_require__(6916);
var IS_PURE = __webpack_require__(1913);
var FunctionName = __webpack_require__(6530);
var isCallable = __webpack_require__(614);
var createIteratorConstructor = __webpack_require__(4994);
var getPrototypeOf = __webpack_require__(9518);
var setPrototypeOf = __webpack_require__(7674);
var setToStringTag = __webpack_require__(8003);
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var wellKnownSymbol = __webpack_require__(5112);
var Iterators = __webpack_require__(7497);
var IteratorsCore = __webpack_require__(3383);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ 7235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var path = __webpack_require__(857);
var hasOwn = __webpack_require__(2597);
var wrappedWellKnownSymbolModule = __webpack_require__(6061);
var defineProperty = (__webpack_require__(3070).f);

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 8324:
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ 8509:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(317);

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ 8886:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ 7871:
/***/ (function(module) {

module.exports = typeof window == 'object';


/***/ }),

/***/ 256:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var UA = __webpack_require__(8113);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ 1528:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);
var global = __webpack_require__(7854);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ 6833:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ 5268:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);
var global = __webpack_require__(7854);

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ 1036:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ 8113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 8008:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(8113);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ 748:
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var redefine = __webpack_require__(1320);
var setGlobal = __webpack_require__(3505);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 7007:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(4916);
var uncurryThis = __webpack_require__(1702);
var redefine = __webpack_require__(1320);
var regexpExec = __webpack_require__(2261);
var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var createNonEnumerableProperty = __webpack_require__(8880);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ 6790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var isArray = __webpack_require__(3157);
var lengthOfArrayLike = __webpack_require__(6244);
var bind = __webpack_require__(9974);

var TypeError = global.TypeError;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ 2104:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ 9974:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(9662);
var NATIVE_BIND = __webpack_require__(4374);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 1246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(648);
var getMethod = __webpack_require__(8173);
var Iterators = __webpack_require__(7497);
var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ 8554:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var aCallable = __webpack_require__(9662);
var anObject = __webpack_require__(9670);
var tryToString = __webpack_require__(6330);
var getIteratorMethod = __webpack_require__(1246);

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(9662);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ 647:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 842:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ 490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ 9587:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var setPrototypeOf = __webpack_require__(7674);

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(8536);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 7659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var Iterators = __webpack_require__(7497);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ 614:
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4411:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var classof = __webpack_require__(648);
var getBuiltIn = __webpack_require__(5005);
var inspectSource = __webpack_require__(2788);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(614);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 7850:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(111);
var classof = __webpack_require__(4326);
var wellKnownSymbol = __webpack_require__(5112);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ 408:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var bind = __webpack_require__(9974);
var call = __webpack_require__(6916);
var anObject = __webpack_require__(9670);
var tryToString = __webpack_require__(6330);
var isArrayIteratorMethod = __webpack_require__(7659);
var lengthOfArrayLike = __webpack_require__(6244);
var isPrototypeOf = __webpack_require__(7976);
var getIterator = __webpack_require__(8554);
var getIteratorMethod = __webpack_require__(1246);
var iteratorClose = __webpack_require__(9212);

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ 9212:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(6916);
var anObject = __webpack_require__(9670);
var getMethod = __webpack_require__(8173);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ 3383:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var create = __webpack_require__(30);
var getPrototypeOf = __webpack_require__(9518);
var redefine = __webpack_require__(1320);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ 7497:
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 5948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var bind = __webpack_require__(9974);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var macrotask = (__webpack_require__(261).set);
var IS_IOS = __webpack_require__(6833);
var IS_IOS_PEBBLE = __webpack_require__(1528);
var IS_WEBOS_WEBKIT = __webpack_require__(1036);
var IS_NODE = __webpack_require__(5268);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ 3366:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

module.exports = global.Promise;


/***/ }),

/***/ 133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 590:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var wellKnownSymbol = __webpack_require__(5112);
var IS_PURE = __webpack_require__(1913);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = !fails(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});


/***/ }),

/***/ 8536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var inspectSource = __webpack_require__(2788);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ 8523:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9662);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ 3929:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isRegExp = __webpack_require__(7850);

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ 3009:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var fails = __webpack_require__(7293);
var uncurryThis = __webpack_require__(1702);
var toString = __webpack_require__(1340);
var trim = (__webpack_require__(3111).trim);
var whitespaces = __webpack_require__(1361);

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ 1574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var uncurryThis = __webpack_require__(1702);
var call = __webpack_require__(6916);
var fails = __webpack_require__(7293);
var objectKeys = __webpack_require__(1956);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var propertyIsEnumerableModule = __webpack_require__(5296);
var toObject = __webpack_require__(7908);
var IndexedObject = __webpack_require__(8361);

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 30:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(9670);
var definePropertiesModule = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var toIndexedObject = __webpack_require__(5656);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(7854);
var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 1156:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(4326);
var toIndexedObject = __webpack_require__(5656);
var $getOwnPropertyNames = (__webpack_require__(8006).f);
var arraySlice = __webpack_require__(1589);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 9518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var hasOwn = __webpack_require__(2597);
var isCallable = __webpack_require__(614);
var toObject = __webpack_require__(7908);
var sharedKey = __webpack_require__(6200);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 1956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 7674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(1702);
var anObject = __webpack_require__(9670);
var aPossiblePrototype = __webpack_require__(6077);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ 288:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var classof = __webpack_require__(648);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 857:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

module.exports = global;


/***/ }),

/***/ 2534:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ 9478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var newPromiseCapability = __webpack_require__(8523);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ 8572:
/***/ (function(module) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ 2248:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(1320);

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ 1320:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var createNonEnumerableProperty = __webpack_require__(8880);
var setGlobal = __webpack_require__(3505);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ 7651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var anObject = __webpack_require__(9670);
var isCallable = __webpack_require__(614);
var classof = __webpack_require__(4326);
var regexpExec = __webpack_require__(2261);

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ 2261:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var toString = __webpack_require__(1340);
var regexpFlags = __webpack_require__(7066);
var stickyHelpers = __webpack_require__(2999);
var shared = __webpack_require__(2309);
var create = __webpack_require__(30);
var getInternalState = (__webpack_require__(9909).get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(9441);
var UNSUPPORTED_NCG = __webpack_require__(7168);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 7066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(9670);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 2999:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ 9441:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ 7168:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 3505:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 6340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(5005);
var definePropertyModule = __webpack_require__(3070);
var wellKnownSymbol = __webpack_require__(5112);
var DESCRIPTORS = __webpack_require__(9781);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ 8003:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__(3070).f);
var hasOwn = __webpack_require__(2597);
var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var setGlobal = __webpack_require__(3505);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 6707:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(9670);
var aConstructor = __webpack_require__(9483);
var wellKnownSymbol = __webpack_require__(5112);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ 8710:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var toIntegerOrInfinity = __webpack_require__(9303);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ 3197:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var RangeError = global.RangeError;
var exec = uncurryThis(regexSeparators.exec);
var floor = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis(''.charCodeAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var split = uncurryThis(''.split);
var toLowerCase = uncurryThis(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        push(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push(output, value);
        counter--;
      }
    } else {
      push(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor(delta / baseMinusTMin);
    k += base;
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      throw RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor(qMinusT / baseMinusT);
          k += base;
        }

        push(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join(output, '');
};

module.exports = function (input) {
  var encoded = [];
  var labels = split(replace(toLowerCase(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push(encoded, exec(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join(encoded, '.');
};


/***/ }),

/***/ 8415:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7854);
var toIntegerOrInfinity = __webpack_require__(9303);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);

var RangeError = global.RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ 6091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__(6530).PROPER);
var fails = __webpack_require__(7293);
var whitespaces = __webpack_require__(1361);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ 3111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);
var requireObjectCoercible = __webpack_require__(4488);
var toString = __webpack_require__(1340);
var whitespaces = __webpack_require__(1361);

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ 261:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var apply = __webpack_require__(2104);
var bind = __webpack_require__(9974);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var fails = __webpack_require__(7293);
var html = __webpack_require__(490);
var arraySlice = __webpack_require__(206);
var createElement = __webpack_require__(317);
var validateArgumentsLength = __webpack_require__(8053);
var IS_IOS = __webpack_require__(6833);
var IS_NODE = __webpack_require__(5268);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ 863:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var requireObjectCoercible = __webpack_require__(4488);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 1694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ 1340:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var classof = __webpack_require__(648);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ 6330:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(133);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ 8053:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);

var TypeError = global.TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ 6061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);

exports.f = wellKnownSymbol;


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(133);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 1361:
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ 2222:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var fails = __webpack_require__(7293);
var isArray = __webpack_require__(3157);
var isObject = __webpack_require__(111);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var createProperty = __webpack_require__(6135);
var arraySpeciesCreate = __webpack_require__(5417);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
var wellKnownSymbol = __webpack_require__(5112);
var V8_VERSION = __webpack_require__(7392);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ 7327:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $filter = (__webpack_require__(2092).filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 4553:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $findIndex = (__webpack_require__(2092).findIndex);
var addToUnscopables = __webpack_require__(1223);

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ 4944:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var flattenIntoArray = __webpack_require__(6790);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var toIntegerOrInfinity = __webpack_require__(9303);
var arraySpeciesCreate = __webpack_require__(5417);

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});


/***/ }),

/***/ 1038:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var from = __webpack_require__(8457);
var checkCorrectnessOfIteration = __webpack_require__(7072);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ 6699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $includes = (__webpack_require__(1318).includes);
var addToUnscopables = __webpack_require__(1223);

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 6992:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5656);
var addToUnscopables = __webpack_require__(1223);
var Iterators = __webpack_require__(7497);
var InternalStateModule = __webpack_require__(9909);
var defineProperty = (__webpack_require__(3070).f);
var defineIterator = __webpack_require__(654);
var IS_PURE = __webpack_require__(1913);
var DESCRIPTORS = __webpack_require__(9781);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ 9600:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var uncurryThis = __webpack_require__(1702);
var IndexedObject = __webpack_require__(8361);
var toIndexedObject = __webpack_require__(5656);
var arrayMethodIsStrict = __webpack_require__(9341);

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ 1249:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $map = (__webpack_require__(2092).map);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 7042:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var isArray = __webpack_require__(3157);
var isConstructor = __webpack_require__(4411);
var isObject = __webpack_require__(111);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);
var toIndexedObject = __webpack_require__(5656);
var createProperty = __webpack_require__(6135);
var wellKnownSymbol = __webpack_require__(5112);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);
var un$Slice = __webpack_require__(206);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ 2707:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var uncurryThis = __webpack_require__(1702);
var aCallable = __webpack_require__(9662);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var toString = __webpack_require__(1340);
var fails = __webpack_require__(7293);
var internalSort = __webpack_require__(4362);
var arrayMethodIsStrict = __webpack_require__(9341);
var FF = __webpack_require__(8886);
var IE_OR_EDGE = __webpack_require__(256);
var V8 = __webpack_require__(7392);
var WEBKIT = __webpack_require__(8008);

var test = [];
var un$Sort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),

/***/ 561:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var toAbsoluteIndex = __webpack_require__(1400);
var toIntegerOrInfinity = __webpack_require__(9303);
var lengthOfArrayLike = __webpack_require__(6244);
var toObject = __webpack_require__(7908);
var arraySpeciesCreate = __webpack_require__(5417);
var createProperty = __webpack_require__(6135);
var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError = global.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ 3792:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __webpack_require__(1223);

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('flat');


/***/ }),

/***/ 8309:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var FUNCTION_NAME_EXISTS = (__webpack_require__(6530).EXISTS);
var uncurryThis = __webpack_require__(1702);
var defineProperty = (__webpack_require__(3070).f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ 9653:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isForced = __webpack_require__(4705);
var redefine = __webpack_require__(1320);
var hasOwn = __webpack_require__(2597);
var inheritIfRequired = __webpack_require__(9587);
var isPrototypeOf = __webpack_require__(7976);
var isSymbol = __webpack_require__(2190);
var toPrimitive = __webpack_require__(7593);
var fails = __webpack_require__(7293);
var getOwnPropertyNames = (__webpack_require__(8006).f);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var defineProperty = (__webpack_require__(3070).f);
var thisNumberValue = __webpack_require__(863);
var trim = (__webpack_require__(3111).trim);

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ 6977:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var toIntegerOrInfinity = __webpack_require__(9303);
var thisNumberValue = __webpack_require__(863);
var $repeat = __webpack_require__(8415);
var fails = __webpack_require__(7293);

var RangeError = global.RangeError;
var String = global.String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var un$ToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' ||
    un$ToFixed(0.9, 0) !== '1' ||
    un$ToFixed(1.255, 2) !== '1.25' ||
    un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation
    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ 9601:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var assign = __webpack_require__(1574);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ 5003:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var fails = __webpack_require__(7293);
var toIndexedObject = __webpack_require__(5656);
var nativeGetOwnPropertyDescriptor = (__webpack_require__(1236).f);
var DESCRIPTORS = __webpack_require__(9781);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ 9337:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var ownKeys = __webpack_require__(3887);
var toIndexedObject = __webpack_require__(5656);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var createProperty = __webpack_require__(6135);

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ 7941:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var nativeKeys = __webpack_require__(1956);
var fails = __webpack_require__(7293);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ 1539:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
var redefine = __webpack_require__(1320);
var toString = __webpack_require__(288);

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ 1058:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var $parseInt = __webpack_require__(3009);

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ 8674:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var IS_PURE = __webpack_require__(1913);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var call = __webpack_require__(6916);
var NativePromise = __webpack_require__(3366);
var redefine = __webpack_require__(1320);
var redefineAll = __webpack_require__(2248);
var setPrototypeOf = __webpack_require__(7674);
var setToStringTag = __webpack_require__(8003);
var setSpecies = __webpack_require__(6340);
var aCallable = __webpack_require__(9662);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var anInstance = __webpack_require__(5787);
var inspectSource = __webpack_require__(2788);
var iterate = __webpack_require__(408);
var checkCorrectnessOfIteration = __webpack_require__(7072);
var speciesConstructor = __webpack_require__(6707);
var task = (__webpack_require__(261).set);
var microtask = __webpack_require__(5948);
var promiseResolve = __webpack_require__(9478);
var hostReportErrors = __webpack_require__(842);
var newPromiseCapabilityModule = __webpack_require__(8523);
var perform = __webpack_require__(2534);
var Queue = __webpack_require__(8572);
var InternalStateModule = __webpack_require__(9909);
var isForced = __webpack_require__(4705);
var wellKnownSymbol = __webpack_require__(5112);
var IS_BROWSER = __webpack_require__(7871);
var IS_NODE = __webpack_require__(5268);
var V8_VERSION = __webpack_require__(7392);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';

var getInternalState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ 4603:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var isForced = __webpack_require__(4705);
var inheritIfRequired = __webpack_require__(9587);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineProperty = (__webpack_require__(3070).f);
var getOwnPropertyNames = (__webpack_require__(8006).f);
var isPrototypeOf = __webpack_require__(7976);
var isRegExp = __webpack_require__(7850);
var toString = __webpack_require__(1340);
var regExpFlags = __webpack_require__(7066);
var stickyHelpers = __webpack_require__(2999);
var redefine = __webpack_require__(1320);
var fails = __webpack_require__(7293);
var hasOwn = __webpack_require__(2597);
var enforceInternalState = (__webpack_require__(9909).enforce);
var setSpecies = __webpack_require__(6340);
var wellKnownSymbol = __webpack_require__(5112);
var UNSUPPORTED_DOT_ALL = __webpack_require__(9441);
var UNSUPPORTED_NCG = __webpack_require__(7168);

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var getFlags = uncurryThis(regExpFlags);
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ 4916:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var exec = __webpack_require__(2261);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ 9714:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(1702);
var PROPER_FUNCTION_NAME = (__webpack_require__(6530).PROPER);
var redefine = __webpack_require__(1320);
var anObject = __webpack_require__(9670);
var isPrototypeOf = __webpack_require__(7976);
var $toString = __webpack_require__(1340);
var fails = __webpack_require__(7293);
var regExpFlags = __webpack_require__(7066);

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ 2023:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var uncurryThis = __webpack_require__(1702);
var notARegExp = __webpack_require__(3929);
var requireObjectCoercible = __webpack_require__(4488);
var toString = __webpack_require__(1340);
var correctIsRegExpLogic = __webpack_require__(4964);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ 8783:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(8710).charAt);
var toString = __webpack_require__(1340);
var InternalStateModule = __webpack_require__(9909);
var defineIterator = __webpack_require__(654);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 4723:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(6916);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var anObject = __webpack_require__(9670);
var toLength = __webpack_require__(7466);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);
var getMethod = __webpack_require__(8173);
var advanceStringIndex = __webpack_require__(1530);
var regExpExec = __webpack_require__(7651);

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var fails = __webpack_require__(7293);
var anObject = __webpack_require__(9670);
var isCallable = __webpack_require__(614);
var toIntegerOrInfinity = __webpack_require__(9303);
var toLength = __webpack_require__(7466);
var toString = __webpack_require__(1340);
var requireObjectCoercible = __webpack_require__(4488);
var advanceStringIndex = __webpack_require__(1530);
var getMethod = __webpack_require__(8173);
var getSubstitution = __webpack_require__(647);
var regExpExec = __webpack_require__(7651);
var wellKnownSymbol = __webpack_require__(5112);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ 3123:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
var isRegExp = __webpack_require__(7850);
var anObject = __webpack_require__(9670);
var requireObjectCoercible = __webpack_require__(4488);
var speciesConstructor = __webpack_require__(6707);
var advanceStringIndex = __webpack_require__(1530);
var toLength = __webpack_require__(7466);
var toString = __webpack_require__(1340);
var getMethod = __webpack_require__(8173);
var arraySlice = __webpack_require__(1589);
var callRegExpExec = __webpack_require__(7651);
var regexpExec = __webpack_require__(2261);
var stickyHelpers = __webpack_require__(2999);
var fails = __webpack_require__(7293);

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ 3210:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $trim = (__webpack_require__(3111).trim);
var forcedStringTrimMethod = __webpack_require__(6091);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ 1817:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var global = __webpack_require__(7854);
var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var toString = __webpack_require__(1340);
var defineProperty = (__webpack_require__(3070).f);
var copyConstructorProperties = __webpack_require__(9920);

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ 2165:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7235);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ 2526:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var apply = __webpack_require__(2104);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var IS_PURE = __webpack_require__(1913);
var DESCRIPTORS = __webpack_require__(9781);
var NATIVE_SYMBOL = __webpack_require__(133);
var fails = __webpack_require__(7293);
var hasOwn = __webpack_require__(2597);
var isArray = __webpack_require__(3157);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);
var isPrototypeOf = __webpack_require__(7976);
var isSymbol = __webpack_require__(2190);
var anObject = __webpack_require__(9670);
var toObject = __webpack_require__(7908);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var $toString = __webpack_require__(1340);
var createPropertyDescriptor = __webpack_require__(9114);
var nativeObjectCreate = __webpack_require__(30);
var objectKeys = __webpack_require__(1956);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertyNamesExternal = __webpack_require__(1156);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);
var definePropertiesModule = __webpack_require__(6048);
var propertyIsEnumerableModule = __webpack_require__(5296);
var arraySlice = __webpack_require__(206);
var redefine = __webpack_require__(1320);
var shared = __webpack_require__(2309);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);
var uid = __webpack_require__(9711);
var wellKnownSymbol = __webpack_require__(5112);
var wrappedWellKnownSymbolModule = __webpack_require__(6061);
var defineWellKnownSymbol = __webpack_require__(7235);
var setToStringTag = __webpack_require__(8003);
var InternalStateModule = __webpack_require__(9909);
var $forEach = (__webpack_require__(2092).forEach);

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ 4747:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var DOMIterables = __webpack_require__(8324);
var DOMTokenListPrototype = __webpack_require__(8509);
var forEach = __webpack_require__(8533);
var createNonEnumerableProperty = __webpack_require__(8880);

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ 3948:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(7854);
var DOMIterables = __webpack_require__(8324);
var DOMTokenListPrototype = __webpack_require__(8509);
var ArrayIteratorMethods = __webpack_require__(6992);
var createNonEnumerableProperty = __webpack_require__(8880);
var wellKnownSymbol = __webpack_require__(5112);

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ 2564:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var apply = __webpack_require__(2104);
var isCallable = __webpack_require__(614);
var userAgent = __webpack_require__(8113);
var arraySlice = __webpack_require__(206);
var validateArgumentsLength = __webpack_require__(8053);

var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var Function = global.Function;

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      apply(fn, this, args);
    } : fn, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ 1637:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(6992);
var $ = __webpack_require__(2109);
var global = __webpack_require__(7854);
var getBuiltIn = __webpack_require__(5005);
var call = __webpack_require__(6916);
var uncurryThis = __webpack_require__(1702);
var USE_NATIVE_URL = __webpack_require__(590);
var redefine = __webpack_require__(1320);
var redefineAll = __webpack_require__(2248);
var setToStringTag = __webpack_require__(8003);
var createIteratorConstructor = __webpack_require__(4994);
var InternalStateModule = __webpack_require__(9909);
var anInstance = __webpack_require__(5787);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var bind = __webpack_require__(9974);
var classof = __webpack_require__(648);
var anObject = __webpack_require__(9670);
var isObject = __webpack_require__(111);
var $toString = __webpack_require__(1340);
var create = __webpack_require__(30);
var createPropertyDescriptor = __webpack_require__(9114);
var getIterator = __webpack_require__(8554);
var getIteratorMethod = __webpack_require__(1246);
var validateArgumentsLength = __webpack_require__(8053);
var wellKnownSymbol = __webpack_require__(5112);
var arraySort = __webpack_require__(4362);

var ITERATOR = wellKnownSymbol('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);

var n$Fetch = getBuiltIn('fetch');
var N$Request = getBuiltIn('Request');
var Headers = getBuiltIn('Headers');
var RequestPrototype = N$Request && N$Request.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp = global.RegExp;
var TypeError = global.TypeError;
var decodeURIComponent = global.decodeURIComponent;
var encodeURIComponent = global.encodeURIComponent;
var charAt = uncurryThis(''.charAt);
var join = uncurryThis([].join);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var splice = uncurryThis([].splice);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt(init, 0) === '?' ? stringSlice(init, 1) : init : $toString(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call(next, iterator)).done) {
        entryIterator = getIterator(anObject(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call(entryNext, entryIterator)).done ||
          (second = call(entryNext, entryIterator)).done ||
          !call(entryNext, entryIterator).done
        ) throw TypeError('Expected sequence with length 2');
        push(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn(object, key)) {
      push(this.entries, { key: key, value: $toString(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push(this.entries, {
            key: deserialize(shift(entry)),
            value: deserialize(join(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

redefineAll(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push(state.entries, { key: $toString(name), value: $toString(value) });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push(entries, { key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
redefine(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$({ global: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable(Headers)) {
  var headersHas = uncurryThis(HeadersPrototype.has);
  var headersSet = uncurryThis(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject(init)) {
      var body = init.body;
      var headers;
      if (classof(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable(n$Fetch)) {
    $({ global: true, enumerable: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return n$Fetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable(N$Request)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new N$Request(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $({ global: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

module.exports = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};


/***/ }),

/***/ 285:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
__webpack_require__(8783);
var $ = __webpack_require__(2109);
var DESCRIPTORS = __webpack_require__(9781);
var USE_NATIVE_URL = __webpack_require__(590);
var global = __webpack_require__(7854);
var bind = __webpack_require__(9974);
var uncurryThis = __webpack_require__(1702);
var defineProperties = (__webpack_require__(6048).f);
var redefine = __webpack_require__(1320);
var anInstance = __webpack_require__(5787);
var hasOwn = __webpack_require__(2597);
var assign = __webpack_require__(1574);
var arrayFrom = __webpack_require__(8457);
var arraySlice = __webpack_require__(1589);
var codeAt = (__webpack_require__(8710).codeAt);
var toASCII = __webpack_require__(3197);
var $toString = __webpack_require__(1340);
var setToStringTag = __webpack_require__(8003);
var validateArgumentsLength = __webpack_require__(8053);
var URLSearchParamsModule = __webpack_require__(1637);
var InternalStateModule = __webpack_require__(9909);

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global.URL;
var TypeError = global.TypeError;
var parseInt = global.parseInt;
var floor = Math.floor;
var pow = Math.pow;
var charAt = uncurryThis(''.charAt);
var exec = uncurryThis(/./.exec);
var join = uncurryThis([].join);
var numberToString = uncurryThis(1.0.toString);
var pop = uncurryThis([].pop);
var push = uncurryThis([].push);
var replace = uncurryThis(''.replace);
var shift = uncurryThis([].shift);
var split = uncurryThis(''.split);
var stringSlice = uncurryThis(''.slice);
var toLowerCase = uncurryThis(''.toLowerCase);
var unshift = uncurryThis([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt(input, pointer);
  };

  if (chr() == ':') {
    if (charAt(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt(string, 0))
    && ((second = charAt(string, 1)) == ':' || (!normalized && second == '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (
    string.length == 2 ||
    ((third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = replace(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (
              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||
              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;
            else if (chr == ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.shortenPath();
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          } break;

        case PATH:
          if (
            chr == EOF || chr == '/' ||
            (chr == '\\' && url.isSpecial()) ||
            (!stateOverride && (chr == '?' || chr == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
              }
              push(url.path, buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';
            else if (chr == '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt(input, 0) == '[') {
      if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port == '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash == '') {
      this.fragment = null;
      return;
    }
    if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  defineProperties(URLPrototype, {
    // `URL.prototype.href` accessors pair
    // https://url.spec.whatwg.org/#dom-url-href
    href: accessorDescriptor('serialize', 'setHref'),
    // `URL.prototype.origin` getter
    // https://url.spec.whatwg.org/#dom-url-origin
    origin: accessorDescriptor('getOrigin'),
    // `URL.prototype.protocol` accessors pair
    // https://url.spec.whatwg.org/#dom-url-protocol
    protocol: accessorDescriptor('getProtocol', 'setProtocol'),
    // `URL.prototype.username` accessors pair
    // https://url.spec.whatwg.org/#dom-url-username
    username: accessorDescriptor('getUsername', 'setUsername'),
    // `URL.prototype.password` accessors pair
    // https://url.spec.whatwg.org/#dom-url-password
    password: accessorDescriptor('getPassword', 'setPassword'),
    // `URL.prototype.host` accessors pair
    // https://url.spec.whatwg.org/#dom-url-host
    host: accessorDescriptor('getHost', 'setHost'),
    // `URL.prototype.hostname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hostname
    hostname: accessorDescriptor('getHostname', 'setHostname'),
    // `URL.prototype.port` accessors pair
    // https://url.spec.whatwg.org/#dom-url-port
    port: accessorDescriptor('getPort', 'setPort'),
    // `URL.prototype.pathname` accessors pair
    // https://url.spec.whatwg.org/#dom-url-pathname
    pathname: accessorDescriptor('getPathname', 'setPathname'),
    // `URL.prototype.search` accessors pair
    // https://url.spec.whatwg.org/#dom-url-search
    search: accessorDescriptor('getSearch', 'setSearch'),
    // `URL.prototype.searchParams` getter
    // https://url.spec.whatwg.org/#dom-url-searchparams
    searchParams: accessorDescriptor('getSearchParams'),
    // `URL.prototype.hash` accessors pair
    // https://url.spec.whatwg.org/#dom-url-hash
    hash: accessorDescriptor('getHash', 'setHash')
  });
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
redefine(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
redefine(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$({ global: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});


/***/ }),

/***/ 8344:
/***/ (function() {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ 5671:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
/**
 * Global dependencies.
 * @global {Object} document - DOM
 */

var devnull = function() {},
    bundleIdCache = {},
    bundleResultCache = {},
    bundleCallbackQueue = {};


/**
 * Subscribe to bundle load event.
 * @param {string[]} bundleIds - Bundle ids
 * @param {Function} callbackFn - The callback function
 */
function subscribe(bundleIds, callbackFn) {
  // listify
  bundleIds = bundleIds.push ? bundleIds : [bundleIds];

  var depsNotFound = [],
      i = bundleIds.length,
      numWaiting = i,
      fn,
      bundleId,
      r,
      q;

  // define callback function
  fn = function (bundleId, pathsNotFound) {
    if (pathsNotFound.length) depsNotFound.push(bundleId);

    numWaiting--;
    if (!numWaiting) callbackFn(depsNotFound);
  };

  // register callback
  while (i--) {
    bundleId = bundleIds[i];

    // execute callback if in result cache
    r = bundleResultCache[bundleId];
    if (r) {
      fn(bundleId, r);
      continue;
    }

    // add to callback queue
    q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
    q.push(fn);
  }
}


/**
 * Publish bundle load event.
 * @param {string} bundleId - Bundle id
 * @param {string[]} pathsNotFound - List of files not found
 */
function publish(bundleId, pathsNotFound) {
  // exit if id isn't defined
  if (!bundleId) return;

  var q = bundleCallbackQueue[bundleId];

  // cache result
  bundleResultCache[bundleId] = pathsNotFound;

  // exit if queue is empty
  if (!q) return;

  // empty callback queue
  while (q.length) {
    q[0](bundleId, pathsNotFound);
    q.splice(0, 1);
  }
}


/**
 * Execute callbacks.
 * @param {Object or Function} args - The callback args
 * @param {string[]} depsNotFound - List of dependencies not found
 */
function executeCallbacks(args, depsNotFound) {
  // accept function as argument
  if (args.call) args = {success: args};

  // success and error callbacks
  if (depsNotFound.length) (args.error || devnull)(depsNotFound);
  else (args.success || devnull)(args);
}


/**
 * Load individual file.
 * @param {string} path - The file path
 * @param {Function} callbackFn - The callback function
 */
function loadFile(path, callbackFn, args, numTries) {
  var doc = document,
      async = args.async,
      maxTries = (args.numRetries || 0) + 1,
      beforeCallbackFn = args.before || devnull,
      pathname = path.replace(/[\?|#].*$/, ''),
      pathStripped = path.replace(/^(css|img)!/, ''),
      isLegacyIECss,
      e;

  numTries = numTries || 0;

  if (/(^css!|\.css$)/.test(pathname)) {
    // css
    e = doc.createElement('link');
    e.rel = 'stylesheet';
    e.href = pathStripped;

    // tag IE9+
    isLegacyIECss = 'hideFocus' in e;

    // use preload in IE Edge (to detect load errors)
    if (isLegacyIECss && e.relList) {
      isLegacyIECss = 0;
      e.rel = 'preload';
      e.as = 'style';
    }
  } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
    // image
    e = doc.createElement('img');
    e.src = pathStripped;    
  } else {
    // javascript
    e = doc.createElement('script');
    e.src = path;
    e.async = async === undefined ? true : async;
  }

  e.onload = e.onerror = e.onbeforeload = function (ev) {
    var result = ev.type[0];

    // treat empty stylesheets as failures to get around lack of onerror
    // support in IE9-11
    if (isLegacyIECss) {
      try {
        if (!e.sheet.cssText.length) result = 'e';
      } catch (x) {
        // sheets objects created from load errors don't allow access to
        // `cssText` (unless error is Code:18 SecurityError)
        if (x.code != 18) result = 'e';
      }
    }

    // handle retries in case of load failure
    if (result == 'e') {
      // increment counter
      numTries += 1;

      // exit function and try again
      if (numTries < maxTries) {
        return loadFile(path, callbackFn, args, numTries);
      }
    } else if (e.rel == 'preload' && e.as == 'style') {
      // activate preloaded stylesheets
      return e.rel = 'stylesheet'; // jshint ignore:line
    }
    
    // execute callback
    callbackFn(path, result, ev.defaultPrevented);
  };

  // add to document (unless callback returns `false`)
  if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
}


/**
 * Load multiple files.
 * @param {string[]} paths - The file paths
 * @param {Function} callbackFn - The callback function
 */
function loadFiles(paths, callbackFn, args) {
  // listify paths
  paths = paths.push ? paths : [paths];

  var numWaiting = paths.length,
      x = numWaiting,
      pathsNotFound = [],
      fn,
      i;

  // define callback function
  fn = function(path, result, defaultPrevented) {
    // handle error
    if (result == 'e') pathsNotFound.push(path);

    // handle beforeload event. If defaultPrevented then that means the load
    // will be blocked (ex. Ghostery/ABP on Safari)
    if (result == 'b') {
      if (defaultPrevented) pathsNotFound.push(path);
      else return;
    }

    numWaiting--;
    if (!numWaiting) callbackFn(pathsNotFound);
  };

  // load scripts
  for (i=0; i < x; i++) loadFile(paths[i], fn, args);
}


/**
 * Initiate script load and register bundle.
 * @param {(string|string[])} paths - The file paths
 * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
 *   callback or (3) object literal with success/error arguments, numRetries,
 *   etc.
 * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
 *   literal with success/error arguments, numRetries, etc.
 */
function loadjs(paths, arg1, arg2) {
  var bundleId,
      args;

  // bundleId (if string)
  if (arg1 && arg1.trim) bundleId = arg1;

  // args (default is {})
  args = (bundleId ? arg2 : arg1) || {};

  // throw error if bundle is already defined
  if (bundleId) {
    if (bundleId in bundleIdCache) {
      throw "LoadJS";
    } else {
      bundleIdCache[bundleId] = true;
    }
  }

  function loadFn(resolve, reject) {
    loadFiles(paths, function (pathsNotFound) {
      // execute callbacks
      executeCallbacks(args, pathsNotFound);
      
      // resolve Promise
      if (resolve) {
        executeCallbacks({success: resolve, error: reject}, pathsNotFound);
      }

      // publish bundle load event
      publish(bundleId, pathsNotFound);
    }, args);
  }
  
  if (args.returnPromise) return new Promise(loadFn);
  else loadFn();
}


/**
 * Execute callbacks when dependencies have been satisfied.
 * @param {(string|string[])} deps - List of bundle ids
 * @param {Object} args - success/error arguments
 */
loadjs.ready = function ready(deps, args) {
  // subscribe to bundle load event
  subscribe(deps, function (depsNotFound) {
    // execute callbacks
    executeCallbacks(args, depsNotFound);
  });

  return loadjs;
};


/**
 * Manually satisfy bundle dependencies.
 * @param {string} bundleId - The bundle id
 */
loadjs.done = function done(bundleId) {
  publish(bundleId, []);
};


/**
 * Reset loadjs dependencies statuses
 */
loadjs.reset = function reset() {
  bundleIdCache = {};
  bundleResultCache = {};
  bundleCallbackQueue = {};
};


/**
 * Determine if bundle has already been defined
 * @param String} bundleId - The bundle id
 */
loadjs.isDefined = function isDefined(bundleId) {
  return bundleId in bundleIdCache;
};


// export
return loadjs;

}));


/***/ }),

/***/ 591:
/***/ (function(module) {

"use strict";
// Process block-level custom containers
//



module.exports = function container_plugin(md, name, options) {

  // Second param may be useful if you decide
  // to increase minimal allowed marker length
  function validateDefault(params/*, markup*/) {
    return params.trim().split(' ', 2)[0] === name;
  }

  function renderDefault(tokens, idx, _options, env, slf) {

    // add a class to the opening tag
    if (tokens[idx].nesting === 1) {
      tokens[idx].attrJoin('class', name);
    }

    return slf.renderToken(tokens, idx, _options, env, slf);
  }

  options = options || {};

  var min_markers = 3,
      marker_str  = options.marker || ':',
      marker_char = marker_str.charCodeAt(0),
      marker_len  = marker_str.length,
      validate    = options.validate || validateDefault,
      render      = options.render || renderDefault;

  function container(state, startLine, endLine, silent) {
    var pos, nextLine, marker_count, markup, params, token,
        old_parent, old_line_max,
        auto_closed = false,
        start = state.bMarks[startLine] + state.tShift[startLine],
        max = state.eMarks[startLine];

    // Check out the first character quickly,
    // this should filter out most of non-containers
    //
    if (marker_char !== state.src.charCodeAt(start)) { return false; }

    // Check out the rest of the marker string
    //
    for (pos = start + 1; pos <= max; pos++) {
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        break;
      }
    }

    marker_count = Math.floor((pos - start) / marker_len);
    if (marker_count < min_markers) { return false; }
    pos -= (pos - start) % marker_len;

    markup = state.src.slice(start, pos);
    params = state.src.slice(pos, max);
    if (!validate(params, markup)) { return false; }

    // Since start is found, we can report success here in validation mode
    //
    if (silent) { return true; }

    // Search for the end of the block
    //
    nextLine = startLine;

    for (;;) {
      nextLine++;
      if (nextLine >= endLine) {
        // unclosed block should be autoclosed by end of document.
        // also block seems to be autoclosed by end of parent
        break;
      }

      start = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];

      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        // non-empty line with negative indent should stop the list:
        // - ```
        //  test
        break;
      }

      if (marker_char !== state.src.charCodeAt(start)) { continue; }

      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        // closing fence should be indented less than 4 spaces
        continue;
      }

      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      }

      // closing code fence must be at least as long as the opening one
      if (Math.floor((pos - start) / marker_len) < marker_count) { continue; }

      // make sure tail has spaces only
      pos -= (pos - start) % marker_len;
      pos = state.skipSpaces(pos);

      if (pos < max) { continue; }

      // found!
      auto_closed = true;
      break;
    }

    old_parent = state.parentType;
    old_line_max = state.lineMax;
    state.parentType = 'container';

    // this will prevent lazy continuations from ever going past our end marker
    state.lineMax = nextLine;

    token        = state.push('container_' + name + '_open', 'div', 1);
    token.markup = markup;
    token.block  = true;
    token.info   = params;
    token.map    = [ startLine, nextLine ];

    state.md.block.tokenize(state, startLine + 1, nextLine);

    token        = state.push('container_' + name + '_close', 'div', -1);
    token.markup = state.src.slice(start, pos);
    token.block  = true;

    state.parentType = old_parent;
    state.lineMax = old_line_max;
    state.line = nextLine + (auto_closed ? 1 : 0);

    return true;
  }

  md.block.ruler.before('fence', 'container_' + name, container, {
    alt: [ 'paragraph', 'reference', 'blockquote', 'list' ]
  });
  md.renderer.rules['container_' + name + '_open'] = render;
  md.renderer.rules['container_' + name + '_close'] = render;
};


/***/ }),

/***/ 8593:
/***/ (function(module) {

// .name or [index]
var propertyRegx = /\s*\.\s*(\w+)\s*|\s*\[\s*(\d+)\s*\]\s*/g;
var propertyListCache = {};

function parsePropertyString(string) {
  if (propertyListCache[string])
    return propertyListCache[string];

  var result = [];

  string.replace(propertyRegx, function(m, name, index) {
    if (name) {
      result.push(name);
    }
    if (index) {
      result.push(index / 1);
    }
  });

  propertyListCache[string] = result;

  return propertyListCache[string];
};

/**
 * @param {object} sourceObject - The plain object
 * @param {string} propertyString - The chain string for querying
 * @param {any} defaultValue - The Default value if querying failed
 */
module.exports = function(sourceObject, propertyString, defaultValue) {
  var propertyList = parsePropertyString(propertyString);
  var result = sourceObject, stopped = false;

  propertyList.forEach(function(property){ 
    if (typeof result === 'object' && result.hasOwnProperty(property)) {
      result = result[property];
    } else {
      stopped = true;
    }
  });

  return stopped ? defaultValue : result;
};

/***/ }),

/***/ 5666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 2401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "imgs/default.jpg");

/***/ }),

/***/ 8067:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";t.a={name:"kindeditor-component",data:function(){return{editor:null,outContent:this.content}},props:{isReadonly:{type:Boolean,default:!1},header:{type:Object,default:function(){return{}}},content:{type:String,default:""},id:{type:String,required:!0},width:{type:String},height:{type:String},minWidth:{type:Number,default:650},minHeight:{type:Number,default:100},items:{type:Array,default:function(){return["source","|","undo","redo","|","preview","print","template","code","cut","copy","paste","plainpaste","wordpaste","|","justifyleft","justifycenter","justifyright","justifyfull","insertorderedlist","insertunorderedlist","indent","outdent","subscript","superscript","clearhtml","quickformat","selectall","|","fullscreen","/","formatblock","fontname","fontsize","|","forecolor","hilitecolor","bold","italic","underline","strikethrough","lineheight","removeformat","|","image","multiimage","flash","media","insertfile","table","hr","emoticons","baidumap","pagebreak","anchor","link","unlink","|","about"]}},noDisableItems:{type:Array,default:function(){return["source","fullscreen"]}},filterMode:{type:Boolean,default:!0},htmlTags:{type:Object,default:function(){return{font:["color","size","face",".background-color"],span:["style"],div:["class","align","style"],table:["class","border","cellspacing","cellpadding","width","height","align","style"],"td,th":["class","align","valign","width","height","colspan","rowspan","bgcolor","style"],a:["class","href","target","name","style"],embed:["src","width","height","type","loop","autostart","quality","style","align","allowscriptaccess","/"],img:["src","width","height","border","alt","title","align","style","/"],hr:["class","/"],br:["/"],"p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6":["align","style"],"tbody,tr,strong,b,sub,sup,em,i,u,strike":[]}}},wellFormatMode:{type:Boolean,default:!0},resizeType:{type:Number,default:2},themeType:{type:String,default:"default"},langType:{type:String,default:"zh-CN"},designMode:{type:Boolean,default:!0},fullscreenMode:{type:Boolean,default:!1},basePath:{type:String},themesPath:{type:String},pluginsPath:{type:String,default:""},langPath:{type:String},minChangeSize:{type:Number,default:5},loadStyleMode:{type:Boolean,default:!0},urlType:{type:String,default:""},newlineTag:{type:String,default:"p"},pasteType:{type:Number,default:2},dialogAlignType:{type:String,default:"page"},shadowMode:{type:Boolean,default:!0},zIndex:{type:Number,default:811213},useContextmenu:{type:Boolean,default:!0},syncType:{type:String,default:"form"},indentChar:{type:String,default:"\t"},cssPath:{type:[String,Array]},cssData:{type:String},bodyClass:{type:String,default:"ke-content"},colorTable:{type:Array},afterCreate:{type:Function},afterChange:{type:Function},afterTab:{type:Function},afterFocus:{type:Function},afterBlur:{type:Function},afterUpload:{type:Function},uploadJson:{type:String},fileManagerJson:{type:String},allowPreviewEmoticons:{type:Boolean,default:!0},allowImageUpload:{type:Boolean,default:!0},allowFlashUpload:{type:Boolean,default:!0},allowMediaUpload:{type:Boolean,default:!0},allowFileUpload:{type:Boolean,default:!0},allowFileManager:{type:Boolean,default:!1},fontSizeTable:{type:Array,default:function(){return["9px","10px","12px","14px","16px","18px","24px","32px"]}},imageTabIndex:{type:Number,default:0},formatUploadUrl:{type:Boolean,default:!0},fullscreenShortcut:{type:Boolean,default:!1},extraFileUploadParams:{type:Object,default:function(){return{}}},filePostName:{type:String,default:"imgFile"},fillDescAfterUploadImage:{type:Boolean,default:!1},afterSelectFile:{type:Function},pagebreakHtml:{type:String,default:'<hr style="page-break-after: always;" class="ke-pagebreak" />'},allowImageRemote:{type:Boolean,default:!0},autoHeightMode:{type:Boolean,default:!1},fixToolBar:{type:Boolean,default:!1},tabIndex:{type:Number}},watch:{content:function(e){this.editor&&e!==this.outContent&&this.editor.html(e)},outContent:function(e){this.$emit("update:content",e),this.$emit("on-content-change",e)},isReadonly:function(e){this.editor.readonly(e)}},mounted:function(){this.initEditor()},activated:function(){this.initEditor()},deactivated:function(){this.removeEditor()},methods:{removeEditor:function(){window.KindEditor.remove("#"+this.id)},initEditor:function(){var e=this;e.removeEditor(),e.editor=window.KindEditor.create("#"+this.id,{header:e.header,width:e.width,height:e.height,minWidth:e.minWidth,minHeight:e.minHeight,items:e.items,noDisableItems:e.noDisableItems,filterMode:e.filterMode,htmlTags:e.htmlTags,wellFormatMode:e.wellFormatMode,resizeType:e.resizeType,themeType:e.themeType,langType:e.langType,designMode:e.designMode,fullscreenMode:e.fullscreenMode,basePath:e.basePath,themesPath:e.themesPath,pluginsPath:e.pluginsPath,langPath:e.langPath,minChangeSize:e.minChangeSize,loadStyleMode:e.loadStyleMode,urlType:e.urlType,newlineTag:e.newlineTag,pasteType:e.pasteType,dialogAlignType:e.dialogAlignType,shadowMode:e.shadowMode,zIndex:e.zIndex,useContextmenu:e.useContextmenu,syncType:e.syncType,indentChar:e.indentChar,cssPath:e.cssPath,cssData:e.cssData,bodyClass:e.bodyClass,colorTable:e.colorTable,afterCreate:e.afterCreate,afterChange:function(){e.outContent=this.html()},afterTab:e.afterTab,afterFocus:e.afterFocus,afterBlur:e.afterBlur,afterUpload:e.afterUpload,uploadJson:e.uploadJson,fileManagerJson:e.fileManagerJson,allowPreviewEmoticons:e.allowPreviewEmoticons,allowImageUpload:e.allowImageUpload,allowFlashUpload:e.allowFlashUpload,allowMediaUpload:e.allowMediaUpload,allowFileUpload:e.allowFileUpload,allowFileManager:e.allowFileManager,fontSizeTable:e.fontSizeTable,imageTabIndex:e.imageTabIndex,formatUploadUrl:e.formatUploadUrl,fullscreenShortcut:e.fullscreenShortcut,extraFileUploadParams:e.extraFileUploadParams,filePostName:e.filePostName,fillDescAfterUploadImage:e.fillDescAfterUploadImage,afterSelectFile:e.afterSelectFile,pagebreakHtml:e.pagebreakHtml,allowImageRemote:e.allowImageRemote,autoHeightMode:e.autoHeightMode,fixToolBar:e.fixToolBar,tabIndex:e.tabIndex})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(2),n={install:function(e,t){e.component("editor",o.a)}};t.default=n},function(e,t,a){"use strict";var o=a(0),n=a(4),l=a(3),i=l(o.a,n.a,!1,null,null,null);t.a=i.exports},function(e,t){e.exports=function(e,t,a,o,n,l){var i,r=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(i=e,r=e.default);var s="function"==typeof r?r.options:r;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),a&&(s.functional=!0),n&&(s._scopeId=n);var u;if(l?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},s._ssrRegister=u):o&&(u=o),u){var p=s.functional,f=p?s.render:s.beforeCreate;p?(s._injectStyles=u,s.render=function(e,t){return u.call(t),f(e,t)}):s.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:r,options:s}}},function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"kindeditor-component"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.outContent,expression:"outContent"}],attrs:{id:e.id,name:"content"},domProps:{value:e.outContent},on:{input:function(t){t.target.composing||(e.outContent=t.target.value)}}})])},n=[],l={render:o,staticRenderFns:n};t.a=l}])});
//# sourceMappingURL=vue-kindeditor.js.map

/***/ }),

/***/ 9608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_barcode; }
});

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__(4944);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat.js
var es_array_unscopables_flat = __webpack_require__(3792);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-barcode/xy-barcode.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






//
//
//
/* harmony default export */ var xy_barcodevue_type_script_lang_js_ = ({
  name: 'xyBarcode',
  render: function render(createElement) {
    return createElement('div', [createElement(this.elementTag, {
      style: {
        display: this.valid ? undefined : 'none'
      },
      'class': ['vue-barcode-element']
    }), createElement('div', {
      style: {
        display: this.valid ? 'none' : undefined
      }
    }, this.$slots.default)]);
  },
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type: [String, Boolean],
      default: true
    },
    text: [String, Number],
    fontOptions: [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator: function validator(value) {
        return ['canvas', 'svg', 'img'].indexOf(value) !== -1;
      }
    }
  },
  watch: {
    value: {
      handler: function handler(object, old) {
        this.renderBarcode();
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      loadedScript: false,
      valid: true
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.loadScript();

            case 2:
              this.loadedScript = true;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    loadScript: function loadScript() {
      var _this = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        that.VueScript2.load(_this.$xyutil.config.jsBaseUrl + 'libs/jsbarcode/dist/JsBarcode.all.min.js').then(function () {
          resolve();
        });
      });
    },
    renderBarcode: function renderBarcode() {
      if (!this.value) {
        return;
      }

      var that = this;
      var settings = {
        format: this.format,
        width: this.width,
        height: this.height,
        displayValue: this.displayValue,
        text: this.text,
        fontOptions: this.fontOptions,
        font: this.font,
        textAlign: this.textAlign,
        textPosition: this.textPosition,
        textMargin: this.textMargin,
        fontSize: this.fontSize,
        background: this.background,
        lineColor: this.lineColor,
        margin: this.margin,
        marginTop: this.marginTop,
        marginBottom: this.marginBottom,
        marginLeft: this.marginLeft,
        marginRight: this.marginRight,
        flat: this.flat,
        ean128: this.ean128,
        valid: function valid(_valid) {
          that.valid = _valid;
        },
        elementTag: this.elementTag
      };
      this.removeUndefinedProps(settings);
      JsBarcode(this.$el.querySelector('.vue-barcode-element'), String(this.value), settings);
    },
    removeUndefinedProps: function removeUndefinedProps(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
          delete obj[prop];
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-barcode/xy-barcode.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_barcode_xy_barcodevue_type_script_lang_js_ = (xy_barcodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-barcode/xy-barcode.vue
var render, staticRenderFns
;



/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_barcode_xy_barcodevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6f81f134",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-barcode/xy-barcode.vue"
/* harmony default export */ var xy_barcode = (component.exports);

/***/ }),

/***/ 7113:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_builder_page; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-builder-page/xy-builder-page.vue?vue&type=template&id=1ac69d7c&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-wrapper" },
    [
      _vm._l(_vm.data, function (item, index) {
        return [
          item.type == "banner"
            ? _c("div", { key: index }, [
                _c(
                  "div",
                  {
                    staticClass: "banner-instalce",
                    style: { width: "100%", height: item.height },
                  },
                  [
                    _c(
                      "el-carousel",
                      { attrs: { height: item.height, interval: 30000 } },
                      _vm._l(item.lists, function (slider, keyslider) {
                        return _c("el-carousel-item", { key: keyslider }, [
                          _c(
                            "div",
                            {
                              staticClass: "bg flex pos-a",
                              style: { height: item.height },
                            },
                            [
                              slider.background.image
                                ? _c("img", {
                                    staticClass: "bgImg",
                                    style: {
                                      width: "100%",
                                      height: slider.height,
                                    },
                                    attrs: { src: slider.background.image },
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              slider.bgVideo
                                ? _c("video", {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      "webkit-playsinline": "true",
                                      playsinline: "true",
                                      src: slider.bgVideo.src,
                                      autoplay: "autoplay",
                                      loop: slider.bgVideo.loop,
                                    },
                                  })
                                : _vm._e(),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "pos-a container flex space-between flex-alignCenter",
                              style: { height: item.height },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "tc-w xs-margin-center" },
                                [
                                  _c(
                                    "el-row",
                                    {
                                      attrs: {
                                        type: "flex",
                                        justify: "spance-between",
                                        align: "middle",
                                      },
                                    },
                                    [
                                      _c(
                                        "el-col",
                                        {
                                          attrs: {
                                            xs: 24,
                                            sm: 24,
                                            md: 12,
                                            lg: 11,
                                            xl: 12,
                                          },
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "m-b title" },
                                            [_vm._v(_vm._s(slider.title))]
                                          ),
                                          _vm._v(" "),
                                          slider.subtitle
                                            ? _c(
                                                "div",
                                                { staticClass: "m-b subtitle" },
                                                [
                                                  _vm._v(
                                                    _vm._s(slider.subtitle)
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          slider.description
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "m-b-md description hidden-xs-only",
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(slider.description)
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          slider.actions
                                            ? _c(
                                                "div",
                                                { staticClass: "ts-14" },
                                                _vm._l(
                                                  slider.actions,
                                                  function (btn, index2) {
                                                    return _c(
                                                      "el-button",
                                                      {
                                                        key: index2,
                                                        attrs: {
                                                          size: btn.size,
                                                          plain: btn.plain,
                                                          round: btn.round,
                                                          type: btn.type,
                                                        },
                                                        on: {
                                                          click: function (
                                                            $event
                                                          ) {
                                                            return _vm.$xyutil.navigateTo(
                                                              { url: btn.url }
                                                            )
                                                          },
                                                        },
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(btn.label) +
                                                            "\n                                            "
                                                        ),
                                                      ]
                                                    )
                                                  }
                                                ),
                                                1
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("el-col", {
                                        attrs: {
                                          xs: 0,
                                          sm: 0,
                                          md: 6,
                                          lg: 8,
                                          xl: 10,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div"),
                            ]
                          ),
                        ])
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ])
            : item.type == "slider"
            ? _c(
                "div",
                { key: index },
                [
                  _c(
                    "el-carousel",
                    {
                      attrs: {
                        height: item.height,
                        interval: 5000,
                        arrow: "always",
                      },
                    },
                    [_c("el-carousel-item")],
                    1
                  ),
                ],
                1
              )
            : item.type == "session1"
            ? _c("div", { key: index }, [
                _c("div", { staticClass: "bg-white" }, [
                  _c(
                    "div",
                    { staticClass: "container" },
                    [
                      _c(
                        "el-row",
                        {
                          staticStyle: { padding: "50px" },
                          attrs: {
                            type: "flex",
                            justify: "center",
                            align: "middle",
                          },
                        },
                        [
                          _c(
                            "el-col",
                            {
                              staticStyle: {
                                "text-align": "center",
                                "font-size": "20px",
                                "margin-bottom": "80px",
                              },
                              attrs: { span: 16 },
                            },
                            [
                              _c("div", { staticStyle: { width: "550px" } }, [
                                _c("h3", [_vm._v(_vm._s(item.title))]),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticStyle: { "font-size": "16px" } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(item.description) +
                                        "\n                                "
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("el-col", { attrs: { span: 8 } }, [
                            _c("img", {
                              staticStyle: { height: "200px" },
                              attrs: { src: item.image },
                            }),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ])
            : item.type == "session2"
            ? _c("div", { key: index }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "session2 flex flex-column flex-center flex-alignCenter",
                    style: { height: item.height, background: item.background },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "container p-b-md",
                        style: { color: item.style.color },
                      },
                      [
                        item.title
                          ? _c(
                              "div",
                              { staticClass: "text-center m-b-md tw5 ts-32" },
                              [_vm._v(_vm._s(item.title))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        item.description
                          ? _c(
                              "div",
                              { staticClass: "text-center m-b-lg ts-17" },
                              [_vm._v(_vm._s(item.description))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        item.list
                          ? _c(
                              "el-row",
                              {
                                staticClass: "list flex flex-wrap",
                                attrs: {
                                  type: "flex",
                                  justify: "center",
                                  align: "middle",
                                },
                              },
                              _vm._l(item.list, function (item2, index2) {
                                return _c(
                                  "el-col",
                                  {
                                    key: index2,
                                    staticClass:
                                      "item m-b-md xs-flex xs-flex-alignCenter xs-space-between",
                                    attrs: { xs: 24, md: 8, lg: 8 },
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "text-center m-b xs-m-b m-b-md",
                                      },
                                      [
                                        _c("img", {
                                          style: {
                                            borderRadius: item2.imageRadius,
                                          },
                                          attrs: {
                                            src: item2.image
                                              ? item2.image
                                              : "https://i.loli.net/2020/07/08/1HlwfyUQ5zjr4Tg.png",
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "p-l p-r flex-1" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "title text-center xs-text-left ts-16 tw6",
                                          },
                                          [_vm._v(_vm._s(item2.title))]
                                        ),
                                        _vm._v(" "),
                                        item2.description
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "title text-center xs-text-left ts-14 lh-1-8 m-t-md",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(item2.description)
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                      ]
                                    ),
                                  ]
                                )
                              }),
                              1
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                  ]
                ),
              ])
            : item.type == "session3"
            ? _c("div", { key: index }, [
                _c(
                  "div",
                  {
                    staticClass: "session3",
                    style: { height: item.height, background: item.background },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "container" },
                      [
                        _c(
                          "el-row",
                          {
                            staticStyle: { "flex-wrap": "wrap" },
                            attrs: {
                              type: "flex",
                              justify: "center",
                              align: "middle",
                            },
                          },
                          [
                            _c("el-col", { attrs: { span: 24 } }, [
                              _c("div", { staticClass: "text-center m-b-md" }, [
                                _c(
                                  "div",
                                  { staticClass: "text-center m-b tw5 ts-32" },
                                  [_vm._v(_vm._s(item.title))]
                                ),
                                _vm._v(" "),
                                _c("p", { staticClass: "ts-18 lh-2" }, [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(item.description) +
                                      "\n                                "
                                  ),
                                ]),
                              ]),
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-col",
                              {
                                staticClass: "text-center",
                                attrs: { span: 24 },
                              },
                              [
                                _c("img", {
                                  staticStyle: { width: "80%" },
                                  attrs: { src: item.image.src },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ])
            : item.type == "session4"
            ? _c("div", { key: index }, [
                _c(
                  "div",
                  {
                    staticClass: "session4 p-t-lg p-b-lg",
                    style: { height: item.height, background: item.background },
                  },
                  [
                    _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "text-center" }, [
                        _c(
                          "span",
                          {
                            staticClass:
                              "bg-white button text-primary cursor-pointer ts-20",
                            on: {
                              click: function ($event) {
                                return _vm.$xyutil.navigateTo({
                                  url: item.button.url,
                                })
                              },
                            },
                          },
                          [_vm._v(_vm._s(item.button.title))]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ])
            : item.type == "session5"
            ? _c("div", { key: index }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "session5 p-t-lg p-b-lg p-l-sm p-r-sm bg-white",
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "container p-t-lg p-b-md" },
                      [
                        item.title
                          ? _c(
                              "div",
                              { staticClass: "text-center m-b-lg tw5 ts-32" },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(item.title) +
                                    "\n                        "
                                ),
                                _c(
                                  "el-tooltip",
                                  {
                                    staticClass: "item",
                                    attrs: {
                                      effect: "dark",
                                      content: item.help,
                                      placement: "right-start",
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "xyicon xyicon-help-o cursor-pointer ts-12",
                                    }),
                                  ]
                                ),
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "el-row",
                          {
                            staticClass: "flex flex-wrap",
                            attrs: { gutter: 40, type: "flex" },
                          },
                          [
                            _vm._l(item.list, function (item1, key) {
                              return [
                                _c(
                                  "el-col",
                                  {
                                    key: key,
                                    staticClass:
                                      "pos-r m-b-md m-t-md cursor-pointer flex flex-center flex-alignCenter",
                                    attrs: { xs: 12, sm: 8, md: 8, lg: 6 },
                                  },
                                  [
                                    _c("div", { staticClass: "item" }, [
                                      _c("img", {
                                        staticClass: "image",
                                        staticStyle: {
                                          filter: "grayscale(100%)",
                                          "max-width": "145px",
                                          "max-height": "65px",
                                        },
                                        style: {
                                          opacity: item1.opacity
                                            ? item1.opacity
                                            : "0.5",
                                        },
                                        attrs: { src: item1.image },
                                      }),
                                      _vm._v(" "),
                                      _c("div", {
                                        staticClass: "pos-a hover hidden",
                                      }),
                                    ]),
                                  ]
                                ),
                              ]
                            }),
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "ts-10 text-gray text-center m-t-lg",
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ])
            : _vm._e(),
        ]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-builder-page/xy-builder-page.vue?vue&type=template&id=1ac69d7c&scoped=true&

// EXTERNAL MODULE: ./src/xy-three-psv/xy-three-psv.vue + 4 modules
var xy_three_psv = __webpack_require__(6445);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-builder-page/xy-builder-page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_builder_pagevue_type_script_lang_js_ = ({
  name: 'XyBuilderPage',
  components: {
    'three-psv': xy_three_psv["default"]
  },
  props: {
    data: ''
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  mounted: function mounted() {},
  activated: function activated() {//console.log('activated')
  },
  deativated: function deativated() {//console.log('deactivated')
  },
  beforeUpdate: function beforeUpdate() {},
  updated: function updated() {},
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {},
  computed: {},
  watch: {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/xy-builder-page/xy-builder-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_builder_page_xy_builder_pagevue_type_script_lang_js_ = (xy_builder_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-builder-page/xy-builder-page.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_builder_page_xy_builder_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1ac69d7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-builder-page/xy-builder-page.vue"
/* harmony default export */ var xy_builder_page = (component.exports);

/***/ }),

/***/ 2515:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_captcha; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-captcha/xy-captcha.vue?vue&type=template&id=e909f1b4&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loadedScript
    ? _c(
        "Captcha",
        {
          attrs: {
            id: _vm.id,
            scene: _vm.capthaOptions.scene,
            type: _vm.capthaOptions.type,
            parm: _vm.capthaOptions.options,
            url: _vm.capthaOptions.url,
          },
          on: { callback: _vm.callback },
        },
        [
          _c(
            "div",
            { on: { click: _vm.doClick } },
            [
              _vm._t("default", function () {
                return [
                  _c("input", {
                    attrs: { id: _vm.id, type: "button", value: "点击验证" },
                  }),
                ]
              }),
            ],
            2
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-captcha/xy-captcha.vue?vue&type=template&id=e909f1b4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-captcha/xy-captcha.vue?vue&type=script&lang=js&





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_captchavue_type_script_lang_js_ = ({
  name: "XyCaptcha",
  props: {
    id: {
      type: String,
      default: 'Captcha'
    },
    scene: {
      type: String,
      default: 'common'
    },
    type: {
      type: String,
      default: '' // TencentCaptcha、Geetest

    },
    url: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      loadedScript: false,
      capthaOptions: {
        scene: 'common',
        type: '',
        url: '',
        options: {}
      }
    };
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.loadScript();

            case 2:
              Vue.component('Captcha', window['vue-social-captcha'].default);
              _this.loadedScript = true;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    if (!this.type) {
      this.capthaOptions = Object.assign(this.capthaOptions, this.$xyutil.config.getCapthaOptions());
    } else {
      this.capthaOptions = Object.assign(this.capthaOptions, this.$props);
    }

    console.log(this.capthaOptions);
  },
  methods: {
    // status: 1成功,2验证中,0失败
    // res: 三方返回的原始数据
    callback: function callback(status, res) {
      console.log(status);

      if (false) {}

      switch (status) {
        case 1:
          this.$emit('success', res);
          break;

        case 0:
          console.log(res);

          if (res.CaptchaCode == 1) {
            this.$emit('success', res);
          } else {
            this.$emit('success', res);
            return;
            this.$xyutil.showToast({
              title: '验证失败:' + res.CaptchaMsg,
              icon: 'loading',
              duration: 1000
            });
            return false;
          }

          break;

        default:
          break;
      }
    },
    doClick: function doClick(e) {
      // 没有指定验证参数时候自动回调用
      if (this.capthaOptions.type == "") {
        this.$emit('success', {});
      }
    },
    loadScript: function loadScript() {
      var _this2 = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        that.VueScript2.load(_this2.$xyutil.config.jsBaseUrl + 'libs/vue-social-captcha/dist/vue-social-captcha.umd.min.js').then(function () {
          resolve();
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-captcha/xy-captcha.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_captcha_xy_captchavue_type_script_lang_js_ = (xy_captchavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-captcha/xy-captcha.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_captcha_xy_captchavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e909f1b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-captcha/xy-captcha.vue"
/* harmony default export */ var xy_captcha = (component.exports);

/***/ }),

/***/ 4059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_cascader; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-cascader/xy-cascader.vue?vue&type=template&id=178f003c&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.initData.showInput
        ? _c("el-input", {
            attrs: { placeholder: "请输入" },
            on: { change: _vm.onChange },
            model: {
              value: _vm.content2,
              callback: function ($$v) {
                _vm.content2 = $$v
              },
              expression: "content2",
            },
          })
        : _c("el-cascader", {
            attrs: {
              placeholder: _vm.initData.placeholder,
              size: _vm.size,
              disabled: _vm.initData.disabled,
              options: _vm.initData.options,
              props: _vm.myprops,
            },
            on: { change: _vm.onChange },
            model: {
              value: _vm.content,
              callback: function ($$v) {
                _vm.content = $$v
              },
              expression: "content",
            },
          }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-cascader/xy-cascader.vue?vue&type=template&id=178f003c&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(9600);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(2564);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(7941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(5003);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(9337);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-cascader/xy-cascader.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_cascadervue_type_script_lang_js_ = ({
  name: 'XyCascader',
  props: {
    size: {
      type: String,
      default: ''
    },
    item: {
      type: Object,
      default: function _default() {
        return {
          extra: {}
        };
      }
    },
    value: {
      type: [Array, String],
      default: []
    },
    init: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0
        };
      }
    }
  },
  data: function data() {
    return {
      initData: {
        disabled: false,
        options: [],
        action: '',
        lazy: false,
        multiple: false,
        labelField: 'label',
        valueField: 'value',
        nodeKey: 'value',
        deep: 1,
        // 获取数据深度
        showInput: false,
        // 是开启手动输入
        leaf: 'leaf',
        maxLevel: 3,
        placeholder: '请选择'
      },
      content: [],
      content2: '',
      myprops: {}
    };
  },
  watch: {
    'init.showInput': {
      handler: function handler(val) {
        this.initData = Object.assign(this.initData, this.init);
      },
      deep: true
    },
    value: function value(val) {
      if (this.value.length == 0 || !Array.isArray(this.value)) {
        this.content = [];
      } else {
        this.content = this.value;
      }

      this.initData.placeholder = this.content.join('/');
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var nodes, self;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.initData = Object.assign(this.initData, this.init, this.item.extra);

              if (this.value.length == 0 || !Array.isArray(this.value)) {
                this.content = [];
              } else {
                this.content = this.value;
              }

              this.initData.placeholder = this.content.join('/');
              this.content2 = this.value;

              if (!(this.initData.options.length == 0 && this.initData.lazy)) {
                _context2.next = 9;
                break;
              }

              _context2.next = 7;
              return this.getNode({});

            case 7:
              nodes = _context2.sent;
              this.initData.options = nodes;

            case 9:
              self = this;
              this.myprops = {
                leaf: self.initData.leaf,
                multiple: self.initData.multiple,
                label: self.initData.labelField,
                value: self.initData.valueField,
                lazy: self.initData.lazy,
                lazyLoad: function lazyLoad(node, resolve) {
                  var level = node.level;
                  setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var params, nodes;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            params = {}; //console.log(node)

                            params[self.initData.nodeKey] = node.data[self.initData.nodeKey];
                            _context.next = 4;
                            return self.getNode(params);

                          case 4:
                            nodes = _context.sent;

                            if (node.level == self.initData.maxLevel - 1) {
                              nodes.forEach(function (element) {
                                element[self.initData.leaf] = true;
                              });
                            }

                            resolve(nodes); // 通过调用resolve将子节点数据返回，通知组件数据加载完成

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })), 2000);
                }
              };

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    onChange: function onChange() {
      if (this.initData.showInput) {
        this.$emit('input', this.content2);
      } else {
        this.$emit('input', this.content);
      }
    },
    getNode: function getNode(data) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this.$xyutil.request({
                  url: _this.initData.action,
                  data: _objectSpread({
                    deep: _this.initData.deep
                  }, data),
                  method: 'get'
                });

              case 2:
                res = _context3.sent;

                if (!(res.code == 200)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", res.data.dataList);

              case 7:
                self.util.showToast({
                  title: res.msg,
                  icon: 'loading',
                  duration: 3000
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-cascader/xy-cascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_cascader_xy_cascadervue_type_script_lang_js_ = (xy_cascadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-cascader/xy-cascader.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_cascader_xy_cascadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "178f003c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-cascader/xy-cascader.vue"
/* harmony default export */ var xy_cascader = (component.exports);

/***/ }),

/***/ 2035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_cascader2; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-cascader2/xy-cascader2.vue?vue&type=template&id=0910b1a6&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        [
          _c(
            "el-select",
            {
              staticClass: "block",
              attrs: { placeholder: "请选择" },
              on: { change: _vm.onSelectChange },
              model: {
                value: _vm.content[0],
                callback: function ($$v) {
                  _vm.$set(_vm.content, 0, $$v)
                },
                expression: "content[0]",
              },
            },
            _vm._l(_vm.options, function (item, key) {
              return _c("el-option", {
                key: key,
                attrs: { label: item.title, value: item.value },
              })
            }),
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-radio-group",
        {
          staticClass: "m-t",
          on: { change: _vm.onChange },
          model: {
            value: _vm.content[1],
            callback: function ($$v) {
              _vm.$set(_vm.content, 1, $$v)
            },
            expression: "content[1]",
          },
        },
        _vm._l(_vm.optionsLevel2, function (item2, key2) {
          return _c(
            "el-radio",
            { key: key2, attrs: { label: item2.value, border: "" } },
            [_vm._v("\n            " + _vm._s(item2.title) + "\n        ")]
          )
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-cascader2/xy-cascader2.vue?vue&type=template&id=0910b1a6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(4553);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-cascader2/xy-cascader2.vue?vue&type=script&lang=js&
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_cascader2vue_type_script_lang_js_ = (_defineProperty({
  name: 'XyCascader2',
  props: {
    value: {
      type: [],
      default: ''
    },
    options: Array,
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0
        };
      }
    }
  },
  data: function data() {
    var self = this;
    return {
      content: [],
      optionsLevel2: []
    };
  },
  created: function created() {
    var _this = this,
        _this$options$index;

    var index = '';

    if (this.value.length == 0 || !Array.isArray(this.value)) {
      this.value = ['', ''];
    } else {
      this.content = this.value;
    }

    if (this.content[0]) {
      index = this.options.findIndex(function (item) {
        return item.value === _this.content[0];
      });
    }

    if (this.options[index] && (_this$options$index = this.options[index]) !== null && _this$options$index !== void 0 && _this$options$index.children) {
      this.optionsLevel2 = this.options[index].children;
    } else {
      this.optionsLevel2 = [];
    }
  },
  watch: {
    value: function value(val) {
      var _this2 = this;

      if (this.value.length == 0 || !Array.isArray(this.value)) {
        this.value = ['', ''];
      } else {
        this.content = this.value;
      }

      if (this.content[0]) {
        index = this.options.findIndex(function (item) {
          return item.value === _this2.content[0];
        });
      }

      if (this.options[index].children) {
        this.optionsLevel2 = this.options[index].children;
      } else {
        this.optionsLevel2 = [];
      }
    }
  },
  methods: {
    onSelectChange: function onSelectChange() {
      var _this3 = this;

      var index = this.options.findIndex(function (item) {
        return item.value === _this3.content[0];
      });

      if (this.options[index].children) {
        this.optionsLevel2 = this.options[index].children;
      } else {
        this.optionsLevel2 = [];
      }

      this.content[1] = '';
    },
    onChange: function onChange() {
      this.$emit('input', this.content);
    }
  }
}, "watch", {}));
;// CONCATENATED MODULE: ./src/xy-cascader2/xy-cascader2.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_cascader2_xy_cascader2vue_type_script_lang_js_ = (xy_cascader2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-cascader2/xy-cascader2.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_cascader2_xy_cascader2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0910b1a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-cascader2/xy-cascader2.vue"
/* harmony default export */ var xy_cascader2 = (component.exports);

/***/ }),

/***/ 1333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_checkbox_group; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-checkbox-group/xy-checkbox-group.vue?vue&type=template&id=3280382a&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-checkbox-group",
    {
      on: { change: _vm.handleCheckChange },
      model: {
        value: _vm.checkedList,
        callback: function ($$v) {
          _vm.checkedList = $$v
        },
        expression: "checkedList",
      },
    },
    _vm._l(_vm.options, function (item1, key1, index1) {
      return _c(
        "el-checkbox",
        { key: index1, attrs: { disabled: _vm.disabled, label: item1.value } },
        [_vm._v("\n        " + _vm._s(item1.title) + "\n    ")]
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-checkbox-group/xy-checkbox-group.vue?vue&type=template&id=3280382a&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(3123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(1058);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-checkbox-group/xy-checkbox-group.vue?vue&type=script&lang=js&
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }














//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_checkbox_groupvue_type_script_lang_js_ = ({
  name: 'XyCheckboxGroup',
  props: {
    value: {
      type: [String, Array]
    },
    disabled: false,
    options: {
      type: [Array]
    }
  },
  data: function data() {
    return {
      checkedList: []
    };
  },
  created: function created() {
    if (this.value == '') {
      this.checkedList = [];
    } else {
      if (typeof this.value == 'string') {
        this.checkedList = this.value.split(',');
      } else {
        this.checkedList = this.value;
      } // 数据类型匹配，当选项保存为1,2,3格式被explode解析成数组后会丢失int类型变成string类型，这里进行检测恢复
      // 判断options的第一个选项值，如果是数字则认为需要将值纠正未int


      if (typeof this.options[0].value == 'number') {
        var _iterator = _createForOfIteratorHelper(this.checkedList),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var it = _step.value;
            it = parseInt(it);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }

    console.log(this.checkedList);
  },
  methods: {
    handleCheckChange: function handleCheckChange(value) {
      this.$emit('input', value);
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-checkbox-group/xy-checkbox-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_checkbox_group_xy_checkbox_groupvue_type_script_lang_js_ = (xy_checkbox_groupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-checkbox-group/xy-checkbox-group.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_checkbox_group_xy_checkbox_groupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3280382a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-checkbox-group/xy-checkbox-group.vue"
/* harmony default export */ var xy_checkbox_group = (component.exports);

/***/ }),

/***/ 8325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_checkbox_tree; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-checkbox-tree/xy-checkbox-tree.vue?vue&type=template&id=128045a6&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-tree",
    _vm._b(
      {
        ref: "checkboxtree",
        attrs: {
          props: { children: "children", label: "title" },
          "node-key": _vm.nodeKey,
          "default-expanded-keys": [_vm.data[0][_vm.nodeKey]],
          "check-strictly": false,
          "default-checked-keys": [],
          "show-checkbox": "",
        },
        on: { "check-change": _vm.treeOnChange },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var node = ref.node
              var data = ref.data
              return _c(
                "span",
                { staticClass: "custom-tree-node" },
                _vm._l(_vm.columns, function (col) {
                  return _c("span", { key: col.id, staticClass: "m-r" }, [
                    _vm._v(
                      "\n            " + _vm._s(data[col.name]) + "\n        "
                    ),
                  ])
                }),
                0
              )
            },
          },
        ]),
      },
      "el-tree",
      _vm.$props,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-checkbox-tree/xy-checkbox-tree.vue?vue&type=template&id=128045a6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-checkbox-tree/xy-checkbox-tree.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_checkbox_treevue_type_script_lang_js_ = ({
  name: 'XyCheckboxTree',
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    nodeKey: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    data: {
      type: [Array],
      default: function _default() {
        return [];
      }
    },
    columns: {
      type: [Array],
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {};
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {
    var that = this;
    that.$nextTick(function () {
      // 利用此方法而不是default-checked-keys属性解决父节点半选状态问题。
      if (that.value.length > 0) {
        that.value.forEach(function (i, n) {
          var node = that.$refs.checkboxtree.getNode(i); // console.log(node.isLeaf)

          if (node.isLeaf) {
            that.$refs.checkboxtree.setChecked(node, true);
          }
        });
      }
    });
  },
  methods: {
    treeOnChange: function treeOnChange() {
      var value = this.$refs.checkboxtree.getHalfCheckedKeys();
      value = value.concat(this.$refs.checkboxtree.getCheckedKeys());
      this.$emit('input', value);
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-checkbox-tree/xy-checkbox-tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_checkbox_tree_xy_checkbox_treevue_type_script_lang_js_ = (xy_checkbox_treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-checkbox-tree/xy-checkbox-tree.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_checkbox_tree_xy_checkbox_treevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "128045a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-checkbox-tree/xy-checkbox-tree.vue"
/* harmony default export */ var xy_checkbox_tree = (component.exports);

/***/ }),

/***/ 7275:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_choose; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-choose/xy-choose.vue?vue&type=template&id=47a0d7ee&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xy-choose" },
    _vm._l(_vm.options, function (item) {
      return _c(
        "div",
        {
          key: item.id,
          staticClass: "choose-item m-r-sm cursor-pointer",
          class: _vm.currentValue === item[_vm.valueName] ? "active" : "",
          style: { width: _vm.width, height: _vm.height },
          on: {
            click: function ($event) {
              return _vm.change(item)
            },
          },
        },
        [
          _vm._t(
            "default",
            function () {
              return [
                _c("div", { staticClass: "p-t-sm p-b-sm p-l p-r" }, [
                  _vm._v(
                    "\n\t\t\t\t" + _vm._s(item[_vm.labelName]) + "\n\t\t\t"
                  ),
                ]),
              ]
            },
            null,
            item
          ),
          _vm._v(" "),
          _c("span", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.currentValue === item[_vm.valueName],
                expression: "currentValue === item[valueName]",
              },
            ],
            staticClass: "xyicon xyicon-check1",
          }),
        ],
        2
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-choose/xy-choose.vue?vue&type=template&id=47a0d7ee&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-choose/xy-choose.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_choosevue_type_script_lang_js_ = ({
  name: 'xyChoose',
  components: {},
  props: {
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [Number, String, Array],
      default: false
    },
    type: {
      type: [String],
      default: 'radio'
    },
    width: {
      type: [String],
      default: 'auto'
    },
    height: {
      type: [String],
      default: 'auto'
    },
    labelName: {
      type: String,
      default: 'title'
    },
    valueName: {
      type: String,
      default: 'value'
    },
    customClick: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentValue: ''
    };
  },
  created: function created() {
    this.currentValue = this.value;
  },
  methods: {
    change: function change(item) {
      if (this.customClick) {
        this.$emit('custom-click', item);
      } else {
        this.currentValue = item[this.valueName];
        this.$emit('input', this.currentValue);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-choose/xy-choose.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_choose_xy_choosevue_type_script_lang_js_ = (xy_choosevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-choose/xy-choose.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_choose_xy_choosevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "47a0d7ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-choose/xy-choose.vue"
/* harmony default export */ var xy_choose = (component.exports);

/***/ }),

/***/ 1890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_copy; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-copy/xy-copy.vue?vue&type=template&id=07e4412a&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { staticClass: "cursor-pointer", on: { click: _vm.handleClick } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-copy/xy-copy.vue?vue&type=template&id=07e4412a&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(9714);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-copy/xy-copy.vue?vue&type=script&lang=js&


//
//
//
//
//
/* harmony default export */ var xy_copyvue_type_script_lang_js_ = ({
  name: "XyCopy",
  props: {
    content: {
      type: String,
      default: ''
    },
    alertStyle: {
      type: String,
      default: 'toast'
    },
    autoNotice: {
      type: Boolean,
      default: true
    },
    notice: {
      type: String,
      default: '复制成功'
    }
  },
  created: function created() {
    this.VueLink2.load(this.$xyutil.config.jsBaseUrl + 'libs/toastr/toastr.min.css').then(function () {});
    this.$xyutil.loadJS(this.$xyutil.config.jsBaseUrl + 'libs/toastr/toastr.min.js');
  },
  methods: {
    handleClick: function handleClick() {
      var content = this.content;

      if (!content) {
        uni.showToast({
          title: '暂无',
          icon: 'none',
          duration: 2000
        });
        return false;
      }

      content = typeof content === 'string' ? content : content.toString(); // 复制内容，必须字符串，数字需要转换为字符串

      if (!document.queryCommandSupported('copy')) {
        //为了兼容有些浏览器 queryCommandSupported 的判断
        // 不支持
        uni.showToast({
          title: '浏览器不支持',
          icon: 'none',
          duration: 3000
        });
      }

      var textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.readOnly = "readOnly";
      document.body.appendChild(textarea);
      textarea.select(); // 选择对象

      textarea.setSelectionRange(0, content.length); //核心

      var result = document.execCommand("copy"); // 执行浏览器复制命令

      if (result) {
        if (this.alertStyle == 'model') {
          this.$alert(this.notice, '提示', {
            confirmButtonText: '确定',
            callback: function callback(action) {}
          });
        } else if (this.alertStyle == 'toast') {
          this.$xyutil.showToast({
            title: this.notice,
            icon: 'success'
          });
        } else if (this.alertStyle == 'notify') {
          var tmpl = "<div class=\"flex\" style=\"margin: -20px -26px;height: 65px;\">\n                            <div class=\"flex flex-alignCenter flex-center bg-primary\">\n                                <i class=\"xyicon xyicon-check3 text-white m-l m-r ts-28\"></i>\n                            </div>\n                            <div>\n                                <div id=\"progressBar\" style=\"width:100%;height:4px;background-color: var(--primary-color);\">&nbsp;</div>\n                                <div class=\"m-l ts-15 m-t\">\n                                    \u590D\u5236\u6210\u529F\n                                </div>\n                            </div>\n                        </div>";
          this.$notify({
            title: '',
            duration: 4500,
            dangerouslyUseHTMLString: true,
            message: tmpl
          });
        } else if (this.alertStyle == 'toastr') {
          toastr.options.progressBar = true; // toastr.options.timeOut = 5000000;
          // toastr.options.extendedTimeOut = 5000000;

          toastr.info(this.notice);
        } else {}

        this.$emit('success');
      } else {
        this.$xyutil.showToast({
          title: '复制失败，请检查h5中调用该方法的方式，是不是用户点击的方式调用的，如果不是请改为用户点击的方式触发该方法，因为h5中安全性，不能js直接调用！',
          icon: 'none',
          duration: 3000
        });
      }

      textarea.remove();
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-copy/xy-copy.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_copy_xy_copyvue_type_script_lang_js_ = (xy_copyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-copy/xy-copy.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_copy_xy_copyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-copy/xy-copy.vue"
/* harmony default export */ var xy_copy = (component.exports);

/***/ }),

/***/ 9889:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_cropper; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-cropper/xy-cropper.vue?vue&type=template&id=0fe80574&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-row", { attrs: { type: "flex", justify: "space-around" } }, [
        _c(
          "div",
          {
            staticClass: "cropper text-center",
            style: { width: this.autoCropWidth },
          },
          [
            _vm.loadedScript
              ? _c("vue-cropper", {
                  ref: "cropper",
                  staticClass: "m-b",
                  attrs: {
                    img: _vm.option.img,
                    outputSize: _vm.option.size,
                    outputType: _vm.option.outputType,
                    info: _vm.option.info,
                    full: _vm.option.full,
                    canMove: _vm.option.canMove,
                    canMoveBox: _vm.option.canMoveBox,
                    original: _vm.option.original,
                    centerBox: false,
                    infoTrue: _vm.option.infoTrue,
                    autoCrop: _vm.option.autoCrop,
                    autoCropWidth: _vm.autoCropWidth,
                    autoCropHeight: _vm.autoCropHeight,
                    fixedBox: _vm.option.fixedBox,
                  },
                  on: { realTime: _vm.realTime },
                })
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "text-gray ts-14" }, [
              _c("i", { staticClass: "xyicon xyicon-help-o ts-14" }),
              _vm._v("\n                滚动鼠标滚轮来缩放图片\n            "),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "previewBox" },
          [
            _c(
              "div",
              { staticClass: "preview-wrap", style: _vm.previews.div },
              [
                _c("div", { staticClass: "preview", style: _vm.previews.div }, [
                  _c("img", {
                    style: _vm.previews.img,
                    attrs: { src: _vm.previews.url },
                  }),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "el-row",
              {
                staticClass: "m-t-md m-b",
                attrs: { type: "flex", justify: "center" },
              },
              [
                _c(
                  "el-upload",
                  {
                    attrs: {
                      action: "",
                      "show-file-list": false,
                      "auto-upload": false,
                      "on-change": _vm.changeImgData,
                    },
                  },
                  [
                    _c(
                      "el-button",
                      { attrs: { size: "small", type: "primary" } },
                      [
                        _vm._v(
                          "\n                        更换图片\n                    "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "el-row",
              [
                _c("el-button", {
                  attrs: { icon: "el-icon-plus", circle: "", size: "mini" },
                  on: {
                    click: function ($event) {
                      return _vm.changeScale(1)
                    },
                  },
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { icon: "el-icon-minus", circle: "", size: "mini" },
                  on: {
                    click: function ($event) {
                      return _vm.changeScale(-1)
                    },
                  },
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: { icon: "el-icon-download", circle: "", size: "mini" },
                  on: {
                    click: function ($event) {
                      return _vm.down("blob")
                    },
                  },
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: {
                    icon: "el-icon-refresh-left",
                    circle: "",
                    size: "mini",
                  },
                  on: { click: _vm.rotateLeft },
                }),
                _vm._v(" "),
                _c("el-button", {
                  attrs: {
                    icon: "el-icon-refresh-right",
                    circle: "",
                    size: "mini",
                  },
                  on: { click: _vm.rotateRight },
                }),
              ],
              1
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "m-t-md flex flex-end p-r-md" },
        [
          _c(
            "el-button",
            {
              attrs: { round: "" },
              on: {
                click: function ($event) {
                  _vm.init.showCropper = false
                },
              },
            },
            [_vm._v("取消")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { type: "primary", round: "" },
              on: { click: _vm.saveEditAvatar },
            },
            [_vm._v("保存")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-cropper/xy-cropper.vue?vue&type=template&id=0fe80574&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(9714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(285);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(1637);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2165);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-cropper/xy-cropper.vue?vue&type=script&lang=js&
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_croppervue_type_script_lang_js_ = ({
  name: "XyCropper",
  props: {
    init: {
      type: Object,
      default: function _default() {
        return {
          showCropper: false
        };
      }
    },
    imgData: File,
    autoCropWidth: {
      type: Number,
      default: 150
    },
    autoCropHeight: {
      type: Number,
      default: 150
    }
  },
  data: function data() {
    return {
      loadedScript: false,
      filename: '',
      filesize: 0,
      imgUrl: '',
      previews: {},
      option: {
        img: '',
        // 裁剪图片的地址
        info: true,
        // 裁剪框的大小信息
        outputSize: 1,
        // 剪切后的图片质量（0.1-1）
        full: true,
        // 输出原图比例截图 props名full
        outputType: 'png',
        // 裁剪生成额图片的格式
        canMove: true,
        // 能否拖动图片
        original: true,
        // 上传图片是否显示原始宽高
        infoTrue: false,
        // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
        canMoveBox: true,
        // 能否拖动截图框
        autoCrop: true,
        // 是否默认生成截图框
        fixed: true,
        // 固定宽高比
        fixedBox: true // 截图框固定大小，可以滚动缩放。

      }
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.loadScript();

            case 2:
              Vue.use(window['vue-cropper'].default);
              this.loadedScript = true;
              this.filename = this.guid() + '.png';
              this.changeImgData(this.imgData, false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  watch: {
    imgData: function imgData() {
      this.changeImgData(this.imgData, false);
    }
  },
  methods: {
    guid: function guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    },
    // 更换--上传本地图片，并未上传到服务器其实只是本地读取。
    changeImgData: function changeImgData(file) {
      var getRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _this = this;

      this.filename = file.name;
      this.filesize = file.size;
      var reader = new FileReader();

      reader.onload = function (e) {
        var data;

        if (_typeof(e.target.result) === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }

        _this.option.img = data;
      }; // 转化为base64
      // reader.readAsDataURL(file.raw)
      // 转化为blob


      if (getRow) {
        reader.readAsArrayBuffer(file.row);
      } else {
        reader.readAsArrayBuffer(file);
      }
    },
    // 保存修改
    saveEditAvatar: function saveEditAvatar() {
      this.finish('blob');
    },
    // 保存上传图片
    finish: function finish(type) {
      var _this2 = this;

      if (type === 'blob') {
        this.$refs.cropper.getCropBlob( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(blobData) {
            var that, ret;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // 访问接口保存到数据库写这儿!
                    // 先上传裁剪后的图片再保存
                    console.log(_this2.filename);

                    if (_this2.filename) {
                      _context2.next = 4;
                      break;
                    }

                    alert('文件名获取失败');
                    return _context2.abrupt("return");

                  case 4:
                    that = _this2;
                    _context2.next = 7;
                    return _this2.$xyutil.uploadFile({
                      driver: _this2.init.driver,
                      signUrl: _this2.init.signUrl,
                      url: _this2.init.action,
                      // 本地上传的接口，指定driver时其实不用传。
                      header: {
                        token: _this2.$xyutil.config.getToken()
                      },
                      blobInfo: {
                        blob: function blob() {
                          return blobData;
                        },
                        filename: function filename() {
                          return that.filename;
                        }
                      }
                    });

                  case 7:
                    ret = _context2.sent;

                    if (!ret.data) {
                      _context2.next = 17;
                      break;
                    }

                    _this2.imgUrl = ret.data.url;

                    if (_this2.imgUrl) {
                      _context2.next = 12;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 12:
                    ret.data.name = _this2.filename;
                    ret.data.size = _this2.filesize;

                    _this2.$emit('success', ret);

                    _context2.next = 18;
                    break;

                  case 17:
                    _this2.$xyutil.showToast({
                      title: '上传失败',
                      icon: 'loading',
                      duration: 3000
                    });

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        this.$refs.cropper.getCropData(function (base64Data) {// 访问接口保存到数据库写这儿!
        });
      }
    },
    // 放大/缩小
    changeScale: function changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    // 左旋转
    rotateLeft: function rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    // 右旋转
    rotateRight: function rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    // 实时预览函数
    realTime: function realTime(data) {
      this.previews = data;
    },
    // 下载图片
    down: function down(type) {
      var aLink = document.createElement('a');
      aLink.download = 'author-img';

      if (type === 'blob') {
        this.$refs.cropper.getCropBlob(function (blobData) {
          aLink.href = window.URL.createObjectURL(blobData);
          aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData(function (base64Data) {
          aLink.href = base64Data;
          aLink.click();
        });
      }
    },
    loadScript: function loadScript() {
      var _this3 = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        // https://github.com/xyxiao001/vue-cropper
        that.VueScript2.load(_this3.$xyutil.config.jsBaseUrl + 'libs/vue-cropper/dist/index.js').then(function () {
          resolve();
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-cropper/xy-cropper.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_cropper_xy_croppervue_type_script_lang_js_ = (xy_croppervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-cropper/xy-cropper.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_cropper_xy_croppervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0fe80574",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-cropper/xy-cropper.vue"
/* harmony default export */ var xy_cropper = (component.exports);

/***/ }),

/***/ 5041:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_deliver_fee; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-deliver-fee/xy-deliver-fee.vue?vue&type=template&id=5437bb26&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "xy-deliver-fee" }, [
    _c("div", { staticClass: "text-error" }, [
      _vm._v("\n        除指定地区外，其余地区的运费采用默认运费。\n    "),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "default flex" },
      [
        _vm._v("\n        默认运费：\n        "),
        _c("el-input", {
          attrs: { size: "small" },
          model: {
            value: _vm.value.default.firstAmount,
            callback: function ($$v) {
              _vm.$set(_vm.value.default, "firstAmount", $$v)
            },
            expression: "value.default.firstAmount",
          },
        }),
        _vm._v(" " + _vm._s(_vm.unit) + " 内，\n        "),
        _c("el-input", {
          attrs: { size: "small" },
          model: {
            value: _vm.value.default.firstFee,
            callback: function ($$v) {
              _vm.$set(_vm.value.default, "firstFee", $$v)
            },
            expression: "value.default.firstFee",
          },
        }),
        _vm._v(" 元，\n        每增加 "),
        _c("el-input", {
          attrs: { size: "small" },
          model: {
            value: _vm.value.default.moreAmount,
            callback: function ($$v) {
              _vm.$set(_vm.value.default, "moreAmount", $$v)
            },
            expression: "value.default.moreAmount",
          },
        }),
        _vm._v(" " + _vm._s(_vm.unit) + "，\n        增加运费 "),
        _c("el-input", {
          attrs: { size: "small" },
          model: {
            value: _vm.value.default.moreFee,
            callback: function ($$v) {
              _vm.$set(_vm.value.default, "moreFee", $$v)
            },
            expression: "value.default.moreFee",
          },
        }),
        _vm._v(" 元。\n    "),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "more m-t-xs" },
      [
        _c(
          "el-table",
          {
            attrs: {
              border: "",
              "highlight-current-row": "",
              data: _vm.value.extend,
            },
          },
          _vm._l(_vm.columns, function (coco, key) {
            return _c("el-table-column", {
              key: key,
              attrs: {
                prop: coco.name,
                label: coco.title,
                width: coco.width || "",
                "min-width": coco.minWidth || "",
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function (scope) {
                      return [
                        coco.type == "input"
                          ? [
                              _c("el-input", {
                                attrs: { size: "small" },
                                on: { "on-blur": _vm.getData },
                                model: {
                                  value:
                                    _vm.value.extend[scope.$index][coco.name],
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.value.extend[scope.$index],
                                      coco.name,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "value.extend[scope.$index][coco.name]",
                                },
                              }),
                            ]
                          : coco.type == "buttons"
                          ? [
                              _c(
                                "el-button",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: { size: "small", type: "error" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.delrow(scope.$index)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            删除\n                        "
                                  ),
                                ]
                              ),
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        coco.type == "regions"
                          ? [
                              _c("XyBuilderFormRegions", {
                                attrs: {
                                  showModal: scope.row.modalShow,
                                  modalTitle: "运送到",
                                  action: _vm.item.extra.action,
                                  valueName: "id",
                                  header: {
                                    cloudId: _vm.header.cloudId,
                                    eid: _vm.header.eid,
                                  },
                                },
                                model: {
                                  value:
                                    _vm.value.extend[scope.$index][coco.name],
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.value.extend[scope.$index],
                                      coco.name,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "value.extend[scope.$index][coco.name]",
                                },
                              }),
                            ]
                          : [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(
                                    _vm.value.extend[scope.$index][coco.name]
                                  ) +
                                  "\n                    "
                              ),
                            ],
                      ]
                    },
                  },
                ],
                null,
                true
              ),
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "el-button",
          {
            staticStyle: { "vertical-align": "middle", "margin-right": "15px" },
            attrs: { size: "small", type: "dashed" },
            on: { click: _vm.addrow },
          },
          [_vm._v("\n            增加\n        ")]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-deliver-fee/xy-deliver-fee.vue?vue&type=template&id=5437bb26&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(561);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./src/xy-tree-regions/xy-tree-regions.vue + 4 modules
var xy_tree_regions = __webpack_require__(674);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-deliver-fee/xy-deliver-fee.vue?vue&type=script&lang=js&






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_deliver_feevue_type_script_lang_js_ = ({
  name: 'XyDeliverFee',
  components: {
    XyBuilderFormRegions: xy_tree_regions["default"]
  },
  props: {
    item: {},
    value: {
      type: Object,
      default: function _default() {
        return {
          default: {
            // 默认运费
            regions: [],
            firstAmount: 1,
            // 首重/首件/首M3
            firstFee: 8,
            moreAmount: 1,
            // 续
            moreFee: 2,
            isDefault: 1,
            ruleType: 1
          },
          extend: [] // 为指定地区设置运费

        };
      }
    },
    formValues: {},
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0
        };
      }
    }
  },
  data: function data() {
    return {
      unit: 'kg',
      columns: [],
      dataItem: {
        regions: [],
        firstAmount: 1,
        firstFee: 8,
        moreAmount: 1,
        moreFee: 2,
        isDefault: 0,
        ruleType: 1,
        delete: ''
      }
    };
  },
  created: function created() {
    switch (this.formValues[this.item.extra.unitField]) {
      case 1:
        this.unit = 'kg';
        break;

      case 2:
        this.unit = '件';
        break;
    }

    this.columns = [{
      title: '运送到',
      name: 'regions',
      type: 'regions',
      width: '250px',
      modalShow: false
    }, {
      title: '首重(' + this.unit + ')',
      name: 'firstAmount',
      type: 'input'
    }, {
      title: '首费(元）',
      name: 'firstFee',
      type: 'input'
    }, {
      title: '续重(' + this.unit + ')',
      name: 'moreAmount',
      type: 'input'
    }, {
      title: '续费(元)',
      name: 'moreFee',
      type: 'input'
    }, {
      title: '删除',
      name: 'delete',
      type: 'buttons',
      width: '70px'
    }];

    if (!this.value.default) {
      this.value = {
        default: {
          // 默认运费
          regions: [],
          firstAmount: 1,
          // 首重/首件/首M3
          firstFee: 8,
          moreAmount: 1,
          // 续
          moreFee: 2,
          isDefault: 1,
          ruleType: 1
        },
        extend: [] // 为指定地区设置运费

      };
    }
  },
  beforeMount: function beforeMount() {},
  methods: {
    getData: function getData() {
      this.$emit('input', this.value);
      console.log(this.value);
    },
    delrow: function delrow(key) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.value.extend.splice(key, 1);

                _this.getData();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addrow: function addrow() {
      var tmp = Object.assign({}, this.dataItem);
      console.log(this.value);
      this.value.extend.push(tmp);
    }
  },
  watch: {
    'formValues': {
      handler: function handler(object) {
        // console.log(object);
        // console.log(object[this.item.extra.unitField]);
        switch (object[this.item.extra.unitField]) {
          case 1:
            this.unit = 'kg';
            break;

          case 2:
            this.unit = '件';
            break;
        }

        this.columns = [{
          title: '运送到',
          name: 'regions',
          type: 'regions',
          width: '250px',
          modalShow: false
        }, {
          title: '首重(' + this.unit + ')',
          name: 'firstAmount',
          type: 'input'
        }, {
          title: '首费(元）',
          name: 'firstFee',
          type: 'input'
        }, {
          title: '续重(' + this.unit + ')',
          name: 'moreAmount',
          type: 'input'
        }, {
          title: '续费(元)',
          name: 'moreFee',
          type: 'input'
        }, {
          title: '删除',
          name: 'delete',
          type: 'buttons',
          width: '70px'
        }];
      },
      deep: true,
      immediate: true
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-deliver-fee/xy-deliver-fee.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_deliver_fee_xy_deliver_feevue_type_script_lang_js_ = (xy_deliver_feevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-deliver-fee/xy-deliver-fee.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_deliver_fee_xy_deliver_feevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5437bb26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-deliver-fee/xy-deliver-fee.vue"
/* harmony default export */ var xy_deliver_fee = (component.exports);

/***/ }),

/***/ 1767:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_editor_kindeditor; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-editor-kindeditor/xy-editor-kindeditor.vue?vue&type=template&id=6914aa74&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xy-editor-kindeditor" },
    [
      _vm.loadedScript
        ? _c("VueKindEditor", {
            attrs: {
              content: _vm.content,
              pluginsPath: this.$xyutil.jsBaseUrl + "libs/kindeditor/plugins/",
              loadStyleMode: false,
              height: "500px",
              id: "kindeditor-1",
            },
            on: { "on-content-change": _vm.onContentChange },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-editor-kindeditor/xy-editor-kindeditor.vue?vue&type=template&id=6914aa74&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/vue-kindeditor/dist/vue-kindeditor.js
var vue_kindeditor = __webpack_require__(8067);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-editor-kindeditor/xy-editor-kindeditor.vue?vue&type=script&lang=js&




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_editor_kindeditorvue_type_script_lang_js_ = ({
  name: 'XyEditorKindeditor',
  props: {
    item: {},
    value: {
      type: [String],
      default: ''
    },
    theme: {
      type: [String],
      default: 'default'
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    }
  },
  data: function data() {
    var that = this;
    return {
      loadedScript: false,
      content: ''
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.content = this.value;
              _context.next = 3;
              return this.loadScript();

            case 3:
              this.loadedScript = true;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  watch: {
    loadScript: function loadScript() {
      var _this = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        VueLink2.load(_this.$xyutil.config.jsBaseUrl + 'libs/kindeditor/themes/' + _this.theme + '/editor.min.css').then(function () {});
        that.VueScript2.load(_this.$xyutil.jsBaseUrl + 'libs/kindeditor/NKeditor-all-min.js').then(function () {
          resolve();
        });
      });
    },
    content: function content(val) {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.$emit('input', val);
    }
  },
  methods: {
    afterChange: function afterChange(val) {
      this.content = val;
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-editor-kindeditor/xy-editor-kindeditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_editor_kindeditor_xy_editor_kindeditorvue_type_script_lang_js_ = (xy_editor_kindeditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-editor-kindeditor/xy-editor-kindeditor.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_editor_kindeditor_xy_editor_kindeditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6914aa74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-editor-kindeditor/xy-editor-kindeditor.vue"
/* harmony default export */ var xy_editor_kindeditor = (component.exports);

/***/ }),

/***/ 3359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_editor_tinymce; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-editor-tinymce/xy-editor-tinymce.vue?vue&type=template&id=0d3d281e&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xy-editor-tinymce" },
    [
      _vm.loadedScript
        ? _c("tinymce-vue", {
            ref: "tinymce",
            attrs: {
              "api-key":
                _vm.item.extra.key ||
                "y1buzf80o0qtt4lt3pfj0yh98ilgq4ts6mf3nwjpqky9ea49",
              "tinymce-script-src":
                "https://cdn.staticfile.org/tinymce/5.5.1/tinymce.min.js",
              init: _vm.init,
            },
            on: { onInit: _vm.onReady },
            model: {
              value: _vm.content,
              callback: function ($$v) {
                _vm.content = $$v
              },
              expression: "content",
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "相册",
            visible: _vm.imageAlbumShow,
            width: "1000px",
          },
          on: {
            "update:visible": function ($event) {
              _vm.imageAlbumShow = $event
            },
          },
        },
        [
          _c("span", [_vm._v("相册功能开发中，敬请期待。。。")]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer",
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function ($event) {
                      _vm.imageAlbumShow = false
                    },
                  },
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function ($event) {
                      _vm.imageAlbumShow = false
                    },
                  },
                },
                [_vm._v("确 定")]
              ),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _vm.newyearShow
        ? _c("iframe", {
            staticClass: "fireworks",
            attrs: {
              src:
                _vm.$xyutil.config.jsBaseUrl +
                "libs/tinymce/plugins/newyear/index.html?title=" +
                (_vm.item.extra && _vm.item.extra.newyearTitle
                  ? _vm.item.extra.newyearTitle
                  : "新年快乐"),
              frameborder: "0",
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _c("i", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.newyearShow,
            expression: "newyearShow",
          },
        ],
        staticClass: "xyicon xyicon-close",
        staticStyle: { "font-size": "50px" },
        on: { click: _vm.newyearHide },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-editor-tinymce/xy-editor-tinymce.vue?vue&type=template&id=0d3d281e&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/Utils.js
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
var isValidKey = function (key) { return validEvents.map(function (event) { return event.toLowerCase(); }).indexOf(key.toLowerCase()) !== -1; };
var bindHandlers = function (initEvent, listeners, editor) {
    Object.keys(listeners)
        .filter(isValidKey)
        .forEach(function (key) {
        var handler = listeners[key];
        if (typeof handler === 'function') {
            if (key === 'onInit') {
                handler(initEvent, editor);
            }
            else {
                editor.on(key.substring(2), function (e) { return handler(e, editor); });
            }
        }
    });
};
var bindModelHandlers = function (ctx, editor) {
    var modelEvents = ctx.$props.modelEvents ? ctx.$props.modelEvents : null;
    var normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents;
    editor.on(normalizedEvents ? normalizedEvents : 'change input undo redo', function () {
        ctx.$emit('input', editor.getContent({ format: ctx.$props.outputFormat }));
    });
};
var initEditor = function (initEvent, ctx, editor) {
    var value = ctx.$props.value ? ctx.$props.value : '';
    var initialValue = ctx.$props.initialValue ? ctx.$props.initialValue : '';
    editor.setContent(value || (ctx.initialized ? ctx.cache : initialValue));
    // Always bind the value listener in case users use :value instead of v-model
    ctx.$watch('value', function (val, prevVal) {
        if (editor && typeof val === 'string' && val !== prevVal && val !== editor.getContent({ format: ctx.$props.outputFormat })) {
            editor.setContent(val);
        }
    });
    // checks if the v-model shorthand is used (which sets an v-on:input listener) and then binds either
    // specified the events or defaults to "change keyup" event and emits the editor content on that event
    if (ctx.$listeners.input) {
        bindModelHandlers(ctx, editor);
    }
    bindHandlers(initEvent, ctx.$listeners, editor);
    ctx.initialized = true;
};
var unique = 0;
var uuid = function (prefix) {
    var time = Date.now();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return element !== null && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) {
    return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isNullOrUndefined = function (value) { return value === null || value === undefined; };


;// CONCATENATED MODULE: ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/ScriptLoader.js
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var createState = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
var CreateScriptLoader = function () {
    var state = createState();
    var injectScriptTag = function (scriptId, doc, url, callback) {
        var scriptTag = doc.createElement('script');
        scriptTag.referrerPolicy = 'origin';
        scriptTag.type = 'application/javascript';
        scriptTag.id = scriptId;
        scriptTag.src = url;
        var handler = function () {
            scriptTag.removeEventListener('load', handler);
            callback();
        };
        scriptTag.addEventListener('load', handler);
        if (doc.head) {
            doc.head.appendChild(scriptTag);
        }
    };
    var load = function (doc, url, callback) {
        if (state.scriptLoaded) {
            callback();
        }
        else {
            state.listeners.push(callback);
            if (!doc.getElementById(state.scriptId)) {
                injectScriptTag(state.scriptId, doc, url, function () {
                    state.listeners.forEach(function (fn) { return fn(); });
                    state.scriptLoaded = true;
                });
            }
        }
    };
    // Only to be used by tests.
    var reinitialize = function () {
        state = createState();
    };
    return {
        load: load,
        reinitialize: reinitialize
    };
};
var ScriptLoader = CreateScriptLoader();


;// CONCATENATED MODULE: ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/TinyMCE.js
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getGlobal = function () { return (typeof window !== 'undefined' ? window : __webpack_require__.g); };
var getTinymce = function () {
    var global = getGlobal();
    return global && global.tinymce ? global.tinymce : null;
};


;// CONCATENATED MODULE: ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/EditorPropTypes.js
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var editorProps = {
    apiKey: String,
    cloudChannel: String,
    id: String,
    init: Object,
    initialValue: String,
    inline: Boolean,
    modelEvents: [String, Array],
    plugins: [String, Array],
    tagName: String,
    toolbar: [String, Array],
    value: String,
    disabled: Boolean,
    tinymceScriptSrc: String,
    outputFormat: {
        type: String,
        validator: function (prop) { return prop === 'html' || prop === 'text'; }
    },
};

;// CONCATENATED MODULE: ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/components/Editor.js
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var renderInline = function (h, id, tagName) {
    return h(tagName ? tagName : 'div', {
        attrs: { id: id }
    });
};
var renderIframe = function (h, id) {
    return h('textarea', {
        attrs: { id: id },
        style: { visibility: 'hidden' }
    });
};
var initialise = function (ctx) { return function () {
    var finalInit = __assign(__assign({}, ctx.$props.init), { readonly: ctx.$props.disabled, selector: "#" + ctx.elementId, plugins: mergePlugins(ctx.$props.init && ctx.$props.init.plugins, ctx.$props.plugins), toolbar: ctx.$props.toolbar || (ctx.$props.init && ctx.$props.init.toolbar), inline: ctx.inlineEditor, setup: function (editor) {
            ctx.editor = editor;
            editor.on('init', function (e) { return initEditor(e, ctx, editor); });
            if (ctx.$props.init && typeof ctx.$props.init.setup === 'function') {
                ctx.$props.init.setup(editor);
            }
        } });
    if (isTextarea(ctx.element)) {
        ctx.element.style.visibility = '';
        ctx.element.style.display = '';
    }
    getTinymce().init(finalInit);
}; };
var Editor = {
    props: editorProps,
    created: function () {
        this.elementId = this.$props.id || uuid('tiny-vue');
        this.inlineEditor = (this.$props.init && this.$props.init.inline) || this.$props.inline;
        this.initialized = false;
    },
    watch: {
        disabled: function () {
            this.editor.setMode(this.disabled ? 'readonly' : 'design');
        }
    },
    mounted: function () {
        this.element = this.$el;
        if (getTinymce() !== null) {
            initialise(this)();
        }
        else if (this.element && this.element.ownerDocument) {
            var channel = this.$props.cloudChannel ? this.$props.cloudChannel : '5';
            var apiKey = this.$props.apiKey ? this.$props.apiKey : 'no-api-key';
            var scriptSrc = isNullOrUndefined(this.$props.tinymceScriptSrc) ?
                "https://cdn.tiny.cloud/1/" + apiKey + "/tinymce/" + channel + "/tinymce.min.js" :
                this.$props.tinymceScriptSrc;
            ScriptLoader.load(this.element.ownerDocument, scriptSrc, initialise(this));
        }
    },
    beforeDestroy: function () {
        if (getTinymce() !== null) {
            getTinymce().remove(this.editor);
        }
    },
    deactivated: function () {
        var _a;
        if (!this.inlineEditor) {
            this.cache = this.editor.getContent();
            (_a = getTinymce()) === null || _a === void 0 ? void 0 : _a.remove(this.editor);
        }
    },
    activated: function () {
        if (!this.inlineEditor && this.initialized) {
            initialise(this)();
        }
    },
    render: function (h) {
        return this.inlineEditor ? renderInline(h, this.elementId, this.$props.tagName) : renderIframe(h, this.elementId);
    }
};

;// CONCATENATED MODULE: ./node_modules/@tinymce/tinymce-vue/lib/es2015/main/ts/index.js
/**
 * Copyright (c) 2018-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* harmony default export */ var ts = (Editor);

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-editor-tinymce/xy-editor-tinymce.vue?vue&type=script&lang=js&






function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_editor_tinymcevue_type_script_lang_js_ = ({
  name: 'XyEditorTinymce',
  components: {
    'tinymce-vue': ts // <- Important part

  },
  props: {
    item: {},
    value: {
      type: [String],
      default: ''
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var _this = this;

    var that = this;
    return {
      loadedScript: false,
      audio: new Audio(),
      audio1: new Audio(),
      pluginPrefix: this.$xyutil.config.jsBaseUrl,
      content: '',
      init: {
        setup: function setup(editor) {
          editor.xyuiJsBaseUrl = that.$xyutil.config.jsBaseUrl;
          var uiContainer;
          editor.on('PostRender ', function () {
            // 修复滚动时打开的下拉菜单保持浮动遮挡其它内容
            var container = editor.getContainer();
            uiContainer = document.querySelector('body > .tox.tox-tinymce-aux');
            container.parentNode.appendChild(uiContainer);
          }); // editor.on('mouseleave', function() {
          //     // 修复滚动时打开的下拉菜单保持浮动遮挡其它内容
          //     var uiInner = document.querySelector('.xy-editor-tinymce > .tox.tox-tinymce-aux>div');
          //     uiContainer.removeChild(uiInner);
          // });
        },
        // 自定义一个方法，可以在插件里触发，这样就能使用element的弹窗组建了。
        openImageAlbum: function openImageAlbum(editor) {
          _this.imageAlbumShow = true;
        },
        // 春节插件
        openNewyear: function openNewyear(editor) {
          _this.audio.loop = 'loop';
          _this.audio.src = 'https://cdn.jiangruyi.com/gh/starideas/xyfront/audio/幸福时光.mp3';

          _this.audio.play();

          _this.audio1.loop = 'loop';
          _this.audio1.src = _this.pluginPrefix + 'libs/tinymce/plugins/newyear/441.wav';

          _this.audio1.play();

          _this.newyearShow = true;
        },
        external_plugins: {},
        menubar: this.item.extra.menubar || 'file edit view insert format tools table',
        // 菜单栏
        toolbar_mode: this.item.extra.toolbarMode || 'wrap',
        // 工具栏不收缩
        toolbar_sticky: this.item.extra.toolbarSticky || false,
        toolbar_location: 'top',
        draggable_modal: true,
        init_instance_callback: function init_instance_callback(editor) {},
        default_link_target: '_blank',
        paste_data_images: true,
        // 设置为允许粘帖图片
        automatic_uploads: true,
        file_picker_types: 'file image media',
        file_picker_callback: this.filePickerCallback,
        images_upload_handler: this.imagesUploadHandler,
        // 这里如果使用xycloud301重定向会导致iview弹窗Model第一次打开失败自动关闭
        language_url: this.item.extra.languageUrl || that.$xyutil.config.jsBaseUrl + 'libs/tinymce/langs/zh_CN.js',
        language: this.item.extra.language || 'zh_CN',
        skin_url: that.$xyutil.config.jsBaseUrl + 'libs/tinymce/skins/ui/oxide',
        theme: this.item.extra.theme || 'silver',
        branding: false,
        // 是否禁用“Powered by TinyMCE”
        plugins: this.item.extra.plugins || 'editor135 newyear bdmap media link lists image imagetools code table wordcount fullscreen emoticons print codesample',
        toolbar: this.item.extra.toolbar || 'formatselect fontselect fontsizeselect' + ' | link image media bdmap blockquote codesample' + ' | bold italic underline strikethrough' + ' | forecolor backcolor bullist numlist' + ' | code fullscreen | editor135 newyear',
        audio_template_callback: function audio_template_callback(data) {
          return '<audio controls>' + '\n<source src="' + data.source + '"' + (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') + ' />\n' + (data.altsource ? '<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') + '</audio>';
        },
        video_template_callback: function video_template_callback(data) {
          return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source + '"' + (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') + ' />\n' + (data.altsource ? '<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') + '</video>';
        },
        media_url_resolver: this.mediaUrlResolver,
        media_alt_source: false,
        media_dimensions: false,
        media_live_embeds: true,
        media_poster: false,
        height: this.item.extra.height || 600,
        convert_urls: false,
        // FontSelect
        font_formats: "\n                    \u5FAE\u8F6F\u96C5\u9ED1=\u5FAE\u8F6F\u96C5\u9ED1;\n                    \u5B8B\u4F53=\u5B8B\u4F53;\n                    \u9ED1\u4F53=\u9ED1\u4F53;\n                    \u4EFF\u5B8B=\u4EFF\u5B8B;\n                    \u6977\u4F53=\u6977\u4F53;\n                    \u96B6\u4E66=\u96B6\u4E66;\n                    \u5E7C\u5706=\u5E7C\u5706;\n                    Andale Mono=andale mono,times;\n                    Arial=arial, helvetica,\n                    sans-serif;\n                    Arial Black=arial black, avant garde;\n                    Book Antiqua=book antiqua,palatino;\n                    Comic Sans MS=comic sans ms,sans-serif;\n                    Courier New=courier new,courier;\n                    Georgia=georgia,palatino;\n                    Helvetica=helvetica;\n                    Impact=impact,chicago;\n                    Symbol=symbol;\n                    Tahoma=tahoma,arial,helvetica,sans-serif;\n                    Terminal=terminal,monaco;\n                    Times New Roman=times new roman,times;\n                    Trebuchet MS=trebuchet ms,geneva;\n                    Verdana=verdana,geneva;\n                    Webdings=webdings;\n                    Wingdings=wingdings,zapf dingbats"
      },
      editor: null,
      imageAlbumShow: false,
      newyearShow: false
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.content = this.value;
              this.init.external_plugins = {
                'bdmap': this.pluginPrefix + 'libs/tinymce/plugins/bdmap/plugin.js',
                'editor135': this.pluginPrefix + 'libs/tinymce/plugins/editor135/plugin.js',
                'newyear': this.pluginPrefix + 'libs/tinymce/plugins/newyear/plugin.js',
                'axupimgs': this.pluginPrefix + 'libs/tinymce/plugins/axupimgs/plugin.js' // 'powerpaste': that.pluginPrefix + '/libs/tinymce/plugins/powerpaste/plugin.js'

              };
              _context.next = 4;
              return this.loadScript();

            case 4:
              if (!this.item.extra) {
                this.item.extra = {
                  skin: ''
                };
              }

              this.loadedScript = true;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    newyearHide: function newyearHide() {
      this.audio.pause();
      this.audio1.pause();
      this.newyearShow = false;
    },
    // 确认将从图片相册中选择的图片插入正文
    confirm: function confirm(img) {
      var _this2 = this;

      if (Array.isArray(img) && img.length > 0) {
        img.forEach(function (item, index) {
          // 光标放最后?
          _this2.editor.execCommand('selectAll');

          _this2.editor.selection.getRng().collapse(false);

          _this2.editor.focus();

          var html = '<div><img src="' + item + '"/></div>';

          _this2.editor.insertContent(html);
        });
      }
    },
    onReady: function onReady(e) {
      // 获取编辑器实例便于其他操作比如插入内容
      this.editor = e.target;
    },
    loadScript: function loadScript() {
      var that = this; // return new Promise((resolve, reject) => {
      //     that.VueScript2.load(this.$xyutil.config.cdnDomain + '/npm/tinymce@5.5.1/tinymce.min.js').then(function () {
      //         resolve();
      //     });
      // });
    },
    mediaUrlResolver: function mediaUrlResolver(data, resolve
    /*, reject*/
    ) {
      if (data.url.indexOf('.html') !== -1) {
        var embedHtml = '<iframe src="' + data.url + '" width="600" height="400" ></iframe>';
        resolve({
          html: embedHtml
        });
      } else {
        resolve({
          html: ''
        });
      }
    },
    filePickerCallback: function filePickerCallback(callback, value, meta) {
      var that = this;
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.click();
      console.log(that.item);
      input.onchange = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _that$item$extra, _that$item$extra2, _that$item$extra3, _that$item$extra4, _that$item$extra5, _that$item$extra6;

        var file, ret;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = this.files[0];
                _context2.next = 3;
                return that.$xyutil.uploadFile({
                  driver: that.item.extra.driver || 'default',
                  signUrl: that.item.extra.signUrl || '',
                  url: that.item.extra.action,
                  // 本地上传的接口，指定driver时其实不用传。
                  header: that.header,
                  file: file,
                  provider: ((_that$item$extra = that.item.extra) === null || _that$item$extra === void 0 ? void 0 : _that$item$extra.provider) || 'aliyun',
                  spaceId: (_that$item$extra2 = that.item.extra) === null || _that$item$extra2 === void 0 ? void 0 : _that$item$extra2.spaceId,
                  clientSecret: (_that$item$extra3 = that.item.extra) === null || _that$item$extra3 === void 0 ? void 0 : _that$item$extra3.clientSecret,
                  maxSize: (_that$item$extra4 = that.item.extra) === null || _that$item$extra4 === void 0 ? void 0 : _that$item$extra4.maxSizeFile,
                  hasUploadModule: (_that$item$extra5 = that.item.extra) === null || _that$item$extra5 === void 0 ? void 0 : _that$item$extra5.hasUploadModule,
                  checkExist: (_that$item$extra6 = that.item.extra) === null || _that$item$extra6 === void 0 ? void 0 : _that$item$extra6.checkExist
                });

              case 3:
                ret = _context2.sent;
                console.log('filePickerCallback', file);

                if (!(ret.code == 200 && ret.data)) {
                  _context2.next = 9;
                  break;
                }

                callback(ret.data.url, {
                  text: file.name,
                  alt: file.name
                });
                _context2.next = 11;
                break;

              case 9:
                alert(ret.msg);
                return _context2.abrupt("return");

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    },
    imagesUploadHandler: function imagesUploadHandler(blobInfo, success, failure) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _that$item$extra7, _that$item$extra8, _that$item$extra9, _that$item$extra10, _that$item$extra11, _that$item$extra12;

        var that, ret;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this3;
                _context3.next = 3;
                return _this3.$xyutil.uploadFile({
                  driver: _this3.item.extra.driver || 'default',
                  signUrl: _this3.item.extra.signUrl || '',
                  url: _this3.item.extra.action,
                  // 本地上传的接口，指定driver时其实不用传。
                  header: _this3.header,
                  blobInfo: blobInfo,
                  provider: (_that$item$extra7 = that.item.extra) === null || _that$item$extra7 === void 0 ? void 0 : _that$item$extra7.provider,
                  spaceId: (_that$item$extra8 = that.item.extra) === null || _that$item$extra8 === void 0 ? void 0 : _that$item$extra8.spaceId,
                  clientSecret: (_that$item$extra9 = that.item.extra) === null || _that$item$extra9 === void 0 ? void 0 : _that$item$extra9.clientSecret,
                  maxSize: (_that$item$extra10 = that.item.extra) === null || _that$item$extra10 === void 0 ? void 0 : _that$item$extra10.maxSize,
                  hasUploadModule: (_that$item$extra11 = that.item.extra) === null || _that$item$extra11 === void 0 ? void 0 : _that$item$extra11.hasUploadModule,
                  checkExist: (_that$item$extra12 = that.item.extra) === null || _that$item$extra12 === void 0 ? void 0 : _that$item$extra12.checkExist
                });

              case 3:
                ret = _context3.sent;

                if (ret.code =  true && ret.data) {
                  success(ret.data.url);
                } else {
                  alert(ret.msg);
                  failure(ret.msg);
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  watch: {
    content: function content(val) {
      var _this$item, _this$item$extra;

      if (this !== null && this !== void 0 && (_this$item = this.item) !== null && _this$item !== void 0 && (_this$item$extra = _this$item.extra) !== null && _this$item$extra !== void 0 && _this$item$extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.$emit('input', val);
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-editor-tinymce/xy-editor-tinymce.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_editor_tinymce_xy_editor_tinymcevue_type_script_lang_js_ = (xy_editor_tinymcevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-editor-tinymce/xy-editor-tinymce.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_editor_tinymce_xy_editor_tinymcevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0d3d281e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-editor-tinymce/xy-editor-tinymce.vue"
/* harmony default export */ var xy_editor_tinymce = (component.exports);

/***/ }),

/***/ 4178:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_editor_ueditor; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-editor-ueditor/xy-editor-ueditor.vue?vue&type=template&id=4cef6d84&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xy-editor-ueditor" },
    [
      _c("VueUeditorWrap", {
        attrs: { config: _vm.editorConfig, "editor-id": "ueditor-1" },
        on: { ready: _vm.ready },
        model: {
          value: _vm.content,
          callback: function ($$v) {
            _vm.content = $$v
          },
          expression: "content",
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-editor-ueditor/xy-editor-ueditor.vue?vue&type=template&id=4cef6d84&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/vue-ueditor-wrap/lib/vue-ueditor-wrap.min.js
var vue_ueditor_wrap_min = __webpack_require__(8434);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-editor-ueditor/xy-editor-ueditor.vue?vue&type=script&lang=js&




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_editor_ueditorvue_type_script_lang_js_ = ({
  name: 'XyEditorUeditor',
  props: {
    item: {},
    value: {
      type: [String],
      default: ''
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    }
  },
  data: function data() {
    var that = this;
    return {
      content: '',
      editorConfig: {
        UEDITOR_HOME_URL: this.$xyutil.jsBaseUrl + 'libs/UEditor/'
      }
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.content = this.value;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  watch: {
    content: function content(val) {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.$emit('input', val);
    }
  },
  methods: {
    ready: function ready(editorInstance) {// console.log(`编辑器实例${editorInstance.key}: `, editorInstance);
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-editor-ueditor/xy-editor-ueditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_editor_ueditor_xy_editor_ueditorvue_type_script_lang_js_ = (xy_editor_ueditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-editor-ueditor/xy-editor-ueditor.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_editor_ueditor_xy_editor_ueditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4cef6d84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-editor-ueditor/xy-editor-ueditor.vue"
/* harmony default export */ var xy_editor_ueditor = (component.exports);

/***/ }),

/***/ 8967:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_filter_list; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-filter-list/xy-filter-list.vue?vue&type=template&id=cb7bbaf4&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "xy-filter-list" },
    [
      _vm._l(_vm.options, function (ft, key) {
        return [
          _vm.showAll || _vm.rowsLimit == 0 || key + 1 <= _vm.rowsLimit
            ? _c(
                "li",
                {
                  key: key,
                  staticClass: "xy-filter-list_row flex flex-alignCenter",
                },
                [
                  _c("div", { staticClass: "title text-666" }, [
                    _vm._v(_vm._s(ft.title) + "："),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex-1 flex flex-wrap" },
                    [
                      _vm._l(ft.options, function (ft1, key1) {
                        return [
                          _c(
                            "el-button",
                            {
                              key: key1,
                              attrs: {
                                type:
                                  ft1.value === _vm.filters[ft.name]
                                    ? "primary"
                                    : "text",
                                size: "small",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.toggleOption(key, ft1.value)
                                },
                              },
                            },
                            [_vm._v(_vm._s(ft1.title))]
                          ),
                        ]
                      }),
                    ],
                    2
                  ),
                ]
              )
            : _vm._e(),
        ]
      }),
      _vm._v(" "),
      _vm.options.length > _vm.rowsLimit && _vm.rowsLimit > 0
        ? _c(
            "li",
            {
              staticClass: "flex flex-end cursor-pointer",
              on: { click: _vm.toggleShow },
            },
            [
              _vm.showAll == false
                ? _c("span", [_vm._v("+")])
                : _c("span", [_vm._v("-")]),
              _vm._v("\n        更多筛选\n    "),
            ]
          )
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-filter-list/xy-filter-list.vue?vue&type=template&id=cb7bbaf4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-filter-list/xy-filter-list.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_filter_listvue_type_script_lang_js_ = ({
  name: 'XyFilterList',
  props: {
    value: {
      type: [Object],
      default: function _default() {
        return {};
      }
    },
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 默认显示行数
    rows: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      rowsLimit: 0,
      showAll: false,
      filters: {}
    };
  },
  created: function created() {
    var _this = this;

    if (this.rows) {
      this.rowsLimit = this.rows;
    }

    this.options.forEach(function (colit, index) {
      _this.$set(_this.filters, colit.name, colit.options[0].value);
    });
  },
  watch: {
    options: function options(val) {
      var _this2 = this;

      this.options.forEach(function (colit, index) {
        _this2.$set(_this2.filters, colit.name, colit.options[0].value);
      });
    }
  },
  methods: {
    toggleShow: function toggleShow() {
      this.showAll = !this.showAll;
    },
    toggleOption: function toggleOption(index, val) {
      var item = this.options[index];

      switch (item.type) {
        case 'radio':
          this.$set(this.filters, item.name, val);
          break;

        case 'checkbox':
          this.filters[item.name].push(val);
          break;
      } // 触发后选择后事件


      this.$emit('changed', this.filters);
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-filter-list/xy-filter-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_filter_list_xy_filter_listvue_type_script_lang_js_ = (xy_filter_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-filter-list/xy-filter-list.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_filter_list_xy_filter_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "cb7bbaf4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-filter-list/xy-filter-list.vue"
/* harmony default export */ var xy_filter_list = (component.exports);

/***/ }),

/***/ 2783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_map_amap; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-map-amap/xy-map-amap.vue?vue&type=template&id=39f90318&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.item.extra.mapType == "polygonFee"
        ? _c(
            "div",
            { staticClass: "fee-list" },
            [
              _c(
                "el-table",
                {
                  attrs: {
                    border: "",
                    "highlight-current-row": "",
                    data: _vm.polygonFee,
                  },
                  on: { "row-click": _vm.rowClick },
                },
                _vm._l(_vm.polygonFeeColumns, function (coco, key) {
                  return _c("el-table-column", {
                    key: key,
                    attrs: {
                      prop: coco.name,
                      label: coco.title,
                      width: coco.width || "",
                      "min-width": coco.minWidth || "",
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function (scope) {
                            return [
                              coco.type == "input"
                                ? [
                                    _c("el-input", {
                                      attrs: { size: "small" },
                                      on: { "on-blur": _vm.getData },
                                      model: {
                                        value:
                                          _vm.polygonFee[scope.$index][
                                            coco.name
                                          ],
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.polygonFee[scope.$index],
                                            coco.name,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "polygonFee[scope.$index][coco.name]",
                                      },
                                    }),
                                  ]
                                : coco.type == "buttons"
                                ? [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: { size: "small" },
                                        on: {
                                          click: function ($event) {
                                            return _vm.deleteFee(scope.$index)
                                          },
                                        },
                                      },
                                      [_vm._v("删除")]
                                    ),
                                  ]
                                : [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(
                                          _vm.polygonFee[scope.$index][
                                            coco.name
                                          ]
                                        ) +
                                        "\n                    "
                                    ),
                                  ],
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  })
                }),
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.item.extra.mapType == "positionAddress"
        ? _c(
            "div",
            { staticClass: "m-b-sm" },
            [
              _c("el-input", {
                staticClass: "m-r-sm",
                staticStyle: { display: "inline-block" },
                attrs: { size: "medium", type: "input" },
                model: {
                  value: _vm.address,
                  callback: function ($$v) {
                    _vm.address = $$v
                  },
                  expression: "address",
                },
              }),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { size: "medium", type: "default" },
                  on: {
                    click: function ($event) {
                      return _vm.getLocationByAddress()
                    },
                  },
                },
                [_vm._v("定位")]
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.loadedScript
        ? _c(
            "el-amap",
            {
              staticClass: "amap-box",
              staticStyle: { height: "400px" },
              attrs: {
                vid: "amap-" + _vm.item.name,
                "amap-manager": _vm.amapManager,
                zoom: _vm.zoom,
                center: _vm.center,
                plugin: _vm.plugin,
                events: _vm.events,
              },
            },
            [
              _vm.item.extra.mapType == "position" ||
              _vm.item.extra.mapType == "positionAddress"
                ? _c("el-amap-marker", {
                    attrs: {
                      vid: "marker-" + _vm.item.name,
                      draggable: true,
                      position: _vm.position,
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.item.extra.mapType == "polygonList"
                ? _vm._l(_vm.polygonList, function (polygon, index) {
                    return _c("el-amap-polygon", {
                      key: index,
                      ref: "polygon-" + _vm.item.name + "_" + index,
                      refInFor: true,
                      attrs: {
                        vid: "polygon-" + _vm.item.name + "_" + index,
                        path: polygon.path,
                        strokeColor: polygon.strokeColor,
                        fillColor: "white",
                        fillOpacity: "0.5",
                        draggable: true,
                        editable: true,
                      },
                    })
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.item.extra.mapType == "polygonFee"
                ? _vm._l(_vm.polygonFee, function (polygon, index1) {
                    return _c("el-amap-polygon", {
                      key: index1,
                      ref: "polygonFee_" + _vm.item.name + "_" + index1,
                      refInFor: true,
                      attrs: {
                        vid: "polygonFee_" + _vm.item.name + "_" + index1,
                        path: polygon.path,
                        strokeColor:
                          _vm.polygonFeeActive == index1
                            ? "red"
                            : polygon.strokeColor,
                        fillColor: "white",
                        fillOpacity: "0.5",
                        draggable: true,
                        editable: true,
                        events: _vm.eventsPolygonFee,
                      },
                    })
                  })
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "toolbar m-t-xs" },
        [
          !_vm.loaded ? _c("span", [_vm._v("正在定位")]) : _vm._e(),
          _vm._v(" "),
          (_vm.item.extra.mapType == "position" ||
            _vm.item.extra.mapType == "positionAddress") &&
          this.position.length > 0
            ? _c("span", [
                _vm._v(
                  "\n            选中: lng = " +
                    _vm._s(_vm.position[0]) +
                    " lat = " +
                    _vm._s(_vm.position[1]) +
                    "\n        "
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "el-button",
            {
              attrs: { size: "medium", type: "primary" },
              on: {
                click: function ($event) {
                  return _vm.getData()
                },
              },
            },
            [_vm._v("保存变动")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticClass: "m-l-sm",
              attrs: { size: "medium" },
              on: {
                click: function ($event) {
                  return _vm.getMap()
                },
              },
            },
            [_vm._v("地图实例")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.item.extra.mapType == "polygonList",
                  expression: "item.extra.mapType == 'polygonList'",
                },
              ],
              staticClass: "m-l-sm",
              attrs: { size: "medium" },
              on: {
                click: function ($event) {
                  return _vm.addPolygon()
                },
              },
            },
            [_vm._v("增加多边形区域")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.item.extra.mapType == "polygonFee",
                  expression: "item.extra.mapType == 'polygonFee'",
                },
              ],
              staticClass: "m-l-sm",
              attrs: { size: "medium" },
              on: {
                click: function ($event) {
                  return _vm.addPolygonFee()
                },
              },
            },
            [_vm._v("增加配送区域")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.item.extra.mapType == "polygonFee",
                  expression: "item.extra.mapType == 'polygonFee'",
                },
              ],
              staticClass: "m-l-sm",
              attrs: { size: "medium" },
              on: {
                click: function ($event) {
                  return _vm.restPolygonFee()
                },
              },
            },
            [_vm._v("重置当前区域")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-map-amap/xy-map-amap.vue?vue&type=template&id=39f90318&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(561);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-map-amap/xy-map-amap.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var amapComponents = {
  props: ['text'],
  template: "<div>{{text}}</div>"
};
/* harmony default export */ var xy_map_amapvue_type_script_lang_js_ = ({
  name: 'Amap',
  props: {
    item: {
      extra: {}
    },
    value: {},
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    }
  },
  data: function data() {
    var _this = this;

    var self = this;
    return {
      loadedScript: false,
      amapManager: '',
      geocoder: '',
      zoom: 12,
      center: [0, 0],
      loaded: false,
      events: {
        init: function init(o) {
          console.log(o.getCenter());
          o.getCity(function (result) {
            console.log('init', result);
          });
        },
        'moveend': function moveend() {},
        'zoomchange': function zoomchange() {},
        'click': function click(e) {
          console.log(e);

          if (self.item.extra.disabled) {
            self.$message({
              message: '只读模式',
              type: 'warning'
            });
            return;
          }

          if (self.item.extra.mapType == 'position' || self.item.extra.mapType == 'positionAddress') {
            self.position = [e.lnglat.lng, e.lnglat.lat];
            console.log('position', self.position);
            self.$emit('input', _this.value);
          }
        },
        dragend: function dragend(e) {
          console.log('---event---: dragend');

          if (self.item.extra.disabled) {
            self.$message({
              message: '只读模式',
              type: 'warning'
            });
            return;
          }

          if (self.item.extra.mapType == 'position' || self.item.extra.mapType == 'positionAddress') {
            self.position = [e.lnglat.lng, e.lnglat.lat];
            console.log('position', self.position);
            self.$emit('input', _this.value);
          }
        }
      },
      position: [0, 0],
      // 选中定位
      address: '',
      // 文字位置
      polygonList: [],
      polygonFee: [],
      polygonFeeActive: 0,
      eventsPolygonFee: {
        change: function change() {
          console.log(_this.amapManager.getComponent(0));

          var path = _this.$refs['polygonFee_' + _this.item.name + '_' + _this.polygonFeeActive][0].$$getPath();

          console.log('getPath', path);
        }
      },
      polygonFeeColumns: [{
        title: '名称',
        name: 'name',
        type: 'input',
        width: '200'
      }, {
        title: '起送价',
        name: 'price',
        type: 'input'
      }, {
        title: '配送费',
        name: 'fee',
        type: 'input'
      }, {
        title: '操作',
        name: 'action',
        type: 'buttons'
      }],
      plugin: ['ToolBar', 'Scale', 'PlaceSearch', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init: function init(o) {
            console.log(o);
          }
        }
      }, {
        pName: 'Geolocation',
        events: {
          init: function init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition(function (status, result) {
              if (result && result.position) {
                console.log('self.position', self.position);

                if (!self.position || self.position.length == 0 || self.position[0] == 0) {
                  self.center = [result.position.lng, result.position.lat];
                  self.position = self.center; // 当未指定定位，地图自动定位时，定位完成后也做一个地址解析。

                  self.geocoder.getAddress(self.position, function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                      console.log('location2address', result);
                      self.address = result.regeocode.formattedAddress;
                    }
                  });
                  self.getData();
                } else {
                  self.center = self.position;
                }

                self.loaded = true;

                switch (self.item.extra.mapType) {
                  case 'position':
                    break;

                  case 'positionAddress':
                    break;

                  case 'polygonList':
                    if (self.polygonList.length == 0) {
                      self.polygonList = [{
                        strokeColor: '#2b85e4',
                        path: [[self.center[0] - 0.01, self.center[1] + 0.01], [self.center[0] + 0.01, self.center[1] + 0.01], [self.center[0] + 0.01, self.center[1] - 0.01], [self.center[0] - 0.01, self.center[1] - 0.01]]
                      }];
                      self.getData();
                    }

                    break;

                  case 'polygonFee':
                    if (self.polygonFee.length == 0) {
                      self.polygonFee = [{
                        name: '默认',
                        price: '',
                        fee: '',
                        strokeColor: '#2b85e4',
                        path: [[self.center[0] - 0.01, self.center[1] + 0.01], [self.center[0] + 0.01, self.center[1] + 0.01], [self.center[0] + 0.01, self.center[1] - 0.01], [self.center[0] - 0.01, self.center[1] - 0.01]]
                      }];
                      self.getData();
                    }

                    break;
                }

                self.$nextTick();
              }
            });
          }
        }
      }],
      contentRender: function contentRender(h, instance) {
        return h(amapComponents, {
          style: {
            backgroundColor: '#fff'
          },
          props: {
            text: 'here'
          }
        });
      }
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$item$extra,
          _this$item$extra2,
          _this2 = this;

      var i, path, j;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if ((_this$item$extra = this.item.extra) !== null && _this$item$extra !== void 0 && _this$item$extra.key) {
                _context.next = 3;
                break;
              }

              alert('请设置高德开放平台key');
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return this.loadScript();

            case 5:
              // 高德地图
              this.amapManager = new VueAMap.AMapManager();
              VueAMap.initAMapApiLoader({
                key: (_this$item$extra2 = this.item.extra) === null || _this$item$extra2 === void 0 ? void 0 : _this$item$extra2.key,
                plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.Geolocation', 'AMap.Geocoder', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
                // 默认高德 sdk 版本为 1.4.4
                v: '1.4.4'
              });
              _context.t0 = this.item.extra.mapType;
              _context.next = _context.t0 === 'postion' ? 10 : _context.t0 === 'positionAddress' ? 12 : _context.t0 === 'polygonList' ? 14 : _context.t0 === 'polygonFee' ? 16 : 18;
              break;

            case 10:
              if (this.value && this.value.length == 2) {
                this.position = this.value;
              }

              return _context.abrupt("break", 18);

            case 12:
              if (this.value && this.value.location && this.value.address) {
                this.position = this.value.location;
                this.address = this.value.address;
              }

              return _context.abrupt("break", 18);

            case 14:
              if (this.value) {
                this.position = this.value.location;
                this.polygonList = this.value.polygonList;
              }

              return _context.abrupt("break", 18);

            case 16:
              if (this.value) {
                this.position = this.value.location;
                this.polygonFee = this.value.polygonFee;

                for (i = 0; i < this.polygonFee.length; i++) {
                  path = this.polygonFee[i].path;

                  for (j = 0; j < path.length; j++) {
                    if (path[j].lng) {
                      path[j] = [path[j].lng, path[j].lat];
                    }
                  }

                  this.polygonFee[i].path = path;
                }
              }

              return _context.abrupt("break", 18);

            case 18:
              VueAMap.lazyAMapApiLoaderInstance.load().then(function () {
                _this2.loadedScript = true;
                _this2.geocoder = new AMap.Geocoder({
                  // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                  city: '全国'
                });
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  mounted: function mounted() {},
  methods: {
    loadScript: function loadScript() {
      var _this3 = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        that.VueScript2.load(_this3.$xyutil.config.jsBaseUrl + 'libs/vue-amap/dist/index.js').then(function () {
          resolve();
        });
      });
    },
    getLocationByAddress: function getLocationByAddress() {
      if (!this.address) {
        alert('请输入地址');
        retutn;
      }

      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      var o = this.amapManager.getMap();
      var that = this;
      this.geocoder.getLocation(this.address, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          that.position = [result.geocodes[0].location.lng, result.geocodes[0].location.lat]; // 考虑到万一管理员定位是在北京，搜索南京的地址就会地图上看不到标记了，需要将地图center点同步更新，而在地图上点击时则不需要更新center

          that.center = that.position;
        } else {
          alert(result.info);
        }
      }); //geocoder.setMap(o);
    },
    rowClick: function rowClick(row, index) {
      this.polygonFeeActive = index;
    },
    getData: function getData() {
      if (this.item.extra.mapType == 'position') {
        this.value = this.position;
      }

      if (this.item.extra.mapType == 'positionAddress') {
        this.value = {
          location: this.position,
          address: this.address
        };
      }

      if (this.item.extra.mapType == 'polygonList') {
        this.value = {
          location: this.position,
          polygonList: this.polygonList
        };
      }

      if (this.item.extra.mapType == 'polygonFee') {
        this.value = {
          location: this.position,
          polygonFee: this.polygonFee
        };

        for (var i = 0; i < this.value.polygonFee.length; i++) {
          var path = this.value.polygonFee[i].path;

          for (var j = 0; j < path.length; j++) {
            if (path[j].lng) {
              path[j] = [path[j].lng, path[j].lat];
            }
          }

          this.value[i].polygonFee.path = path;
        }
      }

      this.$emit('input', this.value);
    },
    addPolygon: function addPolygon() {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.polygonList.push({
        strokeColor: '#2b85e4',
        path: [[this.center[0] - 0.01, this.center[1] + 0.01], [this.center[0] + 0.01, this.center[1] + 0.01], [this.center[0] + 0.01, this.center[1] - 0.01], [this.center[0] - 0.01, this.center[1] - 0.01]]
      });
    },
    addPolygonFee: function addPolygonFee() {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.polygonFee.push({
        name: '',
        price: '',
        fee: '',
        strokeColor: '#2b85e4',
        path: [[this.center[0] - 0.01, this.center[1] + 0.01], [this.center[0] + 0.01, this.center[1] + 0.01], [this.center[0] + 0.01, this.center[1] - 0.01], [this.center[0] - 0.01, this.center[1] - 0.01]]
      });
    },
    restPolygonFee: function restPolygonFee() {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      var cur = this.polygonFee;
      cur[this.polygonFeeActive].path = [[this.center[0] - 0.01, this.center[1] + 0.01], [this.center[0] + 0.01, this.center[1] + 0.01], [this.center[0] + 0.01, this.center[1] - 0.01], [this.center[0] - 0.01, this.center[1] - 0.01]];
      this.polygonFee = cur;
    },
    deleteFee: function deleteFee(index) {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.polygonFee.splice(index, 1);
    },
    getMap: function getMap() {// amap vue component
      // console.log(this.amapManager._componentMap);
      // gaode map instance
      // console.log(this.amapManager._map);
    }
  },
  watch: {}
});
;// CONCATENATED MODULE: ./src/xy-map-amap/xy-map-amap.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_map_amap_xy_map_amapvue_type_script_lang_js_ = (xy_map_amapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-map-amap/xy-map-amap.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_map_amap_xy_map_amapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "39f90318",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-map-amap/xy-map-amap.vue"
/* harmony default export */ var xy_map_amap = (component.exports);

/***/ }),

/***/ 3:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_mavon_editor; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-mavon-editor/xy-mavon-editor.vue?vue&type=template&id=d8a9eb9c&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xy-mavon-editor" },
    [
      _vm.loadedScript
        ? _c(
            "mavon-editor",
            _vm._b(
              {
                ref: "md",
                staticClass: "instance",
                style: { border: _vm.border ? "1px solid #eee;" : "" },
                attrs: { "external-link": _vm.externalLink },
                on: { imgAdd: _vm.uploadImg },
                model: {
                  value: _vm.content,
                  callback: function ($$v) {
                    _vm.content = $$v
                  },
                  expression: "content",
                },
              },
              "mavon-editor",
              _vm.$props,
              false
            )
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-mavon-editor/xy-mavon-editor.vue?vue&type=template&id=d8a9eb9c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(3210);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/vue-link2/dist/vue-link2.common.js
var vue_link2_common = __webpack_require__(6462);
var vue_link2_common_default = /*#__PURE__*/__webpack_require__.n(vue_link2_common);
// EXTERNAL MODULE: ./node_modules/markdown-it-container/index.js
var markdown_it_container = __webpack_require__(591);
var markdown_it_container_default = /*#__PURE__*/__webpack_require__.n(markdown_it_container);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-mavon-editor/xy-mavon-editor.vue?vue&type=script&lang=js&







function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// https://github.com/hinesboy/mavonEditor
// https://github.com/markdown-it/markdown-it


/* harmony default export */ var xy_mavon_editorvue_type_script_lang_js_ = ({
  name: 'xyMavonEditor',
  props: {
    item: {},
    value: {
      type: [String],
      default: ''
    },
    placeholder: {
      type: String,
      default: ' '
    },
    codeStyle: {
      type: String,
      default: 'solarized-dark'
    },
    previewBackground: {
      type: String,
      default: '#fbfbfb'
    },
    ishljs: {
      type: Boolean,
      default: true
    },
    navigation: {
      type: Boolean,
      default: false
    },
    subfield: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    toolbarsFlag: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    // toolbars: {
    //     type: Object,
    //     default: () => ({})
    // },
    defaultOpen: {
      type: String,
      default: ''
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    }
  },
  data: function data() {
    var _this = this;

    return {
      content: '',
      loadedScript: false,
      md: null,
      externalLink: {
        markdown_css: this.$xyutil.config.jsBaseUrl + 'libs/mavon-editor/dist/markdown/github-markdown.min.css',
        hljs_js: function hljs_js() {
          return 'https://unpkg.com/highlightjs@9.16.2/highlight.pack.min.js';
        },
        hljs_css: function hljs_css(css) {
          return 'https://unpkg.com/highlightjs@9.16.2/styles/' + css + '.css';
        },
        hljs_lang: function hljs_lang(lang) {
          return false;
        },
        katex_css: function katex_css() {
          return _this.$xyutil.config.jsBaseUrl + 'libs/mavon-editor/dist/katex/katex.min.css';
        },
        katex_js: function katex_js() {
          return _this.$xyutil.config.jsBaseUrl + 'libs/mavon-editor/dist/katex/katex.min.js';
        }
      }
    };
  },
  watch: {
    value: function value(val) {
      this.content = val;
      this.renderExt(val);
    },
    content: function content(val) {
      this.$emit('input', val);
      this.renderExt(val);
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var that;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.content = this.value;
              _context.next = 3;
              return this.loadScript();

            case 3:
              Vue.component('mavon-editor', MavonEditor.mavonEditor);
              this.loadedScript = true;
              that = this;
              this.$nextTick(function () {
                that.md = MavonEditor.markdownIt;
                that.renderExt(that.content);
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    renderExt: function renderExt(val) {
      if (!this.md) {
        return;
      }

      this.md.use((markdown_it_container_default()), 'tip', {
        validate: function validate(params) {
          return params.trim().match(/^tip$/);
        },
        render: function render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<blockquote class="tip">\n';
          } else {
            // closing tag
            return '</blockquote>\n';
          }
        }
      });
      this.md.use((markdown_it_container_default()), 'info', {
        validate: function validate(params) {
          return params.trim().match(/^info$/);
        },
        render: function render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<blockquote class="info">\n';
          } else {
            // closing tag
            return '</blockquote>\n';
          }
        }
      });
      this.md.use((markdown_it_container_default()), 'success', {
        validate: function validate(params) {
          return params.trim().match(/^success$/);
        },
        render: function render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<blockquote class="success">\n';
          } else {
            // closing tag
            return '</blockquote>\n';
          }
        }
      });
      this.md.use((markdown_it_container_default()), 'danger', {
        validate: function validate(params) {
          return params.trim().match(/^danger$/);
        },
        render: function render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<blockquote class="danger">\n';
          } else {
            // closing tag
            return '</blockquote>\n';
          }
        }
      });
      this.md.use((markdown_it_container_default()), 'warning', {
        validate: function validate(params) {
          return params.trim().match(/^warning$/);
        },
        render: function render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<blockquote class="warning">\n';
          } else {
            // closing tag
            return '</blockquote>\n';
          }
        }
      });
      this.md.render(val);
    },
    loadScript: function loadScript() {
      var _this2 = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        vue_link2_common_default().load(_this2.$xyutil.config.jsBaseUrl + 'libs/mavon-editor/dist/css/index.css').then(function () {});
        that.VueScript2.load(_this2.$xyutil.config.jsBaseUrl + 'libs/mavon-editor/dist/mavon-editor.js').then(function () {
          resolve();
        });
      });
    },
    uploadImg: function uploadImg(pos, file) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3$item$extra, _this3$item$extra2, _this3$item$extra3, _this3$item$extra4, _this3$item$extra5, _this3$item$extra6;

        var that, ret;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // console.log(this.item)
                that = _this3;
                _context2.next = 3;
                return _this3.$xyutil.uploadFile({
                  driver: _this3.item.extra.driver || 'default',
                  signUrl: _this3.item.extra.signUrl || '',
                  url: _this3.item.extra.action,
                  // 本地上传的接口，指定driver时其实不用传。
                  header: _this3.header,
                  file: file,
                  provider: (_this3$item$extra = _this3.item.extra) === null || _this3$item$extra === void 0 ? void 0 : _this3$item$extra.provider,
                  spaceId: (_this3$item$extra2 = _this3.item.extra) === null || _this3$item$extra2 === void 0 ? void 0 : _this3$item$extra2.spaceId,
                  clientSecret: (_this3$item$extra3 = _this3.item.extra) === null || _this3$item$extra3 === void 0 ? void 0 : _this3$item$extra3.clientSecret,
                  maxSize: (_this3$item$extra4 = _this3.item.extra) === null || _this3$item$extra4 === void 0 ? void 0 : _this3$item$extra4.maxSize,
                  hasUploadModule: (_this3$item$extra5 = _this3.item.extra) === null || _this3$item$extra5 === void 0 ? void 0 : _this3$item$extra5.hasUploadModule,
                  checkExist: (_this3$item$extra6 = _this3.item.extra) === null || _this3$item$extra6 === void 0 ? void 0 : _this3$item$extra6.checkExist
                });

              case 3:
                ret = _context2.sent;

                if (ret.data) {
                  _this3.$refs.md.$img2Url(pos, ret.data.url);
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-mavon-editor/xy-mavon-editor.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_mavon_editor_xy_mavon_editorvue_type_script_lang_js_ = (xy_mavon_editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-mavon-editor/xy-mavon-editor.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_mavon_editor_xy_mavon_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d8a9eb9c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-mavon-editor/xy-mavon-editor.vue"
/* harmony default export */ var xy_mavon_editor = (component.exports);

/***/ }),

/***/ 1365:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_poster_custom; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-poster-custom/xy-poster-custom.vue?vue&type=template&id=8cb98e74&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "flex",
      staticStyle: { position: "relative", width: "300px", height: "534px" },
    },
    [
      _c(
        "div",
        {
          staticClass: "poster",
          staticStyle: { position: "absolute", transform: "scale(0.35)" },
        },
        [
          _c(
            "div",
            {
              staticStyle: {
                position: "absolute",
                width: "750px",
                height: "1334px",
                "background-color": "#fff",
                border: "1px solid #ccc",
              },
            },
            _vm._l(_vm.value, function (layer, key) {
              return _c("div", { key: key }, [
                layer.type == "image"
                  ? _c("img", {
                      key: key,
                      staticClass: "item",
                      class: _vm.index == key ? "current" : "",
                      style: {
                        position: "absolute",
                        top: layer.top + "px",
                        left: layer.left + "px",
                        width: layer.width + "px",
                        height: layer.height + "px",
                      },
                      attrs: { src: layer.url },
                      on: {
                        mousedown: function ($event) {
                          return _vm.move($event, key)
                        },
                        click: function ($event) {
                          return _vm.select(key)
                        },
                      },
                    })
                  : layer.type == "text"
                  ? _c(
                      "div",
                      {
                        key: key,
                        staticClass: "item",
                        class: _vm.index == key ? "current" : "",
                        style: {
                          position: "absolute",
                          top: layer.top + "px",
                          left: layer.left + "px",
                          color: layer.color,
                          lineHeight: "1.1",
                          fontSize: layer.fontSize + "px",
                          backgroundColor: layer.backgroundColor,
                          breakWord: layer.breakWord,
                        },
                        on: {
                          mousedown: function ($event) {
                            return _vm.move($event, key)
                          },
                          click: function ($event) {
                            return _vm.select(key)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                  " +
                            _vm._s(layer.content) +
                            "\n              "
                        ),
                      ]
                    )
                  : _vm._e(),
              ])
            }),
            0
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            position: "absolute",
            left: "300px",
            top: "0",
            width: "100%",
            height: "534px",
          },
        },
        [
          _c(
            "Form",
            { attrs: { "label-position": "top" } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "名称" } },
                [
                  _c("el-input", {
                    attrs: { size: "medium" },
                    model: {
                      value: _vm.value[_vm.index].name,
                      callback: function ($$v) {
                        _vm.$set(_vm.value[_vm.index], "name", $$v)
                      },
                      expression: "value[index].name",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "宽度" } },
                [
                  _c("el-input", {
                    attrs: { size: "medium" },
                    model: {
                      value: _vm.value[_vm.index].width,
                      callback: function ($$v) {
                        _vm.$set(_vm.value[_vm.index], "width", $$v)
                      },
                      expression: "value[index].width",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "高度" } },
                [
                  _c("el-input", {
                    attrs: { size: "medium" },
                    model: {
                      value: _vm.value[_vm.index].height,
                      callback: function ($$v) {
                        _vm.$set(_vm.value[_vm.index], "height", $$v)
                      },
                      expression: "value[index].height",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "顶部距离" } },
                [
                  _c("el-input", {
                    attrs: { size: "medium" },
                    model: {
                      value: _vm.value[_vm.index].top,
                      callback: function ($$v) {
                        _vm.$set(_vm.value[_vm.index], "top", $$v)
                      },
                      expression: "value[index].top",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "左侧距离" } },
                [
                  _c("el-input", {
                    attrs: { size: "medium" },
                    model: {
                      value: _vm.value[_vm.index].left,
                      callback: function ($$v) {
                        _vm.$set(_vm.value[_vm.index], "left", $$v)
                      },
                      expression: "value[index].left",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              this.value[_vm.index].type == "image"
                ? _c(
                    "el-form-item",
                    { attrs: { label: "图片" } },
                    [
                      _c("xy-upload", {
                        attrs: {
                          item: {
                            name: _vm.value[_vm.index].name,
                            extra: _vm.item.extra,
                          },
                          img: { name: "", title: "" },
                          header: {
                            cloudId: _vm.header.cloudId,
                            eid: _vm.header.eid,
                            token: _vm.header.token,
                          },
                        },
                        model: {
                          value: _vm.value[_vm.index].url,
                          callback: function ($$v) {
                            _vm.$set(_vm.value[_vm.index], "url", $$v)
                          },
                          expression: "value[index].url",
                        },
                      }),
                      _vm._v(" "),
                      _c("el-input", {
                        attrs: { size: "medium" },
                        model: {
                          value: _vm.value[_vm.index].url,
                          callback: function ($$v) {
                            _vm.$set(_vm.value[_vm.index], "url", $$v)
                          },
                          expression: "value[index].url",
                        },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              this.value[_vm.index].type == "text"
                ? _c(
                    "el-form-item",
                    { attrs: { label: "字体大小" } },
                    [
                      _c("el-slider", {
                        attrs: { "show-input": "" },
                        model: {
                          value: _vm.value[_vm.index].fontSize,
                          callback: function ($$v) {
                            _vm.$set(_vm.value[_vm.index], "fontSize", $$v)
                          },
                          expression: "value[index].fontSize",
                        },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              this.value[_vm.index].type == "text"
                ? _c(
                    "el-form-item",
                    { attrs: { label: "字体颜色" } },
                    [
                      _c("el-color-picker", {
                        model: {
                          value: _vm.value[_vm.index].color,
                          callback: function ($$v) {
                            _vm.$set(_vm.value[_vm.index], "color", $$v)
                          },
                          expression: "value[index].color",
                        },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              this.value[_vm.index].type == "text"
                ? _c(
                    "el-form-item",
                    { attrs: { label: "背景颜色" } },
                    [
                      _c("el-color-picker", {
                        model: {
                          value: _vm.value[_vm.index].backgroundColor,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.value[_vm.index],
                              "backgroundColor",
                              $$v
                            )
                          },
                          expression: "value[index].backgroundColor",
                        },
                      }),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-poster-custom/xy-poster-custom.vue?vue&type=template&id=8cb98e74&scoped=true&

// EXTERNAL MODULE: ./src/xy-upload/xy-upload.vue + 4 modules
var xy_upload = __webpack_require__(5945);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-poster-custom/xy-poster-custom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_poster_customvue_type_script_lang_js_ = ({
  name: 'Poster',
  components: {
    'xy-upload': xy_upload["default"]
  },
  props: {
    item: {},
    value: [],
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    }
  },
  data: function data() {
    return {
      index: 0
    };
  },
  created: function created() {
    this.value = [{
      name: 'bg',
      type: 'image',
      width: 750,
      height: 1181,
      top: 0,
      left: 0,
      url: 'https://s1.ax1x.com/2020/04/27/JR46UJ.png'
    }, {
      name: 'logo',
      type: 'image',
      width: 134,
      height: 133,
      top: 20,
      left: 42,
      url: 'https://s2.ax1x.com/2020/01/25/1ZzWiq.png'
    }, {
      name: 'qrcode',
      type: 'image',
      width: 160,
      height: 160,
      top: 1000,
      left: 20,
      url: 'https://s1.ax1x.com/2020/03/19/86VFEt.jpg'
    }, {
      name: 'avatar',
      type: 'image',
      width: 100,
      height: 100,
      top: 1190,
      left: 600,
      url: 'https://s1.ax1x.com/2020/03/18/8wg9k6.png'
    }, {
      name: 'name',
      type: 'text',
      width: 100,
      height: 100,
      top: 1230,
      left: 450,
      color: '#333',
      fontSize: 30,
      backgroundColor: 'transparent',
      content: 'XYShop'
    }, {
      name: 'scan',
      type: 'text',
      width: 100,
      height: 100,
      top: 1230,
      left: 50,
      color: '#333',
      fontSize: 30,
      backgroundColor: 'transparent',
      content: '长按二维码扫一扫'
    }];
  },
  beforeMount: function beforeMount() {},
  methods: {
    select: function select(key) {
      this.index = key;
    },
    move: function move(e, key) {
      var _this = this;

      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.index = key;
      var odiv = e.target; // 获取目标元素

      odiv.onmousedown = function (e) {
        // 算出鼠标相对元素的位置
        console.log(e.clientX);
        var disX = e.clientX / 0.35 - odiv.offsetLeft;
        var disY = e.clientY / 0.35 - odiv.offsetTop;

        document.onmousemove = function (e) {
          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          var left = e.clientX / 0.35 - disX;
          var top = e.clientY / 0.35 - disY;

          if (left < 0) {
            left = 0;
          }

          if (top < 0) {
            top = 0;
          }

          if (left + _this.value[_this.index].width > 750) {
            left = 750 - _this.value[_this.index].width;
          }

          if (top + _this.value[_this.index].height > 1344) {
            top = 1344 - _this.value[_this.index].height;
          } // 移动当前元素


          _this.value[_this.index].left = Math.ceil(left);
          _this.value[_this.index].top = Math.ceil(top);
        };

        document.onmouseup = function (e) {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    }
  },
  watch: {}
});
;// CONCATENATED MODULE: ./src/xy-poster-custom/xy-poster-custom.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_poster_custom_xy_poster_customvue_type_script_lang_js_ = (xy_poster_customvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-poster-custom/xy-poster-custom.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_poster_custom_xy_poster_customvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8cb98e74",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-poster-custom/xy-poster-custom.vue"
/* harmony default export */ var xy_poster_custom = (component.exports);

/***/ }),

/***/ 4493:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_qrcode; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-qrcode/xy-qrcode.vue?vue&type=template&id=896cf9c8&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "figure",
    { staticClass: "qrcode-box" },
    [
      _vm.loadedScript
        ? _c("qrcode", {
            attrs: {
              value: _vm.value,
              options: Object.assign(
                {},
                { errorCorrectionLevel: "Q" },
                _vm.options
              ),
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.logo
        ? _c("img", { staticClass: "qrcode__image", attrs: { src: _vm.logo } })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-qrcode/xy-qrcode.vue?vue&type=template&id=896cf9c8&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-qrcode/xy-qrcode.vue?vue&type=script&lang=js&





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_qrcodevue_type_script_lang_js_ = ({
  name: 'xyQrcode',
  props: {
    value: {
      type: [String],
      default: ''
    },
    logo: {
      type: [String],
      default: ''
    },
    // https://github.com/soldair/node-qrcode#qr-code-options
    options: {
      type: Object,
      default: function _default() {
        return {
          width: 118,
          margin: 1
        };
      }
    }
  },
  data: function data() {
    return {
      loadedScript: false
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.loadScript();

            case 2:
              Vue.component(VueQrcode.name, VueQrcode);
              this.loadedScript = true;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    loadScript: function loadScript() {
      var _this = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        that.VueScript2.load(_this.$xyutil.config.jsBaseUrl + 'libs/vue-qrcode/dist/vue-qrcode.min.js').then(function () {
          resolve();
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-qrcode/xy-qrcode.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_qrcode_xy_qrcodevue_type_script_lang_js_ = (xy_qrcodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-qrcode/xy-qrcode.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_qrcode_xy_qrcodevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "896cf9c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-qrcode/xy-qrcode.vue"
/* harmony default export */ var xy_qrcode = (component.exports);

/***/ }),

/***/ 515:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_safety_level; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-safety-level/xy-safety-level.vue?vue&type=template&id=8256205c&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xy-safety-level", class: "level-" + _vm.level },
    [
      _c("div", { staticClass: "level-box flex space-between" }, [
        _c("div", {
          staticClass: "level",
          style: { width: _vm.levelWidth, height: _vm.levelHeight },
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "level",
          style: { width: _vm.levelWidth, height: _vm.levelHeight },
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "level",
          style: { width: _vm.levelWidth, height: _vm.levelHeight },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-tip flex space-between" }, [
        _c("div", { staticClass: "text-center" }, [
          _vm.level == 1 ? _c("span", [_vm._v("低")]) : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", [_vm.level == 2 ? _c("span", [_vm._v("中")]) : _vm._e()]),
        _vm._v(" "),
        _c("div", [_vm.level == 3 ? _c("span", [_vm._v("高")]) : _vm._e()]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-safety-level/xy-safety-level.vue?vue&type=template&id=8256205c&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-safety-level/xy-safety-level.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_safety_levelvue_type_script_lang_js_ = ({
  name: 'xySafetyLevel',
  props: {
    showType: {
      type: String,
      default: 'level'
    },
    level: {
      type: Number,
      default: 0 // 取值1-2-3

    },
    levelWidth: {
      type: String,
      default: '70px'
    },
    levelHeight: {
      type: String,
      default: '6px'
    },
    percent: {
      type: Number,
      default: 5 //百分比

    }
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/xy-safety-level/xy-safety-level.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_safety_level_xy_safety_levelvue_type_script_lang_js_ = (xy_safety_levelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-safety-level/xy-safety-level.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_safety_level_xy_safety_levelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "8256205c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-safety-level/xy-safety-level.vue"
/* harmony default export */ var xy_safety_level = (component.exports);

/***/ }),

/***/ 9414:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_safety_verify; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-safety-verify/xy-safety-verify.vue?vue&type=template&id=343deb26&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dialog",
    {
      attrs: {
        "append-to-body": "",
        title: "安全验证",
        visible: _vm.dialogVisible,
        width: "450px",
      },
      on: {
        "update:visible": function ($event) {
          _vm.dialogVisible = $event
        },
        close: _vm.eclose,
      },
    },
    [
      _c(
        "el-form",
        { ref: "form", attrs: { model: _vm.form, rules: _vm.rule } },
        [
          _vm.verifyList.indexOf("email") >= 0
            ? _c(
                "el-form-item",
                { attrs: { label: "邮箱验证码", prop: "emailVerify" } },
                [
                  _c(
                    "el-input",
                    {
                      attrs: {
                        size: "large",
                        autocomplete: "off",
                        type: "text",
                        prefix: "ios-lock-outline",
                        placeholder: "请输入邮箱验证码",
                      },
                      model: {
                        value: _vm.form.emailVerify,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "emailVerify", $$v)
                        },
                        expression: "form.emailVerify",
                      },
                    },
                    [
                      _c("XySendVerify", {
                        attrs: {
                          slot: "append",
                          url: "/v1/email/verify/send",
                          type: "邮箱",
                          noNeedAccount: true,
                          title: "安全验证",
                        },
                        on: { verifysuccess: _vm.getVerifyToken },
                        slot: "append",
                      }),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.verifyList.indexOf("mobile") >= 0
            ? _c(
                "el-form-item",
                { attrs: { label: "手机验证码", prop: "mobileVerify" } },
                [
                  _c(
                    "el-input",
                    {
                      attrs: {
                        size: "large",
                        autocomplete: "off",
                        type: "text",
                        prefix: "ios-lock-outline",
                        placeholder: "请输入手机验证码",
                      },
                      model: {
                        value: _vm.form.mobileVerify,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "mobileVerify", $$v)
                        },
                        expression: "form.mobileVerify",
                      },
                    },
                    [
                      _c("XySendVerify", {
                        attrs: {
                          slot: "append",
                          url: "/v1/sms/verify/send",
                          type: "手机号",
                          noNeedAccount: true,
                          title: "安全验证",
                        },
                        on: { verifysuccess: _vm.getMobileVerifyToken },
                        slot: "append",
                      }),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.verifyList.indexOf("gauth") >= 0
            ? _c(
                "el-form-item",
                { attrs: { label: "谷歌验证码", prop: "gauth" } },
                [
                  _c("el-input", {
                    attrs: {
                      size: "large",
                      type: "password",
                      prefix: "ios-lock-outline",
                      placeholder: "请输入谷歌验证码",
                    },
                    model: {
                      value: _vm.form.gauth,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "gauth", $$v)
                      },
                      expression: "form.gauth",
                    },
                  }),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.verifyList.indexOf("paypwd") >= 0
            ? _c(
                "el-form-item",
                { attrs: { label: "支付密码", prop: "paypwd" } },
                [
                  _c("el-input", {
                    attrs: {
                      size: "large",
                      type: "password",
                      prefix: "ios-lock-outline",
                      placeholder: "请输入6-18位支付密码",
                    },
                    model: {
                      value: _vm.form.paypwd,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "paypwd", $$v)
                      },
                      expression: "form.paypwd",
                    },
                  }),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.verifyList.indexOf("password") >= 0
            ? _c(
                "el-form-item",
                { attrs: { label: "登录密码", prop: "password" } },
                [
                  _c("el-input", {
                    attrs: {
                      size: "large",
                      type: "password",
                      prefix: "ios-lock-outline",
                      placeholder: "请输入登录密码",
                    },
                    model: {
                      value: _vm.form.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password",
                    },
                  }),
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticClass: "full submit-btn",
              attrs: { size: "large", loading: _vm.loading, type: "primary" },
              on: {
                click: function ($event) {
                  return _vm.handleSubmit("form")
                },
              },
            },
            [_vm._v("\n            确认\n        ")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-safety-verify/xy-safety-verify.vue?vue&type=template&id=343deb26&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(2564);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./src/xy-send-verify/xy-send-verify.vue + 4 modules
var xy_send_verify = __webpack_require__(4730);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-safety-verify/xy-safety-verify.vue?vue&type=script&lang=js&





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_safety_verifyvue_type_script_lang_js_ = ({
  name: 'xySafetyVerify',
  components: {
    XySendVerify: xy_send_verify["default"]
  },
  props: {
    value: {
      type: [String, Object],
      default: ''
    }
  },
  data: function data() {
    return {
      dialogVisible: false,
      verifyList: [],
      loading: false,
      form: {
        paypwd: '',
        password: '',
        emailVerify: '',
        emailToken: '',
        mobileVerify: '',
        mobileToken: '',
        gauth: ''
      },
      rule: {}
    };
  },
  created: function created() {},
  methods: {
    getVerifyToken: function getVerifyToken(res) {
      this.form.emailToken = res.token;
    },
    getMobileVerifyToken: function getMobileVerifyToken(res) {
      this.form.mobileToken = res.token;
    },
    open: function open(verifyList) {
      console.log('verifyList', verifyList);
      this.verifyList = verifyList;
      this.getRule();
      this.dialogVisible = true;
      console.log(this.rule);
    },
    eclose: function eclose() {
      this.$emit('cancel');
    },
    close: function close() {
      this.dialogVisible = false;
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.loading = true;
                _this = _this2;
                setTimeout(function () {
                  _this.loading = false;
                }, 5000);

                _this2.$emit('input', _this2.form);

                _this2.$emit('verify-request');

                _this2.loading = false;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getRule: function getRule() {
      for (var key in this.verifyList) {
        switch (this.verifyList[key]) {
          case 'email':
            this.rule.email = [{
              required: true,
              message: '请填写邮箱验证码',
              trigger: 'blur'
            }, {
              type: 'string',
              min: 6,
              message: '至少6位',
              trigger: 'blur'
            }];
            break;

          case 'mobile':
            this.rule.mobile = [{
              required: true,
              message: '请填写手机验证码',
              trigger: 'blur'
            }, {
              type: 'string',
              min: 6,
              message: '至少6位',
              trigger: 'blur'
            }];
            break;

          case 'gauth':
            this.rule.gauth = [{
              required: true,
              message: '请填写谷歌验证码',
              trigger: 'blur'
            }, {
              type: 'string',
              min: 6,
              message: '密码至少6位',
              trigger: 'blur'
            }];
            break;

          case 'paypwd':
            this.rule.paypwd = [{
              required: true,
              message: '请填写支付密码',
              trigger: 'blur'
            }, {
              type: 'string',
              min: 6,
              message: '密码至少6位',
              trigger: 'blur'
            }];
            break;

          case 'password':
            this.rule.password = [{
              required: true,
              message: '请填写登录密码',
              trigger: 'blur'
            }, {
              type: 'string',
              min: 6,
              message: '密码至少6位',
              trigger: 'blur'
            }];
            break;

          default:
            break;
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-safety-verify/xy-safety-verify.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_safety_verify_xy_safety_verifyvue_type_script_lang_js_ = (xy_safety_verifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-safety-verify/xy-safety-verify.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_safety_verify_xy_safety_verifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "343deb26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-safety-verify/xy-safety-verify.vue"
/* harmony default export */ var xy_safety_verify = (component.exports);

/***/ }),

/***/ 4730:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_send_verify; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-send-verify/xy-send-verify.vue?vue&type=template&id=25834b26&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "xy-captha",
    { attrs: { id: _vm.CaptchaId }, on: { success: _vm.captchaSuccess } },
    [
      _c(
        "span",
        {
          staticClass: "send-verify p-l-xs p-r-xs lh-1 cursor-pointer",
          attrs: { id: _vm.CaptchaId, type: "text" },
        },
        [
          _c("span", { on: { click: _vm.doClick } }, [
            _vm._v(_vm._s(_vm.label)),
          ]),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-send-verify/xy-send-verify.vue?vue&type=template&id=25834b26&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(2564);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./src/xy-captcha/xy-captcha.vue + 4 modules
var xy_captcha = __webpack_require__(2515);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-send-verify/xy-send-verify.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_send_verifyvue_type_script_lang_js_ = ({
  components: {
    XyCaptha: xy_captcha["default"]
  },
  name: 'xySendVerify',
  props: {
    // 是否验证发送合法性
    verifyUser: {
      type: [Boolean, Number],
      default: false
    },
    // 是否需要传递account
    noNeedAccount: {
      type: Boolean,
      default: false
    },
    account: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '/v1/sms/verify/send'
    },
    type: {
      type: String,
      default: '手机号'
    },
    time: {
      type: Number,
      default: 30
    },
    capthaOptions: Object
  },
  data: function data() {
    return {
      CaptchaId: 'Captcha' + this.$xyutil.guid(),
      label: '发送验证码',
      timeLeft: 0,
      capthaOptionsData: {}
    };
  },
  created: function created() {},
  methods: {
    captchaSuccess: function captchaSuccess() {
      this.sendVerify();
    },
    doClick: function doClick(e) {
      if (this.timeLeft > 0) {
        e.stopPropagation();
      }

      if (!this.account && !this.noNeedAccount) {
        this.$xyutil.showToast({
          title: '请输入' + this.type,
          icon: 'loading',
          duration: 1000
        });
        e.stopPropagation();
      }
    },
    sendVerify: function sendVerify() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var timer, data, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.timeLeft > 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (!(!_this.account && !_this.noNeedAccount)) {
                  _context.next = 5;
                  break;
                }

                _this.$xyutil.showToast({
                  title: '请输入' + _this.type,
                  icon: 'loading',
                  duration: 1000
                });

                return _context.abrupt("return", false);

              case 5:
                _this.timeLeft = _this.time;
                _this.label = '剩余' + _this.timeLeft + 's';
                timer = setInterval(function () {
                  _this.timeLeft--;

                  if (_this.timeLeft <= 0) {
                    _this.label = '发送验证码';
                    _this.timeLeft = 0;
                    clearInterval(timer);
                  } else {
                    _this.label = '剩余' + _this.timeLeft + 's';
                  }
                }, 1000);
                data = {};

                if (_this.type == '手机号') {
                  data = {
                    mobile: _this.account,
                    title: _this.title
                  };
                } else {
                  data = {
                    email: _this.account,
                    title: _this.title
                  };
                } // 是否发送验证合法性


                data.verifyUser = _this.verifyUser;
                _context.next = 13;
                return _this.$xyutil.request({
                  url: _this.url,
                  data: data,
                  method: 'post'
                });

              case 13:
                res = _context.sent;

                if (res.code == '200') {
                  _this.$xyutil.showToast({
                    title: res.msg,
                    icon: 'success',
                    duration: 1000
                  }); // 事件


                  _this.$emit('verifysuccess', res.data);
                } else {
                  _this.$xyutil.showToast({
                    title: res.msg,
                    icon: 'loading',
                    duration: 2000
                  });
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-send-verify/xy-send-verify.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_send_verify_xy_send_verifyvue_type_script_lang_js_ = (xy_send_verifyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-send-verify/xy-send-verify.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_send_verify_xy_send_verifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "25834b26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-send-verify/xy-send-verify.vue"
/* harmony default export */ var xy_send_verify = (component.exports);

/***/ }),

/***/ 4351:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_shop_sku; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-shop-sku/xy-shop-sku.vue?vue&type=template&id=440c8f4c&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "sku-spec" },
      [
        _vm._l(_vm.value.skuSpec, function (item1, key1) {
          return _c(
            "el-row",
            { key: key1, attrs: { gutter: 15 } },
            [
              _c(
                "el-col",
                { attrs: { span: 2 } },
                [
                  _c("el-input", {
                    attrs: { size: "small" },
                    model: {
                      value: item1.title,
                      callback: function ($$v) {
                        _vm.$set(item1, "title", $$v)
                      },
                      expression: "item1.title",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 18 } },
                [
                  _vm._l(item1.spec, function (item2, key2) {
                    return _c(
                      "el-tag",
                      {
                        key: key2,
                        staticClass: "m-r-xs",
                        attrs: { name: item2.title, closable: "" },
                        on: {
                          "on-close": function ($event) {
                            return _vm.closeTag(key1, key2)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(item2.title) +
                            "\n                "
                        ),
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c("el-input", {
                    staticStyle: { width: "80px" },
                    attrs: { size: "small", placeholder: "回车添加" },
                    nativeOn: {
                      keyup: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.addTag(key1)
                      },
                    },
                    model: {
                      value: _vm.tag,
                      callback: function ($$v) {
                        _vm.tag = $$v
                      },
                      expression: "tag",
                    },
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "el-button",
                    {
                      attrs: { size: "small" },
                      on: {
                        click: function ($event) {
                          return _vm.delspec(key1)
                        },
                      },
                    },
                    [_vm._v("删除")]
                  ),
                ],
                1
              ),
            ],
            1
          )
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "10px", "margin-bottom": "10px" } },
          [
            _c("el-input", {
              staticStyle: { width: "80px", "margin-right": "15px" },
              attrs: { size: "small", placeholder: "新规格名称" },
              nativeOn: {
                keyup: function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.addspec.apply(null, arguments)
                },
              },
              model: {
                value: _vm.title,
                callback: function ($$v) {
                  _vm.title = $$v
                },
                expression: "title",
              },
            }),
            _vm._v(" "),
            _c(
              "el-button",
              {
                staticStyle: {
                  "vertical-align": "middle",
                  "margin-right": "15px",
                },
                attrs: { size: "small", type: "primary" },
                on: { click: _vm.addspec },
              },
              [_vm._v("\n                增加规格\n            ")]
            ),
          ],
          1
        ),
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "sku-list" },
      [
        _c(
          "el-table",
          {
            attrs: {
              border: "",
              "highlight-current-row": "",
              data: _vm.value.skuList,
            },
          },
          _vm._l(_vm.columns, function (coco, key) {
            return _c("el-table-column", {
              key: key,
              attrs: {
                prop: coco.name,
                label: coco.title,
                width: coco.width || "",
                "min-width": coco.minWidth || "",
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function (scope) {
                      return [
                        coco.type == "input"
                          ? [
                              _c("el-input", {
                                attrs: { size: "small" },
                                on: { "on-blur": _vm.getData },
                                model: {
                                  value:
                                    _vm.value.skuList[scope.$index][coco.name],
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.value.skuList[scope.$index],
                                      coco.name,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "value.skuList[scope.$index][coco.name]",
                                },
                              }),
                            ]
                          : coco.type == "select"
                          ? [
                              _c("el-cascader", {
                                attrs: {
                                  data: _vm.specCascader[0],
                                  prop: _vm.loadData,
                                  size: "small",
                                },
                                model: {
                                  value:
                                    _vm.value.skuList[scope.$index][coco.name],
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.value.skuList[scope.$index],
                                      coco.name,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "value.skuList[scope.$index][coco.name]",
                                },
                              }),
                            ]
                          : coco.type == "group"
                          ? _vm._l(coco.options.fields, function (grp, grpKey) {
                              return _c(
                                "div",
                                { key: grpKey, staticClass: "sku-list-group" },
                                [
                                  _c("div", { staticClass: "title" }, [
                                    _vm._v(_vm._s(grp[1]) + ":"),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    [
                                      _c("el-input", {
                                        attrs: { size: "small" },
                                        on: { "on-blur": _vm.getData },
                                        model: {
                                          value:
                                            _vm.value.skuList[scope.$index][
                                              grp[0]
                                            ],
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.value.skuList[scope.$index],
                                              grp[0],
                                              $$v
                                            )
                                          },
                                          expression:
                                            "value.skuList[scope.$index][grp[0]]",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              )
                            })
                          : coco.type == "image"
                          ? [
                              _c("xy-upload", {
                                attrs: {
                                  item: {
                                    name: coco.name,
                                    extra: _vm.item.extra,
                                  },
                                  img: { name: "", title: "" },
                                  header: _vm.header,
                                },
                                model: {
                                  value:
                                    _vm.value.skuList[scope.$index][coco.name],
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.value.skuList[scope.$index],
                                      coco.name,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "value.skuList[scope.$index][coco.name]",
                                },
                              }),
                            ]
                          : coco.type == "delete"
                          ? [
                              _c(
                                "el-button",
                                {
                                  staticStyle: { "vertical-align": "middle" },
                                  attrs: { size: "small" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.delrow(_vm.index)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                            删除\n                        "
                                  ),
                                ]
                              ),
                            ]
                          : [
                              _c("el-input", {
                                attrs: { size: "small" },
                                on: { "on-blur": _vm.getData },
                                model: {
                                  value:
                                    _vm.value.skuList[scope.$index][coco.name],
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.value.skuList[scope.$index],
                                      coco.name,
                                      $$v
                                    )
                                  },
                                  expression:
                                    "value.skuList[scope.$index][coco.name]",
                                },
                              }),
                            ],
                      ]
                    },
                  },
                ],
                null,
                true
              ),
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "el-button",
          {
            staticStyle: { "vertical-align": "middle", "margin-right": "15px" },
            attrs: { size: "small", type: "dashed" },
            on: { click: _vm.addrow },
          },
          [_vm._v("\n            增加\n        ")]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-shop-sku/xy-shop-sku.vue?vue&type=template&id=440c8f4c&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(561);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(1038);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(2165);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./src/xy-upload/xy-upload.vue + 4 modules
var xy_upload = __webpack_require__(5945);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-shop-sku/xy-shop-sku.vue?vue&type=script&lang=js&
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

















function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_shop_skuvue_type_script_lang_js_ = ({
  name: 'XyShopSku',
  components: {
    'xy-upload': xy_upload["default"]
  },
  props: {
    item: {},
    value: {
      skuSpec: [],
      skuList: []
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0
        };
      }
    }
  },
  data: function data() {
    return {
      title: '',
      tag: '',
      columns: [{
        title: '规格',
        name: 'spec',
        type: 'select',
        width: '400px'
      }, {
        title: '价格',
        name: 'priceGroup',
        type: 'group',
        width: '200',
        options: {
          fields: [['price', '现价'], // ['vipPrice', '会员价'],
          ['originalPrice', '原价']]
        }
      }, {
        title: '库存',
        name: 'stock',
        type: 'text',
        width: '150px'
      }, {
        title: 'SKU编号',
        name: 'skuNo',
        type: 'text',
        width: '250px'
      }, {
        title: '备注',
        name: 'remark',
        type: 'text',
        width: '250px'
      }, {
        title: '图片',
        name: 'cover',
        type: 'image',
        width: '100px'
      }, {
        title: '删除',
        name: 'delete',
        type: 'delete',
        width: '100px'
      }],
      dataItem: {
        spec: '',
        price: '',
        vipPrice: '',
        originalPrice: '',
        stock: '',
        skuNo: '',
        remark: '',
        cover: '',
        delete: ''
      },
      specCascader: []
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.updateColumns();
  },
  methods: {
    getData: function getData() {
      this.$emit('input', this.value);
      console.log(this.value);
    },
    loadData: function loadData(item, callback) {
      if (this.specCascader[item.index + 1]) {
        item.loading = true;
        item.children = this.specCascader[item.index + 1];
        item.loading = false;
        callback();
      }
    },
    delrow: function delrow(key) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.item.extra.disabled) {
                  _context.next = 3;
                  break;
                }

                _this.$message({
                  message: '只读模式',
                  type: 'warning'
                });

                return _context.abrupt("return");

              case 3:
                if (!_this.value.skuList[key].id) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return _this.$xyutil.request({
                  url: _this.item.extra.apiSkuDelete + '/' + _this.value.skuList[key].id,
                  method: 'DELETE',
                  header: _this.header
                });

              case 6:
                res = _context.sent;

                if (res.code == '200') {
                  _this.value.skuList.splice(key, 1);

                  _this.$message.success(res.msg);
                } else {
                  _this.$message.error(res.msg);
                }

                _context.next = 11;
                break;

              case 10:
                // 新增页面直接删除即可
                _this.value.skuList.splice(key, 1);

              case 11:
                _this.getData();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addrow: function addrow() {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      } // 填写检测
      // 重复检测


      var _iterator = _createForOfIteratorHelper(this.value.skuList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i == '') {
            this.$message.error('请填写规格');
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ;
      var tmp = Object.assign({}, this.dataItem);
      this.value.skuList.push(tmp);
    },
    closeTag: function closeTag(key, key2) {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.value.skuSpec[key].spec.splice(key2, 1);
    },
    addTag: function addTag(key) {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      } // 填写检测


      if (!this.tag) {
        this.$message.error('请填写规格');
        return false;
      } // 重复检测


      var _iterator2 = _createForOfIteratorHelper(this.value.skuSpec[key].spec),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;

          if (i.title == this.tag) {
            this.$message.error('规格重复');
            return false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      ;
      var value = this.value;
      value.skuSpec[key].spec.push({
        title: this.tag
      });
      this.tag = '';
      this.value = value;
    },
    addspec: function addspec() {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      } // 填写检测


      if (!this.title) {
        this.$message.error('请填写规格名称');
        return false;
      } // 重复检测


      var _iterator3 = _createForOfIteratorHelper(this.value.skuSpec),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var i = _step3.value;

          if (i.title == this.title) {
            this.$message.error('规格名称重复');
            return false;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      ;
      this.value.skuSpec.push({
        title: this.title,
        spec: []
      });
      this.title = '';
    },
    delspec: function delspec(key) {
      if (this.item.extra.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.value.skuSpec.splice(key, 1);
    },
    updateColumns: function updateColumns() {
      var specCascader = this.specCascader;

      for (var i = 0; i < this.value.skuSpec.length; i++) {
        var cols1 = [];

        var _iterator4 = _createForOfIteratorHelper(this.value.skuSpec[i].spec),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var j = _step4.value;
            console.log(j);

            if (i == this.value.skuSpec.length - 1) {
              cols1.push({
                index: i,
                value: j.title,
                label: j.title
              });
            } else {
              cols1.push({
                index: i,
                value: j.title,
                label: j.title,
                children: [],
                loading: false
              });
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        specCascader[i] = cols1;
      }

      this.specCascader = specCascader;
    }
  },
  watch: {
    'value': {
      handler: function handler(object) {
        console.log('spec', object);
        this.updateColumns();
      },
      deep: true,
      immediate: true
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-shop-sku/xy-shop-sku.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_shop_sku_xy_shop_skuvue_type_script_lang_js_ = (xy_shop_skuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-shop-sku/xy-shop-sku.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_shop_sku_xy_shop_skuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "440c8f4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-shop-sku/xy-shop-sku.vue"
/* harmony default export */ var xy_shop_sku = (component.exports);

/***/ }),

/***/ 7175:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_shop_skuprice; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-shop-skuprice/xy-shop-skuprice.vue?vue&type=template&id=213ee706&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "sku-list" },
      [
        _c(
          "el-table",
          {
            attrs: { border: "", "highlight-current-row": "", data: _vm.value },
          },
          _vm._l(_vm.columns, function (coco, key) {
            return _c("el-table-column", {
              key: key,
              attrs: {
                prop: coco.name,
                label: coco.title,
                width: coco.width || "",
                "min-width": coco.minWidth || "",
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function (scope) {
                      return [
                        coco.type == "input"
                          ? [
                              _c("el-input", {
                                attrs: { size: "small" },
                                on: { "on-blur": _vm.getData },
                                model: {
                                  value: _vm.value[scope.$index][coco.name],
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.value[scope.$index],
                                      coco.name,
                                      $$v
                                    )
                                  },
                                  expression: "value[scope.$index][coco.name]",
                                },
                              }),
                            ]
                          : [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.value[scope.$index][coco.name]) +
                                  "\n                    "
                              ),
                            ],
                      ]
                    },
                  },
                ],
                null,
                true
              ),
            })
          }),
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-shop-skuprice/xy-shop-skuprice.vue?vue&type=template&id=213ee706&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-shop-skuprice/xy-shop-skuprice.vue?vue&type=script&lang=js&




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_shop_skupricevue_type_script_lang_js_ = ({
  name: 'SkuPrice',
  components: {},
  props: {
    item: {},
    value: [],
    formValues: {},
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0
        };
      }
    }
  },
  data: function data() {
    return {
      title: '',
      tag: '',
      columns: [{
        title: '规格',
        name: 'spec',
        type: 'text',
        width: '300px'
      }, {
        title: '正常售价',
        name: 'price',
        type: 'text'
      }, {
        title: '剩余库存',
        name: 'stock',
        type: 'text'
      }, {
        title: '秒杀价',
        name: 'curPrice',
        type: 'input'
      }, {
        title: '每次库存',
        name: 'curStock',
        type: 'input'
      }]
    };
  },
  created: function created() {},
  beforeMount: function beforeMount() {},
  methods: {
    getData: function getData() {
      this.$emit('input', this.value);
      console.log(this.value);
    }
  },
  watch: {
    'formValues.itemId': {
      handler: function handler(object) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var that, res, i, j;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  that = _this;

                  if (!(object && object != undefined)) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 4;
                  return that.$xyutil.request({
                    url: '/v1/iadmin/ishop/sku/lists',
                    method: 'get',
                    data: {
                      itemId: object,
                      curField: 1
                    },
                    header: {
                      CloudId: that.header.cloudId,
                      Eid: that.header.eid
                    }
                  });

                case 4:
                  res = _context.sent;

                  if (res.code == 200) {
                    for (i = res.data.dataList.length - 1; i >= 0; i--) {
                      for (j = 0; j < _this.value.length; j++) {
                        if (_this.value[j].spec == res.data.dataList[i].spec) {
                          res.data.dataList[i]['curPrice'] = _this.value[j].curPrice;
                          res.data.dataList[i]['curStock'] = _this.value[j].curStock;
                        }
                      }
                    }

                    _this.value = res.data.dataList;

                    _this.getData();
                  } else {
                    _this.$xyutil.showToast({
                      title: res.msg
                    });
                  }

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      deep: true,
      immediate: true
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-shop-skuprice/xy-shop-skuprice.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_shop_skuprice_xy_shop_skupricevue_type_script_lang_js_ = (xy_shop_skupricevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-shop-skuprice/xy-shop-skuprice.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_shop_skuprice_xy_shop_skupricevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "213ee706",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-shop-skuprice/xy-shop-skuprice.vue"
/* harmony default export */ var xy_shop_skuprice = (component.exports);

/***/ }),

/***/ 3646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_tags_input; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-tags-input/xy-tags-input.vue?vue&type=template&id=45bbc0a8&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xt-tags-input" },
    [
      _vm._l(_vm.dynamicTags, function (tag) {
        return _c(
          "el-tag",
          {
            key: tag,
            attrs: { closable: "", "disable-transitions": false },
            on: {
              close: function ($event) {
                return _vm.handleClose(tag)
              },
            },
          },
          [_vm._v("\n        " + _vm._s(tag) + "\n    ")]
        )
      }),
      _vm._v(" "),
      _vm.inputVisible
        ? _c("el-input", {
            ref: "saveTagInput",
            staticClass: "input-new-tag",
            attrs: { size: "small" },
            on: { blur: _vm.handleInputConfirm },
            nativeOn: {
              keyup: function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.handleInputConfirm.apply(null, arguments)
              },
            },
            model: {
              value: _vm.inputValue,
              callback: function ($$v) {
                _vm.inputValue = $$v
              },
              expression: "inputValue",
            },
          })
        : _c(
            "el-button",
            {
              staticClass: "button-new-tag",
              attrs: { size: "small" },
              on: { click: _vm.showInput },
            },
            [_vm._v("添加")]
          ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-tags-input/xy-tags-input.vue?vue&type=template&id=45bbc0a8&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(3123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(561);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-tags-input/xy-tags-input.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_tags_inputvue_type_script_lang_js_ = ({
  name: 'XyTagsInput',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Array]
    }
  },
  data: function data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: ''
    };
  },
  created: function created() {
    this.getDefault();
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.getDefault();
      }
    }
  },
  methods: {
    getDefault: function getDefault() {
      if (this.value == '') {
        this.dynamicTags = [];
      } else {
        if (typeof this.value == 'string') {
          this.dynamicTags = this.value.split(',');
        } else {
          this.dynamicTags = this.value;
        }
      }
    },
    handleClose: function handleClose(tag) {
      if (this.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      this.$emit('input', this.dynamicTags);
    },
    showInput: function showInput() {
      var _this = this;

      this.inputVisible = true;
      this.$nextTick(function (_) {
        _this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm: function handleInputConfirm() {
      if (this.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      var inputValue = this.inputValue;

      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }

      this.$emit('input', this.dynamicTags);
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-tags-input/xy-tags-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_tags_input_xy_tags_inputvue_type_script_lang_js_ = (xy_tags_inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-tags-input/xy-tags-input.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_tags_input_xy_tags_inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "45bbc0a8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-tags-input/xy-tags-input.vue"
/* harmony default export */ var xy_tags_input = (component.exports);

/***/ }),

/***/ 6445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_three_psv; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-three-psv/xy-three-psv.vue?vue&type=template&id=6711a7a6&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "xy-three-psv", attrs: { id: "viewer" } })
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-three-psv/xy-three-psv.vue?vue&type=template&id=6711a7a6&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-three-psv/xy-three-psv.vue?vue&type=script&lang=js&




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
// 三维展示插件
/* harmony default export */ var xy_three_psvvue_type_script_lang_js_ = ({
  name: 'xyThreePsv',
  props: {
    item: {},
    value: {
      type: [String],
      default: ''
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    }
  },
  data: function data() {
    return {
      PSV: null,
      factoryLink: '',
      loadedScript: false,
      imageLoaded: false
    };
  },
  watch: {
    value: function value(val) {
      var _this = this;

      this.factoryLink = val;

      if (this.loadedScript) {
        // 定义了一个变量imageLoaded来判断是否加载完成，在每次切换时设为false
        if (this.PSV) {
          this.imageLoaded = false;
          this.PSV.setPanorama(this.factoryLink, true, true).then(function () {
            _this.imageLoaded = true; // console.log('-------替换图片完成--------')
          });
        } else {
          this.initPhotoSphere();
        } // 然后我们就可以在点击事件的位置通过imageLoaded的值来限制

      }
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.factoryLink = this.value;
              _context.next = 3;
              return this.loadScript();

            case 3:
              this.loadedScript = true;
              this.initPhotoSphere();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    initPhotoSphere: function initPhotoSphere() {
      this.PSV = new PhotoSphereViewer.Viewer({
        container: document.getElementById('viewer'),
        panorama: this.factoryLink,
        navbar: false,
        fisheye: false,
        autorotateDelay: 100,
        autorotateSpeed: '0.2rpm',
        moveSpeed: 1
      });
    },
    loadScript: function loadScript() {
      var _this2 = this;

      var that = this;
      return new Promise(function (resolve, reject) {
        that.VueLink2.load(_this2.$xyutil.config.cdnDomain + '/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.css').then(function () {});
        that.VueScript2.load(_this2.$xyutil.config.cdnDomain + '/npm/uevent@2/browser.min.js').then(function () {});
        that.VueScript2.load(_this2.$xyutil.config.cdnDomain + '/npm/three@0.125.2/build/three.min.js').then(function () {
          that.VueScript2.load(this.$xyutil.config.cdnDomain + '/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.js').then(function () {
            resolve();
          });
        });
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-three-psv/xy-three-psv.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_three_psv_xy_three_psvvue_type_script_lang_js_ = (xy_three_psvvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-three-psv/xy-three-psv.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_three_psv_xy_three_psvvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6711a7a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-three-psv/xy-three-psv.vue"
/* harmony default export */ var xy_three_psv = (component.exports);

/***/ }),

/***/ 5395:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_title; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-title/xy-title.vue?vue&type=template&id=743d74a6&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "xy-title flex" },
    [_c("div", { staticClass: "prefix" }), _vm._v(" "), _vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-title/xy-title.vue?vue&type=template&id=743d74a6&scoped=true&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-title/xy-title.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_titlevue_type_script_lang_js_ = ({
  name: 'xyTitle',
  props: {},
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/xy-title/xy-title.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_title_xy_titlevue_type_script_lang_js_ = (xy_titlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-title/xy-title.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_title_xy_titlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "743d74a6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-title/xy-title.vue"
/* harmony default export */ var xy_title = (component.exports);

/***/ }),

/***/ 674:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_tree_regions; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-tree-regions/xy-tree-regions.vue?vue&type=template&id=b194ca40&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "xy-tree-regions" },
      [
        _c(
          "el-button",
          {
            attrs: { type: "default", size: "small" },
            on: {
              click: function ($event) {
                _vm.modalShow = true
              },
            },
          },
          [_vm._v("编辑")]
        ),
        _vm._v(" "),
        _c(
          "el-dialog",
          {
            directives: [
              { name: "el-drag-dialog", rawName: "v-el-drag-dialog" },
            ],
            ref: "modal",
            attrs: {
              "append-to-body": true,
              visible: _vm.modalShow,
              width: "800px",
              title: _vm.modalTitle,
            },
            on: {
              "update:visible": function ($event) {
                _vm.modalShow = $event
              },
            },
          },
          [
            _c("el-tree", {
              ref: "tree",
              attrs: {
                data: _vm.dataList,
                props: _vm.cusprops,
                load: _vm.loadNode,
                "default-checked-keys": _vm.value,
                "node-key": _vm.valueName,
                lazy: "",
                "show-checkbox": "",
              },
              on: { "check-change": _vm.onChange },
            }),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: "https://i.loli.net/2020/03/24/9Fu1lZbmepVXr2y.png",
                alt: "中国行政区划图",
              },
            }),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-tree-regions/xy-tree-regions.vue?vue&type=template&id=b194ca40&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(2564);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-tree-regions/xy-tree-regions.vue?vue&type=script&lang=js&





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var xy_tree_regionsvue_type_script_lang_js_ = ({
  name: 'XyTreeRegions',
  props: {
    modalTitle: '',
    action: '',
    valueName: {
      type: String,
      default: 'id'
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0
        };
      }
    },
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      modalShow: false,
      dataList: [],
      cusprops: {
        label: 'title',
        children: 'children',
        isLeaf: 'isLeaf'
      }
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$xyutil.request({
                url: this.action,
                method: 'get',
                data: {
                  id: 100000,
                  child: 0,
                  maxLevel: 2,
                  // 2表示精确到市
                  checked: this.value
                },
                header: this.header
              });

            case 2:
              res = _context.sent;

              if (res.code == 200) {
                this.dataList = res.data.dataList;
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  beforeMount: function beforeMount() {},
  methods: {
    onChange: function onChange() {
      this.value = this.$refs.tree.getCheckedKeys();
      console.log(this.value);
      this.$emit('input', this.value);
    },
    loadNode: function loadNode(node, resolve) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('node', node);

                if (!(node.level === 0)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", resolve([{
                  title: 'region'
                }]));

              case 3:
                //if (node.level > 1) return resolve([]);
                setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var res;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this.$xyutil.request({
                            url: _this.action,
                            method: 'get',
                            data: {
                              id: node.data[_this.valueName],
                              child: 0,
                              maxLevel: 2 // 2表示精确到市

                            },
                            header: _this.header
                          });

                        case 2:
                          res = _context2.sent;

                          if (!(res.code == 200)) {
                            _context2.next = 5;
                            break;
                          }

                          return _context2.abrupt("return", resolve(res.data.dataList));

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })), 500);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  watch: {}
});
;// CONCATENATED MODULE: ./src/xy-tree-regions/xy-tree-regions.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_tree_regions_xy_tree_regionsvue_type_script_lang_js_ = (xy_tree_regionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-tree-regions/xy-tree-regions.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  xy_tree_regions_xy_tree_regionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b194ca40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-tree-regions/xy-tree-regions.vue"
/* harmony default export */ var xy_tree_regions = (component.exports);

/***/ }),

/***/ 5945:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ xy_upload; }
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-upload/xy-upload.vue?vue&type=template&id=19323d7c&scoped=true&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "upload-box",
      class:
        _vm.fileList.length >= _vm.optionsData.limit &&
        _vm.optionsData.type == "image"
          ? "hidden-up-btn"
          : "",
    },
    [
      _c(
        "el-upload",
        {
          ref: "upload",
          class: "upload-" + _vm.optionsData.type,
          attrs: {
            drag: _vm.optionsData.drag,
            "show-file-list": _vm.optionsData.showFileList,
            "list-type": _vm.listType,
            headers: _vm.headerData,
            limit: _vm.optionsData.limit,
            multiple: _vm.optionsData.limit == 1 ? false : true,
            "file-list": _vm.fileListSync,
            "on-preview": _vm.handlePictureCardPreview,
            "on-progress": _vm.handleProgress,
            "on-success": _vm.handleSuccess,
            "on-exceed": _vm.handleExceed,
            "before-remove": _vm.beforeRemove,
            "on-remove": _vm.handleRemove,
            "before-upload": _vm.handleBeforeUpload,
            data: _vm.optionsData.postdata,
            name: _vm.name,
            action: _vm.optionsData.action,
            "http-request": _vm.uploadSectionFile,
          },
        },
        [
          _vm.fileList.length >= _vm.optionsData.limit &&
          _vm.optionsData.limit == 1 &&
          _vm.optionsData.type == "image"
            ? [
                _vm.optionsData.showFileList == false
                  ? _c("img", {
                      staticStyle: { "max-height": "160px" },
                      attrs: { width: "100%", src: _vm.fileList[0]["url"] },
                    })
                  : _c("div"),
              ]
            : [
                _vm.optionsData && _vm.optionsData.drag
                  ? [
                      _vm._t("drag", function () {
                        return [
                          _vm.optionsData.type == "images"
                            ? [
                                _vm._t("icon", function () {
                                  return [
                                    _c("i", {
                                      staticClass: "el-icon-plus",
                                      class: _vm.optionsData.icon
                                        ? _vm.optionsData.icon
                                        : "",
                                    }),
                                  ]
                                }),
                                _vm._v(" "),
                                _vm.optionsData.placeholder
                                  ? _c(
                                      "div",
                                      { staticClass: "el-upload__text" },
                                      [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(
                                              _vm.optionsData.placeholder
                                            ) +
                                            "\n                        "
                                        ),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            : [
                                _vm._t("icon", function () {
                                  return [
                                    _c("i", {
                                      staticClass: "el-icon-upload",
                                      class: _vm.optionsData.icon
                                        ? _vm.optionsData.icon
                                        : "",
                                    }),
                                  ]
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "el-upload__text" }, [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(
                                        _vm.optionsData.placeholder
                                          ? _vm.optionsData.placeholder
                                          : "将文件拖到此处，或点击上传"
                                      ) +
                                      "\n                        "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "font-sm text-gray lh-1-2" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(
                                          _vm.optionsData.tip
                                            ? _vm.optionsData.tip
                                            : "只能上传" +
                                                _vm.optionsData.format +
                                                "文件，且不超过" +
                                                _vm.optionsData.maxSize +
                                                "KB"
                                        ) +
                                        "\n                        "
                                    ),
                                  ]
                                ),
                              ],
                        ]
                      }),
                    ]
                  : [
                      _c(
                        "el-button",
                        { attrs: { size: "small", type: "primary" } },
                        [
                          _vm._t("btn-text", function () {
                            return [_vm._v("点击上传")]
                          }),
                        ],
                        2
                      ),
                    ],
              ],
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: { "append-to-body": true, visible: _vm.dialogVisible },
              on: {
                "update:visible": function ($event) {
                  _vm.dialogVisible = $event
                },
              },
            },
            [
              _vm.mediaType == "image"
                ? [
                    _c("img", {
                      attrs: { width: "100%", src: _vm.dialogImageUrl },
                    }),
                  ]
                : _vm.mediaType == "audio"
                ? [
                    _c(
                      "audio",
                      {
                        attrs: {
                          src: _vm.dialogImageUrl,
                          controls: "controls",
                        },
                      },
                      [
                        _vm._v(
                          "\n                    您的浏览器不支持 audio 标签。\n                "
                        ),
                      ]
                    ),
                  ]
                : _vm.mediaType == "video"
                ? [
                    _c(
                      "video",
                      {
                        attrs: {
                          src: _vm.dialogImageUrl,
                          controls: "controls",
                          width: "700",
                        },
                      },
                      [
                        _vm._v(
                          "\n                    您的浏览器不支持 video 标签。\n                "
                        ),
                      ]
                    ),
                  ]
                : _vm._e(),
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: {
                title: "图片裁剪",
                "append-to-body": true,
                visible: _vm.cropperInit.showCropper,
                width: "800px",
              },
              on: {
                "update:visible": function ($event) {
                  return _vm.$set(_vm.cropperInit, "showCropper", $event)
                },
              },
            },
            [
              _c("xy-cropper", {
                attrs: {
                  init: _vm.cropperInit,
                  imgData: _vm.cropperImgData,
                  autoCropWidth: _vm.optionsData.imgWidth,
                  autoCropHeight: _vm.optionsData.imgHeight,
                },
                on: { success: _vm.cropperSuccess },
              }),
              _vm._v(" "),
              _c("span", {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              }),
            ],
            1
          ),
        ],
        2
      ),
      _vm._v(" "),
      _vm.img.title && _vm.img.title !== ""
        ? _c("div", { staticStyle: { "text-align": "center" } }, [
            _vm._v("\n        " + _vm._s(_vm.img.title) + "\n    "),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./src/xy-upload/xy-upload.vue?vue&type=template&id=19323d7c&scoped=true&

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(4553);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(561);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(6977);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(2023);
// EXTERNAL MODULE: ./src/xy-cropper/xy-cropper.vue + 4 modules
var xy_cropper = __webpack_require__(9889);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/xy-upload/xy-upload.vue?vue&type=script&lang=js&


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var xy_uploadvue_type_script_lang_js_ = ({
  name: 'XyUpload',
  components: {
    XyCropper: xy_cropper["default"]
  },
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {
          extra: {}
        };
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: {
      type: [Array, String],
      default: function _default() {
        return [];
      }
    },
    header: {
      type: Object,
      default: function _default() {
        return {
          cloudId: 0,
          eid: 0,
          token: ''
        };
      }
    },
    img: {
      type: Object,
      default: function _default() {
        return {
          value: '',
          title: ''
        };
      }
    },
    upFileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      name: 'file',
      optionsData: {
        // 上传文件前回调方法，便于处理上传之前的事务，比如js解析文件信息
        beforeUpload: function beforeUpload(file) {
          return true;
        },
        onProgress: function onProgress(event, file, fileList) {},
        onChange: function onChange(file, fileList) {},
        onSuccess: function onSuccess(res, file, fileList) {},
        showFileList: true,
        type: 'image',
        drag: false,
        // 上传按钮样式是按钮还是拖拽样式
        driver: "",
        // default/upload_oss/unicloud/qiniu_kodo
        signUrl: "",
        // OSS等场景使用
        action: "",
        // 本地服务器使用,
        provider: "",
        // unicloud上传使用
        spaceId: "",
        // unicloud上传使用
        clientSecret: "",
        // unicloud上传使用
        hasUploadModule: false,
        // 是否有upload模块管理
        checkExist: false,
        // 是否检测已上传
        tag: '',
        // 文件自定义标记
        limit: 1,
        icon: "",
        placeholder: "",
        tip: "",
        format: "jpg,png",
        maxSize: 512,
        maxSizeFile: 5120,
        splitePiece: false,
        // 大文件分片
        mergeUrl: "",
        disabled: false,
        postdata: {},
        // 额外数据
        imgWidth: '',
        imgHeight: '',
        needCropper: false,
        upParallel: 3,
        // 并发文件数量
        failAutoRemove: false // 上传出错是否自动移出列表

      },
      taskList: {},
      headerData: {},
      fileList: [],
      fileListSync: [],
      listType: 'text',
      dialogImageUrl: '',
      dialogVisible: false,
      mediaType: 'image',
      cropperInit: {},
      cropperImgData: null,
      upInstanceList: {}
    };
  },
  mounted: function mounted() {
    this.optionsData = Object.assign(this.optionsData, this.options, this.item.extra); // console.log(this.optionsData);

    this.getDefault(true);
    this.headerData = {
      Authorization: this.header.token ? this.header.token : this.$xyutil.config.getToken()
    };
  },
  watch: {
    item: {
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.optionsData = Object.assign(this.optionsData, newValue.extra);
        this.getDefault(true);
      }
    },
    options: {
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.optionsData = Object.assign(this.optionsData, newValue);
        this.getDefault(true);
      }
    },
    value: {
      deep: true,
      handler: function handler(newValue, oldValue) {
        this.getDefault(true);
      }
    },
    fileList: function fileList(val) {//this.$emit('update:upFileList', val);
    }
  },
  methods: {
    getDefault: function getDefault() {
      var sync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      switch (this.optionsData.type) {
        case 'image':
          this.listType = 'picture';

          if (this.value == '') {
            this.fileList = [];
          } else {
            this.fileList = [{
              name: 'image',
              url: this.value
            }];
          }

          break;

        case 'images':
          this.listType = 'picture-card';

          if (typeof this.value == 'string' || this.value == null) {
            this.fileList = [];
          } else {
            this.fileList = this.value;
          }

          break;

        default:
          this.listType = 'text';

          if (typeof this.value == 'string' || this.value == null) {
            this.fileList = [];
          } else {
            this.fileList = this.value;
          }

          break;
      }

      if (sync) {
        this.fileListSync = this.fileList;
      } // console.log(this.fileList);

    },
    getFileType: function getFileType(filePath) {
      var startIndex = filePath.lastIndexOf(".");
      if (startIndex != -1) return filePath.substring(startIndex + 1, filePath.length).toLowerCase();else return "";
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      var ext = this.getFileType(file.url).toLowerCase();

      if (["jpg", "png", "bmp", "ico", "jpeg"].includes(ext)) {
        this.mediaType = "image";
      } else if (["mp3", "wav", "ogg", "ico", "jpeg"].includes(ext)) {
        this.mediaType = "audio";
      } else if (["mp4", "ogg"].includes(ext)) {
        this.mediaType = "video";
      }

      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed: function handleExceed(files, fileList) {
      this.$message.warning('最多上传' + this.optionsData.limit + '个文件');
      return false;
    },
    handleProgress: function handleProgress(event, file, fileList) {
      // console.log(event, file, fileList)
      this.optionsData.onProgress(event, file, fileList);
    },
    cropperSuccess: function cropperSuccess(res) {
      this.cropperInit.showCropper = false;
      var file = {};

      if (res.code == 200) {
        var _res$data;

        if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.path) {
          file.path = res.data.path;
        }

        file.url = res.data.url;
      } else {
        this.$message({
          message: res.msg,
          type: 'warning'
        });
        return;
      }

      if (this.optionsData.type == 'image') {
        this.fileList[0] = file;
      } else {
        this.fileList.push(file);
      }

      this.syncData();
    },
    syncData: function syncData() {
      if (this.optionsData.type == 'image') {
        for (var index = 0; index < this.fileList.length; index++) {
          var element = this.fileList[index];

          if (element.percentage == '100') {
            this.$emit('input', element.url);
            break;
          }
        }
      } else {
        var fileListNew = [];

        for (var _index = 0; _index < this.fileList.length; _index++) {
          var _element = this.fileList[_index];

          if (_element.percentage == '100') {
            fileListNew.push({
              name: _element.name,
              path: _element === null || _element === void 0 ? void 0 : _element.path,
              url: _element.url,
              size: _element === null || _element === void 0 ? void 0 : _element.size
            });
          }
        }

        this.$emit('input', fileListNew);
      }
    },
    handleSuccess: function handleSuccess(res, file, fileList) {
      console.log(res);

      if (res.code == 200) {
        var _res$data2;

        if ((_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.path) {
          file.path = res.data.path;
        }

        file.url = res.data.url;
      } else {
        this.$message({
          message: res.msg,
          type: 'warning'
        });
        return;
      } // this.fileList.push(file);


      this.fileList = fileList;
      console.log('fileList', this.fileList);
      console.log('fileListSync', this.fileListSync);
      this.syncData();
      this.optionsData.onSuccess(res, file, fileList);
    },
    beforeRemove: function beforeRemove(file, fileList) {},
    removeOne: function removeOne(uid) {
      if (this.upInstanceList[uid]) {
        this.upInstanceList[uid].cancel();
      }

      var index = this.fileList.findIndex(function (sitem) {
        return sitem.uid === uid;
      });

      if (index >= 0) {
        this.fileList.splice(index, 1);
        this.syncData();
      }

      return true;
    },
    resumeAll: function resumeAll() {
      var _this = this;

      this.fileList.forEach(function (colit) {
        var uid = colit.uid;

        if (_this.upInstanceList[uid]) {
          _this.upInstanceList[uid].resume();

          colit.msg = '';
          colit.state = 'uploading';

          _this.optionsData.onChange(colit, _this.fileList);
        } else {
          _this.fileList.splice(_this.fileList.indexOf(colit), 1);
        }
      });
      this.syncData();
    },
    pauseAll: function pauseAll() {
      var _this2 = this;

      this.fileList.forEach(function (colit) {
        var uid = colit.uid;

        if (_this2.upInstanceList[uid]) {
          _this2.upInstanceList[uid].pause();

          colit.msg = '';
          colit.state = 'pause';

          _this2.optionsData.onChange(colit, _this2.fileList);
        }
      });
      this.syncData();
    },
    pauseTask: function pauseTask(uid) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (this.upInstanceList[uid]) {
        this.upInstanceList[uid].pause();
      } else {
        console.log('暂停失败');
        return;
      }

      var index = this.fileList.findIndex(function (sitem) {
        return sitem.uid === uid;
      });

      if (index >= 0) {
        if (msg != '') {
          this.fileList[index].msg = '';
          this.fileList[index].state = 'pause';
        } else {
          this.fileList[index].msg = msg;
          this.fileList[index].state = 'error';
        }
      }

      this.optionsData.onChange({
        uid: uid,
        msg: msg,
        state: 'pause'
      });
      return true;
    },
    resumeTask: function resumeTask(file, uid) {
      if (this.$refs.upload.$refs['upload-inner'].reqs[uid]) {
        var req = this.$refs.upload.$refs['upload-inner'].reqs[uid];

        if (req && req.then) {// req.then(res => {
          //     if (res.code != 200) {
          //         // alert(res.msg);
          //         this.pauseTask(p.uid, res.msg);
          //         // this.resumeTask(params.file.uid);
          //     }
          // }).catch(err => {
          //     console.log(err)
          //     let msg = '';
          //     if (err.msg) {
          //         if (err.msg?.message) {
          //             msg = err.msg?.message;
          //         } else {
          //             msg = err.msg;
          //         }
          //     } else {
          //         msg = '上传出错';
          //     }
          //     this.pauseTask(uid, msg);
          //     // this.resumeTask(params.file.uid);
          // });
        }

        if (this.upInstanceList[uid]) {
          this.upInstanceList[uid].resume();
        } else {
          alert('请重新上传');
          return false;
        }
      } else {
        console.log('file', file);
        file.status = 'ready';

        var _index2 = this.$refs.upload.uploadFiles.findIndex(function (sitem) {
          return sitem.uid === file.uid;
        });

        if (_index2 < 0) {
          this.$refs.upload.uploadFiles.push(file);
        }

        this.$refs.upload.$refs['upload-inner'].upload(file);
      }

      var index = this.fileList.findIndex(function (sitem) {
        return sitem.uid === uid;
      });

      if (index >= 0) {
        this.fileList[index].msg = '';
        this.fileList[index].state = 'uploading';
      }

      this.optionsData.onChange({
        uid: uid,
        msg: '',
        state: 'uploading'
      });
      return true;
    },
    handleRemove: function handleRemove(file, fileList) {
      if (this.optionsData.disabled) {
        this.$message({
          message: '只读模式',
          type: 'warning'
        });
        return;
      }

      this.fileList.splice(this.fileList.indexOf(file), 1);
      this.syncData();
      fileList = this.fileList; // console.log('fileList', fileList);
    },
    uploadSectionFile: function uploadSectionFile(params) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(params);
                that = _this3; // 立即显示进度条0防止大文件也没无反应，用户以为上传好了，其实还未开始。

                params.onProgress({
                  percent: 0
                });
                _this3.upInstanceList[params.file.uid] = _this3.$xyutil.uploadFile({
                  getInstance: true,
                  driver: that.optionsData.driver || 'default',
                  signUrl: that.optionsData.signUrl || '',
                  url: that.optionsData.action || '',
                  // 本地上传的接口，指定driver时其实不用传。
                  header: that.header,
                  file: params.file,
                  splitePiece: that.optionsData.splitePiece,
                  mergeUrl: that.optionsData.mergeUrl,
                  provider: that.optionsData.provider,
                  spaceId: that.optionsData.spaceId,
                  clientSecret: that.optionsData.clientSecret,
                  // 上传进度
                  onUploadProgress: function onUploadProgress(progressEvent) {
                    // 同步上传进度
                    var percent = 0;

                    if (progressEvent.percent) {
                      percent = progressEvent.percent;
                    } else {
                      var num = progressEvent.loaded / progressEvent.total * 100 | 0; //百分比

                      percent = num;
                    }

                    if (percent > 0 && percent < 1) {
                      percent = 1;
                    }

                    params.onProgress({
                      percent: percent.toFixed(0)
                    }); //进度条
                  },
                  hasUploadModule: that.optionsData.hasUploadModule,
                  checkExist: that.optionsData.checkExist,
                  tag: that.optionsData.tag,
                  tempCheckpoint: params === null || params === void 0 ? void 0 : params.tempCheckpoint
                }); // console.log(this.upInstanceList[params.file.uid])

                result = _this3.upInstanceList[params.file.uid].start();
                result.then(function (res) {
                  if (res.code != 200) {
                    // alert(res.msg);
                    var h = _this3.$createElement;

                    _this3.$msgbox({
                      title: '出错',
                      type: 'error',
                      customClass: 'msgbox-error-json',
                      message: h('div', null, [h('div', null, res.msg), h('json-viewer', {
                        props: {
                          value: res,
                          'expand-depth': 2
                        }
                      }, 'VNode')]),
                      showCancelButton: false,
                      confirmButtonText: '确定',
                      cancelButtonText: '取消'
                    });

                    _this3.pauseTask(params.file.uid, res.msg); // this.resumeTask(params.file.uid);

                  }
                }).catch(function (err) {
                  console.log(err);
                  var msg = '';

                  if (err.msg) {
                    var _err$msg;

                    if ((_err$msg = err.msg) !== null && _err$msg !== void 0 && _err$msg.message) {
                      var _err$msg2;

                      msg = (_err$msg2 = err.msg) === null || _err$msg2 === void 0 ? void 0 : _err$msg2.message;
                    } else {
                      msg = err.msg;
                    }
                  } else {
                    msg = '上传出错';
                  }

                  var h = _this3.$createElement;

                  _this3.$msgbox({
                    title: '出错',
                    type: 'error',
                    customClass: 'msgbox-error-json',
                    message: h('div', null, [h('div', null, msg), h('json-viewer', {
                      props: {
                        value: err,
                        'expand-depth': 2
                      }
                    }, 'VNode')]),
                    showCancelButton: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                  });

                  _this3.pauseTask(params.file.uid, msg); // this.resumeTask(params.file.uid);

                }); // 因为promise没有abort方法，只有原生js的XMLHttpRequest对象才有abort。
                // 所以一般会导致自定义上传文件时会报reqs[uid].abort is not a function这样一个错误。

                result.abort = function () {};

                if (_this3.optionsData.failAutoRemove) {
                  _this3.$refs.upload.$refs['upload-inner'].reqs[uid].abort = function () {};
                }

                return _context.abrupt("return", result);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    handleBeforeUpload: function handleBeforeUpload(file) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                    var _this4$optionsData;

                    var cbRet, that, fileExt, _this4$optionsData2, maxSize;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (_this4.optionsData.type != 'image' && _this4.optionsData.type != 'file' && _this4.optionsData.limit == 1) {
                              _this4.optionsData.limit = 10;
                            }

                            _this4.cropperInit = {
                              showCropper: false,
                              driver: _this4.optionsData.driver,
                              signUrl: _this4.optionsData.signUrl,
                              action: _this4.optionsData.action
                            }; // 回调

                            _context2.next = 4;
                            return _this4.optionsData.beforeUpload(file);

                          case 4:
                            cbRet = _context2.sent;

                            if (cbRet) {
                              _context2.next = 8;
                              break;
                            }

                            return _context2.abrupt("return", false);

                          case 8:
                            that = _this4; // 格式判断

                            // 格式判断
                            fileExt = file.name.substring(file.name.lastIndexOf(".") + 1);

                            if (!((_this4$optionsData = _this4.optionsData) !== null && _this4$optionsData !== void 0 && _this4$optionsData.format)) {
                              _context2.next = 15;
                              break;
                            }

                            if ((_this4$optionsData2 = _this4.optionsData) !== null && _this4$optionsData2 !== void 0 && _this4$optionsData2.format.includes(fileExt)) {
                              _context2.next = 15;
                              break;
                            }

                            _this4.$message({
                              message: fileExt + '格式不支持 ',
                              type: 'warning'
                            });

                            return _context2.abrupt("return", false);

                          case 15:
                            // 大小判断
                            maxSize = _this4.optionsData.maxSize;

                            if (_this4.optionsData.type == 'file' || _this4.optionsData.type == 'files') {
                              maxSize = _this4.optionsData.maxSizeFile;
                            }

                            if (!(file.size / 1024 > maxSize)) {
                              _context2.next = 21;
                              break;
                            }

                            _this4.$message({
                              message: '上传文件大小不能超过 ' + maxSize + 'KB!',
                              type: 'warning'
                            });

                            return _context2.abrupt("return", false);

                          case 21:
                            if (!((_this4.optionsData.type == 'image' || _this4.optionsData.type == 'images') && _this4.optionsData.needCropper)) {
                              _context2.next = 26;
                              break;
                            }

                            _this4.cropperImgData = file;
                            _this4.cropperInit.showCropper = true;
                            return _context2.abrupt("return", false);

                          case 26:
                            resolve();

                          case 27:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});
;// CONCATENATED MODULE: ./src/xy-upload/xy-upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var xy_upload_xy_uploadvue_type_script_lang_js_ = (xy_uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./src/xy-upload/xy-upload.vue



;



/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  xy_upload_xy_uploadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "19323d7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/xy-upload/xy-upload.vue"
/* harmony default export */ var xy_upload = (component.exports);

/***/ }),

/***/ 1900:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 8434:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=40)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(28)("wks"),o=n(29),i=n(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),o=n(2),i=n(11),u=n(5),s=n(9),c=function(t,e,n){var a,f,l,d=t&c.F,p=t&c.G,h=t&c.S,v=t&c.P,y=t&c.B,m=t&c.W,_=p?o:o[e]||(o[e]={}),g=_.prototype,b=p?r:h?r[e]:(r[e]||{}).prototype;for(a in p&&(n=e),n)(f=!d&&b&&void 0!==b[a])&&s(_,a)||(l=f?b[a]:n[a],_[a]=p&&"function"!=typeof b[a]?n[a]:y&&f?i(l,r):m&&b[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((_.virtual||(_.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&u(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(13),o=n(31);t.exports=n(6)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(3),o=n(50),i=n(51),u=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(46),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(26),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(28)("keys"),o=n(29);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports=!0},function(t,e,n){var r=n(7),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(13).f,o=n(9),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(12);t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=f(n(43)),o=f(n(32)),i=f(n(79)),u=f(n(86)),s=f(n(87)),c=f(n(88)),a=f(n(89));function f(t){return t&&t.__esModule?t:{default:t}}var l="UN_READY",d="PENDING",p="READY";e.default={name:"VueUeditorWrap",data:function(){return{status:l,defaultConfig:{UEDITOR_HOME_URL:void 0!==t&&t.env.BASE_URL?t.env.BASE_URL+"UEditor/":"/static/UEditor/"}}},props:{mode:{type:String,default:"observer",validator:function(t){return-1!==["observer","listener"].indexOf(t)}},value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){}},destroy:{type:Boolean,default:!0},name:{type:String,default:""},observerDebounceTime:{type:Number,default:50,validator:function(t){return t>=20}},observerOptions:{type:Object,default:function(){return{attributes:!0,attributeFilter:["src","style","type","name"],characterData:!0,childList:!0,subtree:!0}}},forceInit:{type:Boolean,default:!1},editorId:{type:String},editorDependencies:Array,editorDependenciesChecker:Function},computed:{mixedConfig:function(){return(0,i.default)({},this.defaultConfig,this.config)}},methods:{registerButton:function(t){var e=t.name,n=t.icon,r=t.tip,o=t.handler,i=t.index,u=t.UE,s=void 0===u?window.UE:u;s.registerUI(e,function(t,e){t.registerCommand(e,{execCommand:function(){o(t,e)}});var i=new s.ui.Button({name:e,title:r,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){t.execCommand(e)}});return t.addListener("selectionchange",function(){var n=t.queryCommandState(e);-1===n?(i.setDisabled(!0),i.setChecked(!1)):(i.setDisabled(!1),i.setChecked(n))}),i},i,this.id)},_initEditor:function(){var t=this;this.$refs.container.id=this.id=this.editorId||"editor_"+(0,a.default)(8),this.init(),this.$emit("before-init",this.id,this.mixedConfig),this.$emit("beforeInit",this.id,this.mixedConfig),this.editor=window.UE.getEditor(this.id,this.mixedConfig),this.editor.addListener("ready",function(){t.status===p?t.editor.setContent(t.value):(t.status=p,t.$emit("ready",t.editor),t.value&&t.editor.setContent(t.value)),"observer"===t.mode&&window.MutationObserver?t._observerChangeListener():t._normalChangeListener()})},_loadScript:function(t){return new o.default(function(e,n){if(window.$loadEventBus.on(t,e),!1===window.$loadEventBus.listeners[t].requested){window.$loadEventBus.listeners[t].requested=!0;var r=document.createElement("script");r.src=t,r.onload=function(){window.$loadEventBus.emit(t)},r.onerror=n,document.getElementsByTagName("head")[0].appendChild(r)}})},_loadCss:function(t){return new o.default(function(e,n){if(window.$loadEventBus.on(t,e),!1===window.$loadEventBus.listeners[t].requested){window.$loadEventBus.listeners[t].requested=!0;var r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=t,r.onload=function(){window.$loadEventBus.emit(t)},r.onerror=n,document.getElementsByTagName("head")[0].appendChild(r)}})},_loadEditorDependencies:function(){var t=this;window.$loadEventBus||(window.$loadEventBus=new u.default);var e=["ueditor.config.js","ueditor.all.min.js"];return new o.default(function(n,i){if(t.editorDependencies&&t.editorDependenciesChecker&&t.editorDependenciesChecker())n();else if(!t.editorDependencies&&window.UE&&window.UE.getEditor&&window.UEDITOR_CONFIG&&0!==(0,r.default)(window.UEDITOR_CONFIG).length)n();else{var u=(t.editorDependencies||e).reduce(function(e,n){return/^((https?:)?\/\/)?[-a-zA-Z0-9]+(\.[-a-zA-Z0-9]+)+\//.test(n)||(n=(t.mixedConfig.UEDITOR_HOME_URL||"")+n),".js"===n.slice(-3)?e.jsLinks.push(n):".css"===n.slice(-4)&&e.cssLinks.push(n),e},{jsLinks:[],cssLinks:[]}),s=u.jsLinks,a=u.cssLinks;o.default.all([o.default.all(a.map(function(e){return t._loadCss(e)})),(0,c.default)(s.map(function(e){return function(){return t._loadScript(e)}}))]).then(function(){return n()}).catch(i)}})},_contentChangeHandler:function(){this.innerValue=this.editor.getContent(),this.$emit("input",this.innerValue)},_normalChangeListener:function(){this.editor.addListener("contentChange",this._contentChangeHandler)},_observerChangeListener:function(){var t=this;this.observer=new MutationObserver((0,s.default)(function(){t.editor.document.getElementById("baidu_pastebin")||(t.innerValue=t.editor.getContent(),t.$emit("input",t.innerValue))},this.observerDebounceTime)),this.observer.observe(this.editor.body,this.observerOptions)}},deactivated:function(){this.editor&&this.editor.removeListener("contentChange",this._contentChangeHandler),this.observer&&this.observer.disconnect()},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy(),this.observer&&this.observer.disconnect&&this.observer.disconnect()},watch:{value:{handler:function(t){var e=this;this.status===l?(this.status=d,(this.forceInit||"undefined"!=typeof window)&&this._loadEditorDependencies().then(function(){e.$refs.container?e._initEditor():e.$nextTick(function(){return e._initEditor()})}).catch(function(){throw new Error("[vue-ueditor-wrap] UEditor 资源加载失败！请检查资源是否存在，UEDITOR_HOME_URL 是否配置正确！")})):this.status===p&&(t===this.innerValue||this.editor.setContent(t||""))},immediate:!0}}}}).call(e,n(42))},function(t,e,n){var r=n(10);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(2),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(21)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports={default:n(52),__esModule:!0}},function(t,e,n){"use strict";var r=n(21),o=n(4),i=n(56),u=n(5),s=n(8),c=n(57),a=n(23),f=n(60),l=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,y,m){c(n,e,h);var _,g,b,x=function(t){if(!d&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",E="values"==v,O=!1,j=t.prototype,T=j[l]||j["@@iterator"]||v&&j[v],S=T||x(v),C=v?E?x("entries"):S:void 0,L="Array"==e&&j.entries||T;if(L&&(b=f(L.call(new t)))!==Object.prototype&&b.next&&(a(b,w,!0),r||"function"==typeof b[l]||u(b,l,p)),E&&T&&"values"!==T.name&&(O=!0,S=function(){return T.call(this)}),r&&!m||!d&&!O&&j[l]||u(j,l,S),s[e]=S,s[w]=p,v)if(_={values:E?S:x("values"),keys:y?S:x("keys"),entries:C},m)for(g in _)g in j||i(j,g,_[g]);else o(o.P+o.F*(d||O),e,_);return _}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(10),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},function(t,e,n){var r=n(3),o=n(12),i=n(1)("species");t.exports=function(t,e){var n,u=r(t).constructor;return void 0===u||void 0==(n=r(u)[i])?e:o(n)}},function(t,e,n){var r,o,i,u=n(11),s=n(71),c=n(34),a=n(22),f=n(0),l=f.process,d=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,v=f.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},g=function(t){_.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++y]=function(){s("function"==typeof t?t:Function(t),e)},r(y),y},p=function(t){delete m[t]},"process"==n(10)(l)?r=function(t){l.nextTick(u(_,t,1))}:v&&v.now?r=function(t){v.now(u(_,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=g,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",g,!1)):r="onreadystatechange"in a("script")?function(t){c.appendChild(a("script")).onreadystatechange=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:d,clear:p}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(7),i=n(24);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(25),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var u=n(90),s=n(41)(o.a,u.a,!1,null,null,null);s.options.__file="src/components/vue-ueditor-wrap.vue",e.default=s.exports},function(t,e){t.exports=function(t,e,n,r,o,i){var u,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(u=t,s=t.default);var a,f="function"==typeof s?s.options:s;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),i?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=a):r&&(a=r),a){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=a,f.render=function(t,e){return a.call(e),d(t,e)}):f.beforeCreate=d?[].concat(d,a):[a]}return{esModule:u,exports:s,options:f}}},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var c,a=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?a=c.concat(a):l=-1,a.length&&p())}function p(){if(!f){var t=s(d);f=!0;for(var e=a.length;e;){for(c=a,a=[];++l<e;)c&&c[l].run();l=-1,e=a.length}c=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new h(t,e)),1!==a.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){t.exports={default:n(44),__esModule:!0}},function(t,e,n){n(45),t.exports=n(2).Object.keys},function(t,e,n){var r=n(15),o=n(17);n(49)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(9),o=n(18),i=n(47)(!1),u=n(20)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,a=[];for(n in s)n!=u&&r(s,n)&&a.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(18),o=n(27),i=n(48);t.exports=function(t){return function(e,n,u){var s,c=r(e),a=o(c.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if((s=c[f++])!=s)return!0}else for(;a>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(19),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(4),o=n(2),i=n(14);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports=!n(6)&&!n(14)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){n(53),n(54),n(61),n(65),n(77),n(78),t.exports=n(2).Promise},function(t,e){},function(t,e,n){"use strict";var r=n(55)(!0);n(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(19),o=n(16);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),c=r(n),a=s.length;return c<0||c>=a?t?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===a||(u=s.charCodeAt(c+1))<56320||u>57343?t?s.charAt(c):i:t?s.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var r=n(58),o=n(31),i=n(23),u={};n(5)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3),o=n(59),i=n(30),u=n(20)("IE_PROTO"),s=function(){},c=function(){var t,e=n(22)("iframe"),r=i.length;for(e.style.display="none",n(34).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(13),o=n(3),i=n(17);t.exports=n(6)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,c=0;s>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(9),o=n(15),i=n(20)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(62);for(var r=n(0),o=n(5),i=n(8),u=n(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var a=s[c],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){"use strict";var r=n(63),o=n(64),i=n(8),u=n(18);t.exports=n(33)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,u,s=n(21),c=n(0),a=n(11),f=n(35),l=n(4),d=n(7),p=n(12),h=n(66),v=n(67),y=n(36),m=n(37).set,_=n(72)(),g=n(24),b=n(38),x=n(73),w=n(39),E=c.TypeError,O=c.process,j=O&&O.versions,T=j&&j.v8||"",S=c.Promise,C="process"==f(O),L=function(){},P=o=g.f,M=!!function(){try{var t=S.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(L,L)};return(C||"function"==typeof PromiseRejectionEvent)&&t.then(L)instanceof e&&0!==T.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),k=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var n=t._c;_(function(){for(var r=t._v,o=1==t._s,i=0,u=function(e){var n,i,u,s=o?e.ok:e.fail,c=e.resolve,a=e.reject,f=e.domain;try{s?(o||(2==t._h&&U(t),t._h=1),!0===s?n=r:(f&&f.enter(),n=s(r),f&&(f.exit(),u=!0)),n===e.promise?a(E("Promise-chain cycle")):(i=k(n))?i.call(n,c,a):c(n)):a(r)}catch(t){f&&!u&&f.exit(),a(t)}};n.length>i;)u(n[i++]);t._c=[],t._n=!1,e&&!t._h&&D(t)})}},D=function(t){m.call(c,function(){var e,n,r,o=t._v,i=A(t);if(i&&(e=b(function(){C?O.emit("unhandledRejection",o,t):(n=c.onunhandledrejection)?n({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=C||A(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},U=function(t){m.call(c,function(){var e;C?O.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},B=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw E("Promise can't be resolved itself");(e=k(t))?_(function(){var r={_w:n,_d:!1};try{e.call(t,a(B,r,1),a(I,r,1))}catch(t){I.call(r,t)}}):(n._v=t,n._s=1,R(n,!1))}catch(t){I.call({_w:n,_d:!1},t)}}};M||(S=function(t){h(this,S,"Promise","_h"),p(t),r.call(this);try{t(a(B,this,1),a(I,this,1))}catch(t){I.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(74)(S.prototype,{then:function(t,e){var n=P(y(this,S));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=C?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&R(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(B,t,1),this.reject=a(I,t,1)},g.f=P=function(t){return t===S||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!M,{Promise:S}),n(23)(S,"Promise"),n(75)("Promise"),u=n(2).Promise,l(l.S+l.F*!M,"Promise",{reject:function(t){var e=P(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(s||!M),"Promise",{resolve:function(t){return w(s&&this===u?S:this,t)}}),l(l.S+l.F*!(M&&n(76)(function(t){S.all(t).catch(L)})),"Promise",{all:function(t){var e=this,n=P(e),r=n.resolve,o=n.reject,i=b(function(){var n=[],i=0,u=1;v(t,!1,function(t){var s=i++,c=!1;n.push(void 0),u++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--u||r(n))},o)}),--u||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=P(e),r=n.reject,o=b(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(11),o=n(68),i=n(69),u=n(3),s=n(27),c=n(70),a={},f={};(e=t.exports=function(t,e,n,l,d){var p,h,v,y,m=d?function(){return t}:c(t),_=r(n,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(p=s(t.length);p>g;g++)if((y=e?_(u(h=t[g])[0],h[1]):_(t[g]))===a||y===f)return y}else for(v=m.call(t);!(h=v.next()).done;)if((y=o(v,_,h.value,e))===a||y===f)return y}).BREAK=a,e.RETURN=f},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(8),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(35),o=n(1)("iterator"),i=n(8);t.exports=n(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(37).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,s=r.Promise,c="process"==n(10)(u);t.exports=function(){var t,e,n,a=function(){var r,o;for(c&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(c)n=function(){u.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);n=function(){f.then(a)}}else n=function(){o.call(r,a)};else{var l=!0,d=document.createTextNode("");new i(a).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(5);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(13),u=n(6),s=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];u&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(2),i=n(0),u=n(36),s=n(39);r(r.P+r.R,"Promise",{finally:function(t){var e=u(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return s(e,t()).then(function(){return n})}:t,n?function(n){return s(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(24),i=n(38);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(80),i=(r=o)&&r.__esModule?r:{default:r};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(81),__esModule:!0}},function(t,e,n){n(82),t.exports=n(2).Object.assign},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(83)})},function(t,e,n){"use strict";var r=n(6),o=n(17),i=n(84),u=n(85),s=n(15),c=n(26),a=Object.assign;t.exports=!a||n(14)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=s(t),a=arguments.length,f=1,l=i.f,d=u.f;a>f;)for(var p,h=c(arguments[f++]),v=l?o(h).concat(l(h)):o(h),y=v.length,m=0;y>m;)p=v[m++],r&&!d.call(h,p)||(n[p]=h[p]);return n}:a},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.listeners={},this.on=function(t,e){void 0===this.listeners[t]&&(this.listeners[t]={triggered:!1,requested:!1,cbs:[]}),this.listeners[t].triggered&&e(),this.listeners[t].cbs.push(e)},this.emit=function(t){this.listeners[t]&&(this.listeners[t].triggered=!0,this.listeners[t].cbs.forEach(function(t){return t()}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=null;return function(){var r=this,o=arguments;n&&clearTimeout(n),n=setTimeout(function(){t.apply(r,o)},e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(32),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return t.reduce(function(t,e){return t.then(e)},i.default.resolve())}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){for(var e="abcdefghijklmnopqrstuvwxyz",n="",r=0;r<t;r++)n+=e.charAt(Math.floor(Math.random()*e.length));return n}},function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"container",attrs:{name:this.name}})])};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o}]).default});

/***/ }),

/***/ 6501:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./xy-barcode/xy-barcode.vue": 9608,
	"./xy-builder-page/xy-builder-page.vue": 7113,
	"./xy-captcha/xy-captcha.vue": 2515,
	"./xy-cascader/xy-cascader.vue": 4059,
	"./xy-cascader2/xy-cascader2.vue": 2035,
	"./xy-checkbox-group/xy-checkbox-group.vue": 1333,
	"./xy-checkbox-tree/xy-checkbox-tree.vue": 8325,
	"./xy-choose/xy-choose.vue": 7275,
	"./xy-copy/xy-copy.vue": 1890,
	"./xy-cropper/xy-cropper.vue": 9889,
	"./xy-deliver-fee/xy-deliver-fee.vue": 5041,
	"./xy-editor-kindeditor/xy-editor-kindeditor.vue": 1767,
	"./xy-editor-tinymce/xy-editor-tinymce.vue": 3359,
	"./xy-editor-ueditor/xy-editor-ueditor.vue": 4178,
	"./xy-filter-list/xy-filter-list.vue": 8967,
	"./xy-map-amap/xy-map-amap.vue": 2783,
	"./xy-mavon-editor/xy-mavon-editor.vue": 3,
	"./xy-poster-custom/xy-poster-custom.vue": 1365,
	"./xy-qrcode/xy-qrcode.vue": 4493,
	"./xy-safety-level/xy-safety-level.vue": 515,
	"./xy-safety-verify/xy-safety-verify.vue": 9414,
	"./xy-send-verify/xy-send-verify.vue": 4730,
	"./xy-shop-sku/xy-shop-sku.vue": 4351,
	"./xy-shop-skuprice/xy-shop-skuprice.vue": 7175,
	"./xy-tags-input/xy-tags-input.vue": 3646,
	"./xy-three-psv/xy-three-psv.vue": 6445,
	"./xy-title/xy-title.vue": 5395,
	"./xy-tree-regions/xy-tree-regions.vue": 674,
	"./xy-upload/xy-upload.vue": 5945
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6501;

/***/ }),

/***/ 2740:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2740__;

/***/ }),

/***/ 4147:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"xyui","version":"1.2.0","description":"基于Vue2+elementUI的扩展组件库，增加和封装更多常用组件，提高前端复用程度。","main":"build/index.js","scripts":{"dev":"cross-env NODE_ENV=development && webpack --progress --watch","build":"cross-env NODE_ENV=production && webpack --progress"},"dependencies":{"@babel/polyfill":"^7.12.1","@chenfengyuan/vue-qrcode":"^1.0.2","@highlightjs/cdn-assets":"^11.5.0","axios":"^0.25.0","core-js":"^3.21.1","cos-js-sdk-v5":"^1.3.4","cross-env":"^7.0.3","crypto-browserify":"^3.12.0","crypto-js":"^4.1.1","current-script-polyfill":"^1.0.0","currentscript":"^1.1.1","echarts":"^5.3.2","highlight.js":"^11.5.0","html2canvas":"^1.4.1","jsbarcode":"^3.11.5","loadjs":"^4.2.0","markdown-it-container":"^3.0.0","mavon-editor":"^2.10.4","optional-chaining":"^1.0.1","qiniu-js":"^3.4.0","spark-md5":"^3.0.2","stream-browserify":"^3.0.0","toastr":"^2.1.4","vue-amap":"^0.5.10","vue-cropper":"^0.5.8","vue-echarts":"^6.0.2","vue-json-viewer":"^2.2.21","vue-kindeditor":"^0.4.9","vue-link2":"^1.0.1","vue-script2":"^2.1.0","vue-social-captcha":"^0.1.1","vue-ueditor-wrap":"^2.5.6","vue-video-player":"^5.0.2"},"devDependencies":{"@babel/core":"^7.17.9","@babel/plugin-transform-runtime":"^7.17.0","@babel/preset-env":"^7.16.11","@babel/runtime":"^7.17.9","@tinymce/tinymce-vue":"^3.2.8","babel-loader":"^8.2.4","copy-webpack-plugin":"^10.2.4","css-loader":"^6.5.1","css-minimizer-webpack-plugin":"^3.4.1","file-loader":"^6.2.0","less":"^4.1.2","less-loader":"^10.2.0","mini-css-extract-plugin":"^2.5.3","progress-bar-webpack-plugin":"^2.1.0","style-loader":"^3.3.1","terser-webpack-plugin":"^5.3.0","url-loader":"^4.1.1","vue":"^2.6.14","vue-loader":"^15.9.8","vue-template-compiler":"^2.6.14","webpack":"^5.67.0","webpack-bundle-analyzer":"^4.5.0","webpack-cli":"^4.9.2"},"keywords":["vue","element-ui","xyui"],"author":"jry","license":"jry1.0"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ build; }
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(6992);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(8309);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(7941);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(2526);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(7327);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(5003);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(9337);
// EXTERNAL MODULE: ./src/util/config.js
var config = __webpack_require__(232);
// EXTERNAL MODULE: ./src/util/base.js
var base = __webpack_require__(1199);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(9601);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(285);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(1637);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(7042);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(9714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(9653);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(2707);
;// CONCATENATED MODULE: ./src/util/upload/uniCloud.js









function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * +----------------------------------------------------------------------
 * | xyui [ 全端渐进式UI框架 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2018-2020 http://jiangruyi.com All rights reserved.
 * +----------------------------------------------------------------------
 * | Author: jry <598821125@qq.com>
 * +----------------------------------------------------------------------
 * | 版权申明：此源码不是一个自由软件，是jry推出的私有源码，严禁在未经许可的情况下
 * | 拷贝、复制、传播、使用此源码的任意代码，如有违反，请立即删除，否则您将面临承担相应
 * | 法律责任的风险。如果需要取得官方授权，请联系官方QQ598821125。
 */
 // import crypto from 'crypto';

var uniCloud = {};

uniCloud.hmacmd5 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(string, key) {
    var ret, hmac;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return base/* default.loadJS */.Z.loadJS(base/* default.config.jsBaseUrl */.Z.config.jsBaseUrl + '/libs/crypto-js/crypto-js.js');

          case 2:
            ret = _context.sent;
            hmac = CryptoJS.HmacMD5(string, key).toString(CryptoJS.enc.Hex);
            console.log(hmac);
            return _context.abrupt("return", hmac);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

uniCloud.sign = function (t, e) {
  var n = "";
  Object.keys(t).sort().forEach(function (e) {
    t[e] && (n = n + "&" + e + "=" + t[e]);
  }), n = n.slice(1);
  var ret = uniCloud.hmacmd5(n, e);
  return ret;
};

uniCloud.getToken = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(spaceId, clientSecret) {
    var params, sign;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              "method": "serverless.auth.user.anonymousAuthorize",
              "params": "{}",
              "spaceId": spaceId,
              "timestamp": Date.now()
            };
            _context2.next = 3;
            return uniCloud.sign(params, clientSecret);

          case 3:
            sign = _context2.sent;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: 'POST',
                url: 'https://api.bspapp.com/client',
                data: params,
                headers: {
                  'Content-Type': 'application/json',
                  "x-serverless-sign": sign
                }
              }).then(function (ret) {
                resolve(ret.data);
              }).catch(function (error) {
                var res = new Object();
                res.code = 0;
                res.msg = error.message;
                reject(res);
              });
            }));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

uniCloud.getPolicy = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
    var filename, spaceId, clientSecret, res, params, sign;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filename = _ref3.filename, spaceId = _ref3.spaceId, clientSecret = _ref3.clientSecret;
            _context3.next = 3;
            return uniCloud.getToken(spaceId, clientSecret);

          case 3:
            res = _context3.sent;
            params = {
              "method": "serverless.file.resource.generateProximalSign",
              "params": "{\"env\":\"public\",\"filename\":\"" + filename + "\"}",
              "spaceId": spaceId,
              "timestamp": Date.now(),
              "token": res.data.accessToken
            };
            _context3.next = 7;
            return uniCloud.sign(params, clientSecret);

          case 7:
            sign = _context3.sent;
            return _context3.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: 'POST',
                url: 'https://api.bspapp.com/client',
                data: params,
                headers: {
                  'Content-Type': 'application/json',
                  "x-basement-token": res.data.accessToken,
                  "x-serverless-sign": sign
                }
              }).then(function (ret) {
                ret.data.data.token = res.data.accessToken;
                console.log('getPolicy', ret);
                resolve(ret.data);
              }).catch(function (error) {
                var res = new Object();
                res.code = 0;
                res.msg = error.message;
                reject(res);
              });
            }));

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5) {
    return _ref4.apply(this, arguments);
  };
}();

uniCloud.uploadFile = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref5) {
    var filename, filePath, file, blobInfo, _ref5$spaceId, spaceId, _ref5$clientSecret, clientSecret, onUploadProgress, res, fd;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            filename = _ref5.filename, filePath = _ref5.filePath, file = _ref5.file, blobInfo = _ref5.blobInfo, _ref5$spaceId = _ref5.spaceId, spaceId = _ref5$spaceId === void 0 ? "" : _ref5$spaceId, _ref5$clientSecret = _ref5.clientSecret, clientSecret = _ref5$clientSecret === void 0 ? "" : _ref5$clientSecret, onUploadProgress = _ref5.onUploadProgress;
            _context5.next = 3;
            return uniCloud.getPolicy({
              filename: filename,
              spaceId: spaceId,
              clientSecret: clientSecret
            });

          case 3:
            res = _context5.sent;
            fd = new FormData();
            fd.append('Cache-Control', "max-age=2592000");
            fd.append('Content-Disposition', "attachment");
            fd.append('key', res.data.ossPath);
            fd.append('policy', res.data.policy);
            fd.append('OSSAccessKeyId', res.data.accessKeyId);
            fd.append('Signature', res.data.signature);
            fd.append('success_action_status', 200);
            fd.append('host', res.data.host);
            fd.append('id', res.data.id);

            if (file) {
              fd.append('file', file, filename);
            } else if (blobInfo) {
              fd.append('file', blobInfo.blob(), filename);
            }

            return _context5.abrupt("return", new Promise(function (resolve, reject) {
              axios.post("https://" + res.data.host, fd, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  "X-OSS-server-side-encrpytion": "AES256"
                },
                transformRequest: function transformRequest(data) {
                  return data;
                },
                onUploadProgress: onUploadProgress
              }).then( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ret) {
                  var rep, re;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!(ret.status == 200)) {
                            _context4.next = 11;
                            break;
                          }

                          _context4.next = 3;
                          return uniCloud.report({
                            id: res.data.id,
                            token: res.data.token,
                            spaceId: spaceId,
                            clientSecret: clientSecret
                          });

                        case 3:
                          rep = _context4.sent;

                          if (!(rep.success == true)) {
                            _context4.next = 8;
                            break;
                          }

                          resolve({
                            code: 200,
                            data: {
                              url: 'https://' + res.data.cdnDomain + "/" + res.data.ossPath
                            }
                          });
                          _context4.next = 9;
                          break;

                        case 8:
                          return _context4.abrupt("return", false);

                        case 9:
                          _context4.next = 15;
                          break;

                        case 11:
                          re = new Object();
                          re.code = 0;
                          re.msg = ret.statusText;
                          resolve(re);

                        case 15:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x7) {
                  return _ref7.apply(this, arguments);
                };
              }()).catch(function (err) {
                var res = new Object();
                res.code = 0;
                res.msg = error.message;
                reject(res);
              });
            }));

          case 16:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x6) {
    return _ref6.apply(this, arguments);
  };
}();

uniCloud.report = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref8) {
    var id, token, spaceId, clientSecret, params, sign;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = _ref8.id, token = _ref8.token, spaceId = _ref8.spaceId, clientSecret = _ref8.clientSecret;
            params = {
              "method": "serverless.file.resource.report",
              "params": "{\"id\":\"" + id + "\"}",
              "spaceId": spaceId,
              "timestamp": Date.now(),
              "token": token
            };
            _context6.next = 4;
            return uniCloud.sign(params, clientSecret);

          case 4:
            sign = _context6.sent;
            return _context6.abrupt("return", new Promise(function (resolve, reject) {
              axios({
                method: 'POST',
                url: 'https://api.bspapp.com/client',
                data: params,
                headers: {
                  'Content-Type': 'application/json',
                  "x-serverless-sign": sign
                }
              }).then(function (ret) {
                resolve(ret.data);
              }).catch(function (error) {
                var res = new Object();
                res.code = 0;
                res.msg = error.message;
                reject(res);
              });
            }));

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x8) {
    return _ref9.apply(this, arguments);
  };
}();

/* harmony default export */ var upload_uniCloud = (uniCloud);
;// CONCATENATED MODULE: ./src/util/upload/upload.js


function upload_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function upload_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { upload_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { upload_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















/* harmony default export */ var upload = ({
  uploadFile: function uploadFile() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = {
      getInstance: false,
      driver: 'local',
      signUrl: '',
      url: '',
      provider: 'aliyun',
      spaceId: '',
      clientSecret: '',
      maxSize: '',
      choosedFile: '',
      // uniapp用此处无用
      file: '',
      // vue用uniapp无用
      blobInfo: '',
      // vue用uniapp无用
      name: 'file',
      fileType: 'image',
      // 暂时没用
      header: {},
      formData: '',
      success: '',
      fail: '',
      complete: '',
      splitePiece: false,
      mergeUrl: '',
      onUploadProgress: '',
      hasUploadModule: false,
      checkExist: false,
      tag: '',
      tempCheckpoint: ''
    };
    var paramsMerge = Object.assign(options, params); // console.log(paramsMerge);

    var upInstance = _objectSpread(_objectSpread({}, paramsMerge), {}, {
      instance: null,
      taskId: '',
      filename: '',
      filesize: '',
      md5: '',
      sha1: '',
      cbParams: {},
      init: function init() {
        if (upInstance.file) {
          upInstance.filename = upInstance.file.name;
          upInstance.filesize = upInstance.file.size;
        } else if (upInstance.blobInfo) {
          upInstance.filename = upInstance.blobInfo.filename();
          upInstance.filesize = upInstance.blobInfo.blob().size;
        } // blob转file


        if (upInstance.blobInfo) {
          upInstance.file = new File([upInstance.blobInfo.blob()], '文件名', {
            type: 'image/png',
            lastModified: Date.now()
          });
        }

        if (upInstance.maxSize) {
          if (upInstance.filesize / 1024 > upInstance.maxSize) {
            throw {
              code: 0,
              msg: '文件大小不能超过' + upInstance.maxSize + 'KB'
            };
          }
        } // console.log(upInstance.driver);


        if (upInstance.driver == 'default' || !upInstance.driver) {
          upInstance.driver = 'local'; // 兼容以前的本地用default表示
        } else if (upInstance.driver == 'upload_oss') {
          upInstance.driver = 'oss';
        }
      },
      checkFileExist: function () {
        var _checkFileExist = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var jsRet, res, success, _ret;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(upInstance.file && upInstance.hasUploadModule == true)) {
                    _context.next = 15;
                    break;
                  }

                  _context.next = 3;
                  return base/* default.loadJS */.Z.loadJS(base/* default.config.jsBaseUrl */.Z.config.jsBaseUrl + 'libs/spark-md5/spark-md5.min.js');

                case 3:
                  jsRet = _context.sent;

                  if (jsRet) {
                    _context.next = 6;
                    break;
                  }

                  throw {
                    code: 0,
                    msg: '加载SDK出错'
                  };

                case 6:
                  _context.next = 8;
                  return base/* default.md5sum */.Z.md5sum(upInstance.file);

                case 8:
                  upInstance.md5 = _context.sent;
                  // console.log(upInstance.md5)
                  // todo暂时注释，大文件会导致浏览器崩溃
                  // upInstance.sha1 = await xyutil.sha1sum(file);
                  upInstance.sha1 = '';

                  if (!(upInstance.checkExist == true)) {
                    _context.next = 15;
                    break;
                  }

                  _context.next = 13;
                  return base/* default.request */.Z.request({
                    url: '/v1/upload/upload/exist',
                    method: 'get',
                    data: {
                      md5: upInstance.md5,
                      sha1: upInstance.sha1,
                      tag: upInstance.tag
                    },
                    header: upInstance.header
                  });

                case 13:
                  res = _context.sent;

                  if (res.code == 200) {
                    success = resolve;
                    _ret = new Object();
                    _ret.code = 200;
                    _ret.msg = '上传成功';
                    _ret.data = {
                      url: res.data.info.url
                    };
                    onUploadProgress({
                      total: upInstance.filesize,
                      loaded: upInstance.filesize
                    });
                    success(_ret);
                  }

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function checkFileExist() {
          return _checkFileExist.apply(this, arguments);
        }

        return checkFileExist;
      }(),
      start: function start() {
        var that = upInstance;
        return new Promise( /*#__PURE__*/function () {
          var _ref = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(resolve, reject) {
            var _res$data$params, _res$data$params2, _res$data$params3, _res$data$params4, _res$data$params5, _that$header;

            var res, success, filePath, result, _res2, _params2, uniCloudConfig, _ret2, jsRet, _res, _params, putExtra, config, headers, observable, multipartUpload, _jsRet, _params3, fullname, host, formData, _res4, key, _formData;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    res = {};
                    success = resolve; // await that.checkFileExist();

                    that.cbParams = {
                      name: that.filename,
                      url: '',
                      ext: that.filename.substr(that.filename.lastIndexOf(".") + 1),
                      size: that.filesize / 1024,
                      md5: that.md5,
                      sha1: that.sha1,
                      tag: that.tag,
                      driver: that.driver
                    }; // 上传

                    _context11.t0 = that.driver.toLowerCase();
                    _context11.next = _context11.t0 === 'unicloud' ? 7 : _context11.t0 === 'cos' ? 40 : _context11.t0 === 'kodo' ? 54 : _context11.t0 === 'onedrive' ? 75 : _context11.t0 === 's3' ? 91 : _context11.t0 === 'oss' ? 92 : _context11.t0 === 'xyfile' ? 134 : _context11.t0 === 'local' ? 134 : 150;
                    break;

                  case 7:
                    filePath = '';

                    if (that.file) {
                      // 文件转blob url格式
                      filePath = window.URL.createObjectURL(that.file);
                    } else if (that.blobInfo) {
                      // blobInfo对象转blob url格式
                      filePath = window.URL.createObjectURL(that.blobInfo.blob());
                    } // window.uni方式暂时实际无效，除非将工程转为HBuilderX工程


                    if (!window.uni) {
                      _context11.next = 21;
                      break;
                    }

                    _context11.next = 12;
                    return upload_uniCloud.uploadFile({
                      filePath: filePath,
                      cloudPath: Date.parse(new Date()) + that.filename,
                      onUploadProgress: that.onUploadProgress
                    });

                  case 12:
                    result = _context11.sent;
                    _res2 = new Object();
                    _res2.code = 200;
                    _res2.msg = '上传成功';
                    _res2.data = {
                      url: result.fileID
                    };
                    base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, ret, that.header);
                    resolve(_res2); //});

                    _context11.next = 39;
                    break;

                  case 21:
                    _params2 = {
                      filePath: filePath,
                      filename: that.filename,
                      onUploadProgress: that.onUploadProgress
                    };

                    if (!that.file) {
                      _context11.next = 26;
                      break;
                    }

                    _params2.file = that.file;
                    _context11.next = 31;
                    break;

                  case 26:
                    if (!that.blobInfo) {
                      _context11.next = 30;
                      break;
                    }

                    _params2.blobInfo = that.blobInfo;
                    _context11.next = 31;
                    break;

                  case 30:
                    throw {
                      code: 0,
                      msg: '无上传数据'
                    };

                  case 31:
                    uniCloudConfig = base/* default.config.getUniCloudConfig */.Z.config.getUniCloudConfig();

                    if (uniCloudConfig.spaceId) {
                      _params2.provider = (uniCloudConfig === null || uniCloudConfig === void 0 ? void 0 : uniCloudConfig.provider) || 'aliyun';
                      _params2.spaceId = uniCloudConfig.spaceId;
                      _params2.clientSecret = uniCloudConfig.clientSecret;
                    } else {
                      _params2.provider = that.provider;
                      _params2.spaceId = that.spaceId;
                      _params2.clientSecret = that.clientSecret;
                    }

                    console.log('uploadFile.uniCloud', _params2); //return new Promise(async(resolve, reject) => {

                    _context11.next = 36;
                    return upload_uniCloud.uploadFile(_params2);

                  case 36:
                    _ret2 = _context11.sent;
                    base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, _ret2, that.header);
                    resolve(_ret2); //});

                  case 39:
                    return _context11.abrupt("break", 151);

                  case 40:
                    if (!that.signUrl) {
                      that.signUrl = '/v1/cos/cos/sts';
                    }

                    _context11.next = 43;
                    return base/* default.loadJS */.Z.loadJS(base/* default.config.jsBaseUrl */.Z.config.jsBaseUrl + 'libs/cos-js-sdk-v5/dist/cos-js-sdk-v5.min.js');

                  case 43:
                    jsRet = _context11.sent;

                    if (jsRet) {
                      _context11.next = 46;
                      break;
                    }

                    throw {
                      code: 0,
                      msg: '加载SDK出错'
                    };

                  case 46:
                    _context11.next = 48;
                    return base/* default.request */.Z.request({
                      url: that.signUrl,
                      method: 'get',
                      data: {
                        filename: that.filename
                      },
                      header: that.header
                    });

                  case 48:
                    _res = _context11.sent;

                    if (!(_res.code != 200)) {
                      _context11.next = 51;
                      break;
                    }

                    throw _res;

                  case 51:
                    that.instance = new COS({
                      // 必选参数
                      getAuthorization: function () {
                        var _getAuthorization = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options, callback) {
                          var data, credentials;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
                                  // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
                                  // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
                                  data = _res.data.params;
                                  credentials = data && data.credentials;

                                  if (!(!data || !credentials)) {
                                    _context2.next = 4;
                                    break;
                                  }

                                  throw {
                                    code: 0,
                                    msg: 'cos credentials invalid'
                                  };

                                case 4:
                                  callback({
                                    TmpSecretId: credentials.tmpSecretId,
                                    TmpSecretKey: credentials.tmpSecretKey,
                                    SecurityToken: credentials.sessionToken,
                                    // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
                                    StartTime: data.startTime,
                                    // 时间戳，单位秒，如：1580000000
                                    ExpiredTime: data.expiredTime // 时间戳，单位秒，如：1580000900

                                  });

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2);
                        }));

                        function getAuthorization(_x3, _x4) {
                          return _getAuthorization.apply(this, arguments);
                        }

                        return getAuthorization;
                      }()
                    });
                    that.instance.uploadFile({
                      Bucket: _res.data.params.bucketName,

                      /* 必须 */
                      Region: _res.data.params.regionId,

                      /* 存储桶所在地域，必须字段 */
                      Key: _res.data.params.key,

                      /* 必须 */
                      Body: that.file,

                      /* 必须 */
                      SliceSize: 1024 * 1024 * ((_res$data$params = _res.data.params) === null || _res$data$params === void 0 ? void 0 : _res$data$params.chunkSize) ? (_res$data$params2 = _res.data.params) === null || _res$data$params2 === void 0 ? void 0 : _res$data$params2.chunkSize : 10,

                      /* 触发分块上传的阈值 */
                      onTaskReady: function onTaskReady(taskId) {
                        /* 非必须 */
                        // console.log(taskId);
                        that.taskId = taskId;
                      },
                      onProgress: function onProgress(progressData) {
                        /* 非必须 */
                        // console.log(JSON.stringify(progressData));
                        that.onUploadProgress({
                          percent: progressData.percent * 100
                        });
                      },
                      onFileFinish: function onFileFinish(err, data, options) {
                        // console.log(options.Key + '上传' + (err ? '失败' : '完成'));
                        if (!err) {
                          var _ret3 = new Object();

                          _ret3.code = 200;
                          _ret3.msg = '上传成功';
                          _ret3.data = {
                            url: _res.data.params.host + '/' + _res.data.params.key
                          };
                          that.tempCheckpoint = '';
                          base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, _ret3, that.header);
                          success(_ret3);
                        }
                      }
                    }, function (err, data) {
                      // console.log(err || data);
                      reject({
                        code: 0,
                        msg: err
                      });
                    }); //});

                    return _context11.abrupt("break", 151);

                  case 54:
                    if (!that.signUrl) {
                      that.signUrl = '/v1/kodo/kodo/sign';
                    }

                    _context11.next = 57;
                    return base/* default.loadJS */.Z.loadJS(base/* default.config.jsBaseUrl */.Z.config.jsBaseUrl + 'libs/qiniu-js/dist/qiniu.min.js');

                  case 57:
                    jsRet = _context11.sent;

                    if (jsRet) {
                      _context11.next = 60;
                      break;
                    }

                    throw {
                      code: 0,
                      msg: '加载SDK出错'
                    };

                  case 60:
                    //return new Promise(async (resolve, reject) => {
                    // 申请上传临时授权
                    _params = {};
                    _context11.next = 63;
                    return base/* default.request */.Z.request({
                      url: that.signUrl,
                      method: 'get',
                      data: {
                        filename: that.filename
                      },
                      header: that.header
                    });

                  case 63:
                    _res = _context11.sent;

                    if (!(_res.code == 200)) {
                      _context11.next = 68;
                      break;
                    }

                    _params = _res.data.params;
                    _context11.next = 69;
                    break;

                  case 68:
                    throw _res;

                  case 69:
                    putExtra = {
                      fname: that.filename,
                      customVars: {},
                      metadata: {}
                    };
                    config = {
                      useCdnDomain: ((_res$data$params3 = _res.data.params) === null || _res$data$params3 === void 0 ? void 0 : _res$data$params3.useCdnDomain) || false,
                      region: qiniu.region[((_res$data$params4 = _res.data.params) === null || _res$data$params4 === void 0 ? void 0 : _res$data$params4.regionId) || 'z0'],
                      checkByMD5: false,
                      // 分片是否开启 MD5 校验，
                      forceDirect: false,
                      // 是否上传全部采用直传方式禁用断点续传
                      chunkSize: ((_res$data$params5 = _res.data.params) === null || _res$data$params5 === void 0 ? void 0 : _res$data$params5.chunkSize) || 10 // 分片大小MB

                    };
                    headers = qiniu.getHeadersForChunkUpload(_res.data.params.token);
                    observable = qiniu.upload(that.file, _res.data.params.key, _res.data.params.token, putExtra, config); // 上传开始

                    that.instance = observable.subscribe({
                      next: function next(res) {
                        //res.total = filesize;
                        // console.log(res);
                        that.onUploadProgress(res.total);
                      },
                      error: function error(err) {
                        // console.log(err);
                        reject({
                          code: 0,
                          msg: err
                        });
                      },
                      complete: function complete(response) {
                        that.onUploadProgress({
                          percent: 100
                        }); // console.log('response', response);

                        var ret = new Object();
                        ret.code = 200;
                        ret.msg = '上传成功';
                        ret.data = {
                          url: _params.host + '/' + _res.data.params.key
                        };
                        base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, ret, that.header);
                        success(ret);
                      }
                    }); // console.log(observable);
                    // console.log(that.instance);
                    // that.instance.unsubscribe() // 上传取消
                    //});

                    return _context11.abrupt("break", 151);

                  case 75:
                    if (!that.signUrl) {
                      that.signUrl = '/v1/ondrive/ondrive/getAk';
                    } // return new Promise(async (resolve, reject) => {


                    _context11.next = 78;
                    return base/* default.request */.Z.request({
                      url: that.signUrl,
                      method: 'get',
                      data: {
                        filename: that.filename
                      },
                      header: that.header
                    });

                  case 78:
                    _res = _context11.sent;

                    if (!(_res.code != 200)) {
                      _context11.next = 81;
                      break;
                    }

                    throw _res;

                  case 81:
                    if (!(that.filesize <= 1 * 1024 * 1024)) {
                      _context11.next = 84;
                      break;
                    }

                    _context11.next = 90;
                    break;

                  case 84:
                    if (that.file) {
                      _context11.next = 86;
                      break;
                    }

                    throw {
                      code: 0,
                      msg: '非file模式不支持分片上传'
                    };

                  case 86:
                    that.instance = {
                      res: _res,
                      status: 'start',
                      loadedAll: 0,
                      loadedCurrent: 0,
                      // 当前chunk已上传大小
                      currentIndex: 0,
                      uploadTask: '',
                      init: function () {
                        var _init = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          var authProvider, options;
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  //that.instance.context = that.instance.createContext(that.file); // // 获取对于同一个文件，获取其的context
                                  //that.instance.chunks = that.instance.slice(that.file, 1024 * 1024 * 5); // 首先拆分切片
                                  // Some callback function
                                  authProvider = function authProvider(callback) {
                                    // Your logic for getting and refreshing accessToken
                                    // Error should be passed in case of error while authenticating
                                    // accessToken should be passed upon successful authentication
                                    var error = {};
                                    callback(error, that.instance.res.data.params.accessToken);
                                  };

                                  options = {
                                    authProvider: authProvider
                                  };
                                  that.instance.client = Client.init(options);
                                  _context3.next = 5;
                                  return that.instance.createSession();

                                case 5:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        function init() {
                          return _init.apply(this, arguments);
                        }

                        return init;
                      }(),
                      pause: function pause() {
                        that.instance.uploadTask.cancel();
                        that.instance.status = 'pause';
                      },
                      cancel: function () {
                        var _cancel = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  that.instance.status = 'pause';
                                  that.instance.uploadTask.cancel();
                                  that.instance.status = 'cancel';

                                case 3:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4);
                        }));

                        function cancel() {
                          return _cancel.apply(this, arguments);
                        }

                        return cancel;
                      }(),
                      resume: function () {
                        var _resume = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  that.instance.status = 'start';
                                  that.instance.uploadTask.resume();

                                case 2:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5);
                        }));

                        function resume() {
                          return _resume.apply(this, arguments);
                        }

                        return resume;
                      }(),
                      client: '',
                      filePath: '',
                      uploadSession: '',
                      // https://docs.microsoft.com/en-us/graph/api/driveitem-createuploadsession?view=graph-rest-beta#create-an-upload-session
                      // https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/samples/typescript/tasks/LargeFileUploadTask.ts
                      createSession: function () {
                        var _createSession = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var payload;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  that.instance.filePath = 'apps/' + base/* default.guid */.Z.guid() + that.filename.substr(that.filename.lastIndexOf(".")); // create the upload session

                                  payload = {
                                    item: {
                                      "@microsoft.graph.conflictBehavior": "rename"
                                    }
                                  };
                                  _context6.next = 4;
                                  return LargeFileUploadTask.createUploadSession(that.instance.client, that.instance.res.data.params.fileApi + '/' + that.instance.filePath + ':/createUploadSession', payload);

                                case 4:
                                  that.instance.uploadSession = _context6.sent;

                                case 5:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6);
                        }));

                        function createSession() {
                          return _createSession.apply(this, arguments);
                        }

                        return createSession;
                      }(),
                      upload: function () {
                        var _upload = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var _uploadResult$respons;

                          var progress, optionsWithProgress, fileObject, uploadResult, _ret4;

                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  // specify the options
                                  progress = function progress(range, extraCallbackParam) {
                                    // implement the progress callback here
                                    console.log("uploading range: ", range);
                                    console.log(extraCallbackParam);
                                    that.onUploadProgress({
                                      total: that.file.size,
                                      loaded: range.minValue
                                    });
                                    return true;
                                  };

                                  optionsWithProgress = {
                                    fileName: that.file.name,
                                    rangeSize: 1024 * 1024,
                                    uploadEventHandlers: {
                                      progress: progress,
                                      extraCallbackParam: ""
                                    }
                                  };
                                  fileObject = new FileUpload(that.file, that.file.name, that.file.size); // Create an upload session

                                  that.instance.uploadTask = new LargeFileUploadTask(that.instance.client, fileObject, that.instance.uploadSession, optionsWithProgress); //Use the upload task to run the upload

                                  _context7.next = 6;
                                  return that.instance.uploadTask.upload();

                                case 6:
                                  uploadResult = _context7.sent;
                                  console.log(uploadResult);

                                  if (!(uploadResult !== null && uploadResult !== void 0 && (_uploadResult$respons = uploadResult.responseBody) !== null && _uploadResult$respons !== void 0 && _uploadResult$respons.webUrl)) {
                                    _context7.next = 18;
                                    break;
                                  }

                                  // 上传成功
                                  _ret4 = new Object();
                                  _ret4.code = 200;
                                  _ret4.msg = '上传成功';
                                  _ret4.data = {
                                    url: that.instance.filePath
                                  };
                                  that.onUploadProgress({
                                    percent: 100
                                  });
                                  base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, _ret4, that.header);
                                  resolve(_ret4);
                                  _context7.next = 19;
                                  break;

                                case 18:
                                  throw {
                                    code: 0,
                                    msg: 'uploadResult'
                                  };

                                case 19:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7);
                        }));

                        function upload() {
                          return _upload.apply(this, arguments);
                        }

                        return upload;
                      }()
                    };
                    _context11.next = 89;
                    return that.instance.init();

                  case 89:
                    that.instance.upload();

                  case 90:
                    return _context11.abrupt("break", 151);

                  case 91:
                    return _context11.abrupt("break", 151);

                  case 92:
                    if (!(that.filesize > 50 * 1024 * 1024 || that.splitePiece && that.filesize > 50 * 1024 * 1024)) {
                      _context11.next = 118;
                      break;
                    }

                    // 定义上传方法。
                    // https://help.aliyun.com/document_detail/383952.html
                    multipartUpload = /*#__PURE__*/function () {
                      var _ref2 = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                        var _result, _res3, _ret5;

                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.prev = 0;
                                _context8.next = 3;
                                return that.instance.multipartUpload(fullname, that.file, {
                                  checkpoint: that.checkpoint,
                                  progress: function progress(p, checkpoint) {
                                    // 断点记录点。浏览器重启后无法直接继续上传，您需要手动触发上传操作。
                                    that.tempCheckpoint = checkpoint; // console.log(p);

                                    // console.log(p);
                                    that.onUploadProgress({
                                      percent: p * 100
                                    });
                                  },
                                  // 设置并发上传的分片数量。
                                  parallel: 4,
                                  // 设置分片大小。默认值为1 MB，最小值为100 KB。
                                  partSize: 102400,
                                  // partSize: 1024 * params.chunkSize ? params.chunkSize : 30,
                                  headers: {
                                    // 指定该Object被下载时的网页缓存行为。
                                    // "Cache-Control": "no-cache",
                                    // 指定该Object被下载时的名称。
                                    // "Content-Disposition": "example.txt",
                                    // 指定该Object被下载时的内容编码格式。
                                    "Content-Encoding": "utf-8" // 指定过期时间，单位为毫秒。
                                    // Expires: "1000",
                                    // 指定Object的存储类型。
                                    // "x-oss-storage-class": "Standard",
                                    // 指定Object标签，可同时设置多个标签。
                                    // "x-oss-tagging": "Tag1=1&Tag2=2",
                                    // 指定初始化分片上传时是否覆盖同名Object。此处设置为true，表示禁止覆盖同名Object。
                                    // "x-oss-forbid-overwrite": "true",

                                  } // 自定义元数据，通过HeadObject接口可以获取Object的元数据。
                                  // meta: { year: 2021, people: 'jry' },
                                  // mime: 'text/plain'

                                });

                              case 3:
                                _result = _context8.sent;

                                if (_result.res.status) {
                                  _res3 = _result.data;
                                  _ret5 = new Object();
                                  _ret5.code = 200;
                                  _ret5.msg = '上传成功';
                                  _ret5.data = {
                                    url: _params3.host + '/' + fullname
                                  };
                                  that.tempCheckpoint = '';
                                  base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, _ret5, that.header);
                                  success(_ret5);
                                } else {
                                  reject({
                                    code: 0,
                                    msg: '上传失败'
                                  });
                                }

                                _context8.next = 10;
                                break;

                              case 7:
                                _context8.prev = 7;
                                _context8.t0 = _context8["catch"](0);

                                if (_context8.t0.name != 'cancel') {
                                  reject({
                                    code: 0,
                                    msg: _context8.t0
                                  });
                                }

                              case 10:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, null, [[0, 7]]);
                      }));

                      return function multipartUpload() {
                        return _ref2.apply(this, arguments);
                      };
                    }(); // 开始分片上传。


                    console.log('分片上传');

                    if (that.file) {
                      _context11.next = 97;
                      break;
                    }

                    throw {
                      code: 0,
                      msg: '非file模式不支持分片上传'
                    };

                  case 97:
                    if (!that.signUrl) {
                      that.signUrl = '/v1/upload_oss/index/sts';
                    }

                    if (that.signUrl.indexOf("?") >= 0) {
                      that.signUrl = that.signUrl + '&useSts=1';
                    } else {
                      that.signUrl = that.signUrl + '?useSts=1';
                    }

                    _context11.next = 101;
                    return base/* default.loadJS */.Z.loadJS('https://gosspublic.alicdn.com/aliyun-oss-sdk-6.16.0.min.js');

                  case 101:
                    _jsRet = _context11.sent;

                    if (_jsRet) {
                      _context11.next = 104;
                      break;
                    }

                    throw {
                      code: 0,
                      msg: '加载SDK出错'
                    };

                  case 104:
                    // return new Promise(async (resolve, reject) => {
                    // let success = resolve;
                    // 申请上传临时授权
                    _params3 = {};
                    _context11.next = 107;
                    return base/* default.request */.Z.request({
                      url: that.signUrl,
                      method: 'get',
                      data: {
                        filename: that.filename
                      },
                      header: that.header
                    });

                  case 107:
                    _res = _context11.sent;

                    if (!(_res.code == 200)) {
                      _context11.next = 112;
                      break;
                    }

                    _params3 = _res.data.params;
                    _context11.next = 113;
                    break;

                  case 112:
                    throw _res;

                  case 113:
                    that.instance = new OSS({
                      // region填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
                      region: 'oss-' + _params3.regionId,
                      // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
                      accessKeyId: _params3.Credentials.AccessKeyId,
                      accessKeySecret: _params3.Credentials.AccessKeySecret,
                      // 从STS服务获取的安全令牌（SecurityToken）。
                      stsToken: _params3.Credentials.SecurityToken,
                      // 填写Bucket名称，例如examplebucket。
                      bucket: _params3.bucketName
                    });
                    fullname = _params3.key;
                    multipartUpload(); // });

                    _context11.next = 133;
                    break;

                  case 118:
                    console.log('非分片上传');

                    if (!that.signUrl) {
                      that.signUrl = '/v1/upload_oss/index/sign';
                    }

                    host = '';
                    formData = new FormData(); // 申请上传签名

                    _context11.next = 124;
                    return base/* default.request */.Z.request({
                      url: that.signUrl,
                      method: 'get',
                      data: {
                        filename: that.filename
                      },
                      header: that.header
                    });

                  case 124:
                    _res4 = _context11.sent;

                    if (!(_res4.code == 200)) {
                      _context11.next = 130;
                      break;
                    }

                    host = _res4.data.params.host;

                    for (key in _res4.data.params) {
                      formData.append(key, _res4.data.params[key]);
                    }

                    _context11.next = 131;
                    break;

                  case 130:
                    throw _res4;

                  case 131:
                    if (that.file) {
                      formData.append(upInstance.name, that.file, that.filename);
                    } else if (that.blobInfo) {
                      formData.append(upInstance.name, that.blobInfo.blob(), that.filename);
                    } // return new Promise((resolve, reject) => {


                    axios({
                      method: 'post',
                      url: _res4.data.params.host,
                      data: formData,
                      headers: {
                        'Content-Type': 'multipart/form-data'
                      },
                      onUploadProgress: that.onUploadProgress
                    }).then(function (response) {
                      var ret = new Object();
                      ret.code = 200;
                      ret.msg = '上传成功'; // oss只要xhr状态是200就表示上传成功

                      ret.data = {
                        url: host + '/' + _res4.data.params.key
                      };
                      base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, ret, that.header);
                      resolve(ret);
                    }).catch(function (err) {
                      console.log(err);
                      reject({
                        code: 0,
                        msg: err
                      });
                    }); // });

                  case 133:
                    return _context11.abrupt("break", 151);

                  case 134:
                    if ((_that$header = that.header) !== null && _that$header !== void 0 && _that$header.token) {
                      that.header.Authorization = that.header.token;
                    } else {
                      that.header.Authorization = base/* default.config.getToken */.Z.config.getToken();
                    } // file方式支持大文件分片上传


                    if (!(that.splitePiece && that.filesize > 5 * 1024 * 1024)) {
                      _context11.next = 145;
                      break;
                    }

                    console.log('分片上传');

                    if (that.file) {
                      _context11.next = 139;
                      break;
                    }

                    throw {
                      code: 0,
                      msg: '非file模式不支持分片上传'
                    };

                  case 139:
                    that.instance = {
                      status: 'start',
                      loadedAll: 0,
                      currentIndex: 0,
                      context: '',
                      chunks: [],
                      slice: function slice(file, piece) {
                        var totalSize = file.size; // 文件总大小

                        var start = 0; // 每次上传的开始字节

                        var end = start + piece; // 每次上传的结尾字节

                        var chunks = [];

                        while (start < totalSize) {
                          // 根据长度截取每次需要上传的数据
                          // File对象继承自Blob对象，因此包含slice方法
                          var blob = file.slice(start, end);
                          chunks.push({
                            blob: blob,
                            upStatus: 0,
                            upCount: 0
                          });
                          start = end;
                          end = start + piece;
                        }

                        return chunks;
                      },
                      // 获取context，todo这里会影响断点续传同一个文件会返回相同的值
                      createContext: function createContext(file) {
                        return 'chunks-' + that.instance.guid() + '.' + that.filename.substr(that.filename.lastIndexOf(".") + 1);
                      },
                      init: function init() {
                        that.instance.context = that.instance.createContext(that.file); // // 获取对于同一个文件，获取其的context

                        that.instance.chunks = that.instance.slice(that.file, 1024 * 1024 * 5); // 首先拆分切片
                      },
                      guid: function guid() {
                        return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
                      },
                      pause: function pause() {
                        that.instance.status = 'pause';
                      },
                      cancel: function cancel() {
                        that.instance.status = 'cancel';
                      },
                      resume: function resume() {
                        that.instance.status = 'start';
                        that.instance.upload(that.instance.currentIndex);
                      },
                      mergeFile: function () {
                        var _mergeFile = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var index, ret;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  index = 0;

                                case 1:
                                  if (!(index < that.instance.chunks.length)) {
                                    _context9.next = 13;
                                    break;
                                  }

                                  if (!(that.instance.chunks[index].upStatus != 1)) {
                                    _context9.next = 10;
                                    break;
                                  }

                                  if (!(that.instance.chunks[index].upCount < 5)) {
                                    _context9.next = 8;
                                    break;
                                  }

                                  that.instance.upload(index);
                                  return _context9.abrupt("return");

                                case 8:
                                  reject({
                                    code: 0,
                                    msg: '上传失败请重新上传'
                                  });
                                  return _context9.abrupt("return");

                                case 10:
                                  index++;
                                  _context9.next = 1;
                                  break;

                                case 13:
                                  _context9.next = 15;
                                  return base/* default.request */.Z.request({
                                    url: that.mergeUrl,
                                    method: 'post',
                                    data: {
                                      context: that.instance.context,
                                      chunks: that.instance.chunks.length
                                    }
                                  });

                                case 15:
                                  ret = _context9.sent;

                                  if (ret.code = 200) {
                                    that.tempCheckpoint = '';
                                    base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, ret, that.header);
                                    resolve(ret);
                                  } else {
                                    reject({
                                      code: 0,
                                      msg: '上传失败'
                                    });
                                  }

                                case 17:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9);
                        }));

                        function mergeFile() {
                          return _mergeFile.apply(this, arguments);
                        }

                        return mergeFile;
                      }(),
                      upload: function () {
                        var _upload2 = upload_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                          var index,
                              tempCheckpoint,
                              chunk,
                              formData,
                              _args10 = arguments;
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  index = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : 0;
                                  tempCheckpoint = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};

                                  if (!(that.instance.chunks.length == 0)) {
                                    _context10.next = 5;
                                    break;
                                  }

                                  throw {
                                    code: 0,
                                    msg: '文件分片错误'
                                  };

                                case 5:
                                  if (tempCheckpoint.index) {
                                    index = tempCheckpoint.index;
                                    that.instance.loadedAll = tempCheckpointloadedAll;
                                  }

                                  console.log(that.instance.status);
                                  that.instance.currentIndex = index; // for (let index = 0; index < that.instance.chunks.length; index++) {

                                  if (!(that.instance.status != 'start')) {
                                    _context10.next = 10;
                                    break;
                                  }

                                  return _context10.abrupt("return");

                                case 10:
                                  console.log(index);
                                  chunk = that.instance.chunks[index].blob;

                                  if (that.instance.chunks[index].upStatus == 1) {
                                    that.instance.mergeFile();
                                  }

                                  if (!(that.instance.chunks[index].upCount >= 5)) {
                                    _context10.next = 16;
                                    break;
                                  }

                                  that.instance.chunks[index].msg = '重试超过5次';
                                  return _context10.abrupt("return");

                                case 16:
                                  that.instance.chunks[index].upCount = that.instance.chunks[index].upCount + 1;
                                  formData = new FormData();
                                  formData.append(upInstance.name, chunk, that.file.name); // 传递context

                                  formData.append("context", that.instance.context); // 传递切片索引值

                                  formData.append("index", index + 1); // 上传分片

                                  _context10.prev = 21;
                                  _context10.next = 24;
                                  return axios({
                                    method: 'post',
                                    url: that.url,
                                    data: formData,
                                    headers: {
                                      'Authorization': that.header.Authorization,
                                      'Content-Type': 'multipart/form-data'
                                    },
                                    onUploadProgress: function onUploadProgress(progressEvent) {
                                      // console.log('progressEvent', progressEvent);
                                      that.onUploadProgress({
                                        total: that.file.size,
                                        loaded: that.instance.loadedAll + progressEvent.loaded
                                      }); // 注意这里很重要防止计算进度出错

                                      // 注意这里很重要防止计算进度出错
                                      if (progressEvent.loaded == progressEvent.total) {
                                        that.instance.loadedAll = that.instance.loadedAll + progressEvent.loaded;
                                      }
                                    }
                                  }).then(function (response) {
                                    that.instance.chunks[index].upStatus = 1; // 记录断点

                                    // 记录断点
                                    that.tempCheckpoint = {
                                      index: index,
                                      loadedAll: that.instance.loadedAll
                                    };
                                    var res = response.data;

                                    if (res.code == 200) {
                                      var _ret6 = new Object();

                                      _ret6.code = 200;
                                      _ret6.msg = '分片上传成功';
                                      that.instance.mergeFile();
                                    } else {
                                      that.instance.upload(index);
                                    }
                                  }).catch(function (err) {
                                    console.log(err); // reject({
                                    //     code: 0,
                                    //     msg: err
                                    // });
                                  });

                                case 24:
                                  _context10.next = 28;
                                  break;

                                case 26:
                                  _context10.prev = 26;
                                  _context10.t0 = _context10["catch"](21);

                                case 28:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, null, [[21, 26]]);
                        }));

                        function upload() {
                          return _upload2.apply(this, arguments);
                        }

                        return upload;
                      }()
                    };
                    that.instance.init();
                    console.log(that.instance);
                    that.instance.upload(that.tempCheckpoint);
                    _context11.next = 149;
                    break;

                  case 145:
                    _formData = new FormData();

                    if (that.file) {
                      _formData.append(upInstance.name, that.file, that.file.name);
                    } else if (that.blobInfo) {
                      _formData.append(upInstance.name, that.blobInfo.blob(), that.filename);
                    } // return new Promise((resolve, reject) => {


                    that.instance = {
                      upload: function upload() {
                        axios({
                          method: 'post',
                          url: that.url,
                          data: _formData,
                          headers: {
                            'Authorization': that.header.Authorization,
                            'Content-Type': 'multipart/form-data'
                          },
                          onUploadProgress: that.onUploadProgress
                        }).then(function (response) {
                          var res = response.data;
                          var ret = new Object();
                          ret.code = 200;
                          ret.msg = '上传成功';
                          ret.data = res.data;
                          base/* default.uploadFileCallback */.Z.uploadFileCallback(that.cbParams, ret, that.header);
                          resolve(ret);
                        }).catch(function (err) {
                          console.log(err);
                          reject({
                            code: 0,
                            msg: err
                          });
                        });
                      }
                    };
                    that.instance.upload(); // });

                  case 149:
                    return _context11.abrupt("break", 151);

                  case 150:
                    return _context11.abrupt("break", 151);

                  case 151:
                    _context11.next = 156;
                    break;

                  case 153:
                    _context11.prev = 153;
                    _context11.t1 = _context11["catch"](0);
                    // console.log(err)
                    // alert(err.msg ? err.msg : err);
                    //return new Promise((resolve, reject) => {
                    reject({
                      code: 0,
                      msg: _context11.t1.msg ? _context11.t1.msg : _context11.t1
                    }); //});

                  case 156:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, null, [[0, 153]]);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }());
      },
      resume: function resume() {
        if (!upInstance.instance) {
          return false;
        }

        switch (upInstance.driver) {
          case 'cos':
            upInstance.instance.restartTask(upInstance.taskId);
            break;

          case 'kodo':
            upInstance.start();
            break;

          case 'oss':
            upInstance.instance.resumeUpload();
            break;

          case 'onedrive':
            upInstance.instance.resume();
            break;

          case 'local':
          case 'xyfile':
            upInstance.instance.resume(upInstance.tempCheckpoint);
            break;

          default:
            break;
        }
      },
      pause: function pause() {
        if (!upInstance.instance) {
          return false;
        }

        switch (upInstance.driver) {
          case 'cos':
            upInstance.instance.pauseTask(upInstance.taskId);
            break;

          case 'kodo':
            upInstance.instance.unsubscribe(); // 上传取消

            break;

          case 'oss':
            upInstance.instance.cancel(); // 暂停分片上传

            break;

          case 'onedrive':
            upInstance.instance.pause();
            break;

          case 'local':
          case 'xyfile':
            upInstance.instance.pause();
            break;

          default:
            break;
        }
      },
      cancel: function cancel() {
        if (!upInstance.instance) {
          return false;
        }

        switch (upInstance.driver) {
          case 'cos':
            upInstance.instance.cancelTask(upInstance.taskId);
            break;

          case 'kodo':
            upInstance.instance.unsubscribe(); // 上传取消

            break;

          case 'oss':
            upInstance.instance.cancel(); // 暂停分片上传

            break;

          case 'onedrive':
            upInstance.instance.cancel();
            break;

          case 'local':
          case 'xyfile':
            upInstance.instance.cancel();
            break;

          default:
            break;
        }
      }
    });

    upInstance.init();

    if (upInstance.getInstance == true) {
      return upInstance;
    } else {
      return upInstance.start();
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(3123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(2740);
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);
;// CONCATENATED MODULE: ./src/util/request.js


function request_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function request_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { request_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { request_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









/* harmony default export */ var request = ({
  request: function request(_ref) {
    var _ref$method = _ref.method,
        method = _ref$method === void 0 ? "get" : _ref$method,
        url = _ref.url,
        _ref$data = _ref.data,
        data = _ref$data === void 0 ? {} : _ref$data,
        _ref$header = _ref.header,
        header = _ref$header === void 0 ? {} : _ref$header,
        _ref$dataType = _ref.dataType,
        dataType = _ref$dataType === void 0 ? 'json' : _ref$dataType,
        success = _ref.success,
        fail = _ref.fail,
        complete = _ref.complete;
    // 请求
    var params = {};
    var contentType = 'application/json';

    if (method == 'get') {
      params = data;

      if (url.indexOf("?") >= 0) {
        var params2 = base/* default.getUrlQuery */.Z.getUrlQuery(url);
        url = url.split('?')[0];
        params = Object.assign(params2, params);
      } // 注意get没有请求body部分


      contentType = 'application/x-www-form-urlencoded';
    }

    if (0 != url.indexOf("http")) {
      var baseUrl = base/* default.config.baseUrl */.Z.config.baseUrl(); // console.log(baseUrl)

      if (!baseUrl) {
        alert('缺少baseUrl');
        return false;
      } // 自动补齐/


      if (0 != url.indexOf("/")) {
        url = '/' + url;
      }

      if (baseUrl.indexOf("?") >= 0) {
        // 如果根接口存在?一般是代理等特殊情况
        url = encodeURIComponent(url);
      }

      baseUrl = baseUrl.replace(/(\/$)/g, "");
      url = baseUrl + url;
    }

    var _header = {
      'Content-Type': contentType,
      'Authorization': base/* default.config.getToken */.Z.config.getToken()
    };
    header = Object.assign(_header, header);
    return new Promise(function (resolve, reject) {
      axios({
        method: method,
        url: url,
        data: data,
        params: params,
        headers: header
      }).then(function (ret) {
        // loading.close();
        if (!ret.hasOwnProperty('data')) {
          var _res = new Object();

          _res.code = 0;
          _res.msg = ret;
          reject(_res);
        }

        var res = ret.data; // console.log(res);

        if (res.code == 401) {
          base/* default.config.setToken */.Z.config.setToken(''); // 清除token否则会陷入无法注销登陆的困境

          base/* default.showModal */.Z.showModal({
            title: '提示',
            content: res.msg,
            success: function success(res) {}
          });
          return false;
        }

        if (!res.hasOwnProperty("data")) {
          res.data = {};
        } // 弹窗类型


        if (res.code != 200 && res.data.alert) {
          switch (res.data.alert) {
            case 'toast':
              base/* default.showToast */.Z.showToast({
                icon: 'loading',
                title: res.data.msg
              });
              break;

            case 'modal':
              base/* default.showModal */.Z.showModal({
                title: '提示',
                content: res.data.msg,
                success: function success(res) {}
              });
              break;
          }

          return false;
        }

        resolve(res);
      }).catch( /*#__PURE__*/function () {
        var _ref2 = request_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error) {
          var ret, res, jsRet, h;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // loading.close();
                  if (!error.hasOwnProperty('response')) {
                    ret = new Object();
                    ret.code = 0;
                    ret.msg = error;
                    reject(ret);
                  }

                  res = error.response;
                  console.log(error); // ThinkPHP异常json友好提示

                  if (!(res.data && res.data.code != 200 && res.data.traces)) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 6;
                  return base/* default.loadJS */.Z.loadJS(base/* default.config.jsBaseUrl */.Z.config.jsBaseUrl + '/libs/vue-json-viewer/vue-json-viewer.js');

                case 6:
                  jsRet = _context.sent;

                  if (jsRet) {
                    _context.next = 9;
                    break;
                  }

                  throw {
                    code: 0,
                    msg: '加载SDK出错'
                  };

                case 9:
                  // console.log(window)
                  external_Vue_default().component('json-viewer', window.JsonView.default);
                  h = base/* default.config.vue.$createElement */.Z.config.vue.$createElement;
                  base/* default.config.vue.$msgbox */.Z.config.vue.$msgbox({
                    title: '出错',
                    type: 'error',
                    customClass: 'msgbox-error-json',
                    message: h('div', null, [h('div', null, res.data.message), h('json-viewer', {
                      props: {
                        value: res.data,
                        'expand-depth': 2
                      }
                    }, 'VNode')]),
                    showCancelButton: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                  });

                case 12:
                  // else {
                  res = new Object();
                  res.code = 0;
                  res.msg = error.message;
                  reject(res); // throw res;
                  // }

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
  }
});
;// CONCATENATED MODULE: ./src/util/util.js
/**
 * +----------------------------------------------------------------------
 * | xyui [ 全端渐进式UI框架 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2018-2020 http://jiangruyi.com All rights reserved.
 * +----------------------------------------------------------------------
 * | Author: jry <598821125@qq.com>
 * +----------------------------------------------------------------------
 * | 版权申明：此源码不是一个自由软件，是jry推出的私有源码，严禁在未经许可的情况下
 * | 拷贝、复制、传播、使用此源码的任意代码，如有违反，请立即删除，否则您将面临承担相应
 * | 法律责任的风险。如果需要取得官方授权，请联系官方QQ598821125。
 */
 // uploadFile


base/* default.uploadFile */.Z.uploadFile = upload.uploadFile; // request


base/* default.request */.Z.request = request.request;
/* harmony default export */ var util = (base/* default */.Z);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
;// CONCATENATED MODULE: ./node_modules/vue-script2/src/index.js







var Script2 = {
  installed: false,
  p: Promise.resolve(),
  version: '2.1.0',
  // grunt will overwrite to match package.json
  loaded: {},
  // keys are the scripts that is loading or loaded, values are promises
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (Script2.installed) return;
    var customAttrs = ['unload']; // from: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
    // 'async' and 'defer' don't allow document.write according to:
    // http://www.html5rocks.com/en/tutorials/speed/script-loading/
    // we ignore 'defer' and handle 'async' specially.

    var props = customAttrs.concat(['src', 'type', 'async', 'integrity', 'text', 'crossorigin']);
    Vue.component('script2', {
      props: props,
      // <slot> is important, see: http://vuejs.org/guide/components.html#Named-Slots
      // template: '<div style="display:none"><slot></slot></div>',
      // NOTE: Instead of using `template` we can use the `render` function like so:
      render: function render(h) {
        return h('div', {
          style: 'display:none'
        }, this.$slots.default);
      },
      mounted: function mounted() {
        var _this = this;

        var parent = this.$el.parentElement;

        if (!this.src) {
          Script2.p = Script2.p.then(function () {
            var s = document.createElement('script');
            var h = _this.$el.innerHTML;
            h = h.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&');
            s.type = 'text/javascript';
            s.appendChild(document.createTextNode(h));
            parent.appendChild(s);

            _this.$emit('loaded'); // any other proper way to do this or emit error?

          });
        } else {
          var opts = _.omitBy(_.pick(this, props), _.isUndefined);

          opts.parent = parent; // this syntax results in an implicit return

          var load = function load() {
            return Script2.load(_this.src, opts).then(function () {
              return _this.$emit('loaded');
            }, function (err) {
              return _this.$emit('error', err);
            });
          };

          _.isUndefined(this.async) || this.async === 'false' ? Script2.p = Script2.p.then(load) // serialize execution
          : load(); // inject immediately
        } // see: https://vuejs.org/v2/guide/migration.html#ready-replaced


        this.$nextTick(function () {
          // code that assumes this.$el is in-document
          // NOTE: we could've done this.$el.remove(), but IE sucks, see:
          //       https://github.com/taoeffect/vue-script2/pull/17
          _this.$el.parentElement.removeChild(_this.$el); // remove dummy template <div>

        });
      },
      destroyed: function destroyed() {
        if (this.unload) {
          new Function(this.unload)(); // eslint-disable-line

          delete Script2.loaded[this.src];
        }
      }
    });
    Script2.installed = true;
  },
  load: function load(src) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      parent: document.head
    };

    if (!Script2.loaded[src]) {
      Script2.loaded[src] = new Promise(function (resolve, reject) {
        var s = document.createElement('script'); // omit the special options that Script2 supports

        _.defaults2(s, _.omit(opts, ['unload', 'parent']), {
          type: 'text/javascript'
        }); // according to: http://www.html5rocks.com/en/tutorials/speed/script-loading/
        // async does not like 'document.write' usage, which we & vue.js make
        // heavy use of based on the SPA style. Also, async can result
        // in code getting executed out of order from how it is inlined on the page.


        s.async = false; // therefore set this to false

        s.src = src; // crossorigin in HTML and crossOrigin in the DOM per HTML spec
        // https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-crossorigin

        if (opts.crossorigin) {
          s.crossOrigin = opts.crossorigin;
        } // inspiration from: https://github.com/eldargab/load-script/blob/master/index.js
        // and: https://github.com/ded/script.js/blob/master/src/script.js#L70-L82


        s.onload = function () {
          return resolve(src);
        }; // IE should now support onerror and onload. If necessary, take a look
        // at this to add older IE support: http://stackoverflow.com/a/4845802/1781435


        s.onerror = function () {
          return reject(new Error(src));
        };

        opts.parent.appendChild(s);
      });
    }

    return Script2.loaded[src];
  }
};
var _ = {
  isUndefined: function isUndefined(x) {
    return x === undefined;
  },
  pick: function pick(o, props) {
    var x = {};
    props.forEach(function (k) {
      x[k] = o[k];
    });
    return x;
  },
  omit: function omit(o, props) {
    var x = {};
    Object.keys(o).forEach(function (k) {
      if (props.indexOf(k) === -1) x[k] = o[k];
    });
    return x;
  },
  omitBy: function omitBy(o, pred) {
    var x = {};
    Object.keys(o).forEach(function (k) {
      if (!pred(o[k])) x[k] = o[k];
    });
    return x;
  },
  // custom defaults function suited to our specific purpose
  defaults2: function defaults2(o) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (s) {
      Object.keys(s).forEach(function (k) {
        if (_.isUndefined(o[k]) || o[k] === '') o[k] = s[k];
      });
    });
  }
};
/* harmony default export */ var src = (Script2);
// EXTERNAL MODULE: ./node_modules/loadjs/dist/loadjs.umd.js
var loadjs_umd = __webpack_require__(5671);
var loadjs_umd_default = /*#__PURE__*/__webpack_require__.n(loadjs_umd);
;// CONCATENATED MODULE: ./node_modules/vue-link2/src/index.js



var Link2 = {
  installed: false,
  loaded: {},
  version: '__VERSION__',
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (Link2.installed) return;
    Link2.installed = true;
  },
  load: function load(href) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      parent: document.head
    };
    return Link2.loaded[href] ? Promise.resolve(href) : new Promise(function (resolve, reject) {
      loadjs_umd_default()([href], {
        success: function success() {
          var l = document.createElement('link');
          l.href = href;
          l.crossOrigin = opts.crossorigin;
          opts.parent.appendChild(l);
          Link2.loaded[href] = 1;
          resolve(href);
        },
        error: function error() {
          reject(new Error(href));
        }
      });
    });
  }
};
/* harmony default export */ var vue_link2_src = (Link2);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Link2);
}
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./3rd/verifition/Verify.vue?vue&type=template&id=419600e3&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showBox,
          expression: "showBox",
        },
      ],
      class: _vm.mode == "pop" ? "mask" : "",
    },
    [
      _c(
        "div",
        {
          class: _vm.mode == "pop" ? "verifybox" : "",
          style: { "max-width": parseInt(_vm.imgSize.width) + 30 + "px" },
        },
        [
          _vm.mode == "pop"
            ? _c("div", { staticClass: "verifybox-top" }, [
                _vm._v("\n            请完成安全验证\n            "),
                _c(
                  "span",
                  {
                    staticClass: "verifybox-close",
                    on: { click: _vm.closeBox },
                  },
                  [_c("i", { staticClass: "iconfont icon-close" })]
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "verifybox-bottom",
              style: { padding: _vm.mode == "pop" ? "15px" : "0" },
            },
            [
              _vm.componentType
                ? _c(_vm.componentType, {
                    ref: "instance",
                    tag: "components",
                    attrs: {
                      baseUrl: _vm.baseUrl,
                      captchaType: _vm.captchaType,
                      type: _vm.verifyType,
                      figure: _vm.figure,
                      arith: _vm.arith,
                      mode: _vm.mode,
                      vSpace: _vm.vSpace,
                      explain: _vm.explain,
                      imgSize: _vm.imgSize,
                      blockSize: _vm.blockSize,
                      barSize: _vm.barSize,
                      defaultImg: _vm.defaultImg,
                    },
                  })
                : _vm._e(),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


;// CONCATENATED MODULE: ./3rd/verifition/Verify.vue?vue&type=template&id=419600e3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(9600);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./3rd/verifition/Verify/VerifySlide.vue?vue&type=template&id=25632e28&
var VerifySlidevue_type_template_id_25632e28_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { position: "relative" } }, [
    _vm.type === "2"
      ? _c(
          "div",
          {
            staticClass: "verify-img-out",
            style: {
              height: parseInt(_vm.setSize.imgHeight) + _vm.vSpace + "px",
            },
          },
          [
            _c(
              "div",
              {
                staticClass: "verify-img-panel",
                style: {
                  width: _vm.setSize.imgWidth,
                  height: _vm.setSize.imgHeight,
                },
              },
              [
                _c("img", {
                  staticStyle: {
                    width: "100%",
                    height: "100%",
                    display: "block",
                  },
                  attrs: {
                    src: _vm.backImgBase
                      ? "data:image/png;base64," + _vm.backImgBase
                      : _vm.defaultImg,
                    alt: "",
                  },
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showRefresh,
                        expression: "showRefresh",
                      },
                    ],
                    staticClass: "verify-refresh",
                    on: { click: _vm.refresh },
                  },
                  [_c("i", { staticClass: "iconfont icon-refresh" })]
                ),
                _vm._v(" "),
                _c("transition", { attrs: { name: "tips" } }, [
                  _vm.tipWords
                    ? _c(
                        "span",
                        {
                          staticClass: "verify-tips",
                          class: _vm.passFlag ? "suc-bg" : "err-bg",
                        },
                        [_vm._v(_vm._s(_vm.tipWords))]
                      )
                    : _vm._e(),
                ]),
              ],
              1
            ),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "verify-bar-area",
        style: {
          width: _vm.setSize.imgWidth,
          height: _vm.barSize.height,
          "line-height": _vm.barSize.height,
        },
      },
      [
        _c("span", {
          staticClass: "verify-msg",
          domProps: { textContent: _vm._s(_vm.text) },
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "verify-left-bar",
            style: {
              width:
                _vm.leftBarWidth !== undefined
                  ? _vm.leftBarWidth
                  : _vm.barSize.height,
              height: _vm.barSize.height,
              "border-color": _vm.leftBarBorderColor,
              transaction: _vm.transitionWidth,
            },
          },
          [
            _c("span", {
              staticClass: "verify-msg",
              domProps: { textContent: _vm._s(_vm.finishText) },
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "verify-move-block",
                style: {
                  width: _vm.barSize.height,
                  height: _vm.barSize.height,
                  "background-color": _vm.moveBlockBackgroundColor,
                  left: _vm.moveBlockLeft,
                  transition: _vm.transitionLeft,
                },
                on: { touchstart: _vm.start, mousedown: _vm.start },
              },
              [
                _c("i", {
                  class: ["verify-icon iconfont", _vm.iconClass],
                  style: { color: _vm.iconColor },
                }),
                _vm._v(" "),
                _vm.type === "2"
                  ? _c(
                      "div",
                      {
                        staticClass: "verify-sub-block",
                        style: {
                          width:
                            Math.floor(
                              (parseInt(_vm.setSize.imgWidth) * 47) / 310
                            ) + "px",
                          height: _vm.setSize.imgHeight,
                          top:
                            "-" +
                            (parseInt(_vm.setSize.imgHeight) + _vm.vSpace) +
                            "px",
                          "background-size":
                            _vm.setSize.imgWidth + " " + _vm.setSize.imgHeight,
                        },
                      },
                      [
                        _c("img", {
                          staticStyle: {
                            width: "100%",
                            height: "100%",
                            display: "block",
                          },
                          attrs: {
                            src:
                              "data:image/png;base64," + _vm.blockBackImgBase,
                            alt: "",
                          },
                        }),
                      ]
                    )
                  : _vm._e(),
              ]
            ),
          ]
        ),
      ]
    ),
  ])
}
var VerifySlidevue_type_template_id_25632e28_staticRenderFns = []
VerifySlidevue_type_template_id_25632e28_render._withStripped = true


;// CONCATENATED MODULE: ./3rd/verifition/Verify/VerifySlide.vue?vue&type=template&id=25632e28&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(1058);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(2564);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(6977);
;// CONCATENATED MODULE: ./3rd/verifition/utils/ase.js


// import CryptoJS from 'crypto-js' // 使用cdn加载

/**
 * @word 要加密的内容
 * @keyWord String  服务器随机返回的关键字
 *  */
function aesEncrypt(word) {
  var keyWord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "XwKsGlMcdPMEhR1B";
  var key = CryptoJS.enc.Utf8.parse(keyWord);
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}
;// CONCATENATED MODULE: ./3rd/verifition/utils/util.js

function util_resetSize(vm) {
  var img_width, img_height, bar_width, bar_height; //图片的宽度、高度，移动条的宽度、高度

  var parentWidth = vm.$el.parentNode.offsetWidth || window.offsetWidth;
  var parentHeight = vm.$el.parentNode.offsetHeight || window.offsetHeight;

  if (vm.imgSize.width.indexOf('%') != -1) {
    img_width = parseInt(this.imgSize.width) / 100 * parentWidth + 'px';
  } else {
    img_width = this.imgSize.width;
  }

  if (vm.imgSize.height.indexOf('%') != -1) {
    img_height = parseInt(this.imgSize.height) / 100 * parentHeight + 'px';
  } else {
    img_height = this.imgSize.height;
  }

  if (vm.barSize.width.indexOf('%') != -1) {
    bar_width = parseInt(this.barSize.width) / 100 * parentWidth + 'px';
  } else {
    bar_width = this.barSize.width;
  }

  if (vm.barSize.height.indexOf('%') != -1) {
    bar_height = parseInt(this.barSize.height) / 100 * parentHeight + 'px';
  } else {
    bar_height = this.barSize.height;
  }

  return {
    imgWidth: img_width,
    imgHeight: img_height,
    barWidth: bar_width,
    barHeight: bar_height
  };
}
var _code_chars = (/* unused pure expression or super */ null && ([1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']));
var _code_color1 = (/* unused pure expression or super */ null && (['#fffff0', '#f0ffff', '#f0fff0', '#fff0f0']));
var _code_color2 = (/* unused pure expression or super */ null && (['#FF0033', '#006699', '#993366', '#FF9900', '#66CC66', '#FF33CC']));
;// CONCATENATED MODULE: ./3rd/verifition/api/index.js



function httpRequest(paramObj, fun, errFun) {
  var xmlhttp = null;
  /*创建XMLHttpRequest对象，
   *老版本的 Internet Explorer（IE5 和 IE6）使用 ActiveX 对象：new ActiveXObject("Microsoft.XMLHTTP")
   * */

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  /*判断是否支持请求*/


  if (xmlhttp == null) {
    alert('你的浏览器不支持XMLHttp');
    return;
  }
  /*请求方式，并且转换为大写*/


  var httpType = (paramObj.type || 'GET').toUpperCase();
  /*数据类型*/

  var dataType = paramObj.dataType || 'json';
  /*请求接口*/

  var httpUrl = paramObj.httpUrl || '';
  /*是否异步请求*/

  var async = paramObj.async || true;
  /*请求参数--post请求参数格式为：foo=bar&lorem=ipsum*/

  var paramData = paramObj.data || {}; // var requestData = qs.stringify(paramData)

  var requestData = JSON.stringify(paramData);
  /*请求接收*/

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      /*成功回调函数*/
      fun(xmlhttp.responseText);
    } else {
      /*失败回调函数*/
      errFun;
    }
  };
  /*接口连接，先判断连接类型是post还是get*/


  if (httpType == 'GET') {
    xmlhttp.open("GET", httpUrl, async);
    xmlhttp.send(null);
  } else if (httpType == 'POST') {
    xmlhttp.open("POST", httpUrl, async); //发送合适的请求头信息

    xmlhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xmlhttp.send(requestData);
  }
} //获取验证图片  以及token


function reqGet(data, baseUrl) {
  return new Promise(function (resolve, reject) {
    /*请求参数*/
    var paramObj = {
      httpUrl: baseUrl + '/captcha/get',
      type: 'post',
      data: data
    };
    /*请求调用*/

    httpRequest(paramObj, function (respondDada) {
      //这里编写成功的回调函数
      resolve(JSON.parse(respondDada));
    }, function () {
      alert('网络错误');
    });
  });
} //滑动或者点选验证

function reqCheck(data, baseUrl) {
  return new Promise(function (resolve, reject) {
    /*请求参数*/
    var paramObj = {
      httpUrl: baseUrl + '/captcha/check',
      type: 'post',
      data: data
    };
    /*请求调用*/

    httpRequest(paramObj, function (respondDada) {
      //这里编写成功的回调函数
      resolve(JSON.parse(respondDada));
    }, function () {
      alert('网络错误');
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./3rd/verifition/Verify/VerifySlide.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * VerifySlide
 * @description 滑块
 * */


 //  "captchaType":"blockPuzzle",

/* harmony default export */ var VerifySlidevue_type_script_lang_js_ = ({
  name: 'VerifySlide',
  props: {
    baseUrl: {
      type: String,
      required: true,
      default: ""
    },
    captchaType: {
      type: String
    },
    type: {
      type: String,
      default: '1'
    },
    //弹出式pop，固定fixed
    mode: {
      type: String,
      default: 'fixed'
    },
    vSpace: {
      type: Number,
      default: 5
    },
    explain: {
      type: String,
      default: '向右滑动完成验证'
    },
    imgSize: {
      type: Object,
      default: function _default() {
        return {
          width: '310px',
          height: '155px'
        };
      }
    },
    blockSize: {
      type: Object,
      default: function _default() {
        return {
          width: '50px',
          height: '50px'
        };
      }
    },
    barSize: {
      type: Object,
      default: function _default() {
        return {
          width: '310px',
          height: '40px'
        };
      }
    },
    defaultImg: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      secretKey: '',
      //后端返回的加密秘钥 字段
      passFlag: '',
      //是否通过的标识
      backImgBase: '',
      //验证码背景图片
      blockBackImgBase: '',
      //验证滑块的背景图片
      backToken: "",
      //后端返回的唯一token值
      startMoveTime: "",
      //移动开始的时间
      endMovetime: '',
      //移动结束的时间
      tipsBackColor: '',
      //提示词的背景颜色
      tipWords: '',
      text: '',
      finishText: '',
      setSize: {
        imgHeight: 0,
        imgWidth: 0,
        barHeight: 0,
        barWidth: 0
      },
      top: 0,
      left: 0,
      moveBlockLeft: undefined,
      leftBarWidth: undefined,
      // 移动中样式
      moveBlockBackgroundColor: undefined,
      leftBarBorderColor: '#ddd',
      iconColor: undefined,
      iconClass: 'icon-right',
      status: false,
      //鼠标状态
      isEnd: false,
      //是够验证完成
      showRefresh: true,
      transitionLeft: '',
      transitionWidth: ''
    };
  },
  computed: {
    barArea: function barArea() {
      return this.$el.querySelector('.verify-bar-area');
    },
    resetSize: function resetSize() {
      return util_resetSize;
    }
  },
  methods: {
    init: function init() {
      var _this2 = this;

      this.text = this.explain;
      this.getPictrue();
      this.$nextTick(function () {
        var setSize = _this2.resetSize(_this2); //重新设置宽度高度


        for (var key in setSize) {
          _this2.$set(_this2.setSize, key, setSize[key]);
        }

        _this2.$parent.$emit('ready', _this2);
      });

      var _this = this;

      window.removeEventListener("touchmove", function (e) {
        _this.move(e);
      });
      window.removeEventListener("mousemove", function (e) {
        _this.move(e);
      }); //鼠标松开

      window.removeEventListener("touchend", function () {
        _this.end();
      });
      window.removeEventListener("mouseup", function () {
        _this.end();
      });
      window.addEventListener("touchmove", function (e) {
        _this.move(e);
      });
      window.addEventListener("mousemove", function (e) {
        _this.move(e);
      }); //鼠标松开

      window.addEventListener("touchend", function () {
        _this.end();
      });
      window.addEventListener("mouseup", function () {
        _this.end();
      });
    },
    //鼠标按下
    start: function start(e) {
      e = e || window.event;

      if (!e.touches) {
        //兼容PC端 
        var x = e.clientX;
      } else {
        //兼容移动端
        var x = e.touches[0].pageX;
      }

      this.startLeft = Math.floor(x - this.barArea.getBoundingClientRect().left);
      this.startMoveTime = +new Date(); //开始滑动的时间

      if (this.isEnd == false) {
        this.text = '';
        this.moveBlockBackgroundColor = '#337ab7';
        this.leftBarBorderColor = '#337AB7';
        this.iconColor = '#fff';
        e.stopPropagation();
        this.status = true;
      }
    },
    //鼠标移动
    move: function move(e) {
      e = e || window.event;

      if (this.status && this.isEnd == false) {
        if (!e.touches) {
          //兼容PC端 
          var x = e.clientX;
        } else {
          //兼容移动端
          var x = e.touches[0].pageX;
        }

        var bar_area_left = this.barArea.getBoundingClientRect().left;
        var move_block_left = x - bar_area_left; //小方块相对于父元素的left值

        if (move_block_left >= this.barArea.offsetWidth - parseInt(parseInt(this.blockSize.width) / 2) - 2) {
          move_block_left = this.barArea.offsetWidth - parseInt(parseInt(this.blockSize.width) / 2) - 2;
        }

        if (move_block_left <= 0) {
          move_block_left = parseInt(parseInt(this.blockSize.width) / 2);
        } //拖动后小方块的left值


        this.moveBlockLeft = move_block_left - this.startLeft + "px";
        this.leftBarWidth = move_block_left - this.startLeft + "px";
      }
    },
    //鼠标松开
    end: function end() {
      var _this3 = this;

      this.endMovetime = +new Date();

      var _this = this; //判断是否重合


      if (this.status && this.isEnd == false) {
        var moveLeftDistance = parseInt((this.moveBlockLeft || '').replace('px', ''));
        moveLeftDistance = moveLeftDistance * 310 / parseInt(this.setSize.imgWidth);
        var data = {
          captchaType: this.captchaType,
          "pointJson": this.secretKey ? aesEncrypt(JSON.stringify({
            x: moveLeftDistance,
            y: 5.0
          }), this.secretKey) : JSON.stringify({
            x: moveLeftDistance,
            y: 5.0
          }),
          "token": this.backToken
        };
        reqCheck(data, this.baseUrl).then(function (res) {
          if (res.repCode == "0000") {
            _this3.moveBlockBackgroundColor = '#5cb85c';
            _this3.leftBarBorderColor = '#5cb85c';
            _this3.iconColor = '#fff';
            _this3.iconClass = 'icon-check';
            _this3.showRefresh = false;
            _this3.isEnd = true;

            if (_this3.mode == 'pop') {
              setTimeout(function () {
                _this3.$parent.clickShow = false;

                _this3.refresh();
              }, 1500);
            }

            _this3.passFlag = true;
            _this3.tipWords = "".concat(((_this3.endMovetime - _this3.startMoveTime) / 1000).toFixed(2), "s\u9A8C\u8BC1\u6210\u529F");
            var captchaVerification = _this3.secretKey ? aesEncrypt(_this3.backToken + '---' + JSON.stringify({
              x: moveLeftDistance,
              y: 5.0
            }), _this3.secretKey) : _this3.backToken + '---' + JSON.stringify({
              x: moveLeftDistance,
              y: 5.0
            });
            setTimeout(function () {
              _this3.tipWords = "";

              _this3.$parent.closeBox();

              _this3.$parent.$emit('success', {
                captchaVerification: captchaVerification
              });
            }, 1000);
          } else {
            _this3.moveBlockBackgroundColor = '#d9534f';
            _this3.leftBarBorderColor = '#d9534f';
            _this3.iconColor = '#fff';
            _this3.iconClass = 'icon-close';
            _this3.passFlag = false;
            setTimeout(function () {
              _this.refresh();
            }, 1000);

            _this3.$parent.$emit('error', _this3);

            _this3.tipWords = "验证失败";
            setTimeout(function () {
              _this3.tipWords = "";
            }, 1000);
          }
        });
        this.status = false;
      }
    },
    refresh: function refresh() {
      var _this4 = this;

      this.showRefresh = true;
      this.finishText = '';
      this.transitionLeft = 'left .3s';
      this.moveBlockLeft = 0;
      this.leftBarWidth = undefined;
      this.transitionWidth = 'width .3s';
      this.leftBarBorderColor = '#ddd';
      this.moveBlockBackgroundColor = '#fff';
      this.iconColor = '#000';
      this.iconClass = 'icon-right';
      this.isEnd = false;
      this.getPictrue();
      setTimeout(function () {
        _this4.transitionWidth = '';
        _this4.transitionLeft = '';
        _this4.text = _this4.explain;
      }, 300);
    },
    // 请求背景图片和验证图片
    getPictrue: function getPictrue() {
      var _this5 = this;

      var data = {
        captchaType: this.captchaType,
        clientUid: localStorage.getItem('slider'),
        ts: Date.now() // 现在的时间戳

      };
      reqGet(data, this.baseUrl).then(function (res) {
        if (res.repCode == "0000") {
          _this5.backImgBase = res.repData.originalImageBase64;
          _this5.blockBackImgBase = res.repData.jigsawImageBase64;
          _this5.backToken = res.repData.token;
          _this5.secretKey = res.repData.secretKey;
        } else {
          _this5.tipWords = res.repMsg;
        } // 判断接口请求次数是否失效


        if (res.repCode == '6201') {
          _this5.backImgBase = null;
          _this5.blockBackImgBase = null;
        }
      });
    }
  },
  watch: {
    // type变化则全面刷新
    type: {
      immediate: true,
      handler: function handler() {
        this.init();
      }
    }
  },
  mounted: function mounted() {
    // 禁止拖拽
    this.$el.onselectstart = function () {
      return false;
    };

    console.log(this.defaultImg);
  }
});
;// CONCATENATED MODULE: ./3rd/verifition/Verify/VerifySlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var Verify_VerifySlidevue_type_script_lang_js_ = (VerifySlidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1900);
;// CONCATENATED MODULE: ./3rd/verifition/Verify/VerifySlide.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  Verify_VerifySlidevue_type_script_lang_js_,
  VerifySlidevue_type_template_id_25632e28_render,
  VerifySlidevue_type_template_id_25632e28_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "3rd/verifition/Verify/VerifySlide.vue"
/* harmony default export */ var VerifySlide = (component.exports);
;// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./3rd/verifition/Verify/VerifyPoints.vue?vue&type=template&id=6a9b5d90&
var VerifyPointsvue_type_template_id_6a9b5d90_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { position: "relative" } }, [
    _c("div", { staticClass: "verify-img-out" }, [
      _c(
        "div",
        {
          staticClass: "verify-img-panel",
          style: {
            width: _vm.setSize.imgWidth,
            height: _vm.setSize.imgHeight,
            "background-size":
              _vm.setSize.imgWidth + " " + _vm.setSize.imgHeight,
            "margin-bottom": _vm.vSpace + "px",
          },
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showRefresh,
                  expression: "showRefresh",
                },
              ],
              staticClass: "verify-refresh",
              staticStyle: { "z-index": "3" },
              on: { click: _vm.refresh },
            },
            [_c("i", { staticClass: "iconfont icon-refresh" })]
          ),
          _vm._v(" "),
          _c("img", {
            ref: "canvas",
            staticStyle: { width: "100%", height: "100%", display: "block" },
            attrs: {
              src: _vm.pointBackImgBase
                ? "data:image/png;base64," + _vm.pointBackImgBase
                : _vm.defaultImg,
              alt: "",
            },
            on: {
              click: function ($event) {
                _vm.bindingClick ? _vm.canvasClick($event) : undefined
              },
            },
          }),
          _vm._v(" "),
          _vm._l(_vm.tempPoints, function (tempPoint, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "point-area",
                style: {
                  "background-color": "#1abd6c",
                  color: "#fff",
                  "z-index": 9999,
                  width: "20px",
                  height: "20px",
                  "text-align": "center",
                  "line-height": "20px",
                  "border-radius": "50%",
                  position: "absolute",
                  top: parseInt(tempPoint.y - 10) + "px",
                  left: parseInt(tempPoint.x - 10) + "px",
                },
              },
              [
                _vm._v(
                  "\n                " + _vm._s(index + 1) + "\n            "
                ),
              ]
            )
          }),
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "verify-bar-area",
        style: {
          width: _vm.setSize.imgWidth,
          color: this.barAreaColor,
          "border-color": this.barAreaBorderColor,
          "line-height": this.barSize.height,
        },
      },
      [_c("span", { staticClass: "verify-msg" }, [_vm._v(_vm._s(_vm.text))])]
    ),
  ])
}
var VerifyPointsvue_type_template_id_6a9b5d90_staticRenderFns = []
VerifyPointsvue_type_template_id_6a9b5d90_render._withStripped = true


;// CONCATENATED MODULE: ./3rd/verifition/Verify/VerifyPoints.vue?vue&type=template&id=6a9b5d90&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(561);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(1249);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./3rd/verifition/Verify/VerifyPoints.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * VerifyPoints
 * @description 点选
 * */



/* harmony default export */ var VerifyPointsvue_type_script_lang_js_ = ({
  name: 'VerifyPoints',
  props: {
    baseUrl: {
      type: String,
      required: true,
      default: ""
    },
    //弹出式pop，固定fixed
    mode: {
      type: String,
      default: 'fixed'
    },
    captchaType: {
      type: String
    },
    //间隔
    vSpace: {
      type: Number,
      default: 5
    },
    imgSize: {
      type: Object,
      default: function _default() {
        return {
          width: '310px',
          height: '155px'
        };
      }
    },
    barSize: {
      type: Object,
      default: function _default() {
        return {
          width: '310px',
          height: '40px'
        };
      }
    },
    defaultImg: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      secretKey: '',
      //后端返回的ase加密秘钥
      checkNum: 3,
      //默认需要点击的字数
      fontPos: [],
      //选中的坐标信息
      checkPosArr: [],
      //用户点击的坐标
      num: 1,
      //点击的记数
      pointBackImgBase: '',
      //后端获取到的背景图片
      poinTextList: [],
      //后端返回的点击字体顺序
      backToken: '',
      //后端返回的token值
      setSize: {
        imgHeight: 0,
        imgWidth: 0,
        barHeight: 0,
        barWidth: 0
      },
      tempPoints: [],
      text: '',
      barAreaColor: undefined,
      barAreaBorderColor: undefined,
      showRefresh: true,
      bindingClick: true
    };
  },
  computed: {
    resetSize: function resetSize() {
      return util_resetSize;
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      //加载页面
      this.fontPos.splice(0, this.fontPos.length);
      this.checkPosArr.splice(0, this.checkPosArr.length);
      this.num = 1;
      this.getPictrue();
      this.$nextTick(function () {
        _this.setSize = _this.resetSize(_this); //重新设置宽度高度

        _this.$parent.$emit('ready', _this);
      });
    },
    canvasClick: function canvasClick(e) {
      var _this2 = this;

      this.checkPosArr.push(this.getMousePos(this.$refs.canvas, e));

      if (this.num == this.checkNum) {
        this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e)); //按比例转换坐标值

        this.checkPosArr = this.pointTransfrom(this.checkPosArr, this.setSize); //等创建坐标执行完

        setTimeout(function () {
          // var flag = this.comparePos(this.fontPos, this.checkPosArr);
          //发送后端请求
          var captchaVerification = _this2.secretKey ? aesEncrypt(_this2.backToken + '---' + JSON.stringify(_this2.checkPosArr), _this2.secretKey) : _this2.backToken + '---' + JSON.stringify(_this2.checkPosArr);
          var data = {
            captchaType: _this2.captchaType,
            "pointJson": _this2.secretKey ? aesEncrypt(JSON.stringify(_this2.checkPosArr), _this2.secretKey) : JSON.stringify(_this2.checkPosArr),
            "token": _this2.backToken
          };
          reqCheck(data, _this2.baseUrl).then(function (res) {
            if (res.repCode == "0000") {
              _this2.barAreaColor = '#4cae4c';
              _this2.barAreaBorderColor = '#5cb85c';
              _this2.text = '验证成功';
              _this2.bindingClick = false;

              if (_this2.mode == 'pop') {
                setTimeout(function () {
                  _this2.$parent.clickShow = false;

                  _this2.refresh();
                }, 1500);
              }

              _this2.$parent.$emit('success', {
                captchaVerification: captchaVerification
              });
            } else {
              _this2.$parent.$emit('error', _this2);

              _this2.barAreaColor = '#d9534f';
              _this2.barAreaBorderColor = '#d9534f';
              _this2.text = '验证失败';
              setTimeout(function () {
                _this2.refresh();
              }, 700);
            }
          });
        }, 400);
      }

      if (this.num < this.checkNum) {
        this.num = this.createPoint(this.getMousePos(this.$refs.canvas, e));
      }
    },
    //获取坐标
    getMousePos: function getMousePos(obj, e) {
      var x = e.offsetX;
      var y = e.offsetY;
      return {
        x: x,
        y: y
      };
    },
    //创建坐标点
    createPoint: function createPoint(pos) {
      this.tempPoints.push(Object.assign({}, pos));
      return ++this.num;
    },
    refresh: function refresh() {
      this.tempPoints.splice(0, this.tempPoints.length);
      this.barAreaColor = '#000';
      this.barAreaBorderColor = '#ddd';
      this.bindingClick = true;
      this.fontPos.splice(0, this.fontPos.length);
      this.checkPosArr.splice(0, this.checkPosArr.length);
      this.num = 1;
      this.getPictrue();
      this.text = '验证失败';
      this.showRefresh = true;
    },
    // 请求背景图片和验证图片
    getPictrue: function getPictrue() {
      var _this3 = this;

      var data = {
        captchaType: this.captchaType,
        clientUid: localStorage.getItem('point'),
        ts: Date.now() // 现在的时间戳

      };
      reqGet(data, this.baseUrl).then(function (res) {
        if (res.repCode == "0000") {
          _this3.pointBackImgBase = res.repData.originalImageBase64;
          _this3.backToken = res.repData.token;
          _this3.secretKey = res.repData.secretKey;
          _this3.poinTextList = res.repData.wordList;
          _this3.text = '请依次点击【' + _this3.poinTextList.join(",") + '】';
        } else {
          _this3.text = res.repMsg;
        } // 判断接口请求次数是否失效


        if (res.repCode == '6201') {
          _this3.pointBackImgBase = null;
        }
      });
    },
    //坐标转换函数
    pointTransfrom: function pointTransfrom(pointArr, imgSize) {
      var newPointArr = pointArr.map(function (p) {
        var x = Math.round(310 * p.x / parseInt(imgSize.imgWidth));
        var y = Math.round(155 * p.y / parseInt(imgSize.imgHeight));
        return {
          x: x,
          y: y
        };
      }); // console.log(newPointArr,"newPointArr");

      return newPointArr;
    }
  },
  watch: {
    // type变化则全面刷新
    type: {
      immediate: true,
      handler: function handler() {
        this.init();
      }
    }
  },
  mounted: function mounted() {
    // 禁止拖拽
    this.$el.onselectstart = function () {
      return false;
    };
  }
});
;// CONCATENATED MODULE: ./3rd/verifition/Verify/VerifyPoints.vue?vue&type=script&lang=js&
 /* harmony default export */ var Verify_VerifyPointsvue_type_script_lang_js_ = (VerifyPointsvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./3rd/verifition/Verify/VerifyPoints.vue





/* normalize component */
;
var VerifyPoints_component = (0,componentNormalizer/* default */.Z)(
  Verify_VerifyPointsvue_type_script_lang_js_,
  VerifyPointsvue_type_template_id_6a9b5d90_render,
  VerifyPointsvue_type_template_id_6a9b5d90_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var VerifyPoints_api; }
VerifyPoints_component.options.__file = "3rd/verifition/Verify/VerifyPoints.vue"
/* harmony default export */ var VerifyPoints = (VerifyPoints_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-4[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./3rd/verifition/Verify.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Verify 验证码组件
 * @description 分发验证码使用
 * */


/* harmony default export */ var Verifyvue_type_script_lang_js_ = ({
  name: 'Vue2Verify',
  props: {
    baseUrl: {
      type: String,
      required: true,
      default: ""
    },
    // 双语化
    locale: {
      require: false,
      type: String,
      default: function _default() {
        // 默认语言不输入为浏览器语言
        if (navigator.language) {
          var language = navigator.language;
        } else {
          var language = navigator.browserLanguage;
        }

        return language;
      }
    },
    captchaType: {
      type: String,
      required: true
    },
    figure: {
      type: Number
    },
    arith: {
      type: Number
    },
    mode: {
      type: String,
      default: 'pop'
    },
    vSpace: {
      type: Number
    },
    explain: {
      type: String
    },
    imgSize: {
      type: Object,
      default: function _default() {
        return {
          width: '310px',
          height: '155px'
        };
      }
    },
    blockSize: {
      type: Object
    },
    barSize: {
      type: Object
    }
  },
  data: function data() {
    return {
      // showBox:true,
      clickShow: false,
      // 内部类型
      verifyType: undefined,
      // 所用组件类型
      componentType: undefined,
      // 默认图片
      defaultImg: __webpack_require__(2401)
    };
  },
  mounted: function mounted() {
    this.uuid();
    this.VueScript2.load(this.$xyutil.config.jsBaseUrl + 'libs/crypto-js/crypto-js.js').then(function () {});
  },
  methods: {
    // 生成 uuid
    uuid: function uuid() {
      var s = [];
      var hexDigits = "0123456789abcdef";

      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }

      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010

      s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

      s[8] = s[13] = s[18] = s[23] = "-";
      var slider = 'slider' + '-' + s.join("");
      var point = 'point' + '-' + s.join(""); // 判断下是否存在 slider

      console.log(localStorage.getItem('slider'));

      if (!localStorage.getItem('slider')) {
        localStorage.setItem('slider', slider);
      }

      if (!localStorage.getItem('point')) {
        localStorage.setItem("point", point);
      }
    },

    /**
     * i18n
     * @description 兼容vue-i18n 调用$t来转换ok
     * @param {String} text-被转换的目标
     * @return {String} i18n的结果
     * */
    i18n: function i18n(text) {
      if (this.$t) {
        return this.$t(text);
      } else {
        // 兼容不存在的语言
        var i18n = this.$options.i18n.messages[this.locale] || this.$options.i18n.messages['en-US'];
        return i18n[text];
      }
    },

    /**
     * refresh
     * @description 刷新
     * */
    refresh: function refresh() {
      if (this.instance.refresh) {
        this.instance.refresh();
      }
    },
    closeBox: function closeBox() {
      this.clickShow = false;
      this.refresh();
    },
    show: function show() {
      if (this.mode == "pop") {
        this.clickShow = true;
      }
    }
  },
  computed: {
    instance: function instance() {
      return this.$refs.instance || {};
    },
    showBox: function showBox() {
      if (this.mode == 'pop') {
        return this.clickShow;
      } else {
        return true;
      }
    }
  },
  watch: {
    captchaType: {
      immediate: true,
      handler: function handler(captchaType) {
        switch (captchaType.toString()) {
          case 'blockPuzzle':
            this.verifyType = '2';
            this.componentType = 'VerifySlide';
            break;

          case 'clickWord':
            this.verifyType = '';
            this.componentType = 'VerifyPoints';
            break;
        }
      }
    }
  },
  components: {
    VerifySlide: VerifySlide,
    VerifyPoints: VerifyPoints
  }
});
;// CONCATENATED MODULE: ./3rd/verifition/Verify.vue?vue&type=script&lang=js&
 /* harmony default export */ var verifition_Verifyvue_type_script_lang_js_ = (Verifyvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./3rd/verifition/Verify.vue



;


/* normalize component */

var Verify_component = (0,componentNormalizer/* default */.Z)(
  verifition_Verifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Verify_api; }
Verify_component.options.__file = "3rd/verifition/Verify.vue"
/* harmony default export */ var Verify = (Verify_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(2023);
;// CONCATENATED MODULE: ./src/element/directive/el-drag-dialog.js




/* harmony default export */ var el_drag_dialog = ({
  bind: function bind(el, binding, vnode, oldVnode) {
    //弹框可拉伸最小宽高
    var minWidth = 400;
    var minHeight = 300; //初始非全屏

    var isFullScreen = false; //当前宽高

    var nowWidth = 0;
    var nowHight = 0; //当前顶部高度

    var nowMarginTop = 0;
    var nowMarginBottom = 0; //获取弹框头部（这部分可双击全屏）

    var dialogHeaderEl = el.querySelector('.el-dialog__header');
    var hasSetBodyHight = false; //弹窗

    var dragDom = el.querySelector('.el-dialog'); //给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；

    dragDom.style.overflow = "auto"; //清除选择头部文字效果

    dialogHeaderEl.onselectstart = new Function("return false"); //头部加上可拖动cursor

    dialogHeaderEl.style.cursor = 'move'; // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);

    var sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null); //头部插入最大化最小化元素

    var maxMin = document.createElement("button");
    maxMin.className += ' el-dialog__headerbtn el-dialog__minmax';
    maxMin.style.right = '45px';
    maxMin.style.color = '#909399';
    maxMin.title = '最大化';
    maxMin.innerHTML = '<i class="el-icon-full-screen" onMouseOver="this.style.color=\'#409EFF\'" onMouseOut="this.style.color=\'inherit\'"></i>';
    dialogHeaderEl.insertBefore(maxMin, dialogHeaderEl.childNodes[1]); //dragDom.querySelector('.el-dialog__body').style.padding = '20px 20px 30px';

    var moveDown = function moveDown(e) {
      // 鼠标按下，计算当前元素距离可视区的距离
      var disX = e.clientX - dialogHeaderEl.offsetLeft;
      var disY = e.clientY - dialogHeaderEl.offsetTop; // 获取到的值带px 正则匹配替换

      var styL, styT; // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px

      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
      } else {
        styL = +sty.left.replace(/\px/g, '');
        styT = +sty.top.replace(/\px/g, '');
      }

      ;

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        var l = e.clientX - disX;
        var t = e.clientY - disY; // 移动当前元素

        dragDom.style.left = "".concat(l + styL, "px");
        dragDom.style.top = "".concat(t + styT, "px"); //将此时的位置传出去
        //binding.value({x:e.pageX,y:e.pageY})
      };

      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    dialogHeaderEl.onmousedown = moveDown;
    var bodyHeight = 'auto';

    function setMaxMin() {
      if (isFullScreen == false) {
        var i = maxMin.querySelector('.el-icon-full-screen');
        i.classList.remove('el-icon-full-screen');
        i.classList.add('el-icon-crop');
        maxMin.title = '还原';
        bodyHeight = dragDom.querySelector('.el-dialog__body').offsetHeight + 'px';
        dragDom.querySelector('.el-dialog__body').style.overflowY = 'scroll';
        nowHight = dragDom.clientHeight;
        nowWidth = dragDom.clientWidth;
        nowMarginTop = dragDom.style.marginTop;
        nowMarginBottom = dragDom.style.marginBottom;
        dragDom.style.left = 0;
        dragDom.style.top = 0;
        dragDom.style.height = "100VH";
        dragDom.style.overflow = "hidden";
        dragDom.style.width = "100VW";
        dragDom.style.marginTop = 0;
        dragDom.style.marginBottom = 0;
        isFullScreen = true;
        dialogHeaderEl.style.cursor = 'initial';
        dialogHeaderEl.onmousedown = null;

        if (!hasSetBodyHight) {
          dragDom.querySelector('.el-dialog__body').style.height = 'calc(100% - ' + dialogHeaderEl.offsetHeight + 'px)';
          hasSetBodyHight = true;
        }
      } else {
        var _i = maxMin.querySelector('.el-icon-crop');

        _i.classList.remove('el-icon-crop');

        _i.classList.add('el-icon-full-screen');

        maxMin.innerHTML = '<i class="el-icon-full-screen"></i>';
        maxMin.title = '最大化';
        dragDom.style.height = 'auto';
        dragDom.style.minHeight = "10px";
        dragDom.style.width = nowWidth + 'px';
        dragDom.style.marginTop = nowMarginTop;
        dragDom.style.marginBottom = 0;
        isFullScreen = false;
        dialogHeaderEl.style.cursor = 'move';
        dialogHeaderEl.onmousedown = moveDown;
        dragDom.querySelector('.el-dialog__body').style.height = bodyHeight;
        hasSetBodyHight = false;
      }
    } //点击放大缩小效果


    maxMin.onclick = setMaxMin; //双击头部效果

    dialogHeaderEl.ondblclick = setMaxMin; //拉伸

    var resizeEl = document.createElement("div");
    dragDom.appendChild(resizeEl); //在弹窗右下角加上一个10-10px的控制块

    resizeEl.style.cursor = 'se-resize';
    resizeEl.style.position = 'absolute';
    resizeEl.style.height = '10px';
    resizeEl.style.width = '10px';
    resizeEl.style.right = '0px';
    resizeEl.style.bottom = '0px'; //鼠标拉伸弹窗

    resizeEl.onmousedown = function (e) {
      // 记录初始x位置
      var clientX = e.clientX; // 鼠标按下，计算当前元素距离可视区的距离

      var disX = e.clientX - resizeEl.offsetLeft;
      var disY = e.clientY - resizeEl.offsetTop;

      document.onmousemove = function (e) {
        e.preventDefault(); // 移动时禁用默认事件
        // 通过事件委托，计算移动的距离

        var x = e.clientX - disX + (e.clientX - clientX); //这里 由于elementUI的dialog控制居中的，所以水平拉伸效果是双倍

        var y = e.clientY - disY; //比较是否小于最小宽高

        dragDom.style.width = x > minWidth ? "".concat(x, "px") : minWidth + 'px';
        dragDom.style.height = y > minHeight ? "".concat(y, "px") : minHeight + 'px';

        if (!hasSetBodyHight) {
          dragDom.querySelector('.el-dialog__body').style.height = 'calc(100% - ' + dialogHeaderEl.offsetHeight + 'px)';
          hasSetBodyHight = true;
        }
      }; //拉伸结束


      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
});
;// CONCATENATED MODULE: ./build/index.js
function build_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function build_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? build_ownKeys(Object(source), !0).forEach(function (key) { build_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : build_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function build_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var packageInfo = __webpack_require__(4147);





 // 支持弹窗拖动与最大化

 // 引入移动事件
//  1、这里导入需要导出的组件，统一处理
// 导入./src路径下的所有组件
// 批量导入需要使用一个函数 require.context(dir,deep,matching)
// 参数：1. 目录 2. 是否加载子目录 3. 加载的正则匹配

var importFn = __webpack_require__(6501);

var components = []; // 批量注册全局组件

importFn.keys().forEach(function (key) {
  var component = importFn(key).default; //  1.1、书写Vue插件（保证只引入某一个组件时可用），https://cn.vuejs.org/v2/guide/plugins.html

  component.install = function (Vue) {
    Vue.component(component.name, component);
  }; // 导入组件


  components.push(component);
}); // Vue2Verify

Verify.install = function (Vue) {
  Vue.component(Verify.name, Verify);
};

components.push(Verify); //  2、遍历注册所有的组件（依赖），全局时使用

var install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  }); // 这里除了注册组件，还可以做一些其他的东西
  // 你可以在Vue的原型上扩展一些方法

  Vue.prototype.$xyutil = util;
  Vue.use(src);
  Vue.prototype.VueScript2 = src;
  Vue.use(vue_link2_src);
  Vue.prototype.VueLink2 = vue_link2_src;
}; // 可以根据实际情况，是否需要这段代码（CDN引入，便可使用所有组件）


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
} //  3、导出类库的版本、组件、Vue插件需要暴露的install方法


/* harmony default export */ var build = (build_objectSpread({
  version: packageInfo.version,
  build: new Date().toLocaleString(),
  install: install,
  xyutil: util,
  elDragDialog: el_drag_dialog
}, components)); //	4、使用方式
//      4.1、使用部分组件
//	        4.1.1、
//	            import { DDZComponent01 } from '……/ddztestlib01.js';
//	            局部注册：components: { ddzcomponent01: DDZComponent01 },
//	            全局注册：Vue.use(DDZComponent01); //这种写法需要对应的组件暴露install方法
//	        4.1.2、
//	            import * as ddztestlib01 from '……/ddztestlib01.js'; // 这里的书写方式应该和导出的写法有关系
//	            局部注册：components: { ddzcomponent01: ddztestlib01.DDZComponent01 },
//	            全局注册：Vue.use(ddztestlib01.DDZComponent01); //这种写法需要对应的组件暴露install方法
//	    4.2、使用类库中的所有组件
//          4.2.1、
//	            import * as ddztestlib01 from '……/ddztestlib01.js'; // 这里的书写方式应该和导出的写法有关系
//	            Vue.use(ddztestlib01); //这里的使用就是调用对象的install方法
//          4.2.2、cdn方式使用
//              <script src="……/ddztestlib01.js"></script> //如果window.Vue存在，则自动注册全部组件
//      4.3、使用systemjs异步加载（测试版本：SystemJS 3.1.6）
//          加载之后，返回的是该类库的默认导出对象：{default:{version:,install:,……}}。这种加载方式和CDN类似，如果window.Vue存在，则自动注册全部组件。所以如果window.Vue存在，返回的对象意义不大；除非window.Vue不存在。注意：组件注册成功之后在显示
//          代码示例：
//              System.import("……/ddztestlib01.js").then((result) => {
//                   // 成功加载之后，显示组件
//                   // 如果window.Vue存在,并且存在类似上面的install方法，则这里的返回结果没有什么意思
//                   // 至于如何使用，则可以根据具体情况而定，选择自己合适的
//              });
//      4.4、使用requirejs异步加载（测试版本：requirejs 2.3.6）
//          和systemjs类似，只是使用方式不同
//          代码示例：
//              requirejs.config({
//                  paths: {
//                     "ddztestlib01": tempUrl
//                  }
//              });
//              requirejs(["ddztestlib01"], (result) => {
//                  // 成功加载之后，显示组件
//              });
//      4.5、……使用模块加载器加载JS和CDN方式差不多，只是不同的加载器返回的结果不同（有支持UMD，有的不支持）
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});