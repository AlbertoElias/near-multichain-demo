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

/***/ "(app-pages-browser)/./src/context/accounts-reducer-context.tsx":
/*!**************************************************!*\
  !*** ./src/context/accounts-reducer-context.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountsContext: function() { return /* binding */ AccountsContext; },\n/* harmony export */   AccountsProvider: function() { return /* binding */ AccountsProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction accountsReducer(accounts, action) {\n    switch(action.type){\n        case \"ADD_ACCOUNT\":\n            return [\n                ...accounts,\n                action.account\n            ];\n        default:\n            return accounts;\n    }\n}\nconst initialAccounts = [];\nconst AccountsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: initialAccounts,\n    dispatch: ()=>{}\n});\nfunction AccountsProvider(param) {\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(accountsReducer, initialAccounts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountsContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/context/accounts-reducer-context.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountsProvider, \"d/AAXP+Qs2uzbXrLiNfUJuJ3OcU=\");\n_c = AccountsProvider;\nvar _c;\n$RefreshReg$(_c, \"AccountsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRTtBQWFuRSxTQUFTRyxnQkFBZ0JDLFFBQW1CLEVBQUVDLE1BQXNCO0lBQ2xFLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87bUJBQUlGO2dCQUFVQyxPQUFPRSxPQUFPO2FBQUM7UUFDdEM7WUFDRSxPQUFPSDtJQUNYO0FBQ0Y7QUFFQSxNQUFNSSxrQkFBNkIsRUFBRTtBQU85QixNQUFNQyxnQ0FBa0JSLG9EQUFhQSxDQUEyQjtJQUNyRVMsT0FBT0Y7SUFDUEcsVUFBVSxLQUFPO0FBQ25CLEdBQUc7QUFFSSxTQUFTQyxpQkFBaUIsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDL0IsTUFBTSxDQUFDSCxPQUFPQyxTQUFTLEdBQUdULGlEQUFVQSxDQUFDQyxpQkFBaUJLO0lBRXRELHFCQUNFLDhEQUFDQyxnQkFBZ0JLLFFBQVE7UUFBQ0MsT0FBTztZQUFFTDtZQUFPQztRQUFTO2tCQUNoREU7Ozs7OztBQUdQO0dBUmdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9hY2NvdW50cy1yZWR1Y2VyLWNvbnRleHQudHN4P2ZkMGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIERpc3BhdGNoLCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudCB7XG4gIG5ldHdvcms6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFjY291bnRzQWN0aW9uIHtcbiAgdHlwZTogc3RyaW5nO1xuICBhY2NvdW50OiBBY2NvdW50O1xufVxuXG5mdW5jdGlvbiBhY2NvdW50c1JlZHVjZXIoYWNjb3VudHM6IEFjY291bnRbXSwgYWN0aW9uOiBBY2NvdW50c0FjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFERF9BQ0NPVU5UXCI6XG4gICAgICByZXR1cm4gWy4uLmFjY291bnRzLCBhY3Rpb24uYWNjb3VudF07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhY2NvdW50cztcbiAgfVxufVxuXG5jb25zdCBpbml0aWFsQWNjb3VudHM6IEFjY291bnRbXSA9IFtdO1xuXG5pbnRlcmZhY2UgQWNjb3VudHNDb250ZXh0SW50ZXJmYWNlIHtcbiAgc3RhdGU6IEFjY291bnRbXTtcbiAgZGlzcGF0Y2g6IERpc3BhdGNoPEFjY291bnRzQWN0aW9uPjtcbn1cblxuZXhwb3J0IGNvbnN0IEFjY291bnRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QWNjb3VudHNDb250ZXh0SW50ZXJmYWNlPih7XG4gIHN0YXRlOiBpbml0aWFsQWNjb3VudHMsXG4gIGRpc3BhdGNoOiAoKSA9PiB7fVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBY2NvdW50c1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFjY291bnRzUmVkdWNlciwgaW5pdGlhbEFjY291bnRzKTtcblxuICByZXR1cm4gKFxuICAgIDxBY2NvdW50c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQWNjb3VudHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiYWNjb3VudHNSZWR1Y2VyIiwiYWNjb3VudHMiLCJhY3Rpb24iLCJ0eXBlIiwiYWNjb3VudCIsImluaXRpYWxBY2NvdW50cyIsIkFjY291bnRzQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJBY2NvdW50c1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/accounts-reducer-context.tsx\n"));

/***/ })

});