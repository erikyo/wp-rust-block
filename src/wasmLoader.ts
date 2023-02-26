/**
 * It imports the wasm module, and if it fails, it logs the error
 * @returns A promise that resolves to the module.
 */
export async function getModule() {
	return await import( './wasm/hello-wasm/pkg' ).catch( ( err ) =>
		console.log( err )
	);
}
