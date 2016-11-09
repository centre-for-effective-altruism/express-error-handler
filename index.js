function errorHandler (logging) {
  let chalk = false
  if (logging) chalk = require('chalk')
  return function errorHandlerMiddleware (err, req, res, next) {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'
    // development-specific handling
    if (logging) {
      const log = `${status}: ${err.message}`
      if (status >= 400 && status < 500) {
        console.warn(chalk.yellow.bold(log))
      } else if (status >= 500) {
        `${status}: ${err.message}`
        console.error(chalk.red.bold(log))
        if (err.stack) console.trace(chalk.red(err.stack))
      }
    }
    // send response in both development and production
    res
      .status(status)
      .json({
        status,
        message
      })
  }
}

module.exports = errorHandler
