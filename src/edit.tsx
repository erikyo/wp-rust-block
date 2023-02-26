import { useBlockProps } from '@wordpress/block-editor';
import type { BlockEditProps } from '@wordpress/blocks';
import { Button, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { TextDef } from './types';
import { getModule } from './wasmLoader';
export let api = false;

/**
 * The edit function describes the structure of your block in the context of the editor.
 *
 * @param props
 * @param props.attributes    - the block attributes
 * @param props.setAttributes - the setState function
 *
 */
export default function Edit( {
	attributes,
	setAttributes,
}: BlockEditProps< TextDef > ): JSX.Element {
	const { message, num } = attributes;

	/* Loading the wasm module and setting the api variable to the module. */
	useEffect( () => {
		getModule().then( ( module ) => {
			api = module;
			setAttributes( { message: api.hello() } );
		} );
	}, [] );

	return (
		<div { ...useBlockProps() }>
			<TextControl
				label={ __( 'Message', 'boilerplate' ) }
				value={ message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
			/>

			<TextControl
				label="input-fibonacci"
				value={ num }
				onChange={ ( v ) => setAttributes( { num: parseInt( v ) } ) }
			/>

			<Button
				text={ 'Apply fibonacci' }
				variant="secondary"
				onClick={ () =>
					setAttributes( {
						num: api.fib( num ),
					} )
				}
			/>
		</div>
	);
}
