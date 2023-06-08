require('dotenv').config(); //importaciones de librerías módulo

const Server = require('./models/server');

const server = new Server();

server.listen();