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

/***/ "(app-pages-browser)/./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BitcoinNetwork: function() { return /* binding */ BitcoinNetwork; },\n/* harmony export */   BitcoinRpcUrl: function() { return /* binding */ BitcoinRpcUrl; },\n/* harmony export */   EthereumChainId: function() { return /* binding */ EthereumChainId; },\n/* harmony export */   EthereumRpcUrl: function() { return /* binding */ EthereumRpcUrl; },\n/* harmony export */   FiatConvertAPI: function() { return /* binding */ FiatConvertAPI; },\n/* harmony export */   GasStationContract: function() { return /* binding */ GasStationContract; },\n/* harmony export */   MultiChainContract: function() { return /* binding */ MultiChainContract; },\n/* harmony export */   NearNetworkId: function() { return /* binding */ NearNetworkId; }\n/* harmony export */ });\nconst NearNetworkId = \"testnet\";\nconst MultiChainContract = \"v2.multichain-mpc.testnet\";\nconst GasStationContract = \"canhazgas.testnet\";\nconst EthereumChainId = 11155111; // Sepolia\nconst EthereumRpcUrl = \"https://rpc2.sepolia.org\";\nconst BitcoinRpcUrl = \"https://blockstream.info/testnet/api\";\nconst BitcoinNetwork = \"testnet\";\nconst FiatConvertAPI = \"https://api.coinconvert.net/convert/\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0IsVUFBVTtBQUNoQyxNQUFNQyxxQkFBcUIsNEJBQTRCO0FBQ3ZELE1BQU1DLHFCQUFxQixvQkFBb0I7QUFDL0MsTUFBTUMsa0JBQWtCLFNBQVMsQ0FBQyxVQUFVO0FBQzVDLE1BQU1DLGlCQUFpQiwyQkFBMkI7QUFDbEQsTUFBTUMsZ0JBQWdCLHVDQUF1QztBQUM3RCxNQUFNQyxpQkFBaUIsVUFBVTtBQUVqQyxNQUFNQyxpQkFBaUIsdUNBQXVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25maWcudHM/ZDQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTmVhck5ldHdvcmtJZCA9IFwidGVzdG5ldFwiO1xuZXhwb3J0IGNvbnN0IE11bHRpQ2hhaW5Db250cmFjdCA9IFwidjIubXVsdGljaGFpbi1tcGMudGVzdG5ldFwiO1xuZXhwb3J0IGNvbnN0IEdhc1N0YXRpb25Db250cmFjdCA9IFwiY2FuaGF6Z2FzLnRlc3RuZXRcIjtcbmV4cG9ydCBjb25zdCBFdGhlcmV1bUNoYWluSWQgPSAxMTE1NTExMTsgLy8gU2Vwb2xpYVxuZXhwb3J0IGNvbnN0IEV0aGVyZXVtUnBjVXJsID0gXCJodHRwczovL3JwYzIuc2Vwb2xpYS5vcmdcIjtcbmV4cG9ydCBjb25zdCBCaXRjb2luUnBjVXJsID0gXCJodHRwczovL2Jsb2Nrc3RyZWFtLmluZm8vdGVzdG5ldC9hcGlcIjtcbmV4cG9ydCBjb25zdCBCaXRjb2luTmV0d29yayA9IFwidGVzdG5ldFwiO1xuZXhwb3J0IHR5cGUgTkVUV09SSyA9IFwibmVhclwiIHwgXCJldGhlcmV1bVwiIHwgXCJiaXRjb2luXCI7XG5leHBvcnQgY29uc3QgRmlhdENvbnZlcnRBUEkgPSBcImh0dHBzOi8vYXBpLmNvaW5jb252ZXJ0Lm5ldC9jb252ZXJ0L1wiOyJdLCJuYW1lcyI6WyJOZWFyTmV0d29ya0lkIiwiTXVsdGlDaGFpbkNvbnRyYWN0IiwiR2FzU3RhdGlvbkNvbnRyYWN0IiwiRXRoZXJldW1DaGFpbklkIiwiRXRoZXJldW1ScGNVcmwiLCJCaXRjb2luUnBjVXJsIiwiQml0Y29pbk5ldHdvcmsiLCJGaWF0Q29udmVydEFQSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/config.ts\n"));

/***/ })

});