const chalk = require('chalk')
const stripAnsi = require('strip-ansi')

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

module.exports = {infoLog, errLog, doneLog}
