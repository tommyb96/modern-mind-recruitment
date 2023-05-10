import React from "react";
import styled from "styled-components";

import CV1 from "../assets/svg/Leistungen/leistungen_cv_1.svg";
import CV2 from "../assets/svg/Leistungen/leistungen_cv_2.svg";
import CV3 from "../assets/svg/Leistungen/leistungen_cv_3.svg";
import video from "../assets/video.mp4";

export default function Leistungen() {
  return (
    <>
      <Wrapper>
        <Filler>
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <p>
            Lasst uns gemeinsam die <span>Zukunft</span> unserer Wirtschaft
            gestalten!{" "}
          </p>{" "}
          <StyledForm>
            <Line />
          </StyledForm>
        </Filler>
        <InfoWrapper id="leistungen">
          <Line>
            <Circle />
            <CVOneLeft src={CV1} alt="background picture cv"></CVOneLeft>
            <CVTwoLeft src={CV2} alt="background picture cv"></CVTwoLeft>
            <CVThreeLeft src={CV3} alt="background picture cv"></CVThreeLeft>
          </Line>
          <InfoText>
            <Heading>LEISTUNGEN</Heading>
            <RightAligned>
              In Ihrem Unternehmen mangelt es an qualifizierten Mitarbeiter oder
              sie suchen nach Fachkräften, um neue Projekte und Aufträge
              erfolgreich umzusetzen? Jedoch stoßen Sie auf Schwierigkeiten bei
              der Besetzung dieser Stellen mit einheimischen Fachkräften und
              wissen nicht, wie Sie Fachkräfte aus dem Ausland oder Drittstaaten
              rekrutieren und den damit verbundenen rechtlichen und
              bürokratischen Prozess bewältigen können?
            </RightAligned>
            <CVOneRight src={CV1} alt="background picture cv"></CVOneRight>
            <RightAligned>
              Als Experten im Bereich der Personalvermittlung für ausländische
              Fachkräfte können wir Ihnen helfen. Wir verfügen über jahrelange
              Erfahrung in allen Bereichen des Einstellungsprozesses, von der
              rechtlichen Beratung bis hin zur Unterstützung bei sozialen
              Aspekten.
            </RightAligned>
            <CVTwoRight src={CV2} alt="background picture cv"></CVTwoRight>
            <BoldText>
              Wir haben <span>erfolgreich</span> zahlreiche Fachkräfte aus den
              Drittstaaten unterschiedlichster Branchen an namhafte Unternehmen
              in Deutschland vermittelt und uns mit Schwerpunkten wie
              Anerkennung ausländischer Berufsabschlüsse,
              Familienzusammenführung, Arbeitsmarktzulassung der Bundesagentur
              für Arbeit sowie das beschleunigte Fachkräfteverfahren
              beschäftigt.{" "}
            </BoldText>
            <RightAligned>
              Unser Team steht Ihnen kompetent und engagiert zur Seite und
              begleitet Sie Schritt für Schritt durch den gesamten
              Einstellungsprozess. Dabei analysieren wir jeden einzelnen Aspekt
              eingehend und diskutieren diese mit Ihnen ausführlich. Mit unseren
              jahrelang erworbenen Erfahrungen und Kenntnissen werden wir Ihnen
              gezielt und individuell unsere bewährten Tricks und Kniffe
              vermitteln, die Ihnen sonst keiner verrät, um Ihre
              Erfolgsaussichten auf ein Maximum zu steigern.
            </RightAligned>
            <CVThreeRight src={CV3} alt="background picture cv"></CVThreeRight>
            <RightAligned>
              Für diejenigen, die mit Begriffen wie Zustimmung,
              Anerkennungsbescheid, Defizitbescheid, Qualifizierungsplan oder
              Vorabzustimmung vertraut sind, ist bekannt wie komplex und
              herausfordernd der gesamte Prozess des Einstellens von
              internationalen Fachkräften sein kann.
            </RightAligned>
            <RightAligned>
              Sie wurden mit großer Wahrscheinlichkeit mit einer Absage
              konfrontiert und haben sich gefragt - was haben wir falsch gemacht
              oder welchen Aspekt haben wir möglicherweise übersehen?
            </RightAligned>
          </InfoText>
        </InfoWrapper>
      </Wrapper>
      <BoldTextWrapper>
        <SuperBoldTextLine>
          <SuperBoldTextCircle />
        </SuperBoldTextLine>
        <SuperBoldText>
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

  p {
    position: absolute;
    top: 0;
    margin: 20px 35px 40px 20px;
    z-index: 1;
    max-width: 600px;
    font-family: system-ui;
    font-weight: 500;
    font-size: 50px;
    text-transform: uppercase;
    span {
      color: rgb(0, 0, 255);
    }
  }

  @media (max-width: 1024px) {
    video {
      height: 450px;
    }
  }
  @media (max-width: 620px) {
    p {
      font-size: 45px;
    }
  }
  @media (max-width: 620px) {
    p {
      font-size: 37px;
    }
  }
`;

const StyledForm = styled.div`
  position: absolute;
  bottom: 0;
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

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 100%;
  width: 2.5px;
  background-color: black;
  z-index: 100;
  @media (max-width: 900px) {
    left: 15%;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 20px;
  left: -14px;
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2.5px solid black;
  z-index: 200;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 200px;
  max-width: 880px;
  font-size: 20px;

  @media (max-width: 900px) {
    max-width: 500px;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  text-shadow: 1px 0 rgb(0, 0, 0);
  font-size: 55px;
  align-self: flex-end;
  padding: 20px;
  /* margin-left: 300px; */
  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }

  @media (max-width: 480px) {
    font-size: 39px;
  }
`;

const CVOneLeft = styled.img`
  position: absolute;
  width: 380px;
  top: 140px;
  left: -410px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CVOneRight = styled.img`
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 900px) {
    align-self: flex-start;
    margin: 70px 0 70px 100px;
    width: 370px;
  }
  @media (max-width: 480px) {
    align-self: flex-start;
    margin: 50px 0 50px 100px;
    width: 240px;
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

const CVTwoLeft = styled.img`
  position: absolute;
  width: 500px;
  top: 900px;
  left: 70px;
  transform: rotate(-25deg);

  @media (max-width: 900px) {
    display: none;
  }
`;

const CVTwoRight = styled.img`
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 900px) {
    z-index: 200;
    align-self: flex-start;
    margin: 70px 0 120px 100px;
    width: 450px;
    transform: rotate(-25deg);
  }
  @media (max-width: 480px) {
    align-self: flex-start;
    margin: 50px 0 70px 100px;
    width: 340px;
  }
`;

const CVThreeLeft = styled.img`
  position: absolute;
  width: 400px;
  top: 78%;
  left: -440px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const CVThreeRight = styled.img`
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 900px) {
    align-self: flex-start;
    margin: 70px 0 70px 100px;
    width: 370px;
  }
  @media (max-width: 480px) {
    align-self: flex-start;
    margin: 50px 0 50px 100px;
    width: 240px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
  color: black;
  font-weight: 500;
  font-size: 32px;
  padding: 20px;
  max-width: 420px;
  span {
    color: rgb(0, 0, 255);
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
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

  @media (max-width: 1024px) {
    font-size: 40px;
  }
  @media (max-width: 650px) {
    margin: 150px 40px 200px 40px;
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 23px;
  }
`;

const SuperBoldTextLine = styled.div`
  position: absolute;
  width: 2.5px;
  background-color: black;
  height: 80px;
  left: 50%;

  @media (max-width: 900px) {
    left: 15%;
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
  border: 2.5px solid black;
  z-index: 200;
`;
