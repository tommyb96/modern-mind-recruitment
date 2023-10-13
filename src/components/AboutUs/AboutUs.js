import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import waves from "../../assets/svg/AboutUs/about_us_waves.png";
import woman from "../../assets/svg/AboutUs/about-us-woman.svg";
import hand from "../../assets/svg/AboutUs/about-us-hand.png";
import checkmark from "../../assets/svg/AboutUs/about-us-checkmark.svg";
import bluecircle from "../../assets/svg/Workshop/workshop-blue-circle.svg";

const AboutUs = () => {
  const contactButtonRef = useRef(); // Ref für den ContactButton

  // Funktion, um zur gewünschten Abschnitt zu scrollen
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "auto" });
    }
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
      id: "headingcircle",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "woman",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-heading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "heading-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "right-cell-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "right-cell-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "right-cell-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "right-cell-four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "right-cell-five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "right-cell-six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-heading-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-right-cell-one",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-right-cell-two",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-right-cell-three",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-right-cell-four",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-right-cell-five",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-right-cell-six",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "statement",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-statement",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "third-header",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-third-header",
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
      <WavesWrapper>
        {" "}
        <Waves id="über-uns" src={waves} alt="waves"></Waves>
      </WavesWrapper>
      <GreenWrapper>
        <GreenLine>
          <Circle ref={sections[0].ref} isVisible={isVisible[sections[0].id]} />
          <ContactButton
            onClick={() => scrollToSection("kontakt")}
            ref={contactButtonRef}
          >
            <CallToAction>
              jetzt
              <br />
              offene stellen besetzen
            </CallToAction>
            <Hand src={hand} alt={hand}></Hand>
          </ContactButton>
        </GreenLine>
        <FirstTable>
          <tr>
            <Heading
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
            >
              über uns
            </Heading>
            <th></th>
          </tr>
          <tr>
            <BoldText>
              Unsere Vision erstreckt sich weit über das Hier und Jetzt hinaus
              und ist das Ergebnis unserer langjährigen Erfahrung im Bereich der
              Personalvermittlung. Als Ihr vertrauenswürdiger Partner in Fragen
              des Personals setzen wir auf moderne und nachhaltige Lösungen, um
              nicht nur offene Positionen zu besetzen, sondern diese langfristig
              mit qualifizierten Fachkräften sichern. Die Vermittlung unserer
              ,,Talente von morgen" steht dabei im Mittelpunkt unserer Mission.
            </BoldText>
            <Statement
              ref={sections[18].ref}
              isVisible={isVisible[sections[18].id]}
              rowSpan="2"
            >
              lasst uns gemeinsam <br />
              ihre zukunft gestalten!
            </Statement>
          </tr>
          <tr>
            <LeftDiv>
              Bei Modern Mind Recruitment schätzen wir unsere vielfältigen
              Wurzeln, die unsere kulturelle Vielfalt geprägt und unsere
              Herangehensweise an die Personalvermittlung beeinflusst haben. Wir
              brechen bewusst aus dem traditionellen Rahmen aus und legen
              unseren Schwerpunkt auf das unerschlossene Potenzial der
              <span> internationalen Fachkräfte.</span>
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              Unsere Leidenschaft besteht darin, qualifizierte Talente aus
              verschiedenen Teilen der Welt zu entdecken und ihnen eine neue
              Zukunft in Deutschland zu ermöglichen. Wir glauben an
              Win-Win-Lösungen, bei denen Unternehmen ihr Team erweitern und
              gleichzeitig Menschen die Möglichkeit erhalten, ihre Karrieren in
              Deutschland aufzubauen.
            </LeftDiv>
          </tr>
        </FirstTable>
        <HiddenFirstTable>
          <tr>
            <Heading
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              über uns
            </Heading>
          </tr>
          <tr>
            <BoldText>
              Unsere Vision erstreckt sich weit über das Hier und Jetzt hinaus
              und ist das Ergebnis unserer langjährigen Erfahrung im Bereich der
              Personalvermittlung. Als Ihr vertrauenswürdiger Partner in Fragen
              des Personals setzen wir auf moderne und nachhaltige Lösungen, um
              nicht nur offene Positionen zu besetzen, sondern diese langfristig
              mit qualifizierten Fachkräften zu sichern. Die Vermittlung unserer
              ,,Talente von morgen" steht dabei im Mittelpunkt unserer Mission.
            </BoldText>
          </tr>
          <tr>
            <LeftDiv>
              Bei Modern Mind Recruitment schätzen wir unsere vielfältigen
              Wurzeln, die unsere kulturelle Vielfalt geprägt und unsere
              Herangehensweise an die Personalvermittlung beeinflusst haben. Wir
              brechen bewusst aus dem traditionellen Rahmen aus und legen
              unseren Schwerpunkt auf das unerschlossene Potenzial der
              internationalen Fachkräfte.
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              Unsere Leidenschaft besteht darin, qualifizierte Talente aus
              verschiedenen Teilen der Welt zu entdecken und ihnen eine neue
              Zukunft in Deutschland zu ermöglichen. Wir glauben an
              Win-Win-Lösungen, bei denen Unternehmen ihr Team erweitern und
              gleichzeitig Menschen die Möglichkeit erhalten, ihre Karrieren in
              Deutschland aufzubauen.
            </LeftDiv>
          </tr>
          <tr>
            <Statement
              ref={sections[19].ref}
              isVisible={isVisible[sections[19].id]}
            >
              {" "}
              lasst uns gemeinsam <br />
              ihre zukunft gestalten!
            </Statement>
          </tr>
        </HiddenFirstTable>
        <Woman
          src={woman}
          alt="woman pointing at something"
          ref={sections[2].ref}
          isVisible={isVisible[sections[2].id]}
        ></Woman>
      </GreenWrapper>
      <WhiteWrapper>
        <WhiteLine />
        <HiddenContactButton
          onClick={() => scrollToSection("kontakt")}
          ref={contactButtonRef}
        >
          <HiddenCallToAction>
            jetzt
            <br />
            offene stellen besetzen
          </HiddenCallToAction>
          <HiddenHand src={hand} alt={hand}></HiddenHand>
        </HiddenContactButton>
        <SecondTable>
          <tr>
            <HeaderCell
              ref={sections[4].ref}
              isVisible={isVisible[sections[4].id]}
            >
              Wofür wir stehen:
            </HeaderCell>
          </tr>
          <tr>
            <LeftCell>
              Unser junges Team hat sich als Partner:innen in Personalfragen auf
              die Vermittlung qualifizierter Fachkräfte aus Nicht-EU-Ländern
              spezialisiert und vertritt somit eine ausgesprochen soziale
              Überzeugung. Wir setzen uns vor allem für Ehrlichkeit und
              Verlässlichkeit ein, aber noch viel wichtiger ist für uns: die
              Menschlichkeit.
            </LeftCell>
            <td rowSpan={3}>
              <Right
                ref={sections[5].ref}
                isVisible={isVisible[sections[5].id]}
              >
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
                Transparenz
              </Right>
              <Right
                ref={sections[6].ref}
                isVisible={isVisible[sections[6].id]}
              >
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
                Ehrlichkeit
              </Right>
              <Right
                ref={sections[7].ref}
                isVisible={isVisible[sections[7].id]}
              >
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
                Verlässlichkeit
              </Right>
              <Right
                ref={sections[8].ref}
                isVisible={isVisible[sections[8].id]}
              >
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
                Persönlichkeit
              </Right>
              <Right
                ref={sections[9].ref}
                isVisible={isVisible[sections[9].id]}
              >
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
                Herzlichkeit
              </Right>
              <Right
                ref={sections[10].ref}
                isVisible={isVisible[sections[10].id]}
              >
                {" "}
                <Checkmark src={checkmark} alt="checkmark" />
                Zukunft
              </Right>
            </td>
          </tr>
          <tr>
            <BoldHeader
              ref={sections[20].ref}
              isVisible={isVisible[sections[20].id]}
            >
              Welche Ansätze verfolgen wir?
            </BoldHeader>
          </tr>
          <tr>
            <LeftCell rowSpan={2}>
              Unsere Strategie verfolgt mehrere Ansätze: Wir unterstützen
              Unternehmen bei der Besetzung offener Stellen, bekämpfen den
              Fachkräftemangel und bieten durch Erwerbsmigration Chancen zur
              Lebensveränderung.
            </LeftCell>
          </tr>
        </SecondTable>
        <HiddenSecondTable>
          <tr>
            <HeaderCell
              ref={sections[11].ref}
              isVisible={isVisible[sections[11].id]}
            >
              Wofür wir stehen:
            </HeaderCell>
          </tr>
          <tr>
            <LeftCell>
              Unser junges Team hat sich als Partner:innen in Personalfragen auf
              die Vermittlung qualifizierter Fachkräfte aus Nicht-EU-Ländern
              spezialisiert und vertritt somit eine ausgesprochen soziale
              Überzeugung. Wir setzen uns vor allem für Ehrlichkeit und
              Verlässlichkeit ein, aber noch viel wichtiger ist für uns: die
              Menschlichkeit.
            </LeftCell>
          </tr>
          <tr>
            <BoldHeader
              ref={sections[21].ref}
              isVisible={isVisible[sections[21].id]}
            >
              Welche Ansätze verfolgen wir?
            </BoldHeader>
          </tr>
          <tr>
            <LeftCell>
              Unsere Strategie verfolgt mehrere Ansätze: Wir unterstützen
              Unternehmen bei der Besetzung offener Stellen, bekämpfen den
              Fachkräftemangel und bieten durch Erwerbsmigration Chancen zur
              Lebensveränderung.
            </LeftCell>
          </tr>
          <tr>
            <RightCell
              style={{ paddingTop: "10px" }}
              ref={sections[12].ref}
              isVisible={isVisible[sections[12].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Transparenz
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[13].ref}
              isVisible={isVisible[sections[13].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Ehrlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[14].ref}
              isVisible={isVisible[sections[14].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Verlässlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[15].ref}
              isVisible={isVisible[sections[15].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Persönlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[16].ref}
              isVisible={isVisible[sections[16].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Herzlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[17].ref}
              isVisible={isVisible[sections[17].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Zukunft
            </RightCell>
          </tr>
        </HiddenSecondTable>
      </WhiteWrapper>
    </>
  );
};

export default AboutUs;

const WavesWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: -1;

  @media (max-width: 900px) {
    margin-top: 50px;
  }
`;

const Waves = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const GreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 167, 155);
  position: relative;
  width: 100%;
  height: 100%;
`;

const GreenLine = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  height: 100%;
  width: 3.5px;
  background-color: rgb(192, 192, 192, 0.5);

  @media (max-width: 900px) {
    left: 10%;
    top: 40px;
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
  top: -10px;
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

const ContactButton = styled.a`
  display: flex;
  position: absolute;
  bottom: -200px;
  left: -200px;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 6px solid black;
  z-index: 100;
  transition: transform 0.3s ease;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
    }

    &:hover img {
      transform: translateY(-70px) translateX(100px);
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const CallToAction = styled.div`
  text-transform: uppercase;
  margin: 20px;
  font-weight: bold;
  font-size: 38px;
  text-align: center;
  align-self: center;
`;

const Hand = styled.img`
  position: absolute;
  bottom: -120px;
  left: -150px;
  width: 300px;

  transition: transform 0.4s ease; /* Hinzugefügte Transition */
`;

const FirstTable = styled.table`
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 1400px) {
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

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-left: 40px;
    font-size: 49px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-bottom: 30px;
    padding-left: 30px;
    font-size: 33px;
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
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 20px;
  }
`;

const LeftDiv = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  text-align: start;
  color: white;
  opacity: 0.8;
  padding-bottom: 30px;

  span {
    font-weight: bold;
  }

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
    padding-bottom: 20px;
  }
`;

const Statement = styled.th`
  text-transform: uppercase;
  text-align: start;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 53px;
  color: white;
  padding-left: 100px;
  padding-right: 50px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-right: 40px;
    padding-left: 50px;
  }

  @media (max-width: 900px) {
    transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 200px;
    padding-right: 50px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    padding-bottom: 0px;
    font-size: 40px;
  }
`;

const HiddenFirstTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 30px;
  @media (min-width: 901px) {
    display: none;
  }
`;

const Woman = styled.img`
  width: 350px;
  align-self: center;
  margin-left: 1000px;
  margin-top: -140px;
  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1400px) {
    align-self: flex-end;
    margin: -100px 40px -50px 0;
  }

  @media (max-width: 900px) {
    margin-top: 0;
    margin-right: 40px;
    margin-bottom: -30px;
  }
  @media (max-width: 480px) {
    width: 250px;
    margin-right: 30px;
    margin-top: 30px;
    opacity: 1;
    transform: translateX(0);
    transition: none;
  }
`;

const WhiteWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const WhiteLine = styled.div`
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

const HiddenContactButton = styled.a`
  display: flex;
  position: relative;
  background-color: white;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  border: 1vw solid black;
  margin: auto;
  margin-top: 60px;
  transition: transform 0.3s ease;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 700px) {
    margin-top: 90px;
  }

  @media (max-width: 480px) {
    width: 70vw;
    height: 70vw;
    border: 1.5vw solid black;
  }
`;

const HiddenCallToAction = styled.div`
  text-transform: uppercase;
  margin: 20px;
  font-weight: bold;
  font-size: 4.5vw;
  text-align: center;
  align-self: center;
  color: black;

  @media (max-width: 480px) {
    font-size: 5.5vw;
  }
`;

const HiddenHand = styled.img`
  position: absolute;
  bottom: -15vw;
  left: -15vw;
  width: 38vw;
  transition: transform 0.4s ease; /* Hinzugefügte Transition */

  @media (max-width: 480px) {
    width: 47vw;
  }
`;

const SecondTable = styled.table`
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 350px;
  margin-bottom: 120px;

  @media (max-width: 1400px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const HeaderCell = styled.th`
  text-align: start;
  font-size: 39px;
  padding-bottom: 20px;
  padding-top: 20px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
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

const LeftCell = styled.th`
  text-align: start;
  width: 50%;
  padding-right: 100px;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 30px;
    padding-left: 140px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
  }
`;

const BoldHeader = styled.th`
  text-align: start;
  padding-top: 30px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 21px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1400px) {
    padding-left: 40px;
  }

  @media (max-width: 900px) {
    padding-left: 140px;
    padding-top: 0;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    font-size: 20px;
  }
`;

const Checkmark = styled.img`
  width: 40px;
  margin-left: 30px;
  margin-right: 20px;

  @media (max-width: 900px) {
    margin-right: 10px;
  }
`;

const Right = styled.div`
  font-size: 33px;
  padding-left: 30px;
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const RightCell = styled.th`
  font-size: 33px;
  text-align: start;
  padding-right: 20px;

  @media (max-width: 900px) {
    padding-left: 15%;
    padding-bottom: 10px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    padding-left: 5%;
    font-size: 23px;
    padding-bottom: 0px;
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "10px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const HiddenSecondTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 70px;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 480px) {
    margin-top: 70px;
  }
`;
