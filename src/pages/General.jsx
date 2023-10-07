import React, { useState, useEffect } from "react";
import dom from "../assets/images/dommy.png";
import {
  FirstNewsBx1,
  FirstNewsBx2,
  IsLoadingpage,
  MainNewsWrapper,
} from "../components/Style";
import Lottie from "lottie-react";
import IconAnimated from "../assets/images/wired-outline-726-wireless-connection.json";

function General() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLoading, setpageloading] = useState(true);

  const apiKey = process.env.REACT_APP_API_KEY_2;

  setTimeout(() => {
    setpageloading(false);
  }, 5000);

  useEffect(() => {
    document.title = "News4u | General";

    async function fetchNewsData() {
      setIsLoading(true);
      try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setNewsData(data.articles.slice(0, 10));
        setTimeout(() => {
          setIsLoading(false);
        }, 8000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchNewsData();
  }, [apiKey]);

  return (
    <div>
      {pageLoading ? (
        <>
          <MainNewsWrapper>
            <IsLoadingpage>
              <Lottie animationData={IconAnimated} />
            </IsLoadingpage>
          </MainNewsWrapper>
        </>
      ) : (
        <>
          <MainNewsWrapper>
            <div className="mainFlex">
              <FirstNewsBx1>
                <div>
                  <img
                    src={dom}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
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
              </FirstNewsBx1>
              <div className="categories">
                <div className="box">
                  <p>Philomena Cunk Is Weird Enough to Take on the World</p>
                  <p>
                    The new Netflix show “Cunk on Earth” looks like an ambitious
                    BBC documentary. Until its fictional host, created by
                    Charlie Brooker, starts to ask some deeply silly questions.
                  </p>
                </div>
                <div>
                  <img
                    src={dom}
                    style={{
                      width: "100%",
                      height: "60px",
                      objectFit: "cover",
                    }}
                    alt="loading"
                  />
                </div>
              </div>
            </div>

            {isLoading ? (
              <>
                <div className="load">
                  <div className="loadContainer">
                    <div className="box1"></div>
                    <div className="box2">
                      <div className="div1"></div>
                      <div className="div2"></div>
                      <div className="div3"></div>
                    </div>
                  </div>
                  <div className="loadContainer">
                    <div className="box1"></div>
                    <div className="box2">
                      <div className="div1"></div>
                      <div className="div2"></div>
                      <div className="div3"></div>
                    </div>
                  </div>
                  <div className="loadContainer">
                    <div className="box1"></div>
                    <div className="box2">
                      <div className="div1"></div>
                      <div className="div2"></div>
                      <div className="div3"></div>
                    </div>
                  </div>
                  <div className="loadContainer">
                    <div className="box1"></div>
                    <div className="box2">
                      <div className="div1"></div>
                      <div className="div2"></div>
                      <div className="div3"></div>
                    </div>
                  </div>
                  <div className="loadContainer">
                    <div className="box1"></div>
                    <div className="box2">
                      <div className="div1"></div>
                      <div className="div2"></div>
                      <div className="div3"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <FirstNewsBx2>
                <h3 style={{ color: "#fff" }}>HEADLINES</h3>
                {newsData && newsData.length > 0 ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <p>No News</p>
                  </>
                )}
              </FirstNewsBx2>
            )}
          </MainNewsWrapper>
        </>
      )}
    </div>
  );
}

export default General;
