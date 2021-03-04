const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name } = req.body;

        const { pin } = req.body;

        let user = await User.findOne({ name });

        if(!user) {
            user = await User.create({ name, pin});
        }
        

        return res.json(user);
    }
}