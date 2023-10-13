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
    {
      id: "one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "seven",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-seven",
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
          <Container>
            <SmallContainer>
              <Heading
                ref={sections[2].ref}
                isVisible={isVisible[sections[2].id]}
              >
                Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
                in Deutschland:
              </Heading>
              <Animation
                ref={sections[4].ref}
                isVisible={isVisible[sections[4].id]}
              >
                <Section open={isOpenOne} onClick={toggleOpenOne}>
                  <BlueTriangle>
                    <BlueTriangleOne open={isOpenOne} />
                  </BlueTriangle>
                  <Zahl>1</Zahl>
                  <Überschrift> Allgemeine Voraussetzungen</Überschrift>
                </Section>
                <Row>
                  {isOpenOne && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenOne}>
                        Allgemeine Richtlinien für die Einstellung ausländischer
                        Fachkräfte
                      </ListParagraph>
                    </SingleRow>
                  )}
                </Row>
              </Animation>
              <Animation
                ref={sections[5].ref}
                isVisible={isVisible[sections[5].id]}
              >
                <Section open={isOpenTwo} onClick={toggleOpenTwo}>
                  <BlueTriangle>
                    <BlueTriangleOne open={isOpenTwo} />
                  </BlueTriangle>
                  <Zahl>2</Zahl>
                  <Überschrift>
                    {" "}
                    Regelungen für Visum und Aufenthaltstitel
                  </Überschrift>
                </Section>
                <Row>
                  {isOpenTwo && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenTwo}>
                        Einreisevisum und Aufenthaltstitel
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenTwo && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenTwo}>
                        Fachkräfte mit Berufsausbildung
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenTwo && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenTwo}>
                        Fachkräfte mit akademischer Ausbildung
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenTwo && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenTwo}>
                        Regelung für ausländische Studierende
                      </ListParagraph>
                    </SingleRow>
                  )}
                </Row>
              </Animation>{" "}
              <Animation
                ref={sections[6].ref}
                isVisible={isVisible[sections[6].id]}
              >
                <Section open={isOpenThree} onClick={toggleOpenThree}>
                  <BlueTriangle>
                    <BlueTriangleOne open={isOpenThree} />
                  </BlueTriangle>
                  <Zahl>3</Zahl>
                  <Überschrift>
                    Beteiligung der Bundesagentur für Arbeit
                  </Überschrift>
                </Section>
                <Row>
                  {isOpenThree && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenThree}>
                        Zustimmung der Bundesagentur
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenThree && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenThree}>
                        Arbeitsmarktzulassung
                      </ListParagraph>
                    </SingleRow>
                  )}
                </Row>
              </Animation>{" "}
              <Animation
                ref={sections[7].ref}
                isVisible={isVisible[sections[7].id]}
              >
                <Section open={isOpenFour} onClick={toggleOpenFour}>
                  <BlueTriangle>
                    <BlueTriangleOne open={isOpenFour} />
                  </BlueTriangle>
                  <Zahl>4</Zahl>
                  <Überschrift>Beteiligung der Ausländerbehörde</Überschrift>
                </Section>
                <Row>
                  {isOpenFour && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenFour}>
                        Das beschleunigte Fachkräfteverfahren nach §81a
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenFour && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenFour}>
                        Aufenthaltstitelbentragung und -verlängerung
                      </ListParagraph>
                    </SingleRow>
                  )}
                </Row>
              </Animation>{" "}
              <Animation
                ref={sections[8].ref}
                isVisible={isVisible[sections[8].id]}
              >
                <Section open={isOpenFive} onClick={toggleOpenFive}>
                  <BlueTriangle>
                    <BlueTriangleOne open={isOpenFive} />
                  </BlueTriangle>
                  <Zahl>5</Zahl>
                  <Überschrift>
                    {" "}
                    Anerkennung ausländischer Berufsabschlüsse
                  </Überschrift>
                </Section>
                <Row>
                  {isOpenFive && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenFive}>
                        Grundlagen der Anerkennung
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenFive && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenFive}>
                        Anerkennungsverfahren
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenFive && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenFive}>
                        Anerkennungsbescheid / Defizitbescheid
                      </ListParagraph>
                    </SingleRow>
                  )}
                </Row>
              </Animation>{" "}
              <Animation
                ref={sections[9].ref}
                isVisible={isVisible[sections[9].id]}
              >
                <Section open={isOpenSix} onClick={toggleOpenSix}>
                  <BlueTriangle>
                    <BlueTriangleOne open={isOpenSix} />
                  </BlueTriangle>
                  <Zahl>6</Zahl>
                  <Überschrift>Möglichkeiten der Förderung</Überschrift>
                </Section>
                <Row>
                  {isOpenSix && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenSix}>
                        Anforderungen und Optionen zur Antragstellung von
                        Fördermitteln
                      </ListParagraph>
                    </SingleRow>
                  )}
                </Row>
              </Animation>{" "}
              <Animation
                ref={sections[10].ref}
                isVisible={isVisible[sections[10].id]}
              >
                <Section open={isOpenSeven} onClick={toggleOpenSeven}>
                  <BlueTriangle>
                    <BlueTriangleOne open={isOpenSeven} />
                  </BlueTriangle>
                  <Zahl>7</Zahl>
                  <Überschrift> Sozialer Aspekt</Überschrift>
                </Section>
                <Row>
                  {isOpenSeven && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenSeven}>
                        Familiennachzug
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenSeven && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenSeven}>
                        Onboarding-Prozess
                      </ListParagraph>
                    </SingleRow>
                  )}
                  {isOpenSeven && (
                    <SingleRow>
                      <BlueCircle src={bluecircle} alt="blue circle" />
                      <ListParagraph open={isOpenSeven}>
                        Integration von ausländischen Fachkräften
                      </ListParagraph>
                    </SingleRow>
                  )}
                </Row>
              </Animation>
            </SmallContainer>
          </Container>
          <HiddenSection>
            <Heading
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              Inhalte des Workshops zur Beschäftigung ausländischer Fachkräfte
              in Deutschland:
            </Heading>{" "}
            <Animation
              ref={sections[11].ref}
              isVisible={isVisible[sections[11].id]}
            >
              <Section open={isOpenOne} onClick={toggleOpenOne}>
                <BlueTriangle>
                  <BlueTriangleOne open={isOpenOne} />
                </BlueTriangle>
                <Zahl>1</Zahl>
                <Überschrift> Allgemeine Voraussetzungen</Überschrift>
              </Section>
              <Row>
                {isOpenOne && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenOne}>
                      Allgemeine Richtlinien für die Einstellung ausländischer
                      Fachkräfte
                    </ListParagraph>
                  </SingleRow>
                )}
              </Row>
            </Animation>{" "}
            <Animation
              ref={sections[12].ref}
              isVisible={isVisible[sections[12].id]}
            >
              <Section open={isOpenTwo} onClick={toggleOpenTwo}>
                <BlueTriangle>
                  <BlueTriangleOne open={isOpenTwo} />
                </BlueTriangle>
                <Zahl>2</Zahl>
                <Überschrift>
                  {" "}
                  Regelungen für Visum und Aufenthaltstitel
                </Überschrift>
              </Section>
              <Row>
                {isOpenTwo && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenTwo}>
                      Einreisevisum und Aufenthaltstitel
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenTwo && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenTwo}>
                      Fachkräfte mit Berufsausbildung
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenTwo && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenTwo}>
                      Fachkräfte mit akademischer Ausbildung
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenTwo && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenTwo}>
                      Regelung für ausländische Studierende
                    </ListParagraph>
                  </SingleRow>
                )}
              </Row>
            </Animation>{" "}
            <Animation
              ref={sections[13].ref}
              isVisible={isVisible[sections[13].id]}
            >
              <Section open={isOpenThree} onClick={toggleOpenThree}>
                <BlueTriangle>
                  <BlueTriangleOne open={isOpenThree} />
                </BlueTriangle>
                <Zahl>3</Zahl>
                <Überschrift>
                  Beteiligung der Bundesagentur für Arbeit
                </Überschrift>
              </Section>
              <Row>
                {isOpenThree && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenThree}>
                      Zustimmung der Bundesagentur
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenThree && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenThree}>
                      Arbeitsmarktzulassung
                    </ListParagraph>
                  </SingleRow>
                )}
              </Row>
            </Animation>{" "}
            <Animation
              ref={sections[14].ref}
              isVisible={isVisible[sections[14].id]}
            >
              <Section open={isOpenFour} onClick={toggleOpenFour}>
                <BlueTriangle>
                  <BlueTriangleOne open={isOpenFour} />
                </BlueTriangle>
                <Zahl>4</Zahl>
                <Überschrift>Beteiligung der Ausländerbehörde</Überschrift>
              </Section>
              <Row>
                {isOpenFour && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenFour}>
                      Das beschleunigte Fachkräfteverfahren nach §81a
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenFour && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenFour}>
                      Aufenthaltstitelbentragung und -verlängerung
                    </ListParagraph>
                  </SingleRow>
                )}
              </Row>
            </Animation>{" "}
            <Animation
              ref={sections[15].ref}
              isVisible={isVisible[sections[15].id]}
            >
              <Section open={isOpenFive} onClick={toggleOpenFive}>
                <BlueTriangle>
                  <BlueTriangleOne open={isOpenFive} />
                </BlueTriangle>
                <Zahl>5</Zahl>
                <Überschrift>
                  {" "}
                  Anerkennung ausländischer Berufsabschlüsse
                </Überschrift>
              </Section>
              <Row>
                {isOpenFive && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenFive}>
                      Grundlagen der Anerkennung
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenFive && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenFive}>
                      Anerkennungsverfahren
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenFive && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenFive}>
                      Anerkennungsbescheid / Defizitbescheid
                    </ListParagraph>
                  </SingleRow>
                )}
              </Row>
            </Animation>{" "}
            <div ref={sections[16].ref} isVisible={isVisible[sections[16].id]}>
              <Section open={isOpenSix} onClick={toggleOpenSix}>
                <BlueTriangle>
                  <BlueTriangleOne open={isOpenSix} />
                </BlueTriangle>
                <Zahl>6</Zahl>
                <Überschrift>Möglichkeiten der Förderung</Überschrift>
              </Section>
              <Row>
                {isOpenSix && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenSix}>
                      Anforderungen und Optionen zur Antragstellung von
                      Fördermitteln
                    </ListParagraph>
                  </SingleRow>
                )}
              </Row>
            </div>{" "}
            <div ref={sections[17].ref} isVisible={isVisible[sections[17].id]}>
              <Section open={isOpenSeven} onClick={toggleOpenSeven}>
                <BlueTriangle>
                  <BlueTriangleOne open={isOpenSeven} />
                </BlueTriangle>
                <Zahl>7</Zahl>
                <Überschrift> Sozialer Aspekt</Überschrift>
              </Section>
              <Row>
                {isOpenSeven && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenSeven}>
                      Familiennachzug
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenSeven && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenSeven}>
                      Onboarding-Prozess
                    </ListParagraph>
                  </SingleRow>
                )}
                {isOpenSeven && (
                  <SingleRow>
                    <BlueCircle src={bluecircle} alt="blue circle" />
                    <ListParagraph open={isOpenSeven}>
                      Integration von ausländischen Fachkräften
                    </ListParagraph>
                  </SingleRow>
                )}
              </Row>
            </div>
          </HiddenSection>
          <HiddenWoman src={woman} alt="woman"></HiddenWoman>
        </Wrapper>
        <Header>Wir zeigen Ihnen wie:</Header>
        <StyledDiv>
          Im Rahmen des Workshops werden alle aufgelisteten Punkte ausführlich
          behandelt und sorgfältig erläutert. Dabei werden nicht nur die
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
  width: 260px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 900px) {
    display: none;
  }
`;

const SmallContainer = styled.div`
  width: 50vw;
  margin-top: 300px;
  margin-bottom: 100px;
`;

const Heading = styled.div`
  font-weight: bold;
  text-align: start;
  font-size: 33px;
  margin-left: 70px;
  margin-bottom: 40px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    margin-left: 120px;
    transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  }

  @media (max-width: 700px) {
    margin-left: 70px;
  }

  @media (max-width: 480px) {
    margin-left: 30px;
    font-size: 26px;
  }
`;

const Animation = styled.div`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "5px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  cursor: pointer;
`;

const Row = styled.div`
  margin-top: -10px;
`;

const SingleRow = styled.div`
  display: flex;
  margin-left: 170px;
  margin-right: 20px;
  margin-top: 5px;

  @media (max-width: 900px) {
    margin-left: 225px;
  }

  @media (max-width: 700px) {
    margin-left: 175px;
  }

  @media (max-width: 480px) {
    margin-left: 105px;
    margin-right: 10px;
  }
`;

const BlueTriangle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;

  @media (max-width: 1100px) {
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
  }
`;

const Zahl = styled.div`
  font-size: 90px;
  color: blue;
  text-align: center;
  font-family: Righteous;
  width: 70px;

  @media (max-width: 480px) {
    font-size: 70px;
    width: 40px;
  }
`;

const Überschrift = styled.div`
  font-size: 28px;
  margin: 10px 20px 10px 10px;
  align-self: center;

  @media (max-width: 480px) {
    font-size: 26px;
    margin-left: 13px;
  }

  @media (hover: hover) {
    &:hover {
      color: blue;
    }
  }
`;

const BlueCircle = styled.img`
  width: 8px;
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
const ListParagraph = styled.div`
  font-size: 20px;
  max-height: ${({ open }) => (open ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.5 ease-in-out;
  color: rgb(0, 0, 0, 0.7);
  margin-left: 10px;

  @media (max-width: 1400px) {
  }

  @media (max-width: 700px) {
  }

  @media (max-width: 480px) {
    font-size: 18px;
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
const HiddenSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  margin-bottom: 50px;

  @media (max-width: 700px) {
    margin-top: 250px;
  }

  @media (min-width: 901px) {
    display: none;
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
