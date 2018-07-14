import './NewsPanel.css';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

class NewsPanel extends React.Component {
    constructor() {
        super();
        this.state = {news: null};
    }

    componentDidMount() {
        this.loadMoreNews();
    }

    loadMoreNews() {
        this.setState({
            news: [
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

                }
            ]
        });
    }

    renderNews() {
        const news_list = this.state.news.map(news => {
            return (
                <a className='list-group-item' key={news.digest}>
                  <NewsCard news={news} />
                </a>
            );
        });

        return (
            <div className='container-fluid'>
                <div className='list-group'>
                  {news_list}
                </div>
            </div>
        )
    }

    render() {
        if (this.state.news) {
            return (
                <div>
                    `{this.renderNews()}`
                </div>
            );
        } else {
            return (
                <div id='msg-app-loading'>
                    Loading...
                </div>
            );
        }
    }
}

export default NewsPanel;