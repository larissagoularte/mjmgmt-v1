const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const DBconnect = require('./db');

const app = express(); 
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use('/', routes);

DBconnect();

app.get('/', (req, res) => {
    res.send('Welcome to MJManagement.');
});

app.listen(PORT, () => {
    console.log('Server running.')
})