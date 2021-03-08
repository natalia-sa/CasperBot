const PostController = require('./PostController');
const BotFunctions = require('../Util/Botfunctions');

module.exports = {
    
    async botResponse(req, res) {
        var intentName = req.body.queryResult.intent.displayName;
        
        let cards = [];
        var posts;

        if(intentName == "Default Welcome Intent - Política") {
            posts = await PostController.filterByTheme("Politica")

        } else if(intentName == "Default Welcome Intent - Entretenimento") {
            posts = await PostController.filterByTheme("Entretenimento")
            
        } else if(intentName == "Default Welcome Intent - Famosos") {
            posts = await PostController.filterByTheme("Famosos")
            
        } else if(intentName == "Default Welcome Intent - Esportes") {
            posts = await PostController.filterByTheme("Esportes")
            
        }
        Array.from(posts).forEach((post) => {
            cards.push(BotFunctions.createCard(post.title,post.description,post.imageUrl,post.link))} )
        res.json({"fulfillmentMessages": [{"payload": BotFunctions.createCarousel(cards)}]});
    },
}