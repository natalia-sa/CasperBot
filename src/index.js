const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

const cors = require('cors');

app.use(routes);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3333);