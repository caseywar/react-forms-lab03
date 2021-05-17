const API_KEY = process.env.API_KEY;

// const mungeQuotes = (json) =>
//   json.map(({ title, author, url, urlToImage }) => ({
//     title,
//     author,
//     url,
//     urlToImage
//   }));

const mungeArticles = (json) => 
    json.map(({ title, author, url, urlToImage }) => ({
        title,
        author,
        url,
        urlToImage
}));


export const fetchTopArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const json = await res.json();
    
    return mungeArticles(json);
};


export const fetchArticlesByTopic = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const json = await res.json();

    return mungeArticles(json);
};