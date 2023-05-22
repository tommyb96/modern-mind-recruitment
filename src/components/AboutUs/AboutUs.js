import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Cubes from "./Cubes";
import cubes1 from "../../assets/svg/AboutUs/about_us_cubes_1.svg";
import cubes2 from "../../assets/svg/AboutUs/about_us_cubes_2.svg";
import waves from "../../assets/svg/AboutUs/about_us_waves.png";
import person from "../../assets/svg/AboutUs/about_us_person.svg";

const AboutUs = () => {
  const refs = {
    welcome: useRef(null),
    heading: useRef(null),
    leftdivone: useRef(null),
    leftdivtwo: useRef(null),
    statement: useRef(null),
    boldText: useRef(null),
    rightdivone: useRef(null),
    rightdivtwo: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    welcome: false,
    heading: false,
    leftdivone: false,
    leftdivtwo: false,
    statement: false,
    boldText: false,
    rightdivone: false,
    rightdivtwo: false,
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
      <StyledContainer>
        <WelcomeMessage ref={refs.welcome} isVisible={isVisible.welcome}>
          <CubeOneRelative>
            <CubesOne src={cubes1} alt="cubes"></CubesOne>Herzlich
          </CubeOneRelative>{" "}
          Willkommen bei <br />
          <StyledSpan>
            modern mind <GreenSpan>recruitment</GreenSpan>
          </StyledSpan>{" "}
          und schön, dass sie hier sind, um einen Ausweg aus dem
          Fachkräftemangel zu finden. Wir garantieren Ihnen Ihren Erfolg!
        </WelcomeMessage>
      </StyledContainer>

      <Waves src={waves} alt="waves"></Waves>
      <InfoWrapper id="über-uns">
        <Line>
          <Circle />
          <CircleOne />
          <CircleTwo />
          <CircleThree />
        </Line>
        <InfoText>
          <Person src={person} alt="person icon" />
          <Heading ref={refs.heading} isVisible={isVisible.heading}>
            ÜBER UNS
          </Heading>
          <LeftDiv ref={refs.leftdivone} isVisible={isVisible.leftdivone}>
            <div>
              Es ist kein Geheimnis, dass es in Deutschland an Fachkräften
              mangelt. Immer mehr Unternehmen kämpfen damit, ihre offenen
              Stellen mit qualifizierten Mitarbeiter*innen zu besetzen. Aber was
              tun?
            </div>
            <Cubes></Cubes>
          </LeftDiv>
          <Statement ref={refs.statement} isVisible={isVisible.statement}>
            Die Lösung liegt in Fachkräften aus dem Ausland!
          </Statement>
          <BoldText ref={refs.boldText} isVisible={isVisible.boldText}>
            Aus eigener Erfahrung wissen wir, dass das Einstellen von
            internationalen Fachkräften eine Herausforderung sein kann. Aber
            keine Sorge, wir stehen Ihnen mit Rat und Tat zur Seite.
          </BoldText>{" "}
          <LeftDiv ref={refs.leftdivtwo} isVisible={isVisible.leftdivtwo}>
            Ganz genau, warum nicht die internationalen Talente für eure offenen
            Stellen gewinnen? Es gibt unzählige qualifizierte Fachkräfte auf der
            ganzen Welt die nicht wie Deutschland vom demografischen Wandel
            betroffen sind mehr Fachkräfte als zu besetzende Stellen zu
            Verfügung haben, die auf der Suche nach einer neuen Herausforderung
            und einer Chance sind, ihr Können unter Beweis zu stellen. Denn die
            alternde Bevölkerung nimmt in Deutschland jährlich zu.
          </LeftDiv>
          <RightAligned
            ref={refs.rightdivone}
            isVisible={isVisible.rightdivone}
          >
            Unser Team ist eine Gruppe von Personalberater*innen, die jahrelang
            in der Branche Fachkräfte aus den Drittstaaten tätig war und immer
            noch ist, und dabei so ziemlich alles erlebt hat, was man sich
            vorstellen kann. Von skurrilen Gesetzen bis hin zur Anerkennung
            ausländischer Berufsqualifikationen - wir haben alle möglichen
            Situationen gemeistert.
          </RightAligned>
          <RightAligned
            ref={refs.rightdivtwo}
            isVisible={isVisible.rightdivtwo}
          >
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
  margin: 200px 50px 100px 150px;
  max-width: 900px;
  font-family: system-ui;
  font-weight: 500;
  font-size: 50px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  //media query
  @media (max-width: 1024px) {
    font-size: 40px;
    max-width: 600px;
  }
  @media (max-width: 650px) {
    font-size: 30px;
    max-width: 430px;
    margin: 150px 20px 100px 60px;
  }
  @media (max-width: 480px) {
    font-size: 23px;
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
`;

const CubeOneRelative = styled.span`
  position: relative;
`;

const CubesOne = styled.img`
  position: absolute;
  width: 170px;
  top: -220%;
  left: -50%;

  @media (max-width: 650px) {
    width: 100px;
    top: -170%;
    left: -35%;
  }

  @media (max-width: 480px) {
    width: 100px;
    top: -220%;
    left: -45%;
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
  top: 1%;
  height: 100%;
  width: 3.5px;
  background-color: black;
  z-index: 100;

  @media (max-width: 900px) {
    left: 10%;
    top: 110px;
  }

  @media (max-width: 480px) {
    left: 7%;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 0%;
  left: -15px;
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;
`;

const CircleOne = styled.div`
  position: absolute;
  top: 155px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 130px;
  }
`;

const CircleTwo = styled.div`
  position: absolute;
  top: 365px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 790px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const CircleThree = styled.div`
  position: absolute;
  top: 1265px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 1630px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 880px;
  margin-bottom: 150px;
  font-size: 20px;

  //media query
  @media (max-width: 900px) {
    max-width: 500px;
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Person = styled.img`
  position: absolute;
  height: 80%;
  top: 10%;
  right: -15%;

  @media (max-width: 900px) {
    right: -50%;
    height: 60%;
  }

  @media (max-width: 480px) {
    opacity: 0.2;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  font-size: 55px;
  text-shadow: 1px 0 rgb(0, 0, 0);
  padding: 20px;
  max-width: 420px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }

  @media (max-width: 480px) {
    font-size: 39px;
    margin-left: 55px;
  }
`;

const LeftDiv = styled.div`
  padding: 20px;
  max-width: 420px;
  position: relative;
  margin-top: 50px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-left: 55px;
    margin-right: 10px;
  }
`;

const Statement = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: white;
  padding: 20px;
  margin-top: 50px;
  max-width: 420px;
  align-self: flex-end;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 900px) {
    margin: 500px 0 0 70px;
  }

  @media (max-width: 590px) {
    margin-top: 80vw;
  }

  @media (max-width: 480px) {
    font-size: 45px;
    margin-left: 55px;
    margin-right: 10px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
  font-weight: 500;
  color: black;
  align-self: flex-end;
  padding: 20px;
  margin-top: 50px;
  max-width: 420px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-left: 55px;
    margin-right: 10px;
  }
`;

const RightAligned = styled.div`
  align-self: flex-end;
  padding: 20px;
  max-width: 420px;
  margin-top: 50px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-left: 55px;
    margin-right: 10px;
  }
`;
