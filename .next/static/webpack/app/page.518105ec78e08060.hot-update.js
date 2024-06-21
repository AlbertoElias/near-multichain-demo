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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountView: function() { return /* binding */ AccountView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js */ \"(app-pages-browser)/./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.module.css */ \"(app-pages-browser)/./src/components/account/account.module.css\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_account_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction getToken(network) {\n    switch(network){\n        case \"ethereum\":\n            return \"ETH\";\n        case \"bitcoin\":\n            return \"BTC\";\n        default:\n            return \"NEAR\";\n    }\n}\nconst AccountView = (param)=>{\n    let { account, onBalanceUpdate } = param;\n    _s();\n    const { wallet, ethereum, bitcoin } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [usd, setUsd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isToastVisible, setIsToastVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const updateBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async function() {\n        let initialLoad = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        if (initialLoad) setIsLoading(true);\n        try {\n            let balance = \"\";\n            switch(account.network){\n                case \"near\":\n                    if (wallet) {\n                        const nearBalance = await wallet.getBalance(account.id);\n                        balance = near_api_js__WEBPACK_IMPORTED_MODULE_2__.utils.format.formatNearAmount(nearBalance, 4);\n                    }\n                    break;\n                case \"ethereum\":\n                    if (ethereum) {\n                        const ethBalance = await ethereum.getBalance(account.id);\n                        balance = ethBalance.toString();\n                    }\n                    break;\n                case \"bitcoin\":\n                    if (bitcoin) {\n                        const btcBalance = await bitcoin.getBalance(account.id);\n                        balance = btcBalance.toString();\n                    }\n                    break;\n            }\n            setBalance(balance);\n        } catch (error) {\n            console.warn(error);\n        } finally{\n            setIsLoading(false);\n        }\n    }, [\n        account,\n        wallet,\n        ethereum,\n        bitcoin\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        updateBalance(true);\n        const interval = setInterval(updateBalance, 5000);\n        return ()=>clearInterval(interval);\n    }, [\n        updateBalance\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (balance === \"\") return;\n        const apiUrl = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_6__.FiatConvertAPI).concat(getToken(account.network), \"/usd?amount=\").concat(balance);\n        fetch(apiUrl).then((response)=>response.json()).then((data)=>{\n            if (data.status === \"success\") {\n                const formattedUsd = parseFloat(data.USD).toFixed(2);\n                console.log(formattedUsd);\n                setUsd(formattedUsd);\n            } else {\n                setUsd(\"0\");\n            }\n            onBalanceUpdate(account.id, data.USD);\n        }).catch(()=>setUsd(\"0\"));\n    }, [\n        balance\n    ]);\n    function copyAddress() {\n        navigator.clipboard.writeText(account.id);\n        setIsToastVisible(true);\n    // setTimeout(() => setIsToastVisible(false), 2000);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().account),\n        onClick: copyAddress,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                src: \"/\".concat(account.network, \".svg\"),\n                alt: account.network,\n                width: \"32\",\n                height: \"32\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountName),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountNamePrimary),\n                                children: account.network === \"near\" ? account.id : account.name\n                            }, void 0, false, {\n                                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined),\n                            account.network !== \"near\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountNameSecondary),\n                                children: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.trimAddress)(account.id)\n                            }, void 0, false, {\n                                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 42\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().network),\n                        children: account.network\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalanceWrapper), \" \").concat(isLoading && \"isLoading\"),\n                children: [\n                    !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalance),\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 24\n                    }, undefined),\n                    !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountUsd),\n                        children: \"USD \".concat(usd)\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 24\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"spinner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            isToastVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().toast),\n                children: \"Copied Address!\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 115,\n                columnNumber: 26\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountView, \"iw/IsqNtBwiruCBOzxGiwBNEsM0=\");\n_c = AccountView;\nvar _c;\n$RefreshReg$(_c, \"AccountView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDakM7QUFDTDtBQUVXO0FBQ1c7QUFFWDtBQUNBO0FBRTFDLFNBQVNVLFNBQVNDLE9BQWU7SUFDL0IsT0FBUUE7UUFDTixLQUFLO1lBQ0gsT0FBTztRQUNULEtBQUs7WUFDSCxPQUFPO1FBQ1Q7WUFDRSxPQUFPO0lBQ1g7QUFDRjtBQUVPLE1BQU1DLGNBQWM7UUFBQyxFQUMxQkMsT0FBTyxFQUNQQyxlQUFlLEVBSWhCOztJQUNDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHaEIsaURBQVVBLENBQUNNLDhEQUFXQTtJQUM1RCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLEtBQUtDLE9BQU8sR0FBR25CLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ29CLGdCQUFnQkMsa0JBQWtCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNzQixXQUFXQyxhQUFhLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNd0IsZ0JBQWdCdkIsa0RBQVdBLENBQUM7WUFBT3dCLCtFQUFjO1FBQ3JELElBQUlBLGFBQWFGLGFBQWE7UUFFOUIsSUFBSTtZQUNGLElBQUlQLFVBQVU7WUFDZCxPQUFRTCxRQUFRRixPQUFPO2dCQUNyQixLQUFLO29CQUNILElBQUlJLFFBQVE7d0JBQ1YsTUFBTWEsY0FBYyxNQUFNYixPQUFPYyxVQUFVLENBQUNoQixRQUFRaUIsRUFBRTt3QkFDdERaLFVBQVVkLDhDQUFLQSxDQUFDMkIsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0osYUFBYTtvQkFDdkQ7b0JBQ0E7Z0JBQ0YsS0FBSztvQkFDSCxJQUFJWixVQUFVO3dCQUNaLE1BQU1pQixhQUFhLE1BQU1qQixTQUFTYSxVQUFV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Ozs7O0FBR3JELEVBQUU7R0FoR1dNO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC50c3g/MWJiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwibmVhci1hcGktanNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FjY291bnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgTmVhckNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L25lYXItY29udGV4dFwiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCJAL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0XCI7XG5pbXBvcnQgeyBGaWF0Q29udmVydEFQSSB9IGZyb20gXCJAL2NvbmZpZ1wiO1xuaW1wb3J0IHsgdHJpbUFkZHJlc3MgfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZnVuY3Rpb24gZ2V0VG9rZW4obmV0d29yazogc3RyaW5nKSB7XG4gIHN3aXRjaCAobmV0d29yaykge1xuICAgIGNhc2UgXCJldGhlcmV1bVwiOlxuICAgICAgcmV0dXJuIFwiRVRIXCI7XG4gICAgY2FzZSBcImJpdGNvaW5cIjpcbiAgICAgIHJldHVybiBcIkJUQ1wiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJORUFSXCI7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEFjY291bnRWaWV3ID0gKHtcbiAgYWNjb3VudCxcbiAgb25CYWxhbmNlVXBkYXRlXG59IDoge1xuICBhY2NvdW50OiBBY2NvdW50O1xuICBvbkJhbGFuY2VVcGRhdGU6IChpZDogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnN0IHsgd2FsbGV0LCBldGhlcmV1bSwgYml0Y29pbiB9ID0gdXNlQ29udGV4dChOZWFyQ29udGV4dCk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXNkLCBzZXRVc2RdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1RvYXN0VmlzaWJsZSwgc2V0SXNUb2FzdFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHVwZGF0ZUJhbGFuY2UgPSB1c2VDYWxsYmFjayhhc3luYyAoaW5pdGlhbExvYWQgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChpbml0aWFsTG9hZCkgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICBsZXQgYmFsYW5jZSA9IFwiXCI7XG4gICAgICBzd2l0Y2ggKGFjY291bnQubmV0d29yaykge1xuICAgICAgICBjYXNlIFwibmVhclwiOlxuICAgICAgICAgIGlmICh3YWxsZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5lYXJCYWxhbmNlID0gYXdhaXQgd2FsbGV0LmdldEJhbGFuY2UoYWNjb3VudC5pZCk7XG4gICAgICAgICAgICBiYWxhbmNlID0gdXRpbHMuZm9ybWF0LmZvcm1hdE5lYXJBbW91bnQobmVhckJhbGFuY2UsIDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImV0aGVyZXVtXCI6XG4gICAgICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgICAgICBjb25zdCBldGhCYWxhbmNlID0gYXdhaXQgZXRoZXJldW0uZ2V0QmFsYW5jZShhY2NvdW50LmlkKTtcbiAgICAgICAgICAgIGJhbGFuY2UgPSBldGhCYWxhbmNlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYml0Y29pblwiOlxuICAgICAgICAgIGlmIChiaXRjb2luKSB7XG4gICAgICAgICAgICBjb25zdCBidGNCYWxhbmNlID0gYXdhaXQgYml0Y29pbi5nZXRCYWxhbmNlKGFjY291bnQuaWQpO1xuICAgICAgICAgICAgYmFsYW5jZSA9IGJ0Y0JhbGFuY2UudG9TdHJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzZXRCYWxhbmNlKGJhbGFuY2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2FjY291bnQsIHdhbGxldCwgZXRoZXJldW0sIGJpdGNvaW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZUJhbGFuY2UodHJ1ZSk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVCYWxhbmNlLCA1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFt1cGRhdGVCYWxhbmNlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmFsYW5jZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IGFwaVVybCA9IGAke0ZpYXRDb252ZXJ0QVBJfSR7Z2V0VG9rZW4oYWNjb3VudC5uZXR3b3JrKX0vdXNkP2Ftb3VudD0ke2JhbGFuY2V9YDtcbiAgICBmZXRjaChhcGlVcmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRVc2QgPSBwYXJzZUZsb2F0KGRhdGEuVVNEKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1hdHRlZFVzZClcbiAgICAgICAgICBzZXRVc2QoZm9ybWF0dGVkVXNkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFVzZChcIjBcIik7XG4gICAgICAgIH1cbiAgICAgICAgb25CYWxhbmNlVXBkYXRlKGFjY291bnQuaWQsIGRhdGEuVVNEKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0VXNkKFwiMFwiKSk7XG4gIH0sIFtiYWxhbmNlXSk7XG5cbiAgZnVuY3Rpb24gY29weUFkZHJlc3MoKSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYWNjb3VudC5pZCk7XG4gICAgc2V0SXNUb2FzdFZpc2libGUodHJ1ZSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiBzZXRJc1RvYXN0VmlzaWJsZShmYWxzZSksIDIwMDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnR9IG9uQ2xpY2s9e2NvcHlBZGRyZXNzfT5cbiAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9e2AvJHthY2NvdW50Lm5ldHdvcmt9LnN2Z2B9IGFsdD17YWNjb3VudC5uZXR3b3JrfSB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50SW5mb30+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnROYW1lfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50TmFtZVByaW1hcnl9PlxuICAgICAgICAgICAge2FjY291bnQubmV0d29yayA9PT0gXCJuZWFyXCIgPyBhY2NvdW50LmlkIDogYWNjb3VudC5uYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7YWNjb3VudC5uZXR3b3JrICE9PSBcIm5lYXJcIiAmJiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50TmFtZVNlY29uZGFyeX0+e3RyaW1BZGRyZXNzKGFjY291bnQuaWQpfTwvc3Bhbj59XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmV0d29ya30+e2FjY291bnQubmV0d29ya308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWNjb3VudEJhbGFuY2VXcmFwcGVyfSAke2lzTG9hZGluZyAmJiAnaXNMb2FkaW5nJ31gfT5cbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudEJhbGFuY2V9PntiYWxhbmNlfTwvcD59XG4gICAgICAgIHshaXNMb2FkaW5nICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRVc2R9PntgVVNEICR7dXNkfWB9PC9wPn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzVG9hc3RWaXNpYmxlICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRvYXN0fT5Db3BpZWQgQWRkcmVzcyE8L3A+fVxuICAgIDwvZGl2PlxuICApO1xufTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1dGlscyIsIkltYWdlIiwic3R5bGVzIiwiTmVhckNvbnRleHQiLCJGaWF0Q29udmVydEFQSSIsInRyaW1BZGRyZXNzIiwiZ2V0VG9rZW4iLCJuZXR3b3JrIiwiQWNjb3VudFZpZXciLCJhY2NvdW50Iiwib25CYWxhbmNlVXBkYXRlIiwid2FsbGV0IiwiZXRoZXJldW0iLCJiaXRjb2luIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ1c2QiLCJzZXRVc2QiLCJpc1RvYXN0VmlzaWJsZSIsInNldElzVG9hc3RWaXNpYmxlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidXBkYXRlQmFsYW5jZSIsImluaXRpYWxMb2FkIiwibmVhckJhbGFuY2UiLCJnZXRCYWxhbmNlIiwiaWQiLCJmb3JtYXQiLCJmb3JtYXROZWFyQW1vdW50IiwiZXRoQmFsYW5jZSIsInRvU3RyaW5nIiwiYnRjQmFsYW5jZSIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFwaVVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJmb3JtYXR0ZWRVc2QiLCJwYXJzZUZsb2F0IiwiVVNEIiwidG9GaXhlZCIsImxvZyIsImNhdGNoIiwiY29weUFkZHJlc3MiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWNjb3VudEluZm8iLCJwIiwiYWNjb3VudE5hbWUiLCJzcGFuIiwiYWNjb3VudE5hbWVQcmltYXJ5IiwibmFtZSIsImFjY291bnROYW1lU2Vjb25kYXJ5IiwiYWNjb3VudEJhbGFuY2VXcmFwcGVyIiwiYWNjb3VudEJhbGFuY2UiLCJhY2NvdW50VXNkIiwidG9hc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/account/account.tsx\n"));

/***/ })

});