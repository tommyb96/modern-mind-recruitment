import React from "react";
import styled from "styled-components";

import CV1 from "../assets/svg/Leistungen/leistungen_cv_1.svg";
import CV2 from "../assets/svg/Leistungen/leistungen_cv_1.svg";
import CV3 from "../assets/svg/Leistungen/leistungen_cv_1.svg";
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
        <StyledContainer id="leistungen">
          <Line>
            <Circle />
          </Line>
          <InfoText>
            <Heading>LEISTUNGEN</Heading>
            <CVOne src={CV1} alt="background picture cv"></CVOne>
            <RightAligned>
              In Ihrem Unternehmen mangelt es an qualifizierten Mitarbeiter oder
              sie suchen nach Fachkräften, um neue Projekte und Aufträge
              erfolgreich umzusetzen? Jedoch stoßen Sie auf Schwierigkeiten bei
              der Besetzung dieser Stellen mit einheimischen Fachkräften und
              wissen nicht, wie Sie Fachkräfte aus dem Ausland oder Drittstaaten
              rekrutieren und den damit verbundenen rechtlichen und
              bürokratischen Prozess bewältigen können?
            </RightAligned>
            <RightAligned>
              Als Experten im Bereich der Personalvermittlung für ausländische
              Fachkräfte können wir Ihnen helfen. Wir verfügen über jahrelange
              Erfahrung in allen Bereichen des Einstellungsprozesses, von der
              rechtlichen Beratung bis hin zur Unterstützung bei sozialen
              Aspekten.
            </RightAligned>
            <CVTwo src={CV2} alt="background picture cv"></CVTwo>
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
            <CVThree src={CV3} alt="background picture cv"></CVThree>
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
        </StyledContainer>
      </Wrapper>
      <SuperBoldText>
        Wir bei <span>modern mind</span> geben Ihnen die Antwort auf all diese
        Fragen und decken gemeinsam alle versteckten Fallstricke auf. Durch
        unsere professionelle Unterstützung und Coaching gewährleisten wir, dass
        die Behörden Ihnen garantiert grünes Licht geben.
      </SuperBoldText>
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

const StyledContainer = styled.div`
  position: relative;
  background-color: rgb(92, 92, 255);
  width: 100%;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
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
  top: 10%;
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
  margin-top: 200px;
  max-width: 880px;
  font-size: 20px;
`;

const Heading = styled.div`
  font-family: Comfortaa;
  text-shadow: 1px 0 rgb(0, 0, 0);
  font-size: 55px;
  align-self: center;
  /* margin-left: 450px; */
`;

const CVOne = styled.img`
  position: absolute;
  width: 450px;
  top: -8%;
  left: 15%;
  z-index: -1;
  opacity: 0.4;

  @media (max-width: 1450px) {
    width: 350px;
    left: 10%;
  }
  @media (max-width: 1230px) {
    width: 270px;
    left: 10%;
    top: -5%;
  }
  @media (max-width: 1100px) {
    position: relative;
    width: 350px;
    margin-bottom: 30px;
  }
  @media (max-width: 820px) {
    left: 0;
    width: 350px;
    margin-bottom: 30px;
    align-self: center;
  }
  @media (max-width: 480px) {
    left: 0;
    width: 250px;
    margin-bottom: 30px;
  }
`;

const RightAligned = styled.div`
  align-self: flex-end;
  padding: 20px;
  max-width: 420px;

  @media (max-width: 1230px) {
    margin-right: 0;
  }
`;

const CVTwo = styled.img`
  position: absolute;
  width: 250px;
  top: 32%;
  right: 10%;
  z-index: -1;
  opacity: 1;
  @media (max-width: 1280px) {
    opacity: 0.3;
  }
`;

const CVThree = styled.img`
  position: absolute;
  width: 350px;
  top: 78%;
  right: 10%;
  z-index: -1;
  @media (max-width: 1280px) {
    opacity: 0.3;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
  color: black;
  font-weight: 500;
  font-size: 26px;
  padding: 20px;
  max-width: 420px;
  span {
    color: rgb(0, 0, 255);
  }
  @media (max-width: 1024px) {
    font-size: 35px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 550px) {
    font-size: 23px;
  }
`;

const SuperBoldText = styled.div`
  position: relative;
  align-self: center;
  font-family: system-ui;
  color: black;
  font-weight: 500;
  font-size: 50px;
  padding: 80px;
  margin: 100px;
  max-width: 1200px;
  span {
    color: rgb(0, 0, 255);
  }
  @media (max-width: 1024px) {
    font-size: 40px;
    margin: 5%;
  }
  @media (max-width: 650px) {
    margin: 3%;
    padding: 40px;
    font-size: 28px;
  }
  @media (max-width: 480px) {
    margin: 3%;
    font-size: 23px;
  }
`;
