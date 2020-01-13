const path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CompressionPlugin = require("compression-webpack-plugin");
var webpack = require("webpack");
module.exports = {

	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
    },
	module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
				'css-loader',
				'sass-loader'
            ]
        }, {
			test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'application/font-woff'
					}
				}
			]
		}, {
			test: /\.(ttf|eot|svg|jpg|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: [
				{ loader: 'file-loader' }
			]
		}]
	},
	plugins: [
		new BundleAnalyzerPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new CompressionPlugin({
			filename: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		})
	],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
		inline: true,
		port: 8080
    }
};
