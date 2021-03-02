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
    return res.json({
          "fulfillmentMessages": [
            {
              "quickReplies": {
                "title": "Sobre qual tema você deseja se atualizar?",
                "quickReplies": [
                  "Esportes",
                  "Política",
                  "Entretenimento",
                  "Famosos"
                ]
              },
              "platform": "FACEBOOK"
            },
            {
              "text": {
                "text": [
                  "Olá! Eu sou o Casper, seu assistente virtual. Aqui trago as mais variadas notícias para você se atualizar."
                ]
              }
            }
          ] 
        }  
    )
})

app.listen(process.env.PORT || 3333);