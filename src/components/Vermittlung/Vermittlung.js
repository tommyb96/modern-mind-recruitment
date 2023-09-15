import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import haus from "../../assets/svg/Vermittlung/vermittlung-haus.svg";
import globus from "../../assets/svg/Vermittlung/vermittlung-globus.svg";
import checkmark from "../../assets/svg/AboutUs/about-us-checkmark.svg";
import visa from "../../assets/svg/Vermittlung/vermittlung-visa.svg";
import people from "../../assets/svg/Vermittlung/vermittlung-people.svg";

export default function Vermittlung() {
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
      id: "bold-text",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "bold-header",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "bold-header-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "bold-header-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-bold-text",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-bold-header",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-bold-header-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-bold-header-three",
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
      <Wrapper>
        <FirstWrapper>
          ;{" "}
          <Line>
            <Circle
              ref={sections[0].ref}
              isVisible={isVisible[sections[0].id]}
            />
            <LastCircle
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
            />
          </Line>
          <FirstTable>
            <tr>
              <Heading
                ref={sections[2].ref}
                isVisible={isVisible[sections[2].id]}
              >
                Vermittlung
              </Heading>
            </tr>
            <tr>
              <LeftDiv>
                Unsere Expertise liegt in der gezielten Begleitung
                qualifizierter Fachkräfte aus Nicht-EU-Ländern bei langfristiger
                Erwerbsmigration. Anders als in der Arbeitnehmerüberlassung
                setzen wir auf nachhaltige Bindungen statt kurzfristiger
                Lösungen. Unser zentrales Versprechen ist die aktive Förderung
                von Personalbindung – eine Eigenschaft, die auf unserer
                Pro-Seite an erster Stelle steht.
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
              <BoldText
                ref={sections[3].ref}
                isVisible={isVisible[sections[3].id]}
              >
                Wenn Ihr Unternehmen ein Teil dieser Entwicklung sein möchte,
                dann sind Sie bei uns genau an der richtigen Stelle!
              </BoldText>
            </tr>
            <tr>
              <th rowSpan={4}>
                <Globus src={globus} alt="globus"></Globus>
              </th>
              <BoldHeader
                ref={sections[4].ref}
                isVisible={isVisible[sections[4].id]}
              >
                Woher kommen unsere Fachkräfte?
              </BoldHeader>
            </tr>
            <tr>
              <RightDiv>
                In unserer Mannschaft sind ausschließlich Fachexperten
                vertreten, die aus Ländern stammen deren Ausbildungsstrukturen
                mit denen aus Deutschland vergleichbar sind. Besonders legen wir
                Wert auf Beziehungen zu den GUS-Staaten, da unser Team in dieser
                Region verwurzelt ist und uns dies eine besonders
                vertrauensvolle Zusammenarbeit mit den Fachkräften ermöglicht.
                Hierzu zählen unter anderem Kasachstan, Russland und die
                Ukraine. Aber auch Fachkräfte aus Ländern wie Brasilien und
                Guatemala sind bei uns vertreten.
              </RightDiv>
            </tr>
            <tr>
              <BoldHeader
                ref={sections[5].ref}
                isVisible={isVisible[sections[5].id]}
              >
                Wer sind unsere „Fachkräfte von morgen“?
              </BoldHeader>
            </tr>
            <tr>
              <RightDiv>
                Der Begriff "Fachkräfte von morgen" kann unterschiedliche
                Bedeutungen haben. Bei modern mind recruitment beschränken wir
                uns nicht allein auf hochqualifizierte Akademiker oder
                Auszubildende. Wir bieten vielfältige Lösungen für verschiedene
                Anforderungen. Das bedeutet, dass Sie bei uns potenzielle
                Azubis, Fachkräfte mit abgeschlossener Berufsausbildung sowie
                hochqualifizierte Akademiker finden können.
              </RightDiv>
            </tr>
            <tr>
              <BoldHeader
                ref={sections[6].ref}
                isVisible={isVisible[sections[6].id]}
              >
                Auf welche Branchen verstehen wir uns?
              </BoldHeader>
              <th></th>
            </tr>
          </FirstTable>
          <HiddenFirstTable>
            <tr>
              <Heading
                ref={sections[7].ref}
                isVisible={isVisible[sections[7].id]}
              >
                vermittlung
              </Heading>
            </tr>
            <tr>
              <LeftDiv>
                Unsere Expertise liegt in der gezielten Begleitung
                qualifizierter Fachkräfte aus Nicht-EU-Ländern bei langfristiger
                Erwerbsmigration. Anders als in der Arbeitnehmerüberlassung
                setzen wir auf nachhaltige Bindungen statt kurzfristiger
                Lösungen. Unser zentrales Versprechen ist die aktive Förderung
                von Personalbindung – eine Eigenschaft, die auf unserer
                Pro-Seite an erster Stelle steht.
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
              <BoldText
                ref={sections[8].ref}
                isVisible={isVisible[sections[8].id]}
              >
                Wenn Ihr Unternehmen ein Teil dieser Entwicklung sein möchte,
                dann sind Sie bei uns genau an der richtigen Stelle!
              </BoldText>
            </tr>
            <tr>
              <th>
                {" "}
                <Haus src={haus} alt="haus" />
              </th>
            </tr>
            <tr>
              <BoldHeader
                ref={sections[9].ref}
                isVisible={isVisible[sections[9].id]}
              >
                Woher kommen unsere Fachkräfte?
              </BoldHeader>
            </tr>
            <tr>
              <RightDiv>
                In unserer Mannschaft sind ausschließlich Fachexperten
                vertreten, die aus Ländern stammen deren Ausbildungsstrukturen
                mit denen aus Deutschland vergleichbar sind. Besonders legen wir
                Wert auf Beziehungen zu den GUS-Staaten, da unser Team in dieser
                Region verwurzelt ist und uns dies eine besonders
                vertrauensvolle Zusammenarbeit mit den Fachkräften ermöglicht.
                Hierzu zählen unter anderem Kasachstan, Russland und die
                Ukraine. Aber auch Fachkräfte aus Ländern wie Brasilien und
                Guatemala sind bei uns vertreten.
              </RightDiv>
            </tr>
            <tr>
              <th>
                <Globus src={globus} alt="globus"></Globus>
              </th>
            </tr>
            <tr>
              <BoldHeader
                ref={sections[10].ref}
                isVisible={isVisible[sections[10].id]}
              >
                Wer sind unsere „Fachkräfte von morgen“?
              </BoldHeader>
            </tr>
            <tr>
              <RightDiv>
                Der Begriff "Fachkräfte von morgen" kann unterschiedliche
                Bedeutungen haben. Bei modern mind recruitment beschränken wir
                uns nicht allein auf hochqualifizierte Akademiker oder
                Auszubildende. Wir bieten vielfältige Lösungen für verschiedene
                Anforderungen. Das bedeutet, dass Sie bei uns potenzielle
                Azubis, Fachkräfte mit abgeschlossener Berufsausbildung sowie
                hochqualifizierte Akademiker finden können.
              </RightDiv>
            </tr>
            <tr>
              <BoldHeader
                ref={sections[11].ref}
                isVisible={isVisible[sections[11].id]}
              >
                Auf welche Branchen verstehen wir uns?
              </BoldHeader>
            </tr>
          </HiddenFirstTable>
        </FirstWrapper>
        <Karusell>Karusell</Karusell>
        <SecondWrapper>
          <SecondLine>
            <FirstCircle />
            <LastCircle />
          </SecondLine>
          <SecondTable>
            <tr>
              <LeftBoldHeader>
                Mit welchen Betrieben arbeiten wir zusammen?
              </LeftBoldHeader>
            </tr>
            <tr>
              <LeftDiv>
                Wir sind stets auf der Suche nach Unternehmen, die eine
                innovative und vor allem langfristige Lösung für ihren
                Personalbedarf anstreben. Zudem legen wir großen Wert auf
                Offenheit und Menschlichkeit innerhalb der Betriebe, damit
                unsere Fachkräfte mit Herz willkommen geheißen werden. Unser
                Ziel ist es, unsere Fachleute mit gutem Gewissen an Unternehmen
                zu vermitteln, in denen die Bedürfnisse der Mitarbeiter
                berücksichtigt, die persönliche Entwicklung gefördert und
                Teamarbeit sowie ein gemeinsames Miteinander geschätzt werden.
                Erfolgreiches Onboarding und die Integration von Fachkräften aus
                Nicht-EU-Ländern erfordern besondere Rahmenbedingungen.
              </LeftDiv>
              <th></th>
            </tr>
            <tr>
              <th rowSpan={18}>
                <Visa src={visa} alt="visa" />
              </th>
              <BoldHeader colSpan={2}>
                Schritt für Schritt, so funktioniert es:
              </BoldHeader>
            </tr>
            <tr className="First">
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Vorbereitung von Unternehmen </Aufzählung>
            </tr>
            <tr className="Second">
              <Info colSpan={2}>
                Einführung in die komplexen Verfahren der Erwerbsmigration
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Profiling und Matchmaking</Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Erstellen individuell zugeschnittene Profile, die den
                gewünschten Anforderungen entsprechen und Vorauswahl
                potenzieller Bewerber
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>
                Organisation und Begleitung des Bewerbungsprozesses
              </Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Online-Vorstellungsgespräch über Plattformen wie Microsoft Teams
                oder Zoom, gegebenenfalls mit Übersetzungsunterstützung
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Vorbereitung im Heimatland</Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Organisation und Management von Deutsch-Sprachkursen im
                Heimatland und Vorbereitung auf das Leben und die berufliche
                Tätigkeit in Deutschland
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>
                Anerkennung ausländischer Berufsqualifikationen
              </Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Einleitung, Begleitung und Durchführung des
                Anerkennungsverfahrens
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Visabeantragung</Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>Begleitung des beschleunigten Fachkräfteverfahrens</Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Integration in Deutschland</Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Unterstützung bei der Suche nach einer Wohnung, Hilfe bei
                Besuchen bei Behörden wie der Meldebehörde sowie Unterstützung
                bei organisatorischen Angelegenheiten wie der Eröffnung eines
                Bankkontos und Fragen zur Versicherung
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Nachbetreuung</Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Unterstützung beim Einführungsprozess im Unternehmen
                (Onboarding) sowie Verlängerung des Aufenthaltstitels und
                Familiennachzug
              </Info>
            </tr>
          </SecondTable>
          <HiddenSecondTable>
            <tr>
              <LeftBoldHeader colSpan={2}>
                {" "}
                Mit welchen Betrieben arbeiten wir zusammen?
              </LeftBoldHeader>
            </tr>
            <tr>
              {" "}
              <LeftDiv colSpan={2}>
                Wir sind stets auf der Suche nach Unternehmen, die eine
                innovative und vor allem langfristige Lösung für ihren
                Personalbedarf anstreben. Zudem legen wir großen Wert auf
                Offenheit und Menschlichkeit innerhalb der Betriebe, damit
                unsere Fachkräfte mit Herz willkommen geheißen werden. Unser
                Ziel ist es, unsere Fachleute mit gutem Gewissen an Unternehmen
                zu vermitteln, in denen die Bedürfnisse der Mitarbeiter
                berücksichtigt, die persönliche Entwicklung gefördert und
                Teamarbeit sowie ein gemeinsames Miteinander geschätzt werden.
                Erfolgreiches Onboarding und die Integration von Fachkräften aus
                Nicht-EU-Ländern erfordern besondere Rahmenbedingungen.
              </LeftDiv>
            </tr>
            <tr>
              {" "}
              <th colSpan={2}>
                <Visa src={visa} alt="visa" />
              </th>
            </tr>
            <tr>
              {" "}
              <BoldHeader colSpan={2}>
                Schritt für Schritt, so funktioniert es:
              </BoldHeader>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Vorbereitung von Unternehmen </Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Einführung in die komplexen Verfahren der Erwerbsmigration
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Profiling und Matchmaking</Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Erstellen individuell zugeschnittene Profile, die den
                gewünschten Anforderungen entsprechen und Vorauswahl
                potenzieller Bewerber
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>
                Organisation und Begleitung des Bewerbungsprozesses
              </Aufzählung>
            </tr>
            <tr>
              <th></th>
              <Info>
                Online-Vorstellungsgespräch über Plattformen wie Microsoft Teams
                oder Zoom, gegebenenfalls mit Übersetzungsunterstützung
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Vorbereitung im Heimatland</Aufzählung>
            </tr>
            <tr>
              <th></th>
              <Info>
                Organisation und Management von Deutsch-Sprachkursen im
                Heimatland und Vorbereitung auf das Leben und die berufliche
                Tätigkeit in Deutschland
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>
                Anerkennung ausländischer Berufsqualifikationen
              </Aufzählung>
            </tr>
            <tr>
              <th></th>
              <Info>
                Einleitung, Begleitung und Durchführung des
                Anerkennungsverfahrens
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Visabeantragung</Aufzählung>
            </tr>
            <tr>
              <th></th>
              <Info>Begleitung des beschleunigten Fachkräfteverfahrens</Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Integration in Deutschland</Aufzählung>
            </tr>{" "}
            <tr>
              <th></th>
              <Info>
                Unterstützung bei der Suche nach einer Wohnung, Hilfe bei
                Besuchen bei Behörden wie der Meldebehörde sowie Unterstützung
                bei organisatorischen Angelegenheiten wie der Eröffnung eines
                Bankkontos und Fragen zur Versicherung
              </Info>
            </tr>
            <tr>
              <CheckmarkCol>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCol>
              <Aufzählung>Nachbetreuung</Aufzählung>
            </tr>
            <tr>
              <th></th>
              <Info>
                Unterstützung beim Einführungsprozess im Unternehmen
                (Onboarding) sowie Verlängerung des Aufenthaltstitels und
                Familiennachzug
              </Info>
            </tr>
          </HiddenSecondTable>
        </SecondWrapper>
        <People src={people} alt="people" />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: white;
`;

const FirstWrapper = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 89%;
  width: 3.5px;
  background-color: darkgray;

  @media (max-width: 900px) {
    left: 10%;
    height: 91.5%;
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
  top: 120px;
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

const FirstCircle = styled.div`
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

const FirstTable = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 100px;
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
  font-size: 53px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;
  color: black;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-left: 40px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-bottom: 30px;
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
    padding-left: 40px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 30px;
    padding-left: 120px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    font-size: 18px;
    padding-bottom: 20px;
  }
`;

const Haus = styled.img`
  width: 400px;
  margin: 20px;

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
  padding-bottom: 30px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
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
    padding-bottom: 20px;
    font-size: 18px;
  }
`;

const BoldHeader = styled.th`
  font-weight: bold;
  font-size: 33px;
  text-align: start;
  padding-bottom: 20px;
  padding-left: 70px;
  padding-top: 30px;
  width: 50%;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-right: 40px;
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
    padding-top: 30px;
  }
`;

const RightDiv = styled.th`
  width: 50%;
  text-align: start;
  padding-bottom: 30px;
  padding-left: 70px;

  @media (max-width: 1400px) {
    padding-right: 40px;
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
  margin: 20px;

  @media (max-width: 480px) {
    width: 250px;
  }
`;

const HiddenFirstTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 150px;

  @media (min-width: 901px) {
    display: none;
  }
`;

const Karusell = styled.div`
  height: 200px;
  width: 90%;
  background-color: pink;
  margin: auto;
`;

const SecondWrapper = styled.div`
  position: relative;
`;

const Visa = styled.img`
  width: 500px;

  @media (max-width: 1200px) {
    width: 430px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const SecondLine = styled.div`
  position: absolute;
  left: 50%;
  top: 5%;
  height: 90%;
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

const SecondTable = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 20px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }

  tr.Second {
    display: none;
    opacity: 0;
    border: 2px solid black;
    transition: display 0s, opacity 0.3s ease;
  }

  tr.First:hover + tr.second {
    display: table-row;
    opacity: 1;
  }

  tr.First {
    border: 2px solid black;
  }
`;

const LeftBoldHeader = styled.th`
  color: black;
  width: 50%;
  padding-right: 50px;
  font-weight: bold;
  font-size: 33px;
  text-align: start;
  padding-bottom: 20px;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 50px;
    padding-left: 120px;
    width: 100%;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    font-size: 26px;
  }
`;

const CheckmarkCol = styled.th`
  @media (max-width: 900px) {
    width: 50px;
  }
`;

const Checkmark = styled.img`
  width: 40px;
  margin-left: 30px;

  @media (max-width: 900px) {
    margin-left: 120px;
  }

  @media (max-width: 700px) {
    margin-left: 70px;
  }

  @media (max-width: 480px) {
    margin-left: 30px;
  }
`;

const Aufzählung = styled.th`
  font-size: 33px;
  text-align: start;
  width: 200px;
  padding-left: 20px;

  @media (max-width: 1400px) {
    padding-right: 40px;
  }

  @media (max-width: 900px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const Info = styled.th`
  text-align: start;
  padding-bottom: 20px;
  padding-left: 20px;
  opacity: 0.7;

  @media (max-width: 1400px) {
    padding-right: 40px;
  }

  @media (max-width: 480px) {
    padding-right: 20px;
    font-size: 18px;
  }
`;

const HiddenSecondTable = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 20px;

  @media (min-width: 901px) {
    display: none;
  }
`;

const People = styled.img`
  width: 100%;
`;
