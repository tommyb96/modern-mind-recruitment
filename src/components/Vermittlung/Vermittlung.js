import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import haus from "../../assets/svg/Vermittlung/vermittlung-haus.svg";
import globus from "../../assets/svg/Vermittlung/vermittlung-globus.svg";

export default function Vermittlung() {
  return (
    <>
      <WhiteWrapper>
        {" "}
        <Line />
        <FirstTable>
          <tr>
            <Heading>Vermittlung</Heading>
          </tr>
          <tr>
            <LeftDiv>
              Unsere Expertise liegt in der gezielten Begleitung qualifizierter
              Fachkräfte aus Nicht-EU-Ländern bei langfristiger
              Erwerbsmigration. Anders als in der Arbeitnehmerüberlassung setzen
              wir auf nachhaltige Bindungen statt kurzfristiger Lösungen. Unser
              zentrales Versprechen ist die aktive Förderung von Personalbindung
              – eine Eigenschaft, die auf unserer Pro-Seite an erster Stelle
              steht.
            </LeftDiv>
            <th rowSpan={3}>
              <Haus src={haus} alt="haus" />
            </th>
          </tr>
          <tr>
            <LeftDiv>
              Unsere Fachkräfte streben danach, ihre bisherige Lebenssituation
              im Heimatland hinter sich zu lassen und in Deutschland einen
              Neuanfang zu verwirklichen. Unser Hauptaugenmerk liegt darauf,
              qualifizierten Fachkräften und ihren Familien dabei zu helfen,
              eine neue Perspektive aufzubauen.
            </LeftDiv>
          </tr>
          <tr>
            <BoldText>
              Wenn Ihr Unternehmen ein Teil dieser Entwicklung sein möchte, dann
              sind Sie bei uns genau an der richtigen Stelle!
            </BoldText>
          </tr>
          <tr>
            <th rowSpan={4}>
              <Globus src={globus} alt="globus"></Globus>
            </th>
            <BoldHeader>Woher kommen unsere Fachkräfte?</BoldHeader>
          </tr>
          <tr>
            <RightDiv>
              In unserer Mannschaft sind ausschließlich Fachexperten vertreten,
              die aus Ländern stammen deren Ausbildungsstrukturen mit denen aus
              Deutschland vergleichbar sind. Besonders legen wir Wert auf
              Beziehungen zu den GUS-Staaten, da unser Team in dieser Region
              verwurzelt ist und uns dies eine besonders vertrauensvolle
              Zusammenarbeit mit den Fachkräften ermöglicht. Hierzu zählen unter
              anderem Kasachstan, Russland und die Ukraine. Aber auch Fachkräfte
              aus Ländern wie Brasilien und Guatemala sind bei uns vertreten.
            </RightDiv>
          </tr>
          <tr>
            <BoldHeader>Wer sind unsere „Fachkräfte von morgen“?</BoldHeader>
          </tr>
          <tr>
            <RightDiv>
              Der Begriff "Fachkräfte von morgen" kann unterschiedliche
              Bedeutungen haben. Bei modern mind recruitment beschränken wir uns
              nicht allein auf hochqualifizierte Akademiker oder Auszubildende.
              Wir bieten vielfältige Lösungen für verschiedene Anforderungen.
              Das bedeutet, dass Sie bei uns potenzielle Azubis, Fachkräfte mit
              abgeschlossener Berufsausbildung sowie hochqualifizierte
              Akademiker finden können.
            </RightDiv>
          </tr>
          <tr>
            <BoldHeader>Auf welche Branchen verstehen wir uns?</BoldHeader>
            <th></th>
          </tr>
        </FirstTable>
        <HiddenFirstTable>
          <tr>
            <Heading>vermittlung</Heading>
          </tr>
          <tr>
            <LeftDiv>
              Unsere Expertise liegt in der gezielten Begleitung qualifizierter
              Fachkräfte aus Nicht-EU-Ländern bei langfristiger
              Erwerbsmigration. Anders als in der Arbeitnehmerüberlassung setzen
              wir auf nachhaltige Bindungen statt kurzfristiger Lösungen. Unser
              zentrales Versprechen ist die aktive Förderung von Personalbindung
              – eine Eigenschaft, die auf unserer Pro-Seite an erster Stelle
              steht.
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              Unsere Fachkräfte streben danach, ihre bisherige Lebenssituation
              im Heimatland hinter sich zu lassen und in Deutschland einen
              Neuanfang zu verwirklichen. Unser Hauptaugenmerk liegt darauf,
              qualifizierten Fachkräften und ihren Familien dabei zu helfen,
              eine neue Perspektive aufzubauen.
            </LeftDiv>
          </tr>
          <tr>
            <BoldText>
              Wenn Ihr Unternehmen ein Teil dieser Entwicklung sein möchte, dann
              sind Sie bei uns genau an der richtigen Stelle!
            </BoldText>
          </tr>
          <tr>
            <th>
              {" "}
              <Haus src={haus} alt="haus" />
            </th>
          </tr>
          <tr>
            <BoldHeader>Woher kommen unsere Fachkräfte?</BoldHeader>
          </tr>
          <tr>
            <RightDiv>
              In unserer Mannschaft sind ausschließlich Fachexperten vertreten,
              die aus Ländern stammen deren Ausbildungsstrukturen mit denen aus
              Deutschland vergleichbar sind. Besonders legen wir Wert auf
              Beziehungen zu den GUS-Staaten, da unser Team in dieser Region
              verwurzelt ist und uns dies eine besonders vertrauensvolle
              Zusammenarbeit mit den Fachkräften ermöglicht. Hierzu zählen unter
              anderem Kasachstan, Russland und die Ukraine. Aber auch Fachkräfte
              aus Ländern wie Brasilien und Guatemala sind bei uns vertreten.
            </RightDiv>
          </tr>
          <tr>
            <th>
              <Globus src={globus} alt="globus"></Globus>
            </th>
          </tr>
          <tr>
            <BoldHeader>Wer sind unsere „Fachkräfte von morgen“?</BoldHeader>
          </tr>
          <tr>
            <RightDiv>
              Der Begriff "Fachkräfte von morgen" kann unterschiedliche
              Bedeutungen haben. Bei modern mind recruitment beschränken wir uns
              nicht allein auf hochqualifizierte Akademiker oder Auszubildende.
              Wir bieten vielfältige Lösungen für verschiedene Anforderungen.
              Das bedeutet, dass Sie bei uns potenzielle Azubis, Fachkräfte mit
              abgeschlossener Berufsausbildung sowie hochqualifizierte
              Akademiker finden können.
            </RightDiv>
          </tr>
          <tr>
            <BoldHeader>Auf welche Branchen verstehen wir uns?</BoldHeader>
          </tr>
        </HiddenFirstTable>
      </WhiteWrapper>
    </>
  );
}

const WhiteWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: white;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 100%;
  width: 3.5px;
  background-color: darkgray;

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

const FirstTable = styled.table`
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  font-size: 20px;
  width: 50%;
  width: 1350px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Heading = styled.th`
  font-family: Comfortaa;
  font-size: 55px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;
  color: black;

  @media (max-width: 1400px) {
    padding-left: 20px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 33px;
  }
`;

const LeftDiv = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  font-size: 20px;
  text-align: start;
  padding-bottom: 30px;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 50px;
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    font-size: 18px;
  }
`;

const Haus = styled.img`
  width: 400px;

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const BoldText = styled.th`
  font-family: system-ui;
  font-weight: 500;
  color: black;
  width: 50%;
  padding-right: 100px;
  font-size: 20px;
  text-align: start;
  padding-bottom: 80px;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 50px;
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    font-size: 18px;
  }
`;

const BoldHeader = styled.th`
  font-weight: bold;
  font-size: 33px;
  text-align: start;
  padding-bottom: 40px;
  padding-left: 70px;
  padding-top: 50px;

  @media (max-width: 1400px) {
    padding-right: 20px;
    padding-left: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 26px;
  }
`;

const RightDiv = styled.th`
  width: 50%;
  text-align: start;
  padding-bottom: 30px;
  padding-left: 70px;

  @media (max-width: 1400px) {
    padding-right: 20px;
    padding-left: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    font-size: 18px;
  }
`;

const Globus = styled.img`
  width: 350px;

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const HiddenFirstTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 150px;

  @media (min-width: 901px) {
    display: none;
  }
`;
