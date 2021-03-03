const express = require('express')
const routes = express.Router();
const SessionController = require('./controllers/SessionController');

routes.get('/',(req, res) => {
    return res.json({message: 'hello'});
})

routes.post('/users', SessionController.store);


module.exports = routes;
