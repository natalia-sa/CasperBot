const PostController = require('./PostController');
const BotFunctions = require('../Util/Botfunctions');

module.exports = {
    
    async botResponse(req, res) {
        var theme = req.body.queryResult.queryText;
        
        let cards = [];
        var posts = await PostController.filterByTheme(theme)

        Array.from(posts).forEach((post) => {
            cards.push(BotFunctions.createCard(post.title,post.description,post.imageUrl,post.link))} )
        res.json({"fulfillmentMessages": [{"payload": BotFunctions.createCarousel(cards)}]});
    },
}