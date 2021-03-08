const Post = require('../models/Post')

function createCard(title, subtitle, img_url, url) {
  return {
      "title": title,
      "image_url": img_url,
      "subtitle": subtitle,
        "buttons":[
          {
            "url": url,
            "type":"web_url",
            "title":"Visitar notícia"
          }             
      ]      
  }
}

function createCarousel(cards) {
  return {
      "facebook": {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type":"generic",
          "elements": cards
          }
        } 
      }
    }
}

// async function filterByTheme(theme) {
//   const posts = await Post.find({theme: theme});
//   return res.json(posts);
// }

module.exports = {
  createCarousel,
  createCard
}