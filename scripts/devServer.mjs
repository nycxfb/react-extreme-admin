import webpack from 'webpack'
import {merge} from 'webpack-merge'
import devServer from 'webpack-dev-server'
import baseConfig from '../config/webpack.common.cjs'
import devConfig from "../config/webpack.dev.cjs"

import {infoLog, errLog, doneLog} from "./utils/log.cjs"

infoLog('>本地开发服务启动中')
const compiler = webpack(merge(baseConfig, devConfig))
const server = new devServer({}, compiler)

compiler.hooks.watchRun.tap('serve', () => {
  infoLog('>代码编译中')
})

server.startCallback(err => {
  if (err) {
    errLog(err.message)
    process.exit(0)
  }
  doneLog('本地开发服务准备就绪')
})
