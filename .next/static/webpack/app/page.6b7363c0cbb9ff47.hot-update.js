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

/***/ "(app-pages-browser)/./src/context/accounts-reducer-context.tsx":
/*!**************************************************!*\
  !*** ./src/context/accounts-reducer-context.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountsContext: function() { return /* binding */ AccountsContext; },\n/* harmony export */   AccountsProvider: function() { return /* binding */ AccountsProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _near_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction accountsReducer(accounts, action) {\n    switch(action.type){\n        case \"ADD_ACCOUNT\":\n            const newState = [\n                ...accounts,\n                action.account\n            ];\n            return [\n                ...accounts,\n                action.account\n            ];\n        default:\n            return accounts;\n    }\n}\nconst initialAccounts = [];\nconst AccountsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: initialAccounts,\n    dispatch: ()=>{}\n});\nfunction AccountsProvider(param) {\n    let { children } = param;\n    _s();\n    const { signedAccountId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_near_context__WEBPACK_IMPORTED_MODULE_2__.NearContext);\n    const storageKey = \"accounts-\".concat(signedAccountId);\n    const getInitialAccounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (signedAccountId) {\n            const storedAccounts = localStorage.getItem(storageKey);\n            return storedAccounts ? JSON.parse(storedAccounts) : initialAccounts;\n        }\n        return initialAccounts;\n    }, [\n        signedAccountId\n    ]);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(accountsReducer, getInitialAccounts());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (state.length === 0) return;\n        localStorage.setItem(storageKey, JSON.stringify(state));\n    }, [\n        state,\n        storageKey\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountsContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/context/accounts-reducer-context.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountsProvider, \"HhcEG74x8P4p/5Ox09qZP2nufpU=\");\n_c = AccountsProvider;\nvar _c;\n$RefreshReg$(_c, \"AccountsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUc7QUFDMUQ7QUFhN0MsU0FBU08sZ0JBQWdCQyxRQUFtQixFQUFFQyxNQUFzQjtJQUNsRSxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFDSCxNQUFNQyxXQUFXO21CQUFJSDtnQkFBVUMsT0FBT0csT0FBTzthQUFDO1lBRTlDLE9BQU87bUJBQUlKO2dCQUFVQyxPQUFPRyxPQUFPO2FBQUM7UUFDdEM7WUFDRSxPQUFPSjtJQUNYO0FBQ0Y7QUFFQSxNQUFNSyxrQkFBNkIsRUFBRTtBQU85QixNQUFNQyxnQ0FBa0JiLG9EQUFhQSxDQUEyQjtJQUNyRWMsT0FBT0Y7SUFDUEcsVUFBVSxLQUFPO0FBQ25CLEdBQUc7QUFFSSxTQUFTQyxpQkFBaUIsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQzs7SUFDL0IsTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR2hCLGlEQUFVQSxDQUFDRyxzREFBV0E7SUFDbEQsTUFBTWMsYUFBYSxZQUE0QixPQUFoQkQ7SUFDL0IsTUFBTUUscUJBQXFCbkIsa0RBQVdBLENBQUM7UUFDckMsSUFBSWlCLGlCQUFpQjtZQUNuQixNQUFNRyxpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQ0o7WUFDNUMsT0FBT0UsaUJBQWlCRyxLQUFLQyxLQUFLLENBQUNKLGtCQUFrQlQ7UUFDdkQ7UUFDQSxPQUFPQTtJQUNULEdBQUc7UUFBQ007S0FBZ0I7SUFDcEIsTUFBTSxDQUFDSixPQUFPQyxTQUFTLEdBQUdYLGlEQUFVQSxDQUFDRSxpQkFBaUJjO0lBRXREakIsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxNQUFNWSxNQUFNLEtBQUssR0FBRztRQUN4QkosYUFBYUssT0FBTyxDQUFDUixZQUFZSyxLQUFLSSxTQUFTLENBQUNkO0lBQ2xELEdBQUc7UUFBQ0E7UUFBT0s7S0FBVztJQUV0QixxQkFDRSw4REFBQ04sZ0JBQWdCZ0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQjtZQUFPQztRQUFTO2tCQUNoREU7Ozs7OztBQUdQO0dBdEJnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0LnRzeD9mZDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmVhckNvbnRleHQgfSBmcm9tIFwiLi9uZWFyLWNvbnRleHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50IHtcbiAgbmV0d29yazogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQWNjb3VudHNBY3Rpb24ge1xuICB0eXBlOiBzdHJpbmc7XG4gIGFjY291bnQ6IEFjY291bnQ7XG59XG5cbmZ1bmN0aW9uIGFjY291bnRzUmVkdWNlcihhY2NvdW50czogQWNjb3VudFtdLCBhY3Rpb246IEFjY291bnRzQWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQUREX0FDQ09VTlRcIjpcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gWy4uLmFjY291bnRzLCBhY3Rpb24uYWNjb3VudF07XG5cbiAgICAgIHJldHVybiBbLi4uYWNjb3VudHMsIGFjdGlvbi5hY2NvdW50XTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjY291bnRzO1xuICB9XG59XG5cbmNvbnN0IGluaXRpYWxBY2NvdW50czogQWNjb3VudFtdID0gW107XG5cbmludGVyZmFjZSBBY2NvdW50c0NvbnRleHRJbnRlcmZhY2Uge1xuICBzdGF0ZTogQWNjb3VudFtdO1xuICBkaXNwYXRjaDogRGlzcGF0Y2g8QWNjb3VudHNBY3Rpb24+O1xufVxuXG5leHBvcnQgY29uc3QgQWNjb3VudHNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBY2NvdW50c0NvbnRleHRJbnRlcmZhY2U+KHtcbiAgc3RhdGU6IGluaXRpYWxBY2NvdW50cyxcbiAgZGlzcGF0Y2g6ICgpID0+IHt9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFjY291bnRzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCB7IHNpZ25lZEFjY291bnRJZCB9ID0gdXNlQ29udGV4dChOZWFyQ29udGV4dCk7XG4gIGNvbnN0IHN0b3JhZ2VLZXkgPSBgYWNjb3VudHMtJHtzaWduZWRBY2NvdW50SWR9YDtcbiAgY29uc3QgZ2V0SW5pdGlhbEFjY291bnRzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChzaWduZWRBY2NvdW50SWQpIHtcbiAgICAgIGNvbnN0IHN0b3JlZEFjY291bnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSk7XG4gICAgICByZXR1cm4gc3RvcmVkQWNjb3VudHMgPyBKU09OLnBhcnNlKHN0b3JlZEFjY291bnRzKSA6IGluaXRpYWxBY2NvdW50cztcbiAgICB9XG4gICAgcmV0dXJuIGluaXRpYWxBY2NvdW50cztcbiAgfSwgW3NpZ25lZEFjY291bnRJZF0pO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYWNjb3VudHNSZWR1Y2VyLCBnZXRJbml0aWFsQWNjb3VudHMoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgfSwgW3N0YXRlLCBzdG9yYWdlS2V5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3VudHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FjY291bnRzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsIk5lYXJDb250ZXh0IiwiYWNjb3VudHNSZWR1Y2VyIiwiYWNjb3VudHMiLCJhY3Rpb24iLCJ0eXBlIiwibmV3U3RhdGUiLCJhY2NvdW50IiwiaW5pdGlhbEFjY291bnRzIiwiQWNjb3VudHNDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIkFjY291bnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNpZ25lZEFjY291bnRJZCIsInN0b3JhZ2VLZXkiLCJnZXRJbml0aWFsQWNjb3VudHMiLCJzdG9yZWRBY2NvdW50cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsZW5ndGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/accounts-reducer-context.tsx\n"));

/***/ })

});