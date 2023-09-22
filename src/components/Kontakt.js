import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";
import waves from "../../src/assets/svg/AboutUs/about_us_waves.png";
import tom from "../../src/assets/svg/Kontakt/kontakt-tom.png";
import telefon from "../../src/assets/svg/Kontakt/kontakt-telefon.svg";
import mail from "../../src/assets/svg/Kontakt/kontakt-mail.svg";

const Kontakt = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/.test(email);
  };

  useEffect(() => {
    const hasErrors =
      name.length <= 5 || !validateEmail(email) || message.length <= 10;

    setError(hasErrors);
  }, [name, email, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length === 5 || message.length === 10 || !validateEmail(email)) {
      setError(true);
    }

    if (name && message) {
      emailjs
        .sendForm(
          "service_9ie47qv",
          "template_n0uzten",
          form.current,
          "xGIeKddPHpBg0KSt6"
        )
        .then(
          (result) => {
            console.log(result.text);
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
              window.location.reload(); // Reload the page
            }, 3500); // Set timeout to hide the success message after 3.5 seconds and then reload the page
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setError(false);
    }
  };

  return (
    <>
      <Waves src={waves} alt="waves" id="kontakt"></Waves>
      <GreenWrapper>
        <Table>
          <tr>
            <Heading colSpan={2}>kontakt</Heading>
          </tr>
          <tr>
            <LeftDiv rowSpan={6}>
              Sind Sie in der aktuellen Personalbeschaffung auf der Suche nach
              hochqualifizierten Fachkräften aus Nicht-EU-Ländern, um Ihre
              offenen Stellen zu besetzen und Ihr Unternehmen auf das nächste
              Level zu heben? Wir laden Sie herzlich dazu ein, von unserem
              Angebot für ein kostenloses Erstgespräch Gebrauch zu machen. In
              diesem Gespräch haben Sie die Gelegenheit, Ihre spezifischen
              Anforderungen und Bedürfnisse im Detail zu besprechen. <br />{" "}
              <br />{" "}
              <Link to="https://calendly.com/modern-mind-recruitment/45min?month=2023-09">
                <Button>Erstgespräch vereinbaren </Button>
              </Link>{" "}
              <br /> <br />
              Alternativ dazu steht Ihnen unser Kontaktformular zur Verfügung,
              über das Sie uns eine detaillierte Anfrage senden können. Unsere
              Motivation ist hoch, und wir freuen uns darauf, mit Ihnen
              gemeinsam daran zu arbeiten, die idealen Fachkräfte für Ihr
              Unternehmen zu finden. Ihr Erfolg ist für uns von großer
              Bedeutung, und wir sind voller Entschlossenheit, Sie auf diesem
              Weg bestmöglich zu unterstützen und zum Gelingen Ihres
              Unternehmens beizutragen.
            </LeftDiv>
            <TomWrapper>
              <Tom src={tom} alt="tom"></Tom>
            </TomWrapper>
          </tr>
          <tr>
            <BoldDiv>Ihr Ansprechpartner</BoldDiv>
          </tr>
          <tr>
            <Name>Tom Behrisch</Name>
          </tr>
          <tr>
            <Position>Geschäftsführer</Position>
          </tr>
          <tr>
            <td>
              <StyledLinkTelefon
                style={{
                  textDecoration: "none",
                  color: "white",
                  opacity: "0.8",
                }}
                href="tel:+4915202112164"
              >
                +49 152 0211 21 64
              </StyledLinkTelefon>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <StyledLinkMail
                style={{
                  textDecoration: "none",
                  color: "white",
                  opacity: "0.8",
                }}
                href="mailto:info@modernmindrecruitment.com"
              >
                info@modernmindrecruitment.com
              </StyledLinkMail>
            </td>
          </tr>
        </Table>
        <HiddenTable>
          <tr>
            <Heading>kontakt</Heading>
          </tr>
          <tr>
            <LeftDiv>
              {" "}
              Sind Sie in der aktuellen Personalbeschaffung auf der Suche nach
              hochqualifizierten Fachkräften aus Nicht-EU-Ländern, um Ihre
              offenen Stellen zu besetzen und Ihr Unternehmen auf das nächste
              Level zu heben? Wir laden Sie herzlich dazu ein, von unserem
              Angebot für ein kostenloses Erstgespräch Gebrauch zu machen. In
              diesem Gespräch haben Sie die Gelegenheit, Ihre spezifischen
              Anforderungen und Bedürfnisse im Detail zu besprechen.
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              <Link to="https://calendly.com/modern-mind-recruitment/45min?month=2023-09">
                <Button>Erstgespräch vereinbaren </Button>
              </Link>
            </LeftDiv>
          </tr>
          <tr>
            <LeftDiv>
              Alternativ dazu steht Ihnen unser Kontaktformular zur Verfügung,
              über das Sie uns eine detaillierte Anfrage senden können. Unsere
              Motivation ist hoch, und wir freuen uns darauf, mit Ihnen
              gemeinsam daran zu arbeiten, die idealen Fachkräfte für Ihr
              Unternehmen zu finden. Ihr Erfolg ist für uns von großer
              Bedeutung, und wir sind voller Entschlossenheit, Sie auf diesem
              Weg bestmöglich zu unterstützen und zum Gelingen Ihres
              Unternehmens beizutragen.
            </LeftDiv>
          </tr>
          <tr>
            <BoldDiv>Ihr Ansprechpartner</BoldDiv>
          </tr>
          <tr>
            <Name>Tom Behrisch</Name>
          </tr>
          <tr>
            <Position>Geschäftsführer</Position>
          </tr>
          <tr>
            <td>
              {" "}
              <StyledLinkTelefon
                style={{
                  textDecoration: "none",
                  color: "white",
                  opacity: "0.8",
                }}
                href="tel:+4915202112164"
              >
                +49 152 0211 21 64
              </StyledLinkTelefon>
            </td>
          </tr>
          <tr>
            <td>
              <StyledLinkMail
                style={{
                  textDecoration: "none",
                  color: "white",
                  opacity: "0.8",
                }}
                href="mailto:info@modernmindrecruitment.com"
              >
                info@modernmindrecruitment.com
              </StyledLinkMail>
            </td>
          </tr>{" "}
          <tr>
            {" "}
            <TomWrapper>
              <Tom src={tom} alt="tom"></Tom>
            </TomWrapper>
          </tr>
        </HiddenTable>
        <FormContainer ref={form} onSubmit={sendEmail}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            name="name"
          />
          {error && name.length <= 5 ? (
            <ErrorMessage>bitte Namen eingeben</ErrorMessage>
          ) : (
            ""
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-Mail"
            name="email"
          />
          {error && !validateEmail(email) ? (
            <ErrorMessage>bitte vollständige Email eingeben</ErrorMessage>
          ) : (
            ""
          )}
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            cols="30"
            rows="10"
          />
          {error && message.length <= 10 ? (
            <ErrorMessage>bitte Nachricht eingeben</ErrorMessage>
          ) : (
            ""
          )}
          <StyledButton
            type="submit"
            style={{ backgroundColor: error ? "" : "rgb(148,201,115)" }}
          >
            Senden
          </StyledButton>
        </FormContainer>
      </GreenWrapper>
      {showSuccessMessage && (
        <SuccessMessageContainer>
          <SuccessMessage>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 54 54">
              <circle
                className="checkmark-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
            <h2>Vielen Dank!</h2>
          </SuccessMessage>
        </SuccessMessageContainer>
      )}
    </>
  );
};

export default Kontakt;

const Waves = styled.img`
  width: 100vw;
`;

const GreenWrapper = styled.div`
  background-color: rgba(0, 167, 155);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`;

const Table = styled.table`
  position: relative;
  border-collapse: collapse;
  width: 1350px;
  margin: auto;
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
  font-size: 53px;
  text-transform: uppercase;
  text-shadow: 1px 0 rgb(0, 0, 0);
  text-align: start;
  padding-bottom: 40px;

  @media (max-width: 1400px) {
    padding-left: 40px;
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
  color: white;
  opacity: 0.8;

  @media (max-width: 1400px) {
    padding-left: 40px;
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
    padding-bottom: 30px;
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: rgb (255, 255, 255);
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: rgb (255, 255, 255, 0.5);
  }
`;

const TomWrapper = styled.td`
  display: flex;
`;

const Tom = styled.img`
  width: 350px;
  margin: auto;
  @media (max-width: 900px) {
    margin-top: 40px;
  }
  @media (max-width: 480px) {
    width: 280px;
  }
`;

const BoldDiv = styled.td`
  font-weight: bold;
  font-size: 33px;
  color: white;
  opacity: 0.8;
  padding-left: 70px;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 50%;

  @media (max-width: 1400px) {
    padding-right: 40px;
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
    font-size: 26px;
    padding-top: 30px;
  }
`;

const Name = styled.td`
  color: white;
  opacity: 0.8;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 70px;

  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
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
  }
`;

const Position = styled.td`
  color: white;
  opacity: 0.8;
  padding-left: 70px;
  padding-bottom: 30px;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
  }

  @media (max-width: 900px) {
    padding-left: 120px;
    padding-bottom: 20px;
  }

  @media (max-width: 700px) {
    padding-left: 70px;
  }

  @media (max-width: 480px) {
    padding-left: 30px;
    padding-right: 20px;
    padding-bottom: 10px;
  }
`;

const Telefon = styled.img`
  width: 40px;
  margin-right: 20px;
`;

const Mail = styled.img`
  width: 40px;
  margin-right: 20px;
`;

const StyledLinkTelefon = styled.a`
  text-decoration: none;
  padding-left: 70px;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
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
  }
`;

const StyledLinkMail = styled.a`
  text-decoration: none;
  padding-left: 70px;
  margin-bottom: 70px;
  @media (max-width: 1400px) {
    padding-left: 40px;
    padding-right: 50px;
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
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 100px;
  margin-bottom: 150px;
  padding: 40px 40px 30px 40px;
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 60px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  input {
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    width: 100%;
    align-self: center;
  }

  textarea {
    padding: 15px;
    margin-bottom: 15px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    width: 100%;
    align-self: center;
    resize: none;
  }

  @media (max-width: 900px) {
    margin-top: 50px;
  }

  @media (max-width: 600px) {
    width: 90%;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px 20px 20px;
  }
`;

const StyledButton = styled.button`
  font-family: system-ui;
  font-weight: normal;
  padding: 15px 12px 15px 12px;
  margin-top: 15px;
  align-self: center;
  border: none;
  border-radius: 30px;
  font-size: 22px;
  width: 60%;
  background-color: rgb(255, 255, 255, 0.8);
  color: black;

  @media (hover: hover) {
    &:hover {
      background-color: rgb(255, 255, 255);
    }
  }
`;

const checkmarkAnimation = keyframes`
  0% {
    stroke-dashoffset: 48;
    transform: rotate(0deg);
  }
  50% {
    stroke-dashoffset: 0;
    transform: rotate(0deg);
  }
  100% {
    stroke-dashoffset: 0;
    transform: rotate(360deg);
  }
`;

const SuccessMessageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 24px;
    margin-top: 30px;
    font-weight: normal;
    font-family: Arial, Helvetica, sans-serif;
    opacity: 0.8;
  }

  svg {
    width: 110px;
    height: 100px;
    stroke: rgb(148, 201, 115);
    stroke-width: 4;
    stroke-dasharray: 45;
    stroke-dashoffset: 45;
    animation: ${checkmarkAnimation} 1.5s ease-in-out forwards;
    animation-fill-mode: forwards;
  }
`;

const ErrorMessage = styled.label`
  color: rgb(255, 255, 255, 0.7);
  margin: 0 0 10px 10px;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const StyledDiv = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  font-weight: 500;
  font-size: 45px;
  max-width: 550px;
  margin: 350px 30px 20px 250px;
  span {
    font-family: Righteous;
    color: rgb(0, 167, 155);
  }

  @media (max-width: 1300px) {
    margin: 350px 30px 10px 200px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const HiddenTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (min-width: 901px) {
    display: none;
  }
`;
