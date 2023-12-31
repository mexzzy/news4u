import React from "react";
import { Link } from "react-router-dom";
import { Anchors, RouteWrapper, RouteContainer } from "../components/Style";
import Weather from "./Weather";
import { useState } from "react";

function RouteNav() {
  const [generalLink, setGeneralLink] = useState(true);
  const [politicsLink, setPoliticsLink] = useState(false);
  const [wordLink, setWordLink] = useState(false);
  const [economyLink, setEconomyLink] = useState(false);
  const [scienceLink, setScienceLink] = useState(false);
  const [businessLink, setBusinessLink] = useState(false);
  const [travelLink, setTravelLink] = useState(false);
  const [climateLink, setClimateLink] = useState(false);
  const [lifestyleLink, setLifestyleLink] = useState(false);
  const [foodLink, setFoodLink] = useState(false);
  const [sportLink, setSportLink] = useState(false);

  const general = () => {
    setGeneralLink(true);
    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const politics = () => {
    setGeneralLink(false);

    setPoliticsLink(true);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const world = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(true);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const economy = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(true);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const science = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(true);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const business = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(true);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const travel = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(true);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const climate = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(true);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(false);
  };
  const lifestyle = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(true);
    setFoodLink(false);
    setSportLink(false);
  };
  const food = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(true);
    setSportLink(false);
  };
  const sport = () => {
    setGeneralLink(false);

    setPoliticsLink(false);
    setWordLink(false);
    setEconomyLink(false);
    setScienceLink(false);
    setBusinessLink(false);
    setTravelLink(false);
    setClimateLink(false);
    setLifestyleLink(false);
    setFoodLink(false);
    setSportLink(true);
  };
  return (
    <RouteContainer>
      <RouteWrapper>
        <Link
          onClick={general}
          className={`link ${generalLink && "activeLink"}`}
          to="/"
        >
          <Anchors>general</Anchors>
        </Link>
        <Link
          onClick={politics}
          className={`link ${politicsLink && "activeLink"}`}
          to="/politics"
        >
          <Anchors>politics</Anchors>
        </Link>
        <Link
          onClick={world}
          className={`link ${wordLink && "activeLink"}`}
          to="world"
        >
          <Anchors>world</Anchors>
        </Link>
        <Link
          onClick={economy}
          className={`link ${economyLink && "activeLink"}`}
          to="economy"
        >
          <Anchors>economy</Anchors>
        </Link>
        <Link
          onClick={science}
          className={`link ${scienceLink && "activeLink"}`}
          to="scienceAndTech"
        >
          <Anchors>
            <span>science</span>
            <span>&</span>
            <span>tech</span>
          </Anchors>
        </Link>
        <Link
          onClick={business}
          className={`link ${businessLink && "activeLink"}`}
          to="business"
        >
          <Anchors>business</Anchors>
        </Link>
        <Link
          onClick={travel}
          className={`link ${travelLink && "activeLink"}`}
          to="travel"
        >
          <Anchors>travel</Anchors>
        </Link>
        <Link
          onClick={climate}
          className={`link ${climateLink && "activeLink"}`}
          to="climate"
        >
          <Anchors>climate</Anchors>
        </Link>
        <Link
          onClick={lifestyle}
          className={`link ${lifestyleLink && "activeLink"}`}
          to="lifestyle"
        >
          <Anchors>lifestyle</Anchors>
        </Link>
        <Link
          onClick={food}
          className={`link ${foodLink && "activeLink"}`}
          to="food"
        >
          <Anchors>food</Anchors>
        </Link>
        <Link
          onClick={sport}
          className={`link ${sportLink && "activeLink"}`}
          to="sport"
        >
          <Anchors>sport</Anchors>
        </Link>
      </RouteWrapper>
      <Weather />
    </RouteContainer>
  );
}

export default RouteNav;
