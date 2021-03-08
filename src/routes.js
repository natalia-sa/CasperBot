const express = require('express')
const bodyParser = require('body-parser');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const PostController = require('./controllers/PostController');
const BotController = require('./controllers/BotController');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));


routes.post('/user', SessionController.store);

routes.get('/user', SessionController.find);

routes.post('/post', PostController.store);

routes.get('/post', PostController.index);

routes.delete('/post', PostController.delete);

routes.get('/postTheme',PostController.filterByTheme);

routes.post('/webhook', BotController.botResponse)


module.exports = routes;
