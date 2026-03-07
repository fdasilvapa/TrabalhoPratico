const express = require('express');
const cors = require('cors');
const loginRoutes = require('./routes/login');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas
app.use('/login', loginRoutes);

module.exports = app;
