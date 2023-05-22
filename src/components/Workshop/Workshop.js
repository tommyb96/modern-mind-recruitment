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
          <PlaceHolder />
          <Item>
            <Zahl>1</Zahl>
            <CircleOne />
            <BlueTriangle />
            <Header>
              Allgemeine Bestimmungen für eine Beschäftigung ausländischer
              Fachkräfte
            </Header>
          </Item>
          <Linie />
          <Item>
            <Zahl>2</Zahl>
            <CircleTwo />
            <BlueTriangleTwo
              isOpenTwo={isOpenTwo}
              onClick={() => setIsOpenTwo(!isOpenTwo)}
            />
            <Header>
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
              <ListWrapper style={{ display: isOpenTwo ? "block" : "none" }}>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Einreisevisum und Aufenthaltstitel
                  </ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>Fachkräfte mit Berufsausbildung</ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Fachkräfte mit akademischer Ausbildung
                  </ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Regelung für ausländische Auszubildende
                  </ListParagraph>
                </List>
              </ListWrapper>{" "}
            </Header>
          </Item>
          <Linie />
          <Item>
            <Zahl>3</Zahl>
            <CircleThree />
            <BlueTriangleThree
              isOpenThree={isOpenThree}
              onClick={() => setIsOpenThree(!isOpenThree)}
            />
            <Header>
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
              <ListWrapper style={{ display: isOpenThree ? "block" : "none" }}>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Zustimmung der Bundesagentur für Arbeit
                  </ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>Arbeitsmarktzulasssung</ListParagraph>
                </List>
              </ListWrapper>
            </Header>
          </Item>
          <Linie />
          <Item>
            <Zahl>4</Zahl>
            <CircleFour />
            <BlueTriangleFour
              isOpenFour={isOpenFour}
              onClick={() => setIsOpenFour(!isOpenFour)}
            />
            <Header>
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
              <ListWrapper style={{ display: isOpenFour ? "block" : "none" }}>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Das beschleunigte Fachkräfteverfahren
                  </ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Aufenthaltstitelbeantragung und -verlängerung
                  </ListParagraph>
                </List>
              </ListWrapper>
            </Header>
          </Item>
          <Linie />
          <Item>
            <Zahl>5</Zahl>
            <CircleFive />
            <BlueTriangleFive
              isOpenFive={isOpenFive}
              onClick={() => setIsOpenFive(!isOpenFive)}
            />
            <Header>
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
              <ListWrapper style={{ display: isOpenFive ? "block" : "none" }}>
                <List>
                  <ListPoint />
                  <ListParagraph>Grundlagen der Anerkennung</ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>Anerkennungsverfahren</ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Anerkennungsbescheid / Defizitbescheid
                  </ListParagraph>
                </List>
              </ListWrapper>
            </Header>
          </Item>
          <Linie />
          <Item>
            <Zahl>6</Zahl>
            <CircleSix />
            <BlueTriangle />
            <Header>Beantragung von Fördermitteln</Header>
          </Item>
          <Linie />
          <Item>
            <Zahl>7</Zahl>
            <CircleSeven />
            <BlueTriangleSeven
              isOpenSeven={isOpenSeven}
              onClick={() => setIsOpenSeven(!isOpenSeven)}
            />
            <Header>
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
              <ListWrapper style={{ display: isOpenSeven ? "block" : "none" }}>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    allgemeine Erfolgskriterien bei der Einstellung
                    ausländischer Fachkräfte
                  </ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>Erfahrungen und Best Practices</ListParagraph>
                </List>
              </ListWrapper>
            </Header>
          </Item>
          <Linie />
          <Item>
            <Zahl>8</Zahl>
            <CircleEight />
            <BlueTriangleEight
              isOpenEight={isOpenEight}
              onClick={() => setIsOpenEight(!isOpenEight)}
            />
            <Header>
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
              <ListWrapper style={{ display: isOpenEight ? "block" : "none" }}>
                <List>
                  <ListPoint />
                  <ListParagraph>Familiennachzug</ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>Onboarding-Prozess</ListParagraph>
                </List>
                <List>
                  <ListPoint />
                  <ListParagraph>
                    Integration der ausländischen Fachkräfte
                  </ListParagraph>
                </List>
              </ListWrapper>
            </Header>
          </Item>
          <PlaceHolder />
        </InfoText>
        <StyledDiv>
          Im Rahmen des Workshops werden alle aufgelisteten Punkte eingehend
          behandelt und gründlich erläutert. Dabei werden nicht nur die
          grundlegenden Informationen zu jedem Thema dargelegt, sondern auch die
          praktischen Erkenntnisse und Erkenntnisse auf diesem Gebiet eingeholt
          und vermittelt. So erhalten Sie nicht nur eine umfassende Übersicht
          über die verschiedenen Aspekte, sondern auch wertvolle Einblicke in
          die praktische Umsetzung und bewährte Strategien, um garantiert
          erfolgreich zu sein.
        </StyledDiv>
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
  height: 480px;
  width: 3.5px;
  background-color: black;
  z-index: 100;
  @media (max-width: 900px) {
    left: 10%;
  }

  @media (max-width: 620px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    left: 7%;
    height: 280px;
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
  width: 360px;
  margin: 50px;

  @media (max-width: 950px) {
    align-self: flex-end;
    transform: rotate(180deg);
    width: 360px;
  }

  @media (max-width: 620px) {
    width: 260px;
    margin: 40px 40px 60px 40px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

const StyledHeading = styled.h1`
  position: relative;
  font-family: Comfortaa;
  text-shadow: 1px 0 rgb(0, 0, 0);
  font-weight: 500;
  align-self: center;
  font-size: 40px;
  margin: 40px 80px 80px 80px;

  span {
    color: rgb(0, 0, 255);
    font-family: "Righteous", cursive;
    text-shadow: 0px 0 rgb(0, 0, 0);
  }
  @media (max-width: 1024px) {
    margin: 40px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: center;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 1024px) {
    align-self: flex-end;
    margin: 0 30px 0 140px;
  }

  @media (max-width: 480px) {
    margin: auto;
  }
`;

const PlaceHolder = styled.div`
  height: 100px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const WorkshopLine = styled.div`
  position: absolute;
  left: -0%;
  top: 10px;
  height: 100%;
  width: 3.5px;
  background-color: black;
  z-index: 100;

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

const BlueTriangle = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: rotate(-90deg);
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleTwo = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ isOpenTwo }) =>
    isOpenTwo ? "rotate(Threeg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleThree = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ isOpenThree }) =>
    isOpenThree ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleFour = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ isOpenFour }) =>
    isOpenFour ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleFive = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ isOpenFive }) =>
    isOpenFive ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleSeven = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ isOpenSeven }) =>
    isOpenSeven ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const BlueTriangleEight = styled.span`
  width: 0;
  height: 0;
  margin-right: 20px;
  margin-top: 7px;
  border-style: solid;
  border-width: 22px 12px 0 12px;
  border-color: blue transparent transparent transparent;
  display: inline-block;
  transform: ${({ isOpenEight }) =>
    isOpenEight ? "rotate(0deg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 3px;
  }

  @media (max-width: 480px) {
    border-width: 17px 10px 0 10px;
  }
`;

const Item = styled.div`
  position: relative;
  display: flex;
  max-width: 700px;
  margin: 45px 30px 45px 40px;

  @media (max-width: 480px) {
    margin: 30px 30px 30px 30px;
  }
`;

const Header = styled.div`
  font-size: 28px;
  font-family: system-ui;
  font-weight: 500;

  @media (max-width: 1024px) {
    font-size: 23px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const ListWrapper = styled.div`
  margin-top: 20px;
`;

const List = styled.div`
  display: flex;
  margin: 10px;
`;

const ListPoint = styled.div`
  height: 10px;
  width: 10px;
  margin-top: 9px;
  border-radius: 50%;
  background-color: blue;
  margin-right: 13px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    margin-top: 6px;
  }

  @media (max-width: 480px) {
    height: 8px;
    width: 8px;
  }
`;

const ListParagraph = styled.div`
  font-size: 23px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
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

const CircleOne = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;
  @media (max-width: 480px) {
    display: none;
  }
`;

const CircleTwo = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 480px) {
    display: none;
  }
`;

const CircleThree = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 480px) {
    display: none;
  }
`;
const CircleFour = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 480px) {
    display: none;
  }
`;
const CircleFive = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 480px) {
    display: none;
  }
`;
const CircleSix = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 480px) {
    display: none;
  }
`;
const CircleSeven = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 480px) {
    display: none;
  }
`;
const CircleEight = styled.div`
  position: absolute;
  top: 5px;
  left: -48.5px;
  background-color: black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Linie = styled.div`
  width: 93%;
  height: 1px;
  background-color: rgb(102, 102, 102, 0.4);
  margin: auto;
  @media (min-width: 481px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  font-size: 20px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  max-width: 800px;
  padding: 40px;

  @media (max-width: 480px) {
    padding: 40px;
    font-size: 18px;
  }
`;
