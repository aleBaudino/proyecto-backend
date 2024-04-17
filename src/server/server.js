const express = require ('express');
const bodyParser = require ('body-parser');
const server = express();
server.use(express.json())
const router = require("../routes/routes")

server.use(express.json())

server.get('/', (_, res) => {
    res.send("Bienvenidos a mi servidor")
})

server.use('/', router)

module.exports = server;





