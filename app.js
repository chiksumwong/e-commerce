var express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

var app = express();
var router = express.Router();
const routes = require('./routes/index')

// api urls
routes(router);
app.use('/api/v1', router);

// start server
let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port 3000: http://localhost:3000');
});