const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index')
const errorHandler = require('./error_handler')
const jwt = require('./jwt')

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use(jwt());

// global error handler
app.use(errorHandler);

// api urls
const router = express.Router();
routes(router);
app.use('/api/v1', router);

// start server
const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
  console.log('listening on port 3000: http://localhost:3000');
});

module.exports = server;