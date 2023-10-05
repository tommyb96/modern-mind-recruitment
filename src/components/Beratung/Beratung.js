import styled from "styled-components";
import React from "react";
import { useState, useEffect, useRef } from "react";

import card from "../../assets/svg/Beratung/beratung-card.svg";

export default function Beratung() {
  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => {
      if (entry.isIntersecting) {
        if (!prevState[target]) {
        }
        return {
          ...prevState,
          [target]: true,
        };
      } else {
        if (prevState[target]) {
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
      id: "last-circle",
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
  ];

  const [isVisible, setIsVisible] = useState({});

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
      <PurpleWrapper id="beratung">
        <Line>
          <Circle ref={sections[0].ref} isVisible={isVisible[sections[0].id]} />
          <LastCircle
            ref={sections[1].ref}
            isVisible={isVisible[sections[1].id]}
          />
          <Card src={card} alt="card" />
        </Line>
        <Table>
          <tr>
            {" "}
            <Heading
              ref={sections[2].ref}
              isVisible={isVisible[sections[2].id]}
              colSpan={2}
            >
              beratung
            </Heading>{" "}
            <Cell></Cell>
          </tr>
          <tr>
            <FirstText>
              Unsere individuelle Beratung beinhaltet eine gründliche Analyse
              Ihrer spezifischen Anforderungen, die Entwicklung
              maßgeschneiderter Strategien und die Bereitstellung praktischer
              Lösungen. Wir arbeiten eng mit Ihnen zusammen, um Ihre Ziele zu
              verstehen und Ihnen die besten Wege aufzuzeigen, wie Sie von den
              neuen Möglichkeiten des Fachkräfteeinwanderungsgesetzes
              profitieren können.
            </FirstText>
            <Cell></Cell>
          </tr>
          <tr>
            <SecondText>
              Unser Hauptaugenmerk liegt darauf, Ihnen einen klaren und
              effektiven Weg zur Rekrutierung internationaler Fachkräfte
              aufzuzeigen. Wir sind mit den komplexen bürokratischen Aspekten
              der Arbeitsmigration bestens vertraut und können Ihnen dabei
              helfen, den Prozess reibungslos zu gestalten. Egal, ob es darum
              geht, weltweit die besten Talente zu finden, die Chancen des
              Fachkräfteeinwanderungsgesetzes optimal zu nutzen oder Ihre eigene
              Personalabteilung für ausländische Fachkräfte zu etablieren – wir
              unterstützen Sie bei jedem Schritt auf diesem Weg.
            </SecondText>
            <Cell></Cell>
          </tr>
        </Table>
        <HiddenTable>
          <tr>
            <Heading
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              beratung
            </Heading>
          </tr>
          <tr>
            <FirstText>
              Unsere individuelle Beratung beinhaltet eine gründliche Analyse
              Ihrer spezifischen Anforderungen, die Entwicklung
              maßgeschneiderter Strategien und die Bereitstellung praktischer
              Lösungen. Wir arbeiten eng mit Ihnen zusammen, um Ihre Ziele zu
              verstehen und Ihnen die besten Wege aufzuzeigen, wie Sie von den
              neuen Möglichkeiten des Fachkräfteeinwanderungsgesetzes
              profitieren können.
            </FirstText>
          </tr>
          <tr>
            <SecondText>
              Unser Hauptaugenmerk liegt darauf, Ihnen einen klaren und
              effektiven Weg zur Rekrutierung internationaler Fachkräfte
              aufzuzeigen. Wir sind mit den komplexen bürokratischen Aspekten
              der Arbeitsmigration bestens vertraut und können Ihnen dabei
              helfen, den Prozess reibungslos zu gestalten. Egal, ob es darum
              geht, weltweit die besten Talente zu finden, die Chancen des
              Fachkräfteeinwanderungsgesetzes optimal zu nutzen oder Ihre eigene
              Personalabteilung für ausländische Fachkräfte zu etablieren – wir
              unterstützen Sie bei jedem Schritt auf diesem Weg.
            </SecondText>
          </tr>
          <tr>
            <CardContainer>
              <SecondCard src={card} alt="card" />
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
  margin-bottom: 120px;
  font-size: 20px;

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
  top: 120px;
  bottom: -175px;
  width: 3.5px;
  background-color: rgb(192, 192, 192, 0.5);

  @media (max-width: 900px) {
    left: 10%;
    top: 70px;
    bottom: -100px;
  }

  @media (max-width: 700px) {
    left: 5%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid rgb(192, 192, 192);
  z-index: 200;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.8)});
  transition: transform 0.7s ease;
`;

const Cell = styled.th`
  width: 50vw;
`;

const Heading = styled.th`
  width: 50%;
  font-family: Comfortaa;
  font-size: 53px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-right: 20px;
    padding-left: 40px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 33px;
  }
`;

const FirstText = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  text-align: start;
  padding-bottom: 30px;
  color: white;
  opacity: 0.8;
  font-weight: 500;
  font-family: system-ui;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
`;

const SecondText = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  text-align: start;
  padding-bottom: 30px;
  color: white;
  opacity: 0.8;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
`;

const CardContainer = styled.th`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const Card = styled.img`
  width: 480px;
  position: absolute;
  bottom: 80px;
  left: 200px; /* Startposition */
  animation: moveSideToSide 8s linear infinite;
  @keyframes moveSideToSide {
    0% {
      transform: translateX(0); /* Startposition */
    }
    20% {
      transform: translateX(0); /* Position in der Mitte */
    }
    50% {
      transform: translateX(-150px); /* Endposition (150px nach links) */
    }
    70% {
      transform: translateX(-150px); /* Position in der Mitte */
    }
    100% {
      transform: translateX(0); /* Zurück zur Startposition */
    }
  }

  @media (max-width: 1400px) {
    width: 320px;
    left: 120px;
    @keyframes moveSideToSide {
      0% {
        transform: translateX(0); /* Startposition */
      }
      20% {
        transform: translateX(0); /* Position in der Mitte */
      }
      50% {
        transform: translateX(-90px); /* Endposition (150px nach links) */
      }
      70% {
        transform: translateX(-90px); /* Position in der Mitte */
      }
      100% {
        transform: translateX(0); /* Zurück zur Startposition */
      }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const SecondCard = styled.img`
  margin-top: 30px;
  width: 350px;
  animation: moveSideTo 7s linear infinite; /* Ändere die Dauer auf 8s für eine 5-Sekunden-Pause zwischen den Bewegungen */

  @keyframes moveSideTo {
    0% {
      margin-left: 100px; /* Startposition links */
    }
    20% {
      margin-left: 100px; /* Startposition links */
    }
    50% {
      margin-left: -100px; /* Endposition rechts */
    }
    70% {
      margin-left: -100px; /* Startposition rechts */
    }
    100% {
      margin-left: 100px; /* Endposition links */
    }
  }

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 480px) {
    width: 250px;
    margin-top: 20px;
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
  border: 3.5px solid rgb(192, 192, 192);
  z-index: 200;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.8)});
  transition: transform 0.7s ease;
`;
