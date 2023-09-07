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
          <Logo src={logo} alt="Logo" />
          <Message>
            your <br /> future <br />
            is our <br />
            focus
          </Message>
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
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(92, 92, 255);
`;

const Logo = styled.img`
  height: 80%;
  z-index: 1100;
  align-self: center;
  margin: 100px;
  opacity: 0.8;

  @media (max-width: 1500px) {
    height: 80%;
  }

  @media (max-width: 900px) {
    align-self: start;
    margin: 40px;
    height: 60%;
  }

  @media (max-width: 650px) {
    height: 50%;
  }

  @media (max-width: 480px) {
    margin: 30px;
  }
`;

const Message = styled.div`
  position: absolute;
  right: 7%;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 14vh;
  text-align: end;
  line-height: 84%;

  align-self: center;
  z-index: 1100;

  @media (max-width: 1500px) {
    font-size: 12vh;
  }

  @media (max-width: 900px) {
    bottom: 100px;
    font-size: 9vh;
  }

  @media (max-width: 650px) {
    font-size: 8vh;
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
  margin-top: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 480px) {
    margin-top: 70px;
    margin-bottom: 0;
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
