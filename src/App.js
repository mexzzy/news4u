import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import {
  IsLoadingpage,
  MainContainer,
  MainRouteContainer,
  MainWrapper,
} from "./components/Style";
import General from "./pages/General";
import Politics from "./pages/Politics";
import World from "./pages/World";
import Economy from "./pages/Economy";
import ScienceNdTech from "./pages/ScienceNdTech";
import Business from "./pages/Business";
import Travel from "./pages/Travel";
import Climate from "./pages/Climate";
import LifeStyle from "./pages/LifeStyle";
import Food from "./pages/Food";
import Sport from "./pages/Sport";
import RouteNav from "./components/RouteNav";
import Footer from "./components/Footer";
import { useState } from "react";
import Talkers from "./assets/images/animated/wired-flat-981-consultation.json";
import Lottie from "lottie-react";

function App() {
  const [isLoadingPage, setisLoadingpage] = useState(true);

  setTimeout(() => {
    setisLoadingpage(false);
  }, 5000);

  return (
    <div>
      {isLoadingPage ? (
        <>
          <IsLoadingpage>
            <Lottie animationData={Talkers} />
          </IsLoadingpage>
        </>
      ) : (
        <>
          <MainContainer>
            <MainWrapper>
              <Nav />
              <RouteNav />
              <MainRouteContainer>
                <Routes>
                  <Route path="/" element={<General />} />
                  <Route path="/politics" element={<Politics />} />
                  <Route path="/world" element={<World />} />
                  <Route path="/economy" element={<Economy />} />
                  <Route path="/scienceAndTech" element={<ScienceNdTech />} />
                  <Route path="/business" element={<Business />} />
                  <Route path="/travel" element={<Travel />} />
                  <Route path="/climate" element={<Climate />} />
                  <Route path="/lifestyle" element={<LifeStyle />} />
                  <Route path="/food" element={<Food />} />
                  <Route path="/sport" element={<Sport />} />
                </Routes>
              </MainRouteContainer>
            </MainWrapper>
          </MainContainer>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
