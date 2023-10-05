import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

import WorkshopIntro from "./WorkshopIntro";
import woman from "../../assets/svg/Workshop/wokshop-woman.svg";
import bluecircle from "../../assets/svg/Workshop/workshop-blue-circle.svg";

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
      id: "circle",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "lastcircle",
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
            <LastCircle
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
            />
            <Woman src={woman} alt="woman" />
          </Line>
          <Table>
            <tr>
              {" "}
              <SpaceCell>
                <Space></Space>
              </SpaceCell>
              <Heading
                ref={sections[2].ref}
                isVisible={isVisible[sections[2].id]}
                colSpan={4}
              >
                Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
                in Deutschland:
              </Heading>
            </tr>
            <Row>
              <td></td>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenOne} onClick={toggleOpenOne} />
              </BlueTriangle>
              <Zahl open={isOpenOne} onClick={toggleOpenOne}>
                1
              </Zahl>
              <Überschrift open={isOpenOne} onClick={toggleOpenOne} colSpan={2}>
                Allgemeine Voraussetzungen
              </Überschrift>
            </Row>
            {isOpenOne && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>

                <ListParagraph open={isOpenOne} colSpan={3}>
                  Allgemeine Richtlinien für die Einstellung ausländischer
                  Fachkräfte
                </ListParagraph>
              </tr>
            )}
            <tr>
              <td></td>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenTwo} onClick={toggleOpenTwo} />
              </BlueTriangle>
              <Zahl open={isOpenTwo} onClick={toggleOpenTwo}>
                2
              </Zahl>
              <Überschrift open={isOpenTwo} onClick={toggleOpenTwo} colSpan={2}>
                Regelungen für Visum und Aufenthaltstitel
              </Überschrift>
            </tr>
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  {" "}
                  Einreisevisum und Aufenthaltstitel
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  {" "}
                  Fachkräfte mit Berufsausbildung
                </ListParagraph>
              </tr>
            )}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  {" "}
                  Fachkräfte mit akademischer Ausbildung
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Auszubildende
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Studierende
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <td></td>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenThree} onClick={toggleOpenThree} />
              </BlueTriangle>
              <Zahl open={isOpenThree} onClick={toggleOpenThree}>
                3
              </Zahl>
              <Überschrift
                open={isOpenThree}
                onClick={toggleOpenThree}
                colSpan={2}
              >
                Beteiligung der Bundesagentur für Arbeit
              </Überschrift>
            </tr>
            {isOpenThree && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Zustimmung der Bundesagentur
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenThree && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Arbeitsmarktzulassung</ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <td></td>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFour} onClick={toggleOpenFour} />
              </BlueTriangle>
              <Zahl open={isOpenFour} onClick={toggleOpenFour}>
                4
              </Zahl>
              <Überschrift
                open={isOpenFour}
                onClick={toggleOpenFour}
                colSpan={2}
              >
                Beteiligung der Ausländerbehörde
              </Überschrift>
            </tr>
            {isOpenFour && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Das beschleunigte Fachkräfteverfahren nach §81a
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenFour && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Aufenthaltstitelbentragung und -verlängerung
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <td></td>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFive} onClick={toggleOpenFive} />
              </BlueTriangle>
              <Zahl open={isOpenFive} onClick={toggleOpenFive}>
                5
              </Zahl>
              <Überschrift
                open={isOpenFive}
                onClick={toggleOpenFive}
                colSpan={2}
              >
                Anerkennung ausländischer Berufsabschlüsse
              </Überschrift>
            </tr>
            {isOpenFive && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Grundlagen der Anerkennung
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenFive && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Anerkennungsverfahren</ListParagraph>
              </tr>
            )}{" "}
            {isOpenFive && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Anerkennungsbescheid / Defizitbescheid
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <td></td>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSix} onClick={toggleOpenSix} />
              </BlueTriangle>
              <Zahl open={isOpenSix} onClick={toggleOpenSix}>
                6
              </Zahl>
              <Überschrift open={isOpenSix} onClick={toggleOpenSix} colSpan={2}>
                Möglichkeiten der Förderung
              </Überschrift>
            </tr>
            {isOpenSix && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Anforderungen und Optionen zur Antragstellung von
                  Fördermitteln
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <td></td>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSeven} onClick={toggleOpenSeven} />
              </BlueTriangle>
              <Zahl open={isOpenSeven} onClick={toggleOpenSeven}>
                7
              </Zahl>
              <Überschrift
                open={isOpenSeven}
                onClick={toggleOpenSeven}
                colSpan={2}
              >
                Sozialer Aspekt
              </Überschrift>
            </tr>
            {isOpenSeven && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Familiennachzug</ListParagraph>
              </tr>
            )}{" "}
            {isOpenSeven && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Onboarding-Prozess</ListParagraph>
              </tr>
            )}{" "}
            {isOpenSeven && (
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  {" "}
                  <BlueCircle src={bluecircle} alt="blue circle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Integration von ausländischen Fachkräften
                </ListParagraph>
              </tr>
            )}
          </Table>
          <HiddenTable>
            <tr>
              {" "}
              <Heading
                ref={sections[3].ref}
                isVisible={isVisible[sections[3].id]}
                colSpan={4}
              >
                Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
                in Deutschland:
              </Heading>
            </tr>
            <tr>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenOne} onClick={toggleOpenOne} />
              </BlueTriangle>
              <Zahl open={isOpenOne} onClick={toggleOpenOne}>
                1
              </Zahl>
              <Überschrift open={isOpenOne} onClick={toggleOpenOne} colSpan={2}>
                Allgemeine Voraussetzungen
              </Überschrift>
            </tr>
            {isOpenOne && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Allgemeine Richtlinien für die Einstellung ausländischer
                  Fachkräfte
                </ListParagraph>
              </tr>
            )}
            <tr>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenTwo} onClick={toggleOpenTwo} />
              </BlueTriangle>
              <Zahl open={isOpenTwo} onClick={toggleOpenTwo}>
                2
              </Zahl>
              <Überschrift open={isOpenTwo} onClick={toggleOpenTwo} colSpan={2}>
                Regelungen für Visum und Aufenthaltstitel
              </Überschrift>
            </tr>
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Einreisevisum und Aufenthaltstitel
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Fachkräfte mit Berufsausbildung
                </ListParagraph>
              </tr>
            )}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Fachkräfte mit akademischer Ausbildung
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Auszubildende
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenTwo && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Regelung für ausländische Studierende
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenThree} onClick={toggleOpenThree} />
              </BlueTriangle>
              <Zahl open={isOpenThree} onClick={toggleOpenThree}>
                3
              </Zahl>
              <Überschrift
                open={isOpenThree}
                onClick={toggleOpenThree}
                colSpan={2}
              >
                Beteiligung der Bundesagentur für Arbeit
              </Überschrift>
            </tr>
            {isOpenThree && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Zustimmung der Bundesagentur
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenThree && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Arbeitsmarktzulassung</ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFour} onClick={toggleOpenFour} />
              </BlueTriangle>
              <Zahl open={isOpenFour} onClick={toggleOpenFour}>
                4
              </Zahl>
              <Überschrift
                open={isOpenFour}
                onClick={toggleOpenFour}
                colSpan={2}
              >
                Beteiligung der Ausländerbehörde
              </Überschrift>
            </tr>
            {isOpenFour && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Das beschleunigte Fachkräfteverfahren nach §81a
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenFour && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Aufenthaltstitelbentragung und -verlängerung
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenFive} onClick={toggleOpenFive} />
              </BlueTriangle>
              <Zahl open={isOpenFive} onClick={toggleOpenFive}>
                5
              </Zahl>
              <Überschrift
                open={isOpenFive}
                onClick={toggleOpenFive}
                colSpan={2}
              >
                Anerkennung ausländischer Berufsabschlüsse
              </Überschrift>
            </tr>
            {isOpenFive && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Grundlagen der Anerkennung
                </ListParagraph>
              </tr>
            )}{" "}
            {isOpenFive && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Anerkennungsverfahren</ListParagraph>
              </tr>
            )}{" "}
            {isOpenFive && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Anerkennungsbescheid / Defizitbescheid
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSix} onClick={toggleOpenSix} />
              </BlueTriangle>
              <Zahl open={isOpenSix} onClick={toggleOpenSix}>
                6
              </Zahl>
              <Überschrift open={isOpenSix} onClick={toggleOpenSix} colSpan={2}>
                Möglichkeiten der Förderung
              </Überschrift>
            </tr>
            {isOpenSix && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Anforderungen und Optionen zur Antragstellung von
                  Fördermitteln
                </ListParagraph>
              </tr>
            )}{" "}
            <tr>
              <BlueTriangle>
                <BlueTriangleOne open={isOpenSeven} onClick={toggleOpenSeven} />
              </BlueTriangle>
              <Zahl open={isOpenSeven} onClick={toggleOpenSeven}>
                7
              </Zahl>
              <Überschrift
                open={isOpenSeven}
                onClick={toggleOpenSeven}
                colSpan={2}
              >
                Sozialer Aspekt
              </Überschrift>
            </tr>
            {isOpenSeven && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Familiennachzug</ListParagraph>
              </tr>
            )}{" "}
            {isOpenSeven && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>Onboarding-Prozess</ListParagraph>
              </tr>
            )}{" "}
            {isOpenSeven && (
              <tr>
                <td></td>
                <td></td>
                <BlueCircleCell>
                  <BlueCircle src={bluecircle} alt="bluecircle" />
                </BlueCircleCell>
                <ListParagraph colSpan={3}>
                  Integration von ausländischen Fachkräften
                </ListParagraph>
              </tr>
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
  background-color: rgb(192, 192, 192, 0.5);

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

const Woman = styled.img`
  position: absolute;
  left: -400px;
  top: 400px;
  width: 300px;

  @media (max-width: 900px) {
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

const SpaceCell = styled.th`
  width: 50vw;
`;

const Space = styled.div`
  width: 50vw;
`;

const Heading = styled.th`
  font-weight: bold;
  text-align: start;
  font-size: 33px;
  padding-left: 70px;
  padding-bottom: 40px;
  width: 50%;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-right: 20px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
    transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 26px;
  }
`;

const Row = styled.tr``;

const BlueTriangle = styled.th`
  padding-left: 60px;
  padding-top: 10px;

  @media (max-width: 1400px) {
  }

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
  width: 5%;
  padding-top: 10px;

  @media (max-width: 480px) {
    font-size: 70px;
  }
`;

const Überschrift = styled.td`
  font-size: 28px;
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

const BlueCircleCell = styled.td`
  text-align: end;
  width: 30px;
  @media (max-width: 900px) {
    width: 2%;
  }
`;
const BlueCircle = styled.img`
  width: 8px;
  margin-right: 10px;
  margin-top: 10px;
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
  font-size: 20px;
  text-align: start;
  padding-top: 7px;
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.5 ease-in-out;
  color: rgb(0, 0, 0, 0.7);

  @media (max-width: 1400px) {
    padding-right: 20px;
  }

  @media (max-width: 700px) {
  }

  @media (max-width: 480px) {
    font-size: 18px;
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
  transform: scale(${(props) => (props.isVisible ? 1 : 0.8)});
  transition: transform 0.7s ease;
`;
const HiddenTable = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 100%;
  margin-top: 300px;
  margin-bottom: 50px;
  font-size: 20px;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 700px) {
    margin-top: 250px;
  }
  @media (max-width: 480px) {
    margin-bottom: 30px;
    margin-top: 170px;
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
  padding-bottom: 30px;
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
    padding-bottom: 20px;
  }
`;
const StyledDiv = styled.div`
  font-size: 20px;
  margin: auto;
  margin-bottom: 100px;
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
    margin-bottom: 70px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 18px;
  }
`;
