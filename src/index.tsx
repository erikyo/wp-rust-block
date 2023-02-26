import { registerBlockType } from '@wordpress/blocks';

/* adds styles to bundle */
import './style/style-admin.scss';

import blockConfig from '../block.json';

import Edit from './edit';
import Save from './save';

const jsonData = blockConfig;

/** Registering the block with the name of the block and the attributes of the block. */
registerBlockType( jsonData.name, {
	...jsonData,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save: Save,
	icon: (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15">
			<path
				fill="#000"
				d="M7.174.115a.521.521 0 0 1 .652 0l1.178.95 1.483-.357a.516.516 0 0 1 .588.276l.64 1.355 1.494.307c.24.05.411.258.407.498l-.027 1.492 1.211.91a.492.492 0 0 1 .145.621L14.26 7.5l.686 1.333a.49.49 0 0 1-.145.62l-.726.547h-2.478a.506.506 0 0 1-.512-.5 2.47 2.47 0 0 0-.861-1.87c.521-.363.86-.958.86-1.63 0-1.105-.916-2-2.047-2H1.399l-.015-.856a.503.503 0 0 1 .407-.498l1.495-.307.639-1.355a.516.516 0 0 1 .588-.276l1.483.357 1.178-.95Z"
			/>
			<path
				fill="#000"
				d="M.926 5 .2 5.546a.492.492 0 0 0-.145.621L.74 7.5.055 8.833a.492.492 0 0 0 .145.62L.926 10h2.99V5H.926Z"
			/>
			<path
				fill="#000"
				d="m1.4 11-.016.856a.503.503 0 0 0 .407.498l1.495.307.639 1.355c.103.218.35.334.588.276l1.483-.357 1.178.95a.52.52 0 0 0 .652 0l1.178-.95 1.483.357a.516.516 0 0 0 .588-.276l.64-1.355 1.494-.307a.504.504 0 0 0 .407-.498L13.6 11h-2.005c-.848 0-1.536-.672-1.536-1.5S9.372 8 8.524 8H4.94v2h2.048v1H1.399Zm7.636-4H4.94V5h4.096c.565 0 1.024.448 1.024 1S9.6 7 9.036 7Z"
			/>
		</svg>
	),
	supports: {
		align: true,
		className: true,
		spacing: {
			margin: true, // Enable margin UI control.
			padding: true, // Enable padding UI control.
			blockGap: true, // Enables block spacing UI control.
		},
	},
	attributes: {
		message: {
			type: 'string',
			default: '',
		},
		num: {
			type: 'number',
			default: 7,
		},
	},
} );
