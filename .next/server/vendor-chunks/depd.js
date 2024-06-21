/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/depd";
exports.ids = ["vendor-chunks/depd"];
exports.modules = {

/***/ "(ssr)/./node_modules/depd/index.js":
/*!************************************!*\
  !*** ./node_modules/depd/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * depd\n * Copyright(c) 2014-2018 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n/**\n * Module dependencies.\n */\n\nvar relative = (__webpack_require__(/*! path */ \"path\").relative)\n\n/**\n * Module exports.\n */\n\nmodule.exports = depd\n\n/**\n * Get the path to base files on.\n */\n\nvar basePath = process.cwd()\n\n/**\n * Determine if namespace is contained in the string.\n */\n\nfunction containsNamespace (str, namespace) {\n  var vals = str.split(/[ ,]+/)\n  var ns = String(namespace).toLowerCase()\n\n  for (var i = 0; i < vals.length; i++) {\n    var val = vals[i]\n\n    // namespace contained\n    if (val && (val === '*' || val.toLowerCase() === ns)) {\n      return true\n    }\n  }\n\n  return false\n}\n\n/**\n * Convert a data descriptor to accessor descriptor.\n */\n\nfunction convertDataDescriptorToAccessor (obj, prop, message) {\n  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)\n  var value = descriptor.value\n\n  descriptor.get = function getter () { return value }\n\n  if (descriptor.writable) {\n    descriptor.set = function setter (val) { return (value = val) }\n  }\n\n  delete descriptor.value\n  delete descriptor.writable\n\n  Object.defineProperty(obj, prop, descriptor)\n\n  return descriptor\n}\n\n/**\n * Create arguments string to keep arity.\n */\n\nfunction createArgumentsString (arity) {\n  var str = ''\n\n  for (var i = 0; i < arity; i++) {\n    str += ', arg' + i\n  }\n\n  return str.substr(2)\n}\n\n/**\n * Create stack string from stack.\n */\n\nfunction createStackString (stack) {\n  var str = this.name + ': ' + this.namespace\n\n  if (this.message) {\n    str += ' deprecated ' + this.message\n  }\n\n  for (var i = 0; i < stack.length; i++) {\n    str += '\\n    at ' + stack[i].toString()\n  }\n\n  return str\n}\n\n/**\n * Create deprecate for namespace in caller.\n */\n\nfunction depd (namespace) {\n  if (!namespace) {\n    throw new TypeError('argument namespace is required')\n  }\n\n  var stack = getStack()\n  var site = callSiteLocation(stack[1])\n  var file = site[0]\n\n  function deprecate (message) {\n    // call to self as log\n    log.call(deprecate, message)\n  }\n\n  deprecate._file = file\n  deprecate._ignored = isignored(namespace)\n  deprecate._namespace = namespace\n  deprecate._traced = istraced(namespace)\n  deprecate._warned = Object.create(null)\n\n  deprecate.function = wrapfunction\n  deprecate.property = wrapproperty\n\n  return deprecate\n}\n\n/**\n * Determine if event emitter has listeners of a given type.\n *\n * The way to do this check is done three different ways in Node.js >= 0.8\n * so this consolidates them into a minimal set using instance methods.\n *\n * @param {EventEmitter} emitter\n * @param {string} type\n * @returns {boolean}\n * @private\n */\n\nfunction eehaslisteners (emitter, type) {\n  var count = typeof emitter.listenerCount !== 'function'\n    ? emitter.listeners(type).length\n    : emitter.listenerCount(type)\n\n  return count > 0\n}\n\n/**\n * Determine if namespace is ignored.\n */\n\nfunction isignored (namespace) {\n  if (process.noDeprecation) {\n    // --no-deprecation support\n    return true\n  }\n\n  var str = process.env.NO_DEPRECATION || ''\n\n  // namespace ignored\n  return containsNamespace(str, namespace)\n}\n\n/**\n * Determine if namespace is traced.\n */\n\nfunction istraced (namespace) {\n  if (process.traceDeprecation) {\n    // --trace-deprecation support\n    return true\n  }\n\n  var str = process.env.TRACE_DEPRECATION || ''\n\n  // namespace traced\n  return containsNamespace(str, namespace)\n}\n\n/**\n * Display deprecation message.\n */\n\nfunction log (message, site) {\n  var haslisteners = eehaslisteners(process, 'deprecation')\n\n  // abort early if no destination\n  if (!haslisteners && this._ignored) {\n    return\n  }\n\n  var caller\n  var callFile\n  var callSite\n  var depSite\n  var i = 0\n  var seen = false\n  var stack = getStack()\n  var file = this._file\n\n  if (site) {\n    // provided site\n    depSite = site\n    callSite = callSiteLocation(stack[1])\n    callSite.name = depSite.name\n    file = callSite[0]\n  } else {\n    // get call site\n    i = 2\n    depSite = callSiteLocation(stack[i])\n    callSite = depSite\n  }\n\n  // get caller of deprecated thing in relation to file\n  for (; i < stack.length; i++) {\n    caller = callSiteLocation(stack[i])\n    callFile = caller[0]\n\n    if (callFile === file) {\n      seen = true\n    } else if (callFile === this._file) {\n      file = this._file\n    } else if (seen) {\n      break\n    }\n  }\n\n  var key = caller\n    ? depSite.join(':') + '__' + caller.join(':')\n    : undefined\n\n  if (key !== undefined && key in this._warned) {\n    // already warned\n    return\n  }\n\n  this._warned[key] = true\n\n  // generate automatic message from call site\n  var msg = message\n  if (!msg) {\n    msg = callSite === depSite || !callSite.name\n      ? defaultMessage(depSite)\n      : defaultMessage(callSite)\n  }\n\n  // emit deprecation if listeners exist\n  if (haslisteners) {\n    var err = DeprecationError(this._namespace, msg, stack.slice(i))\n    process.emit('deprecation', err)\n    return\n  }\n\n  // format and write message\n  var format = process.stderr.isTTY\n    ? formatColor\n    : formatPlain\n  var output = format.call(this, msg, caller, stack.slice(i))\n  process.stderr.write(output + '\\n', 'utf8')\n}\n\n/**\n * Get call site location as array.\n */\n\nfunction callSiteLocation (callSite) {\n  var file = callSite.getFileName() || '<anonymous>'\n  var line = callSite.getLineNumber()\n  var colm = callSite.getColumnNumber()\n\n  if (callSite.isEval()) {\n    file = callSite.getEvalOrigin() + ', ' + file\n  }\n\n  var site = [file, line, colm]\n\n  site.callSite = callSite\n  site.name = callSite.getFunctionName()\n\n  return site\n}\n\n/**\n * Generate a default message from the site.\n */\n\nfunction defaultMessage (site) {\n  var callSite = site.callSite\n  var funcName = site.name\n\n  // make useful anonymous name\n  if (!funcName) {\n    funcName = '<anonymous@' + formatLocation(site) + '>'\n  }\n\n  var context = callSite.getThis()\n  var typeName = context && callSite.getTypeName()\n\n  // ignore useless type name\n  if (typeName === 'Object') {\n    typeName = undefined\n  }\n\n  // make useful type name\n  if (typeName === 'Function') {\n    typeName = context.name || typeName\n  }\n\n  return typeName && callSite.getMethodName()\n    ? typeName + '.' + funcName\n    : funcName\n}\n\n/**\n * Format deprecation message without color.\n */\n\nfunction formatPlain (msg, caller, stack) {\n  var timestamp = new Date().toUTCString()\n\n  var formatted = timestamp +\n    ' ' + this._namespace +\n    ' deprecated ' + msg\n\n  // add stack trace\n  if (this._traced) {\n    for (var i = 0; i < stack.length; i++) {\n      formatted += '\\n    at ' + stack[i].toString()\n    }\n\n    return formatted\n  }\n\n  if (caller) {\n    formatted += ' at ' + formatLocation(caller)\n  }\n\n  return formatted\n}\n\n/**\n * Format deprecation message with color.\n */\n\nfunction formatColor (msg, caller, stack) {\n  var formatted = '\\x1b[36;1m' + this._namespace + '\\x1b[22;39m' + // bold cyan\n    ' \\x1b[33;1mdeprecated\\x1b[22;39m' + // bold yellow\n    ' \\x1b[0m' + msg + '\\x1b[39m' // reset\n\n  // add stack trace\n  if (this._traced) {\n    for (var i = 0; i < stack.length; i++) {\n      formatted += '\\n    \\x1b[36mat ' + stack[i].toString() + '\\x1b[39m' // cyan\n    }\n\n    return formatted\n  }\n\n  if (caller) {\n    formatted += ' \\x1b[36m' + formatLocation(caller) + '\\x1b[39m' // cyan\n  }\n\n  return formatted\n}\n\n/**\n * Format call site location.\n */\n\nfunction formatLocation (callSite) {\n  return relative(basePath, callSite[0]) +\n    ':' + callSite[1] +\n    ':' + callSite[2]\n}\n\n/**\n * Get the stack as array of call sites.\n */\n\nfunction getStack () {\n  var limit = Error.stackTraceLimit\n  var obj = {}\n  var prep = Error.prepareStackTrace\n\n  Error.prepareStackTrace = prepareObjectStackTrace\n  Error.stackTraceLimit = Math.max(10, limit)\n\n  // capture the stack\n  Error.captureStackTrace(obj)\n\n  // slice this function off the top\n  var stack = obj.stack.slice(1)\n\n  Error.prepareStackTrace = prep\n  Error.stackTraceLimit = limit\n\n  return stack\n}\n\n/**\n * Capture call site stack from v8.\n */\n\nfunction prepareObjectStackTrace (obj, stack) {\n  return stack\n}\n\n/**\n * Return a wrapped function in a deprecation message.\n */\n\nfunction wrapfunction (fn, message) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('argument fn must be a function')\n  }\n\n  var args = createArgumentsString(fn.length)\n  var stack = getStack()\n  var site = callSiteLocation(stack[1])\n\n  site.name = fn.name\n\n  // eslint-disable-next-line no-new-func\n  var deprecatedfn = new Function('fn', 'log', 'deprecate', 'message', 'site',\n    '\"use strict\"\\n' +\n    'return function (' + args + ') {' +\n    'log.call(deprecate, message, site)\\n' +\n    'return fn.apply(this, arguments)\\n' +\n    '}')(fn, log, this, message, site)\n\n  return deprecatedfn\n}\n\n/**\n * Wrap property in a deprecation message.\n */\n\nfunction wrapproperty (obj, prop, message) {\n  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {\n    throw new TypeError('argument obj must be object')\n  }\n\n  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)\n\n  if (!descriptor) {\n    throw new TypeError('must call property on owner object')\n  }\n\n  if (!descriptor.configurable) {\n    throw new TypeError('property must be configurable')\n  }\n\n  var deprecate = this\n  var stack = getStack()\n  var site = callSiteLocation(stack[1])\n\n  // set site name\n  site.name = prop\n\n  // convert data descriptor\n  if ('value' in descriptor) {\n    descriptor = convertDataDescriptorToAccessor(obj, prop, message)\n  }\n\n  var get = descriptor.get\n  var set = descriptor.set\n\n  // wrap getter\n  if (typeof get === 'function') {\n    descriptor.get = function getter () {\n      log.call(deprecate, message, site)\n      return get.apply(this, arguments)\n    }\n  }\n\n  // wrap setter\n  if (typeof set === 'function') {\n    descriptor.set = function setter () {\n      log.call(deprecate, message, site)\n      return set.apply(this, arguments)\n    }\n  }\n\n  Object.defineProperty(obj, prop, descriptor)\n}\n\n/**\n * Create DeprecationError for deprecation\n */\n\nfunction DeprecationError (namespace, message, stack) {\n  var error = new Error()\n  var stackString\n\n  Object.defineProperty(error, 'constructor', {\n    value: DeprecationError\n  })\n\n  Object.defineProperty(error, 'message', {\n    configurable: true,\n    enumerable: false,\n    value: message,\n    writable: true\n  })\n\n  Object.defineProperty(error, 'name', {\n    enumerable: false,\n    configurable: true,\n    value: 'DeprecationError',\n    writable: true\n  })\n\n  Object.defineProperty(error, 'namespace', {\n    configurable: true,\n    enumerable: false,\n    value: namespace,\n    writable: true\n  })\n\n  Object.defineProperty(error, 'stack', {\n    configurable: true,\n    enumerable: false,\n    get: function () {\n      if (stackString !== undefined) {\n        return stackString\n      }\n\n      // prepare stack trace\n      return (stackString = createStackString.call(this, stack))\n    },\n    set: function setter (val) {\n      stackString = val\n    }\n  })\n\n  return error\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGVwZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGtEQUF3Qjs7QUFFdkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDOztBQUV4QztBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFdBQVc7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGtCQUFrQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGlDQUFpQztBQUM1RCxjQUFjLG9CQUFvQjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL2RlcGQvaW5kZXguanM/NjE3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGRlcGRcbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTggRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcmVsYXRpdmUgPSByZXF1aXJlKCdwYXRoJykucmVsYXRpdmVcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGRcblxuLyoqXG4gKiBHZXQgdGhlIHBhdGggdG8gYmFzZSBmaWxlcyBvbi5cbiAqL1xuXG52YXIgYmFzZVBhdGggPSBwcm9jZXNzLmN3ZCgpXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIG5hbWVzcGFjZSBpcyBjb250YWluZWQgaW4gdGhlIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiBjb250YWluc05hbWVzcGFjZSAoc3RyLCBuYW1lc3BhY2UpIHtcbiAgdmFyIHZhbHMgPSBzdHIuc3BsaXQoL1sgLF0rLylcbiAgdmFyIG5zID0gU3RyaW5nKG5hbWVzcGFjZSkudG9Mb3dlckNhc2UoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWwgPSB2YWxzW2ldXG5cbiAgICAvLyBuYW1lc3BhY2UgY29udGFpbmVkXG4gICAgaWYgKHZhbCAmJiAodmFsID09PSAnKicgfHwgdmFsLnRvTG93ZXJDYXNlKCkgPT09IG5zKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBkZXNjcmlwdG9yIHRvIGFjY2Vzc29yIGRlc2NyaXB0b3IuXG4gKi9cblxuZnVuY3Rpb24gY29udmVydERhdGFEZXNjcmlwdG9yVG9BY2Nlc3NvciAob2JqLCBwcm9wLCBtZXNzYWdlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApXG4gIHZhciB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWVcblxuICBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uIGdldHRlciAoKSB7IHJldHVybiB2YWx1ZSB9XG5cbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICBkZXNjcmlwdG9yLnNldCA9IGZ1bmN0aW9uIHNldHRlciAodmFsKSB7IHJldHVybiAodmFsdWUgPSB2YWwpIH1cbiAgfVxuXG4gIGRlbGV0ZSBkZXNjcmlwdG9yLnZhbHVlXG4gIGRlbGV0ZSBkZXNjcmlwdG9yLndyaXRhYmxlXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzY3JpcHRvcilcblxuICByZXR1cm4gZGVzY3JpcHRvclxufVxuXG4vKipcbiAqIENyZWF0ZSBhcmd1bWVudHMgc3RyaW5nIHRvIGtlZXAgYXJpdHkuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQXJndW1lbnRzU3RyaW5nIChhcml0eSkge1xuICB2YXIgc3RyID0gJydcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyaXR5OyBpKyspIHtcbiAgICBzdHIgKz0gJywgYXJnJyArIGlcbiAgfVxuXG4gIHJldHVybiBzdHIuc3Vic3RyKDIpXG59XG5cbi8qKlxuICogQ3JlYXRlIHN0YWNrIHN0cmluZyBmcm9tIHN0YWNrLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YWNrU3RyaW5nIChzdGFjaykge1xuICB2YXIgc3RyID0gdGhpcy5uYW1lICsgJzogJyArIHRoaXMubmFtZXNwYWNlXG5cbiAgaWYgKHRoaXMubWVzc2FnZSkge1xuICAgIHN0ciArPSAnIGRlcHJlY2F0ZWQgJyArIHRoaXMubWVzc2FnZVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgIHN0ciArPSAnXFxuICAgIGF0ICcgKyBzdGFja1tpXS50b1N0cmluZygpXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG5cbi8qKlxuICogQ3JlYXRlIGRlcHJlY2F0ZSBmb3IgbmFtZXNwYWNlIGluIGNhbGxlci5cbiAqL1xuXG5mdW5jdGlvbiBkZXBkIChuYW1lc3BhY2UpIHtcbiAgaWYgKCFuYW1lc3BhY2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lc3BhY2UgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgdmFyIHN0YWNrID0gZ2V0U3RhY2soKVxuICB2YXIgc2l0ZSA9IGNhbGxTaXRlTG9jYXRpb24oc3RhY2tbMV0pXG4gIHZhciBmaWxlID0gc2l0ZVswXVxuXG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZSAobWVzc2FnZSkge1xuICAgIC8vIGNhbGwgdG8gc2VsZiBhcyBsb2dcbiAgICBsb2cuY2FsbChkZXByZWNhdGUsIG1lc3NhZ2UpXG4gIH1cblxuICBkZXByZWNhdGUuX2ZpbGUgPSBmaWxlXG4gIGRlcHJlY2F0ZS5faWdub3JlZCA9IGlzaWdub3JlZChuYW1lc3BhY2UpXG4gIGRlcHJlY2F0ZS5fbmFtZXNwYWNlID0gbmFtZXNwYWNlXG4gIGRlcHJlY2F0ZS5fdHJhY2VkID0gaXN0cmFjZWQobmFtZXNwYWNlKVxuICBkZXByZWNhdGUuX3dhcm5lZCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBkZXByZWNhdGUuZnVuY3Rpb24gPSB3cmFwZnVuY3Rpb25cbiAgZGVwcmVjYXRlLnByb3BlcnR5ID0gd3JhcHByb3BlcnR5XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBldmVudCBlbWl0dGVyIGhhcyBsaXN0ZW5lcnMgb2YgYSBnaXZlbiB0eXBlLlxuICpcbiAqIFRoZSB3YXkgdG8gZG8gdGhpcyBjaGVjayBpcyBkb25lIHRocmVlIGRpZmZlcmVudCB3YXlzIGluIE5vZGUuanMgPj0gMC44XG4gKiBzbyB0aGlzIGNvbnNvbGlkYXRlcyB0aGVtIGludG8gYSBtaW5pbWFsIHNldCB1c2luZyBpbnN0YW5jZSBtZXRob2RzLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVlaGFzbGlzdGVuZXJzIChlbWl0dGVyLCB0eXBlKSB7XG4gIHZhciBjb3VudCA9IHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgIT09ICdmdW5jdGlvbidcbiAgICA/IGVtaXR0ZXIubGlzdGVuZXJzKHR5cGUpLmxlbmd0aFxuICAgIDogZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpXG5cbiAgcmV0dXJuIGNvdW50ID4gMFxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBuYW1lc3BhY2UgaXMgaWdub3JlZC5cbiAqL1xuXG5mdW5jdGlvbiBpc2lnbm9yZWQgKG5hbWVzcGFjZSkge1xuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uKSB7XG4gICAgLy8gLS1uby1kZXByZWNhdGlvbiBzdXBwb3J0XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHZhciBzdHIgPSBwcm9jZXNzLmVudi5OT19ERVBSRUNBVElPTiB8fCAnJ1xuXG4gIC8vIG5hbWVzcGFjZSBpZ25vcmVkXG4gIHJldHVybiBjb250YWluc05hbWVzcGFjZShzdHIsIG5hbWVzcGFjZSlcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgbmFtZXNwYWNlIGlzIHRyYWNlZC5cbiAqL1xuXG5mdW5jdGlvbiBpc3RyYWNlZCAobmFtZXNwYWNlKSB7XG4gIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAvLyAtLXRyYWNlLWRlcHJlY2F0aW9uIHN1cHBvcnRcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdmFyIHN0ciA9IHByb2Nlc3MuZW52LlRSQUNFX0RFUFJFQ0FUSU9OIHx8ICcnXG5cbiAgLy8gbmFtZXNwYWNlIHRyYWNlZFxuICByZXR1cm4gY29udGFpbnNOYW1lc3BhY2Uoc3RyLCBuYW1lc3BhY2UpXG59XG5cbi8qKlxuICogRGlzcGxheSBkZXByZWNhdGlvbiBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIGxvZyAobWVzc2FnZSwgc2l0ZSkge1xuICB2YXIgaGFzbGlzdGVuZXJzID0gZWVoYXNsaXN0ZW5lcnMocHJvY2VzcywgJ2RlcHJlY2F0aW9uJylcblxuICAvLyBhYm9ydCBlYXJseSBpZiBubyBkZXN0aW5hdGlvblxuICBpZiAoIWhhc2xpc3RlbmVycyAmJiB0aGlzLl9pZ25vcmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY2FsbGVyXG4gIHZhciBjYWxsRmlsZVxuICB2YXIgY2FsbFNpdGVcbiAgdmFyIGRlcFNpdGVcbiAgdmFyIGkgPSAwXG4gIHZhciBzZWVuID0gZmFsc2VcbiAgdmFyIHN0YWNrID0gZ2V0U3RhY2soKVxuICB2YXIgZmlsZSA9IHRoaXMuX2ZpbGVcblxuICBpZiAoc2l0ZSkge1xuICAgIC8vIHByb3ZpZGVkIHNpdGVcbiAgICBkZXBTaXRlID0gc2l0ZVxuICAgIGNhbGxTaXRlID0gY2FsbFNpdGVMb2NhdGlvbihzdGFja1sxXSlcbiAgICBjYWxsU2l0ZS5uYW1lID0gZGVwU2l0ZS5uYW1lXG4gICAgZmlsZSA9IGNhbGxTaXRlWzBdXG4gIH0gZWxzZSB7XG4gICAgLy8gZ2V0IGNhbGwgc2l0ZVxuICAgIGkgPSAyXG4gICAgZGVwU2l0ZSA9IGNhbGxTaXRlTG9jYXRpb24oc3RhY2tbaV0pXG4gICAgY2FsbFNpdGUgPSBkZXBTaXRlXG4gIH1cblxuICAvLyBnZXQgY2FsbGVyIG9mIGRlcHJlY2F0ZWQgdGhpbmcgaW4gcmVsYXRpb24gdG8gZmlsZVxuICBmb3IgKDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgY2FsbGVyID0gY2FsbFNpdGVMb2NhdGlvbihzdGFja1tpXSlcbiAgICBjYWxsRmlsZSA9IGNhbGxlclswXVxuXG4gICAgaWYgKGNhbGxGaWxlID09PSBmaWxlKSB7XG4gICAgICBzZWVuID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoY2FsbEZpbGUgPT09IHRoaXMuX2ZpbGUpIHtcbiAgICAgIGZpbGUgPSB0aGlzLl9maWxlXG4gICAgfSBlbHNlIGlmIChzZWVuKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHZhciBrZXkgPSBjYWxsZXJcbiAgICA/IGRlcFNpdGUuam9pbignOicpICsgJ19fJyArIGNhbGxlci5qb2luKCc6JylcbiAgICA6IHVuZGVmaW5lZFxuXG4gIGlmIChrZXkgIT09IHVuZGVmaW5lZCAmJiBrZXkgaW4gdGhpcy5fd2FybmVkKSB7XG4gICAgLy8gYWxyZWFkeSB3YXJuZWRcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRoaXMuX3dhcm5lZFtrZXldID0gdHJ1ZVxuXG4gIC8vIGdlbmVyYXRlIGF1dG9tYXRpYyBtZXNzYWdlIGZyb20gY2FsbCBzaXRlXG4gIHZhciBtc2cgPSBtZXNzYWdlXG4gIGlmICghbXNnKSB7XG4gICAgbXNnID0gY2FsbFNpdGUgPT09IGRlcFNpdGUgfHwgIWNhbGxTaXRlLm5hbWVcbiAgICAgID8gZGVmYXVsdE1lc3NhZ2UoZGVwU2l0ZSlcbiAgICAgIDogZGVmYXVsdE1lc3NhZ2UoY2FsbFNpdGUpXG4gIH1cblxuICAvLyBlbWl0IGRlcHJlY2F0aW9uIGlmIGxpc3RlbmVycyBleGlzdFxuICBpZiAoaGFzbGlzdGVuZXJzKSB7XG4gICAgdmFyIGVyciA9IERlcHJlY2F0aW9uRXJyb3IodGhpcy5fbmFtZXNwYWNlLCBtc2csIHN0YWNrLnNsaWNlKGkpKVxuICAgIHByb2Nlc3MuZW1pdCgnZGVwcmVjYXRpb24nLCBlcnIpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBmb3JtYXQgYW5kIHdyaXRlIG1lc3NhZ2VcbiAgdmFyIGZvcm1hdCA9IHByb2Nlc3Muc3RkZXJyLmlzVFRZXG4gICAgPyBmb3JtYXRDb2xvclxuICAgIDogZm9ybWF0UGxhaW5cbiAgdmFyIG91dHB1dCA9IGZvcm1hdC5jYWxsKHRoaXMsIG1zZywgY2FsbGVyLCBzdGFjay5zbGljZShpKSlcbiAgcHJvY2Vzcy5zdGRlcnIud3JpdGUob3V0cHV0ICsgJ1xcbicsICd1dGY4Jylcbn1cblxuLyoqXG4gKiBHZXQgY2FsbCBzaXRlIGxvY2F0aW9uIGFzIGFycmF5LlxuICovXG5cbmZ1bmN0aW9uIGNhbGxTaXRlTG9jYXRpb24gKGNhbGxTaXRlKSB7XG4gIHZhciBmaWxlID0gY2FsbFNpdGUuZ2V0RmlsZU5hbWUoKSB8fCAnPGFub255bW91cz4nXG4gIHZhciBsaW5lID0gY2FsbFNpdGUuZ2V0TGluZU51bWJlcigpXG4gIHZhciBjb2xtID0gY2FsbFNpdGUuZ2V0Q29sdW1uTnVtYmVyKClcblxuICBpZiAoY2FsbFNpdGUuaXNFdmFsKCkpIHtcbiAgICBmaWxlID0gY2FsbFNpdGUuZ2V0RXZhbE9yaWdpbigpICsgJywgJyArIGZpbGVcbiAgfVxuXG4gIHZhciBzaXRlID0gW2ZpbGUsIGxpbmUsIGNvbG1dXG5cbiAgc2l0ZS5jYWxsU2l0ZSA9IGNhbGxTaXRlXG4gIHNpdGUubmFtZSA9IGNhbGxTaXRlLmdldEZ1bmN0aW9uTmFtZSgpXG5cbiAgcmV0dXJuIHNpdGVcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhIGRlZmF1bHQgbWVzc2FnZSBmcm9tIHRoZSBzaXRlLlxuICovXG5cbmZ1bmN0aW9uIGRlZmF1bHRNZXNzYWdlIChzaXRlKSB7XG4gIHZhciBjYWxsU2l0ZSA9IHNpdGUuY2FsbFNpdGVcbiAgdmFyIGZ1bmNOYW1lID0gc2l0ZS5uYW1lXG5cbiAgLy8gbWFrZSB1c2VmdWwgYW5vbnltb3VzIG5hbWVcbiAgaWYgKCFmdW5jTmFtZSkge1xuICAgIGZ1bmNOYW1lID0gJzxhbm9ueW1vdXNAJyArIGZvcm1hdExvY2F0aW9uKHNpdGUpICsgJz4nXG4gIH1cblxuICB2YXIgY29udGV4dCA9IGNhbGxTaXRlLmdldFRoaXMoKVxuICB2YXIgdHlwZU5hbWUgPSBjb250ZXh0ICYmIGNhbGxTaXRlLmdldFR5cGVOYW1lKClcblxuICAvLyBpZ25vcmUgdXNlbGVzcyB0eXBlIG5hbWVcbiAgaWYgKHR5cGVOYW1lID09PSAnT2JqZWN0Jykge1xuICAgIHR5cGVOYW1lID0gdW5kZWZpbmVkXG4gIH1cblxuICAvLyBtYWtlIHVzZWZ1bCB0eXBlIG5hbWVcbiAgaWYgKHR5cGVOYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgdHlwZU5hbWUgPSBjb250ZXh0Lm5hbWUgfHwgdHlwZU5hbWVcbiAgfVxuXG4gIHJldHVybiB0eXBlTmFtZSAmJiBjYWxsU2l0ZS5nZXRNZXRob2ROYW1lKClcbiAgICA/IHR5cGVOYW1lICsgJy4nICsgZnVuY05hbWVcbiAgICA6IGZ1bmNOYW1lXG59XG5cbi8qKlxuICogRm9ybWF0IGRlcHJlY2F0aW9uIG1lc3NhZ2Ugd2l0aG91dCBjb2xvci5cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRQbGFpbiAobXNnLCBjYWxsZXIsIHN0YWNrKSB7XG4gIHZhciB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKClcblxuICB2YXIgZm9ybWF0dGVkID0gdGltZXN0YW1wICtcbiAgICAnICcgKyB0aGlzLl9uYW1lc3BhY2UgK1xuICAgICcgZGVwcmVjYXRlZCAnICsgbXNnXG5cbiAgLy8gYWRkIHN0YWNrIHRyYWNlXG4gIGlmICh0aGlzLl90cmFjZWQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3JtYXR0ZWQgKz0gJ1xcbiAgICBhdCAnICsgc3RhY2tbaV0udG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWRcbiAgfVxuXG4gIGlmIChjYWxsZXIpIHtcbiAgICBmb3JtYXR0ZWQgKz0gJyBhdCAnICsgZm9ybWF0TG9jYXRpb24oY2FsbGVyKVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdHRlZFxufVxuXG4vKipcbiAqIEZvcm1hdCBkZXByZWNhdGlvbiBtZXNzYWdlIHdpdGggY29sb3IuXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0Q29sb3IgKG1zZywgY2FsbGVyLCBzdGFjaykge1xuICB2YXIgZm9ybWF0dGVkID0gJ1xceDFiWzM2OzFtJyArIHRoaXMuX25hbWVzcGFjZSArICdcXHgxYlsyMjszOW0nICsgLy8gYm9sZCBjeWFuXG4gICAgJyBcXHgxYlszMzsxbWRlcHJlY2F0ZWRcXHgxYlsyMjszOW0nICsgLy8gYm9sZCB5ZWxsb3dcbiAgICAnIFxceDFiWzBtJyArIG1zZyArICdcXHgxYlszOW0nIC8vIHJlc2V0XG5cbiAgLy8gYWRkIHN0YWNrIHRyYWNlXG4gIGlmICh0aGlzLl90cmFjZWQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3JtYXR0ZWQgKz0gJ1xcbiAgICBcXHgxYlszNm1hdCAnICsgc3RhY2tbaV0udG9TdHJpbmcoKSArICdcXHgxYlszOW0nIC8vIGN5YW5cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkXG4gIH1cblxuICBpZiAoY2FsbGVyKSB7XG4gICAgZm9ybWF0dGVkICs9ICcgXFx4MWJbMzZtJyArIGZvcm1hdExvY2F0aW9uKGNhbGxlcikgKyAnXFx4MWJbMzltJyAvLyBjeWFuXG4gIH1cblxuICByZXR1cm4gZm9ybWF0dGVkXG59XG5cbi8qKlxuICogRm9ybWF0IGNhbGwgc2l0ZSBsb2NhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRMb2NhdGlvbiAoY2FsbFNpdGUpIHtcbiAgcmV0dXJuIHJlbGF0aXZlKGJhc2VQYXRoLCBjYWxsU2l0ZVswXSkgK1xuICAgICc6JyArIGNhbGxTaXRlWzFdICtcbiAgICAnOicgKyBjYWxsU2l0ZVsyXVxufVxuXG4vKipcbiAqIEdldCB0aGUgc3RhY2sgYXMgYXJyYXkgb2YgY2FsbCBzaXRlcy5cbiAqL1xuXG5mdW5jdGlvbiBnZXRTdGFjayAoKSB7XG4gIHZhciBsaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdFxuICB2YXIgb2JqID0ge31cbiAgdmFyIHByZXAgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZVxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJlcGFyZU9iamVjdFN0YWNrVHJhY2VcbiAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gTWF0aC5tYXgoMTAsIGxpbWl0KVxuXG4gIC8vIGNhcHR1cmUgdGhlIHN0YWNrXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKG9iailcblxuICAvLyBzbGljZSB0aGlzIGZ1bmN0aW9uIG9mZiB0aGUgdG9wXG4gIHZhciBzdGFjayA9IG9iai5zdGFjay5zbGljZSgxKVxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJlcFxuICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBsaW1pdFxuXG4gIHJldHVybiBzdGFja1xufVxuXG4vKipcbiAqIENhcHR1cmUgY2FsbCBzaXRlIHN0YWNrIGZyb20gdjguXG4gKi9cblxuZnVuY3Rpb24gcHJlcGFyZU9iamVjdFN0YWNrVHJhY2UgKG9iaiwgc3RhY2spIHtcbiAgcmV0dXJuIHN0YWNrXG59XG5cbi8qKlxuICogUmV0dXJuIGEgd3JhcHBlZCBmdW5jdGlvbiBpbiBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gd3JhcGZ1bmN0aW9uIChmbiwgbWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgZm4gbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgfVxuXG4gIHZhciBhcmdzID0gY3JlYXRlQXJndW1lbnRzU3RyaW5nKGZuLmxlbmd0aClcbiAgdmFyIHN0YWNrID0gZ2V0U3RhY2soKVxuICB2YXIgc2l0ZSA9IGNhbGxTaXRlTG9jYXRpb24oc3RhY2tbMV0pXG5cbiAgc2l0ZS5uYW1lID0gZm4ubmFtZVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICB2YXIgZGVwcmVjYXRlZGZuID0gbmV3IEZ1bmN0aW9uKCdmbicsICdsb2cnLCAnZGVwcmVjYXRlJywgJ21lc3NhZ2UnLCAnc2l0ZScsXG4gICAgJ1widXNlIHN0cmljdFwiXFxuJyArXG4gICAgJ3JldHVybiBmdW5jdGlvbiAoJyArIGFyZ3MgKyAnKSB7JyArXG4gICAgJ2xvZy5jYWxsKGRlcHJlY2F0ZSwgbWVzc2FnZSwgc2l0ZSlcXG4nICtcbiAgICAncmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcXG4nICtcbiAgICAnfScpKGZuLCBsb2csIHRoaXMsIG1lc3NhZ2UsIHNpdGUpXG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWRmblxufVxuXG4vKipcbiAqIFdyYXAgcHJvcGVydHkgaW4gYSBkZXByZWNhdGlvbiBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIHdyYXBwcm9wZXJ0eSAob2JqLCBwcm9wLCBtZXNzYWdlKSB7XG4gIGlmICghb2JqIHx8ICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG9iaiBtdXN0IGJlIG9iamVjdCcpXG4gIH1cblxuICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKVxuXG4gIGlmICghZGVzY3JpcHRvcikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3QgY2FsbCBwcm9wZXJ0eSBvbiBvd25lciBvYmplY3QnKVxuICB9XG5cbiAgaWYgKCFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Byb3BlcnR5IG11c3QgYmUgY29uZmlndXJhYmxlJylcbiAgfVxuXG4gIHZhciBkZXByZWNhdGUgPSB0aGlzXG4gIHZhciBzdGFjayA9IGdldFN0YWNrKClcbiAgdmFyIHNpdGUgPSBjYWxsU2l0ZUxvY2F0aW9uKHN0YWNrWzFdKVxuXG4gIC8vIHNldCBzaXRlIG5hbWVcbiAgc2l0ZS5uYW1lID0gcHJvcFxuXG4gIC8vIGNvbnZlcnQgZGF0YSBkZXNjcmlwdG9yXG4gIGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICBkZXNjcmlwdG9yID0gY29udmVydERhdGFEZXNjcmlwdG9yVG9BY2Nlc3NvcihvYmosIHByb3AsIG1lc3NhZ2UpXG4gIH1cblxuICB2YXIgZ2V0ID0gZGVzY3JpcHRvci5nZXRcbiAgdmFyIHNldCA9IGRlc2NyaXB0b3Iuc2V0XG5cbiAgLy8gd3JhcCBnZXR0ZXJcbiAgaWYgKHR5cGVvZiBnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uIGdldHRlciAoKSB7XG4gICAgICBsb2cuY2FsbChkZXByZWNhdGUsIG1lc3NhZ2UsIHNpdGUpXG4gICAgICByZXR1cm4gZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cblxuICAvLyB3cmFwIHNldHRlclxuICBpZiAodHlwZW9mIHNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24gc2V0dGVyICgpIHtcbiAgICAgIGxvZy5jYWxsKGRlcHJlY2F0ZSwgbWVzc2FnZSwgc2l0ZSlcbiAgICAgIHJldHVybiBzZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2NyaXB0b3IpXG59XG5cbi8qKlxuICogQ3JlYXRlIERlcHJlY2F0aW9uRXJyb3IgZm9yIGRlcHJlY2F0aW9uXG4gKi9cblxuZnVuY3Rpb24gRGVwcmVjYXRpb25FcnJvciAobmFtZXNwYWNlLCBtZXNzYWdlLCBzdGFjaykge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKVxuICB2YXIgc3RhY2tTdHJpbmdcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyb3IsICdjb25zdHJ1Y3RvcicsIHtcbiAgICB2YWx1ZTogRGVwcmVjYXRpb25FcnJvclxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ21lc3NhZ2UnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBtZXNzYWdlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnbmFtZScsIHtcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6ICdEZXByZWNhdGlvbkVycm9yJyxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ25hbWVzcGFjZScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IG5hbWVzcGFjZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ3N0YWNrJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzdGFja1N0cmluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdGFja1N0cmluZ1xuICAgICAgfVxuXG4gICAgICAvLyBwcmVwYXJlIHN0YWNrIHRyYWNlXG4gICAgICByZXR1cm4gKHN0YWNrU3RyaW5nID0gY3JlYXRlU3RhY2tTdHJpbmcuY2FsbCh0aGlzLCBzdGFjaykpXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldHRlciAodmFsKSB7XG4gICAgICBzdGFja1N0cmluZyA9IHZhbFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gZXJyb3Jcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/depd/index.js\n");

/***/ })

};
;