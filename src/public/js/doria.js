(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["doria"] = factory();
	else
		root["doria"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/doria.js":
/*!**********************!*\
  !*** ./src/doria.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _template = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\nvar _doria_banner_tpl = _interopRequireDefault(__webpack_require__(/*! ./templates/doria_banner_tpl.html */ \"./src/templates/doria_banner_tpl.html\"));\n\nvar _doria_settings_tpl = _interopRequireDefault(__webpack_require__(/*! ./templates/doria_settings_tpl.html */ \"./src/templates/doria_settings_tpl.html\"));\n\n__webpack_require__(/*! ./styles/base.scss */ \"./src/styles/base.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction deleteCookie(name) {\n  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';\n}\n\nfunction saveConfig() {\n  let config = {\n    isAccepted: this.isAccepted,\n    acceptedCookies: []\n  };\n\n  for (let cookieName in this.cookies) {\n    if (this.cookies[cookieName].accepted) {\n      config.acceptedCookies.push(cookieName);\n    }\n  }\n\n  localStorage.setItem('doria__settings', JSON.stringify(config));\n}\n\nfunction restoreConfig() {\n  let config = localStorage.getItem('doria__settings');\n\n  if (!config) {\n    return;\n  }\n\n  config = JSON.parse(config);\n  this.isAccepted = config.isAccepted;\n  let acceptedCookie = undefined;\n\n  for (let i = 0; i < config.acceptedCookies.length; i++) {\n    acceptedCookie = config.acceptedCookies[i];\n\n    if (acceptedCookie in this.cookies) {\n      this.cookies[acceptedCookie].accepted = true;\n\n      if (this.cookies[acceptedCookie].handler) {\n        this.cookies[acceptedCookie].handler();\n      }\n    }\n  }\n}\n\nfunction hide(elementClass) {\n  document.getElementsByClassName(elementClass)[0].classList.add(elementClass + '--hidden');\n}\n\nfunction show(elementClass) {\n  document.getElementsByClassName(elementClass)[0].classList.remove(elementClass + '--hidden');\n}\n\nfunction onAcceptCookies(event) {\n  let selectedCookies = [];\n  let cookie_name = '';\n  let cookie = undefined;\n  console.log('ACCPET');\n  console.log(event.target);\n\n  for (let i = 0; i < event.target.length; i++) {\n    cookie = event.target[i];\n    cookie_name = cookie.name;\n    console.log(cookie);\n    console.log(cookie_name);\n\n    if (cookie_name in this.cookies) {\n      if (cookie.checked === true && this.cookies[cookie_name].handler) {\n        this.cookies[cookie_name].accepted = true;\n\n        if (this.cookies[cookie_name]) {\n          this.cookies[cookie_name].handler();\n        }\n\n        selectedCookies.push(cookie_name);\n      }\n\n      if (cookie.checked === false) {\n        this.cookies[cookie_name].accepted = false;\n\n        for (let j = 0; j < this.cookies[cookie_name].cookies.length; j++) {\n          deleteCookie.bind(this)(this.cookies[cookie_name].cookies[j]);\n        }\n      }\n    }\n  }\n\n  this.isAccepted = true;\n  saveConfig.bind(this)();\n  this.hideSettings();\n\n  if (this.onAcceptFunction) {\n    this.onAcceptFunction();\n  }\n}\n\nclass CookieBox {\n  constructor() {\n    this.cookies = {};\n  }\n\n  acceptOnNavigation() {\n    saveConfig.bind(this)();\n  }\n\n  addCookieSettings(key, label, description, cookies, mandatory = false) {\n    this.cookies[key] = {\n      label,\n      description,\n      cookies,\n      mandatory\n    };\n    this.cookies[key].accepted = true;\n  }\n\n  bake() {\n    restoreConfig.bind(this)();\n\n    if (!this.isAccepted && !this.options.onlySettings) {\n      (0, _template.render)('doria_banner', 'doria_banner_content', _doria_banner_tpl.default, {\n        doria: this\n      });\n      this.showBanner();\n    }\n\n    (0, _template.render)('doria_settings', 'doria_settings_content', _doria_settings_tpl.default, {\n      doria: this\n    });\n    let doriaAcceptForm = document.getElementById('doria_accept_form');\n\n    if (doriaAcceptForm) {\n      doriaAcceptForm.onsubmit = event => {\n        event.preventDefault();\n        onAcceptCookies.bind(this)(event);\n        this.hideBanner();\n        return false;\n      };\n    }\n\n    let doriaSettingsBtn = document.getElementById('doria_settings');\n\n    if (doriaSettingsBtn) {\n      doriaSettingsBtn.onclick = event => {\n        event.preventDefault();\n        this.showSettings();\n      };\n    }\n\n    if (this.options.onlySettings && !this.isAccepted) {\n      this.showSettings();\n    }\n  }\n\n  hideBanner() {\n    if (this.options.onlySettings) {\n      return;\n    }\n\n    hide('doriabanner');\n  }\n\n  hideSettings() {\n    hide('doriasettings__wrapper');\n  }\n\n  on(key, f) {\n    this.cookies[key].handler = f;\n  }\n\n  onAccept(onAcceptFunction) {\n    this.onAcceptFunction = onAcceptFunction;\n  }\n\n  setOptions(options = {}) {\n    this.options = options;\n  }\n\n  showBanner() {\n    if (this.options.onlySettings) {\n      return;\n    }\n\n    show('doriabanner');\n  }\n\n  showSettings() {\n    show('doriasettings__wrapper');\n  }\n\n}\n\nvar _default = new CookieBox();\n\nexports.default = _default;\n\n//# sourceURL=webpack://doria/./src/doria.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.loadScript = exports.prepare = void 0;\n\nvar _doria = _interopRequireDefault(__webpack_require__(/*! ./doria.js */ \"./src/doria.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nlet loadScript = src => {\n  let script = document.createElement('script');\n  script.src = src;\n  document.body.appendChild(script);\n  return new Promise((resolve, reject) => {\n    script.addEventListener('load', function () {\n      resolve();\n    });\n  });\n};\n\nexports.loadScript = loadScript;\n\nlet prepare = options => {\n  _doria.default.setOptions(options);\n\n  return _doria.default;\n};\n\nexports.prepare = prepare;\n\n//# sourceURL=webpack://doria/./src/index.js?");

/***/ }),

/***/ "./src/styles/base.scss":
/*!******************************!*\
  !*** ./src/styles/base.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://doria/./src/styles/base.scss?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = void 0;\n\nlet render = (templateId, destination, content, data) => {\n  let cache = {};\n\n  let tmpl = (str, data) => {\n    // Figure out if we're getting a template, or if we need to\n    // load the template - and be sure to cache the result.\n    let fn = !/\\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str) ? document.getElementById(str).innerHTML : content) : // Generate a reusable function that will serve as a template\n    // generator (and which will be cached).\n    new Function(\"obj\", \"var p=[],print=function(){p.push.apply(p,arguments);};\" + // Introduce the data as local variables using with(){}\n    \"with(obj){p.push('\" + // Convert the template into pure JavaScript\n    str.replace(/[\\r\\t\\n]/g, \" \").split(\"<%\").join(\"\\t\").replace(/((^|%>)[^\\t]*)'/g, \"$1\\r\").replace(/\\t=(.*?)%>/g, \"',$1,'\").split(\"\\t\").join(\"');\").split(\"%>\").join(\"p.push('\").split(\"\\r\").join(\"\\\\'\") + \"');}return p.join('');\"); // Provide some basic currying to the user\n\n    return data ? fn(data) : fn;\n  };\n\n  let container = document.getElementById(destination);\n\n  if (!container) {\n    container = document.createElement('div');\n    container.setAttribute('id', destination);\n    document.body.appendChild(container);\n  }\n\n  container.innerHTML = tmpl(templateId, data);\n};\n\nexports.render = render;\n\n//# sourceURL=webpack://doria/./src/template.js?");

/***/ }),

/***/ "./src/templates/doria_banner_tpl.html":
/*!*********************************************!*\
  !*** ./src/templates/doria_banner_tpl.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"doriabanner <% if (doria.isAccepted) { %> doriabanner--hidden <% } %>\\\"> <div class=doriabanner__description><%=doria.options.bannerDescription%></div> <div class=doriabanner__buttons> <button id=doria_settings class=\\\"doriabanner__button doriabanner__settingsbtn\\\"><%=doria.options.settingsButtonLabel%></button> <button class=\\\"doriabanner__button doriabanner__closebtn\\\"><%=doria.options.closeButtonLabel%></button> </div> </div> \";\n\n//# sourceURL=webpack://doria/./src/templates/doria_banner_tpl.html?");

/***/ }),

/***/ "./src/templates/doria_settings_tpl.html":
/*!***********************************************!*\
  !*** ./src/templates/doria_settings_tpl.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"doriasettings__wrapper doriasettings__wrapper--hidden\\\"> <div class=doriasettings> <div class=doriasettings__title><%=doria.options.title%></div> <div class=doriasettings__subtitle><%=doria.options.subtitle%></div> <form class=doriasettings__form id=doria_accept_form method=POST> <% for (var cookie in doria.cookies) { %> <div class=checkbox__container> <div class=checkbox__wrapper> <label for=\\\"doria_<%=cookie%>\\\" class=checkbox__input> <input class=checkbox--custom type=checkbox id=\\\"doria_<%=cookie%>\\\" name=\\\"<%=cookie%>\\\" value=\\\"<%=cookie%>\\\" <% if (doria.cookies[cookie].accepted) { %> checked=checked <% } %> <% if (doria.cookies[cookie].mandatory) { %> checked=checked disabled=disabled <% } %>/> <span class=checkbox__value></span> </label> </div> <div class=checkbox__content> <label class=checkbox__label for=\\\"doria_<%=cookie%>\\\"><%=doria.cookies[cookie].label%></label> <p class=checkbox__description><%=doria.cookies[cookie].description%></p> </div> </div> <% } %> <div class=doriasettings__beforeaccept><%=doria.options.beforeAccept%></div> <input class=\\\"doriasettings__button doriasettings__submitbtn\\\" type=submit value=\\\"<%=doria.options.acceptButtonLabel%>\\\"> </form> </div> </div> \";\n\n//# sourceURL=webpack://doria/./src/templates/doria_settings_tpl.html?");

/***/ })

/******/ });
});