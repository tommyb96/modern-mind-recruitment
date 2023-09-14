import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

import WorkshopIntro from "./WorkshopIntro";
import woman from "../../assets/svg/Workshop/wokshop-woman.svg";

export default function Workshop() {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);
  const [isOpenSeven, setIsOpenSeven] = useState(false);

  const toggleOpenOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  const toggleOpenTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const toggleOpenThree = () => {
    setIsOpenThree(!isOpenThree);
  };

  const toggleOpenFour = () => {
    setIsOpenFour(!isOpenFour);
  };

  const toggleOpenFive = () => {
    setIsOpenFive(!isOpenFive);
  };

  const toggleOpenSix = () => {
    setIsOpenSix(!isOpenSix);
  };

  const toggleOpenSeven = () => {
    setIsOpenSeven(!isOpenSeven);
  };

  return (
    <>
      {" "}
      <div id="workshop">
        <WorkshopIntro />
        <Wrapper>
          {" "}
          <Line>
            <WorkshopCircle />
            <LastCircle />
          </Line>
          <Table>
            <TableRow>
              <WomanCell rowSpan={26}>
                <Woman src={woman} alt="woman" />
              </WomanCell>
            </TableRow>
            <TableRow>
              <Heading colSpan={3}>
                Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
                in Deutschland:
              </Heading>
            </TableRow>
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenOne} onClick={toggleOpenOne} />
              </BlueTriangle>

              <Zahl>1</Zahl>

              <Überschrift colSpan={2}>Allgemeine Voraussetzungen</Überschrift>
            </TableRow>
            {isOpenOne && (
              <TableRow>
                <ListParagraph open={isOpenOne} colSpan={3}>
                  Allgemeine Richtlinien für die Einstellung ausländischer
                  Fachkräfte
                </ListParagraph>
              </TableRow>
            )}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenTwo} onClick={toggleOpenTwo} />
              </BlueTriangle>

              <Zahl>2</Zahl>

              <Überschrift colSpan={2}>
                Regelungen für Visum und Aufenthaltstitel
              </Überschrift>
            </TableRow>
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Einreisevisum und Aufenthaltstitel
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Fachkräfte mit Berufsausbildung
                </ListParagraph>
              </TableRow>
            )}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Fachkräfte mit akademischer Ausbildung
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Auszubildende
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Studierende
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenThree} onClick={toggleOpenThree} />
              </BlueTriangle>

              <Zahl>3</Zahl>

              <Überschrift colSpan={2}>
                Beteiligung der Bundesagentur für Arbeit
              </Überschrift>
            </TableRow>
            {isOpenThree && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Zustimmung der Bundesagentur
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenThree && (
              <TableRow>
                <ListParagraph colSpan={3}>Arbeitsmarktzulassung</ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFour} onClick={toggleOpenFour} />
              </BlueTriangle>

              <Zahl>4</Zahl>

              <Überschrift colSpan={2}>
                Beteiligung der Ausländerbehörde
              </Überschrift>
            </TableRow>
            {isOpenFour && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Das beschleunigte Fachkräfteverfahren nach §81a
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenFour && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Aufenthaltstitelbentragung und -verlängerung
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFive} onClick={toggleOpenFive} />
              </BlueTriangle>

              <Zahl>5</Zahl>

              <Überschrift colSpan={2}>
                Anerkennung ausländischer Berufsabschlüsse
              </Überschrift>
            </TableRow>
            {isOpenFive && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Grundlagen der Anerkennung
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenFive && (
              <TableRow>
                <ListParagraph colSpan={3}>Anerkennungsverfahren</ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenFive && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Anerkennungsbescheid / Defizitbescheid
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSix} onClick={toggleOpenSix} />
              </BlueTriangle>

              <Zahl>6</Zahl>

              <Überschrift colSpan={2}>Möglichkeiten der Förderung</Überschrift>
            </TableRow>
            {isOpenSix && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Anforderungen und Optionen zur Antragstellung von
                  Fördermitteln
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSeven} onClick={toggleOpenSeven} />
              </BlueTriangle>

              <Zahl>7</Zahl>

              <Überschrift colSpan={2}>Sozialer Aspekt</Überschrift>
            </TableRow>
            {isOpenSeven && (
              <TableRow>
                <ListParagraph colSpan={3}>Familiennachzug</ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenSeven && (
              <TableRow>
                <ListParagraph colSpan={3}>Onboarding-Prozess</ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenSeven && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Integration von ausländischen Fachkräften
                </ListParagraph>
              </TableRow>
            )}
          </Table>
          <HiddenTable>
            <TableRow>
              {" "}
              <Heading colSpan={3}>
                Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
                in Deutschland:
              </Heading>
            </TableRow>
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenOne} onClick={toggleOpenOne} />
              </BlueTriangle>

              <Zahl>1</Zahl>

              <Überschrift colSpan={2}>Allgemeine Voraussetzungen</Überschrift>
            </TableRow>
            {isOpenOne && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Allgemeine Richtlinien für die Einstellung ausländischer
                  Fachkräfte
                </ListParagraph>
              </TableRow>
            )}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenTwo} onClick={toggleOpenTwo} />
              </BlueTriangle>

              <Zahl>2</Zahl>

              <Überschrift colSpan={2}>
                Regelungen für Visum und Aufenthaltstitel
              </Überschrift>
            </TableRow>
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Einreisevisum und Aufenthaltstitel
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Fachkräfte mit Berufsausbildung
                </ListParagraph>
              </TableRow>
            )}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Fachkräfte mit akademischer Ausbildung
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Auszubildende
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenTwo && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Studierende
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenThree} onClick={toggleOpenThree} />
              </BlueTriangle>

              <Zahl>3</Zahl>

              <Überschrift colSpan={2}>
                Beteiligung der Bundesagentur für Arbeit
              </Überschrift>
            </TableRow>
            {isOpenThree && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Zustimmung der Bundesagentur
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenThree && (
              <TableRow>
                <ListParagraph colSpan={3}>Arbeitsmarktzulassung</ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFour} onClick={toggleOpenFour} />
              </BlueTriangle>

              <Zahl>4</Zahl>

              <Überschrift colSpan={2}>
                Beteiligung der Ausländerbehörde
              </Überschrift>
            </TableRow>
            {isOpenFour && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Das beschleunigte Fachkräfteverfahren nach §81a
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenFour && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Aufenthaltstitelbentragung und -verlängerung
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFive} onClick={toggleOpenFive} />
              </BlueTriangle>

              <Zahl>5</Zahl>

              <Überschrift colSpan={2}>
                Anerkennung ausländischer Berufsabschlüsse
              </Überschrift>
            </TableRow>
            {isOpenFive && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Grundlagen der Anerkennung
                </ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenFive && (
              <TableRow>
                <ListParagraph colSpan={3}>Anerkennungsverfahren</ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenFive && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Anerkennungsbescheid / Defizitbescheid
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSix} onClick={toggleOpenSix} />
              </BlueTriangle>

              <Zahl>6</Zahl>

              <Überschrift colSpan={2}>Möglichkeiten der Förderung</Überschrift>
            </TableRow>
            {isOpenSix && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Anforderungen und Optionen zur Antragstellung von
                  Fördermitteln
                </ListParagraph>
              </TableRow>
            )}{" "}
            <TableRow>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSeven} onClick={toggleOpenSeven} />
              </BlueTriangle>

              <Zahl>7</Zahl>

              <Überschrift colSpan={2}>Sozialer Aspekt</Überschrift>
            </TableRow>
            {isOpenSeven && (
              <TableRow>
                <ListParagraph colSpan={3}>Familiennachzug</ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenSeven && (
              <TableRow>
                <ListParagraph colSpan={3}>Onboarding-Prozess</ListParagraph>
              </TableRow>
            )}{" "}
            {isOpenSeven && (
              <TableRow>
                <ListParagraph colSpan={3}>
                  Integration von ausländischen Fachkräften
                </ListParagraph>
              </TableRow>
            )}
          </HiddenTable>
          <HiddenWoman src={woman} alt="woman"></HiddenWoman>
        </Wrapper>
        <Header>Wir zeigen Ihnen wie:</Header>
        <StyledDiv>
          Im Rahmen des Workshops werden alle aufgelisteten Punkte eingehend
          behandelt und gründlich erläutert. Dabei werden nicht nur die
          grundlegenden Informationen zu jedem Thema dargelegt, sondern auch
          praktische Erkenntnisse jahrelanger Berufserfahrung auf diesem Gebiet
          vermittelt. So erhalten Sie nicht nur eine umfassende Übersicht über
          die verschiedenen Aspekte, sondern auch wertvolle Einblicke in die
          praktische Umsetzung und bewährte Strategien, um Ihren Erfolg zu
          maximieren.
        </StyledDiv>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 97%;
  width: 3.5px;
  background-color: darkgray;

  @media (max-width: 900px) {
    left: 10%;
    height: 100%;
  }

  @media (max-width: 700px) {
    left: 5%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Table = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 300px;
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

const WomanCell = styled.th`
  width: 50%;
`;

const Heading = styled.th`
  font-weight: bold;
  text-align: start;
  font-size: 33px;
  padding-left: 70px;
  padding-bottom: 40px;
  width: 50%;

  @media (max-width: 1400px) {
    padding-right: 20px;
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

const BlueTriangle = styled.th`
  padding-left: 60px;
  padding-top: 10px;

  @media (max-width: 900px) {
    padding-left: 120px;
    width: 0%;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
  }
`;

const Zahl = styled.th`
  font-size: 90px;
  color: blue;
  font-family: Righteous;
  padding-top: 10px;
  width: 5%;

  @media (max-width: 480px) {
    font-size: 70px;
  }
`;

const TableRow = styled.tr``;

const Woman = styled.img`
  width: 300px;
`;

const Überschrift = styled.th`
  font-size: 33px;
  text-align: start;
  padding-right: 20px;
  padding-left: 10px;
  padding-top: 10px;

  @media (max-width: 480px) {
    font-size: 26px;
    padding-left: 5px;
  }

  @media (hover: hover) {
    &:hover {
      color: blue;
    }
  }
`;

const WorkshopCircle = styled.div`
  position: absolute;
  top: 300px;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid darkgray;
  z-index: 200;

  @media (max-width: 700px) {
    top: 245px;
  }
`;

const BlueTriangleOne = styled.div`
  width: 20px;
  height: 20px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  transform: ${({ open }) => (open ? "rotate(Threeg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleTwo = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(Threeg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleThree = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleFour = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleFive = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleSix = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(Threeg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleSeven = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleEight = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const ListParagraph = styled.th`
  font-size: 23px;
  text-align: start;
  padding-left: 160px;
  padding-top: 10px;
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.5 ease-in-out;

  @media (max-width: 1400px) {
    padding-right: 20px;
  }

  @media (max-width: 900px) {
    padding-left: 230px;
    padding-top: 8px;
  }

  @media (max-width: 700px) {
    padding-left: 180px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding-left: 110px;
    padding-top: 5px;
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

const HiddenTable = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 100%;
  margin-top: 300px;
  margin-bottom: 70px;
  font-size: 20px;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 700px) {
    margin-top: 250px;
  }
  @media (max-width: 480px) {
    margin-top: 200px;
  }
`;

const HiddenWoman = styled.img`
  width: 250px;
  margin: auto;

  @media (min-width: 901px) {
    display: none;
  }
`;

const Header = styled.div`
  width: 1350px;
  margin: auto;
  font-size: 55px;
  font-weight: bold;
  text-align: start;
  padding-bottom: 40px;
  color: black;
  font-size: 33px;

  @media (max-width: 1400px) {
    padding-left: 20px;
  }

  @media (max-width: 1350px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    padding-top: 70px;
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

const StyledDiv = styled.div`
  font-size: 20px;
  margin: auto;
  margin-bottom: 50px;
  max-width: 1350px;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 1350px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 18px;
  }
`;
