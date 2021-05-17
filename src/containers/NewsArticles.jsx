import React, { Component } from 'react'
import Controls from '../components/app/articles/Controls';
import ArticleList from '../components/app/articles/ArticleList';
import { fetchTopArticles, fetchArticlesByTopic } from '../services/newsApi';

export default class NewsArticles extends Component {
    state = {
        loading: true,
        articles: [],
        articleName: '', 
    };

    async componentDidMount() {
        const articles = await fetchTopArticles();
        this.setState({
            loading: false,
            articles,
        });
    }

    handleArticleNameChange = ({ target }) => {
        this.setState({ articleName: target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const articles = await fetchArticlesByTopic(this.state.articleName);
        this.setState({
            loading: false,
            articles,
        });
    };

    render() {
        const { loading, articles, articleName } = this.state;

        if (loading) return <h1>Loading...</h1>

        return (
            <>
                <Controls 
                    articleName={articleName}
                    onArticleNameChange={this.handleArticleNameChange}
                    onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles} />
            </>
        );
    }
}
