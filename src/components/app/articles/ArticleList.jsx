import React from 'react'
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
    const articleElements = articles.map((article) => (
        <li key={`${article.title}`}>
            <Article
                title={article.title}
                author={article.author}
                url={article.url}
                urlToImage={article.urlToImage}
            />
        </li>
    ));
return (
    <ul aria-label="articles">
        {articleElements}
    </ul>
)
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        url: PropTypes.string.isRequired,
        urlToImage: PropTypes.string,
        })
    ).isRequired,
}

export default ArticleList

