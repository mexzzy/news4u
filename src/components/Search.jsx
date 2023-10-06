import React, { useState } from "react";
import { SearchWrapper } from "./Style";
import { FiX } from "react-icons/fi";
import logo from "../assets/images/4U NEWS Logo black-01.png";
function Search() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [searched, setSearched] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY_2;

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    fetchNews();
  };

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
      );
      const data = await response.json();
      setArticles(data.articles.slice(0, 6));
      setSearched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const close = () => {
    setSearched(false);
    setQuery("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchNews();
    }
  };
  return (
    <div>
      <SearchWrapper>
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for headlines"
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>search</button>
      </SearchWrapper>
      {searched && (
        <div className="searchWidth">
          <div className="ends">
            <h3>Searched for {query}</h3>
            <FiX style={{ cursor: "pointer" }} onClick={close} size={25} />
          </div>

          <div className="flex">
            {articles.map((index) => (
              <div className="newsLeftFlex" key={index.id}>
                <div className="newLeftImage">
                  <div className="position">
                    {index.urlToImage ? (
                      <img
                        src={index.urlToImage}
                        className="image"
                        alt={index.title}
                      />
                    ) : (
                      <>
                        <div className="imageUndefined">
                          <img src={logo} alt="logo" />
                        </div>
                      </>
                    )}
                    <p>{index.title}</p>
                  </div>
                  <div className="published">
                    <span>
                      {index.publishedAt.slice(0, 10)} |
                      {index.publishedAt.slice(11, 16)}
                    </span>
                    <a href={index.url}>Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
