const PORT = 5002

const { log, warn } = console
const db = require('./lib/db')

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const cors = require('cors')
const app = express()

// const RateLimit = require('express-rate-limit')
// const limiter = new RateLimit({
//   windowMs: 1000,
//   max: 5000,
//   delayMs: 0
// })

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
}))
// app.use(limiter)

// app.use(require('./utils/validateSession'))
app.use(require('./router'))

// app.use((error, request, response, next) => {
//   Raven.captureException(error)
//   const { message, code = 500 } = error
//   response.status(code).json({ status: code, message })
// })

const server = app.listen(PORT, () => console.log(`Http server listening on ${PORT}...`))

const onExit = () => {
  log('Closing http server..')
  server.close(() => {
    log('Http server closed')
    // boolean means [force], see in mongoose doc
    db.connection.close(false, () => {
      log('MongoDb connection closed')
      process.exit(0)
    })
  })
}

process.on('SIGTERM', onExit)
      .on('exit', onExit)
      .on('SIGINT', onExit)
      .on('SIGUSR1', onExit)
      .on('SIGUSR2', onExit)
      .on('uncaughtException', onExit)