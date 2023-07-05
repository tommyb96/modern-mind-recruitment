import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Cubes from "./Cubes";
import waves from "../../assets/svg/AboutUs/about_us_waves.png";
import person from "../../assets/svg/AboutUs/about_us_person.svg";

const AboutUs = () => {
  const refs = {
    wavescircle: useRef(null),
    circle: useRef(null),
    heading: useRef(null),
    leftdivone: useRef(null),
    leftdivtwo: useRef(null),
    statement: useRef(null),
    boldText: useRef(null),
    rightdivone: useRef(null),
    rightdivtwo: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    wavescircle: false,
    heading: false,
    circle: false,
    leftdivone: false,
    leftdivtwo: false,
    statement: false,
    boldText: false,
    rightdivone: false,
    rightdivtwo: false,
  });

  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => {
      if (entry.isIntersecting) {
        if (!prevState[target]) {
          console.log(`${target} is now visible.`);
        }
        return {
          ...prevState,
          [target]: true,
        };
      } else {
        if (prevState[target]) {
          console.log(`${target} is no longer visible.`);
        }
        return {
          ...prevState,
          [target]: false,
        };
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "-100px 0px -100px 0px",
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
      <WavesWrapper>
        {" "}
        <WavesLine>
          <WavesCircle
            ref={refs.wavescircle}
            isVisible={isVisible.wavescircle}
          />
        </WavesLine>
        <Waves id="über-uns" src={waves} alt="waves"></Waves>
      </WavesWrapper>
      <div>
        <InfoWrapper>
          <Line>
            <Circle ref={refs.circle} isVisible={isVisible.circle} />
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
                Stellen mit qualifizierten Mitarbeiter*innen zu besetzen. Aber
                was tun?
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
              Ganz genau, warum nicht die internationalen Talente für eure
              offenen Stellen gewinnen? Es gibt unzählige qualifizierte
              Fachkräfte auf der ganzen Welt die nicht wie Deutschland vom
              demografischen Wandel betroffen sind und mehr Fachkräfte als zu
              besetzende Stellen zur Verfügung haben, die auf der Suche nach
              einer neuen Herausforderung und einer Chance sind, ihr Können
              unter Beweis zu stellen. In den nächsten 20 Jahren wird der
              demografische Wandel zu einem Rückgang von etwa 25% der Menschen
              im erwerbsfähigen Alter führen.
            </LeftDiv>
            <RightAligned
              ref={refs.rightdivone}
              isVisible={isVisible.rightdivone}
            >
              Unser Team ist eine Gruppe von Personalberater*innen, die
              jahrelang in der Branche Fachkräfte aus den Drittstaaten tätig war
              und immer noch ist, und dabei so ziemlich alles erlebt hat, was
              man sich vorstellen kann. Von skurrilen Gesetzen bis hin zur
              Anerkennung ausländischer Berufsqualifikationen - wir haben alle
              möglichen Situationen gemeistert.
            </RightAligned>
            <RightAligned
              ref={refs.rightdivtwo}
              isVisible={isVisible.rightdivtwo}
            >
              Deshalb haben wir beschlossen, unser Wissen und unsere
              Pro-Kenntnisse dazu zu nutzen, anderen Unternehmen dabei zu
              helfen, diesen Prozess zu rationalisieren und zu vereinfachen.
            </RightAligned>
          </InfoText>
        </InfoWrapper>
      </div>
    </>
  );
};

export default AboutUs;

const WavesWrapper = styled.div`
  display: flex;
  position: relative;
`;

const WavesLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 3.5px;
  background-color: black;

  @media (max-width: 900px) {
    left: 10%;
    height: 140%;
  }

  @media (max-width: 480px) {
    left: 9%;
    height: 175%;
  }
`;

const WavesCircle = styled.div`
  position: absolute;
  top: -11px;
  left: -26px;
  background-color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 3.5px solid black;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;
`;

const Waves = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  top: 0%;
  height: 100%;
  width: 3.5px;
  background-color: black;

  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 480px) {
    left: 9%;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 15px;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;

  @media (max-width: 900px) {
    top: 105px;
  }
`;

const CircleOne = styled.div`
  position: absolute;
  top: 170px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 255px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const CircleTwo = styled.div`
  position: absolute;
  top: 405px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 940px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const CircleThree = styled.div`
  position: absolute;
  top: 1340px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 1790px;
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
  font-family: "HelveticaNeue-Light";

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
  font-family: "HelveticaNeue-Light";
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  font-family: "HelveticaNeue-Light";
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
