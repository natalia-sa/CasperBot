const express = require('express')
const bodyParser = require('body-parser');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));


routes.post('/user', SessionController.store);

routes.get('/user', SessionController.find);

routes.post('/post', PostController.store);

routes.get('/post', PostController.index);

routes.delete('/post', PostController.delete);

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
