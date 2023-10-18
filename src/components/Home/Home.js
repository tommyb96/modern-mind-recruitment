import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/svg/Home/logo.svg";
import people from "../../assets/svg/Home/home-people.svg";
import allpeople from "../../assets/svg/Home/home-big-people.png";

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
        <Logo src={logo} alt="modern mind recruitment logo" />
        <BigPeople src={allpeople} alt="staff" />
        <Wrapper>
          {" "}
          <Circle />
          <MessageWrapper>
            <Message>your future is our focus</Message>
          </MessageWrapper>
        </Wrapper>{" "}
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

const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(92, 92, 255);
  position: relative;
`;

const Logo = styled.img`
  position: absolute;
  top: 2%;
  left: 2%;
  width: 80px;
  margin-right: -20px;
  z-index: 2;
  @media (max-width: 480px) {
    top: 20px;
    left: 20px;
  }
`;

const BigPeople = styled.img`
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translate(-50%);
  height: 100vh;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const MessageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 47%;
  height: 5vw;
  overflow: hidden;
  z-index: 2;

  animation: openContainer 5s linear infinite;
  @keyframes openContainer {
    0%,
    100% {
      width: 47%;
    }
    20% {
      width: 47%;
    }
    28% {
      width: 72%;
    }
    72% {
      width: 72%;
    }
    80% {
      width: 47%;
    }
  }

  @media (max-width: 900px) {
    height: 10vw;
    @keyframes openContainer {
      0%,
      100% {
        width: 47%;
      }
      20% {
        width: 47%;
      }
      28% {
        width: 83%;
      }
      72% {
        width: 83%;
      }
      80% {
        width: 47%;
      }
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  margin: auto;
  left: 49%;
  width: 5vw;
  height: 5vw;
  border: 5px solid rgb(192, 192, 192);
  background-color: white;
  border-radius: 50%;
  z-index: 3;

  animation: moveCircle 5s linear infinite;
  @keyframes moveCircle {
    0%,
    100% {
      left: 49%;
    }
    20% {
      left: 49%;
    }
    28% {
      left: 22.5%;
    }
    72% {
      left: 22.5%;
    }
    80% {
      left: 49%;
    }
  }

  @media (max-width: 900px) {
    width: 9vw;
    height: 9vw;
    @keyframes moveCircle {
      0%,
      100% {
        left: 49%;
      }
      20% {
        left: 49%;
      }
      28% {
        left: 7%;
      }
      72% {
        left: 7%;
      }
      80% {
        left: 49%;
      }
    }
  }

  @media (max-width: 480px) {
    border: 3px solid rgb(192, 192, 192);
    width: 10.5vw;
    height: 10.5vw;
  }
`;

const Message = styled.div`
  position: absolute;
  bottom: 25%;
  left: -106%;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  line-height: 84%;
  z-index: -1;
  font-size: 3.3vw;
  animation: moveMessage 5s linear infinite;
  @keyframes moveMessage {
    0%,
    100% {
      left: -106%;
    }
    20% {
      left: -106%;
    }
    28% {
      left: 0;
    }
    72% {
      left: 0;
    }
    80% {
      left: -106%;
    }
  }

  @media (max-width: 900px) {
    font-size: 5vw;
    @keyframes moveMessage {
      0%,
      100% {
        left: -153%;
      }
      20% {
        left: -153%;
      }
      28% {
        left: 0;
      }
      72% {
        left: 0;
      }
      80% {
        left: -153%;
      }
    }
  }

  @media (max-width: 480px) {
    font-size: 5vw;
    @keyframes moveMessage {
      0%,
      100% {
        left: -153%;
      }
      20% {
        left: -153%;
      }
      28% {
        left: 10px;
      }
      72% {
        left: 10px;
      }
      80% {
        left: -153%;
      }
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 80px;
  align-items: center;

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
    transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
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
