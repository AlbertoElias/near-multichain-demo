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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AccountsContext: function() { return /* binding */ AccountsContext; },\n/* harmony export */   AccountsProvider: function() { return /* binding */ AccountsProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _near_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction accountsReducer(accounts, action) {\n    console.log(0, action, accounts);\n    switch(action.type){\n        case \"ADD_ACCOUNT\":\n            return [\n                ...accounts,\n                action.account\n            ];\n        default:\n            return accounts;\n    }\n}\nconst AccountsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    state: null,\n    dispatch: ()=>{}\n});\nfunction AccountsProvider(param) {\n    let { children } = param;\n    _s();\n    const { signedAccountId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_near_context__WEBPACK_IMPORTED_MODULE_2__.NearContext);\n    const storageKey = \"accounts-\".concat(signedAccountId);\n    const getInitialAccounts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (signedAccountId) {\n            const storedAccounts = localStorage.getItem(storageKey);\n            return storedAccounts ? JSON.parse(storedAccounts) : [];\n        }\n        return [];\n    }, [\n        signedAccountId,\n        storageKey\n    ]);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(accountsReducer, getInitialAccounts());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (signedAccountId && state && state.length > 0) {\n            localStorage.setItem(storageKey, JSON.stringify(state));\n        }\n    }, [\n        state,\n        storageKey,\n        signedAccountId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountsContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/context/accounts-reducer-context.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountsProvider, \"HhcEG74x8P4p/5Ox09qZP2nufpU=\");\n_c = AccountsProvider;\nvar _c;\n$RefreshReg$(_c, \"AccountsProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L2FjY291bnRzLXJlZHVjZXItY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUc7QUFDMUQ7QUFhN0MsU0FBU08sZ0JBQWdCQyxRQUFtQixFQUFFQyxNQUFzQjtJQUNsRUMsUUFBUUMsR0FBRyxDQUFDLEdBQUdGLFFBQVFEO0lBQ3ZCLE9BQVFDLE9BQU9HLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87bUJBQUlKO2dCQUFVQyxPQUFPSSxPQUFPO2FBQUM7UUFDdEM7WUFDRSxPQUFPTDtJQUNYO0FBQ0Y7QUFPTyxNQUFNTSxnQ0FBa0JiLG9EQUFhQSxDQUEyQjtJQUNyRWMsT0FBTztJQUNQQyxVQUFVLEtBQU87QUFDbkIsR0FBRztBQUVJLFNBQVNDLGlCQUFpQixLQUEyQztRQUEzQyxFQUFFQyxRQUFRLEVBQWlDLEdBQTNDOztJQUMvQixNQUFNLEVBQUVDLGVBQWUsRUFBRSxHQUFHaEIsaURBQVVBLENBQUNHLHNEQUFXQTtJQUNsRCxNQUFNYyxhQUFhLFlBQTRCLE9BQWhCRDtJQUUvQixNQUFNRSxxQkFBcUJuQixrREFBV0EsQ0FBQztRQUNyQyxJQUFJaUIsaUJBQWlCO1lBQ25CLE1BQU1HLGlCQUFpQkMsYUFBYUMsT0FBTyxDQUFDSjtZQUM1QyxPQUFPRSxpQkFBaUJHLEtBQUtDLEtBQUssQ0FBQ0osa0JBQWtCLEVBQUU7UUFDekQ7UUFDQSxPQUFPLEVBQUU7SUFDWCxHQUFHO1FBQUNIO1FBQWlCQztLQUFXO0lBRWhDLE1BQU0sQ0FBQ0wsT0FBT0MsU0FBUyxHQUFHWCxpREFBVUEsQ0FBQ0UsaUJBQWlCYztJQUV0RGpCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSWUsbUJBQW1CSixTQUFTQSxNQUFNWSxNQUFNLEdBQUcsR0FBRztZQUNoREosYUFBYUssT0FBTyxDQUFDUixZQUFZSyxLQUFLSSxTQUFTLENBQUNkO1FBQ2xEO0lBQ0YsR0FBRztRQUFDQTtRQUFPSztRQUFZRDtLQUFnQjtJQUV2QyxxQkFDRSw4REFBQ0wsZ0JBQWdCZ0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQjtZQUFPQztRQUFTO2tCQUNoREU7Ozs7OztBQUdQO0dBekJnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0LnRzeD9mZDBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCBEaXNwYXRjaCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmVhckNvbnRleHQgfSBmcm9tIFwiLi9uZWFyLWNvbnRleHRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50IHtcbiAgbmV0d29yazogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQWNjb3VudHNBY3Rpb24ge1xuICB0eXBlOiBzdHJpbmc7XG4gIGFjY291bnQ6IEFjY291bnQ7XG59XG5cbmZ1bmN0aW9uIGFjY291bnRzUmVkdWNlcihhY2NvdW50czogQWNjb3VudFtdLCBhY3Rpb246IEFjY291bnRzQWN0aW9uKSB7XG4gIGNvbnNvbGUubG9nKDAsIGFjdGlvbiwgYWNjb3VudHMpXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQUREX0FDQ09VTlRcIjpcbiAgICAgIHJldHVybiBbLi4uYWNjb3VudHMsIGFjdGlvbi5hY2NvdW50XTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGFjY291bnRzO1xuICB9XG59XG5cbmludGVyZmFjZSBBY2NvdW50c0NvbnRleHRJbnRlcmZhY2Uge1xuICBzdGF0ZTogQWNjb3VudFtdIHwgbnVsbDtcbiAgZGlzcGF0Y2g6IERpc3BhdGNoPEFjY291bnRzQWN0aW9uPjtcbn1cblxuZXhwb3J0IGNvbnN0IEFjY291bnRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QWNjb3VudHNDb250ZXh0SW50ZXJmYWNlPih7XG4gIHN0YXRlOiBudWxsLFxuICBkaXNwYXRjaDogKCkgPT4ge31cbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gQWNjb3VudHNQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IHsgc2lnbmVkQWNjb3VudElkIH0gPSB1c2VDb250ZXh0KE5lYXJDb250ZXh0KTtcbiAgY29uc3Qgc3RvcmFnZUtleSA9IGBhY2NvdW50cy0ke3NpZ25lZEFjY291bnRJZH1gO1xuXG4gIGNvbnN0IGdldEluaXRpYWxBY2NvdW50cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoc2lnbmVkQWNjb3VudElkKSB7XG4gICAgICBjb25zdCBzdG9yZWRBY2NvdW50cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXkpO1xuICAgICAgcmV0dXJuIHN0b3JlZEFjY291bnRzID8gSlNPTi5wYXJzZShzdG9yZWRBY2NvdW50cykgOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9LCBbc2lnbmVkQWNjb3VudElkLCBzdG9yYWdlS2V5XSk7XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGFjY291bnRzUmVkdWNlciwgZ2V0SW5pdGlhbEFjY291bnRzKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZ25lZEFjY291bnRJZCAmJiBzdGF0ZSAmJiBzdGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH1cbiAgfSwgW3N0YXRlLCBzdG9yYWdlS2V5LCBzaWduZWRBY2NvdW50SWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxBY2NvdW50c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQWNjb3VudHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwiTmVhckNvbnRleHQiLCJhY2NvdW50c1JlZHVjZXIiLCJhY2NvdW50cyIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYWNjb3VudCIsIkFjY291bnRzQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJBY2NvdW50c1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJzaWduZWRBY2NvdW50SWQiLCJzdG9yYWdlS2V5IiwiZ2V0SW5pdGlhbEFjY291bnRzIiwic3RvcmVkQWNjb3VudHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibGVuZ3RoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/accounts-reducer-context.tsx\n"));

/***/ })

});