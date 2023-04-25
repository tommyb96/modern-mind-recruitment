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
          <CubeContainer>
            {[...Array(25)].map((_, index) => (
              <StyledCube key={index} isCircle={index === 20} />
            ))}
          </CubeContainer>
          <Cubes />
          <Cubes />
          <CubeContainer>
            {[...Array(25)].map((_, index) => (
              <StyledCube key={index} isCircle={index === 3} />
            ))}
          </CubeContainer>
          <Cubes />
          <Cubes />
          <Cubes />
          <CubeContainer>
            {[...Array(25)].map((_, index) => (
              <StyledCube key={index} isCircle={index === 10} />
            ))}
          </CubeContainer>
          <CubeContainer>
            {[...Array(25)].map((_, index) => (
              <StyledCube key={index} isCircle={index === 22} />
            ))}
          </CubeContainer>
          <CubeContainer>
            {[...Array(25)].map((_, index) => (
              <StyledCube key={index} isCircle={index === 2} />
            ))}
          </CubeContainer>

          <CubeContainer>
            {[...Array(25)].map((_, index) => (
              <StyledCube key={index} />
            ))}
          </CubeContainer>
          <CubeContainer>
            {[...Array(25)].map((_, index) => (
              <StyledCube key={index} />
            ))}
          </CubeContainer>
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
  height: 100vh;
  overflow: hidden;
`;

const Logo = styled.img`
  width: 9vw;
  margin: 1.5vw;
`;

const CubeWrapper = styled.div`
  position: absolute;
  right: 1vw;
  top: 4.5vw;
`;

const CubeContainer = styled.div`
  display: flex;
  top: 3vw;
  flex-wrap: nowrap;
`;

const StyledCube = styled.div`
  background-color: rgba(0, 167, 155, 0.25);
  ${({ isCircle }) => isCircle && "background-color: rgba(0, 167, 155, 0.25);"};
  height: 3.7vw;
  width: 3.7vw;
  border-radius: 8px;
  ${({ isCircle }) => isCircle && "border-radius: 50%;"};
  margin: 0.07vw;
  transition: transform 0.05s ease-in-out;

  &:hover {
    transform: scale(1.6);
    ${({ isCircle }) => isCircle && "transform: scale(2.2);"};
    opacity: 0.9;
  }
`;

const SloganWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 9vw;
  top: 15vw;
`;

const Slogan = styled.h1`
  font-family: "Comfortaa", cursive;
  font-size: 5vw;
  line-height: 5vw;
`;

const Future = styled.span`
  font-family: "Righteous", cursive;
  color: rgb(0, 0, 255);
  font-size: 5.5vw;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: rgba(0, 167, 155, 0.5);
    cursor: pointer;
  }
`;

const Beschreibung = styled.div`
  position: absolute;
  color: rgb(102, 102, 102);
  font-family: "futura-pt", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.4vw;
  top: 14vw;
  left: 4.7vw;
`;
