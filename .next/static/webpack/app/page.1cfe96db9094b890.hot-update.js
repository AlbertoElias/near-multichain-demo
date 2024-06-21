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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountView: function() { return /* binding */ AccountView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js */ \"(app-pages-browser)/./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.module.css */ \"(app-pages-browser)/./src/components/account/account.module.css\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_account_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n\nvar _s = $RefreshSig$();\n\n\n // Import the Image component from the correct package\n\n\nconst AccountView = (param)=>{\n    let { account } = param;\n    _s();\n    const { wallet, ethereum, bitcoin } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        switch(account.network){\n            case \"near\":\n                if (wallet) {\n                    wallet.getBalance(account.id).then((balance)=>{\n                        setBalance(near_api_js__WEBPACK_IMPORTED_MODULE_2__.utils.format.formatNearAmount(balance));\n                    }).catch(console.warn);\n                }\n                break;\n            case \"ethereum\":\n                if (ethereum) {\n                    ethereum.getBalance(account.id).then((balance)=>{\n                        setBalance(balance.toString());\n                    }).catch(console.warn);\n                }\n                break;\n            case \"bitcoin\":\n                if (bitcoin) {\n                    bitcoin.getBalance(account.id).then((balance)=>{\n                        setBalance(balance.toString());\n                    }).catch(console.warn);\n                }\n                break;\n        }\n    }, [\n        account\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                src: \"/\".concat(account.network, \".svg\"),\n                alt: account.network,\n                width: \"32\",\n                height: \"32\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountName),\n                        children: [\n                            account.id,\n                            \" \",\n                            account.name ? \"- \".concat(account.name) : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().network),\n                        children: account.network\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalance),\n                children: balance\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountView, \"DWhi/8/Pw9WsPFALJDWiPphWXMk=\");\n_c = AccountView;\nvar _c;\n$RefreshReg$(_c, \"AccountView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ3BCO0FBQ0wsQ0FBQyxzREFBc0Q7QUFFNUM7QUFDVztBQUk5QyxNQUFNTyxjQUFjO1FBQUMsRUFDMUJDLE9BQU8sRUFHUjs7SUFDQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUUsR0FBR1YsaURBQVVBLENBQUNLLDhEQUFXQTtJQUM1RCxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFFdkNGLGdEQUFTQSxDQUFDO1FBQ1IsT0FBUVEsUUFBUU0sT0FBTztZQUNyQixLQUFLO2dCQUNILElBQUlMLFFBQVE7b0JBQ1ZBLE9BQU9NLFVBQVUsQ0FBQ1AsUUFBUVEsRUFBRSxFQUN6QkMsSUFBSSxDQUFDLENBQUNMO3dCQUNMQyxXQUFXViw4Q0FBS0EsQ0FBQ2UsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ1A7b0JBQzNDLEdBQ0NRLEtBQUssQ0FBQ0MsUUFBUUMsSUFBSTtnQkFDdkI7Z0JBQ0E7WUFDRixLQUFLO2dCQUNILElBQUlaLFVBQVU7b0JBQ1pBLFNBQVNLLFVBQVUsQ0FBQ1AsUUFBUVEsRUFBRSxFQUMzQkMsSUFBSSxDQUFDLENBQUNMO3dCQUNMQyxXQUFXRCxRQUFRVyxRQUFRO29CQUM3QixHQUNDSCxLQUFLLENBQUNDLFFBQVFDLElBQUk7Z0JBQ3ZCO2dCQUNBO1lBQ0YsS0FBSztnQkFDSCxJQUFJWCxTQUFTO29CQUNYQSxRQUFRSSxVQUFVLENBQUNQLFFBQVFRLEVBQUUsRUFDMUJDLElBQUksQ0FBQyxDQUFDTDt3QkFDTEMsV0FBV0QsUUFBUVcsUUFBUTtvQkFDN0IsR0FDQ0gsS0FBSyxDQUFDQyxRQUFRQyxJQUFJO2dCQUN2QjtnQkFDQTtRQUNKO0lBQ0YsR0FBRztRQUFDZDtLQUFRO0lBRVoscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFXcEIsb0VBQWM7OzBCQUM1Qiw4REFBQ0Qsa0RBQUtBO2dCQUFDcUIsV0FBV3BCLGlFQUFXO2dCQUFFc0IsS0FBSyxJQUFvQixPQUFoQm5CLFFBQVFNLE9BQU8sRUFBQztnQkFBT2MsS0FBS3BCLFFBQVFNLE9BQU87Z0JBQUVlLE9BQU07Z0JBQUtDLFFBQU87Ozs7OzswQkFDdkcsOERBQUNOO2dCQUFJQyxXQUFXcEIsd0VBQWtCOztrQ0FDaEMsOERBQUMyQjt3QkFBRVAsV0FBV3BCLHdFQUFrQjs7NEJBQUdHLFFBQVFRLEVBQUU7NEJBQUM7NEJBQUVSLFFBQVEwQixJQUFJLEdBQUcsS0FBa0IsT0FBYjFCLFFBQVEwQixJQUFJLElBQUs7Ozs7Ozs7a0NBQ3JGLDhEQUFDRjt3QkFBRVAsV0FBV3BCLG9FQUFjO2tDQUFHRyxRQUFRTSxPQUFPOzs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDa0I7Z0JBQUVQLFdBQVdwQiwyRUFBcUI7MEJBQUdPOzs7Ozs7Ozs7Ozs7QUFHNUMsRUFBRTtHQWxEV0w7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LnRzeD8xYmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIm5lYXItYXBpLWpzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjsgLy8gSW1wb3J0IHRoZSBJbWFnZSBjb21wb25lbnQgZnJvbSB0aGUgY29ycmVjdCBwYWNrYWdlXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWNjb3VudC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBOZWFyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvbmVhci1jb250ZXh0XCI7XG5pbXBvcnQgeyBXYWxsZXQgfSBmcm9tIFwiQC9saWIvbmVhclwiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCJAL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50VmlldyA9ICh7XG4gIGFjY291bnQsXG59IDoge1xuICBhY2NvdW50OiBBY2NvdW50O1xufSkgPT4ge1xuICBjb25zdCB7IHdhbGxldCwgZXRoZXJldW0sIGJpdGNvaW4gfSA9IHVzZUNvbnRleHQoTmVhckNvbnRleHQpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN3aXRjaCAoYWNjb3VudC5uZXR3b3JrKSB7XG4gICAgICBjYXNlIFwibmVhclwiOlxuICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgd2FsbGV0LmdldEJhbGFuY2UoYWNjb3VudC5pZClcbiAgICAgICAgICAgIC50aGVuKChiYWxhbmNlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEJhbGFuY2UodXRpbHMuZm9ybWF0LmZvcm1hdE5lYXJBbW91bnQoYmFsYW5jZSkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImV0aGVyZXVtXCI6XG4gICAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICAgIGV0aGVyZXVtLmdldEJhbGFuY2UoYWNjb3VudC5pZClcbiAgICAgICAgICAgIC50aGVuKChiYWxhbmNlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJiaXRjb2luXCI6XG4gICAgICAgIGlmIChiaXRjb2luKSB7XG4gICAgICAgICAgYml0Y29pbi5nZXRCYWxhbmNlKGFjY291bnQuaWQpXG4gICAgICAgICAgICAudGhlbigoYmFsYW5jZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRCYWxhbmNlKGJhbGFuY2UudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LCBbYWNjb3VudF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50fT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9e2AvJHthY2NvdW50Lm5ldHdvcmt9LnN2Z2B9IGFsdD17YWNjb3VudC5uZXR3b3JrfSB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50SW5mb30+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnROYW1lfT57YWNjb3VudC5pZH0ge2FjY291bnQubmFtZSA/IGAtICR7YWNjb3VudC5uYW1lfWAgOiBcIlwifTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmV0d29ya30+e2FjY291bnQubmV0d29ya308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRCYWxhbmNlfT57YmFsYW5jZX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1dGlscyIsIkltYWdlIiwic3R5bGVzIiwiTmVhckNvbnRleHQiLCJBY2NvdW50VmlldyIsImFjY291bnQiLCJ3YWxsZXQiLCJldGhlcmV1bSIsImJpdGNvaW4iLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsIm5ldHdvcmsiLCJnZXRCYWxhbmNlIiwiaWQiLCJ0aGVuIiwiZm9ybWF0IiwiZm9ybWF0TmVhckFtb3VudCIsImNhdGNoIiwiY29uc29sZSIsIndhcm4iLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImFjY291bnRJbmZvIiwicCIsImFjY291bnROYW1lIiwibmFtZSIsImFjY291bnRCYWxhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/account/account.tsx\n"));

/***/ })

});