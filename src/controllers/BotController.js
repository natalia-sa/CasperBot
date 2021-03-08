const PostController = require('./PostController');
const BotFunctions = require('../Util/Botfunctions');

module.exports = {
    
    async botResponse(req, res) {
        var intentName = req.body.queryResult.intent.displayName;
        
        if(intentName == "Default Welcome Intent - Política") {
            var posts = await PostController.filterByTheme("Politica")
            let cards = [];
            
            Array.from(posts).forEach((post) => {
                cards.push(BotFunctions.createCard(post.title,post.description,post.imageUrl,post.link))} )
            res.json({"fulfillmentMessages": [{"payload": BotFunctions.createCarousel(cards)}]});
            

        } else if(intentName == "Default Welcome Intent - Entretenimento") {
            var posts = await PostController.filterByTheme("Entretenimento")
            let cards = [];
            
            Array.from(posts).forEach((post) => {
                cards.push(BotFunctions.createCard(post.title,post.description,post.imageUrl,post.link))} )
            res.json({"fulfillmentMessages": [{"payload": BotFunctions.createCarousel(cards)}]});
            
        } else if(intentName == "Default Welcome Intent - Famosos") {
            var posts = await PostController.filterByTheme("Famosos")
            let cards = [];
            
            Array.from(posts).forEach((post) => {
                cards.push(BotFunctions.createCard(post.title,post.description,post.imageUrl,post.link))})
            res.json({"fulfillmentMessages": [{"payload": BotFunctions.createCarousel(cards)}]});
            
        } else if(intentName == "Default Welcome Intent - Esportes") {
            var posts = await PostController.filterByTheme("Esportes")
            let cards = [];
            
            Array.from(posts).forEach((post) => {
                cards.push(BotFunctions.createCard(post.title,post.description,post.imageUrl,post.link)
            );})
            res.json({"fulfillmentMessages": [{"payload": BotFunctions.createCarousel(cards)}]});
        }
    },
}