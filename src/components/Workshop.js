import styled from "styled-components";
import element from "../svg/Workshop.svg";
import blue from "../svg/BlauerBall.svg";
import grün from "../svg/GrünerBall.svg";

export default function Workshop() {
  return (
    <>
      <StyledContainer id="workshop">
        <TextWrapper>
          <Element src={element} alt="background element"></Element>
          <StyledDiv>
            Sie haben festgestellt, dass die Verfügbarkeit geeigneter Bewerber
            in Ihrer Region abnimmt und Sie deshalb beabsichtigen, auch
            international nach qualifizierten Fachkräften zu suchen. Somit ist
            unser Workshop genau der richtige Ansatz für Sie.{" "}
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
            mit Schwerpunkt auf die Fachkräfteeinwanderung auf alle wichtigen
            und ergebnisführenden Aspekte detailliert eingehen.{" "}
          </BoldDiv>
        </TextWrapper>
        <StyledHeading>
          <BlueBall src={blue} alt="blue ball"></BlueBall>
          <span>Inhalt</span> des Workshops: Beschäftigung ausländischer
          Fachkräfte in Deutschland
        </StyledHeading>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  font-family: futura-pt, sans-serif;
  font-style: light;
  align-self: flex-end;
  margin: 600px 100px 100px 100px;

  @media (max-width: 800px) {
    margin: 0;
  }
`;

const Element = styled.img`
  position: absolute;
  z-index: -1;
  top: -110%;
  right: 40%;
  width: 80vw;
  opacity: 0.8;

  @media (max-width: 1280px) {
    right: 20%;
  }
  @media (max-width: 1024px) {
    right: 0%;
  }
  @media (max-width: 800px) {
    /* position: relative; */
    display: none;
  }
`;

const StyledDiv = styled.div`
  font-size: 20px;
  padding: 40px;
  max-width: 800px;
  @media (max-width: 1024px) {
    margin: 5%;
  }
  @media (max-width: 480px) {
    margin: 3%;
  }
`;

const BoldDiv = styled.div`
  font-weight: 500;
  font-style: normal;
  padding: 40px;
  font-size: 30px;
  max-width: 800px;

  span {
    color: rgb(0, 0, 255);
    font-family: "Righteous", cursive;
  }
  @media (max-width: 1024px) {
    margin: 5%;
  }
  @media (max-width: 480px) {
    margin: 3%;
  }
`;

const StyledHeading = styled.h1`
  position: relative;
  font-family: futura-pt, sans-serif;
  font-style: bold;
  align-self: center;
  font-size: 40px;
  margin-top: 100px;
  padding: 80px;

  span {
    color: rgb(0, 0, 255);
    font-family: "Righteous", cursive;
  }
`;

const BlueBall = styled.img`
  position: absolute;
  z-index: -1;
  width: 400px;
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
