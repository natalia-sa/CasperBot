const PostController = require('./PostController');
const BotFunctions = require('../Util/Botfunctions');

module.exports = {
    
    async botResponse(req, res) {
        var intentName = req.body.queryResult.intent.displayName;

        if(intentName == "Default Welcome Intent - Política") {
            var posts = await PostController.filterByTheme("Politica")
            console.log(posts);
            let cards = [];
            
            Array.from(posts).forEach((item) => {
                cards.push(BotFunctions.createCard(item.title,item.description,item.imageUrl,item.link)
            );
            })
            res.json({"fulfillmentMessages": [{"payload": BotFunctions.createCarousel(cards)}]});
            

        } else if(intentName == "Default Welcome Intent - Entretenimento") {
            res.json({"fulfillmentText":"Notícias sobre entretenimento"});
            
        } else if(intentName == "Default Welcome Intent - Famosos") {
            res.json({"fulfillmentText":"Notícias sobre famosos"});
            
        } else if(intentName == "Default Welcome Intent - Esportes") {
            res.json({"fulfillmentText":"Notícias sobre esportes"});
        }
    },
}