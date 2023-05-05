import styled from "styled-components";
import React, { useState } from "react";
import blue from "../../svg/Workshop/blue_ball.svg";

export default function Workshop() {
  return (
    <>
      <TextWrapper id="workshop">
        <StyledDiv>
          Sie haben festgestellt, dass die Verfügbarkeit geeigneter Bewerber in
          Ihrer Region abnimmt und Sie deshalb beabsichtigen, auch international
          nach qualifizierten Fachkräften zu suchen. Somit ist unser Workshop
          genau der richtige Ansatz für Sie.{" "}
        </StyledDiv>
        <StyledDiv>
          Um die Erwerbsmigration für ausländische Fachkräfte zu erleichtern,
          hat zum 01.03.2020 die Bundesregierung mit dem
          Fachkräfteeinwanderungsgesetz neue Vorraussetzungen geschaffen. Auf
          diese Bedingungen wollen wir aufbauen und unseren Kunden näher
          bringen, wie sie von diesen profitieren können.{" "}
        </StyledDiv>
        <BoldDiv>
          Gemeinsam werden wir in unserem umfangreichen <span>Workshop</span>{" "}
          mit Schwerpunkt auf die Fachkräfteeinwanderung auf alle wichtigen und
          ergebnisführenden Aspekte detailliert eingehen.{" "}
        </BoldDiv>
      </TextWrapper>
      <StyledHeading>
        <BlueBall src={blue} alt="blue ball"></BlueBall>
        <span>Inhalt</span> des Workshops: Beschäftigung ausländischer
        Fachkräfte in Deutschland
      </StyledHeading>
      <SliderWrapper>
        <Card>
          <Number>1</Number>
          <Title>
            Allgemeine Bestimmungen für eine Beschäftigung ausländischer
            Fachkräfte
          </Title>
          <Description>
            <li>
              Grundlagen über die Beschäftigung internationaler Fachkräfte
            </li>
          </Description>
        </Card>
        <Card>
          <Number>2</Number>
          <Title>Visum- und Aufenthalts- regelungen</Title>
          <Description>
            <li>Einreisevisum und Aufenthaltstitel</li>
            <li>Fachkräfte mit Berufsausbildung</li>
            <li>Fachkräfte mit akademischer Ausbildung</li>
            <li>Regelung für ausländische Auszubildende</li>
          </Description>
        </Card>
        <Card>
          <Number>3</Number>
          <Title>Beteiligung der Bundesagnetur für Arbeit</Title>{" "}
          <Description>
            <li>Zustimmung der Bundesagentur für Arbeit</li>
            <li>Arbeitsmarktzulassung</li>
          </Description>
        </Card>
        <Card>
          <Number>4</Number>
          <Title>Ausländerbehörde</Title>
          <Description>
            <li>Das beschleunigte Fachkräfteverfahren</li>
            <li>Aufenthaltstitelbeantragung und -verlängerung</li>
          </Description>
        </Card>
        <Card>
          <Number>5</Number>
          <Title>Anerkennung ausländischer Berufsqualifikationen</Title>
          <Description>
            <li>Grundlagen der Anerkennung</li>
            <li>Anerkennungsverfahren</li>
            <li>volle und teilweise anerkannte Gleichwertigkeit</li>
            <li>Qualifizierungsmaßnahmen</li>
          </Description>
        </Card>
        <Card>
          <Number>6</Number>
          <Title>Fördermittel</Title>
        </Card>
        <Card>
          <Number>7</Number>
          <Title>Erfolgskriterien</Title>
          <Description>
            <li>
              allgemeine Erfolgskriterien bei der Einstellung ausländischer
              Fachkräfte
            </li>
            <li>Erfahrungen und Best Practices</li>
          </Description>
        </Card>
        <Card>
          <Number>8</Number>
          <Title>Sozialer Aspekt</Title>
          <Description>
            <li>Familiennachzug</li>
            <li>Onboarding-Prozess</li>
            <li>Integration ausländischer Fachkräfte</li>
          </Description>
        </Card>
      </SliderWrapper>
    </>
  );
}

const TextWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: futura-pt, sans-serif;
  font-style: light;
  align-self: flex-end;
  margin: 100px;
  @media (max-width: 1024px) {
    margin: 5%;
    align-self: start;
  }
`;

const StyledDiv = styled.div`
  font-size: 20px;
  padding: 20px;
  max-width: 600px;
`;

const BoldDiv = styled.div`
  font-family: system-ui;
  color: black;
  font-weight: 500;
  padding: 20px;
  font-size: 30px;
  max-width: 600px;

  span {
    color: rgb(0, 0, 255);
    font-family: "Righteous", cursive;
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;

const StyledHeading = styled.h1`
  position: relative;
  font-family: Comfortaa;
  text-shadow: 1px 0 rgb(0, 0, 0);
  font-weight: 500;
  align-self: center;
  font-size: 40px;
  margin-top: 100px;
  padding: 80px;

  span {
    color: rgb(0, 0, 255);
    font-family: "Righteous", cursive;
    text-shadow: 0px 0 rgb(0, 0, 0);
  }
  @media (max-width: 1024px) {
    margin: 5%;
    padding: 40px;
  }
`;

const BlueBall = styled.img`
  position: absolute;
  z-index: -1;
  width: 400px;
  max-width: 100vw;
  top: -60%;
  right: 8%;

  @media (max-width: 768px) {
    width: 300px;
    top: -20%;
  }
  @media (max-width: 480px) {
    width: 250px;
    top: -10%;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

const Card = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: rgb(102, 102, 102, 0.1);
  border-radius: 120px;
  /* border: 6px solid rgb(63, 167, 243, 0.2); */
  box-shadow: 0 0 50px rgba(0, 0, 255, 0.3);
  height: 620px;
  width: 450px;
  margin: 200px 50px 50px 50px;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 50px rgba(0, 0, 255, 0.5);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    margin: 200px 20px 20px 20px;

    width: 300px;
    border-radius: 50px;
    box-shadow: 0 0 30px rgba(0, 0, 255, 0.3);
  }
`;

const Number = styled.div`
  position: absolute;
  top: -30%;
  left: 36%;
  color: rgb(0, 0, 255);
  font-family: "Righteous", cursive;
  font-size: 250px;

  @media (max-width: 768px) {
    font-size: 180px;
    top: -20%;
  }
`;

const Title = styled.h1`
  font-family: system-ui;
  font-size: 40px;
  color: rgb(0, 0, 255);
  font-weight: 500;
  align-self: center;
  text-align: center;
  margin: 100px 20px 20px 20px;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 25px;
    margin: 70px 5px 5px 5px;
  }
`;

const Description = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  margin: 10px 40px 40px 40px;
  line-height: 30px;

  li {
    padding: 5px;
  }

  li::marker {
    color: blue;
    font-size: 30px;
  }

  @media (max-width: 786px) {
    margin: 10px 10px 10px 10px;
    hyphens: auto;
  }
`;
