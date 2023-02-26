extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

/// 1. The `#[wasm_bindgen]` attribute tells the Rust compiler to compile the function as a WebAssembly
/// function.
/// 2. The `pub` keyword tells the Rust compiler to make the function public.
/// 3. The `fn` keyword tells the Rust compiler that this is a function.
/// 4. The `hello` keyword is the name of the function.
/// 5. The `()` tells the Rust compiler that this function takes no arguments.
/// 6. The `-> String` tells the Rust compiler that this function returns a string.
/// 7. The `return` keyword tells the Rust compiler to return the string
/// 
/// Returns:
/// 
/// A string.
#[wasm_bindgen]
pub fn hello() -> String {
	return String::from("Howdy, Wordpress!");
}


/// It takes a number, and returns the nth number in the Fibonacci sequence
/// https://github.com/rust-lang/rust-by-example
/// Arguments:
/// 
/// * `n`: u32 - The number of the Fibonacci sequence to return.
/// 
/// Returns:
/// 
/// The nth number in the Fibonacci sequence.
#[wasm_bindgen]
pub fn fib(n: u32) -> u32 {
	let mut first: u32;
	let mut second: u32 = 0;
	let mut current: u32 = 1;

	let mut i: u32 = 1;

	while i < n {
		first = second;

		second = current;

		current = first + second;

		i = i + 1;
	}
	return current;
}
