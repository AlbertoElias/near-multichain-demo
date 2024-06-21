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

/***/ "(app-pages-browser)/./src/lib/near.ts":
/*!*************************!*\
  !*** ./src/lib/near.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Wallet: function() { return /* binding */ Wallet; }\n/* harmony export */ });\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! near-api-js */ \"(app-pages-browser)/./node_modules/near-api-js/lib/browser-index.js\");\n/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_distinctUntilChanged_map_rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=distinctUntilChanged,map!=!rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/map.js\");\n/* harmony import */ var _barrel_optimize_names_distinctUntilChanged_map_rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=distinctUntilChanged,map!=!rxjs */ \"(app-pages-browser)/./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js\");\n/* harmony import */ var _near_wallet_selector_modal_ui_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @near-wallet-selector/modal-ui/styles.css */ \"(app-pages-browser)/./node_modules/@near-wallet-selector/modal-ui/styles.css\");\n/* harmony import */ var _near_wallet_selector_modal_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @near-wallet-selector/modal-ui */ \"(app-pages-browser)/./node_modules/@near-wallet-selector/modal-ui/index.js\");\n/* harmony import */ var _near_wallet_selector_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @near-wallet-selector/core */ \"(app-pages-browser)/./node_modules/@near-wallet-selector/core/index.js\");\n/* harmony import */ var _near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @near-wallet-selector/here-wallet */ \"(app-pages-browser)/./node_modules/@near-wallet-selector/here-wallet/index.js\");\n/* harmony import */ var _near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @near-wallet-selector/my-near-wallet */ \"(app-pages-browser)/./node_modules/@near-wallet-selector/my-near-wallet/index.js\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-pages-browser)/./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n// near api js\n\n// wallet selector\n\n\n\n\n\n\nconst THIRTY_TGAS = \"30000000000000\";\nconst NO_DEPOSIT = \"0\";\nclass Wallet {\n    /**\n   * @constructor\n   * @param {Object} options - the options for the wallet\n   * @param {NetworkId} options.networkId - the network id to connect to\n   * @param {string} options.createAccessKeyFor - the contract to create an access key for\n   * @example\n   * const wallet = new Wallet({ networkId: \"testnet\", createAccessKeyFor: \"contractId\" });\n   * wallet.startUp((signedAccountId) => console.log(signedAccountId));\n   */ constructor({ networkId = \"testnet\", createAccessKeyFor = \"\" }){\n        /**\n   * To be called when the website loads\n   * @param {Function} accountChangeHook - a function that is called when the user signs in or out#\n   * @returns {Promise<string>} - the accountId of the signed-in user \n   */ this.startUp = async (accountChangeHook)=>{\n            this.selector = await (0,_near_wallet_selector_core__WEBPACK_IMPORTED_MODULE_3__.setupWalletSelector)({\n                network: this.networkId,\n                modules: [\n                    (0,_near_wallet_selector_my_near_wallet__WEBPACK_IMPORTED_MODULE_5__.setupMyNearWallet)(),\n                    (0,_near_wallet_selector_here_wallet__WEBPACK_IMPORTED_MODULE_4__.setupHereWallet)()\n                ]\n            });\n            const isSignedIn = this.selector.isSignedIn();\n            const accountId = isSignedIn ? this.selector.store.getState().accounts[0].accountId : \"\";\n            this.selector.store.observable.pipe((0,_barrel_optimize_names_distinctUntilChanged_map_rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((state)=>state.accounts), (0,_barrel_optimize_names_distinctUntilChanged_map_rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)()).subscribe((accounts)=>{\n                var _accounts_find;\n                const signedAccount = (_accounts_find = accounts.find((account)=>account.active)) === null || _accounts_find === void 0 ? void 0 : _accounts_find.accountId;\n                accountChangeHook(signedAccount || \"\");\n            });\n            return accountId;\n        };\n        /**\n   * Displays a modal to login the user\n   */ this.signIn = async ()=>{\n            if (!this.selector) throw new Error(\"Wallet Selector not initialized\");\n            const modal = (0,_near_wallet_selector_modal_ui__WEBPACK_IMPORTED_MODULE_2__.setupModal)(this.selector, {\n                contractId: this.createAccessKeyFor || \"\"\n            });\n            modal.show();\n        };\n        /**\n   * Logout the user\n   */ this.signOut = async ()=>{\n            if (!this.selector) throw new Error(\"Wallet Selector not initialized\");\n            const selectedWallet = await this.selector.wallet();\n            selectedWallet.signOut();\n        };\n        this.getBalance = async (accountId)=>{\n            if (!this.selector) throw new Error(\"Wallet Selector not initialized\");\n            const { network } = this.selector.options;\n            const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider({\n                url: network.nodeUrl\n            });\n            const account = await provider.query({\n                request_type: \"view_account\",\n                finality: \"final\",\n                account_id: accountId\n            });\n            console.log(account);\n            return account.amount;\n        };\n        /**\n   * Makes a read-only call to a contract\n   * @param {Object} options - the options for the call\n   * @param {string} options.contractId - the contract\"s account id\n   * @param {string} options.method - the method to call\n   * @param {Object} options.args - the arguments to pass to the method\n   * @returns {Promise<JSON.value>} - the result of the method call\n   */ this.viewMethod = async (param)=>{\n            let { contractId, method, args = {} } = param;\n            const url = \"https://rpc.\".concat(this.networkId, \".near.org\");\n            const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider({\n                url\n            });\n            let res = await provider.query({\n                request_type: \"call_function\",\n                account_id: contractId,\n                method_name: method,\n                args_base64: Buffer.from(JSON.stringify(args)).toString(\"base64\"),\n                finality: \"optimistic\"\n            });\n            return JSON.parse(Buffer.from(res.result).toString());\n        };\n        /**\n   * Makes a call to a contract\n   * @param {Object} options - the options for the call\n   * @param {string} options.contractId - the contract\"s account id\n   * @param {string} options.method - the method to call\n   * @param {Object} options.args - the arguments to pass to the method\n   * @param {string} options.gas - the amount of gas to use\n   * @param {string} options.deposit - the amount of yoctoNEAR to deposit\n   * @returns {Promise<Transaction>} - the resulting transaction\n   */ this.callMethod = async (param)=>{\n            let { contractId, method, args = {}, gas = THIRTY_TGAS, deposit = NO_DEPOSIT } = param;\n            if (!this.selector) throw new Error(\"Wallet Selector not initialized\");\n            // Sign a transaction with the \"FunctionCall\" action\n            const selectedWallet = await this.selector.wallet();\n            const outcome = await selectedWallet.signAndSendTransaction({\n                receiverId: contractId,\n                actions: [\n                    {\n                        type: \"FunctionCall\",\n                        params: {\n                            methodName: method,\n                            args,\n                            gas,\n                            deposit\n                        }\n                    }\n                ]\n            });\n            if (outcome) {\n                return near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.getTransactionLastResult(outcome);\n            } else {\n                throw new Error(\"Transaction outcome is undefined.\");\n            }\n        };\n        /**\n   * Makes a call to a contract\n   * @param {string} txhash - the transaction hash\n   * @returns {Promise<JSON.value>} - the result of the transaction\n   */ this.getTransactionResult = async (txhash)=>{\n            if (!this.selector) throw new Error(\"Wallet Selector not initialized\");\n            const { network } = this.selector.options;\n            const provider = new near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.JsonRpcProvider({\n                url: network.nodeUrl\n            });\n            // Retrieve transaction result from the network\n            const transaction = await provider.txStatus(txhash, \"unnused\");\n            return near_api_js__WEBPACK_IMPORTED_MODULE_0__.providers.getTransactionLastResult(transaction);\n        };\n        this.createAccessKeyFor = createAccessKeyFor;\n        this.networkId = networkId;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbmVhci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGNBQWM7QUFDMEI7QUFFeEMsa0JBQWtCO0FBQytCO0FBQ0U7QUFDUztBQUNnQztBQUN4QjtBQUNLO0FBaUJ6RSxNQUFNTyxjQUFjO0FBQ3BCLE1BQU1DLGFBQWE7QUFFWixNQUFNQztJQUlYOzs7Ozs7OztHQVFDLEdBQ0RDLFlBQVksRUFBRUMsWUFBWSxTQUFTLEVBQUVDLHFCQUFxQixFQUFFLEVBQUUsQ0FBRTtRQUtoRTs7OztHQUlDLFFBQ0RDLFVBQVUsT0FBT0M7WUFDZixJQUFJLENBQUNDLFFBQVEsR0FBRyxNQUFNWCwrRUFBbUJBLENBQUM7Z0JBQ3hDWSxTQUFTLElBQUksQ0FBQ0wsU0FBUztnQkFDdkJNLFNBQVM7b0JBQUNYLHVGQUFpQkE7b0JBQUlELGtGQUFlQTtpQkFBRztZQUNuRDtZQUVBLE1BQU1hLGFBQWEsSUFBSSxDQUFDSCxRQUFRLENBQUNHLFVBQVU7WUFDM0MsTUFBTUMsWUFBWUQsYUFBYSxJQUFJLENBQUNILFFBQVEsQ0FBQ0ssS0FBSyxDQUFDQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxFQUFFLENBQUNILFNBQVMsR0FBRztZQUV0RixJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDRyxVQUFVLENBQzNCQyxJQUFJLENBQ0h0Qix5RkFBR0EsQ0FBQ3VCLENBQUFBLFFBQVNBLE1BQU1ILFFBQVEsR0FDM0JyQiwwR0FBb0JBLElBRXJCeUIsU0FBUyxDQUFDSixDQUFBQTtvQkFDYUE7Z0JBQXRCLE1BQU1LLGlCQUFnQkwsaUJBQUFBLFNBQVNNLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRQyxNQUFNLGVBQXpDUixxQ0FBQUEsZUFBNENILFNBQVM7Z0JBQzNFTCxrQkFBa0JhLGlCQUFpQjtZQUNyQztZQUVGLE9BQU9SO1FBQ1Q7UUFFQTs7R0FFQyxRQUNEWSxTQUFTO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQ2hCLFFBQVEsRUFBRSxNQUFNLElBQUlpQixNQUFNO1lBQ3BDLE1BQU1DLFFBQVE5QiwwRUFBVUEsQ0FBQyxJQUFJLENBQUNZLFFBQVEsRUFBRTtnQkFBRW1CLFlBQVksSUFBSSxDQUFDdEIsa0JBQWtCLElBQUk7WUFBRztZQUNwRnFCLE1BQU1FLElBQUk7UUFDWjtRQUVBOztHQUVDLFFBQ0RDLFVBQVU7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDckIsUUFBUSxFQUFFLE1BQU0sSUFBSWlCLE1BQU07WUFDcEMsTUFBTUssaUJBQWlCLE1BQU0sSUFBSSxDQUFDdEIsUUFBUSxDQUFDdUIsTUFBTTtZQUNqREQsZUFBZUQsT0FBTztRQUN4QjthQUVBRyxhQUFhLE9BQU9wQjtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDSixRQUFRLEVBQUUsTUFBTSxJQUFJaUIsTUFBTTtZQUNwQyxNQUFNLEVBQUVoQixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUNELFFBQVEsQ0FBQ3lCLE9BQU87WUFDekMsTUFBTUMsV0FBVyxJQUFJekMsa0RBQVNBLENBQUMwQyxlQUFlLENBQUM7Z0JBQUVDLEtBQUszQixRQUFRNEIsT0FBTztZQUFDO1lBRXRFLE1BQU1mLFVBQVUsTUFBTVksU0FBU0ksS0FBSyxDQUFjO2dCQUNoREMsY0FBYztnQkFDZEMsVUFBVTtnQkFDVkMsWUFBWTdCO1lBQ2Q7WUFDQThCLFFBQVFDLEdBQUcsQ0FBQ3JCO1lBRVosT0FBT0EsUUFBUXNCLE1BQU07UUFDdkI7UUFFQTs7Ozs7OztHQU9DLFFBQ0RDLGFBQWE7Z0JBQU8sRUFBRWxCLFVBQVUsRUFBRW1CLE1BQU0sRUFBRUMsT0FBTyxDQUFDLENBQUMsRUFBcUI7WUFDdEUsTUFBTVgsTUFBTSxlQUE4QixPQUFmLElBQUksQ0FBQ2hDLFNBQVMsRUFBQztZQUMxQyxNQUFNOEIsV0FBVyxJQUFJekMsa0RBQVNBLENBQUMwQyxlQUFlLENBQUM7Z0JBQUVDO1lBQUk7WUFFckQsSUFBSVksTUFBTSxNQUFNZCxTQUFTSSxLQUFLLENBQWE7Z0JBQ3pDQyxjQUFjO2dCQUNkRSxZQUFZZDtnQkFDWnNCLGFBQWFIO2dCQUNiSSxhQUFhQyxNQUFNQSxDQUFDQyxJQUFJLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ1AsT0FBT1EsUUFBUSxDQUFDO2dCQUN4RGYsVUFBVTtZQUNaO1lBQ0EsT0FBT2EsS0FBS0csS0FBSyxDQUFDTCxNQUFNQSxDQUFDQyxJQUFJLENBQUNKLElBQUlTLE1BQU0sRUFBRUYsUUFBUTtRQUNwRDtRQUVBOzs7Ozs7Ozs7R0FTQyxRQUNERyxhQUFhO2dCQUFPLEVBQUUvQixVQUFVLEVBQUVtQixNQUFNLEVBQUVDLE9BQU8sQ0FBQyxDQUFDLEVBQUVZLE1BQU0zRCxXQUFXLEVBQUU0RCxVQUFVM0QsVUFBVSxFQUFxQjtZQUMvRyxJQUFJLENBQUMsSUFBSSxDQUFDTyxRQUFRLEVBQUUsTUFBTSxJQUFJaUIsTUFBTTtZQUNwQyxvREFBb0Q7WUFDcEQsTUFBTUssaUJBQWlCLE1BQU0sSUFBSSxDQUFDdEIsUUFBUSxDQUFDdUIsTUFBTTtZQUNqRCxNQUFNOEIsVUFBVSxNQUFNL0IsZUFBZWdDLHNCQUFzQixDQUFDO2dCQUMxREMsWUFBWXBDO2dCQUNacUMsU0FBUztvQkFDUDt3QkFDRUMsTUFBTTt3QkFDTkMsUUFBUTs0QkFDTkMsWUFBWXJCOzRCQUNaQzs0QkFDQVk7NEJBQ0FDO3dCQUNGO29CQUNGO2lCQUNEO1lBQ0g7WUFFQSxJQUFJQyxTQUFTO2dCQUNYLE9BQU9wRSxrREFBU0EsQ0FBQzJFLHdCQUF3QixDQUFDUDtZQUM1QyxPQUFPO2dCQUNMLE1BQU0sSUFBSXBDLE1BQU07WUFDbEI7UUFDRjtRQUVBOzs7O0dBSUMsUUFDRDRDLHVCQUF1QixPQUFPQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDOUQsUUFBUSxFQUFFLE1BQU0sSUFBSWlCLE1BQU07WUFDcEMsTUFBTSxFQUFFaEIsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDRCxRQUFRLENBQUN5QixPQUFPO1lBQ3pDLE1BQU1DLFdBQVcsSUFBSXpDLGtEQUFTQSxDQUFDMEMsZUFBZSxDQUFDO2dCQUFFQyxLQUFLM0IsUUFBUTRCLE9BQU87WUFBQztZQUV0RSwrQ0FBK0M7WUFDL0MsTUFBTWtDLGNBQWMsTUFBTXJDLFNBQVNzQyxRQUFRLENBQUNGLFFBQVE7WUFDcEQsT0FBTzdFLGtEQUFTQSxDQUFDMkUsd0JBQXdCLENBQUNHO1FBQzVDO1FBdklFLElBQUksQ0FBQ2xFLGtCQUFrQixHQUFHQTtRQUMxQixJQUFJLENBQUNELFNBQVMsR0FBR0E7SUFDbkI7QUFzSUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9uZWFyLnRzPzgxOWMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmVhciBhcGkganNcbmltcG9ydCB7IHByb3ZpZGVycyB9IGZyb20gXCJuZWFyLWFwaS1qc1wiO1xuXG4vLyB3YWxsZXQgc2VsZWN0b3JcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IFwiQG5lYXItd2FsbGV0LXNlbGVjdG9yL21vZGFsLXVpL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IHNldHVwTW9kYWwgfSBmcm9tIFwiQG5lYXItd2FsbGV0LXNlbGVjdG9yL21vZGFsLXVpXCI7XG5pbXBvcnQgeyBOZXR3b3JrSWQsIFdhbGxldFNlbGVjdG9yLCBzZXR1cFdhbGxldFNlbGVjdG9yIH0gZnJvbSBcIkBuZWFyLXdhbGxldC1zZWxlY3Rvci9jb3JlXCI7XG5pbXBvcnQgeyBzZXR1cEhlcmVXYWxsZXQgfSBmcm9tIFwiQG5lYXItd2FsbGV0LXNlbGVjdG9yL2hlcmUtd2FsbGV0XCI7XG5pbXBvcnQgeyBzZXR1cE15TmVhcldhbGxldCB9IGZyb20gXCJAbmVhci13YWxsZXQtc2VsZWN0b3IvbXktbmVhci13YWxsZXRcIjtcbmltcG9ydCB7IEFjY291bnRWaWV3LCBDb2RlUmVzdWx0IH0gZnJvbSBcIm5lYXItYXBpLWpzL2xpYi9wcm92aWRlcnMvcHJvdmlkZXJcIjtcblxuaW50ZXJmYWNlIFZpZXdNZXRob2RPcHRpb25zIHtcbiAgY29udHJhY3RJZDogc3RyaW5nLFxuICBtZXRob2Q6IHN0cmluZyxcbiAgYXJncz86IE9iamVjdCxcbn1cblxuaW50ZXJmYWNlIENhbGxNZXRob2RPcHRpb25zIHtcbiAgY29udHJhY3RJZDogc3RyaW5nLFxuICBtZXRob2Q6IHN0cmluZyxcbiAgYXJncz86IE9iamVjdCxcbiAgZ2FzPzogc3RyaW5nLFxuICBkZXBvc2l0Pzogc3RyaW5nLFxufVxuXG5jb25zdCBUSElSVFlfVEdBUyA9IFwiMzAwMDAwMDAwMDAwMDBcIjtcbmNvbnN0IE5PX0RFUE9TSVQgPSBcIjBcIjtcblxuZXhwb3J0IGNsYXNzIFdhbGxldCB7XG4gIGNyZWF0ZUFjY2Vzc0tleUZvcjogc3RyaW5nO1xuICBuZXR3b3JrSWQ6IE5ldHdvcmtJZDtcbiAgc2VsZWN0b3I6IFdhbGxldFNlbGVjdG9yIHwgdW5kZWZpbmVkO1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIG9wdGlvbnMgZm9yIHRoZSB3YWxsZXRcbiAgICogQHBhcmFtIHtOZXR3b3JrSWR9IG9wdGlvbnMubmV0d29ya0lkIC0gdGhlIG5ldHdvcmsgaWQgdG8gY29ubmVjdCB0b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jcmVhdGVBY2Nlc3NLZXlGb3IgLSB0aGUgY29udHJhY3QgdG8gY3JlYXRlIGFuIGFjY2VzcyBrZXkgZm9yXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IHdhbGxldCA9IG5ldyBXYWxsZXQoeyBuZXR3b3JrSWQ6IFwidGVzdG5ldFwiLCBjcmVhdGVBY2Nlc3NLZXlGb3I6IFwiY29udHJhY3RJZFwiIH0pO1xuICAgKiB3YWxsZXQuc3RhcnRVcCgoc2lnbmVkQWNjb3VudElkKSA9PiBjb25zb2xlLmxvZyhzaWduZWRBY2NvdW50SWQpKTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKHsgbmV0d29ya0lkID0gXCJ0ZXN0bmV0XCIsIGNyZWF0ZUFjY2Vzc0tleUZvciA9IFwiXCIgfSkge1xuICAgIHRoaXMuY3JlYXRlQWNjZXNzS2V5Rm9yID0gY3JlYXRlQWNjZXNzS2V5Rm9yO1xuICAgIHRoaXMubmV0d29ya0lkID0gbmV0d29ya0lkIGFzIE5ldHdvcmtJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBiZSBjYWxsZWQgd2hlbiB0aGUgd2Vic2l0ZSBsb2Fkc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhY2NvdW50Q2hhbmdlSG9vayAtIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzaWducyBpbiBvciBvdXQjXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IC0gdGhlIGFjY291bnRJZCBvZiB0aGUgc2lnbmVkLWluIHVzZXIgXG4gICAqL1xuICBzdGFydFVwID0gYXN5bmMgKGFjY291bnRDaGFuZ2VIb29rOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBhd2FpdCBzZXR1cFdhbGxldFNlbGVjdG9yKHtcbiAgICAgIG5ldHdvcms6IHRoaXMubmV0d29ya0lkLFxuICAgICAgbW9kdWxlczogW3NldHVwTXlOZWFyV2FsbGV0KCksIHNldHVwSGVyZVdhbGxldCgpXVxuICAgIH0pO1xuXG4gICAgY29uc3QgaXNTaWduZWRJbiA9IHRoaXMuc2VsZWN0b3IuaXNTaWduZWRJbigpO1xuICAgIGNvbnN0IGFjY291bnRJZCA9IGlzU2lnbmVkSW4gPyB0aGlzLnNlbGVjdG9yLnN0b3JlLmdldFN0YXRlKCkuYWNjb3VudHNbMF0uYWNjb3VudElkIDogXCJcIjtcblxuICAgIHRoaXMuc2VsZWN0b3Iuc3RvcmUub2JzZXJ2YWJsZVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5hY2NvdW50cyksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWNjb3VudHMgPT4ge1xuICAgICAgICBjb25zdCBzaWduZWRBY2NvdW50ID0gYWNjb3VudHMuZmluZCgoYWNjb3VudCkgPT4gYWNjb3VudC5hY3RpdmUpPy5hY2NvdW50SWQ7XG4gICAgICAgIGFjY291bnRDaGFuZ2VIb29rKHNpZ25lZEFjY291bnQgfHwgXCJcIik7XG4gICAgICB9KTtcblxuICAgIHJldHVybiBhY2NvdW50SWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGEgbW9kYWwgdG8gbG9naW4gdGhlIHVzZXJcbiAgICovXG4gIHNpZ25JbiA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0b3IpIHRocm93IG5ldyBFcnJvcihcIldhbGxldCBTZWxlY3RvciBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgY29uc3QgbW9kYWwgPSBzZXR1cE1vZGFsKHRoaXMuc2VsZWN0b3IsIHsgY29udHJhY3RJZDogdGhpcy5jcmVhdGVBY2Nlc3NLZXlGb3IgfHwgXCJcIiB9KTtcbiAgICBtb2RhbC5zaG93KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvZ291dCB0aGUgdXNlclxuICAgKi9cbiAgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0b3IpIHRocm93IG5ldyBFcnJvcihcIldhbGxldCBTZWxlY3RvciBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgY29uc3Qgc2VsZWN0ZWRXYWxsZXQgPSBhd2FpdCB0aGlzLnNlbGVjdG9yLndhbGxldCgpO1xuICAgIHNlbGVjdGVkV2FsbGV0LnNpZ25PdXQoKTtcbiAgfTtcblxuICBnZXRCYWxhbmNlID0gYXN5bmMgKGFjY291bnRJZDogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdG9yKSB0aHJvdyBuZXcgRXJyb3IoXCJXYWxsZXQgU2VsZWN0b3Igbm90IGluaXRpYWxpemVkXCIpO1xuICAgIGNvbnN0IHsgbmV0d29yayB9ID0gdGhpcy5zZWxlY3Rvci5vcHRpb25zO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoeyB1cmw6IG5ldHdvcmsubm9kZVVybCB9KTtcblxuICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCBwcm92aWRlci5xdWVyeTxBY2NvdW50Vmlldz4oe1xuICAgICAgcmVxdWVzdF90eXBlOiBcInZpZXdfYWNjb3VudFwiLFxuICAgICAgZmluYWxpdHk6IFwiZmluYWxcIixcbiAgICAgIGFjY291bnRfaWQ6IGFjY291bnRJZCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhhY2NvdW50KVxuXG4gICAgcmV0dXJuIGFjY291bnQuYW1vdW50O1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgcmVhZC1vbmx5IGNhbGwgdG8gYSBjb250cmFjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBvcHRpb25zIGZvciB0aGUgY2FsbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jb250cmFjdElkIC0gdGhlIGNvbnRyYWN0XCJzIGFjY291bnQgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWV0aG9kIC0gdGhlIG1ldGhvZCB0byBjYWxsXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmFyZ3MgLSB0aGUgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlIG1ldGhvZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxKU09OLnZhbHVlPn0gLSB0aGUgcmVzdWx0IG9mIHRoZSBtZXRob2QgY2FsbFxuICAgKi9cbiAgdmlld01ldGhvZCA9IGFzeW5jICh7IGNvbnRyYWN0SWQsIG1ldGhvZCwgYXJncyA9IHt9IH06IFZpZXdNZXRob2RPcHRpb25zKSA9PiB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vcnBjLiR7dGhpcy5uZXR3b3JrSWR9Lm5lYXIub3JnYDtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBwcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHsgdXJsIH0pO1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IHByb3ZpZGVyLnF1ZXJ5PENvZGVSZXN1bHQ+KHtcbiAgICAgIHJlcXVlc3RfdHlwZTogXCJjYWxsX2Z1bmN0aW9uXCIsXG4gICAgICBhY2NvdW50X2lkOiBjb250cmFjdElkLFxuICAgICAgbWV0aG9kX25hbWU6IG1ldGhvZCxcbiAgICAgIGFyZ3NfYmFzZTY0OiBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShhcmdzKSkudG9TdHJpbmcoXCJiYXNlNjRcIiksXG4gICAgICBmaW5hbGl0eTogXCJvcHRpbWlzdGljXCIsXG4gICAgfSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoQnVmZmVyLmZyb20ocmVzLnJlc3VsdCkudG9TdHJpbmcoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgY2FsbCB0byBhIGNvbnRyYWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIG9wdGlvbnMgZm9yIHRoZSBjYWxsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNvbnRyYWN0SWQgLSB0aGUgY29udHJhY3RcInMgYWNjb3VudCBpZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tZXRob2QgLSB0aGUgbWV0aG9kIHRvIGNhbGxcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuYXJncyAtIHRoZSBhcmd1bWVudHMgdG8gcGFzcyB0byB0aGUgbWV0aG9kXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmdhcyAtIHRoZSBhbW91bnQgb2YgZ2FzIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5kZXBvc2l0IC0gdGhlIGFtb3VudCBvZiB5b2N0b05FQVIgdG8gZGVwb3NpdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUcmFuc2FjdGlvbj59IC0gdGhlIHJlc3VsdGluZyB0cmFuc2FjdGlvblxuICAgKi9cbiAgY2FsbE1ldGhvZCA9IGFzeW5jICh7IGNvbnRyYWN0SWQsIG1ldGhvZCwgYXJncyA9IHt9LCBnYXMgPSBUSElSVFlfVEdBUywgZGVwb3NpdCA9IE5PX0RFUE9TSVQgfTogQ2FsbE1ldGhvZE9wdGlvbnMpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0b3IpIHRocm93IG5ldyBFcnJvcihcIldhbGxldCBTZWxlY3RvciBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgLy8gU2lnbiBhIHRyYW5zYWN0aW9uIHdpdGggdGhlIFwiRnVuY3Rpb25DYWxsXCIgYWN0aW9uXG4gICAgY29uc3Qgc2VsZWN0ZWRXYWxsZXQgPSBhd2FpdCB0aGlzLnNlbGVjdG9yLndhbGxldCgpO1xuICAgIGNvbnN0IG91dGNvbWUgPSBhd2FpdCBzZWxlY3RlZFdhbGxldC5zaWduQW5kU2VuZFRyYW5zYWN0aW9uKHtcbiAgICAgIHJlY2VpdmVySWQ6IGNvbnRyYWN0SWQsXG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBcIkZ1bmN0aW9uQ2FsbFwiLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgbWV0aG9kTmFtZTogbWV0aG9kLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIGdhcyxcbiAgICAgICAgICAgIGRlcG9zaXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBpZiAob3V0Y29tZSkge1xuICAgICAgcmV0dXJuIHByb3ZpZGVycy5nZXRUcmFuc2FjdGlvbkxhc3RSZXN1bHQob3V0Y29tZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRyYW5zYWN0aW9uIG91dGNvbWUgaXMgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgY2FsbCB0byBhIGNvbnRyYWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eGhhc2ggLSB0aGUgdHJhbnNhY3Rpb24gaGFzaFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxKU09OLnZhbHVlPn0gLSB0aGUgcmVzdWx0IG9mIHRoZSB0cmFuc2FjdGlvblxuICAgKi9cbiAgZ2V0VHJhbnNhY3Rpb25SZXN1bHQgPSBhc3luYyAodHhoYXNoOiBzdHJpbmcgfCBVaW50OEFycmF5KSA9PiB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdG9yKSB0aHJvdyBuZXcgRXJyb3IoXCJXYWxsZXQgU2VsZWN0b3Igbm90IGluaXRpYWxpemVkXCIpO1xuICAgIGNvbnN0IHsgbmV0d29yayB9ID0gdGhpcy5zZWxlY3Rvci5vcHRpb25zO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoeyB1cmw6IG5ldHdvcmsubm9kZVVybCB9KTtcblxuICAgIC8vIFJldHJpZXZlIHRyYW5zYWN0aW9uIHJlc3VsdCBmcm9tIHRoZSBuZXR3b3JrXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBwcm92aWRlci50eFN0YXR1cyh0eGhhc2gsIFwidW5udXNlZFwiKTtcbiAgICByZXR1cm4gcHJvdmlkZXJzLmdldFRyYW5zYWN0aW9uTGFzdFJlc3VsdCh0cmFuc2FjdGlvbik7XG4gIH07XG59Il0sIm5hbWVzIjpbInByb3ZpZGVycyIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwibWFwIiwic2V0dXBNb2RhbCIsInNldHVwV2FsbGV0U2VsZWN0b3IiLCJzZXR1cEhlcmVXYWxsZXQiLCJzZXR1cE15TmVhcldhbGxldCIsIlRISVJUWV9UR0FTIiwiTk9fREVQT1NJVCIsIldhbGxldCIsImNvbnN0cnVjdG9yIiwibmV0d29ya0lkIiwiY3JlYXRlQWNjZXNzS2V5Rm9yIiwic3RhcnRVcCIsImFjY291bnRDaGFuZ2VIb29rIiwic2VsZWN0b3IiLCJuZXR3b3JrIiwibW9kdWxlcyIsImlzU2lnbmVkSW4iLCJhY2NvdW50SWQiLCJzdG9yZSIsImdldFN0YXRlIiwiYWNjb3VudHMiLCJvYnNlcnZhYmxlIiwicGlwZSIsInN0YXRlIiwic3Vic2NyaWJlIiwic2lnbmVkQWNjb3VudCIsImZpbmQiLCJhY2NvdW50IiwiYWN0aXZlIiwic2lnbkluIiwiRXJyb3IiLCJtb2RhbCIsImNvbnRyYWN0SWQiLCJzaG93Iiwic2lnbk91dCIsInNlbGVjdGVkV2FsbGV0Iiwid2FsbGV0IiwiZ2V0QmFsYW5jZSIsIm9wdGlvbnMiLCJwcm92aWRlciIsIkpzb25ScGNQcm92aWRlciIsInVybCIsIm5vZGVVcmwiLCJxdWVyeSIsInJlcXVlc3RfdHlwZSIsImZpbmFsaXR5IiwiYWNjb3VudF9pZCIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJ2aWV3TWV0aG9kIiwibWV0aG9kIiwiYXJncyIsInJlcyIsIm1ldGhvZF9uYW1lIiwiYXJnc19iYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvU3RyaW5nIiwicGFyc2UiLCJyZXN1bHQiLCJjYWxsTWV0aG9kIiwiZ2FzIiwiZGVwb3NpdCIsIm91dGNvbWUiLCJzaWduQW5kU2VuZFRyYW5zYWN0aW9uIiwicmVjZWl2ZXJJZCIsImFjdGlvbnMiLCJ0eXBlIiwicGFyYW1zIiwibWV0aG9kTmFtZSIsImdldFRyYW5zYWN0aW9uTGFzdFJlc3VsdCIsImdldFRyYW5zYWN0aW9uUmVzdWx0IiwidHhoYXNoIiwidHJhbnNhY3Rpb24iLCJ0eFN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/near.ts\n"));

/***/ })

});