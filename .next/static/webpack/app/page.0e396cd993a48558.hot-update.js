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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountView: function() { return /* binding */ AccountView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-api-js */ \"(app-pages-browser)/./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.module.css */ \"(app-pages-browser)/./src/components/account/account.module.css\");\n/* harmony import */ var _account_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_account_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction getToken(network) {\n    switch(network){\n        case \"ethereum\":\n            return \"ETH\";\n        case \"bitcoin\":\n            return \"BTC\";\n        default:\n            return \"NEAR\";\n    }\n}\nconst AccountView = (param)=>{\n    let { account } = param;\n    _s();\n    const { wallet, ethereum, bitcoin } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [usd, setUsd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const updateBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async function() {\n        let initialLoad = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;\n        if (initialLoad) setLoading(true);\n        try {\n            let balance = \"\";\n            switch(account.network){\n                case \"near\":\n                    if (wallet) {\n                        setName(account.id);\n                        const nearBalance = await wallet.getBalance(account.id);\n                        balance = near_api_js__WEBPACK_IMPORTED_MODULE_2__.utils.format.formatNearAmount(nearBalance, 4);\n                    }\n                    break;\n                case \"ethereum\":\n                    if (ethereum) {\n                        setName(\"\".concat(account.name, \" - \").concat(ethereum.trimAddress(account.id)));\n                        const ethBalance = await ethereum.getBalance(account.id);\n                        balance = ethBalance.toString();\n                    }\n                    break;\n                case \"bitcoin\":\n                    if (bitcoin) {\n                        setName(\"\".concat(account.name, \" - \").concat(bitcoin.trimAddress(account.id)));\n                        const btcBalance = await bitcoin.getBalance(account.id);\n                        balance = btcBalance.toString();\n                    }\n                    break;\n            }\n            setBalance(balance);\n        } catch (error) {\n            console.warn(error);\n        } finally{\n            setLoading(false);\n        }\n    }, [\n        account,\n        wallet,\n        ethereum,\n        bitcoin\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        updateBalance(true);\n        const interval = setInterval(updateBalance, 5000);\n        return ()=>clearInterval(interval);\n    }, [\n        updateBalance\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (balance === \"\") return;\n        const apiUrl = \"\".concat(_config__WEBPACK_IMPORTED_MODULE_6__.FiatConvertAPI).concat(getToken(account.network), \"/usd?amount=\").concat(balance);\n        fetch(apiUrl).then((response)=>response.json()).then((data)=>{\n            setUsd(Number(data.USD).toFixed(2));\n        }).catch(()=>setUsd(\"0\"));\n    }, [\n        balance\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().account),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                src: \"/\".concat(account.network, \".svg\"),\n                alt: account.network,\n                width: \"32\",\n                height: \"32\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountInfo),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountName),\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().network),\n                        children: account.network\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalanceWrapper), \" \").concat(loading && \"loading\"),\n                children: [\n                    !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountBalance),\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 22\n                    }, undefined),\n                    !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_account_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountUsd),\n                        children: \"USD \".concat(usd)\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 22\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"spinner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/account/account.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccountView, \"I+r8b32JDfiAxh+jjwGPz+zs0TU=\");\n_c = AccountView;\nvar _c;\n$RefreshReg$(_c, \"AccountView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRTtBQUNqQztBQUNMO0FBRVc7QUFDVztBQUVYO0FBRTFDLFNBQVNTLFNBQVNDLE9BQWU7SUFDL0IsT0FBUUE7UUFDTixLQUFLO1lBQ0gsT0FBTztRQUNULEtBQUs7WUFDSCxPQUFPO1FBQ1Q7WUFDRSxPQUFPO0lBQ1g7QUFDRjtBQUVPLE1BQU1DLGNBQWM7UUFBQyxFQUMxQkMsT0FBTyxFQUdSOztJQUNDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRSxHQUFHZCxpREFBVUEsQ0FBQ00sOERBQVdBO0lBQzVELE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNnQixLQUFLQyxPQUFPLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNrQixNQUFNQyxRQUFRLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNvQixTQUFTQyxXQUFXLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNc0IsZ0JBQWdCckIsa0RBQVdBLENBQUM7WUFBT3NCLCtFQUFjO1FBQ3JELElBQUlBLGFBQWFGLFdBQVc7UUFFNUIsSUFBSTtZQUNGLElBQUlQLFVBQVU7WUFDZCxPQUFRSixRQUFRRixPQUFPO2dCQUNyQixLQUFLO29CQUNILElBQUlHLFFBQVE7d0JBQ1ZRLFFBQVFULFFBQVFjLEVBQUU7d0JBQ2xCLE1BQU1DLGNBQWMsTUFBTWQsT0FBT2UsVUFBVSxDQUFDaEIsUUFBUWMsRUFBRTt3QkFDdERWLFVBQVVaLDhDQUFLQSxDQUFDeUIsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsYUFBYTtvQkFDdkQ7b0JBQ0E7Z0JBQ0YsS0FBSztvQkFDSCxJQUFJYixVQUFVO3dCQUNaTyxRQUFRLEdBQXFCUCxPQUFsQkYsUUFBUVEsSUFBSSxFQUFDLE9BQXNDLE9BQWpDTixTQUFTaUIsV0FBVyxDQUFDbkIsUUFBUWMsRUFBRTt3QkFDNUQsTUFBTU0sYUFBYSxNQUFNbEIsU0FBU2MsVUFBVSxDQUFDaEIsUUFBUWMsRUFBRTt3QkFDdkRWLFVBQVVnQixXQUFXQyxRQUFRO29CQUMvQjtvQkFDQTtnQkFDRixLQUFLO29CQUNILElBQUlsQixTQUFTO3dCQUNYTSxRQUFRLEdBQXFCTixPQUFsQkgsUUFBUVEsSUFBSSxFQUFDLE9BQXFDLE9BQWhDTCxRQUFRZ0IsV0FBVyxDQUFDbkIsUUFBUWMsRUFBRTt3QkFDM0QsTUFBTVEsYUFBYSxNQUFNbkIsUUFBUWEsVUFBVSxDQUFDaEIsUUFBUWMsRUFBRTt3QkFDdERWLFVBQVVrQixXQUFXRCxRQUFRO29CQUMvQjtvQkFDQTtZQUNKO1lBQ0FoQixXQUFXRDtRQUNiLEVBQUUsT0FBT21CLE9BQU87WUFDZEMsUUFBUUMsSUFBSSxDQUFDRjtRQUNmLFNBQVU7WUFDUlosV0FBVztRQUNiO0lBQ0YsR0FBRztRQUFDWDtRQUFTQztRQUFRQztRQUFVQztLQUFRO0lBRXZDZixnREFBU0EsQ0FBQztRQUNSd0IsY0FBYztRQUNkLE1BQU1jLFdBQVdDLFlBQVlmLGVBQWU7UUFDNUMsT0FBTyxJQUFNZ0IsY0FBY0Y7SUFDN0IsR0FBRztRQUFDZDtLQUFjO0lBRWxCeEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJZ0IsWUFBWSxJQUFJO1FBQ3BCLE1BQU15QixTQUFTLEdBQW9CaEMsT0FBakJELG1EQUFjQSxFQUEyQ1EsT0FBeENQLFNBQVNHLFFBQVFGLE9BQU8sR0FBRSxnQkFBc0IsT0FBUk07UUFDM0UwQixNQUFNRCxRQUNIRSxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHO1lBQ0wzQixPQUFPNEIsT0FBT0QsS0FBS0UsR0FBRyxFQUFFQyxPQUFPLENBQUM7UUFDbEMsR0FDQ0MsS0FBSyxDQUFDLElBQU0vQixPQUFPO0lBQ3hCLEdBQUc7UUFBQ0g7S0FBUTtJQUVaLHFCQUNFLDhEQUFDbUM7UUFBSUMsV0FBVzlDLG9FQUFjOzswQkFDNUIsOERBQUNELGtEQUFLQTtnQkFBQytDLFdBQVc5QyxpRUFBVztnQkFBRWdELEtBQUssSUFBb0IsT0FBaEIxQyxRQUFRRixPQUFPLEVBQUM7Z0JBQU82QyxLQUFLM0MsUUFBUUYsT0FBTztnQkFBRThDLE9BQU07Z0JBQUtDLFFBQU87Ozs7OzswQkFDdkcsOERBQUNOO2dCQUFJQyxXQUFXOUMsd0VBQWtCOztrQ0FDaEMsOERBQUNxRDt3QkFBRVAsV0FBVzlDLHdFQUFrQjtrQ0FBR2M7Ozs7OztrQ0FDbkMsOERBQUN1Qzt3QkFBRVAsV0FBVzlDLG9FQUFjO2tDQUFHTSxRQUFRRixPQUFPOzs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDeUM7Z0JBQUlDLFdBQVcsR0FBbUM5QixPQUFoQ2hCLGtGQUE0QixFQUFDLEtBQXdCLE9BQXJCZ0IsV0FBVzs7b0JBQzNELENBQUNBLHlCQUFXLDhEQUFDcUM7d0JBQUVQLFdBQVc5QywyRUFBcUI7a0NBQUdVOzs7Ozs7b0JBQ2xELENBQUNNLHlCQUFXLDhEQUFDcUM7d0JBQUVQLFdBQVc5Qyx1RUFBaUI7a0NBQUcsT0FBVyxPQUFKWTs7Ozs7O2tDQUN0RCw4REFBQzhDO3dCQUFLWixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEIsRUFBRTtHQTlFV3pDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudC50c3g/MWJiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwibmVhci1hcGktanNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FjY291bnQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgTmVhckNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L25lYXItY29udGV4dFwiO1xuaW1wb3J0IHsgQWNjb3VudCB9IGZyb20gXCJAL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0XCI7XG5pbXBvcnQgeyBGaWF0Q29udmVydEFQSSB9IGZyb20gXCJAL2NvbmZpZ1wiO1xuXG5mdW5jdGlvbiBnZXRUb2tlbihuZXR3b3JrOiBzdHJpbmcpIHtcbiAgc3dpdGNoIChuZXR3b3JrKSB7XG4gICAgY2FzZSBcImV0aGVyZXVtXCI6XG4gICAgICByZXR1cm4gXCJFVEhcIjtcbiAgICBjYXNlIFwiYml0Y29pblwiOlxuICAgICAgcmV0dXJuIFwiQlRDXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIk5FQVJcIjtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQWNjb3VudFZpZXcgPSAoe1xuICBhY2NvdW50LFxufSA6IHtcbiAgYWNjb3VudDogQWNjb3VudDtcbn0pID0+IHtcbiAgY29uc3QgeyB3YWxsZXQsIGV0aGVyZXVtLCBiaXRjb2luIH0gPSB1c2VDb250ZXh0KE5lYXJDb250ZXh0KTtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1c2QsIHNldFVzZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB1cGRhdGVCYWxhbmNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGluaXRpYWxMb2FkID0gZmFsc2UpID0+IHtcbiAgICBpZiAoaW5pdGlhbExvYWQpIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIGxldCBiYWxhbmNlID0gXCJcIjtcbiAgICAgIHN3aXRjaCAoYWNjb3VudC5uZXR3b3JrKSB7XG4gICAgICAgIGNhc2UgXCJuZWFyXCI6XG4gICAgICAgICAgaWYgKHdhbGxldCkge1xuICAgICAgICAgICAgc2V0TmFtZShhY2NvdW50LmlkKTtcbiAgICAgICAgICAgIGNvbnN0IG5lYXJCYWxhbmNlID0gYXdhaXQgd2FsbGV0LmdldEJhbGFuY2UoYWNjb3VudC5pZCk7XG4gICAgICAgICAgICBiYWxhbmNlID0gdXRpbHMuZm9ybWF0LmZvcm1hdE5lYXJBbW91bnQobmVhckJhbGFuY2UsIDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImV0aGVyZXVtXCI6XG4gICAgICAgICAgaWYgKGV0aGVyZXVtKSB7XG4gICAgICAgICAgICBzZXROYW1lKGAke2FjY291bnQubmFtZX0gLSAke2V0aGVyZXVtLnRyaW1BZGRyZXNzKGFjY291bnQuaWQpfWApO1xuICAgICAgICAgICAgY29uc3QgZXRoQmFsYW5jZSA9IGF3YWl0IGV0aGVyZXVtLmdldEJhbGFuY2UoYWNjb3VudC5pZCk7XG4gICAgICAgICAgICBiYWxhbmNlID0gZXRoQmFsYW5jZS50b1N0cmluZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImJpdGNvaW5cIjpcbiAgICAgICAgICBpZiAoYml0Y29pbikge1xuICAgICAgICAgICAgc2V0TmFtZShgJHthY2NvdW50Lm5hbWV9IC0gJHtiaXRjb2luLnRyaW1BZGRyZXNzKGFjY291bnQuaWQpfWApO1xuICAgICAgICAgICAgY29uc3QgYnRjQmFsYW5jZSA9IGF3YWl0IGJpdGNvaW4uZ2V0QmFsYW5jZShhY2NvdW50LmlkKTtcbiAgICAgICAgICAgIGJhbGFuY2UgPSBidGNCYWxhbmNlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9LCBbYWNjb3VudCwgd2FsbGV0LCBldGhlcmV1bSwgYml0Y29pbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlQmFsYW5jZSh0cnVlKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZUJhbGFuY2UsIDUwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW3VwZGF0ZUJhbGFuY2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChiYWxhbmNlID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgYXBpVXJsID0gYCR7RmlhdENvbnZlcnRBUEl9JHtnZXRUb2tlbihhY2NvdW50Lm5ldHdvcmspfS91c2Q/YW1vdW50PSR7YmFsYW5jZX1gO1xuICAgIGZldGNoKGFwaVVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0VXNkKE51bWJlcihkYXRhLlVTRCkudG9GaXhlZCgyKSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0VXNkKFwiMFwiKSk7XG4gIH0sIFtiYWxhbmNlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnR9PlxuICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz17YC8ke2FjY291bnQubmV0d29ya30uc3ZnYH0gYWx0PXthY2NvdW50Lm5ldHdvcmt9IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRJbmZvfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudE5hbWV9PntuYW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubmV0d29ya30+e2FjY291bnQubmV0d29ya308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWNjb3VudEJhbGFuY2VXcmFwcGVyfSAke2xvYWRpbmcgJiYgJ2xvYWRpbmcnfWB9PlxuICAgICAgICB7IWxvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudEJhbGFuY2V9PntiYWxhbmNlfTwvcD59XG4gICAgICAgIHshbG9hZGluZyAmJiA8cCBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50VXNkfT57YFVTRCAke3VzZH1gfTwvcD59XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXRpbHMiLCJJbWFnZSIsInN0eWxlcyIsIk5lYXJDb250ZXh0IiwiRmlhdENvbnZlcnRBUEkiLCJnZXRUb2tlbiIsIm5ldHdvcmsiLCJBY2NvdW50VmlldyIsImFjY291bnQiLCJ3YWxsZXQiLCJldGhlcmV1bSIsImJpdGNvaW4iLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInVzZCIsInNldFVzZCIsIm5hbWUiLCJzZXROYW1lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cGRhdGVCYWxhbmNlIiwiaW5pdGlhbExvYWQiLCJpZCIsIm5lYXJCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsImZvcm1hdCIsImZvcm1hdE5lYXJBbW91bnQiLCJ0cmltQWRkcmVzcyIsImV0aEJhbGFuY2UiLCJ0b1N0cmluZyIsImJ0Y0JhbGFuY2UiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJhcGlVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiTnVtYmVyIiwiVVNEIiwidG9GaXhlZCIsImNhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibG9nbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWNjb3VudEluZm8iLCJwIiwiYWNjb3VudE5hbWUiLCJhY2NvdW50QmFsYW5jZVdyYXBwZXIiLCJhY2NvdW50QmFsYW5jZSIsImFjY291bnRVc2QiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/account/account.tsx\n"));

/***/ })

});