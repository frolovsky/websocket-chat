const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const http = require('http');
const WebSocket = require('ws');

// temporary solution for keep data. Next time i connect MongoDB
let MESSAGES = [];

const app = express();
app.use(cors({
  credentials: true,
  origin: ['http://localhost:8080']
}))

const server = http.createServer(app)
const webSocketServer = new WebSocket.Server({ server })

webSocketServer.on('connection', ws => {
  ws.on('message', m => {
    MESSAGES.push(JSON.parse(m))
    webSocketServer.clients.forEach(c => c.send(JSON.stringify(MESSAGES)))
  })
  ws.on('error', e => ws.send(e))
  ws.send(JSON.stringify(MESSAGES))
})

server.listen(config.port, () => {
  console.log(`Server is starting on port: ${config.port}`)
})