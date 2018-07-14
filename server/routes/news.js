var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // console.log('news get called.')
    news = [
        {
            'url': 'https://us.cnn.com/2018/07/13/entertainment/scarlett-johansson-film-exit/index.html',
            'title': "Scarlett Johansson won't play trans man in film after backlash",
            'description': "Scarlett Johansson has opted to withdraw from a film in which she was set to play a transgender man after her casting drew criticism from the LGBTQ community.",
            'source': 'cnn',
            'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/180713132237-scarlett-johansson-medium-tease.jpg',
            'digest': '3RjuEomJo2601syZbU70HA==\n',
            'reason': 'Recommend'
        },
        {
            'title': "Republicans praise Page's testimony one day after battle with Strzok",
            'description': "Former FBI lawyer Lisa Page was questioned behind closed doors on Friday.",
            'url': "https://us.cnn.com/2018/07/13/politics/lisa-page-interview-closed-doors/index.html", 
            'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/180713092148-01-lisa-page-0713-medium-tease.jpg',
            'source': 'cnn',
            'digest': '3RjuEomJo2601syZbUd0HA==\n',
            'reason': 'Hot',
            'time': 'Today'

        },
        {
            'title': "Republicans praise Page's testimony one day after battle with Strzok",
            'description': "Former FBI lawyer Lisa Page was questioned behind closed doors on Friday.",
            'url': "https://us.cnn.com/2018/07/13/politics/lisa-page-interview-closed-doors/index.html", 
            'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/180713092148-01-lisa-page-0713-medium-tease.jpg',
            'source': 'cnn',
            'digest': '3RjuEomJo2601syZbUd0Ho==\n',
            'reason': 'Hot',
            'time': 'Today'

        },
        {
            'url': 'https://us.cnn.com/2018/07/13/entertainment/scarlett-johansson-film-exit/index.html',
            'title': "Scarlett Johansson won't play trans man in film after backlash",
            'description': "Scarlett Johansson has opted to withdraw from a film in which she was set to play a transgender man after her casting drew criticism from the LGBTQ community.",
            'source': 'cnn',
            'urlToImage': 'https://cdn.cnn.com/cnnnext/dam/assets/180713132237-scarlett-johansson-medium-tease.jpg',
            'digest': '3RjuEomJo2601syZbU70H7==\n',
            'reason': 'Recommend'
        }       
    ];
    res.json(news);
});

module.exports = router;