import React from "react";
import styled from "styled-components";
import CV1 from "../svg/CV1.svg";
import CV2 from "../svg/CV2.svg";
import CV3 from "../svg/CV3.svg";

export default function Leistungen() {
  return (
    <>
      <InfoWrapper id="leistungen">
        {/* <Heading src={leistungen} alt="heading"></Heading> */}
        <CVOne src={CV1} alt="background picture cv"></CVOne>
        <CVTwo src={CV3} alt="background picture cv"></CVTwo>
        <CVThree src={CV2} alt="background picture cv"></CVThree>
        <InfoText>
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
          <BoldText>
            Wir haben <span>erfolgreich</span> zahlreiche Fachkräfte aus den
            Drittstaaten unterschiedlichster Branchen an namhafte Unternehmen in
            Deutschland vermittelt und uns mit Schwerpunkten wie Anerkennung
            ausländischer Berufs- abschlüsse, Familienzusammenführung,
            Arbeitsmarkt- zulassung der Bundesagentur für Arbeit sowie das
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

          <StyledDiv>
            Für diejenigen, die mit Begriffen wie Zustimmung,
            Anerkennungsbescheid, Defizitbescheid, Qualifizierungsplan oder
            Vorabzustimmung vertraut sind, ist bekannt wie komplex und
            herausfordernd der gesamte Prozess des Einstellens von
            internationalen Fachkräften sein kann.
          </StyledDiv>
          <StyledDiv>
            Sie wurden mit großer Wahrscheinlichkeit mit einer Absage
            konfrontiert und haben sich gefragt - was haben wir falsch gemacht
            oder welchen Aspekt haben wir möglicherweise übersehen?
          </StyledDiv>
        </InfoText>
      </InfoWrapper>
    </>
  );
}

const InfoWrapper = styled.div`
  position: relative;
`;

// const Heading = styled.img`
//   position: absolute;
// `;

const CVOne = styled.img`
  position: absolute;
  width: 400px;
  top: 1%;
  left: 5%;
  z-index: -1;
  opacity: 0.4;

  @media (max-width: 1280px) {
    opacity: 0.3;
  }
  @media (max-width: 480px) {
    width: 200px;
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
  width: 400px;
  top: 75%;
  right: 10%;
  z-index: -1;
  @media (max-width: 1280px) {
    opacity: 0.3;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: futura-pt, sans-serif;
  font-style: light;
  font-size: 20px;
  margin: 100px 100px 50px 100px;

  @media (max-width: 1024px) {
    margin: 5%;
  }
  @media (max-width: 480px) {
    margin: 3%;
  }
`;

const RightAligned = styled.div`
  align-self: flex-end;
  padding: 40px;
  max-width: 700px;
`;

const BoldText = styled.div`
  font-weight: 500;
  font-size: 30px;
  padding: 40px;
  max-width: 700px;
  span {
    color: rgb(0, 0, 255);
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;
const StyledDiv = styled.div`
  padding: 40px;
  max-width: 700px;
  span {
    color: rgb(0, 0, 255);
  }
`;
