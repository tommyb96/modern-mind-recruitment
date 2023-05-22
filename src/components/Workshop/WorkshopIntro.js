import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import laptop from "../../assets/svg/Workshop/workshop_laptop.png";
import foto1 from "../../assets/svg/Workshop/workshop_foto_1.png";
import foto2 from "../../assets/svg/Workshop/workshop_foto_2.png";
import foto3 from "../../assets/svg/Workshop/workshop_foto_3.png";

export default function WorkshopIntro() {
  const refs = {
    circle: useRef(null),
    heading: useRef(null),
    leftdivone: useRef(null),
    leftdivtwo: useRef(null),
    laptop: useRef(null),
    boldText: useRef(null),
    fotosRight: useRef(null),
    foto: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    circle: false,
    heading: false,
    leftdivone: false,
    leftdivtwo: false,
    laptop: false,
    boldText: false,
    fotosRight: false,
    foto: false,
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
      <IntroWrapper>
        <Line>
          <Circle ref={refs.circle} isVisible={isVisible.circle} />
          <CircleOne />
          <CircleTwo />
          <LaptopLeft src={laptop} alt="laptop" />
          <FotosLeft>
            <FotoOne src={foto1} alt="people at work" />
            <FotoTwo src={foto2} alt="people at work" />
            <FotoThree src={foto3} alt="people at work" />
          </FotosLeft>
        </Line>

        <InfoText>
          <Heading
            ref={refs.heading}
            isVisible={isVisible.heading}
            id="workshop"
          >
            WORKSHOP
          </Heading>
          <LeftDiv ref={refs.leftdivone} isVisible={isVisible.leftdivone}>
            {" "}
            Sie haben festgestellt, dass die Verfügbarkeit geeigneter
            Bewerber*innen in Ihrer Region abnimmt und Sie deshalb
            beabsichtigen, auch international nach qualifizierten Fachkräften zu
            suchen. Somit ist unser Workshop genau der richtige Ansatz für Sie.
          </LeftDiv>
          <LeftDiv ref={refs.leftdivtwo} isVisible={isVisible.leftdivtwo}>
            Um die Erwerbsmigration für ausländische Fachkräfte zu erleichtern,
            hat zum 01.03.2020 die Bundesregierung mit dem
            Fachkräfteeinwanderungs<span>- </span>gesetz neue Vorraussetzungen
            geschaffen. Auf diese Bedingungen wollen wir aufbauen und unseren
            Kunden näher bringen, wie sie von diesen profitieren können.
          </LeftDiv>{" "}
          <LaptopRight
            ref={refs.laptop}
            isVisible={isVisible.laptop}
            src={laptop}
            alt="laptop"
          />
          <BoldText ref={refs.boldText} isVisible={isVisible.boldText}>
            {" "}
            Gemeinsam werden wir in unserem umfangreichen <span>
              Workshop
            </span>{" "}
            mit Schwerpunkt auf die Fachkräfteeinwanderung auf alle wichtigen
            und ergebnisführenden Aspekte detailliert eingehen.
          </BoldText>
          <FotosRight ref={refs.fotosRight} isVisible={isVisible.fotosRight}>
            <FotoOne src={foto1} alt="people at work" />
            <FotoTwo src={foto2} alt="people at work" />
            <FotoThree src={foto3} alt="people at work" />
          </FotosRight>
          <Foto
            ref={refs.foto}
            isVisible={isVisible.foto}
            src={foto3}
            alt="people at work"
          />
        </InfoText>
      </IntroWrapper>
    </>
  );
}

const IntroWrapper = styled.div`
  background-color: rgba(0, 167, 155);
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 170px;
  height: 100%;
  width: 3.5px;
  background-color: black;
  z-index: 100;

  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 480px) {
    left: 7%;
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
  border: 3.5px solid black;
  z-index: 200;

  transform: scale(${(props) => (props.isVisible ? 1 : 0.6)});
  transition: transform 1s ease-in-out;
`;

const CircleOne = styled.div`
  position: absolute;
  top: 320px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;
`;

const CircleTwo = styled.div`
  position: absolute;
  top: 740px;
  left: -9px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 900px) {
    top: 1250px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const LaptopLeft = styled.img`
  position: absolute;
  width: 500px;
  top: 200px;
  left: -40px;
  z-index: 100;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LaptopRight = styled.img`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin: 50px 0 30px 20px;
    width: 450px;
    z-index: 100;
  }

  @media (max-width: 480px) {
    width: 330px;
  }
`;

const FotosLeft = styled.div`
  position: absolute;
  top: 670px;
  left: -450px;
  display: flex;
  max-width: 400px;
  flex-wrap: wrap;
  flex-direction: row-reverse;

  @media (max-width: 900px) {
    display: none;
  }
`;

const FotosRight = styled.div`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin: 40px 0 70px 85px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const FotoOne = styled.img`
  width: 180px;
  margin: 6px;
`;

const FotoTwo = styled.img`
  width: 180px;
  margin: 6px;
`;

const FotoThree = styled.img`
  width: 180px;
  margin: 6px;
`;

const Foto = styled.img`
  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 501px) {
    display: none;
  }

  @media (max-width: 500px) {
    width: 250px;
    align-self: center;
    margin: 40px 0 40px 0;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 880px;
  margin-top: 150px;
  margin-bottom: 150px;
  font-size: 20px;

  //media query
  @media (max-width: 900px) {
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  font-size: 55px;
  text-shadow: 1px 0 rgb(0, 0, 0);
  padding: 20px;
  max-width: 420px;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-20px")});
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
  }

  @media (max-width: 480px) {
    font-size: 39px;
    margin-left: 55px;
    margin-right: 10px;
  }
`;

const LeftDiv = styled.div`
  padding: 20px;
  margin-top: 50px;
  max-width: 420px;
  position: relative;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  @media (min-width: 410px) {
    span {
      display: none;
    }
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-left: 55px;
    margin-right: 10px;
  }
`;

const BoldText = styled.div`
  font-family: system-ui;
  color: black;
  font-weight: 500;
  font-size: 32px;
  padding: 20px;
  margin-top: 50px;
  max-width: 420px;
  align-self: flex-end;

  //animation
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: translateX(${(props) => (props.isVisible ? 0 : "-10px")});
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

  span {
    color: rgb(0, 0, 255);
    font-family: Righteous;
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-left: 55px;
    margin-right: 10px;
  }
`;
