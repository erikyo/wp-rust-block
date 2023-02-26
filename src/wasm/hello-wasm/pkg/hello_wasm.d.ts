/* tslint:disable */
/* eslint-disable */
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
export function hello(): string;
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
export function fib(n: number): number;
