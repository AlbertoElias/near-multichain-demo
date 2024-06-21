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

/***/ "(app-pages-browser)/./src/components/accounts-container/accounts-cointainer.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/accounts-container/accounts-cointainer.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountsContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_account_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/account/account */ \"(app-pages-browser)/./src/components/account/account.tsx\");\n/* harmony import */ var _components_add_account_modal_add_account_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/add-account-modal/add-account-modal */ \"(app-pages-browser)/./src/components/add-account-modal/add-account-modal.tsx\");\n/* harmony import */ var _accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accounts-container.module.css */ \"(app-pages-browser)/./src/components/accounts-container/accounts-container.module.css\");\n/* harmony import */ var _accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/accounts-reducer-context */ \"(app-pages-browser)/./src/context/accounts-reducer-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AccountsContainer() {\n    _s();\n    const { state } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_5__.AccountsContext);\n    const [addAccountModalIsOpen, setAddAccountModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [balances, setBalances] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleBalanceUpdate = (id, balance)=>{\n        setBalances((prev)=>({\n                ...prev,\n                [id]: balance\n            }));\n    };\n    const totalBalance = Object.values(balances).reduce((acc, balance)=>acc + parseFloat(balance || \"0\"), 0).toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountsContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleLabel),\n                                children: \"Total Balance: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().titleBalance),\n                                children: totalBalance\n                            }, void 0, false, {\n                                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setAddAccountModalIsOpen(true),\n                        children: \"Add Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_add_account_modal_add_account_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        isOpen: addAccountModalIsOpen,\n                        onRequestClose: ()=>setAddAccountModalIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().accounts),\n                children: state === null || state === void 0 ? void 0 : state.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_account_account__WEBPACK_IMPORTED_MODULE_2__.AccountView, {\n                        account: account,\n                        onBalanceUpdate: handleBalanceUpdate\n                    }, account.id, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountsContainer, \"ZrxzyCM6eFejhvjFho75T0aj3hw=\");\n_c = AccountsContainer;\nvar _c;\n$RefreshReg$(_c, \"AccountsContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY291bnRzLWNvbnRhaW5lci9hY2NvdW50cy1jb2ludGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNjO0FBQ29CO0FBQzFCO0FBQ2dCO0FBTXRELFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0ssOEVBQWVBO0lBQzVDLE1BQU0sQ0FBQ0csdUJBQXVCQyx5QkFBeUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkUsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFXLENBQUM7SUFFcEQsTUFBTVcsc0JBQXNCLENBQUNDLElBQVlDO1FBQ3ZDSCxZQUFZLENBQUNJLE9BQVU7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDRixHQUFHLEVBQUVDO1lBQVE7SUFDbEQ7SUFFQSxNQUFNRSxlQUFlQyxPQUFPQyxNQUFNLENBQUNSLFVBQ2hDUyxNQUFNLENBQUMsQ0FBQ0MsS0FBS04sVUFBWU0sTUFBTUMsV0FBV1AsV0FBVyxNQUFNLEdBQzNEUSxPQUFPLENBQUM7SUFFWCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3BCLHlGQUF3Qjs7MEJBQ3RDLDhEQUFDc0I7Z0JBQU9GLFdBQVdwQiw4RUFBYTs7a0NBQzlCLDhEQUFDdUI7d0JBQUdILFdBQVdwQiw2RUFBWTs7MENBQ3pCLDhEQUFDeUI7Z0NBQUtMLFdBQVdwQixrRkFBaUI7MENBQUU7Ozs7OzswQ0FDcEMsOERBQUN5QjtnQ0FBS0wsV0FBV3BCLG9GQUFtQjswQ0FBR1k7Ozs7Ozs7Ozs7OztrQ0FFekMsOERBQUNnQjt3QkFBT0MsU0FBUyxJQUFNeEIseUJBQXlCO2tDQUFPOzs7Ozs7a0NBQ3ZELDhEQUFDTix1RkFBZUE7d0JBQ2QrQixRQUFRMUI7d0JBQ1IyQixnQkFBZ0IsSUFBTTFCLHlCQUF5Qjs7Ozs7Ozs7Ozs7OzBCQUVuRCw4REFBQ2M7Z0JBQUlDLFdBQVdwQixnRkFBZTswQkFDNUJHLGtCQUFBQSw0QkFBQUEsTUFBTzhCLEdBQUcsQ0FBQyxDQUFDQyx3QkFDWCw4REFBQ3BDLG9FQUFXQTt3QkFBa0JvQyxTQUFTQTt3QkFBU0MsaUJBQWlCM0I7dUJBQS9DMEIsUUFBUXpCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEM7R0FoQ3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2NvdW50cy1jb250YWluZXIvYWNjb3VudHMtY29pbnRhaW5lci50c3g/MDAzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWNjb3VudFZpZXcgfSBmcm9tIFwiQC9jb21wb25lbnRzL2FjY291bnQvYWNjb3VudFwiO1xuaW1wb3J0IEFkZEFjY291bnRNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL2FkZC1hY2NvdW50LW1vZGFsL2FkZC1hY2NvdW50LW1vZGFsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FjY291bnRzLWNvbnRhaW5lci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBBY2NvdW50c0NvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dFwiO1xuXG5pbnRlcmZhY2UgQmFsYW5jZXMge1xuICBbaWQ6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudHNDb250YWluZXIoKSB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoQWNjb3VudHNDb250ZXh0KTtcbiAgY29uc3QgW2FkZEFjY291bnRNb2RhbElzT3Blbiwgc2V0QWRkQWNjb3VudE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhbGFuY2VzLCBzZXRCYWxhbmNlc10gPSB1c2VTdGF0ZTxCYWxhbmNlcz4oe30pO1xuXG4gIGNvbnN0IGhhbmRsZUJhbGFuY2VVcGRhdGUgPSAoaWQ6IHN0cmluZywgYmFsYW5jZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0QmFsYW5jZXMoKHByZXYpID0+ICh7IC4uLnByZXYsIFtpZF06IGJhbGFuY2UgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHRvdGFsQmFsYW5jZSA9IE9iamVjdC52YWx1ZXMoYmFsYW5jZXMpXG4gICAgLnJlZHVjZSgoYWNjLCBiYWxhbmNlKSA9PiBhY2MgKyBwYXJzZUZsb2F0KGJhbGFuY2UgfHwgXCIwXCIpLCAwKVxuICAgIC50b0ZpeGVkKDIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50c0NvbnRhaW5lcn0+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVMYWJlbH0+VG90YWwgQmFsYW5jZTogPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQmFsYW5jZX0+e3RvdGFsQmFsYW5jZX08L3NwYW4+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QWRkQWNjb3VudE1vZGFsSXNPcGVuKHRydWUpfT5BZGQgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgICA8QWRkQWNjb3VudE1vZGFsXG4gICAgICAgICAgaXNPcGVuPXthZGRBY2NvdW50TW9kYWxJc09wZW59XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldEFkZEFjY291bnRNb2RhbElzT3BlbihmYWxzZSl9IC8+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWNjb3VudHN9PlxuICAgICAgICB7c3RhdGU/Lm1hcCgoYWNjb3VudCkgPT4gKFxuICAgICAgICAgIDxBY2NvdW50VmlldyBrZXk9e2FjY291bnQuaWR9IGFjY291bnQ9e2FjY291bnR9IG9uQmFsYW5jZVVwZGF0ZT17aGFuZGxlQmFsYW5jZVVwZGF0ZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQWNjb3VudFZpZXciLCJBZGRBY2NvdW50TW9kYWwiLCJzdHlsZXMiLCJBY2NvdW50c0NvbnRleHQiLCJBY2NvdW50c0NvbnRhaW5lciIsInN0YXRlIiwiYWRkQWNjb3VudE1vZGFsSXNPcGVuIiwic2V0QWRkQWNjb3VudE1vZGFsSXNPcGVuIiwiYmFsYW5jZXMiLCJzZXRCYWxhbmNlcyIsImhhbmRsZUJhbGFuY2VVcGRhdGUiLCJpZCIsImJhbGFuY2UiLCJwcmV2IiwidG90YWxCYWxhbmNlIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJhY2NvdW50c0NvbnRhaW5lciIsImhlYWRlciIsImgyIiwidGl0bGUiLCJzcGFuIiwidGl0bGVMYWJlbCIsInRpdGxlQmFsYW5jZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc09wZW4iLCJvblJlcXVlc3RDbG9zZSIsImFjY291bnRzIiwibWFwIiwiYWNjb3VudCIsIm9uQmFsYW5jZVVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/accounts-container/accounts-cointainer.tsx\n"));

/***/ })

});