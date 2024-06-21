"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/account/account.tsx":
/*!********************************************!*\
  !*** ./src/components/account/account.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountView: function() { return /* binding */ AccountView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js */ \"(app-pages-browser)/./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.module.css */ \"(app-pages-browser)/./src/components/account/account.module.css\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_account_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AccountView = (param)=>{\n    let { account } = param;\n    _s();\n    const { wallet, ethereum, bitcoin } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const updateBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async function() {\n        let initialLoad = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        if (initialLoad) setLoading(true);\n        try {\n            let balance = \"\";\n            switch(account.network){\n                case \"near\":\n                    if (wallet) {\n                        setName(account.id);\n                        const nearBalance = await wallet.getBalance(account.id);\n                        balance = near_api_js__WEBPACK_IMPORTED_MODULE_2__.utils.format.formatNearAmount(nearBalance, 4);\n                    }\n                    break;\n                case \"ethereum\":\n                    if (ethereum) {\n                        setName(\"\".concat(account.name, \" - \").concat(ethereum.trimAddress(account.id)));\n                        const ethBalance = await ethereum.getBalance(account.id);\n                        balance = ethBalance.toString();\n                    }\n                    break;\n                case \"bitcoin\":\n                    if (bitcoin) {\n                        setName(\"\".concat(account.name, \" - \").concat(bitcoin.trimAddress(account.id)));\n                        const btcBalance = await bitcoin.getBalance(account.id);\n                        balance = btcBalance.toString();\n                    }\n                    break;\n            }\n            setBalance(balance);\n        } catch (error) {\n            console.warn(error);\n        } finally{\n            setLoading(false);\n        }\n    }, [\n        account,\n        wallet,\n        ethereum,\n        bitcoin\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        updateBalance(true);\n        const interval = setInterval(updateBalance, 5000);\n        return ()=>clearInterval(interval);\n    }, [\n        updateBalance\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                src: \"/\".concat(account.network, \".svg\"),\n                alt: account.network,\n                width: \"32\",\n                height: \"32\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountName),\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().network),\n                        children: account.network\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalance), \" \").concat(loading && \"loading\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"spinner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountView, \"CNtJOudZnjF4j4Q7VGwwTj7pjso=\");\n_c = AccountView;\nvar _c;\n$RefreshReg$(_c, \"AccountView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQ2pDO0FBQ0w7QUFFVztBQUNXO0FBRzlDLE1BQU1RLGNBQWM7UUFBQyxFQUMxQkMsT0FBTyxFQUdSOztJQUNDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHWCxpREFBVUEsQ0FBQ00sOERBQVdBO0lBQzVELE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNaUIsZ0JBQWdCaEIsa0RBQVdBLENBQUM7WUFBT2lCLCtFQUFjO1FBQ3JELElBQUlBLGFBQWFGLFdBQVc7UUFFNUIsSUFBSTtZQUNGLElBQUlMLFVBQVU7WUFDZCxPQUFRSixRQUFRWSxPQUFPO2dCQUNyQixLQUFLO29CQUNILElBQUlYLFFBQVE7d0JBQ1ZNLFFBQVFQLFFBQVFhLEVBQUU7d0JBQ2xCLE1BQU1DLGNBQWMsTUFBTWIsT0FBT2MsVUFBVSxDQUFDZixRQUFRYSxFQUFFO3dCQUN0RFQsVUFBVVQsOENBQUtBLENBQUNxQixNQUFNLENBQUNDLGdCQUFnQixDQUFDSCxhQUFhO29CQUN2RDtvQkFDQTtnQkFDRixLQUFLO29CQUNILElBQUlaLFVBQVU7d0JBQ1pLLFFBQVEsR0FBcUJMLE9BQWxCRixRQUFRTSxJQUFJLEVBQUMsT0FBc0MsT0FBakNKLFNBQVNnQixXQUFXLENBQUNsQixRQUFRYSxFQUFFO3dCQUM1RCxNQUFNTSxhQUFhLE1BQU1qQixTQUFTYSxVQUFVLENBQUNmLFFBQVFhLEVBQUU7d0JBQ3ZEVCxVQUFVZSxXQUFXQyxRQUFRO29CQUMvQjtvQkFDQTtnQkFDRixLQUFLO29CQUNILElBQUlqQixTQUFTO3dCQUNYSSxRQUFRLEdBQXFCSixPQUFsQkgsUUFBUU0sSUFBSSxFQUFDLE9BQXFDLE9BQWhDSCxRQUFRZSxXQUFXLENBQUNsQixRQUFRYSxFQUFFO3dCQUMzRCxNQUFNUSxhQUFhLE1BQU1sQixRQUFRWSxVQUFVLENBQUNmLFFBQVFhLEVBQUU7d0JBQ3REVCxVQUFVaUIsV0FBV0QsUUFBUTtvQkFDL0I7b0JBQ0E7WUFDSjtZQUNBZixXQUFXRDtRQUNiLEVBQUUsT0FBT2tCLE9BQU87WUFDZEMsUUFBUUMsSUFBSSxDQUFDRjtRQUNmLFNBQVU7WUFDUmIsV0FBVztRQUNiO0lBQ0YsR0FBRztRQUFDVDtRQUFTQztRQUFRQztRQUFVQztLQUFRO0lBRXZDWixnREFBU0EsQ0FBQztRQUNSbUIsY0FBYztRQUNkLE1BQU1lLFdBQVdDLFlBQVloQixlQUFlO1FBQzVDLE9BQU8sSUFBTWlCLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ2Y7S0FBYztJQUVsQixxQkFDRSw4REFBQ2tCO1FBQUlDLFdBQVdoQyxvRUFBYzs7MEJBQzVCLDhEQUFDRCxrREFBS0E7Z0JBQUNpQyxXQUFXaEMsaUVBQVc7Z0JBQUVrQyxLQUFLLElBQW9CLE9BQWhCL0IsUUFBUVksT0FBTyxFQUFDO2dCQUFPb0IsS0FBS2hDLFFBQVFZLE9BQU87Z0JBQUVxQixPQUFNO2dCQUFLQyxRQUFPOzs7Ozs7MEJBQ3ZHLDhEQUFDTjtnQkFBSUMsV0FBV2hDLHdFQUFrQjs7a0NBQ2hDLDhEQUFDdUM7d0JBQUVQLFdBQVdoQyx3RUFBa0I7a0NBQUdTOzs7Ozs7a0NBQ25DLDhEQUFDOEI7d0JBQUVQLFdBQVdoQyxvRUFBYztrQ0FBR0csUUFBUVksT0FBTzs7Ozs7Ozs7Ozs7OzBCQUVoRCw4REFBQ3dCO2dCQUFFUCxXQUFXLEdBQTRCckIsT0FBekJYLDJFQUFxQixFQUFDLEtBQXdCLE9BQXJCVyxXQUFXOztrQ0FDbkQsOERBQUMrQjtrQ0FBTW5DOzs7Ozs7a0NBQ1AsOERBQUNtQzt3QkFBS1YsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhCLEVBQUU7R0FqRVc5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQudHN4PzFiYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIm5lYXItYXBpLWpzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hY2NvdW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IE5lYXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9uZWFyLWNvbnRleHRcIjtcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiQC9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dFwiO1xuXG5leHBvcnQgY29uc3QgQWNjb3VudFZpZXcgPSAoe1xuICBhY2NvdW50LFxufSA6IHtcbiAgYWNjb3VudDogQWNjb3VudDtcbn0pID0+IHtcbiAgY29uc3QgeyB3YWxsZXQsIGV0aGVyZXVtLCBiaXRjb2luIH0gPSB1c2VDb250ZXh0KE5lYXJDb250ZXh0KTtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdXBkYXRlQmFsYW5jZSA9IHVzZUNhbGxiYWNrKGFzeW5jIChpbml0aWFsTG9hZCA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKGluaXRpYWxMb2FkKSBzZXRMb2FkaW5nKHRydWUpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBsZXQgYmFsYW5jZSA9IFwiXCI7XG4gICAgICBzd2l0Y2ggKGFjY291bnQubmV0d29yaykge1xuICAgICAgICBjYXNlIFwibmVhclwiOlxuICAgICAgICAgIGlmICh3YWxsZXQpIHtcbiAgICAgICAgICAgIHNldE5hbWUoYWNjb3VudC5pZCk7XG4gICAgICAgICAgICBjb25zdCBuZWFyQmFsYW5jZSA9IGF3YWl0IHdhbGxldC5nZXRCYWxhbmNlKGFjY291bnQuaWQpO1xuICAgICAgICAgICAgYmFsYW5jZSA9IHV0aWxzLmZvcm1hdC5mb3JtYXROZWFyQW1vdW50KG5lYXJCYWxhbmNlLCA0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJldGhlcmV1bVwiOlxuICAgICAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICAgICAgc2V0TmFtZShgJHthY2NvdW50Lm5hbWV9IC0gJHtldGhlcmV1bS50cmltQWRkcmVzcyhhY2NvdW50LmlkKX1gKTtcbiAgICAgICAgICAgIGNvbnN0IGV0aEJhbGFuY2UgPSBhd2FpdCBldGhlcmV1bS5nZXRCYWxhbmNlKGFjY291bnQuaWQpO1xuICAgICAgICAgICAgYmFsYW5jZSA9IGV0aEJhbGFuY2UudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJiaXRjb2luXCI6XG4gICAgICAgICAgaWYgKGJpdGNvaW4pIHtcbiAgICAgICAgICAgIHNldE5hbWUoYCR7YWNjb3VudC5uYW1lfSAtICR7Yml0Y29pbi50cmltQWRkcmVzcyhhY2NvdW50LmlkKX1gKTtcbiAgICAgICAgICAgIGNvbnN0IGJ0Y0JhbGFuY2UgPSBhd2FpdCBiaXRjb2luLmdldEJhbGFuY2UoYWNjb3VudC5pZCk7XG4gICAgICAgICAgICBiYWxhbmNlID0gYnRjQmFsYW5jZS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2FjY291bnQsIHdhbGxldCwgZXRoZXJldW0sIGJpdGNvaW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUJhbGFuY2UodHJ1ZSk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVCYWxhbmNlLCA1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt1cGRhdGVCYWxhbmNlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnR9PlxuICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz17YC8ke2FjY291bnQubmV0d29ya30uc3ZnYH0gYWx0PXthY2NvdW50Lm5ldHdvcmt9IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRJbmZvfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudE5hbWV9PntuYW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmV0d29ya30+e2FjY291bnQubmV0d29ya308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFjY291bnRCYWxhbmNlfSAke2xvYWRpbmcgJiYgJ2xvYWRpbmcnfWB9PlxuICAgICAgICA8c3Bhbj57YmFsYW5jZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L3NwYW4+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInV0aWxzIiwiSW1hZ2UiLCJzdHlsZXMiLCJOZWFyQ29udGV4dCIsIkFjY291bnRWaWV3IiwiYWNjb3VudCIsIndhbGxldCIsImV0aGVyZXVtIiwiYml0Y29pbiIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwibmFtZSIsInNldE5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVwZGF0ZUJhbGFuY2UiLCJpbml0aWFsTG9hZCIsIm5ldHdvcmsiLCJpZCIsIm5lYXJCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImZvcm1hdCIsImZvcm1hdE5lYXJBbW91bnQiLCJ0cmltQWRkcmVzcyIsImV0aEJhbGFuY2UiLCJ0b1N0cmluZyIsImJ0Y0JhbGFuY2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJsb2dvIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhY2NvdW50SW5mbyIsInAiLCJhY2NvdW50TmFtZSIsImFjY291bnRCYWxhbmNlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/account/account.tsx\n"));

/***/ })

});