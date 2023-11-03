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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildHome)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _images_inside_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/inside.png */ \"./src/images/inside.png\");\n\n\n\nconst buildReview = (reviewer, score, remarks, placement) => {\n    const holder = document.createElement(\"div\");\n    holder.className = \"review\";\n    const name = document.createElement(\"p\");\n    name.textContent = reviewer;\n    holder.appendChild(name);\n    const rating = document.createElement(\"p\");\n    rating.textContent = \"⭐\".repeat(score);\n    holder.appendChild(rating);\n    const review = document.createElement(\"p\");\n    review.textContent = remarks;\n    holder.appendChild(review);\n    placement.appendChild(holder);\n}\n\n// Build a home section in a given parameter\n\nfunction buildHome(location) {\n    if (location.textContent) {\n        (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\n    };\n    // Name section\n    const titleHolder = document.createElement(\"div\");\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.textContent = \"Loki's Lair\";\n    titleHolder.appendChild(restaurantName);\n    location.appendChild(titleHolder);\n\n    // Image of restaurant inside\n    const imageHolder = document.createElement(\"div\");\n    const restaurantInside = document.createElement(\"img\");\n    restaurantInside.src = _images_inside_png__WEBPACK_IMPORTED_MODULE_1__;\n    restaurantInside.classList = \"restaurantImage\";\n    imageHolder.appendChild(restaurantInside);\n    location.appendChild(imageHolder);\n\n    // Bio Section\n    const bioHolder = document.createElement(\"div\");\n    const bioHeader = document.createElement(\"h2\");\n    bioHeader.textContent = \"Loki's Lair: A Norse Culinary Voyage\";\n    bioHolder.appendChild(bioHeader);\n    const bio = document.createElement(\"p\");\n    bio.textContent = \"Nestled in the heart of Norsewood's historic Midgard District, Loki's Lair invites guests on an epicurean journey through the legends of the North. Inspired by the tales of gods, giants, and heroes, our establishment seeks to capture the audacious spirit of the Vikings in every dish. Founder and head chef, Bjorn Eriksson, traces his lineage directly to the seafaring Norsemen of old. With a passion for both history and gastronomy, Bjorn embarked on a quest to revive the flavors of ancient Scandinavia. At Loki's Lair, he combines time-honored cooking techniques with modern flair, crafting dishes that tell a story of both past and present. Our menu, divided into \\\"Start Feasts,\\\" \\\"Mead Mixes,\\\" and \\\"Sweet Finishes,\\\" is a testament to the rich tapestry of Norse culture. From Odin's Oracles to Ragnarok Roulade, every offering seeks to transport diners to the great halls of Valhalla, where heroes feast and mead flows freely. The ambiance, too, is meticulously curated. Enter through a grand wooden doorway, intricately carved with runes and mythical beasts. Dine beneath the glow of wrought iron chandeliers, their flames dancing in reflection on polished horn tableware. And, if you listen closely, the haunting strains of a distant lyre might just reach your ears, completing the enchantment. At Loki's Lair, we don't just serve meals; we serve memories. Whether you're a lover of history, a culinary enthusiast, or simply seeking a unique dining experience, join us for a taste of the extraordinary.\"\n    bioHolder.appendChild(bio);\n    location.appendChild(bioHolder);\n\n    // Review section\n    const reviewHolder = document.createElement(\"div\");\n    const review1 = buildReview(\n        \"Olaf K.\",\n        5,\n        \"As a fan of Norse mythology, I couldn't resist visiting Loki's Lair. The Heimdall's Hearth Breads were a comforting start, and I was thoroughly impressed by the Niflheim Frost Bites – refreshing and innovative. But what really stole the show was Loki's Trick cocktail. Smoky, fruity, with a hint of mint – it's a drink fit for the gods! Highly recommend.\",\n        reviewHolder\n    );\n    const review2 = buildReview(\n        \"Astrid F.\",\n        4,\n        \"I love trying unique dessert dishes, and the Ragnarok Roulade at Loki's Lair didn't disappoint! The combination of chocolate, cherry, and cream was heavenly. Also tried the Yggdrasil Trifle, which was good but a tad too sweet for my taste. The service was impeccable, and the Norse-inspired decor added to the overall experience. Will be back to try their cocktails next time.\",\n        reviewHolder\n    );\n    const review3 = buildReview(\n        \"Ingrid H.\",\n        5,\n        \"The ambiance at Loki's Lair perfectly complements its Norse theme. I'm a big fan of gin cocktails, and Freya's Elixir was beautifully balanced – sweet, tangy, with a touch of effervescence. Ended the night with Sif's Golden Tresses; the saffron buns were an absolute delight. Deducting one star because the place was a bit crowded, but the food and drink are top-notch!\",\n        reviewHolder\n    );\n    location.appendChild(reviewHolder);\n\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/images/inside.png":
/*!*******************************!*\
  !*** ./src/images/inside.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d57e35f860e71cdfa430.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/inside.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;