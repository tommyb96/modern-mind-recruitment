import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import waves from "../../assets/svg/AboutUs/about_us_waves.png";
import woman from "../../assets/svg/AboutUs/about-us-woman.svg";
import hand from "../../assets/svg/AboutUs/about-us-hand.png";
import checkmark from "../../assets/svg/AboutUs/about-us-checkmark.svg";

const AboutUs = () => {
  const contactButtonRef = useRef(); // Ref für den ContactButton

  // Funktion, um zur gewünschten Abschnitt zu scrollen
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => {
      if (entry.isIntersecting) {
        if (!prevState[target]) {
          console.log(`${target} is now visible.`);
        }
        return {
          ...prevState,
          [target]: true,
        };
      } else {
        if (prevState[target]) {
          console.log(`${target} is no longer visible.`);
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
      id: "über-uns",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "boldText",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "leftdivone",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-bold-text",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-left-div",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "woman",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "heading-circle",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "left-cell",
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
      id: "hidden-left-cell",
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
        <WavesLine>
          <WavesCircle
            ref={sections[0].ref}
            isVisible={isVisible[sections[0].id]}
          />
        </WavesLine>
        <Waves id={sections[0].id} src={waves} alt="waves"></Waves>
      </WavesWrapper>
      <GreenWrapper>
        <GreenLine>
          <Circle ref={sections[6].ref} isVisible={isVisible[sections[6].id]} />
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
            <Heading>über uns</Heading>
          </tr>
          <tr>
            <BoldText
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
            >
              Unsere Vision geht über das Hier und Jetzt hinaus – als Ihr
              Partner in Personalfragen setzen wir auf moderne und nachhaltige
              Lösungen, um Ihre offenen Positionen nicht nur zu besetzen,
              sondern dauerhaft mit qualifizierten Fachkräften zu beleben. Wir
              vermitteln die Talente von Morgen.
            </BoldText>
            <Statement rowSpan="2">
              lasst uns gemeinsam <br />
              ihre zukunft gestalten!
            </Statement>
          </tr>
          <tr>
            <LeftDiv
              ref={sections[2].ref}
              isVisible={isVisible[sections[2].id]}
            >
              Mit langjähriger Erfahrung möchten wir in Deutschland ansässige
              Unternehmen durch qualifizierte Fachkräfte aus Nicht-EU-Ländern
              unterstützen, sie entlasten und gleichzeitig aktiv dem
              Fachkräftemangel entgegenwirken, um unsere Wirtschaft zu stärken
              und den allgemeinen Wohlstand zu sichern.
            </LeftDiv>
          </tr>
        </FirstTable>
        <HiddenFirstTable>
          <tr>
            <Heading>über uns</Heading>
          </tr>
          <tr>
            <BoldText
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              Unsere Vision geht über das Hier und Jetzt hinaus – als Ihr
              Partner in Personalfragen setzen wir auf moderne und nachhaltige
              Lösungen, um Ihre offenen Positionen nicht nur zu besetzen,
              sondern dauerhaft mit qualifizierten Fachkräften zu beleben. Wir
              vermitteln die Talente von Morgen.
            </BoldText>
          </tr>
          <tr>
            <LeftDiv
              ref={sections[4].ref}
              isVisible={isVisible[sections[4].id]}
            >
              {" "}
              Mit langjähriger Erfahrung möchten wir in Deutschland ansässige
              Unternehmen durch qualifizierte Fachkräfte aus Nicht-EU-Ländern
              unterstützen, sie entlasten und gleichzeitig aktiv dem
              Fachkräftemangel entgegenwirken, um unsere Wirtschaft zu stärken
              und den allgemeinen Wohlstand zu sichern.
            </LeftDiv>
          </tr>
          <tr>
            <Statement>
              {" "}
              lasst uns gemeinsam <br />
              ihre zukunft gestalten!
            </Statement>
          </tr>
        </HiddenFirstTable>
        <Woman
          src={woman}
          alt="woman pointing at something"
          ref={sections[5].ref}
          isVisible={isVisible[sections[5].id]}
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
            <HeaderCell>Wofür wir stehen:</HeaderCell>
          </tr>
          <tr>
            <LeftCell
              rowSpan="7"
              ref={sections[7].ref}
              isVisible={isVisible[sections[7].id]}
            >
              Unser junges Team hat sich als Partner in Personalfragen auf die
              Organisation und Durchführung der Erwerbsmigration von
              qualifizierten Fachkräften aus Nicht-EU-Ländern spezialisiert. Als
              innovatives sächsisches Unternehmen mit einer zukunftsorientierten
              Strategie bei der Gewinnung von passendem Personal unterstützen
              wir lokal als auch bundesweit ansässige Unternehmen dabei, das zu
              großen Teilen unerschlossene Potenzial qualifizierter Fachkräfte
              aus Nicht-EU-Ländern zu nutzen und mit Blick in die Zukunft offene
              Stellen langfristig zu besetzen. Um die Zufriedenheit unserer
              Kunden und die Eignung unserer Kandidaten zu garantieren, arbeiten
              wir mit ausgewählten Partnern aus Ländern der ehemaligen
              GUS-Region sowie Mittel- und Südamerika zusammen, in denen das
              Bildungssystem dem deutschen ähnlich ist. Ihre Bedürfnisse stehen
              im Mittelpunkt unserer Bemühungen.
            </LeftCell>
          </tr>
          <tr>
            <th>
              <Checkmark src={checkmark} alt="checkmark" />
            </th>
            <RightCell
              ref={sections[8].ref}
              isVisible={isVisible[sections[8].id]}
            >
              Transparenz
            </RightCell>
          </tr>
          <tr>
            <th>
              <Checkmark src={checkmark} alt="checkmark" />
            </th>
            <RightCell
              ref={sections[9].ref}
              isVisible={isVisible[sections[9].id]}
            >
              Ehrlichkeit
            </RightCell>
          </tr>
          <tr>
            <th>
              <Checkmark src={checkmark} alt="checkmark" />
            </th>
            <RightCell
              ref={sections[10].ref}
              isVisible={isVisible[sections[10].id]}
            >
              Verlässlichkeit
            </RightCell>
          </tr>
          <tr>
            <th>
              <Checkmark src={checkmark} alt="checkmark" />
            </th>
            <RightCell
              ref={sections[11].ref}
              isVisible={isVisible[sections[11].id]}
            >
              Persönlichkeit
            </RightCell>
          </tr>
          <tr>
            <th>
              <Checkmark src={checkmark} alt="checkmark" />
            </th>
            <RightCell
              ref={sections[12].ref}
              isVisible={isVisible[sections[12].id]}
            >
              Herzlichkeit
            </RightCell>
          </tr>
          <tr>
            <th>
              <Checkmark src={checkmark} alt="checkmark" />
            </th>
            <RightCell
              ref={sections[13].ref}
              isVisible={isVisible[sections[13].id]}
            >
              Zukunft
            </RightCell>
          </tr>
        </SecondTable>
        <HiddenSecondTable>
          <tr>
            <HeaderCell>Wofür wir stehen:</HeaderCell>
          </tr>
          <tr>
            <LeftCell
              ref={sections[14].ref}
              isVisible={isVisible[sections[14].id]}
            >
              Unser junges Team hat sich als Partner in Personalfragen auf die
              Organisation und Durchführung der Erwerbsmigration von
              qualifizierten Fachkräften aus Nicht-EU-Ländern spezialisiert. Als
              innovatives sächsisches Unternehmen mit einer zukunftsorientierten
              Strategie bei der Gewinnung von passendem Personal unterstützen
              wir lokal als auch bundesweit ansässige Unternehmen dabei, das zu
              großen Teilen unerschlossene Potenzial qualifizierter Fachkräfte
              aus Nicht-EU-Ländern zu nutzen und mit Blick in die Zukunft offene
              Stellen langfristig zu besetzen. Um die Zufriedenheit unserer
              Kunden und die Eignung unserer Kandidaten zu garantieren, arbeiten
              wir mit ausgewählten Partnern aus Ländern der ehemaligen
              GUS-Region sowie Mittel- und Südamerika zusammen, in denen das
              Bildungssystem dem deutschen ähnlich ist. Ihre Bedürfnisse stehen
              im Mittelpunkt unserer Bemühungen.
            </LeftCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[15].ref}
              isVisible={isVisible[sections[15].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Transparenz
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[16].ref}
              isVisible={isVisible[sections[16].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Ehrlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[17].ref}
              isVisible={isVisible[sections[17].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Verlässlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[18].ref}
              isVisible={isVisible[sections[18].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Persönlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[19].ref}
              isVisible={isVisible[sections[19].id]}
            >
              {" "}
              <Checkmark src={checkmark} alt="checkmark" />
              Herzlichkeit
            </RightCell>
          </tr>
          <tr>
            <RightCell
              ref={sections[20].ref}
              isVisible={isVisible[sections[20].id]}
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

  @media (max-width: 900px) {
    margin-top: 100px;
  }
`;

const WavesLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 3.5px;
  background-color: darkgray;

  @media (max-width: 900px) {
    left: 10%;
    height: 140%;
  }

  @media (max-width: 700px) {
    left: 5%;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const WavesCircle = styled.div`
  position: absolute;
  top: -40px;
  left: -26px;
  background-color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 3.5px solid darkgray;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.8)});
  transition: transform 0.7s ease;

  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
    left: -18px;
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
  top: 0;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid darkgray;
  z-index: 200;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.8)});
  transition: transform 0.7s ease;

  @media (max-width: 900px) {
    top: 115px;
  }
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

  &:hover {
    transform: scale(1.07);
  }

  &:hover img {
    transform: translateY(-70px) translateX(100px);
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
  opacity: 0.8;

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

  @media (max-width: 1400px) {
    padding-left: 20px;
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

const BoldText = styled.th`
  font-family: system-ui;
  font-weight: 500;
  color: black;
  width: 50%;
  padding-right: 100px;
  font-size: 20px;
  text-align: start;
  padding-bottom: 30px;
  color: white;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 50px;
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

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "20px")});
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
`;

const LeftDiv = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  font-size: 20px;
  text-align: start;
  color: white;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 50px;
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

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "20px")});
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
`;

const Statement = styled.th`
  text-transform: uppercase;
  text-align: start;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 60px;
  color: white;
  padding-left: 100px;
  padding-right: 50px;

  @media (max-width: 1400px) {
    padding-right: 20px;
    padding-left: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 20px;
    padding-left: 200px;
    padding-right: 50px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
    font-size: 55px;
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
  margin-top: 120px;
  @media (min-width: 901px) {
    display: none;
  }
`;

const Woman = styled.img`
  width: 350px;
  align-self: center;
  margin-left: 1000px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "40px")});
  transition: opacity 0.5s ease-in-out, transform 0.7s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1400px) {
    align-self: flex-end;
    margin: 0 40px -50px 0;
  }

  @media (max-width: 900px) {
    transform: translateX(${(props) => (props.isVisible ? 0 : "30px")});
    margin-right: 10px;
    margin-bottom: -30px;
  }
  @media (max-width: 480px) {
    width: 250px;
    margin-right: 40px;
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

const HiddenContactButton = styled.a`
  display: flex;
  position: relative;
  background-color: white;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  border: 1vw solid black;
  margin: auto;
  margin-top: 100px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover img {
    transform: translateY(-70px) translateX(100px);
  }

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
  margin-bottom: 150px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const HeaderCell = styled.th`
  text-align: start;
  font-size: 39px;
  padding-bottom: 30px;

  @media (max-width: 1400px) {
    padding-left: 20px;
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

const LeftCell = styled.th`
  text-align: start;
  font-size: 20px;
  width: 50%;
  padding-right: 100px;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-bottom: 50px;
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

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "20px")});
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;
`;

const Checkmark = styled.img`
  width: 40px;
  margin-left: 30px;

  @media (max-width: 900px) {
    margin-right: 10px;
  }
`;

const RightCell = styled.th`
  font-size: 33px;
  text-align: start;
  padding-right: 20px;

  @media (max-width: 900px) {
    padding-left: 25%;
    padding-bottom: 20px;
    transform: translateX(${(props) => (props.isVisible ? 0 : "10px")});
  }

  @media (max-width: 480px) {
    padding-left: 5%;
    font-size: 26px;
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "20px")});
  transition: opacity 0.5s ease-in-out, transform 0.4s ease-in-out;
`;

const HiddenSecondTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 120px;
  margin-bottom: 150px;

  @media (min-width: 901px) {
    display: none;
  }
`;
