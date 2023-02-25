const chalk = require('chalk')
const stripAnsi = require('strip-ansi')

const DEFAULT_STATS_OPTION = {
  colors: true,
  modules: false, children: false, chunks: false,
  chunkModules: false,
  warnings: true,
  excludeAssets: [/(node modules|public|static|bin)/, /\.(map|hot-update)(\?.*)?$/]
}

function log(message, tag) {
  console.log(
    message.split('\n').map((line, index) => (index === 0 ? `${tag} ${line}` : line.padStart(stripAnsi(tag).length))).join('\n')
  )
}

const infoLog = function (info) {
  log(info, chalk.bgBlue.white('INFO'))
}
const errLog = function (error) {
  log(error, chalk.bgRed.white('ERROR'))
}
const doneLog = function (info) {
  log(info, chalk.bgGreen.white('DONE'))
}

const statsLog = function (stats, options) {
  if (!stats) return
  const splitter = new Array(20).join('-')
  let log = chalk.yellow.bold(`\n${splitter} Compiler Process ${splitter} \n\n`)
  const statsString = stats.toString(options ? options : DEFAULT_STATS_OPTION)
  statsString.split(/\r?\n/).forEach(line => {
    log += `${line}\n`
  })

  log += chalk.yellow.bold(`\n${new Array(57).join('-')}\n`)
  console.clear()
  console.log(log)
}

module.exports = {infoLog, errLog, doneLog, statsLog}
