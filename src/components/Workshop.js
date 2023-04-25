import React from "react";
import styled from "styled-components";
import img5 from "../images/workshop.jpg";
import { HashLink as Link } from "react-router-hash-link";

const Workshop = () => {
  return (
    <>
      <StyledContainer id="workshop">
        <img src={img5} width="100%" alt="workshop" />
        <Wrapper>
          <LeftWrapper>
            <h1>Workshop</h1>
            <StyledPTag>
              Sie haben festgestellt, dass die Verfügbarkeit geeigneter Bewerber
              in Ihrer Region abnimmt und Sie deshalb beabsichtigen, auch
              international nach qualifizierten Fachkräften zu suchen. Somit ist
              unser Workshop genau der richtige Ansatz für Sie.{" "}
            </StyledPTag>
            <StyledPTag>
              Um die Erwerbsmigration für ausländische Fachkräfte zu
              erleichtern, hat zum 01.03.2020 die Bundesregierung mit dem
              Fachkräfteeinwanderungsgesetz neue Vorraussetzungen geschaffen.
              Auf diese Bedingungen wollen wir aufbauen und unseren Kunden näher
              bringen, wie sie von diesen profitieren können.{" "}
            </StyledPTag>
            <StyledPTag>
              Gemeinsam werden wir in unserem umfangreichen Workshop mit
              Schwerpunkt auf die Fachkräfteeinwanderung auf alle wichtigen und
              ergebnisführenden Aspekte detailliert eingehen.{" "}
            </StyledPTag>
            <StyledPTag>
              Inhalt des Workshops: Beschäftigung ausländischer Fachkräfte in
              Deutschland
            </StyledPTag>
            <StyledPTag>
              <ol>
                <li>
                  Allgemeine Bestimmungen für eine Beschäftigung ausländischer
                  Fachkräfte
                </li>
                <li>
                  Visum- und Aufenthaltsregelungen
                  <ul>
                    <li>Einreisevisum und Aufenthaltstitel</li>
                    <li>Fachkräfte mit Berufsausbildung</li>
                    <li>Fachkräfte mit akademischer Ausbildung</li>
                    <li>Regelung für ausländische Auszubildende</li>
                  </ul>
                </li>
              </ol>
            </StyledPTag>
            {/* <StyledStatement></StyledStatement> */}
          </LeftWrapper>
          <MiddleWrapper>
            <StyledPTag>
              <ol start="3">
                <li>
                  Beteiligung der Bundesagentur für Arbeit
                  <ul>
                    <li>Zustimmung der Bundesagentur für Arbeit </li>
                    <li>Arbeitsmarktzulassung</li>
                  </ul>
                </li>
                <li>
                  Ausländerbehörde
                  <ul>
                    <li>Das beschleunigte Fachkräfteverfahren</li>
                    <li>Aufenthaltstitelbeantragung und -verlängerung</li>
                  </ul>
                </li>
                <li>
                  Anerkennung ausländischer Berufsqualifikationen
                  <ul>
                    <li>Grundlagen der Anerkennung</li>
                    <li>Anerkennungsverfahren</li>
                    <li>
                      Anerkennungsbescheid / Defizitbescheid
                      <ul>
                        <li>Volle und teilweise anerkannte Gleichwertigkeit</li>
                        <li>Qualifizierungsmaßnahmen</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Fördermittel</li>
                <li>
                  Erfolgskriterien
                  <ul>
                    <li>
                      Allgemeine Erfolgskriterien bei der Einstellung
                      ausländischer Fachkräfte{" "}
                    </li>
                    <li>Erfahrungen und Best Practices</li>
                  </ul>
                </li>
                <li>
                  Sozialer Aspekt
                  <ul>
                    <li>Familiennachzug</li>
                    <li>Onboarding-Prozess</li>
                    <li>Integration der ausländischen Fachkräfte</li>
                  </ul>
                </li>
              </ol>
            </StyledPTag>
            <StyledPTag>
              Im Rahmen des Workshops werden alle aufgelisteten Punkte eingehend
              behandelt und gründlich erläutert. Dabei werden nicht nur die
              grundlegenden Informationen zu jedem Thema dargelegt, sondern auch
              die praktischen Erkenntnisseauf diesem Gebiet eingeholt und
              vermittelt. So erhalten Sie nicht nur eine umfassende Übersicht
              über die verschiedenen Aspekte, sondern auch wertvolle Einblicke
              in die praktische Umsetzung und bewährte Strategien, um garantiert
              erfolgreich zu sein.
            </StyledPTag>
          </MiddleWrapper>
          <RightWrapper>
            <p>Ort: Präsenzwoorkshop</p>
            <p>Dauer: 1 - 2 Tage</p>
            <div>
              Zielgruppe:
              <ul>
                <li>vom Fachkräftemangel betroffende Unternehmen</li>
                <li>Unternehmen im Wachstum</li>
                <li>Unternehmen, die sich weiterbilden möchten</li>
                <li>Aus- und Weiterbildungseinrichtungen</li>
                <li>Personalvermittlungsunternehmen</li>
              </ul>
            </div>
            <Link smooth to="#kontakt">
              Termin buchen und Preis anfragen
            </Link>
          </RightWrapper>
        </Wrapper>
      </StyledContainer>
    </>
  );
};

export default Workshop;

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  padding: 4rem;
`;

const LeftWrapper = styled.div`
  color: white;
  margin: auto;
  width: 40%;
`;

const StyledPTag = styled.div`
  font-weight: 350;
  font-size: 1.1em;
`;

const MiddleWrapper = styled.div`
  text-align: left;
  color: white;
  margin: auto;
  width: 40%;
`;

const RightWrapper = styled.div`
  text-align: left;
  color: white;
  padding: 1rem;
  margin: auto;
  width: 20%;
`;
