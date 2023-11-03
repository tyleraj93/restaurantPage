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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildAbout)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _images_outside_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/outside.png */ \"./src/images/outside.png\");\n\n\n\nconst buildHours = (day, time, placement) => {\n    const hours = document.createElement(\"p\");\n    hours.textContent = `${day}: ${time}`;\n    placement.appendChild(hours);\n}\n\nfunction buildAbout(location) {\n    if (location.textContent) {\n        (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\n    }\n\n    // Title section\n    const titleHolder = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    title.textContent = \"About us\";\n    titleHolder.appendChild(title);\n    location.appendChild(titleHolder);\n\n    // Outside restaurant image\n    const imageHolder = document.createElement(\"div\");\n    const restaurantOutside = document.createElement(\"img\");\n    restaurantOutside.src = _images_outside_png__WEBPACK_IMPORTED_MODULE_1__;\n    restaurantOutside.classList = \"restaurantImage\";\n    imageHolder.appendChild(restaurantOutside);\n    location.appendChild(imageHolder);\n\n    // Number Section\n    const numberHolder = document.createElement(\"div\");\n    const number = document.createElement(\"h2\");\n    number.textContent = \"Phone Number: \"\n    numberHolder.appendChild(number);\n    const phone = document.createElement(\"p\");\n    phone.textContent = \"666-555-4444\";\n    numberHolder.appendChild(phone);\n    location.appendChild(numberHolder);\n\n    // Hours section\n    const hoursHolder = document.createElement(\"div\");\n    const hours = document.createElement(\"h2\");\n    hours.textContent = \"Hours\";\n    hoursHolder.appendChild(hours);\n    const sunday = buildHours(\"Sunday\" , \"4pm - 10pm\", hoursHolder);\n    const monday = buildHours(\"Monday\", \"6pm - 12am\", hoursHolder);\n    const tuesday = buildHours(\"Tuesday\", \"6pm - 12am\", hoursHolder);\n    const wednesday = buildHours(\"Wednesday\", \"6pm - 12am\", hoursHolder);\n    const thursday = buildHours(\"Thurday\", \"6pm - 12am\", hoursHolder);\n    const friday = buildHours(\"Friday\", \"6pm - 2am\", hoursHolder);\n    const saturday = buildHours(\"Saturday\", \"4pm - 2am\", hoursHolder);\n    location.appendChild(hoursHolder);\n\n    // Location section, not the parameter\n    const locationHolder = document.createElement(\"div\");\n    const locationText = document.createElement(\"h2\");\n    locationText.textContent = \"Location\";\n    locationHolder.appendChild(locationText);\n    const address = document.createElement(\"p\");\n    address.innerHTML =\n        \"Asgardian Plaza, <br>Valhalla Avenue, <br>Midgard District, <br>Thornton, <br>Norsewood, <br>9X4 2YZ <br>Realm of Legends, Northern Isles\";\n    locationHolder.appendChild(address);\n    location.appendChild(locationHolder);\n}\n\n//# sourceURL=webpack://restaurantpage/./src/about.js?");

/***/ }),

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction clearContent(location) {\n    if (location.textContent) {\n        location.textContent = \"\";\n    }\n}\n\n//# sourceURL=webpack://restaurantpage/./src/clearContent.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildHeaderBefore)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n//Builds a header with 3 buttons before a given \"location\" parameter.\nfunction buildHeaderBefore(location) {\n    const body = document.body;\n    const header = document.createElement(\"div\");\n    header.id = \"header\";\n\n    const homeButton = document.createElement(\"button\");\n    homeButton.textContent = \"Home\";\n    homeButton.classList.add(\"navButton\");\n    homeButton.addEventListener(\"click\", () => (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location));\n    header.appendChild(homeButton);\n\n    const menuButton = document.createElement(\"button\");\n    menuButton.textContent = \"Menu\";\n    menuButton.classList.add(\"navButton\");\n    menuButton.addEventListener(\"click\", () => (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(location));\n    header.appendChild(menuButton);\n\n    const aboutButton = document.createElement(\"button\");\n    aboutButton.textContent = \"About\";\n    aboutButton.classList.add(\"navButton\");\n    aboutButton.addEventListener(\"click\", () => (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(location));\n    header.appendChild(aboutButton);\n\n    body.insertBefore(header, location);\n};\n\n//# sourceURL=webpack://restaurantpage/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildHome)\n/* harmony export */ });\n/* harmony import */ var _clearContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent */ \"./src/clearContent.js\");\n/* harmony import */ var _images_inside_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/inside.png */ \"./src/images/inside.png\");\n\n\n\nconst buildReview = (reviewer, score, remarks, placement) => {\n    const holder = document.createElement(\"div\");\n    holder.className = \"review\";\n    const name = document.createElement(\"p\");\n    name.textContent = reviewer;\n    holder.appendChild(name);\n    const rating = document.createElement(\"p\");\n    rating.textContent = \"⭐\".repeat(score);\n    holder.appendChild(rating);\n    const review = document.createElement(\"p\");\n    review.textContent = remarks;\n    holder.appendChild(review);\n    placement.appendChild(holder);\n}\n\n// Build a home section in a given parameter\n\nfunction buildHome(location) {\n    if (location.textContent) {\n        (0,_clearContent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location);\n    };\n    // Name section\n    const titleHolder = document.createElement(\"div\");\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.textContent = \"Loki's Lair\";\n    titleHolder.appendChild(restaurantName);\n    location.appendChild(titleHolder);\n\n    // Image of restaurant inside\n    const imageHolder = document.createElement(\"div\");\n    const restaurantInside = document.createElement(\"img\");\n    restaurantInside.src = _images_inside_png__WEBPACK_IMPORTED_MODULE_1__;\n    restaurantInside.classList = \"restaurantImage\";\n    imageHolder.appendChild(restaurantInside);\n    location.appendChild(imageHolder);\n\n    // Bio Section\n    const bioHolder = document.createElement(\"div\");\n    const bioHeader = document.createElement(\"h2\");\n    bioHeader.textContent = \"Loki's Lair: A Norse Culinary Voyage\";\n    bioHolder.appendChild(bioHeader);\n    const bio = document.createElement(\"p\");\n    bio.textContent = \"Nestled in the heart of Norsewood's historic Midgard District, Loki's Lair invites guests on an epicurean journey through the legends of the North. Inspired by the tales of gods, giants, and heroes, our establishment seeks to capture the audacious spirit of the Vikings in every dish. Founder and head chef, Bjorn Eriksson, traces his lineage directly to the seafaring Norsemen of old. With a passion for both history and gastronomy, Bjorn embarked on a quest to revive the flavors of ancient Scandinavia. At Loki's Lair, he combines time-honored cooking techniques with modern flair, crafting dishes that tell a story of both past and present. Our menu, divided into \\\"Start Feasts,\\\" \\\"Mead Mixes,\\\" and \\\"Sweet Finishes,\\\" is a testament to the rich tapestry of Norse culture. From Odin's Oracles to Ragnarok Roulade, every offering seeks to transport diners to the great halls of Valhalla, where heroes feast and mead flows freely. The ambiance, too, is meticulously curated. Enter through a grand wooden doorway, intricately carved with runes and mythical beasts. Dine beneath the glow of wrought iron chandeliers, their flames dancing in reflection on polished horn tableware. And, if you listen closely, the haunting strains of a distant lyre might just reach your ears, completing the enchantment. At Loki's Lair, we don't just serve meals; we serve memories. Whether you're a lover of history, a culinary enthusiast, or simply seeking a unique dining experience, join us for a taste of the extraordinary.\"\n    bioHolder.appendChild(bio);\n    location.appendChild(bioHolder);\n\n    // Review section\n    const reviewHolder = document.createElement(\"div\");\n    const review1 = buildReview(\n        \"Olaf K.\",\n        5,\n        \"As a fan of Norse mythology, I couldn't resist visiting Loki's Lair. The Heimdall's Hearth Breads were a comforting start, and I was thoroughly impressed by the Niflheim Frost Bites – refreshing and innovative. But what really stole the show was Loki's Trick cocktail. Smoky, fruity, with a hint of mint – it's a drink fit for the gods! Highly recommend.\",\n        reviewHolder\n    );\n    const review2 = buildReview(\n        \"Astrid F.\",\n        4,\n        \"I love trying unique dessert dishes, and the Ragnarok Roulade at Loki's Lair didn't disappoint! The combination of chocolate, cherry, and cream was heavenly. Also tried the Yggdrasil Trifle, which was good but a tad too sweet for my taste. The service was impeccable, and the Norse-inspired decor added to the overall experience. Will be back to try their cocktails next time.\",\n        reviewHolder\n    );\n    const review3 = buildReview(\n        \"Ingrid H.\",\n        5,\n        \"The ambiance at Loki's Lair perfectly complements its Norse theme. I'm a big fan of gin cocktails, and Freya's Elixir was beautifully balanced – sweet, tangy, with a touch of effervescence. Ended the night with Sif's Golden Tresses; the saffron buns were an absolute delight. Deducting one star because the place was a bit crowded, but the food and drink are top-notch!\",\n        reviewHolder\n    );\n    location.appendChild(reviewHolder);\n\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

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

/***/ "./src/images/inside.png":
/*!*******************************!*\
  !*** ./src/images/inside.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d57e35f860e71cdfa430.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/inside.png?");

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

/***/ "./src/images/outside.png":
/*!********************************!*\
  !*** ./src/images/outside.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8f73f404476a814f6bb.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/outside.png?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/header.js");
/******/ 	
/******/ })()
;