export const fetchTopArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.api_key}`);
   
    const { articles } = await res.json();

    return articles.map((article) => ({
        title: article.title,
        author: article.author,
        urlToImage: article.urlToImage,
        url: article.url,
    }));
};


export const fetchArticlesByTopic = async (articleName) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${articleName}&apiKey=${process.env.api_key}`);

    const { articles } = await res.json();

    return articles.map((article) => ({
        title: article.title,
        author: article.author,
        description: article.description,
        link: article.url,
    }));
};