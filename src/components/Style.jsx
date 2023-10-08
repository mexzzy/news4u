import styled from "styled-components";

export const MainContainer = styled.div`
  background-image: linear-gradient(#000 300px, #fff 300px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* height: 70vh; */
`;

export const MainWrapper = styled.div`
  background: #fff;
  /* position: absolute;
  top: 0; */
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  background: #000;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
  input {
    padding: 10px;
    border: 0;
    background-color: #04594d;
    outline: none;
    color: #fff;
    width: 100%;
    font-size: 16px;
    &::placeholder {
      color: #fff;
    }
  }
  button {
    border: 0;
    padding: 10px 20px;
    background-color: #8e4042;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
export const LogoWrapper = styled.div`
  color: #fff;
`;
export const RouteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;
export const Anchors = styled.div`
  padding: 10px;
  text-transform: capitalize;
  gap: 5px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #04594e52;
    cursor: pointer;
  }
`;

export const RouteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1a1a1a;
  align-items: center;
`;
export const WeatherContainer = styled.div`
  padding: 0 10px;
  color: #fff;
  display: flex;
  gap: 10px;
  align-items: center;
  div:nth-child(2) {
    display: flex;
    gap: 3px;
    align-items: baseline;
  }
  @media (max-width: 768px) {
    border-left: 2px solid #ffffff9b;
  }
`;
export const MainRouteContainer = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 2%;
  }
`;
export const FooterWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  padding: 3% 5%;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const FooterBox1 = styled.div`
  display: flex;
  gap: 10px;
  color: #999;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  div:nth-child(1) {
    text-transform: capitalize;
    cursor: pointer;
    display: flex;
    gap: 10px;
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: start;
    }
  }
  div:nth-child(2) {
    font-size: 12px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FooterBox2 = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background-color: #000;
  text-transform: capitalize;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  div:nth-child(3) {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
  }
`;
export const FirstNewsBx1 = styled.div`
  width: auto;

  div:nth-child(1) {
    position: relative;
    span {
      position: absolute;
      bottom: 0;
      padding: 10px;
      left: 0;
      background-image: linear-gradient(transparent, #00000099 30%);
      p:nth-child(1) {
        font-size: 20px;
        font-weight: bold;
        color: #fff;
      }
      p:nth-child(2) {
        color: #999;
        font-size: 12px;
      }
    }
  }
`;
export const FirstNewsBx2 = styled.div`
  width: 50%;
  background: #1a1a1a;
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 600px) {
    width: auto;
    padding: 10px;
  }
`;
export const MainNewsWrapper = styled.div`
  height: 80vh;
  overflow: scroll;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const IsLoadingpage = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
