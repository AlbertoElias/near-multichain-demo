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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountsContext: function() { return /* binding */ AccountsContext; },\n/* harmony export */   AccountsProvider: function() { return /* binding */ AccountsProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _near_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction accountsReducer(accounts, action) {\n    switch(action.type){\n        case \"INITIALIZE\":\n            return action.accounts;\n        case \"ADD_ACCOUNT\":\n            return [\n                ...accounts,\n                action.account\n            ];\n        default:\n            return accounts;\n    }\n}\nconst AccountsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: [],\n    dispatch: ()=>{}\n});\nfunction AccountsProvider(param) {\n    let { children } = param;\n    _s();\n    const [isInitialized, setIsInitialized] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { signedAccountId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_near_context__WEBPACK_IMPORTED_MODULE_2__.NearContext);\n    const storageKey = \"accounts-\".concat(signedAccountId);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(accountsReducer, []);\n    const getInitialAccounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        const storedAccounts = localStorage.getItem(storageKey);\n        return storedAccounts ? JSON.parse(storedAccounts) : [];\n    }, [\n        signedAccountId,\n        storageKey\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (signedAccountId && !isInitialized) {\n            const initialAccounts = getInitialAccounts();\n            dispatch({\n                type: \"INITIALIZE\",\n                accounts: initialAccounts\n            });\n            setIsInitialized(true);\n        }\n    }, [\n        signedAccountId,\n        getInitialAccounts,\n        isInitialized\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (signedAccountId && state.length > 0) {\n            localStorage.setItem(storageKey, JSON.stringify(state));\n        }\n    }, [\n        state,\n        storageKey,\n        signedAccountId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountsContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/context/accounts-reducer-context.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountsProvider, \"lGAYPcteYeX7zoaHhclIuTTbNuA=\");\n_c = AccountsProvider;\nvar _c;\n$RefreshReg$(_c, \"AccountsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUg7QUFDcEU7QUFjN0MsU0FBU1EsZ0JBQWdCQyxRQUFtQixFQUFFQyxNQUFzQjtJQUNsRSxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFDSCxPQUFPRCxPQUFPRCxRQUFRO1FBQ3hCLEtBQUs7WUFDSCxPQUFPO21CQUFJQTtnQkFBVUMsT0FBT0UsT0FBTzthQUFDO1FBQ3RDO1lBQ0UsT0FBT0g7SUFDWDtBQUNGO0FBT08sTUFBTUksZ0NBQWtCWixvREFBYUEsQ0FBMkI7SUFDckVhLE9BQU8sRUFBRTtJQUNUQyxVQUFVLEtBQU87QUFDbkIsR0FBRztBQUVJLFNBQVNDLGlCQUFpQixLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQWlDLEdBQTNDOztJQUMvQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLEVBQUVjLGVBQWUsRUFBRSxHQUFHakIsaURBQVVBLENBQUNJLHNEQUFXQTtJQUNsRCxNQUFNYyxhQUFhLFlBQTRCLE9BQWhCRDtJQUMvQixNQUFNLENBQUNOLE9BQU9DLFNBQVMsR0FBR1YsaURBQVVBLENBQUNHLGlCQUFpQixFQUFFO0lBRXhELE1BQU1jLHFCQUFxQnBCLGtEQUFXQSxDQUFDO1FBQ3JDLE1BQU1xQixpQkFBaUJDLGFBQWFDLE9BQU8sQ0FBQ0o7UUFDNUMsT0FBT0UsaUJBQWlCRyxLQUFLQyxLQUFLLENBQUNKLGtCQUFrQixFQUFFO0lBQ3pELEdBQUc7UUFBQ0g7UUFBaUJDO0tBQVc7SUFFaENqQixnREFBU0EsQ0FBQztRQUNSLElBQUlnQixtQkFBbUIsQ0FBQ0YsZUFBZTtZQUNyQyxNQUFNVSxrQkFBa0JOO1lBQ3hCUCxTQUFTO2dCQUFFSixNQUFNO2dCQUFjRixVQUFVbUI7WUFBZ0I7WUFDekRULGlCQUFpQjtRQUNuQjtJQUNGLEdBQUc7UUFBQ0M7UUFBaUJFO1FBQW9CSjtLQUFjO0lBRXZEZCxnREFBU0EsQ0FBQztRQUNSLElBQUlnQixtQkFBbUJOLE1BQU1lLE1BQU0sR0FBRyxHQUFHO1lBQ3ZDTCxhQUFhTSxPQUFPLENBQUNULFlBQVlLLEtBQUtLLFNBQVMsQ0FBQ2pCO1FBQ2xEO0lBQ0YsR0FBRztRQUFDQTtRQUFPTztRQUFZRDtLQUFnQjtJQUV2QyxxQkFDRSw4REFBQ1AsZ0JBQWdCbUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVuQjtZQUFPQztRQUFTO2tCQUNoREU7Ozs7OztBQUdQO0dBOUJnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0LnRzeD9mZDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5lYXJDb250ZXh0IH0gZnJvbSBcIi4vbmVhci1jb250ZXh0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudCB7XG4gIG5ldHdvcms6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFjY291bnRzQWN0aW9uIHtcbiAgdHlwZTogc3RyaW5nO1xuICBhY2NvdW50PzogQWNjb3VudDtcbiAgYWNjb3VudHM/OiBBY2NvdW50W107XG59XG5cbmZ1bmN0aW9uIGFjY291bnRzUmVkdWNlcihhY2NvdW50czogQWNjb3VudFtdLCBhY3Rpb246IEFjY291bnRzQWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiSU5JVElBTElaRVwiOlxuICAgICAgcmV0dXJuIGFjdGlvbi5hY2NvdW50cztcbiAgICBjYXNlIFwiQUREX0FDQ09VTlRcIjpcbiAgICAgIHJldHVybiBbLi4uYWNjb3VudHMsIGFjdGlvbi5hY2NvdW50XTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjY291bnRzO1xuICB9XG59XG5cbmludGVyZmFjZSBBY2NvdW50c0NvbnRleHRJbnRlcmZhY2Uge1xuICBzdGF0ZTogQWNjb3VudFtdO1xuICBkaXNwYXRjaDogRGlzcGF0Y2g8QWNjb3VudHNBY3Rpb24+O1xufVxuXG5leHBvcnQgY29uc3QgQWNjb3VudHNDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBY2NvdW50c0NvbnRleHRJbnRlcmZhY2U+KHtcbiAgc3RhdGU6IFtdLFxuICBkaXNwYXRjaDogKCkgPT4ge31cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQWNjb3VudHNQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtpc0luaXRpYWxpemVkLCBzZXRJc0luaXRpYWxpemVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBzaWduZWRBY2NvdW50SWQgfSA9IHVzZUNvbnRleHQoTmVhckNvbnRleHQpO1xuICBjb25zdCBzdG9yYWdlS2V5ID0gYGFjY291bnRzLSR7c2lnbmVkQWNjb3VudElkfWA7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihhY2NvdW50c1JlZHVjZXIsIFtdKTtcblxuICBjb25zdCBnZXRJbml0aWFsQWNjb3VudHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkQWNjb3VudHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KTtcbiAgICByZXR1cm4gc3RvcmVkQWNjb3VudHMgPyBKU09OLnBhcnNlKHN0b3JlZEFjY291bnRzKSA6IFtdO1xuICB9LCBbc2lnbmVkQWNjb3VudElkLCBzdG9yYWdlS2V5XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2lnbmVkQWNjb3VudElkICYmICFpc0luaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBpbml0aWFsQWNjb3VudHMgPSBnZXRJbml0aWFsQWNjb3VudHMoKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJJTklUSUFMSVpFXCIsIGFjY291bnRzOiBpbml0aWFsQWNjb3VudHMgfSk7XG4gICAgICBzZXRJc0luaXRpYWxpemVkKHRydWUpO1xuICAgIH1cbiAgfSwgW3NpZ25lZEFjY291bnRJZCwgZ2V0SW5pdGlhbEFjY291bnRzLCBpc0luaXRpYWxpemVkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2lnbmVkQWNjb3VudElkICYmIHN0YXRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgfVxuICB9LCBbc3RhdGUsIHN0b3JhZ2VLZXksIHNpZ25lZEFjY291bnRJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFjY291bnRzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BY2NvdW50c0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIk5lYXJDb250ZXh0IiwiYWNjb3VudHNSZWR1Y2VyIiwiYWNjb3VudHMiLCJhY3Rpb24iLCJ0eXBlIiwiYWNjb3VudCIsIkFjY291bnRzQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJBY2NvdW50c1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0luaXRpYWxpemVkIiwic2V0SXNJbml0aWFsaXplZCIsInNpZ25lZEFjY291bnRJZCIsInN0b3JhZ2VLZXkiLCJnZXRJbml0aWFsQWNjb3VudHMiLCJzdG9yZWRBY2NvdW50cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpbml0aWFsQWNjb3VudHMiLCJsZW5ndGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/accounts-reducer-context.tsx\n"));

/***/ })

});