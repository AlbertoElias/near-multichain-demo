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

/***/ "(app-pages-browser)/./src/lib/bitcoint.ts":
/*!*****************************!*\
  !*** ./src/lib/bitcoint.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bitcoin: function() { return /* binding */ Bitcoin; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/data.js\");\n/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitcoinjs-lib */ \"(app-pages-browser)/./node_modules/bitcoinjs-lib/src/index.js\");\n/* harmony import */ var _lib_kdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/kdf */ \"(app-pages-browser)/./src/lib/kdf.ts\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-pages-browser)/./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\n\n\n\nclass Bitcoin {\n    async deriveAddress(accountId, derivation_path) {\n        const publicKey = await (0,_lib_kdf__WEBPACK_IMPORTED_MODULE_1__.deriveChildPublicKey)((0,_lib_kdf__WEBPACK_IMPORTED_MODULE_1__.najPublicKeyStrToUncompressedHexPoint)(), accountId, derivation_path);\n        const address = await (0,_lib_kdf__WEBPACK_IMPORTED_MODULE_1__.uncompressedHexPointToBtcAddress)(publicKey, this.network);\n        return {\n            publicKey: Buffer.from(publicKey, \"hex\"),\n            address\n        };\n    }\n    async getBalance(address) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/address/\").concat(address, \"/utxo\"));\n        const balance = response.data.reduce((acc, utxo)=>acc + utxo.value, 0);\n        return balance;\n    }\n    async createPayload(sender, receiver, satoshis) {\n        const utxos = await this.fetchUTXOs(sender);\n        const feeRate = await this.fetchFeeRate();\n        const psbt = new bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.Psbt({\n            network: this.network\n        });\n        let totalInput = 0;\n        await Promise.all(utxos.map(async (utxo)=>{\n            totalInput += utxo.value;\n            const transaction = await this.fetchTransaction(utxo.txid);\n            const inputOptions = transaction.outs[utxo.vout].script.includes(\"0014\") ? {\n                hash: utxo.txid,\n                index: utxo.vout,\n                witnessUtxo: {\n                    script: transaction.outs[utxo.vout].script,\n                    value: utxo.value\n                }\n            } : {\n                hash: utxo.txid,\n                index: utxo.vout,\n                nonWitnessUtxo: Buffer.from(transaction.toHex(), \"hex\")\n            };\n            psbt.addInput(inputOptions);\n        }));\n        psbt.addOutput({\n            address: receiver,\n            value: Number(satoshis)\n        });\n        const estimatedSize = utxos.length * 148 + 2 * 34 + 10;\n        const fee = Math.ceil(estimatedSize * (feeRate + 3));\n        const change = totalInput - Number(satoshis) - fee;\n        if (change > 0) {\n            psbt.addOutput({\n                address: sender,\n                value: change\n            });\n        }\n        return {\n            psbt,\n            utxos\n        };\n    }\n    async requestSignatureToMPC(wallet, contractId, path, btcPayload, publicKey) {\n        const { psbt, utxos } = btcPayload;\n        // Bitcoin needs to sign multiple utxos, so we need to pass a signer function\n        const sign = async (tx)=>{\n            const payload = Array.from(ethers__WEBPACK_IMPORTED_MODULE_3__.getBytes(tx)).reverse();\n            const [big_r, big_s] = await wallet.callMethod({\n                contractId,\n                method: \"sign\",\n                args: {\n                    payload,\n                    path,\n                    key_version: 0\n                },\n                gas: \"250000000000000\"\n            });\n            return this.reconstructSignature(big_r, big_s);\n        };\n        await Promise.all(utxos.map(async (_, index)=>{\n            await psbt.signInputAsync(index, {\n                publicKey,\n                sign\n            });\n        }));\n        psbt.finalizeAllInputs();\n        return psbt.extractTransaction().toHex();\n    }\n    reconstructSignature(big_r, big_s) {\n        const r = big_r.slice(2).padStart(64, \"0\");\n        const s = big_s.padStart(64, \"0\");\n        const rawSignature = Buffer.from(r + s, \"hex\");\n        if (rawSignature.length !== 64) {\n            throw new Error(\"Invalid signature length.\");\n        }\n        return rawSignature;\n    }\n    // This code can be used to actually relay the transaction to the Ethereum network\n    async relayTransaction(signedTransaction) {\n        let useProxy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;\n        const proxy = useProxy ? \"https://corsproxy.io/?\" : \"\";\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(proxy).concat(this.chain_rpc, \"/tx\"), signedTransaction);\n        return response.data;\n    }\n    /**\n   * Converts a value from satoshis to bitcoins.\n   *\n   * @param {number} satoshi - The amount in satoshis to convert.\n   * @returns {number} The equivalent amount in bitcoins.\n   */ static toBTC(satoshi) {\n        return satoshi / 100000000;\n    }\n    /**\n   * Converts a value from bitcoins to satoshis.\n   *\n   * @param {number} btc - The amount in bitcoins to convert.\n   * @returns {number} The equivalent amount in satoshis.\n   */ static toSatoshi(btc) {\n        return Number(btc * 100000000);\n    }\n    /**\n   * Fetches the current fee rate from the Bitcoin network.\n   * This method queries the RPC endpoint for fee estimates and returns the fee rate\n   * expected for a transaction to be confirmed within a certain number of blocks.\n   * The confirmation target is set to 6 blocks by default, which is commonly used\n   * for a balance between confirmation time and cost.\n   *\n   * @returns {Promise<number>} A promise that resolves to the fee rate in satoshis per byte.\n   * @throws {Error} Throws an error if the fee rate data for the specified confirmation target is missing.\n   */ async fetchFeeRate() {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/fee-estimates\"));\n        const confirmationTarget = 6;\n        return response.data[confirmationTarget];\n    }\n    /**\n   * Fetches the Unspent Transaction Outputs (UTXOs) for a given Bitcoin address.\n   *\n   * @param {string} address - The Bitcoin address for which to fetch the UTXOs.\n   * @returns {Promise<Array<{ txid: string; vout: number; value: number }>>} A promise that resolves to an array of UTXOs.\n   * Each UTXO is represented as an object containing the transaction ID (`txid`), the output index within that transaction (`vout`),\n   * and the value of the output in satoshis (`value`).\n   */ async fetchUTXOs(address) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/address/\").concat(address, \"/utxo\"));\n        const utxos = response.data.map((utxo)=>({\n                txid: utxo.txid,\n                vout: utxo.vout,\n                value: utxo.value,\n                script: utxo.script\n            }));\n        return utxos;\n    }\n    /**\n   * Fetches a Bitcoin transaction by its ID and constructs a transaction object.\n   * This function retrieves the transaction details from the blockchain using the RPC endpoint,\n   * then parses the input and output data to construct a `bitcoin.Transaction` object.\n   *\n   * @param {string} transactionId - The ID of the transaction to fetch.\n   * @returns {Promise<bitcoin.Transaction>} A promise that resolves to a `bitcoin.Transaction` object representing the fetched transaction.\n   */ async fetchTransaction(transactionId) {\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/tx/\").concat(transactionId));\n        const tx = new bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.Transaction();\n        tx.version = data.version;\n        tx.locktime = data.locktime;\n        data.vin.forEach((vin)=>{\n            const txHash = Buffer.from(vin.txid, \"hex\").reverse();\n            const vout = vin.vout;\n            const sequence = vin.sequence;\n            const scriptSig = vin.scriptsig ? Buffer.from(vin.scriptsig, \"hex\") : undefined;\n            tx.addInput(txHash, vout, sequence, scriptSig);\n        });\n        data.vout.forEach((vout)=>{\n            const value = vout.value;\n            const scriptPubKey = Buffer.from(vout.scriptpubkey, \"hex\");\n            tx.addOutput(scriptPubKey, value);\n        });\n        data.vin.forEach((vin, index)=>{\n            if (vin.witness && vin.witness.length > 0) {\n                const witness = vin.witness.map((w)=>Buffer.from(w, \"hex\"));\n                tx.setWitness(index, witness);\n            }\n        });\n        return tx;\n    }\n    /**\n   * Initializes a new instance of the `Bitcoin` class.\n   *\n   * @param {string} chain_rpc - The URL of the Bitcoin Core RPC endpoint.\n   * @param {string} network - The network to use. Either \"mainnet\" or \"testnet\".\n   */ constructor(chain_rpc, network){\n        this.chain_rpc = chain_rpc;\n        this.network = network === \"testnet\" ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.networks.testnet : bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.networks.bitcoin;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvYml0Y29pbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ087QUFDUTtBQUNpRjtBQUVuSCxNQUFNTTtJQWNYLE1BQU1DLGNBQWNDLFNBQWlCLEVBQUVDLGVBQXVCLEVBQUU7UUFDOUQsTUFBTUMsWUFBWSxNQUFNUCw4REFBb0JBLENBQUNDLCtFQUFxQ0EsSUFBSUksV0FBV0M7UUFDakcsTUFBTUUsVUFBVSxNQUFNTiwwRUFBZ0NBLENBQUNLLFdBQVcsSUFBSSxDQUFDRSxPQUFPO1FBQzlFLE9BQU87WUFBRUYsV0FBV0csTUFBTUEsQ0FBQ0MsSUFBSSxDQUFDSixXQUFXO1lBQVFDO1FBQVE7SUFDN0Q7SUFFQSxNQUFNSSxXQUFXSixPQUFZLEVBQUU7UUFDN0IsTUFBTUssV0FBVyxNQUFNaEIsNkNBQUtBLENBQUNpQixHQUFHLENBQzlCLEdBQTZCTixPQUExQixJQUFJLENBQUNPLFNBQVMsRUFBQyxhQUFtQixPQUFSUCxTQUFRO1FBRXZDLE1BQU1RLFVBQVVILFNBQVNJLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEtBQVVDLE9BQTBCRCxNQUFNQyxLQUFLQyxLQUFLLEVBQUU7UUFDNUYsT0FBT0w7SUFDVDtJQUVBLE1BQU1NLGNBQWNDLE1BQVcsRUFBRUMsUUFBYSxFQUFFQyxRQUFhLEVBQUU7UUFDN0QsTUFBTUMsUUFBUSxNQUFNLElBQUksQ0FBQ0MsVUFBVSxDQUFDSjtRQUNwQyxNQUFNSyxVQUFVLE1BQU0sSUFBSSxDQUFDQyxZQUFZO1FBRXZDLE1BQU1DLE9BQU8sSUFBSS9CLCtDQUFZLENBQUM7WUFBRVUsU0FBUyxJQUFJLENBQUNBLE9BQU87UUFBQztRQUV0RCxJQUFJdUIsYUFBYTtRQUNqQixNQUFNQyxRQUFRQyxHQUFHLENBQ2ZSLE1BQU1TLEdBQUcsQ0FDUCxPQUFPZjtZQUNMWSxjQUFjWixLQUFLQyxLQUFLO1lBRXhCLE1BQU1lLGNBQWMsTUFBTSxJQUFJLENBQUNDLGdCQUFn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QUFPLEdBQUdBLFlBQVksWUFBWVYsbURBQWdCLENBQUNvSCxPQUFPLEdBQUdwSCxtREFBZ0IsQ0FBQ0EsT0FBTztJQUM1RjtBQW9ORiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2JpdGNvaW50LnRzP2ViOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAqIGFzIGV0aGVycyBmcm9tICdldGhlcnMnO1xuaW1wb3J0ICogYXMgYml0Y29pbiBmcm9tIFwiYml0Y29pbmpzLWxpYlwiO1xuaW1wb3J0IHsgZGVyaXZlQ2hpbGRQdWJsaWNLZXksIG5halB1YmxpY0tleVN0clRvVW5jb21wcmVzc2VkSGV4UG9pbnQsIHVuY29tcHJlc3NlZEhleFBvaW50VG9CdGNBZGRyZXNzIH0gZnJvbSAnQC9saWIva2RmJztcblxuZXhwb3J0IGNsYXNzIEJpdGNvaW4ge1xuICBjaGFpbl9ycGM6IHN0cmluZztcbiAgbmV0d29yazogYml0Y29pbi5OZXR3b3JrO1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGBCaXRjb2luYCBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYWluX3JwYyAtIFRoZSBVUkwgb2YgdGhlIEJpdGNvaW4gQ29yZSBSUEMgZW5kcG9pbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXR3b3JrIC0gVGhlIG5ldHdvcmsgdG8gdXNlLiBFaXRoZXIgXCJtYWlubmV0XCIgb3IgXCJ0ZXN0bmV0XCIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjaGFpbl9ycGM6IHN0cmluZywgbmV0d29yazogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFpbl9ycGMgPSBjaGFpbl9ycGM7XG4gICAgdGhpcy5uZXR3b3JrID0gbmV0d29yayA9PT0gJ3Rlc3RuZXQnID8gYml0Y29pbi5uZXR3b3Jrcy50ZXN0bmV0IDogYml0Y29pbi5uZXR3b3Jrcy5iaXRjb2luO1xuICB9XG5cbiAgYXN5bmMgZGVyaXZlQWRkcmVzcyhhY2NvdW50SWQ6IHN0cmluZywgZGVyaXZhdGlvbl9wYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwdWJsaWNLZXkgPSBhd2FpdCBkZXJpdmVDaGlsZFB1YmxpY0tleShuYWpQdWJsaWNLZXlTdHJUb1VuY29tcHJlc3NlZEhleFBvaW50KCksIGFjY291bnRJZCwgZGVyaXZhdGlvbl9wYXRoKTtcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgdW5jb21wcmVzc2VkSGV4UG9pbnRUb0J0Y0FkZHJlc3MocHVibGljS2V5LCB0aGlzLm5ldHdvcmspO1xuICAgIHJldHVybiB7IHB1YmxpY0tleTogQnVmZmVyLmZyb20ocHVibGljS2V5LCAnaGV4JyksIGFkZHJlc3MgfTtcbiAgfVxuXG4gIGFzeW5jIGdldEJhbGFuY2UoYWRkcmVzczogYW55KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgJHt0aGlzLmNoYWluX3JwY30vYWRkcmVzcy8ke2FkZHJlc3N9L3V0eG9gXG4gICAgKTtcbiAgICBjb25zdCBiYWxhbmNlID0gcmVzcG9uc2UuZGF0YS5yZWR1Y2UoKGFjYzogYW55LCB1dHhvOiB7IHZhbHVlOiBhbnk7IH0pID0+IGFjYyArIHV0eG8udmFsdWUsIDApO1xuICAgIHJldHVybiBiYWxhbmNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUGF5bG9hZChzZW5kZXI6IGFueSwgcmVjZWl2ZXI6IGFueSwgc2F0b3NoaXM6IGFueSkge1xuICAgIGNvbnN0IHV0eG9zID0gYXdhaXQgdGhpcy5mZXRjaFVUWE9zKHNlbmRlcik7XG4gICAgY29uc3QgZmVlUmF0ZSA9IGF3YWl0IHRoaXMuZmV0Y2hGZWVSYXRlKCk7XG5cbiAgICBjb25zdCBwc2J0ID0gbmV3IGJpdGNvaW4uUHNidCh7IG5ldHdvcms6IHRoaXMubmV0d29yayB9KTtcblxuICAgIGxldCB0b3RhbElucHV0ID0gMDtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHV0eG9zLm1hcChcbiAgICAgICAgYXN5bmMgKHV0eG86IHsgdmFsdWU6IG51bWJlcjsgdHhpZDogc3RyaW5nOyB2b3V0OiBzdHJpbmcgfCBudW1iZXI7IH0pID0+IHtcbiAgICAgICAgICB0b3RhbElucHV0ICs9IHV0eG8udmFsdWU7XG5cbiAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMuZmV0Y2hUcmFuc2FjdGlvbih1dHhvLnR4aWQpO1xuICAgICAgICAgIGNvbnN0IGlucHV0T3B0aW9ucyA9IHRyYW5zYWN0aW9uLm91dHNbdXR4by52b3V0IGFzIG51bWJlcl0uc2NyaXB0LmluY2x1ZGVzKFwiMDAxNFwiKSA/XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhhc2g6IHV0eG8udHhpZCxcbiAgICAgICAgICAgICAgaW5kZXg6IHV0eG8udm91dCBhcyBudW1iZXIsXG4gICAgICAgICAgICAgIHdpdG5lc3NVdHhvOiB7XG4gICAgICAgICAgICAgICAgc2NyaXB0OiB0cmFuc2FjdGlvbi5vdXRzW3V0eG8udm91dCBhcyBudW1iZXJdLnNjcmlwdCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdXR4by52YWx1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoYXNoOiB1dHhvLnR4aWQsXG4gICAgICAgICAgICAgIGluZGV4OiB1dHhvLnZvdXQgYXMgbnVtYmVyLFxuICAgICAgICAgICAgICBub25XaXRuZXNzVXR4bzogQnVmZmVyLmZyb20odHJhbnNhY3Rpb24udG9IZXgoKSwgXCJoZXhcIiksXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBwc2J0LmFkZElucHV0KGlucHV0T3B0aW9ucyk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIHBzYnQuYWRkT3V0cHV0KHtcbiAgICAgIGFkZHJlc3M6IHJlY2VpdmVyLFxuICAgICAgdmFsdWU6IE51bWJlcihzYXRvc2hpcyksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlc3RpbWF0ZWRTaXplID0gdXR4b3MubGVuZ3RoICogMTQ4ICsgMiAqIDM0ICsgMTA7XG4gICAgY29uc3QgZmVlID0gTWF0aC5jZWlsKGVzdGltYXRlZFNpemUgKiAoZmVlUmF0ZSArIDMpKTtcblxuICAgIGNvbnN0IGNoYW5nZSA9IHRvdGFsSW5wdXQgLSBOdW1iZXIoc2F0b3NoaXMpIC0gZmVlO1xuICAgIGlmIChjaGFuZ2UgPiAwKSB7XG4gICAgICBwc2J0LmFkZE91dHB1dCh7XG4gICAgICAgIGFkZHJlc3M6IHNlbmRlcixcbiAgICAgICAgdmFsdWU6IGNoYW5nZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBzYnQsIHV0eG9zIH07XG4gIH1cblxuICBhc3luYyByZXF1ZXN0U2lnbmF0dXJlVG9NUEMod2FsbGV0OiB7IGNhbGxNZXRob2Q6IChhcmcwOiB7IGNvbnRyYWN0SWQ6IGFueTsgbWV0aG9kOiBzdHJpbmc7IGFyZ3M6IHsgcGF5bG9hZDogbnVtYmVyW107IHBhdGg6IGFueTsga2V5X3ZlcnNpb246IG51bWJlcjsgfTsgZ2FzOiBzdHJpbmc7IH0pID0+IFByb21pc2VMaWtlPFthbnksIGFueV0+IHwgW2FueSwgYW55XTsgfSwgY29udHJhY3RJZDogYW55LCBwYXRoOiBhbnksIGJ0Y1BheWxvYWQ6IHsgcHNidDogYW55OyB1dHhvczogYW55OyB9LCBwdWJsaWNLZXk6IGFueSkge1xuICAgIGNvbnN0IHsgcHNidCwgdXR4b3MgfSA9IGJ0Y1BheWxvYWQ7XG5cbiAgICAvLyBCaXRjb2luIG5lZWRzIHRvIHNpZ24gbXVsdGlwbGUgdXR4b3MsIHNvIHdlIG5lZWQgdG8gcGFzcyBhIHNpZ25lciBmdW5jdGlvblxuICAgIGNvbnN0IHNpZ24gPSBhc3luYyAodHg6IGV0aGVycy5ldGhlcnMuQnl0ZXNMaWtlKSA9PiB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gQXJyYXkuZnJvbShldGhlcnMuZ2V0Qnl0ZXModHgpKS5yZXZlcnNlKCk7XG4gICAgICBjb25zdCBbYmlnX3IsIGJpZ19zXSA9IGF3YWl0IHdhbGxldC5jYWxsTWV0aG9kKHsgY29udHJhY3RJZCwgbWV0aG9kOiAnc2lnbicsIGFyZ3M6IHsgcGF5bG9hZCwgcGF0aCwga2V5X3ZlcnNpb246IDAgfSwgZ2FzOiAnMjUwMDAwMDAwMDAwMDAwJyB9KTtcbiAgICAgIHJldHVybiB0aGlzLnJlY29uc3RydWN0U2lnbmF0dXJlKGJpZ19yLCBiaWdfcyk7XG4gICAgfVxuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICB1dHhvcy5tYXAoYXN5bmMgKF86IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICBhd2FpdCBwc2J0LnNpZ25JbnB1dEFzeW5jKGluZGV4LCB7IHB1YmxpY0tleSwgc2lnbiB9KTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHBzYnQuZmluYWxpemVBbGxJbnB1dHMoKTtcblxuICAgIHJldHVybiBwc2J0LmV4dHJhY3RUcmFuc2FjdGlvbigpLnRvSGV4KClcbiAgfVxuXG4gIHJlY29uc3RydWN0U2lnbmF0dXJlKGJpZ19yOiBzdHJpbmcsIGJpZ19zOiBzdHJpbmcpIHtcbiAgICBjb25zdCByID0gYmlnX3Iuc2xpY2UoMikucGFkU3RhcnQoNjQsIFwiMFwiKTtcbiAgICBjb25zdCBzID0gYmlnX3MucGFkU3RhcnQoNjQsIFwiMFwiKTtcblxuICAgIGNvbnN0IHJhd1NpZ25hdHVyZSA9IEJ1ZmZlci5mcm9tKHIgKyBzLCBcImhleFwiKTtcblxuICAgIGlmIChyYXdTaWduYXR1cmUubGVuZ3RoICE9PSA2NCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaWduYXR1cmUgbGVuZ3RoLlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmF3U2lnbmF0dXJlO1xuICB9XG5cbiAgLy8gVGhpcyBjb2RlIGNhbiBiZSB1c2VkIHRvIGFjdHVhbGx5IHJlbGF5IHRoZSB0cmFuc2FjdGlvbiB0byB0aGUgRXRoZXJldW0gbmV0d29ya1xuICBhc3luYyByZWxheVRyYW5zYWN0aW9uKHNpZ25lZFRyYW5zYWN0aW9uOiBhbnksIHVzZVByb3h5ID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb3h5ID0gdXNlUHJveHkgPyBcImh0dHBzOi8vY29yc3Byb3h5LmlvLz9cIiA6IFwiXCI7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBgJHtwcm94eX0ke3RoaXMuY2hhaW5fcnBjfS90eGAsXG4gICAgICBzaWduZWRUcmFuc2FjdGlvblxuICAgICk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHZhbHVlIGZyb20gc2F0b3NoaXMgdG8gYml0Y29pbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzYXRvc2hpIC0gVGhlIGFtb3VudCBpbiBzYXRvc2hpcyB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZXF1aXZhbGVudCBhbW91bnQgaW4gYml0Y29pbnMuXG4gICAqL1xuICBzdGF0aWMgdG9CVEMoc2F0b3NoaTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHNhdG9zaGkgLyAxMDAwMDAwMDA7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgYSB2YWx1ZSBmcm9tIGJpdGNvaW5zIHRvIHNhdG9zaGlzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gYnRjIC0gVGhlIGFtb3VudCBpbiBiaXRjb2lucyB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgZXF1aXZhbGVudCBhbW91bnQgaW4gc2F0b3NoaXMuXG4gICAqL1xuICBzdGF0aWMgdG9TYXRvc2hpKGJ0YzogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE51bWJlcihidGMgKiAxMDAwMDAwMDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGN1cnJlbnQgZmVlIHJhdGUgZnJvbSB0aGUgQml0Y29pbiBuZXR3b3JrLlxuICAgKiBUaGlzIG1ldGhvZCBxdWVyaWVzIHRoZSBSUEMgZW5kcG9pbnQgZm9yIGZlZSBlc3RpbWF0ZXMgYW5kIHJldHVybnMgdGhlIGZlZSByYXRlXG4gICAqIGV4cGVjdGVkIGZvciBhIHRyYW5zYWN0aW9uIHRvIGJlIGNvbmZpcm1lZCB3aXRoaW4gYSBjZXJ0YWluIG51bWJlciBvZiBibG9ja3MuXG4gICAqIFRoZSBjb25maXJtYXRpb24gdGFyZ2V0IGlzIHNldCB0byA2IGJsb2NrcyBieSBkZWZhdWx0LCB3aGljaCBpcyBjb21tb25seSB1c2VkXG4gICAqIGZvciBhIGJhbGFuY2UgYmV0d2VlbiBjb25maXJtYXRpb24gdGltZSBhbmQgY29zdC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIGZlZSByYXRlIGluIHNhdG9zaGlzIHBlciBieXRlLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBmZWUgcmF0ZSBkYXRhIGZvciB0aGUgc3BlY2lmaWVkIGNvbmZpcm1hdGlvbiB0YXJnZXQgaXMgbWlzc2luZy5cbiAgICovXG4gIGFzeW5jIGZldGNoRmVlUmF0ZSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHt0aGlzLmNoYWluX3JwY30vZmVlLWVzdGltYXRlc2ApO1xuICAgIGNvbnN0IGNvbmZpcm1hdGlvblRhcmdldCA9IDY7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFbY29uZmlybWF0aW9uVGFyZ2V0XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBVbnNwZW50IFRyYW5zYWN0aW9uIE91dHB1dHMgKFVUWE9zKSBmb3IgYSBnaXZlbiBCaXRjb2luIGFkZHJlc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIEJpdGNvaW4gYWRkcmVzcyBmb3Igd2hpY2ggdG8gZmV0Y2ggdGhlIFVUWE9zLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheTx7IHR4aWQ6IHN0cmluZzsgdm91dDogbnVtYmVyOyB2YWx1ZTogbnVtYmVyIH0+Pn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgVVRYT3MuXG4gICAqIEVhY2ggVVRYTyBpcyByZXByZXNlbnRlZCBhcyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgdHJhbnNhY3Rpb24gSUQgKGB0eGlkYCksIHRoZSBvdXRwdXQgaW5kZXggd2l0aGluIHRoYXQgdHJhbnNhY3Rpb24gKGB2b3V0YCksXG4gICAqIGFuZCB0aGUgdmFsdWUgb2YgdGhlIG91dHB1dCBpbiBzYXRvc2hpcyAoYHZhbHVlYCkuXG4gICAqL1xuICBhc3luYyBmZXRjaFVUWE9zKGFkZHJlc3M6IGFueSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYCR7dGhpcy5jaGFpbl9ycGN9L2FkZHJlc3MvJHthZGRyZXNzfS91dHhvYFxuICAgICk7XG5cbiAgICBjb25zdCB1dHhvcyA9IHJlc3BvbnNlLmRhdGEubWFwKCh1dHhvOiB7IHR4aWQ6IGFueTsgdm91dDogYW55OyB2YWx1ZTogYW55OyBzY3JpcHQ6IGFueTsgfSkgPT4gKHtcbiAgICAgIHR4aWQ6IHV0eG8udHhpZCxcbiAgICAgIHZvdXQ6IHV0eG8udm91dCxcbiAgICAgIHZhbHVlOiB1dHhvLnZhbHVlLFxuICAgICAgc2NyaXB0OiB1dHhvLnNjcmlwdCxcbiAgICB9KSk7XG4gICAgcmV0dXJuIHV0eG9zO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgYSBCaXRjb2luIHRyYW5zYWN0aW9uIGJ5IGl0cyBJRCBhbmQgY29uc3RydWN0cyBhIHRyYW5zYWN0aW9uIG9iamVjdC5cbiAgICogVGhpcyBmdW5jdGlvbiByZXRyaWV2ZXMgdGhlIHRyYW5zYWN0aW9uIGRldGFpbHMgZnJvbSB0aGUgYmxvY2tjaGFpbiB1c2luZyB0aGUgUlBDIGVuZHBvaW50LFxuICAgKiB0aGVuIHBhcnNlcyB0aGUgaW5wdXQgYW5kIG91dHB1dCBkYXRhIHRvIGNvbnN0cnVjdCBhIGBiaXRjb2luLlRyYW5zYWN0aW9uYCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2FjdGlvbklkIC0gVGhlIElEIG9mIHRoZSB0cmFuc2FjdGlvbiB0byBmZXRjaC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Yml0Y29pbi5UcmFuc2FjdGlvbj59IEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgYGJpdGNvaW4uVHJhbnNhY3Rpb25gIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGZldGNoZWQgdHJhbnNhY3Rpb24uXG4gICAqL1xuICBhc3luYyBmZXRjaFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uSWQ6IGFueSkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgYCR7dGhpcy5jaGFpbl9ycGN9L3R4LyR7dHJhbnNhY3Rpb25JZH1gXG4gICAgKTtcbiAgICBjb25zdCB0eCA9IG5ldyBiaXRjb2luLlRyYW5zYWN0aW9uKCk7XG5cbiAgICB0eC52ZXJzaW9uID0gZGF0YS52ZXJzaW9uO1xuICAgIHR4LmxvY2t0aW1lID0gZGF0YS5sb2NrdGltZTtcblxuICAgIGRhdGEudmluLmZvckVhY2goKHZpbjogeyB0eGlkOiBXaXRoSW1wbGljaXRDb2VyY2lvbjxzdHJpbmc+IHwgeyBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50OiBcInN0cmluZ1wiKTogc3RyaW5nOyB9OyB2b3V0OiBhbnk7IHNlcXVlbmNlOiBhbnk7IHNjcmlwdHNpZzogV2l0aEltcGxpY2l0Q29lcmNpb248c3RyaW5nPiB8IHsgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludDogXCJzdHJpbmdcIik6IHN0cmluZzsgfTsgfSkgPT4ge1xuICAgICAgY29uc3QgdHhIYXNoID0gQnVmZmVyLmZyb20odmluLnR4aWQsIFwiaGV4XCIpLnJldmVyc2UoKTtcbiAgICAgIGNvbnN0IHZvdXQgPSB2aW4udm91dDtcbiAgICAgIGNvbnN0IHNlcXVlbmNlID0gdmluLnNlcXVlbmNlO1xuICAgICAgY29uc3Qgc2NyaXB0U2lnID0gdmluLnNjcmlwdHNpZ1xuICAgICAgICA/IEJ1ZmZlci5mcm9tKHZpbi5zY3JpcHRzaWcsIFwiaGV4XCIpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgdHguYWRkSW5wdXQodHhIYXNoLCB2b3V0LCBzZXF1ZW5jZSwgc2NyaXB0U2lnKTtcbiAgICB9KTtcblxuICAgIGRhdGEudm91dC5mb3JFYWNoKCh2b3V0OiB7IHZhbHVlOiBhbnk7IHNjcmlwdHB1YmtleTogV2l0aEltcGxpY2l0Q29lcmNpb248c3RyaW5nPiB8IHsgW1N5bWJvbC50b1ByaW1pdGl2ZV0oaGludDogXCJzdHJpbmdcIik6IHN0cmluZzsgfTsgfSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB2b3V0LnZhbHVlO1xuICAgICAgY29uc3Qgc2NyaXB0UHViS2V5ID0gQnVmZmVyLmZyb20odm91dC5zY3JpcHRwdWJrZXksIFwiaGV4XCIpO1xuICAgICAgdHguYWRkT3V0cHV0KHNjcmlwdFB1YktleSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgZGF0YS52aW4uZm9yRWFjaCgodmluOiB7IHdpdG5lc3M6IGFueVtdOyB9LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodmluLndpdG5lc3MgJiYgdmluLndpdG5lc3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB3aXRuZXNzID0gdmluLndpdG5lc3MubWFwKCh3OiBXaXRoSW1wbGljaXRDb2VyY2lvbjxzdHJpbmc+IHwgeyBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50OiBcInN0cmluZ1wiKTogc3RyaW5nOyB9KSA9PiBCdWZmZXIuZnJvbSh3LCBcImhleFwiKSk7XG4gICAgICAgIHR4LnNldFdpdG5lc3MoaW5kZXgsIHdpdG5lc3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR4O1xuICB9XG59Il0sIm5hbWVzIjpbImF4aW9zIiwiZXRoZXJzIiwiYml0Y29pbiIsImRlcml2ZUNoaWxkUHVibGljS2V5IiwibmFqUHVibGljS2V5U3RyVG9VbmNvbXByZXNzZWRIZXhQb2ludCIsInVuY29tcHJlc3NlZEhleFBvaW50VG9CdGNBZGRyZXNzIiwiQml0Y29pbiIsImRlcml2ZUFkZHJlc3MiLCJhY2NvdW50SWQiLCJkZXJpdmF0aW9uX3BhdGgiLCJwdWJsaWNLZXkiLCJhZGRyZXNzIiwibmV0d29yayIsIkJ1ZmZlciIsImZyb20iLCJnZXRCYWxhbmNlIiwicmVzcG9uc2UiLCJnZXQiLCJjaGFpbl9ycGMiLCJiYWxhbmNlIiwiZGF0YSIsInJlZHVjZSIsImFjYyIsInV0eG8iLCJ2YWx1ZSIsImNyZWF0ZVBheWxvYWQiLCJzZW5kZXIiLCJyZWNlaXZlciIsInNhdG9zaGlzIiwidXR4b3MiLCJmZXRjaFVUWE9zIiwiZmVlUmF0ZSIsImZldGNoRmVlUmF0ZSIsInBzYnQiLCJQc2J0IiwidG90YWxJbnB1dCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsImZldGNoVHJhbnNhY3Rpb24iLCJ0eGlkIiwiaW5wdXRPcHRpb25zIiwib3V0cyIsInZvdXQiLCJzY3JpcHQiLCJpbmNsdWRlcyIsImhhc2giLCJpbmRleCIsIndpdG5lc3NVdHhvIiwibm9uV2l0bmVzc1V0eG8iLCJ0b0hleCIsImFkZElucHV0IiwiYWRkT3V0cHV0IiwiTnVtYmVyIiwiZXN0aW1hdGVkU2l6ZSIsImxlbmd0aCIsImZlZSIsIk1hdGgiLCJjZWlsIiwiY2hhbmdlIiwicmVxdWVzdFNpZ25hdHVyZVRvTVBDIiwid2FsbGV0IiwiY29udHJhY3RJZCIsInBhdGgiLCJidGNQYXlsb2FkIiwic2lnbiIsInR4IiwicGF5bG9hZCIsIkFycmF5IiwiZ2V0Qnl0ZXMiLCJyZXZlcnNlIiwiYmlnX3IiLCJiaWdfcyIsImNhbGxNZXRob2QiLCJtZXRob2QiLCJhcmdzIiwia2V5X3ZlcnNpb24iLCJnYXMiLCJyZWNvbnN0cnVjdFNpZ25hdHVyZSIsIl8iLCJzaWduSW5wdXRBc3luYyIsImZpbmFsaXplQWxsSW5wdXRzIiwiZXh0cmFjdFRyYW5zYWN0aW9uIiwiciIsInNsaWNlIiwicGFkU3RhcnQiLCJzIiwicmF3U2lnbmF0dXJlIiwiRXJyb3IiLCJyZWxheVRyYW5zYWN0aW9uIiwic2lnbmVkVHJhbnNhY3Rpb24iLCJ1c2VQcm94eSIsInByb3h5IiwicG9zdCIsInRvQlRDIiwic2F0b3NoaSIsInRvU2F0b3NoaSIsImJ0YyIsImNvbmZpcm1hdGlvblRhcmdldCIsInRyYW5zYWN0aW9uSWQiLCJUcmFuc2FjdGlvbiIsInZlcnNpb24iLCJsb2NrdGltZSIsInZpbiIsImZvckVhY2giLCJ0eEhhc2giLCJzZXF1ZW5jZSIsInNjcmlwdFNpZyIsInNjcmlwdHNpZyIsInVuZGVmaW5lZCIsInNjcmlwdFB1YktleSIsInNjcmlwdHB1YmtleSIsIndpdG5lc3MiLCJ3Iiwic2V0V2l0bmVzcyIsImNvbnN0cnVjdG9yIiwibmV0d29ya3MiLCJ0ZXN0bmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/bitcoint.ts\n"));

/***/ })

});