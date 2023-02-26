import { getModule } from './wasmLoader';

export let api = false;

onload = () => {
	if ( ! api ) {
		getModule()
			.then( ( module ) => {
				/* store the exported functions into an object */
				api = module;

				/* Store the message value */
				const msg = api.hello();

				/* Set the inner text of the p with the value provided with the wasm hello function */
				document
					.querySelectorAll( '.block-wasm p' )
					.forEach( ( el ) => {
						el.textContent = msg;
					} );
			} )
			.catch( ( err ) => console.log( err ) );

		/* On click get the value of the input and fire the fibonacci function */
		document
			.querySelectorAll( '.block-wasm input.button' )
			.forEach( ( el ) => {
				el.onclick = () => {
					const input = el.previousSibling;
					input.value = parseInt( api.fib( input.value ), 10 );
				};
			} );
	}
};
