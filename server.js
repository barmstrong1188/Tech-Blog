//dependencies
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

//start the server
app.listen(PORT, () => {
    console.log('Server listening on : http://localhost:' + PORT);
});