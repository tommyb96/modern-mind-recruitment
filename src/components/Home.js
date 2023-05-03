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
        </CubeWrapper>
        <SloganWrapper>
          <h1>
            your <span>future</span>
            <br />
            &nbsp; &nbsp;is our focus
          </h1>
          <div>
            Ihr Berater für internationale <br />
            Fachkräfte
          </div>
        </SloganWrapper>
      </HomeContainer>
    </>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: rgba(0, 167, 155, 0.1);
`;

const Logo = styled.img`
  position: absolute;
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
  align-items: end;
  padding: 1vw;
  margin-top: 70px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const SloganWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 110px;
  top: 320px;

  h1 {
    font-family: "Comfortaa", cursive;
    font-size: 70px;
    margin: 0;

    @media (max-width: 1280px) {
      font-size: 60px;
    }
  }

  span {
    font-family: "Righteous", cursive;

    color: rgb(0, 0, 255);
    font-size: 70px;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: rgba(0, 167, 155, 0.5);
      cursor: pointer;
    }
  }

  div {
    color: rgb(0, 0, 0);
    display: inline-block;
    font-family: "futura-pt", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 35px;
    margin-left: 70px;
  }

  @media (max-width: 680px) {
    top: 250px;
    right: 50px;
    h1 {
      font-size: 55px;
    }
    span {
      font-size: 55px;
    }
    div {
      font-size: 30px;
    }
  }
  @media (max-width: 480px) {
    right: 30px;
    h1 {
      font-size: 45px;
    }
    span {
      font-size: 45px;
    }
    div {
      margin-left: 40px;
      font-size: 25px;
    }
  }
`;
