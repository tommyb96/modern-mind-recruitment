import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import CV1 from "../assets/svg/Leistungen/leistungen_cv_1.svg";
import CV2 from "../assets/svg/Leistungen/leistungen_cv_2.svg";
import CV3 from "../assets/svg/Leistungen/leistungen_cv_3.svg";
import video from "../assets/video.mp4";
import würfel from "../assets/svg/Leistungen/leistungen_würfel.svg";

export default function Leistungen() {
  const refs = {
    videoHeading: useRef(null),
    circle: useRef(null),
    circleStart: useRef(null),
    circleEnd: useRef(null),
    heading: useRef(null),
    rightdivone: useRef(null),
    rightdivtwo: useRef(null),
    cvone: useRef(null),
    boldText: useRef(null),
    leftDiv: useRef(null),
    cvtwo: useRef(null),
    rightdivthree: useRef(null),
    cvthree: useRef(null),
    rightdivfour: useRef(null),
    rightdivfive: useRef(null),
    superbold: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    videoHeading: false,
    circle: false,
    circleStart: false,
    circleEnd: false,
    heading: false,
    rightdivone: false,
    rightdivtwo: false,
    cvone: false,
    boldText: false,
    leftDiv: false,
    cvtwo: false,
    rightdivthree: false,
    cvthree: false,
    rightdivfour: false,
    rightdivfive: false,
    superbold: false,
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
      <Wrapper>
        <Filler>
          <VideoLine>
            <VideoCircle ref={refs.circle} isVisible={isVisible.circle} />
          </VideoLine>
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <Statement ref={refs.videoHeading} isVisible={isVisible.videoHeading}>
            Lasst uns gemeinsam die <span>Zukunft</span> unserer Wirtschaft
            gestalten!{" "}
          </Statement>{" "}
          <StyledForm id="leistungen"></StyledForm>
        </Filler>
        <InfoWrapper>
          <Würfel src={würfel} alt="würfel"></Würfel>
          <Line>
            <Circle ref={refs.circleStart} isVisible={isVisible.circleStart} />
            <CircleOne />
            <CircleTwo />
            <CircleThree />
            <CVOneLeft src={CV1} alt="background picture cv"></CVOneLeft>
            <CVTwoLeft src={CV2} alt="background picture cv"></CVTwoLeft>
            <CVThreeLeft src={CV3} alt="background picture cv"></CVThreeLeft>
          </Line>
          <InfoText>
            <Heading ref={refs.heading} isVisible={isVisible.heading}>
              LEISTUNGEN
            </Heading>
            <RightAligned
              ref={refs.rightdivone}
              isVisible={isVisible.rightdivone}
            >
              In Ihrem Unternehmen mangelt es an qualifizierten Mitarbeiter oder
              sie suchen nach Fachkräften, um neue Projekte und Aufträge
              erfolgreich umzusetzen? Jedoch stoßen Sie auf Schwierigkeiten bei
              der Besetzung dieser Stellen mit einheimischen Fachkräften und
              wissen nicht, wie Sie Fachkräfte aus dem Ausland oder Drittstaaten
              rekrutieren und den damit verbundenen rechtlichen und
              bürokratischen Prozess bewältigen können?
            </RightAligned>
            <RightAligned
              ref={refs.rightdivtwo}
              isVisible={isVisible.rightdivtwo}
            >
              Als Experten im Bereich der Personalvermittlung für ausländische
              Fachkräfte können wir Ihnen helfen. Wir verfügen über jahrelange
              Erfahrung in allen Bereichen des Einstellungsprozesses, von der
              rechtlichen Beratung bis hin zur Unterstützung bei sozialen
              Aspekten.
            </RightAligned>{" "}
            <CVOneRight
              ref={refs.cvone}
              isVisible={isVisible.cvone}
              src={CV1}
              alt="background picture cv"
            ></CVOneRight>
            <BoldText ref={refs.boldText} isVisible={isVisible.boldText}>
              Wir haben <span>erfolgreich</span> zahlreiche Fachkräfte aus den
              Drittstaaten unterschiedlichster Branchen an namhafte Unternehmen
              in Deutschland vermittelt.
            </BoldText>{" "}
            <LeftDiv ref={refs.leftDiv} isVisible={isVisible.leftDiv}>
              {" "}
              Mit Schwerpunkten wie Anerkennung ausländischer Berufsabschlüsse,
              Familienzusammenführung, Arbeitsmarktzulassung der Bundesagentur
              für Arbeit sowie das beschleunigte Fachkräfteverfahren habe wir
              uns eingehend beschäftigt.{" "}
            </LeftDiv>
            <CVTwoRight
              ref={refs.cvtwo}
              isVisible={isVisible.cvtwo}
              src={CV2}
              alt="background picture cv"
            ></CVTwoRight>
            <RightAligned
              ref={refs.rightdivthree}
              isVisible={isVisible.rightdivthree}
            >
              Unser Team steht Ihnen kompetent und engagiert zur Seite und
              begleitet Sie Schritt für Schritt durch den gesamten
              Einstellungsprozess. Dabei analysieren wir jeden einzelnen Aspekt
              eingehend und diskutieren diese mit Ihnen ausführlich. Mit unseren
              jahrelang erworbenen Erfahrungen und Kenntnissen werden wir Ihnen
              gezielt und individuell unsere bewährten Tricks und Kniffe
              vermitteln, die Ihnen sonst keiner verrät, um Ihre
              Erfolgsaussichten auf ein Maximum zu steigern.
            </RightAligned>
            <CVThreeRight
              ref={refs.cvthree}
              isVisible={isVisible.cvthree}
              src={CV3}
              alt="background picture cv"
            ></CVThreeRight>
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
              Sie wurden mit großer Wahrscheinlichkeit mit einer Absage
              konfrontiert und haben sich gefragt - was haben wir falsch gemacht
              oder welchen Aspekt haben wir möglicherweise übersehen?
            </RightAligned>
          </InfoText>
        </InfoWrapper>
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
          unsere professionelle Unterstützung und Coaching gewährleisten wir,
          dass die Behörden Ihnen garantiert grünes Licht geben.
        </SuperBoldText>
      </BoldTextWrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Filler = styled.div`
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
    height: 500px;
    object-fit: cover;
    opacity: 0.5;
    z-index: -1;
  }

  video::-webkit-media-controls {
    display: none !important;
  }

  @media (max-width: 1024px) {
    video {
      height: 450px;
    }
  }
`;

const Statement = styled.div`
  position: absolute;
  top: 0;
  margin: 70px 35px 40px 20px;
  z-index: 1;
  max-width: 600px;
  font-family: system-ui;
  font-weight: 500;
  font-size: 50px;
  text-transform: uppercase;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  span {
    color: rgb(0, 0, 255);
  }

  @media (max-width: 620px) {
    font-size: 37px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const VideoLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 50px;
  width: 3.5px;
  background-color: black;
  z-index: 100;

  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 480px) {
    left: 7%;
  }
`;

const VideoCircle = styled.div`
  position: absolute;
  top: 10px;
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

const StyledForm = styled.div`
  position: absolute;
  bottom: -10px;
  background-color: rgb(92, 92, 255);
  clip-path: polygon(0% 50%, 100% 0%, 100% 100%, 0% 100%);
  height: 200px;
  width: 100%;
  z-index: 0;
`;

const InfoWrapper = styled.div`
  position: relative;
  background-color: rgb(92, 92, 255);
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Würfel = styled.img`
  position: absolute;
  width: 100%;
  top: 400px;
  opacity: 0.5;

  @media (max-width: 1600px) {
    height: 1330px;
    width: auto;
  }

  @media (max-width: 900px) {
    height: 2000px;
    width: auto;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  height: 100%;
  width: 3.5px;
  background-color: black;
  z-index: 100;
  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 480px) {
    left: 7%;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: -10px;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;
`;

const CircleOne = styled.div`
  position: absolute;
  top: 130px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;
`;

const CircleTwo = styled.div`
  position: absolute;
  top: 670px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 1400px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const CircleThree = styled.div`
  position: absolute;
  top: 1420px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 2880px;
  }

  @media (max-width: 768px) {
    top: 2730px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 150px;
  max-width: 880px;
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

const CVOneLeft = styled.img`
  position: absolute;
  width: 330px;
  top: 150px;
  left: -410px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CVOneRight = styled.img`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 900px) {
    z-index: 200;
    align-self: flex-start;
    margin: 70px 0 70px 100px;
    width: 370px;
  }
  @media (max-width: 480px) {
    align-self: flex-start;
    margin: 50px 0 30px 100px;
    width: 240px;
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

const CVTwoLeft = styled.img`
  position: absolute;
  width: 450px;
  top: 810px;
  left: 70px;
  transform: rotate(-25deg);

  @media (max-width: 900px) {
    display: none;
  }
`;

const CVTwoRight = styled.img`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 900px) {
    z-index: 200;
    align-self: flex-start;
    margin: 100px 0 120px 100px;
    width: 450px;
    transform: rotate(-25deg);
  }

  @media (max-width: 480px) {
    align-self: flex-start;
    margin: 100px 0 90px 100px;
    width: 340px;
  }
`;

const CVThreeLeft = styled.img`
  position: absolute;
  width: 400px;
  top: 1750px;
  left: -440px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CVThreeRight = styled.img`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 900px) {
    z-index: 200;
    align-self: flex-start;
    margin: 70px 0 70px 100px;
    width: 370px;
  }
  @media (max-width: 480px) {
    align-self: flex-start;
    margin: 50px 0 30px 100px;
    width: 240px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
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
  font-family: system-ui;
  color: black;
  font-weight: 500;
  font-size: 50px;
  margin: 150px 80px 200px 60px;
  max-width: 1200px;
  span {
    color: rgb(0, 0, 255);
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
    left: 7%;
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
