import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d04b76268ec14571b63af2ca4de5b3f1';
        fetch (url)
        .then(response => response.json())
        .then(data =>setArticles(data.articles))
    },[])
    useEffect(()=>{},[])
    return (
        <div>
            <h1>This is my articls {articles.length}</h1>
            {
                articles.map(article=><News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;