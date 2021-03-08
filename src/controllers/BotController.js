const PostController = require('./PostController');

module.exports = {
    async botResponse(req, res) {
        var intentName = req.body.queryResult.intent.displayName;

        if(intentName == "Default Welcome Intent - Política") {
            res.json({"fulfillmentText":"Notícias sobre politica"});
            
        } else if(intentName == "Default Welcome Intent - Entretenimento") {
            res.json({"fulfillmentText":"Notícias sobre entretenimento"});
            
        } else if(intentName == "Default Welcome Intent - Famosos") {
            res.json({"fulfillmentText":"Notícias sobre famosos"});
            
        } else if(intentName == "Default Welcome Intent - Esportes") {
            res.json({"fulfillmentText":"Notícias sobre esportes"});
        }
    },
}