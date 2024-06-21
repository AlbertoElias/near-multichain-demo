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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bitcoin: function() { return /* binding */ Bitcoin; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/utils/data.js\");\n/* harmony import */ var bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bitcoinjs-lib */ \"(app-pages-browser)/./node_modules/bitcoinjs-lib/src/index.js\");\n/* harmony import */ var _lib_kdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/kdf */ \"(app-pages-browser)/./src/lib/kdf.ts\");\n/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ \"(app-pages-browser)/./node_modules/next/dist/compiled/buffer/index.js\")[\"Buffer\"];\n\n\n\n\nclass Bitcoin {\n    async deriveAddress(accountId, derivation_path) {\n        const publicKey = await (0,_lib_kdf__WEBPACK_IMPORTED_MODULE_1__.deriveChildPublicKey)((0,_lib_kdf__WEBPACK_IMPORTED_MODULE_1__.najPublicKeyStrToUncompressedHexPoint)(), accountId, derivation_path);\n        const address = await (0,_lib_kdf__WEBPACK_IMPORTED_MODULE_1__.uncompressedHexPointToBtcAddress)(publicKey, this.network);\n        return {\n            publicKey: Buffer.from(publicKey, \"hex\"),\n            address\n        };\n    }\n    async getBalance(address) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/address/\").concat(address, \"/utxo\"));\n        const balance = response.data.reduce((acc, utxo)=>acc + utxo.value, 0);\n        return balance;\n    }\n    trimAddress(address) {\n        return \"\".concat(address.slice(0, 6), \"...\").concat(address.slice(-4));\n    }\n    async createPayload(sender, receiver, satoshis) {\n        const utxos = await this.fetchUTXOs(sender);\n        const feeRate = await this.fetchFeeRate();\n        const psbt = new bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.Psbt({\n            network: this.network\n        });\n        let totalInput = 0;\n        await Promise.all(utxos.map(async (utxo)=>{\n            totalInput += utxo.value;\n            const transaction = await this.fetchTransaction(utxo.txid);\n            const inputOptions = transaction.outs[utxo.vout].script.includes(\"0014\") ? {\n                hash: utxo.txid,\n                index: utxo.vout,\n                witnessUtxo: {\n                    script: transaction.outs[utxo.vout].script,\n                    value: utxo.value\n                }\n            } : {\n                hash: utxo.txid,\n                index: utxo.vout,\n                nonWitnessUtxo: Buffer.from(transaction.toHex(), \"hex\")\n            };\n            psbt.addInput(inputOptions);\n        }));\n        psbt.addOutput({\n            address: receiver,\n            value: Number(satoshis)\n        });\n        const estimatedSize = utxos.length * 148 + 2 * 34 + 10;\n        const fee = Math.ceil(estimatedSize * (feeRate + 3));\n        const change = totalInput - Number(satoshis) - fee;\n        if (change > 0) {\n            psbt.addOutput({\n                address: sender,\n                value: change\n            });\n        }\n        return {\n            psbt,\n            utxos\n        };\n    }\n    async requestSignatureToMPC(wallet, contractId, path, btcPayload, publicKey) {\n        const { psbt, utxos } = btcPayload;\n        // Bitcoin needs to sign multiple utxos, so we need to pass a signer function\n        const sign = async (tx)=>{\n            const payload = Array.from(ethers__WEBPACK_IMPORTED_MODULE_3__.getBytes(tx)).reverse();\n            const [big_r, big_s] = await wallet.callMethod({\n                contractId,\n                method: \"sign\",\n                args: {\n                    payload,\n                    path,\n                    key_version: 0\n                },\n                gas: \"250000000000000\"\n            });\n            return this.reconstructSignature(big_r, big_s);\n        };\n        await Promise.all(utxos.map(async (_, index)=>{\n            await psbt.signInputAsync(index, {\n                publicKey,\n                sign\n            });\n        }));\n        psbt.finalizeAllInputs();\n        return psbt.extractTransaction().toHex();\n    }\n    reconstructSignature(big_r, big_s) {\n        const r = big_r.slice(2).padStart(64, \"0\");\n        const s = big_s.padStart(64, \"0\");\n        const rawSignature = Buffer.from(r + s, \"hex\");\n        if (rawSignature.length !== 64) {\n            throw new Error(\"Invalid signature length.\");\n        }\n        return rawSignature;\n    }\n    // This code can be used to actually relay the transaction to the Ethereum network\n    async relayTransaction(signedTransaction) {\n        let useProxy = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;\n        const proxy = useProxy ? \"https://corsproxy.io/?\" : \"\";\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(proxy).concat(this.chain_rpc, \"/tx\"), signedTransaction);\n        return response.data;\n    }\n    /**\n   * Converts a value from satoshis to bitcoins.\n   *\n   * @param {number} satoshi - The amount in satoshis to convert.\n   * @returns {number} The equivalent amount in bitcoins.\n   */ static toBTC(satoshi) {\n        return satoshi / 100000000;\n    }\n    /**\n   * Converts a value from bitcoins to satoshis.\n   *\n   * @param {number} btc - The amount in bitcoins to convert.\n   * @returns {number} The equivalent amount in satoshis.\n   */ static toSatoshi(btc) {\n        return Number(btc * 100000000);\n    }\n    /**\n   * Fetches the current fee rate from the Bitcoin network.\n   * This method queries the RPC endpoint for fee estimates and returns the fee rate\n   * expected for a transaction to be confirmed within a certain number of blocks.\n   * The confirmation target is set to 6 blocks by default, which is commonly used\n   * for a balance between confirmation time and cost.\n   *\n   * @returns {Promise<number>} A promise that resolves to the fee rate in satoshis per byte.\n   * @throws {Error} Throws an error if the fee rate data for the specified confirmation target is missing.\n   */ async fetchFeeRate() {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/fee-estimates\"));\n        const confirmationTarget = 6;\n        return response.data[confirmationTarget];\n    }\n    /**\n   * Fetches the Unspent Transaction Outputs (UTXOs) for a given Bitcoin address.\n   *\n   * @param {string} address - The Bitcoin address for which to fetch the UTXOs.\n   * @returns {Promise<Array<{ txid: string; vout: number; value: number }>>} A promise that resolves to an array of UTXOs.\n   * Each UTXO is represented as an object containing the transaction ID (`txid`), the output index within that transaction (`vout`),\n   * and the value of the output in satoshis (`value`).\n   */ async fetchUTXOs(address) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/address/\").concat(address, \"/utxo\"));\n        const utxos = response.data.map((utxo)=>({\n                txid: utxo.txid,\n                vout: utxo.vout,\n                value: utxo.value,\n                script: utxo.script\n            }));\n        return utxos;\n    }\n    /**\n   * Fetches a Bitcoin transaction by its ID and constructs a transaction object.\n   * This function retrieves the transaction details from the blockchain using the RPC endpoint,\n   * then parses the input and output data to construct a `bitcoin.Transaction` object.\n   *\n   * @param {string} transactionId - The ID of the transaction to fetch.\n   * @returns {Promise<bitcoin.Transaction>} A promise that resolves to a `bitcoin.Transaction` object representing the fetched transaction.\n   */ async fetchTransaction(transactionId) {\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(this.chain_rpc, \"/tx/\").concat(transactionId));\n        const tx = new bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.Transaction();\n        tx.version = data.version;\n        tx.locktime = data.locktime;\n        data.vin.forEach((vin)=>{\n            const txHash = Buffer.from(vin.txid, \"hex\").reverse();\n            const vout = vin.vout;\n            const sequence = vin.sequence;\n            const scriptSig = vin.scriptsig ? Buffer.from(vin.scriptsig, \"hex\") : undefined;\n            tx.addInput(txHash, vout, sequence, scriptSig);\n        });\n        data.vout.forEach((vout)=>{\n            const value = vout.value;\n            const scriptPubKey = Buffer.from(vout.scriptpubkey, \"hex\");\n            tx.addOutput(scriptPubKey, value);\n        });\n        data.vin.forEach((vin, index)=>{\n            if (vin.witness && vin.witness.length > 0) {\n                const witness = vin.witness.map((w)=>Buffer.from(w, \"hex\"));\n                tx.setWitness(index, witness);\n            }\n        });\n        return tx;\n    }\n    /**\n   * Initializes a new instance of the `Bitcoin` class.\n   *\n   * @param {string} chain_rpc - The URL of the Bitcoin Core RPC endpoint.\n   * @param {string} network - The network to use. Either \"mainnet\" or \"testnet\".\n   */ constructor(chain_rpc, network){\n        this.chain_rpc = chain_rpc;\n        this.network = network === \"testnet\" ? bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.networks.testnet : bitcoinjs_lib__WEBPACK_IMPORTED_MODULE_0__.networks.bitcoin;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDRjtRQUVBLE9BQU83QztJQUNUO0lBaE9BOzs7OztHQUtDLEdBQ0RnRCxZQUFZbkcsU0FBaUIsRUFBRU4sT0FBZSxDQUFFO1FBQzlDLElBQUksQ0FBQ00sU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNOLE9BQU8sR0FBR0EsWUFBWSxZQUFZVixtREFBZ0IsQ0FBQ3FILE9BQU8sR0FBR3JILG1EQUFnQixDQUFDQSxPQUFPO0lBQzVGO0FBd05GIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvYml0Y29pbnQudHM/ZWI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICogYXMgZXRoZXJzIGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgKiBhcyBiaXRjb2luIGZyb20gXCJiaXRjb2luanMtbGliXCI7XG5pbXBvcnQgeyBkZXJpdmVDaGlsZFB1YmxpY0tleSwgbmFqUHVibGljS2V5U3RyVG9VbmNvbXByZXNzZWRIZXhQb2ludCwgdW5jb21wcmVzc2VkSGV4UG9pbnRUb0J0Y0FkZHJlc3MgfSBmcm9tICdAL2xpYi9rZGYnO1xuXG5leHBvcnQgY2xhc3MgQml0Y29pbiB7XG4gIGNoYWluX3JwYzogc3RyaW5nO1xuICBuZXR3b3JrOiBiaXRjb2luLk5ldHdvcms7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgYEJpdGNvaW5gIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhaW5fcnBjIC0gVGhlIFVSTCBvZiB0aGUgQml0Y29pbiBDb3JlIFJQQyBlbmRwb2ludC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ldHdvcmsgLSBUaGUgbmV0d29yayB0byB1c2UuIEVpdGhlciBcIm1haW5uZXRcIiBvciBcInRlc3RuZXRcIi5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGNoYWluX3JwYzogc3RyaW5nLCBuZXR3b3JrOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNoYWluX3JwYyA9IGNoYWluX3JwYztcbiAgICB0aGlzLm5ldHdvcmsgPSBuZXR3b3JrID09PSAndGVzdG5ldCcgPyBiaXRjb2luLm5ldHdvcmtzLnRlc3RuZXQgOiBiaXRjb2luLm5ldHdvcmtzLmJpdGNvaW47XG4gIH1cblxuICBhc3luYyBkZXJpdmVBZGRyZXNzKGFjY291bnRJZDogc3RyaW5nLCBkZXJpdmF0aW9uX3BhdGg6IHN0cmluZykge1xuICAgIGNvbnN0IHB1YmxpY0tleSA9IGF3YWl0IGRlcml2ZUNoaWxkUHVibGljS2V5KG5halB1YmxpY0tleVN0clRvVW5jb21wcmVzc2VkSGV4UG9pbnQoKSwgYWNjb3VudElkLCBkZXJpdmF0aW9uX3BhdGgpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCB1bmNvbXByZXNzZWRIZXhQb2ludFRvQnRjQWRkcmVzcyhwdWJsaWNLZXksIHRoaXMubmV0d29yayk7XG4gICAgcmV0dXJuIHsgcHVibGljS2V5OiBCdWZmZXIuZnJvbShwdWJsaWNLZXksICdoZXgnKSwgYWRkcmVzcyB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0QmFsYW5jZShhZGRyZXNzOiBhbnkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgIGAke3RoaXMuY2hhaW5fcnBjfS9hZGRyZXNzLyR7YWRkcmVzc30vdXR4b2BcbiAgICApO1xuICAgIGNvbnN0IGJhbGFuY2UgPSByZXNwb25zZS5kYXRhLnJlZHVjZSgoYWNjOiBhbnksIHV0eG86IHsgdmFsdWU6IGFueTsgfSkgPT4gYWNjICsgdXR4by52YWx1ZSwgMCk7XG4gICAgcmV0dXJuIGJhbGFuY2U7XG4gIH1cblxuICB0cmltQWRkcmVzcyhhZGRyZXNzOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7YWRkcmVzcy5zbGljZSgwLCA2KX0uLi4ke2FkZHJlc3Muc2xpY2UoLTQpfWA7XG4gIH1cblxuICBhc3luYyBjcmVhdGVQYXlsb2FkKHNlbmRlcjogYW55LCByZWNlaXZlcjogYW55LCBzYXRvc2hpczogYW55KSB7XG4gICAgY29uc3QgdXR4b3MgPSBhd2FpdCB0aGlzLmZldGNoVVRYT3Moc2VuZGVyKTtcbiAgICBjb25zdCBmZWVSYXRlID0gYXdhaXQgdGhpcy5mZXRjaEZlZVJhdGUoKTtcblxuICAgIGNvbnN0IHBzYnQgPSBuZXcgYml0Y29pbi5Qc2J0KHsgbmV0d29yazogdGhpcy5uZXR3b3JrIH0pO1xuXG4gICAgbGV0IHRvdGFsSW5wdXQgPSAwO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgdXR4b3MubWFwKFxuICAgICAgICBhc3luYyAodXR4bzogeyB2YWx1ZTogbnVtYmVyOyB0eGlkOiBzdHJpbmc7IHZvdXQ6IHN0cmluZyB8IG51bWJlcjsgfSkgPT4ge1xuICAgICAgICAgIHRvdGFsSW5wdXQgKz0gdXR4by52YWx1ZTtcblxuICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5mZXRjaFRyYW5zYWN0aW9uKHV0eG8udHhpZCk7XG4gICAgICAgICAgY29uc3QgaW5wdXRPcHRpb25zID0gdHJhbnNhY3Rpb24ub3V0c1t1dHhvLnZvdXQgYXMgbnVtYmVyXS5zY3JpcHQuaW5jbHVkZXMoXCIwMDE0XCIpID9cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGFzaDogdXR4by50eGlkLFxuICAgICAgICAgICAgICBpbmRleDogdXR4by52b3V0IGFzIG51bWJlcixcbiAgICAgICAgICAgICAgd2l0bmVzc1V0eG86IHtcbiAgICAgICAgICAgICAgICBzY3JpcHQ6IHRyYW5zYWN0aW9uLm91dHNbdXR4by52b3V0IGFzIG51bWJlcl0uc2NyaXB0LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB1dHhvLnZhbHVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSA6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhhc2g6IHV0eG8udHhpZCxcbiAgICAgICAgICAgICAgaW5kZXg6IHV0eG8udm91dCBhcyBudW1iZXIsXG4gICAgICAgICAgICAgIG5vbldpdG5lc3NVdHhvOiBCdWZmZXIuZnJvbSh0cmFuc2FjdGlvbi50b0hleCgpLCBcImhleFwiKSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIHBzYnQuYWRkSW5wdXQoaW5wdXRPcHRpb25zKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgcHNidC5hZGRPdXRwdXQoe1xuICAgICAgYWRkcmVzczogcmVjZWl2ZXIsXG4gICAgICB2YWx1ZTogTnVtYmVyKHNhdG9zaGlzKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGVzdGltYXRlZFNpemUgPSB1dHhvcy5sZW5ndGggKiAxNDggKyAyICogMzQgKyAxMDtcbiAgICBjb25zdCBmZWUgPSBNYXRoLmNlaWwoZXN0aW1hdGVkU2l6ZSAqIChmZWVSYXRlICsgMykpO1xuXG4gICAgY29uc3QgY2hhbmdlID0gdG90YWxJbnB1dCAtIE51bWJlcihzYXRvc2hpcykgLSBmZWU7XG4gICAgaWYgKGNoYW5nZSA+IDApIHtcbiAgICAgIHBzYnQuYWRkT3V0cHV0KHtcbiAgICAgICAgYWRkcmVzczogc2VuZGVyLFxuICAgICAgICB2YWx1ZTogY2hhbmdlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHNidCwgdXR4b3MgfTtcbiAgfVxuXG4gIGFzeW5jIHJlcXVlc3RTaWduYXR1cmVUb01QQyh3YWxsZXQ6IHsgY2FsbE1ldGhvZDogKGFyZzA6IHsgY29udHJhY3RJZDogYW55OyBtZXRob2Q6IHN0cmluZzsgYXJnczogeyBwYXlsb2FkOiBudW1iZXJbXTsgcGF0aDogYW55OyBrZXlfdmVyc2lvbjogbnVtYmVyOyB9OyBnYXM6IHN0cmluZzsgfSkgPT4gUHJvbWlzZUxpa2U8W2FueSwgYW55XT4gfCBbYW55LCBhbnldOyB9LCBjb250cmFjdElkOiBhbnksIHBhdGg6IGFueSwgYnRjUGF5bG9hZDogeyBwc2J0OiBhbnk7IHV0eG9zOiBhbnk7IH0sIHB1YmxpY0tleTogYW55KSB7XG4gICAgY29uc3QgeyBwc2J0LCB1dHhvcyB9ID0gYnRjUGF5bG9hZDtcblxuICAgIC8vIEJpdGNvaW4gbmVlZHMgdG8gc2lnbiBtdWx0aXBsZSB1dHhvcywgc28gd2UgbmVlZCB0byBwYXNzIGEgc2lnbmVyIGZ1bmN0aW9uXG4gICAgY29uc3Qgc2lnbiA9IGFzeW5jICh0eDogZXRoZXJzLmV0aGVycy5CeXRlc0xpa2UpID0+IHtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBBcnJheS5mcm9tKGV0aGVycy5nZXRCeXRlcyh0eCkpLnJldmVyc2UoKTtcbiAgICAgIGNvbnN0IFtiaWdfciwgYmlnX3NdID0gYXdhaXQgd2FsbGV0LmNhbGxNZXRob2QoeyBjb250cmFjdElkLCBtZXRob2Q6ICdzaWduJywgYXJnczogeyBwYXlsb2FkLCBwYXRoLCBrZXlfdmVyc2lvbjogMCB9LCBnYXM6ICcyNTAwMDAwMDAwMDAwMDAnIH0pO1xuICAgICAgcmV0dXJuIHRoaXMucmVjb25zdHJ1Y3RTaWduYXR1cmUoYmlnX3IsIGJpZ19zKTtcbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIHV0eG9zLm1hcChhc3luYyAoXzogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgIGF3YWl0IHBzYnQuc2lnbklucHV0QXN5bmMoaW5kZXgsIHsgcHVibGljS2V5LCBzaWduIH0pO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgcHNidC5maW5hbGl6ZUFsbElucHV0cygpO1xuXG4gICAgcmV0dXJuIHBzYnQuZXh0cmFjdFRyYW5zYWN0aW9uKCkudG9IZXgoKVxuICB9XG5cbiAgcmVjb25zdHJ1Y3RTaWduYXR1cmUoYmlnX3I6IHN0cmluZywgYmlnX3M6IHN0cmluZykge1xuICAgIGNvbnN0IHIgPSBiaWdfci5zbGljZSgyKS5wYWRTdGFydCg2NCwgXCIwXCIpO1xuICAgIGNvbnN0IHMgPSBiaWdfcy5wYWRTdGFydCg2NCwgXCIwXCIpO1xuXG4gICAgY29uc3QgcmF3U2lnbmF0dXJlID0gQnVmZmVyLmZyb20ociArIHMsIFwiaGV4XCIpO1xuXG4gICAgaWYgKHJhd1NpZ25hdHVyZS5sZW5ndGggIT09IDY0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNpZ25hdHVyZSBsZW5ndGguXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByYXdTaWduYXR1cmU7XG4gIH1cblxuICAvLyBUaGlzIGNvZGUgY2FuIGJlIHVzZWQgdG8gYWN0dWFsbHkgcmVsYXkgdGhlIHRyYW5zYWN0aW9uIHRvIHRoZSBFdGhlcmV1bSBuZXR3b3JrXG4gIGFzeW5jIHJlbGF5VHJhbnNhY3Rpb24oc2lnbmVkVHJhbnNhY3Rpb246IGFueSwgdXNlUHJveHkgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJveHkgPSB1c2VQcm94eSA/IFwiaHR0cHM6Ly9jb3JzcHJveHkuaW8vP1wiIDogXCJcIjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgIGAke3Byb3h5fSR7dGhpcy5jaGFpbl9ycGN9L3R4YCxcbiAgICAgIHNpZ25lZFRyYW5zYWN0aW9uXG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgdmFsdWUgZnJvbSBzYXRvc2hpcyB0byBiaXRjb2lucy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNhdG9zaGkgLSBUaGUgYW1vdW50IGluIHNhdG9zaGlzIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBlcXVpdmFsZW50IGFtb3VudCBpbiBiaXRjb2lucy5cbiAgICovXG4gIHN0YXRpYyB0b0JUQyhzYXRvc2hpOiBudW1iZXIpIHtcbiAgICByZXR1cm4gc2F0b3NoaSAvIDEwMDAwMDAwMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHZhbHVlIGZyb20gYml0Y29pbnMgdG8gc2F0b3NoaXMuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBidGMgLSBUaGUgYW1vdW50IGluIGJpdGNvaW5zIHRvIGNvbnZlcnQuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBlcXVpdmFsZW50IGFtb3VudCBpbiBzYXRvc2hpcy5cbiAgICovXG4gIHN0YXRpYyB0b1NhdG9zaGkoYnRjOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTnVtYmVyKGJ0YyAqIDEwMDAwMDAwMCk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgY3VycmVudCBmZWUgcmF0ZSBmcm9tIHRoZSBCaXRjb2luIG5ldHdvcmsuXG4gICAqIFRoaXMgbWV0aG9kIHF1ZXJpZXMgdGhlIFJQQyBlbmRwb2ludCBmb3IgZmVlIGVzdGltYXRlcyBhbmQgcmV0dXJucyB0aGUgZmVlIHJhdGVcbiAgICogZXhwZWN0ZWQgZm9yIGEgdHJhbnNhY3Rpb24gdG8gYmUgY29uZmlybWVkIHdpdGhpbiBhIGNlcnRhaW4gbnVtYmVyIG9mIGJsb2Nrcy5cbiAgICogVGhlIGNvbmZpcm1hdGlvbiB0YXJnZXQgaXMgc2V0IHRvIDYgYmxvY2tzIGJ5IGRlZmF1bHQsIHdoaWNoIGlzIGNvbW1vbmx5IHVzZWRcbiAgICogZm9yIGEgYmFsYW5jZSBiZXR3ZWVuIGNvbmZpcm1hdGlvbiB0aW1lIGFuZCBjb3N0LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgZmVlIHJhdGUgaW4gc2F0b3NoaXMgcGVyIGJ5dGUuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIGZlZSByYXRlIGRhdGEgZm9yIHRoZSBzcGVjaWZpZWQgY29uZmlybWF0aW9uIHRhcmdldCBpcyBtaXNzaW5nLlxuICAgKi9cbiAgYXN5bmMgZmV0Y2hGZWVSYXRlKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuY2hhaW5fcnBjfS9mZWUtZXN0aW1hdGVzYCk7XG4gICAgY29uc3QgY29uZmlybWF0aW9uVGFyZ2V0ID0gNjtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVtjb25maXJtYXRpb25UYXJnZXRdO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIFVuc3BlbnQgVHJhbnNhY3Rpb24gT3V0cHV0cyAoVVRYT3MpIGZvciBhIGdpdmVuIEJpdGNvaW4gYWRkcmVzcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgQml0Y29pbiBhZGRyZXNzIGZvciB3aGljaCB0byBmZXRjaCB0aGUgVVRYT3MuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5PHsgdHhpZDogc3RyaW5nOyB2b3V0OiBudW1iZXI7IHZhbHVlOiBudW1iZXIgfT4+fSBBIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBhcnJheSBvZiBVVFhPcy5cbiAgICogRWFjaCBVVFhPIGlzIHJlcHJlc2VudGVkIGFzIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0cmFuc2FjdGlvbiBJRCAoYHR4aWRgKSwgdGhlIG91dHB1dCBpbmRleCB3aXRoaW4gdGhhdCB0cmFuc2FjdGlvbiAoYHZvdXRgKSxcbiAgICogYW5kIHRoZSB2YWx1ZSBvZiB0aGUgb3V0cHV0IGluIHNhdG9zaGlzIChgdmFsdWVgKS5cbiAgICovXG4gIGFzeW5jIGZldGNoVVRYT3MoYWRkcmVzczogYW55KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgJHt0aGlzLmNoYWluX3JwY30vYWRkcmVzcy8ke2FkZHJlc3N9L3V0eG9gXG4gICAgKTtcblxuICAgIGNvbnN0IHV0eG9zID0gcmVzcG9uc2UuZGF0YS5tYXAoKHV0eG86IHsgdHhpZDogYW55OyB2b3V0OiBhbnk7IHZhbHVlOiBhbnk7IHNjcmlwdDogYW55OyB9KSA9PiAoe1xuICAgICAgdHhpZDogdXR4by50eGlkLFxuICAgICAgdm91dDogdXR4by52b3V0LFxuICAgICAgdmFsdWU6IHV0eG8udmFsdWUsXG4gICAgICBzY3JpcHQ6IHV0eG8uc2NyaXB0LFxuICAgIH0pKTtcbiAgICByZXR1cm4gdXR4b3M7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIEJpdGNvaW4gdHJhbnNhY3Rpb24gYnkgaXRzIElEIGFuZCBjb25zdHJ1Y3RzIGEgdHJhbnNhY3Rpb24gb2JqZWN0LlxuICAgKiBUaGlzIGZ1bmN0aW9uIHJldHJpZXZlcyB0aGUgdHJhbnNhY3Rpb24gZGV0YWlscyBmcm9tIHRoZSBibG9ja2NoYWluIHVzaW5nIHRoZSBSUEMgZW5kcG9pbnQsXG4gICAqIHRoZW4gcGFyc2VzIHRoZSBpbnB1dCBhbmQgb3V0cHV0IGRhdGEgdG8gY29uc3RydWN0IGEgYGJpdGNvaW4uVHJhbnNhY3Rpb25gIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRyYW5zYWN0aW9uSWQgLSBUaGUgSUQgb2YgdGhlIHRyYW5zYWN0aW9uIHRvIGZldGNoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxiaXRjb2luLlRyYW5zYWN0aW9uPn0gQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBgYml0Y29pbi5UcmFuc2FjdGlvbmAgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgZmV0Y2hlZCB0cmFuc2FjdGlvbi5cbiAgICovXG4gIGFzeW5jIGZldGNoVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25JZDogYW55KSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgJHt0aGlzLmNoYWluX3JwY30vdHgvJHt0cmFuc2FjdGlvbklkfWBcbiAgICApO1xuICAgIGNvbnN0IHR4ID0gbmV3IGJpdGNvaW4uVHJhbnNhY3Rpb24oKTtcblxuICAgIHR4LnZlcnNpb24gPSBkYXRhLnZlcnNpb247XG4gICAgdHgubG9ja3RpbWUgPSBkYXRhLmxvY2t0aW1lO1xuXG4gICAgZGF0YS52aW4uZm9yRWFjaCgodmluOiB7IHR4aWQ6IFdpdGhJbXBsaWNpdENvZXJjaW9uPHN0cmluZz4gfCB7IFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQ6IFwic3RyaW5nXCIpOiBzdHJpbmc7IH07IHZvdXQ6IGFueTsgc2VxdWVuY2U6IGFueTsgc2NyaXB0c2lnOiBXaXRoSW1wbGljaXRDb2VyY2lvbjxzdHJpbmc+IHwgeyBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50OiBcInN0cmluZ1wiKTogc3RyaW5nOyB9OyB9KSA9PiB7XG4gICAgICBjb25zdCB0eEhhc2ggPSBCdWZmZXIuZnJvbSh2aW4udHhpZCwgXCJoZXhcIikucmV2ZXJzZSgpO1xuICAgICAgY29uc3Qgdm91dCA9IHZpbi52b3V0O1xuICAgICAgY29uc3Qgc2VxdWVuY2UgPSB2aW4uc2VxdWVuY2U7XG4gICAgICBjb25zdCBzY3JpcHRTaWcgPSB2aW4uc2NyaXB0c2lnXG4gICAgICAgID8gQnVmZmVyLmZyb20odmluLnNjcmlwdHNpZywgXCJoZXhcIilcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICB0eC5hZGRJbnB1dCh0eEhhc2gsIHZvdXQsIHNlcXVlbmNlLCBzY3JpcHRTaWcpO1xuICAgIH0pO1xuXG4gICAgZGF0YS52b3V0LmZvckVhY2goKHZvdXQ6IHsgdmFsdWU6IGFueTsgc2NyaXB0cHVia2V5OiBXaXRoSW1wbGljaXRDb2VyY2lvbjxzdHJpbmc+IHwgeyBbU3ltYm9sLnRvUHJpbWl0aXZlXShoaW50OiBcInN0cmluZ1wiKTogc3RyaW5nOyB9OyB9KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHZvdXQudmFsdWU7XG4gICAgICBjb25zdCBzY3JpcHRQdWJLZXkgPSBCdWZmZXIuZnJvbSh2b3V0LnNjcmlwdHB1YmtleSwgXCJoZXhcIik7XG4gICAgICB0eC5hZGRPdXRwdXQoc2NyaXB0UHViS2V5LCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBkYXRhLnZpbi5mb3JFYWNoKCh2aW46IHsgd2l0bmVzczogYW55W107IH0sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh2aW4ud2l0bmVzcyAmJiB2aW4ud2l0bmVzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHdpdG5lc3MgPSB2aW4ud2l0bmVzcy5tYXAoKHc6IFdpdGhJbXBsaWNpdENvZXJjaW9uPHN0cmluZz4gfCB7IFtTeW1ib2wudG9QcmltaXRpdmVdKGhpbnQ6IFwic3RyaW5nXCIpOiBzdHJpbmc7IH0pID0+IEJ1ZmZlci5mcm9tKHcsIFwiaGV4XCIpKTtcbiAgICAgICAgdHguc2V0V2l0bmVzcyhpbmRleCwgd2l0bmVzcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHg7XG4gIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJldGhlcnMiLCJiaXRjb2luIiwiZGVyaXZlQ2hpbGRQdWJsaWNLZXkiLCJuYWpQdWJsaWNLZXlTdHJUb1VuY29tcHJlc3NlZEhleFBvaW50IiwidW5jb21wcmVzc2VkSGV4UG9pbnRUb0J0Y0FkZHJlc3MiLCJCaXRjb2luIiwiZGVyaXZlQWRkcmVzcyIsImFjY291bnRJZCIsImRlcml2YXRpb25fcGF0aCIsInB1YmxpY0tleSIsImFkZHJlc3MiLCJuZXR3b3JrIiwiQnVmZmVyIiwiZnJvbSIsImdldEJhbGFuY2UiLCJyZXNwb25zZSIsImdldCIsImNoYWluX3JwYyIsImJhbGFuY2UiLCJkYXRhIiwicmVkdWNlIiwiYWNjIiwidXR4byIsInZhbHVlIiwidHJpbUFkZHJlc3MiLCJzbGljZSIsImNyZWF0ZVBheWxvYWQiLCJzZW5kZXIiLCJyZWNlaXZlciIsInNhdG9zaGlzIiwidXR4b3MiLCJmZXRjaFVUWE9zIiwiZmVlUmF0ZSIsImZldGNoRmVlUmF0ZSIsInBzYnQiLCJQc2J0IiwidG90YWxJbnB1dCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJ0cmFuc2FjdGlvbiIsImZldGNoVHJhbnNhY3Rpb24iLCJ0eGlkIiwiaW5wdXRPcHRpb25zIiwib3V0cyIsInZvdXQiLCJzY3JpcHQiLCJpbmNsdWRlcyIsImhhc2giLCJpbmRleCIsIndpdG5lc3NVdHhvIiwibm9uV2l0bmVzc1V0eG8iLCJ0b0hleCIsImFkZElucHV0IiwiYWRkT3V0cHV0IiwiTnVtYmVyIiwiZXN0aW1hdGVkU2l6ZSIsImxlbmd0aCIsImZlZSIsIk1hdGgiLCJjZWlsIiwiY2hhbmdlIiwicmVxdWVzdFNpZ25hdHVyZVRvTVBDIiwid2FsbGV0IiwiY29udHJhY3RJZCIsInBhdGgiLCJidGNQYXlsb2FkIiwic2lnbiIsInR4IiwicGF5bG9hZCIsIkFycmF5IiwiZ2V0Qnl0ZXMiLCJyZXZlcnNlIiwiYmlnX3IiLCJiaWdfcyIsImNhbGxNZXRob2QiLCJtZXRob2QiLCJhcmdzIiwia2V5X3ZlcnNpb24iLCJnYXMiLCJyZWNvbnN0cnVjdFNpZ25hdHVyZSIsIl8iLCJzaWduSW5wdXRBc3luYyIsImZpbmFsaXplQWxsSW5wdXRzIiwiZXh0cmFjdFRyYW5zYWN0aW9uIiwiciIsInBhZFN0YXJ0IiwicyIsInJhd1NpZ25hdHVyZSIsIkVycm9yIiwicmVsYXlUcmFuc2FjdGlvbiIsInNpZ25lZFRyYW5zYWN0aW9uIiwidXNlUHJveHkiLCJwcm94eSIsInBvc3QiLCJ0b0JUQyIsInNhdG9zaGkiLCJ0b1NhdG9zaGkiLCJidGMiLCJjb25maXJtYXRpb25UYXJnZXQiLCJ0cmFuc2FjdGlvbklkIiwiVHJhbnNhY3Rpb24iLCJ2ZXJzaW9uIiwibG9ja3RpbWUiLCJ2aW4iLCJmb3JFYWNoIiwidHhIYXNoIiwic2VxdWVuY2UiLCJzY3JpcHRTaWciLCJzY3JpcHRzaWciLCJ1bmRlZmluZWQiLCJzY3JpcHRQdWJLZXkiLCJzY3JpcHRwdWJrZXkiLCJ3aXRuZXNzIiwidyIsInNldFdpdG5lc3MiLCJjb25zdHJ1Y3RvciIsIm5ldHdvcmtzIiwidGVzdG5ldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/bitcoint.ts\n"));

/***/ })

});