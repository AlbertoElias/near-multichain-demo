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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountsContext: function() { return /* binding */ AccountsContext; },\n/* harmony export */   AccountsProvider: function() { return /* binding */ AccountsProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _near_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction accountsReducer(accounts, action) {\n    console.log(0, action, accounts);\n    switch(action.type){\n        case \"INITIALIZE\":\n            return action.accounts;\n        case \"ADD_ACCOUNT\":\n            return [\n                ...accounts,\n                action.account\n            ];\n        default:\n            return accounts;\n    }\n}\nconst AccountsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: null,\n    dispatch: ()=>{}\n});\nfunction AccountsProvider(param) {\n    let { children } = param;\n    _s();\n    const [isInitialized, setIsInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { signedAccountId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_near_context__WEBPACK_IMPORTED_MODULE_2__.NearContext);\n    const storageKey = \"accounts-\".concat(signedAccountId);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(accountsReducer, []);\n    const getInitialAccounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const storedAccounts = localStorage.getItem(storageKey);\n        return storedAccounts ? JSON.parse(storedAccounts) : [];\n    }, [\n        signedAccountId,\n        storageKey\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (signedAccountId && !isInitialized) {\n            const initialAccounts = getInitialAccounts();\n            dispatch({\n                type: \"INITIALIZE\",\n                accounts: initialAccounts\n            });\n            setIsInitialized(true);\n        }\n    }, [\n        signedAccountId,\n        getInitialAccounts,\n        isInitialized\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (signedAccountId && state.length > 0) {\n            localStorage.setItem(storageKey, JSON.stringify(state));\n        }\n    }, [\n        state,\n        storageKey,\n        signedAccountId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountsContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/context/accounts-reducer-context.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountsProvider, \"lGAYPcteYeX7zoaHhclIuTTbNuA=\");\n_c = AccountsProvider;\nvar _c;\n$RefreshReg$(_c, \"AccountsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUg7QUFDcEU7QUFjN0MsU0FBU1EsZ0JBQWdCQyxRQUFtQixFQUFFQyxNQUFzQjtJQUNsRUMsUUFBUUMsR0FBRyxDQUFDLEdBQUdGLFFBQVFEO0lBQ3ZCLE9BQVFDLE9BQU9HLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU9ILE9BQU9ELFFBQVE7UUFDeEIsS0FBSztZQUNILE9BQU87bUJBQUlBO2dCQUFVQyxPQUFPSSxPQUFPO2FBQUM7UUFDdEM7WUFDRSxPQUFPTDtJQUNYO0FBQ0Y7QUFPTyxNQUFNTSxnQ0FBa0JkLG9EQUFhQSxDQUEyQjtJQUNyRWUsT0FBTztJQUNQQyxVQUFVLEtBQU87QUFDbkIsR0FBRztBQUVJLFNBQVNDLGlCQUFpQixLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQWlDLEdBQTNDOztJQUMvQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHZiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLEVBQUVnQixlQUFlLEVBQUUsR0FBR25CLGlEQUFVQSxDQUFDSSxzREFBV0E7SUFDbEQsTUFBTWdCLGFBQWEsWUFBNEIsT0FBaEJEO0lBQy9CLE1BQU0sQ0FBQ04sT0FBT0MsU0FBUyxHQUFHWixpREFBVUEsQ0FBQ0csaUJBQWlCLEVBQUU7SUFFeEQsTUFBTWdCLHFCQUFxQnRCLGtEQUFXQSxDQUFDO1FBQ3JDLE1BQU11QixpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQ0o7UUFDNUMsT0FBT0UsaUJBQWlCRyxLQUFLQyxLQUFLLENBQUNKLGtCQUFrQixFQUFFO0lBQ3pELEdBQUc7UUFBQ0g7UUFBaUJDO0tBQVc7SUFFaENuQixnREFBU0EsQ0FBQztRQUNSLElBQUlrQixtQkFBbUIsQ0FBQ0YsZUFBZTtZQUNyQyxNQUFNVSxrQkFBa0JOO1lBQ3hCUCxTQUFTO2dCQUFFSixNQUFNO2dCQUFjSixVQUFVcUI7WUFBZ0I7WUFDekRULGlCQUFpQjtRQUNuQjtJQUNGLEdBQUc7UUFBQ0M7UUFBaUJFO1FBQW9CSjtLQUFjO0lBRXZEaEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJa0IsbUJBQW1CTixNQUFNZSxNQUFNLEdBQUcsR0FBRztZQUN2Q0wsYUFBYU0sT0FBTyxDQUFDVCxZQUFZSyxLQUFLSyxTQUFTLENBQUNqQjtRQUNsRDtJQUNGLEdBQUc7UUFBQ0E7UUFBT087UUFBWUQ7S0FBZ0I7SUFFdkMscUJBQ0UsOERBQUNQLGdCQUFnQm1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFbkI7WUFBT0M7UUFBUztrQkFDaERFOzs7Ozs7QUFHUDtHQTlCZ0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dC50c3g/ZmQwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2gsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOZWFyQ29udGV4dCB9IGZyb20gXCIuL25lYXItY29udGV4dFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnQge1xuICBuZXR3b3JrOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBBY2NvdW50c0FjdGlvbiB7XG4gIHR5cGU6IHN0cmluZztcbiAgYWNjb3VudD86IEFjY291bnQ7XG4gIGFjY291bnRzPzogQWNjb3VudFtdO1xufVxuXG5mdW5jdGlvbiBhY2NvdW50c1JlZHVjZXIoYWNjb3VudHM6IEFjY291bnRbXSwgYWN0aW9uOiBBY2NvdW50c0FjdGlvbikge1xuICBjb25zb2xlLmxvZygwLCBhY3Rpb24sIGFjY291bnRzKVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIklOSVRJQUxJWkVcIjpcbiAgICAgIHJldHVybiBhY3Rpb24uYWNjb3VudHM7XG4gICAgY2FzZSBcIkFERF9BQ0NPVU5UXCI6XG4gICAgICByZXR1cm4gWy4uLmFjY291bnRzLCBhY3Rpb24uYWNjb3VudF07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBhY2NvdW50cztcbiAgfVxufVxuXG5pbnRlcmZhY2UgQWNjb3VudHNDb250ZXh0SW50ZXJmYWNlIHtcbiAgc3RhdGU6IEFjY291bnRbXSB8IG51bGw7XG4gIGRpc3BhdGNoOiBEaXNwYXRjaDxBY2NvdW50c0FjdGlvbj47XG59XG5cbmV4cG9ydCBjb25zdCBBY2NvdW50c0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PEFjY291bnRzQ29udGV4dEludGVyZmFjZT4oe1xuICBzdGF0ZTogbnVsbCxcbiAgZGlzcGF0Y2g6ICgpID0+IHt9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFjY291bnRzUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBbaXNJbml0aWFsaXplZCwgc2V0SXNJbml0aWFsaXplZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgc2lnbmVkQWNjb3VudElkIH0gPSB1c2VDb250ZXh0KE5lYXJDb250ZXh0KTtcbiAgY29uc3Qgc3RvcmFnZUtleSA9IGBhY2NvdW50cy0ke3NpZ25lZEFjY291bnRJZH1gO1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoYWNjb3VudHNSZWR1Y2VyLCBbXSk7XG5cbiAgY29uc3QgZ2V0SW5pdGlhbEFjY291bnRzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZEFjY291bnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSk7XG4gICAgcmV0dXJuIHN0b3JlZEFjY291bnRzID8gSlNPTi5wYXJzZShzdG9yZWRBY2NvdW50cykgOiBbXTtcbiAgfSwgW3NpZ25lZEFjY291bnRJZCwgc3RvcmFnZUtleV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZ25lZEFjY291bnRJZCAmJiAhaXNJbml0aWFsaXplZCkge1xuICAgICAgY29uc3QgaW5pdGlhbEFjY291bnRzID0gZ2V0SW5pdGlhbEFjY291bnRzKCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiSU5JVElBTElaRVwiLCBhY2NvdW50czogaW5pdGlhbEFjY291bnRzIH0pO1xuICAgICAgc2V0SXNJbml0aWFsaXplZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtzaWduZWRBY2NvdW50SWQsIGdldEluaXRpYWxBY2NvdW50cywgaXNJbml0aWFsaXplZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZ25lZEFjY291bnRJZCAmJiBzdGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH1cbiAgfSwgW3N0YXRlLCBzdG9yYWdlS2V5LCBzaWduZWRBY2NvdW50SWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxBY2NvdW50c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQWNjb3VudHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJOZWFyQ29udGV4dCIsImFjY291bnRzUmVkdWNlciIsImFjY291bnRzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJhY2NvdW50IiwiQWNjb3VudHNDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIkFjY291bnRzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzSW5pdGlhbGl6ZWQiLCJzZXRJc0luaXRpYWxpemVkIiwic2lnbmVkQWNjb3VudElkIiwic3RvcmFnZUtleSIsImdldEluaXRpYWxBY2NvdW50cyIsInN0b3JlZEFjY291bnRzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxBY2NvdW50cyIsImxlbmd0aCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/accounts-reducer-context.tsx\n"));

/***/ })

});