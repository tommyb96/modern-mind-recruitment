import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import hand from "../../assets/svg/Workshop/workshop-hand.png";

export default function WorkshopIntro() {
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
      id: "hidden-eading",
      ref: useRef(null),
      isVisible: false,
    },
    {
      id: "hidden-statement",
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
        <Line>
          <Circle ref={sections[0].ref} isVisible={isVisible[sections[0].id]} />

          <ContactButton href="https://calendly.com/modern-mind-recruitment/45min?month=2023-09">
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
            <Heading
              ref={sections[1].ref}
              isVisible={isVisible[sections[1].id]}
            >
              workshop
            </Heading>
            <th></th>
          </tr>
          <tr>
            <LeftDiv>
              Angesichts der wachsenden Herausforderung, geeignete
              Bewerber:innen in Ihrer Region zu finden, und dem Wunsch, Ihr
              Unternehmen kulturell zu erweitern, erwägen Sie, international
              nach qualifizierten Fachkräften zu suchen. Dabei planen Sie, den
              gesamten Recruiting-Prozess selbst in die Hand zu nehmen und
              eventuell sogar eine eigene Personalabteilung für Fachkräfte aus
              dem Ausland zu gründen. Sie sind sich unsicher, wie und wo Sie
              beginnen sollen?
            </LeftDiv>
            <Statement rowSpan={3}>
              WIR MACHEN SIE FIT UM IHREN ERFOLG ZU MAXIMIEREN.
            </Statement>
          </tr>
          <tr>
            <BoldDiv>
              Unser Workshop bietet Ihnen den passenden Ansatz! Als
              Vermittler:innen sind wir mit jedem einzelnen Prozess vertraut und
              teilen gerne unser Wissen mit Ihnen.
            </BoldDiv>
          </tr>
          <tr>
            <LeftDiv>
              Um die Erwerbsmigration für Fachkräfte aus dem Ausland zu
              erleichtern, hat die Bundesregierung zum 01.03.2020 das
              Fachkräfteeinwanderungsgesetz eingeführt und neue Voraussetzungen
              geschaffen. Wir bauen auf diesen Bedingungen auf und möchten
              unseren Kund:innen zeigen, wie sie davon profitieren können.
            </LeftDiv>
          </tr>
        </Table>
        <HiddenTable>
          <tr>
            <Heading
              ref={sections[2].ref}
              isVisible={isVisible[sections[2].id]}
            >
              workshop
            </Heading>
          </tr>
          <tr>
            <LeftDiv>
              Angesichts der wachsenden Herausforderung, geeignete
              Bewerber:innen in Ihrer Region zu finden, und dem Wunsch, Ihr
              Unternehmen kulturell zu erweitern, erwägen Sie, international
              nach qualifizierten Fachkräften zu suchen. Dabei planen Sie, den
              gesamten Recruiting-Prozess selbst in die Hand zu nehmen und
              eventuell sogar eine eigene Personalabteilung für Fachkräfte aus
              dem Ausland zu gründen. Sie sind sich unsicher, wie und wo Sie
              beginnen sollen?
            </LeftDiv>
          </tr>
          <tr>
            <BoldDiv>
              Unser Workshop bietet Ihnen den passenden Ansatz! Als
              Vermittler:innen sind wir mit jedem einzelnen Prozess vertraut und
              teilen gerne unser Wissen mit Ihnen.
            </BoldDiv>
          </tr>{" "}
          <tr>
            <LeftDiv>
              Um die Erwerbsmigration für Fachkräfte aus dem Ausland zu
              erleichtern, hat die Bundesregierung zum 01.03.2020 das
              Fachkräfteeinwanderungsgesetz eingeführt und neue Voraussetzungen
              geschaffen. Wir bauen auf diesen Bedingungen auf und möchten
              unseren Kund:innen zeigen, wie sie davon profitieren können.
            </LeftDiv>
          </tr>
          <tr>
            {" "}
            <Statement
              ref={sections[3].ref}
              isVisible={isVisible[sections[3].id]}
            >
              WIR MACHEN SIE FIT UM IHREN ERFOLG ZU MAXIMIEREN.
            </Statement>
          </tr>
        </HiddenTable>
        <HiddenContactButton href="https://calendly.com/modern-mind-recruitment/45min?month=2023-09">
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
  top: 110px;
  height: 100%;
  width: 3.5px;
  background-color: rgb(192, 192, 192, 0.5);

  @media (max-width: 900px) {
    top: 80px;
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
  top: -10px;
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
  text-decoration: none;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  &:hover img {
    transform: translateY(-70px) translateX(-100px);
  }

  @media (hover: none) {
    &:hover {
      transform: none;
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
  color: black;
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
  margin-top: 100px;
  margin-bottom: 250px;

  @media (max-width: 1500px) {
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
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateY(${(props) => (props.isVisible ? 0 : "-15px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

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
    padding-bottom: 30px;
    padding-left: 30px;
    font-size: 33px;
  }
`;

const LeftDiv = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  text-align: start;
  padding-bottom: 30px;
  color: white;
  opacity: 0.8;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
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

const BoldDiv = styled.th`
  color: black;
  width: 50%;
  padding-right: 100px;
  text-align: start;
  padding-bottom: 30px;
  color: white;
  opacity: 0.8;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;

  @media (max-width: 1400px) {
    padding-left: 20px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
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

const Statement = styled.th`
  text-transform: uppercase;
  text-align: start;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 53px;
  color: white;
  padding-left: 100px;
  padding-right: 50px;

  @media (max-width: 1400px) {
    padding-right: 20px;
    padding-left: 50px;
  }

  @media (max-width: 900px) {
    padding-top: 20px;
    padding-bottom: 50px;
    padding-left: 200px;
    padding-right: 50px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
    font-size: 55px;
  }

  @media (max-width: 480px) {
    padding-bottom: 30px;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 20px;
    font-size: 40px;
    opacity: 1;
    transform: translateX(0);
    transition: none;
  }
`;

const HiddenTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 70px;
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
  text-decoration: none;

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
