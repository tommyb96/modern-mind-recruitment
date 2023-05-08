import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import cubes1 from "../svg/AboutUs/about_us_cubes_1.svg";
import cubes2 from "../svg/AboutUs/about_us_cubes_2.svg";
import waves from "../svg/AboutUs/about_us_waves.png";
import persons from "../svg/AboutUs/about_us_3d_person.svg";
import person from "../svg/AboutUs/about_us_person.svg";

const AboutUs = () => {
  const welcomeRef = useRef(null);

  const statementRef = useRef(null);
  const rightAlignedRef = useRef(null);
  const boldTextRef = useRef(null);

  const [welcomeVisible, setWelcomeVisible] = useState(false);

  const [statementVisible, setStatementVisible] = useState(false);
  const [rightAlignedVisible, setRightAlignedVisible] = useState(false);
  const [boldTextVisible, setBoldTextVisible] = useState(false);

  const handleIntersection = (entry, observer) => {
    if (entry.target === welcomeRef.current) {
      setWelcomeVisible(entry.isIntersecting);
    } else if (entry.target === statementRef.current) {
      setStatementVisible(entry.isIntersecting);
    } else if (entry.target === rightAlignedRef.current) {
      setRightAlignedVisible(entry.isIntersecting);
    } else if (entry.target === boldTextRef.current) {
      setBoldTextVisible(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => handleIntersection(entry, observer));
    }, options);

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => handleIntersection(entry, observer));
    }, options);

    const observer3 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => handleIntersection(entry, observer));
    }, options);

    const observer4 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => handleIntersection(entry, observer));
    }, options);

    observer1.observe(welcomeRef.current);

    observer2.observe(statementRef.current);
    observer3.observe(rightAlignedRef.current);
    observer4.observe(boldTextRef.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, []);

  return (
    <>
      <StyledContainer>
        <WelcomeMessage ref={welcomeRef} isVisible={welcomeVisible}>
          <CubeOneRelative>
            <CubesOne src={cubes1} alt="cubes"></CubesOne>Herzlich
          </CubeOneRelative>{" "}
          Willkommen bei <br />
          <StyledSpan>modern mind recruitment</StyledSpan> und schön, dass sie
          hier sind, um einen Ausweg aus dem Fachkräftemangel zu finden. Wir
          garantieren Ihnen Ihren{" "}
          <CubeTwoRelative>
            {" "}
            <CubesTwo src={cubes2} alt="cubes"></CubesTwo>Erfolg!
          </CubeTwoRelative>
        </WelcomeMessage>
      </StyledContainer>
      <InfoWrapper id="über-uns">
        {/* <Waves src={waves} alt="waves"></Waves> */}
        <Line />
        <Circle />
        <InfoText>
          <Person src={person} alt="person icon" />
          <Heading>ÜBER UNS</Heading>
          <div>
            Es ist kein Geheimnis, dass es in Deutschland an Fachkräften
            mangelt. Immer mehr Unternehmen kämpfen damit, ihre offenen Stellen
            mit qualifizierten Mitarbeitern zu besetzen. Aber was tun?
          </div>
          <Statement ref={statementRef} isVisible={statementVisible}>
            <Persons src={persons} alt="persons icon" /> <br />
            Die Lösung liegt in Fachkräften aus dem Ausland!
          </Statement>
          <BoldText ref={boldTextRef} isVisible={boldTextVisible}>
            Aus eigener Erfahrung wissen wir, dass das Einstellen von
            internationalen Fachkräften eine Herausforderung sein kann. Aber
            keine Sorge, wir stehen Ihnen mit Rat und Tat zur Seite.
          </BoldText>{" "}
          <div ref={rightAlignedRef} isVisible={rightAlignedVisible}>
            Ganz genau, warum nicht die internationalen Talente für eure offenen
            Stellen gewinnen? Es gibt unzählige qualifizierte Fachkräfte auf der
            ganzen Welt die nicht wie Deutschland vom demografischen Wandel
            betroffen sind mehr Fachkräfte als zu besetzende Stellen zu
            Verfügung haben, die auf der Suche nach einer neuen Herausforderung
            und einer Chance sind, ihr Können unter Beweis zu stellen. Denn die
            alternde Bevölkerung nimmt in Deutschland jährlich zu.
          </div>
          <RightAligned>
            Unser Team ist eine Gruppe von Personalberatern, die jahrelang in
            der Branche Fachkräfte aus den Drittstaaten tätig war und immer noch
            ist, und dabei so ziemlich alles erlebt hat, was man sich vorstellen
            kann. Von skurrilen Gesetzen bis hin zur Anerkennung ausländischer
            Berufsqualifikationen - wir haben alle möglichen Situationen
            gemeistert.
          </RightAligned>
          <RightAligned>
            Deshalb haben wir beschlossen, unser Wissen und unsere
            Pro-Kenntnisse dazu zu nutzen, anderen Unternehmen dabei zu helfen,
            diesen Prozess zu rationalisieren und zu vereinfachen.
          </RightAligned>
        </InfoText>
      </InfoWrapper>
      <StyledForm>
        <div>
          <p>
            LASST UNS GEMEINSAM DIE <span>ZUKUNFT </span>
            UNSERER WIRTSCHAFT GESTALTEN!
          </p>
        </div>
      </StyledForm>
    </>
  );
};

export default AboutUs;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const WelcomeMessage = styled.div`
  position: relative;
  color: black;
  align-self: center;
  margin: 200px 10px 200px 10px;
  max-width: 850px;
  text-align: center;
  font-family: system-ui;
  font-weight: 500;
  font-size: 40px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  //media query
  @media (max-width: 1024px) {
    max-width: 600px;
  }
  @media (max-width: 600px) {
    font-size: 30px;
    max-width: 430px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const StyledSpan = styled.span`
  font-family: "Comfortaa", cursive;
  text-shadow: 1px 0 rgb(0, 0, 255);
  font-size: 45px;
  font-weight: bold;
  color: rgb(0, 0, 255);
  @media (max-width: 600px) {
    font-size: 33px;
  }
`;

const CubeOneRelative = styled.span`
  position: relative;
`;

const CubesOne = styled.img`
  position: absolute;
  width: 170px;
  top: -220%;
  left: -50%;
  @media (max-width: 600px) {
    width: 100px;
    top: -170%;
    left: -35%;
  }
  @media (max-width: 480px) {
    width: 100px;
    top: -170%;
    left: -5%;
  }
`;

const CubeTwoRelative = styled.span`
  position: relative;
`;

const CubesTwo = styled.img`
  position: absolute;
  width: 170px;
  bottom: -250%;
  right: -110%;
  @media (max-width: 600px) {
    width: 100px;
    bottom: -180%;
    right: -80%;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  background-color: rgba(0, 167, 155);
  position: relative;
  overflow: hidden;
`;

const Waves = styled.img`
  width: 100vw;
  z-index: -1;
`;

const Line = styled.div`
  position: absolute;
  left: 49%;
  height: 100%;
  width: 5px;
  background-color: white;
  z-index: 100;
  @media (max-width: 850px) {
    left: 15%;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: -1%;
  left: 47.9%;
  background-color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 5px solid white;
  z-index: 200;
  @media (max-width: 850px) {
    left: 13%;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 850px;
  margin-top: 50px;
  margin-bottom: 200px;
  font-size: 20px;
  div {
    padding: 20px;
    max-width: 420px;

    @media (max-width: 850px) {
      align-self: flex-start;
      margin-left: 70px;
    }
  }

  //media query
  @media (max-width: 850px) {
    max-width: 500px;
  }
`;

const Person = styled.img`
  position: absolute;
  height: 80%;
  top: 10%;
  right: -15%;

  @media (max-width: 850px) {
    right: -50%;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  font-size: 55px;
  text-shadow: 1px 0 rgb(0, 0, 0);
  @media (max-width: 850px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;

const Statement = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: white;
  align-self: flex-end;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 850px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;

const Persons = styled.img`
  position: absolute;
  width: 350px;
  top: 20%;
  left: -100%;
  @media (max-width: 850px) {
    position: relative;
    top: 0;
    left: 0;
  }
  @media (max-width: 480px) {
    width: 260px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
  font-weight: 500;
  color: black;
  align-self: flex-end;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 850px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;

const RightAligned = styled.div`
  align-self: flex-end;

  @media (max-width: 850px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;

const StyledForm = styled.div`
  background-color: rgba(0, 167, 155, 0.25);

  div {
    display: flex;
    align-items: center;
    background-color: rgba(0, 167, 155, 0.7);
    height: 400px;
    clip-path: polygon(0 0, 100% 50%, 100% 100%, 0% 100%);

    @media (max-width: 768px) {
      height: 100px;
      clip-path: none;
      overflow: hidden;
    }
  }

  p {
    padding: 15% 45% 10% 9%;
    font-weight: 500;
    font-size: 3.7vw;

    @media (max-width: 1280px) {
      font-size: 4.3vw;
    }

    @media (max-width: 1024px) {
      font-size: 4.9vw;
    }

    @media (max-width: 768px) {
      font-size: 6vw;
      white-space: nowrap;
      padding: 0;
      animation: marquee 25s linear infinite;
      animation-delay: 0s;
    }

    @media (max-width: 480px) {
      font-size: 8vw;
      white-space: nowrap;
      animation: marquee 20s linear infinite;
      animation-delay: 0s;
    }
  }

  span {
    color: rgb(0, 0, 255);
  }

  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
