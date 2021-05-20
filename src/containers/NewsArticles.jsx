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

    handleArticleNameChange = (e) => {
        this.setState({ articleName: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const updatedArticles = await fetchArticlesByTopic(this.state.articleName);
        await this.setState({
            loading: false,
            articles: updatedArticles,
        });
    };

    render() {

        if (this.state.loading) return <h1>Loading...</h1>

        return (
            <>
                <Controls 
                    articleName={this.state.articleName}
                    onArticleNameChange={this.handleArticleNameChange}
                    onSubmit={this.handleSubmit}
                />
                <ArticleList articles={this.state.articles} />
            </>
        );
    }
}
