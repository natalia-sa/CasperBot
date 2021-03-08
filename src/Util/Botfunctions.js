
module.exports = {
  createCard(title, subtitle, img_url, url) {
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
  },
  
  createCarousel(cards) {
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
  },
  
}