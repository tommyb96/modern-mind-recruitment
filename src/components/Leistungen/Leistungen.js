import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import papa from "../../assets/svg/Leistungen/leistungen-papa.svg";
import pinnnadel from "../../assets/svg/Leistungen/leistungen-pinnnadel.svg";

export default function Leistungen() {
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
      id: "heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "aufzählung-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-aufzählung-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "papa-image",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-papa-image",
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
      <PurpleWrapper>
        <Line>
          <Circle ref={sections[0].ref} isVisible={isVisible[sections[0].id]} />
        </Line>

        <FirstTable>
          <tr>
            <th></th>
            <Heading
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
              colSpan={2}
            >
              leistungen
            </Heading>
          </tr>
          <tr>
            <PapaCell rowSpan="6">
              <Papa
                src={papa}
                alt="dad holding his son"
                ref={sections[10].ref}
                isVisible={isVisible[sections[10].id]}
              />
            </PapaCell>
            <FirstText colSpan={2}>
              Unser Fachgebiet erstreckt sich über eine breite Palette von
              Dienstleistungen, die darauf abzielen, sowohl Unternehmen als auch
              ausländischen Fachkräften zu helfen, ihr volles Potenzial
              auszuschöpfen. Mit einem tiefgreifenden Verständnis der
              Bedürfnisse und Herausforderungen im Bereich der internationalen
              Fachkräfterekrutierung haben wir uns auf drei zentrale
              Schwerpunkte spezialisiert:
            </FirstText>
          </tr>
          <tr>
            <th>
              {" "}
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
            </th>
            <Aufzählung
              ref={sections[2].ref}
              isVisible={isVisible[sections[2].id]}
            >
              Vermittlung
            </Aufzählung>
          </tr>
          <tr>
            {" "}
            <th>
              {" "}
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
            </th>
            <Aufzählung
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              Schulung
            </Aufzählung>
          </tr>
          <tr>
            <th>
              {" "}
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
            </th>
            <Aufzählung
              ref={sections[4].ref}
              isVisible={isVisible[sections[4].id]}
            >
              Beratung
            </Aufzählung>
          </tr>
          <tr>
            <SecondText colSpan={2}>
              Modern Mind Recruitment geleitet Sie gerne auf Ihrer Reise der
              Gewinnung von internationalen Fachkräften. Unsere Begeisterung für
              kulturellen Austausch und die Freude an Herausforderungen
              motivieren uns dazu, Ihnen innovative Lösungen und
              außergewöhnliche Unterstützung anzubieten
            </SecondText>
          </tr>
          <tr>
            <SpaceCell />
          </tr>
        </FirstTable>
        <HiddenTable>
          <tr>
            <Heading
              ref={sections[5].ref}
              isVisible={isVisible[sections[5].id]}
            >
              leistungen
            </Heading>
          </tr>
          <tr>
            <FirstText>
              {" "}
              Unser Fachgebiet erstreckt sich über eine breite Palette von
              Dienstleistungen, die darauf abzielen, sowohl Unternehmen als auch
              ausländischen Fachkräften zu helfen, ihr volles Potenzial
              auszuschöpfen. Mit einem tiefgreifenden Verständnis der
              Bedürfnisse und Herausforderungen im Bereich der internationalen
              Fachkräfterekrutierung haben wir uns auf drei zentrale
              Schwerpunkte spezialisiert:
            </FirstText>
          </tr>{" "}
          <tr>
            <Aufzählung
              ref={sections[6].ref}
              isVisible={isVisible[sections[6].id]}
            >
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Vermittlung
            </Aufzählung>
          </tr>
          <tr>
            <Aufzählung
              ref={sections[7].ref}
              isVisible={isVisible[sections[7].id]}
            >
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Schulung
            </Aufzählung>
          </tr>
          <tr>
            <Aufzählung
              ref={sections[8].ref}
              isVisible={isVisible[sections[8].id]}
            >
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Beratung
            </Aufzählung>
          </tr>
          <tr>
            <SecondText>
              Modern Mind Recruitment geleitet Sie gerne auf Ihrer Reise der
              Gewinnung von internationalen Fachkräften. Unsere Begeisterung für
              kulturellen Austausch und die Freude an Herausforderungen
              motivieren uns dazu, Ihnen innovative Lösungen und
              außergewöhnliche Unterstützung anzubieten
            </SecondText>
          </tr>
          <tr>
            <th>
              <Papa
                src={papa}
                alt="dad holding his son"
                ref={sections[9].ref}
                isVisible={isVisible[sections[9].id]}
              />
            </th>
          </tr>
        </HiddenTable>
      </PurpleWrapper>
    </>
  );
}

const PurpleWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(92, 92, 255);
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

const Circle = styled.div`
  position: absolute;
  top: 100px;
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

const PapaCell = styled.th`
  width: 50%;
`;

const Papa = styled.img`
  width: 280px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.7s ease-in-out;

  @media (max-width: 900px) {
    width: 200px;
    margin-top: 60px;
  }

  @media (max-width: 700px) {
    opacity: 1;
    transform: translateX(0);
    transition: none;
  }
`;

const FirstTable = styled.table`
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: -60px;
  font-size: 20px;
  width: 50%;
  width: 1350px;

  @media (max-width: 1300px) {
    width: 100%;
    margin-bottom: -80px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const PinnNadel = styled.img`
  width: 40px;
  margin-left: 30px;

  @media (max-width: 900px) {
    margin-right: 10px;
  }
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

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

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

const FirstText = styled.th`
  width: 50%;
  text-align: start;
  padding-bottom: 50px;
  padding-left: 70px;
  color: white;
  opacity: 0.8;

  @media (max-width: 1400px) {
    padding-left: 50px;
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
    font-size: 18px;
  }
`;

const Aufzählung = styled.th`
  font-size: 33px;
  text-align: start;
  color: white;
  opacity: 0.8;
  padding-right: 20px;

  @media (max-width: 900px) {
    padding-left: 15%;
    padding-bottom: 15px;
  }

  @media (max-width: 480px) {
    padding-left: 5%;
    font-size: 26px;
    padding-bottom: 5px;
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const SecondText = styled.th`
  width: 50%;
  text-align: start;
  padding-top: 50px;
  padding-left: 70px;
  color: white;
  opacity: 0.8;

  @media (max-width: 1400px) {
    padding-right: 50px;
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

const SpaceCell = styled.th`
  height: 200px;
`;

const HiddenTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 70px;
  margin-bottom: -80px;

  @media (min-width: 901px) {
    display: none;
  }
`;
