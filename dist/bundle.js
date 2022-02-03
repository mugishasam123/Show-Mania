/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  margin: 0;\\r\\n  justify-content: space-around;\\r\\n  padding-left: 0;\\r\\n  padding-top: 17px;\\r\\n}\\r\\n\\r\\nul li {\\r\\n  align-items: center;\\r\\n  font-size: 18px;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  background: #28ac73;\\r\\n  height: 60px;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  border: 2px #a0e78f;\\r\\n  border-radius: 50%;\\r\\n  padding: 8px;\\r\\n  width: fit-content;\\r\\n  background: #a0e78f;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background: grey;\\r\\n  margin-top: 42px;\\r\\n  padding: 18px;\\r\\n}\\r\\n\\r\\nfooter > h4 {\\r\\n  text-align: center;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.popup-section {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  right: 0;\\r\\n  background: rgb(193 199 208 / 85%);\\r\\n  width: 100%;\\r\\n  overflow: auto;\\r\\n  z-index: 1;\\r\\n  backdrop-filter: blur(4px);\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.closebtn:hover {\\r\\n  color: blue;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-window {\\r\\n  z-index: 2;\\r\\n  border-radius: 1vw;\\r\\n  background-color: #fff;\\r\\n  width: 30%;\\r\\n  padding: 18px;\\r\\n  position: relative;\\r\\n  top: 20px;\\r\\n  left: 35%;\\r\\n  margin-bottom: 70px;\\r\\n}\\r\\n\\r\\n.show-img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.language-rating {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.title-close {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.container-movies {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  gap: 20px;\\r\\n  padding: 80px;\\r\\n  margin-top: 40px;\\r\\n}\\r\\n\\r\\n.show-card {\\r\\n  background: grey;\\r\\n  border-radius: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 7px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.show-card > img {\\r\\n  width: 100%;\\r\\n  height: 80%;\\r\\n}\\r\\n\\r\\n.name-likes {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.commentbtn {\\r\\n  margin: 30px 0 0;\\r\\n  border: none;\\r\\n  color: #000407;\\r\\n  font-size: 15px;\\r\\n  border-radius: 20% 20% 0 0;\\r\\n  cursor: pointer;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.comments-counter {\\r\\n  color: #242b97;\\r\\n  text-align: center;\\r\\n  font-size: 23px;\\r\\n}\\r\\n\\r\\n.form-title {\\r\\n  color: #242b97;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comments-list {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-items: center;\\r\\n  gap: 10px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.comment-item {\\r\\n  background: #ced1d0;\\r\\n  padding: 15px;\\r\\n  border-left: 5px solid #038f92;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.comment-item > p {\\r\\n  color: #2b1bb0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.submit-comment {\\r\\n  background: #038f92;\\r\\n  color: white;\\r\\n  width: 30%;\\r\\n  font-size: 16px;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.submit-comment:hover {\\r\\n  background: #0d6a6c;\\r\\n}\\r\\n\\r\\nform > input,\\r\\ntextarea {\\r\\n  border: 3px solid #435353;\\r\\n  border-radius: 4px;\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\nform > input:focus,\\r\\ntextarea:focus {\\r\\n  border: 3px solid #06c4c7;\\r\\n}\\r\\n\\r\\n.likebtn:hover {\\r\\n  color: yellow;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.likebtn-number {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 5px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/css/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _modules_api_showData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api/showData.js */ \"./src/js/modules/api/showData.js\");\n\n\n\n(0,_modules_api_showData_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://webpack-setup/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/api/getLikes.js":
/*!****************************************!*\
  !*** ./src/js/modules/api/getLikes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/likes';\n\n  const likesRequest = await fetch(likesUrl);\n  const likes = await likesRequest.json();\n  return likes;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://webpack-setup/./src/js/modules/api/getLikes.js?");

/***/ }),

/***/ "./src/js/modules/api/postLikes.js":
/*!*****************************************!*\
  !*** ./src/js/modules/api/postLikes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\nconst postLikes = async (id) => {\n  const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/likes';\n  const request = await fetch(likesUrl, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n    }),\n    headers: {\n      'content-type': 'application/json',\n    },\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n\n//# sourceURL=webpack://webpack-setup/./src/js/modules/api/postLikes.js?");

/***/ }),

/***/ "./src/js/modules/api/showData.js":
/*!****************************************!*\
  !*** ./src/js/modules/api/showData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup.js */ \"./src/js/modules/popup.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/js/modules/api/getLikes.js\");\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postLikes.js */ \"./src/js/modules/api/postLikes.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\nconst BaseUrl = 'https://api.tvmaze.com/shows';\n\nconst ShowDetails = async () => {\n  const containersShows = document.querySelector('.container-movies');\n  const shows = await fetch(BaseUrl);\n  const result = await shows.json();\n  const likesDta = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  let showsCounter = 0;\n  const allItemsCounter = () => {\n    showsCounter += 1;\n    return showsCounter;\n  };\n\n  for (let i = 0; i < 9 && i < result.length; i += 1) {\n    const ShowList = `\n    <img src=\"${result[i].image.original}\" alt=\"\">\n   <div class=\"name-likes\">\n      <h3>${result[i].name}</h3>\n      <div class=\"likebtn-number\">\n      <i class=\"likebtn fa fa-thumbs-up\"></i>\n      <h3 class=\"like-part\"></h3>\n      </div>\n      \n   </div>\n   <button class=\"commentbtn\">Comments</button>`;\n    const card = document.createElement('div');\n    card.classList.add('show-card');\n    card.innerHTML = ShowList;\n    containersShows.appendChild(card);\n    allItemsCounter();\n  }\n\n  const pop = new _popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  const commentBtns = document.querySelectorAll('.commentbtn');\n  commentBtns.forEach((buttonItem, index) => {\n    buttonItem.addEventListener('click', () => {\n      const ida = index + 1;\n\n      pop.popupDetails(ida);\n    });\n  });\n\n  const likeSelect = document.querySelectorAll('.like-part');\n  const newLikes = likesDta.shift();\n\n  likeSelect.forEach((selectItem, selectIndex) => {\n    const rettrivedLikes = likesDta.find((item) => item.item_id === selectIndex + 1);\n    if (rettrivedLikes) {\n      selectItem.textContent = `${rettrivedLikes.likes} likes`;\n    } else {\n      selectItem.textContent = '0 likes';\n    }\n  });\n\n  const updateLikes = async (likt) => {\n    const likeUpdate = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const newRettrivedLikes = likeUpdate.find((item) => item.item_id === likt);\n\n    likeSelect[likt - 1].textContent = `${newRettrivedLikes.likes} likes`;\n  };\n  const renderLikes = async (likt) => {\n    await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(likt);\n    updateLikes(likt);\n  };\n\n  const likeBtns = document.querySelectorAll('.likebtn');\n  likeBtns.forEach((likeBtnItem, likaIndex) => {\n    likeBtnItem.addEventListener('click', () => {\n      renderLikes(likaIndex + 1);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowDetails);\n\n\n//# sourceURL=webpack://webpack-setup/./src/js/modules/api/showData.js?");

/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Popup)\n/* harmony export */ });\nclass Popup {\n  constructor() {\n    this.popSection = document.querySelector('.popup-section');\n  }\n\n  popupDetails = async (id) => {\n    this.popSection.style.display = 'grid';\n    const showUrl = `https://api.tvmaze.com/shows/${id}`;\n    const request = await fetch(showUrl);\n    const data = await request.json();\n    const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/comments?item_id=${id}`;\n    const commentRequest = await fetch(commentUrl);\n\n    const comments = await commentRequest.json();\n    let commentsCount = 0;\n    const commentCounter = (comenta) => {\n      if (comenta.length > 0) {\n        commentsCount = comenta.length;\n      } else {\n        commentsCount = 0;\n      }\n      return commentsCount;\n    };\n\n    const commentNumber = commentCounter(comments);\n\n    const popupData = `\n      <div class=\"popup-window\">\n      <div class=\"title-close\">\n        <h2 class=\"show-title\">${data.name}</h2>\n        <i class=\"closebtn fa fa-close\"></i>\n      </div>\n   \n      <img class=\"show-img\" src=\"${data.image.original}\" alt=\"\" />\n      <p class=\"show-summary\">\n        ${data.summary}\n      </p>\n      <div class=\"language-rating\">\n        <h3 class=\"language\">Language: ${data.language}</h3>\n        <h3 class=\"rating\">Rating: ${data.rating.average}</h3>\n      </div>\n      <h3 class=\"premier-date\">premiered on ${data.premiered}</h3>\n   \n\n    <h3 class=\"comments-counter\">Comments(${commentNumber})</h3>\n    <ul class=\"comments-list\">\n     \n    \n    </ul>\n    <h3 class=\"form-title\">Add new Comment</h3>\n    <form class=\"myForm\">\n      <input id=\"name\" type=\"text\" placeholder=\"Your Name\" value=\"\" />\n      <textarea name=\"\" id=\"comment\" value=\"\"></textarea>\n      <button class=\"submit-comment\" type=\"submit\">Submit</button>\n    </form>\n    </div>\n    `;\n    this.popSection.innerHTML = popupData;\n    const commentList = document.querySelector('.comments-list');\n\n    if (comments.length > 0) {\n      comments.forEach((element) => {\n        const commentData = `<p>${element.creation_date}</p>\n        <p>${element.username} : ${element.comment}</p>\n        `;\n\n        const listNode = document.createElement('li');\n        listNode.classList.add('comment-item');\n        listNode.innerHTML = commentData;\n        commentList.appendChild(listNode);\n      });\n    } else {\n      commentList.innerHTML = 'No comments Available';\n    }\n\n    const updateComments = async (id) => {\n      const newCommentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/comments?item_id=${id}`;\n      const newCommentRequest = await fetch(newCommentUrl);\n      const newComments = await newCommentRequest.json();\n\n      const itemIndex = newComments.length - 1;\n\n      const commentData = `<p>${newComments[itemIndex].creation_date}</p>\n          <p>${newComments[itemIndex].username} : ${newComments[itemIndex].comment}</p>\n          `;\n\n      const listNode = document.createElement('li');\n      listNode.classList.add('comment-item');\n      listNode.innerHTML = commentData;\n      commentList.appendChild(listNode);\n      const newtot = document.querySelector('.comments-counter');\n      const newNumber = commentCounter(newComments);\n      newtot.textContent = `Comments(${newNumber})`;\n    };\n\n    const postComment = async (formdata) => {\n      const postUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5Ap1XN8WUsuZk6doKhi8/comments';\n      await fetch(postUrl, {\n        method: 'POST',\n        body: JSON.stringify(formdata),\n        headers: {\n          'content-type': 'application/json',\n        },\n      });\n      updateComments(id);\n    };\n\n    const SubmitButtons = document.querySelectorAll('.submit-comment');\n    const forma = document.querySelector('.myForm');\n    SubmitButtons.forEach((buttonComment) => {\n      buttonComment.addEventListener('click', (e) => {\n        const user = document.querySelector('#name');\n        const userComent = document.querySelector('#comment');\n        e.preventDefault();\n        const formdata = {\n          item_id: id,\n          username: user.value,\n          comment: userComent.value,\n        };\n\n        postComment(formdata);\n\n        forma.reset();\n      });\n    });\n\n    const closeBt = document.querySelector('.closebtn');\n    closeBt.addEventListener('click', () => {\n      this.popSection.style.display = 'none';\n    });\n  };\n}\n\n\n//# sourceURL=webpack://webpack-setup/./src/js/modules/popup.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;