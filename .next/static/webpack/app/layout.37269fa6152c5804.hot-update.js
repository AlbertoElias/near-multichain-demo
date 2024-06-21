"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/near-context.ts":
/*!*************************************!*\
  !*** ./src/context/near-context.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NearContext: function() { return /* binding */ NearContext; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_ethereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/ethereum */ \"(app-pages-browser)/./src/lib/ethereum.ts\");\n/* harmony import */ var _lib_bitcoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/bitcoint */ \"(app-pages-browser)/./src/lib/bitcoint.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n\n\n\n\nconsole.log(new _lib_bitcoint__WEBPACK_IMPORTED_MODULE_2__.Bitcoin(_config__WEBPACK_IMPORTED_MODULE_3__.BitcoinRpcUrl, _config__WEBPACK_IMPORTED_MODULE_3__.BitcoinNetwork));\n/**\n * @typedef NearContext\n * @property {import(\"./wallets/near\").Wallet} wallet Current wallet\n * @property {string} signedAccountId The AccountId of the signed user\n */ /** @type {import (\"react\").Context<NearContext>} */ const NearContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    wallet: undefined,\n    signedAccountId: \"\",\n    ethereum: new _lib_ethereum__WEBPACK_IMPORTED_MODULE_1__.Ethereum(_config__WEBPACK_IMPORTED_MODULE_3__.EthereumRpcUrl, _config__WEBPACK_IMPORTED_MODULE_3__.EthereumChainId),\n    bitcoin: new _lib_bitcoint__WEBPACK_IMPORTED_MODULE_2__.Bitcoin(_config__WEBPACK_IMPORTED_MODULE_3__.BitcoinRpcUrl, _config__WEBPACK_IMPORTED_MODULE_3__.BitcoinNetwork)\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L25lYXItY29udGV4dC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFFSTtBQUNEO0FBQ2lEO0FBUzFGTyxRQUFRQyxHQUFHLENBQUMsSUFBSU4sa0RBQU9BLENBQUNFLGtEQUFhQSxFQUFFRCxtREFBY0E7QUFDckQ7Ozs7Q0FJQyxHQUNELGtEQUFrRCxHQUMzQyxNQUFNTSxjQUFjVCxvREFBYUEsQ0FBdUI7SUFDN0RVLFFBQVFDO0lBQ1JDLGlCQUFpQjtJQUNqQkMsVUFBVSxJQUFJWixtREFBUUEsQ0FBQ0ssbURBQWNBLEVBQUVELG9EQUFlQTtJQUN0RFMsU0FBUyxJQUFJWixrREFBT0EsQ0FBQ0Usa0RBQWFBLEVBQUVELG1EQUFjQTtBQUNwRCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L25lYXItY29udGV4dC50cz85ODM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFdhbGxldCB9IGZyb20gXCJAL2xpYi9uZWFyXCI7XG5pbXBvcnQgeyBFdGhlcmV1bSB9IGZyb20gXCJAL2xpYi9ldGhlcmV1bVwiO1xuaW1wb3J0IHsgQml0Y29pbiB9IGZyb20gXCJAL2xpYi9iaXRjb2ludFwiO1xuaW1wb3J0IHsgQml0Y29pbk5ldHdvcmssIEJpdGNvaW5ScGNVcmwsIEV0aGVyZXVtQ2hhaW5JZCwgRXRoZXJldW1ScGNVcmwgfSBmcm9tIFwiQC9jb25maWdcIjtcblxuaW50ZXJmYWNlIE5lYXJDb250ZXh0SW50ZXJmYWNlIHtcbiAgd2FsbGV0OiBXYWxsZXQgfCB1bmRlZmluZWQ7XG4gIHNpZ25lZEFjY291bnRJZDogc3RyaW5nO1xuICBldGhlcmV1bTogRXRoZXJldW07XG4gIGJpdGNvaW46IEJpdGNvaW47XG59XG5cbmNvbnNvbGUubG9nKG5ldyBCaXRjb2luKEJpdGNvaW5ScGNVcmwsIEJpdGNvaW5OZXR3b3JrKSk7XG4vKipcbiAqIEB0eXBlZGVmIE5lYXJDb250ZXh0XG4gKiBAcHJvcGVydHkge2ltcG9ydChcIi4vd2FsbGV0cy9uZWFyXCIpLldhbGxldH0gd2FsbGV0IEN1cnJlbnQgd2FsbGV0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2lnbmVkQWNjb3VudElkIFRoZSBBY2NvdW50SWQgb2YgdGhlIHNpZ25lZCB1c2VyXG4gKi9cbi8qKiBAdHlwZSB7aW1wb3J0IChcInJlYWN0XCIpLkNvbnRleHQ8TmVhckNvbnRleHQ+fSAqL1xuZXhwb3J0IGNvbnN0IE5lYXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxOZWFyQ29udGV4dEludGVyZmFjZT4oe1xuICB3YWxsZXQ6IHVuZGVmaW5lZCxcbiAgc2lnbmVkQWNjb3VudElkOiBcIlwiLFxuICBldGhlcmV1bTogbmV3IEV0aGVyZXVtKEV0aGVyZXVtUnBjVXJsLCBFdGhlcmV1bUNoYWluSWQpLFxuICBiaXRjb2luOiBuZXcgQml0Y29pbihCaXRjb2luUnBjVXJsLCBCaXRjb2luTmV0d29yayksXG59KTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkV0aGVyZXVtIiwiQml0Y29pbiIsIkJpdGNvaW5OZXR3b3JrIiwiQml0Y29pblJwY1VybCIsIkV0aGVyZXVtQ2hhaW5JZCIsIkV0aGVyZXVtUnBjVXJsIiwiY29uc29sZSIsImxvZyIsIk5lYXJDb250ZXh0Iiwid2FsbGV0IiwidW5kZWZpbmVkIiwic2lnbmVkQWNjb3VudElkIiwiZXRoZXJldW0iLCJiaXRjb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/near-context.ts\n"));

/***/ })

});