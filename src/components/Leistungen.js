import React from "react";
import styled from "styled-components";
import img3 from "../images/leistungen.jpg";

const Leistungen = () => {
  return (
    <>
      <StyledContainer id="leistungen">
        <img src={img3} width="100%" alt="leistungen" />
        <Wrapper>
          <h1>Leistungen</h1>
          <StyledDiv>
            In Ihrem Unternehmen mangelt es an qualifizierten Mitarbeiter oder
            sie suchen nach Fachkräften, um neue Projekte und Aufträge
            erfolgreich umzusetzen? Jedoch stoßen Sie auf Schwierigkeiten bei
            der Besetzung dieser Stellen mit einheimischen Fachkräften und
            wissen nicht, wie Sie Fachkräfte aus dem Ausland oder Drittstaaten
            rekrutieren und den damit verbundenen rechtlichen und bürokratischen
            Prozess bewältigen können?
          </StyledDiv>
          <StyledDiv>
            Als Experten im Bereich der Personalvermittlung für ausländische
            Fachkräfte können wir Ihnen helfen. Wir verfügen über jahrelange
            Erfahrung in allen Bereichen des Einstellungsprozesses, von der
            rechtlichen Beratung bis hin zur Unterstützung bei sozialen
            Aspekten.
          </StyledDiv>{" "}
          <StyledDiv>
            Wir haben erfolgreich zahlreiche Fachkräfte aus den Drittstaaten
            unterschiedlichster Branchen an namhafte Unternehmen in Deutschland
            vermittelt und uns mit Schwerpunkten wie Anerkennung ausländischer
            Berufsabschlüsse, Familienzusammenführung, Arbeitsmarktzulassung der
            Bundesagentur für Arbeit sowie das beschleunigte Fachkräfteverfahren
            beschäftigt.{" "}
          </StyledDiv>
          <StyledDiv>
            Unser Team steht Ihnen kompetent und engagiert zur Seite und
            begleitet Sie Schritt für Schritt durch den gesamten
            Einstellungsprozess. Dabei analysieren wir jeden einzelnen Aspekt
            eingehend und diskutieren diese mit Ihnen ausführlich. Mit unseren
            jahrelang erworbenen Erfahrungen und Kenntnissen werden wir Ihnen
            gezielt und individuell unsere bewährten Tricks und Kniffe
            vermitteln, die Ihnen sonst keiner verrät, um Ihre Erfolgsaussichten
            auf ein Maximum zu steigern.{" "}
          </StyledDiv>{" "}
          <StyledDiv>
            Für diejenigen, die mit Begriffen wie Zustimmung,
            Anerkennungsbescheid, Defizitbescheid, Qualifizierungsplan oder
            Vorabzustimmung vertraut sind, ist bekannt wie komplex und
            herausfordernd der gesamte Prozess des Einstellens von
            internationalen Fachkräften sein kann.{" "}
          </StyledDiv>
          <StyledDiv>
            Sie wurden mit großer Wahrscheinlichkeit mit einer Absage
            konfrontiert und haben sich gefragt - was haben wir falsch gemacht
            oder welchen Aspekt haben wir möglicherweise übersehen?{" "}
          </StyledDiv>
          <StyledDiv>
            Wir bei modern mind geben Ihnen die Antwort auf all diese Fragen und
            decken gemeinsam alle versteckten Fallstricke auf. Durch unsere
            professionelle Unterstützung und Coaching gewährleisten wir, dass
            die Behörden Ihnen garantiert grünes Licht geben.
          </StyledDiv>
        </Wrapper>
      </StyledContainer>
    </>
  );
};

export default Leistungen;

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Wrapper = styled.div`
  position: absolute;
  text-align: left;
  right: 0;
  color: white;
  padding: 4em;
  max-width: 800px;
  margin: auto;
`;
const StyledDiv = styled.div`
  padding: 0.1em;
`;
