import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/images/4U NEWS Logo black-01.png";
import Lottie from "lottie-react";
import IconAnimated from "../assets/images/wired-outline-726-wireless-connection.json";
import { IsLoadingpage } from "../components/Style";
import { MainNewsWrapper } from "../components/Style";

function World() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoading, setpageloading] = useState(true);

  useEffect(() => {
    document.title = "News4u | World";
  }, []);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  setTimeout(() => {
    setpageloading(false);
  }, 5000);

  const query = "World";
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY_2;
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${formattedDate}&sortBy=popularity&apiKey=${apiKey}`;
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setNewsData(response.data.articles.slice(0, 20));
        setTimeout(() => {
          setIsLoading(false);
        }, 8000);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, [formattedDate, query]);

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
        <MainNewsWrapper>
          <IsLoadingpage>
           
            <div className="newsFlexBox">
              {isLoading ? (
                <>
                  <div className="loading">
                    <div className="loadingContainer">
                      <div className="div1"></div>
                      <div className="div2">
                        <img src={logo} alt="logo" />
                        <p style={{ textAlign: "center" }}>loading...</p>
                      </div>
                      <div className="div3"></div>
                    </div>
                    <div className="loadingContainer">
                      <div className="div1"></div>
                      <div className="div2">
                        <img src={logo} alt="logo" />
                        <p style={{ textAlign: "center" }}>loading...</p>
                      </div>
                      <div className="div3"></div>
                    </div>
                    <div className="loadingContainer">
                      <div className="div1"></div>
                      <div className="div2">
                        <img src={logo} alt="logo" />
                        <p style={{ textAlign: "center" }}>loading...</p>
                      </div>
                      <div className="div3"></div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="newsFlexBox">
                  {newsData.map((index) => (
                    <div key={index.id} className="red">
                      <p>
                        {index.publishedAt.slice(0, 10)} |{" "}
                        {index.publishedAt.slice(11, 16)}
                      </p>
                      <div>
                        {index.urlToImage ? (
                          <img src={index.urlToImage} alt={index.title} />
                        ) : (
                          <>
                            <div className="imageUndefined">
                              <img src={logo} alt="logo" />
                            </div>
                          </>
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
              )}
            </div>
          </IsLoadingpage>
        </MainNewsWrapper>
      )}
    </div>
  );
}

export default World;
