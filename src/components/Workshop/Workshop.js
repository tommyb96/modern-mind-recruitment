import styled from "styled-components";
import React, { useState } from "react";

import WorkshopIntro from "./WorkshopIntro";
import cubes3 from "../../assets/svg/Workshop/workshop_three_cubes.svg";
import cubes2 from "../../assets/svg/Workshop/workshop_two_cubes.svg";

export default function Workshop() {
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);
  const [isOpenSeven, setIsOpenSeven] = useState(false);
  const [isOpenEight, setIsOpenEight] = useState(false);

  return (
    <>
      <WorkshopIntro />
      <HeadingWrapper>
        <Line>
          {" "}
          <Circle />
        </Line>
        <ThreeCubes src={cubes3} alt="cubes"></ThreeCubes>
        <StyledHeading>
          <span>Inhalt</span> des Workshops: Beschäftigung ausländischer
          Fachkräfte in Deutschland
        </StyledHeading>
      </HeadingWrapper>
      <InfoWrapper>
        <InfoText>
          <WorkshopLine>
            <WorkshopCircle />
            <Circle />
          </WorkshopLine>
          <TwoCubes src={cubes2} alt="cubes"></TwoCubes>
          <Item>
            <Zahl>1</Zahl>
            <BlueTriangle />
            Allgemeine Bestimmungen für eine Beschäftigung ausländischer
            Fachkräfte
          </Item>
          <Linie />
          <Item>
            <Zahl>2</Zahl>
            <BlueTriangle
              isOpenTwo={isOpenTwo}
              onClick={() => setIsOpenTwo(!isOpenTwo)}
            />
            <span
              isOpenTwo={isOpenTwo}
              onClick={() => setIsOpenTwo(!isOpenTwo)}
              style={{
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "blue")}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Regelungen für Visum und Aufenthalt
            </span>
            <ul style={{ display: isOpenTwo ? "block" : "none" }}>
              <li>Einreisevisum und Aufenthaltstitel</li>
              <li>Fachkräfte mit Berufsausbildung</li>
              <li>Fachkräfte mit akademischer Ausbildung</li>
              <li>Regelung für ausländische Auszubildende</li>
            </ul>{" "}
          </Item>
          <Linie />
          <Item>
            <Zahl>3</Zahl>
            <BlueTriangle
              isOpenThree={isOpenThree}
              onClick={() => setIsOpenThree(!isOpenThree)}
            />
            <span
              isOpenThree={isOpenThree}
              onClick={() => setIsOpenThree(!isOpenThree)}
              style={{
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "blue")}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Beteiligung der Bundesagentur für Arbeit
            </span>
            <ul style={{ display: isOpenThree ? "block" : "none" }}>
              <li>Zustimmung der Bundesagentur für Arbeit </li>
              <li>Arbeitsmarktzulasssung</li>
            </ul>
          </Item>
          <Linie />
          <Item>
            <Zahl>4</Zahl>
            <BlueTriangle
              isOpenFour={isOpenFour}
              onClick={() => setIsOpenFour(!isOpenFour)}
            />
            <span
              isOpenFour={isOpenFour}
              onClick={() => setIsOpenFour(!isOpenFour)}
              style={{
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "blue")}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Ausländerbehörde
            </span>
            <ul style={{ display: isOpenFour ? "block" : "none" }}>
              <li>Das beschleunigte Fachkräfteverfahren</li>
              <li>Aufenthaltstitelbeantragung und -verlängerung</li>
            </ul>
          </Item>
          <Linie />
          <Item>
            <Zahl>5</Zahl>
            <BlueTriangle
              isOpenFive={isOpenFive}
              onClick={() => setIsOpenFive(!isOpenFive)}
            />
            <span
              isOpenFive={isOpenFive}
              onClick={() => setIsOpenFive(!isOpenFive)}
              style={{
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "blue")}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Anerkennung ausländischer Berufsqualifikationen
            </span>
            <ul style={{ display: isOpenFive ? "block" : "none" }}>
              <li>Grundlagen der Anerkennung</li>
              <li>Anerkennungsverfahren</li>
              <li>
                Anerkennungsbescheid / Defizitbescheid
                {/* <ul>
                  <li>Volle und teilweise anerkannte Gleichwertigkeit</li>
                  <li>Qualifizierungsmaßnahmen</li>
                </ul> */}
              </li>
            </ul>{" "}
          </Item>
          <Linie />
          <Item>
            <Zahl>6</Zahl>
            <BlueTriangle />
            Beantragung von Fördermitteln
          </Item>
          <Linie />
          <Item>
            <Zahl>7</Zahl>
            <BlueTriangle
              isOpenSeven={isOpenSeven}
              onClick={() => setIsOpenSeven(!isOpenSeven)}
            />
            <span
              isOpenSeven={isOpenSeven}
              onClick={() => setIsOpenSeven(!isOpenSeven)}
              style={{
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "blue")}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Erfolgskriterien
            </span>
            <ul style={{ display: isOpenSeven ? "block" : "none" }}>
              <li>
                allgemeine Erfolgskriterien bei der Einstellung ausländischer
                Fachkräfte Eight
              </li>
              <li>Erfahrungen und Best Practices</li>
            </ul>{" "}
          </Item>
          <Linie />
          <Item>
            <Zahl>8</Zahl>
            <BlueTriangle
              isOpenEight={isOpenEight}
              onClick={() => setIsOpenEight(!isOpenEight)}
            />
            <span
              isOpenEight={isOpenEight}
              onClick={() => setIsOpenEight(!isOpenEight)}
              style={{
                cursor: "pointer",
              }}
              onMouseOver={(e) => (e.target.style.color = "blue")}
              onMouseOut={(e) => (e.target.style.color = "")}
            >
              Sozialer Aspekt
            </span>
            <ul style={{ display: isOpenEight ? "block" : "none" }}>
              <li>Familiennachzug</li>
              <li>Onboarding-Prozess</li>
              <li>Integration der ausländischen Fachkräfte</li>
            </ul>
          </Item>
        </InfoText>
      </InfoWrapper>
    </>
  );
}

const HeadingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0%;
  height: 500px;
  width: 3.5px;
  background-color: black;
  z-index: 100;
  @media (max-width: 900px) {
    left: 15%;
  }

  @media (max-width: 550px) {
    height: 350px;
  }
`;

const Circle = styled.div`
  position: absolute;
  bottom: 0px;
  left: -15px;
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;
`;

const ThreeCubes = styled.img`
  width: 380px;
  margin: 60px;

  @media (max-width: 900px) {
    align-self: flex-end;
    transform: rotate(180deg);
  }

  @media (max-width: 550px) {
    width: 260px;
    margin: 40px 40px 60px 40px;
  }
`;

const StyledHeading = styled.h1`
  position: relative;
  font-family: Comfortaa;
  text-shadow: 1px 0 rgb(0, 0, 0);
  font-weight: 500;
  align-self: center;
  font-size: 40px;
  margin: 0 80px 80px 80px;

  span {
    color: rgb(0, 0, 255);
    font-family: "Righteous", cursive;
    text-shadow: 0px 0 rgb(0, 0, 0);
  }
  @media (max-width: 1024px) {
    margin: 0 40px 40px 40px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: center;
  max-width: 1000px;
`;

const WorkshopLine = styled.div`
  position: absolute;
  left: 17%;
  top: 10px;
  height: 100%;
  width: 3.5px;
  background-color: black;
  z-index: 100;
  /* @media (max-width: 900px) {
    left: 15%;
  } */
  @media (max-width: 480px) {
    display: none;
  }
`;

const WorkshopCircle = styled.div`
  position: absolute;
  top: 0px;
  left: -15px;
  background-color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;
`;

const TwoCubes = styled.img`
  align-self: flex-end;
  width: 380px;
  @media (max-width: 550px) {
    width: 260px;
  }
`;

const BlueTriangle = styled.span`
  width: 0;
  height: 0;
  margin-right: 10px;
  border-style: solid;
  border-width: 25px 15px 0 15px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
`;

const Item = styled.div`
  position: relative;
  max-width: 700px;
  margin: 60px 10px 60px 200px;
  font-size: 35px;
  font-family: system-ui;
  font-weight: 500;

  ul {
    list-style-type: none;
    margin: 20px;
    li {
      font-size: 25px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: normal;
      margin-bottom: 10px;
      &:before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 10px;
        border-radius: 50%;
        background-color: blue;
      }
    }
  }

  @media (max-width: 480px) {
    margin: 60px 10px 60px 30px;
    font-size: 23px;

    ul {
      li {
        font-size: 20px;
      }
    }
  }
`;

const Zahl = styled.div`
  position: absolute;
  left: -120px;
  top: -30px;
  font-size: 90px;
  color: blue;
  font-family: Righteous;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Linie = styled.div`
  width: 85%;
  height: 1.5px;
  background-color: rgb(102, 102, 102, 0.4);
  margin: 0 35px 0 35px;
  @media (min-width: 481px) {
    display: none;
  }
`;
