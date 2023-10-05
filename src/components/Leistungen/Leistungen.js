import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

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
      <PurpleWrapper id="leistungen">
        <Line>
          <Circle ref={sections[0].ref} isVisible={isVisible[sections[0].id]} />
          <Papa
            src={papa}
            alt="dad holding his son"
            ref={sections[10].ref}
            isVisible={isVisible[sections[10].id]}
          />
        </Line>
        <FirstTable>
          <tr>
            <Cell></Cell>
            <Heading
              colSpan={2}
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
            >
              leistungen
            </Heading>
          </tr>
          <tr>
            <Cell></Cell>
            <FirstText colSpan={1}>
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
            <Cell></Cell>
            <StyledDiv
              ref={sections[2].ref}
              isVisible={isVisible[sections[2].id]}
            >
              {" "}
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Vermittlung
            </StyledDiv>
            <StyledDiv
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              {" "}
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Schulung
            </StyledDiv>
            <StyledDiv
              ref={sections[4].ref}
              isVisible={isVisible[sections[4].id]}
            >
              {" "}
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Beratung
            </StyledDiv>
          </tr>
          <tr>
            <Cell></Cell>
            <SecondText colSpan={2}>
              Modern Mind Recruitment geleitet Sie gerne auf Ihrer Reise der
              Gewinnung von internationalen Fachkräften. Unsere Begeisterung für
              kulturellen Austausch und die Freude an Herausforderungen
              motivieren uns dazu, Ihnen innovative Lösungen und
              außergewöhnliche Unterstützung anzubieten
            </SecondText>
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
              außergewöhnliche Unterstützung anzubieten.
            </SecondText>
          </tr>
          <tr>
            <th>
              <SecondPapa
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
  flex-direction: column;
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
  background-color: rgb(192, 192, 192, 0.5);

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
  border: 3.5px solid rgb(192, 192, 192);
  z-index: 200;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.8)});
  transition: transform 0.7s ease;

  @media (max-width: 900px) {
    top: 70px;
  }
`;

const FirstTable = styled.table`
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 120px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Cell = styled.th`
  width: 50vw;
`;

const Papa = styled.img`
  position: absolute;
  width: 230px;
  bottom: -50px;
  left: -350px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 0.5s ease-in-out, transform 0.7s ease-in-out;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SecondPapa = styled.img`
  @media (min-width: 901px) {
    display: none;
  }
  width: 200px;
  margin-top: 60px;

  @media (max-width: 480px) {
    margin-top: 40px;
    width: 150px;
    opacity: 1;
    transform: translateX(0);
    transition: none;
  }
`;

const PinnNadel = styled.img`
  width: 40px;
  margin-right: 15px;
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
    padding-right: 40px;
    padding-left: 50px;
    font-size: 49px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
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

const FirstText = styled.td`
  text-align: start;
  padding-left: 70px;
  color: white;
  opacity: 0.8;
  width: 50%;
  padding-bottom: 20px;

  @media (max-width: 1400px) {
    padding-left: 50px;
    padding-right: 40px;
    padding-bottom: 30px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
    padding-bottom: 30px;
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

const StyledDiv = styled.div`
  font-size: 33px;
  text-align: start;
  color: white;
  padding-right: 10px;
  padding-left: 70px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const Aufzählung = styled.td`
  font-size: 33px;
  text-align: start;
  color: white;
  padding-right: 10px;
  padding-left: 70px;

  @media (max-width: 900px) {
    padding-left: 160px;
    font-size: 28px;
  }

  @media (max-width: 700px) {
    padding-left: 100px;
  }
  @media (max-width: 480px) {
    padding-left: 50px;
    font-size: 23px;
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const SecondText = styled.td`
  text-align: start;
  padding-top: 30px;
  padding-left: 70px;
  color: white;
  opacity: 0.8;
  font-weight: 500;
  font-family: system-ui;

  @media (max-width: 1400px) {
    padding-right: 40px;
    padding-left: 50px;
    padding-top: 30px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
    padding-top: 30px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 25px;
  }
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
