/* globals wp */

/* adds the frontend styles to bundle */
import './style/style.scss';

import { useBlockProps } from '@wordpress/block-editor';
import type { BlockSaveProps } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import { TextDef } from './types';

/**
 * The save function defines the way in which the different attributes should be combined into the final markup, which is then serialized into post_content.
 *
 * @param    props
 * @param    props.attributes - the block attributes
 * @function Object() { [native code] }
 */
function Save( { attributes }: BlockSaveProps< TextDef > ): JSX.Element {
	const blockProps = useBlockProps.save( {
		className: 'block-wasm',
	} );

	return (
		<div { ...blockProps }>
			<p>{ attributes.message }</p>
			<input value={ attributes.num } />
			<input
				type={ 'button' }
				className={ 'button primary' }
				value={ __( 'Apply fibonacci', 'boilerplate' ) }
			/>
		</div>
	);
}

export default Save;
