import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import papa from "../../assets/svg/Leistungen/leistungen-papa.svg";
import pinnnadel from "../../assets/svg/Leistungen/leistungen-pinnnadel.svg";

export default function Leistungen() {
  const refs = {
    // circleEnd: useRef(null),
    // heading: useRef(null),
    // rightdivone: useRef(null),
  };

  const [isVisible, setIsVisible] = useState({
    // circleEnd: false,
    // heading: false,
    // rightdivone: false,
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
      rootMargin: "-30px 0px -30px 0px",
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
      <PurpleWrapper>
        <Line />

        <FirstTable>
          <tr>
            <th></th>
            <Heading>leistungen</Heading>
          </tr>
          <tr>
            <th rowSpan="6">
              <Papa src={papa} alt="dad holding his son" />
            </th>
            <FirstText>
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
            <Aufzählung>
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Vermittlung
            </Aufzählung>
          </tr>
          <tr>
            <Aufzählung>
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Schulung
            </Aufzählung>
          </tr>
          <tr>
            <Aufzählung>
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
            <SpaceCell />
          </tr>
        </FirstTable>
        <HiddenTable>
          <tr>
            <Heading>leistungen</Heading>
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
            <Aufzählung>
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Vermittlung
            </Aufzählung>
          </tr>
          <tr>
            <Aufzählung>
              <PinnNadel src={pinnnadel} alt="pinnnadel" />
              Schulung
            </Aufzählung>
          </tr>
          <tr>
            <Aufzählung>
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
              <Papa src={papa} alt="dad holding his son" />
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

const Papa = styled.img`
  width: 280px;

  @media (max-width: 900px) {
    width: 200px;
    margin-top: 60px;
  }
`;

const FirstTable = styled.table`
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
  margin-top: 150px;
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
  margin-right: 20px;
`;

const Heading = styled.th`
  width: 50%;
  font-family: Comfortaa;
  font-size: 55px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;
  padding-left: 70px;

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
    padding-right: 20px;
    font-size: 18px;
  }
`;

const Aufzählung = styled.th`
  font-size: 33px;
  text-align: start;
  padding-left: 70px;
  color: white;

  @media (max-width: 1400px) {
    padding-right: 20px;
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
    font-size: 26px;
  }
`;

const SecondText = styled.th`
  width: 50%;
  text-align: start;
  padding-top: 50px;
  padding-left: 70px;

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
  margin-top: 120px;
  margin-bottom: -80px;

  @media (min-width: 901px) {
    display: none;
  }
`;
