const express = require('express')
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const bodyParser = require('body-parser');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.get('/',(req, res) => {
    return res.json({message: 'hello'});
})

routes.post('/users', SessionController.store);

routes.post('/webhook', (req, res) => {
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


module.exports = routes;
