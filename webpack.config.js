const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    // mode: 'development',
    entry: {
        app: [
            '@babel/polyfill',
            './frontend/src/main.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './htdocs/js/'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './frontend/src'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    exclude: /(node_modules|bower_components)/,
                    loaders: {
                        js: [
                            {
                                loader: 'babel-loader',
                                // exclude: /(node_modules|bower_components)/,
                                options: {
                                    // cacheDirectory: 'cache',
                                    presets: ['@babel/preset-env']
                                }
                            }
                        ],
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
            {
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},
        ]
    },
}
