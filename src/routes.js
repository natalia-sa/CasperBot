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

routes.get('/postTheme',PostController.filterByTheme);

routes.post('/webhook', (req, res) => {
    var intentName = req.body.queryResult.intent.displayName;
    
    if(intentName == "Default Welcome Intent - Política") {
        res.json({
            "recipient":{
                "id":"727672647895809"
              },
              "message":{
                "attachment":{
                  "type":"template",
                  "payload":{
                    "template_type":"generic",
                    "elements":[
                       {
                        "title":"Welcome!",
                        "image_url":"https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/08/O-que-e-url.png",
                        "subtitle":"We have the right hat for everyone.",
                        "default_action": {
                          "type": "web_url",
                          "url": "https://petersfancybrownhats.com/view?item=103",
                          "webview_height_ratio": "tall",
                        },
                        "buttons":[
                          {
                            "type":"web_url",
                            "url":"https://petersfancybrownhats.com",
                            "title":"View Website"
                          }              
                        ]      
                      }
                    ]
                  }
                }
              }
            }
                          
                     
        );
        
    } else if(intentName == "Default Welcome Intent - Entretenimento") {
        res.json({"fulfillmentText":"Notícias sobre entretenimento"});
        
    } else if(intentName == "Default Welcome Intent - Famosos") {
        res.json({"fulfillmentText":"Notícias sobre famosos"});
        
    } else if(intentName == "Default Welcome Intent - Esportes") {
        res.json({"fulfillmentText":"Notícias sobre esportes"});
    }
})


module.exports = routes;
