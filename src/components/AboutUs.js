import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import waves from "../svg/AboutUs/waves.png";
import heading from "../svg/AboutUs/about_us_heading.svg";

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
          <Rectangle />
          Herzlich Willkommen bei <br />
          <span>modern mind recruitment</span> und schön, dass sie hier sind, um
          einen Ausweg aus dem Fachkräftemangel zu finden. Wir garantieren Ihnen
          Ihren Erfolg!
        </WelcomeMessage>
      </StyledContainer>
      <Waves src={waves} alt="waves"></Waves>
      <InfoWrapper id="über-uns">
        <Heading src={heading} alt="heading"></Heading>
        <InfoText>
          <div>
            Es ist kein Geheimnis, dass es in Deutschland an Fachkräften
            mangelt. Immer mehr Unternehmen kämpfen damit, ihre offenen Stellen
            mit qualifizierten Mitarbeitern zu besetzen. Aber was tun?
          </div>
          <Statement ref={statementRef} isVisible={statementVisible}>
            Die Lösung liegt in Fachkräften aus dem Ausland!
          </Statement>
          <RightAligned ref={rightAlignedRef} isVisible={rightAlignedVisible}>
            Ganz genau, warum nicht die internationalen Talente für eure offenen
            Stellen gewinnen? Es gibt unzählige qualifizierte Fachkräfte auf der
            ganzen Welt die nicht wie Deutschland vom demografischen Wandel
            betroffen sind mehr Fachkräfte als zu besetzende Stellen zu
            Verfügung haben, die auf der Suche nach einer neuen Herausforderung
            und einer Chance sind, ihr Können unter Beweis zu stellen. Denn die
            alternde Bevölkerung nimmt in Deutschland jährlich zu.
          </RightAligned>
          <BoldText ref={boldTextRef} isVisible={boldTextVisible}>
            Aus eigener Erfahrung wissen wir, dass das Einstellen von
            internationalen Fachkräften eine Herausforderung sein kann. Aber
            keine Sorge, wir stehen Ihnen mit Rat und Tat zur Seite.
          </BoldText>
          <div>
            Unser Team ist eine Gruppe von Personalberatern, die jahrelang in
            der Branche Fachkräfte aus den Drittstaaten tätig war und immer noch
            ist, und dabei so ziemlich alles erlebt hat, was man sich vorstellen
            kann. Von skurrilen Gesetzen bis hin zur Anerkennung ausländischer
            Berufsqualifikationen - wir haben alle möglichen Situationen
            gemeistert.
          </div>
          <div>
            Deshalb haben wir beschlossen, unser Wissen und unsere
            Pro-Kenntnisse dazu zu nutzen, anderen Unternehmen dabei zu helfen,
            diesen Prozess zu rationalisieren und zu vereinfachen.
          </div>
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
  margin: 200px 50px 0 50px;
  max-width: 1000px;
  text-align: center;
  font-family: system-ui;
  font-weight: 500;
  font-size: 40px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  span {
    font-family: "Comfortaa", cursive;
    text-shadow: 1px 0 rgb(0, 0, 255);
    font-size: 45px;
    font-weight: bold;
    color: rgb(0, 0, 255);
  }

  //media query
  @media (max-width: 1024px) {
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    margin: 100px 10px 50px 10px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
    span {
      font-size: 32px;
    }
  }
`;

const Rectangle = styled.div`
  position: absolute;
  height: 170px;
  width: 170px;
  top: -25%;
  left: 25%;
  border: 15px solid #0000ff;
  opacity: 0.2;

  // media query
  @media (max-width: 1024px) {
    height: 150px;
    width: 150px;
    top: -16%;
    left: 20%;
  }
  @media (max-width: 480px) {
    border: 13px solid #0000ff;
    top: -12%;
    left: 10%;
  }
`;

const InfoWrapper = styled.div`
  background-color: rgba(202, 231, 252);
  position: relative;
`;

const Waves = styled.img`
  width: 100vw;
  z-index: -1;
`;

const Heading = styled.img`
  position: absolute;
  width: 80px;
  top: 5%;
  left: 1%;
  fill: #fff;

  //media query
  @media (max-width: 786px) {
    width: 60px;
  }
  @media (max-width: 480px) {
    width: 45px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 200px 100px 100px 200px;
  font-size: 20px;
  div {
    padding: 20px;
    max-width: 600px;
  }

  //media query
  @media (max-width: 768px) {
    margin: 100px;
  }
  @media (max-width: 700px) {
    margin: 100px 10px 100px 100px;
  }
  @media (max-width: 480px) {
    margin: 100px 10px 50px 60px;
  }
`;
const Statement = styled.div`
  font-family: Comfortaa;
  font-weight: 500;
  font-size: 50px;
  color: black;
  text-shadow: 1px 0 rgb(0, 0, 255);

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const RightAligned = styled.div`
  align-self: flex-end;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const BoldText = styled.div`
  font-family: system-ui;
  font-weight: 500;
  color: black;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
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
