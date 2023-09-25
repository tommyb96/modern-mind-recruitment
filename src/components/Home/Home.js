import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
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
      <HomeContainer id="home">
        <Wrapper>
          <LogoWrapper>
            <Logo src={logo} />
          </LogoWrapper>
          <Message>your future is our focus</Message>
        </Wrapper>
      </HomeContainer>
      <StyledContainer>
        {" "}
        <People src={people} alt="people" />
        <WelcomeMessage ref={refs.welcome} isVisible={isVisible.welcome}>
          <p>HALLO!</p>
          WIR SIND MODERN MIND RECRUITMENT
        </WelcomeMessage>
      </StyledContainer>
    </>
  );
};
export default Home;

const LogoWrapper = styled.div`
  background-color: rgb(92, 92, 255);
  text-align: end;
  z-index: 2;
  animation: moveSideToSide 5s linear infinite;
  @keyframes moveSideToSide {
    0%,
    100% {
      width: 90vw;
    }
    20% {
      width: 90vw;
    }
    40% {
      width: 41.5vw;
    }
    80% {
      width: 41.5vw;
    }
  }

  @media (max-width: 900px) {
    @keyframes moveSideToSide {
      0%,
      100% {
        width: 90vw;
      }
      20% {
        width: 90vw;
      }
      40% {
        width: 19vw;
      }
      80% {
        width: 19vw;
      }
    }
  }

  @media (max-width: 480px) {
    @keyframes moveSideToSide {
      0%,
      100% {
        width: 90vw;
      }
      20% {
        width: 90vw;
      }
      40% {
        width: 13vw;
      }
      80% {
        width: 13vw;
      }
    }
  }
`;

const Logo = styled.img`
  width: 6vw;
  margin-right: -20px;

  @media (max-width: 900px) {
    width: 8vw;
  }

  @media (max-width: 480px) {
    width: 10vw;
  }
`;

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -2;
  background-color: rgb(92, 92, 255);
`;

const Message = styled.div`
  position: absolute;
  bottom: 35%;
  right: 11%;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 3.05vw;
  line-height: 84%;
  z-index: -1;

  @media (max-width: 900px) {
    font-size: 4.5vw;
  }

  @media (max-width: 480px) {
    font-size: 4.7vw;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
  align-items: end;
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
    font-size: 4.5vw;

    @media (max-width: 900px) {
      font-size: 8vw;
    }

    @media (max-width: 480px) {
      font-size: 35px;
    }
  }

  @media (max-width: 900px) {
    max-width: 90%;
    font-size: 10vw;
    margin: 5% 5% 5% 15%;
  }

  @media (max-width: 480px) {
    font-size: 43px;
    margin: 20px;
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
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
