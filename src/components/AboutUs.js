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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    observer.observe(document.querySelector("#welcome-message"));
  }, []);
  return (
    <>
      <StyledContainer>
        <Lupe src={lupe} alt="Lupe" />

        <WelcomeMessage
          id="welcome-message"
          className={isAnimated ? "animated" : ""}
        >
          {" "}
          <Rectangle />
          Herzlich Willkommen bei <br />
          <span>modern mind recruitment</span> und schön, dass sie hier sind, um
          einen Ausweg aus dem Fachkräftemangel zu finden. Wir garantieren Ihnen
          Ihren Erfolg!
        </WelcomeMessage>

        {/* <Header >
          <span>Ü</span>
          <span>B</span>
          <span>E</span>
          <span>R</span>
          <br />
          <span>U</span>
          <span>N</span>
          <span>S</span>
        </Header> */}
      </StyledContainer>
      <InfoWrapper id="über-uns">
        <InfoText>
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
        </InfoText>
      </InfoWrapper>
      <StyledForm>
        <div>
          <p>
            LASST UNS GEMEINSAM DIE <span>ZUKUNFT </span>
            UNSERER WIRTSCHAFT GESTALTEN
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

const Lupe = styled.img`
  width: 100vw;
  margin-top: 60px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WelcomeMessage = styled.div`
  position: absolute;
  top: 45%;
  width: 60vw;
  font-family: futura-pt, sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 5vw;
  transition: all 1s ease; /* CSS transition */
  &.animated {
    left: 10vw; /* final on-screen position */
  }

  span {
    font-family: "Righteous", cursive;
    color: rgb(0, 0, 255);
  }

  @media (max-width: 769px) {
    position: relative;
    margin-top: 100px;
    font-size: 8.4vw;
    width: 85vw;
    line-height: 12vw;
  }
`;

const Rectangle = styled.div`
  position: absolute;
  height: 18vw;
  width: 12vw;
  top: -8%;
  left: -10%;
  border: 1vw solid #0000ff;
  opacity: 0.2;
  transition: all 1s ease;

  @media (max-width: 768px) {
    top: -6%;
    left: -5%;
    height: 29vw;
    width: 19vw;
    border: 2vw solid #0000ff;
  }
`;

const InfoWrapper = styled.div`
  background-color: rgba(0, 167, 155, 0.25);
  margin-top: 100px;
  position: relative;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 200px 100px 100px 100px;
  font-family: futura-pt, sans-serif;
  font-style: light;
  font-size: 20px;
  div {
    padding: 40px;
    max-width: 600px;
  }

  @media (max-width: 1024px) {
    margin: 5%;
  }
  @media (max-width: 480px) {
    margin: 3%;
  }
`;
const Statement = styled.div`
  font-size: 50px;
  font-weight: 500;
`;

const RightAligned = styled.div`
  align-self: flex-end;
`;

const BoldText = styled.div`
  font-weight: 500;
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
