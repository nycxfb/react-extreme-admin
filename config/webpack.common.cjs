const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const WebpackBar = require('webpackbar')

const TerserPlugin = require("terser-webpack-plugin");
const APP_PATH = path.resolve(__dirname, "../src");
const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(__dirname, "../dist");

const getTitle = () => {
	if (process.env.NODE_ENV === "PRODUCTION") {
		return "";
	} else {
		return "dev-";
	}
};

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, "main.tsx")
	},
	resolve: {
		alias: {
			"@": APP_PATH
		},
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
	},
	cache: {
		// 将缓存类型设置为文件系统
		type: "filesystem",
		buildDependencies: {
			// 推荐在 webpack 配置中设置 cache.buildDependencies.config: [__filename] 来获取最新配置以及所有依赖项
			config: [__filename]
		}
	},
	optimization: {
		runtimeChunk: true,
		splitChunks: {
			chunks: "async", //all 全部 chunk
			//initial 入口 chunk, 对于异步导入的文件不处理
			//async 异步chunk, 只对异步导入文件处理
			minSize: 20000, //起步多少字节才开始做代码分割
			minRemainingSize: 0, //通过确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块
			minChunks: 1, // 当模块至少被引用多少次才会做代码分割
			maxAsyncRequests: 30, //最大同时加载的模块数
			maxInitialRequests: 30, //入口文件,同时加载的模块数
			enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值
			cacheGroups: {
				//cacheGroups 可以理解成分离chunks时的规则
				defaultVendors: {
					// defaultVendors 用于提取符合规则的所有node_modules
					test: /[\\/]node_modules[\\/]/, // 对node_modules的依赖起作用
					priority: -10, // 权限更高,优先分离,重要!!
					reuseExistingChunk: true //如果这个模块已经被打包过了,可忽略,不在打包
					// filename: 'vendors.js' //新增项, 分割代码命名
				},
				default: {
					//default 用于被多次引用的模块
					minChunks: 2, // 公共模块最少复用过几次
					priority: -20, // -10优先级别大于-20
					reuseExistingChunk: true, //如果这个模块已经被打包过了,可忽略,不在打包
					filename: "common.js" //新增项, 分割代码命名
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					compress: {
						drop_console: true
					}
				}
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.(tsx|js|ts)$/,
				use: "babel-loader?cacheDirectory=true",
				exclude: path.resolve(__dirname, "../node_modules")
			},
			{
				test: /\.css$|\.less$/i,
				// exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							esModule: false,
							importLoaders: 2,
							url: false
						}
					},
					"postcss-loader",
					{
						loader: "less-loader",
						options: {
							lessOptions: {
								javascriptEnabled: true
							}
						}
					},
					{
						loader: "style-resources-loader",
						options: {
							patterns: [path.resolve(__dirname, "../src/styles/global.less")]
						}
					}
				]
			},
			{
				test: /\.svg$/,
				loader: "svg-sprite-loader",
				include: path.resolve(__dirname, "../src/assets/svg"), // 处理指定svg的文件
				options: {
					symbolId: "icon-[name]"
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: "url-loader",
				options: {
					limit: 1000,
					name: "assets/image/[name].[hash:8].[ext]"
				}
			}
		]
	},
	plugins: [
		new WebpackBar(),
		new htmlWebpackPlugin({
			favicon: path.resolve(__dirname, "../favicon.ico"),
			title: getTitle() + "react-extreme-admin",
			template: path.resolve(__dirname, "../public/index.html"),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				collapseBooleanAttributes: true,
				removeScriptTypeAttributes: true
			}
		}),

		//拆分css 文件
		new MiniCssExtractPlugin({
			filename: "assets/css/[name].[contenthash:8].css",
			chunkFilename: "assets/css/[name].[contenthash:8].css"
		}),

		//内嵌js代码
		new ScriptExtHtmlWebpackPlugin({
			inline: /runtime~app\..*\.js$/
		})
	]
};
