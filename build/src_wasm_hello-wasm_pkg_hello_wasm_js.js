"use strict";
(self["webpackChunkrust_block"] = self["webpackChunkrust_block"] || []).push([["src_wasm_hello-wasm_pkg_hello_wasm_js"],{

/***/ "./src/wasm/hello-wasm/pkg/hello_wasm.js":
/*!***********************************************!*\
  !*** ./src/wasm/hello-wasm/pkg/hello_wasm.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_set_wasm": function() { return /* reexport safe */ _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm; },
/* harmony export */   "fib": function() { return /* reexport safe */ _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.fib; },
/* harmony export */   "hello": function() { return /* reexport safe */ _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.hello; }
/* harmony export */ });
/* harmony import */ var _hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello_wasm_bg.wasm */ "./src/wasm/hello-wasm/pkg/hello_wasm_bg.wasm");
/* harmony import */ var _hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello_wasm_bg.js */ "./src/wasm/hello-wasm/pkg/hello_wasm_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);
_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,_hello_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_hello_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/wasm/hello-wasm/pkg/hello_wasm_bg.js":
/*!**************************************************!*\
  !*** ./src/wasm/hello-wasm/pkg/hello_wasm_bg.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_set_wasm": function() { return /* binding */ __wbg_set_wasm; },
/* harmony export */   "fib": function() { return /* binding */ fib; },
/* harmony export */   "hello": function() { return /* binding */ hello; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
let wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
let cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* 1. The `#[wasm_bindgen]` attribute tells the Rust compiler to compile the function as a WebAssembly
* function.
* 2. The `pub` keyword tells the Rust compiler to make the function public.
* 3. The `fn` keyword tells the Rust compiler that this is a function.
* 4. The `hello` keyword is the name of the function.
* 5. The `()` tells the Rust compiler that this function takes no arguments.
* 6. The `-> String` tells the Rust compiler that this function returns a string.
* 7. The `return` keyword tells the Rust compiler to return the string
*
* Returns:
*
* A string.
* @returns {string}
*/
function hello() {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.hello(retptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(r0, r1);
  }
}

/**
* It takes a number, and returns the nth number in the Fibonacci sequence
* https://github.com/rust-lang/rust-by-example
* Arguments:
*
* * `n`: u32 - The number of the Fibonacci sequence to return.
*
* Returns:
*
* The nth number in the Fibonacci sequence.
* @param {number} n
* @returns {number}
*/
function fib(n) {
  const ret = wasm.fib(n);
  return ret >>> 0;
}

/***/ }),

/***/ "./src/wasm/hello-wasm/pkg/hello_wasm_bg.wasm":
/*!****************************************************!*\
  !*** ./src/wasm/hello-wasm/pkg/hello_wasm_bg.wasm ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.v(exports, module.id, "8642b0821f36072f92de");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3dhc21faGVsbG8td2FzbV9wa2dfaGVsbG9fd2FzbV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNPO0FBQ3BEQyxpRUFBYyxDQUFDRCxnREFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQixJQUFJQSxJQUFJO0FBQ0QsU0FBU0MsY0FBY0EsQ0FBQ0MsR0FBRyxFQUFFO0VBQ2hDRixJQUFJLEdBQUdFLEdBQUc7QUFDZDtBQUdBLElBQUlDLGtCQUFrQixHQUFHLElBQUk7QUFFN0IsU0FBU0MsZUFBZUEsQ0FBQSxFQUFHO0VBQ3ZCLElBQUlELGtCQUFrQixLQUFLLElBQUksSUFBSUEsa0JBQWtCLENBQUNFLFVBQVUsS0FBSyxDQUFDLEVBQUU7SUFDcEVGLGtCQUFrQixHQUFHLElBQUlHLFVBQVUsQ0FBQ04sSUFBSSxDQUFDTyxNQUFNLENBQUNDLE1BQU0sQ0FBQztFQUMzRDtFQUNBLE9BQU9MLGtCQUFrQjtBQUM3QjtBQUVBLE1BQU1NLFlBQVksR0FBRyxPQUFPQyxXQUFXLEtBQUssV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFQyxNQUFNLENBQUNDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQ0YsV0FBVyxHQUFHQSxXQUFXO0FBRS9HLElBQUlHLGlCQUFpQixHQUFHLElBQUlKLFlBQVksQ0FBQyxPQUFPLEVBQUU7RUFBRUssU0FBUyxFQUFFLElBQUk7RUFBRUMsS0FBSyxFQUFFO0FBQUssQ0FBQyxDQUFDO0FBRW5GRixpQkFBaUIsQ0FBQ0csTUFBTSxFQUFFO0FBRTFCLElBQUlDLGtCQUFrQixHQUFHLElBQUk7QUFFN0IsU0FBU0MsZUFBZUEsQ0FBQSxFQUFHO0VBQ3ZCLElBQUlELGtCQUFrQixLQUFLLElBQUksSUFBSUEsa0JBQWtCLENBQUNaLFVBQVUsS0FBSyxDQUFDLEVBQUU7SUFDcEVZLGtCQUFrQixHQUFHLElBQUlFLFVBQVUsQ0FBQ25CLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxNQUFNLENBQUM7RUFDM0Q7RUFDQSxPQUFPUyxrQkFBa0I7QUFDN0I7QUFFQSxTQUFTRyxrQkFBa0JBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQ2xDLE9BQU9ULGlCQUFpQixDQUFDRyxNQUFNLENBQUNFLGVBQWUsRUFBRSxDQUFDSyxRQUFRLENBQUNGLEdBQUcsRUFBRUEsR0FBRyxHQUFHQyxHQUFHLENBQUMsQ0FBQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNFLEtBQUtBLENBQUEsRUFBRztFQUNwQixJQUFJO0lBQ0EsTUFBTUMsTUFBTSxHQUFHekIsSUFBSSxDQUFDMEIsK0JBQStCLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQxQixJQUFJLENBQUN3QixLQUFLLENBQUNDLE1BQU0sQ0FBQztJQUNsQixJQUFJRSxFQUFFLEdBQUd2QixlQUFlLEVBQUUsQ0FBQ3FCLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQUlHLEVBQUUsR0FBR3hCLGVBQWUsRUFBRSxDQUFDcUIsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsT0FBT0wsa0JBQWtCLENBQUNPLEVBQUUsRUFBRUMsRUFBRSxDQUFDO0VBQ3JDLENBQUMsU0FBUztJQUNONUIsSUFBSSxDQUFDMEIsK0JBQStCLENBQUMsRUFBRSxDQUFDO0lBQ3hDMUIsSUFBSSxDQUFDNkIsZUFBZSxDQUFDRixFQUFFLEVBQUVDLEVBQUUsQ0FBQztFQUNoQztBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0UsR0FBR0EsQ0FBQ0MsQ0FBQyxFQUFFO0VBQ25CLE1BQU1DLEdBQUcsR0FBR2hDLElBQUksQ0FBQzhCLEdBQUcsQ0FBQ0MsQ0FBQyxDQUFDO0VBQ3ZCLE9BQU9DLEdBQUcsS0FBSyxDQUFDO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnVzdC1ibG9jay8uL3NyYy93YXNtL2hlbGxvLXdhc20vcGtnL2hlbGxvX3dhc20uanMiLCJ3ZWJwYWNrOi8vcnVzdC1ibG9jay8uL3NyYy93YXNtL2hlbGxvLXdhc20vcGtnL2hlbGxvX3dhc21fYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9oZWxsb193YXNtX2JnLndhc21cIjtcbmltcG9ydCB7IF9fd2JnX3NldF93YXNtIH0gZnJvbSBcIi4vaGVsbG9fd2FzbV9iZy5qc1wiO1xuX193Ymdfc2V0X3dhc20od2FzbSk7XG5leHBvcnQgKiBmcm9tIFwiLi9oZWxsb193YXNtX2JnLmpzXCI7XG4iLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5cbmxldCBjYWNoZWRJbnQzMk1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRJbnQzMk1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRJbnQzMk1lbW9yeTAgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkSW50MzJNZW1vcnkwO1xufVxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cbi8qKlxuKiAxLiBUaGUgYCNbd2FzbV9iaW5kZ2VuXWAgYXR0cmlidXRlIHRlbGxzIHRoZSBSdXN0IGNvbXBpbGVyIHRvIGNvbXBpbGUgdGhlIGZ1bmN0aW9uIGFzIGEgV2ViQXNzZW1ibHlcbiogZnVuY3Rpb24uXG4qIDIuIFRoZSBgcHViYCBrZXl3b3JkIHRlbGxzIHRoZSBSdXN0IGNvbXBpbGVyIHRvIG1ha2UgdGhlIGZ1bmN0aW9uIHB1YmxpYy5cbiogMy4gVGhlIGBmbmAga2V5d29yZCB0ZWxscyB0aGUgUnVzdCBjb21waWxlciB0aGF0IHRoaXMgaXMgYSBmdW5jdGlvbi5cbiogNC4gVGhlIGBoZWxsb2Aga2V5d29yZCBpcyB0aGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24uXG4qIDUuIFRoZSBgKClgIHRlbGxzIHRoZSBSdXN0IGNvbXBpbGVyIHRoYXQgdGhpcyBmdW5jdGlvbiB0YWtlcyBubyBhcmd1bWVudHMuXG4qIDYuIFRoZSBgLT4gU3RyaW5nYCB0ZWxscyB0aGUgUnVzdCBjb21waWxlciB0aGF0IHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHN0cmluZy5cbiogNy4gVGhlIGByZXR1cm5gIGtleXdvcmQgdGVsbHMgdGhlIFJ1c3QgY29tcGlsZXIgdG8gcmV0dXJuIHRoZSBzdHJpbmdcbipcbiogUmV0dXJuczpcbipcbiogQSBzdHJpbmcuXG4qIEByZXR1cm5zIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGhlbGxvKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHB0ciA9IHdhc20uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigtMTYpO1xuICAgICAgICB3YXNtLmhlbGxvKHJldHB0cik7XG4gICAgICAgIHZhciByMCA9IGdldEludDMyTWVtb3J5MCgpW3JldHB0ciAvIDQgKyAwXTtcbiAgICAgICAgdmFyIHIxID0gZ2V0SW50MzJNZW1vcnkwKClbcmV0cHRyIC8gNCArIDFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHIwLCByMSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KTtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocjAsIHIxKTtcbiAgICB9XG59XG5cbi8qKlxuKiBJdCB0YWtlcyBhIG51bWJlciwgYW5kIHJldHVybnMgdGhlIG50aCBudW1iZXIgaW4gdGhlIEZpYm9uYWNjaSBzZXF1ZW5jZVxuKiBodHRwczovL2dpdGh1Yi5jb20vcnVzdC1sYW5nL3J1c3QtYnktZXhhbXBsZVxuKiBBcmd1bWVudHM6XG4qXG4qICogYG5gOiB1MzIgLSBUaGUgbnVtYmVyIG9mIHRoZSBGaWJvbmFjY2kgc2VxdWVuY2UgdG8gcmV0dXJuLlxuKlxuKiBSZXR1cm5zOlxuKlxuKiBUaGUgbnRoIG51bWJlciBpbiB0aGUgRmlib25hY2NpIHNlcXVlbmNlLlxuKiBAcGFyYW0ge251bWJlcn0gblxuKiBAcmV0dXJucyB7bnVtYmVyfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWIobikge1xuICAgIGNvbnN0IHJldCA9IHdhc20uZmliKG4pO1xuICAgIHJldHVybiByZXQgPj4+IDA7XG59XG5cbiJdLCJuYW1lcyI6WyJ3YXNtIiwiX193Ymdfc2V0X3dhc20iLCJ2YWwiLCJjYWNoZWRJbnQzMk1lbW9yeTAiLCJnZXRJbnQzMk1lbW9yeTAiLCJieXRlTGVuZ3RoIiwiSW50MzJBcnJheSIsIm1lbW9yeSIsImJ1ZmZlciIsImxUZXh0RGVjb2RlciIsIlRleHREZWNvZGVyIiwibW9kdWxlIiwicmVxdWlyZSIsImNhY2hlZFRleHREZWNvZGVyIiwiaWdub3JlQk9NIiwiZmF0YWwiLCJkZWNvZGUiLCJjYWNoZWRVaW50OE1lbW9yeTAiLCJnZXRVaW50OE1lbW9yeTAiLCJVaW50OEFycmF5IiwiZ2V0U3RyaW5nRnJvbVdhc20wIiwicHRyIiwibGVuIiwic3ViYXJyYXkiLCJoZWxsbyIsInJldHB0ciIsIl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIiLCJyMCIsInIxIiwiX193YmluZGdlbl9mcmVlIiwiZmliIiwibiIsInJldCJdLCJzb3VyY2VSb290IjoiIn0=