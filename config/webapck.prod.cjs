const path = require("path");
const { posix } = path;
const BUILD_PATH = path.resolve(__dirname, "../dist");
const testPlugin = require("./plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isAnalyse = () => {
	if (process.env.NODE_ENV === "ANALYSE") {
		return new BundleAnalyzerPlugin({
			generateStatsFile: false
		});
	} else {
		return () => {};
	}
};

module.exports = {
	mode: "production",
	output: {
		path: BUILD_PATH,
		filename: posix.join("assets", "js/[name].[contenthash:8].js"),
		chunkFilename: posix.join("assets", "js/[name].[contenthash:8].js"),
		clean: true,
		publicPath: "./"
	},
	devtool: "cheap-module-source-map",
	performance: {
		maxEntrypointSize: 400000,
		maxAssetSize: 800000
	},
	plugins: [isAnalyse()]
};
