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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module.css */ \"(app-pages-browser)/./src/app/app.module.css\");\n/* harmony import */ var _app_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_accounts_container_accounts_cointainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/accounts-container/accounts-cointainer */ \"(app-pages-browser)/./src/components/accounts-container/accounts-cointainer.tsx\");\n/* harmony import */ var _context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/accounts-reducer-context */ \"(app-pages-browser)/./src/context/accounts-reducer-context.tsx\");\n/* harmony import */ var _context_near_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/near-context */ \"(app-pages-browser)/./src/context/near-context.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_accounts_reducer_context__WEBPACK_IMPORTED_MODULE_4__.AccountsContext);\n    const { signedAccountId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_near_context__WEBPACK_IMPORTED_MODULE_5__.NearContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (signedAccountId) {\n            dispatch({\n                type: \"ADD_ACCOUNT\",\n                payload: {\n                    network: \"near\",\n                    account: {\n                        id: signedAccountId\n                    }\n                }\n            });\n        }\n    }, [\n        signedAccountId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_app_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_app_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                children: \"Welcome to your multichain hub! With a Near account, you can access other chains like Ethereum and Bitcoin.\"\n            }, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_accounts_container_accounts_cointainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/albertoelias/code/tests/near-hub-demo/src/app/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"8aolyPsPwOGV01Q9KPwdbK1cFL4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFOEM7QUFDUjtBQUM4QztBQUNmO0FBQ2hCO0FBRXRDLFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0ksOEVBQWVBO0lBQy9DLE1BQU0sRUFBRUksZUFBZSxFQUFFLEdBQUdSLGlEQUFVQSxDQUFDSyw4REFBV0E7SUFFbERKLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8saUJBQWlCO1lBQ25CRCxTQUFTO2dCQUNQRSxNQUFNO2dCQUNOQyxTQUFTO29CQUNQQyxTQUFTO29CQUNUQyxTQUFTO3dCQUNQQyxJQUFJTDtvQkFDTjtnQkFDRjtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNBO0tBQWdCO0lBRXBCLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFXYiw2REFBVzs7MEJBQzFCLDhEQUFDYztnQkFBRUQsV0FBV2Isb0VBQWtCOzBCQUFFOzs7Ozs7MEJBQ2xDLDhEQUFDQywwRkFBaUJBOzs7Ozs7Ozs7OztBQUd4QjtHQXhCd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FwcC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQWNjb3VudHNDb250YWluZXIgZnJvbSBcIkAvY29tcG9uZW50cy9hY2NvdW50cy1jb250YWluZXIvYWNjb3VudHMtY29pbnRhaW5lclwiO1xuaW1wb3J0IHsgQWNjb3VudHNDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9hY2NvdW50cy1yZWR1Y2VyLWNvbnRleHRcIjtcbmltcG9ydCB7IE5lYXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9uZWFyLWNvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChBY2NvdW50c0NvbnRleHQpO1xuICBjb25zdCB7IHNpZ25lZEFjY291bnRJZCB9ID0gdXNlQ29udGV4dChOZWFyQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2lnbmVkQWNjb3VudElkKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiQUREX0FDQ09VTlRcIixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIG5ldHdvcms6IFwibmVhclwiLFxuICAgICAgICAgIGFjY291bnQ6IHtcbiAgICAgICAgICAgIGlkOiBzaWduZWRBY2NvdW50SWRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NpZ25lZEFjY291bnRJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+V2VsY29tZSB0byB5b3VyIG11bHRpY2hhaW4gaHViISBXaXRoIGEgTmVhciBhY2NvdW50LCB5b3UgY2FuIGFjY2VzcyBvdGhlciBjaGFpbnMgbGlrZSBFdGhlcmV1bSBhbmQgQml0Y29pbi48L3A+XG4gICAgICA8QWNjb3VudHNDb250YWluZXIgLz5cbiAgICA8L21haW4+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJBY2NvdW50c0NvbnRhaW5lciIsIkFjY291bnRzQ29udGV4dCIsIk5lYXJDb250ZXh0IiwiSG9tZSIsImRpc3BhdGNoIiwic2lnbmVkQWNjb3VudElkIiwidHlwZSIsInBheWxvYWQiLCJuZXR3b3JrIiwiYWNjb3VudCIsImlkIiwibWFpbiIsImNsYXNzTmFtZSIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});