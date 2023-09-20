import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Carousel from "../Vermittlung/Carousel";

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
    {
      id: "second-bold-header",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-seven",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-seven",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-eight",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "info-eight",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-second-bold-header",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-seven",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-seven",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-eight",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-info-eight",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "right-bold-header",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-right-bold-header",
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
              <LeftBoldHeader
                ref={sections[6].ref}
                isVisible={isVisible[sections[6].id]}
              >
                Auf welche Branchen verstehen wir uns?
              </LeftBoldHeader>
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
        <div>
          <Carousel />
        </div>
        <SecondWrapper>
          <SecondLine>
            <FirstCircle />
            <LastCircle />
          </SecondLine>
          <SecondTable>
            <tr>
              <LeftBoldHeader
                ref={sections[12].ref}
                isVisible={isVisible[sections[12].id]}
              >
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
              <BoldHeader
                colSpan={2}
                ref={sections[46].ref}
                isVisible={isVisible[sections[46].id]}
              >
                Schritt für Schritt, so funktioniert es:
              </BoldHeader>
            </tr>
            <Row ref={sections[13].ref} isVisible={isVisible[sections[13].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung> Vorbereitung von Unternehmen </Aufzählung>{" "}
            </Row>
            <Row ref={sections[14].ref} isVisible={isVisible[sections[14].id]}>
              <Info colSpan={2}>
                Einführung in die komplexen Verfahren der Erwerbsmigration
              </Info>
            </Row>
            <Row ref={sections[15].ref} isVisible={isVisible[sections[15].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung> Profiling und Matchmaking</Aufzählung>
            </Row>
            <Row ref={sections[16].ref} isVisible={isVisible[sections[16].id]}>
              <Info colSpan={2}>
                Erstellen individuell zugeschnittene Profile, die den
                gewünschten Anforderungen entsprechen und Vorauswahl
                potenzieller Bewerber
              </Info>
            </Row>

            <Row ref={sections[17].ref} isVisible={isVisible[sections[17].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>
                {" "}
                Organisation und Begleitung des Bewerbungsprozesses
              </Aufzählung>
            </Row>
            <Row ref={sections[18].ref} isVisible={isVisible[sections[18].id]}>
              <Info colSpan={2}>
                Online-Vorstellungsgespräch über Plattformen wie Microsoft Teams
                oder Zoom, gegebenenfalls mit Übersetzungsunterstützung
              </Info>
            </Row>
            <Row ref={sections[19].ref} isVisible={isVisible[sections[19].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung> Vorbereitung im Heimatland</Aufzählung>{" "}
            </Row>
            <Row ref={sections[20].ref} isVisible={isVisible[sections[20].id]}>
              <Info colSpan={2}>
                Organisation und Management von Deutsch-Sprachkursen im
                Heimatland und Vorbereitung auf das Leben und die berufliche
                Tätigkeit in Deutschland
              </Info>
            </Row>
            <Row ref={sections[21].ref} isVisible={isVisible[sections[21].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>
                {" "}
                Anerkennung ausländischer Berufsqualifikationen
              </Aufzählung>{" "}
            </Row>
            <Row ref={sections[22].ref} isVisible={isVisible[sections[22].id]}>
              <Info colSpan={2}>
                Einleitung, Begleitung und Durchführung des
                Anerkennungsverfahrens
              </Info>
            </Row>

            <Row ref={sections[23].ref} isVisible={isVisible[sections[23].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>Visabeantragung</Aufzählung>{" "}
            </Row>
            <Row ref={sections[24].ref} isVisible={isVisible[sections[24].id]}>
              <Info colSpan={2}>
                Begleitung des beschleunigten Fachkräfteverfahrens
              </Info>
            </Row>
            <Row ref={sections[25].ref} isVisible={isVisible[sections[25].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung> Integration in Deutschland</Aufzählung>
            </Row>
            <Row ref={sections[26].ref} isVisible={isVisible[sections[26].id]}>
              <Info colSpan={2}>
                Unterstützung bei der Suche nach einer Wohnung, Hilfe bei
                Besuchen bei Behörden wie der Meldebehörde sowie Unterstützung
                bei organisatorischen Angelegenheiten wie der Eröffnung eines
                Bankkontos und Fragen zur Versicherung
              </Info>
            </Row>
            <Row ref={sections[27].ref} isVisible={isVisible[sections[27].id]}>
              <CheckmarkCell>
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung> Nachbetreuung</Aufzählung>
            </Row>
            <Row ref={sections[28].ref} isVisible={isVisible[sections[28].id]}>
              <Info colSpan={2}>
                Unterstützung beim Einführungsprozess im Unternehmen
                (Onboarding) sowie Verlängerung des Aufenthaltstitels und
                Familiennachzug
              </Info>
            </Row>
          </SecondTable>
          <HiddenSecondTable>
            <tr>
              <LeftBoldHeader
                colSpan={2}
                ref={sections[29].ref}
                isVisible={isVisible[sections[29].id]}
              >
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
              <th colSpan={2}>{/* <Visa src={visa} alt="visa" /> */}</th>
            </tr>
            <tr>
              {" "}
              <BoldHeader
                colSpan={2}
                ref={sections[47].ref}
                isVisible={isVisible[sections[47].id]}
              >
                Schritt für Schritt, so funktioniert es:
              </BoldHeader>
            </tr>{" "}
            <Row ref={sections[30].ref} isVisible={isVisible[sections[30].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>Vorbereitung von Unternehmen </Aufzählung>
            </Row>
            <Row ref={sections[31].ref} isVisible={isVisible[sections[31].id]}>
              <Info colSpan={2}>
                Einführung in die komplexen Verfahren der Erwerbsmigration
              </Info>
            </Row>
            <Row ref={sections[32].ref} isVisible={isVisible[sections[32].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>Profiling und Matchmaking</Aufzählung>
            </Row>
            <Row ref={sections[33].ref} isVisible={isVisible[sections[33].id]}>
              <Info colSpan={2}>
                Erstellen individuell zugeschnittene Profile, die den
                gewünschten Anforderungen entsprechen und Vorauswahl
                potenzieller Bewerber
              </Info>
            </Row>
            <Row ref={sections[34].ref} isVisible={isVisible[sections[34].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>
                Organisation und Begleitung von Bewerbungen
              </Aufzählung>{" "}
            </Row>
            <Row ref={sections[35].ref} isVisible={isVisible[sections[35].id]}>
              <Info colSpan={2}>
                Online-Vorstellungsgespräch über Plattformen wie Microsoft Teams
                oder Zoom, gegebenenfalls mit Übersetzungsunterstützung
              </Info>
            </Row>
            <Row ref={sections[36].ref} isVisible={isVisible[sections[36].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>Vorbereitung im Heimatland</Aufzählung>
            </Row>{" "}
            <Row ref={sections[37].ref} isVisible={isVisible[sections[37].id]}>
              <Info colSpan={2}>
                Organisation und Management von Deutsch-Sprachkursen im
                Heimatland und Vorbereitung auf das Leben und die berufliche
                Tätigkeit in Deutschland
              </Info>
            </Row>
            <Row ref={sections[38].ref} isVisible={isVisible[sections[38].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>
                Anerkennung ausländischer Berufsqualifikationen
              </Aufzählung>
            </Row>{" "}
            <Row ref={sections[39].ref} isVisible={isVisible[sections[39].id]}>
              <Info colSpan={2}>
                Einleitung, Begleitung und Durchführung des
                Anerkennungsverfahrens
              </Info>
            </Row>
            <Row ref={sections[40].ref} isVisible={isVisible[sections[40].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>Visabeantragung</Aufzählung>
            </Row>
            <Row ref={sections[41].ref} isVisible={isVisible[sections[41].id]}>
              <Info colSpan={2}>
                Begleitung des beschleunigten Fachkräfteverfahrens
              </Info>
            </Row>
            <Row ref={sections[42].ref} isVisible={isVisible[sections[42].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>Integration in Deutschland</Aufzählung>
            </Row>
            <Row ref={sections[43].ref} isVisible={isVisible[sections[43].id]}>
              <Info colSpan={2}>
                Unterstützung bei der Suche nach einer Wohnung, Hilfe bei
                Besuchen bei Behörden wie der Meldebehörde sowie Unterstützung
                bei organisatorischen Angelegenheiten wie der Eröffnung eines
                Bankkontos und Fragen zur Versicherung
              </Info>
            </Row>
            <Row ref={sections[44].ref} isVisible={isVisible[sections[44].id]}>
              <CheckmarkCell>
                <Checkmark src={checkmark} alt="checkmark" />
              </CheckmarkCell>
              <Aufzählung>Nachbetreuung</Aufzählung>
            </Row>{" "}
            <Row ref={sections[45].ref} isVisible={isVisible[sections[45].id]}>
              <Info colSpan={2}>
                Unterstützung beim Einführungsprozess im Unternehmen
                (Onboarding) sowie Verlängerung des Aufenthaltstitels und
                Familiennachzug
              </Info>
            </Row>
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
  margin-bottom: 50px;
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
  transform: translateX(${(props) => (props.isVisible ? 0 : "15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-right: 40px;
    padding-left: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
    //animation
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
  margin-bottom: 20px;

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

  @media (max-width: 900px) {
    margin-top: 30px;
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

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const LeftBoldHeader = styled.td`
  color: black;
  width: 50%;
  padding-right: 50px;
  font-weight: bold;
  font-size: 33px;
  text-align: start;
  padding-bottom: 20px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

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

const Row = styled.tr`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const CheckmarkCell = styled.th`
  width: 5%;
`;

const Checkmark = styled.img`
  width: 40px;
  margin-left: 80px;
  margin-right: 10px;

  @media (max-width: 900px) {
    margin-left: 120px;
  }

  @media (max-width: 700px) {
    margin-left: 90px;
  }

  @media (max-width: 480px) {
    margin-left: 30px;
  }
`;

const Aufzählung = styled.td`
  font-size: 33px;
  text-align: start;
  width: 200px;

  @media (max-width: 1400px) {
    padding-right: 40px;
  }

  @media (max-width: 900px) {
    width: 70%;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 23px;
  }
`;

const Info = styled.td`
  text-align: start;
  padding-bottom: 20px;
  padding-left: 130px;
  opacity: 0.7;

  @media (max-width: 1400px) {
    padding-right: 40px;
  }

  @media (max-width: 900px) {
    padding-left: 180px;
  }

  @media (max-width: 700px) {
    padding-left: 150px;
  }

  @media (max-width: 480px) {
    padding-right: 20px;
    padding-left: 80px;
  }
`;

const HiddenSecondTable = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 70px;
  font-size: 20px;

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

const People = styled.img`
  width: 100%;
`;
