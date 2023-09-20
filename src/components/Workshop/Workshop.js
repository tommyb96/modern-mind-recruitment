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

  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => {
      if (entry.isIntersecting) {
        if (!prevState[target]) {
          console.log(`[${target}] isVisible is changing to true`);
        }
        return {
          ...prevState,
          [target]: true,
        };
      } else {
        if (prevState[target]) {
          console.log(`[${target}] isVisible is changing to false`);
        }
        return {
          ...prevState,
          [target]: false,
        };
      }
    });
  };

  const sections = [
    {
      id: "0",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "1",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "2",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "3",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "4",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "5",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "6",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "7",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "8",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "9",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "10",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "11",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "12",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "13",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "14",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "15",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "16",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "17",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "18",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "19",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "20",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "21",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "22",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "23",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "24",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "25",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "26",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "27",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "28",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "29",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "30",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "31",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "32",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "33",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "34",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "35",
      ref: useRef(null),
      isVisible: false,
    },
  ];

  const [isVisible, setIsVisible] = useState({ sections });

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px 0px -20px 0px",
    };

    const observers = sections.map((section) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => handleIntersection(entry, section.id));
      }, observerOptions);
      observer.observe(section.ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {" "}
      <div id="workshop">
        <WorkshopIntro />
        <Wrapper>
          {" "}
          <Line>
            <WorkshopCircle
              ref={sections[0].ref}
              isVisible={isVisible[sections[0].id]}
            />
            <LastCircle />
          </Line>
          <Table>
            <tr>
              <WomanCell rowSpan={26}>
                <Woman src={woman} alt="woman" />
              </WomanCell>
            </tr>
            <tr>
              <Heading
                colSpan={3}
                ref={sections[1].ref}
                isVisible={isVisible[sections[1].id]}
              >
                Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
                in Deutschland:
              </Heading>
            </tr>
            <Row ref={sections[2].ref} isVisible={isVisible[sections[2].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenOne} onClick={toggleOpenOne} />
              </BlueTriangle>
              <Zahl>1</Zahl>
              <Überschrift colSpan={2}>Allgemeine Voraussetzungen</Überschrift>
            </Row>
            {isOpenOne && (
              <SmallRow
                ref={sections[3].ref}
                isVisible={isVisible[sections[3].id]}
              >
                <ListParagraph open={isOpenOne} colSpan={3}>
                  Allgemeine Richtlinien für die Einstellung ausländischer
                  Fachkräfte
                </ListParagraph>
              </SmallRow>
            )}
            <Row ref={sections[4].ref} isVisible={isVisible[sections[4].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenTwo} onClick={toggleOpenTwo} />
              </BlueTriangle>
              <Zahl>2</Zahl>
              <Überschrift colSpan={2}>
                Regelungen für Visum und Aufenthaltstitel
              </Überschrift>
            </Row>
            {isOpenTwo && (
              <SmallRow
                ref={sections[5].ref}
                isVisible={isVisible[sections[5].id]}
              >
                <ListParagraph colSpan={3}>
                  Einreisevisum und Aufenthaltstitel
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenTwo && (
              <SmallRow
                ref={sections[6].ref}
                isVisible={isVisible[sections[6].id]}
              >
                <ListParagraph colSpan={3}>
                  Fachkräfte mit Berufsausbildung
                </ListParagraph>
              </SmallRow>
            )}
            {isOpenTwo && (
              <SmallRow
                ref={sections[7].ref}
                isVisible={isVisible[sections[7].id]}
              >
                <ListParagraph colSpan={3}>
                  Fachkräfte mit akademischer Ausbildung
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenTwo && (
              <SmallRow
                ref={sections[8].ref}
                isVisible={isVisible[sections[8].id]}
              >
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Auszubildende
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenTwo && (
              <SmallRow
                ref={sections[9].ref}
                isVisible={isVisible[sections[9].id]}
              >
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Studierende
                </ListParagraph>
              </SmallRow>
            )}{" "}
            <Row ref={sections[10].ref} isVisible={isVisible[sections[10].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenThree} onClick={toggleOpenThree} />
              </BlueTriangle>
              <Zahl>3</Zahl>
              <Überschrift colSpan={2}>
                Beteiligung der Bundesagentur für Arbeit
              </Überschrift>
            </Row>
            {isOpenThree && (
              <SmallRow
                ref={sections[11].ref}
                isVisible={isVisible[sections[11].id]}
              >
                <ListParagraph colSpan={3}>
                  Zustimmung der Bundesagentur
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenThree && (
              <SmallRow
                ref={sections[12].ref}
                isVisible={isVisible[sections[12].id]}
              >
                <ListParagraph colSpan={3}>Arbeitsmarktzulassung</ListParagraph>
              </SmallRow>
            )}{" "}
            <Row ref={sections[13].ref} isVisible={isVisible[sections[13].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFour} onClick={toggleOpenFour} />
              </BlueTriangle>
              <Zahl>4</Zahl>
              <Überschrift colSpan={2}>
                Beteiligung der Ausländerbehörde
              </Überschrift>
            </Row>
            {isOpenFour && (
              <SmallRow
                ref={sections[14].ref}
                isVisible={isVisible[sections[14].id]}
              >
                <ListParagraph colSpan={3}>
                  Das beschleunigte Fachkräfteverfahren nach §81a
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenFour && (
              <SmallRow
                ref={sections[15].ref}
                isVisible={isVisible[sections[15].id]}
              >
                <ListParagraph colSpan={3}>
                  Aufenthaltstitelbentragung und -verlängerung
                </ListParagraph>
              </SmallRow>
            )}{" "}
            <Row ref={sections[16].ref} isVisible={isVisible[sections[16].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFive} onClick={toggleOpenFive} />
              </BlueTriangle>
              <Zahl>5</Zahl>
              <Überschrift colSpan={2}>
                Anerkennung ausländischer Berufsabschlüsse
              </Überschrift>
            </Row>
            {isOpenFive && (
              <SmallRow
                ref={sections[17].ref}
                isVisible={isVisible[sections[17].id]}
              >
                <ListParagraph colSpan={3}>
                  Grundlagen der Anerkennung
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenFive && (
              <SmallRow
                ref={sections[18].ref}
                isVisible={isVisible[sections[18].id]}
              >
                <ListParagraph colSpan={3}>Anerkennungsverfahren</ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenFive && (
              <SmallRow
                ref={sections[19].ref}
                isVisible={isVisible[sections[19].id]}
              >
                <ListParagraph colSpan={3}>
                  Anerkennungsbescheid / Defizitbescheid
                </ListParagraph>
              </SmallRow>
            )}{" "}
            <Row ref={sections[20].ref} isVisible={isVisible[sections[20].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSix} onClick={toggleOpenSix} />
              </BlueTriangle>
              <Zahl>6</Zahl>
              <Überschrift colSpan={2}>Möglichkeiten der Förderung</Überschrift>
            </Row>
            {isOpenSix && (
              <SmallRow
                ref={sections[21].ref}
                isVisible={isVisible[sections[21].id]}
              >
                <ListParagraph colSpan={3}>
                  Anforderungen und Optionen zur Antragstellung von
                  Fördermitteln
                </ListParagraph>
              </SmallRow>
            )}{" "}
            <Row ref={sections[22].ref} isVisible={isVisible[sections[22].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSeven} onClick={toggleOpenSeven} />
              </BlueTriangle>
              <Zahl>7</Zahl>
              <Überschrift colSpan={2}>Sozialer Aspekt</Überschrift>
            </Row>
            {isOpenSeven && (
              <SmallRow
                ref={sections[23].ref}
                isVisible={isVisible[sections[23].id]}
              >
                <ListParagraph colSpan={3}>Familiennachzug</ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenSeven && (
              <SmallRow
                ref={sections[24].ref}
                isVisible={isVisible[sections[24].id]}
              >
                <ListParagraph colSpan={3}>Onboarding-Prozess</ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenSeven && (
              <SmallRow
                ref={sections[25].ref}
                isVisible={isVisible[sections[25].id]}
              >
                <ListParagraph colSpan={3}>
                  Integration von ausländischen Fachkräften
                </ListParagraph>
              </SmallRow>
            )}
          </Table>
          <HiddenTable>
            <tr>
              {" "}
              <Heading
                colSpan={3}
                ref={sections[26].ref}
                isVisible={isVisible[sections[26].id]}
              >
                Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
                in Deutschland:
              </Heading>
            </tr>
            <Row ref={sections[27].ref} isVisible={isVisible[sections[27].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenOne} onClick={toggleOpenOne} />
              </BlueTriangle>
              <Zahl>1</Zahl>
              <Überschrift colSpan={2}>Allgemeine Voraussetzungen</Überschrift>
            </Row>
            {isOpenOne && (
              <SmallRow
                ref={sections[28].ref}
                isVisible={isVisible[sections[28].id]}
              >
                <ListParagraph colSpan={3}>
                  Allgemeine Richtlinien für die Einstellung ausländischer
                  Fachkräfte
                </ListParagraph>
              </SmallRow>
            )}
            <Row ref={sections[29].ref} isVisible={isVisible[sections[29].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenTwo} onClick={toggleOpenTwo} />
              </BlueTriangle>
              <Zahl>2</Zahl>
              <Überschrift colSpan={2}>
                Regelungen für Visum und Aufenthaltstitel
              </Überschrift>
            </Row>
            {isOpenTwo && (
              <SmallRow
                ref={sections[30].ref}
                isVisible={isVisible[sections[30].id]}
              >
                <ListParagraph colSpan={3}>
                  Einreisevisum und Aufenthaltstitel
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenTwo && (
              <SmallRow
                ref={sections[31].ref}
                isVisible={isVisible[sections[31].id]}
              >
                <ListParagraph colSpan={3}>
                  Fachkräfte mit Berufsausbildung
                </ListParagraph>
              </SmallRow>
            )}
            {isOpenTwo && (
              <SmallRow
                ref={sections[32].ref}
                isVisible={isVisible[sections[32].id]}
              >
                <ListParagraph colSpan={3}>
                  Fachkräfte mit akademischer Ausbildung
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenTwo && (
              <SmallRow
                ref={sections[33].ref}
                isVisible={isVisible[sections[33].id]}
              >
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Auszubildende
                </ListParagraph>
              </SmallRow>
            )}{" "}
            {isOpenTwo && (
              <SmallRow
                ref={sections[34].ref}
                isVisible={isVisible[sections[34].id]}
              >
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Studierende
                </ListParagraph>
              </SmallRow>
            )}{" "}
            <Row ref={sections[35].ref} isVisible={isVisible[sections[35].id]}>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenThree} onClick={toggleOpenThree} />
              </BlueTriangle>
              <Zahl>3</Zahl>
              <Überschrift colSpan={2}>
                Beteiligung der Bundesagentur für Arbeit
              </Überschrift>
            </Row>
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
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-right: 20px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
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

const Row = styled.tr`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const SmallRow = styled.tr`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

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
  transform: scale(${(props) => (props.isVisible ? 1 : 0.8)});
  transition: transform 0.7s ease;

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
