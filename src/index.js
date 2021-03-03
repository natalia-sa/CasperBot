const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://casper1:casper1@omnistack.oq54w.mongodb.net/casperbot?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const cors = require('cors');

app.post('/webhook', (req, res) => {
    var intentName = req.body.queryResult.intent.displayName;
    
    if(intentName == "Default Welcome Intent - Política") {
        res.json({"fulfillmentText":"Notícias sobre poĺitica"});
        
    } else if(intentName == "Default Welcome Intent - Entretenimento") {
        res.json({"fulfillmentText":"Notícias sobre entretenimento"});
        
    } else if(intentName == "Default Welcome Intent - Famosos") {
        res.json({"fulfillmentText":"Notícias sobre famosos"});
        
    } else if(intentName == "Default Welcome Intent - Esportes") {
        res.json({"fulfillmentText":"Notícias sobre esportes"});
    }
})

app.use(routes);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3333);