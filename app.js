const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session')
const routes = require('./routes/index')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}));

// api urls
const router = express.Router();
routes(router);
app.use('/api/v1', router);

// start server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port 3000: http://localhost:3000');
});