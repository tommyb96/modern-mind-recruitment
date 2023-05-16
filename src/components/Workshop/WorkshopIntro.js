import styled from "styled-components";

import laptop from "../../assets/svg/Workshop/workshop_laptop.png";
import foto1 from "../../assets/svg/Workshop/workshop_foto_1.png";
import foto2 from "../../assets/svg/Workshop/workshop_foto_2.png";
import foto3 from "../../assets/svg/Workshop/workshop_foto_3.png";

export default function WorkshopIntro() {
  return (
    <>
      <IntroWrapper>
        <Line>
          <Circle />
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
          <Heading id="workshop">WORKSHOP</Heading>
          <LeftDiv>
            {" "}
            Sie haben festgestellt, dass die Verfügbarkeit geeigneter
            Bewerber*innen in Ihrer Region abnimmt und Sie deshalb
            beabsichtigen, auch international nach qualifizierten Fachkräften zu
            suchen. Somit ist unser Workshop genau der richtige Ansatz für Sie.
          </LeftDiv>
          <LeftDiv>
            Um die Erwerbsmigration für ausländische Fachkräfte zu erleichtern,
            hat zum 01.03.2020 die Bundesregierung mit dem
            Fachkräfteeinwanderungs<span>- </span>gesetz neue Vorraussetzungen
            geschaffen. Auf diese Bedingungen wollen wir aufbauen und unseren
            Kunden näher bringen, wie sie von diesen profitieren können.
          </LeftDiv>{" "}
          <LaptopRight src={laptop} alt="laptop" />
          <BoldText>
            {" "}
            Gemeinsam werden wir in unserem umfangreichen <span>
              Workshop
            </span>{" "}
            mit Schwerpunkt auf die Fachkräfteeinwanderung auf alle wichtigen
            und ergebnisführenden Aspekte detailliert eingehen.
          </BoldText>
          <FotosRight>
            <FotoOne src={foto1} alt="people at work" />
            <FotoTwo src={foto2} alt="people at work" />
            <FotoThree src={foto3} alt="people at work" />
          </FotosRight>
          <Foto src={foto3} alt="people at work" />
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
  top: 0%;
  height: 100%;
  width: 3.5px;
  background-color: black;
  z-index: 100;

  @media (max-width: 900px) {
    left: 15%;
  }

  @media (max-width: 480px) {
    left: 7%;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 220px;
  left: -14px;
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3.5px solid black;
  z-index: 200;
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
  top: 300px;
  left: -40px;
  z-index: 100;

  @media (max-width: 900px) {
    display: none;
  }
`;

const LaptopRight = styled.img`
  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin: 30px 0 30px 20px;
    width: 450px;
    z-index: 100;
  }

  @media (max-width: 480px) {
    width: 330px;
  }
`;

const FotosLeft = styled.div`
  position: absolute;
  top: 750px;
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
  @media (min-width: 901px) {
    display: none;
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin: 40px 0 70px 100px;
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
  @media (min-width: 501px) {
    display: none;
  }

  @media (max-width: 500px) {
    width: 250px;
    align-self: flex-start;
    margin: 40px 0 70px 100px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 880px;
  margin-top: 200px;
  margin-bottom: 200px;
  font-size: 20px;

  //media query
  @media (max-width: 900px) {
    max-width: 500px;
  }
`;

const Heading = styled.div`
  font-family: Comfortaa;
  font-size: 55px;
  text-shadow: 1px 0 rgb(0, 0, 0);
  padding: 20px;
  max-width: 420px;

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
  max-width: 420px;
  position: relative;

  @media (min-width: 410px) {
    span {
      display: none;
    }
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
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
  max-width: 420px;
  align-self: flex-end;
  span {
    color: rgb(0, 0, 255);
    font-family: Righteous;
  }

  @media (max-width: 900px) {
    align-self: flex-start;
    margin-left: 70px;
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
