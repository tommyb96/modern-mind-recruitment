import React from "react";
import styled from "styled-components";
import CV1 from "../svg/Leistungen/CV1.svg";
import CV2 from "../svg/Leistungen/CV2.svg";
import CV3 from "../svg/Leistungen/CV3.svg";
import item from "../svg/Leistungen/small_form.svg";

export default function Leistungen() {
  return (
    <>
      <InfoWrapper id="leistungen">
        {/* <Heading src={leistungen} alt="heading"></Heading> */}

        <InfoText>
          <CVOne src={CV1} alt="background picture cv"></CVOne>
          <RightAligned>
            In Ihrem Unternehmen mangelt es an qualifizierten Mitarbeiter oder
            sie suchen nach Fachkräften, um neue Projekte und Aufträge
            erfolgreich umzusetzen? Jedoch stoßen Sie auf Schwierigkeiten bei
            der Besetzung dieser Stellen mit einheimischen Fachkräften und
            wissen nicht, wie Sie Fachkräfte aus dem Ausland oder Drittstaaten
            rekrutieren und den damit verbundenen rechtlichen und bürokratischen
            Prozess bewältigen können?
          </RightAligned>
          <RightAligned>
            Als Experten im Bereich der Personalvermittlung für ausländische
            Fachkräfte können wir Ihnen helfen. Wir verfügen über jahrelange
            Erfahrung in allen Bereichen des Einstellungsprozesses, von der
            rechtlichen Beratung bis hin zur Unterstützung bei sozialen
            Aspekten.
          </RightAligned>
          <CVTwo src={CV3} alt="background picture cv"></CVTwo>
          <BoldText>
            Wir haben <span>erfolgreich</span> zahlreiche Fachkräfte aus den
            Drittstaaten unterschiedlichster Branchen an namhafte Unternehmen in
            Deutschland vermittelt und uns mit Schwerpunkten wie Anerkennung
            ausländischer Berufsabschlüsse, Familienzusammenführung,
            Arbeitsmarktzulassung der Bundesagentur für Arbeit sowie das
            beschleunigte Fachkräfteverfahren beschäftigt.{" "}
          </BoldText>
          <RightAligned>
            Unser Team steht Ihnen kompetent und engagiert zur Seite und
            begleitet Sie Schritt für Schritt durch den gesamten
            Einstellungsprozess. Dabei analysieren wir jeden einzelnen Aspekt
            eingehend und diskutieren diese mit Ihnen ausführlich. Mit unseren
            jahrelang erworbenen Erfahrungen und Kenntnissen werden wir Ihnen
            gezielt und individuell unsere bewährten Tricks und Kniffe
            vermitteln, die Ihnen sonst keiner verrät, um Ihre Erfolgsaussichten
            auf ein Maximum zu steigern.
          </RightAligned>
          <CVThree src={CV2} alt="background picture cv"></CVThree>
          <StyledDiv>
            <div>
              Für diejenigen, die mit Begriffen wie Zustimmung,
              Anerkennungsbescheid, Defizitbescheid, Qualifizierungsplan oder
              Vorabzustimmung vertraut sind, ist bekannt wie komplex und
              herausfordernd der gesamte Prozess des Einstellens von
              internationalen Fachkräften sein kann.
            </div>
            <div>
              Sie wurden mit großer Wahrscheinlichkeit mit einer Absage
              konfrontiert und haben sich gefragt - was haben wir falsch gemacht
              oder welchen Aspekt haben wir möglicherweise übersehen?
            </div>
          </StyledDiv>
        </InfoText>
      </InfoWrapper>
      <SuperBoldText>
        Wir bei <span>modern mind</span> geben Ihnen die Antwort auf all diese
        Fragen und decken gemeinsam alle versteckten Fallstricke auf. Durch
        unsere professionelle Unterstützung und Coaching gewährleisten wir, dass
        die Behörden Ihnen garantiert grünes Licht geben.
        <Element src={item} alt="background elemetnt"></Element>
      </SuperBoldText>
    </>
  );
}

const InfoWrapper = styled.div`
  position: relative;
  margin-top: 200px;
  @media (max-width: 1100px) {
    margin-top: 0;
  }
`;

// const Heading = styled.img`
//   position: absolute;
// `;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: futura-pt, sans-serif;
  font-style: light;
  font-size: 20px;
  margin: 100px;

  @media (max-width: 1024px) {
    margin: 5%;
  }
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
  max-width: 600px;
  margin-right: 50px;

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
  font-size: 45px;
  padding: 40px;
  max-width: 800px;
  margin-top: 150px;
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
const StyledDiv = styled.div`
  max-width: 600px;
  margin-top: 150px;

  div {
    padding: 20px;
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

const Element = styled.img`
  position: absolute;
  z-index: -1;
  top: 10%;
  right: 0%;
  opacity: 0.7;
  width: 300px;
`;
