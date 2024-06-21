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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountView: function() { return /* binding */ AccountView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js */ \"(app-pages-browser)/./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.module.css */ \"(app-pages-browser)/./src/components/account/account.module.css\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_account_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction getToken(network) {\n    switch(network){\n        case \"ethereum\":\n            return \"ETH\";\n        case \"bitcoin\":\n            return \"BTC\";\n        default:\n            return \"NEAR\";\n    }\n}\nconst AccountView = (param)=>{\n    let { account, onBalanceUpdate } = param;\n    _s();\n    const { wallet, ethereum, bitcoin } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [usd, setUsd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isToastVisible, setIsToastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const updateBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async function() {\n        let initialLoad = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        if (initialLoad) setIsLoading(true);\n        try {\n            let balance = \"\";\n            switch(account.network){\n                case \"near\":\n                    if (wallet) {\n                        const nearBalance = await wallet.getBalance(account.id);\n                        balance = near_api_js__WEBPACK_IMPORTED_MODULE_2__.utils.format.formatNearAmount(nearBalance, 4);\n                    }\n                    break;\n                case \"ethereum\":\n                    if (ethereum) {\n                        const ethBalance = await ethereum.getBalance(account.id);\n                        balance = ethBalance.toString();\n                    }\n                    break;\n                case \"bitcoin\":\n                    if (bitcoin) {\n                        const btcBalance = await bitcoin.getBalance(account.id);\n                        balance = btcBalance.toString();\n                    }\n                    break;\n            }\n            setBalance(balance);\n        } catch (error) {\n            console.warn(error);\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        account,\n        wallet,\n        ethereum,\n        bitcoin\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        updateBalance(true);\n        const interval = setInterval(updateBalance, 5000);\n        return ()=>clearInterval(interval);\n    }, [\n        updateBalance\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (balance === \"\") return;\n        const apiUrl = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_6__.FiatConvertAPI).concat(getToken(account.network), \"/usd?amount=\").concat(balance);\n        fetch(apiUrl).then((response)=>response.json()).then((data)=>{\n            if (data.status === \"success\") {\n                const formattedUsd = parseFloat(data.USD).toFixed(2);\n                console.log(formattedUsd);\n                setUsd(formattedUsd);\n            } else {\n                setUsd(\"0\");\n            }\n            onBalanceUpdate(account.id, data.USD);\n        }).catch(()=>setUsd(\"0\"));\n    }, [\n        balance\n    ]);\n    function copyAddress() {\n        navigator.clipboard.writeText(account.id);\n        setIsToastVisible(true);\n        setTimeout(()=>setIsToastVisible(false), 2000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().account),\n        onClick: copyAddress,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                src: \"/\".concat(account.network, \".svg\"),\n                alt: account.network,\n                width: \"32\",\n                height: \"32\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountName),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountNamePrimary),\n                                children: account.network === \"near\" ? account.id : account.name\n                            }, void 0, false, {\n                                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined),\n                            account.network !== \"near\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountNameSecondary),\n                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.trimAddress)(account.id)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 42\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().network),\n                        children: account.network\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalanceWrapper), \" \").concat(isLoading && \"loading\"),\n                children: [\n                    !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalance),\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 24\n                    }, undefined),\n                    !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountUsd),\n                        children: \"USD \".concat(usd)\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 24\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"spinner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"\".concat((_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().toast), \" \").concat(isToastVisible ? (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().toastVisible) : \"\"),\n                children: \"Copied Address!\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountView, \"iw/IsqNtBwiruCBOzxGiwBNEsM0=\");\n_c = AccountView;\nvar _c;\n$RefreshReg$(_c, \"AccountView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDakM7QUFDTDtBQUVXO0FBQ1c7QUFFWDtBQUNBO0FBRTFDLFNBQVNVLFNBQVNDLE9BQWU7SUFDL0IsT0FBUUE7UUFDTixLQUFLO1lBQ0gsT0FBTztRQUNULEtBQUs7WUFDSCxPQUFPO1FBQ1Q7WUFDRSxPQUFPO0lBQ1g7QUFDRjtBQUVPLE1BQU1DLGNBQWM7UUFBQyxFQUMxQkMsT0FBTyxFQUNQQyxlQUFlLEVBSWhCOztJQUNDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHaEIsaURBQVVBLENBQUNNLDhEQUFXQTtJQUM1RCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLEtBQUtDLE9BQU8sR0FBR25CLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ29CLGdCQUFnQkMsa0JBQWtCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNzQixXQUFXQyxhQUFhLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNd0IsZ0JBQWdCdkIsa0RBQVdBLENBQUM7WUFBT3dCLCtFQUFjO1FBQ3JELElBQUlBLGFBQWFGLGFBQWE7UUFFOUIsSUFBSTtZQUNGLElBQUlQLFVBQVU7WUFDZCxPQUFRTCxRQUFRRixPQUFPO2dCQUNyQixLQUFLO29CQUNILElBQUlJLFFBQVE7d0JBQ1YsTUFBTWEsY0FBYyxNQUFNYixPQUFPYyxVQUFVLENBQUNoQixRQUFRaUIsRUFBRTt3QkFDdERaLFVBQVVkLDhDQUFLQSxDQUFDMkIsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0osYUFBYTtvQkFDdkQ7b0JBQ0E7Z0JBQ0YsS0FBSztvQkFDSCxJQUFJWixVQUFVO3dCQUNaLE1BQU1pQixhQUFhLE1BQU1qQixTQUFTYSxVQUFV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aEJoQixrRUFBWSxFQUFDLEtBQTZDLE9BQTFDZ0IsaUJBQWlCaEIseUVBQW1CLEdBQUc7MEJBQU07Ozs7Ozs7Ozs7OztBQUdwRixFQUFFO0dBaEdXTTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQudHN4PzFiYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIm5lYXItYXBpLWpzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hY2NvdW50Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IE5lYXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9uZWFyLWNvbnRleHRcIjtcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tIFwiQC9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dFwiO1xuaW1wb3J0IHsgRmlhdENvbnZlcnRBUEkgfSBmcm9tIFwiQC9jb25maWdcIjtcbmltcG9ydCB7IHRyaW1BZGRyZXNzIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIGdldFRva2VuKG5ldHdvcms6IHN0cmluZykge1xuICBzd2l0Y2ggKG5ldHdvcmspIHtcbiAgICBjYXNlIFwiZXRoZXJldW1cIjpcbiAgICAgIHJldHVybiBcIkVUSFwiO1xuICAgIGNhc2UgXCJiaXRjb2luXCI6XG4gICAgICByZXR1cm4gXCJCVENcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiTkVBUlwiO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50VmlldyA9ICh7XG4gIGFjY291bnQsXG4gIG9uQmFsYW5jZVVwZGF0ZVxufSA6IHtcbiAgYWNjb3VudDogQWNjb3VudDtcbiAgb25CYWxhbmNlVXBkYXRlOiAoaWQ6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSA9PiB2b2lkO1xufSkgPT4ge1xuICBjb25zdCB7IHdhbGxldCwgZXRoZXJldW0sIGJpdGNvaW4gfSA9IHVzZUNvbnRleHQoTmVhckNvbnRleHQpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VzZCwgc2V0VXNkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaXNUb2FzdFZpc2libGUsIHNldElzVG9hc3RWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB1cGRhdGVCYWxhbmNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGluaXRpYWxMb2FkID0gZmFsc2UpID0+IHtcbiAgICBpZiAoaW5pdGlhbExvYWQpIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBcbiAgICB0cnkge1xuICAgICAgbGV0IGJhbGFuY2UgPSBcIlwiO1xuICAgICAgc3dpdGNoIChhY2NvdW50Lm5ldHdvcmspIHtcbiAgICAgICAgY2FzZSBcIm5lYXJcIjpcbiAgICAgICAgICBpZiAod2FsbGV0KSB7XG4gICAgICAgICAgICBjb25zdCBuZWFyQmFsYW5jZSA9IGF3YWl0IHdhbGxldC5nZXRCYWxhbmNlKGFjY291bnQuaWQpO1xuICAgICAgICAgICAgYmFsYW5jZSA9IHV0aWxzLmZvcm1hdC5mb3JtYXROZWFyQW1vdW50KG5lYXJCYWxhbmNlLCA0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJldGhlcmV1bVwiOlxuICAgICAgICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgICAgICAgY29uc3QgZXRoQmFsYW5jZSA9IGF3YWl0IGV0aGVyZXVtLmdldEJhbGFuY2UoYWNjb3VudC5pZCk7XG4gICAgICAgICAgICBiYWxhbmNlID0gZXRoQmFsYW5jZS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJpdGNvaW5cIjpcbiAgICAgICAgICBpZiAoYml0Y29pbikge1xuICAgICAgICAgICAgY29uc3QgYnRjQmFsYW5jZSA9IGF3YWl0IGJpdGNvaW4uZ2V0QmFsYW5jZShhY2NvdW50LmlkKTtcbiAgICAgICAgICAgIGJhbGFuY2UgPSBidGNCYWxhbmNlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFthY2NvdW50LCB3YWxsZXQsIGV0aGVyZXVtLCBiaXRjb2luXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVCYWxhbmNlKHRydWUpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQmFsYW5jZSwgNTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbdXBkYXRlQmFsYW5jZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJhbGFuY2UgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCBhcGlVcmwgPSBgJHtGaWF0Q29udmVydEFQSX0ke2dldFRva2VuKGFjY291bnQubmV0d29yayl9L3VzZD9hbW91bnQ9JHtiYWxhbmNlfWA7XG4gICAgZmV0Y2goYXBpVXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgY29uc3QgZm9ybWF0dGVkVXNkID0gcGFyc2VGbG9hdChkYXRhLlVTRCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtYXR0ZWRVc2QpXG4gICAgICAgICAgc2V0VXNkKGZvcm1hdHRlZFVzZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRVc2QoXCIwXCIpO1xuICAgICAgICB9XG4gICAgICAgIG9uQmFsYW5jZVVwZGF0ZShhY2NvdW50LmlkLCBkYXRhLlVTRCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHNldFVzZChcIjBcIikpO1xuICB9LCBbYmFsYW5jZV0pO1xuXG4gIGZ1bmN0aW9uIGNvcHlBZGRyZXNzKCkge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGFjY291bnQuaWQpO1xuICAgIHNldElzVG9hc3RWaXNpYmxlKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNUb2FzdFZpc2libGUoZmFsc2UpLCAyMDAwKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50fSBvbkNsaWNrPXtjb3B5QWRkcmVzc30+XG4gICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPXtgLyR7YWNjb3VudC5uZXR3b3JrfS5zdmdgfSBhbHQ9e2FjY291bnQubmV0d29ya30gd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudEluZm99PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50TmFtZX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudE5hbWVQcmltYXJ5fT5cbiAgICAgICAgICAgIHthY2NvdW50Lm5ldHdvcmsgPT09IFwibmVhclwiID8gYWNjb3VudC5pZCA6IGFjY291bnQubmFtZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge2FjY291bnQubmV0d29yayAhPT0gXCJuZWFyXCIgJiYgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudE5hbWVTZWNvbmRhcnl9Pnt0cmltQWRkcmVzcyhhY2NvdW50LmlkKX08L3NwYW4+fVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5ldHdvcmt9PnthY2NvdW50Lm5ldHdvcmt9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFjY291bnRCYWxhbmNlV3JhcHBlcn0gJHtpc0xvYWRpbmcgJiYgXCJsb2FkaW5nXCJ9YH0+XG4gICAgICAgIHshaXNMb2FkaW5nICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRCYWxhbmNlfT57YmFsYW5jZX08L3A+fVxuICAgICAgICB7IWlzTG9hZGluZyAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50VXNkfT57YFVTRCAke3VzZH1gfTwvcD59XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvYXN0fSAke2lzVG9hc3RWaXNpYmxlID8gc3R5bGVzLnRvYXN0VmlzaWJsZSA6IFwiXCJ9YH0+Q29waWVkIEFkZHJlc3MhPC9wPlxuICAgIDwvZGl2PlxuICApO1xufTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1dGlscyIsIkltYWdlIiwic3R5bGVzIiwiTmVhckNvbnRleHQiLCJGaWF0Q29udmVydEFQSSIsInRyaW1BZGRyZXNzIiwiZ2V0VG9rZW4iLCJuZXR3b3JrIiwiQWNjb3VudFZpZXciLCJhY2NvdW50Iiwib25CYWxhbmNlVXBkYXRlIiwid2FsbGV0IiwiZXRoZXJldW0iLCJiaXRjb2luIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ1c2QiLCJzZXRVc2QiLCJpc1RvYXN0VmlzaWJsZSIsInNldElzVG9hc3RWaXNpYmxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXBkYXRlQmFsYW5jZSIsImluaXRpYWxMb2FkIiwibmVhckJhbGFuY2UiLCJnZXRCYWxhbmNlIiwiaWQiLCJmb3JtYXQiLCJmb3JtYXROZWFyQW1vdW50IiwiZXRoQmFsYW5jZSIsInRvU3RyaW5nIiwiYnRjQmFsYW5jZSIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFwaVVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJmb3JtYXR0ZWRVc2QiLCJwYXJzZUZsb2F0IiwiVVNEIiwidG9GaXhlZCIsImxvZyIsImNhdGNoIiwiY29weUFkZHJlc3MiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImFjY291bnRJbmZvIiwicCIsImFjY291bnROYW1lIiwic3BhbiIsImFjY291bnROYW1lUHJpbWFyeSIsIm5hbWUiLCJhY2NvdW50TmFtZVNlY29uZGFyeSIsImFjY291bnRCYWxhbmNlV3JhcHBlciIsImFjY291bnRCYWxhbmNlIiwiYWNjb3VudFVzZCIsInRvYXN0IiwidG9hc3RWaXNpYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/account/account.tsx\n"));

/***/ })

});