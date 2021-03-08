const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const { user_id } = req.headers;
        const posts = await Post.find({ user: user_id});

        return res.json(posts);
    },

    async delete(req, res) {
        const { _id } = req.headers;
        await Post.deleteOne({ _id });

        return res.json({message: "post deleted seccessfully"});
    },

    async store(req, res) {
        const { imageUrl, title, description, link, theme } = req.body;
        const { user_id } = req.headers;
        
        const post = await Post.create({
            imageUrl,
            title,
            description,
            link,
            theme,
            user: user_id
        })

        return res.json(post);
    },

    async filterByTheme(theme) {
        const posts = await Post.find({theme: theme});
        return res.json(posts);
    }
}