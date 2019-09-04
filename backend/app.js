const http = require('http')

const express = require('express')
const path = require('path')
require('dotenv').config({'path':path.join(__dirname,'config/.env')})
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const WMainnetEvent = require('./service/WMainnetEvent')
const logger =require('./util/logger')

const defaultRouter = require('./routes/default')
const monitorRouter = require('./routes/monitor')
const apiRouter = require('./routes/api')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'dist')))

// app.use('/', defaultRouter)
app.use('/api', apiRouter)
app.use('/monitor', monitorRouter)



/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

WMainnetEvent.start()
/**
 * Create HTTP server.
 */
const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  logger.debug('Listening on ' + bind)
}