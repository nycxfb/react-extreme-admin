const path = require("path");
const {posix} = path;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");

const BUILD_PATH = path.resolve(__dirname, "../dist");
const productionPlugins = []

if (process.env.NODE_ENV === "ANALYSE") {
  productionPlugins.push(new BundleAnalyzerPlugin({
    generateStatsFile: false
  }))
}

module.exports = {
  mode: "production",
  output: {
    path: BUILD_PATH,
    filename: posix.join("assets", "js/chunk-[name].[contenthash:8].js"),
    chunkFilename: posix.join("assets", "js/chunk-[name].[contenthash:8].js"),
    clean: true,
    publicPath: "./"
  },
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: "initial", //all 全部 chunk
      //initial 入口 chunk, 对于异步导入的文件不处理
      //async 异步chunk, 只对异步导入文件处理
      minSize: 100 * 1024, //起步多少字节才开始做代码分割
      maxSize: 1024,
      minRemainingSize: 0, //通过确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块
      // minChunks: 1, // 当模块至少被引用多少次才会做代码分割
      maxAsyncRequests: 6, //最大同时加载的模块数
      maxInitialRequests: 4, //入口文件,同时加载的模块数
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 700*1024, // 强制执行拆分的体积阈值
      cacheGroups: {
        vendors: {
          name: `vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
          minChunks: 1
        },
        app: {
          name: `app`,
          test: /[\\/]src[\\/]/,
          priority: -15,
          minChunks: 2,
          chunks: 'initial'
        },
        common: {
          name: `common`,
          minChunks: 2,
          priority: -20,
          chunks: "all",
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$|\.less$/i,
        exclude: path.resolve(__dirname, "../node_modules"),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              importLoaders: 2
            }
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                esModule: false,
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash:8].css",
      chunkFilename: "assets/css/[name].[contenthash:8].css"
    }),
    ...productionPlugins]
};
