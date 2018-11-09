require('dotenv').config()
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/scope/map', (req, res) => {
      const { key, fullscreen } = req.query
      const keyIsValid = process.env.APPROVED_APIKEYS.includes(key) // Accepts partial matches. Need to fix

      if (keyIsValid) {
        const actualPage = '/map'
        const queryParams = { key, fullscreen }
        app.render(req, res, actualPage, queryParams)
      } else {
        // TODO: Let user know API Key is not valid
        app.render(req, res, '/_error')
      }

    })

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })