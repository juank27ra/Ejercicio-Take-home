require('dotenv').config()
require('./mongoDb')
const express = require('express');
const next = require('./middleware/next');
const router = require('./routes/index.js')

const server = express();


server.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/inputs', router);

server.use(next)


module.exports = server;