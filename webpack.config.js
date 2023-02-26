const path = require( 'path' );

const WasmPackPlugin = require( '@wasm-tool/wasm-pack-plugin' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		'rust-block': path.resolve( process.cwd(), `src/index` ),
		'view-scripts': path.resolve( process.cwd(), `src/view-scripts` ),
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.[tjmc]sx?$/,
				use: [ 'babel-loader' ],
				exclude: /node_modules/,
			},
			{
				test: /\.wasm/,
				type: 'javascript/auto',
				use: {
					loader: '@wasm-tool/wasi',
				},
			},
		],
		...defaultConfig.module,
	},
	experiments: {
		asyncWebAssembly: true,
		syncWebAssembly: true,
	},
	plugins: [
		...defaultConfig.plugins,
		new WasmPackPlugin( {
			crateDirectory: path.resolve( __dirname, 'crate' ),
			args: '--log-level warn',
		} ),
	],
};
