/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/crc-32";
exports.ids = ["vendor-chunks/crc-32"];
exports.modules = {

/***/ "(ssr)/./node_modules/crc-32/crc32.js":
/*!**************************************!*\
  !*** ./node_modules/crc-32/crc32.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */\n/* vim: set ts=2: */\n/*exported CRC32 */\nvar CRC32;\n(function (factory) {\n\t/*jshint ignore:start */\n\t/*eslint-disable */\n\tif(typeof DO_NOT_EXPORT_CRC === 'undefined') {\n\t\tif(true) {\n\t\t\tfactory(exports);\n\t\t} else {}\n\t} else {\n\t\tfactory(CRC32 = {});\n\t}\n\t/*eslint-enable */\n\t/*jshint ignore:end */\n}(function(CRC32) {\nCRC32.version = '1.2.2';\n/*global Int32Array */\nfunction signed_crc_table() {\n\tvar c = 0, table = new Array(256);\n\n\tfor(var n =0; n != 256; ++n){\n\t\tc = n;\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\tc = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));\n\t\ttable[n] = c;\n\t}\n\n\treturn typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;\n}\n\nvar T0 = signed_crc_table();\nfunction slice_by_16_tables(T) {\n\tvar c = 0, v = 0, n = 0, table = typeof Int32Array !== 'undefined' ? new Int32Array(4096) : new Array(4096) ;\n\n\tfor(n = 0; n != 256; ++n) table[n] = T[n];\n\tfor(n = 0; n != 256; ++n) {\n\t\tv = T[n];\n\t\tfor(c = 256 + n; c < 4096; c += 256) v = table[c] = (v >>> 8) ^ T[v & 0xFF];\n\t}\n\tvar out = [];\n\tfor(n = 1; n != 16; ++n) out[n - 1] = typeof Int32Array !== 'undefined' ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);\n\treturn out;\n}\nvar TT = slice_by_16_tables(T0);\nvar T1 = TT[0],  T2 = TT[1],  T3 = TT[2],  T4 = TT[3],  T5 = TT[4];\nvar T6 = TT[5],  T7 = TT[6],  T8 = TT[7],  T9 = TT[8],  Ta = TT[9];\nvar Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];\nfunction crc32_bstr(bstr, seed) {\n\tvar C = seed ^ -1;\n\tfor(var i = 0, L = bstr.length; i < L;) C = (C>>>8) ^ T0[(C^bstr.charCodeAt(i++))&0xFF];\n\treturn ~C;\n}\n\nfunction crc32_buf(B, seed) {\n\tvar C = seed ^ -1, L = B.length - 15, i = 0;\n\tfor(; i < L;) C =\n\t\tTf[B[i++] ^ (C & 255)] ^\n\t\tTe[B[i++] ^ ((C >> 8) & 255)] ^\n\t\tTd[B[i++] ^ ((C >> 16) & 255)] ^\n\t\tTc[B[i++] ^ (C >>> 24)] ^\n\t\tTb[B[i++]] ^ Ta[B[i++]] ^ T9[B[i++]] ^ T8[B[i++]] ^\n\t\tT7[B[i++]] ^ T6[B[i++]] ^ T5[B[i++]] ^ T4[B[i++]] ^\n\t\tT3[B[i++]] ^ T2[B[i++]] ^ T1[B[i++]] ^ T0[B[i++]];\n\tL += 15;\n\twhile(i < L) C = (C>>>8) ^ T0[(C^B[i++])&0xFF];\n\treturn ~C;\n}\n\nfunction crc32_str(str, seed) {\n\tvar C = seed ^ -1;\n\tfor(var i = 0, L = str.length, c = 0, d = 0; i < L;) {\n\t\tc = str.charCodeAt(i++);\n\t\tif(c < 0x80) {\n\t\t\tC = (C>>>8) ^ T0[(C^c)&0xFF];\n\t\t} else if(c < 0x800) {\n\t\t\tC = (C>>>8) ^ T0[(C ^ (192|((c>>6)&31)))&0xFF];\n\t\t\tC = (C>>>8) ^ T0[(C ^ (128|(c&63)))&0xFF];\n\t\t} else if(c >= 0xD800 && c < 0xE000) {\n\t\t\tc = (c&1023)+64; d = str.charCodeAt(i++)&1023;\n\t\t\tC = (C>>>8) ^ T0[(C ^ (240|((c>>8)&7)))&0xFF];\n\t\t\tC = (C>>>8) ^ T0[(C ^ (128|((c>>2)&63)))&0xFF];\n\t\t\tC = (C>>>8) ^ T0[(C ^ (128|((d>>6)&15)|((c&3)<<4)))&0xFF];\n\t\t\tC = (C>>>8) ^ T0[(C ^ (128|(d&63)))&0xFF];\n\t\t} else {\n\t\t\tC = (C>>>8) ^ T0[(C ^ (224|((c>>12)&15)))&0xFF];\n\t\t\tC = (C>>>8) ^ T0[(C ^ (128|((c>>6)&63)))&0xFF];\n\t\t\tC = (C>>>8) ^ T0[(C ^ (128|(c&63)))&0xFF];\n\t\t}\n\t}\n\treturn ~C;\n}\nCRC32.table = T0;\n// $FlowIgnore\nCRC32.bstr = crc32_bstr;\n// $FlowIgnore\nCRC32.buf = crc32_buf;\n// $FlowIgnore\nCRC32.str = crc32_str;\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY3JjLTMyL2NyYzMyLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQTJCO0FBQ2hDO0FBQ0EsSUFBSSxLQUFLLEVBUU47QUFDSCxHQUFHO0FBQ0gsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLFVBQVU7QUFDdEIsWUFBWSxVQUFVO0FBQ3RCO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxNQUFNO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLE1BQU07QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy9jcmMtMzIvY3JjMzIuanM/ZGU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgY3JjMzIuanMgKEMpIDIwMTQtcHJlc2VudCBTaGVldEpTIC0tIGh0dHA6Ly9zaGVldGpzLmNvbSAqL1xuLyogdmltOiBzZXQgdHM9MjogKi9cbi8qZXhwb3J0ZWQgQ1JDMzIgKi9cbnZhciBDUkMzMjtcbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHQvKmpzaGludCBpZ25vcmU6c3RhcnQgKi9cblx0Lyplc2xpbnQtZGlzYWJsZSAqL1xuXHRpZih0eXBlb2YgRE9fTk9UX0VYUE9SVF9DUkMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYoJ29iamVjdCcgPT09IHR5cGVvZiBleHBvcnRzKSB7XG5cdFx0XHRmYWN0b3J5KGV4cG9ydHMpO1xuXHRcdH0gZWxzZSBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlID0ge307XG5cdFx0XHRcdGZhY3RvcnkobW9kdWxlKTtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmYWN0b3J5KENSQzMyID0ge30pO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KENSQzMyID0ge30pO1xuXHR9XG5cdC8qZXNsaW50LWVuYWJsZSAqL1xuXHQvKmpzaGludCBpZ25vcmU6ZW5kICovXG59KGZ1bmN0aW9uKENSQzMyKSB7XG5DUkMzMi52ZXJzaW9uID0gJzEuMi4yJztcbi8qZ2xvYmFsIEludDMyQXJyYXkgKi9cbmZ1bmN0aW9uIHNpZ25lZF9jcmNfdGFibGUoKSB7XG5cdHZhciBjID0gMCwgdGFibGUgPSBuZXcgQXJyYXkoMjU2KTtcblxuXHRmb3IodmFyIG4gPTA7IG4gIT0gMjU2OyArK24pe1xuXHRcdGMgPSBuO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdGMgPSAoKGMmMSkgPyAoLTMwNjY3NDkxMiBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuXHRcdHRhYmxlW25dID0gYztcblx0fVxuXG5cdHJldHVybiB0eXBlb2YgSW50MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgSW50MzJBcnJheSh0YWJsZSkgOiB0YWJsZTtcbn1cblxudmFyIFQwID0gc2lnbmVkX2NyY190YWJsZSgpO1xuZnVuY3Rpb24gc2xpY2VfYnlfMTZfdGFibGVzKFQpIHtcblx0dmFyIGMgPSAwLCB2ID0gMCwgbiA9IDAsIHRhYmxlID0gdHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnID8gbmV3IEludDMyQXJyYXkoNDA5NikgOiBuZXcgQXJyYXkoNDA5NikgO1xuXG5cdGZvcihuID0gMDsgbiAhPSAyNTY7ICsrbikgdGFibGVbbl0gPSBUW25dO1xuXHRmb3IobiA9IDA7IG4gIT0gMjU2OyArK24pIHtcblx0XHR2ID0gVFtuXTtcblx0XHRmb3IoYyA9IDI1NiArIG47IGMgPCA0MDk2OyBjICs9IDI1NikgdiA9IHRhYmxlW2NdID0gKHYgPj4+IDgpIF4gVFt2ICYgMHhGRl07XG5cdH1cblx0dmFyIG91dCA9IFtdO1xuXHRmb3IobiA9IDE7IG4gIT0gMTY7ICsrbikgb3V0W24gLSAxXSA9IHR5cGVvZiBJbnQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyA/IHRhYmxlLnN1YmFycmF5KG4gKiAyNTYsIG4gKiAyNTYgKyAyNTYpIDogdGFibGUuc2xpY2UobiAqIDI1NiwgbiAqIDI1NiArIDI1Nik7XG5cdHJldHVybiBvdXQ7XG59XG52YXIgVFQgPSBzbGljZV9ieV8xNl90YWJsZXMoVDApO1xudmFyIFQxID0gVFRbMF0sICBUMiA9IFRUWzFdLCAgVDMgPSBUVFsyXSwgIFQ0ID0gVFRbM10sICBUNSA9IFRUWzRdO1xudmFyIFQ2ID0gVFRbNV0sICBUNyA9IFRUWzZdLCAgVDggPSBUVFs3XSwgIFQ5ID0gVFRbOF0sICBUYSA9IFRUWzldO1xudmFyIFRiID0gVFRbMTBdLCBUYyA9IFRUWzExXSwgVGQgPSBUVFsxMl0sIFRlID0gVFRbMTNdLCBUZiA9IFRUWzE0XTtcbmZ1bmN0aW9uIGNyYzMyX2JzdHIoYnN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTCA9IGJzdHIubGVuZ3RoOyBpIDwgTDspIEMgPSAoQz4+PjgpIF4gVDBbKENeYnN0ci5jaGFyQ29kZUF0KGkrKykpJjB4RkZdO1xuXHRyZXR1cm4gfkM7XG59XG5cbmZ1bmN0aW9uIGNyYzMyX2J1ZihCLCBzZWVkKSB7XG5cdHZhciBDID0gc2VlZCBeIC0xLCBMID0gQi5sZW5ndGggLSAxNSwgaSA9IDA7XG5cdGZvcig7IGkgPCBMOykgQyA9XG5cdFx0VGZbQltpKytdIF4gKEMgJiAyNTUpXSBeXG5cdFx0VGVbQltpKytdIF4gKChDID4+IDgpICYgMjU1KV0gXlxuXHRcdFRkW0JbaSsrXSBeICgoQyA+PiAxNikgJiAyNTUpXSBeXG5cdFx0VGNbQltpKytdIF4gKEMgPj4+IDI0KV0gXlxuXHRcdFRiW0JbaSsrXV0gXiBUYVtCW2krK11dIF4gVDlbQltpKytdXSBeIFQ4W0JbaSsrXV0gXlxuXHRcdFQ3W0JbaSsrXV0gXiBUNltCW2krK11dIF4gVDVbQltpKytdXSBeIFQ0W0JbaSsrXV0gXlxuXHRcdFQzW0JbaSsrXV0gXiBUMltCW2krK11dIF4gVDFbQltpKytdXSBeIFQwW0JbaSsrXV07XG5cdEwgKz0gMTU7XG5cdHdoaWxlKGkgPCBMKSBDID0gKEM+Pj44KSBeIFQwWyhDXkJbaSsrXSkmMHhGRl07XG5cdHJldHVybiB+Qztcbn1cblxuZnVuY3Rpb24gY3JjMzJfc3RyKHN0ciwgc2VlZCkge1xuXHR2YXIgQyA9IHNlZWQgXiAtMTtcblx0Zm9yKHZhciBpID0gMCwgTCA9IHN0ci5sZW5ndGgsIGMgPSAwLCBkID0gMDsgaSA8IEw7KSB7XG5cdFx0YyA9IHN0ci5jaGFyQ29kZUF0KGkrKyk7XG5cdFx0aWYoYyA8IDB4ODApIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVDBbKENeYykmMHhGRl07XG5cdFx0fSBlbHNlIGlmKGMgPCAweDgwMCkge1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUMFsoQyBeICgxOTJ8KChjPj42KSYzMSkpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVDBbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH0gZWxzZSBpZihjID49IDB4RDgwMCAmJiBjIDwgMHhFMDAwKSB7XG5cdFx0XHRjID0gKGMmMTAyMykrNjQ7IGQgPSBzdHIuY2hhckNvZGVBdChpKyspJjEwMjM7XG5cdFx0XHRDID0gKEM+Pj44KSBeIFQwWyhDIF4gKDI0MHwoKGM+PjgpJjcpKSkmMHhGRl07XG5cdFx0XHRDID0gKEM+Pj44KSBeIFQwWyhDIF4gKDEyOHwoKGM+PjIpJjYzKSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUMFsoQyBeICgxMjh8KChkPj42KSYxNSl8KChjJjMpPDw0KSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUMFsoQyBeICgxMjh8KGQmNjMpKSkmMHhGRl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVDBbKEMgXiAoMjI0fCgoYz4+MTIpJjE1KSkpJjB4RkZdO1xuXHRcdFx0QyA9IChDPj4+OCkgXiBUMFsoQyBeICgxMjh8KChjPj42KSY2MykpKSYweEZGXTtcblx0XHRcdEMgPSAoQz4+PjgpIF4gVDBbKEMgXiAoMTI4fChjJjYzKSkpJjB4RkZdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gfkM7XG59XG5DUkMzMi50YWJsZSA9IFQwO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJzdHIgPSBjcmMzMl9ic3RyO1xuLy8gJEZsb3dJZ25vcmVcbkNSQzMyLmJ1ZiA9IGNyYzMyX2J1Zjtcbi8vICRGbG93SWdub3JlXG5DUkMzMi5zdHIgPSBjcmMzMl9zdHI7XG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/crc-32/crc32.js\n");

/***/ })

};
;