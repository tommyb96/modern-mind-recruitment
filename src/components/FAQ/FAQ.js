import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

export default function FAQ() {
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
      id: "heading",
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
      <BigWrapper id="faq">
        <Wrapper>
          <Heading ref={sections[0].ref} isVisible={isVisible[sections[0].id]}>
            faq
          </Heading>{" "}
          <Row>
            <BlueTriangleDiv>
              <BlueTriangleOne open={isOpenOne} onClick={toggleOpenOne} />
            </BlueTriangleDiv>
            <Question open={isOpenOne} onClick={toggleOpenOne}>
              Wozu eine Anerkennung ausländischer Jobqualifikationen?
            </Question>
          </Row>
          <Answer
            open={isOpenOne}
            style={{ display: isOpenOne ? "block" : "none" }}
          >
            Die Anerkennung von Qualifikationen ist von entscheidender
            Bedeutung, um sicherzustellen, dass Fachkräfte aus Nicht-EU-Ländern,
            die in Deutschland arbeiten möchten, die notwendigen Qualifikationen
            und Fähigkeiten besitzen. Dieses Verfahren ist ein wesentlicher
            Bestandteil der beruflichen Regulierung und trägt dazu bei, die
            Qualität und Sicherheit von Arbeitsleistungen innerhalb des
            jeweiligen Berufsfelds zu gewährleisten.
            <br /> <br />
            Durch die Anerkennung werden die Qualifikationen der ausländischen
            Fachkräfte mit den nationalen beruflichen Standards abgeglichen.
            Dies stellt sicher, dass ihre Fähigkeiten den Anforderungen des
            jeweiligen Berufs entsprechen und sie in der Lage sind, ihre
            Aufgaben kompetent und sicher auszuführen. Dies ist besonders
            wichtig in sensiblen Bereichen wie Gesundheitswesen, Ingenieurwesen
            oder Rechtsberatung, wo Fehler schwerwiegende Auswirkungen haben
            können.
            <br /> <br /> Darüber hinaus dient die Anerkennung auch der
            Einhaltung nationaler Rechtsvorschriften und der Sicherung der
            Qualität von Dienstleistungen oder Produkten, die von diesen
            Fachkräften erbracht oder hergestellt werden. Dies schützt nicht nur
            die Verbraucher:innen, sondern fördert auch das Vertrauen in die
            Arbeitsmärkte und die Wirtschaft insgesamt.
          </Answer>
          <GrayLine />
          <Row>
            <BlueTriangleDiv>
              <BlueTriangleOne open={isOpenTwo} onClick={toggleOpenTwo} />
            </BlueTriangleDiv>
            <Question open={isOpenTwo} onClick={toggleOpenTwo}>
              Was ist das beschleunigte Fachkräfteverfahren?
            </Question>
          </Row>{" "}
          <Answer
            open={isOpenTwo}
            style={{ display: isOpenTwo ? "block" : "none" }}
          >
            Das beschleunigte Fachkräfteverfahren gemäß § 81a AufenthG in
            Deutschland ermöglicht, in Zusammenarbeit mit der Ausländerbehörde,
            das Verwaltungsverfahren für Fachkräfte aus dem Ausland zu
            verkürzen, bevor sie nach Deutschland einreisen. Dieses Verfahren
            wurde im Rahmen des Fachkräfteeinwanderungsgesetzes eingeführt und
            gilt für verschiedene Personengruppen, darunter Fachkräfte mit
            Berufsausbildung, akademischer Ausbildung, Auszubildende,
            Berufsschüler:innen und weitere qualifizierte Beschäftigte.
            Voraussetzungen sind ein konkretes Arbeitsplatzangebot und die
            erforderliche Qualifikation für die geplante Tätigkeit in
            Deutschland.
          </Answer>
          <GrayLine />
          <Row>
            <BlueTriangleDiv>
              <BlueTriangleOne open={isOpenThree} onClick={toggleOpenThree} />
            </BlueTriangleDiv>
            <Question open={isOpenThree} onClick={toggleOpenThree}>
              Wie lange dauert es, bis eine Fachkraft anfangen kann zu arbeiten?
            </Question>
          </Row>
          <Answer
            open={isOpenThree}
            style={{ display: isOpenThree ? "block" : "none" }}
          >
            Die Dauer des Rekrutierungsprozesses hängt von verschiedenen
            Faktoren ab, darunter das vorhandene Sprachniveau, die vom
            Arbeitgeber gewünschte Sprachkompetenz, das gesuchte Berufsprofil
            und die Qualifikationen der Person. In der Regel erstreckt sich der
            Prozess über einen Zeitraum von etwa 3 bis 6 Monaten, bis die Person
            ihren ersten Arbeitstag absolviert.
          </Answer>
          <GrayLine />
          <Row>
            <BlueTriangleDiv>
              <BlueTriangleOne open={isOpenFour} onClick={toggleOpenFour} />
            </BlueTriangleDiv>
            <Question open={isOpenFour} onClick={toggleOpenFour}>
              Welche Kosten kommen auf uns als Unternehmen zu?
            </Question>
          </Row>{" "}
          <Answer
            open={isOpenFour}
            style={{ display: isOpenFour ? "block" : "none" }}
          >
            Die Kosten für unseren Vermittlungs-Service sind abhängig von
            verschiedenen Faktoren, darunter das Qualifikationsniveau der
            Fachkraft (Auszubildende:r, Young Professional, Fachkraft,
            Akademiker:in), die spezifische Berufsbranche und die vereinbarten
            Leistungen, wie Vermittlung, Betreuung und Sprachschulungen.
            Zusätzlich können unabhängig davon Gebühren für die Anerkennung von
            Qualifikationen in Höhe von maximal 800 Euro sowie Gebühren für das
            beschleunigte Fachkräfteverfahren in Höhe von 411 Euro anfallen. Wir
            stehen Ihnen gerne zur Verfügung, um Sie ausführlich zu beraten und
            ein individuelles Angebot zu erstellen.
          </Answer>
          <GrayLine />
          <Row>
            <BlueTriangleDiv>
              <BlueTriangleOne open={isOpenFive} onClick={toggleOpenFive} />
            </BlueTriangleDiv>
            <Question open={isOpenFive} onClick={toggleOpenFive}>
              Mit welchem Sprachniveau reist die Fachkraft nach Deutschland ein?
            </Question>
          </Row>{" "}
          <Answer
            open={isOpenFive}
            style={{ display: isOpenFive ? "block" : "none" }}
          >
            Im Normalfall verfügen die Kandidat:innen nach Abschluss des
            Sprachkurses in ihrem Herkunftsland über Deutschkenntnisse auf dem
            Niveau B1 oder in einigen Fällen sogar B2 des Gemeinsamen
            Europäischen Referenzrahmens (CEF). Bei Bedarf können diese
            Kenntnisse durch zusätzlichen Sprachunterricht in Deutschland weiter
            verbessert werden. Das erforderliche Sprachniveau wird im Voraus
            individuell abgestimmt.
          </Answer>
          <GrayLine />
          <Row>
            <BlueTriangleDiv>
              <BlueTriangleOne open={isOpenSix} onClick={toggleOpenSix} />
            </BlueTriangleDiv>
            <Question open={isOpenSix} onClick={toggleOpenSix}>
              Was sind Voraussetzungen für eine erfolgreiche Integration?
            </Question>
          </Row>{" "}
          <Answer
            isOpen={isOpenSix}
            style={{ display: isOpenSix ? "block" : "none" }}
          >
            Um ausländische Fachkräfte aus Nicht-EU-Ländern erfolgreich zu
            integrieren, sollte ein Unternehmen ein unterstützendes und
            vielfältiges Umfeld schaffen. Dies umfasst die Förderung von
            kultureller Vielfalt, die Schaffung eines integrativen
            Arbeitsumfelds und langfristige Unterstützung für die berufliche
            Entwicklung der Fachkräfte. Besondere Aufmerksamkeit und
            Unterstützung sind während der Einarbeitungsphase erforderlich, da
            sprachliche Herausforderungen und kulturelle Unterschiede in den
            ersten Monaten eine Hürde darstellen können.
          </Answer>
          <GrayLine />
          <Row>
            <BlueTriangleDiv>
              <BlueTriangleOne open={isOpenSeven} onClick={toggleOpenSeven} />
            </BlueTriangleDiv>
            <Question open={isOpenSeven} onClick={toggleOpenSeven}>
              Wie unterstützen wir Sie bei der Integration?
            </Question>
          </Row>{" "}
          <Answer
            open={isOpenSeven}
            style={{
              display: isOpenSeven ? "block" : "none",
            }}
          >
            Unser Service umfasst Unterstützung in verschiedenen Bereichen,
            darunter die Abwicklung von Behördengängen, Hilfe bei der
            Wohnungssuche, Unterstützung bei der Familienzusammenführung sowie
            die Einrichtung eines Bankkontos für die Fachkraft. Unsere oberste
            Priorität liegt in der Zufriedenheit unserer Fachkräfte und dessen
            Unternehmen, da eine erfolgreiche Integration das Fundament für eine
            effektive und harmonische Zusammenarbeit bildet.
          </Answer>
        </Wrapper>
      </BigWrapper>
    </>
  );
}
const BigWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 150px;
  margin-bottom: 100px;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 20px;
  width: 750px;

  @media (max-width: 900px) {
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 50px;
  }
`;

const Heading = styled.div`
  width: 50%;
  font-family: Comfortaa;
  font-size: 53px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  margin-bottom: 40px;
  margin-left: 70px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    margin-right: 20px;
    margin-left: 50px;
  }

  @media (max-width: 900px) {
    margin-left: 120px;
  }

  @media (max-width: 700px) {
    margin-left: 70px;
  }

  @media (max-width: 480px) {
    margin-left: 30px;
    font-size: 33px;
    margin-bottom: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const BlueTriangleDiv = styled.div`
  display: flex;
  align-self: center;
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

const Question = styled.div`
  font-size: 23px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;

const Answer = styled.div`
  text-align: start;
  padding-bottom: 20px;
  transition: opacity 0.5s;
  margin-left: 45px;

  @media (max-width: 480px) {
    margin-left: 30px;
  }
`;

const GrayLine = styled.div`
  border-bottom: 2px solid darkgray;
  opacity: 0.3;

  @media (max-width: 480px) {
    border-bottom: 1px solid darkgray;
  }
`;
