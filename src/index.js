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
    var quickReply = req.entry.messaging.message.text;
    var intentName = req.body.queryResult.intent.displayName;

    if(quickReply == "Esportes") {
        return res.json({"fulfillmentText": "esportes"})
    } 
    // else {
    //     return res.json({
    //         "fulfillmentMessages": [
    //           {
    //             "quickReplies": {
    //               "title": "Sobre qual tema você deseja se atualizar?",
    //               "quickReplies": [
    //                 "Esportes",
    //                 "Política",
    //                 "Entretenimento",
    //                 "Famosos"
    //               ]
    //             },
    //             "platform": "FACEBOOK"
    //           },
    //           {
    //             "text": {
    //               "text": [
    //                 "Olá! Eu sou o Casper, seu assistente virtual. Aqui trago as mais variadas notícias para você se atualizar."
    //               ]
    //             }
    //           }
    //         ] 
    //       }  
    //   )
    // }
    
})

app.listen(process.env.PORT || 3333);