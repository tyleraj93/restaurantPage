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

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction clearContent(location) {\n    if (location.textContent) {\n        location.textContent = \"\";\n    }\n}\n\n//# sourceURL=webpack://restaurantpage/./src/clearContent.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMenu)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _images_odinsOracles_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/odinsOracles.png */ \"./src/images/odinsOracles.png\");\n/* harmony import */ var _images_bread_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bread.png */ \"./src/images/bread.png\");\n/* harmony import */ var _images_lokisTrick_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lokisTrick.png */ \"./src/images/lokisTrick.png\");\n/* harmony import */ var _images_mjolnirMule_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mjolnirMule.png */ \"./src/images/mjolnirMule.png\");\n/* harmony import */ var _images_triffle_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/triffle.png */ \"./src/images/triffle.png\");\n/* harmony import */ var _images_roulade_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/roulade.png */ \"./src/images/roulade.png\");\n\n\n\n\n\n\n\n\nconst buildItem = (name, description, placement) => {\n    const item = document.createElement(\"div\");\n    item.className = \"item\";\n    const itemName = document.createElement(\"h3\");\n    itemName.textContent = name;\n    item.appendChild(itemName);\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = description;\n    item.appendChild(itemDescription);\n    placement.appendChild(item);\n};\n    \nconst buildImage = (imageSource, location) => {\n    const imageHolder = document.createElement(\"div\");\n    const itemImage = document.createElement(\"img\");\n    itemImage.src = imageSource\n    itemImage.classList = \"itemImage\";\n    imageHolder.appendChild(itemImage);\n    location.appendChild(imageHolder);\n}\n\nfunction buildMenu(location) {\n    if (location.textContent) {\n        (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\n    }\n\n    // Title Section\n    const titleHolder = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Menu\";\n    titleHolder.appendChild(title);\n    location.appendChild(titleHolder);\n\n    // Appetizer Section\n    const appetizerHolder = document.createElement(\"div\");\n    const appetizer = document.createElement(\"h2\");\n    appetizer.textContent = \"Beginnings\";\n    appetizerHolder.appendChild(appetizer);\n    const oraclesImage = buildImage(_images_odinsOracles_png__WEBPACK_IMPORTED_MODULE_1__, appetizerHolder);\n    const oracles = buildItem(\n        \"Odin's Oracles\",\n        \"A platter of mini salmon and dill tarts, served with a side of rye crisps.\",\n        appetizerHolder\n    );\n    const thunderbolts = buildItem(\n        \"Thor's Thunderbolts\",\n        \"Spicy meatballs accompanied with a tangy lingonberry dip.\",\n        appetizerHolder\n    );\n    const delight = buildItem(\n        \"Frigg's Forest Delight\",\n        \"Wild mushroom and leek soup, drizzled with truffle oil.\",\n        appetizerHolder\n    );\n    const breadsImage = buildImage(_images_bread_png__WEBPACK_IMPORTED_MODULE_2__, appetizerHolder);\n    const breads = buildItem(\n        \"Heimdall's Hearth Breads\",\n        \"Selection of fresh baked Nordic bread, served with whipped butter infused with herbs and sea salt.\",\n        appetizerHolder\n    );\n    const spears = buildItem(\n        \"Valkyrie's Veggie Spears\",\n        \"Crisp seasonal vegetables with a creamy blue cheese and skyr dip.\",\n        appetizerHolder\n    );\n    location.appendChild(appetizerHolder);\n\n    // Drink Section\n    const drinkHolder = document.createElement(\"div\");\n    const drink = document.createElement(\"h2\");\n    drink.textContent = \"Elixirs\";\n    drinkHolder.appendChild(drink);\n    const muleImage = buildImage(_images_mjolnirMule_png__WEBPACK_IMPORTED_MODULE_4__, drinkHolder);\n    const mule = buildItem(\n        \"Mjölnir Mule\",\n        \"A Norse twist on the classic, with aquavit, ginger beer, and fresh lime, garnished with a sprig of rosemary.\",\n        drinkHolder\n    );\n    const elixir = buildItem(\n        \"Freya's Elixir\",\n        \"A floral gin cocktail with elderflower liqueur, topped with prosecco and a hint of lemon.\",\n        drinkHolder\n    );\n    const apple = buildItem(\n        \"Asgardian Apple\",\n        \"A mix of apple brandy, cinnamon, and sparkling cider, served on ice with a slice of dehydrated apple.\",\n        drinkHolder\n    );\n    const bliss = buildItem(\n        \"Bifrost Bliss\",\n        \"A vibrant cocktail representing the rainbow bridge, layered with blue curaçao, grenadine, and orange juice.\",\n        drinkHolder\n    );\n    const trickImage = buildImage(_images_lokisTrick_png__WEBPACK_IMPORTED_MODULE_3__, drinkHolder);\n    const trick = buildItem(\n        \"Loki's Trick\",\n        \"A mysterious, smoky cocktail with mezcal, blackberries, and a hint of mint.\",\n        drinkHolder\n    );\n    location.appendChild(drinkHolder);\n\n    // Dessert Section\n    const dessertHolder = document.createElement(\"div\");\n    const dessert = document.createElement(\"h2\");\n    dessert.textContent = \"Sweet Finishes\";\n    dessertHolder.appendChild(dessert);\n    const triffleImage = buildImage(_images_triffle_png__WEBPACK_IMPORTED_MODULE_5__, dessertHolder);\n    const triffle = buildItem(\n        \"Yggdrasil Trifle\",\n        \"Layers of sponge cake, berry compote, and rich cream, representing the layers of the World Tree.\",\n        dessertHolder\n    );\n    const tresses = buildItem(\n        \"Sif's Golden Tresses\",\n        \"Delicate saffron buns, served warm with a side of clotted cream.\",\n        dessertHolder\n    );\n    const blessing = buildItem(\n        \"Baldur's Blessing\",\n        \"A light honey and almond cake, garnished with edible flowers.\",\n        dessertHolder\n    );\n    const bites = buildItem(\n        \"Niflheim Frost Bites\",\n        \"Icy lemon and berry sorbet orbs, served in a chilled bowl.\",\n        dessertHolder\n    );\n    const rouladeImage = buildImage(_images_roulade_png__WEBPACK_IMPORTED_MODULE_6__, dessertHolder);\n    const roulade = buildItem(\n        \"Ragnarok Roulade\",\n        \"A decadent chocolate roulade filled with cherry and whipped cream, symbolizing the end of the world's indulgence.\",\n        dessertHolder\n    );\n    location.appendChild(dessertHolder);\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/images/bread.png":
/*!******************************!*\
  !*** ./src/images/bread.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"318370bf4dabb5ac1aeb.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/bread.png?");

/***/ }),

/***/ "./src/images/lokisTrick.png":
/*!***********************************!*\
  !*** ./src/images/lokisTrick.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd781ca2ef4befb33050.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/lokisTrick.png?");

/***/ }),

/***/ "./src/images/mjolnirMule.png":
/*!************************************!*\
  !*** ./src/images/mjolnirMule.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfaac6627868835766dc.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/mjolnirMule.png?");

/***/ }),

/***/ "./src/images/odinsOracles.png":
/*!*************************************!*\
  !*** ./src/images/odinsOracles.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f0ba9f9a24b92ffd145e.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/odinsOracles.png?");

/***/ }),

/***/ "./src/images/roulade.png":
/*!********************************!*\
  !*** ./src/images/roulade.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dce02239bc618caa5037.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/roulade.png?");

/***/ }),

/***/ "./src/images/triffle.png":
/*!********************************!*\
  !*** ./src/images/triffle.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9352e64ac48e87d3f0d5.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/triffle.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;