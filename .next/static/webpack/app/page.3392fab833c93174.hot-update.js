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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountsContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_account_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/account/account */ \"(app-pages-browser)/./src/components/account/account.tsx\");\n/* harmony import */ var _components_add_account_modal_add_account_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/add-account-modal/add-account-modal */ \"(app-pages-browser)/./src/components/add-account-modal/add-account-modal.tsx\");\n/* harmony import */ var _accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accounts-container.module.css */ \"(app-pages-browser)/./src/components/accounts-container/accounts-container.module.css\");\n/* harmony import */ var _accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/accounts-reducer-context */ \"(app-pages-browser)/./src/context/accounts-reducer-context.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AccountsContainer() {\n    _s();\n    const { state } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_5__.AccountsContext);\n    const [addAccountModalIsOpen, setAddAccountModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [balances, setBalances] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const handleBalanceUpdate = (id, balance)=>{\n        setBalances((prev)=>({\n                ...prev,\n                [id]: balance\n            }));\n    };\n    const totalBalance = Object.values(balances).reduce((acc, balance)=>acc + parseFloat(balance || \"0\"), 0).toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().accountsContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"Your Accounts\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>setAddAccountModalIsOpen(true),\n                        children: \"Add Account\"\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_add_account_modal_add_account_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        isOpen: addAccountModalIsOpen,\n                        onRequestClose: ()=>setAddAccountModalIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_accounts_container_module_css__WEBPACK_IMPORTED_MODULE_4___default().accounts),\n                children: state === null || state === void 0 ? void 0 : state.map((account)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_account_account__WEBPACK_IMPORTED_MODULE_2__.AccountView, {\n                        account: account,\n                        onBalanceUpdate: handleBalanceUpdate\n                    }, account.id, false, {\n                        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/components/accounts-container/accounts-cointainer.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountsContainer, \"ZrxzyCM6eFejhvjFho75T0aj3hw=\");\n_c = AccountsContainer;\nvar _c;\n$RefreshReg$(_c, \"AccountsContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2FjY291bnRzLWNvbnRhaW5lci9hY2NvdW50cy1jb2ludGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNjO0FBQ29CO0FBQzFCO0FBQ2dCO0FBTXRELFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0ssOEVBQWVBO0lBQzVDLE1BQU0sQ0FBQ0csdUJBQXVCQyx5QkFBeUIsR0FBR1IsK0NBQVFBLENBQUM7SUFDbkUsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFXLENBQUM7SUFFcEQsTUFBTVcsc0JBQXNCLENBQUNDLElBQVlDO1FBQ3ZDSCxZQUFZLENBQUNJLE9BQVU7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRSxDQUFDRixHQUFHLEVBQUVDO1lBQVE7SUFDbEQ7SUFFQSxNQUFNRSxlQUFlQyxPQUFPQyxNQUFNLENBQUNSLFVBQ2hDUyxNQUFNLENBQUMsQ0FBQ0MsS0FBS04sVUFBWU0sTUFBTUMsV0FBV1AsV0FBVyxNQUFNLEdBQzNEUSxPQUFPLENBQUM7SUFFWCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3BCLHlGQUF3Qjs7MEJBQ3RDLDhEQUFDc0I7Z0JBQU9GLFdBQVdwQiw4RUFBYTs7a0NBQzlCLDhEQUFDdUI7d0JBQUdILFdBQVdwQiw2RUFBWTtrQ0FBRTs7Ozs7O2tDQUM3Qiw4REFBQ3lCO3dCQUFPQyxTQUFTLElBQU1yQix5QkFBeUI7a0NBQU87Ozs7OztrQ0FDdkQsOERBQUNOLHVGQUFlQTt3QkFDZDRCLFFBQVF2Qjt3QkFDUndCLGdCQUFnQixJQUFNdkIseUJBQXlCOzs7Ozs7Ozs7Ozs7MEJBRW5ELDhEQUFDYztnQkFBSUMsV0FBV3BCLGdGQUFlOzBCQUM1Qkcsa0JBQUFBLDRCQUFBQSxNQUFPMkIsR0FBRyxDQUFDLENBQUNDLHdCQUNYLDhEQUFDakMsb0VBQVdBO3dCQUFrQmlDLFNBQVNBO3dCQUFTQyxpQkFBaUJ4Qjt1QkFBL0N1QixRQUFRdEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QztHQTdCd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjY291bnRzLWNvbnRhaW5lci9hY2NvdW50cy1jb2ludGFpbmVyLnRzeD8wMDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBY2NvdW50VmlldyB9IGZyb20gXCJAL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50XCI7XG5pbXBvcnQgQWRkQWNjb3VudE1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvYWRkLWFjY291bnQtbW9kYWwvYWRkLWFjY291bnQtbW9kYWxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWNjb3VudHMtY29udGFpbmVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEFjY291bnRzQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0XCI7XG5cbmludGVyZmFjZSBCYWxhbmNlcyB7XG4gIFtpZDogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50c0NvbnRhaW5lcigpIHtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChBY2NvdW50c0NvbnRleHQpO1xuICBjb25zdCBbYWRkQWNjb3VudE1vZGFsSXNPcGVuLCBzZXRBZGRBY2NvdW50TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYmFsYW5jZXMsIHNldEJhbGFuY2VzXSA9IHVzZVN0YXRlPEJhbGFuY2VzPih7fSk7XG5cbiAgY29uc3QgaGFuZGxlQmFsYW5jZVVwZGF0ZSA9IChpZDogc3RyaW5nLCBiYWxhbmNlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRCYWxhbmNlcygocHJldikgPT4gKHsgLi4ucHJldiwgW2lkXTogYmFsYW5jZSB9KSk7XG4gIH07XG5cbiAgY29uc3QgdG90YWxCYWxhbmNlID0gT2JqZWN0LnZhbHVlcyhiYWxhbmNlcylcbiAgICAucmVkdWNlKChhY2MsIGJhbGFuY2UpID0+IGFjYyArIHBhcnNlRmxvYXQoYmFsYW5jZSB8fCBcIjBcIiksIDApXG4gICAgLnRvRml4ZWQoMik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjY291bnRzQ29udGFpbmVyfT5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Zb3VyIEFjY291bnRzPC9oMj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBZGRBY2NvdW50TW9kYWxJc09wZW4odHJ1ZSl9PkFkZCBBY2NvdW50PC9idXR0b24+XG4gICAgICAgIDxBZGRBY2NvdW50TW9kYWxcbiAgICAgICAgICBpc09wZW49e2FkZEFjY291bnRNb2RhbElzT3Blbn1cbiAgICAgICAgICBvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0QWRkQWNjb3VudE1vZGFsSXNPcGVuKGZhbHNlKX0gLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY2NvdW50c30+XG4gICAgICAgIHtzdGF0ZT8ubWFwKChhY2NvdW50KSA9PiAoXG4gICAgICAgICAgPEFjY291bnRWaWV3IGtleT17YWNjb3VudC5pZH0gYWNjb3VudD17YWNjb3VudH0gb25CYWxhbmNlVXBkYXRlPXtoYW5kbGVCYWxhbmNlVXBkYXRlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBY2NvdW50VmlldyIsIkFkZEFjY291bnRNb2RhbCIsInN0eWxlcyIsIkFjY291bnRzQ29udGV4dCIsIkFjY291bnRzQ29udGFpbmVyIiwic3RhdGUiLCJhZGRBY2NvdW50TW9kYWxJc09wZW4iLCJzZXRBZGRBY2NvdW50TW9kYWxJc09wZW4iLCJiYWxhbmNlcyIsInNldEJhbGFuY2VzIiwiaGFuZGxlQmFsYW5jZVVwZGF0ZSIsImlkIiwiYmFsYW5jZSIsInByZXYiLCJ0b3RhbEJhbGFuY2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhY2MiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImRpdiIsImNsYXNzTmFtZSIsImFjY291bnRzQ29udGFpbmVyIiwiaGVhZGVyIiwiaDIiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpc09wZW4iLCJvblJlcXVlc3RDbG9zZSIsImFjY291bnRzIiwibWFwIiwiYWNjb3VudCIsIm9uQmFsYW5jZVVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/accounts-container/accounts-cointainer.tsx\n"));

/***/ })

});