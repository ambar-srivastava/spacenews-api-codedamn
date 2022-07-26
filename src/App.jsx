import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => res.json())
      .catch((err) => err)
      .then((data) => {
        setNewsList(data);
        console.log(data);
      })
      .catch((error) => error);
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((val, index) => (
          <div
            key={index}
            className="article"
            onClick={() => {
              window.location.href = val.url;
            }}
          >
            <h2>{val.title}</h2>
            <img src={val.imageUrl} alt="pic" />
            <p>{val.summary}</p>
            <h4>{val.publishedAt}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
