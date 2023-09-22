import styled from "styled-components";

import card from "../../assets/svg/Beratung/beratung-card.svg";

export default function Beratung() {
  return (
    <>
      <PurpleWrapper>
        <Table>
          <Line>
            {" "}
            <Circle /> <LastCircle />
          </Line>
          <tr>
            <Heading colSpan={2}>beratung</Heading>
          </tr>
          <tr>
            <LeftDiv>
              Unsere individuelle Beratung beinhaltet eine gründliche Analyse
              Ihrer spezifischen Anforderungen, die Entwicklung
              maßgeschneiderter Strategien und die Bereitstellung praktischer
              Lösungen. Wir arbeiten eng mit Ihnen zusammen, um Ihre Ziele zu
              verstehen und Ihnen die besten Wege aufzuzeigen, wie Sie von den
              neuen Möglichkeiten des Fachkräfteeinwanderungsgesetzes
              profitieren können.
            </LeftDiv>
            <th rowSpan={3}>
              <Card src={card} alt="card" />
            </th>
          </tr>
          <tr>
            <LeftDiv>
              Unser Hauptaugenmerk liegt darauf, Ihnen einen klaren und
              effektiven Weg zur Rekrutierung internationaler Fachkräfte
              aufzuzeigen. Wir sind mit den komplexen bürokratischen Aspekten
              der Arbeitsmigration bestens vertraut und können Ihnen dabei
              helfen, den Prozess reibungslos zu gestalten. Egal, ob es darum
              geht, weltweit die besten Talente zu finden, die Chancen des
              Fachkräfteeinwanderungsgesetzes optimal zu nutzen oder Ihre eigene
              Personalabteilung für ausländische Fachkräfte zu etablieren – wir
              unterstützen Sie bei jedem Schritt auf diesem Weg.
            </LeftDiv>
          </tr>
          <tr>
            <th></th>
          </tr>
        </Table>
        <HiddenTable>
          <Line>
            {" "}
            <Circle /> <LastCircle />
          </Line>
          <tr>
            <Heading>beratung</Heading>
          </tr>
          <tr>
            <LeftDiv>
              Unsere individuelle Beratung beinhaltet eine gründliche Analyse
              Ihrer spezifischen Anforderungen, die Entwicklung
              maßgeschneiderter Strategien und die Bereitstellung praktischer
              Lösungen. Wir arbeiten eng mit Ihnen zusammen, um Ihre Ziele zu
              verstehen und Ihnen die besten Wege aufzuzeigen, wie Sie von den
              neuen Möglichkeiten des Fachkräfteeinwanderungsgesetzes
              profitieren können.
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              Unser Hauptaugenmerk liegt darauf, Ihnen einen klaren und
              effektiven Weg zur Rekrutierung internationaler Fachkräfte
              aufzuzeigen. Wir sind mit den komplexen bürokratischen Aspekten
              der Arbeitsmigration bestens vertraut und können Ihnen dabei
              helfen, den Prozess reibungslos zu gestalten. Egal, ob es darum
              geht, weltweit die besten Talente zu finden, die Chancen des
              Fachkräfteeinwanderungsgesetzes optimal zu nutzen oder Ihre eigene
              Personalabteilung für ausländische Fachkräfte zu etablieren – wir
              unterstützen Sie bei jedem Schritt auf diesem Weg.
            </LeftDiv>
          </tr>
          <tr>
            <CardContainer>
              <Card src={card} alt="card" />
            </CardContainer>
          </tr>
        </HiddenTable>
      </PurpleWrapper>
      <WhiteWrapper>
        {/* <TableOne>
          <tr className="First">
            <Checkmark>checkmark</Checkmark>
            <Aufzählung>Aufzählung</Aufzählung>
          </tr>
          <tr className="Second">
            <Info colSpan={2}>Information</Info>
          </tr>
        </TableOne> */}
      </WhiteWrapper>
    </>
  );
}

const TableOne = styled.table`
  tr.Second {
    display: none;
    opacity: 0;
    border: 2px solid black;
    transition: display 0s, opacity 0.3s ease;
  }

  tr.First:hover + tr.Second {
    display: table-row;
    opacity: 1;
  }

  tr.First {
    border: 2px solid black;
  }
`;

const PurpleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgb(92, 92, 255);
`;

const Table = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 150px;
  font-size: 20px;

  @media (max-width: 1400px) {
    margin-bottom: 100px;
  }

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 150%;
  width: 3.5px;
  background-color: darkgray;

  @media (max-width: 1400px) {
    height: 129%;
  }

  @media (max-width: 900px) {
    left: 10%;
    height: 120%;
  }

  @media (max-width: 700px) {
    left: 5%;
    height: 115%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid darkgray;
  z-index: 200;
`;

const Heading = styled.th`
  width: 50%;
  font-family: Comfortaa;
  font-size: 53px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;
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
  color: white;
  opacity: 0.8;

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

const CardContainer = styled.th`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const Card = styled.img`
  width: 500px;
  margin-bottom: -300px;

  @media (max-width: 1400px) {
    width: 410px;
  }

  @media (max-width: 900px) {
    margin-bottom: -130px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const WhiteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const HiddenTable = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 70px;
  margin-bottom: 50px;

  @media (min-width: 901px) {
    display: none;
  }
`;

const LastCircle = styled.div`
  position: absolute;
  bottom: -20px;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid darkgray;
  z-index: 200;
`;
