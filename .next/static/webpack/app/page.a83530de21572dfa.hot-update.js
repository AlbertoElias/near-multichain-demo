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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module.css */ \"(app-pages-browser)/./src/app/app.module.css\");\n/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_accounts_container_accounts_cointainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/accounts-container/accounts-cointainer */ \"(app-pages-browser)/./src/components/accounts-container/accounts-cointainer.tsx\");\n/* harmony import */ var _context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/accounts-reducer-context */ \"(app-pages-browser)/./src/context/accounts-reducer-context.tsx\");\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_4__.AccountsContext);\n    const { signedAccountId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext);\n    // If signing in with a Near account for the first time, add it to the list of accounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (signedAccountId && state && !state.find((account)=>account.id === signedAccountId)) {\n            dispatch({\n                type: \"ADD_ACCOUNT\",\n                account: {\n                    network: \"near\",\n                    id: signedAccountId\n                }\n            });\n        }\n    }, [\n        state,\n        signedAccountId,\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_app_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_app_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                children: \"Welcome to your multichain hub! With a Near account, you can access other chains like Ethereum and Bitcoin.\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accounts_container_accounts_cointainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"UgdXqUjh+1ImOLW7A7GG3XImESs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEM7QUFDUjtBQUM4QztBQUNmO0FBQ2hCO0FBRXRDLFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDSSw4RUFBZUE7SUFDdEQsTUFBTSxFQUFFSyxlQUFlLEVBQUUsR0FBR1QsaURBQVVBLENBQUNLLDhEQUFXQTtJQUVsRCx1RkFBdUY7SUFDdkZKLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVEsbUJBQW1CRixTQUFTLENBQUNBLE1BQU1HLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxFQUFFLEtBQUtILGtCQUFrQjtZQUN4RkQsU0FBUztnQkFDUEssTUFBTTtnQkFDTkYsU0FBUztvQkFDUEcsU0FBUztvQkFDVEYsSUFBSUg7Z0JBQ047WUFDRjtRQUNGO0lBQ0YsR0FBRztRQUFDRjtRQUFPRTtRQUFpQkQ7S0FBUztJQUVyQyxxQkFDRSw4REFBQ087UUFBS0MsV0FBV2QsNkRBQVc7OzBCQUMxQiw4REFBQ2U7Z0JBQUVELFdBQVdkLG9FQUFrQjswQkFBRTs7Ozs7OzBCQUNsQyw4REFBQ0MsMEZBQWlCQTs7Ozs7Ozs7Ozs7QUFHeEI7R0F2QndCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9hcHAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEFjY291bnRzQ29udGFpbmVyIGZyb20gXCJAL2NvbXBvbmVudHMvYWNjb3VudHMtY29udGFpbmVyL2FjY291bnRzLWNvaW50YWluZXJcIjtcbmltcG9ydCB7IEFjY291bnRzQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvYWNjb3VudHMtcmVkdWNlci1jb250ZXh0XCI7XG5pbXBvcnQgeyBOZWFyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvbmVhci1jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEFjY291bnRzQ29udGV4dCk7XG4gIGNvbnN0IHsgc2lnbmVkQWNjb3VudElkIH0gPSB1c2VDb250ZXh0KE5lYXJDb250ZXh0KTtcblxuICAvLyBJZiBzaWduaW5nIGluIHdpdGggYSBOZWFyIGFjY291bnQgZm9yIHRoZSBmaXJzdCB0aW1lLCBhZGQgaXQgdG8gdGhlIGxpc3Qgb2YgYWNjb3VudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2lnbmVkQWNjb3VudElkICYmIHN0YXRlICYmICFzdGF0ZS5maW5kKChhY2NvdW50KSA9PiBhY2NvdW50LmlkID09PSBzaWduZWRBY2NvdW50SWQpKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiQUREX0FDQ09VTlRcIixcbiAgICAgICAgYWNjb3VudDoge1xuICAgICAgICAgIG5ldHdvcms6IFwibmVhclwiLFxuICAgICAgICAgIGlkOiBzaWduZWRBY2NvdW50SWRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc3RhdGUsIHNpZ25lZEFjY291bnRJZCwgZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PldlbGNvbWUgdG8geW91ciBtdWx0aWNoYWluIGh1YiEgV2l0aCBhIE5lYXIgYWNjb3VudCwgeW91IGNhbiBhY2Nlc3Mgb3RoZXIgY2hhaW5zIGxpa2UgRXRoZXJldW0gYW5kIEJpdGNvaW4uPC9wPlxuICAgICAgPEFjY291bnRzQ29udGFpbmVyIC8+XG4gICAgPC9tYWluPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQWNjb3VudHNDb250YWluZXIiLCJBY2NvdW50c0NvbnRleHQiLCJOZWFyQ29udGV4dCIsIkhvbWUiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2lnbmVkQWNjb3VudElkIiwiZmluZCIsImFjY291bnQiLCJpZCIsInR5cGUiLCJuZXR3b3JrIiwibWFpbiIsImNsYXNzTmFtZSIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});