import React from "react";
import styled from "styled-components";
import Cubes from "./Cubes";
import logo from "../svg/logo.svg";

const Home = () => {
  return (
    <>
      <HomeContainer id="home">
        <Logo src={logo} alt="Logo" />
        <CubeWrapper>
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
          <Cubes />
        </CubeWrapper>
        <SloganWrapper>
          <Slogan>
            your <Future>future</Future>
            <br />
            &nbsp; &nbsp;is our focus
          </Slogan>
          <Beschreibung>
            Ihr Berater für internationale <br />
            Fachkräfte
          </Beschreibung>
        </SloganWrapper>
      </HomeContainer>
    </>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vw;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 150px;
  margin: 25px;

  @media (max-width: 1280px) {
    width: 120px;
    margin: 30px;
  }
`;

const CubeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1vw;
  top: 70px;
  right: 0;
  @media (max-width: 768px) {
    top: 0;
  }
`;

const SloganWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 110px;
  top: 320px;
`;

const Slogan = styled.h1`
  font-family: "Comfortaa", cursive;
  font-size: 70px;
  margin: 0;

  @media (max-width: 1280px) {
    font-size: 60px;
  }
`;

const Future = styled.span`
  font-family: "Righteous", cursive;

  color: rgb(0, 0, 255);
  font-size: 70px;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: rgba(0, 167, 155, 0.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

const Beschreibung = styled.div`
  color: rgb(102, 102, 102);
  display: inline-block;
  font-family: "futura-pt", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 35px;
  margin-left: 70px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
