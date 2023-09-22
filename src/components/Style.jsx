import styled from "styled-components";

export const MainContainer = styled.div`
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const MainWrapper = styled.div`
  background: #fff;
  position: absolute;
  top: 0;
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
  border: 1px solid red;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 3% 7%;
  align-items: flex-start;
`;
export const FooterBox1 = styled.div``;
export const FooterBox2 = styled.div``;
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
// export const RouteWrapper = styled.div`

// `
