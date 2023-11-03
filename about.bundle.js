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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildAbout)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n\n\nconst buildHours = (day, time, placement) => {\n    const hours = document.createElement(\"p\");\n    hours.textContent = `${day}: ${time}`;\n    placement.appendChild(hours);\n}\n\nfunction buildAbout(location) {\n    if (location.textContent) {\n        (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\n    }\n\n    // Title section\n    const titleHolder = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    title.textContent = \"About us\";\n    titleHolder.appendChild(title);\n    location.appendChild(titleHolder);\n\n    // Number Section\n    const numberHolder = document.createElement(\"div\");\n    const number = document.createElement(\"h2\");\n    number.textContent = \"Phone Number: \"\n    numberHolder.appendChild(number);\n    const phone = document.createElement(\"p\");\n    phone.textContent = \"666-555-4444\";\n    numberHolder.appendChild(phone);\n    location.appendChild(numberHolder);\n\n    // Hours section\n    const hoursHolder = document.createElement(\"div\");\n    const hours = document.createElement(\"h2\");\n    hours.textContent = \"Hours\";\n    hoursHolder.appendChild(hours);\n    const sunday = buildHours(\"Sunday\" , \"4pm - 10pm\", hoursHolder);\n    const monday = buildHours(\"Monday\", \"6pm - 12am\", hoursHolder);\n    const tuesday = buildHours(\"Tuesday\", \"6pm - 12am\", hoursHolder);\n    const wednesday = buildHours(\"Wednesday\", \"6pm - 12am\", hoursHolder);\n    const thursday = buildHours(\"Thurday\", \"6pm - 12am\", hoursHolder);\n    const friday = buildHours(\"Friday\", \"6pm - 2am\", hoursHolder);\n    const saturday = buildHours(\"Saturday\", \"4pm - 2am\", hoursHolder);\n    location.appendChild(hoursHolder);\n\n    // Location section, not the parameter\n    const locationHolder = document.createElement(\"div\");\n    const locationText = document.createElement(\"h2\");\n    locationText.textContent = \"Location\";\n    locationHolder.appendChild(locationText);\n    const address = document.createElement(\"p\");\n    address.innerHTML =\n        \"Asgardian Plaza, <br>Valhalla Avenue, <br>Midgard District, <br>Thornton, <br>Norsewood, <br>9X4 2YZ <br>Realm of Legends, Northern Isles\";\n    locationHolder.appendChild(address);\n    location.appendChild(locationHolder);\n}\n\n//# sourceURL=webpack://restaurantpage/./src/about.js?");

/***/ }),

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction clearContent(location) {\n    if (location.textContent) {\n        location.textContent = \"\";\n    }\n}\n\n//# sourceURL=webpack://restaurantpage/./src/clearContent.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/about.js");
/******/ 	
/******/ })()
;