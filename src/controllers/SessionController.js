const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const { pin } = req.body;

        const user = await User.create({ name, pin});

        return res.json(user);
    }
}