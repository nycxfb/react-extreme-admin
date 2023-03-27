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
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 800000
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
        test: /\.css$|\.less$/i,
        exclude: /node_modules/,
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
