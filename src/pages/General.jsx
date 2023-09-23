import React, { useState, useEffect } from "react";
import dom from "../assets/images/dommy.png";
import {
  FirstNewsBx1,
  FirstNewsBx2,
  MainNewsWrapper,
} from "../components/Style";

function General() {
  const [newsData, setNewsData] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY_2;

  useEffect(() => {
    document.title = "News4u | General";

    async function fetchNewsData() {
      try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNewsData(data.articles.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchNewsData();
  }, []);

  return (
    <div>
      <MainNewsWrapper>
        <FirstNewsBx1>
          <div>
            <img
              src={dom}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
              alt="loading"
            />
            <span>
              <p>
                Democrats Overhaul Party’s Primary Calendar, Upending a
                Political Tradition
              </p>
              <p>Tim Grace | just now</p>
            </span>
          </div>
          <div>
            <div>
              <p>Philomena Cunk Is Weird Enough to Take on the World</p>
              <p>
                The new Netflix show “Cunk on Earth” looks like an ambitious BBC
                documentary. Until its fictional host, created by Charlie
                Brooker, starts to ask some deeply silly questions.
              </p>
            </div>
            <div>
              <img
                src={dom}
                style={{ width: "100%", height: "60px", objectFit: "cover" }}
                alt="loading"
              />
            </div>
          </div>
        </FirstNewsBx1>
        <FirstNewsBx2>
          {newsData.map((index) => (
            <div className="newsLeftFlex" key={index.id}>
              <div className="newLeftImage">
                <div className="position">
                  {index.urlToImage && (
                    <img
                      src={index.urlToImage}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                      alt={index.title}
                    />
                  )}
                  <p>{index.title}</p>
                </div>
                <div className="published">
                  {index.publishedAt.slice(0, 10)} |{" "}
                  {index.publishedAt.slice(11, 16)}
                </div>
              </div>

              <div className="newLeftDescription">
                <p>{index.description}</p>
                <a href={index.url}>Read More</a>
              </div>
            </div>
          ))}
        </FirstNewsBx2>
      </MainNewsWrapper>
    </div>
  );
}

export default General;
