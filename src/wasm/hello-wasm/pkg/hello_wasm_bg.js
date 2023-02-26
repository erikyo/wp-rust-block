let wasm;
export function __wbg_set_wasm(val) {
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

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

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
export function hello() {
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
export function fib(n) {
    const ret = wasm.fib(n);
    return ret >>> 0;
}

