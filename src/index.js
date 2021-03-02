const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req, res) => {
    return res.json({message: 'hello'});
})

app.post('/webhook', (req, res) => {
    return res.json({"fulfillmentText": "text"})
})
app.listen(process.env.PORT || 3333);