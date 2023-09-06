import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import hand from "../../assets/svg/AboutUs/about-us-hand.png";

export default function Leistungen() {
  const contactButtonRef = useRef(); // Ref für den ContactButton

  // Funktion, um zur gewünschten Abschnitt zu scrollen
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const refs = {
    circleEnd: useRef(null),
    heading: useRef(null),
    rightdivone: useRef(null),
    rightdivtwo: useRef(null),
    boldText: useRef(null),
    leftDiv: useRef(null),
    rightdivthree: useRef(null),
    rightdivfour: useRef(null),
    rightdivfive: useRef(null),
    superbold: useRef(null),
    leftdivtwo: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    circleEnd: false,
    heading: false,
    rightdivone: false,
    rightdivtwo: false,
    boldText: false,
    leftDiv: false,
    rightdivthree: false,
    rightdivfour: false,
    rightdivfive: false,
    superbold: false,
    leftdivtwo: false,
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
      rootMargin: "-30px 0px -30px 0px",
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
      <Wrapper>
        <Line></Line>
        <ContactButton
          onClick={() => scrollToSection("kontakt")}
          ref={contactButtonRef}
        >
          <CallToAction>
            jetzt
            <br />
            offene stellen besetzen
          </CallToAction>
          <Hand src={hand} alt={hand}></Hand>
        </ContactButton>
        <InfoText>
          <Heading ref={refs.heading} isVisible={isVisible.heading}>
            LEISTUNGEN
          </Heading>
          <RightAligned
            ref={refs.rightdivone}
            isVisible={isVisible.rightdivone}
          >
            In Ihrem Unternehmen mangelt es an qualifizierten Mitarbeiter*innen
            oder sie suchen nach Fachkräften, um neue Projekte und Aufträge
            erfolgreich umzusetzen? Jedoch stoßen Sie auf Schwierigkeiten bei
            der Besetzung dieser Stellen mit einheimischen Fachkräften und
            wissen nicht, wie Sie Fachkräfte aus dem Ausland oder Drittstaaten
            rekrutieren und den damit verbundenen rechtlichen und bürokratischen
            Prozess bewältigen können?
          </RightAligned>
          <RightAligned
            ref={refs.rightdivtwo}
            isVisible={isVisible.rightdivtwo}
          >
            Als Experten und Expertinnen im Bereich der Personalvermittlung für
            ausländische Fachkräfte können wir Ihnen helfen. Wir verfügen über
            jahrelange Erfahrung in allen Bereichen des Einstellungsprozesses,
            von der rechtlichen Beratung bis hin zur Unterstützung bei sozialen
            Aspekten.
          </RightAligned>{" "}
          <BoldText ref={refs.boldText} isVisible={isVisible.boldText}>
            Wir haben <span>erfolgreich</span> zahlreiche Fachkräfte aus den
            Drittstaaten unterschiedlichster Branchen an namhafte Unternehmen in
            Deutschland vermittelt.
          </BoldText>{" "}
          <LeftDiv ref={refs.leftDiv} isVisible={isVisible.leftDiv}>
            {" "}
            Mit Schwerpunkten wie Anerkennung ausländischer Berufsabschlüsse,
            Familienzusammenführung, Arbeitsmarktzulassung der Bundesagentur für
            Arbeit sowie das beschleunigte Fachkräfteverfahren haben wir uns
            eingehend beschäftigt.{" "}
          </LeftDiv>
          <RightAligned
            ref={refs.rightdivthree}
            isVisible={isVisible.rightdivthree}
          >
            Unser Team steht Ihnen kompetent und engagiert zur Seite und
            begleitet Sie Schritt für Schritt durch den gesamten
            Einstellungsprozess. Dabei analysieren wir jeden einzelnen Aspekt
            eingehend und diskutieren diesen mit Ihnen ausführlich. unseren über
            Jahre hinweg erworbenen Erfahrungen und Kenntnissen werden wir Ihnen
            gezielt und individuell bewährte Tricks und Kniffe vermitteln, die
            Ihnen sonst niemand verrät, um Ihre Erfolgsaussichten auf ein
            Maximum zu steigern.
          </RightAligned>
          <RightAligned
            ref={refs.rightdivfour}
            isVisible={isVisible.rightdivfour}
          >
            Für diejenigen, die mit Begriffen wie Zustimmung,
            Anerkennungsbescheid, Defizitbescheid, Qualifizierungsplan oder
            Vorabzustimmung vertraut sind, ist bekannt wie komplex und
            herausfordernd der gesamte Prozess des Einstellens von
            internationalen Fachkräften sein kann.
          </RightAligned>
          <RightAligned
            ref={refs.rightdivfive}
            isVisible={isVisible.rightdivfive}
          >
            Mit großer Wahrscheinlichkeit wurden auch Sie schon mit einer Absage
            konfrontiert und haben sich gefragt - was haben wir falsch gemacht
            oder welchen Aspekt haben wir möglicherweise übersehen?
          </RightAligned>
          <LeftDiv ref={refs.leftdivtwo} isVisible={isVisible.leftdivtwo}>
            {" "}
            Um die Sinnhaftigkeit unseres Workshops für Ihr Unternehmen zu
            untersuchen, bieten wir Ihnen ein kostenloses Erstgespräch an. In
            diesem Gespräch können wir auf Ihre individuellen Bedürfnisse, Ziele
            und Erwartungen eingehen und herausfinden, wie unser Workshop Ihnen
            helfen kann. Wir legen Wert auf maßgeschneiderte Lösungen und
            möchten Ihre Situation genau verstehen, um Ihnen einen fundierten
            Einblick in den Nutzen und die Relevanz unseres Workshops zu geben.{" "}
          </LeftDiv>
        </InfoText>
      </Wrapper>
      <BoldTextWrapper>
        <SuperBoldTextLine>
          <SuperBoldTextCircle
            ref={refs.circleEnd}
            isVisible={isVisible.circleEnd}
          />
        </SuperBoldTextLine>
        <SuperBoldText ref={refs.superbold} isVisible={isVisible.superbold}>
          Wir bei <span>modern mind</span> geben Ihnen die Antwort auf all diese
          Fragen und decken gemeinsam alle versteckten Fallstricke auf. Durch
          unsere professionelle Unterstützung und ein individuelles Coaching
          gewährleisten wir, dass die Behörden Ihnen mit hoher
          Wahrscheinlichkeit grünes Licht geben werden.
        </SuperBoldText>
      </BoldTextWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 3.5px;
  background-color: grey;
  z-index: 100;
  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 700px) {
    left: 5%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const ContactButton = styled.a`
  display: flex;
  align-self: center;
  position: relative;
  background-color: white;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  border: 1vw solid black;
  margin-top: 100px;
  margin-left: 80px;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover img {
    transform: translateY(-70px) translateX(100px);
  }

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 700px) {
    margin-left: 0;
    margin-top: 90px;
  }

  @media (max-width: 480px) {
    width: 70vw;
    height: 70vw;
    border: 1.5vw solid black;
  }
`;

const CallToAction = styled.div`
  text-transform: uppercase;
  margin: 20px;
  font-weight: bold;
  font-size: 4.5vw;
  text-align: center;
  align-self: center;

  @media (max-width: 480px) {
    font-size: 5.5vw;
  }
`;

const Hand = styled.img`
  position: absolute;
  bottom: -15vw;
  left: -15vw;
  width: 38vw;
  transition: transform 0.4s ease; /* Hinzugefügte Transition */

  @media (max-width: 480px) {
    width: 47vw;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 400px;
  max-width: 1300px;
  font-size: 20px;

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  text-shadow: 1px 0 rgb(0, 0, 0);
  font-size: 55px;
  align-self: flex-end;
  padding: 20px;

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

const BoldText = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  font-weight: 500;
  font-size: 32px;
  padding: 20px;
  margin-top: 100px;

  max-width: 420px;
  z-index: 1;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  span {
    color: rgba(0, 0, 255);
    font-family: Righteous;
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin: 30px 0 20px 70px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    margin-left: 55px;
    margin-right: 10px;
  }
`;

const LeftDiv = styled.div`
  padding: 20px;
  max-width: 420px;
  margin-top: 50px;
  margin-bottom: 50px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
    margin-top: 30px;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    margin-left: 55px;
    margin-right: 10px;
  }
`;

const BoldTextWrapper = styled.div`
  position: relative;
`;

const SuperBoldText = styled.div`
  position: relative;
  align-self: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  font-weight: 500;
  font-size: 50px;
  margin: 150px 80px 200px 60px;
  max-width: 1200px;

  span {
    color: rgb(0, 0, 255);
    font-family: comfortaa;
    text-shadow: 1px 0 rgb(0, 0, 255);
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 650px) {
    margin: 150px 40px 200px 40px;
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 23px;
    margin-left: 55px;
  }
`;

const SuperBoldTextLine = styled.div`
  position: absolute;
  width: 3.5px;
  background-color: black;
  height: 80px;
  left: 50%;

  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 480px) {
    left: 9%;
  }
`;

const SuperBoldTextCircle = styled.div`
  position: absolute;
  top: 60px;
  left: -23px;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;
`;
