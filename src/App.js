import { Button } from '@material-ui/core';
import './App.css';
import News from './Component/News/News'
import React, { useEffect, useState } from 'react';
import Header from './Component/Header/Header';

function App() {
  const [articles , setArticles] = useState([]);
  useEffect( () =>{
     const url ="http://newsapi.org/v2/top-headlines?country=us&apiKey=f5fe2bccfe4948f6aadfea6c97ab13bf"
      fetch(url)
      .then (res=> res.json())
      .then (data => setArticles(data.articles))

  }, [])


  return (
    <div >
      <Header></Header>
       <h4>   Breaking News Top {articles.length}</h4>
       {
         articles.map(article =><News article={article}></News>)
       }
    </div>
  );
}

export default App;
