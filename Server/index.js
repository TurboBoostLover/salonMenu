const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'c0e7a2d7410049cea6702e3cc737f36f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
rollbar.critical('burning')
rollbar.debug('who knows')

app.get('/', (req, res) => {
    rollbar.info('Someone is on the site.')
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.js'))
})

try {blah()}
catch (error) {
    rollbar.error(error)
}

app.get('/errorbutton', (req, res) => {
    res.send('Here is an error')
    rollbar.warning('Someone wants a error')
})

const port = process.env.PORT || 6900

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})