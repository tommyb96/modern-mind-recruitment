import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import waves from "../../assets/svg/AboutUs/about_us_waves.png";
import woman from "../../assets/svg/AboutUs/about-us-woman.svg";
import halfwoman from "../../assets/svg/AboutUs/about-us-woman-half.svg";
import hand from "../../assets/svg/AboutUs/about-us-hand.png";

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
      id: "statement",
      ref: useRef(null),
      isVisible: false,
    },
  ];

  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "-30px 0px -30px 0px",
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
      <div>
        <Wrapper>
          <Line>
            <Circle
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
            />
            <Statement
              ref={sections[5].ref}
              isVisible={isVisible[sections[5].id]}
            >
              lasst uns gemeinsam ihre zukunft gestalten!
            </Statement>
            <Woman src={woman} alt="woman pointing at something"></Woman>
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
          </Line>
          <InfoText>
            <Heading
              ref={sections[2].ref}
              isVisible={isVisible[sections[2].id]}
            >
              ÜBER UNS
            </Heading>
            <BoldText
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              Unsere Vision geht über das Hier und Jetzt hinaus – als Ihr
              Partner in Personalfragen setzen wir auf moderne und nachhaltige
              Lösungen, um Ihre offenen Positionen nicht nur zu besetzen,
              sondern dauerhaft mit qualifizierten Fachkräften zu beleben. Wir
              vermitteln die Talente von Morgen.
            </BoldText>{" "}
            <LeftDiv
              ref={sections[4].ref}
              isVisible={isVisible[sections[4].id]}
            >
              <div>
                Mit langjähriger Erfahrung möchten wir in Deutschland ansässige
                Unternehmen durch qualifizierte Fachkräfte aus Nicht-EU-Ländern
                unterstützen, sie entlasten und gleichzeitig aktiv dem
                Fachkräftemangel entgegenwirken, um unsere Wirtschaft zu stärken
                und den allgemeinen Wohlstand zu sichern.
              </div>
            </LeftDiv>
            <HalfWoman
              src={halfwoman}
              alt="woman pointing at something"
            ></HalfWoman>
            <HiddenStatement>
              {" "}
              lasst uns gemeinsam ihre zukunft gestalten!
            </HiddenStatement>
            <HiddenWoman
              src={woman}
              alt="woman pointing at something"
            ></HiddenWoman>
          </InfoText>
        </Wrapper>
      </div>
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
  background-color: grey;

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
  top: -11px;
  left: -26px;
  background-color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 3.5px solid black;
  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;

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

const Wrapper = styled.div`
  background-color: rgba(0, 167, 155);
  position: relative;
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 100%;
  width: 3.5px;
  background-color: gray;

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
  top: 15px;
  left: -20px;
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;

  @media (max-width: 900px) {
    top: 105px;
  }

  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
    left: -13px;
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

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1300px;
  padding-bottom: 400px;
  font-size: 20px;

  //media query
  @media (max-width: 1350px) {
    padding-bottom: 320px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 0px;
  }

  @media (max-width: 900px) {
    max-width: 500px;
    padding-bottom: 0px;
    padding-top: 50px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding-top: 70px;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  font-size: 55px;
  text-shadow: 1px 0 rgb(0, 0, 0);
  max-width: 500px;
  margin-top: 10px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  @media (max-width: 1350px) {
    margin-left: 20px;
  }

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 600px) {
    margin-left: 50px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 39px;
    margin: 0 20px 15px 20px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
  font-weight: 500;
  color: black;
  margin-top: 50px;
  max-width: 500px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1350px) {
    margin-left: 20px;
  }
  @media (max-width: 1080px) {
    max-width: 420px;
  }

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 600px) {
    margin-left: 50px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    margin: 20px;
  }
`;

const LeftDiv = styled.div`
  max-width: 500px;
  position: relative;
  margin-top: 50px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (max-width: 1350px) {
    margin-left: 20px;
  }

  @media (max-width: 1080px) {
    max-width: 420px;
  }

  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 600px) {
    margin-left: 50px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    margin: 20px;
  }
`;

const Statement = styled.div`
  position: absolute;
  left: 80px;
  top: 140px;
  width: 420px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 56px;
  color: white;

  @media (max-width: 1000px) {
    left: 50px;
    top: 170px;
    font-size: 50px;
  }

  @media (max-width: 900px) {
    display: none;
  }

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const HiddenStatement = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 56px;
  color: white;
  max-width: 500px;
  margin-top: 50px;
  margin-left: 20px;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 600px) {
    margin-left: 50px;
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    margin: 20px;
  }
`;

const Woman = styled.img`
  position: absolute;
  width: 350px;
  bottom: -40px;
  left: 300px;

  @media (max-width: 1350px) {
    left: 200px;
    width: 300px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HalfWoman = styled.img`
  width: 220px;
  align-self: flex-end;
  margin-top: -80px;

  @media (min-width: 1025px) {
    display: none;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const HiddenWoman = styled.img`
  width: 350px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: -30px;
  align-self: flex-end;
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 480px) {
    width: 250px;
  }
`;
