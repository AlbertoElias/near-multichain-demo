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

/***/ "(app-pages-browser)/./src/lib/ethereum.ts":
/*!*****************************!*\
  !*** ./src/lib/ethereum.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ethereum: function() { return /* binding */ Ethereum; }\n/* harmony export */ });\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"(app-pages-browser)/./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _ethereumjs_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethereumjs/util */ \"(app-pages-browser)/./node_modules/@ethereumjs/util/dist/esm/index.js\");\n/* harmony import */ var _ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethereumjs/tx */ \"(app-pages-browser)/./node_modules/@ethereumjs/tx/dist/esm/index.js\");\n/* harmony import */ var _ethereumjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethereumjs/common */ \"(app-pages-browser)/./node_modules/@ethereumjs/common/dist/esm/index.js\");\n/* harmony import */ var _kdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kdf */ \"(app-pages-browser)/./src/lib/kdf.ts\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-pages-browser)/./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\n\n\n\n\nclass Ethereum {\n    async deriveAddress(accountId, derivation_path) {\n        const publicKey = await (0,_kdf__WEBPACK_IMPORTED_MODULE_4__.deriveChildPublicKey)((0,_kdf__WEBPACK_IMPORTED_MODULE_4__.najPublicKeyStrToUncompressedHexPoint)(), accountId, derivation_path);\n        const address = await (0,_kdf__WEBPACK_IMPORTED_MODULE_4__.uncompressedHexPointToEvmAddress)(publicKey);\n        return {\n            publicKey: Buffer.from(publicKey, \"hex\"),\n            address\n        };\n    }\n    async queryGasPrice() {\n        const maxFeePerGas = await this.web3.eth.getGasPrice();\n        const maxPriorityFeePerGas = await this.web3.eth.getMaxPriorityFeePerGas();\n        return {\n            maxFeePerGas,\n            maxPriorityFeePerGas\n        };\n    }\n    async getBalance(accountId) {\n        const balance = await this.web3.eth.getBalance(accountId);\n        const ONE_ETH = 1000000000000000000n;\n        return Number(balance * 100n / ONE_ETH) / 100;\n    }\n    async createPayload(sender, receiver, amount) {\n        const common = new _ethereumjs_common__WEBPACK_IMPORTED_MODULE_3__.Common({\n            chain: this.chain_id\n        });\n        // Get the nonce & gas price\n        const nonce = await this.web3.eth.getTransactionCount(sender);\n        const { maxFeePerGas, maxPriorityFeePerGas } = await this.queryGasPrice();\n        // Construct transaction\n        const transactionData = {\n            nonce,\n            gasLimit: 21000,\n            maxFeePerGas,\n            maxPriorityFeePerGas,\n            to: receiver,\n            value: BigInt(this.web3.utils.toWei(amount, \"ether\")),\n            chain: this.chain_id\n        };\n        // Return the message hash\n        const transaction = _ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__.FeeMarketEIP1559Transaction.fromTxData(transactionData, {\n            common\n        });\n        const payload = transaction.getHashedMessageToSign();\n        return {\n            transaction,\n            payload\n        };\n    }\n    async requestSignatureToMPC(wallet, contractId, path, ethPayload, transaction, sender) {\n        // Ask the MPC to sign the payload\n        const payload = Array.from(ethPayload.reverse());\n        const [big_r, big_s] = await wallet.callMethod({\n            contractId,\n            method: \"sign\",\n            args: {\n                payload,\n                path,\n                key_version: 0\n            },\n            gas: \"250000000000000\"\n        });\n        // reconstruct the signature\n        const r = Buffer.from(big_r.substring(2), \"hex\");\n        const s = Buffer.from(big_s, \"hex\");\n        const candidates = [\n            0n,\n            1n\n        ].map((v)=>transaction.addSignature(v, r, s));\n        const signature = candidates.find((c)=>c.getSenderAddress().toString().toLowerCase() === sender.toLowerCase());\n        if (!signature) {\n            throw new Error(\"Signature is not valid\");\n        }\n        if (signature.getValidationErrors().length > 0) throw new Error(\"Transaction validation errors\");\n        if (!signature.verifySignature()) throw new Error(\"Signature is not valid\");\n        return signature;\n    }\n    // This code can be used to actually relay the transaction to the Ethereum network\n    async relayTransaction(signedTransaction) {\n        const serializedTx = (0,_ethereumjs_util__WEBPACK_IMPORTED_MODULE_1__.bytesToHex)(signedTransaction.serialize());\n        const relayed = await this.web3.eth.sendSignedTransaction(serializedTx);\n        return relayed.transactionHash;\n    }\n    constructor(chain_rpc, chain_id){\n        this.web3 = new web3__WEBPACK_IMPORTED_MODULE_0__.Web3(chain_rpc);\n        this.chain_id = chain_id;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZXRoZXJldW0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQjtBQUNtQjtBQUNlO0FBQ2xCO0FBQzJFO0FBRy9HLE1BQU1PO0lBU1gsTUFBTUMsY0FBY0MsU0FBaUIsRUFBRUMsZUFBdUIsRUFBRTtRQUM5RCxNQUFNQyxZQUFZLE1BQU1QLDBEQUFvQkEsQ0FBQ0MsMkVBQXFDQSxJQUFJSSxXQUFXQztRQUNqRyxNQUFNRSxVQUFVLE1BQU1OLHNFQUFnQ0EsQ0FBQ0s7UUFDdkQsT0FBTztZQUFFQSxXQUFXRSxNQUFNQSxDQUFDQyxJQUFJLENBQUNILFdBQVc7WUFBUUM7UUFBUTtJQUM3RDtJQUVBLE1BQU1HLGdCQUFnQjtRQUNwQixNQUFNQyxlQUFlLE1BQU0sSUFBSSxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztRQUNwRCxNQUFNQyx1QkFBdUIsTUFBTSxJQUFJLENBQUNILElBQUksQ0FBQ0MsR0FBRyxDQUFDRyx1QkFBdUI7UUFDeEUsT0FBTztZQUFFTDtZQUFjSTtRQUFxQjtJQUM5QztJQUVBLE1BQU1FLFdBQVdiLFNBQWlCLEVBQUU7UUFDbEMsTUFBTWMsVUFBVSxNQUFNLElBQUksQ0FBQ04sSUFBSSxDQUFDQyxHQUFHLENBQUNJLFVBQVUsQ0FBQ2I7UUFDL0MsTUFBTWUsVUFBVSxvQkFBb0I7UUFDcEMsT0FBT0MsT0FBT0YsVUFBVSxJQUFJLEdBQUdDLFdBQVc7SUFDNUM7SUFFQSxNQUFNRSxjQUFjQyxNQUFjLEVBQUVDLFFBQWdCLEVBQUVDLE1BQWMsRUFBRTtRQUNwRSxNQUFNQyxTQUFTLElBQUkzQixzREFBTUEsQ0FBQztZQUFFNEIsT0FBTyxJQUFJLENBQUNDLFFBQVE7UUFBQztRQUVqRCw0QkFBNEI7UUFDNUIsTUFBTUMsUUFBUSxNQUFNLElBQUksQ0FBQ2hCLElBQUksQ0FBQ0MsR0FBRyxDQUFDZ0IsbUJBQW1CLENBQUNQO1FBQ3RELE1BQU0sRUFBRVgsWUFBWSxFQUFFSSxvQkFBb0IsRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDTCxhQUFhO1FBRXZFLHdCQUF3QjtRQUN4QixNQUFNb0Isa0JBQWtCO1lBQ3RCRjtZQUNBRyxVQUFVO1lBQ1ZwQjtZQUNBSTtZQUNBaUIsSUFBSVQ7WUFDSlUsT0FBT0MsT0FBTyxJQUFJLENBQUN0QixJQUFJLENBQUN1QixLQUFLLENBQUNDLEtBQUssQ0FBQ1osUUFBUTtZQUM1Q0UsT0FBTyxJQUFJLENBQUNDLFFBQVE7UUFDdEI7UUFFQSwwQkFBMEI7UUFDMUIsTUFBTVUsY0FBY3hDLHVFQUEyQkEsQ0FBQ3lDLFVBQVUsQ0FBQ1IsaUJBQWlCO1lBQUVMO1FBQU87UUFDckYsTUFBTWMsVUFBVUYsWUFBWUcsc0JBQXNCO1FBQ2xELE9BQU87WUFBRUg7WUFBYUU7UUFBUTtJQUNoQztJQUVBLE1BQU1FLHNCQUFzQkMsTUFBYyxFQUFFQyxVQUFrQixFQUFFQyxJQUFZLEVBQUVDLFVBQXNCLEVBQUVSLFdBQXdDLEVBQUVmLE1BQWMsRUFBRTtRQUM5SixrQ0FBa0M7UUFDbEMsTUFBTWlCLFVBQVVPLE1BQU1yQyxJQUFJLENBQUNvQyxXQUFXRSxPQUFPO1FBQzdDLE1BQU0sQ0FBQ0MsT0FBT0MsTUFBTSxHQUFHLE1BQU1QLE9BQU9RLFVBQVUsQ0FBQztZQUFFUDtZQUFZUSxRQUFRO1lBQVFDLE1BQU07Z0JBQUViO2dCQUFTSztnQkFBTVMsYUFBYTtZQUFFO1lBQUdDLEtBQUs7UUFBa0I7UUFFN0ksNEJBQTRCO1FBQzVCLE1BQU1DLElBQUkvQyxNQUFNQSxDQUFDQyxJQUFJLENBQUN1QyxNQUFNUSxTQUFTLENBQUMsSUFBSTtRQUMxQyxNQUFNQyxJQUFJakQsTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDd0MsT0FBTztRQUU3QixNQUFNUyxhQUFhO0FBQUMsY0FBRTtBQUFFLGNBQUU7U0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsSUFBTXZCLFlBQVl3QixZQUFZLENBQUNELEdBQUdMLEdBQUdFO1FBQ3RFLE1BQU1LLFlBQVlKLFdBQVdLLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxnQkFBZ0IsR0FBR0MsUUFBUSxHQUFHQyxXQUFXLE9BQU83QyxPQUFPNkMsV0FBVztRQUU3RyxJQUFJLENBQUNMLFdBQVc7WUFDZCxNQUFNLElBQUlNLE1BQU07UUFDbEI7UUFFQSxJQUFJTixVQUFVTyxtQkFBbUIsR0FBR0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJRixNQUFNO1FBQ2hFLElBQUksQ0FBQ04sVUFBVVMsZUFBZSxJQUFJLE1BQU0sSUFBSUgsTUFBTTtRQUVsRCxPQUFPTjtJQUNUO0lBRUEsa0ZBQWtGO0lBQ2xGLE1BQU1VLGlCQUFpQkMsaUJBQThDLEVBQUU7UUFDckUsTUFBTUMsZUFBZTlFLDREQUFVQSxDQUFDNkUsa0JBQWtCRSxTQUFTO1FBQzNELE1BQU1DLFVBQVUsTUFBTSxJQUFJLENBQUNoRSxJQUFJLENBQUNDLEdBQUcsQ0FBQ2dFLHFCQUFxQixDQUFDSDtRQUMxRCxPQUFPRSxRQUFRRSxlQUFlO0lBQ2hDO0lBMUVBQyxZQUFZQyxTQUFpQixFQUFFckQsUUFBZ0IsQ0FBRTtRQUMvQyxJQUFJLENBQUNmLElBQUksR0FBRyxJQUFJakIsc0NBQUlBLENBQUNxRjtRQUNyQixJQUFJLENBQUNyRCxRQUFRLEdBQUdBO0lBQ2xCO0FBd0VGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZXRoZXJldW0udHM/Y2M3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWIzIH0gZnJvbSBcIndlYjNcIlxuaW1wb3J0IHsgYnl0ZXNUb0hleCB9IGZyb20gXCJAZXRoZXJldW1qcy91dGlsXCI7XG5pbXBvcnQgeyBGZWVNYXJrZXRFSVAxNTU5VHJhbnNhY3Rpb24gfSBmcm9tIFwiQGV0aGVyZXVtanMvdHhcIjtcbmltcG9ydCB7IENvbW1vbiB9IGZyb20gXCJAZXRoZXJldW1qcy9jb21tb25cIlxuaW1wb3J0IHsgZGVyaXZlQ2hpbGRQdWJsaWNLZXksIG5halB1YmxpY0tleVN0clRvVW5jb21wcmVzc2VkSGV4UG9pbnQsIHVuY29tcHJlc3NlZEhleFBvaW50VG9Fdm1BZGRyZXNzIH0gZnJvbSBcIi4va2RmXCI7XG5pbXBvcnQgeyBXYWxsZXQgfSBmcm9tIFwiLi9uZWFyXCI7XG5cbmV4cG9ydCBjbGFzcyBFdGhlcmV1bSB7XG4gIHdlYjM6IFdlYjM7XG4gIGNoYWluX2lkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoY2hhaW5fcnBjOiBzdHJpbmcsIGNoYWluX2lkOiBudW1iZXIpIHtcbiAgICB0aGlzLndlYjMgPSBuZXcgV2ViMyhjaGFpbl9ycGMpO1xuICAgIHRoaXMuY2hhaW5faWQgPSBjaGFpbl9pZDtcbiAgfVxuXG4gIGFzeW5jIGRlcml2ZUFkZHJlc3MoYWNjb3VudElkOiBzdHJpbmcsIGRlcml2YXRpb25fcGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgcHVibGljS2V5ID0gYXdhaXQgZGVyaXZlQ2hpbGRQdWJsaWNLZXkobmFqUHVibGljS2V5U3RyVG9VbmNvbXByZXNzZWRIZXhQb2ludCgpLCBhY2NvdW50SWQsIGRlcml2YXRpb25fcGF0aCk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IHVuY29tcHJlc3NlZEhleFBvaW50VG9Fdm1BZGRyZXNzKHB1YmxpY0tleSk7XG4gICAgcmV0dXJuIHsgcHVibGljS2V5OiBCdWZmZXIuZnJvbShwdWJsaWNLZXksIFwiaGV4XCIpLCBhZGRyZXNzIH07XG4gIH1cblxuICBhc3luYyBxdWVyeUdhc1ByaWNlKCkge1xuICAgIGNvbnN0IG1heEZlZVBlckdhcyA9IGF3YWl0IHRoaXMud2ViMy5ldGguZ2V0R2FzUHJpY2UoKTtcbiAgICBjb25zdCBtYXhQcmlvcml0eUZlZVBlckdhcyA9IGF3YWl0IHRoaXMud2ViMy5ldGguZ2V0TWF4UHJpb3JpdHlGZWVQZXJHYXMoKTtcbiAgICByZXR1cm4geyBtYXhGZWVQZXJHYXMsIG1heFByaW9yaXR5RmVlUGVyR2FzIH07XG4gIH1cblxuICBhc3luYyBnZXRCYWxhbmNlKGFjY291bnRJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHRoaXMud2ViMy5ldGguZ2V0QmFsYW5jZShhY2NvdW50SWQpXG4gICAgY29uc3QgT05FX0VUSCA9IDEwMDAwMDAwMDAwMDAwMDAwMDBuO1xuICAgIHJldHVybiBOdW1iZXIoYmFsYW5jZSAqIDEwMG4gLyBPTkVfRVRIKSAvIDEwMDtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVBheWxvYWQoc2VuZGVyOiBzdHJpbmcsIHJlY2VpdmVyOiBzdHJpbmcsIGFtb3VudDogbnVtYmVyKSB7XG4gICAgY29uc3QgY29tbW9uID0gbmV3IENvbW1vbih7IGNoYWluOiB0aGlzLmNoYWluX2lkIH0pO1xuXG4gICAgLy8gR2V0IHRoZSBub25jZSAmIGdhcyBwcmljZVxuICAgIGNvbnN0IG5vbmNlID0gYXdhaXQgdGhpcy53ZWIzLmV0aC5nZXRUcmFuc2FjdGlvbkNvdW50KHNlbmRlcik7XG4gICAgY29uc3QgeyBtYXhGZWVQZXJHYXMsIG1heFByaW9yaXR5RmVlUGVyR2FzIH0gPSBhd2FpdCB0aGlzLnF1ZXJ5R2FzUHJpY2UoKTtcblxuICAgIC8vIENvbnN0cnVjdCB0cmFuc2FjdGlvblxuICAgIGNvbnN0IHRyYW5zYWN0aW9uRGF0YSA9IHtcbiAgICAgIG5vbmNlLFxuICAgICAgZ2FzTGltaXQ6IDIxMDAwLFxuICAgICAgbWF4RmVlUGVyR2FzLFxuICAgICAgbWF4UHJpb3JpdHlGZWVQZXJHYXMsXG4gICAgICB0bzogcmVjZWl2ZXIsXG4gICAgICB2YWx1ZTogQmlnSW50KHRoaXMud2ViMy51dGlscy50b1dlaShhbW91bnQsIFwiZXRoZXJcIikpLFxuICAgICAgY2hhaW46IHRoaXMuY2hhaW5faWQsXG4gICAgfTtcblxuICAgIC8vIFJldHVybiB0aGUgbWVzc2FnZSBoYXNoXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBGZWVNYXJrZXRFSVAxNTU5VHJhbnNhY3Rpb24uZnJvbVR4RGF0YSh0cmFuc2FjdGlvbkRhdGEsIHsgY29tbW9uIH0pO1xuICAgIGNvbnN0IHBheWxvYWQgPSB0cmFuc2FjdGlvbi5nZXRIYXNoZWRNZXNzYWdlVG9TaWduKCk7XG4gICAgcmV0dXJuIHsgdHJhbnNhY3Rpb24sIHBheWxvYWQgfTtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3RTaWduYXR1cmVUb01QQyh3YWxsZXQ6IFdhbGxldCwgY29udHJhY3RJZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGV0aFBheWxvYWQ6IFVpbnQ4QXJyYXksIHRyYW5zYWN0aW9uOiBGZWVNYXJrZXRFSVAxNTU5VHJhbnNhY3Rpb24sIHNlbmRlcjogc3RyaW5nKSB7XG4gICAgLy8gQXNrIHRoZSBNUEMgdG8gc2lnbiB0aGUgcGF5bG9hZFxuICAgIGNvbnN0IHBheWxvYWQgPSBBcnJheS5mcm9tKGV0aFBheWxvYWQucmV2ZXJzZSgpKTtcbiAgICBjb25zdCBbYmlnX3IsIGJpZ19zXSA9IGF3YWl0IHdhbGxldC5jYWxsTWV0aG9kKHsgY29udHJhY3RJZCwgbWV0aG9kOiBcInNpZ25cIiwgYXJnczogeyBwYXlsb2FkLCBwYXRoLCBrZXlfdmVyc2lvbjogMCB9LCBnYXM6IFwiMjUwMDAwMDAwMDAwMDAwXCIgfSk7XG5cbiAgICAvLyByZWNvbnN0cnVjdCB0aGUgc2lnbmF0dXJlXG4gICAgY29uc3QgciA9IEJ1ZmZlci5mcm9tKGJpZ19yLnN1YnN0cmluZygyKSwgXCJoZXhcIik7XG4gICAgY29uc3QgcyA9IEJ1ZmZlci5mcm9tKGJpZ19zLCBcImhleFwiKTtcblxuICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBbMG4sIDFuXS5tYXAoKHYpID0+IHRyYW5zYWN0aW9uLmFkZFNpZ25hdHVyZSh2LCByLCBzKSk7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gY2FuZGlkYXRlcy5maW5kKChjKSA9PiBjLmdldFNlbmRlckFkZHJlc3MoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09IHNlbmRlci50b0xvd2VyQ2FzZSgpKTtcblxuICAgIGlmICghc2lnbmF0dXJlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaWduYXR1cmUgaXMgbm90IHZhbGlkXCIpO1xuICAgIH1cblxuICAgIGlmIChzaWduYXR1cmUuZ2V0VmFsaWRhdGlvbkVycm9ycygpLmxlbmd0aCA+IDApIHRocm93IG5ldyBFcnJvcihcIlRyYW5zYWN0aW9uIHZhbGlkYXRpb24gZXJyb3JzXCIpO1xuICAgIGlmICghc2lnbmF0dXJlLnZlcmlmeVNpZ25hdHVyZSgpKSB0aHJvdyBuZXcgRXJyb3IoXCJTaWduYXR1cmUgaXMgbm90IHZhbGlkXCIpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfVxuXG4gIC8vIFRoaXMgY29kZSBjYW4gYmUgdXNlZCB0byBhY3R1YWxseSByZWxheSB0aGUgdHJhbnNhY3Rpb24gdG8gdGhlIEV0aGVyZXVtIG5ldHdvcmtcbiAgYXN5bmMgcmVsYXlUcmFuc2FjdGlvbihzaWduZWRUcmFuc2FjdGlvbjogRmVlTWFya2V0RUlQMTU1OVRyYW5zYWN0aW9uKSB7XG4gICAgY29uc3Qgc2VyaWFsaXplZFR4ID0gYnl0ZXNUb0hleChzaWduZWRUcmFuc2FjdGlvbi5zZXJpYWxpemUoKSk7XG4gICAgY29uc3QgcmVsYXllZCA9IGF3YWl0IHRoaXMud2ViMy5ldGguc2VuZFNpZ25lZFRyYW5zYWN0aW9uKHNlcmlhbGl6ZWRUeCk7XG4gICAgcmV0dXJuIHJlbGF5ZWQudHJhbnNhY3Rpb25IYXNoXG4gIH1cbn0iXSwibmFtZXMiOlsiV2ViMyIsImJ5dGVzVG9IZXgiLCJGZWVNYXJrZXRFSVAxNTU5VHJhbnNhY3Rpb24iLCJDb21tb24iLCJkZXJpdmVDaGlsZFB1YmxpY0tleSIsIm5halB1YmxpY0tleVN0clRvVW5jb21wcmVzc2VkSGV4UG9pbnQiLCJ1bmNvbXByZXNzZWRIZXhQb2ludFRvRXZtQWRkcmVzcyIsIkV0aGVyZXVtIiwiZGVyaXZlQWRkcmVzcyIsImFjY291bnRJZCIsImRlcml2YXRpb25fcGF0aCIsInB1YmxpY0tleSIsImFkZHJlc3MiLCJCdWZmZXIiLCJmcm9tIiwicXVlcnlHYXNQcmljZSIsIm1heEZlZVBlckdhcyIsIndlYjMiLCJldGgiLCJnZXRHYXNQcmljZSIsIm1heFByaW9yaXR5RmVlUGVyR2FzIiwiZ2V0TWF4UHJpb3JpdHlGZWVQZXJHYXMiLCJnZXRCYWxhbmNlIiwiYmFsYW5jZSIsIk9ORV9FVEgiLCJOdW1iZXIiLCJjcmVhdGVQYXlsb2FkIiwic2VuZGVyIiwicmVjZWl2ZXIiLCJhbW91bnQiLCJjb21tb24iLCJjaGFpbiIsImNoYWluX2lkIiwibm9uY2UiLCJnZXRUcmFuc2FjdGlvbkNvdW50IiwidHJhbnNhY3Rpb25EYXRhIiwiZ2FzTGltaXQiLCJ0byIsInZhbHVlIiwiQmlnSW50IiwidXRpbHMiLCJ0b1dlaSIsInRyYW5zYWN0aW9uIiwiZnJvbVR4RGF0YSIsInBheWxvYWQiLCJnZXRIYXNoZWRNZXNzYWdlVG9TaWduIiwicmVxdWVzdFNpZ25hdHVyZVRvTVBDIiwid2FsbGV0IiwiY29udHJhY3RJZCIsInBhdGgiLCJldGhQYXlsb2FkIiwiQXJyYXkiLCJyZXZlcnNlIiwiYmlnX3IiLCJiaWdfcyIsImNhbGxNZXRob2QiLCJtZXRob2QiLCJhcmdzIiwia2V5X3ZlcnNpb24iLCJnYXMiLCJyIiwic3Vic3RyaW5nIiwicyIsImNhbmRpZGF0ZXMiLCJtYXAiLCJ2IiwiYWRkU2lnbmF0dXJlIiwic2lnbmF0dXJlIiwiZmluZCIsImMiLCJnZXRTZW5kZXJBZGRyZXNzIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIkVycm9yIiwiZ2V0VmFsaWRhdGlvbkVycm9ycyIsImxlbmd0aCIsInZlcmlmeVNpZ25hdHVyZSIsInJlbGF5VHJhbnNhY3Rpb24iLCJzaWduZWRUcmFuc2FjdGlvbiIsInNlcmlhbGl6ZWRUeCIsInNlcmlhbGl6ZSIsInJlbGF5ZWQiLCJzZW5kU2lnbmVkVHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbkhhc2giLCJjb25zdHJ1Y3RvciIsImNoYWluX3JwYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/ethereum.ts\n"));

/***/ })

});