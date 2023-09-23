import { useEffect, useState } from "react";
import axios from "axios";

function World() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    document.title = "News4u | World";
  }, []);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY_2;
    const query = "World";
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${formattedDate}&sortBy=popularity&apiKey=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setNewsData(response.data.articles.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, [formattedDate]);

  return (
    <div>
      <div className="newsFlexBox">
        {newsData.map((index) => (
          <div key={index.id} className="red">
            <p>
              {index.publishedAt.slice(0, 10)} |{" "}
              {index.publishedAt.slice(11, 16)}
            </p>
            <div>
              {index.urlToImage && (
                <img src={index.urlToImage} alt={index.title} />
              )}
              <span>{index.title}</span>
            </div>
            <div className="queryDescription">{index.content}</div>
            <div className="queryAnchor">
              <a href={index.url}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default World;
