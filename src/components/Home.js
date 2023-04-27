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
        </CubeWrapper>
        <SloganWrapper>
          <Slogan>
            Your <Future>future</Future>
            <br />
            &nbsp; &nbsp;is our focus
          </Slogan>
          <Beschreibung>
            Berater für internationale <br />
            Fachkräftezuwanderung
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
`;

const CubeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 1vw;
  top: 70px;
`;

// const StyledCube = styled.div`
//   background-color: rgba(0, 167, 155, 0.25);
//   ${({ isCircle }) => isCircle && "background-color: rgba(0, 167, 155, 0.25);"};
//   height: 4.7vw;
//   width: 4.7vw;
//   border-radius: 0.8vw;
//   ${({ isCircle }) => isCircle && "border-radius: 50%;"};
//   margin: 0.1vw;
//   transition: transform 0.05s ease-in-out;

//   &:hover {
//     transform: scale(1.6);
//     ${({ isCircle }) => isCircle && "transform: scale(2.2);"};
//     opacity: 0.9;
//   }
// `;

const SloganWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 500px;
  right: 90px;
  top: 270px;
`;

const Slogan = styled.h1`
  font-family: "Comfortaa", cursive;
  font-size: 70px;
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
`;

const Beschreibung = styled.div`
  color: rgb(102, 102, 102);
  font-family: "futura-pt", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 35px;
  margin-left: 100px;
`;
