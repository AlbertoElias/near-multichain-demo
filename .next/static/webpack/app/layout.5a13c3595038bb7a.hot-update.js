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

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_near__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/near */ \"(app-pages-browser)/./src/lib/near.ts\");\n/* harmony import */ var _lib_ethereum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/ethereum */ \"(app-pages-browser)/./src/lib/ethereum.ts\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n/* harmony import */ var _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/navigation/navigation */ \"(app-pages-browser)/./src/components/navigation/navigation.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* harmony import */ var _context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/accounts-reducer-context */ \"(app-pages-browser)/./src/context/accounts-reducer-context.tsx\");\n/* harmony import */ var _lib_bitcoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/bitcoint */ \"(app-pages-browser)/./src/lib/bitcoint.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst wallet = new _lib_near__WEBPACK_IMPORTED_MODULE_2__.Wallet({\n    networkId: _config__WEBPACK_IMPORTED_MODULE_7__.NearNetworkId,\n    createAccessKeyFor: _config__WEBPACK_IMPORTED_MODULE_7__.MultiChainContract\n});\n// Layout Component\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [signedAccountId, setSignedAccountId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const ethereum = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>new _lib_ethereum__WEBPACK_IMPORTED_MODULE_3__.Ethereum(_config__WEBPACK_IMPORTED_MODULE_7__.EthereumRpcUrl, _config__WEBPACK_IMPORTED_MODULE_7__.EthereumChainId), []);\n    const bitcoin = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>new _lib_bitcoint__WEBPACK_IMPORTED_MODULE_9__.Bitcoin(_config__WEBPACK_IMPORTED_MODULE_7__.BitcoinRpcUrl, _config__WEBPACK_IMPORTED_MODULE_7__.BitcoinNetwork), []);\n    const nearContextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            wallet,\n            signedAccountId,\n            ethereum,\n            bitcoin\n        }), [\n        signedAccountId\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        wallet.startUp(setSignedAccountId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"head\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"NEAR Hub Demo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/near.svg\",\n                        type: \"image/svg+xml\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext.Provider, {\n                    value: nearContextValue,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_8__.AccountsProvider, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_6__.Navigation, {}, void 0, false, {\n                                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            children\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/layout.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(RootLayout, \"udVNRFFgaqhBq1l0um+reJmI3QE=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVxRDtBQUNqQjtBQUNNO0FBRWY7QUFDMEI7QUFDVztBQUM2RDtBQUN2RDtBQUM3QjtBQUV6QyxNQUFNZSxTQUFTLElBQUlaLDZDQUFNQSxDQUFDO0lBQUVhLFdBQVdULGtEQUFhQTtJQUFFVSxvQkFBb0JULHVEQUFrQkE7QUFBQztBQUU3RixtQkFBbUI7QUFDSixTQUFTVSxXQUFXLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBaUMsR0FBM0M7O0lBQ2pDLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR25CLCtDQUFRQSxDQUFTO0lBQy9ELE1BQU1vQixXQUFXckIsOENBQU9BLENBQUMsSUFBTSxJQUFJRyxtREFBUUEsQ0FBQ0ssbURBQWNBLEVBQUVDLG9EQUFlQSxHQUFHLEVBQUU7SUFDaEYsTUFBTWEsVUFBVXRCLDhDQUFPQSxDQUFDLElBQU0sSUFBSWEsa0RBQU9BLENBQUNGLGtEQUFhQSxFQUFFRCxtREFBY0EsR0FBRyxFQUFFO0lBQzVFLE1BQU1hLG1CQUFtQnZCLDhDQUFPQSxDQUFDLElBQU87WUFBRWM7WUFBUUs7WUFBaUJFO1lBQVVDO1FBQVEsSUFBSTtRQUFDSDtLQUFnQjtJQUUxR3BCLGdEQUFTQSxDQUFDO1FBQ1JlLE9BQU9VLE9BQU8sQ0FBQ0o7SUFDakIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUtDLE1BQUs7OzBCQUNULDhEQUFDQzs7a0NBQ0MsOERBQUNDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLO3dCQUFZQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDQzswQkFDQyw0RUFBQzdCLDhEQUFXQSxDQUFDOEIsUUFBUTtvQkFBQ0MsT0FBT1o7OEJBQzNCLDRFQUFDWCwrRUFBZ0JBOzswQ0FDZiw4REFBQ1AseUVBQVVBOzs7Ozs0QkFDVmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0ExQndCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xheW91dC50c3g/NTdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgV2FsbGV0IH0gZnJvbSBcIkAvbGliL25lYXJcIjtcbmltcG9ydCB7IEV0aGVyZXVtIH0gZnJvbSBcIkAvbGliL2V0aGVyZXVtXCI7XG5cbmltcG9ydCBcIkAvYXBwL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBOZWFyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvbmVhci1jb250ZXh0XCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb25cIjtcbmltcG9ydCB7IE5lYXJOZXR3b3JrSWQsIE11bHRpQ2hhaW5Db250cmFjdCwgRXRoZXJldW1ScGNVcmwsIEV0aGVyZXVtQ2hhaW5JZCwgQml0Y29pbk5ldHdvcmssIEJpdGNvaW5ScGNVcmwgfSBmcm9tIFwiQC9jb25maWdcIjtcbmltcG9ydCB7IEFjY291bnRzUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dFwiO1xuaW1wb3J0IHsgQml0Y29pbiB9IGZyb20gXCJAL2xpYi9iaXRjb2ludFwiO1xuXG5jb25zdCB3YWxsZXQgPSBuZXcgV2FsbGV0KHsgbmV0d29ya0lkOiBOZWFyTmV0d29ya0lkLCBjcmVhdGVBY2Nlc3NLZXlGb3I6IE11bHRpQ2hhaW5Db250cmFjdCB9KTtcblxuLy8gTGF5b3V0IENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtzaWduZWRBY2NvdW50SWQsIHNldFNpZ25lZEFjY291bnRJZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBldGhlcmV1bSA9IHVzZU1lbW8oKCkgPT4gbmV3IEV0aGVyZXVtKEV0aGVyZXVtUnBjVXJsLCBFdGhlcmV1bUNoYWluSWQpLCBbXSk7XG4gIGNvbnN0IGJpdGNvaW4gPSB1c2VNZW1vKCgpID0+IG5ldyBCaXRjb2luKEJpdGNvaW5ScGNVcmwsIEJpdGNvaW5OZXR3b3JrKSwgW10pO1xuICBjb25zdCBuZWFyQ29udGV4dFZhbHVlID0gdXNlTWVtbygoKSA9PiAoeyB3YWxsZXQsIHNpZ25lZEFjY291bnRJZCwgZXRoZXJldW0sIGJpdGNvaW4gfSksIFtzaWduZWRBY2NvdW50SWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdhbGxldC5zdGFydFVwKHNldFNpZ25lZEFjY291bnRJZCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDx0aXRsZT5ORUFSIEh1YiBEZW1vPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvbmVhci5zdmdcIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE5lYXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtuZWFyQ29udGV4dFZhbHVlfT5cbiAgICAgICAgICA8QWNjb3VudHNQcm92aWRlcj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9BY2NvdW50c1Byb3ZpZGVyPlxuICAgICAgICA8L05lYXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJXYWxsZXQiLCJFdGhlcmV1bSIsIk5lYXJDb250ZXh0IiwiTmF2aWdhdGlvbiIsIk5lYXJOZXR3b3JrSWQiLCJNdWx0aUNoYWluQ29udHJhY3QiLCJFdGhlcmV1bVJwY1VybCIsIkV0aGVyZXVtQ2hhaW5JZCIsIkJpdGNvaW5OZXR3b3JrIiwiQml0Y29pblJwY1VybCIsIkFjY291bnRzUHJvdmlkZXIiLCJCaXRjb2luIiwid2FsbGV0IiwibmV0d29ya0lkIiwiY3JlYXRlQWNjZXNzS2V5Rm9yIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwic2lnbmVkQWNjb3VudElkIiwic2V0U2lnbmVkQWNjb3VudElkIiwiZXRoZXJldW0iLCJiaXRjb2luIiwibmVhckNvbnRleHRWYWx1ZSIsInN0YXJ0VXAiLCJodG1sIiwibGFuZyIsImhlYWQiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsImJvZHkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ })

});