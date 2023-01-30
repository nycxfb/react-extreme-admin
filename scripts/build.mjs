import webpack from 'webpack'
import {merge} from 'webpack-merge'
import {oraPromise} from 'ora'
import baseConfig from '../config/webpack.common.cjs'
import prodConfig from '../config/webapck.prod.cjs'


const compilesTasks = Promise.all([
  new Promise((resolve, reject) => {
    webpack(merge(baseConfig, prodConfig), (err, stats) => {
      if (err) {
        // errLog(err.message)
        return reject(false)
      }

      if (stats && stats.hasErrors()) {
        return reject(false)
      }
      resolve(true)
    })
  })
])

oraPromise(compilesTasks, {
  text: "正在编译代码",
  successText: "编译完成",
  failText: "编译失败，请检查错误原因"
})

