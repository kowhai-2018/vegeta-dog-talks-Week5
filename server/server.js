const path = require('path')
const express = require('express')

const port = process.env.PORT || 3000

const server = express()
server.use(express.static('public'))

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})


server.use(express.static(path.join(__dirname, '../public')))

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
