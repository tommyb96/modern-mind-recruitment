import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Cubes from "./Cubes";
import cubes1 from "../../assets/svg/AboutUs/about_us_cubes_1.svg";
import cubes2 from "../../assets/svg/AboutUs/about_us_cubes_2.svg";
import waves from "../../assets/svg/AboutUs/about_us_waves.png";
import person from "../../assets/svg/AboutUs/about_us_person.svg";

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
          <StyledSpan>
            modern mind <GreenSpan>recruitment</GreenSpan>
          </StyledSpan>{" "}
          und schön, dass sie hier sind, um einen Ausweg aus dem
          Fachkräftemangel zu finden. Wir garantieren Ihnen Ihren{" "}
          <CubeTwoRelative>
            <CubesTwo src={cubes2} alt="cubes"></CubesTwo>Erfolg!
          </CubeTwoRelative>
        </WelcomeMessage>
      </StyledContainer>
      <Waves src={waves} alt="waves"></Waves>
      <InfoWrapper id="über-uns">
        <Line>
          <Circle />
        </Line>
        <InfoText>
          <Person src={person} alt="person icon" />
          <Heading>ÜBER UNS</Heading>
          <LeftDiv>
            <div>
              Es ist kein Geheimnis, dass es in Deutschland an Fachkräften
              mangelt. Immer mehr Unternehmen kämpfen damit, ihre offenen
              Stellen mit qualifizierten Mitarbeitern zu besetzen. Aber was tun?
            </div>
            <Cubes></Cubes>
          </LeftDiv>
          <Statement ref={statementRef} isVisible={statementVisible}>
            Die Lösung liegt in Fachkräften aus dem Ausland!
          </Statement>
          <BoldText ref={boldTextRef} isVisible={boldTextVisible}>
            Aus eigener Erfahrung wissen wir, dass das Einstellen von
            internationalen Fachkräften eine Herausforderung sein kann. Aber
            keine Sorge, wir stehen Ihnen mit Rat und Tat zur Seite.
          </BoldText>{" "}
          <LeftDiv ref={rightAlignedRef} isVisible={rightAlignedVisible}>
            Ganz genau, warum nicht die internationalen Talente für eure offenen
            Stellen gewinnen? Es gibt unzählige qualifizierte Fachkräfte auf der
            ganzen Welt die nicht wie Deutschland vom demografischen Wandel
            betroffen sind mehr Fachkräfte als zu besetzende Stellen zu
            Verfügung haben, die auf der Suche nach einer neuen Herausforderung
            und einer Chance sind, ihr Können unter Beweis zu stellen. Denn die
            alternde Bevölkerung nimmt in Deutschland jährlich zu.
          </LeftDiv>
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
  margin: 200px 50px 50px 100px;
  max-width: 850px;

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
    margin: 100px 20px 50px 50px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const StyledSpan = styled.span`
  font-family: "Comfortaa", cursive;
  text-shadow: 1px 0 rgb(0, 0, 255);
  font-size: 40px;
  font-weight: bold;
  color: rgb(0, 0, 255);
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const GreenSpan = styled.span`
  color: rgba(0, 167, 155);
  text-shadow: 1px 0 rgba(0, 167, 155);
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
`;

const CubeTwoRelative = styled.span`
  position: relative;
`;

const CubesTwo = styled.img`
  position: absolute;
  width: 170px;
  bottom: -250%;
  right: -110%;
  @media (max-width: 850px) {
    display: none;
  }
`;

const Waves = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin: 0;
`;

const InfoWrapper = styled.div`
  background-color: rgba(0, 167, 155);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 2%;
  height: 100%;
  width: 2.5px;
  background-color: white;
  z-index: 100;
  @media (max-width: 900px) {
    left: 15%;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 0%;
  left: -14px;
  background-color: black;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2.5px solid white;
  z-index: 200;
  @media (max-width: 900px) {
    left: -14px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 880px;
  margin-bottom: 200px;
  font-size: 20px;

  //media query
  @media (max-width: 900px) {
    max-width: 500px;
  }
`;

const Person = styled.img`
  position: absolute;
  height: 80%;
  top: 10%;
  right: -15%;

  @media (max-width: 900px) {
    right: -50%;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  font-size: 55px;
  text-shadow: 1px 0 rgb(0, 0, 0);
  padding: 20px;
  max-width: 420px;
  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;

const LeftDiv = styled.div`
  padding: 20px;
  max-width: 420px;
  position: relative;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;

const Statement = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: white;
  padding: 20px;
  max-width: 420px;
  align-self: flex-end;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 900px) {
    margin: 450px 0 0 70px;
  }

  @media (max-width: 590px) {
    margin: 290px 0 0 70px;
  }

  @media (max-width: 480px) {
    font-size: 45px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
  font-weight: 500;
  color: black;
  align-self: flex-end;
  padding: 20px;
  max-width: 420px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;

const RightAligned = styled.div`
  align-self: flex-end;
  padding: 20px;
  max-width: 420px;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }
`;
