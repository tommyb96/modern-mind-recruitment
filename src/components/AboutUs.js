import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import lupe from "../svg/AboutUs_Hintergrund.svg";

const AboutUs = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entricdes) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(document.querySelector("#welcome-message"));
    observer.observe(document.querySelector("#rectangle"));
  }, []);
  return (
    <>
      <StyledContainer>
        <Lupe src={lupe} alt="Lupe" />

        <Rectangle
          id="rectangle"
          className={isAnimated ? "animated" : ""}
        ></Rectangle>
        <WelcomeMessage
          id="welcome-message"
          className={isAnimated ? "animated" : ""}
        >
          Herzlich Willkommen bei <br />
          <MMR>modern mind recruitment</MMR> und schön, dass sie hier sind, um
          einen Ausweg aus dem Fachkräftemangel zu finden. Wir garantieren Ihnen
          Ihren Erfolg!
        </WelcomeMessage>

        <Header id="über-uns">
          <span>Ü</span>
          <span>B</span>
          <span>E</span>
          <span>R</span>
          <br />
          <span>U</span>
          <span>N</span>
          <span>S</span>
        </Header>
        <InformationText>
          <div>
            Es ist kein Geheimnis, dass es in Deutschland an Fachkräften
            mangelt. Immer mehr Unternehmen kämpfen damit, ihre offenen Stellen
            mit qualifizierten Mitarbeitern zu besetzen. Aber was tun?
          </div>
          <Statement>
            Die Lösung liegt in Fachkräften aus dem Ausland!
          </Statement>
          <RightAligned>
            Ganz genau, warum nicht die internationalen Talente für eure offenen
            Stellen gewinnen? Es gibt unzählige qualifizierte Fachkräfte auf der
            ganzen Welt die nicht wie Deutschland vom demografischen Wandel
            betroffen sind mehr Fachkräfte als zu besetzende Stellen zu
            Verfügung haben, die auf der Suche nach einer neuen Herausforderung
            und einer Chance sind, ihr Können unter Beweis zu stellen. Denn die
            alternde Bevölkerung nimmt in Deutschland jährlich zu.
          </RightAligned>
          <BoldText>
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
        </InformationText>
      </StyledContainer>
    </>
  );
};

export default AboutUs;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Lupe = styled.img`
  width: 100vw;
`;

const Rectangle = styled.div`
  position: absolute;
  height: 15vw;
  width: 10vw;
  top: 97vw;
  left: -10vw; /* initial off-screen position */
  border: 0.7vw solid #0000ff;
  opacity: 0.2;
  transition: all 1s ease; /* CSS transition */
  &.animated {
    left: 8vw; /* final on-screen position */
  }
`;

const WelcomeMessage = styled.div`
  position: absolute;
  top: 100vw;
  left: -10vw; /* initial off-screen position */
  width: 50vw;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 3.5vw;
  transition: all 1s ease; /* CSS transition */
  &.animated {
    left: 10vw; /* final on-screen position */
  }
`;

const MMR = styled.span`
  font-family: "Righteous", cursive;
  color: rgb(0, 0, 255);
`;

const Header = styled.h1`
  position: absolute;
  top: 150vw;
  display: flex;
  flex-direction: column;
  font-family: "Comfortaa", cursive;
  font-size: 5vw;
  color: rgba(0, 0, 0, 0.7);
`;

const InformationText = styled.div`
  font-family: futura-pt, sans-serif;
  font-style: light;
  font-size: 1.4vw;
  margin: 20vw 15vw 0 15vw;

  div {
    padding: 1vw;
    width: 40vw;
  }
`;

const Statement = styled.div`
  font-size: 5vw;
  font-weight: 500;
`;

const RightAligned = styled.div`
  margin: 10vw 0 10vw 35vw;
`;

const BoldText = styled.div`
  font-weight: 500;
`;
