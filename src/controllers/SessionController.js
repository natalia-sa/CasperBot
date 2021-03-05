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
    },

    async find(req, res) {
        const { pin } = req.headers;
        

        let user = await User.findOne({ pin });

        if(!user) {
            return res.status(401).send({ error: "Unauthorized" });

        } else {
            return res.json(user);
        }

    }
}