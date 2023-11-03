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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMenu)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n\n\nconst buildItem = (name, description, placement) => {\n    const item = document.createElement(\"div\");\n    const itemName = document.createElement(\"h3\");\n    itemName.textContent = name;\n    item.appendChild(itemName);\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = description;\n    item.appendChild(itemDescription);\n    placement.appendChild(item);\n};\n\nfunction buildMenu(location) {\n    if (location.textContent) {\n        (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\n    }\n\n    // Title Section\n    const titleHolder = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Menu\";\n    titleHolder.appendChild(title);\n    location.appendChild(titleHolder);\n\n    // Appetizer Section\n    const appetizerHolder = document.createElement(\"div\");\n    const appetizer = document.createElement(\"h2\");\n    appetizer.textContent = \"Beginnings\";\n    appetizerHolder.appendChild(appetizer);\n    const oracles = buildItem(\n        \"Odin's Oracles\",\n        \"A platter of mini salmon and dill tarts, served with a side of rye crisps.\",\n        appetizerHolder\n    );\n    const thunderbolts = buildItem(\n        \"Thor's Thunderbolts\",\n        \"Spicy meatballs accompanied with a tangy lingonberry dip.\",\n        appetizerHolder\n    );\n    const delight = buildItem(\n        \"Frigg's Forest Delight\",\n        \"Wild mushroom and leek soup, drizzled with truffle oil.\",\n        appetizerHolder\n    );\n    const breads = buildItem(\n        \"Heimdall's Hearth Breads\",\n        \"Selection of fresh baked Nordic bread, served with whipped butter infused with herbs and sea salt.\",\n        appetizerHolder\n    );\n    const spears = buildItem(\n        \"Valkyrie's Veggie Spears\",\n        \"Crisp seasonal vegetables with a creamy blue cheese and skyr dip.\",\n        appetizerHolder\n    );\n    location.appendChild(appetizerHolder);\n\n    // Drink Section\n    const drinkHolder = document.createElement(\"div\");\n    const drink = document.createElement(\"h2\");\n    drink.textContent = \"Elixirs\";\n    drinkHolder.appendChild(drink);\n    const mule = buildItem(\n        \"Mjölnir Mule\",\n        \"A Norse twist on the classic, with aquavit, ginger beer, and fresh lime, garnished with a sprig of rosemary.\",\n        drinkHolder\n    );\n    const elixir = buildItem(\n        \"Freya's Elixir\",\n        \"A floral gin cocktail with elderflower liqueur, topped with prosecco and a hint of lemon.\",\n        drinkHolder\n    );\n    const apple = buildItem(\n        \"Asgardian Apple\",\n        \"A mix of apple brandy, cinnamon, and sparkling cider, served on ice with a slice of dehydrated apple.\",\n        drinkHolder\n    );\n    const bliss = buildItem(\n        \"Bifrost Bliss\",\n        \"A vibrant cocktail representing the rainbow bridge, layered with blue curaçao, grenadine, and orange juice.\",\n        drinkHolder\n    );\n    const trick = buildItem(\n        \"Loki's Trick\",\n        \"A mysterious, smoky cocktail with mezcal, blackberries, and a hint of mint.\",\n        drinkHolder\n    );\n    location.appendChild(drinkHolder);\n\n    // Dessert Section\n    const dessertHolder = document.createElement(\"div\");\n    const dessert = document.createElement(\"h2\");\n    dessert.textContent = \"Sweet Finishes\";\n    dessertHolder.appendChild(dessert);\n    const triffle = buildItem(\n        \"Yggdrasil Trifle\",\n        \"Layers of sponge cake, berry compote, and rich cream, representing the layers of the World Tree.\",\n        dessertHolder\n    );\n    const tresses = buildItem(\n        \"Sif's Golden Tresses\",\n        \"Delicate saffron buns, served warm with a side of clotted cream.\",\n        dessertHolder\n    );\n    const blessing = buildItem(\n        \"Baldur's Blessing\",\n        \"A light honey and almond cake, garnished with edible flowers.\",\n        dessertHolder\n    );\n    const bites = buildItem(\n        \"Niflheim Frost Bites\",\n        \"Icy lemon and berry sorbet orbs, served in a chilled bowl.\",\n        dessertHolder\n    );\n    const roulade = buildItem(\n        \"Ragnarok Roulade\",\n        \"A decadent chocolate roulade filled with cherry and whipped cream, symbolizing the end of the world's indulgence.\",\n        dessertHolder\n    );\n    location.appendChild(dessertHolder);\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;