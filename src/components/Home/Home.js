import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Cubes from "./Cubes";
import logo from "../../assets/svg/Home/logo.svg";
import people from "../../assets/svg/Home/home-people.svg";

const Home = () => {
  const refs = {
    welcome: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    welcome: false,
  });

  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [target]: entry.isIntersecting,
    }));
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observers = Object.keys(refs).map((key) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => handleIntersection(entry, key));
      }, observerOptions);
      observer.observe(refs[key].current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <div id="home">
        <HomeContainer>
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
            <Cubes />
            <Cubes />
            <Cubes />
            <Cubes />
          </CubeWrapper>
        </HomeContainer>
        <StyledContainer>
          {" "}
          <People src={people} alt="people" />
          <WelcomeMessage ref={refs.welcome} isVisible={isVisible.welcome}>
            <p>HALLO!</p>
            WIR SIND MODERN MIND RECRUITMENT
          </WelcomeMessage>
        </StyledContainer>
      </div>
    </>
  );
};
export default Home;

const HomeContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(
    to right,
    rgb(0, 0, 255, 0.8),
    rgb(0, 167, 155, 0.6)
  );
`;

const Logo = styled.img`
  position: absolute;
  width: 150px;
  margin: 25px;
  z-index: 1100;
  top: 70px;
  left: 0;

  @media (max-width: 1280px) {
    width: 150px;
    margin: 30px;
  }

  @media (max-width: 900px) {
    top: 40px;
  }

  @media (max-width: 650px) {
    top: 30px;
    width: 100px;
  }

  @media (max-width: 480px) {
    top: 20px;
  }
`;

const CubeWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1vw;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

const WelcomeMessage = styled.div`
  position: relative;
  color: black;
  max-width: 45%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 6vw;
  margin: 10% 0 5% 5%;

  p {
    font-weight: bold;
    color: rgba(0, 167, 155);
  }

  @media (max-width: 900px) {
    max-width: 90%;
    font-size: 10vw;
    margin: 5% 5% 5% 15%;
  }

  @media (max-width: 480px) {
    font-size: 45px;
    margin: 20px;
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const People = styled.img`
  width: 40%;
  margin: 5%;

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;
