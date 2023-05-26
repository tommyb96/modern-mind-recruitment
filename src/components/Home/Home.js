import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Cubes from "./Cubes";
import logo from "../../assets/svg/Home/logo.svg";

const Home = () => {
  const refs = {
    slogan: useRef(null),
    welcome: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    slogan: false,
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
          <SloganWrapper ref={refs.slogan} isVisible={isVisible.slogan}>
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
        <StyledContainer>
          <WelcomeMessage ref={refs.welcome} isVisible={isVisible.welcome}>
            Herzlich Willkommen bei <br />
            <StyledSpan>
              modern mind <GreenSpan>recruitment</GreenSpan>
            </StyledSpan>{" "}
            und schön, dass sie hier sind, um einen Ausweg aus dem
            Fachkräftemangel zu finden. Wir garantieren Ihnen Ihren Erfolg!
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
    width: 120px;
    margin: 30px;
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

const SloganWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 200px;
  top: 320px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  h1 {
    font-family: "Comfortaa", cursive;
    text-shadow: 1px 0 rgb(0, 0, 0);
    font-size: 100px;
    margin: 0;
    line-height: 95px;
  }

  span {
    font-family: "Righteous", cursive;
    text-shadow: 0px 0 rgb(0, 0, 255);
    color: rgb(0, 0, 255);
    font-size: 100px;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) {
      &:hover {
        color: rgba(0, 167, 155);
        cursor: pointer;
      }
    }
  }

  div {
    color: rgb(0, 0, 255, 0.5);
    display: inline-block;
    font-family: system-ui;
    font-weight: 300;
    font-size: 38px;
    margin-left: 100px;
  }

  @media (max-width: 1280px) {
    right: 100px;
    h1 {
      font-size: 80px;
      line-height: 85px;
    }
    span {
      font-size: 80px;
    }
    div {
      font-size: 30px;
    }
  }
  @media (max-width: 768px) {
    top: 250px;
    right: 50px;
    h1 {
      font-size: 55px;
      line-height: 60px;
    }
    span {
      font-size: 55px;
    }
    div {
      margin-left: 70px;
      font-size: 25px;
    }
  }
  @media (max-width: 480px) {
    right: 30px;
    h1 {
      font-size: 45px;
      line-height: 50px;
    }
    span {
      font-size: 45px;
    }
    div {
      margin-left: 60px;
      font-size: 20px;
    }
  }
`;

const StyledContainer = styled.div`
  position: relative;
`;

const WelcomeMessage = styled.div`
  position: relative;
  color: black;
  align-self: center;
  margin: 150px 80px 120px 60px;
  max-width: 900px;
  font-family: system-ui;
  font-weight: 500;
  font-size: 50px;
  max-width: 1200px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  //media query
  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 650px) {
    margin: 150px 40px 120px 40px;
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 23px;
    margin-left: 55px;
    margin-bottom: 120px;
  }
`;

const StyledSpan = styled.span`
  font-family: "Comfortaa", cursive;
  text-shadow: 1px 0 rgb(0, 0, 255);
  font-size: 50px;
  font-weight: bold;
  color: rgb(0, 0, 255);

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 650px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 23px;
  }
`;

const GreenSpan = styled.span`
  color: rgba(0, 167, 155);
  text-shadow: 1px 0 rgba(0, 167, 155);
  font-family: Comfortaa;
`;
