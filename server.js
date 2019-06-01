const express = require('express');
const helmet = require('helmet');

const dishRouter = require('./routers/dishes.js');
const recipeRouter = require('./routers/recipes.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishRouter);
server.use('/api/recipes', recipeRouter);


server.get('/', (req, res) => {
  res.status(200).json({ message: "Hi!" });
});

module.exports = server;
