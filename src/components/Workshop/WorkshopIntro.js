import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import hand from "../../assets/svg/Workshop/workshop-hand.png";

export default function WorkshopIntro() {
  const contactButtonRef = useRef(); // Ref für den ContactButton

  // Funktion, um zur gewünschten Abschnitt zu scrollen
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const refs = {
    circle: useRef(null),
    // heading: useRef(null),
    // leftdivone: useRef(null),
    // leftdivtwo: useRef(null),
    // laptop: useRef(null),
    // boldText: useRef(null),
    // fotosRight: useRef(null),
    // foto: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    circle: false,
    // heading: false,
    // leftdivone: false,
    // leftdivtwo: false,
    // laptop: false,
    // boldText: false,
    // fotosRight: false,
    // foto: false,
  });

  const handleIntersection = (entry, target) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [target]: entry.isIntersecting,
    }));
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "-100px 0px -100px 0px",
    };

    const observers = Object.keys(refs).map((key) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => handleIntersection(entry, key));
      }, observerOptions);
      observer.observe(refs[key].current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Line>
          <Circle ref={refs.circle} isVisible={isVisible.circle} />
          <ContactButton
            onClick={() => scrollToSection("kontakt")}
            ref={contactButtonRef}
          >
            <CallToAction>
              jetzt
              <br />
              kostenloses erstgespräch sichern
            </CallToAction>
            <Hand src={hand} alt={hand}></Hand>
          </ContactButton>
        </Line>
        <Table>
          <tr>
            <Heading>workshop</Heading>
            <th></th>
          </tr>
          <tr>
            <LeftDiv>
              In Ihrer Region wird es immer schwieriger, geeignete Bewerber zu
              finden, oder Sie möchten Ihr Unternehmen kulturell erweitern.
              Daher erwägen Sie, international nach qualifizierten Fachkräften
              zu suchen. Sie planen, den gesamten Recruiting-Prozess selbst in
              die Hand zu nehmen und eventuell sogar eine eigene
              Personalabteilung für ausländische Fachkräfte zu gründen.
            </LeftDiv>
            <Statement rowSpan={3}>
              WIR MACHEN SIE FIT UM IHREN ERFOLG ZU MAXIMIEREN.
            </Statement>
          </tr>
          <tr>
            <LeftDiv>
              Sie sind sich unsicher, wie und wo Sie beginnen sollen? Unser
              Workshop bietet Ihnen den passenden Ansatz. Als Vermittler sind
              wir mit jedem einzelnen Prozess vertraut und geben Ihnen gern
              unser Wissen weiter.
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              Um die Erwerbsmigration für ausländische Fachkräfte zu
              erleichtern, hat die Bundesregierung am 01.03.2020 das
              Fachkräfteeinwanderungsgesetz eingeführt und neue Voraussetzungen
              geschaffen. Wir bauen auf diesen Bedingungen auf und möchten
              unseren Kunden zeigen, wie sie davon profitieren können.
            </LeftDiv>
          </tr>
        </Table>
        <HiddenTable>
          <tr>
            <Heading>workshop</Heading>
          </tr>
          <tr>
            <LeftDiv>
              In Ihrer Region wird es immer schwieriger, geeignete Bewerber zu
              finden, oder Sie möchten Ihr Unternehmen kulturell erweitern.
              Daher erwägen Sie, international nach qualifizierten Fachkräften
              zu suchen. Sie planen, den gesamten Recruiting-Prozess selbst in
              die Hand zu nehmen und eventuell sogar eine eigene
              Personalabteilung für ausländische Fachkräfte zu gründen.
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              Sie sind sich unsicher, wie und wo Sie beginnen sollen? Unser
              Workshop bietet Ihnen den passenden Ansatz. Als Vermittler sind
              wir mit jedem einzelnen Prozess vertraut und geben Ihnen gern
              unser Wissen weiter.
            </LeftDiv>
          </tr>{" "}
          <tr>
            <LeftDiv>
              Um die Erwerbsmigration für ausländische Fachkräfte zu
              erleichtern, hat die Bundesregierung am 01.03.2020 das
              Fachkräfteeinwanderungsgesetz eingeführt und neue Voraussetzungen
              geschaffen. Wir bauen auf diesen Bedingungen auf und möchten
              unseren Kunden zeigen, wie sie davon profitieren können.
            </LeftDiv>
          </tr>
          <tr>
            {" "}
            <Statement>
              WIR MACHEN SIE FIT UM IHREN ERFOLG ZU MAXIMIEREN.
            </Statement>
          </tr>
        </HiddenTable>
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
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 167, 155);
  width: 100%;
  height: 100%;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 150px;
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

  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;
`;

const ContactButton = styled.a`
  display: flex;
  position: absolute;
  bottom: -40px;
  left: -200px;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 6px solid black;
  z-index: 200;

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
  left: 250px;
  width: 300px;

  transition: transform 0.4s ease; /* Hinzugefügte Transition */
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 250px;
  font-size: 20px;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Heading = styled.th`
  font-family: Comfortaa;
  font-size: 55px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;
  color: black;

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

const LeftDiv = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  font-size: 20px;
  text-align: start;
  padding-bottom: 30px;

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
    padding-bottom: 50px;
    padding-left: 200px;
    padding-right: 50px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
    font-size: 55px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 10px;
    font-size: 40px;
  }
`;

const HiddenTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 150px;
  margin-bottom: 50px;

  @media (min-width: 901px) {
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
  margin-bottom: -25%;
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
  left: 27vw;
  width: 38vw;
  transition: transform 0.4s ease; /* Hinzugefügte Transition */

  @media (max-width: 480px) {
    width: 47vw;
  }
`;
