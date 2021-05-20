import React from 'react'
import Article from './Article';

const ArticleList = ({ articles }) => {
    const articleElements = articles.map((article) => (
        <li key={`${article.title}`} aria-label='article'>
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


export default ArticleList

